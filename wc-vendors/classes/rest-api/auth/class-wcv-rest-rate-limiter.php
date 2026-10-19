<?php
/**
 * Rate limiter for `wcvendors/v1`.
 *
 * Stores one expiring transient per fixed window. Authenticated requests key on
 * the vendor or owner plus route; the open endpoint keys on IP plus route with a
 * lower limit.
 *
 * @package WCVendors/RestApi
 * @since   2.7.3
 */

defined( 'ABSPATH' ) || exit;

/**
 * Class WCV_REST_Rate_Limiter.
 */
class WCV_REST_Rate_Limiter {

    /**
     * Window length in seconds.
     *
     * @var int
     */
    protected $window;

    /**
     * Request budget for an authenticated key within one window.
     *
     * @var int
     */
    protected $auth_limit;

    /**
     * Request budget for an open (per-IP) key within one window.
     *
     * @var int
     */
    protected $open_limit;

    /**
     * Constructor.
     *
     * @param int $window     Window length in seconds. Default 60.
     * @param int $auth_limit Authenticated budget per window. Default 100.
     * @param int $open_limit Open (per-IP) budget per window. Default 20.
     */
    public function __construct( $window = 60, $auth_limit = 100, $open_limit = 20 ) {
        $this->window     = (int) $window;
        $this->auth_limit = (int) $auth_limit;
        $this->open_limit = (int) $open_limit;
    }

    /**
     * Is rate limiting active for this request.
     *
     * Disabled on local and development environments, as the old abstract did.
     * A test can force it on with the `wcv_rest_rate_limiting_enabled` filter.
     *
     * @return bool
     */
    public function is_enabled() {
        $env     = wp_get_environment_type();
        $enabled = ! in_array( $env, array( 'local', 'development' ), true );

        /**
         * Filter whether the REST rate limiter is active.
         *
         * @since 2.7.3
         *
         * @param bool $enabled Whether the limiter runs.
         */
        return (bool) apply_filters( 'wcv_rest_rate_limiting_enabled', $enabled );
    }

    /**
     * Check an authenticated request against the budget.
     *
     * @param string $route     The route being requested.
     * @param int    $actor_id  Vendor or owner user ID.
     * @return true|WP_Error True when within budget, WP_Error 429 otherwise.
     */
    public function check_authenticated( $route, $actor_id ) {
        $key = 'auth_' . md5( (int) $actor_id . '|' . $route );

        return $this->consume( $key, $this->auth_limit );
    }

    /**
     * Check an open (unauthenticated) request against the lower per-IP budget.
     *
     * @param string $route The route being requested.
     * @return true|WP_Error True when within budget, WP_Error 429 otherwise.
     */
    public function check_open( $route ) {
        $key = 'open_' . md5( $this->get_ip() . '|' . $route );

        return $this->consume( $key, $this->open_limit );
    }

    /**
     * Consume one unit from a window and report whether the caller is over.
     *
     * @param string $key   Bare key (a transient prefix is added).
     * @param int    $limit Budget for the window.
     * @return true|WP_Error
     */
    protected function consume( $key, $limit ) {
        if ( ! $this->is_enabled() ) {
            return true;
        }

        $transient = 'wcv_rl_' . $key;
        $now       = time();
        $window    = get_transient( $transient );

        // Start a fresh fixed window when none is open or the current one expired.
        if ( ! is_array( $window ) || ! isset( $window['count'], $window['reset'] ) || $window['reset'] <= $now ) {
            $window = array(
                'count' => 0,
                'reset' => $now + $this->window,
            );
        }

        ++$window['count'];

        // Pin the expiry to the window start, not to each request, so the window
        // is truly fixed: the counter clears itself when the window ends and never
        // accumulates across windows under sustained traffic.
        $ttl = max( 1, $window['reset'] - $now );
        set_transient( $transient, $window, $ttl );

        $count = (int) $window['count'];

        if ( $count > $limit ) {
            return new WP_Error(
                WCV_REST_Controller::ERROR_RATE_LIMITED,
                __( 'Too many requests. Please try again later.', 'wc-vendors' ),
                array( 'status' => 429 )
            );
        }

        return true;
    }

    /**
     * Get the caller IP address.
     *
     * @return string
     */
    protected function get_ip() {
        if ( ! isset( $_SERVER['REMOTE_ADDR'] ) ) {
            return 'unknown';
        }

        $ip = filter_var( wp_unslash( $_SERVER['REMOTE_ADDR'] ), FILTER_VALIDATE_IP );

        return $ip ? (string) $ip : 'invalid';
    }
}
