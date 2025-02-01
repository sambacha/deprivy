import { CoinbaseOnRampInit as t, CoinbaseOnRampStatus as r } from "@privy-io/public-api";
class a {
  async initOnRampSession(r) {
    return await this._privyInternal.fetch(t, {
      body: r
    });
  }
  async getStatus(t) {
    return await this._privyInternal.fetch(r, {
      query: {
        partnerUserId: t
      }
    });
  }
  constructor(t) {
    this._privyInternal = t;
  }
}
export { a as default };
