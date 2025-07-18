<?php
/**
 * Vendor List Filter Template
 *
 * This template can be overridden by copying it to yourtheme/wc-vendors/front/vendor-list-filter.php
 *
 * @author        Jamie Madden, WC Vendors
 * @package       WCVendors/Templates/Front
 * @version       2.4.2
 * @version       2.4.2 - More responsive
 *
 * Template Variables available
 * $display_mode : Vendor list display mode grid or list
 * $search_term : The search term to use for filtering
 * $vendors_count : The total number of vendors
 */

$active_class = array(
    'grid' => '',
    'list' => '',
);
if ( 'grid' === $display_mode ) {
    $active_class['grid'] = 'active';
} else {
    $active_class['list'] = 'active';
}
?>
<div class="wcv-vendor-list-filter">
    <label for="search-vendors-toggle-checkbox" class="button search-vendors-toggle-button" title="<?php /* translators: %s: vendor name (plural) */ printf( esc_attr__( 'Search %s', 'wc-vendors' ), esc_attr( wcv_get_vendor_name( false, false ) ) ); ?>"><span class="dashicons dashicons-search"></span></label>
    <input type="checkbox" id="search-vendors-toggle-checkbox" class="search-vendors-toggle-checkbox" />
    <div class="wcv-vendor-list-search">
        <form action="" method="GET" class="wcv-form">
            <input type="text" value="<?php echo esc_attr( $search_term ); ?>" name="search" id="wcv-vendor-list-search" placeholder="<?php /* translators: %s: vendor name (singular) */ printf( esc_attr__( 'Search for a %s', 'wc-vendors' ), esc_attr( wcv_get_vendor_name( true, false ) ) ); ?>" />
            <input type="submit" class="wcv-button" value="<?php esc_attr_e( 'Search', 'wc-vendors' ); ?>" />
        </form>
    </div>
    <div class="wcv-vendor-list-switch">
        <a href="<?php echo esc_url( add_query_arg( array( 'display_mode' => 'grid' ) ) ); ?>" class="wcv-vendor-list-switch-item <?php echo esc_attr( $active_class['grid'] ); ?>" data-view="grid" title="<?php esc_attr_e( 'Grid', 'wc-vendors' ); ?>"><span class="dashicons dashicons-grid-view"></span></a>
        <a href="<?php echo esc_url( add_query_arg( array( 'display_mode' => 'list' ) ) ); ?>" class="wcv-vendor-list-switch-item <?php echo esc_attr( $active_class['list'] ); ?>" data-view="list" title="<?php esc_attr_e( 'List', 'wc-vendors' ); ?>"><span class="dashicons dashicons-menu-alt"></span></a>
    </div>
</div>
<?php if ( $search_term ) : ?>
<div class="vendor-search-result-text">
    <?php
    if ( $vendors_count > 0 ) {
        /* translators: %s: vendor name (singular) */
        $vendor_found_singular = sprintf( __( '%s found', 'wc-vendors' ), esc_html( wcv_get_vendor_name( true, false ) ) );
        /* translators: %s: vendor name (plural) */
        $vendor_found_plural = sprintf( __( '%s found', 'wc-vendors' ), esc_html( wcv_get_vendor_name( false, false ) ) );
        $vendors_found_str   = 1 === (int) $vendors_count ? $vendor_found_singular : $vendor_found_plural;
        printf(
            /* translators: %1$s: number of vendors found, %2$s: vendors found string */
            esc_html__( '%1$s %2$s', 'wc-vendors' ),
            '<span class="vendor-search-result-count">' . esc_html( $vendors_count ) . '</span>',
            esc_html( $vendors_found_str )
        );
    } else {
        /* translators: %s: vendor name (plural) */
        printf( esc_html__( 'No %s found', 'wc-vendors' ), esc_html( wcv_get_vendor_name( false, false ) ) );
    }
    ?>
    <!-- Clear search button -->
    <a href="<?php echo esc_url( remove_query_arg( 'search' ) ); ?>" class="vendor-search-clear-button">
        <span class="dashicons dashicons-no-alt"></span>
    </a>
</div>
<?php endif; ?>
