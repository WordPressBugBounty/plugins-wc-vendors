<?php

/**
 * Product Meta Tabs
 *
 * This file is used to load the download files data
 *
 * @link       http://www.wcvendors.com
 * @since      1.0.2
 *
 * @package    WCVendors_Pro
 * @subpackage WCVendors_Pro/public/partials/product
 */
?>

<ul class="<?php echo esc_attr( $css_class ); ?>" id="product-meta-tabs">
    <?php foreach ( $product_meta_tabs as $meta_tab ) : ?>
        <li class="<?php echo esc_attr( implode( ' ', $meta_tab['class'] ) ); ?>">
            <a class="tabs-tab <?php echo esc_attr( implode( ' ', $meta_tab['class'] ) ); ?> <?php echo esc_attr( $meta_tab['target'] ); ?>"
                href="#<?php echo esc_attr( $meta_tab['target'] ); ?>"><?php echo esc_attr( $meta_tab['label'] ); ?>
            </a>
        </li>
    <?php endforeach; ?>
</ul>
