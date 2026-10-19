<?php
/**
 * Vendor controller for the public `wcvendors/v1` REST API.
 *
 * Serves vendor reads, vendor settings writes and the owner-only approve and
 * deny actions. Vendor identity comes from the credential, never from a request
 * parameter.
 *
 * @package WCVendors/RestApi
 * @since   2.7.3
 */

defined( 'ABSPATH' ) || exit;

/**
 * Class WCV_REST_Vendors_Controller.
 */
class WCV_REST_Vendors_Controller extends WCV_REST_Controller {

    /**
     * Route base.
     *
     * @var string
     */
    protected $rest_base = 'vendors';

    /**
     * Stable error codes for this resource.
     */
    const ERROR_INVALID_ID       = 'wcv_rest_vendor_invalid_id';
    const ERROR_READONLY_FIELD   = 'wcv_rest_vendor_readonly_field';
    const ERROR_NOT_PENDING      = 'wcv_rest_vendor_not_pending';
    const ERROR_INVALID_VALUE    = 'wcv_rest_vendor_invalid_value';
    const ERROR_VENDOR_PENDING   = 'wcv_rest_vendor_pending';
    const ERROR_STATUS_UNCHANGED = 'wcv_rest_vendor_status_unchanged';
    const ERROR_STATUS_SAVE      = 'wcv_rest_vendor_status_save_failed';

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
                        'description'       => __( 'Unique identifier for the vendor.', 'wc-vendors' ),
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
                array(
                    'methods'             => WP_REST_Server::EDITABLE,
                    'callback'            => array( $this, 'update_item' ),
                    'permission_callback' => array( $this, 'update_item_permissions_check' ),
                    'args'                => $this->get_endpoint_args_for_item_schema( WP_REST_Server::EDITABLE ),
                ),
                'schema' => array( $this, 'get_public_item_schema' ),
            )
        );

        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/(?P<id>[\d]+)/commission',
            array(
                'args'   => array(
                    'id' => array(
                        'description'       => __( 'Unique identifier for the vendor.', 'wc-vendors' ),
                        'type'              => 'integer',
                        'sanitize_callback' => 'absint',
                    ),
                ),
                array(
                    'methods'             => WP_REST_Server::READABLE,
                    'callback'            => array( $this, 'get_commission' ),
                    'permission_callback' => array( $this, 'get_commission_permissions_check' ),
                    'args'                => array(
                        'context' => $this->get_context_param( array( 'default' => 'view' ) ),
                    ),
                ),
                array(
                    'methods'             => WP_REST_Server::EDITABLE,
                    'callback'            => array( $this, 'update_commission' ),
                    'permission_callback' => array( $this, 'update_commission_permissions_check' ),
                    'args'                => rest_get_endpoint_args_for_schema( $this->get_commission_schema(), WP_REST_Server::EDITABLE ),
                ),
                'schema' => array( $this, 'get_commission_schema' ),
            )
        );

        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/(?P<id>[\d]+)/approve',
            array(
                'args'   => $this->get_decision_args(),
                array(
                    'methods'             => WP_REST_Server::CREATABLE,
                    'callback'            => array( $this, 'approve_item' ),
                    'permission_callback' => array( $this, 'decision_permissions_check' ),
                ),
                'schema' => array( $this, 'get_public_item_schema' ),
            )
        );

        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/(?P<id>[\d]+)/deny',
            array(
                'args'   => $this->get_decision_args(),
                array(
                    'methods'             => WP_REST_Server::CREATABLE,
                    'callback'            => array( $this, 'deny_item' ),
                    'permission_callback' => array( $this, 'decision_permissions_check' ),
                ),
                'schema' => array( $this, 'get_deny_schema' ),
            )
        );

        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/(?P<id>[\d]+)/activate',
            array(
                'args'   => $this->get_status_args(),
                array(
                    'methods'             => WP_REST_Server::CREATABLE,
                    'callback'            => array( $this, 'activate_item' ),
                    'permission_callback' => array( $this, 'decision_permissions_check' ),
                ),
                'schema' => array( $this, 'get_public_item_schema' ),
            )
        );

        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/(?P<id>[\d]+)/deactivate',
            array(
                'args'   => $this->get_status_args(),
                array(
                    'methods'             => WP_REST_Server::CREATABLE,
                    'callback'            => array( $this, 'deactivate_item' ),
                    'permission_callback' => array( $this, 'decision_permissions_check' ),
                ),
                'schema' => array( $this, 'get_public_item_schema' ),
            )
        );
    }

    /**
     * Get the schema for the deny response.
     *
     * Deny does not return a vendor resource, so it advertises its own shape.
     *
     * @return array
     */
    public function get_deny_schema() {
        return array(
            '$schema'    => 'http://json-schema.org/draft-04/schema#',
            'title'      => 'vendor-deny',
            'type'       => 'object',
            'properties' => array(
                'denied'   => array(
                    'description' => __( 'Whether the vendor was denied.', 'wc-vendors' ),
                    'type'        => 'boolean',
                    'context'     => array( 'view', 'edit' ),
                    'readonly'    => true,
                ),
                'previous' => array(
                    'description' => __( 'The vendor record as it was before the decision.', 'wc-vendors' ),
                    'type'        => 'object',
                    'context'     => array( 'view', 'edit' ),
                    'readonly'    => true,
                    'properties'  => $this->get_item_schema()['properties'],
                ),
            ),
        );
    }

    /**
     * Route arguments shared by the approve and deny endpoints.
     *
     * @return array
     */
    protected function get_decision_args() {
        return array(
            'id'                 => array(
                'description'       => __( 'Unique identifier for the vendor.', 'wc-vendors' ),
                'type'              => 'integer',
                'sanitize_callback' => 'absint',
            ),
            'use_custom_message' => array(
                'description'       => __( 'Whether to send the custom message with the notification email.', 'wc-vendors' ),
                'type'              => 'boolean',
                'default'           => false,
                'sanitize_callback' => 'rest_sanitize_boolean',
                'validate_callback' => 'rest_validate_request_arg',
            ),
            'message'            => array(
                'description'       => __( 'Custom message for the notification email.', 'wc-vendors' ),
                'type'              => 'string',
                'default'           => '',
                'sanitize_callback' => 'sanitize_textarea_field',
                'validate_callback' => 'rest_validate_request_arg',
            ),
        );
    }

    /**
     * Route arguments shared by the activate and deactivate endpoints.
     *
     * These routes carry no body. Only the vendor ID in the path.
     *
     * @return array
     */
    protected function get_status_args() {
        return array(
            'id' => array(
                'description'       => __( 'Unique identifier for the vendor.', 'wc-vendors' ),
                'type'              => 'integer',
                'sanitize_callback' => 'absint',
            ),
        );
    }

    /**
     * Resolve the vendor ID a request may act on.
     *
     * An owner may name any vendor. A vendor is always scoped to itself, and a
     * mismatch with the requested ID is refused. This is the isolation gate for
     * every single-vendor route.
     *
     * The permission callback and the handler both call this. The repeat is
     * deliberate: it reads cached roles and runs no query, and the handler must
     * not depend on the callback having run.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return int|WP_Error
     */
    protected function resolve_vendor_id( $request ) {
        $requested = $this->requested_id( $request );

        if ( $this->permissions()->is_owner() ) {
            return $requested;
        }

        $scoped = $this->permissions()->get_scope_vendor_id();

        if ( ! $scoped || $scoped !== $requested ) {
            return $this->error(
                self::ERROR_FORBIDDEN,
                __( 'You are not allowed to access this resource.', 'wc-vendors' ),
                rest_authorization_required_code()
            );
        }

        return $scoped;
    }

    /**
     * Permission check for reading the vendor collection.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error
     */
    public function get_items_permissions_check( $request ) {
        return $this->gate( $request );
    }

    /**
     * Permission check for reading a single vendor.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error
     */
    public function get_item_permissions_check( $request ) {
        $allowed = $this->gate( $request );

        if ( is_wp_error( $allowed ) ) {
            return $allowed;
        }

        $vendor_id = $this->resolve_vendor_id( $request );

        return is_wp_error( $vendor_id ) ? $vendor_id : true;
    }

    /**
     * Permission check for writing a single vendor.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error
     */
    public function update_item_permissions_check( $request ) {
        return $this->get_item_permissions_check( $request );
    }

    /**
     * Permission check for reading a vendor's commission rate.
     *
     * Same isolation rule as the vendor resource: owner reads any, vendor reads
     * its own.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error
     */
    public function get_commission_permissions_check( $request ) {
        return $this->get_item_permissions_check( $request );
    }

    /**
     * Permission check for writing a vendor's commission rate.
     *
     * Owner only, and the owner must also be allowed to edit the vendor's
     * profile, which is where wp-admin sets this rate.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error
     */
    public function update_commission_permissions_check( $request ) {
        $allowed = $this->gate( $request );

        if ( is_wp_error( $allowed ) ) {
            return $allowed;
        }

        if ( ! $this->permissions()->is_owner() ) {
            return $this->error(
                self::ERROR_FORBIDDEN,
                __( 'Only the site owner may change a vendor commission rate.', 'wc-vendors' ),
                rest_authorization_required_code()
            );
        }

        if ( ! current_user_can( 'edit_user', $this->requested_id( $request ) ) ) {
            return $this->error(
                self::ERROR_FORBIDDEN,
                __( 'You are not allowed to change this vendor commission rate.', 'wc-vendors' ),
                rest_authorization_required_code()
            );
        }

        return true;
    }

    /**
     * Permission check for the approve, deny, activate and deactivate actions.
     *
     * Owner only. A vendor credential is refused even for its own record.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error
     */
    public function decision_permissions_check( $request ) {
        $allowed = $this->gate( $request );

        if ( is_wp_error( $allowed ) ) {
            return $allowed;
        }

        if ( ! $this->permissions()->is_owner() ) {
            return $this->error(
                self::ERROR_FORBIDDEN,
                __( 'Only the site owner may change a vendor status.', 'wc-vendors' ),
                rest_authorization_required_code()
            );
        }

        return true;
    }

    /**
     * Get a collection of vendors.
     *
     * A vendor credential always receives a single-item collection holding its
     * own record. Collection filters are ignored for a vendor, because the scope
     * comes from the credential.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response|WP_Error
     */
    public function get_items( $request ) {
        if ( ! $this->permissions()->is_owner() ) {
            $vendor_id = $this->permissions()->get_scope_vendor_id();
            $settings  = new Vendors_Settings( $vendor_id );

            if ( ! $settings->is_valid() ) {
                return $this->error(
                    self::ERROR_INVALID_ID,
                    __( 'Invalid vendor ID.', 'wc-vendors' ),
                    404
                );
            }

            $response = rest_ensure_response( array( $this->prepare_vendor( $settings, $request, false ) ) );
            $response->header( 'X-WP-Total', 1 );
            $response->header( 'X-WP-TotalPages', 1 );

            return $response;
        }

        $page     = max( 1, (int) $request['page'] );
        $per_page = max( 1, (int) $request['per_page'] );

        $args = array(
            'role__in' => array( 'vendor', 'pending_vendor' ),
            'number'   => $per_page,
            'paged'    => $page,
            'orderby'  => 'ID',
            'order'    => 'ASC',
            'fields'   => 'ID',
        );

        if ( ! empty( $request['search'] ) ) {
            $args['search']         = '*' . $request['search'] . '*';
            $args['search_columns'] = array( 'user_login', 'user_nicename', 'user_email', 'display_name' );
        }

        if ( ! empty( $request['status'] ) ) {
            $args = array_merge( $args, self::status_query_args( $request['status'] ) );
        }

        $query = new WP_User_Query( $args );
        $ids   = array_map( 'intval', (array) $query->get_results() );

        // A query with fields => 'ID' primes no cache. Warm the user and usermeta
        // caches in two queries so Vendors_Settings does not query per row.
        if ( $ids ) {
            cache_users( $ids );
        }

        $vendors = array();

        foreach ( $ids as $vendor_id ) {
            $settings = new Vendors_Settings( $vendor_id );

            if ( ! $settings->is_valid() ) {
                continue;
            }

            $vendors[] = $this->prepare_vendor( $settings, $request, false );
        }

        $total    = (int) $query->get_total();
        $response = rest_ensure_response( $vendors );
        $response->header( 'X-WP-Total', $total );
        $response->header( 'X-WP-TotalPages', (int) ceil( $total / $per_page ) );

        return $response;
    }

    /**
     * Build the query arguments for a status filter.
     *
     * Mirrors the rule in Vendors_Settings::get_vendor_status(): active is a
     * vendor that is not pending and whose status meta is set and not inactive.
     *
     * @param string $status One of pending, active, inactive.
     * @return array
     */
    public static function status_query_args( $status ) {
        if ( 'pending' === $status ) {
            return array( 'role__in' => array( 'pending_vendor' ) );
        }

        $args = array(
            'role__in'     => array( 'vendor' ),
            'role__not_in' => array( 'pending_vendor' ),
        );

        if ( 'active' === $status ) {
            $args['meta_query'] = array( // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_query
                'relation' => 'AND',
                array(
                    'key'     => '_wcv_vendor_status',
                    'value'   => 'inactive',
                    'compare' => '!=',
                ),
                array(
                    'key'     => '_wcv_vendor_status',
                    'value'   => '',
                    'compare' => '!=',
                ),
            );

            return $args;
        }

        $args['meta_query'] = array( // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_query
            'relation' => 'OR',
            array(
                'key'     => '_wcv_vendor_status',
                'compare' => 'NOT EXISTS',
            ),
            array(
                'key'     => '_wcv_vendor_status',
                'value'   => 'inactive',
                'compare' => '=',
            ),
            array(
                'key'     => '_wcv_vendor_status',
                'value'   => '',
                'compare' => '=',
            ),
        );

        return $args;
    }

    /**
     * Get a single vendor.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response|WP_Error
     */
    public function get_item( $request ) {
        $vendor_id = $this->resolve_vendor_id( $request );

        if ( is_wp_error( $vendor_id ) ) {
            return $vendor_id;
        }

        $settings = new Vendors_Settings( $vendor_id );

        if ( ! $settings->is_valid() ) {
            return $this->error(
                self::ERROR_INVALID_ID,
                __( 'Invalid vendor ID.', 'wc-vendors' ),
                404
            );
        }

        return $this->prepare_item_for_response( $settings, $request );
    }

    /**
     * Update a vendor's settings.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response|WP_Error
     */
    public function update_item( $request ) {
        $vendor_id = $this->resolve_vendor_id( $request );

        if ( is_wp_error( $vendor_id ) ) {
            return $vendor_id;
        }

        $settings = new Vendors_Settings( $vendor_id );

        if ( ! $settings->is_valid() ) {
            return $this->error(
                self::ERROR_INVALID_ID,
                __( 'Invalid vendor ID.', 'wc-vendors' ),
                404
            );
        }

        $refused = $this->check_refused_fields( $request );

        if ( is_wp_error( $refused ) ) {
            return $refused;
        }

        foreach ( $this->writable_fields() as $field ) {
            if ( ! $request->has_param( $field ) ) {
                continue;
            }

            $value = $request->get_param( $field );

            $settings->set_prop( $field, $value );
        }

        wcv_restate_sticky_settings(
            $settings,
            $vendor_id,
            array( 'vacation_mode', 'lock_new_products', 'lock_edit_products', 'html_enabled' )
        );

        $saved = $settings->save();

        // An empty change set is not an error on a REST write: a repeated PUT
        // with the same values must stay idempotent.
        if ( is_wp_error( $saved ) && 'no_changes' !== $saved->get_error_code() ) {
            return $this->error( self::ERROR_INVALID_VALUE, $saved->get_error_message(), 400 );
        }

        // Re-read so the response carries the stored, sanitized values and the
        // regenerated shop slug.
        $fresh = new Vendors_Settings( $vendor_id );

        return $this->prepare_item_for_response( $fresh, $request );
    }

    /**
     * Get a vendor's commission rate.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response|WP_Error
     */
    public function get_commission( $request ) {
        $vendor_id = $this->resolve_vendor_id( $request );

        if ( is_wp_error( $vendor_id ) ) {
            return $vendor_id;
        }

        if ( ! WCV_Vendors::is_vendor( $vendor_id ) && ! WCV_Vendors::is_pending( $vendor_id ) ) {
            return $this->error(
                self::ERROR_INVALID_ID,
                __( 'Invalid vendor ID.', 'wc-vendors' ),
                404
            );
        }

        return rest_ensure_response( $this->prepare_commission( $vendor_id, $request ) );
    }

    /**
     * Update a vendor's commission rate.
     *
     * An empty body is idempotent: 200 with the current representation, nothing
     * written. A `null` rate removes the override, so the vendor falls back to
     * the global rate.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response|WP_Error
     */
    public function update_commission( $request ) {
        $vendor_id = $this->requested_id( $request );

        if ( ! WCV_Vendors::is_vendor( $vendor_id ) && ! WCV_Vendors::is_pending( $vendor_id ) ) {
            return $this->error(
                self::ERROR_INVALID_ID,
                __( 'Invalid vendor ID.', 'wc-vendors' ),
                404
            );
        }

        if ( $request->has_param( 'rate' ) ) {
            $rate = $request->get_param( 'rate' );

            if ( null === $rate ) {
                delete_user_meta( $vendor_id, 'pv_custom_commission_rate' );
            } else {
                update_user_meta( $vendor_id, 'pv_custom_commission_rate', wc_format_decimal( (float) $rate ) );
            }
        }

        return rest_ensure_response( $this->prepare_commission( $vendor_id, $request ) );
    }

    /**
     * Build a vendor commission-rate payload.
     *
     * An empty stored value and a missing meta row both read as `null`, so the
     * vendor falls back to the global rate.
     *
     * @param int             $vendor_id The vendor ID.
     * @param WP_REST_Request $request   Full details about the request.
     * @return array
     */
    protected function prepare_commission( $vendor_id, $request ) {
        $meta = get_user_meta( $vendor_id, 'pv_custom_commission_rate', true );

        $data = array(
            'vendor_id' => $vendor_id,
            'rate'      => ( '' === $meta ) ? null : (float) $meta,
        );

        $context = ! empty( $request['context'] ) ? $request['context'] : 'view';

        return $this->filter_response_by_context( $data, $context );
    }

    /**
     * Get the vendor commission-rate schema.
     *
     * @return array
     */
    public function get_commission_schema() {
        return array(
            '$schema'    => 'http://json-schema.org/draft-04/schema#',
            'title'      => 'vendor-commission',
            'type'       => 'object',
            'properties' => array(
                'vendor_id' => $this->field( __( 'Unique identifier for the vendor.', 'wc-vendors' ), 'integer', true ),
                'rate'      => array(
                    'description' => __( 'Vendor commission rate override, in percent. Null when the vendor uses the global rate.', 'wc-vendors' ),
                    'type'        => array( 'number', 'null' ),
                    'minimum'     => 0,
                    'maximum'     => 100,
                    'context'     => array( 'view', 'edit' ),
                ),
            ),
        );
    }

    /**
     * Refuse fields that belong to another route.
     *
     * These are writable on the vendor settings object but are not part of this
     * endpoint, so a caller migrating from `wcv-api/v1` gets a clear error
     * rather than a silent no-op.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error
     */
    protected function check_refused_fields( $request ) {
        $refused = array(
            'store_commission_rate' => __( 'The commission rate is not writable here. Use the vendor commission endpoint.', 'wc-vendors' ),
            'vendor_status'         => __( 'The vendor status is not writable here. Use the approve, deny, activate or deactivate endpoint.', 'wc-vendors' ),
            'html_enabled'          => __( 'The store HTML permission is not writable here. Only the marketplace owner may change it.', 'wc-vendors' ),
        );

        foreach ( $refused as $field => $message ) {
            if ( null !== $request->get_param( $field ) ) {
                return $this->error( self::ERROR_READONLY_FIELD, $message, 400 );
            }
        }

        return true;
    }

    /**
     * Approve a pending vendor.
     *
     * Returns the vendor resource with its new status.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response|WP_Error
     */
    public function approve_item( $request ) {
        $vendor_id = $this->run_decision( $request, 'wcv_approve_vendor' );

        if ( is_wp_error( $vendor_id ) ) {
            return $vendor_id;
        }

        return $this->prepare_item_for_response( new Vendors_Settings( $vendor_id ), $request );
    }

    /**
     * Deny a pending vendor.
     *
     * A denied user is no longer a vendor, so there is no vendor resource left
     * to return. The response follows the WordPress delete convention and
     * carries the record as it was before the decision.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response|WP_Error
     */
    public function deny_item( $request ) {
        $before = new Vendors_Settings( $this->requested_id( $request ) );

        if ( ! $before->is_valid() ) {
            return $this->error(
                self::ERROR_INVALID_ID,
                __( 'Invalid vendor ID.', 'wc-vendors' ),
                404
            );
        }

        $previous  = $this->prepare_vendor( $before, $request, true );
        $vendor_id = $this->run_decision( $request, 'wcv_deny_vendor' );

        if ( is_wp_error( $vendor_id ) ) {
            return $vendor_id;
        }

        return rest_ensure_response(
            array(
                'denied'   => true,
                'previous' => $previous,
            )
        );
    }

    /**
     * Activate a vendor.
     *
     * Returns the vendor resource with its new status.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response|WP_Error
     */
    public function activate_item( $request ) {
        return $this->run_status_change(
            $request,
            'wcv_activate_vendor',
            __( 'A pending vendor cannot be activated here. Use the approve endpoint.', 'wc-vendors' )
        );
    }

    /**
     * Deactivate a vendor.
     *
     * Returns the vendor resource with its new status.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response|WP_Error
     */
    public function deactivate_item( $request ) {
        return $this->run_status_change(
            $request,
            'wcv_deactivate_vendor',
            __( 'A pending vendor has no active status to change. Approve the vendor first, or use the deny endpoint to reject the application.', 'wc-vendors' )
        );
    }

    /**
     * Run an activate or deactivate transition.
     *
     * A pending vendor is refused before the helper runs: the admin screen
     * writes the status on a pending vendor, but the role still decides the
     * reported status, so the write would answer with an unchanged resource.
     *
     * @param WP_REST_Request $request         Full details about the request.
     * @param callable        $callback        The shared transition function.
     * @param string          $pending_message Message for a pending vendor.
     * @return WP_REST_Response|WP_Error
     */
    protected function run_status_change( $request, $callback, $pending_message ) {
        $vendor_id = $this->requested_id( $request );
        $settings  = new Vendors_Settings( $vendor_id );

        if ( ! $settings->is_valid() ) {
            return $this->error(
                self::ERROR_INVALID_ID,
                __( 'Invalid vendor ID.', 'wc-vendors' ),
                404
            );
        }

        if ( WCV_Vendors::is_pending( $vendor_id ) ) {
            return $this->error( self::ERROR_VENDOR_PENDING, $pending_message, 400 );
        }

        $result = call_user_func( $callback, $vendor_id );

        if ( is_wp_error( $result ) ) {
            return $this->map_status_error( $result );
        }

        return $this->prepare_item_for_response( new Vendors_Settings( $vendor_id ), $request );
    }

    /**
     * Map a transition helper error onto a stable REST code.
     *
     * @param WP_Error $error The helper error.
     * @return WP_Error
     */
    protected function map_status_error( $error ) {
        $codes = array(
            WCV_VENDOR_ALREADY_ACTIVE   => array( self::ERROR_STATUS_UNCHANGED, 409 ),
            WCV_VENDOR_ALREADY_INACTIVE => array( self::ERROR_STATUS_UNCHANGED, 409 ),
        );

        $code = $error->get_error_code();

        if ( isset( $codes[ $code ] ) ) {
            return $this->error( $codes[ $code ][0], $error->get_error_message(), $codes[ $code ][1] );
        }

        // Any other helper error is a failed save, which is a server-side fault.
        return $this->error( self::ERROR_STATUS_SAVE, $error->get_error_message(), 500 );
    }

    /**
     * Run an approve or deny decision.
     *
     * @param WP_REST_Request $request  Full details about the request.
     * @param callable        $callback The shared transition function.
     * @return int|WP_Error The vendor ID on success.
     */
    protected function run_decision( $request, $callback ) {
        $vendor_id = $this->requested_id( $request );
        $settings  = new Vendors_Settings( $vendor_id );

        if ( ! $settings->is_valid() ) {
            return $this->error(
                self::ERROR_INVALID_ID,
                __( 'Invalid vendor ID.', 'wc-vendors' ),
                404
            );
        }

        $result = call_user_func(
            $callback,
            $vendor_id,
            (string) $request['message'],
            (bool) $request['use_custom_message']
        );

        if ( is_wp_error( $result ) ) {
            return $this->error( self::ERROR_NOT_PENDING, $result->get_error_message(), 400 );
        }

        return $vendor_id;
    }

    /**
     * The fields a caller may write through this endpoint.
     *
     * The commission rate, the vendor status and every Pro store setting belong
     * to their own routes and are not writable here. The store HTML permission
     * is owner-controlled, so it is readable but never writable through this
     * endpoint. See check_refused_fields().
     *
     * @return string[]
     */
    protected function writable_fields() {
        $fields = array(
            'shop_name',
            'seller_info',
            'shop_description',
            'paypal_email',
            'payout_method',
            'paypal_masspay',
            'venmo_id',
            'bank_account_name',
            'bank_account_number',
            'bank_name',
            'bank_iban',
            'bank_routing_number',
            'bank_bic',
            'store_url',
            'store_phone',
            'store_address',
            'store_address2',
            'store_city',
            'store_postcode',
            'store_country',
            'store_state',
        );

        /**
         * Filter the vendor fields writable through `PUT /vendors/{id}`.
         *
         * @since 2.7.3
         *
         * @param string[] $fields Writable field names.
         */
        return (array) apply_filters( 'wcv_rest_vendor_writable_fields', $fields );
    }

    /**
     * The payout fields, returned on a single read only.
     *
     * @return string[]
     */
    protected function payout_fields() {
        return array(
            'paypal_email',
            'payout_method',
            'paypal_masspay',
            'venmo_id',
            'bank_account_name',
            'bank_account_number',
            'bank_name',
            'bank_iban',
            'bank_routing_number',
            'bank_bic',
        );
    }

    /**
     * Prepare a single vendor for response.
     *
     * @param Vendors_Settings $item    The vendor settings object.
     * @param WP_REST_Request  $request Full details about the request.
     * @return WP_REST_Response
     */
    public function prepare_item_for_response( $item, $request ) {
        return rest_ensure_response( $this->prepare_vendor( $item, $request, true ) );
    }

    /**
     * Build the vendor payload.
     *
     * @param Vendors_Settings $settings       The vendor settings object.
     * @param WP_REST_Request  $request        Full details about the request.
     * @param bool             $include_payout Whether to include the payout block.
     * @return array
     */
    protected function prepare_vendor( $settings, $request, $include_payout ) {
        $vendor_id = (int) $settings->get_prop( 'id' );

        $data = array(
            'id'               => $vendor_id,
            'display_name'     => (string) $settings->get_prop( 'display_name' ),
            'email'            => (string) $settings->get_prop( 'email' ),
            'registered'       => mysql_to_rfc3339( (string) $settings->get_prop( 'registered' ) ),
            'status'           => $settings->get_vendor_status(),
            'shop_name'        => (string) $settings->get_prop( 'shop_name' ),
            'shop_slug'        => (string) get_user_meta( $vendor_id, 'pv_shop_slug', true ),
            'shop_url'         => WCV_Vendors::get_vendor_shop_page( $vendor_id ),
            'shop_description' => (string) $settings->get_prop( 'shop_description' ),
            'seller_info'      => (string) $settings->get_prop( 'seller_info' ),
            'html_enabled'     => (string) $settings->get_prop( 'html_enabled' ),
            'store_url'        => (string) $settings->get_prop( 'store_url' ),
            'store_phone'      => (string) $settings->get_prop( 'store_phone' ),
            'store_address'    => (string) $settings->get_prop( 'store_address' ),
            'store_address2'   => (string) $settings->get_prop( 'store_address2' ),
            'store_city'       => (string) $settings->get_prop( 'store_city' ),
            'store_postcode'   => (string) $settings->get_prop( 'store_postcode' ),
            'store_country'    => (string) $settings->get_prop( 'store_country' ),
            'store_state'      => (string) $settings->get_prop( 'store_state' ),
        );

        if ( $include_payout ) {
            foreach ( $this->payout_fields() as $field ) {
                $data[ $field ] = (string) $settings->get_prop( $field );
            }
        }

        $context = ! empty( $request['context'] ) ? $request['context'] : 'view';
        $data    = $this->filter_response_by_context( $data, $context );

        /**
         * Filter the prepared vendor payload.
         *
         * @since 2.7.3
         *
         * @param array            $data     The prepared payload.
         * @param Vendors_Settings $settings The vendor settings object.
         * @param WP_REST_Request  $request  The request.
         */
        return apply_filters( 'wcv_rest_prepare_vendor', $data, $settings, $request );
    }

    /**
     * Get the vendor payload for a webhook delivery. Excludes the payout block.
     *
     * @param int $id Vendor ID.
     * @return array
     */
    public function get_webhook_payload( $id ) {
        $settings = new Vendors_Settings( $id );

        if ( $settings->is_valid() ) {
            return $this->prepare_vendor( $settings, new WP_REST_Request(), false );
        }

        // A denied vendor loses the vendor role before the event fires, so the
        // full representation is gone. Deliver a minimal identity instead of an
        // empty payload.
        $user = get_userdata( $id );

        if ( ! $user ) {
            return array();
        }

        return array(
            'id'           => (int) $id,
            'display_name' => $user->display_name,
            'email'        => $user->user_email,
        );
    }

    /**
     * Get the vendor schema.
     *
     * @return array
     */
    public function get_item_schema() {
        $properties = array(
            'id'               => $this->field( __( 'Unique identifier for the vendor.', 'wc-vendors' ), 'integer', true ),
            'display_name'     => $this->field( __( 'Vendor display name.', 'wc-vendors' ), 'string', true ),
            'email'            => $this->field( __( 'Vendor account email address.', 'wc-vendors' ), 'string', true, 'email' ),
            'registered'       => $this->field( __( 'The date the vendor registered, in RFC3339 format.', 'wc-vendors' ), 'string', true, 'date-time' ),
            'status'           => array(
                'description' => __( 'Vendor status.', 'wc-vendors' ),
                'type'        => 'object',
                'context'     => array( 'view', 'edit' ),
                'readonly'    => true,
                'properties'  => array(
                    'value'     => array(
                        'description' => __( 'Status slug.', 'wc-vendors' ),
                        'type'        => 'string',
                        'enum'        => array( 'active', 'pending', 'inactive' ),
                        'context'     => array( 'view', 'edit' ),
                        'readonly'    => true,
                    ),
                    'formatted' => array(
                        'description' => __( 'Translated status label.', 'wc-vendors' ),
                        'type'        => 'string',
                        'context'     => array( 'view', 'edit' ),
                        'readonly'    => true,
                    ),
                ),
            ),
            'shop_name'        => $this->field( __( 'Store name.', 'wc-vendors' ), 'string' ),
            'shop_slug'        => $this->field( __( 'Store slug, generated from the store name.', 'wc-vendors' ), 'string', true ),
            'shop_url'         => $this->field( __( 'Public store page URL.', 'wc-vendors' ), 'string', true, 'uri' ),
            'shop_description' => array(
                'description'       => __( 'Store description. HTML is stripped unless the marketplace allows it.', 'wc-vendors' ),
                'type'              => 'string',
                'context'           => array( 'view', 'edit' ),
                'arg_options'       => array(
                    'sanitize_callback' => 'wp_kses_post',
                ),
            ),
            'seller_info'      => array(
                'description' => __( 'Seller information. HTML is stripped unless the marketplace allows it.', 'wc-vendors' ),
                'type'        => 'string',
                'context'     => array( 'view', 'edit' ),
                'arg_options' => array(
                    'sanitize_callback' => 'wp_kses_post',
                ),
            ),
            'html_enabled'     => array(
                'description' => __( 'Whether the store description may contain HTML.', 'wc-vendors' ),
                'type'        => 'string',
                'enum'        => array( 'yes', 'no' ),
                'context'     => array( 'view', 'edit' ),
                'readonly'    => true,
            ),
            'store_url'        => $this->field( __( 'Company website URL.', 'wc-vendors' ), 'string', false, 'uri' ),
            'store_phone'      => $this->field( __( 'Store phone number.', 'wc-vendors' ), 'string' ),
            'store_address'    => $this->field( __( 'Store address line 1.', 'wc-vendors' ), 'string' ),
            'store_address2'   => $this->field( __( 'Store address line 2.', 'wc-vendors' ), 'string' ),
            'store_city'       => $this->field( __( 'Store city.', 'wc-vendors' ), 'string' ),
            'store_postcode'   => $this->field( __( 'Store postcode.', 'wc-vendors' ), 'string' ),
            'store_country'    => $this->field( __( 'Store country code.', 'wc-vendors' ), 'string' ),
            'store_state'      => $this->field( __( 'Store state code.', 'wc-vendors' ), 'string' ),

            // Payout fields. Returned on a single vendor read only, never in the
            // collection, so a single owner request cannot dump every vendor's
            // bank details.
            'paypal_email'        => $this->field( __( 'PayPal payout email address.', 'wc-vendors' ), 'string', false, 'email' ),
            'payout_method'       => $this->field( __( 'Commission payout method.', 'wc-vendors' ), 'string' ),
            'paypal_masspay'      => $this->field( __( 'PayPal MassPay wallet.', 'wc-vendors' ), 'string' ),
            'venmo_id'            => $this->field( __( 'Venmo identifier.', 'wc-vendors' ), 'string' ),
            'bank_account_name'   => $this->field( __( 'Bank account name.', 'wc-vendors' ), 'string' ),
            'bank_account_number' => $this->field( __( 'Bank account number.', 'wc-vendors' ), 'string' ),
            'bank_name'           => $this->field( __( 'Bank name.', 'wc-vendors' ), 'string' ),
            'bank_iban'           => $this->field( __( 'Bank IBAN.', 'wc-vendors' ), 'string' ),
            'bank_routing_number' => $this->field( __( 'Bank routing number.', 'wc-vendors' ), 'string' ),
            'bank_bic'            => $this->field( __( 'Bank BIC or SWIFT code.', 'wc-vendors' ), 'string' ),
        );

        return array(
            '$schema'    => 'http://json-schema.org/draft-04/schema#',
            'title'      => 'vendor',
            'type'       => 'object',
            'properties' => $properties,
        );
    }

    /**
     * Collection parameters for the vendor list.
     *
     * Identity is never a collection parameter. The `search` filter matches the
     * WordPress user columns, not the store name.
     *
     * @return array
     */
    public function get_collection_params() {
        $params = parent::get_collection_params();

        $params['status'] = array(
            'description'       => __( 'Limit results to vendors with a given status.', 'wc-vendors' ),
            'type'              => 'string',
            'enum'              => array( 'active', 'pending', 'inactive' ),
            'sanitize_callback' => 'sanitize_key',
            'validate_callback' => 'rest_validate_request_arg',
        );

        return $params;
    }
}
