const e = ["eth_sign", "eth_populateTransactionRequest", "eth_signTransaction", "personal_sign", "eth_signTypedData_v4"];
const i = i => e.includes(i);
let n = ["signMessage"];
const t = e => n.includes(e);
const s = ["error", "invalid_request_arguments", "wallet_not_on_device", "invalid_recovery_pin", "insufficient_funds", "mfa_timeout", "missing_or_invalid_mfa", "mfa_verification_max_attempts_reached"];
export { s as PrivyIframeErrorTypes, e as SUPPORTED_JSON_RPC_METHODS, i as isSupportedRpcMethod, t as isSupportedSolanaRpcMethod };
