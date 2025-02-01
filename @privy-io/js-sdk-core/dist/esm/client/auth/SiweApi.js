import { SiweUnlink as e, SiweLink as t, SiweAuthenticate as i, SiweInit as s } from "@privy-io/public-api";
import { maybeCreateWalletOnLogin as n } from "./maybeCreateWalletOnLogin.mjs";
import "../../utils/getUserEmbeddedEthereumWallet.mjs";
import "../../utils/getAllUserEmbeddedEthereumWallets.mjs";
import "../../utils/getUserEmbeddedSolanaWallet.mjs";
import "../../utils/getAllUserEmbeddedSolanaWallets.mjs";
import "../../utils/shouldCreateEmbeddedEthWallet.mjs";
import "../../utils/shouldCreateEmbeddedSolWallet.mjs";
class a {
  async unlinkWallet(t) {
    await this._privyInternal.fetch(e, {
      body: {
        address: t
      }
    });
    return (await this._privyInternal.refreshSession()).user;
  }
  async linkWithSiwe(e, i, s) {
    let n = i || this._wallet;
    let a = s || this._preparedMessage;
    if (!n) {
      throw Error("A wallet must be provided in the init step or as an argument to linkWithSiwe");
    }
    if (!a) {
      throw Error("A message must be generated and signed before being used to link a wallet to privy");
    }
    await this._privyInternal.fetch(t, {
      body: {
        message: a,
        signature: e,
        chainId: n.chainId,
        walletClientType: n.walletClientType,
        connectorType: n.connectorType
      }
    });
    return (await this._privyInternal.refreshSession()).user;
  }
  async loginWithSiwe(e, t, s, a, r) {
    let l = t || this._wallet;
    let o = s || this._preparedMessage;
    if (!l) {
      throw Error("A wallet must be provided in the init step or as an argument to loginWithSiwe");
    }
    if (!o) {
      throw Error("A message must be generated and signed before being used to login to privy with a wallet");
    }
    let d = await this._privyInternal.fetch(i, {
      body: {
        signature: e,
        message: o,
        chainId: l.chainId,
        walletClientType: l.walletClientType,
        connectorType: l.connectorType,
        mode: a
      }
    });
    await this._privyInternal.session.updateWithTokensResponse(d);
    let h = await n(this._embedded, d, r?.embedded);
    this._privyInternal.callbacks?.setUser?.(h.user);
    return h;
  }
  async init(e, t, i) {
    var n;
    this._wallet = e;
    let {
      nonce: a
    } = await this._privyInternal.fetch(s, {
      body: {
        address: e.address
      }
    });
    let r = `${(n = {
      chainId: e.chainId.toString().replace("eip155:", ""),
      address: e.address,
      issuedAt: new Date().toISOString(),
      statement: "By signing, you are proving you own this wallet and logging in. This does not initiate a transaction or cost any fees.",
      domain: t,
      nonce: a,
      uri: i
    }).domain} wants you to sign in with your Ethereum account:\n${n.address}\n\n${n.statement}\n\nURI: ${n.uri}\nVersion: 1\nChain ID: ${n.chainId}\nNonce: ${n.nonce}\nIssued At: ${n.issuedAt}\nResources:\n- https://privy.io`;
    this._preparedMessage = r;
    return {
      nonce: a,
      message: r
    };
  }
  constructor(e, t) {
    this._wallet = undefined;
    this._privyInternal = e;
    this._embedded = t;
  }
}
export { a as default };
