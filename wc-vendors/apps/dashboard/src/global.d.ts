declare global {
    interface Window {
        wcv_dashboard_data: any;
    }
}

window.wcv_dashboard_data = window.wcv_dashboard_data || {}

export { window }
