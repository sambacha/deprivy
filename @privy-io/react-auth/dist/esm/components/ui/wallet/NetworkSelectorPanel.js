import { jsxs as o, jsx as i } from "react/jsx-runtime";
import { Menu as n, MenuButton as r, MenuItems as t, MenuItem as e } from "@headlessui/react";
import a from "@heroicons/react/24/outline/ChevronDownIcon";
import { styled as s } from "styled-components";
import { NetworkBalanceCardContent as m } from "./NetworkBalanceCard.mjs";
import { BoxStyles as c } from "./shared.mjs";
import "@heroicons/react/24/outline/WalletIcon";
import "../chips/Chip.mjs";
import "../animation/LoadingSkeleton.mjs";
import "../typography/Value.mjs";
import "./NetworkIcon.mjs";
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
const p = ({
  options: a,
  onSelect: s,
  selected: c,
  className: p
}) => /*#__PURE__*/o(n, {
  as: l,
  children: [/*#__PURE__*/o(r, {
    as: j,
    children: [/*#__PURE__*/i(m, {
      balance: c.balance,
      chain: c.chain
    }), /*#__PURE__*/i(b, {
      height: 16
    })]
  }), /*#__PURE__*/i(t, {
    as: d,
    className: p,
    children: a.map((o, n) => /*#__PURE__*/i(e, {
      as: h,
      onClick: () => s(n),
      children: /*#__PURE__*/i(m, {
        balance: o.balance,
        chain: o.chain
      })
    }, n))
  })]
});
let l = /*#__PURE__*/s.div.withConfig({
  displayName: "Wrapper",
  componentId: "sc-7924b61-0"
})(["width:100%;position:relative;"]);
let d = /*#__PURE__*/s.div.withConfig({
  displayName: "Popover",
  componentId: "sc-7924b61-1"
})(["width:100%;margin-top:0.5rem;position:absolute;background-color:var(--privy-color-background);border-radius:var(--privy-border-radius-md);overflow-x:hidden;overflow-y:auto;box-shadow:0px 1px 2px 0px rgba(16,24,40,0.05);max-height:11.75rem;&&{border:solid 1px var(--privy-color-foreground-4);}z-index:1;"]);
let h = /*#__PURE__*/s.button.withConfig({
  displayName: "Button",
  componentId: "sc-7924b61-2"
})(["width:100%;display:flex;justify-content:space-between;&&{padding:1rem;}:not(:last-child){border-bottom:solid 1px var(--privy-color-foreground-4);}:hover{background:var(--privy-color-background-2);}"]);
let b = /*#__PURE__*/s(a).withConfig({
  displayName: "StyledChevronIcon",
  componentId: "sc-7924b61-3"
})(["height:1rem;margin-left:0.5rem;"]);
let j = /*#__PURE__*/s.button.withConfig({
  displayName: "StyledMenuButton",
  componentId: "sc-7924b61-4"
})(["", " span{margin-left:auto;}", "{transition:rotate 100ms ease-in;}&[aria-expanded='true']{", "{rotate:-180deg;}}"], c, b, b);
export { p as NetworkSelectorPanel };
