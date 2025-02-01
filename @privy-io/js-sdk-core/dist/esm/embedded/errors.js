import { PrivyIframeErrorTypes as e } from "./types.mjs";
var t;
(t = {}).MISSING_OR_INVALID_PRIVY_APP_ID = "missing_or_invalid_privy_app_id";
t.MISSING_OR_INVALID_PRIVY_ACCOUNT_ID = "missing_or_invalid_privy_account_id";
t.INVALID_DATA = "invalid_data";
t.LINKED_TO_ANOTHER_USER = "linked_to_another_user";
t.ALLOWLIST_REJECTED = "allowlist_rejected";
t.OAUTH_USER_DENIED = "oauth_user_denied";
t.UNKNOWN_AUTH_ERROR = "unknown_auth_error";
t.USER_EXITED_AUTH_FLOW = "exited_auth_flow";
t.MUST_BE_AUTHENTICATED = "must_be_authenticated";
t.UNKNOWN_CONNECT_WALLET_ERROR = "unknown_connect_wallet_error";
t.GENERIC_CONNECT_WALLET_ERROR = "generic_connect_wallet_error";
t.CLIENT_REQUEST_TIMEOUT = "client_request_timeout";
t.INVALID_CREDENTIALS = "invalid_credentials";
var r = t;
class s extends Error {
  toString() {
    return `${this.type}${this.privyErrorCode ? `-${this.privyErrorCode}` : ""}: ${this.message}${this.cause ? ` [cause: ${this.cause}]` : ""}`;
  }
  constructor(e, t, r) {
    super(e);
    if (t instanceof Error) {
      this.cause = t;
    }
    this.privyErrorCode = r;
  }
}
class a extends s {
  constructor(e, t, r) {
    super(e);
    this.type = "provider_error";
    this.code = t;
    this.data = r;
  }
}
class o extends Error {
  constructor(e, t) {
    super(t);
    this.type = e;
  }
}
class i extends s {
  constructor(e, t, r) {
    super(e, t, r);
    this.type = "connector_error";
  }
}
class d extends Error {
  constructor(e, t, r) {
    super(e);
    this.code = t;
    this.data = r;
  }
}
const n = {
  UNKNOWN_ERROR: {
    eipCode: 0,
    message: "Unknown error",
    detail: "Unknown error",
    retryable: true
  },
  E4001_DEFAULT_USER_REJECTED_REQUEST: {
    eipCode: 4001,
    message: "User Rejected Request",
    detail: "The user rejected the request.",
    default: true,
    retryable: true
  },
  E4100_DEFAULT_UNAUTHORIZED: {
    eipCode: 4100,
    message: "Unauthorized",
    detail: "The requested method and/or account has not been authorized by the user.",
    default: true,
    retryable: false
  },
  E4200_DEFAULT_UNSUPPORTED_METHOD: {
    eipCode: 4200,
    message: "Unsupported Method",
    detail: "The Provider does not support the requested method.",
    default: true,
    retryable: false
  },
  E4900_DEFAULT_DISCONNECTED: {
    eipCode: 4900,
    message: "Disconnected",
    detail: "The Provider is disconnected from all chains.",
    default: true,
    retryable: true
  },
  E4901_DEFAULT_CHAIN_DISCONNECTED: {
    eipCode: 4901,
    message: "Chain Disconnected",
    detail: "The Provider is not connected to the requested chain.",
    default: true,
    retryable: true
  },
  E32700_DEFAULT_PARSE_ERROR: {
    eipCode: -32700,
    message: "Parse error",
    detail: "Invalid JSON",
    default: true,
    retryable: false
  },
  E32600_DEFAULT_INVALID_REQUEST: {
    eipCode: -32600,
    message: "Invalid request",
    detail: "JSON is not a valid request object",
    default: true,
    retryable: false
  },
  E32601_DEFAULT_METHOD_NOT_FOUND: {
    eipCode: -32601,
    message: "Method not found",
    detail: "Method does not exist",
    default: true,
    retryable: false
  },
  E32602_DEFAULT_INVALID_PARAMS: {
    eipCode: -32602,
    message: "Invalid params",
    detail: "Invalid method parameters",
    default: true,
    retryable: false
  },
  E32603_DEFAULT_INTERNAL_ERROR: {
    eipCode: -32603,
    message: "Internal error",
    detail: "Internal JSON-RPC error",
    default: true,
    retryable: true
  },
  E32000_DEFAULT_INVALID_INPUT: {
    eipCode: -32000,
    message: "Invalid input",
    detail: "Missing or invalid parameters",
    default: true,
    retryable: false
  },
  E32001_DEFAULT_RESOURCE_NOT_FOUND: {
    eipCode: -32001,
    message: "Resource not found",
    detail: "Requested resource not found",
    default: true,
    retryable: false
  },
  E32002_DEFAULT_RESOURCE_UNAVAILABLE: {
    eipCode: -32002,
    message: "Resource unavailable",
    detail: "Requested resource not available",
    default: true,
    retryable: true
  },
  E32003_DEFAULT_TRANSACTION_REJECTED: {
    eipCode: -32003,
    message: "Transaction rejected",
    detail: "Transaction creation failed",
    default: true,
    retryable: true
  },
  E32004_DEFAULT_METHOD_NOT_SUPPORTED: {
    eipCode: -32004,
    message: "Method not supported",
    detail: "Method is not implemented",
    default: true,
    retryable: false
  },
  E32005_DEFAULT_LIMIT_EXCEEDED: {
    eipCode: -32005,
    message: "Limit exceeded",
    detail: "Request exceeds defined limit",
    default: true,
    retryable: false
  },
  E32006_DEFAULT_JSON_RPC_VERSION_NOT_SUPPORTED: {
    eipCode: -32006,
    message: "JSON-RPC version not supported",
    detail: "Version of JSON-RPC protocol is not supported",
    default: true,
    retryable: false
  },
  E32002_CONNECTION_ALREADY_PENDING: {
    eipCode: -32002,
    message: "Connection request already pending",
    detail: "Don’t see your wallet? Check your other browser windows.",
    retryable: false
  },
  E32002_REQUEST_ALREADY_PENDING: {
    eipCode: -32002,
    message: "Resource request already pending",
    detail: "Don’t see your wallet? Check your other browser windows.",
    retryable: false
  },
  E32002_WALLET_LOCKED: {
    eipCode: -32002,
    message: "Wallet might be locked",
    detail: "Don’t see your wallet? Check your other browser windows.",
    retryable: false
  },
  E4001_USER_REJECTED_REQUEST: {
    eipCode: 4001,
    message: "Signature rejected",
    detail: "Please try signing again.",
    retryable: true
  }
};
function _(t) {
  let r = t.type;
  return typeof r == "string" && e.includes(r);
}
function E(e) {
  return _(e) && e.type === "wallet_not_on_device";
}
function l(e) {
  return _(e) && e.type === "mfa_timeout";
}
function u(e) {
  return _(e) && e.type === "missing_or_invalid_mfa";
}
function c(e) {
  return _(e) && e.type === "mfa_verification_max_attempts_reached";
}
function T(e) {
  return _(e) && e.message.includes("code 429");
}
class N extends a {
  constructor(e) {
    super(e.message, e.code, e.data);
    let t = Object.values(n).find(t => t.eipCode === e.code);
    this.details = t || n.UNKNOWN_ERROR;
    if (e.code === -32002) {
      if (e.message?.includes("already pending for origin")) {
        if (e.message?.includes("wallet_requestPermissions")) {
          this.details = n.E32002_CONNECTION_ALREADY_PENDING;
        } else {
          this.details = n.E32002_REQUEST_ALREADY_PENDING;
        }
      } else if (e.message?.includes("Already processing") && e.message.includes("eth_requestAccounts")) {
        this.details = n.E32002_WALLET_LOCKED;
      }
    }
  }
}
export { d as EmbeddedProviderError, i as PrivyConnectorError, r as PrivyEmbeddedWalletErrorCode, s as PrivyError, o as PrivyIframeError, N as PrivyProviderRpcError, n as ProviderErrors, a as ProviderRpcError, c as errorIndicatesMaxMfaRetries, T as errorIndicatesMfaRateLimit, l as errorIndicatesMfaTimeout, u as errorIndicatesMfaVerificationFailed, E as errorIndicatesRecoveryIsNeeded, _ as isPrivyIframeError };
