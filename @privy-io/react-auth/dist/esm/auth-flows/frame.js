import { PrivyClientError as t, formatApiError as s } from "../errors.mjs";
import { initFarcasterV2Path as i, authenticateFarcasterV2Path as e } from "../paths.mjs";
import "ofetch";
class a {
  async init() {
    if (!this.api) {
      throw new t("Auth flow has no API instance");
    }
    let {
      nonce: s
    } = await this.api.post(i, {});
    return {
      nonce: s
    };
  }
  async authenticate() {
    if (!this.message || !this.signature || !this.fid) {
      throw new t("Auth flow has no message, signature, or fid");
    }
    if (!this.api) {
      throw new t("Auth flow has no API instance");
    }
    try {
      let s = await this.api.post(e, {
        message: this.message,
        signature: this.signature,
        fid: this.fid
      });
      if (!s) {
        throw new t("No response from authentication");
      }
      return s;
    } catch (t) {
      throw s(t);
    }
  }
  async link() {
    throw Error("Not implemented");
  }
  setAuthData({
    message: t,
    signature: s,
    fid: i
  }) {
    this.message = t;
    this.signature = s;
    this.fid = i;
  }
  constructor() {
    this.meta = {};
  }
}
export { a as FarcasterFramesFlow };
