import { arbitrum as n } from "../../../connectors/chains/arbitrum.mjs";
import { base as o } from "../../../connectors/chains/base.mjs";
import { mainnet as s } from "../../../connectors/chains/mainnet.mjs";
import { optimism as r } from "../../../connectors/chains/optimism.mjs";
import { polygon as i } from "../../../connectors/chains/polygon.mjs";
let t = new Set([s.id, o.id, r.id, i.id, n.id]);
let e = new Set([s.id, o.id, i.id, r.id]);
const c = (n, o) => {
  switch (o) {
    case "native-currency":
      return t.has(n);
    case "USDC":
      return e.has(n);
    default:
      console.warn("Unknown asset passed to Coinbase Onramp");
      return false;
  }
};
export { c as isSupportedChainIdForCoinbaseOnramp };
