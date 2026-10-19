<?php
/**
 * Marketplace webhook topics for `wcvendors/v1`.
 *
 * Registers the vendor, commission and vendor order webhook topics on top of
 * the scaffold bridge, with adapters that normalize the source hooks to an
 * id-first `wcv_*` action and payload builders that reuse the REST controllers.
 *
 * @package WCVendors/RestApi
 * @since   2.7.3
 */

defined( 'ABSPATH' ) || exit;

use Automattic\WooCommerce\Utilities\OrderUtil;

/**
 * Class WCV_Webhook_Topics.
 */
class WCV_Webhook_Topics {

    /**
     * Vendor IDs with a saved store setting this request.
     *
     * @var array
     */
    private static $updated_vendor_ids = array();

    /**
     * Vendor IDs whose vendor_status was saved without a status transition.
     *
     * @var array
     */
    private static $status_vendor_ids = array();

    /**
     * Whether the debounced vendor.updated shutdown callback is registered.
     *
     * @var bool
     */
    private static $updated_shutdown_registered = false;

    /**
     * User IDs flagged as a vendor at delete_user, pending deleted_user.
     *
     * @var array
     */
    private $deleting_vendor_ids = array();

    /**
     * Vendor IDs that already fired vendor.created this request.
     *
     * @var array
     */
    private $created_vendor_ids = array();

    /**
     * Constructor.
     */
    public function __construct() {
        add_filter( 'wcv_webhook_resources', array( $this, 'add_resources' ) );
        add_filter( 'wcv_webhook_events', array( $this, 'add_events' ) );
        add_filter( 'wcv_webhook_topic_labels', array( $this, 'add_topic_labels' ) );
        add_filter( 'wcv_webhook_topic_hooks', array( $this, 'add_topic_hooks' ), 10, 2 );

        add_action( 'wcvendors_application_submitted', array( $this, 'on_application_submitted' ) );
        add_action( 'wcvendors_application_submited', array( $this, 'on_application_submitted' ) );
        add_action( 'wcvendors_approve_vendor', array( $this, 'on_vendor_approved' ) );
        add_action( 'wcvendors_deny_vendor', array( $this, 'on_vendor_denied' ) );
        add_action( 'wcvendors_vendor_settings_save', array( $this, 'on_vendor_settings_save' ), 10, 3 );
        // Priority 20 runs after the Pro save at 10, which exits for a vendor application.
        add_action( 'wcvendors_store_settings_saved', array( $this, 'on_store_settings_saved' ), 20 );
        add_action( 'wcvendors_shop_settings_admin_saved', array( $this, 'on_store_settings_saved' ) );
        add_action( 'wcvendors_update_admin_user', array( $this, 'on_store_settings_saved' ) );
        add_action( 'wcvendors_set_vendor_active', array( $this, 'on_vendor_status_transition' ) );
        add_action( 'wcvendors_set_vendor_inactive', array( $this, 'on_vendor_status_transition' ) );
        add_action( 'delete_user', array( $this, 'on_delete_user' ) );
        add_action( 'deleted_user', array( $this, 'on_deleted_user' ) );
        add_action( 'wcvendors_commissions_inserted', array( $this, 'on_commissions_inserted' ) );
        add_action( 'woocommerce_order_status_changed', array( $this, 'on_order_status_changed' ), 10, 4 );
        add_action( 'woocommerce_before_delete_order', array( $this, 'on_vendor_order_before_delete' ), 10, 2 );
        add_action( 'woocommerce_trash_order', array( $this, 'on_vendor_order_trashed' ) );

        add_filter( 'wcv_webhook_payload_vendor', array( $this, 'build_vendor_payload' ), 10, 3 );
        add_filter( 'wcv_webhook_payload_commission', array( $this, 'build_commission_payload' ), 10, 3 );
        add_filter( 'wcv_webhook_payload_vendor_order', array( $this, 'build_vendor_order_payload' ), 10, 3 );
    }

    /**
     * Register the resources this class owns.
     *
     * @param array $resources Resource slugs.
     * @return array
     */
    public function add_resources( $resources ) {
        return array_merge( (array) $resources, array( 'vendor', 'commission', 'vendor_order' ) );
    }

    /**
     * Register the events this class owns.
     *
     * @param array $events Event slugs.
     * @return array
     */
    public function add_events( $events ) {
        return array_merge(
            (array) $events,
            array( 'created', 'approved', 'denied', 'activated', 'deactivated', 'updated', 'deleted' )
        );
    }

    /**
     * Register the topic labels for the admin dropdown.
     *
     * @param array $labels Topic slug => label.
     * @return array
     */
    public function add_topic_labels( $labels ) {
        return array_merge(
            (array) $labels,
            array(
                'vendor.created'       => __( 'Vendor application submitted', 'wc-vendors' ),
                'vendor.approved'      => __( 'Vendor approved', 'wc-vendors' ),
                'vendor.denied'        => __( 'Vendor denied', 'wc-vendors' ),
                'vendor.activated'     => __( 'Vendor activated', 'wc-vendors' ),
                'vendor.deactivated'   => __( 'Vendor deactivated', 'wc-vendors' ),
                'vendor.updated'       => __( 'Vendor updated', 'wc-vendors' ),
                'vendor.deleted'       => __( 'Vendor deleted', 'wc-vendors' ),
                'commission.created'   => __( 'Commission created', 'wc-vendors' ),
                'vendor_order.created' => __( 'Vendor order created', 'wc-vendors' ),
                'vendor_order.updated' => __( 'Vendor order updated', 'wc-vendors' ),
                'vendor_order.deleted' => __( 'Vendor order deleted', 'wc-vendors' ),
            )
        );
    }

    /**
     * Register the action hooks that fire each topic.
     *
     * @param array      $topic_hooks Topic slug => array of action hook names.
     * @param WC_Webhook $webhook     The webhook.
     * @return array
     */
    public function add_topic_hooks( $topic_hooks, $webhook ) { // phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.FoundAfterLastUsed
        return array_merge(
            (array) $topic_hooks,
            array(
                'vendor.created'       => array( 'wcv_vendor_created' ),
                'vendor.approved'      => array( 'wcv_vendor_approved' ),
                'vendor.denied'        => array( 'wcv_vendor_denied' ),
                'vendor.activated'     => array( 'wcvendors_set_vendor_active' ),
                'vendor.deactivated'   => array( 'wcvendors_set_vendor_inactive' ),
                'vendor.updated'       => array( 'wcv_vendor_updated' ),
                'vendor.deleted'       => array( 'wcv_vendor_deleted' ),
                'commission.created'   => array( 'wcv_commission_created' ),
                'vendor_order.created' => array( 'woocommerce_vendor_order_created' ),
                'vendor_order.updated' => array( 'wcv_vendor_order_updated' ),
                'vendor_order.deleted' => array( 'wcv_vendor_order_deleted' ),
            )
        );
    }

    /**
     * Normalize a vendor application to an id-first action, once per vendor.
     *
     * Both source hooks can fire in the same request.
     *
     * @param int $user_id The user ID.
     */
    public function on_application_submitted( $user_id ) {
        $id = (int) $user_id;

        if ( ! $id || isset( $this->created_vendor_ids[ $id ] ) ) {
            return;
        }

        $this->created_vendor_ids[ $id ] = true;
        do_action( 'wcv_vendor_created', $id );
    }

    /**
     * Normalize a vendor approval to an id-first action.
     *
     * @param WP_User $user The approved vendor.
     */
    public function on_vendor_approved( $user ) {
        do_action( 'wcv_vendor_approved', $user->ID );
    }

    /**
     * Normalize a vendor denial to an id-first action.
     *
     * @param WP_User $user The denied vendor.
     */
    public function on_vendor_denied( $user ) {
        do_action( 'wcv_vendor_denied', $user->ID );
    }

    /**
     * Collect a vendor settings save, debounced to one event per request.
     *
     * The source hook fires once per changed field, so this collects the
     * vendor ID and fires the normalized action once, on shutdown. A status
     * change is held back, and dropped if a status transition action fires.
     *
     * @param int    $vendor_id Vendor ID.
     * @param string $field     The field that changed.
     * @param mixed  $value     The new field value.
     */
    public function on_vendor_settings_save( $vendor_id, $field, $value ) { // phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.FoundAfterLastUsed
        if ( 'vendor_status' === $field ) {
            self::$status_vendor_ids[ (int) $vendor_id ] = true;
        } else {
            self::$updated_vendor_ids[ (int) $vendor_id ] = true;
        }

        $this->register_vendor_updated_flush();
    }

    /**
     * Collect a store settings save from a vendor dashboard or the user edit screen.
     *
     * @param int $vendor_id Vendor ID.
     */
    public function on_store_settings_saved( $vendor_id ) {
        $vendor_id = (int) $vendor_id;

        // A vendor application save is not a store update.
        if ( isset( $_POST['_wcv_vendor_application_id'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Missing -- the source action already checked the nonce.
            return;
        }

        if ( ! WCV_Vendors::is_vendor( $vendor_id ) && ! WCV_Vendors::is_pending( $vendor_id ) ) {
            return;
        }

        self::$updated_vendor_ids[ $vendor_id ] = true;
        $this->register_vendor_updated_flush();
    }

    /**
     * Register the shutdown flush once per request.
     */
    protected function register_vendor_updated_flush() {
        if ( self::$updated_shutdown_registered ) {
            return;
        }

        self::$updated_shutdown_registered = true;
        // Priority 9 runs before wc_webhook_execute_queue, so the delivery is not lost.
        add_action( 'shutdown', array( $this, 'fire_vendor_updated' ), 9 );
    }

    /**
     * Drop a held status change, because it fires vendor.activated or vendor.deactivated.
     *
     * @param int $vendor_id Vendor ID.
     */
    public function on_vendor_status_transition( $vendor_id ) {
        unset( self::$status_vendor_ids[ (int) $vendor_id ] );
    }

    /**
     * Fire the debounced vendor.updated event, once per vendor ID.
     */
    public function fire_vendor_updated() {
        foreach ( array_keys( self::$updated_vendor_ids + self::$status_vendor_ids ) as $vendor_id ) {
            do_action( 'wcv_vendor_updated', $vendor_id );
        }
    }

    /**
     * Flag a user about to be deleted as a vendor, so deleted_user can fire.
     *
     * @param int $id User ID.
     */
    public function on_delete_user( $id ) {
        if ( WCV_Vendors::is_vendor( $id ) ) {
            $this->deleting_vendor_ids[ (int) $id ] = true;
        }
    }

    /**
     * Fire vendor.deleted for a user flagged at delete_user.
     *
     * @param int $id User ID.
     */
    public function on_deleted_user( $id ) {
        if ( empty( $this->deleting_vendor_ids[ (int) $id ] ) ) {
            return;
        }

        unset( $this->deleting_vendor_ids[ (int) $id ] );
        do_action( 'wcv_vendor_deleted', (int) $id );
    }

    /**
     * Fire commission.created for each inserted commission row.
     *
     * @param array $orders The inserted commission rows.
     */
    public function on_commissions_inserted( $orders ) {
        foreach ( (array) $orders as $row ) {
            if ( ! empty( $row['id'] ) ) {
                do_action( 'wcv_commission_created', (int) $row['id'] );
            }
        }
    }

    /**
     * Fire vendor_order.updated when a vendor sub-order changes status.
     *
     * A new order's first transition has an empty previous status. That is the
     * vendor_order.created event, so it is skipped here.
     *
     * @param int      $id    Order ID.
     * @param string   $from  Previous status.
     * @param string   $to    New status.
     * @param WC_Order $order The order object.
     */
    public function on_order_status_changed( $id, $from, $to, $order ) { // phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.FoundAfterLastUsed
        if ( '' === $from ) {
            return;
        }

        if ( $order && WC_Order_Vendor::ORDER_TYPE === $order->get_type() ) {
            do_action( 'wcv_vendor_order_updated', $id );
        }
    }

    /**
     * Fire vendor_order.deleted when a vendor sub-order is trashed.
     *
     * @param int $id Order ID.
     */
    public function on_vendor_order_trashed( $id ) {
        if ( has_action( 'wcv_vendor_order_deleted' ) && WC_Order_Vendor::ORDER_TYPE === OrderUtil::get_order_type( $id ) ) {
            do_action( 'wcv_vendor_order_deleted', $id );
        }
    }

    /**
     * Fire vendor_order.deleted when a vendor sub-order is deleted for good.
     *
     * An order already in the trash fired the event when it was trashed.
     *
     * @param int      $id    Order ID.
     * @param WC_Order $order The order object.
     */
    public function on_vendor_order_before_delete( $id, $order ) {
        if ( ! has_action( 'wcv_vendor_order_deleted' ) || ! $order instanceof WC_Order ) {
            return;
        }

        if ( WC_Order_Vendor::ORDER_TYPE === $order->get_type() && 'trash' !== $order->get_status() ) {
            do_action( 'wcv_vendor_order_deleted', $id );
        }
    }

    /**
     * Build the vendor webhook payload.
     *
     * @param array $payload     The current payload.
     * @param int   $resource_id The vendor ID.
     * @param int   $webhook_id  The webhook ID.
     * @return array
     */
    public function build_vendor_payload( $payload, $resource_id, $webhook_id ) { // phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.FoundAfterLastUsed
        if ( isset( $payload['id'] ) ) {
            return $payload;
        }

        $controller = new WCV_REST_Vendors_Controller();

        return $controller->get_webhook_payload( $resource_id );
    }

    /**
     * Build the commission webhook payload.
     *
     * @param array $payload     The current payload.
     * @param int   $resource_id The commission record ID.
     * @param int   $webhook_id  The webhook ID.
     * @return array
     */
    public function build_commission_payload( $payload, $resource_id, $webhook_id ) { // phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.FoundAfterLastUsed
        if ( isset( $payload['id'] ) ) {
            return $payload;
        }

        $controller = new WCV_REST_Commissions_Controller();

        return $controller->get_webhook_payload( $resource_id );
    }

    /**
     * Build the vendor order webhook payload.
     *
     * @param array $payload     The current payload.
     * @param int   $resource_id The order ID.
     * @param int   $webhook_id  The webhook ID.
     * @return array
     */
    public function build_vendor_order_payload( $payload, $resource_id, $webhook_id ) { // phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.FoundAfterLastUsed
        if ( isset( $payload['id'] ) ) {
            return $payload;
        }

        $controller = new WCV_REST_Orders_Controller();

        return $controller->get_webhook_payload( $resource_id );
    }
}
