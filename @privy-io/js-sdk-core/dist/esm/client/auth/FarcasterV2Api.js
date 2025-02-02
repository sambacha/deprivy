import { FarcasterV2Init as e, FarcasterV2Authenticate as t } from "@privy-io/public-api";
import { maybeCreateWalletOnLogin as s } from "./maybeCreateWalletOnLogin.mjs";
import "../../utils/getUserEmbeddedEthereumWallet.mjs";
import "../../utils/getAllUserEmbeddedEthereumWallets.mjs";
import "../../utils/getUserEmbeddedSolanaWallet.mjs";
import "../../utils/getAllUserEmbeddedSolanaWallets.mjs";
import "../../utils/shouldCreateEmbeddedEthWallet.mjs";
import "../../utils/shouldCreateEmbeddedSolWallet.mjs";
class i {
  async initializeAuth() {
    return await this._privyInternal.fetch(e, {
      body: {}
    });
  }
  async authenticate({
    message: e,
    signature: i,
    fid: a
  }, l) {
    let r = await this._privyInternal.fetch(t, {
      body: {
        message: e,
        signature: i,
        fid: a
      }
    });
    await this._privyInternal.session.updateWithTokensResponse(r);
    let d = await s(this._embedded, r, l?.embedded);
    this._privyInternal.callbacks?.setUser?.(d.user);
    return d;
  }
  constructor(e, t) {
    this._privyInternal = e;
    this._embedded = t;
  }
}
export { i as default };
