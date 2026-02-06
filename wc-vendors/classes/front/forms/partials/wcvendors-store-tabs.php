<?php

/**
 * Store Tabs
 *
 * This file is used to output the store tabs on settings and signup page
 *
 * @link       http://www.wcvendors.com
 * @since      2.5.2
 * @version    2.6.5 - Fix security issues.
 *
 * @phpcs:disable 	WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
 */


?>

<ul class="<?php echo esc_attr( $css_class ); ?> wcv_desktop" style="padding: 0; margin: 56px 0 0 0;">
    <?php foreach ( $store_tabs as $store_tab ) : ?>
        <?php $show_dot = isset( $store_tab['is_completed'] ) && $store_tab['is_completed'] ? false : true; ?>
        <li>
            <a class="tabs-tab <?php echo esc_attr( implode( ' ', $store_tab['class'] ) ); ?> <?php echo esc_html( $store_tab['target'] ); ?>"
                href="#<?php echo esc_attr( $store_tab['target'] ); ?>"><?php echo esc_html( $store_tab['label'] ); ?>
                <?php if ( $show_dot && isset( $store_tab['is_completed'] ) ) : ?>
                    <span class="wcv-dot"></span>
                <?php endif; ?>
            </a>
        </li>
    <?php endforeach; ?>
</ul>
