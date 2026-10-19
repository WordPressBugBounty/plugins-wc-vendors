<?php
/**
 * Abilities harness for WC Vendors.
 *
 * Registers the `wcvendors` ability category and a hook to add abilities. Runs
 * only when the WordPress Abilities API is present (core 6.9+). Registers no
 * ability itself.
 *
 * @package WCVendors/RestApi
 * @since   2.7.3
 */

defined( 'ABSPATH' ) || exit;

/**
 * Class WCV_Abilities.
 */
class WCV_Abilities {

    /**
     * The brand ability category slug.
     */
    const CATEGORY = 'wcvendors';

    /**
     * Constructor.
     */
    public function __construct() {
        add_action( 'wp_abilities_api_categories_init', array( $this, 'register_category' ) );
        add_action( 'wp_abilities_api_init', array( $this, 'register_abilities' ) );
    }

    /**
     * Register the `wcvendors` ability category.
     */
    public function register_category() {
        if ( ! function_exists( 'wp_register_ability_category' ) || ! function_exists( 'wp_has_ability_category' ) ) {
            return;
        }

        if ( wp_has_ability_category( self::CATEGORY ) ) {
            return;
        }

        wp_register_ability_category(
            self::CATEGORY,
            array(
                'label'       => __( 'WC Vendors', 'wc-vendors' ),
                'description' => __( 'Abilities for reading and operating a WC Vendors marketplace.', 'wc-vendors' ),
            )
        );
    }

    /**
     * Register the WC Vendors abilities.
     *
     * The scaffold registers none. Consumers hook `wcv_register_abilities` and
     * call `wp_register_ability()` for each ability under the brand category.
     * Set the `readonly` / `destructive` / `idempotent` flags in each ability's
     * `meta.annotations` so a client can tell which abilities are safe to invoke.
     */
    public function register_abilities() {
        if ( ! function_exists( 'wp_register_ability' ) ) {
            return;
        }

        /**
         * Register WC Vendors abilities.
         *
         * @since 2.7.3
         *
         * @param string $category The brand ability category slug.
         */
        do_action( 'wcv_register_abilities', self::CATEGORY );
    }
}
