<?php
/**
 * Class Reports API for WC Vendors.
 */
class WCV_Reports_API extends WCV_API {

    /**
     * Enable rate limiting for the API.
     *
     * @var bool $enable_rate_limiting Enable rate limiting.
     */
    protected $enable_rate_limiting = true;

    /**
     * Rate limit for the API per minute by IP address.
     *
     * @var int $rate_limit Rate limit.
     */
    protected $rate_limit = 25;


    /**
     * Register routes.
     */
    public function register_routes() {
        $this->register_route(
            '/reports',
            'get_reports',
            WP_REST_Server::READABLE,
            array(
                'period_type' => array(
                    'description'       => __( 'Period type for the report', 'wc-vendors' ),
                    'type'              => 'string',
                    'sanitize_callback' => 'sanitize_text_field',
                    'enum'              => array( 'last_7_days', 'last_30_days', 'last_3_months', 'last_6_months', 'last_year', 'custom' ),
                ),
                'start_date'  => array(
                    'description'       => __( 'Start date for the report', 'wc-vendors' ),
                    'type'              => 'string',
                    'sanitize_callback' => 'sanitize_text_field',
                ),
                'end_date'    => array(
                    'description'       => __( 'End date for the report', 'wc-vendors' ),
                    'type'              => 'string',
                    'sanitize_callback' => 'sanitize_text_field',
                ),
                'for'         => array(
                    'description'       => __( 'User ID for the report', 'wc-vendors' ),
                    'type'              => 'integer',
                    'sanitize_callback' => 'absint',
                ),
                'fields'      => array(
                    'description'       => __( 'Fields to include in the report', 'wc-vendors' ),
                    'type'              => 'array',
                    'items'             => array(
                        'type' => 'string',
                        'enum' => array(
                            'revenue',
                            'commissions',
                            'orders',
                            'top_vendors',
                            'pending_vendors',
                            'license_status',
                        ),
                    ),
                    'sanitize_callback' => array( $this, 'sanitize_fields_param' ),
                ),
            )
        );
    }

    /**
     * Check permissions for the API.
     *
     * @return bool
     */
    public function get_api_permissions_check() {
        return current_user_can( 'manage_woocommerce' );
    }

    /**
     * Sanitize the fields parameter.
     *
     * @param mixed           $value   The field value.
     * @param WP_REST_Request $request The request object.
     * @param string          $param   The parameter name.
     *
     * @return array|WP_Error
     */
    public function sanitize_fields_param( $value, $request, $param ) {
        if ( ! is_array( $value ) ) {
            return (array) $value;
        }

        $allowed_fields = array(
            'revenue',
            'commissions',
            'orders',
            'top_vendors',
            'pending_vendors',
            'license_status',
        );

        return array_intersect( $value, $allowed_fields );
    }

    /**
     * Get reports based on date range and requested fields.
     *
     * @param WP_REST_Request $request Full details about the request.
     *
     * @return WP_REST_Response
     */
    public function get_reports( $request ) {
        // Get parameters.
        $start_date  = $request->get_param( 'start_date' );
        $end_date    = $request->get_param( 'end_date' );
        $fields      = $request->get_param( 'fields' );
        $for         = $request->get_param( 'for' );
        $period_type = $request->get_param( 'period_type' );

        if ( ! $for ) {
            $for = 0;
        }

        // Default to all fields if none specified.
        if ( empty( $fields ) ) {
            $fields = array(
                'revenue',
                'commissions',
                'orders',
                'top_vendors',
                'pending_vendors',
                'license_status',
            );
        }

        if ( ! empty( $for ) ) {
            $user = get_user_by( 'id', $for );
            if ( ! $user ) {
                return new WP_REST_Response( array( 'message' => 'User not found.' ), 200 );
            }
        }

        // Check if user is vendor.
        $is_vendor = WCV_Vendors::is_vendor( $for );
        if ( ! $is_vendor && 0 !== $for ) {
            return new WP_REST_Response( array( 'message' => 'User is not a vendor.' ), 200 );
        }

        // If vendor unset top_vendors, pending_vendors, and license_status.
        if ( $is_vendor ) {
            $fields = array_diff( $fields, array( 'top_vendors', 'pending_vendors', 'license_status' ) );
        }

        if ( ! empty( $period_type ) && 'custom' !== $period_type ) {
            $start_date = $this->get_start_date( $period_type );
            $end_date   = gmdate( 'Y-m-d' );
        } else {
            // Validate dates with consolidated error handling.
            $date_validation_errors = $this->validate_date_parameters( $start_date, $end_date );
            if ( ! empty( $date_validation_errors ) ) {
                return new WP_REST_Response( $date_validation_errors, 400 );
            }

            // Set default dates if not provided.
            if ( empty( $start_date ) ) {
                $start_date = gmdate( 'Y-m-d', strtotime( '-30 days' ) );
            }

            if ( empty( $end_date ) ) {
                $end_date = gmdate( 'Y-m-d' );
            }
        }

        $report_controller = new WCV_Reports( $for );

        // Initialize report data.
        $report_data = array();

        // Get requested report data.
        foreach ( $fields as $field ) {
            switch ( $field ) {
                case 'revenue':
                    $report_data['revenue'] = $report_controller->get_total_revenue( $start_date, $end_date );
                    break;
                case 'commissions':
                    $report_data['commissions'] = $report_controller->get_total_commissions( $start_date, $end_date );
                    break;
                case 'orders':
                    $report_data['orders'] = $report_controller->get_total_orders( $start_date, $end_date );
                    break;
                case 'top_vendors':
                    $report_data['top_vendors'] = $report_controller->get_top_vendors( $start_date, $end_date );
                    break;
                case 'pending_vendors':
                    $report_data['pending_vendors'] = $report_controller->get_pending_approval();
                    break;
                case 'license_status':
                    $report_data['license_status'] = $this->get_premium_plugins_data();
                    break;
            }
        }

        $response = new WP_REST_Response(
            array(
                'success' => true,
                'data'    => $report_data,
                'meta'    => array(
                    'start_date' => $start_date,
                    'end_date'   => $end_date,
                ),
            ),
            200
        );

        return $response;
    }

    /**
     * Check if a date string is valid.
     *
     * @param string $date Date string to check.
     * @return boolean
     */
    private function is_valid_date( $date ) {
        $d = DateTime::createFromFormat( 'Y-m-d', $date );
        return $d && $d->format( 'Y-m-d' ) === $date;
    }

    /**
     * Validates date parameters for reports API
     *
     * @param string $start_date Start date in YYYY-MM-DD format.
     * @param string $end_date End date in YYYY-MM-DD format.
     * @return array Empty array if valid, or error details if invalid
     */
    private function validate_date_parameters( $start_date, $end_date ) {
        // Check start date format.
        if ( ! empty( $start_date ) && ! $this->is_valid_date( $start_date ) ) {
            return array(
                'error'   => 'invalid_start_date',
                'success' => false,
                'message' => __( 'Invalid start date format. Please use YYYY-MM-DD.', 'wc-vendors' ),
            );
        }

        // Check end date format.
        if ( ! empty( $end_date ) && ! $this->is_valid_date( $end_date ) ) {
            return array(
                'error'   => 'invalid_end_date',
                'success' => false,
                'message' => __( 'Invalid end date format. Please use YYYY-MM-DD.', 'wc-vendors' ),
            );
        }

        // Check date range logic.
        if ( ! empty( $start_date ) && ! empty( $end_date ) && $start_date > $end_date ) {
            return array(
                'error'   => 'invalid_date_range',
                'success' => false,
                'message' => __( 'Start date cannot be after end date.', 'wc-vendors' ),
            );
        }

        // All validations passed.
        return array();
    }

    /**
     * Get WC Vendors Premium plugins data.
     *
     * @return array
     */
    private function get_premium_plugins_data() {
        $plugins = apply_filters(
            'wcvendors_api_premium_plugins',
            array(
                'wcvp'     => array(
                    'name'               => __( 'WC Vendors Pro', 'wc-vendors' ),
                    'active'             => is_plugin_active( 'wc-vendors-pro/wcvendors-pro.php' ),
                    'license_option_key' => 'wc-vendors-pro_license_manager',
                    'basename'           => 'wc-vendors-pro/wcvendors-pro.php',
                    'version'            => defined( 'WCV_PRO_VERSION' ) ? WCV_PRO_VERSION : '',

                ),
                'wcv_sc'   => array(
                    'name'               => __( 'WC Vendors Gateway Stripe Connect', 'wc-vendors' ),
                    'active'             => is_plugin_active( 'wc-vendors-gateway-stripe-connect/wc-vendors-gateway-stripe-connect.php' ),
                    'license_option_key' => 'wc-vendors-gateway-stripe-connect_license_manager',
                    'basename'           => 'wc-vendors-gateway-stripe-connect/wc-vendors-gateway-stripe-connect.php',
                    'version'            => defined( 'WCV_SC_VERSION' ) ? WCV_SC_VERSION : '',
                ),
                'wcv_wcb'  => array(
                    'name'               => __( 'WC Vendors WooCommerce Bookings', 'wc-vendors' ),
                    'active'             => is_plugin_active( 'wc-vendors-woocommerce-bookings/wcv-woocommerce-bookings.php' ),
                    'license_option_key' => 'wc-vendors-woocommerce-bookings_license_manager',
                    'basename'           => 'wc-vendors-woocommerce-bookings/wcv-woocommerce-bookings.php',
                    'version'            => defined( 'WCV_WCB_VERSION' ) ? WCV_WCB_VERSION : '',
                ),
                'wcv_wcsa' => array(
                    'name'               => __( 'WC Vendors Pro Simple Auctions', 'wc-vendors' ),
                    'active'             => is_plugin_active( 'wc-vendors-pro-simple-auctions/class-wcv-simple-auctions.php' ),
                    'license_option_key' => 'wcvendors-pro-simpleauctions_license_manager',
                    'basename'           => 'wc-vendors-pro-simple-auctions/class-wcv-simple-auctions.php',
                    'version'            => defined( 'WCV_WCS_VERSION' ) ? WCV_WCS_VERSION : '',
                ),
                'wcv_wcm'  => array(
                    'name'               => __( 'WC Vendors Membership', 'wc-vendors' ),
                    'active'             => is_plugin_active( 'wc-vendors-membership/wc-vendors-membership.php' ),
                    'license_option_key' => 'wc-vendors-membership_license_manager',
                    'basename'           => 'wc-vendors-membership/wc-vendors-membership.php',
                    'version'            => defined( 'WCV_WCM_VERSION' ) ? WCV_WCM_VERSION : '',
                ),
                'wcv_wcs'  => array(
                    'name'               => __( 'WC Vendors WooCommerce Subscriptions', 'wc-vendors' ),
                    'active'             => is_plugin_active( 'wc-vendors-woocommerce-subscriptions/wcv-wc-subscriptions.php' ),
                    'license_option_key' => 'wcv-wc-subscriptions_license_manager',
                    'basename'           => 'wc-vendors-woocommerce-subscriptions/wcv-wc-subscriptions.php',
                    'version'            => defined( 'WCV_WCS_VERSION' ) ? WCV_WCS_VERSION : '',
                ),
            )
        );

        foreach ( $plugins as $plugin_slug => $plugin_data ) {
            $plugins[ $plugin_slug ]['installed'] = file_exists( WP_PLUGIN_DIR . '/' . $plugin_data['basename'] );
            if ( $plugin_data['active'] ) {
                $license_data = get_option( $plugin_data['license_option_key'], array() );
                unset( $plugins[ $plugin_slug ]['license_option_key'] );

                $plugins[ $plugin_slug ]['status']  = isset( $license_data['license_status'] ) ? $license_data['license_status'] : '';
                $plugins[ $plugin_slug ]['expires'] = isset( $license_data['license_expires'] ) ? $license_data['license_expires'] : '';
            } else {
                unset( $plugins[ $plugin_slug ]['license_option_key'] );
            }

            unset( $plugins[ $plugin_slug ]['basename'] );
        }

        return $plugins;
    }

    /**
     * Get start date based on period type.
     *
     * @param string $period_type Period type.
     * @return string Start date.
     */
    private function get_start_date( $period_type ) {
        switch ( $period_type ) {
            case 'last_7_days':
                return gmdate( 'Y-m-d', strtotime( '-7 days' ) );
            case 'last_14_days':
                return gmdate( 'Y-m-d', strtotime( '-14 days' ) );
            case 'last_30_days':
                return gmdate( 'Y-m-d', strtotime( '-30 days' ) );
            case 'last_3_months':
                return gmdate( 'Y-m-d', strtotime( '-3 months' ) );
            case 'last_6_months':
                return gmdate( 'Y-m-d', strtotime( '-6 months' ) );
            case 'last_year':
                return gmdate( 'Y-m-d', strtotime( '-1 year' ) );
            default:
                return gmdate( 'Y-m-d', strtotime( '-30 days' ) );
        }
    }
}

new WCV_Reports_API();
