<?php
/**
 * Webhook bridge and payload filter for `wcvendors/v1`.
 *
 * Registers the WooCommerce webhook hook surface so consumers can add resources,
 * events, labels, delivery hooks and payloads through the `wcv_webhook_*`
 * filters. Ships inert: it declares no resources until a consumer hooks in.
 *
 * @package WCVendors/RestApi
 * @since   2.7.3
 */

defined( 'ABSPATH' ) || exit;

/**
 * Class WCV_Webhook_Bridge.
 */
class WCV_Webhook_Bridge {

    /**
     * Constructor.
     */
    public function __construct() {
        add_filter( 'woocommerce_valid_webhook_resources', array( $this, 'add_resources' ) );
        add_filter( 'woocommerce_valid_webhook_events', array( $this, 'add_events' ) );
        add_filter( 'woocommerce_webhook_topics', array( $this, 'add_topic_labels' ) );
        add_filter( 'woocommerce_webhook_topic_hooks', array( $this, 'add_topic_hooks' ), 10, 2 );
        add_filter( 'woocommerce_webhook_payload', array( $this, 'build_payload' ), 10, 4 );
    }

    /**
     * Get the resources this bridge owns.
     *
     * Empty in the scaffold. Consumers add their resource slugs here.
     *
     * @return string[]
     */
    protected function resources() {
        /**
         * Filter the WC Vendors webhook resources.
         *
         * @since 2.7.3
         *
         * @param string[] $resources Resource slugs owned by WC Vendors.
         */
        return (array) apply_filters( 'wcv_webhook_resources', array() );
    }

    /**
     * Register WC Vendors resources with WooCommerce.
     *
     * @param string[] $resources Valid resources.
     * @return string[]
     */
    public function add_resources( $resources ) {
        return array_values( array_unique( array_merge( (array) $resources, $this->resources() ) ) );
    }

    /**
     * Register WC Vendors events with WooCommerce.
     *
     * @param string[] $events Valid events.
     * @return string[]
     */
    public function add_events( $events ) {
        /**
         * Filter the WC Vendors webhook events.
         *
         * @since 2.7.3
         *
         * @param string[] $events Event slugs owned by WC Vendors.
         */
        $wcv_events = (array) apply_filters( 'wcv_webhook_events', array() );

        return array_values( array_unique( array_merge( (array) $events, $wcv_events ) ) );
    }

    /**
     * Register topic labels for the admin dropdown.
     *
     * @param array $topics Topic slug => label.
     * @return array
     */
    public function add_topic_labels( $topics ) {
        /**
         * Filter the WC Vendors webhook topic labels.
         *
         * @since 2.7.3
         *
         * @param array $labels Topic slug => human label.
         */
        $labels = (array) apply_filters( 'wcv_webhook_topic_labels', array() );

        return array_merge( (array) $topics, $labels );
    }

    /**
     * Register the action hooks that fire each topic.
     *
     * @param array      $topic_hooks Topic slug => array of action hook names.
     * @param WC_Webhook $webhook     The webhook.
     * @return array
     */
    public function add_topic_hooks( $topic_hooks, $webhook ) {
        /**
         * Filter the WC Vendors webhook topic delivery hooks.
         *
         * @since 2.7.3
         *
         * @param array      $hooks   Topic slug => array of action hook names.
         * @param WC_Webhook $webhook The webhook.
         */
        $hooks = (array) apply_filters( 'wcv_webhook_topic_hooks', array(), $webhook );

        return array_merge( (array) $topic_hooks, $hooks );
    }

    /**
     * Build the payload for a WC Vendors resource.
     *
     * Only acts on resources this bridge owns; every other resource passes
     * through untouched. A delete topic never reaches this with a full record:
     * WooCommerce already reduced it to the identifier, so nothing here can
     * expand it.
     *
     * @param array  $payload     The current payload.
     * @param string $resource    The resource slug.
     * @param int    $resource_id The resource ID.
     * @param int    $webhook_id  The webhook ID.
     * @return array
     */
    public function build_payload( $payload, $resource, $resource_id, $webhook_id ) {
        if ( ! in_array( $resource, $this->resources(), true ) ) {
            return $payload;
        }

        /**
         * Filter the payload for a WC Vendors webhook resource.
         *
         * Consumers return the API representation of the resource. For a delete
         * topic WooCommerce already passes `array( 'id' => $resource_id )`, so a
         * consumer should return that unchanged.
         *
         * @since 2.7.3
         *
         * @param array  $payload     The current payload.
         * @param int    $resource_id The resource ID.
         * @param int    $webhook_id  The webhook ID.
         */
        return (array) apply_filters( "wcv_webhook_payload_{$resource}", $payload, $resource_id, $webhook_id );
    }
}
