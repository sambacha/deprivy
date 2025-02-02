import { arbitrum as e } from "../chains/arbitrum.mjs";
import { base as s } from "../chains/base.mjs";
import { mainnet as a } from "../chains/mainnet.mjs";
import { optimism as t } from "../chains/optimism.mjs";
import { polygon as r } from "../chains/polygon.mjs";
let n = new Set([a.id, s.id, t.id, r.id, e.id]);
let i = new Set([a.id, s.id, r.id, t.id]);
let c = {
  buy: "CARD",
  send: "CRYPTO_ACCOUNT"
};
let o = {
  USDC: "2b92315d-eab7-5bef-84fa-089a131333f5",
  ETH: "d85dce9b-5b73-5c3c-8978-522ce1d1c1b4",
  BTC: "5b71fc48-3dd3-540c-809b-f8c94d0e68b5",
  SOL: "4f039497-3af8-5bb3-951c-6df9afa9be1c",
  POL: "026bcc1e-9163-591c-a709-34dd18b2e7a1"
};
let d = {
  [a.id]: "ethereum",
  [s.id]: "base",
  [t.id]: "optimism",
  [r.id]: "polygon",
  [e.id]: "arbitrum"
};
function m({
  input: e,
  amount: s,
  blockchain: a,
  asset: t,
  experience: r
}) {
  let n = new URL("https://pay.coinbase.com/buy/select-asset");
  n.searchParams.set("appId", e.app_id);
  n.searchParams.set("sessionToken", e.session_token);
  n.searchParams.set("defaultExperience", r);
  n.searchParams.set("presetCryptoAmount", s.startsWith(".") ? `0${s}` : s);
  n.searchParams.set("defaultNetwork", a);
  n.searchParams.set("defaultPaymentMethod", c[r]);
  n.searchParams.set("defaultAsset", o[t]);
  n.searchParams.set("partnerUserId", e.partner_user_id);
  return {
    url: n
  };
}
const p = (e, s) => {
  switch (s) {
    case "native-currency":
      return n.has(e);
    case "USDC":
      return i.has(e);
    default:
      console.warn("Unknown asset passed to Coinbase Onramp");
      return false;
  }
};
function u(e) {
  return d[e];
}
function b(e, s) {
  if (s === "USDC") {
    return "USDC";
  } else if (e === r.id) {
    return "POL";
  } else {
    return "ETH";
  }
}
export { m as getCoinbaseOnRampUrl, p as isSupportedChainIdForCoinbaseOnramp, b as toCoinbaseAssetId, u as toCoinbaseBlockchainFromChainId };
