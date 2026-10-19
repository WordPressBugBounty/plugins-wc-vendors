<?php

/**
 * Commission functions
 *
 * @author  Matt Gates <http://mgates.me>
 * @package WCVendors
 */
class WCV_Commission {

    /**
     * Constructor
     */
    public function __construct() {

        add_action( 'init', array( $this, 'check_order_complete' ) );
        add_action( 'init', array( $this, 'check_order_reverse' ) );

        // Reverse the commission if the order is trashed or deleted.
        if ( wcv_cot_enabled() ) {
            add_action( 'woocommerce_before_trash_order', array( $this, 'commissions_table_sync' ), 10 );
            add_action( 'woocommerce_before_delete_order', array( $this, 'commissions_table_sync' ), 10 );
            add_action( 'woocommerce_untrash_order', array( $this, 'commissions_table_restore' ), 10 );
        } else {
            add_action( 'wp_trash_post', array( $this, 'commissions_table_sync' ), 10 );
            add_action( 'before_delete_post', array( $this, 'commissions_table_sync' ), 10 );
            add_action( 'untrashed_post', array( $this, 'commissions_table_restore' ), 10 );
        }
        add_action( 'woocommerce_order_partially_refunded', array( $this, 'partial_reversed_commission' ), 10, 2 );
        add_filter( 'option_wcvendors_vendor_commission_rate', array( $this, 'convert_decimal_sep_to_dot' ), 10 );
        add_filter( 'pre_update_option_wcvendors_vendor_commission_rate', array( $this, 'convert_decimal_sep_to_dot' ), 10 );
        add_filter( 'wcv_get_seting_option_wcvendors_vendor_commission_rate', array( $this, 'convert_decimal_to_wc_sep' ), 10 );
    }

    /**
     * Reverse the commission if the order item was refunded.
     *
     * @param  int $order_id The Order ID.
     * @param  int $refund_id The Refund ID.
     *
     * @version 1.8.2
     */
    public function partial_reversed_commission( $order_id, $refund_id ) {
        global $wpdb;
        $product_ids  = array();
        $refund       = new WC_Order_Refund( $refund_id );
        $refund_items = $refund->get_items();

        foreach ( $refund_items as $refund_item ) {
            $item              = new WC_Order_Item_Product( $refund_item );
            $refund_product_id = 0 !== $item->get_variation_id() ? $item->get_variation_id() : $item->get_product_id();
            $product_ids[]     = $refund_product_id;
        }

        foreach ( $product_ids as $product_id ) {
            $vendor_id  = get_post_field( 'post_author', $product_id );
            $commission = $wpdb->get_results( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
                $wpdb->prepare(
                    "SELECT * FROM {$wpdb->prefix}pv_commission WHERE order_id = %d AND product_id = %d AND ( vendor_id = %d OR vendor_id = 1 )",
                    $order_id,
                    $product_id,
                    $vendor_id
                )
            );

            foreach ( $commission as $commission_obj ) {
                $wpdb->update( // phpcs:ignore
                    $wpdb->prefix . 'pv_commission',
                    array(
                        'status' => 'reversed',
                    ),
                    array(
                        'id' => $commission_obj->id,
                    )
                );
            }
        }
    }

    /**
     * Run actions when an order is reversed
     */
    public function check_order_reverse() {

        foreach ( $this->get_completed_status() as $completed ) {
            foreach ( $this->get_reversed_status() as $reversed ) {
                add_action(
                    "woocommerce_order_status_{$completed}_to_{$reversed}",
                    array(
                        'WCV_Commission',
                        'reverse_due_commission',
                    )
                );
            }
        }
    }


    /**
     * Runs only on a manual order update by a human
     */
    public function check_order_complete() {

        foreach ( $this->get_completed_status() as $completed ) {
            add_action( 'woocommerce_order_status_' . $completed, array( 'WCV_Commission', 'log_commission_due' ), 10, 3 );
        }
    }

    /**
     * Get commission status
     *
     * @return array $commission_status The commission status.
     * @version 1.0.0
     * @since   1.0.0
     */
    public static function commission_status() {

        return apply_filters(
            'wcvendors_commission_status',
            array(
                'due'      => __( 'Due', 'wc-vendors' ),
                'paid'     => __( 'Paid', 'wc-vendors' ),
                'reversed' => __( 'Reversed', 'wc-vendors' ),
            )
        );
    }

    /**
     * Return completed status
     *
     * @return array $completed_statuses The completed statuses.
     */
    public function get_completed_status() {

        return apply_filters(
            'wcvendors_completed_statuses',
            array(
                'completed',
                'processing',
            )
        );
    }


    /**
     * Return reversed status
     *
     * @return array $reversed_status The reversed status.
     */
    public function get_reversed_status() {
        return apply_filters(
            'wcvendors_reversed_statuses',
            array(
                'pending',
                'refunded',
                'cancelled',
                'failed',
            )
        );
    }


    /**
     * Reverse commission for an entire order
     *
     * Only runs if the order has been logged in pv_commission table.
     *
     * @param int $order_id The order ID.
     *
     * @return array|false $results Due commissions.
     */
    public static function reverse_due_commission( $order_id ) {

        global $wpdb;

        // Check if this order exists.
        $count = self::count_commission_by_order( $order_id );
        if ( ! $count ) {
            return false;
        }

        // Deduct this amount from the vendor's total due.
        $results = self::sum_total_due_for_order( $order_id );
        if ( empty( $results ) ) {
            return false;
        }
        $ids = escape_array_for_in_operator( $results['ids'], true );

        $query  = $wpdb->prepare( "UPDATE {$wpdb->prefix}pv_commission SET `status` = %s WHERE id IN", 'reversed' );
        $query .= " $ids";

        $results = $wpdb->query( $query ); // phpcs:ignore

        return $results;
    }


    /**
     * Store all commission due for an order
     *
     * @version 2.7.3
     *
     * @return void
     *
     * @param int           $order_id          The order id.
     * @param WC_Order|null $order             The order. Optional.
     * @param array         $status_transition The status transition WooCommerce passes. Optional.
     */
    public static function log_commission_due( $order_id, $order = null, $status_transition = array() ) {

        // An untrash restores the rows its trash reversed, so a row reversed before the trash must stay reversed.
        if ( isset( $status_transition['from'] ) && 'trash' === $status_transition['from'] ) {
            return;
        }

        $order = wc_get_order( $order_id );

        if ( $order->get_parent_id() !== 0 ) {
            return;
        }

        $dues = WCV_Vendors::get_vendor_dues_from_order( $order, false );

        foreach ( $dues as $vendor_id => $details ) {

            // Only process vendor commission.
            if ( ! WCV_Vendors::is_vendor( $vendor_id ) ) {
                continue;
            }

            // See if they currently have an amount due.
            $due = WCV_Vendors::count_due_by_vendor( $vendor_id, $order_id );
            if ( $due > 0 ) {
                continue;
            }

            // Get the dues in an easy format for inserting to our table.
            $insert_due = array();

            foreach ( $details as $key => $detail ) {

                $product_id = $detail['product_id'];
                $order_date = $order->get_date_created();
                $prior_base = isset( $insert_due[ $product_id ] ) ? $insert_due[ $product_id ]['commission_base'] : 0.0;

                // A detail with no base makes the row base unknown. NULL lets the report use the line subtotal.
                $commission_base = ( isset( $detail['commission_base'] ) && null !== $prior_base ) ? (float) $prior_base + (float) $detail['commission_base'] : null;

                $insert_due[ $product_id ] = array(
                    'order_id'        => $order_id,
                    'vendor_id'       => $vendor_id,
                    'product_id'      => $product_id,
                    'total_due'       => ! empty( $insert_due[ $product_id ]['total_due'] ) ? ( $detail['commission'] + $insert_due[ $product_id ]['total_due'] ) : $detail['commission'],
                    'total_shipping'  => ! empty( $insert_due[ $product_id ]['total_shipping'] ) ? ( $detail['shipping'] + $insert_due[ $product_id ]['total_shipping'] ) : $detail['shipping'],
                    'tax'             => ! empty( $insert_due[ $product_id ]['tax'] ) ? ( $detail['tax'] + $insert_due[ $product_id ]['tax'] ) : $detail['tax'],
                    'qty'             => ! empty( $insert_due[ $product_id ]['qty'] ) ? ( $detail['qty'] + $insert_due[ $product_id ]['qty'] ) : $detail['qty'],
                    'time'            => gmdate( 'Y-m-d H:i:s', strtotime( $order_date ) ),
                    'commission_base' => $commission_base,
                );
            }

            if ( ! empty( $insert_due ) ) {
                self::insert_new_commission( array_values( $insert_due ) );
            }
        }
    }


    /**
     * Add up the totals for an order for each vendor
     *
     * @param int    $order_id The order Id.
     * @param string $status   The status.
     *
     * @return array|bool $results The results.
     */
    public static function sum_total_due_for_order( $order_id, $status = 'due' ) {

        global $wpdb;

        $results = $wpdb->get_results( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
            $wpdb->prepare(
                "SELECT `id`, `total_due`, `total_shipping`, `tax`, `vendor_id` FROM `{$wpdb->prefix}pv_commission`
                WHERE `order_id` = %d
                AND `status` = %s",
                $order_id,
                $status
            )
        );

        $commission_ids = array();
        $pay            = array();

        foreach ( $results as $commission ) {
            $commission_ids[] = $commission->id;

            $pay[ $commission->vendor_id ] = ! empty( $pay[ $commission->vendor_id ] )
                ? ( $pay[ $commission->vendor_id ] + ( $commission->total_due + $commission->total_shipping + $commission->tax ) )
                : ( $commission->total_due + $commission->total_shipping + $commission->tax );
        }

        $return = array(
            'vendors' => $pay,
            'ids'     => $commission_ids,
        );

        return $return;
    }


    /**
     * Return all commission outstanding with a 'due' status
     *
     * @return object
     */
    public static function get_all_due() {

        global $wpdb;

        $table_name = $wpdb->prefix . 'pv_commission';
        $where      = $wpdb->prepare( 'WHERE status = %s', 'due' );
        $where      = apply_filters( 'wcvendors_commission_all_due_where', $where );
        $query      = $wpdb->prepare( 'SELECT id, vendor_id, total_due, total_shipping FROM %i', $table_name );
        $query      = $query . ' ' . $where;
        $query      = apply_filters( 'wcvendors_commission_all_due_sql', $query );
        $results    = $wpdb->get_results( $query ); // phpcs:ignore

        return $results;
    }


    /**
     * Check if this order has commission logged already
     *
     * @param int $order_id The order ID.
     *
     * @return int $count The number of commissions for the order.
     */
    public static function count_commission_by_order( $order_id ) {

        global $wpdb;

        if ( is_array( $order_id ) ) {
            $order_id = implode( ',', $order_id );
        }

        $count = $wpdb->get_var( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
            $wpdb->prepare(
                "SELECT COUNT(order_id) AS order_count FROM {$wpdb->prefix}pv_commission WHERE order_id IN (%s) AND status <> %s",
                $order_id,
                'reversed'
            )
        );

        return (int) $count;
    }

    /**
     * Check the commission status for the order
     *
     * @param array  $order  The order details.
     * @param string $status The commission status.
     *
     * @return int $count The number of commissions.
     */
    public static function check_commission_status( $order, $status ) {

        global $wpdb;

        $order_id   = $order['order_id'];
        $vendor_id  = $order['vendor_id'];
        $product_id = $order['product_id'];

        $count = $wpdb->get_var( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
            $wpdb->prepare(
                "SELECT count(order_id) AS order_count FROM {$wpdb->prefix}pv_commission
                WHERE order_id = %d AND vendor_id = %d AND product_id = %d AND status = %s",
                $order_id,
                $vendor_id,
                $product_id,
                $status
            )
        );

        return $count ? (int) $count : 0;
    }

    /**
     * Product's commission rate in percentage form
     *
     * Eg: 50 for 50%
     *
     * @param int $product_id The product ID.
     *
     * @return float
     */
    public static function get_commission_rate( $product_id ) {

        $commission = 0;

        $parent = get_post_ancestors( $product_id );
        if ( $parent ) {
            $product_id = $parent[0];
        }

        $vendor_id = WCV_Vendors::get_vendor_from_product( $product_id );

        $product_commission = get_post_meta( $product_id, 'pv_commission_rate', true );
        $vendor_commission  = WCV_Vendors::get_default_commission( $vendor_id );
        $default_commission = get_option( 'wcvendors_vendor_commission_rate' );

        if ( '' !== $product_commission && false !== $product_commission ) {
            $commission = $product_commission;
        } elseif ( '' !== $vendor_commission && false !== $vendor_commission ) {
            $commission = $vendor_commission;
        } elseif ( '' !== $default_commission && false !== $default_commission ) {
            $commission = $default_commission;
        }

        $commission = apply_filters_deprecated( 'wcv_commission_rate_percent', array( $commission, $product_id ), '2.3.0', 'wcvendors_commission_rate_percent' );
        return apply_filters( 'wcvendors_commission_rate_percent', $commission, $product_id );
    }


    /**
     * Commission due for a product based on a rate and price
     *
     * @version 2.1.14
     * @since   2.0.0
     * @param float         $product_price The product price.
     * @param int           $product_id    The product id.
     * @param WC_Order      $order         The WooCommerce order.
     * @param int           $qty           The product quantity.
     * @param WC_Order_Item $item          The order item. Optional default null.
     * @return float
     */
    public static function calculate_commission( $product_price, $product_id, $order, $qty, $item = null ) {

        $commission_rate = self::get_commission_rate( $product_id );
        $commission      = $product_price * ( $commission_rate / 100 );
        $commission      = round( $commission, 2 );

        $commission = apply_filters_deprecated(
            'wcv_commission_rate',
            array( $commission, $product_id, $product_price, $order, $qty, $item ),
            '2.3.0',
            'wcvendors_commission_rate'
        );
        return apply_filters( 'wcvendors_commission_rate', $commission, $product_id, $product_price, $order, $qty, $item );
    }

    /**
     * Get the price that the commission is calculated from.
     *
     * @since 2.7.3
     * @param float         $product_price The product price.
     * @param int           $product_id    The product id.
     * @param WC_Order      $order         The WooCommerce order.
     * @param int           $qty           The product quantity.
     * @param WC_Order_Item $item          The order item. Optional default null.
     * @return float
     */
    public static function get_commission_base( $product_price, $product_id, $order, $qty, $item = null ) {
        return (float) apply_filters( 'wcvendors_commission_base', $product_price, $product_id, $order, $qty, $item );
    }

    /**
     * Check if the pv_commission table has the commission_base column.
     *
     * @since 2.7.3
     * @return bool
     */
    public static function has_commission_base_column() {
        global $wpdb;
        static $has_column = array();

        // Keyed by table prefix so a switch_to_blog() call gets its own answer.
        if ( ! isset( $has_column[ $wpdb->prefix ] ) ) {
            $has_column[ $wpdb->prefix ] = (bool) $wpdb->get_var( "SHOW COLUMNS FROM {$wpdb->prefix}pv_commission LIKE 'commission_base'" ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
        }

        return $has_column[ $wpdb->prefix ];
    }


    /**
     * Log commission to the pv_commission table
     *
     * Will either update or insert to the database
     *
     * @param array $orders The list of orders.
     *
     * @return void
     */
    public static function insert_new_commission( $orders = array() ) {

        global $wpdb;

        if ( empty( $orders ) ) {
            return;
        }

        $table = $wpdb->prefix . 'pv_commission';

        // Insert the time before applying filter.
        foreach ( $orders as $key => $order ) {
            $orders[ $key ]['time']   = $order['time'];
            $orders[ $key ]['status'] = ( 0.0 === (float) $order['total_due'] ) ? 'paid' : 'due';
        }

        $orders = apply_filters( 'wcvendors_insert_new_commission', $orders );

        $formats = array(
            'order_id'        => '%d',
            'vendor_id'       => '%d',
            'product_id'      => '%d',
            'total_due'       => '%f',
            'total_shipping'  => '%f',
            'tax'             => '%f',
            'qty'             => '%d',
            'commission_base' => '%f',
        );

        foreach ( $orders as $key => $order ) {

            if ( ! self::has_commission_base_column() ) {
                unset( $order['commission_base'] );
            }

            $where = array(
                'order_id'   => $order['order_id'],
                'product_id' => $order['product_id'],
                'vendor_id'  => $order['vendor_id'],
                'qty'        => $order['qty'],
            );

            // One query covers the paid check and the existence check. The paid check ignores qty
            // on purpose, and $wpdb->update() cannot tell an unchanged row from a missing one.
            $rows = $wpdb->get_results( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
                $wpdb->prepare(
                    'SELECT id, qty, status FROM %i WHERE order_id = %d AND vendor_id = %d AND product_id = %d',
                    $table,
                    $order['order_id'],
                    $order['vendor_id'],
                    $order['product_id']
                ),
                ARRAY_A
            );

            $is_paid     = false;
            $existing_id = 0;

            foreach ( $rows as $row ) {
                if ( 'paid' === $row['status'] ) {
                    $is_paid = true;
                    break;
                }

                if ( (int) $row['qty'] === (int) $order['qty'] ) {
                    $existing_id = (int) $row['id'];
                }
            }

            if ( $is_paid ) {
                continue;
            }

            $format = array();
            foreach ( array_keys( $order ) as $column ) {
                $format[] = $formats[ $column ] ?? '%s';
            }

            if ( $existing_id ) {
                $wpdb->update( $table, $order, array( 'id' => $existing_id ), $format ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
            } else {
                $suppress = $wpdb->suppress_errors( true );
                $inserted = $wpdb->insert( $table, $order, $format ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
                $error    = $wpdb->last_error;
                $wpdb->suppress_errors( $suppress );

                if ( false !== $inserted ) {
                    $orders[ $key ]['id'] = (int) $wpdb->insert_id;
                } else {
                    // A concurrent request may have won the unique key. Update the row it wrote.
                    $updated = $wpdb->update( $table, $order, $where, $format ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching

                    // false is a query error, 0 means the WHERE matched nothing. Both lose the commission.
                    if ( ! $updated ) {
                        wc_get_logger()->error(
                            sprintf( 'Could not log commission for order %d: %s', $order['order_id'], $error ),
                            array( 'source' => 'wcvendors' )
                        );
                    }
                }
            }
        }

        do_action_deprecated( 'wcv_commissions_inserted', array( $orders ), '2.3.0', 'wcvendors_commissions_inserted' );
        do_action( 'wcvendors_commissions_inserted', $orders );
    }


    /**
     * Set commission to 'paid' for an entire order
     *
     * @access public
     *
     * @param array $order_id   An array of Order IDs or an int.
     *
     * @return bool.
     */
    public static function set_order_commission_paid( $order_id ) {

        global $wpdb;

        $table_name = $wpdb->prefix . 'pv_commission';

        if ( is_array( $order_id ) ) {
            $order_id = escape_array_for_in_operator( $order_id );
        }

        $query  = $wpdb->prepare( "UPDATE %i SET `status` = 'paid' WHERE order_id IN", $table_name );
        $query .= " ($order_id)";

        $result = $wpdb->query( $query ); // phpcs:ignore

        return $result;
    }


    /**
     * Set commission to 'paid' for an entire order.
     *
     * @access public
     *
     * @param mixed $vendors An array of Order IDs or an int.
     *
     * @return bool.
     */
    public static function set_vendor_commission_paid( $vendors ) {

        global $wpdb;

        $table_name = $wpdb->prefix . 'pv_commission';

        if ( is_array( $vendors ) ) {
            $vendors = escape_array_for_in_operator( $vendors );
        }

        $query  = $wpdb->prepare( "UPDATE %i SET `status` = 'paid' WHERE vendor_id IN", $table_name );
        $query .= " ($vendors)";
        $result = $wpdb->query( $query ); // phpcs:ignore

        return $result;
    }


    /**
     * Set commission to 'paid' for a specific vendor
     *
     * @access public
     *
     * @param int $vendor_id  The vendor id.
     * @param int $product_id The product id.
     * @param int $order_id   The order id.
     *
     * @return bool.
     */
    public static function set_vendor_product_commission_paid( $vendor_id, $product_id, $order_id ) {

        global $wpdb;

        $result = $wpdb->query( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
            $wpdb->prepare(
                "UPDATE `{$wpdb->prefix}pv_commission` SET `status` = 'paid' WHERE vendor_id = %d AND order_id = %d AND product_id = %d",
                $vendor_id,
                $order_id,
                $product_id
            )
        );

        return $result;
    }

    /**
     * If an order is trashed or deleted reverse the commission rows it covers
     *
     * Records the status each row had as order meta so an untrash can restore it.
     * Rows already reversed by a refund or a status change are left alone.
     *
     * @since   1.9.2
     * @version 2.7.3
     * @access  public
     *
     * @param int $order_id the order id.
     *
     * @return bool|int The number of rows updated, or false when there is nothing to reverse.
     */
    public function commissions_table_sync( $order_id ) {

        global $wpdb;

        $scope = $this->get_commission_scope( $order_id );

        if ( false === $scope ) {
            return false;
        }

        $where = $wpdb->prepare( '`order_id` = %d', $scope['order_id'] );

        if ( null !== $scope['vendor_id'] ) {
            $where .= $wpdb->prepare( ' AND `vendor_id` = %d', $scope['vendor_id'] );
        }

        $rows = $wpdb->get_results( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
            "SELECT `id`, `status` FROM `{$wpdb->prefix}pv_commission` WHERE {$where} AND `status` != 'reversed'" // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
        );

        if ( empty( $rows ) ) {
            return false;
        }

        $statuses = wp_list_pluck( $rows, 'status', 'id' );

        $scope['order']->update_meta_data( '_wcv_reversed_commissions', $statuses );
        $scope['order']->save_meta_data();

        $ids = escape_array_for_in_operator( array_keys( $statuses ), true );

        return $wpdb->query( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
            "UPDATE `{$wpdb->prefix}pv_commission` SET `status` = 'reversed' WHERE `id` IN {$ids}" // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
        );
    }

    /**
     * If an order is untrashed restore the commission rows its trash reversed
     *
     * Each row returns to the status recorded when the order was trashed. Rows
     * reversed for another reason, such as a refund, stay reversed.
     *
     * @since   2.7.3
     * @access  public
     *
     * @param int $order_id the order id.
     *
     * @return bool|int The number of rows updated, or false when there is nothing to restore.
     */
    public function commissions_table_restore( $order_id ) {

        global $wpdb;

        $scope = $this->get_commission_scope( $order_id );

        if ( false === $scope ) {
            return false;
        }

        $statuses = $scope['order']->get_meta( '_wcv_reversed_commissions', true );

        if ( empty( $statuses ) || ! is_array( $statuses ) ) {
            return false;
        }

        $updated = 0;

        foreach ( array_unique( $statuses ) as $status ) {
            $ids = escape_array_for_in_operator( array_keys( $statuses, $status, true ), true );

            $updated += (int) $wpdb->query( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
                $wpdb->prepare(
                    "UPDATE `{$wpdb->prefix}pv_commission` SET `status` = %s WHERE `status` = 'reversed' AND `id` IN {$ids}", // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
                    $status
                )
            );
        }

        $scope['order']->delete_meta_data( '_wcv_reversed_commissions' );
        $scope['order']->save_meta_data();

        return $updated;
    }

    /**
     * Get the commission rows an order covers
     *
     * Commission rows store the parent order id, so a sub order covers its own
     * vendor's rows on the parent order instead of its own id.
     *
     * @since   2.7.3
     * @access  protected
     *
     * @param int $order_id the order id.
     *
     * @return array|bool The order object plus the order id and vendor id to match, or false when the id is not an order.
     */
    protected function get_commission_scope( $order_id ) {

        $order_types = array( 'shop_order', 'shop_order_vendor' );

        // Cheaper than building an order object for every post trashed or deleted.
        if ( ! wcv_cot_enabled() && ! in_array( get_post_type( $order_id ), $order_types, true ) ) {
            return false;
        }

        $order = wc_get_order( $order_id );

        if ( ! $order || ! in_array( $order->get_type(), $order_types, true ) ) {
            return false;
        }

        $parent_id = $order->get_parent_id();

        // A parent order covers every vendor on the order.
        if ( 0 === $parent_id ) {
            return array(
                'order'     => $order,
                'order_id'  => $order->get_id(),
                'vendor_id' => null,
            );
        }

        // Sub orders created before the vendor id migration only carry the old meta key.
        $vendor_id = (int) $order->get_meta( 'wcv_vendor_id', true );

        if ( ! $vendor_id ) {
            $vendor_id = (int) $order->get_meta( '_vendor_id', true );
        }

        if ( ! $vendor_id ) {
            return false;
        }

        return array(
            'order'     => $order,
            'order_id'  => $parent_id,
            'vendor_id' => $vendor_id,
        );
    }

    /**
     * Get the commission total for a specific vendor.
     *
     * @since  1.9.6
     * @since  2.7.0 Run the query through $wpdb->prepare() to harden against SQL injection.
     * @access public
     *
     * @param int    $vendor_id    The vendor id to search for.
     * @param string $status       The status to look for.
     * @param bool   $inc_shipping Whether to include shipping or not.
     * @param bool   $inc_tax      Whether to include tax or not.
     *
     * @return object $totals as an object
     */
    public static function commissions_now( $vendor_id, $status = 'due', $inc_shipping = false, $inc_tax = false ) {

        global $wpdb;

        $sql = 'SELECT sum( `total_due` ) as total_due';

        if ( $inc_shipping ) {
            $sql .= ', sum( `total_shipping` ) as total_shipping';
        }
        if ( $inc_tax ) {
            $sql .= ', sum( `tax` ) as total_tax ';
        }

        $sql .= $wpdb->prepare(
            " FROM `{$wpdb->prefix}pv_commission`
                WHERE vendor_id = %d
                AND status = %s
            ",
            $vendor_id,
            $status
        );

        $results = $wpdb->get_row( $sql ); // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching

        $commissions_now = array_filter( get_object_vars( $results ) );

        if ( empty( $commissions_now ) ) {
            $results = false;
        }

        return $results;
    }

    /**
     * Get the commission for a specific order, product and vendor
     *
     * @since  1.9.9
     * @access public
     *
     * @param int $order_id   The order id to search for.
     * @param int $product_id The product id to search for.
     * @param int $vendor_id  The vendor id to search for.
     */
    public static function get_commission_due( $order_id, $product_id, $vendor_id ) {

        global $wpdb;

        $commission_due = $wpdb->get_var( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
            $wpdb->prepare(
                "SELECT total_due FROM `{$wpdb->prefix}pv_commission`
                WHERE vendor_id = %d AND product_id  = %d AND order_id = %d",
                $vendor_id,
                $product_id,
                $order_id
            )
        );

        return $commission_due;
    }


    /**
     * Get the total due for all commissions
     *
     * @param string $status The commission status.
     *
     * @since  2.0.0
     * @access public
     */
    public static function get_totals( $status = 'due' ) {

        global $wpdb;

        $results = $wpdb->get_results( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
            $wpdb->prepare(
                "SELECT SUM(total_due + total_shipping + tax) as total
                FROM `{$wpdb->prefix}pv_commission`
                WHERE status = %s",
                $status
            )
        );

        $totals = array_shift( $results )->total;

        return $totals;
    }

    /**
     * Get the summed total for each vendor based on the status
     *
     * @since 2.0.3
     * @access public
     */
    public static function get_sum_vendor_totals() {

        global $wpdb;

        $due      = array();
        $paid     = array();
        $reversed = array();

        $table_name = $wpdb->prefix . 'pv_commission';
        $query      = "SELECT `id`, `total_due`, `total_shipping`, `tax`, `vendor_id`, `status` FROM `{$table_name}`";

        // phpcs:disable
        $orderby    = ! empty( $_REQUEST['orderby'] ) ? esc_attr( $_REQUEST['orderby'] ) : 'time';
        $order      = ( ! empty( $_REQUEST['order'] ) && 'asc' === $_REQUEST['order'] ) ? 'ASC' : 'DESC';
        $com_status = ! empty( $_REQUEST['com_status'] ) ? esc_attr( $_REQUEST['com_status'] ) : '';
        $vendor_id  = ! empty( $_REQUEST['vendor_id'] ) ? esc_attr( $_REQUEST['vendor_id'] ) : '';
        $status_sql = '';
        $time_sql   = '';
        $params = [];

		if ( ! empty( $_REQUEST['from_date'] ) && ! empty( $_REQUEST['to_date'] ) ) {
			$from_date = sanitize_text_field( wp_unslash( $_REQUEST['from_date'] ) );
			$to_date   = sanitize_text_field( wp_unslash( $_REQUEST['to_date'] ) );
            $from_date = $from_date . ' 00:00:00';
            $to_date   = $to_date . ' 23:59:59';
            $time_sql  = ' WHERE time BETWEEN %s AND %s';
			$params[]  = $from_date;
			$params[]  = $to_date;
			$query .= $time_sql;
		}

        if ( ! empty( $_GET['com_status'] ) ) {

			if ( '' === $time_sql ) {
				$status_sql = ' WHERE status = %s';
			} else {
				$status_sql = ' AND status = %s';
			}
			$params[] = $com_status;

            $query .= $status_sql;
        }

        if ( ! empty( $_GET['vendor_id'] ) ) {

            if ( '' === $time_sql && '' === $status_sql ) {
                $vendor_sql = 'WHERE vendor_id = %s';
            } else {
                $vendor_sql = 'AND vendor_id = %s';
            }
			$params[] = $vendor_id;

            $query .= $vendor_sql;
        }        
        // phpcs:enable

		$results = $wpdb->get_results( $wpdb->prepare( $query, $params ) ); // phpcs:ignore

        foreach ( $results as $commission ) {

            switch ( $commission->status ) {
                case 'due':
                    $due[ $commission->vendor_id ] = ! empty( $due[ $commission->vendor_id ] ) ? ( $due[ $commission->vendor_id ] + ( $commission->total_due + $commission->total_shipping + $commission->tax ) ) : ( $commission->total_due + $commission->total_shipping + $commission->tax );
                    break;
                case 'paid':
                    $paid[ $commission->vendor_id ] = ! empty( $paid[ $commission->vendor_id ] ) ? ( $paid[ $commission->vendor_id ] + ( $commission->total_due + $commission->total_shipping + $commission->tax ) ) : ( $commission->total_due + $commission->total_shipping + $commission->tax );
                    break;
                case 'reversed':
                    $reversed[ $commission->vendor_id ] = ! empty( $reversed[ $commission->vendor_id ] ) ? ( $reversed[ $commission->vendor_id ] + ( $commission->total_due + $commission->total_shipping + $commission->tax ) ) : ( $commission->total_due + $commission->total_shipping + $commission->tax );
                    break;
                default:
                    // code...
                    break;
            }
        }

        $sum_totals = array(
            'due'      => $due,
            'paid'     => $paid,
            'reversed' => $reversed,
        );

        return $sum_totals;
    }

    /**
     * Convert the decimal separator to a dot
     *
     * @since  2.5.2
     * @access public
     *
     * @param string $value The value to check.
     */
    public function convert_decimal_sep_to_dot( $value ) {
        $value = preg_replace( '/[,.]/', '.', $value );
        return $value;
    }

    /**
     * Convert the decimal separator to a WooCommerce separator
     *
     * @since  2.5.2
     * @access public
     *
     * @param string $value The value to check.
     */
    public function convert_decimal_to_wc_sep( $value ) {
        $value = preg_replace( '/[,.]/', wc_get_price_decimal_separator(), $value );
        return $value;
    }
}
