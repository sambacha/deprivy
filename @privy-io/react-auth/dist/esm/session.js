import e from "js-cookie";
import { authFlowToAuthenticateMethod as t } from "./auth-flows/authFlowToAuthenticateMethod.mjs";
import { convertUserResponseToUser as s } from "./client/user.mjs";
import { CUSTOMER_ACCESS_TOKEN_STORAGE_KEY as r, PRIVY_ACCESS_TOKEN_STORAGE_KEY as o, REFRESH_TOKEN_STORAGE_KEY as n, FORKED_TOKEN_STORAGE_KEY as i, getProviderAccessTokenStorageKey as c, SESSION_COOKIE_KEY as a, DEPRECATED_REFRESH_TOKEN as h, CUSTOMER_ACCESS_TOKEN_COOKIE_KEY as l, REFRESH_TOKEN_COOKIE_KEY as k, IDENTITY_TOKEN_STORAGE_KEY as u, IDENTITY_TOKEN_COOKIE_KEY as p } from "./constants.mjs";
import { getSecureMode as m } from "./cookies.mjs";
import { RunEffectOnce as d } from "./effect.mjs";
import { formatPrivyError as f, PrivyClientError as _, PrivyApiError as y, PrivyErrorCode as T } from "./errors.mjs";
import { useIdTokenStore as v } from "./hooks/useIdentityToken.mjs";
import { sessionsRefreshPath as w, recoverForkedSessionsPath as g, sessionsLogoutPath as S, forkSessionPath as A } from "./paths.mjs";
import j from "./storage.mjs";
import { Token as C } from "./token.mjs";
import "./auth-flows/custom-jwt-account.mjs";
import "./auth-flows/email.mjs";
import "./auth-flows/getUiHeader.mjs";
import "./auth-flows/guest.mjs";
import "jose";
import "./crypto.mjs";
import "./auth-flows/siwe.mjs";
import "./lib/siwe.mjs";
import "ofetch";
import "./auth-flows/sms.mjs";
import "./auth-flows/oauth/OAuthFlow.mjs";
import "./lib/pkce.mjs";
import "viem/utils";
import "react-device-detect";
import "zustand";
var x;
(x = {}).PRIVY = "privy_access_token";
x.CUSTOMER = "customer_access_token";
var I = x;
class E {
  get token() {
    return this.privyAccessToken || this.customerAccessToken;
  }
  getToken(e) {
    if (e === "privy_access_token") {
      return this.privyAccessToken;
    } else {
      return this.customerAccessToken;
    }
  }
  get customerAccessToken() {
    return this._getToken(r);
  }
  get privyAccessToken() {
    return this._getToken(o);
  }
  _getToken(e) {
    try {
      let t = j.get(e);
      if (typeof t == "string") {
        return C.throwIfNotWellFormedJwt(t);
      } else {
        return null;
      }
    } catch (e) {
      console.error(e);
      this.destroyLocalState();
      return null;
    }
  }
  get refreshToken() {
    try {
      let e = j.get(n);
      if (typeof e == "string") {
        return e;
      } else {
        return null;
      }
    } catch (e) {
      console.error(e);
      this.destroyLocalState();
      return null;
    }
  }
  get forkedToken() {
    try {
      let e = j.get(i);
      if (typeof e == "string") {
        return e;
      } else {
        return null;
      }
    } catch (e) {
      console.error(e);
      this.destroyLocalState();
      return null;
    }
  }
  getProviderAccessToken(e) {
    try {
      let t = j.get(c(e));
      if (typeof t != "string") {
        return null;
      }
      {
        let s = new C(t);
        if (s.isExpired()) {
          j.del(c(e));
          return null;
        } else {
          return s.value;
        }
      }
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  get mightHaveServerCookies() {
    try {
      let t = e.get(a);
      return t !== undefined && t.length > 0;
    } catch (e) {
      console.error(e);
    }
    return false;
  }
  hasRefreshCredentials(e = "privy_access_token") {
    let t = typeof this.getToken(e) == "string";
    let s = typeof this.refreshToken == "string" && this.refreshToken !== h;
    return this.mightHaveServerCookies || t && s;
  }
  hasRecoveryCredentials() {
    return typeof this.forkedToken == "string";
  }
  hasActiveAccessToken(e) {
    let t = C.parse(this.getToken(e));
    return t !== null && !t.isExpired(30);
  }
  authenticate(e) {
    return this.authenticateOnce.execute(e);
  }
  link(e) {
    return this.linkOnce.execute(e);
  }
  refresh() {
    return this.refreshOnce.execute();
  }
  forkSession() {
    return this.forkSessionOnce.execute();
  }
  destroy() {
    return this.destroyOnce.execute();
  }
  storeProviderAccessToken(e, t) {
    if (typeof t == "string") {
      j.put(c(e), t);
    } else {
      j.del(c(e));
    }
  }
  async _authenticate(e) {
    try {
      let t = await e.authenticate();
      let {
        user: r,
        is_new_user: o,
        oauth_tokens: n
      } = t;
      this.handleTokenResponse(t);
      let i = n ? {
        provider: n.provider,
        accessToken: n.access_token,
        accessTokenExpiresInSeconds: n.access_token_expires_in_seconds,
        refreshToken: n.refresh_token,
        refreshTokenExpiresInSeconds: n.refresh_token_expires_in_seconds,
        scopes: n.scopes
      } : undefined;
      this._trackAuthenticateEvents(e, o);
      return {
        user: s(r),
        isNewUser: o,
        oAuthTokens: i
      };
    } catch (e) {
      console.warn("Error authenticating session");
      throw f(e);
    }
  }
  _trackAuthenticateEvents(e, s) {
    let r = t(e);
    if (r && this.client) {
      this.client.createAnalyticsEvent({
        eventName: "sdk_authenticate",
        payload: {
          method: r,
          isNewUser: s
        }
      });
    }
    if (r === "siwe" && this.client) {
      this.client.createAnalyticsEvent({
        eventName: "sdk_authenticate_siwe",
        payload: {
          connectorType: e.meta.connectorType,
          walletClientType: e.meta.walletClientType
        }
      });
    }
  }
  async _link(e) {
    try {
      let t = await e.link();
      let r = t.oauth_tokens;
      let o = r ? {
        provider: r.provider,
        accessToken: r.access_token,
        accessTokenExpiresInSeconds: r.access_token_expires_in_seconds,
        refreshToken: r.refresh_token,
        refreshTokenExpiresInSeconds: r.refresh_token_expires_in_seconds,
        scopes: r.scopes
      } : undefined;
      return {
        user: s(t),
        oAuthTokens: o
      };
    } catch (e) {
      console.warn("Error linking account");
      throw f(e);
    }
  }
  async _refresh() {
    if (!this.api) {
      throw new _("Session has no API instance");
    }
    if (!this.client) {
      throw new _("Session has no PrivyClient instance");
    }
    await this.client.getAccessToken({
      disableAutoRefresh: true
    });
    let e = this.token;
    let t = this.refreshToken;
    let r = this.forkedToken;
    if (this.client.useServerCookies && !this.mightHaveServerCookies && this.token && window.location.origin === this.client.apiUrl) {
      this.destroyLocalState();
      return null;
    }
    try {
      let o;
      if (e && t || this.mightHaveServerCookies) {
        let s = {};
        if (e) {
          s.authorization = `Bearer ${e}`;
        }
        o = await this.api.post(w, t ? {
          refresh_token: t
        } : {}, {
          headers: s
        });
        if (r) {
          this.clearForkedToken();
        }
      } else {
        if (!r) {
          return null;
        }
        o = await this.api.post(g, {
          refresh_token: r
        });
        this.clearForkedToken();
      }
      this.handleTokenResponse(o);
      return s(o.user);
    } catch (e) {
      if (e instanceof y && e.privyErrorCode === T.MISSING_OR_INVALID_TOKEN) {
        console.warn("Unable to refresh tokens - token is missing or no longer valid");
        this.destroyLocalState();
        return null;
      }
      throw f(e);
    }
  }
  handleTokenResponse(e) {
    if (e.session_update_action && e.session_update_action !== "set") {
      if (e.session_update_action === "clear") {
        this.destroyLocalState();
      } else if (e.session_update_action === "ignore") {
        if (e.token) {
          this.storeCustomerAccessToken(e.token);
          this.storePrivyAccessToken(e.privy_access_token);
        }
        if (e.identity_token) {
          this.storeIdentityToken(e.identity_token);
        }
      }
    } else {
      this._storeAllTokens(e);
    }
  }
  _storeAllTokens(e) {
    this.storeRefreshToken(e.refresh_token);
    this.storeCustomerAccessToken(e.token);
    this.storePrivyAccessToken(e.privy_access_token);
    if (e.identity_token) {
      this.storeIdentityToken(e.identity_token);
    }
  }
  async _destroy() {
    try {
      await this.api?.post(S, {
        refresh_token: this.refreshToken
      });
    } catch (e) {
      console.warn("Error destroying session");
    }
    this.destroyLocalState();
  }
  async _forkSession() {
    if (!this.api) {
      throw new _("Session has no API instance");
    }
    let e = this.refreshToken;
    try {
      let t = await this.api.post(A, {
        refresh_token: e
      });
      this.storeRefreshToken(t.refresh_token);
      this.storeCustomerAccessToken(t.token);
      return t.new_session_refresh_token;
    } catch (e) {
      throw f(e);
    }
  }
  destroyLocalState() {
    this.storeRefreshToken(null);
    this.storeCustomerAccessToken(null);
    this.storePrivyAccessToken(null);
    this.clearIdentityToken();
    this.clearForkedToken();
  }
  storeCustomerAccessToken(t) {
    if (typeof t == "string") {
      let s = j.get(r);
      j.put(r, t);
      if (!this.client?.useServerCookies) {
        let s = C.parse(t)?.expiration;
        e.set(l, t, {
          sameSite: "Strict",
          secure: m(),
          expires: s ? new Date(s * 1000) : undefined
        });
      }
      if (s !== t) {
        this.client?.onStoreCustomerAccessToken?.(t);
      }
    } else {
      j.del(r);
      e.remove(l);
      this.client?.onDeleteCustomerAccessToken?.();
    }
  }
  storeRefreshToken(t) {
    if (typeof t == "string") {
      j.put(n, t);
      if (!this.client?.useServerCookies) {
        e.set(a, "t", {
          sameSite: "Strict",
          secure: m(),
          expires: 30
        });
      }
    } else {
      j.del(n);
      e.remove(k);
      e.remove(a);
    }
  }
  storePrivyAccessToken(e) {
    if (typeof e == "string") {
      j.put(o, e);
    } else {
      j.del(o);
    }
  }
  storeIdentityToken(t) {
    v.setState({
      identityToken: t
    });
    if (this.client?.useServerCookies) {
      return;
    }
    j.put(u, t);
    let s = C.parse(t)?.expiration;
    e.set(p, t, {
      sameSite: "Strict",
      secure: m(),
      expires: s ? new Date(s * 1000) : undefined
    });
  }
  clearIdentityToken() {
    j.del(u);
    v.setState({
      identityToken: null
    });
    e.remove(p);
  }
  clearForkedToken() {
    j.del(i);
  }
  constructor() {
    this.authenticateOnce = new d(async e => this._authenticate(e));
    this.linkOnce = new d(async e => this._link(e));
    this.refreshOnce = new d(this._refresh.bind(this));
    this.destroyOnce = new d(this._destroy.bind(this));
    this.forkSessionOnce = new d(this._forkSession.bind(this));
  }
}
export { I as AccessTokenTypes, E as Session };
