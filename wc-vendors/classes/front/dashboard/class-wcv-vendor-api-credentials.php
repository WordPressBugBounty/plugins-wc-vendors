<?php
/**
 * Vendor dashboard API credential control.
 *
 * Adds an "API" tab to the store settings dashboard. It lets a vendor create and
 * regenerate one WordPress Application Password through the core REST endpoint.
 *
 * @package WCVendors
 * @since   2.7.3
 */

defined( 'ABSPATH' ) || exit;

/**
 * Class WCV_Vendor_API_Credentials.
 *
 * @since 2.7.3
 */
class WCV_Vendor_API_Credentials {

    /**
     * Constructor.
     *
     * @since 2.7.3
     */
    public function __construct() {
        add_filter( 'wcv_store_tabs', array( $this, 'add_api_tab' ) );
        add_action( 'wcvendors_settings_after_payment_tab', array( $this, 'render_pane' ) );
    }

    /**
     * Add the API tab to the settings dashboard.
     *
     * Only the store settings template calls store_form_tabs(), so this tab does
     * not appear on the signup form.
     *
     * @since 2.7.3
     *
     * @param array $tabs The store tabs.
     * @return array
     */
    public function add_api_tab( $tabs ) {
        if ( ! $this->is_available() ) {
            return $tabs;
        }

        $tabs['api'] = array(
            'label'  => __( 'API', 'wc-vendors' ),
            'target' => 'api',
            'class'  => array(),
        );

        return $tabs;
    }

    /**
     * Render the API tab pane and enqueue its assets.
     *
     * The action fires inside the tabs container, so the pane sits with the other
     * tab panes. It renders only when Application Passwords are available.
     *
     * @since 2.7.3
     */
    public function render_pane() {
        if ( ! $this->is_available() ) {
            return;
        }

        $credential = $this->get_current_credential();

        $this->enqueue_assets( $credential );

        echo '<div class="tabs-content" id="api">';
        wc_get_template(
            'api-credentials.php',
            array(
                'credential' => $credential,
            ),
            'wc-vendors/dashboard/settings/',
            WCV_PLUGIN_DIR . 'templates/dashboard/settings/'
        );
        echo '</div>';
    }

    /**
     * Are Application Passwords available for the current vendor.
     *
     * @since 2.7.3
     *
     * @return bool
     */
    protected function is_available() {
        if ( ! function_exists( 'wp_is_application_passwords_available_for_user' ) ) {
            return false;
        }

        $user_id = get_current_user_id();

        if ( ! $user_id || ! WCV_Vendors::is_vendor( $user_id ) ) {
            return false;
        }

        return wp_is_application_passwords_available_for_user( $user_id );
    }

    /**
     * Get the current vendor's Application Password, if any.
     *
     * @since 2.7.3
     *
     * @return array|null The first credential, or null.
     */
    protected function get_current_credential() {
        $passwords = WP_Application_Passwords::get_user_application_passwords( get_current_user_id() );

        if ( empty( $passwords ) || ! is_array( $passwords ) ) {
            return null;
        }

        $item = reset( $passwords );

        return array(
            'uuid'      => isset( $item['uuid'] ) ? $item['uuid'] : '',
            'name'      => isset( $item['name'] ) ? $item['name'] : '',
            'created'   => isset( $item['created'] ) ? (int) $item['created'] : 0,
            'last_used' => isset( $item['last_used'] ) && $item['last_used'] ? (int) $item['last_used'] : 0,
            'uuids'     => array_values( wp_list_pluck( $passwords, 'uuid' ) ),
            'names'     => array_values( wp_list_pluck( $passwords, 'name' ) ),
        );
    }

    /**
     * Register, localize and enqueue the control assets.
     *
     * @since 2.7.3
     *
     * @param array|null $credential The current credential, or null.
     */
    protected function enqueue_assets( $credential ) {
        $suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

        $localized_credential = $credential
            ? array(
                'uuid'  => $credential['uuid'],
                'name'  => $credential['name'],
                'uuids' => $credential['uuids'],
                'names' => $credential['names'],
            )
            : null;

        wcv_enqueue_style(
            'wcv-api-credentials',
            WCV_ASSETS_URL . 'css/api-credentials' . $suffix . '.css',
            array(),
            WCV_VERSION
        );

        wcv_enqueue_script(
            'wcv-api-credentials',
            WCV_ASSETS_URL . 'js/api-credentials' . $suffix . '.js',
            array(),
            WCV_VERSION,
            true,
            array(
                'wcvApiCredentials' => array(
                    'restUrl'        => esc_url_raw( rest_url( 'wp/v2/users/me/application-passwords' ) ),
                    'nonce'          => wp_create_nonce( 'wp_rest' ),
                    'appName'        => apply_filters( 'wcvendors_api_credential_name', __( 'Vendor API', 'wc-vendors' ) ),
                    'credential'     => $localized_credential,
                    'todayFormatted' => date_i18n( get_option( 'date_format' ), time() ),
                    'neverLabel'     => __( 'Never', 'wc-vendors' ),
                    'i18n'           => array(
                        'copy'         => __( 'Copy', 'wc-vendors' ),
                        'copied'       => __( 'Copied', 'wc-vendors' ),
                        'copyFailed'   => __( 'Press Ctrl/Cmd + C to copy', 'wc-vendors' ),
                        'genericError' => __( 'Could not update your API credential. Please try again.', 'wc-vendors' ),
                        'regenFailed'  => __( 'Your old credential was removed, but the new one could not be created. Please generate a new credential.', 'wc-vendors' ),
                        'revokeIntro'  => __( 'Regenerating revokes all of these credentials:', 'wc-vendors' ),
                    ),
                ),
            )
        );
    }
}
