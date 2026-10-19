<?php
/**
 * Base controller for the public `wcvendors/v1` REST API.
 *
 * Extends WordPress core's `WP_REST_Controller`. Concrete resource controllers
 * extend this class. The base registers no routes and denies every request until
 * a consumer supplies a real permission check.
 *
 * @package WCVendors/RestApi
 * @since   2.7.3
 */

defined( 'ABSPATH' ) || exit;

/**
 * Class WCV_REST_Controller.
 */
abstract class WCV_REST_Controller extends WP_REST_Controller {

    /**
     * The public namespace for every route on this base.
     *
     * @var string
     */
    protected $namespace = 'wcvendors/v1';

    /**
     * Stable error codes.
     *
     * Tests assert on these codes, never on the message. Keep them stable.
     */
    const ERROR_FORBIDDEN           = 'wcv_rest_forbidden';
    const ERROR_VENDOR_INACTIVE     = 'wcv_rest_vendor_inactive';
    const ERROR_RATE_LIMITED        = 'wcv_rest_rate_limited';
    const ERROR_APP_PASSWORD_EXISTS = 'wcv_rest_app_password_exists';
    const ERROR_APP_PASSWORDS_OFF   = 'wcv_rest_app_passwords_unavailable';

    /**
     * Shared permission resolver.
     *
     * @var WCV_REST_Permissions|null
     */
    protected $permissions = null;

    /**
     * Shared rate limiter.
     *
     * @var WCV_REST_Rate_Limiter|null
     */
    protected $rate_limiter = null;

    /**
     * Get the shared permission resolver.
     *
     * @return WCV_REST_Permissions
     */
    protected function permissions() {
        if ( null === $this->permissions ) {
            $this->permissions = new WCV_REST_Permissions();
        }

        return $this->permissions;
    }

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
     * Gate a request through the shared scope check and the rate limiter.
     *
     * Concrete controllers call this from their permission callbacks and then add
     * their own capability or scoping check on top.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error
     */
    protected function gate( $request ) {
        $allowed = $this->permissions()->check( $request );

        if ( is_wp_error( $allowed ) ) {
            return $allowed;
        }

        // Replace the ID segments before keying the limiter. get_route() returns
        // the concrete path, so /vendors/6 and /vendors/7 would each get their own
        // budget. WP_REST_Request carries no route pattern to read instead.
        $route = preg_replace( '#/\d+#', '/{id}', $request->get_route() );

        return $this->rate_limiter()->check_authenticated( $route, get_current_user_id() );
    }

    /**
     * Get the numeric ID named in the route path.
     *
     * Read from the URL parameters only. `WP_REST_Request::get_param()` prefers a
     * body value over a path value, so a request could otherwise name one record
     * in the path and another in the body.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return int
     */
    protected function requested_id( $request ) {
        $url_params = $request->get_url_params();

        return isset( $url_params['id'] ) ? absint( $url_params['id'] ) : 0;
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
     * Default permission check: deny.
     *
     * A concrete controller overrides this with a real scope check through the
     * permission resolver. The safe default mirrors the old abstract, which
     * returned false, so a controller that forgets a check exposes nothing.
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error
     */
    public function permissions_check( $request ) {
        return $this->error(
            self::ERROR_FORBIDDEN,
            __( 'You are not allowed to access this resource.', 'wc-vendors' ),
            rest_authorization_required_code()
        );
    }

    /**
     * Build a WooCommerce-shaped REST error with a stable code.
     *
     * @param string $code    One of the ERROR_* constants.
     * @param string $message Human-readable message. Tests must not assert on it.
     * @param int    $status  HTTP status code.
     * @return WP_Error
     */
    protected function error( $code, $message, $status = 400 ) {
        return new WP_Error( $code, $message, array( 'status' => (int) $status ) );
    }

    /**
     * Standard collection parameters shared by list endpoints.
     *
     * Concrete controllers merge their own filters on top. Identity is never a
     * collection parameter: a vendor is scoped from the credential, never from a
     * request value.
     *
     * @return array
     */
    public function get_collection_params() {
        return array(
            'page'     => array(
                'description'       => __( 'Current page of the collection.', 'wc-vendors' ),
                'type'              => 'integer',
                'default'           => 1,
                'minimum'           => 1,
                'sanitize_callback' => 'absint',
                'validate_callback' => 'rest_validate_request_arg',
            ),
            'per_page' => array(
                'description'       => __( 'Maximum number of items to return per page.', 'wc-vendors' ),
                'type'              => 'integer',
                'default'           => 10,
                'minimum'           => 1,
                'maximum'           => 100,
                'sanitize_callback' => 'absint',
                'validate_callback' => 'rest_validate_request_arg',
            ),
            'search'   => array(
                'description'       => __( 'Limit results to those matching a string.', 'wc-vendors' ),
                'type'              => 'string',
                'sanitize_callback' => 'sanitize_text_field',
                'validate_callback' => 'rest_validate_request_arg',
            ),
        );
    }
}
