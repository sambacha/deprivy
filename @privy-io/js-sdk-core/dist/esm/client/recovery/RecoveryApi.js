import { RecoveryKeyMaterial as r } from "@privy-io/public-api";
import t from "./RecoveryICloudApi.mjs";
import i from "./RecoveryOAuthApi.mjs";
import "../../Error.mjs";
import "../../pkce.mjs";
import "jose";
class e {
  async getRecoveryKeyMaterial(t, i) {
    return this._privyInternal.fetch(r, {
      body: {
        chain_type: i
      },
      params: {
        address: t
      }
    });
  }
  constructor(r, e, o) {
    this._privyInternal = r;
    this.auth = new i(this._privyInternal, e, o);
    this.icloudAuth = new t(this._privyInternal);
  }
}
export { e as default };
