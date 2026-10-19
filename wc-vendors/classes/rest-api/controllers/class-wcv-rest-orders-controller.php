<?php
/**
 * Order controller for the public `wcvendors/v1` REST API.
 *
 * Serves read-only vendor order reads. The owner reads every vendor order. A
 * vendor reads only its own. Vendor identity comes from the credential, never
 * from a request parameter. Customer fields pass through the marketplace
 * capability options, so the API shows exactly what the vendor dashboard shows.
 *
 * @package WCVendors/RestApi
 * @since   2.7.3
 */

defined( 'ABSPATH' ) || exit;

/**
 * Class WCV_REST_Orders_Controller.
 */
class WCV_REST_Orders_Controller extends WCV_REST_Controller {

    /**
     * Route base.
     *
     * @var string
     */
    protected $rest_base = 'orders';

    /**
     * Stable error codes for this resource.
     */
    const ERROR_INVALID_ID = 'wcv_rest_order_invalid_id';

    /**
     * Register the routes for this controller.
     *
     * Read-only: no write method is registered.
     */
    public function register_routes() {
        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base,
            array(
                array(
                    'methods'             => WP_REST_Server::READABLE,
                    'callback'            => array( $this, 'get_items' ),
                    'permission_callback' => array( $this, 'get_items_permissions_check' ),
                    'args'                => $this->get_collection_params(),
                ),
                'schema' => array( $this, 'get_public_item_schema' ),
            )
        );

        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/(?P<id>[\d]+)',
            array(
                'args'   => array(
                    'id' => array(
                        'description'       => __( 'Unique identifier for the vendor order.', 'wc-vendors' ),
                        'type'              => 'integer',
                        'sanitize_callback' => 'absint',
                    ),
                ),
                array(
                    'methods'             => WP_REST_Server::READABLE,
                    'callback'            => array( $this, 'get_item' ),
                    'permission_callback' => array( $this, 'get_item_permissions_check' ),
                    'args'                => array(
                        'context' => $this->get_context_param( array( 'default' => 'view' ) ),
                    ),
                ),
                'schema' => array( $this, 'get_public_item_schema' ),
            )
        );
    }

    /**
     * Permission check for reading the order collection.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error
     */
    public function get_items_permissions_check( $request ) {
        $allowed = $this->gate( $request );

        if ( is_wp_error( $allowed ) ) {
            return $allowed;
        }

        // A vendor may not name another vendor in the collection filter. The
        // scope comes from the credential, so a foreign vendor_id is a forbidden
        // cross-vendor read, not a silent empty result.
        return $this->guard_vendor_filter( $request );
    }

    /**
     * Permission check for reading a single order.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error
     */
    public function get_item_permissions_check( $request ) {
        $allowed = $this->gate( $request );

        if ( is_wp_error( $allowed ) ) {
            return $allowed;
        }

        $order = $this->resolve_order( $request );

        return is_wp_error( $order ) ? $order : true;
    }

    /**
     * Refuse a collection request that names a vendor other than the caller.
     *
     * The owner may filter by any vendor. A vendor is scoped to itself, so a
     * `vendor_id` that is not its own is refused.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error
     */
    protected function guard_vendor_filter( $request ) {
        if ( $this->permissions()->is_owner() ) {
            return true;
        }

        $requested = absint( $request['vendor_id'] );

        if ( $requested && $requested !== $this->permissions()->get_scope_vendor_id() ) {
            return $this->error(
                self::ERROR_FORBIDDEN,
                __( 'You are not allowed to access this resource.', 'wc-vendors' ),
                rest_authorization_required_code()
            );
        }

        return true;
    }

    /**
     * Load the order named in the route and check the caller may read it.
     *
     * An owner may read any vendor order. A vendor reads only its own, and a
     * cross-vendor read is refused. This is the isolation gate for the single
     * order route.
     *
     * The permission callback and the handler both call this. The repeat is
     * deliberate: `wc_get_order()` reads through the object cache on the second
     * call, and the handler must not depend on the callback having run.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WC_Order_Vendor|WP_Error
     */
    protected function resolve_order( $request ) {
        $order_id = $this->requested_id( $request );
        $order    = $order_id ? wc_get_order( $order_id ) : false;

        if ( ! $order || WC_Order_Vendor::ORDER_TYPE !== $order->get_type() ) {
            return $this->error(
                self::ERROR_INVALID_ID,
                __( 'Invalid order ID.', 'wc-vendors' ),
                404
            );
        }

        $vendor_order = wcv_get_order( $order );
        $vendor_id    = (int) $vendor_order->get_vendor_id();

        // A cross-vendor order reads as not found, not as forbidden. The two
        // replies would otherwise tell a vendor which IDs belong to other
        // vendors. WooCommerce core answers the same way.
        if ( ! $this->permissions()->is_owner() && $vendor_id !== $this->permissions()->get_scope_vendor_id() ) {
            return $this->error(
                self::ERROR_INVALID_ID,
                __( 'Invalid order ID.', 'wc-vendors' ),
                404
            );
        }

        return $vendor_order;
    }

    /**
     * Get a collection of vendor orders.
     *
     * A vendor credential always reads its own orders. The scope comes from the
     * credential, so the vendor filter is forced for a vendor and honoured for
     * the owner.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response|WP_Error
     */
    public function get_items( $request ) {
        $page     = max( 1, (int) $request['page'] );
        $per_page = max( 1, (int) $request['per_page'] );

        $args = array(
            'type'    => WC_Order_Vendor::ORDER_TYPE,
            'limit'   => $per_page,
            'paged'   => $page,
            'orderby' => 'id' === $request['orderby'] ? 'ID' : 'date',
            'order'   => 'ASC' === strtoupper( (string) $request['order'] ) ? 'ASC' : 'DESC',
        );

        if ( ! empty( $request['status'] ) ) {
            $map = $this->order_status_map();

            if ( isset( $map[ $request['status'] ] ) ) {
                $args['status'] = $map[ $request['status'] ];
            }
        }

        // Owner may filter by a vendor. A vendor is always scoped to itself; the
        // permission callback already refused a foreign vendor_id.
        if ( $this->permissions()->is_owner() ) {
            if ( ! empty( $request['vendor_id'] ) ) {
                $args['wcv_vendor_id'] = absint( $request['vendor_id'] );
            }
        } else {
            $args['wcv_vendor_id'] = $this->permissions()->get_scope_vendor_id();
        }

        // Read through the helper so the wcvendors_get_vendor_orders_args and
        // wcvendors_get_vendor_orders filters apply to this endpoint too.
        $results = wcv_get_vendor_orders( $args );
        $orders  = array();

        foreach ( $results as $order ) {
            $orders[] = $this->prepare_order( $order, $request );
        }

        $total = $this->count_orders( $args );

        $response = rest_ensure_response( $orders );
        $response->header( 'X-WP-Total', $total );
        $response->header( 'X-WP-TotalPages', (int) ceil( $total / $per_page ) );

        return $response;
    }

    /**
     * Count the vendor orders a collection request matches.
     *
     * `wcv_get_vendor_orders()` builds an object per row, so it cannot run the
     * count. This repeats the query as a paginated ID query, which reads the
     * total without loading any order. The args pass through the same filter
     * the helper uses, so the count agrees with the rows.
     *
     * @param array $args The collection query args.
     * @return int
     */
    protected function count_orders( $args ) {
        /** This filter is documented in classes/includes/class-functions.php */
        $args = apply_filters( 'wcvendors_get_vendor_orders_args', $args );

        $args['limit']    = 1;
        $args['paged']    = 1;
        $args['return']   = 'ids';
        $args['paginate'] = true;

        $results = wc_get_orders( $args );

        return isset( $results->total ) ? (int) $results->total : 0;
    }

    /**
     * Get a single vendor order.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response|WP_Error
     */
    public function get_item( $request ) {
        $order = $this->resolve_order( $request );

        if ( is_wp_error( $order ) ) {
            return $order;
        }

        return rest_ensure_response( $this->prepare_order( $order, $request ) );
    }

    /**
     * Build the order payload.
     *
     * @param WC_Order_Vendor $order   The vendor order object.
     * @param WP_REST_Request $request Full details about the request.
     * @return array
     */
    protected function prepare_order( $order, $request ) {
        $data = array(
            'id'           => $order->get_id(),
            'parent_id'    => $order->get_parent_id(),
            'vendor_id'    => (int) $order->get_vendor_id(),
            'number'       => $order->get_order_number(),
            'status'       => array(
                'value'     => $order->get_status(),
                'formatted' => wc_get_order_status_name( $order->get_status() ),
            ),
            'date_created' => wc_rest_prepare_date_response( $order->get_date_created() ),
            'currency'     => $order->get_currency(),
            'total'        => wc_format_decimal( $order->get_total(), wc_get_price_decimals(), true ),
            'customer'     => (object) $this->prepare_customer( $order ),
        );

        $context = ! empty( $request['context'] ) ? $request['context'] : 'view';
        $data    = $this->filter_response_by_context( $data, $context );

        /**
         * Filter the prepared vendor order payload.
         *
         * @since 2.7.3
         *
         * @param array           $data    The prepared payload.
         * @param WC_Order_Vendor $order   The vendor order object.
         * @param WP_REST_Request $request The request.
         */
        return apply_filters( 'wcv_rest_prepare_order', $data, $order, $request );
    }

    /**
     * Get the vendor order payload for a webhook delivery.
     *
     * @param int $id Order ID.
     * @return array
     */
    public function get_webhook_payload( $id ) {
        $order = wc_get_order( $id );

        if ( ! $order || WC_Order_Vendor::ORDER_TYPE !== $order->get_type() ) {
            return array();
        }

        return $this->prepare_order( wcv_get_order( $order ), new WP_REST_Request() );
    }

    /**
     * Build the customer block, gated by the marketplace capability options.
     *
     * Customer data comes from the parent order. Each group appears only when
     * its capability option allows it. This mirrors the rule the vendor
     * dashboard uses. See WCV_Order_Controller and wcv_get_customer_info_capabilities().
     *
     * @param WC_Order_Vendor $order The vendor order object.
     * @return array
     */
    protected function prepare_customer( $order ) {
        $parent = $order->get_parent_order();
        $caps   = wcv_get_customer_info_capabilities();
        $data   = array();

        if ( ! $parent ) {
            return $data;
        }

        if ( ! empty( $caps['name'] ) ) {
            $data['first_name'] = $parent->get_billing_first_name();
            $data['last_name']  = $parent->get_billing_last_name();
        }

        // The dashboard shows the shipping name only when the billing name is
        // also allowed, so the two never disagree.
        if ( ! empty( $caps['shipping_name'] ) && ! empty( $caps['name'] ) ) {
            $data['shipping_first_name'] = $parent->get_shipping_first_name();
            $data['shipping_last_name']  = $parent->get_shipping_last_name();
        }

        if ( ! empty( $caps['billing'] ) ) {
            $data['billing'] = array(
                'company'   => $parent->get_billing_company(),
                'address_1' => $parent->get_billing_address_1(),
                'address_2' => $parent->get_billing_address_2(),
                'city'      => $parent->get_billing_city(),
                'state'     => $parent->get_billing_state(),
                'postcode'  => $parent->get_billing_postcode(),
                'country'   => $parent->get_billing_country(),
            );
        }

        if ( ! empty( $caps['shipping'] ) ) {
            $data['shipping'] = array(
                'company'   => $parent->get_shipping_company(),
                'address_1' => $parent->get_shipping_address_1(),
                'address_2' => $parent->get_shipping_address_2(),
                'city'      => $parent->get_shipping_city(),
                'state'     => $parent->get_shipping_state(),
                'postcode'  => $parent->get_shipping_postcode(),
                'country'   => $parent->get_shipping_country(),
            );
        }

        if ( ! empty( $caps['email'] ) ) {
            $data['email'] = $parent->get_billing_email();
        }

        if ( ! empty( $caps['phone'] ) ) {
            $data['phone'] = $parent->get_billing_phone();

            if ( is_callable( array( $parent, 'get_shipping_phone' ) ) ) {
                $data['shipping_phone'] = $parent->get_shipping_phone();
            }
        }

        return $data;
    }

    /**
     * Get the order schema.
     *
     * @return array
     */
    public function get_item_schema() {
        $address = array(
            'type'       => 'object',
            'context'    => array( 'view', 'edit' ),
            'readonly'   => true,
            'properties' => array(
                'company'   => $this->field( __( 'Company name.', 'wc-vendors' ), 'string', true ),
                'address_1' => $this->field( __( 'Address line 1.', 'wc-vendors' ), 'string', true ),
                'address_2' => $this->field( __( 'Address line 2.', 'wc-vendors' ), 'string', true ),
                'city'      => $this->field( __( 'City.', 'wc-vendors' ), 'string', true ),
                'state'     => $this->field( __( 'State code.', 'wc-vendors' ), 'string', true ),
                'postcode'  => $this->field( __( 'Postcode.', 'wc-vendors' ), 'string', true ),
                'country'   => $this->field( __( 'Country code.', 'wc-vendors' ), 'string', true ),
            ),
        );

        $properties = array(
            'id'           => $this->field( __( 'Unique identifier for the vendor order.', 'wc-vendors' ), 'integer', true ),
            'parent_id'    => $this->field( __( 'The parent (customer) order ID.', 'wc-vendors' ), 'integer', true ),
            'vendor_id'    => $this->field( __( 'The vendor the order belongs to.', 'wc-vendors' ), 'integer', true ),
            'number'       => $this->field( __( 'Order number.', 'wc-vendors' ), 'string', true ),
            'status'       => array(
                'description' => __( 'Order status.', 'wc-vendors' ),
                'type'        => 'object',
                'context'     => array( 'view', 'edit' ),
                'readonly'    => true,
                'properties'  => array(
                    'value'     => $this->field( __( 'Status slug.', 'wc-vendors' ), 'string', true ),
                    'formatted' => $this->field( __( 'Translated status label.', 'wc-vendors' ), 'string', true ),
                ),
            ),
            'date_created' => $this->field( __( 'The date the order was created, in RFC3339 format.', 'wc-vendors' ), 'string', true, 'date-time' ),
            'currency'     => $this->field( __( 'Order currency code.', 'wc-vendors' ), 'string', true ),
            'total'        => $this->field( __( 'Order total for the vendor.', 'wc-vendors' ), 'string', true ),
            'customer'     => array(
                'description' => __( 'Customer details. Each field appears only when the marketplace allows it.', 'wc-vendors' ),
                'type'        => 'object',
                'context'     => array( 'view', 'edit' ),
                'readonly'    => true,
                'properties'  => array(
                    'first_name'          => $this->field( __( 'Customer billing first name.', 'wc-vendors' ), 'string', true ),
                    'last_name'           => $this->field( __( 'Customer billing last name.', 'wc-vendors' ), 'string', true ),
                    'shipping_first_name' => $this->field( __( 'Customer shipping first name.', 'wc-vendors' ), 'string', true ),
                    'shipping_last_name'  => $this->field( __( 'Customer shipping last name.', 'wc-vendors' ), 'string', true ),
                    'billing'             => $address,
                    'shipping'            => $address,
                    'email'               => $this->field( __( 'Customer email address.', 'wc-vendors' ), 'string', true, 'email' ),
                    'phone'               => $this->field( __( 'Customer billing phone.', 'wc-vendors' ), 'string', true ),
                    'shipping_phone'      => $this->field( __( 'Customer shipping phone.', 'wc-vendors' ), 'string', true ),
                ),
            ),
        );

        return array(
            '$schema'    => 'http://json-schema.org/draft-04/schema#',
            'title'      => 'vendor-order',
            'type'       => 'object',
            'properties' => $properties,
        );
    }

    /**
     * Collection parameters for the order list.
     *
     * Identity is never a collection parameter. A vendor is scoped from the
     * credential; the `vendor_id` filter is honoured for the owner only.
     *
     * @return array
     */
    public function get_collection_params() {
        $params = parent::get_collection_params();

        // The order list has no free-text search.
        unset( $params['search'] );

        $params['status'] = array(
            'description'       => __( 'Limit results to orders with a given status.', 'wc-vendors' ),
            'type'              => 'string',
            'enum'              => $this->order_status_slugs(),
            'sanitize_callback' => 'sanitize_key',
            'validate_callback' => 'rest_validate_request_arg',
        );

        $params['vendor_id'] = array(
            'description'       => __( 'Limit results to a single vendor. Owner only.', 'wc-vendors' ),
            'type'              => 'integer',
            'sanitize_callback' => 'absint',
            'validate_callback' => 'rest_validate_request_arg',
        );

        $params['orderby'] = array(
            'description'       => __( 'Sort collection by object attribute.', 'wc-vendors' ),
            'type'              => 'string',
            'default'           => 'date',
            'enum'              => array( 'date', 'id' ),
            'sanitize_callback' => 'sanitize_key',
            'validate_callback' => 'rest_validate_request_arg',
        );

        $params['order'] = array(
            'description'       => __( 'Order sort attribute ascending or descending.', 'wc-vendors' ),
            'type'              => 'string',
            'default'           => 'desc',
            'enum'              => array( 'asc', 'desc' ),
            'sanitize_callback' => 'sanitize_key',
            'validate_callback' => 'rest_validate_request_arg',
        );

        return $params;
    }

    /**
     * The order status slugs a caller may filter by, without the `wc-` prefix.
     *
     * @return string[]
     */
    protected function order_status_slugs() {
        return array_keys( $this->order_status_map() );
    }

    /**
     * Map each filterable status slug to its real order status key.
     *
     * The slug is the status key without the `wc-` prefix. A custom status with
     * no `wc-` prefix keeps its own key, so the filter never re-prefixes it.
     *
     * @return array<string,string> Slug => real status key.
     */
    protected function order_status_map() {
        $map = array();

        foreach ( array_keys( wc_get_order_statuses() ) as $status ) {
            $slug         = 'wc-' === substr( $status, 0, 3 ) ? substr( $status, 3 ) : $status;
            $map[ $slug ] = $status;
        }

        return $map;
    }
}
