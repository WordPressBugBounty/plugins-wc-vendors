<?php
/**
 * Report class
 *
 * This class provides methods to generate reports for vendors and marketplace-wide metrics
 *
 * @package WCVendors
 * @version 2.5.5
 * @since   2.5.5
 */
class WCV_Reports {

    /**
     * Vendor ID - if set will filter data for a specific vendor
     *
     * @var int
     */
    private $vendor_id;

    /**
     * Start date for reporting period
     *
     * @var string
     */
    private $start_date;

    /**
     * End date for reporting period
     *
     * @var string
     */
    private $end_date;


    /**
     * Cache for total commissions and revenue
     *
     * @var array
     */
    private $total_commissions_and_revenue;

    /**
     * Constructor
     *
     * @param int $vendor_id Optional vendor ID to filter reports for a specific vendor.
     */
    public function __construct( $vendor_id = 0 ) {
        $this->vendor_id = $vendor_id;

        // Set default date range to last 30 days.
        $this->set_period( gmdate( 'Y-m-d', strtotime( '-30 days' ) ), gmdate( 'Y-m-d' ) );
    }

    /**
     * Set reporting period.
     *
     * @param string $start_date Start date in Y-m-d format.
     * @param string $end_date End date in Y-m-d format.
     * @return void
     */
    public function set_period( $start_date, $end_date ) {
        $this->start_date = $start_date;
        $this->end_date   = $end_date;
    }

    /**
     * Get period.
     *
     * @param string $start_date Start date in Y-m-d format.
     * @param string $end_date End date in Y-m-d format.
     * @return array Array of start and end dates.
     */
    public function get_period( $start_date = null, $end_date = null ) {
        if ( ! $start_date ) {
            $start_date = $this->start_date;
        }
        if ( ! $end_date ) {
            $end_date = $this->end_date;
        }
        $start_date = $start_date . ' 00:00:00';
        $end_date   = $end_date . ' 23:59:59';

        return array(
            'start_date' => $start_date,
            'end_date'   => $end_date,
        );
    }

    /**
     * Get total orders in the date range.
     *
     * @param string $start_date Start date in Y-m-d format.
     * @param string $end_date End date in Y-m-d format.
     * @return int Number of orders.
     */
    public function get_total_orders( $start_date = null, $end_date = null ) {
        $period = $this->get_period( $start_date, $end_date );

        $orders = array();

        if ( $this->vendor_id ) {
            $orders = wcv_get_vendor_orders(
                array(
                    'type'         => WC_Order_Vendor::ORDER_TYPE,
                    'date_created' => $period['start_date'] . '...' . $period['end_date'],
                    'vendor_id'    => $this->vendor_id,
                )
            );
        } else {
            $orders = wc_get_orders(
                array(
                    'type'         => 'shop_order',
                    'date_created' => $period['start_date'] . '...' . $period['end_date'],
                    'limit'        => -1,
                )
            );
        }

        return count( $orders );
    }

    /**
     * Get total commissions and revenue in the date range
     *
     * @param string $start_date Start date in Y-m-d format.
     * @param string $end_date End date in Y-m-d format.
     * @return array Array of total commissions and revenue
     */
    public function get_total_commissions_and_revenue( $start_date = null, $end_date = null ) {
        global $wpdb;

        $period = $this->get_period( $start_date, $end_date );

        $query = $wpdb->prepare(
            "SELECT order_id, vendor_id, product_id, total_due, tax, total_shipping as shipping, time, status
            FROM {$wpdb->prefix}pv_commission
            WHERE time BETWEEN %s AND %s
            AND status != 'reversed'",
            $period['start_date'],
            $period['end_date']
        );

        $commissions = $wpdb->get_results( $query ); // phpcs:ignore

        if ( $this->vendor_id ) {
            $commissions = array_filter(
                $commissions,
                function ( $commission ) {
                    return (int) $commission->vendor_id === (int) $this->vendor_id;
                }
            );

            $commission_totals = array_reduce(
                $commissions,
                function ( $carry, $commission ) {
                    return $carry + $commission->total_due;
                },
                0
            );

            $revenue_totals = array_reduce(
                $commissions,
                function ( $carry, $commission ) {
                    return $carry + $commission->total_due + $commission->tax + $commission->shipping;
                },
                0
            );

            return array(
                'commissions' => $commission_totals,
                'revenue'     => $revenue_totals,
            );
        }

        $commissions_by_order_ids = array();

        foreach ( $commissions as $commission ) {
            $commissions_by_order_ids[ $commission->order_id ][] = $commission;
        }

        $order_ids = array_keys( $commissions_by_order_ids );

        $orders           = wc_get_orders(
            array(
                'type'    => 'shop_order',
                'include' => $order_ids,
                'limit'   => -1,
            )
        );
        $total_commission = 0;
        $total_revenue    = 0;
        foreach ( $orders as $order ) {
            $order_id = $order->get_id();

            if ( ! isset( $commissions_by_order_ids[ $order_id ] ) ) {
                continue;
            }

            $commissions_row       = $commissions_by_order_ids[ $order_id ];
            $order_tax             = $order->get_total_tax();
            $order_shipping        = $order->get_shipping_total();
            $order_total           = $order->get_total();
            $total_vendor_tax      = 0;
            $total_vendor_shipping = 0;

            $total_vendor_commission = array_reduce(
                $commissions_row,
                function ( $carry, $commission ) {
                    return $carry + $commission->total_due;
                },
                0
            );

            $total_vendor_shipping = array_reduce(
                $commissions_row,
                function ( $carry, $commission ) {
                    return $carry + $commission->shipping;
                },
                0
            );

            $total_vendor_tax = array_reduce(
                $commissions_row,
                function ( $carry, $commission ) {
                    return $carry + $commission->tax;
                },
                0
            );

            $total_commission += $order_total - $order_tax - $order_shipping - $total_vendor_commission;
            $total_revenue    += $total_commission + $order_tax + $order_shipping;

            if ( 0 < $total_vendor_tax ) {
                $total_revenue -= $order_tax;
            }

            if ( 0 < $total_vendor_shipping ) {
                $total_revenue -= $order_shipping;
            }
        }

        return array(
            'commissions' => $total_commission,
            'revenue'     => $total_revenue,
        );
    }

    /**
     * Get total commissions in the date range
     *
     * @param string $start_date Start date in Y-m-d format.
     * @param string $end_date End date in Y-m-d format.
     * @return float Total commissions
     */
    public function get_total_commissions( $start_date = null, $end_date = null ) {
        $period = $this->get_period( $start_date, $end_date );

        if ( ! isset( $this->total_commissions_and_revenue ) ) {
            $this->total_commissions_and_revenue = $this->get_total_commissions_and_revenue( $period['start_date'], $period['end_date'] );
        }

        return $this->total_commissions_and_revenue['commissions'];
    }

    /**
     * Get total revenue in the date range
     *
     * @param string $start_date Start date in Y-m-d format.
     * @param string $end_date End date in Y-m-d format.
     * @return float Total revenue
     */
    public function get_total_revenue( $start_date = null, $end_date = null ) {
        $period = $this->get_period( $start_date, $end_date );

        if ( ! isset( $this->total_commissions_and_revenue ) ) {
            $this->total_commissions_and_revenue = $this->get_total_commissions_and_revenue( $period['start_date'], $period['end_date'] );
        }

        return $this->total_commissions_and_revenue['revenue'];
    }

    /**
     * Get top vendors in the date range.
     *
     * @param int    $limit Number of vendors to return.
     * @param string $start_date Start date in Y-m-d format.
     * @param string $end_date End date in Y-m-d format.
     * @return array Array of vendor data.
     */
    public function get_top_vendors( $limit = 10, $start_date = null, $end_date = null ) {
        global $wpdb;

        $period = $this->get_period( $start_date, $end_date );

        $query = $wpdb->prepare(
            "SELECT c.vendor_id, 
				u.display_name as vendor_name, 
				COUNT(DISTINCT c.order_id) as total_orders,
				SUM(c.total_due) as total_commission,
				SUM(c.total_due + c.tax + c.total_shipping) as total_revenue
			FROM {$wpdb->prefix}pv_commission c
			JOIN {$wpdb->users} u ON c.vendor_id = u.ID
			WHERE c.time BETWEEN %s AND %s
			AND c.status != 'reversed'
			GROUP BY c.vendor_id
			ORDER BY total_revenue DESC
			LIMIT %d",
            $period['start_date'],
            $period['end_date'],
            $limit
        );

        $results = $wpdb->get_results( $query ); // phpcs:ignore

        return $results ? $results : array();
    }

    /**
     * Get pending vendor applications.
     *
     * @return array Array of pending vendors.
     */
    public function get_pending_approval() {
        // This only makes sense for the marketplace admin, not for individual vendors.
        if ( $this->vendor_id ) {
            return array();
        }

        $role = get_role( 'pending_vendor' );

        if ( ! $role ) {
            return array();
        }

        $args = array(
            'role'    => 'pending_vendor',
            'orderby' => 'registered',
            'order'   => 'ASC',
        );

        $users = get_users( $args );

        $pending_vendors = array();

        foreach ( $users as $user ) {
            $pending_vendors[] = array(
                'id'           => $user->ID,
                'username'     => $user->user_login,
                'display_name' => $user->display_name,
                'email'        => $user->user_email,
                'registered'   => $user->user_registered,
            );
        }

        return $pending_vendors;
    }
}
