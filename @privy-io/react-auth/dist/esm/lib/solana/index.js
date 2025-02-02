const t = "https://api.mainnet-beta.solana.com";
const e = "https://api.testnet.solana.com";
const n = "https://api.devnet.solana.com";
const a = 792703809;
const s = "11111111111111111111111111111111";
const o = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
function c(t) {
  if (t.includes("testnet")) {
    return "testnet";
  } else if (t.includes("devnet")) {
    return "devnet";
  } else {
    return "mainnet-beta";
  }
}
function r(t, e) {
  return `https://explorer.solana.com/tx/${t}?cluster=${e}`;
}
function i(t, e) {
  return `https://explorer.solana.com/account/${t}?cluster=${e}`;
}
function p({
  name: t,
  rpcUrl: e
}) {
  if (e) {
    return e;
  }
  switch (t) {
    case "mainnet-beta":
      return "https://api.mainnet-beta.solana.com";
    case "testnet":
      return "https://api.testnet.solana.com";
    case "devnet":
      return "https://api.devnet.solana.com";
  }
}
function u(t, {
  strict: e = true
} = {}) {
  return new RegExp(/^[A-HJ-NP-Za-km-z1-9]{44}$/, e ? undefined : "i").test(t);
}
export { a as RELAY_SOLANA_MAINNET_CLUSTER_CHAIN_ID, s as RELAY_SOLANA_NATIVE_CURRENCY_ID, o as RELAY_SOLANA_USDC_TOKEN_ID, n as SOLANA_DEVNET_RPC_URL, t as SOLANA_MAINNET_RPC_URL, e as SOLANA_TESTNET_RPC_URL, c as getSolanaNetworkFromRpcEndpoint, p as getSolanaRpcEndpointForCluster, r as getSolanaTransactionExplorerUrl, i as getSolanaWalletExplorerUrl, u as isSolanaAddress };
