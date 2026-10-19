<?php
/**
 * Commission controller for the public `wcvendors/v1` REST API.
 *
 * Read-only. Serves the commission collection and single-commission reads,
 * scoped to the credential's own vendor.
 *
 * @package WCVendors/RestApi
 * @since   2.7.3
 */

defined( 'ABSPATH' ) || exit;

/**
 * Class WCV_REST_Commissions_Controller.
 */
class WCV_REST_Commissions_Controller extends WCV_REST_Controller {

    /**
     * Route base.
     *
     * @var string
     */
    protected $rest_base = 'commissions';

    /**
     * Stable error codes for this resource.
     */
    const ERROR_INVALID_ID = 'wcv_rest_commission_invalid_id';

    /**
     * Shared rate limiter.
     *
     * @var WCV_REST_Rate_Limiter|null
     */
    protected $rate_limiter = null;

    /**
     * Get the shared rate limiter.
     *
     * @return WCV_REST_Rate_Limiter
     */
    protected function rate_limiter() {
        if ( null === $this->rate_limiter ) {
            $this->rate_limiter = new WCV_REST_Rate_Limiter();
        }

        return $this->rate_limiter;
    }

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
                        'description'       => __( 'Unique identifier for the commission record.', 'wc-vendors' ),
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
     * Gate a request through the shared scope check and the rate limiter.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error
     */
    protected function gate( $request ) {
        $allowed = $this->permissions()->check( $request );

        if ( is_wp_error( $allowed ) ) {
            return $allowed;
        }

        // Replace the ID segments before keying the limiter, so /commissions/6
        // and /commissions/7 share one budget.
        $route = preg_replace( '#/\d+#', '/{id}', $request->get_route() );

        return $this->rate_limiter()->check_authenticated( $route, get_current_user_id() );
    }

    /**
     * Get the commission ID named in the route path.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return int
     */
    protected function requested_id( $request ) {
        $url_params = $request->get_url_params();

        return isset( $url_params['id'] ) ? absint( $url_params['id'] ) : 0;
    }

    /**
     * Permission check for reading the commission collection.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error
     */
    public function get_items_permissions_check( $request ) {
        return $this->gate( $request );
    }

    /**
     * Permission check for reading a single commission.
     *
     * Ownership is a row column, not the URL id, so it is checked in get_item()
     * once the row is loaded.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error
     */
    public function get_item_permissions_check( $request ) {
        return $this->gate( $request );
    }

    /**
     * Get a collection of commissions.
     *
     * A vendor credential is scoped to its own commissions. A vendor-supplied
     * `vendor_id` filter for another vendor is refused rather than silently
     * narrowed, so a cross-vendor filter attempt is visible as an error.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response|WP_Error
     */
    public function get_items( $request ) {
        $scope_vendor_id     = $this->permissions()->is_owner() ? 0 : $this->permissions()->get_scope_vendor_id();
        $requested_vendor_id = (int) $request['vendor_id'];

        if ( $scope_vendor_id && $requested_vendor_id && $requested_vendor_id !== $scope_vendor_id ) {
            return $this->error(
                self::ERROR_FORBIDDEN,
                __( 'You may only read your own commissions.', 'wc-vendors' ),
                rest_authorization_required_code()
            );
        }

        $args = array(
            'page'      => max( 1, (int) $request['page'] ),
            'per_page'  => max( 1, (int) $request['per_page'] ),
            'status'    => (string) $request['status'],
            'order_id'  => (int) $request['order_id'],
            'vendor_id' => $requested_vendor_id,
            'orderby'   => (string) $request['orderby'],
            'order'     => (string) $request['order'],
        );

        $args = $this->permissions()->scope_query_args( $args, 'vendor_id' );

        $rows  = $this->query_items( $args );
        $total = $this->count_items( $args );

        $data = array();

        foreach ( $rows as $row ) {
            $data[] = $this->prepare_commission( $row, $request );
        }

        $response = rest_ensure_response( $data );
        $response->header( 'X-WP-Total', $total );
        $response->header( 'X-WP-TotalPages', (int) ceil( $total / $args['per_page'] ) );

        return $response;
    }

    /**
     * Get a single commission.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response|WP_Error
     */
    public function get_item( $request ) {
        global $wpdb;

        $id = $this->requested_id( $request );

        // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
        $row = $wpdb->get_row(
            $wpdb->prepare(
                'SELECT id, product_id, order_id, vendor_id, total_due, qty, total_shipping, tax, status, time FROM %i WHERE id = %d',
                $wpdb->prefix . 'pv_commission',
                $id
            )
        );

        // A missing row and another vendor's row both return the same 404, so a
        // vendor cannot use the status code to detect which commission IDs exist.
        if ( ! $row
            || ( ! $this->permissions()->is_owner()
                && (int) $row->vendor_id !== $this->permissions()->get_scope_vendor_id() ) ) {
            return $this->error( self::ERROR_INVALID_ID, __( 'Invalid commission ID.', 'wc-vendors' ), 404 );
        }

        return $this->prepare_item_for_response( $row, $request );
    }

    /**
     * Build the WHERE clause and its prepared values for a set of filters.
     *
     * @param array $args Query arguments (see get_items()).
     * @return array{0: string, 1: array} The WHERE clause and its bound values.
     */
    protected function build_where( array $args ) {
        $where  = '1=1';
        $params = array();

        if ( ! empty( $args['vendor_id'] ) ) {
            $where   .= ' AND vendor_id = %d';
            $params[] = (int) $args['vendor_id'];
        }

        if ( ! empty( $args['status'] ) ) {
            $where   .= ' AND status = %s';
            $params[] = (string) $args['status'];
        }

        if ( ! empty( $args['order_id'] ) ) {
            $where   .= ' AND order_id = %d';
            $params[] = (int) $args['order_id'];
        }

        return array( $where, $params );
    }

    /**
     * Query one page of commission rows.
     *
     * `orderby`/`order` are resolved through a fixed map, never interpolated
     * from the request.
     *
     * @param array $args Query arguments (see get_items()).
     * @return array
     */
    protected function query_items( array $args ) {
        global $wpdb;

        list( $where, $params ) = $this->build_where( $args );

        $orderby_map = array(
            'id'   => 'id',
            'time' => 'time',
        );
        $order_map   = array(
            'asc'  => 'ASC',
            'desc' => 'DESC',
        );

        $orderby = isset( $orderby_map[ $args['orderby'] ] ) ? $orderby_map[ $args['orderby'] ] : 'id';
        $order   = isset( $order_map[ $args['order'] ] ) ? $order_map[ $args['order'] ] : 'DESC';
        $offset  = ( $args['page'] - 1 ) * $args['per_page'];

        array_unshift( $params, $wpdb->prefix . 'pv_commission' );
        $params[] = $args['per_page'];
        $params[] = $offset;

        $sql = "SELECT id, product_id, order_id, vendor_id, total_due, qty, total_shipping, tax, status, time FROM %i WHERE {$where} ORDER BY {$orderby} {$order} LIMIT %d OFFSET %d";

        // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
        return $wpdb->get_results( $wpdb->prepare( $sql, $params ) );
    }

    /**
     * Count the commission rows matching a set of filters.
     *
     * @param array $args Query arguments (see get_items()).
     * @return int
     */
    protected function count_items( array $args ) {
        global $wpdb;

        list( $where, $params ) = $this->build_where( $args );

        array_unshift( $params, $wpdb->prefix . 'pv_commission' );

        $sql = "SELECT COUNT(*) FROM %i WHERE {$where}";

        // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
        return (int) $wpdb->get_var( $wpdb->prepare( $sql, $params ) );
    }

    /**
     * Prepare a single commission for response.
     *
     * @param object          $item    The commission row.
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response
     */
    public function prepare_item_for_response( $item, $request ) {
        return rest_ensure_response( $this->prepare_commission( $item, $request ) );
    }

    /**
     * Build the commission payload.
     *
     * @param object          $row     The commission row.
     * @param WP_REST_Request $request Full details about the request.
     * @return array
     */
    protected function prepare_commission( $row, $request ) {
        $data = array(
            'id'             => (int) $row->id,
            'product_id'     => (int) $row->product_id,
            'order_id'       => (int) $row->order_id,
            'vendor_id'      => (int) $row->vendor_id,
            'qty'            => (int) $row->qty,
            'total_due'      => wc_format_decimal( $row->total_due, wc_get_price_decimals(), true ),
            'total_shipping' => wc_format_decimal( $row->total_shipping, wc_get_price_decimals(), true ),
            'tax'            => wc_format_decimal( $row->tax, wc_get_price_decimals(), true ),
            'status'         => (string) $row->status,
            'time'           => mysql_to_rfc3339( $row->time ),
        );

        $context = ! empty( $request['context'] ) ? $request['context'] : 'view';
        $data    = $this->filter_response_by_context( $data, $context );

        /**
         * Filter the prepared commission payload.
         *
         * @since 2.7.3
         *
         * @param array            $data    The prepared payload.
         * @param object           $row     The commission row.
         * @param WP_REST_Request  $request The request.
         */
        return apply_filters( 'wcv_rest_prepare_commission', $data, $row, $request );
    }

    /**
     * Get the commission payload for a webhook delivery.
     *
     * @param int $id Commission record ID.
     * @return array
     */
    public function get_webhook_payload( $id ) {
        global $wpdb;

        // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
        $row = $wpdb->get_row(
            $wpdb->prepare(
                'SELECT id, product_id, order_id, vendor_id, total_due, qty, total_shipping, tax, status, time FROM %i WHERE id = %d',
                $wpdb->prefix . 'pv_commission',
                $id
            )
        );

        if ( ! $row ) {
            return array();
        }

        return $this->prepare_commission( $row, new WP_REST_Request() );
    }

    /**
     * Get the commission schema.
     *
     * @return array
     */
    public function get_item_schema() {
        $properties = array(
            'id'             => $this->field( __( 'Unique identifier for the commission record.', 'wc-vendors' ), 'integer', true ),
            'product_id'     => $this->field( __( 'ID of the product the commission was earned on.', 'wc-vendors' ), 'integer', true ),
            'order_id'       => $this->field( __( 'ID of the order the commission was earned on.', 'wc-vendors' ), 'integer', true ),
            'vendor_id'      => $this->field( __( 'ID of the vendor the commission belongs to.', 'wc-vendors' ), 'integer', true ),
            'qty'            => $this->field( __( 'Quantity of items the commission covers.', 'wc-vendors' ), 'integer', true ),
            'total_due'      => $this->field( __( 'Commission amount due, as a decimal string.', 'wc-vendors' ), 'string', true ),
            'total_shipping' => $this->field( __( 'Shipping commission amount, as a decimal string.', 'wc-vendors' ), 'string', true ),
            'tax'            => $this->field( __( 'Tax commission amount, as a decimal string.', 'wc-vendors' ), 'string', true ),
            'status'         => array(
                'description' => __( 'Commission status.', 'wc-vendors' ),
                'type'        => 'string',
                'enum'        => array_keys( WCV_Commission::commission_status() ),
                'context'     => array( 'view', 'edit' ),
                'readonly'    => true,
            ),
            'time'           => array(
                'description' => __( 'The date the commission record was created, in RFC3339 format (UTC).', 'wc-vendors' ),
                'type'        => 'string',
                'format'      => 'date-time',
                'context'     => array( 'view', 'edit' ),
                'readonly'    => true,
            ),
        );

        return array(
            '$schema'    => 'http://json-schema.org/draft-04/schema#',
            'title'      => 'wcv_commission',
            'type'       => 'object',
            'properties' => $properties,
        );
    }

    /**
     * Build one schema property.
     *
     * @param string $description Field description.
     * @param string $type        JSON schema type.
     * @param bool   $readonly    Whether the field is read-only.
     * @param string $format      Optional JSON schema format.
     * @return array
     */
    protected function field( $description, $type, $readonly = false, $format = '' ) {
        $property = array(
            'description' => $description,
            'type'        => $type,
            'context'     => array( 'view', 'edit' ),
        );

        if ( $format ) {
            $property['format'] = $format;
        }

        if ( $readonly ) {
            $property['readonly'] = true;
        }

        return $property;
    }

    /**
     * Collection parameters for the commission list.
     *
     * Identity is never a collection parameter for a vendor credential; the
     * `vendor_id` filter exists so the owner can scope a read, and a vendor's
     * own use of it is checked against its own ID in get_items(). No `search`:
     * a commission record has no text field worth matching.
     *
     * @return array
     */
    public function get_collection_params() {
        $params = parent::get_collection_params();
        unset( $params['search'] );

        $params['status'] = array(
            'description'       => __( 'Limit results to commissions with a given status.', 'wc-vendors' ),
            'type'              => 'string',
            'enum'              => array_keys( WCV_Commission::commission_status() ),
            'sanitize_callback' => 'sanitize_text_field',
            'validate_callback' => 'rest_validate_request_arg',
        );

        $params['order_id'] = array(
            'description'       => __( 'Limit results to commissions for a given order.', 'wc-vendors' ),
            'type'              => 'integer',
            'minimum'           => 1,
            'sanitize_callback' => 'absint',
            'validate_callback' => 'rest_validate_request_arg',
        );

        $params['vendor_id'] = array(
            'description'       => __( 'Limit results to commissions for a given vendor.', 'wc-vendors' ),
            'type'              => 'integer',
            'minimum'           => 1,
            'sanitize_callback' => 'absint',
            'validate_callback' => 'rest_validate_request_arg',
        );

        $params['orderby'] = array(
            'description'       => __( 'Sort collection by object attribute.', 'wc-vendors' ),
            'type'              => 'string',
            'default'           => 'id',
            'enum'              => array( 'id', 'time' ),
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
}
