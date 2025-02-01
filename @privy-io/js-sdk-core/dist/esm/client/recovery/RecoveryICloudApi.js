import { RecoveryOAuthInitICloud as t, RecoveryConfigurationICloud as i } from "@privy-io/public-api";
class r {
  async init(i) {
    return this._privyInternal.fetch(t, {
      body: {
        client_type: i
      }
    });
  }
  async getICloudConfiguration(t) {
    return this._privyInternal.fetch(i, {
      body: {
        client_type: t
      }
    });
  }
  constructor(t) {
    this._privyInternal = t;
  }
}
export { r as default };
