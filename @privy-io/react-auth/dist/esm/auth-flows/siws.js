import { RunEffectOnce as e } from "../effect.mjs";
import { PrivyClientError as t, formatApiError as s } from "../errors.mjs";
import { prepareSiwsMessageWithNonce as i } from "../lib/siws.mjs";
import "ofetch";
class n {
  get meta() {
    return {
      connectorType: this.wallet.connectorType,
      walletClientType: this.wallet.walletClientType,
      disableSignup: this._meta.disableSignup
    };
  }
  async authenticate() {
    if (!this.client) {
      throw new t("SiwsFlow has no client instance");
    }
    try {
      let {
        message: e,
        signature: t
      } = await this.sign();
      return await this.client.authenticateWithSiwsInternal({
        message: e,
        signature: t,
        walletClientType: this.wallet.walletClientType,
        connectorType: this.wallet.connectorType,
        mode: this.meta.disableSignup ? "no-signup" : "login-or-sign-up"
      });
    } catch (e) {
      throw s(e);
    }
  }
  async link() {
    if (!this.client) {
      throw new t("SiwsFlow has no client instance");
    }
    try {
      let {
        message: e,
        signature: t
      } = await this.sign();
      return await this.client.linkWithSiwsInternal({
        message: e,
        signature: t,
        walletClientType: this.wallet.walletClientType,
        connectorType: this.wallet.connectorType
      });
    } catch (e) {
      throw s(e);
    }
  }
  async sign() {
    if (!this.client) {
      throw new t("SiwsFlow has no client instance");
    }
    await this.buildMessage();
    if (!this.preparedMessage) {
      throw new t("Could not prepare SIWS message");
    }
    if (!this.wallet.signMessage) {
      throw new t("Wallet does not support signMessage");
    }
    let e = await this.wallet.signMessage(Buffer.from(this.preparedMessage));
    return {
      message: this.preparedMessage,
      signature: Buffer.from(e).toString("base64")
    };
  }
  async _getNonceOnce() {
    if (!this.client) {
      throw new t("SiwsFlow has no client instance");
    }
    return await this.client.generateSiwsNonce({
      address: this.wallet.address,
      captchaToken: this.captchaToken
    });
  }
  async buildMessage() {
    if (!this.client) {
      throw new t("SiwsFlow has no client instance");
    }
    let e = this.wallet.address;
    this.nonce ||= await this.getNonceOnce.execute();
    this.preparedMessage = i({
      address: e,
      nonce: this.nonce
    });
    return this.preparedMessage;
  }
  constructor(t, s, i, n = false) {
    this._meta = {
      disableSignup: false
    };
    this.getNonceOnce = new e(this._getNonceOnce.bind(this));
    this.wallet = t;
    this.captchaToken = i;
    this.client = s;
    this._meta.disableSignup = n;
  }
}
export { n as SiwsFlow };
