<?php
/**
 * Vendor Application Password cap.
 *
 * Limits each vendor to one Application Password. Site owners have no cap.
 *
 * @package WCVendors/RestApi
 * @since   2.7.3
 */

defined( 'ABSPATH' ) || exit;

/**
 * Class WCV_REST_App_Password_Cap.
 */
class WCV_REST_App_Password_Cap {

    /**
     * Constructor.
     */
    public function __construct() {
        add_filter( 'rest_pre_insert_application_password', array( $this, 'cap_rest_create' ), 10, 2 );
        add_action( 'admin_init', array( $this, 'cap_authorize_screen' ) );
    }

    /**
     * Cap creation on the REST path.
     *
     * @param stdClass        $prepared The prepared Application Password to insert.
     * @param WP_REST_Request $request  The request.
     * @return stdClass|WP_Error The prepared item, or WP_Error when at cap.
     */
    public function cap_rest_create( $prepared, $request ) {
        $user_id = $this->resolve_user_id( $request->get_param( 'user_id' ) );

        if ( $this->is_at_cap( $user_id ) ) {
            return $this->cap_error();
        }

        return $prepared;
    }

    /**
     * Cap creation on the no-js authorize-application.php fallback.
     *
     * `admin_init` fires during `require admin.php`, before the file processes
     * the approve POST. When a capped vendor approves, stop with the cap message
     * instead of letting the direct creation call run.
     */
    public function cap_authorize_screen() {
        if ( ! isset( $GLOBALS['pagenow'] ) || 'authorize-application.php' !== $GLOBALS['pagenow'] ) {
            return;
        }

        // phpcs:disable WordPress.Security.NonceVerification.Missing
        if ( ! isset( $_POST['action'], $_POST['approve'] )
            || 'authorize_application_password' !== sanitize_key( wp_unslash( $_POST['action'] ) ) ) {
            return;
        }
        // phpcs:enable WordPress.Security.NonceVerification.Missing

        $nonce = isset( $_POST['_wpnonce'] ) ? sanitize_key( wp_unslash( $_POST['_wpnonce'] ) ) : '';

        // Only act on a genuine approve submission. Let core handle a bad nonce.
        if ( ! wp_verify_nonce( $nonce, 'authorize_application_password' ) ) {
            return;
        }

        if ( $this->is_at_cap( get_current_user_id() ) ) {
            wp_die(
                esc_html__( 'You can only have one Application Password. Regenerate the existing one instead.', 'wc-vendors' ),
                esc_html__( 'Application Password limit reached', 'wc-vendors' ),
                array( 'response' => 403 )
            );
        }
    }

    /**
     * Resolve a route user value to a user ID.
     *
     * The application-passwords route accepts the `me` alias.
     *
     * @param mixed $value The `user_id` route value.
     * @return int
     */
    protected function resolve_user_id( $value ) {
        if ( 'me' === $value || null === $value || '' === $value ) {
            return get_current_user_id();
        }

        return (int) $value;
    }

    /**
     * Is the user a vendor who already holds an Application Password.
     *
     * Owners are never at cap.
     *
     * @param int $user_id User ID.
     * @return bool
     */
    protected function is_at_cap( $user_id ) {
        $user_id = (int) $user_id;

        // Site owners have no cap. get_scope() treats a user who can
        // manage_woocommerce as the owner first, so exempt them here too, even
        // when they also hold the vendor role.
        if ( ! $user_id || user_can( $user_id, 'manage_woocommerce' ) || ! WCV_Vendors::is_vendor( $user_id ) ) {
            return false;
        }

        $passwords = WP_Application_Passwords::get_user_application_passwords( $user_id );

        return is_array( $passwords ) && count( $passwords ) >= 1;
    }

    /**
     * The cap error.
     *
     * @return WP_Error
     */
    protected function cap_error() {
        return new WP_Error(
            WCV_REST_Controller::ERROR_APP_PASSWORD_EXISTS,
            __( 'A vendor can only have one Application Password. Regenerate the existing one instead.', 'wc-vendors' ),
            array( 'status' => 403 )
        );
    }
}
