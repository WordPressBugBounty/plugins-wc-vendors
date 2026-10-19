<?php
/**
 * WC Vendors Updates
 *
 * Functions for updating data, used by the background updater.
 *
 * @package WCVendors/Functions
 * @version 2.0.0
 *
 * @phpcs:disable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedFunctionFound
 * @phpcs:disable WordPress.DB.DirectDatabaseQuery.DirectQuery
 * @phpcs:disable WordPress.DB.DirectDatabaseQuery.NoCaching
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Map WC Vendors version one settings to version two settings
 *
 * @since 2.0.0
 */
function wcv_migrate_settings() {

    $version_one = get_option( 'wc_prd_vendor_options', null );
    $mappings    = wcv_get_settings_mapping();

    if ( is_null( $version_one ) ) {
        return;
    }

    foreach ( $version_one as $setting => $value ) {

        if ( array_key_exists( $setting, $mappings ) ) {

            $value = maybe_unserialize( $value );

            if ( 'hide_product_misc' === $setting && ! empty( $value ) ) {

                update_option( 'wcvendors_capability_product_featured', $value['featured'] );
                update_option( 'wcvendors_capability_product_duplicate', $value['duplicate'] );
                update_option( 'wcvendors_capability_product_sku', $value['sku'] );
                update_option( 'wcvendors_capability_product_taxes', $value['taxes'] );

            } else {

				if ( $value == 1 ) { // phpcs:ignore
                    $value = 'yes';
                }

                // The 1.x value is a `type => 0|1` map, or a scalar when it can't be unserialized.
                if ( 'hide_product_types' === $setting ) {
                    $value = wcv_normalize_hidden_product_types( $value );
                }

                update_option( $mappings[ $setting ], $value );
            }
        }
    }

    flush_rewrite_rules();
}

/**
 * Settings Map
 *
 * @since 2.0.0
 */
function wcv_get_settings_mapping() {

    return apply_filters(
        'wcvendors_settings_mappings',
        array(
            'hide_product_types'          => 'wcvendors_capability_product_types',
            'hide_product_type_options'   => 'wcvendors_capability_product_type_options',
            'hide_product_panel'          => 'wcvendors_capability_product_data_tabs',
            'can_submit_products'         => 'wcvendors_capability_products_enabled',
            'can_edit_published_products' => 'wcvendors_capability_products_edit',
            'can_submit_live_products'    => 'wcvendors_capability_products_live',
            'can_show_orders'             => 'wcvendors_capability_orders_enabled',
            'can_export_csv'              => 'wcvendors_capability_orders_export',
            'can_view_order_emails'       => 'wcvendors_capability_order_customer_email',
            'can_view_order_comments'     => 'wcvendors_capability_order_read_notes',
            'can_submit_order_comments'   => 'wcvendors_capability_order_update_notes',
            'can_view_frontend_reports'   => 'wcvendors_capability_frontend_reports',
            'default_commission'          => 'wcvendors_vendor_commission_rate',
            'sold_by'                     => 'wcvendors_display_label_sold_by_enable',
            'sold_by_label'               => 'wcvendors_label_sold_by',
            'seller_info_label'           => 'wcvendors_display_label_store_info',
            'vendor_dashboard_page'       => 'wcvendors_vendor_dashboard_page_id',
            'shop_settings_page'          => 'wcvendors_shop_settings_page_id',
            'product_orders_page'         => 'wcvendors_product_orders_page_id',
            'terms_to_apply_page'         => 'wcvendors_vendor_terms_page_id',
            'shop_headers_enabled'        => 'wcvendors_display_shop_headers',
            'shop_html_enabled'           => 'wcvendors_display_shop_description_html',
            'vendor_display_name'         => 'wcvendors_display_shop_display_name',
            'vendor_shop_permalink'       => 'wcvendors_vendor_shop_permalink',
            'product_page_css'            => 'wcvendors_display_advanced_stylesheet',
            'show_vendor_registration'    => 'wcvendors_vendor_allow_registration',
            'manual_vendor_registration'  => 'wcvendors_vendor_approve_registration',
            'give_tax'                    => 'wcvendors_vendor_give_taxes',
            'give_shipping'               => 'wcvendors_vendor_give_shipping',
            'instapay'                    => 'wcvendors_payments_paypal_instantpay_enable',
            'schedule'                    => 'wcvendors_payments_paypal_schedule',
            'mail_mass_pay_results'       => 'wcvendors_payments_paypal_email_enable',

        )
    );
}


/**
 * Enable legacy emails for existing installs.
 *
 * @since 2.0.0
 */
function wcv_enable_legacy_emails() {

    $notice = sprintf(
        // translators: %1$s is the notice to upgrade to new templates. %2$s is the link to the email settings page. %3$s is the link text.
        '%1$s<a href="%2$s">%3$s</a>',
        __( 'WC Vendors legacy emails are enabled. Please migrate your email templates to the new system.', 'wc-vendors' ),
        esc_url( admin_url( 'admin.php?page=wc-settings&tab=email' ) ),
        __( 'Click here to view your email settings.', 'wc-vendors' )
    );
    WCVendors_Admin_Notices::add_custom_notice( 'email_updates', $notice );
}

/**
 * Finish Settings update
 *
 * @since 2.0.0
 */
function wcv_update_200_db_version() {
    WCVendors_Install::update_db_version();
}

/**
 * Manually push the database version to fix update dialog.
 */
function wcv_update_db_version() {
    WCVendors_Install::update_db_version();
}


/**
 * Add option to hide the Become a Vendor link on my-account page
 *
 * @return void
 * @since 2.0.11
 */
function wcv_add_hide_become_a_vendor_link_option() {
    add_option( 'wcvendors_become_a_vendor_my_account_link_visibility', 'yes' );
}

/**
 * Add the terms and conditions visibility option default
 *
 * @return void
 * @since 2.0.11
 */
function wcv_add_terms_and_conditions_visibility_option() {
    add_option( 'wcvendors_terms_and_conditions_visibility', 'yes' );
}

/**
 * Add the option to redirect registration system to WooCommece my-account page
 *
 * @return void
 * @since 2.1.1
 */
function wcv_redirect_wp_registration_to_woocommerce_myaccount() {
    add_option( 'wcvendors_redirect_wp_registration_to_woocommerce_myaccount', 'no' );
}

/**
 * Add option to control customer shipping name visibility
 *
 * @return    void
 * @since      2.1.4
 * @version    2.1.4
 */
function wcv_can_view_customer_shipping_name_option() {
    add_option( 'wcvendors_capability_order_customer_shipping_name', 'yes' );
}

/**
 * Add new vendor capabilities to the system (currently unused)
 *
 * @return    void
 * @since      2.1.6
 * @version    2.1.6
 */
function wcv_add_vendor_caps() {
    WCVendors_Install::create_capabilities();
}

/**
 * Add meta fields to all orders
 *
 * Get all vendor orders' parent orders and add the wcv_vendor_ids and wcv_sub_orders to the parent order.
 *
 * @return void
 * @version 2.4.8
 * @since   2.4.8 - Added
 */
function wcv_sync_order_meta_data() {
    $synchronizer = new WCV_Order_Data_Synchronizer();
    $synchronizer->sync_orders();
    $synchronizer->migrate_tracking_details();
    $synchronizer->migrate_vendor_id();
}

/**
 * Schedule an action to migrate vendor id to new meta key.
 *
 * @return void
 * @version 2.4.8
 * @since   2.4.8 - Added.
 */
function wcv_schedule_migrate_vendor_id() {
    WC()->queue()->schedule_single(
        current_time( 'mysql' ),
        'wcvendors_scheduled_migrate_vendor_id'
    );
}

/**
 * Schedule action to recreate missing sub orders on some sites
 *
 * @return void
 * @version 1.0.0
 * @since   1.0.0
 */
function maybe_create_missing_sub_orders() {
    global $wpdb;

    $count_missing = 0;
    if ( ! wcv_hpos_enabled() ) {
        $count_missing = (int) $wpdb->get_var(
            "SELECT COUNT(DISTINCT posts.ID) AS count_orders
            FROM {$wpdb->prefix}posts posts
            WHERE posts.post_type = 'shop_order'
            AND NOT EXISTS (
              SELECT 1
              FROM {$wpdb->prefix}posts AS p
              WHERE p.post_type = 'shop_order_vendor'
              AND p.post_parent = posts.ID
            );"
        );
    } else {
        $count_missing = (int) $wpdb->get_var(
            "SELECT COUNT(DISTINCT wco.id) AS count_orders
            FROM {$wpdb->prefix}wc_orders wco
            WHERE wco.type = 'shop_order'
            AND NOT EXISTS (
              SELECT 1
              FROM {$wpdb->prefix}wc_orders AS p
              WHERE p.type = 'shop_order_vendor'
              AND p.parent_order_id = wco.id
            );"
        );
    }

    if ( 0 === $count_missing ) {
        return;
    }

    update_option( 'wcv_create_missing_sub_orders_complete', 'no' );

    $synchronizer = new WCV_Order_Data_Synchronizer();
    $synchronizer->maybe_schedule_create_missing_sub_orders();
}

/**
 * Normalize the hidden product types option on installs upgraded from WC Vendors 1.x.
 *
 * The wcv_migrate_settings() routine copied the 1.x `hide_product_types` value across verbatim, so
 * affected sites store a scalar string or a `type => 0|1` map instead of a list of
 * product type slugs. Readers fatal on the former and silently misbehave on the latter.
 *
 * @since 2.7.2
 *
 * @return void
 */
function wcv_normalize_capability_product_types() {

    $stored = get_option( 'wcvendors_capability_product_types', null );

    if ( is_null( $stored ) ) {
        return;
    }

    $normalized = wcv_normalize_hidden_product_types( $stored );

    if ( $stored !== $normalized ) {
        update_option( 'wcvendors_capability_product_types', $normalized );
    }
}

/**
 * Stop a sub-order cleanup that a release before 2.7.2 started.
 *
 * The second argument of the wcv_delete_duplicate_sub_orders action was a row offset before 2.7.2,
 * and is now the order ID to read below. Action Scheduler holds the argument in the database, so a
 * cleanup that is between batches at update time passes a row count to a scan that reads it as an
 * order ID. That scan then skips every sub-order above the row count for the rest of the run.
 *
 * The routine cancels the pending action and clears the position. The site owner starts the cleanup
 * again from the WC Tools page or from WP-CLI.
 *
 * @since 2.7.2
 *
 * @return void
 */
function wcv_reset_duplicate_sub_order_cleanup() {

    if ( function_exists( 'as_unschedule_all_actions' ) ) {
        as_unschedule_all_actions( WCV_Order_CLI::SCHUDULE_HOOK );
    }

    delete_transient( WCV_Order_CLI::PROGRESS_TRANSIENT );
}

/**
 * Clear the report cache that a release before 2.7.3 wrote.
 *
 * Cached top vendors rows from before the update sum revenue the old way, so the
 * Top Vendors widget mixes two formulas. Clear the cache so it rebuilds.
 *
 * @since 2.7.3
 *
 * @return void
 */
function wcv_clear_reports_cache() {
    global $wpdb;

    $wpdb->query( "TRUNCATE TABLE {$wpdb->prefix}wcv_reports_cache" ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.PreparedSQL.NotPrepared

    WCV_Activate::maybe_create_marketplace_report_cache();
}

/**
 * Remove duplicate commission rows, then add the unique key that blocks new ones.
 *
 * Runs one page of duplicates per call and returns true while rows were removed, so the
 * background updater runs it again and applies its time and memory limits between pages.
 * Deleted rows are copied to {prefix}pv_commission_dupe_backup first, so a wrong dedupe
 * stays recoverable. Safe to run again: it returns early when the key is already there.
 *
 * @since 2.7.3
 *
 * @return bool True when more duplicate rows may remain, false when the update is finished.
 */
function wcv_dedupe_commission_rows() {

    global $wpdb;

    $table  = $wpdb->prefix . 'pv_commission';
    $logger = wc_get_logger();
    $source = array( 'source' => 'wcvendors_db_updates' );

    // The key makes duplicates impossible, so this also skips the scan on a re-run.
    $key_exists = $wpdb->get_var( $wpdb->prepare( 'SHOW INDEX FROM %i WHERE Key_name = %s', $table, 'unique_commission' ) );

    if ( ! empty( $key_exists ) ) {
        delete_option( 'wcvendors_commission_dedupe_failed' );
        delete_option( 'wcvendors_commission_dedupe_conflicts' );
        return false;
    }

    $removed = wcv_remove_duplicate_commission_rows();

    if ( false === $removed ) {
        update_option( 'wcvendors_commission_dedupe_failed', 'yes' );
        return false;
    }

    if ( $removed > 0 ) {
        $logger->info( sprintf( 'Moved %d duplicate commission rows to %s', $removed, $table . '_dupe_backup' ), $source );
        return true;
    }

    // Rows that hold different amounts are not a plain race. Leave them for the admin to check.
    //
    // The unique_commission key is added only after this returns clean, so an upgrading store
    // with amount-conflicts does not get the key until an admin reconciles the listed orders.
    // The guarantee against the #1901 race (two requests pass the SELECT id check before either
    // inserts) is contingent on that key. Fresh installs get it at CREATE TABLE.
    $conflicts = wcv_get_conflicting_commission_orders();

    if ( ! empty( $conflicts ) ) {
        update_option( 'wcvendors_commission_dedupe_conflicts', $conflicts );
        update_option( 'wcvendors_commission_dedupe_failed', 'yes' );
        $logger->error(
            sprintf( 'Duplicate commission rows with different amounts exist for orders %s. Remove the wrong rows, then run the update again.', implode( ', ', $conflicts ) ),
            $source
        );
        return false;
    }

    delete_option( 'wcvendors_commission_dedupe_conflicts' );

    $added = $wpdb->query( $wpdb->prepare( 'ALTER TABLE %i ADD UNIQUE KEY unique_commission (order_id, product_id, vendor_id, qty)', $table ) );

    if ( false !== $added ) {
        $logger->info( 'Added the unique_commission key to the commission table', $source );
        delete_option( 'wcvendors_commission_dedupe_failed' );
        return false;
    }

    // Capture the ALTER error now: the re-scan below runs its own queries and overwrites last_error.
    $alter_error = $wpdb->last_error;

    // A row written between the scan and the ALTER can fail it. Run again when that removed something.
    $removed = wcv_remove_duplicate_commission_rows();

    if ( false === $removed ) {
        $logger->error( sprintf( 'Could not re-scan for duplicate commission rows: %s', $wpdb->last_error ), $source );
        update_option( 'wcvendors_commission_dedupe_failed', 'yes' );
        return false;
    }

    if ( $removed > 0 ) {
        $logger->info( sprintf( 'Moved %d duplicate commission rows to %s', $removed, $table . '_dupe_backup' ), $source );
        return true;
    }

    update_option( 'wcvendors_commission_dedupe_failed', 'yes' );

    $logger->error(
        sprintf( 'Could not add the unique_commission key to the commission table: %s', $alter_error ),
        $source
    );

    return false;
}

/**
 * Back up and delete one page of duplicate commission rows.
 *
 * Only groups whose rows share one total_due are touched. Keeps one row per
 * (order_id, product_id, vendor_id, qty) group: the row with the most important status
 * (paid, then due, then an unknown custom status, then reversed), and the highest id on a tie.
 * A batch that fails to back up is not deleted.
 *
 * @since 2.7.3
 *
 * @return int|false The number of rows deleted, or false when a query failed.
 */
function wcv_remove_duplicate_commission_rows() {

    global $wpdb;

    $table  = $wpdb->prefix . 'pv_commission';
    $backup = $table . '_dupe_backup';
    $logger = wc_get_logger();
    $source = array( 'source' => 'wcvendors_db_updates' );

    // An unknown status is a custom one added through the wcvendors_commission_status filter.
    // Rank it below the core statuses but above reversed, so the dedupe never drops it for one.
    $priority = array(
        'paid'     => 4,
        'due'      => 3,
        'reversed' => 1,
    );

    $groups_per_run = 200;

    // The LIMIT sits inside the derived table, so a page holds whole groups only.
    $rows = $wpdb->get_results(
        $wpdb->prepare(
            'SELECT c.id, c.status, c.order_id, c.product_id, c.vendor_id, c.qty
            FROM %i c
            INNER JOIN (
                SELECT order_id, product_id, vendor_id, qty FROM %i
                GROUP BY order_id, product_id, vendor_id, qty
                HAVING COUNT(*) > 1 AND COUNT(DISTINCT total_due) = 1
                LIMIT %d
            ) d ON c.order_id = d.order_id AND c.product_id = d.product_id
                AND c.vendor_id = d.vendor_id AND c.qty = d.qty
            ORDER BY c.id ASC',
            $table,
            $table,
            $groups_per_run
        ),
        ARRAY_A
    );

    if ( empty( $rows ) ) {
        return 0;
    }

    $created = $wpdb->query( $wpdb->prepare( 'CREATE TABLE IF NOT EXISTS %i LIKE %i', $backup, $table ) );

    if ( false === $created ) {
        $logger->error( sprintf( 'Could not create the commission backup table: %s', $wpdb->last_error ), $source );
        return false;
    }

    $keepers = array();
    $ranks   = array();

    // Rows arrive ordered by id, and >= keeps the last one seen, so the highest id wins a tie.
    foreach ( $rows as $row ) {
        $group = $row['order_id'] . '-' . $row['product_id'] . '-' . $row['vendor_id'] . '-' . $row['qty'];
        $rank  = isset( $priority[ $row['status'] ] ) ? $priority[ $row['status'] ] : 2;

        if ( ! isset( $ranks[ $group ] ) || $rank >= $ranks[ $group ] ) {
            $ranks[ $group ]   = $rank;
            $keepers[ $group ] = (int) $row['id'];
        }
    }

    $losers = array();

    foreach ( $rows as $row ) {
        $group = $row['order_id'] . '-' . $row['product_id'] . '-' . $row['vendor_id'] . '-' . $row['qty'];

        if ( (int) $row['id'] !== $keepers[ $group ] ) {
            $losers[] = (int) $row['id'];
        }
    }

    $deleted = 0;

    // The id lists are cast with absint(), and the table names come from $wpdb->prefix.
    foreach ( array_chunk( $losers, 500 ) as $batch ) {
        $ids = implode( ',', array_map( 'absint', $batch ) );

        $backed_up = $wpdb->query( "REPLACE INTO {$backup} SELECT * FROM {$table} WHERE id IN ({$ids})" ); // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared

        if ( false === $backed_up ) {
            $logger->error( sprintf( 'Could not back up commission rows, so none were deleted: %s', $wpdb->last_error ), $source );
            return false;
        }

        $removed_now = $wpdb->query( "DELETE FROM {$table} WHERE id IN ({$ids})" ); // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared

        if ( false === $removed_now ) {
            $logger->error( sprintf( 'Could not delete duplicate commission rows: %s', $wpdb->last_error ), $source );
            return false;
        }

        $deleted += (int) $removed_now;
    }

    return $deleted;
}

/**
 * Find the orders that have duplicate commission rows with different amounts.
 *
 * @since 2.7.3
 *
 * @return int[] Order ids, sorted.
 */
function wcv_get_conflicting_commission_orders() {

    global $wpdb;

    $order_ids = $wpdb->get_col(
        $wpdb->prepare(
            'SELECT DISTINCT order_id FROM (
                SELECT order_id FROM %i
                GROUP BY order_id, product_id, vendor_id, qty
                HAVING COUNT(*) > 1 AND COUNT(DISTINCT total_due) > 1
            ) d ORDER BY order_id ASC',
            $wpdb->prefix . 'pv_commission'
        )
    );

    return array_map( 'absint', (array) $order_ids );
}
