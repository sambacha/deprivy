const t = t => t ? t.linked_accounts.filter(e).sort((t, e) => t.wallet_index - e.wallet_index) : [];
let e = t => t.type === "wallet" && t.wallet_client_type === "privy" && t.connector_type === "embedded" && (t.chain_type === "bitcoin-segwit" || t.chain_type === "bitcoin-taproot");
export { t as getAllUserEmbeddedBitcoinWallets };
