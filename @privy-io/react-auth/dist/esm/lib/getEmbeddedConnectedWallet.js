function e(e) {
  return e.find(e => e.walletClientType === "privy" && e.connectorType === "embedded" && !e.imported) ?? null;
}
export { e as getEmbeddedConnectedWallet };
