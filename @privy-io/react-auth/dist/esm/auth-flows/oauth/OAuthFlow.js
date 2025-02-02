import { CODE_VERIFIER_KEY as t, HEADLESS_OAUTH_KEY as e, OAUTH_DISABLE_SIGNUP_KEY as i, STATE_CODE_KEY as o } from "../../constants.mjs";
import { PrivyClientError as a, formatApiError as r, PrivyErrorCode as n } from "../../errors.mjs";
import { getCodeVerifier as h, createCodeVerifier as s, createStateCode as d, deriveCodeChallengeFromCodeVerifier as u } from "../../lib/pkce.mjs";
import { oAuthAuthenticatePath as m, oAuthLinkPath as c, oAuthInitPath as w } from "../../paths.mjs";
import l from "../../storage.mjs";
import { getUiHeader as p } from "../getUiHeader.mjs";
import "ofetch";
import "jose";
import "../../crypto.mjs";
class f {
  addCaptchaToken(t) {
    this.meta.captchaToken = t;
  }
  isActive() {
    return !!this.meta.authorizationCode && !!this.meta.stateCode && !!this.meta.provider;
  }
  async authenticate() {
    if (!this.api) {
      throw new a("Auth flow has no API instance");
    }
    if (!this.meta.authorizationCode || !this.meta.stateCode) {
      throw new a("[OAuth AuthFlow] Authorization and state codes code must be set prior to calling authenticate.");
    }
    if (this.meta.authorizationCode === "undefined") {
      throw new a("User denied confirmation during OAuth flow");
    }
    let o = h();
    try {
      let a = await this.api.post(m, {
        authorization_code: this.meta.authorizationCode,
        state_code: this.meta.stateCode,
        code_verifier: o,
        mode: this.meta.disableSignup ? "no-signup" : "login-or-sign-up"
      });
      l.del(t);
      l.del(e);
      l.del(i);
      return a;
    } catch (t) {
      let e = r(t);
      if (e.privyErrorCode) {
        throw new a(e.message || "Invalid code during OAuth flow.", undefined, e.privyErrorCode);
      }
      if (e.message === "User denied confirmation during OAuth flow") {
        throw new a("Invalid code during oauth flow.", undefined, n.OAUTH_USER_DENIED);
      }
      throw new a("Invalid code during OAuth flow.", undefined, n.UNKNOWN_AUTH_ERROR);
    }
  }
  async link() {
    if (!this.api) {
      throw new a("Auth flow has no API instance");
    }
    if (!this.meta.authorizationCode || !this.meta.stateCode) {
      throw new a("[OAuth AuthFlow] Authorization and state codes code must be set prior to calling link.");
    }
    if (this.meta.authorizationCode === "undefined") {
      throw new a("User denied confirmation during OAuth flow");
    }
    let e = l.get(t);
    if (!e) {
      throw new a("Authentication error.");
    }
    try {
      let i = await this.api.post(c, {
        authorization_code: this.meta.authorizationCode,
        state_code: this.meta.stateCode,
        code_verifier: e
      });
      l.del(t);
      return i;
    } catch (t) {
      throw r(t);
    }
  }
  async getAuthorizationUrl() {
    if (!this.api) {
      throw new a("Auth flow has no API instance");
    }
    if (!this.meta.provider) {
      throw new a("Provider must be set when initializing OAuth authentication.");
    }
    let n = s();
    l.put(t, n);
    let h = d();
    l.put(o, h);
    let m = await u(n);
    if (!this.meta.withPrivyUi) {
      l.put(e, true);
    }
    if (this.meta.disableSignup) {
      l.put(i, true);
    }
    let c = p(this.meta.withPrivyUi);
    try {
      return await this.api.post(w, {
        provider: this.meta.provider,
        redirect_to: window.location.href,
        token: this.meta.captchaToken,
        code_challenge: m,
        state_code: h
      }, {
        headers: {
          ...c
        }
      });
    } catch (t) {
      throw r(t);
    }
  }
  constructor(t) {
    this.meta = t;
  }
}
export { f as OAuthFlow };
