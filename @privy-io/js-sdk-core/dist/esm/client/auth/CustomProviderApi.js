import { CustomJWTAuthenticate as e } from "@privy-io/public-api";
import { maybeCreateWalletOnLogin as t } from "./maybeCreateWalletOnLogin.mjs";
import "../../utils/getUserEmbeddedEthereumWallet.mjs";
import "../../utils/getAllUserEmbeddedEthereumWallets.mjs";
import "../../utils/getUserEmbeddedSolanaWallet.mjs";
import "../../utils/getAllUserEmbeddedSolanaWallets.mjs";
import "../../utils/shouldCreateEmbeddedEthWallet.mjs";
import "../../utils/shouldCreateEmbeddedSolWallet.mjs";
class s {
  async syncWithToken(s, l) {
    let i = await this._privyInternal.fetch(e, {
      body: {
        token: s
      }
    });
    await this._privyInternal.session.updateWithTokensResponse(i);
    let r = await t(this._embedded, i, l?.embedded);
    this._privyInternal.callbacks?.setUser?.(r.user);
    return r;
  }
  constructor(e, t) {
    this._privyInternal = e;
    this._embedded = t;
  }
}
export { s as default };
