import { jsxs as o, jsx as n } from "react/jsx-runtime";
import { Menu as i, MenuButton as r, MenuItems as t, MenuItem as s } from "@headlessui/react";
import e from "@heroicons/react/24/outline/ChevronDownIcon";
import { styled as m } from "styled-components";
import { NetworkIcon as c } from "../../components/ui/wallet/NetworkIcon.mjs";
import { extractChainIdFromCAIP2 as a } from "../../lib/caip2.mjs";
import { Chip as p } from "./styles.mjs";
import "@heroicons/react/24/outline/GlobeAltIcon";
import "../../connectors/chains/arbitrum.mjs";
import "../../connectors/chains/avalanche.mjs";
import "../../connectors/chains/base.mjs";
import "../../connectors/chains/celo.mjs";
import "../../connectors/chains/linea.mjs";
import "../../connectors/chains/mainnet.mjs";
import "../../connectors/chains/optimism.mjs";
import "../../connectors/chains/polygon.mjs";
import "../../connectors/chains/zora.mjs";
import "../../components/ui/icons/Arbitum.mjs";
import "../../components/ui/icons/Avalanche.mjs";
import "../../components/ui/icons/Base.mjs";
import "../../components/ui/icons/Celo.mjs";
import "../../components/ui/icons/Linea.mjs";
import "../../components/ui/icons/Mainnnet.mjs";
import "../../components/ui/icons/Optimism.mjs";
import "../../components/ui/icons/Polygon.mjs";
import "../../components/ui/icons/Solana.mjs";
import "../../components/ui/icons/Zora.mjs";
var l = ({
  onSelectNetwork: m,
  networks: l,
  selected: u,
  ...j
}) => m ? /*#__PURE__*/o(i, {
  children: [/*#__PURE__*/n(r, {
    ...j,
    children: /*#__PURE__*/o(p, {
      children: [/*#__PURE__*/n(c, {
        chainId: u.id === "solana" ? "solana" : a(u.id)
      }), u.name, /*#__PURE__*/n(e, {})]
    })
  }), /*#__PURE__*/n(t, {
    transition: true,
    anchor: {
      to: "bottom end",
      gap: 4
    },
    as: d,
    children: l.map(({
      name: i,
      id: r
    }) => /*#__PURE__*/n(s, {
      children: /*#__PURE__*/o(h, {
        onClick: () => m(r),
        children: [/*#__PURE__*/n(c, {
          chainId: r
        }), i]
      })
    }, r))
  })]
}) : /*#__PURE__*/o(p, {
  ...j,
  children: [/*#__PURE__*/n(c, {
    chainId: u.id === "solana" ? "solana" : a(u.id)
  }), u.name]
});
let d = /*#__PURE__*/m.div.withConfig({
  displayName: "Items",
  componentId: "sc-e7829af4-0"
})(["border-radius:var(--privy-border-radius-sm);background-color:var(--privy-color-background);box-shadow:0px 2px 4px rgba(55,65,81,0.15);transition:opacity 150ms ease-in-out,transform 150ms linear;&[data-leave]{opacity:0;transform:scale(98%);}&[data-enter]{opacity:0;transform:scale(98%);}"]);
let h = /*#__PURE__*/m.button.withConfig({
  displayName: "Item",
  componentId: "sc-e7829af4-1"
})(["display:flex;align-items:center;gap:0.5rem;width:100%;padding:0.5rem;background-color:var(--privy-color-background);font-size:0.75rem;font-weight:500;line-height:1.125rem;&:hover{background-color:var(--privy-color-background-2);}svg{width:100%;max-width:1rem;max-height:1rem;}"]);
export { l as default };
