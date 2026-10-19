<?php
/**
 * Marketplace abilities catalogue for WC Vendors.
 *
 * Registers the read and write abilities under the `wcvendors` category.
 * Each ability calls the existing service layer. Owner-only.
 *
 * @package WCVendors/RestApi
 * @since   2.7.3
 */

defined( 'ABSPATH' ) || exit;

/**
 * Class WCV_Marketplace_Abilities.
 */
class WCV_Marketplace_Abilities {

    /**
     * Store profile fields the update-vendor-store ability may write.
     *
     * Never add a payout field here (paypal_email, payout_method, paypal_masspay,
     * venmo_id, bank_*). An agent must not change where a vendor is paid.
     */
    const STORE_FIELDS = array(
        'shop_name',
        'seller_info',
        'shop_description',
        'store_url',
        'store_phone',
        'store_address',
        'store_address2',
        'store_city',
        'store_postcode',
        'store_country',
        'store_state',
    );

    /**
     * Constructor.
     */
    public function __construct() {
        add_action( 'wcv_register_abilities', array( $this, 'register' ) );
    }

    /**
     * Register the marketplace abilities.
     *
     * @param string $category The brand ability category slug.
     */
    public function register( $category ) {
        wp_register_ability(
            'wcvendors/list-vendors',
            array(
                'label'               => __( 'List vendors', 'wc-vendors' ),
                'description'         => __( 'List marketplace vendors with optional status and search filters.', 'wc-vendors' ),
                'category'            => $category,
                'input_schema'        => array(
                    'type'       => 'object',
                    'default'    => array(),
                    'properties' => array(
                        'page'     => array(
                            'type'    => 'integer',
                            'minimum' => 1,
                            'default' => 1,
                        ),
                        'per_page' => array(
                            'type'    => 'integer',
                            'minimum' => 1,
                            'maximum' => 100,
                            'default' => 20,
                        ),
                        'search'   => array( 'type' => 'string' ),
                        'status'   => array(
                            'type' => 'string',
                            'enum' => array( 'active', 'pending', 'inactive' ),
                        ),
                    ),
                ),
                'output_schema'       => array(
                    'type'       => 'object',
                    'properties' => array(
                        'vendors'  => array(
                            'type'  => 'array',
                            'items' => array(
                                'type'       => 'object',
                                'properties' => array(
                                    'id'             => array( 'type' => 'integer' ),
                                    'display_name'   => array( 'type' => 'string' ),
                                    'status'         => array( 'type' => 'string' ),
                                    'shop_name'      => array( 'type' => 'string' ),
                                    'products_count' => array( 'type' => 'integer' ),
                                ),
                            ),
                        ),
                        'total'    => array( 'type' => 'integer' ),
                        'page'     => array( 'type' => 'integer' ),
                        'per_page' => array( 'type' => 'integer' ),
                    ),
                ),
                'execute_callback'    => array( $this, 'list_vendors' ),
                'permission_callback' => array( $this, 'check_owner' ),
                'meta'                => $this->read_meta(),
            )
        );

        wp_register_ability(
            'wcvendors/get-vendor',
            array(
                'label'               => __( 'Get vendor', 'wc-vendors' ),
                'description'         => __( 'Read one vendor profile, product count, recent sales and pending commission.', 'wc-vendors' ),
                'category'            => $category,
                'input_schema'        => array(
                    'type'       => 'object',
                    'default'    => array(),
                    'properties' => array(
                        'id' => array(
                            'type'    => 'integer',
                            'minimum' => 1,
                        ),
                    ),
                    'required'   => array( 'id' ),
                ),
                'output_schema'       => array(
                    'type'       => 'object',
                    'properties' => array(
                        'id'                 => array( 'type' => 'integer' ),
                        'display_name'       => array( 'type' => 'string' ),
                        'email'              => array( 'type' => 'string' ),
                        'status'             => array( 'type' => 'string' ),
                        'shop_name'          => array( 'type' => 'string' ),
                        'shop_url'           => array( 'type' => 'string' ),
                        'shop_description'   => array( 'type' => 'string' ),
                        'registered'         => array( 'type' => 'string' ),
                        'products_count'     => array( 'type' => 'integer' ),
                        'sales'              => array(
                            'type'       => 'object',
                            'properties' => array(
                                'revenue' => array( 'type' => 'number' ),
                                'orders'  => array( 'type' => 'integer' ),
                                'period'  => array( 'type' => 'string' ),
                            ),
                        ),
                        'pending_commission' => array(
                            'type'       => 'object',
                            'properties' => array(
                                'total'     => array( 'type' => 'number' ),
                                'formatted' => array( 'type' => 'string' ),
                            ),
                        ),
                    ),
                ),
                'execute_callback'    => array( $this, 'get_vendor' ),
                'permission_callback' => array( $this, 'check_owner' ),
                'meta'                => $this->read_meta(),
            )
        );

        wp_register_ability(
            'wcvendors/list-pending-products',
            array(
                'label'               => __( 'List pending products', 'wc-vendors' ),
                'description'         => __( 'List vendor products that wait for approval. Requires WC Vendors Pro product submission to be active.', 'wc-vendors' ),
                'category'            => $category,
                'input_schema'        => array(
                    'type'       => 'object',
                    'default'    => array(),
                    'properties' => array(
                        'page'      => array(
                            'type'    => 'integer',
                            'minimum' => 1,
                            'default' => 1,
                        ),
                        'per_page'  => array(
                            'type'    => 'integer',
                            'minimum' => 1,
                            'maximum' => 100,
                            'default' => 20,
                        ),
                        'vendor_id' => array(
                            'type'    => 'integer',
                            'minimum' => 1,
                        ),
                    ),
                ),
                'output_schema'       => array(
                    'type'       => 'object',
                    'properties' => array(
                        'products' => array(
                            'type'  => 'array',
                            'items' => array(
                                'type'       => 'object',
                                'properties' => array(
                                    'id'           => array( 'type' => 'integer' ),
                                    'name'         => array( 'type' => 'string' ),
                                    'vendor_id'    => array( 'type' => 'integer' ),
                                    'date_created' => array( 'type' => array( 'string', 'null' ) ),
                                ),
                            ),
                        ),
                        'total'    => array( 'type' => 'integer' ),
                        'page'     => array( 'type' => 'integer' ),
                        'per_page' => array( 'type' => 'integer' ),
                    ),
                ),
                'execute_callback'    => array( $this, 'list_pending_products' ),
                'permission_callback' => array( $this, 'check_owner' ),
                'meta'                => $this->read_meta(),
            )
        );

        wp_register_ability(
            'wcvendors/get-commission-settings',
            array(
                'label'               => __( 'Get commission settings', 'wc-vendors' ),
                'description'         => __( 'Read the global commission rate, and one vendor rate when a vendor ID is given.', 'wc-vendors' ),
                'category'            => $category,
                'input_schema'        => array(
                    'type'       => 'object',
                    'default'    => array(),
                    'properties' => array(
                        'vendor_id' => array(
                            'type'    => 'integer',
                            'minimum' => 1,
                        ),
                    ),
                ),
                'output_schema'       => array(
                    'type'       => 'object',
                    'properties' => array(
                        'global' => array(
                            'type'       => 'object',
                            'properties' => array(
                                'value'     => array( 'description' => __( 'Rate value. A number for a simple rate, or an object for a compound or tiered rate.', 'wc-vendors' ) ),
                                'formatted' => array( 'type' => 'string' ),
                                'type'      => array( 'type' => 'string' ),
                                'level'     => array( 'type' => 'string' ),
                            ),
                        ),
                        'vendor' => array(
                            'type'       => 'object',
                            'properties' => array(
                                'vendor_id'   => array( 'type' => 'integer' ),
                                'value'       => array( 'description' => __( 'Rate value. A number for a simple rate, or an object for a compound or tiered rate.', 'wc-vendors' ) ),
                                'formatted'   => array( 'type' => 'string' ),
                                'type'        => array( 'type' => 'string' ),
                                'level'       => array( 'type' => 'string' ),
                                'custom_rate' => array( 'type' => array( 'string', 'null' ) ),
                            ),
                        ),
                    ),
                ),
                'execute_callback'    => array( $this, 'get_commission_settings' ),
                'permission_callback' => array( $this, 'check_owner' ),
                'meta'                => $this->read_meta(),
            )
        );

        wp_register_ability(
            'wcvendors/get-marketplace-summary',
            array(
                'label'               => __( 'Get marketplace summary', 'wc-vendors' ),
                'description'         => __( 'Read marketplace totals: vendor counts, sales, commissions, orders and top vendors. Defaults to the last 30 days.', 'wc-vendors' ),
                'category'            => $category,
                'input_schema'        => array(
                    'type'       => 'object',
                    'default'    => array(),
                    'properties' => array(
                        'date_from' => array(
                            'type'   => 'string',
                            'format' => 'date',
                        ),
                        'date_to'   => array(
                            'type'   => 'string',
                            'format' => 'date',
                        ),
                    ),
                ),
                'output_schema'       => array(
                    'type'       => 'object',
                    'properties' => array(
                        'vendors'     => array(
                            'type'       => 'object',
                            'properties' => array(
                                'active'  => array( 'type' => 'integer' ),
                                'pending' => array( 'type' => 'integer' ),
                            ),
                        ),
                        'sales'       => array(
                            'type'       => 'object',
                            'properties' => array(
                                'revenue'     => array( 'type' => 'number' ),
                                'commissions' => array( 'type' => 'number' ),
                                'orders'      => array( 'type' => 'integer' ),
                            ),
                        ),
                        'top_vendors' => array(
                            'type'  => 'array',
                            'items' => array(
                                'type'       => 'object',
                                'properties' => array(
                                    'vendor_id'        => array( 'type' => 'integer' ),
                                    'shop_name'        => array( 'type' => 'string' ),
                                    'total_commission' => array( 'type' => 'number' ),
                                    'total_revenue'    => array( 'type' => 'number' ),
                                    'total_orders'     => array( 'type' => 'integer' ),
                                ),
                            ),
                        ),
                        'period'      => array(
                            'type'       => 'object',
                            'properties' => array(
                                'start_date' => array( 'type' => 'string' ),
                                'end_date'   => array( 'type' => 'string' ),
                            ),
                        ),
                    ),
                ),
                'execute_callback'    => array( $this, 'get_marketplace_summary' ),
                'permission_callback' => array( $this, 'check_owner' ),
                'meta'                => $this->read_meta(),
            )
        );

        $this->register_write_abilities( $category );
    }

    /**
     * Register the write abilities.
     *
     * None moves money, changes a commission rate or payout destination, or
     * deletes a record.
     *
     * @param string $category The brand ability category slug.
     */
    protected function register_write_abilities( $category ) {
        $id_input = array(
            'type'                 => 'object',
            'default'              => array(),
            'properties'           => array(
                'id' => array(
                    'type'    => 'integer',
                    'minimum' => 1,
                ),
            ),
            'required'             => array( 'id' ),
            'additionalProperties' => false,
        );

        $reason_input                         = $id_input;
        $reason_input['properties']['reason'] = array( 'type' => 'string' );

        $store_properties = array();

        foreach ( self::STORE_FIELDS as $field ) {
            $store_properties[ $field ] = array( 'type' => 'string' );
        }

        wp_register_ability(
            'wcvendors/approve-vendor',
            array(
                'label'               => __( 'Approve vendor', 'wc-vendors' ),
                'description'         => __( 'Approve a pending vendor application. Sends the approved email.', 'wc-vendors' ),
                'category'            => $category,
                'input_schema'        => $id_input,
                'output_schema'       => array(
                    'type'       => 'object',
                    'properties' => array(
                        'id'     => array( 'type' => 'integer' ),
                        'status' => array( 'type' => 'string' ),
                    ),
                ),
                'execute_callback'    => array( $this, 'approve_vendor' ),
                'permission_callback' => array( $this, 'check_owner' ),
                'meta'                => $this->write_meta(),
            )
        );

        wp_register_ability(
            'wcvendors/reject-vendor',
            array(
                'label'               => __( 'Reject vendor', 'wc-vendors' ),
                'description'         => __( 'Deny a pending vendor application. Sends the denied email with the optional reason. The user account stays.', 'wc-vendors' ),
                'category'            => $category,
                'input_schema'        => $reason_input,
                'output_schema'       => array(
                    'type'       => 'object',
                    'properties' => array(
                        'id'     => array( 'type' => 'integer' ),
                        'denied' => array( 'type' => 'boolean' ),
                    ),
                ),
                'execute_callback'    => array( $this, 'reject_vendor' ),
                'permission_callback' => array( $this, 'check_owner' ),
                'meta'                => $this->write_meta(),
            )
        );

        wp_register_ability(
            'wcvendors/update-vendor-store',
            array(
                'label'               => __( 'Update vendor store', 'wc-vendors' ),
                'description'         => __( 'Update a vendor store profile: name, info, description, URL, phone and address. Payout fields are not accepted.', 'wc-vendors' ),
                'category'            => $category,
                'input_schema'        => array(
                    'type'                 => 'object',
                    'default'              => array(),
                    'properties'           => array_merge( $id_input['properties'], $store_properties ),
                    'required'             => array( 'id' ),
                    'additionalProperties' => false,
                ),
                'output_schema'       => array(
                    'type'       => 'object',
                    'properties' => array_merge(
                        array(
                            'id'       => array( 'type' => 'integer' ),
                            'shop_url' => array( 'type' => 'string' ),
                        ),
                        $store_properties
                    ),
                ),
                'execute_callback'    => array( $this, 'update_vendor_store' ),
                'permission_callback' => array( $this, 'check_owner' ),
                'meta'                => $this->write_meta(),
            )
        );

        $product_output = array(
            'type'       => 'object',
            'properties' => array(
                'id'     => array( 'type' => 'integer' ),
                'status' => array( 'type' => 'string' ),
            ),
        );

        wp_register_ability(
            'wcvendors/approve-product',
            array(
                'label'               => __( 'Approve product', 'wc-vendors' ),
                'description'         => __( 'Publish a vendor product that waits for approval.', 'wc-vendors' ),
                'category'            => $category,
                'input_schema'        => $id_input,
                'output_schema'       => $product_output,
                'execute_callback'    => array( $this, 'approve_product' ),
                'permission_callback' => array( $this, 'check_owner' ),
                'meta'                => $this->write_meta(),
            )
        );

        wp_register_ability(
            'wcvendors/reject-product',
            array(
                'label'               => __( 'Reject product', 'wc-vendors' ),
                'description'         => __( 'Send a pending product back to its vendor as a draft, with the reason in a change-request email. The vendor can edit and submit it again.', 'wc-vendors' ),
                'category'            => $category,
                'input_schema'        => $reason_input,
                'output_schema'       => $product_output,
                'execute_callback'    => array( $this, 'reject_product' ),
                'permission_callback' => array( $this, 'check_owner' ),
                'meta'                => $this->write_meta(),
            )
        );
    }

    /**
     * The shared meta for a read-only ability.
     *
     * @return array
     */
    protected function read_meta() {
        return array(
            'public'       => true,
            'show_in_rest' => true,
            'annotations'  => array(
                'readonly'    => true,
                'destructive' => false,
                'idempotent'  => true,
            ),
        );
    }

    /**
     * The shared meta for a write ability.
     *
     * Not idempotent, so the run endpoint takes POST with a JSON body.
     *
     * @return array
     */
    protected function write_meta() {
        return array(
            'public'       => true,
            'show_in_rest' => true,
            'annotations'  => array(
                'readonly'    => false,
                'destructive' => true,
                'idempotent'  => false, // Issue asked true; POST+JSON body required, see issue comment.
            ),
        );
    }

    /**
     * Permission check. Owner only.
     *
     * @return bool
     */
    public function check_owner() {
        return current_user_can( 'manage_woocommerce' );
    }

    /**
     * Read the pagination arguments from ability input.
     *
     * @param mixed $input The ability input.
     * @return array A page and per_page pair.
     */
    protected function paging( $input ) {
        $input    = is_array( $input ) ? $input : array();
        $page     = isset( $input['page'] ) ? max( 1, absint( $input['page'] ) ) : 1;
        $per_page = isset( $input['per_page'] ) ? min( 100, max( 1, absint( $input['per_page'] ) ) ) : 20;

        return array( $page, $per_page );
    }

    /**
     * Count products per author in one query.
     *
     * Matches count_user_posts() for an owner: publish and private only.
     *
     * @param int[] $author_ids Vendor user IDs.
     * @return array<int,int> Map of author ID to product count.
     */
    protected function product_counts_by_authors( $author_ids ) {
        global $wpdb;

        $author_ids = array_filter( array_map( 'absint', $author_ids ) );

        if ( empty( $author_ids ) ) {
            return array();
        }

        $placeholders = implode( ',', array_fill( 0, count( $author_ids ), '%d' ) );

        $rows = $wpdb->get_results( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
            $wpdb->prepare(
                "SELECT post_author, COUNT(*) AS total FROM {$wpdb->posts}
                WHERE post_type = 'product' AND post_status IN ( 'publish', 'private' )
                AND post_author IN ( $placeholders ) GROUP BY post_author", // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
                ...$author_ids
            )
        );

        $counts = array();

        foreach ( $rows as $row ) {
            $counts[ (int) $row->post_author ] = (int) $row->total;
        }

        return $counts;
    }

    /**
     * List vendors.
     *
     * @param mixed $input The ability input.
     * @return array
     */
    public function list_vendors( $input ) {
        $input               = is_array( $input ) ? $input : array();
        list( $page, $per )  = $this->paging( $input );

        $args = array(
            'role__in' => array( 'vendor', 'pending_vendor' ),
            'number'   => $per,
            'paged'    => $page,
            'orderby'  => 'ID',
            'order'    => 'ASC',
            'fields'   => 'ID',
        );

        if ( ! empty( $input['search'] ) ) {
            $args['search']         = '*' . sanitize_text_field( $input['search'] ) . '*';
            $args['search_columns'] = array( 'user_login', 'user_nicename', 'user_email', 'display_name' );
        }

        if ( ! empty( $input['status'] ) ) {
            $args = array_merge( $args, WCV_REST_Vendors_Controller::status_query_args( sanitize_key( $input['status'] ) ) );
        }

        $query = new WP_User_Query( $args );
        $ids   = array_map( 'intval', (array) $query->get_results() );

        if ( $ids ) {
            cache_users( $ids );
        }

        $counts  = $this->product_counts_by_authors( $ids );
        $vendors = array();

        foreach ( $ids as $vendor_id ) {
            $settings = new Vendors_Settings( $vendor_id );

            if ( ! $settings->is_valid() ) {
                continue;
            }

            $status = $settings->get_vendor_status();

            $vendors[] = array(
                'id'             => $vendor_id,
                'display_name'   => (string) $settings->get_prop( 'display_name' ),
                'status'         => $status['value'],
                'shop_name'      => (string) $settings->get_prop( 'shop_name' ),
                'products_count' => isset( $counts[ $vendor_id ] ) ? (int) $counts[ $vendor_id ] : 0,
            );
        }

        return array(
            'vendors'  => $vendors,
            'total'    => (int) $query->get_total(),
            'page'     => $page,
            'per_page' => $per,
        );
    }

    /**
     * Get one vendor.
     *
     * @param mixed $input The ability input.
     * @return array|WP_Error
     */
    public function get_vendor( $input ) {
        $input     = is_array( $input ) ? $input : array();
        $vendor_id = isset( $input['id'] ) ? absint( $input['id'] ) : 0;

        if ( ! $vendor_id ) {
            return new WP_Error( 'wcv_ability_invalid_id', __( 'A vendor ID is required.', 'wc-vendors' ), array( 'status' => 400 ) );
        }

        $settings = new Vendors_Settings( $vendor_id );

        if ( ! $settings->is_valid() ) {
            return new WP_Error( 'wcv_ability_invalid_id', __( 'Invalid vendor ID.', 'wc-vendors' ), array( 'status' => 404 ) );
        }

        $status  = $settings->get_vendor_status();
        $reports = new WCV_Reports( $vendor_id, false );
        $due     = $settings->get_commission_due();

        return array(
            'id'                 => $vendor_id,
            'display_name'       => (string) $settings->get_prop( 'display_name' ),
            'email'              => (string) $settings->get_prop( 'email' ),
            'status'             => $status['value'],
            'shop_name'          => (string) $settings->get_prop( 'shop_name' ),
            'shop_url'           => WCV_Vendors::get_vendor_shop_page( $vendor_id ),
            'shop_description'   => (string) $settings->get_prop( 'shop_description' ),
            'registered'         => mysql_to_rfc3339( (string) $settings->get_prop( 'registered' ) ),
            'products_count'     => (int) count_user_posts( $vendor_id, 'product' ),
            'sales'              => array(
                'revenue' => round( (float) $reports->get_total_revenue(), wc_get_price_decimals() ),
                'orders'  => (int) $reports->get_total_orders(),
                'period'  => __( 'Last 30 days', 'wc-vendors' ),
            ),
            'pending_commission' => array(
                'total'     => round( (float) $due['total'], wc_get_price_decimals() ),
                'formatted' => html_entity_decode( wp_strip_all_tags( $due['formatted'] ), ENT_QUOTES, 'UTF-8' ),
            ),
        );
    }

    /**
     * List products that wait for approval.
     *
     * @param mixed $input The ability input.
     * @return array
     */
    public function list_pending_products( $input ) {
        $input              = is_array( $input ) ? $input : array();
        list( $page, $per ) = $this->paging( $input );

        $args = array(
            'status'   => 'pending',
            'paginate' => true,
            'page'     => $page,
            'limit'    => $per,
            'orderby'  => 'date',
            'order'    => 'DESC',
        );

        if ( ! empty( $input['vendor_id'] ) ) {
            $args['author'] = absint( $input['vendor_id'] );
        }

        $results  = wc_get_products( $args );
        $products = array();

        foreach ( $results->products as $product ) {
            $date = $product->get_date_created();

            $products[] = array(
                'id'           => $product->get_id(),
                'name'         => $product->get_name(),
                'vendor_id'    => (int) get_post_field( 'post_author', $product->get_id() ),
                'date_created' => $date ? $date->date( DATE_RFC3339 ) : null,
            );
        }

        return array(
            'products' => $products,
            'total'    => (int) $results->total,
            'page'     => $page,
            'per_page' => $per,
        );
    }

    /**
     * Get commission settings.
     *
     * @param mixed $input The ability input.
     * @return array
     */
    public function get_commission_settings( $input ) {
        $input  = is_array( $input ) ? $input : array();
        $global = new Vendors_Settings();
        $rates  = $global->get_commission_rates();

        $result = array(
            'global' => array(
                'value'     => $rates['value'],
                'formatted' => html_entity_decode( wp_strip_all_tags( $rates['formatted'] ), ENT_QUOTES, 'UTF-8' ),
                'type'      => $rates['type'],
                'level'     => $rates['level'],
            ),
        );

        if ( ! empty( $input['vendor_id'] ) ) {
            $vendor_id = absint( $input['vendor_id'] );
            $settings  = new Vendors_Settings( $vendor_id );

            if ( $settings->is_valid() ) {
                $vendor_rates = $settings->get_commission_rates();
                $custom_rate  = WCV_Vendors::get_default_commission( $vendor_id );

                $result['vendor'] = array(
                    'vendor_id'   => $vendor_id,
                    'value'       => $vendor_rates['value'],
                    'formatted'   => html_entity_decode( wp_strip_all_tags( $vendor_rates['formatted'] ), ENT_QUOTES, 'UTF-8' ),
                    'type'        => $vendor_rates['type'],
                    'level'       => $vendor_rates['level'],
                    'custom_rate' => ( '' === $custom_rate ) ? null : $custom_rate,
                );
            }
        }

        return $result;
    }

    /**
     * Get the marketplace summary.
     *
     * @param mixed $input The ability input.
     * @return array
     */
    public function get_marketplace_summary( $input ) {
        $input   = is_array( $input ) ? $input : array();
        $reports = new WCV_Reports( 0, false );

        if ( ! empty( $input['date_from'] ) && ! empty( $input['date_to'] ) ) {
            $reports->set_period( sanitize_text_field( $input['date_from'] ), sanitize_text_field( $input['date_to'] ) );
        }

        $count_args = array(
            'fields' => 'ID',
            'number' => 1,
        );

        $active_query  = new WP_User_Query( array_merge( $count_args, WCV_REST_Vendors_Controller::status_query_args( 'active' ) ) );
        $pending_query = new WP_User_Query( array_merge( $count_args, WCV_REST_Vendors_Controller::status_query_args( 'pending' ) ) );

        $top         = $reports->get_top_vendors();
        $top_vendors = array();
        $dp          = wc_get_price_decimals();

        foreach ( (array) $top as $vendor ) {
            $top_vendors[] = array(
                'vendor_id'        => (int) $vendor->vendor_id,
                'shop_name'        => (string) ( $vendor->shop_name ?? '' ),
                'total_commission' => round( (float) $vendor->total_commission, $dp ),
                'total_revenue'    => round( (float) $vendor->total_revenue, $dp ),
                'total_orders'     => (int) $vendor->total_orders,
            );
        }

        return array(
            'vendors'     => array(
                'active'  => (int) $active_query->get_total(),
                'pending' => (int) $pending_query->get_total(),
            ),
            'sales'       => array(
                'revenue'     => round( (float) $reports->get_total_revenue(), wc_get_price_decimals() ),
                'commissions' => round( (float) $reports->get_total_commissions(), wc_get_price_decimals() ),
                'orders'      => (int) $reports->get_total_orders(),
            ),
            'top_vendors' => $top_vendors,
            'period'      => $reports->get_period(),
        );
    }

    /**
     * Get the settings of a valid vendor from ability input.
     *
     * @param mixed $input The ability input.
     * @return Vendors_Settings|WP_Error
     */
    protected function vendor_settings_from_input( $input ) {
        $vendor_id = is_array( $input ) && isset( $input['id'] ) ? absint( $input['id'] ) : 0;
        $settings  = new Vendors_Settings( $vendor_id );

        if ( ! $vendor_id || ! $settings->is_valid() ) {
            return new WP_Error( 'wcv_ability_invalid_id', __( 'Invalid vendor ID.', 'wc-vendors' ), array( 'status' => 404 ) );
        }

        return $settings;
    }

    /**
     * Add an HTTP status to an error from a shared function.
     *
     * @param WP_Error $error The error.
     * @return WP_Error
     */
    protected function with_status( $error ) {
        $statuses = array(
            'wcv_vendor_not_found'   => 404,
            WCV_PRODUCT_NOT_FOUND    => 404,
            'wcv_vendor_not_pending' => 400,
            WCV_PRODUCT_NOT_PENDING  => 400,
            'shop_name_empty'        => 400,
            'store_country_invalid'  => 400,
        );
        $code     = $error->get_error_code();

        return new WP_Error(
            $code,
            $error->get_error_message(),
            array( 'status' => isset( $statuses[ $code ] ) ? $statuses[ $code ] : 500 )
        );
    }

    /**
     * Approve a pending vendor.
     *
     * @param mixed $input The ability input.
     * @return array|WP_Error
     */
    public function approve_vendor( $input ) {
        $settings = $this->vendor_settings_from_input( $input );

        if ( is_wp_error( $settings ) ) {
            return $settings;
        }

        $vendor_id = absint( $input['id'] );

        $result = wcv_approve_vendor( $vendor_id );

        if ( is_wp_error( $result ) ) {
            return $this->with_status( $result );
        }

        $settings = new Vendors_Settings( $vendor_id );
        $status   = $settings->get_vendor_status();

        return array(
            'id'     => $vendor_id,
            'status' => $status['value'],
        );
    }

    /**
     * Deny a pending vendor.
     *
     * @param mixed $input The ability input.
     * @return array|WP_Error
     */
    public function reject_vendor( $input ) {
        $settings = $this->vendor_settings_from_input( $input );

        if ( is_wp_error( $settings ) ) {
            return $settings;
        }

        $vendor_id = absint( $input['id'] );

        $reason = isset( $input['reason'] ) ? sanitize_textarea_field( $input['reason'] ) : '';
        $result = wcv_deny_vendor( $vendor_id, $reason, '' !== $reason );

        if ( is_wp_error( $result ) ) {
            return $this->with_status( $result );
        }

        return array(
            'id'     => $vendor_id,
            'denied' => true,
        );
    }

    /**
     * Update a vendor store profile.
     *
     * @param mixed $input The ability input.
     * @return array|WP_Error
     */
    public function update_vendor_store( $input ) {
        $settings = $this->vendor_settings_from_input( $input );

        if ( is_wp_error( $settings ) ) {
            return $settings;
        }

        $vendor_id = absint( $input['id'] );

        foreach ( self::STORE_FIELDS as $field ) {
            if ( isset( $input[ $field ] ) ) {
                $settings->set_prop( $field, (string) $input[ $field ] );
            }
        }

        wcv_restate_sticky_settings(
            $settings,
            $vendor_id,
            array( 'vacation_mode', 'lock_new_products', 'lock_edit_products', 'html_enabled' )
        );

        $saved = $settings->save();

        // A repeated write with the same values is not an error.
        if ( is_wp_error( $saved ) && 'no_changes' !== $saved->get_error_code() ) {
            return $this->with_status( $saved );
        }

        $fresh  = new Vendors_Settings( $vendor_id );
        $result = array(
            'id'       => $vendor_id,
            'shop_url' => WCV_Vendors::get_vendor_shop_page( $vendor_id ),
        );

        foreach ( self::STORE_FIELDS as $field ) {
            $result[ $field ] = (string) $fresh->get_prop( $field );
        }

        return $result;
    }

    /**
     * Approve a pending product.
     *
     * @param mixed $input The ability input.
     * @return array|WP_Error
     */
    public function approve_product( $input ) {
        $product_id = is_array( $input ) && isset( $input['id'] ) ? absint( $input['id'] ) : 0;
        $result     = wcv_approve_product( $product_id );

        if ( is_wp_error( $result ) ) {
            return $this->with_status( $result );
        }

        return array(
            'id'     => $product_id,
            'status' => (string) get_post_status( $product_id ),
        );
    }

    /**
     * Send a pending product back to its vendor.
     *
     * @param mixed $input The ability input.
     * @return array|WP_Error
     */
    public function reject_product( $input ) {
        $product_id = is_array( $input ) && isset( $input['id'] ) ? absint( $input['id'] ) : 0;
        $reason     = isset( $input['reason'] ) ? sanitize_textarea_field( $input['reason'] ) : '';
        $result     = wcv_request_product_change( $product_id, $reason );

        if ( is_wp_error( $result ) ) {
            return $this->with_status( $result );
        }

        return array(
            'id'     => $product_id,
            'status' => (string) get_post_status( $product_id ),
        );
    }
}
