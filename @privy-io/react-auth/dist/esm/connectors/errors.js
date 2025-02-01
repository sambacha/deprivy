import { ProviderErrors as e } from "@privy-io/js-sdk-core";
import { PrivyConnectorError as s, PrivyError as t } from "../errors.mjs";
import "ofetch";
class r extends s {
  constructor() {
    super("Wallet timeout");
    this.type = "wallet_error";
  }
}
class a extends s {
  constructor() {
    super("User rejected connection");
    this.type = "wallet_error";
  }
}
const o = e => e instanceof s ? e : e?.code ? new n(e) : new s("Unknown connector error", e);
class i extends t {
  constructor(e, s, t) {
    super(e);
    this.type = "provider_error";
    this.code = s;
    this.data = t;
  }
}
class n extends i {
  constructor(s) {
    super(s.message, s.code, s.data);
    let t = Object.values(e).find(e => e.eipCode === s.code);
    this.details = t || e.UNKNOWN_ERROR;
    if (s.code === -32002) {
      if (s.message?.includes("already pending for origin")) {
        if (s.message?.includes("wallet_requestPermissions")) {
          this.details = e.E32002_CONNECTION_ALREADY_PENDING;
        } else {
          this.details = e.E32002_REQUEST_ALREADY_PENDING;
        }
      } else if (s.message?.includes("Already processing") && s.message.includes("eth_requestAccounts")) {
        this.details = e.E32002_WALLET_LOCKED;
      }
    }
  }
}
const l = {
  ERROR_USER_EXISTS: {
    message: "User already exists for this address",
    detail: "Try another address!",
    retryable: false
  },
  ERROR_TIMED_OUT: {
    message: "Wallet request timed out",
    detail: "Please try connecting again.",
    retryable: true
  },
  ERROR_WALLET_CONNECTION: {
    message: "Could not log in with wallet",
    detail: "Please try connecting again.",
    retryable: true
  },
  ERROR_USER_REJECTED_CONNECTION: {
    message: "You rejected the request",
    detail: "Please try connecting again.",
    retryable: true
  },
  ERROR_USER_LIMIT_REACHED: {
    message: "Unable to link",
    detail: "You've reached the maximum number of linked wallets.",
    retryable: false
  },
  ...e
};
export { l as ConnectorErrors, n as PrivyProviderRpcError, i as ProviderRpcError, a as UserRejectedConnectionError, r as WalletTimeoutError, o as formatConnectorError };
