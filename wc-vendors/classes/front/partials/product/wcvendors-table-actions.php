<?php

/**
 * Product Table Main Actions
 *
 * This file is used to add the table actions before and after a table
 *
 * @link       http://www.wcvendors.com
 * @since      2.5.2
 * @version    2.5.2 - added can submit handler
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

use WC_Vendors\Classes\Front\WCV_Form_Helper;
use function WC_Vendors\Classes\Includes\wcv_get_product_types;

?>
<?php if ( 'before' === $position ) : ?>
<form class="wcv-search-form wcv-form" method="get">
    <div class="wcv_dashboard_table_header wcv-cols-group wcv-search wcv-product-table-search-<?php echo esc_attr( $position ); ?>">
        <div class="wcv-flex wcv-flex-wrap">
            <div class="quick-link-wrapper small-100 all-60">
                <?php foreach ( $product_counts as $key => $count ) : ?>
                    <?php $filter_link = WCV_Vendor_Dashboard::get_dashboard_page_url( 'product?product_status=' . $key ); ?>
                    <span class="quick-link-btn black">
                        <a href="<?php echo esc_url( $filter_link ); ?>"><span><?php echo esc_html( $count['label'] ); ?></span> (<?php echo esc_html( $count['count'] ); ?>)</a>
                    </span>
                <?php endforeach; ?>
            </div>
        </div>
        <div class="wcv-cols-group wcv-horizontal-gutters wcv-gap-top wcv-cols-group-narrow">
            <?php
                $product_categories = get_terms(
                    array(
                        'taxonomy'   => 'product_cat',
                        'hide_empty' => false,
                    )
                );
                $product_categories = wp_list_pluck( $product_categories, 'name', 'term_id' );
                $product_categories = array( '' => esc_html__( 'None', 'wc-vendors' ) ) + $product_categories;
                $product_tags       = get_terms(
                    array(
                        'taxonomy'   => 'product_tag',
                        'hide_empty' => false,
                    )
                );
                $product_tags       = wp_list_pluck( $product_tags, 'name', 'term_id' );
                $product_tags       = array( '' => esc_html__( 'None', 'wc-vendors' ) ) + $product_tags;
                $product_types      = wcv_get_product_types();
                $product_types      = array( '' => esc_html__( 'None', 'wc-vendors' ) ) + $product_types;

                $product_cat_get  = isset( $_GET['_wcv_product_category'] ) ? sanitize_text_field( wp_unslash( $_GET['_wcv_product_category'] ) ) : ''; // phpcs:ignore WordPress.Security.NonceVerification
                $product_tag_get  = isset( $_GET['_wcv_product_tag'] ) ? sanitize_text_field( wp_unslash( $_GET['_wcv_product_tag'] ) ) : ''; // phpcs:ignore WordPress.Security.NonceVerification
                $product_type_get = isset( $_GET['_wcv_product_type'] ) ? sanitize_text_field( wp_unslash( $_GET['_wcv_product_type'] ) ) : ''; // phpcs:ignore WordPress.Security.NonceVerification
                WCV_Form_Helper::select(
                    array(
                        'id'                => '_wcv_product_category',
                        'options'           => $product_categories,
                        'class'             => 'wcv-dashboard-filter wcv-custom-select',
                        'wrapper_start'     => '<div class="all-20 small-100">',
                        'wrapper_end'       => '</div>',
                        'value'             => $product_cat_get,
                        'label'             => esc_html__( 'Categories', 'wc-vendors' ),
                        'multiple'          => false,
                        'custom_attributes' => array(
                            'data-autosubmit' => 'true',
                        ),
                    )
                );

                WCV_Form_Helper::select(
                    array(
                        'id'                => '_wcv_product_tag',
                        'options'           => $product_tags,
                        'class'             => 'wcv-dashboard-filter wcv-custom-select',
                        'value'             => $product_tag_get,
                        'wrapper_start'     => '<div class="all-20 small-50">',
                        'wrapper_end'       => '</div>',
                        'label'             => esc_html__( 'Tags', 'wc-vendors' ),
                        'multiple'          => false,
                        'custom_attributes' => array(
                            'data-autosubmit' => 'true',
                        ),
                    )
                );

                WCV_Form_Helper::select(
                    array(
                        'id'                => '_wcv_product_type',
                        'value'             => $product_type_get,
                        'options'           => $product_types,
                        'class'             => 'wcv-dashboard-filter wcv-custom-select',
                        'wrapper_start'     => '<div class="all-15 small-50">',
                        'wrapper_end'       => '</div>',
                        'label'             => esc_html__( 'Type', 'wc-vendors' ),
                        'multiple'          => false,
                        'custom_attributes' => array(
                            'data-autosubmit' => 'true',
                        ),
                    )
                );
            ?>
            <div class="all-45 small-100">
                <div class="control-group">
                    <label for="wcv_search" class="wcv_desktop">&nbsp;</label>
                    <div class="wcv-search-box-wrapper wcv-flex">
                        <input type="text" id="wcv-search" class="wcv-dashboard-filter wcv-search-box-input" name="wcv-search" placeholder="<?php esc_attr_e( 'Search Products', 'wc-vendors' ); ?>" value="<?php echo esc_attr( $search ); ?>">
                        <button type="submit" class="wcv-search-button wcv-flex">
                            <?php
                            echo wp_kses(
                                wcv_get_icon( 'wcv-icon wcv-icon-dashboard-icon', 'wcv-icon-search' ),
                                array(
                                    'svg' => array(
                                        'class' => array(),
                                    ),
                                    'use' => array(
                                        'xlink:href' => array(),
                                    ),
                                )
                            );
                            ?>
                            <span><?php esc_html_e( 'Search', 'wc-vendors' ); ?></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="all-50 small-100 wcv-product-table-search-results">
            <?php if ( strlen( $search ) > 0 ) : ?>
                <span class="wcv_search_results"><?php printf( /* translators: %s search term */ esc_html__( 'Search results for "%s" ...', 'wc-vendors' ), esc_html( $search ) ); ?></span>
            <?php endif; ?>
        </div>
    </div>
</form>
<?php else : ?>
    <div class="all-100 small-100 wcv-product-table-pagination-<?php echo esc_attr( $position ); ?>">
        <?php
        echo $pagination_wrapper['wrapper_start']; //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        echo paginate_links( //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
            apply_filters(
                'wcv_product_pagination_args',
                array(
                    'base'      => add_query_arg( 'paged', '%#%' ),
                    'format'    => '',
                    'current'   => ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1,
                    'total'     => $this->max_num_pages,
                    'prev_next' => true,
                    'type'      => 'list',
                ),
                ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1,
                $this->max_num_pages
            )
        );
        echo $pagination_wrapper['wrapper_end']; //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        ?>

    </div>
<?php endif; ?>
