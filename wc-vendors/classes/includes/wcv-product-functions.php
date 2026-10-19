<?php
/**
 * Product approval functions shared by the admin API and the abilities.
 *
 * @package WCVendors/Functions
 * @since   2.7.3
 */

defined( 'ABSPATH' ) || exit;

if ( ! defined( 'WCV_PRODUCT_NOT_FOUND' ) ) {
    // Error code for a missing product. Consumers key the HTTP status on it.
    define( 'WCV_PRODUCT_NOT_FOUND', 'wcv_product_not_found' );
}

if ( ! defined( 'WCV_PRODUCT_NOT_PENDING' ) ) {
    // Error code for a product that is not pending. Consumers key the HTTP status on it.
    define( 'WCV_PRODUCT_NOT_PENDING', 'wcv_product_not_pending' );
}

if ( ! function_exists( 'wcv_get_pending_product' ) ) {
    /**
     * Get a product that waits for approval.
     *
     * @since 2.7.3
     *
     * @param int $product_id Product ID.
     * @return WC_Product|WP_Error The product, or WP_Error when it is missing or not pending.
     */
    function wcv_get_pending_product( $product_id ) {
        $product = wc_get_product( (int) $product_id );

        if ( ! $product ) {
            return new WP_Error( WCV_PRODUCT_NOT_FOUND, __( 'Product not found.', 'wc-vendors' ) );
        }

        if ( 'pending' !== get_post_status( $product->get_id() ) ) {
            return new WP_Error( WCV_PRODUCT_NOT_PENDING, __( 'Product is not pending.', 'wc-vendors' ) );
        }

        return $product;
    }
}

if ( ! function_exists( 'wcv_approve_product' ) ) {
    /**
     * Approve a pending product.
     *
     * Publishes the product and fires `wcvendors_approve_product`.
     *
     * @since 2.7.3
     *
     * @param int $product_id Product ID.
     * @return true|WP_Error True on success, WP_Error when the product is missing, not pending, or the save fails.
     */
    function wcv_approve_product( $product_id ) {
        $product = wcv_get_pending_product( $product_id );

        if ( is_wp_error( $product ) ) {
            return $product;
        }

        $product_id = $product->get_id();

        $result = wp_update_post(
            array(
                'ID'          => $product_id,
                'post_status' => 'publish',
            )
        );

        if ( is_wp_error( $result ) ) {
            return new WP_Error( 'wcv_product_save_failed', $result->get_error_message() );
        }

        do_action( 'wcvendors_approve_product', $product_id );

        return true;
    }
}

if ( ! function_exists( 'wcv_request_product_change' ) ) {
    /**
     * Send a pending product back to its vendor for changes.
     *
     * Saves the message, sets the product to draft, emails the vendor and fires
     * `wcvendors_request_product_change`.
     *
     * @since 2.7.3
     *
     * @param int    $product_id  Product ID.
     * @param string $message     Change request message.
     * @param array  $suggestions Suggestions with 'field' and 'suggestion' keys.
     * @return true|WP_Error True on success, WP_Error when the product or vendor is missing, the product is not pending, or the save fails.
     */
    function wcv_request_product_change( $product_id, $message = '', $suggestions = array() ) {
        $product = wcv_get_pending_product( $product_id );

        if ( is_wp_error( $product ) ) {
            return $product;
        }

        $product_id = $product->get_id();
        $vendor_id  = get_post_field( 'post_author', $product_id );
        $vendor     = get_userdata( $vendor_id );

        if ( ! $vendor ) {
            return new WP_Error( 'wcv_vendor_not_found', __( 'Vendor not found.', 'wc-vendors' ) );
        }

        if ( ! empty( $message ) ) {
            $product->update_meta_data( 'wcv_change_request_message', sanitize_textarea_field( $message ) );
            $product->save_meta_data();
        }

        // Tell the vendor form to show the suggestions.
        if ( ! empty( $suggestions ) ) {
            $product->update_meta_data( '_wcv_show_ai_suggestions', 'yes' );
            $product->save_meta_data();
        }

        $result = wp_update_post(
            array(
                'ID'          => $product_id,
                'post_status' => 'draft',
            )
        );

        if ( is_wp_error( $result ) ) {
            return new WP_Error( 'wcv_product_save_failed', $result->get_error_message() );
        }

        wcv_send_product_change_request_email( $vendor, $product, $message, $suggestions );

        do_action( 'wcvendors_request_product_change', $product_id, $vendor_id, $message, $suggestions );

        return true;
    }
}

if ( ! function_exists( 'wcv_send_product_change_request_email' ) ) {
    /**
     * Send the change request email to a vendor.
     *
     * @since 2.7.3
     *
     * @param WP_User    $vendor      Vendor user object.
     * @param WC_Product $product     Product object.
     * @param string     $message     Change request message.
     * @param array      $suggestions Suggestions with 'field' and 'suggestion' keys.
     * @return void
     */
    function wcv_send_product_change_request_email( $vendor, $product, $message, $suggestions = array() ) {
        if ( ! $vendor || ! $product ) {
            return;
        }

        $vendor_email = $vendor->user_email;
        $product_name = $product->get_name();
        $product_id   = $product->get_id();
        $product_url  = esc_url( \WCV_Vendor_Dashboard::get_dashboard_page_url( 'product/edit/' . $product_id ) );

        $subject = sprintf(
            /* translators: %s: product name */
            __( 'Change Request for Product: %s', 'wc-vendors' ),
            $product_name
        );

        $email_heading = __( 'Product Change Request', 'wc-vendors' );

        // Build email content.
        ob_start();
        ?>
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #333333; background-color: #f5f5f5;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5; padding: 20px 0;">
                <tr>
                    <td align="center">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <!-- Header -->
                            <tr>
                                <td style="padding: 30px 30px 20px 30px; border-bottom: 2px solid #e8e8e8;">
                                    <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #1a1a1a; line-height: 1.3;">
                                        <?php echo esc_html( $email_heading ); ?>
                                    </h1>
                                </td>
                            </tr>
                            
                            <!-- Content -->
                            <tr>
                                <td style="padding: 30px;">
                                    <!-- Greeting -->
                                    <p style="margin: 0 0 20px 0; font-size: 16px; color: #333333;">
                                        <?php
                                        /* translators: %s: vendor display name */
                                        printf( esc_html__( 'Hello %s,', 'wc-vendors' ), '<strong style="color: #1a1a1a;">' . esc_html( $vendor->display_name ) . '</strong>' );
                                        ?>
                                    </p>
                                    
                                    <!-- Introduction -->
                                    <p style="margin: 0 0 30px 0; font-size: 16px; color: #333333;">
                                        <?php
                                        /* translators: %s: product name */
                                        printf( esc_html__( 'We need some changes to your product "%s".', 'wc-vendors' ), '<strong style="color: #1677ff;">' . esc_html( $product_name ) . '</strong>' );
                                        ?>
                                    </p>
                                    
                                    <!-- Requested Changes Section -->
                                    <?php if ( ! empty( $message ) ) : ?>
                                        <div style="margin: 0 0 25px 0; padding: 20px; background-color: #fff7e6; border-left: 4px solid #faad14; border-radius: 4px;">
                                            <h2 style="margin: 0 0 12px 0; font-size: 18px; font-weight: 600; color: #1a1a1a;">
                                                <?php esc_html_e( 'Requested Changes', 'wc-vendors' ); ?>
                                            </h2>
                                            <div style="margin: 0; font-size: 15px; color: #333333; line-height: 1.6;">
                                                <?php echo wp_kses_post( nl2br( $message ) ); ?>
                                            </div>
                                        </div>
                                    <?php endif; ?>
                                    
                                    <!-- Suggested Fixes Section -->
                                    <?php if ( ! empty( $suggestions ) && is_array( $suggestions ) ) : ?>
                                        <div style="margin: 0 0 25px 0; padding: 20px; background-color: #e6f7ff; border-left: 4px solid #1677ff; border-radius: 4px;">
                                            <h2 style="margin: 0 0 15px 0; font-size: 18px; font-weight: 600; color: #1a1a1a;">
                                                <?php esc_html_e( 'Suggested Fixes', 'wc-vendors' ); ?>
                                            </h2>
                                            <div style="margin: 0;">
                                                <?php foreach ( $suggestions as $index => $suggestion ) : ?>
                                                    <?php if ( ! empty( $suggestion['field'] ) && ! empty( $suggestion['suggestion'] ) ) : ?>
                                                        <div style="margin: <?php echo $index > 0 ? '15px' : '0'; ?> 0 0 0; padding: 0;">
                                                            <div style="margin: 0 0 5px 0; font-weight: 600; font-size: 15px; color: #1a1a1a; text-transform: capitalize;">
                                                                <?php echo esc_html( $suggestion['field'] ); ?>
                                                            </div>
                                                            <div style="margin: 0; font-size: 15px; color: #333333; line-height: 1.6; padding-left: 0;">
                                                                <?php echo wp_kses_post( $suggestion['suggestion'] ); ?>
                                                            </div>
                                                        </div>
                                                    <?php endif; ?>
                                                <?php endforeach; ?>
                                            </div>
                                        </div>
                                    <?php endif; ?>
                                    
                                    <!-- Call to Action Button -->
                                    <div style="margin: 30px 0; text-align: center;">
                                        <a href="<?php echo esc_url( $product_url ); ?>" style="display: inline-block; background-color: #1677ff; color: #ffffff !important; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; box-shadow: 0 2px 4px rgba(22, 119, 255, 0.3); transition: background-color 0.2s;">
                                            <?php esc_html_e( 'Edit Product', 'wc-vendors' ); ?>
                                        </a>
                                    </div>
                                    
                                    <!-- Closing -->
                                    <p style="margin: 30px 0 0 0; font-size: 15px; color: #666666; text-align: center;">
                                        <?php esc_html_e( 'Thank you for your cooperation.', 'wc-vendors' ); ?>
                                    </p>
                                </td>
                            </tr>
                            
                            <!-- Footer -->
                            <tr>
                                <td style="padding: 20px 30px; background-color: #fafafa; border-top: 1px solid #e8e8e8; border-radius: 0 0 8px 8px;">
                                    <p style="margin: 0; font-size: 13px; color: #999999; text-align: center;">
                                        <?php echo esc_html( get_option( 'blogname' ) ); ?>
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        <?php
        $email_content = ob_get_clean();

        // Set email headers.
        $headers = array( 'Content-Type: text/html; charset=UTF-8' );

        // Send email.
        wp_mail(
            $vendor_email,
            $subject,
            $email_content,
            $headers
        );
    }
}
