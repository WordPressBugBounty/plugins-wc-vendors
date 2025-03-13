<?php
/**
 * Star rating template
 *
 * @package WC_Vendors
 *
 * @version 2.5.4
 * @since 2.5.4
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
$stars_witdh = 0;

if ( ! empty( $rating ) ) {
    $stars_witdh = ( $rating / 5 ) * 100;
}

?>

<div class="wcv-star-rating">
    <div class="wcv-star-rating-filled" style="width: <?php echo esc_attr( $stars_witdh ); ?>%;"></div>
</div>
