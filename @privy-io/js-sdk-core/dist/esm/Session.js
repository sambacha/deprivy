import e from "eventemitter3";
import { base64url as t } from "jose";
import s from "js-cookie";
import { Token as r } from "./Token.mjs";
import { allSettled as i } from "./utils/allSettled.mjs";
let o = "privy:token";
let n = "privy-token";
let a = "privy:refresh_token";
let _ = "privy-refresh-token";
let h = "privy:id-token";
let g = "privy-id-token";
let l = "privy-session";
let k = "privy:session_transfer_token";
class d extends e {
  set isUsingServerCookies(e) {
    this._isUsingServerCookies = e;
  }
  async getToken() {
    let e = await this._storage.get(o);
    try {
      if (typeof e == "string") {
        return new r(e).value;
      } else {
        return null;
      }
    } catch (e) {
      console.error(e);
      await this.destroyLocalState({
        reason: "getToken_error"
      });
      return null;
    }
  }
  async getRefreshToken() {
    let e = await this._storage.get(a);
    if (typeof e == "string") {
      return e;
    } else {
      return null;
    }
  }
  async getIdentityToken() {
    let e = await this._storage.get(h);
    if (typeof e == "string") {
      return e;
    } else {
      return null;
    }
  }
  async getForkedToken() {
    let e = await this._storage.get(k);
    if (typeof e == "string") {
      return e;
    } else {
      return null;
    }
  }
  get mightHaveServerCookies() {
    try {
      let e = s.get(l);
      return e !== undefined && e.length > 0;
    } catch (e) {
      console.error(e);
    }
    return false;
  }
  hasRefreshCredentials(e, t) {
    return this.mightHaveServerCookies || typeof e == "string" && typeof t == "string";
  }
  async hasRecoveryCredentials() {
    return typeof (await this.getForkedToken()) == "string";
  }
  tokenIsActive(e) {
    if (!e) {
      return false;
    }
    let t = r.parse(e);
    return t !== null && !t.isExpired(30);
  }
  async destroyLocalState(e) {
    let t = await Promise.all([this._storage.del(o), this._storage.del(a), this._storage.del(h), this._storage.del(this.GUEST_CREDENTIAL_STORAGE_KEY), this.clearForkedToken()]);
    if (e?.reason) {
      this.emit("storage_cleared", {
        reason: e.reason
      });
    }
    return t;
  }
  async storeToken(e) {
    if (typeof e == "string") {
      let t = await this._storage.get(o);
      await this._storage.put(o, e);
      if (!this._isUsingServerCookies) {
        let t = r.parse(e)?.expiration;
        s.set(n, e, {
          sameSite: "Strict",
          secure: true,
          expires: t ? new Date(t * 1000) : undefined
        });
      }
      if (t !== e) {
        this.emit("token_stored", {
          cookiesEnabled: this._isUsingServerCookies
        });
      }
    } else {
      let e = await this._storage.get(o);
      await this._storage.del(o);
      s.remove(n);
      if (e !== null) {
        this.emit("token_cleared", {
          reason: "set_with_non_string_value"
        });
      }
    }
  }
  async storeRefreshToken(e) {
    if (typeof e == "string") {
      await this._storage.put(a, e);
      if (!this._isUsingServerCookies) {
        s.set(l, "t", {
          sameSite: "Strict",
          secure: true,
          expires: 30
        });
        s.set(_, e, {
          sameSite: "Strict",
          secure: true,
          expires: 30
        });
      }
      this.emit("refresh_token_stored", {
        cookiesEnabled: this._isUsingServerCookies
      });
    } else {
      await this._storage.del(a);
      s.remove(_);
      s.remove(l);
      this.emit("refresh_token_cleared", {
        reason: "set_with_non_string_value"
      });
    }
  }
  async updateWithTokensResponse(e) {
    try {
      await i([this.storeToken(e.token), this.storeRefreshToken(e.refresh_token), this.storeIdentityToken(e.identity_token), this.processOAuthTokens(e.oauth_tokens)]);
    } catch (e) {
      this.emit("error_storing_tokens", String(e));
      throw e;
    }
  }
  async processOAuthTokens(e) {
    if (e) {
      this.emit("oauth_tokens_granted", e);
    }
  }
  async storeIdentityToken(e) {
    if (typeof e == "string") {
      let t = await this._storage.get(h);
      await this._storage.put(h, e);
      if (!this._isUsingServerCookies) {
        let t = r.parse(e)?.expiration;
        s.set(g, e, {
          sameSite: "Strict",
          secure: true,
          expires: t ? new Date(t * 1000) : undefined
        });
      }
      if (t !== e) {
        this.emit("identity_token_stored", {
          cookiesEnabled: this._isUsingServerCookies
        });
      }
    } else {
      let e = await this._storage.get(h);
      await this._storage.del(h);
      s.remove(g);
      if (e !== null) {
        this.emit("identity_token_cleared", {
          reason: "set_with_non_string_value"
        });
      }
    }
  }
  async getOrCreateGuestCredential() {
    let e = this._storage.get(this.GUEST_CREDENTIAL_STORAGE_KEY);
    if (e && typeof e == "string") {
      return e;
    }
    let s = t.encode(crypto.getRandomValues(new Uint8Array(32)));
    await this._storage.put(this.GUEST_CREDENTIAL_STORAGE_KEY, s);
    return s;
  }
  async clearForkedToken() {
    await this._storage.del(k);
  }
  constructor(e) {
    super();
    this._isUsingServerCookies = false;
    this._storage = e.storage;
    this.GUEST_CREDENTIAL_STORAGE_KEY = `privy:guest:${e.appId}`;
  }
}
d.events = ["storage_cleared", "token_cleared", "refresh_token_cleared", "identity_token_cleared", "forked_token_cleared", "token_stored", "refresh_token_stored", "identity_token_stored", "oauth_tokens_granted", "error_storing_tokens"];
export { d as Session };
