<?php
/**
 * Order Table Main Actions
 *
 * This file is used to add the table actions before and after a table
 */

use WC_Vendors\Classes\Front\WCV_Form_Helper;
?>

<div class="wcv_dashboard_table_header wcv_actions wcv-cols-group horizontal-gutters wcv-order-header">
    <div class="wcv-order-table-order-count wcv-flex wcv-flex-wrap-reverse wcv-gap-bottom">
        <?php $order_counts = $this->count_orders_by_statuses(); ?>
        <div class="small-100 all-100 quick-link-wrapper">
            <?php foreach ( $order_counts as $order_status => $count ) : ?>
                <span class="quick-link-btn black">
                    <a href="<?php echo esc_url( add_query_arg( 'order_status', $order_status ) ); ?>">
                        <span><?php echo esc_html( $count['label'] ); ?></span> (<?php echo esc_html( $count['count'] ); ?>)
                    </a>
                </span>
            <?php endforeach; ?>
        </div>
    </div>
    <div class="all-100 small-100">
        <form method="post" action="" class="wcv-form wcv-form-exclude">
            <div class="wcv-cols-group wcv-horizontal-gutters wcv-cols-group-narrow">
            <?php


            // Start Date.
            WCV_Form_Helper::input(
                apply_filters(
                    'wcv_order_start_date_input',
                    array(
                        'id'                  => '_wcv_order_start_date_input',
                        'label'               => __( 'Start date', 'wc-vendors' ),
                        'class'               => 'wcv-datepicker-dashboard-filter no_limit wcv-datepicker wcv-init-picker',
                        'value'               => gmdate( $this->date_format, $this->get_start_date() ),
                        'placeholder'         => 'YYYY-MM-DD',
                        'wrapper_start'       => '<div class="all-75 medium-100 small-100"><div class="wcv-cols-group wcv-horizontal-gutters wcv-cols-group-narrow"><div class="all-25 small-50 medium-50">',
                        'wrapper_end'         => '</div>',
                        'append_before'       => '<span class="wcv-flex" title="toggle" data-toggle>' . wcv_get_icon( 'wcv-icon wcv-icon-24', 'wcv-icon-calendar' ) . '</span>',
                        'input_wrapper_class' => 'wcv-datepicker-wrapper wcv-flex',
                        'custom_attributes'   => array(
                            'data-default' => gmdate( $this->date_format, $this->get_default_start_date() ),
                            'maxlenth'     => '10',
                            'pattern'      => '[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])',
                            'data-input'   => '',
                        ),
                    )
                )
            );

            // End Date.
            WCV_Form_Helper::input(
                apply_filters(
                    'wcv_order_end_date_input',
                    array(
                        'id'                  => '_wcv_order_end_date_input',
                        'label'               => __( 'End date', 'wc-vendors' ),
                        'class'               => 'wcv-datepicker-dashboard-filter no_limit wcv-datepicker wcv-init-picker',
                        'value'               => gmdate( $this->date_format, $this->get_end_date() ),
                        'placeholder'         => 'YYYY-MM-DD',
                        'wrapper_start'       => '<div class="all-25 small-50 medium-50">',
                        'wrapper_end'         => '</div>',
                        'append_before'       => '<span class="wcv-flex" title="toggle" data-toggle>' . wcv_get_icon( 'wcv-icon wcv-icon-24', 'wcv-icon-calendar' ) . '</span>',
                        'input_wrapper_class' => 'wcv-datepicker-wrapper wcv-flex',
                        'custom_attributes'   => array(
                            'data-default' => gmdate( $this->date_format, strtotime( apply_filters( 'wcv_order_end_date', 'now' ) ) ),
                            'maxlenth'     => '10',
                            'pattern'      => '[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])',
                            'data-input'   => '',
                        ),
                    )
                )
            );

            WCV_Form_Helper::select(
                apply_filters(
                    'wcv_shipping_status_input',
                    array(
                        'id'            => '_wcv_shipping_status_input',
                        'label'         => __( 'Shipping status', 'wc-vendors' ),
                        'class'         => 'wcv-dashboard-filter wcv-custom-select',
                        'value'         => $this->get_order_shipping_status(),
                        'placeholder'   => __( 'Shipping status', 'wc-vendors' ),
                        'wrapper_start' => '<div class="all-25 small-50 medium-50">',
                        'wrapper_end'   => '</div>',
                        'options'       => array(
                            ''                 => __( 'None', 'wc-vendors' ),
                            'shipped'          => __( 'Shipped', 'wc-vendors' ),
                            'awating_shipping' => __( 'Not shipped', 'wc-vendors' ),
                        ),
                        'multiple'      => false,
                    )
                )
            );

            WCV_Form_Helper::select(
                apply_filters(
                    'wcv_order_status_input',
                    array(
                        'id'            => '_wcv_order_status_input',
                        'label'         => __( 'Order status', 'wc-vendors' ),
                        'class'         => 'wcv-dashboard-filter wcv-custom-select',
                        'value'         => $this->get_order_filter_status(),
                        'placeholder'   => __( 'Completed', 'wc-vendors' ),
                        'wrapper_start' => '<div class="all-25 small-50 medium-50">',
                        'wrapper_end'   => '</div></div></div>',
                        'options'       => array_merge(
                            array(
                                '' => __( 'None', 'wc-vendors' ),
                            ),
                            wcv_get_order_statuses(),
                        ),
                        'multiple'      => true,
                    )
                )
            );

            // Update Button.
            WCV_Form_Helper::button(
                apply_filters(
                    'wcv_order_update_button',
                    array(
                        'id'            => 'update_button',
                        'value'         => __( 'Update', 'wc-vendors' ),
                        'type'          => 'submit',
                        'button_text'   => __( 'Update', 'wc-vendors' ),
                        'after_text'    => '</span>',
                        'class'         => 'wcv-button wcv-inline-flex wcv-button-link-secondary text-blue',
                        'wrapper_start' => '<div class="all-25 medium-30 small-100 tiny-100 push-right wcv-flex wcv-flex-end"><div class="control-group"><label class="wcv_desktop">&nbsp;&nbsp;</label><div class="control">',
                        'wrapper_end'   => '</div></div>',
                        'before_text'   => wcv_get_icon( 'wcv-icon wcv-icon-24', 'wcv-icon-round-update' ) . '<span>',
                    )
                )
            );

            // Update Button.
            WCV_Form_Helper::button(
                apply_filters(
                    'wcv_order_filter_clear_button',
                    array(
                        'id'            => 'clear_button',
                        'button_text'   => __( 'Clear', 'wc-vendors' ),
                        'class'         => 'wcv-button wcv-flex wcv-button-link-danger',
                        'type'          => 'reset',
                        'wrapper_start' => '<div class="control-group"><label class="wcv_desktop">&nbsp;&nbsp;</label><div class="control">',
                        'wrapper_end'   => '</div></div></div>',
                    )
                )
            );

            wp_nonce_field( 'wcv-order-date-update', 'wcv_order_date_update' );
            ?>
            </div>
        </form>
    </div>
</div>
