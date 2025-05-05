<?php
/**
 * Marketplace backend dashboard class
 *
 * @package WC_Vendors
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

/**
 * WCV_Marketplace_Backend_Dashboard Class
 */
class WCV_Marketplace_Backend_Dashboard {

    /**
     * Vite App loader instance.
     *
     * @var WCV_Vite_Loader $app_loader Vite app loader instance.
     */
    protected $app_loader;

    /**
     * Constructor.
     */
    public function __construct() {
        // Include the Vite App Loader class if it doesn't exist.
        if ( ! class_exists( 'WCV_Vite_Loader' ) ) {
            require_once 'class-wcv-vite-loader.php';
        }

        // Initialize the Vite App Loader.
        $this->app_loader = new WCV_Vite_Loader(
            'wcv_dashboard', // App name (used for script handles).
            'apps/dashboard', // App directory relative to plugin root.
            WCV_PLUGIN_DIR, // Plugin directory path.
            WCV_PLUGIN_URL, // Plugin directory URL.
        );

        // Register actions and filters.
        $this->register_hooks();
    }

    /**
     * Register hooks.
     *
     * @return void
     */
    public function register_hooks() {
        add_action( 'admin_enqueue_scripts', array( $this, 'maybe_load_app' ) );
        add_action( 'wp_ajax_wcv_activate_plugin', array( $this, 'ajax_activate_plugin' ) );
    }

    /**
     * Add helpful resources data for WC Vendors dashboard
     *
     * @since 2.5.5
     *
     * @return array Array of resource data
     */
    public function wc_vendors_get_helpful_resources() {
        $is_pro_active = is_wcv_pro_active();
        return apply_filters(
            'wcv_helpful_resources',
            array(
                array(
                    'title'       => __( 'Getting Started Guide', 'wc-vendors' ),
                    'description' => __( 'Learn the basics of managing your marketplace', 'wc-vendors' ),
                    'type'        => 'guide',
                    'url'         => $is_pro_active ? 'https://www.wcvendors.com/knowledge-base/wc-vendors-pro-getting-started-guide/?utm_source=plugin&utm_medium=dashboard&utm_campaign=gettingstartedguide' : 'https://www.wcvendors.com/knowledge-base/wc-vendors-marketplace-free-plugin-getting-started-guide/?utm_source=plugin&utm_medium=dashboard&utm_campaign=gettingstartedguide',
                    'iconColor'   => '#1677ff',
                    'iconBg'      => '#e6f4ff',
                ),
                array(
                    'title'       => __( 'Marketplace Settings', 'wc-vendors' ),
                    'description' => __( 'Configure your marketplace preferences', 'wc-vendors' ),
                    'type'        => 'settings',
                    'url'         => admin_url( 'admin.php?page=wcv-settings' ),
                    'iconColor'   => '#52c41a',
                    'iconBg'      => '#f6ffed',
                ),
                array(
                    'title'       => __( 'Growth Strategies', 'wc-vendors' ),
                    'description' => __( 'Tips and tricks to expand your marketplace', 'wc-vendors' ),
                    'type'        => 'growth',
                    'url'         => 'https://www.wcvendors.com/cat/marketplaces-101/?utm_source=plugin&utm_medium=dashboard&utm_campaign=growthstrategies',
                    'iconColor'   => '#fa8c16',
                    'iconBg'      => '#fff7e6',
                ),
                array(
                    'title'       => __( 'Documentation', 'wc-vendors' ),
                    'description' => __( 'Detailed technical documentation', 'wc-vendors' ),
                    'type'        => 'documentation',
                    'url'         => 'https://www.wcvendors.com/knowledge-base/?utm_source=plugin&utm_medium=dashboard&utm_campaign=documentation',
                    'iconColor'   => '#722ed1',
                    'iconBg'      => '#f9f0ff',
                ),
                array(
                    'title'       => __( 'Support Center', 'wc-vendors' ),
                    'description' => __( '24/7 help and support resources', 'wc-vendors' ),
                    'type'        => 'support',
                    'url'         => 'https://www.wcvendors.com/support/?utm_source=plugin&utm_medium=dashboard&utm_campaign=support',
                    'iconColor'   => '#13c2c2',
                    'iconBg'      => '#e6fffb',
                ),
            )
        );
    }

    /**
     * Ajax activate plugin
     *
     * @since 2.5.5
     *
     * @return void
     */
    public function ajax_activate_plugin() {
        // Check nonce for security.
        check_ajax_referer( 'wcv_activate_plugin', 'nonce' );

        // Verify user has appropriate capabilities to activate plugins.
        if ( ! current_user_can( 'activate_plugins' ) ) {
            wp_send_json_error( __( 'You do not have permission to activate plugins', 'wc-vendors' ) );
        }

        $plugin_slug = isset( $_POST['plugin_slug'] ) ? sanitize_text_field( $_POST['plugin_slug'] ) : '';

        if ( empty( $plugin_slug ) ) {
            wp_send_json_error( __( 'Plugin slug is required', 'wc-vendors' ) );
        }

        // Attempt to activate and check for errors.
        $result = activate_plugin( $plugin_slug, '', false, true );

        if ( is_wp_error( $result ) ) {
            wp_send_json_error( wp_strip_all_tags( $result->get_error_message() ) );
        }

        wp_send_json_success( __( 'Plugin activated successfully', 'wc-vendors' ) );
    }

    /**
     * Load app assets if we're on the right page.
     *
     * @param string $hook The current admin page.
     *
     * @return void
     */
    public function maybe_load_app( $hook ) {
        if ( 'wc-vendors_page_wc-vendors-marketplace-dashboard' !== $hook ) {
            return;
        }
        $is_rating_active = is_wcv_pro_active() && ! wc_string_to_bool( get_option( 'wcvendors_ratings_management_cap', 'no' ) );
        // Setup data to be passed to the app.
        $js_data = array(
            'rest_url'              => rest_url( 'wcv-api/v1' ),
            'ajax_url'              => admin_url( 'admin-ajax.php' ),
            'nonce'                 => wp_create_nonce( 'wp_rest' ),
            'manage_licenses_url'   => admin_url( 'admin.php?page=wc-vendors-license' ),
            'pricing_url'           => 'https://www.wcvendors.com/pricing/?utm_source=plugin&utm_medium=dashboard&utm_campaign=pricing',
            'helpful_resources'     => $this->wc_vendors_get_helpful_resources(),
            'activate_plugin_nonce' => wp_create_nonce( 'wcv_activate_plugin' ),
            'all_vendors_page_url'  => admin_url( 'admin.php?page=wcv-all-vendors' ),
            'is_rating_active'      => $is_rating_active ? 'true' : 'false',
            'i18n'                  => $this->get_i18n_data(),
            'currency'              => get_woocommerce_currency(),
            'locale'                => str_replace( '_', '-', get_locale() ),
            'decimal_separator'     => wc_get_price_decimal_separator(),
            'thousand_separator'    => wc_get_price_thousand_separator(),
            'decimals'              => wc_get_price_decimals(),
            'price_format'          => get_woocommerce_price_format(),
            'currency_symbol'       => get_woocommerce_currency_symbol(),
            'currency_position'     => get_option( 'woocommerce_currency_pos' ),
        );

        // Define script dependencies.
        $dependencies = array( 'wp-i18n' );

        // Load app assets.
        $this->app_loader->load_assets( $dependencies, $js_data );
    }

    /**
     * Get i18n data
     *
     * @since 2.5.5
     *
     * @return array Array of i18n data
     */
    public function get_i18n_data() {
        return include 'wcv-marketplace-dashboard-i18n.php';
    }
}

// Initialize the Example Vue App.
new WCV_Marketplace_Backend_Dashboard();
