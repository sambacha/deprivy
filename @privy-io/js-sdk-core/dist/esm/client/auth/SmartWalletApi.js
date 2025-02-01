import { SiweLinkSmartWallet as n, SiweInit as t } from "@privy-io/public-api";
class e {
  async link(t, e, i) {
    await this._privyInternal.fetch(n, {
      body: {
        message: t,
        signature: e,
        smart_wallet_type: i
      }
    });
    return (await this._privyInternal.refreshSession()).user;
  }
  async init(n) {
    var e;
    let {
      nonce: i
    } = await this._privyInternal.fetch(t, {
      body: {
        address: n.address
      }
    });
    return {
      nonce: i,
      message: `${(e = {
        chainId: n.chainId.toString().replace("eip155:", ""),
        address: n.address,
        issuedAt: new Date().toISOString(),
        statement: "By signing, you are proving you own this wallet and logging in. This does not initiate a transaction or cost any fees.",
        domain: "privy.io",
        uri: "https://auth.privy.io",
        nonce: i
      }).domain} wants you to sign in with your Ethereum account:\n${e.address}\n\n${e.statement}\n\nURI: ${e.uri}\nVersion: 1\nChain ID: ${e.chainId}\nNonce: ${e.nonce}\nIssued At: ${e.issuedAt}\nResources:\n- https://privy.io`
    };
  }
  constructor(n) {
    this._privyInternal = n;
  }
}
export { e as default };
