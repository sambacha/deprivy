import{PrivyIframeErrorTypes as e}from"./types.mjs";class t extends Error{constructor(e,t){super(t),this.type=e}}function n(t){let n=t.type;return"string"==typeof n&&e.includes(n)}function r(e){return n(e)&&"wallet_not_on_device"===e.type}function i(e){return n(e)&&("invalid_recovery_pin"===e.type||"invalid_request_arguments"===e.type)}function o(e){return!!n(e)&&"mfa_timeout"===e.type}function u(e){return!!n(e)&&"missing_or_invalid_mfa"===e.type}function c(e){return!!n(e)&&"mfa_verification_max_attempts_reached"===e.type}function s(e){return!(!n(e)||!e.message.includes("code 429"))}function p(e){return!!function(e){let t=e.type;return"string"==typeof t&&"client_error"===t}(e)&&"MFA canceled"===e.message}export{t as PrivyIframeError,i as errorIndicatesInvalidRecoveryPassword,c as errorIndicatesMaxMfaRetries,p as errorIndicatesMfaCanceled,s as errorIndicatesMfaRateLimit,o as errorIndicatesMfaTimeout,u as errorIndicatesMfaVerificationFailed,r as errorIndicatesRecoveryIsNeeded};
