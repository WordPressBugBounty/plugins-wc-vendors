<?php
/**
 * Permission resolver, vendor-scoping and status gate for `wcvendors/v1`.
 *
 * Maps the authenticated user to owner or vendor scope and injects the vendor
 * filter into every query. Identity comes from the credential, never from a
 * request parameter.
 *
 * @package WCVendors/RestApi
 * @since   2.7.3
 */

defined( 'ABSPATH' ) || exit;

/**
 * Class WCV_REST_Permissions.
 */
class WCV_REST_Permissions {

    const SCOPE_OWNER  = 'owner';
    const SCOPE_VENDOR = 'vendor';
    const SCOPE_NONE   = 'none';

    /**
     * Per-request cache of resolved active status, keyed by vendor ID.
     *
     * A single permission check touches the status more than once, so the
     * resolved value is memoised for the life of the resolver.
     *
     * @var array<int,bool>
     */
    protected $active_cache = array();

    /**
     * Resolve the current user to a scope.
     *
     * @param int|null $user_id Optional user ID. Defaults to the current user.
     * @return string One of the SCOPE_* constants.
     */
    public function get_scope( $user_id = null ) {
        $user_id = $user_id ? (int) $user_id : get_current_user_id();

        if ( ! $user_id ) {
            return self::SCOPE_NONE;
        }

        if ( user_can( $user_id, 'manage_woocommerce' ) ) {
            return self::SCOPE_OWNER;
        }

        if ( WCV_Vendors::is_vendor( $user_id ) && $this->is_vendor_active( $user_id ) ) {
            return self::SCOPE_VENDOR;
        }

        return self::SCOPE_NONE;
    }

    /**
     * Is the current user the site owner scope.
     *
     * @param int|null $user_id Optional user ID.
     * @return bool
     */
    public function is_owner( $user_id = null ) {
        return self::SCOPE_OWNER === $this->get_scope( $user_id );
    }

    /**
     * Is the current user a vendor scope.
     *
     * @param int|null $user_id Optional user ID.
     * @return bool
     */
    public function is_vendor_scope( $user_id = null ) {
        return self::SCOPE_VENDOR === $this->get_scope( $user_id );
    }

    /**
     * Get the vendor ID that scopes a vendor credential.
     *
     * @param int|null $user_id Optional user ID.
     * @return int Vendor ID, or 0 when the user is not a vendor scope.
     */
    public function get_scope_vendor_id( $user_id = null ) {
        $user_id = $user_id ? (int) $user_id : get_current_user_id();

        if ( ! $this->is_vendor_scope( $user_id ) ) {
            return 0;
        }

        return (int) WCV_Vendors::get_vendor_id( $user_id );
    }

    /**
     * Is the vendor active.
     *
     * A pending or inactive vendor is refused even when the credential itself is
     * valid. This is how a suspended vendor's live credential stops working.
     *
     * Reads the role and the `_wcv_vendor_status` meta directly, reproducing
     * Vendors_Settings::get_vendor_status()'s active rule without hydrating the
     * full settings object on this per-request permission gate.
     *
     * @param int $vendor_id Vendor user ID.
     * @return bool
     */
    public function is_vendor_active( $vendor_id ) {
        $vendor_id = (int) $vendor_id;

        if ( isset( $this->active_cache[ $vendor_id ] ) ) {
            return $this->active_cache[ $vendor_id ];
        }

        $user = $vendor_id ? get_userdata( $vendor_id ) : false;

        // Mirror Vendors_Settings::is_valid(): only a vendor or pending vendor
        // is a valid subject for a status check.
        if ( ! $user || ! ( WCV_Vendors::is_vendor( $vendor_id ) || WCV_Vendors::is_pending( $vendor_id ) ) ) {
            $this->active_cache[ $vendor_id ] = false;

            return false;
        }

        $roles  = (array) $user->roles;
        $status = get_user_meta( $vendor_id, '_wcv_vendor_status', true );

        // Mirror get_vendor_status(): active only for a vendor (not pending)
        // whose status is set and not inactive.
        $active = in_array( 'vendor', $roles, true )
            && ! in_array( 'pending_vendor', $roles, true )
            && $status
            && 'inactive' !== $status;

        $this->active_cache[ $vendor_id ] = $active;

        return $active;
    }

    /**
     * Gate a request to owner or active-vendor scope.
     *
     * Concrete controllers call this from their `permission_callback` and then
     * add their own capability check on top.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error True when allowed, WP_Error otherwise.
     */
    public function check( $request ) {
        $user_id = get_current_user_id();
        $scope   = $this->get_scope( $user_id );

        if ( self::SCOPE_OWNER === $scope ) {
            return true;
        }

        // A valid credential for a vendor whose status is not active is refused
        // with a distinct code, so a caller can tell suspension from lack of
        // permission.
        if ( $user_id && WCV_Vendors::is_vendor( $user_id ) && ! $this->is_vendor_active( $user_id ) ) {
            return new WP_Error(
                WCV_REST_Controller::ERROR_VENDOR_INACTIVE,
                __( 'This vendor account is not active.', 'wc-vendors' ),
                array( 'status' => rest_authorization_required_code() )
            );
        }

        if ( self::SCOPE_VENDOR === $scope ) {
            return true;
        }

        return new WP_Error(
            WCV_REST_Controller::ERROR_FORBIDDEN,
            __( 'You are not allowed to access this resource.', 'wc-vendors' ),
            array( 'status' => rest_authorization_required_code() )
        );
    }

    /**
     * Inject the vendor filter into query arguments.
     *
     * For a vendor scope, force the query to the vendor's own records. For an
     * owner scope, the arguments pass through unchanged. Consumers pass the
     * meta or author key that their query uses.
     *
     * @param array    $args     Query arguments to scope.
     * @param string   $arg_key  The argument key that carries the vendor ID.
     * @param int|null $user_id Optional user ID. Defaults to the current user.
     * @return array Scoped query arguments.
     */
    public function scope_query_args( $args, $arg_key, $user_id = null ) {
        $vendor_id = $this->get_scope_vendor_id( $user_id );

        if ( $vendor_id ) {
            $args[ $arg_key ] = $vendor_id;
        }

        return $args;
    }
}
