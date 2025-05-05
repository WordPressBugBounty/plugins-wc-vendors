<?php
/**
 * Admin view: Review Request Notice
 */
if ( ! defined( 'ABSPATH' ) ) {
        exit;
    }
?>

<div class="notice notice-info is-dismissible wcv-notice-container" id="wcv-review-notice" data-notice-key="review_request"> 
<p>
    <?php
    echo wp_kses(
        sprintf(
            /* translators: %s: WC Vendors Marketplace */
            __( 'Hey, I noticed you have been using %s for some time - that\'s awesome! Could you please do me a BIG favor and give it a 5-star rating on WordPress to help us spread the word and boost our motivation?', 'wc-vendors' ),
            '<strong>WC Vendors Marketplace</strong>'
        ),
        array( 'strong' => array() )
    );
?>
</p>
<div class="wcv-notice-buttons">
<p><a class="wcv-dismiss-notice" href="https://wordpress.org/support/plugin/wc-vendors/reviews/?filter=5#new-post" target="_blank"><?php esc_html_e( 'Ok, you deserve it!', 'wc-vendors' ); ?></a></p>
<p><a class="wcv-dismiss-notice" href="#"><?php esc_html_e( 'I already did', 'wc-vendors' ); ?></a></p>
<p><a class="wcv-dismiss-notice-delay" href="#"><?php esc_html_e( 'Nope, maybe later', 'wc-vendors' ); ?></a></p>
</div>
<?php wp_nonce_field( 'wcv_review_notice', 'wcv_review_notice_nonce' ); ?>
</div>
