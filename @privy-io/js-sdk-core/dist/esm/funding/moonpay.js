import { arbitrum as r } from "../chains/arbitrum.mjs";
import { base as e } from "../chains/base.mjs";
import { celo as n } from "../chains/celo.mjs";
import { mainnet as t } from "../chains/mainnet.mjs";
import { optimism as i } from "../chains/optimism.mjs";
import { polygon as o } from "../chains/polygon.mjs";
const a = {
  prod: {
    url: "https://api.moonpay.com/v1",
    key: "pk_live_hirbpu0cVcLHrjktC9l7fbc9ctjv0SL"
  },
  sandbox: {
    url: "https://api.moonpay.com/v1",
    key: "pk_test_fqWjXZMSFwloh7orvJsRfjiUHXJqFzI"
  }
};
let c = new Set([t.id, r.id, e.id, o.id]);
let s = new Set([t.id, r.id, i.id, e.id, o.id]);
function u(r, e) {
  switch (e) {
    case "native-currency":
      return c.has(r);
    case "USDC":
      return s.has(r);
    default:
      console.warn("Unknown asset passed to MoonPay Onramp");
      return false;
  }
}
function m(i, a) {
  switch (i) {
    case r.id:
      if (a === "native-currency") {
        return "ETH_ARBITRUM";
      } else {
        return "USDC_ARBITRUM";
      }
    case 43114:
      return "AVAX_CCHAIN";
    case e.id:
      if (a === "native-currency") {
        return "ETH_BASE";
      } else {
        return "USDC_BASE";
      }
    case n.id:
      return "CELO_CELO";
    case o.id:
      if (a === "native-currency") {
        return "MATIC_POLYGON";
      } else {
        return "USDC_POLYGON";
      }
    case t.id:
      if (a === "native-currency") {
        return "ETH_ETHEREUM";
      } else {
        return "USDC_ETHEREUM";
      }
    default:
      console.warn(`Chain ${i} not supported by Moonpay, defaulting to Ethereum mainnet`);
      return "ETH_ETHEREUM";
  }
}
function d(r) {
  switch (r) {
    case "card":
    case "payment-request":
      return "credit_debit_card";
    default:
      throw Error(`Unsupported Moonpay funding method ${r}`);
  }
}
export { a as MoonpayEnvironments, m as chainToMoonpayCurrency, d as fundingMethodToMoonpayPaymentMethod, u as isSupportedChainIdForMoonpay };
