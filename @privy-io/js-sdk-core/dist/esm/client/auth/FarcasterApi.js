import { FarcasterInit as e, FarcasterStatus as t, FarcasterAuthenticate as a, FarcasterLink as r, FarcasterUnlink as s } from "@privy-io/public-api";
import { maybeCreateWalletOnLogin as i } from "./maybeCreateWalletOnLogin.mjs";
import "../../utils/getUserEmbeddedEthereumWallet.mjs";
import "../../utils/getAllUserEmbeddedEthereumWallets.mjs";
import "../../utils/getUserEmbeddedSolanaWallet.mjs";
import "../../utils/getAllUserEmbeddedSolanaWallets.mjs";
import "../../utils/shouldCreateEmbeddedEthWallet.mjs";
import "../../utils/shouldCreateEmbeddedSolWallet.mjs";
class n {
  async initializeAuth({
    relyingParty: t,
    redirectUrl: a,
    token: r
  }) {
    return await this._privyInternal.fetch(e, {
      body: {
        relying_party: t,
        redirect_url: a,
        token: r
      }
    });
  }
  async getFarcasterStatus({
    channel_token: e
  }) {
    return await this._privyInternal.fetch(t, {
      headers: {
        "farcaster-channel-token": e
      }
    });
  }
  async authenticate({
    channel_token: e,
    message: t,
    signature: r,
    fid: s,
    mode: n
  }, l) {
    let d = await this._privyInternal.fetch(a, {
      body: {
        channel_token: e,
        message: t,
        signature: r,
        fid: s,
        mode: n
      }
    });
    await this._privyInternal.session.updateWithTokensResponse(d);
    let o = await i(this._embedded, d, l?.embedded);
    this._privyInternal.callbacks?.setUser?.(o.user);
    return o;
  }
  async link({
    channel_token: e,
    message: t,
    signature: a,
    fid: s
  }) {
    await this._privyInternal.fetch(r, {
      body: {
        channel_token: e,
        message: t,
        signature: a,
        fid: s
      }
    });
    return (await this._privyInternal.refreshSession()).user;
  }
  async unlink({
    fid: e
  }) {
    await this._privyInternal.fetch(s, {
      body: {
        fid: e
      }
    });
    return (await this._privyInternal.refreshSession()).user;
  }
  constructor(e, t) {
    this._privyInternal = e;
    this._embedded = t;
  }
}
export { n as default };
