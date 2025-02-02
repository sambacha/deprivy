import { isMobile as t, isIOS as e } from "react-device-detect";
import { openHref as i } from "../connectors/walletconnect-registry.mjs";
import { RunEffectOnce as n } from "../effect.mjs";
import { PrivyClientError as s, formatApiError as a } from "../errors.mjs";
import { farcasterAuthenticatePath as o, farcasterLinkPath as h, farcasterInitPath as r, farcasterStatusPath as c } from "../paths.mjs";
import "../storage.mjs";
import "../utils/index.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../utils/eth/getPublicClient.mjs";
import "viem";
import "ofetch";
class l {
  get meta() {
    return this._meta;
  }
  async authenticate() {
    if (!this.api) {
      throw new s("Auth flow has no API instance");
    }
    if (!this.meta.channelToken) {
      throw new s("Auth flow must be initialized first");
    }
    try {
      let t = await this.api.post(o, {
        channel_token: this.meta.channelToken,
        message: this.message,
        signature: this.signature,
        fid: this.fid,
        mode: this.meta.disableSignup ? "no-signup" : "login-or-sign-up"
      });
      if (!t) {
        throw new s("No response from authentication");
      }
      return t;
    } catch (t) {
      throw a(t);
    }
  }
  async link() {
    if (!this.api) {
      throw new s("Auth flow has no API instance");
    }
    try {
      return await this.api.post(h, {
        channel_token: this.meta.channelToken,
        message: this.message,
        signature: this.signature,
        fid: this.fid
      });
    } catch (t) {
      throw a(t);
    }
  }
  async _startChannelOnce() {
    if (!this.api) {
      throw new s("Auth flow has no API instance");
    }
    let n = await this.api.post(r, {
      token: this.captchaToken
    });
    if (t && !e && n.connect_uri) {
      i(n.connect_uri, "_blank");
    }
    this._meta = {
      ...this._meta,
      connectUri: n.connect_uri,
      channelToken: n.channel_token
    };
  }
  async initializeFarcasterConnect() {
    if (!this.api) {
      throw new s("Auth flow has no API instance");
    }
    await this.startChannelOnce.execute();
  }
  async _pollForReady() {
    if (!this.api) {
      throw new s("Auth flow has no API instance");
    }
    if (!this.meta.channelToken) {
      throw new s("Auth flow must be initialized first");
    }
    let t = await this.api.get(c, {
      headers: {
        "farcaster-channel-token": this.meta.channelToken
      }
    });
    return t.state === "completed" && (this.message = t.message, this.signature = t.signature, this.fid = t.fid, true);
  }
  constructor(t, e = false) {
    this._meta = {
      disableSignup: false
    };
    this.captchaToken = t;
    this.startChannelOnce = new n(this._startChannelOnce.bind(this));
    this.pollForReady = new n(this._pollForReady.bind(this));
    this._meta.disableSignup = e;
  }
}
export { l as FarcasterFlow };
