<?php
/**
 * Activate class
 *
 * @since 2.5.2
 */
class WCV_Activate {
    /**
     * Constructor
     *
     * @since 2.5.2
     */
    public static function activate() {
        /**
        *  Requires WooCommerce to be installed and active
        */
        if ( ! class_exists( 'WooCommerce' ) ) {
            add_action( 'admin_notices', array( self::class, 'wc_vendors_wc_missing_notice' ) );
            return;
        }
        wcvendors_add_vendor_status_meta_key();
        self::maybe_alter_table_decimal_places();
        // Flush rewrite rules when activating plugin.
        flush_rewrite_rules();
    }

    /**
     * Alter the pv_commission table to adjust the number of decimal places to 8
     *
     * @since 2.5.4
     * @version 2.5.4
     */
    public static function maybe_alter_table_decimal_places() {
        $is_ran = get_option( 'wcv_alter_table_decimal_places_ran', false );

        if ( $is_ran ) {
            return;
        }

        global $wpdb;

        $table_name = $wpdb->prefix . 'pv_commission';

        // Check if the table exists.
        if ( $wpdb->get_var( $wpdb->prepare( 'SHOW TABLES LIKE %s', $table_name ) ) === $table_name ) {
            // Get column definitions.
            $columns = $wpdb->get_results( $wpdb->prepare( 'SHOW COLUMNS FROM %i', $table_name ) );

            $alter_sql = array();

            foreach ( $columns as $column ) {
                if ( 'total_due' === $column->Field && 'decimal(20,8)' !== $column->Type ) {
                    $alter_sql[] = 'MODIFY total_due decimal(20,8) NOT NULL';
                }
                if ( 'total_shipping' === $column->Field && 'decimal(20,8)' !== $column->Type ) {
                    $alter_sql[] = 'MODIFY total_shipping decimal(20,8) NOT NULL';
                }
                if ( 'tax' === $column->Field && 'decimal(20,8)' !== $column->Type ) {
                    $alter_sql[] = 'MODIFY tax decimal(20,8) NOT NULL';
                }
                if ( 'time' === $column->Field && 'CURRENT_TIMESTAMP' !== $column->Default ) {
                    $alter_sql[] = 'MODIFY time datetime NOT NULL DEFAULT CURRENT_TIMESTAMP';
                }
            }

            if ( ! empty( $alter_sql ) ) {
                $sql = "ALTER TABLE $table_name " . implode( ', ', $alter_sql ) . ';';

                $result  = $wpdb->query( $sql ); //phpcs:ignore
                $success = false !== $result;

                if ( $success ) {
                    update_option( 'wcv_alter_table_decimal_places_ran', true );
                }
            }
        }
    }

    /**
     * WooCommerce fallback notice.
     *
     * @since 2.2.2
     */
    public function wc_vendors_wc_missing_notice() {
        ?>
        <div class="error">
            <p>
                <strong>
                    <?php esc_html_e( 'WC Vendors Marketplace requires WooCommerce to run. You can download', 'wc-vendors' ); ?>
                    &nbsp;<a href="https://wordpress.org/plugins/woocommerce/" target="_blank"><?php esc_html_e( 'WooCommerce here', 'wc-vendors' ); ?></a>
                </strong>
            </p>
        </div>
        <?php
    }
}
