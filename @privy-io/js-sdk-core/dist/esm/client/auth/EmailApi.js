import { PasswordlessInit as e, PasswordlessAuthenticate as t, PasswordlessLink as s, PasswordlessUnlink as i } from "@privy-io/public-api";
import { maybeCreateWalletOnLogin as r } from "./maybeCreateWalletOnLogin.mjs";
import "../../utils/getUserEmbeddedEthereumWallet.mjs";
import "../../utils/getAllUserEmbeddedEthereumWallets.mjs";
import "../../utils/getUserEmbeddedSolanaWallet.mjs";
import "../../utils/getAllUserEmbeddedSolanaWallets.mjs";
import "../../utils/shouldCreateEmbeddedEthWallet.mjs";
import "../../utils/shouldCreateEmbeddedSolWallet.mjs";
class a {
  async sendCode(t, s) {
    return this._privyInternal.fetch(e, {
      body: {
        email: t,
        token: s
      }
    });
  }
  async loginWithCode(e, s, i, a) {
    let l = await this._privyInternal.fetch(t, {
      body: {
        email: e,
        code: s,
        mode: i
      }
    });
    await this._privyInternal.session.updateWithTokensResponse(l);
    let d = await r(this._embedded, l, a?.embedded);
    this._privyInternal.callbacks?.setUser?.(d.user);
    return d;
  }
  async linkWithCode(e, t) {
    await this._privyInternal.fetch(s, {
      body: {
        email: e,
        code: t
      }
    });
    return (await this._privyInternal.refreshSession()).user;
  }
  async unlink(e) {
    await this._privyInternal.fetch(i, {
      body: {
        address: e
      }
    });
    return (await this._privyInternal.refreshSession()).user;
  }
  constructor(e, t) {
    this._privyInternal = e;
    this._embedded = t;
  }
}
export { a as default };
