import { PrivyClientError as e } from "../../Error.mjs";
import t from "./MfaPasskeyApi.mjs";
import i from "./MfaSmsApi.mjs";
import "@privy-io/public-api";
class r {
  setProxy(e) {
    this.proxy = e;
  }
  async getAccessToken() {
    let t = await this.privyInternal.getAccessToken();
    if (!t) {
      throw new e({
        error: "Missing access token",
        code: "attempted_rpc_call_before_logged_in"
      });
    }
    return t;
  }
  async verifyMfa() {
    if (!this.proxy) {
      throw new e({
        error: "Embedded wallet proxy not initialized",
        code: "embedded_wallet_webview_not_loaded"
      });
    }
    return await this.proxy.verifyMfa({
      accessToken: await this.getAccessToken()
    });
  }
  async initEnrollMfa(t) {
    if (!this.proxy) {
      throw new e({
        error: "Embedded wallet proxy not initialized",
        code: "embedded_wallet_webview_not_loaded"
      });
    }
    return await this.proxy.initEnrollMfa({
      ...t,
      accessToken: await this.getAccessToken()
    });
  }
  async submitEnrollMfa(t) {
    if (!this.proxy) {
      throw new e({
        error: "Embedded wallet proxy not initialized",
        code: "embedded_wallet_webview_not_loaded"
      });
    }
    let i = await this.proxy.submitEnrollMfa({
      ...t,
      accessToken: await this.getAccessToken()
    });
    await this.privyInternal.refreshSession();
    return i;
  }
  async unenrollMfa(t) {
    if (!this.proxy) {
      throw new e({
        error: "Embedded wallet proxy not initialized",
        code: "embedded_wallet_webview_not_loaded"
      });
    }
    let i = await this.proxy.unenrollMfa({
      method: t,
      accessToken: await this.getAccessToken()
    });
    await this.privyInternal.refreshSession();
    return i;
  }
  async clearMfa(t) {
    if (!this.proxy) {
      throw new e({
        error: "Embedded wallet proxy not initialized",
        code: "embedded_wallet_webview_not_loaded"
      });
    }
    return await this.proxy.clearMfa(t);
  }
  constructor(e, r) {
    this.proxy = r;
    this.privyInternal = e;
    this.sms = new i(e);
    this.passkey = new t(e);
  }
}
export { r as default };
