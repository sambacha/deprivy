import { jsx as i, jsxs as o, Fragment as n } from "react/jsx-runtime";
import m from "@heroicons/react/24/outline/WalletIcon";
import { styled as r } from "styled-components";
import { Chip as s } from "../chips/Chip.mjs";
import { Value as c } from "../typography/Value.mjs";
import { NetworkIcon as t } from "./NetworkIcon.mjs";
import { Box as e } from "./shared.mjs";
import "../animation/LoadingSkeleton.mjs";
import "@heroicons/react/24/outline/GlobeAltIcon";
import "../../../connectors/chains/arbitrum.mjs";
import "../../../connectors/chains/avalanche.mjs";
import "../../../connectors/chains/base.mjs";
import "../../../connectors/chains/celo.mjs";
import "../../../connectors/chains/linea.mjs";
import "../../../connectors/chains/mainnet.mjs";
import "../../../connectors/chains/optimism.mjs";
import "../../../connectors/chains/polygon.mjs";
import "../../../connectors/chains/zora.mjs";
import "../icons/Arbitum.mjs";
import "../icons/Avalanche.mjs";
import "../icons/Base.mjs";
import "../icons/Celo.mjs";
import "../icons/Linea.mjs";
import "../icons/Mainnnet.mjs";
import "../icons/Optimism.mjs";
import "../icons/Polygon.mjs";
import "../icons/Solana.mjs";
import "../icons/Zora.mjs";
const a = ({
  balance: o,
  className: n,
  chain: m
}) => /*#__PURE__*/i(e, {
  className: n,
  $state: undefined,
  children: /*#__PURE__*/i(p, {
    balance: o,
    chain: m
  })
});
const p = ({
  balance: r,
  chain: t
}) => /*#__PURE__*/o(n, {
  children: [/*#__PURE__*/o(l, {
    children: [/*#__PURE__*/i(d, {
      chainId: "id" in t ? t.id : "solana"
    }), /*#__PURE__*/i(c, {
      children: t.name
    })]
  }), /*#__PURE__*/o(s, {
    isLoading: false,
    isPulsing: false,
    color: "gray",
    children: [/*#__PURE__*/i(h, {
      children: /*#__PURE__*/i(m, {})
    }), r]
  })]
});
let l = /*#__PURE__*/r.div.withConfig({
  displayName: "Container",
  componentId: "sc-6d3c340d-0"
})(["display:flex;align-items:center;"]);
let h = /*#__PURE__*/r.div.withConfig({
  displayName: "IconContainer",
  componentId: "sc-6d3c340d-1"
})(["height:0.75rem;width:0.75rem;margin-right:0.2rem;"]);
let d = /*#__PURE__*/r(t).withConfig({
  displayName: "StyledNetworkIcon",
  componentId: "sc-6d3c340d-2"
})(["height:1.25rem;width:1.25rem;display:inline-block;margin-right:0.5rem;border-radius:4px;"]);
export { a as NetworkBalanceCard, p as NetworkBalanceCardContent };
