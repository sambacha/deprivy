async function e({
  accessToken: e,
  entropyId: r,
  entropyIdVerifier: a,
  transactingWallet: n,
  walletProxy: s,
  transactionRequest: i,
  publicClient: o,
  requesterAppId: c
}) {
  let p = await t({
    accessToken: e,
    entropyId: r,
    entropyIdVerifier: a,
    transactingWallet: n,
    walletProxy: s,
    transactionRequest: i,
    requesterAppId: c
  });
  return await o.sendRawTransaction({
    serializedTransaction: p
  });
}
async function t({
  accessToken: e,
  entropyId: t,
  entropyIdVerifier: r,
  transactingWallet: a,
  walletProxy: n,
  transactionRequest: s,
  requesterAppId: i
}) {
  return (await n.rpc({
    entropyId: t,
    entropyIdVerifier: r,
    hdWalletIndex: a.walletIndex ?? 0,
    chainType: "ethereum",
    accessToken: e,
    requesterAppId: i,
    request: {
      method: "eth_signTransaction",
      params: [s]
    }
  })).response.data;
}
export { e as sendTransaction, t as signTransaction };
