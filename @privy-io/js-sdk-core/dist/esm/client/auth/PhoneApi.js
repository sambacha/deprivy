import { PasswordlessSmsInit as e, PasswordlessSmsAuthenticate as t, PasswordlessSmsLink as r, PasswordlessSmsUnlink as s } from "@privy-io/public-api";
import { maybeCreateWalletOnLogin as i } from "./maybeCreateWalletOnLogin.mjs";
import "../../utils/getUserEmbeddedEthereumWallet.mjs";
import "../../utils/getAllUserEmbeddedEthereumWallets.mjs";
import "../../utils/getUserEmbeddedSolanaWallet.mjs";
import "../../utils/getAllUserEmbeddedSolanaWallets.mjs";
import "../../utils/shouldCreateEmbeddedEthWallet.mjs";
import "../../utils/shouldCreateEmbeddedSolWallet.mjs";
class a {
  async sendCode(t, r) {
    return this._privyInternal.fetch(e, {
      body: {
        phoneNumber: t,
        token: r
      }
    });
  }
  async loginWithCode(e, r, s, a) {
    let l = await this._privyInternal.fetch(t, {
      body: {
        phoneNumber: e,
        code: r,
        mode: s
      }
    });
    await this._privyInternal.session.updateWithTokensResponse(l);
    let n = await i(this._embedded, l, a?.embedded);
    this._privyInternal.callbacks?.setUser?.(n.user);
    return n;
  }
  async linkWithCode(e, t) {
    await this._privyInternal.fetch(r, {
      body: {
        phoneNumber: e,
        code: t
      }
    });
    return (await this._privyInternal.refreshSession()).user;
  }
  async unlink(e) {
    await this._privyInternal.fetch(s, {
      body: {
        phoneNumber: e
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
