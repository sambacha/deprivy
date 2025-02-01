import { arbitrum as o } from "../../../connectors/chains/arbitrum.mjs";
import { base as r } from "../../../connectors/chains/base.mjs";
import { mainnet as i } from "../../../connectors/chains/mainnet.mjs";
import { optimism as m } from "../../../connectors/chains/optimism.mjs";
import { polygon as n } from "../../../connectors/chains/polygon.mjs";
import { PrivyClientError as t } from "../../../errors.mjs";
import "ofetch";
function s(o) {
  let r = e[o];
  if (!r) {
    throw new t(`Unsupported chainId: ${o} for Coinbase Onramp`);
  }
  return r;
}
let e = {
  [i.id]: "ethereum",
  [r.id]: "base",
  [m.id]: "optimism",
  [n.id]: "polygon",
  [o.id]: "arbitrum"
};
export { s as toCoinbaseBlockchainFromChainId };
