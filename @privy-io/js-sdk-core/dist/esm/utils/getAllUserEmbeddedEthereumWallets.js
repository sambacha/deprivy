const e = e => e ? e.linked_accounts.filter(t).sort((e, t) => e.wallet_index - t.wallet_index) : [];
let t = e => e.type === "wallet" && e.wallet_client_type === "privy" && e.connector_type === "embedded" && e.chain_type === "ethereum";
export { e as getAllUserEmbeddedEthereumWallets };
