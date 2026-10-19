<?php
/**
 * Loader for the public `wcvendors/v1` REST API.
 *
 * Wires the shared REST infrastructure. `WCV_DISABLE_REST_API` removes the
 * public surface; `WCV_DISABLE_ABILITIES` removes abilities. The vendor
 * credential cap always loads, as it protects a WordPress core feature.
 *
 * @package WCVendors/RestApi
 * @since   2.7.3
 */

defined( 'ABSPATH' ) || exit;

/**
 * Class WCV_REST_API_Loader.
 *
 * Includes the foundation classes and boots the always-on services.
 */
class WCV_REST_API_Loader {

    /**
     * Constructor.
     */
    public function __construct() {
        // The vendor credential cap protects a WordPress core feature
        // (Application Passwords), so it boots even when the public REST surface
        // is disabled. It needs the base controller only for the shared
        // error-code constants; that class is abstract and registers nothing on
        // load.
        require_once __DIR__ . '/controllers/class-wcv-rest-controller.php';
        require_once __DIR__ . '/auth/class-wcv-rest-app-password-cap.php';
        new WCV_REST_App_Password_Cap();

        if ( defined( 'WCV_DISABLE_REST_API' ) && WCV_DISABLE_REST_API ) {
            return;
        }

        $this->includes();
        $this->init();
    }

    /**
     * Include the foundation classes.
     */
    public function includes() {
        require_once __DIR__ . '/auth/class-wcv-rest-permissions.php';
        require_once __DIR__ . '/auth/class-wcv-rest-rate-limiter.php';
        require_once __DIR__ . '/webhooks/class-wcv-webhook-bridge.php';
        require_once __DIR__ . '/webhooks/class-wcv-webhook-topics.php';
        require_once __DIR__ . '/abilities/class-wcv-abilities.php';
        require_once __DIR__ . '/abilities/class-wcv-marketplace-abilities.php';
        require_once __DIR__ . '/controllers/class-wcv-rest-vendors-controller.php';
        require_once __DIR__ . '/controllers/class-wcv-rest-orders-controller.php';
        require_once __DIR__ . '/controllers/class-wcv-rest-commissions-controller.php';
        require_once __DIR__ . '/controllers/class-wcv-rest-reports-controller.php';
        require_once __DIR__ . '/controllers/class-wcv-rest-commission-settings-controller.php';
    }

    /**
     * Boot the services that register their own hooks.
     *
     * The base controller, permission resolver and rate limiter are helpers.
     * Consumers instantiate them; they do not self-hook. The credential cap boots
     * in the constructor so the REST kill switch does not remove it. The resource
     * controllers, webhook bridge and abilities harness attach WordPress hooks,
     * so they boot here.
     */
    public function init() {
        add_action( 'rest_api_init', array( $this, 'register_routes' ) );
        add_filter( 'woocommerce_rest_is_request_to_rest_api', array( $this, 'claim_woocommerce_auth' ) );
        add_filter( 'rest_authentication_errors', array( $this, 'status_authentication_error' ), 99 );

        new WCV_Webhook_Bridge();
        new WCV_Webhook_Topics();

        if ( function_exists( 'wp_register_ability' ) && ! ( defined( 'WCV_DISABLE_ABILITIES' ) && WCV_DISABLE_ABILITIES ) ) {
            new WCV_Abilities();
            new WCV_Marketplace_Abilities();
        }
    }

    /**
     * Let WooCommerce authenticate a consumer key on this namespace.
     *
     * The namespace does not start with `wc-`, so WC_REST_Authentication ignores
     * it and WordPress handles the credential. That is what Application Passwords
     * need. A WooCommerce consumer key is not a WordPress credential, though, so
     * only WooCommerce can validate one.
     *
     * Claim the request for WooCommerce when, and only when, it carries a
     * consumer key. Every other request stays with the core authentication chain.
     *
     * @param bool $is_rest_api Whether WooCommerce claims the request.
     * @return bool
     */
    public function claim_woocommerce_auth( $is_rest_api ) {
        if ( ! $this->is_own_request() ) {
            return $is_rest_api;
        }

        // phpcs:disable WordPress.Security.NonceVerification.Recommended
        $key = ! empty( $_GET['consumer_key'] ) ? sanitize_text_field( wp_unslash( $_GET['consumer_key'] ) ) : '';
        // phpcs:enable WordPress.Security.NonceVerification.Recommended

        if ( '' === $key && isset( $_SERVER['PHP_AUTH_USER'] ) ) {
            $key = sanitize_text_field( wp_unslash( $_SERVER['PHP_AUTH_USER'] ) );
        }

        return 0 === strpos( $key, 'ck_' ) ? true : $is_rest_api;
    }

    /**
     * Give an authentication failure on this namespace an HTTP status.
     *
     * A failed credential can reach the REST server as a WP_Error carrying no
     * status, which the server reports as a 500. A refused credential is a 401.
     *
     * This is still load-bearing after the rename to `wcvendors/v1`. A single
     * unknown credential returns 401 without it, so a hand-made request makes
     * this look like dead code, but the isolation spec still fails with a 500
     * when it is removed. Run the API suite before touching it.
     *
     * With Application Passwords off, a Basic Auth credential that is not a
     * WooCommerce key gets our own code, with or without a Basic Auth plugin.
     *
     * @param WP_Error|null|true $error The authentication result.
     * @return WP_Error|null|true
     */
    public function status_authentication_error( $error ) {
        if ( ! $this->is_own_request() ) {
            return $error;
        }

        if ( $this->is_app_password_refused( $error ) ) {
            return new WP_Error(
                WCV_REST_Controller::ERROR_APP_PASSWORDS_OFF,
                __( 'This site has turned Application Passwords off. Use a WooCommerce REST API key, or ask the site owner to turn Application Passwords on.', 'wc-vendors' ),
                array( 'status' => 401 )
            );
        }

        if ( ! is_wp_error( $error ) ) {
            return $error;
        }

        $data = $error->get_error_data();

        if ( is_array( $data ) && isset( $data['status'] ) ) {
            return $error;
        }

        $error->add_data( array( 'status' => 401 ), $error->get_error_code() );

        return $error;
    }

    /**
     * Was an Application Password sent while Application Passwords are off.
     *
     * @param WP_Error|null|true $error The authentication result.
     * @return bool
     */
    protected function is_app_password_refused( $error ) {
        if ( is_wp_error( $error ) && 'application_passwords_disabled' === $error->get_error_code() ) {
            return true;
        }

        if ( null !== $error || wp_is_application_passwords_available() || ! isset( $_SERVER['PHP_AUTH_USER'] ) || 0 !== get_current_user_id() ) {
            return false;
        }

        return 0 !== strpos( sanitize_text_field( wp_unslash( $_SERVER['PHP_AUTH_USER'] ) ), 'ck_' );
    }

    /**
     * Is the current request aimed at the `wcvendors/v1` namespace.
     *
     * @return bool
     */
    protected function is_own_request() {
        $prefix = trailingslashit( rest_get_url_prefix() ) . 'wcvendors/';
        $path   = isset( $_SERVER['REQUEST_URI'] ) ? esc_url_raw( wp_unslash( $_SERVER['REQUEST_URI'] ) ) : '';

        // phpcs:disable WordPress.Security.NonceVerification.Recommended
        $route = isset( $_GET['rest_route'] ) ? sanitize_text_field( wp_unslash( $_GET['rest_route'] ) ) : '';
        // phpcs:enable WordPress.Security.NonceVerification.Recommended

        return false !== strpos( $path, $prefix ) || 0 === strpos( ltrim( $route, '/' ), 'wcvendors/' );
    }

    /**
     * Register the public REST controllers.
     */
    public function register_routes() {
        $vendors = new WCV_REST_Vendors_Controller();
        $vendors->register_routes();

        $orders = new WCV_REST_Orders_Controller();
        $orders->register_routes();

        $commissions = new WCV_REST_Commissions_Controller();
        $commissions->register_routes();

        $reports = new WCV_REST_Reports_Controller();
        $reports->register_routes();

        $commission_settings = new WCV_REST_Commission_Settings_Controller();
        $commission_settings->register_routes();
    }
}

new WCV_REST_API_Loader();
