<?php

/**
 * WC Vendors Helper Functions
 */

/**
 * PayPal Supported Currencies
 *
 * Reference: https://developer.paypal.com/reference/currency-codes/
 *
 * @version 2.4.3
 * @return array $paypal_currencies
 */
function wcv_paypal_currencies() {

    $paypal_currencies = apply_filters(
        'wcvendors_paypal_currencies',
        array(
            'AUD' => __( 'Australian Dollar', 'wc-vendors' ),
            'BRL' => __( 'Brazilian Real', 'wc-vendors' ),
            'CAD' => __( 'Canadian Dollar', 'wc-vendors' ),
            'CNY' => __( 'Chinese Renmenbi', 'wc-vendors' ),
            'CZK' => __( 'Czech Koruna', 'wc-vendors' ),
            'DKK' => __( 'Danish Krone', 'wc-vendors' ),
            'EUR' => __( 'Euro', 'wc-vendors' ),
            'HKD' => __( 'Hong Kong Dollar', 'wc-vendors' ),
            'HUF' => __( 'Hungarian Forint', 'wc-vendors' ),
            'ILS' => __( 'Israeli New Shekel', 'wc-vendors' ),
            'JPY' => __( 'Japanese Yen', 'wc-vendors' ),
            'MYR' => __( 'Malaysian Ringgit', 'wc-vendors' ),
            'MXN' => __( 'Mexican Peso', 'wc-vendors' ),
            'TWD' => __( 'New Taiwan Ddollar', 'wc-vendors' ),
            'NZD' => __( 'New Zealand Dollar	', 'wc-vendors' ),
            'NOK' => __( 'Norwegian krone	', 'wc-vendors' ),
            'PHP' => __( 'Philippine Peso', 'wc-vendors' ),
            'PLN' => __( 'Polish Złoty', 'wc-vendors' ),
            'GBP' => __( 'Pound Sterling', 'wc-vendors' ),
            'RUB' => __( 'Russian Ruble', 'wc-vendors' ),
            'SGD' => __( 'Singapore Dollar', 'wc-vendors' ),
            'SEK' => __( 'Swedish Krona', 'wc-vendors' ),
            'CHF' => __( 'Swiss Franc', 'wc-vendors' ),
            'THB' => __( 'Thai Baht', 'wc-vendors' ),
            'USD' => __( 'United States Dollar', 'wc-vendors' ),
        )
    );

    return $paypal_currencies;
}

/**
 * PayPal wallet
 *
 * @version 2.4.3
 * @return array $paypal_wallet
 */
function wcv_paypal_wallet() {

    $paypal_wallet = apply_filters(
        'wcvendors_paypal_wallet',
        array(
            'paypal' => __( 'PayPal', 'wc-vendors' ),
            'venmo'  => __( 'Venmo', 'wc-vendors' ),
        )
    );

    return $paypal_wallet;
}

/**
 * Get countries and states follow format lable and value
 *
 * @version 2.4.8
 * @since 2.4.8
 */
function wcv_get_countries_states() {
    $continents = WC()->countries->get_continents();
    $countries  = WC()->countries->get_countries();
    $states     = WC()->countries->get_allowed_country_states();

    $countries_states = array(
        'countries'  => $countries,
        'states'     => $states,
        'continents' => $continents,
    );
    return $countries_states;
}
/**
 * Check if any plugin is installed by basename
 *
 * @param string $base_name Plugin basename.
 *
 * @return bool
 */
function wcv_is_plugin_installed( $base_name ) {
    if ( ! function_exists( 'get_plugins' ) ) {
        require_once ABSPATH . 'wp-admin/includes/plugin.php';
    }

    $plugins = get_plugins();

    return isset( $plugins[ $base_name ] );
}




/**
 * Check allow screen
 *
 * @since 2.5.1.1
 *
 * @return bool $is_allow_screen Allow screen or not.
 */
function wcv_check_allow_screen() {
    $is_allow_screen = false;
    $screen          = get_current_screen();

    if ( null === $screen ) {
        return $is_allow_screen;
    }

    $post_type = get_post_type();

    if ( ! $post_type && isset( $_GET['post_type'] ) ) { // phpcs:ignore
        $post_type = sanitize_text_field( $_GET['post_type'] ); // phpcs:ignore
    }

    $allow_screen_pages = array(
        'dashboard',
        'wc-vendors_page_wcv-commissions',
        'wc-vendors_page_wcv-vendor-settings',
        'wc-vendors_page_wcv-extensions',
        'wc-vendors_page_wcv-all-vendors',
        'wc-vendors_page_wcv-settings',
        'wc-vendors_page_wcv-help',
        'wc-vendors_page_wcv_pro_vendor_feedback',
        'wc-vendors_page_wcvm_subscription',
        'wc-vendors_page_wc-vendors-license',
        'wc-vendors_page_wcv-about',
        'wc-vendors_page_wc-vendors-marketplace-dashboard',
        'woocommerce_page_wc-admin',
        'woocommerce_page_wc-settings',
        'woocommerce_page_wc-reports',
        'woocommerce_page_wc-status',
        'edit-shop_order',
        'edit-shop_coupon',
        'plugins',
        'woocommerce_page_wc-addons',
        'wc-vendors_page_wcv-setup',
    );

    $allow_screen_post_types = array(
        'shop_order',
        'shop_coupon',
        'product',
    );

    $allow_screen_pages = apply_filters( 'wcvendors_allow_screen_pages', $allow_screen_pages );
    $screen_id          = isset( $screen->id ) ? $screen->id : '';

    $is_allow_screen = in_array( $screen_id, $allow_screen_pages, true ) || in_array( $post_type, $allow_screen_post_types, true );

    return apply_filters( 'wcvendors_allow_screen', $is_allow_screen );
}

if ( ! function_exists( 'wcv_enqueue_script' ) ) {
    /**
     * Manages the registration, localization, and enqueuing of a script.
     *
     * @param string $handle       Unique name for the script.
     * @param string $src          URL to the script file.
     * @param array  $deps         Optional. An array of registered script handles this script depends on. Default is empty array.
     * @param string $ver          Optional. Script version number. Default is false.
     * @param bool   $in_footer    Optional. Whether to load the script in the footer. Default is false.
     * @param array  $localize     Optional. Array with localization data. Default is empty array.
     * @param bool   $enqueue      Optional. Whether to enqueue the script. Default is true.
     */
    function wcv_enqueue_script(
        $handle,
        $src,
        $deps = array(),
        $ver = false,
        $in_footer = false,
        $localize = array(),
        $enqueue = true
    ) {
        // Register the script.
        wp_register_script( $handle, $src, $deps, $ver, $in_footer );

        // Localize the script if localization data is provided.
        if ( ! empty( $localize ) ) {
            foreach ( $localize as $object_name => $data ) {
                wp_localize_script( $handle, $object_name, $data );
            }
        }

        // Enqueue the script if $enqueue is true.
        if ( $enqueue ) {
            wp_enqueue_script( $handle );
        }
    }
}

if ( ! function_exists( 'wcv_enqueue_style' ) ) {
    /**
     * Manages the registration and enqueuing of a style.
     *
     * @param string $handle       Unique name for the style.
     * @param string $src          URL to the style file.
     * @param array  $deps         Optional. An array of registered style handles this style depends on. Default is empty array.
     * @param string $ver          Optional. Style version number. Default is false.
     * @param string $media        Optional. The media for which this stylesheet has been defined. Default is 'all'.
     * @param bool   $enqueue      Optional. Whether to enqueue the style. Default is true.
     */
    function wcv_enqueue_style(
        $handle,
        $src,
        $deps = array(),
        $ver = false,
        $media = 'all',
        $enqueue = true
    ) {
        // Register the style.
        wp_register_style( $handle, $src, $deps, $ver, $media );

        // Enqueue the style if $enqueue is true.
        if ( $enqueue ) {
            wp_enqueue_style( $handle );
        }
    }
}


if ( ! function_exists( 'wcv_get_order_statuses' ) ) {
    /**
     * Get all order statuses.
     *
     * @since 2.5.2
     *
     * @return array
     */
    function wcv_get_order_statuses() {
        $order_statuses = array(
            'wc-processing' => _x( 'Processing', 'Order status', 'wc-vendors' ),
            'wc-on-hold'    => _x( 'On hold', 'Order status', 'wc-vendors' ),
            'wc-completed'  => _x( 'Completed', 'Order status', 'wc-vendors' ),
            'wc-cancelled'  => _x( 'Cancelled', 'Order status', 'wc-vendors' ),
            'wc-refunded'   => _x( 'Refunded', 'Order status', 'wc-vendors' ),
        );

        if ( ! wcv_is_show_reversed_order() ) {
            unset( $order_statuses['wc-refunded'] );
        }

        return apply_filters( 'wcv_order_statuses', $order_statuses );
    }
}

if ( ! function_exists( 'wcv_recursive_sanitize_array' ) ) {
    /**
     * Recursively sanitize an array.
     *
     * @since 2.5.2
     *
     * @param array $arr Array to sanitize.
     *
     * @return array
     */
    function wcv_recursive_sanitize_array( $arr ) {
        foreach ( $arr as $key => &$value ) {
            if ( is_array( $value ) ) {
                $arr[ $key ] = wcv_recursive_sanitize_array( $value );
            } else {
                $arr[ $key ] = sanitize_text_field( $value );
            }
        }

        return $arr;
    }
}

if ( ! function_exists( 'wcv_get_attachment_id' ) ) {
    /**
     * Get the attachment id from the database.
     *
     * @param string $md5_guid The md5 guid.
     * @return int|null
     */
    function wcv_get_attachment_id( $md5_guid ) {
        global $wpdb;
        // Get the attachment_id from the database.
    $attachment_id = $wpdb->get_var(
        $wpdb->prepare(
            "SELECT post_id FROM $wpdb->postmeta WHERE meta_key = '_md5_guid' AND meta_value =%s",
            $md5_guid
        )
    );

        return $attachment_id ? absint( $attachment_id ) : null;
    }
}
