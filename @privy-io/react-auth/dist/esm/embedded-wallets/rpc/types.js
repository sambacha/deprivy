const s = ["eth_sign", "eth_populateTransactionRequest", "eth_signTransaction", "personal_sign", "eth_signTypedData_v4", "csw_signUserOperation", "secp256k1_sign"];
const e = e => s.includes(e);
const n = ["signMessage"];
const i = s => n.includes(s);
export { s as SUPPORTED_ETHEREUM_RPC_METHODS, n as SUPPORTED_SOLANA_RPC_METHODS, e as isSupportedEthereumRpcMethod, i as isSupportedSolanaRpcMethod };
