<?php
/**
 * Global commission settings controller for the public `wcvendors/v1` REST API.
 *
 * Owner-only read and write of the site-wide commission type and rate.
 *
 * @package WCVendors/RestApi
 * @since   2.7.3
 */

defined( 'ABSPATH' ) || exit;

/**
 * Class WCV_REST_Commission_Settings_Controller.
 */
class WCV_REST_Commission_Settings_Controller extends WCV_REST_Controller {

    /**
     * Route base.
     *
     * @var string
     */
    protected $rest_base = 'settings/commission';

    /**
     * Stable error code for this resource.
     */
    const ERROR_TYPE_REQUIRES_PRO = 'wcv_rest_commission_type_requires_pro';

    /**
     * Register the routes for this controller.
     */
    public function register_routes() {
        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base,
            array(
                array(
                    'methods'             => WP_REST_Server::READABLE,
                    'callback'            => array( $this, 'get_item' ),
                    'permission_callback' => array( $this, 'get_item_permissions_check' ),
                    'args'                => array(
                        'context' => $this->get_context_param( array( 'default' => 'view' ) ),
                    ),
                ),
                array(
                    'methods'             => WP_REST_Server::EDITABLE,
                    'callback'            => array( $this, 'update_item' ),
                    'permission_callback' => array( $this, 'update_item_permissions_check' ),
                    'args'                => $this->get_endpoint_args_for_item_schema( WP_REST_Server::EDITABLE ),
                ),
                'schema' => array( $this, 'get_public_item_schema' ),
            )
        );
    }

    /**
     * Permission check for reading the commission settings. Owner only.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error
     */
    public function get_item_permissions_check( $request ) {
        $allowed = $this->gate( $request );

        if ( is_wp_error( $allowed ) ) {
            return $allowed;
        }

        if ( ! $this->permissions()->is_owner() ) {
            return $this->error(
                self::ERROR_FORBIDDEN,
                __( 'Only the site owner may access the commission settings.', 'wc-vendors' ),
                rest_authorization_required_code()
            );
        }

        return true;
    }

    /**
     * Permission check for writing the commission settings. Owner only.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error
     */
    public function update_item_permissions_check( $request ) {
        return $this->get_item_permissions_check( $request );
    }

    /**
     * Get the commission settings.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response
     */
    public function get_item( $request ) {
        return rest_ensure_response( $this->prepare_settings( $request ) );
    }

    /**
     * Update the commission settings.
     *
     * An empty body is idempotent: 200 with the current representation, nothing
     * written. Only `type` and `rate` are writable here; the fee and amount
     * options are untouched.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response|WP_Error
     */
    public function update_item( $request ) {
        if ( $request->has_param( 'type' ) ) {
            $type = (string) $request->get_param( 'type' );

            /**
             * Filter whether a commission type other than percent needs WC Vendors Pro.
             *
             * @since 2.7.3
             *
             * @param bool $requires_pro True refuses every type except percent.
             */
            $requires_pro = apply_filters( 'wcv_rest_commission_type_requires_pro', ! is_wcv_pro_active() );

            if ( 'percent' !== $type && $requires_pro ) {
                return $this->error(
                    self::ERROR_TYPE_REQUIRES_PRO,
                    __( 'WC Vendors Pro is required to use a commission type other than percent.', 'wc-vendors' ),
                    400
                );
            }

            update_option( 'wcvendors_commission_type', $type );
        }

        if ( $request->has_param( 'rate' ) ) {
            update_option( 'wcvendors_vendor_commission_rate', wc_format_decimal( (float) $request->get_param( 'rate' ) ) );
        }

        return rest_ensure_response( $this->prepare_settings( $request ) );
    }

    /**
     * Build the commission settings payload.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return array
     */
    protected function prepare_settings( $request ) {
        $data = array(
            'type' => (string) get_option( 'wcvendors_commission_type', 'percent' ),
            'rate' => (float) get_option( 'wcvendors_vendor_commission_rate', 0 ),
        );

        $context = ! empty( $request['context'] ) ? $request['context'] : 'view';

        return $this->filter_response_by_context( $data, $context );
    }

    /**
     * Get the commission settings schema.
     *
     * @return array
     */
    public function get_item_schema() {
        $properties = array(
            'type' => array(
                'description' => __( 'Commission type.', 'wc-vendors' ),
                'type'        => 'string',
                'enum'        => array( 'fixed', 'fixed_fee', 'percent', 'percent_fee' ),
                'context'     => array( 'view', 'edit' ),
            ),
            'rate' => array(
                'description' => __( 'Global commission rate, in percent.', 'wc-vendors' ),
                'type'        => 'number',
                'minimum'     => 0,
                'maximum'     => 100,
                'context'     => array( 'view', 'edit' ),
            ),
        );

        return array(
            '$schema'    => 'http://json-schema.org/draft-04/schema#',
            'title'      => 'wcv_commission_settings',
            'type'       => 'object',
            'properties' => $properties,
        );
    }
}
