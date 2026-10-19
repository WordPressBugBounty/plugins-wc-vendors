<?php
/**
 * Report controller for the public `wcvendors/v1` REST API.
 *
 * Read-only. Serves the sales summary. The owner reads the site-wide figures, a
 * vendor reads its own.
 *
 * @package WCVendors/RestApi
 * @since   2.7.3
 */

defined( 'ABSPATH' ) || exit;

/**
 * Class WCV_REST_Reports_Controller.
 */
class WCV_REST_Reports_Controller extends WCV_REST_Controller {

    /**
     * Route base.
     *
     * @var string
     */
    protected $rest_base = 'reports';

    /**
     * Number of vendors in the owner top list.
     */
    const TOP_VENDOR_LIMIT = 10;

    /**
     * Error code for an aggregate query that returned nothing.
     */
    const ERROR_QUERY_FAILED = 'wcv_rest_report_query_failed';

    /**
     * Register the routes for this controller.
     */
    public function register_routes() {
        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/sales',
            array(
                array(
                    'methods'             => WP_REST_Server::READABLE,
                    'callback'            => array( $this, 'get_item' ),
                    'permission_callback' => array( $this, 'get_item_permissions_check' ),
                    'args'                => $this->get_collection_params(),
                ),
                'schema' => array( $this, 'get_public_item_schema' ),
            )
        );
    }

    /**
     * Permission check for reading the sales summary.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error
     */
    public function get_item_permissions_check( $request ) {
        return $this->gate( $request );
    }

    /**
     * Get the sales summary.
     *
     * A vendor credential is scoped to its own figures. A vendor-supplied
     * `vendor_id` for another vendor is refused rather than silently narrowed.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response|WP_Error
     */
    public function get_item( $request ) {
        $is_owner            = $this->permissions()->is_owner();
        $scope_vendor_id     = $is_owner ? 0 : $this->permissions()->get_scope_vendor_id();
        $requested_vendor_id = (int) $request['vendor_id'];

        if ( $scope_vendor_id && $requested_vendor_id && $requested_vendor_id !== $scope_vendor_id ) {
            return $this->error(
                self::ERROR_FORBIDDEN,
                __( 'You may only read your own sales summary.', 'wc-vendors' ),
                rest_authorization_required_code()
            );
        }

        $vendor_id = $scope_vendor_id ? $scope_vendor_id : $requested_vendor_id;

        // Defense in depth. The gate grants vendor scope only to a resolvable
        // vendor, so this does not fire today. If it ever does, the request must
        // not fall through to the site-wide figures, which is what a 0 vendor ID
        // means downstream.
        if ( ! $is_owner && ! $vendor_id ) {
            return $this->error(
                self::ERROR_FORBIDDEN,
                __( 'Your vendor account could not be resolved.', 'wc-vendors' ),
                rest_authorization_required_code()
            );
        }

        $date_min = $request['date_min'] ? (string) $request['date_min'] : gmdate( 'Y-m-d', strtotime( '-30 days' ) );
        $date_max = $request['date_max'] ? (string) $request['date_max'] : gmdate( 'Y-m-d' );

        if ( strtotime( $date_min ) > strtotime( $date_max ) ) {
            return $this->error(
                'rest_invalid_param',
                __( 'date_min cannot be after date_max.', 'wc-vendors' ),
                400
            );
        }

        $site_wide = $is_owner && ! $vendor_id;
        $reports   = new WCV_Reports( $vendor_id, false );
        $reports->set_period( $date_min, $date_max );
        $period = $reports->get_period();
        $totals = $this->commission_totals( $period, $vendor_id );

        if ( is_wp_error( $totals ) ) {
            return $totals;
        }

        $data = array(
            'scope'                 => $is_owner ? WCV_REST_Permissions::SCOPE_OWNER : WCV_REST_Permissions::SCOPE_VENDOR,
            'vendor_id'             => $vendor_id,
            'date_min'              => $date_min,
            'date_max'              => $date_max,
            // Site-wide, the paid shop orders the admin reports count. For one
            // vendor, the orders behind its commission, so the count matches the
            // vendor money fields.
            'total_orders'          => $site_wide ? (int) $reports->get_total_orders() : (int) $totals->orders,
            // For one vendor, the same basis as the Statement and top_vendors:
            // the commission base, or the line subtotal before discounts.
            'gross_revenue'         => wc_format_decimal( $reports->get_total_revenue(), wc_get_price_decimals(), true ),
            'commission_to_vendors' => wc_format_decimal( $totals->due, wc_get_price_decimals(), true ),
        );

        if ( $site_wide ) {
            $data['marketplace_earnings'] = wc_format_decimal( $reports->get_total_commissions(), wc_get_price_decimals(), true );
            $data['vendor_count']         = $this->vendor_count();
            $data['top_vendors']          = $this->top_vendors( $reports );
        }

        return $this->prepare_item_for_response( $data, $request );
    }

    /**
     * Count the orders with commission and sum the commission owed in a period.
     *
     * One query serves both figures, so they describe the same rows. Reversed
     * rows are excluded, as the reports class does.
     *
     * @param array $period    Start and end datetimes from WCV_Reports::get_period().
     * @param int   $vendor_id Vendor ID, or 0 for every vendor.
     * @return object|WP_Error Row with `orders` and `due`, or an error when the query failed.
     */
    protected function commission_totals( array $period, $vendor_id ) {
        global $wpdb;

        $sql    = 'SELECT COUNT(DISTINCT order_id) AS orders, COALESCE(SUM(total_due), 0) AS due FROM %i WHERE time BETWEEN %s AND %s AND status != %s';
        $params = array( $wpdb->prefix . 'pv_commission', $period['start_date'], $period['end_date'], 'reversed' );

        if ( $vendor_id ) {
            $sql     .= ' AND vendor_id = %d';
            $params[] = (int) $vendor_id;
        }

        // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
        $totals = $wpdb->get_row( $wpdb->prepare( $sql, $params ) );

        return $totals ? $totals : $this->query_error();
    }

    /**
     * Error for an aggregate query that returned no row.
     *
     * @return WP_Error
     */
    protected function query_error() {
        return $this->error(
            self::ERROR_QUERY_FAILED,
            __( 'The sales summary could not be built.', 'wc-vendors' ),
            500
        );
    }

    /**
     * Count the vendors by status.
     *
     * The reports class holds no vendor count, so the count comes from the role
     * and status meta, as the internal admin API does.
     *
     * @return array
     */
    protected function vendor_count() {
        global $wpdb;

        $capabilities_key = $wpdb->prefix . 'capabilities';

        $sql = "SELECT
                COUNT( CASE WHEN status.meta_value = 'active' AND caps.meta_value LIKE %s THEN 1 END ) AS active,
                COUNT( CASE WHEN status.meta_value = 'inactive' AND caps.meta_value LIKE %s AND caps.meta_value NOT LIKE %s THEN 1 END ) AS inactive,
                COUNT( CASE WHEN caps.meta_value LIKE %s THEN 1 END ) AS vendor,
                COUNT( CASE WHEN caps.meta_value LIKE %s THEN 1 END ) AS pending
            FROM %i AS status
            INNER JOIN %i AS caps ON status.user_id = caps.user_id AND caps.meta_key = %s
            WHERE status.meta_key = '_wcv_vendor_status'";

        $vendor  = '%"vendor"%';
        $pending = '%"pending_vendor"%';

        // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
        $counts = $wpdb->get_row(
            $wpdb->prepare(
                $sql, // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
                $vendor,
                $vendor,
                $pending,
                $vendor,
                $pending,
                $wpdb->usermeta,
                $wpdb->usermeta,
                $capabilities_key
            ),
            ARRAY_A
        );

        return array_map( 'intval', (array) $counts );
    }

    /**
     * Build the owner top-vendor list.
     *
     * Only the aggregate columns are exposed. The avatar and rating the reports
     * class attaches are dropped from the response; the reports class still
     * builds them.
     *
     * @param WCV_Reports $reports The report source, already set to the period.
     * @return array
     */
    protected function top_vendors( $reports ) {
        $rows = $reports->get_top_vendors( null, null, self::TOP_VENDOR_LIMIT );
        $top  = array();
        $dp   = wc_get_price_decimals();

        foreach ( (array) $rows as $row ) {
            $top[] = array(
                'vendor_id'        => (int) $row->vendor_id,
                'shop_name'        => (string) $row->shop_name,
                'total_orders'     => (int) $row->total_orders,
                'total_commission' => wc_format_decimal( $row->total_commission, $dp, true ),
                'total_revenue'    => wc_format_decimal( $row->total_revenue, $dp, true ),
            );
        }

        return $top;
    }

    /**
     * Prepare the summary for response.
     *
     * @param array           $item    The prepared summary.
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response
     */
    public function prepare_item_for_response( $item, $request ) {
        $context = ! empty( $request['context'] ) ? $request['context'] : 'view';
        $data    = $this->filter_response_by_context( $item, $context );

        /**
         * Filter the prepared sales summary payload.
         *
         * @since 2.7.3
         *
         * @param array           $data    The prepared payload.
         * @param WP_REST_Request $request The request.
         */
        return rest_ensure_response( apply_filters( 'wcv_rest_prepare_sales_summary', $data, $request ) );
    }

    /**
     * Get the sales summary schema.
     *
     * @return array
     */
    public function get_item_schema() {
        $properties = array(
            'scope'                 => array(
                'description' => __( 'Whether the summary covers the whole site or one vendor.', 'wc-vendors' ),
                'type'        => 'string',
                'enum'        => array( WCV_REST_Permissions::SCOPE_OWNER, WCV_REST_Permissions::SCOPE_VENDOR ),
                'context'     => array( 'view', 'edit' ),
                'readonly'    => true,
            ),
            'vendor_id'             => $this->field( __( 'ID of the vendor the summary covers, or 0 for the whole site.', 'wc-vendors' ), 'integer', true ),
            'date_min'              => $this->field( __( 'First day of the reporting period, in Y-m-d format.', 'wc-vendors' ), 'string', true, 'date' ),
            'date_max'              => $this->field( __( 'Last day of the reporting period, in Y-m-d format.', 'wc-vendors' ), 'string', true, 'date' ),
            'total_orders'          => $this->field( __( 'Number of orders in the period. Site-wide, the paid shop orders. For one vendor, the orders with commission for that vendor, reversed commission left out.', 'wc-vendors' ), 'integer', true ),
            'gross_revenue'         => $this->field( __( 'Gross revenue in the period, as a decimal string.', 'wc-vendors' ), 'string', true ),
            'commission_to_vendors' => $this->field( __( 'Commission owed to vendors in the period, as a decimal string.', 'wc-vendors' ), 'string', true ),
            'marketplace_earnings'  => $this->field( __( 'What the marketplace keeps in the period, as a decimal string. Owner only.', 'wc-vendors' ), 'string', true ),
            'vendor_count'          => array(
                'description' => __( 'Vendor counts by status. Owner only.', 'wc-vendors' ),
                'type'        => 'object',
                'context'     => array( 'view', 'edit' ),
                'readonly'    => true,
                'properties'  => array(
                    'active'   => $this->field( __( 'Number of active vendors.', 'wc-vendors' ), 'integer', true ),
                    'inactive' => $this->field( __( 'Number of inactive vendors.', 'wc-vendors' ), 'integer', true ),
                    'vendor'   => $this->field( __( 'Number of vendors of any status.', 'wc-vendors' ), 'integer', true ),
                    'pending'  => $this->field( __( 'Number of pending vendors.', 'wc-vendors' ), 'integer', true ),
                ),
            ),
            'top_vendors'           => array(
                'description' => __( 'Up to ten vendors with the most commission in the period. Owner only.', 'wc-vendors' ),
                'type'        => 'array',
                'context'     => array( 'view', 'edit' ),
                'readonly'    => true,
                'items'       => array(
                    'type'       => 'object',
                    'properties' => array(
                        'vendor_id'        => $this->field( __( 'Vendor ID.', 'wc-vendors' ), 'integer', true ),
                        'shop_name'        => $this->field( __( 'Vendor shop name.', 'wc-vendors' ), 'string', true ),
                        'total_orders'     => $this->field( __( 'Number of orders with commission for this vendor in the period. Reversed commission is left out.', 'wc-vendors' ), 'integer', true ),
                        'total_commission' => $this->field( __( 'Commission earned in the period, as a decimal string.', 'wc-vendors' ), 'string', true ),
                        'total_revenue'    => $this->field( __( 'Revenue in the period, as a decimal string.', 'wc-vendors' ), 'string', true ),
                    ),
                ),
            ),
        );

        return array(
            '$schema'    => 'http://json-schema.org/draft-04/schema#',
            'title'      => 'wcv_sales_summary',
            'type'       => 'object',
            'properties' => $properties,
        );
    }

    /**
     * Validate a Y-m-d date parameter.
     *
     * The core schema validator has no `date` format, so the shape comes from the
     * pattern and the calendar check happens here.
     *
     * @param mixed           $value   The submitted value.
     * @param WP_REST_Request $request Full details about the request.
     * @param string          $param   The parameter name.
     * @return true|WP_Error
     */
    public function validate_date_param( $value, $request, $param ) {
        $valid = rest_validate_request_arg( $value, $request, $param );

        if ( is_wp_error( $valid ) ) {
            return $valid;
        }

        list( $year, $month, $day ) = array_map( 'absint', explode( '-', $value ) );

        if ( ! wp_checkdate( $month, $day, $year, $value ) ) {
            return new WP_Error(
                'rest_invalid_param',
                /* translators: %s: parameter name */
                sprintf( __( '%s is not a valid date.', 'wc-vendors' ), $param ),
                array( 'status' => 400 )
            );
        }

        return true;
    }

    /**
     * Collection parameters for the sales summary.
     *
     * The summary is one object, so the paging and search parameters of the base
     * do not apply. The `vendor_id` filter exists so the owner can scope a read;
     * a vendor's own use of it is checked against its own ID in get_item().
     *
     * @return array
     */
    public function get_collection_params() {
        return array(
            'context'   => $this->get_context_param( array( 'default' => 'view' ) ),
            'date_min'  => array(
                'description'       => __( 'First day of the reporting period, in Y-m-d format.', 'wc-vendors' ),
                'type'              => 'string',
                'pattern'           => '^\\d{4}-\\d{2}-\\d{2}$',
                'sanitize_callback' => 'sanitize_text_field',
                'validate_callback' => array( $this, 'validate_date_param' ),
            ),
            'date_max'  => array(
                'description'       => __( 'Last day of the reporting period, in Y-m-d format.', 'wc-vendors' ),
                'type'              => 'string',
                'pattern'           => '^\\d{4}-\\d{2}-\\d{2}$',
                'sanitize_callback' => 'sanitize_text_field',
                'validate_callback' => array( $this, 'validate_date_param' ),
            ),
            'vendor_id' => array(
                'description'       => __( 'Limit the summary to a given vendor.', 'wc-vendors' ),
                'type'              => 'integer',
                'minimum'           => 1,
                'sanitize_callback' => 'absint',
                'validate_callback' => 'rest_validate_request_arg',
            ),
        );
    }
}
