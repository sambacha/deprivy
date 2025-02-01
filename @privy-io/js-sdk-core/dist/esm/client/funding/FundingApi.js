import i from "./CoinbaseOnRampApi.mjs";
import m from "./MoonpayOnRampApi.mjs";
import "@privy-io/public-api";
import "fetch-retry";
import "../../Error.mjs";
import "../../funding/moonpay.mjs";
import "../../chains/arbitrum.mjs";
import "../../chains/base.mjs";
import "../../chains/celo.mjs";
import "../../chains/mainnet.mjs";
import "../../chains/optimism.mjs";
import "../../chains/polygon.mjs";
class o {
  constructor(o) {
    this.moonpay = new m(o);
    this.coinbase = new i(o);
  }
}
export { o as default };
