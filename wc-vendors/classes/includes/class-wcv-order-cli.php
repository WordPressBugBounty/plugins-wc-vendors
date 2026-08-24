<?php
/**
 * Class to define the WP-CLI command for deleting duplicate sub-orders.
 *
 * @version 2.7.2
 * @since  2.5.2 - Added the CLI
 * @since  2.7.2 - Both scans read by order ID instead of by row offset
 */
class WCV_Order_CLI {

    const SCHUDULE_HOOK = 'wcv_delete_duplicate_sub_orders';

    /**
     * The meta key that holds the sub-orders of a parent order.
     */
    const SUB_ORDERS_META_KEY = 'wcv_sub_orders';

    /**
     * The order type of a sub-order.
     */
    const SUB_ORDER_TYPE = 'shop_order_vendor';

    /**
     * The transient that holds the position of the two scans between runs.
     *
     * The key still ends in `_offset`, because a release before 2.7.2 wrote a plain row offset to
     * the same key. The reader discards a non-array value, so an old value cannot move a scan.
     *
     * @since 2.7.2
     */
    const PROGRESS_TRANSIENT = 'wcv_delete_duplicate_sub_orders_offset';

    /**
     * WCV_Order_CLI constructor.
     */
    public function __construct() {

        if ( ! class_exists( 'ActionScheduler' ) ) {
            return;
        }

        $this->init();
    }

    /**
     * Initialize the class.
     */
    private function init() {
        if ( defined( 'WP_CLI' ) && WP_CLI ) {
            WP_CLI::add_command(
                'wcv clean-duplicate-suborders',
                array( $this, 'cli_schedule_event' ),
                array(
                    'shortdesc'     => 'Deletes duplicate sub-orders.',
                    'before_invoke' => function () {
                        // The command needs WooCommerce, not WC Vendors. WC Vendors declares its main
                        // class at parse time, which does not show that WooCommerce finished loading.
                        if ( ! function_exists( 'wc_get_logger' ) || ! class_exists( 'WooCommerce' ) ) {
                            WP_CLI::error( 'WooCommerce should be installed and activated' );
                        }
                    },
                    'synopsis'      => array(
                        array(
                            'type'        => 'flag',
                            'name'        => 'force',
                            'description' => 'Force the process to start from scratch.',
                            'optional'    => true,
                        ),
                        array(
                            'type'        => 'assoc',
                            'name'        => 'batch_size',
                            'description' => 'Batch size, from 1 to 5000.',
                            'optional'    => true,
                        ),
                        array(
                            'type'        => 'assoc',
                            'name'        => 'offset',
                            'description' => 'The order ID to start below. 0 starts at the newest order.',
                            'optional'    => true,
                        ),
                        array(
                            'type'        => 'flag',
                            'name'        => 'dry-run',
                            'description' => 'Log the sub-orders that would be deleted without deleting them.',
                            'optional'    => true,
                        ),
                        array(
                            'type'        => 'flag',
                            'name'        => 'yes',
                            'description' => 'Answer yes to the confirmation message.',
                            'optional'    => true,
                        ),
                    ),
                )
            );
        }
        add_action( self::SCHUDULE_HOOK, array( $this, 'delete_duplicate_orders' ), 10, 4 );
    }

    /**
     * Deletes duplicate sub-orders.
     *
     * ## OPTIONS
     * [--force]
     * : Force the process to start from scratch.
     * default: false
     *
     * [--batch_size=<batch_size>]
     * : Batch size. The command holds the value between 1 and 5000.
     * default: 1000
     *
     * [--offset=<offset>]
     * : The order ID to start below. 0 starts at the newest order.
     * default: 0
     *
     * [--dry-run]
     * : Log the sub-orders that would be deleted without deleting them.
     * default: false
     *
     * [--yes]
     * : Answer yes to the confirmation message.
     * default: false
     *
     *
     * ## EXAMPLES
     *
     *     wp wcv clean-duplicate-suborders
     *     wp wcv clean-duplicate-suborders --force
     *     wp wcv clean-duplicate-suborders --batch_size=2000
     *     wp wcv clean-duplicate-suborders --offset=1000
     *     wp wcv clean-duplicate-suborders --dry-run --yes
     *     wp wcv clean-duplicate-suborders --force --batch_size=2000 --offset=1000
     *
     * @when after_wp_load
     *
     * @param array $args The arguments to be passed to the command.
     * @param array $assoc_args The named arguments to be passed to the command.
     */
    public function cli_schedule_event( $args, $assoc_args ) {
        WP_CLI::confirm(
            'Are you sure you want to delete duplicate sub-orders? You should backup your database first. Continue?',
            $assoc_args
        );

        $batch_size = (int) WP_CLI\Utils\get_flag_value( $assoc_args, 'batch_size', 1000 );
        $cursor     = (int) WP_CLI\Utils\get_flag_value( $assoc_args, 'offset', 0 );
        $force      = WP_CLI\Utils\get_flag_value( $assoc_args, 'force', false );
        $dry_run    = (bool) WP_CLI\Utils\get_flag_value( $assoc_args, 'dry-run', false );

        // A batch size of 0 reads no rows and never completes. A very large batch size builds an
        // IN () list with thousands of placeholders, so the command holds the value in range.
        $batch_size = max( 1, min( $batch_size, 5000 ) );

        // The flag counted rows to skip before 2.7.2. A script written against the old command
        // passes a row count, which the scan now reads as an order ID.
        if ( isset( $assoc_args['offset'] ) ) {
            WP_CLI::warning( 'As of 2.7.2, --offset is the order ID to start below, not the number of rows to skip.' );
        }

        if ( $force ) {
            $this->clear_scheduled_events();
        }

        if ( ! as_next_scheduled_action( self::SCHUDULE_HOOK ) || $force ) {
            as_schedule_single_action( time(), self::SCHUDULE_HOOK, array( $batch_size, $cursor, $dry_run ) );
            $mode  = $dry_run ? ' The dry run only logs the sub-orders it would delete.' : '';
            $start = $this->describe_cursor( $cursor );
            WP_CLI::success( "Scheduled event to delete duplicate orders with batch size: $batch_size, starting $start.$mode" );

        } else {
            WP_CLI::warning( 'Event already scheduled. Use --force to reschedule or wp cron event delete ' . self::SCHUDULE_HOOK . ' to remove existing schedule.' );
        }
    }

    /**
     * Schedule via WC tool section.
     */
    public static function schedule_via_wc_tool_section() {
        $batch_size = 1000;
        $progress   = get_transient( self::PROGRESS_TRANSIENT );

        // A run before this release stored a plain offset, which means nothing to the two scans,
        // so the tool starts both of them at the newest order.
        if ( ! is_array( $progress ) ) {
            $progress = array();
        }

        $cursor        = isset( $progress['cursor'] ) ? (int) $progress['cursor'] : 0;
        $orphan_cursor = isset( $progress['orphan_cursor'] ) ? (int) $progress['orphan_cursor'] : 0;

        if ( ! as_next_scheduled_action( self::SCHUDULE_HOOK ) ) {
            // The tool offers no dry run, so it passes false for $dry_run. It passes both scan
            // positions, so the button continues the run instead of reading the same rows again.
            as_schedule_single_action( time(), self::SCHUDULE_HOOK, array( $batch_size, $cursor, false, $orphan_cursor ) );
        }
    }

    /**
     * Clear scheduled events.
     */
    private function clear_scheduled_events() {
        $timestamp = as_next_scheduled_action( self::SCHUDULE_HOOK );
        if ( ! $timestamp ) {
            return;
        }

        as_unschedule_all_actions( self::SCHUDULE_HOOK );
    }

    /**
     * Delete the duplicate and orphan sub-orders of one batch, then schedule the next batch.
     *
     * Both scans read from the newest order down, and each one carries the ID that it stopped at.
     * A batch therefore reads no row that an earlier batch read, whatever the earlier batch deleted.
     *
     * @param int  $batch_size Batch size.
     * @param int  $cursor The parent meta scan reads orders below this ID. 0 starts at the newest order.
     * @param bool $dry_run Log the sub-orders that would be deleted without deleting them.
     * @param int  $orphan_cursor The orphan scan reads sub-orders below this ID. 0 starts at the newest sub-order.
     */
    public function delete_duplicate_orders( $batch_size = 1000, $cursor = 0, $dry_run = false, $orphan_cursor = 0 ) {
        // The entry points hold the batch size in range, but a batch size of 0 reads no rows while
        // the scans still report more rows, which reschedules the action every 5 seconds forever.
        $batch_size = max( 1, min( (int) $batch_size, 5000 ) );

        $found      = $this->get_duplicate_orders( $batch_size, $cursor, $orphan_cursor );
        $duplicates = $found['duplicate_orders'];
        $orphans    = $found['orphan_orders'];
        $order_ids  = array_values( array_unique( array_merge( $duplicates, $orphans ) ) );
        $position   = $this->describe_cursor( $cursor );

        if ( empty( $order_ids ) ) {
            $this->log( 'No duplicate orders found on this batch.' );
        } elseif ( $dry_run ) {
            $this->log( $this->format_batch_message( 'Dry run. Would delete', $order_ids, $duplicates, $orphans, $batch_size, $position ) );
        } elseif ( $this->delete_orders( $order_ids ) ) {
            $this->log( $this->format_batch_message( 'Deleted', $order_ids, $duplicates, $orphans, $batch_size, $position ) );
        } else {
            // The batch rolled back, so the sub-orders are still in the database. The scans must not
            // move past them, and a new run against the same error only repeats the failure.
            $this->log( $this->format_batch_message( 'Failed to delete', $order_ids, $duplicates, $orphans, $batch_size, $position ) );
            $this->log( 'Stopped the cleanup because a batch failed to delete. Both scans hold their position. Correct the database error, then start the cleanup again.' );

            return;
        }

        // Each scan continues below the last row that it read, so a deleted row or a kept row cannot
        // move the next batch. A dry run and a live run step the same way.
        $cursor        = $found['next_cursor'];
        $orphan_cursor = $found['next_orphan_cursor'];

        if ( $this->has_more_rows( $cursor, $orphan_cursor ) ) {
            $this->clear_scheduled_events();
            as_schedule_single_action( time() + 5, self::SCHUDULE_HOOK, array( $batch_size, $cursor, $dry_run, $orphan_cursor ) );
            $this->log( "Scheduled another run to process the remaining sub-orders (next order ID: $cursor, next sub-order ID: $orphan_cursor)." );

            // Only a live run owns the resume position. A dry run deletes nothing, so a stopped dry
            // run must not leave a position that starts the WC Tools button below the newest rows.
            if ( ! $dry_run ) {
                set_transient(
                    self::PROGRESS_TRANSIENT,
                    array(
                        'cursor'        => $cursor,
                        'orphan_cursor' => $orphan_cursor,
                    )
                );
            }
        } else {
            $this->log( 'All duplicate orders have been deleted.' );

            if ( ! $dry_run ) {
                delete_transient( self::PROGRESS_TRANSIENT );
            }
        }
    }

    /**
     * Describe where a scan starts, for a log message or a CLI message.
     *
     * @param int $cursor Position of the scan.
     *
     * @return string
     */
    private function describe_cursor( $cursor ) {
        return $cursor > 0 ? "below order ID: $cursor" : 'from the newest order';
    }

    /**
     * Build the log message for a processed batch.
     *
     * A sub-order can be in both groups, so the two counts can overlap. The first count is the total.
     *
     * @param string $action Action taken on the sub-orders.
     * @param array  $order_ids All sub-orders in the batch.
     * @param array  $duplicates Sub-orders missing from their parent order meta.
     * @param array  $orphans Sub-orders with no parent order.
     * @param int    $batch_size Batch size.
     * @param string $position Where the batch started to read.
     *
     * @return string
     */
    private function format_batch_message( $action, $order_ids, $duplicates, $orphans, $batch_size, $position ) {
        return sprintf(
            '%1$s %2$d sub-orders: %3$d duplicate, %4$d with no parent (batch size: %5$d, read %6$s). Duplicate IDs: %7$s. No parent IDs: %8$s.',
            $action,
            count( $order_ids ),
            count( $duplicates ),
            count( $orphans ),
            $batch_size,
            $position,
            $this->format_id_list( $duplicates ),
            $this->format_id_list( $orphans )
        );
    }

    /**
     * Build a readable list of order IDs for a log message.
     *
     * A large batch holds thousands of IDs, so the list shows the first IDs only.
     *
     * @param array $ids Order IDs.
     * @param int   $limit Largest number of IDs to show.
     *
     * @return string
     */
    private function format_id_list( $ids, $limit = 20 ) {
        if ( empty( $ids ) ) {
            return 'none';
        }

        $list = implode( ', ', array_slice( $ids, 0, $limit ) );

        if ( count( $ids ) > $limit ) {
            $list .= sprintf( ' and %d more', count( $ids ) - $limit );
        }

        return $list;
    }

    /**
     * Delete orders.
     *
     * The method runs every delete query in one transaction, so a failed query reverts the batch.
     * A rollback needs transactional tables. WordPress and WooCommerce make their tables with
     * InnoDB, but a MyISAM order table keeps the rows that the batch deleted before the failure.
     *
     * @param array $order_ids Order IDs.
     *
     * @return bool True when every delete query succeeded. False when the batch was rolled back,
     *              and false when the method got no order IDs.
     */
    private function delete_orders( $order_ids ) {
        // Defensive only. delete_duplicate_orders() handles an empty batch before it calls this method.
        if ( empty( $order_ids ) ) {
            return false;
        }

        global $wpdb;
        $variants = $this->get_storage_variants();

        $post_table            = $variants['posts']['orders_table'];
        $post_met_table        = $variants['posts']['meta_table'];
        $wc_orders_table       = $variants['hpos']['orders_table'];
        $order_meta_table      = $variants['hpos']['meta_table'];
        $order_items_table     = $wpdb->prefix . 'woocommerce_order_items';
        $order_itemmeta_table  = $wpdb->prefix . 'woocommerce_order_itemmeta';
        $order_ids_placeholder = implode( ',', array_fill( 0, count( $order_ids ), '%d' ) );

        // phpcs:disable WordPress.DB.PreparedSQL.NotPrepared, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
        $queries = array(
            // delete item meta.
            "DELETE FROM $order_itemmeta_table WHERE order_item_id IN ( SELECT order_item_id FROM $order_items_table WHERE order_id IN ( $order_ids_placeholder ) )",
            // delete items.
            "DELETE FROM $order_items_table WHERE order_id IN ( $order_ids_placeholder )",
            // delete post meta.
            "DELETE FROM $post_met_table WHERE post_id IN ( $order_ids_placeholder )",
            // delete posts.
            "DELETE FROM $post_table WHERE ID IN ( $order_ids_placeholder )",
        );

        // WooCommerce only creates the custom order tables when HPOS is in use.
        if ( $this->table_exists( $order_meta_table ) ) {
            $queries[] = "DELETE FROM $order_meta_table WHERE order_id IN ( $order_ids_placeholder )";
        }

        if ( $this->table_exists( $wc_orders_table ) ) {
            $queries[] = "DELETE FROM $wc_orders_table WHERE id IN ( $order_ids_placeholder )";
        }

        $wpdb->query( 'START TRANSACTION' );

        foreach ( $queries as $query ) {
            if ( false === $wpdb->query( $wpdb->prepare( $query, $order_ids ) ) ) {
                $this->log( 'Error deleting orders: ' . $wpdb->last_error );
                $wpdb->query( 'ROLLBACK' );

                return false;
            }
        }

        $wpdb->query( 'COMMIT' );
        // phpcs:enable

        return true;
    }

    /**
     * Check that a database table exists.
     *
     * Table existence cannot change during a request, so the result is kept for the request.
     *
     * @param string $table Full table name.
     *
     * @return bool
     */
    private function table_exists( $table ) {
        static $checked = array();

        if ( isset( $checked[ $table ] ) ) {
            return $checked[ $table ];
        }

        global $wpdb;

        // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
        $checked[ $table ] = (bool) $wpdb->get_var( $wpdb->prepare( 'SHOW TABLES LIKE %s', $wpdb->esc_like( $table ) ) );

        return $checked[ $table ];
    }

    /**
     * Get the table and column names of both order storages.
     *
     * WooCommerce keeps orders in the posts tables, or in the custom order tables when HPOS is enabled.
     * A migration can leave rows in both storages, so the plugin needs the names of each one.
     *
     * @return array Storage details, keyed by 'hpos' and 'posts'.
     */
    private function get_storage_variants() {
        static $variants = null;

        if ( null !== $variants ) {
            return $variants;
        }

        global $wpdb;

        $variants = array(
            'hpos'  => array(
                'orders_table'  => $wpdb->prefix . 'wc_orders',
                'id_column'     => 'id',
                'type_column'   => 'type',
                'parent_column' => 'parent_order_id',
                'meta_table'    => $wpdb->prefix . 'wc_orders_meta',
                'meta_id'       => 'order_id',
            ),
            'posts' => array(
                'orders_table'  => $wpdb->posts,
                'id_column'     => 'ID',
                'type_column'   => 'post_type',
                'parent_column' => 'post_parent',
                'meta_table'    => $wpdb->postmeta,
                'meta_id'       => 'post_id',
            ),
        );

        return $variants;
    }

    /**
     * Get the table and column names of the order storage in use.
     *
     * @return array
     */
    private function get_storage_map() {
        $variants = $this->get_storage_variants();

        return wcv_hpos_enabled() ? $variants['hpos'] : $variants['posts'];
    }

    /**
     * Get the table and column names of the order storage that is not in use.
     *
     * @return array
     */
    private function get_other_storage_map() {
        $variants = $this->get_storage_variants();

        return wcv_hpos_enabled() ? $variants['posts'] : $variants['hpos'];
    }

    /**
     * Get duplicate orders.
     *
     * A duplicate is a sub-order that its parent order does not list in the wcv_sub_orders meta.
     * An orphan is a sub-order with no parent order.
     *
     * @param int $batch_size Batch size.
     * @param int $cursor The parent meta scan reads orders below this ID. 0 starts at the newest order.
     * @param int $orphan_cursor The orphan scan reads sub-orders below this ID. 0 starts at the newest sub-order.
     *
     * @return array Duplicate IDs, orphan IDs, and the position of each scan for the next batch.
     */
    private function get_duplicate_orders( $batch_size, $cursor, $orphan_cursor ) {
        global $wpdb;
        $map              = $this->get_storage_map();
        $duplicate_orders = array();

        // phpcs:disable WordPress.DB.PreparedSQL.InterpolatedNotPrepared, WordPress.DB.PreparedSQL.NotPrepared, WordPress.DB.PreparedSQLPlaceholders.UnfinishedPrepare, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
        $orders = $wpdb->get_results(
            $wpdb->prepare(
                $this->get_parent_meta_scan_sql( "{$map['meta_id']} AS order_id, meta_value AS sub_orders" ),
                self::SUB_ORDERS_META_KEY,
                $this->cursor_start( $cursor ),
                $batch_size
            )
        );
        // phpcs:enable

        $children = $this->get_sub_orders_by_parent( wp_list_pluck( $orders, 'order_id' ) );

        foreach ( $orders as $order ) {
            $sub_orders = array_filter( (array) maybe_unserialize( $order->sub_orders ) );

            // The plugin cannot tell which children are strays when the parent lists no sub-orders,
            // so it keeps every child rather than delete all of them.
            if ( empty( $sub_orders ) ) {
                continue;
            }

            $real_sub_order_ids = isset( $children[ $order->order_id ] ) ? $children[ $order->order_id ] : array();
            $diff               = array_diff( $real_sub_order_ids, $sub_orders );

            if ( ! empty( $diff ) ) {
                $duplicate_orders = array_merge( $duplicate_orders, $diff );
            }
        }

        $orphans = $this->get_no_parent_sub_orders( $batch_size, $orphan_cursor );

        return array(
            'duplicate_orders'   => $duplicate_orders,
            'orphan_orders'      => $orphans['order_ids'],
            'next_cursor'        => $this->next_cursor_from( $orders, $cursor ),
            'next_orphan_cursor' => $orphans['next_cursor'],
        );
    }

    /**
     * Get the position that a scan continues from after it read the given rows.
     *
     * Every scan query sorts the rows by ID, largest first, so the last row holds the smallest ID.
     * The scan continues below that ID, which also puts any skipped row behind it. A batch that
     * read no row holds its position.
     *
     * @param array $rows Rows that the batch read, each one with an order_id property.
     * @param int   $cursor Position that the batch read from.
     *
     * @return int
     */
    private function next_cursor_from( $rows, $cursor ) {
        $last = end( $rows );

        return $last ? (int) $last->order_id : $cursor;
    }

    /**
     * Build the query that reads the parent orders which hold a wcv_sub_orders meta value.
     *
     * The caller must pass the meta key, the ID to read below and the batch size to $wpdb->prepare().
     *
     * The plugin writes one wcv_sub_orders row for each order, so a scan below the last ID cannot
     * miss a second row of the same order.
     *
     * @param string $select The columns to select.
     *
     * @return string
     */
    private function get_parent_meta_scan_sql( $select ) {
        $map = $this->get_storage_map();

        return "SELECT {$select}
            FROM {$map['meta_table']}
            WHERE meta_key = %s
            AND {$map['meta_id']} < %d
            ORDER BY {$map['meta_id']} DESC
            LIMIT %d";
    }

    /**
     * Get the ID that a scan reads below.
     *
     * The scans start at the newest row, which has no ID above it, so a position of 0 becomes
     * PHP_INT_MAX. PHP cannot hold an order ID above that number, so the scan reaches every row.
     *
     * @param int $cursor Position of the scan.
     *
     * @return int
     */
    private function cursor_start( $cursor ) {
        return $cursor > 0 ? (int) $cursor : PHP_INT_MAX;
    }

    /**
     * Get the real sub-orders of the given parent orders.
     *
     * The method reads every parent in one query, because a batch holds up to batch_size parents.
     *
     * @param array $parent_ids Parent order IDs.
     *
     * @return array Sub-order IDs, keyed by parent order ID.
     */
    private function get_sub_orders_by_parent( $parent_ids ) {
        if ( empty( $parent_ids ) ) {
            return array();
        }

        global $wpdb;
        $map          = $this->get_storage_map();
        $placeholders = implode( ',', array_fill( 0, count( $parent_ids ), '%d' ) );

        // phpcs:disable WordPress.DB.PreparedSQL.InterpolatedNotPrepared, WordPress.DB.PreparedSQLPlaceholders.UnfinishedPrepare, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
        $rows = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT {$map['id_column']} AS order_id, {$map['parent_column']} AS parent_id
                FROM {$map['orders_table']}
                WHERE {$map['parent_column']} IN ( $placeholders )
                AND {$map['type_column']} = %s",
                array_merge( $parent_ids, array( self::SUB_ORDER_TYPE ) )
            )
        );
        // phpcs:enable

        $sub_orders = array();

        foreach ( $rows as $row ) {
            $sub_orders[ $row->parent_id ][] = $row->order_id;
        }

        return $sub_orders;
    }

    /**
     * Get no parent sub orders.
     *
     * A sub-order has no parent when it records no parent order, or when the parent order no longer exists.
     * WordPress does not clear the parent of a sub-order when the parent order is deleted, because
     * the shop_order_vendor post type is not hierarchical.
     *
     * A sub-order stays in place when its parent order is still in the other order storage, which
     * happens during an HPOS migration. The method logs those sub-orders and keeps them out of the result.
     *
     * @param int $batch_size Batch size.
     * @param int $cursor The scan reads sub-orders below this ID. 0 starts at the newest sub-order.
     *
     * @return array The sub-order IDs to delete, and the position of the scan for the next batch.
     */
    private function get_no_parent_sub_orders( $batch_size, $cursor ) {
        global $wpdb;
        $map = $this->get_storage_map();

        // phpcs:disable WordPress.DB.PreparedSQL.InterpolatedNotPrepared, WordPress.DB.PreparedSQL.NotPrepared, WordPress.DB.PreparedSQLPlaceholders.UnfinishedPrepare, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
        $rows = $wpdb->get_results(
            $wpdb->prepare(
                $this->get_no_parent_sub_orders_sql( "sub_order.{$map['id_column']} AS order_id, sub_order.{$map['parent_column']} AS parent_id" ),
                self::SUB_ORDER_TYPE,
                $this->cursor_start( $cursor ),
                $batch_size
            )
        );
        // phpcs:enable

        $parent_ids = array();

        foreach ( $rows as $row ) {
            if ( ! empty( $row->parent_id ) ) {
                $parent_ids[] = (int) $row->parent_id;
            }
        }

        $parents_in_other_storage = $this->get_orders_in_other_storage( $parent_ids );

        $no_parent_sub_orders = array();
        $skipped              = array();

        foreach ( $rows as $row ) {
            if ( ! empty( $row->parent_id ) && in_array( (int) $row->parent_id, $parents_in_other_storage, true ) ) {
                $skipped[] = $row->order_id;
                continue;
            }

            $no_parent_sub_orders[] = $row->order_id;
        }

        if ( ! empty( $skipped ) ) {
            $this->log(
                sprintf(
                    'Skipped %1$d sub-orders because their parent order is still in the other order storage. IDs: %2$s.',
                    count( $skipped ),
                    $this->format_id_list( $skipped )
                )
            );
        }

        return array(
            'order_ids'   => $no_parent_sub_orders,
            'next_cursor' => $this->next_cursor_from( $rows, $cursor ),
        );
    }

    /**
     * Build the query that finds sub-orders with no parent order.
     *
     * The caller must pass the order type, the ID to read below and the batch size to $wpdb->prepare().
     *
     * @param string $select The columns to select.
     *
     * @return string
     */
    private function get_no_parent_sub_orders_sql( $select ) {
        $map = $this->get_storage_map();

        return "SELECT {$select}
            FROM {$map['orders_table']} sub_order
            LEFT JOIN {$map['orders_table']} parent_order
                ON sub_order.{$map['parent_column']} = parent_order.{$map['id_column']}
            WHERE sub_order.{$map['type_column']} = %s
            AND sub_order.{$map['id_column']} < %d
            AND (
                sub_order.{$map['parent_column']} = 0
                OR sub_order.{$map['parent_column']} IS NULL
                OR parent_order.{$map['id_column']} IS NULL
            )
            ORDER BY sub_order.{$map['id_column']} DESC
            LIMIT %d";
    }

    /**
     * Check whether either scan still has rows to process.
     *
     * The check runs one small query for each scan, so a batch does not repeat the
     * full duplicate and orphan pipeline only to look ahead.
     *
     * @param int $cursor Position of the next parent meta scan.
     * @param int $orphan_cursor Position of the next orphan scan.
     *
     * @return bool
     */
    private function has_more_rows( $cursor, $orphan_cursor ) {
        global $wpdb;

        // phpcs:disable WordPress.DB.PreparedSQL.InterpolatedNotPrepared, WordPress.DB.PreparedSQL.NotPrepared, WordPress.DB.PreparedSQLPlaceholders.UnfinishedPrepare, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
        $has_parent_rows = $wpdb->get_var(
            $wpdb->prepare(
                $this->get_parent_meta_scan_sql( '1' ),
                self::SUB_ORDERS_META_KEY,
                $this->cursor_start( $cursor ),
                1
            )
        );

        if ( $has_parent_rows ) {
            return true;
        }

        $has_orphan_rows = $wpdb->get_var(
            $wpdb->prepare(
                $this->get_no_parent_sub_orders_sql( '1' ),
                self::SUB_ORDER_TYPE,
                $this->cursor_start( $orphan_cursor ),
                1
            )
        );
        // phpcs:enable

        return (bool) $has_orphan_rows;
    }

    /**
     * Get the given IDs that exist as orders in the storage that is not in use.
     *
     * A migration between the posts tables and the custom order tables can leave a parent order in one
     * storage only. Such a parent order is not lost, so the plugin must keep its sub-orders.
     *
     * @param array $order_ids Order IDs to look for.
     *
     * @return array
     */
    private function get_orders_in_other_storage( $order_ids ) {
        if ( empty( $order_ids ) ) {
            return array();
        }

        global $wpdb;
        $map       = $this->get_other_storage_map();
        $table     = $map['orders_table'];
        $id_column = $map['id_column'];

        if ( ! $this->table_exists( $table ) ) {
            return array();
        }

        $placeholders = implode( ',', array_fill( 0, count( $order_ids ), '%d' ) );

        // phpcs:disable WordPress.DB.PreparedSQL.InterpolatedNotPrepared, WordPress.DB.PreparedSQLPlaceholders.UnfinishedPrepare, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
        $found = $wpdb->get_col(
            $wpdb->prepare( "SELECT {$id_column} FROM {$table} WHERE {$id_column} IN ( $placeholders )", $order_ids )
        );
        // phpcs:enable

        return array_map( 'intval', $found );
    }

    /**
     * Log message.
     *
     * @param string $message Message.
     */
    private function log( $message ) {
        $logger = wc_get_logger();

        if ( $logger ) {
            $logger->info( $message, array( 'source' => 'wcv_delete_duplicate_sub_orders' ) );
        }
    }
}

new WCV_Order_CLI();
