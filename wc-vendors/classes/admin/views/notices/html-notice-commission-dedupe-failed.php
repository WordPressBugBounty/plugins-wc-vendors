<?php
/**
 * Admin View: Notice - Commission de-duplication failed
 *
 * @package WCVendors/Admin
 * @since   2.7.3
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

global $wpdb;

$updater   = new WCVendors_Background_Updater();
$conflicts = array_filter( array_map( 'absint', (array) get_option( 'wcvendors_commission_dedupe_conflicts', array() ) ) );

?>
<div id="message" class="error wcvendors-message wc-connect">
    <p>
        <strong><?php esc_html_e( 'WC Vendors: the commission update did not finish.', 'wc-vendors' ); ?></strong>
        &#8211;
        <?php
        printf(
            /* translators: %s: name of the backup database table */
            esc_html__( 'WC Vendors did not add the key that stops new duplicate commission rows. Any duplicate rows it removed were copied to the %s table first, so no data is lost.', 'wc-vendors' ),
            '<code>' . esc_html( $wpdb->prefix . 'pv_commission_dupe_backup' ) . '</code>'
        );
        ?>
    </p>
    <?php if ( ! empty( $conflicts ) ) : ?>
        <p>
            <?php
            printf(
                /* translators: %s: comma-separated list of order ids */
                esc_html__( 'These orders have duplicate commission rows with different amounts, so WC Vendors did not remove them: %s. Check them under WC Vendors > Commissions, delete the wrong rows, then run the update again.', 'wc-vendors' ),
                esc_html( implode( ', ', $conflicts ) )
            );
            ?>
        </p>
    <?php else : ?>
        <p><?php esc_html_e( 'Back up your database, then run the update again. If it fails again, send the WC Vendors log to support.', 'wc-vendors' ); ?></p>
    <?php endif; ?>
    <?php if ( $updater->is_updating() ) : ?>
        <p><?php esc_html_e( 'The update is running in the background.', 'wc-vendors' ); ?></p>
    <?php else : ?>
        <p class="submit">
            <a class="wcv-update-now button-primary"
                href="<?php echo esc_url( wp_nonce_url( add_query_arg( 'retry_wcvendors_commission_dedupe', 'true', admin_url( 'admin.php?page=wcv-settings' ) ), 'retry_wcvendors_commission_dedupe' ) ); ?>">
                <?php esc_html_e( 'Run the update again', 'wc-vendors' ); ?>
            </a>
        </p>
    <?php endif; ?>
</div>
