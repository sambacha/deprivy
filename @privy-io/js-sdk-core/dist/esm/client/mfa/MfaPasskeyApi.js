import { MfaPasskeyInit as t } from "@privy-io/public-api";
let i = class {
  async generateAuthenticationOptions(i) {
    return await this._privyInternal.fetch(t, {
      body: i
    });
  }
  constructor(t) {
    this._privyInternal = t;
  }
};
export { i as default };
