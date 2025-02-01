import { GetSmartWalletConfig as t } from "@privy-io/public-api";
class a {
  getConfig() {
    return this._privyInternal.config;
  }
  async getSmartWalletConfig() {
    this._smartWalletConfig ||= await this._privyInternal.fetch(t, {
      params: {
        app_id: this.appId
      }
    });
    return this._smartWalletConfig;
  }
  get appId() {
    return this._privyInternal.appId;
  }
  constructor(t) {
    this._privyInternal = t;
  }
}
export { a as default };
