import { jsx as o } from "react/jsx-runtime";
import m from "@heroicons/react/24/outline/GlobeAltIcon";
import { arbitrum as r } from "../../../connectors/chains/arbitrum.mjs";
import { avalanche as i } from "../../../connectors/chains/avalanche.mjs";
import { base as n } from "../../../connectors/chains/base.mjs";
import { celo as s } from "../../../connectors/chains/celo.mjs";
import { linea as t } from "../../../connectors/chains/linea.mjs";
import { mainnet as c } from "../../../connectors/chains/mainnet.mjs";
import { optimism as a } from "../../../connectors/chains/optimism.mjs";
import { polygon as e } from "../../../connectors/chains/polygon.mjs";
import { zora as p } from "../../../connectors/chains/zora.mjs";
import { Arbitrum as f } from "../icons/Arbitum.mjs";
import { Avalanche as j } from "../icons/Avalanche.mjs";
import { Base as l } from "../icons/Base.mjs";
import { Celo as h } from "../icons/Celo.mjs";
import { Linea as d } from "../icons/Linea.mjs";
import { Mainnet as u } from "../icons/Mainnnet.mjs";
import { Optimism as b } from "../icons/Optimism.mjs";
import { Polygon as A } from "../icons/Polygon.mjs";
import { Solana as g } from "../icons/Solana.mjs";
import { Zora as v } from "../icons/Zora.mjs";
let x = {
  [r.id]: f,
  [i.id]: j,
  [n.id]: l,
  [s.id]: h,
  [t.id]: d,
  [c.id]: u,
  [a.id]: b,
  [e.id]: A,
  [p.id]: v
};
const y = ({
  chainId: r,
  ...i
}) => {
  if (r === "solana") {
    /*#__PURE__*/return o(g, {
      ...i
    });
  }
  let n = x[r]; /*#__PURE__*/
  return o(n || m, {
    ...i
  });
};
export { y as NetworkIcon };
