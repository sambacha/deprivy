import { PrivyIframeErrorTypes as e } from "./types.mjs";
class t extends Error {
  constructor(e, t) {
    super(t);
    this.type = e;
  }
}
function n(t) {
  let n = t.type;
  return typeof n == "string" && e.includes(n);
}
function r(e) {
  return n(e) && e.type === "wallet_not_on_device";
}
function i(e) {
  return n(e) && (e.type === "invalid_recovery_pin" || e.type === "invalid_request_arguments");
}
function o(e) {
  return !!n(e) && e.type === "mfa_timeout";
}
function u(e) {
  return !!n(e) && e.type === "missing_or_invalid_mfa";
}
function c(e) {
  return !!n(e) && e.type === "mfa_verification_max_attempts_reached";
}
function s(e) {
  return !!n(e) && !!e.message.includes("code 429");
}
function p(e) {
  return !!function (e) {
    let t = e.type;
    return typeof t == "string" && t === "client_error";
  }(e) && e.message === "MFA canceled";
}
export { t as PrivyIframeError, i as errorIndicatesInvalidRecoveryPassword, c as errorIndicatesMaxMfaRetries, p as errorIndicatesMfaCanceled, s as errorIndicatesMfaRateLimit, o as errorIndicatesMfaTimeout, u as errorIndicatesMfaVerificationFailed, r as errorIndicatesRecoveryIsNeeded };
