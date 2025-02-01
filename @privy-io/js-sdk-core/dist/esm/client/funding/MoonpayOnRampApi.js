import t from "fetch-retry";
import { MoonpayOnRampSign as r } from "@privy-io/public-api";
import { MoonpayApiError as a } from "../../Error.mjs";
import { MoonpayEnvironments as o } from "../../funding/moonpay.mjs";
import "../../chains/arbitrum.mjs";
import "../../chains/base.mjs";
import "../../chains/celo.mjs";
import "../../chains/mainnet.mjs";
import "../../chains/optimism.mjs";
import "../../chains/polygon.mjs";
let i = class {
  async sign(t) {
    return await this._privyInternal.fetch(r, {
      body: t
    });
  }
  async getTransactionStatus({
    transactionId: r,
    useSandbox: i
  }) {
    let {
      url: s,
      key: n
    } = o[i ? "sandbox" : "prod"];
    let e = await t(fetch, {
      retries: 3,
      retryDelay: 500
    })(`${s}/transactions/ext/${r}?apiKey=${n}`);
    if (!e.ok) {
      throw new a({
        error: `Failed to fetch transaction status for Transaction ${r}`,
        code: "failed_to_fetch_moonpay_transaction_status",
        response: e
      });
    }
    let m = await e.json();
    if (Array.isArray(m)) {
      return m.at(0);
    } else {
      return undefined;
    }
  }
  constructor(t) {
    this._privyInternal = t;
  }
};
export { i as default };
