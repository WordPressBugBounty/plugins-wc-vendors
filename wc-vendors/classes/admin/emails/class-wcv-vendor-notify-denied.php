<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( 'WCVendors_Vendor_Notify_Denied' ) ) :

    /**
     * Notify vendor application has been denied
     *
     * An email sent to the vendor when the admin denies their application
     *
     * @class       WCVendors_Vendor_Notify_Denied
     * @version     2.0.0
     * @package     Classes/Admin/Emails
     * @author      WC Vendors
     * @extends     WC_Email
     */
    class WCVendors_Vendor_Notify_Denied extends WC_Email {

        /**
         * User
         *
         * @var WP_User
         */
        public $user;

        /**
         * Content
         *
         * @var string
         */
        public $content;

        /** User email
         *
         * @var string
         */
        public $user_email;

    /**
     * Reason
     *
     * @var string
     */
    public $reason;

    /**
     * Custom message
     *
     * @var string
     */
    public $custom_message;

    /**
     * Use custom message
     *
     * @var bool
     */
    public $use_custom_message;

        /**
         * Constructor.
         */
        public function __construct() {

            $this->id    = 'vendor_notify_denied';
            $this->title = sprintf(
                /* translators: %s vendor name */
                __( '%s notify denied', 'wc-vendors' ),
                wcv_get_vendor_name()
            );
            $this->description = sprintf(
                /* translators: %s vendor name */
                __( 'Notification is sent to the %s that their application has been denied', 'wc-vendors' ),
                wcv_get_vendor_name( true, false )
            );
            $this->template_html  = 'emails/vendor-notify-denied.php';
            $this->template_plain = 'emails/plain/vendor-notify-denied.php';
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

            return __( '[{site_title}] Your {vendor_label} application has been denied', 'wc-vendors' );
        }

        /**
         * Get email heading.
         *
         * @since  2.0.0
         * @return string
         */
        public function get_default_heading() {

            return __( '{vendor_label_title} Application Denied', 'wc-vendors' );
        }

        /**
         * Get email content
         *
         * @since  2.0.0
         * @return string
         */
        public function get_default_content() {

            $vendor_id = isset( $this->user->ID ) ? $this->user->ID : 0;

            return sprintf(
                /* translators: %s vendor name */
                __( 'Your application to become a %s has been denied.', 'wc-vendors' ),
                wcv_get_vendor_name( true, false, $vendor_id )
            );
        }

        /**
         * Get email reason
         *
         * @since  2.0.0
         * @return string
         */
        public function get_default_reason() {

            return __( 'We are not taking any new applications at this time.', 'wc-vendors' );
        }

    /**
     * Trigger the sending of this email.
     *
     * @param WP_User $user_object        The user object.
     * @param bool    $use_custom_message   Whether to use the custom message.
     * @param string  $custom_message       Custom message for the email.
     */
    public function trigger( $user_object, $use_custom_message = false, $custom_message = '' ) {

        $this->setup_locale();

        $this->user               = $user_object;
        $this->user_email         = $this->user->user_email;
        $this->custom_message     = sanitize_textarea_field( wp_unslash( $custom_message ) );
        $this->use_custom_message = (bool) $use_custom_message;

        // Use this vendor's own label so the subject, heading and body all agree.
        $this->placeholders['{vendor_label}']       = wcv_get_vendor_name( true, false, $this->user->ID );
        $this->placeholders['{vendor_label_title}'] = wcv_get_vendor_name( true, true, $this->user->ID );

        // Use custom message if requested and provided, otherwise use default content and reason.
        if ( $this->use_custom_message && ! empty( $this->custom_message ) ) {
            $this->content = $this->custom_message;
            $this->reason  = '';
        } else {
            $this->content = $this->get_option( 'content', $this->get_default_content() );
            $this->reason  = $this->get_option( 'reason', $this->get_default_reason() );
        }

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
                    'reason'        => $this->reason,
                    'content'       => $this->content,
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
                    'reason'        => $this->reason,
                    'content'       => $this->content,
                    'user'          => $this->user,
                )
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
                'content'    => array(
                    'title'       => __( 'Content', 'wc-vendors' ),
                    'type'        => 'textarea',
                    'desc_tip'    => true,
                    'description' => sprintf(
                        /* translators: %s vendor name */
                        __( 'Email body to be included when sent to the %s.', 'wc-vendors' ),
                        wcv_get_vendor_name( true, false )
                    ),
                    'placeholder' => $this->get_default_content(),
                    'default'     => $this->get_default_content(),
                ),
                'reason'     => array(
                    'title'       => __( 'Reason', 'wc-vendors' ),
                    'type'        => 'textarea',
                    'desc_tip'    => true,
                    'description' => sprintf(
                        /* translators: %s vendor name */
                        __( 'Provide a reason for denying the %s application', 'wc-vendors' ),
                        wcv_get_vendor_name( true, false )
                    ),
                    'placeholder' => $this->get_default_reason(),
                    'default'     => $this->get_default_reason(),
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
