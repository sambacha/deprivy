const t = "https://api.mainnet-beta.solana.com";
const a = "https://api.testnet.solana.com";
const e = "https://api.devnet.solana.com";
function n({
  name: t,
  rpcUrl: a
}) {
  if (a) {
    return a;
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
export { e as SOLANA_DEVNET_RPC_URL, t as SOLANA_MAINNET_RPC_URL, a as SOLANA_TESTNET_RPC_URL, n as getSolanaRpcEndpointForCluster };
