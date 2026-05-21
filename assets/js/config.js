// assets/js/config.js
// REPLACE THESE WITH YOUR ACTUAL KEYS FROM EMAILJS

const CONFIG = {
    // Get this from EmailJS → Account → API Keys
    EMAILJS_PUBLIC_KEY: '3dPrTz3OVs8F1ohpd',

    // Get this from EmailJS → Email Services
    EMAILJS_SERVICE_ID: 'service_mkl8c09',

    // Get these from EmailJS → Email Templates
    LOGIN_TEMPLATE_ID: 'template_z9rdykw',
    SIGNUP_TEMPLATE_ID: 'template_voo9xtv',

    // Set to false for production, true for local testing without email
    IS_DEMO_MODE: true
};

// Don't change below this line
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}