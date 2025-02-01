import { Logout as t } from "@privy-io/public-api";
import e from "./CustomProviderApi.mjs";
import r from "./EmailApi.mjs";
import i from "./FarcasterApi.mjs";
import s from "./FarcasterV2Api.mjs";
import o from "./GuestApi.mjs";
import a from "./OAuthApi.mjs";
import l from "./PasskeyApi.mjs";
import m from "./PhoneApi.mjs";
import n from "./SiweApi.mjs";
import p from "./SmartWalletApi.mjs";
import "./maybeCreateWalletOnLogin.mjs";
import "../../utils/getUserEmbeddedEthereumWallet.mjs";
import "../../utils/getAllUserEmbeddedEthereumWallets.mjs";
import "../../utils/getUserEmbeddedSolanaWallet.mjs";
import "../../utils/getAllUserEmbeddedSolanaWallets.mjs";
import "../../utils/shouldCreateEmbeddedEthWallet.mjs";
import "../../utils/shouldCreateEmbeddedSolWallet.mjs";
import "../../Error.mjs";
import "../../pkce.mjs";
import "jose";
let h = class {
  async logout() {
    try {
      let e = (await this._privyInternal.session.getRefreshToken()) ?? undefined;
      await this._privyInternal.fetch(t, {
        body: {
          refresh_token: e
        }
      });
    } catch (t) {
      console.warn("Error destroying session");
    }
    await Promise.all([this._privyInternal.session.destroyLocalState({
      reason: "logout"
    }), this._privyInternal.destroyClientAnalyticsId()]);
    this._privyInternal.callbacks?.setUser?.(null);
  }
  constructor(t, h, d, y) {
    this._privyInternal = t;
    this.customProvider = new e(this._privyInternal, h);
    this.phone = new m(this._privyInternal, h);
    this.email = new r(this._privyInternal, h);
    this.oauth = new a(this._privyInternal, h, d, y);
    this.guest = new o(this._privyInternal, h);
    this.siwe = new n(this._privyInternal, h);
    this.smartWallet = new p(this._privyInternal);
    this.passkey = new l(this._privyInternal, h);
    this.farcaster = new i(this._privyInternal, h);
    this.farcasterV2 = new s(this._privyInternal, h);
  }
};
export { h as default };
