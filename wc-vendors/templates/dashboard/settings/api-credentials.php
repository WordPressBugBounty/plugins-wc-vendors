<?php
/**
 * API Credentials Template
 *
 * This template can be overridden by copying it to yourtheme/wc-vendors/dashboard/settings/api-credentials.php
 *
 * @package WCVendors/Templates
 * @since   2.7.3
 *
 * @var array|null $credential The current Application Password, or null.
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$has_credential = ! empty( $credential );
$date_format    = get_option( 'date_format' );
$created_label  = $has_credential && $credential['created'] ? date_i18n( $date_format, $credential['created'] ) : '';
$last_used      = $has_credential && $credential['last_used'] ? date_i18n( $date_format, $credential['last_used'] ) : __( 'Never', 'wc-vendors' );
?>

<div id="wcv-api-credentials" class="wcv-api-credentials wcv-store-setting-section">

    <h3 class="wcv-store-setting-section-title"><?php esc_html_e( 'API', 'wc-vendors' ); ?></h3>

    <p class="wcv-api-intro wcv-api-intro-empty"<?php echo $has_credential ? ' hidden' : ''; ?>>
        <?php esc_html_e( 'An API credential lets external apps and services connect to your store data on your behalf — for example an inventory tool or a shipping app. You can hold one credential at a time.', 'wc-vendors' ); ?>
    </p>

    <p class="wcv-api-intro wcv-api-intro-exists"<?php echo $has_credential ? '' : ' hidden'; ?>>
        <?php esc_html_e( 'This credential is used by external apps and services connecting to your store. The secret is only shown once, at generation.', 'wc-vendors' ); ?>
    </p>

    <!-- Empty state: generate. -->
    <div class="wcv-api-empty"<?php echo $has_credential ? ' hidden' : ''; ?>>
        <button type="button" class="wcv-api-btn wcv-api-btn-primary wcv-api-generate">
            <?php esc_html_e( 'Generate API credential', 'wc-vendors' ); ?>
        </button>
    </div>

    <!-- Freshly generated secret. Revealed by JS after create. -->
    <div class="wcv-api-generated" hidden>
        <div class="wcv-api-notice wcv-api-notice-success">
            <p class="wcv-api-notice-title"><?php esc_html_e( 'API credential generated', 'wc-vendors' ); ?></p>
            <div class="wcv-api-secret-row">
                <input type="text" readonly class="wcv-api-secret" value=""
                    aria-label="<?php esc_attr_e( 'API credential', 'wc-vendors' ); ?>">
                <button type="button" class="wcv-api-btn wcv-api-btn-outline wcv-api-copy">
                    <?php esc_html_e( 'Copy', 'wc-vendors' ); ?>
                </button>
            </div>
        </div>
        <div class="wcv-api-notice wcv-api-notice-warning">
            <p><?php esc_html_e( 'Save this now. For security, it will not be shown again.', 'wc-vendors' ); ?></p>
        </div>
    </div>

    <!-- Error message. Populated by JS. -->
    <div class="wcv-api-notice wcv-api-notice-error wcv-api-error" hidden role="alert">
        <p></p>
    </div>

    <!-- Credential details. Shown in the generated and steady states. -->
    <div class="wcv-api-details"<?php echo $has_credential ? '' : ' hidden'; ?>>
        <dl class="wcv-api-detail-grid">
            <dt><?php esc_html_e( 'Name', 'wc-vendors' ); ?></dt>
            <dd class="wcv-api-name"><?php echo esc_html( $has_credential ? $credential['name'] : '' ); ?></dd>
            <dt><?php esc_html_e( 'Created', 'wc-vendors' ); ?></dt>
            <dd class="wcv-api-created"><?php echo esc_html( $created_label ); ?></dd>
            <dt><?php esc_html_e( 'Last used', 'wc-vendors' ); ?></dt>
            <dd class="wcv-api-last-used"><?php echo esc_html( $last_used ); ?></dd>
        </dl>
    </div>

    <!-- Steady-state actions: regenerate. -->
    <div class="wcv-api-actions"<?php echo $has_credential ? '' : ' hidden'; ?>>
        <button type="button" class="wcv-api-btn wcv-api-btn-danger wcv-api-regenerate">
            <?php esc_html_e( 'Regenerate', 'wc-vendors' ); ?>
        </button>
        <span class="wcv-api-hint"><?php esc_html_e( 'Regenerating revokes your current credential immediately.', 'wc-vendors' ); ?></span>
    </div>

    <!-- Regenerate confirmation modal. -->
    <div class="wcv-api-modal" hidden>
        <div class="wcv-api-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="wcv-api-modal-title">
            <h3 id="wcv-api-modal-title" class="wcv-api-modal-title"><?php esc_html_e( 'Regenerate API credential?', 'wc-vendors' ); ?></h3>
            <p class="wcv-api-modal-body"><?php esc_html_e( 'Your current credential stops working immediately and all connected integrations will lose access until they are updated with the new credential.', 'wc-vendors' ); ?></p>
            <div class="wcv-api-modal-revoke" hidden>
                <p class="wcv-api-modal-revoke-intro"></p>
                <ul class="wcv-api-modal-revoke-list"></ul>
            </div>
            <div class="wcv-api-modal-actions">
                <button type="button" class="wcv-api-btn wcv-api-btn-plain wcv-api-modal-cancel"><?php esc_html_e( 'Cancel', 'wc-vendors' ); ?></button>
                <button type="button" class="wcv-api-btn wcv-api-btn-danger-solid wcv-api-modal-confirm"><?php esc_html_e( 'Regenerate', 'wc-vendors' ); ?></button>
            </div>
        </div>
    </div>

</div>
