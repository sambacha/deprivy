import { FetchError as e } from "ofetch";
var _;
class t extends Error {
  toString() {
    return `${this.type}${this.privyErrorCode ? `-${this.privyErrorCode}` : ""}: ${this.message}${this.cause ? ` [cause: ${this.cause}]` : ""}`;
  }
  constructor(e, _, t) {
    super(e);
    if (_ instanceof Error) {
      this.cause = _;
    }
    this.privyErrorCode = t;
  }
}
class r extends t {
  constructor(e, _, t, r, s, o) {
    super(t, r, s);
    this.type = e;
    this.status = _;
    this.data = o;
  }
}
class s extends t {
  constructor(e, _, t) {
    super(e, _, t);
    this.type = "client_error";
  }
}
class o extends s {
  constructor() {
    super("Request timed out", undefined, "client_request_timeout");
  }
}
class a extends t {
  constructor(e, _) {
    super(e, _);
    this.type = "session_error";
  }
}
class n extends t {
  constructor(e, _, t) {
    super(e, _, t);
    this.type = "connector_error";
  }
}
const E = _ => {
  if (_ instanceof t) {
    return _;
  }
  if (!(_ instanceof e)) {
    return i(_);
  }
  if (!_.response) {
    return new r("api_error", null, _.message, _);
  }
  let {
    type: s,
    message: o,
    error: a,
    code: n
  } = _.data;
  return new r(s || "ApiError", _.response.status, o || a, _, n, _.data);
};
const i = e => e instanceof t ? e : e instanceof Error ? new s(e.message, e) : new s(`Internal error: ${e}`);
(_ = {}).OAUTH_ACCOUNT_SUSPENDED = "oauth_account_suspended";
_.MISSING_OR_INVALID_PRIVY_APP_ID = "missing_or_invalid_privy_app_id";
_.MISSING_OR_INVALID_PRIVY_ACCOUNT_ID = "missing_or_invalid_privy_account_id";
_.MISSING_OR_INVALID_TOKEN = "missing_or_invalid_token";
_.INVALID_DATA = "invalid_data";
_.INVALID_CAPTCHA = "invalid_captcha";
_.LINKED_TO_ANOTHER_USER = "linked_to_another_user";
_.CANNOT_LINK_MORE_OF_TYPE = "cannot_link_more_of_type";
_.FAILED_TO_LINK_ACCOUNT = "failed_to_link_account";
_.FAILED_TO_UPDATE_ACCOUNT = "failed_to_update_account";
_.USER_EXITED_UPDATE_FLOW = "exited_update_flow";
_.ALLOWLIST_REJECTED = "allowlist_rejected";
_.OAUTH_USER_DENIED = "oauth_user_denied";
_.OAUTH_UNEXPECTED = "oauth_unexpected";
_.UNKNOWN_AUTH_ERROR = "unknown_auth_error";
_.USER_EXITED_AUTH_FLOW = "exited_auth_flow";
_.USER_EXITED_LINK_FLOW = "exited_link_flow";
_.USER_EXITED_SET_PASSWORD_FLOW = "user_exited_set_password_flow";
_.MUST_BE_AUTHENTICATED = "must_be_authenticated";
_.UNKNOWN_CONNECT_WALLET_ERROR = "unknown_connect_wallet_error";
_.GENERIC_CONNECT_WALLET_ERROR = "generic_connect_wallet_error";
_.CLIENT_REQUEST_TIMEOUT = "client_request_timeout";
_.INVALID_CREDENTIALS = "invalid_credentials";
_.MISSING_MFA_CREDENTIALS = "missing_or_invalid_mfa";
_.UNKNOWN_MFA_ERROR = "unknown_mfa_error";
_.EMBEDDED_WALLET_ALREADY_EXISTS = "embedded_wallet_already_exists";
_.EMBEDDED_WALLET_NOT_FOUND = "embedded_wallet_not_found";
_.EMBEDDED_WALLET_CREATE_ERROR = "embedded_wallet_create_error";
_.UNKNOWN_EMBEDDED_WALLET_ERROR = "unknown_embedded_wallet_error";
_.EMBEDDED_WALLET_PASSWORD_UNCONFIRMED = "embedded_wallet_password_unconfirmed";
_.EMBEDDED_WALLET_PASSWORD_ALREADY_EXISTS = "embedded_wallet_password_already_exists";
_.EMBEDDED_WALLET_RECOVERY_ALREADY_EXISTS = "embedded_wallet_recovery_already_exists";
_.TRANSACTION_FAILURE = "transaction_failure";
_.UNSUPPORTED_CHAIN_ID = "unsupported_chain_id";
_.NOT_SUPPORTED = "not_supported";
_.CAPTCHA_TIMEOUT = "captcha_timeout";
_.INVALID_MESSAGE = "invalid_message";
_.UNABLE_TO_SIGN = "unable_to_sign";
_.CAPTCHA_FAILURE = "captcha_failure";
_.CAPTCHA_DISABLED = "captcha_disabled";
_.SESSION_STORAGE_UNAVAILABLE = "session_storage_unavailable";
_.TOO_MANY_REQUESTS = "too_many_requests";
_.USER_LIMIT_REACHED = "max_accounts_reached";
_.DISALLOWED_LOGIN_METHOD = "disallowed_login_method";
_.DISALLOWED_PLUS_EMAIL = "disallowed_plus_email";
_.PASSKEY_NOT_ALLOWED = "passkey_not_allowed";
_.USER_DOES_NOT_EXIST = "user_does_not_exist";
_.INSUFFICIENT_BALANCE = "insufficient_balance";
_.ACCOUNT_TRANSFER_REQUIRED = "account_transfer_required";
var d = _;
class c extends s {
  constructor() {
    super("Method called before `ready`. Ensure you wait until `ready` is true before calling.");
  }
}
class u extends s {
  constructor(e = "Embedded wallet error", _) {
    super(e, _, "unknown_embedded_wallet_error");
  }
}
class l extends s {
  constructor(e = "User must be authenticated") {
    super(e, undefined, "must_be_authenticated");
  }
}
class A extends s {
  constructor() {
    super("User attempted to exit password dialog before confirming password", undefined, "embedded_wallet_password_unconfirmed");
  }
}
class T extends s {
  constructor(e) {
    super("This application is in development mode and must be upgraded to production to log in new users.", e, "max_accounts_reached");
  }
}
export { r as PrivyApiError, s as PrivyClientError, n as PrivyConnectorError, u as PrivyEmbeddedWalletError, t as PrivyError, d as PrivyErrorCode, c as PrivyNotReadyError, a as PrivySessionError, o as PrivyTimeoutError, l as PrivyUnauthenticatedError, A as PrivyUnconfirmedPasswordError, T as PrivyUserLimitReachedError, E as formatApiError, i as formatPrivyError };
