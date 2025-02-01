import { OAuthInit as e, OAuthAuthenticate as t, OAuthLink as i, OAuthUnlink as r } from "@privy-io/public-api";
import { PrivyClientError as s } from "../../Error.mjs";
import { createCodeVerifier as a, createStateCode as o, deriveCodeChallengeFromCodeVerifier as l, CODE_VERIFIER_KEY as d, STATE_CODE_KEY as n } from "../../pkce.mjs";
import { maybeCreateWalletOnLogin as h } from "./maybeCreateWalletOnLogin.mjs";
import "jose";
import "../../utils/getUserEmbeddedEthereumWallet.mjs";
import "../../utils/getAllUserEmbeddedEthereumWallets.mjs";
import "../../utils/getUserEmbeddedSolanaWallet.mjs";
import "../../utils/getAllUserEmbeddedSolanaWallets.mjs";
import "../../utils/shouldCreateEmbeddedEthWallet.mjs";
import "../../utils/shouldCreateEmbeddedSolWallet.mjs";
class p {
  async generateURL(t, i) {
    let r = a();
    let s = o();
    let h = await l({
      codeVerifier: r,
      digest: this._crypto?.digest
    });
    await Promise.all([this._storage.put(d, r), this._storage.put(n, s)]);
    return this._privyInternal.fetch(e, {
      body: {
        redirect_to: i,
        provider: t,
        code_challenge: h,
        state_code: s
      }
    });
  }
  async loginWithCode(e, i, r, a, o, l) {
    let [p, m] = await Promise.all([this._storage.get(d), this._storage.get(n)]);
    if (m !== i) {
      this._privyInternal.createAnalyticsEvent("possible_phishing_attempt", {
        flow: "oauth",
        provider: r,
        storedStateCode: m ?? "",
        returnedStateCode: i ?? ""
      });
      throw new s({
        code: "pkce_state_code_mismatch",
        error: "Unexpected auth flow. This may be a phishing attempt."
      });
    }
    let _ = await this._privyInternal.fetch(t, {
      body: {
        authorization_code: e,
        code_type: a,
        state_code: m,
        code_verifier: p,
        mode: o
      }
    });
    await this._privyInternal.session.updateWithTokensResponse(_);
    let c = await h(this._embedded, _, l?.embedded);
    await Promise.all([this._storage.del(d), this._storage.del(n)]);
    this._privyInternal.callbacks?.setUser?.(c.user);
    return c;
  }
  async linkWithCode(e, t, r, a) {
    let [o, l] = await Promise.all([this._storage.get(d), this._storage.get(n)]);
    if (l !== t) {
      this._privyInternal.createAnalyticsEvent("possible_phishing_attempt", {
        flow: "oauth",
        provider: r,
        storedStateCode: l ?? "",
        returnedStateCode: t ?? ""
      });
      throw new s({
        code: "pkce_state_code_mismatch",
        error: "Unexpected auth flow. This may be a phishing attempt."
      });
    }
    let h = await this._privyInternal.fetch(i, {
      body: {
        authorization_code: e,
        code_type: a,
        state_code: l,
        code_verifier: o
      }
    });
    await this._privyInternal.session.processOAuthTokens(h.oauth_tokens);
    let p = await this._privyInternal.refreshSession();
    await Promise.all([this._storage.del(d), this._storage.del(n)]);
    return p.user;
  }
  async unlink(e, t) {
    await this._privyInternal.fetch(r, {
      body: {
        provider: e,
        subject: t
      }
    });
    return (await this._privyInternal.refreshSession()).user;
  }
  constructor(e, t, i, r) {
    this._privyInternal = e;
    this._embedded = t;
    this._storage = i;
    this._crypto = r;
  }
}
export { p as default };
