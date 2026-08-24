<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( 'WCVendors_Vendor_Notify_Application' ) ) :

    /**
     * Notify vendor application has started
     *
     * An email sent to the admin when the vendor marks the order shipped.
     *
     * @class       WCVendors_Vendor_Notify_Application
     * @version     2.0.0
     * @package     Classes/Admin/Emails
     * @author      WC Vendors
     * @extends     WC_Email
     */
    class WCVendors_Vendor_Notify_Application extends WC_Email {

        /**
         * User
         *
         * @var WP_User
         */
        public $user;

        /**
         * Status
         *
         * @var string
         */
        public $status;

        /** User email
         *
         * @var string
         */
        public $user_email;

        /**
         * Constructor.
         */
        public function __construct() {

            $this->id    = 'vendor_notify_application';
            $this->title = sprintf(
                /* translators: %s vendor name */
                __( '%s notify application', 'wc-vendors' ),
                wcv_get_vendor_name()
            );
            $this->description = sprintf(
                /* translators: %s vendor name */
                __( 'Notification is sent to the %s that their application has been received', 'wc-vendors' ),
                wcv_get_vendor_name( true, false )
            );
            $this->template_html  = 'emails/vendor-notify-application.php';
            $this->template_plain = 'emails/plain/vendor-notify-application.php';
            $this->template_base  = dirname( dirname( dirname( __DIR__ ) ) ) . '/templates/';
            $this->placeholders   = array(
                '{site_title}'         => $this->get_blogname(),
                '{vendor_label}'       => wcv_get_vendor_name( true, false ),
                '{vendor_label_title}' => wcv_get_vendor_name(),
            );
            $this->recipient      = '';

            // Call parent constructor.
            parent::__construct();
        }

        /**
         * Get email subject.
         *
         * @since  2.0.0
         * @return string
         */
        public function get_default_subject() {

            return __( '[{site_title}] Your {vendor_label} application has been received', 'wc-vendors' );
        }

        /**
         * Get email heading.
         *
         * @since  2.0.0
         * @return string
         */
        public function get_default_heading() {

            return __( '{vendor_label_title} application received', 'wc-vendors' );
        }

        /**
         * Get default content.
         *
         * @return string
         */
        public function get_default_content() {

            return __( 'Hi there. This is a notification about your {vendor_label} application on {site_title}.', 'wc-vendors' );
        }

        /**
         * Trigger the sending of this email.
         *
         * @param int    $vendor_id The vendor ID.
         * @param string $status  status of the application.
         */
    public function trigger( $vendor_id, $status = '' ) {

        $this->setup_locale();

        $this->user = get_userdata( $vendor_id );

        // Check if user exists before accessing properties.
        if ( ! $this->user || ! is_a( $this->user, 'WP_User' ) ) {
            $this->restore_locale();
            return;
        }

        $this->user_email = $this->user->user_email;
        $this->status     = $status;

        // Use this vendor's own label so the subject, heading and body all agree.
        $this->placeholders['{vendor_label}']       = wcv_get_vendor_name( true, false, $this->user->ID );
        $this->placeholders['{vendor_label_title}'] = wcv_get_vendor_name( true, true, $this->user->ID );

        if ( $this->is_enabled() ) {
            $this->send( $this->user_email, $this->get_subject(), $this->get_content(), $this->get_headers(), $this->get_attachments() );
        }

        $this->restore_locale();
    }

        /**
         * Get content html.
         *
         * @access public
         * @return string
         */
        public function get_content_html() {

            return wc_get_template_html(
                $this->template_html,
                array(
                    'order'         => $this->object,
                    'email_heading' => $this->get_heading(),
                    'sent_to_admin' => true,
                    'plain_text'    => false,
                    'email'         => $this,
                    'user'          => $this->user,
                    'status'        => $this->status,
                ),
                'woocommerce',
                $this->template_base
            );
        }

        /**
         * Get content plain.
         *
         * @access public
         * @return string
         */
        public function get_content_plain() {

            return wc_get_template_html(
                $this->template_plain,
                array(
                    'order'         => $this->object,
                    'email_heading' => $this->get_heading(),
                    'sent_to_admin' => true,
                    'plain_text'    => true,
                    'email'         => $this,
                    'user'          => $this->user,
                    'status'        => $this->status,
                ),
                'woocommerce',
                $this->template_base
            );
        }

        /**
         * Initialise settings form fields.
         */
        public function init_form_fields() {

            $this->form_fields = array(
                'enabled'    => array(
                    'title'   => __( 'Enable/Disable', 'wc-vendors' ),
                    'type'    => 'checkbox',
                    'label'   => __( 'Enable this email notification', 'wc-vendors' ),
                    'default' => 'yes',
                ),
                'subject'    => array(
                    'title'       => __( 'Subject', 'wc-vendors' ),
                    'type'        => 'text',
                    'desc_tip'    => true,
                    /* translators: %s: list of placeholders */
                    'description' => sprintf( __( 'Available placeholders: %s', 'wc-vendors' ), '<code>{site_title}</code>, <code>{vendor_label}</code>, <code>{vendor_label_title}</code>' ),
                    'placeholder' => $this->get_default_subject(),
                    'default'     => '',
                ),
                'heading'    => array(
                    'title'       => __( 'Email heading', 'wc-vendors' ),
                    'type'        => 'text',
                    'desc_tip'    => true,
                    /* translators: %s: list of placeholders */
                    'description' => sprintf( __( 'Available placeholders: %s', 'wc-vendors' ), '<code>{site_title}</code>, <code>{vendor_label}</code>, <code>{vendor_label_title}</code>' ),
                    'placeholder' => $this->get_default_heading(),
                    'default'     => '',
                ),
                'email_type' => array(
                    'title'       => __( 'Email type', 'wc-vendors' ),
                    'type'        => 'select',
                    'description' => __( 'Choose which format of email to send.', 'wc-vendors' ),
                    'default'     => 'html',
                    'class'       => 'email_type wc-enhanced-select',
                    'options'     => $this->get_email_type_options(),
                    'desc_tip'    => true,
                ),
            );
        }
    }

endif;
