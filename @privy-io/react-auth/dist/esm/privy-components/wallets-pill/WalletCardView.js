import { jsxs as o, jsx as t } from "react/jsx-runtime";
import { Disclosure as n, DisclosureButton as i, DisclosurePanel as e } from "@headlessui/react";
import s from "@heroicons/react/24/outline/ChevronDownIcon";
import { styled as r } from "styled-components";
import { Column as m } from "../../components/ui/layout/Column.mjs";
import { Rows as c } from "../../components/ui/layout/Row.mjs";
import { Address as a } from "../../components/ui/wallet/Address.mjs";
import { NetworkIcon as p } from "../../components/ui/wallet/NetworkIcon.mjs";
import { useAppConfig as l } from "../../configuration/context.mjs";
import { useFormattedBalances as d } from "../../hooks/useFormattedBalances.mjs";
import { extractChainIdFromCAIP2 as h } from "../../lib/caip2.mjs";
import j from "./AssetBalance.mjs";
import u from "./NetworkPicker.mjs";
import { WalletIcon as f, Chip as g } from "./styles.mjs";
import "@heroicons/react/24/outline/CheckIcon";
import "@heroicons/react/24/outline/Square2StackIcon";
import "react";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
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
import "../../config.mjs";
import "../../configuration/defaultClientConfig.mjs";
import "../../constants.mjs";
import "../../configuration/login-methods.mjs";
import "../../configuration/wallets.mjs";
import "../../connectors/chains/index.mjs";
import "../../connectors/chains/arbitrumSepolia.mjs";
import "../../connectors/chains/avalancheFuji.mjs";
import "../../connectors/chains/baseSepolia.mjs";
import "../../connectors/chains/berachainArtio.mjs";
import "../../connectors/chains/celoAlfajores.mjs";
import "../../connectors/chains/filecoin.mjs";
import "../../connectors/chains/filecoinCalibration.mjs";
import "../../connectors/chains/garnetHolesky.mjs";
import "../../connectors/chains/holesky.mjs";
import "../../connectors/chains/lineaTestnet.mjs";
import "../../connectors/chains/lukso.mjs";
import "../../connectors/chains/optimismSepolia.mjs";
import "../../connectors/chains/polygonAmoy.mjs";
import "../../connectors/chains/redstone.mjs";
import "../../connectors/chains/sepolia.mjs";
import "../../connectors/chains/zoraSepolia.mjs";
import "../../connectors/chains/zoraTestnet.mjs";
import "../../connectors/chains/utils.mjs";
import "../../lib/solana/index.mjs";
import "../../theme.mjs";
import "tinycolor2";
import "../../lib/cybr53.mjs";
import "@solana/web3.js";
import "../../connectors/isBaseConnectedEthereumWallet.mjs";
import "../../connectors/solana/index.mjs";
import "../../hooks/index.mjs";
import "../../types.mjs";
import "../../connectors/base.mjs";
import "eventemitter3";
import "../../connectors/errors.mjs";
import "@privy-io/js-sdk-core";
import "../../lib/erc20/actions/getErc20TokenInfo.mjs";
import "../../lib/erc20/formatErc20TokenAmount.mjs";
import "../../lib/wallets/actions/getErc20Balance.mjs";
import "./state.mjs";
import "zustand";
import "zustand/shallow";
import "zustand/traditional";
import "../../storage.mjs";
import "../../hooks/internal-context.mjs";
import "@heroicons/react/24/outline/CurrencyDollarIcon";
const y = ({
  wallet: i,
  onSelectWallet: e,
  assets: r,
  networks: m,
  showNetworks: u,
  showBalances: g,
  ...y
}) => {
  let {
    chains: A
  } = l();
  let {
    balances: z,
    isLoading: B,
    totalUsdBalance: E
  } = d({
    wallet: i,
    enabled: g ?? false,
    assets: r
  });
  let P = i.type === "ethereum" ? A.find(o => o.id === h(i.chainId)) : undefined;
  let T = i.type === "ethereum" ? P?.name || "Ethereum" : "Solana";
  /*#__PURE__*/
  return o(w, {
    ...y,
    children: [/*#__PURE__*/o(k, {
      as: e ? "button" : undefined,
      onClick: e,
      children: [i.meta.icon && /*#__PURE__*/t(f, {
        src: i.meta.icon
      }), /*#__PURE__*/o(b, {
        children: [/*#__PURE__*/t(I, {
          children: i.meta.name
        }), /*#__PURE__*/t(C, {
          children: /*#__PURE__*/t(a, {
            address: i.address,
            showCopyIcon: true
          })
        })]
      })]
    }), u ? /*#__PURE__*/t(S, {
      onSelectNetwork: i.type === "solana" ? undefined : o => i.switchChain(Number(o)),
      networks: i.type === "solana" ? [] : m,
      selected: {
        id: i.type === "ethereum" ? i.chainId : "solana",
        name: T
      }
    }) : /*#__PURE__*/o(N, {
      onClick: e,
      children: [/*#__PURE__*/t(p, {
        chainId: i.type === "ethereum" ? P?.id ?? 0 : "solana"
      }), T]
    }), g && /*#__PURE__*/o(n, {
      children: [/*#__PURE__*/o(v, {
        as: v,
        children: [/*#__PURE__*/o("span", {
          children: ["Balance:", " ", /*#__PURE__*/o("em", {
            style: B ? {
              color: "transparent",
              textShadow: "0 0 5px rgba(0,0,0,0.5)"
            } : {},
            children: ["$", E.toFixed(2)]
          })]
        }), E > 0 && /*#__PURE__*/t(s, {})]
      }), E > 0 && /*#__PURE__*/t(x, {
        transition: true,
        children: /*#__PURE__*/t(c, {
          children: z.map(({
            amount: o,
            symbol: n,
            icon: i
          }, e) => /*#__PURE__*/t(j, {
            amount: o,
            symbol: n,
            icon: i
          }, e))
        })
      })]
    })]
  });
};
let w = /*#__PURE__*/r.section.withConfig({
  displayName: "Container",
  componentId: "sc-202c79f3-0"
})(["width:100%;padding:1rem;border-radius:var(--privy-border-radius-lg);background:var(--privy-color-background-2);position:relative;transition:background 200ms ease-in-out;overflow:hidden;&:hover{background:var(--privy-color-background-3);}"]);
let b = /*#__PURE__*/r(m).withConfig({
  displayName: "StyledColumn",
  componentId: "sc-202c79f3-1"
})(["align-items:start;"]);
let k = /*#__PURE__*/r.div.withConfig({
  displayName: "Info",
  componentId: "sc-202c79f3-2"
})(["width:100%;display:flex;gap:1rem;align-items:center;"]);
let v = /*#__PURE__*/r(i).withConfig({
  displayName: "Header",
  componentId: "sc-202c79f3-3"
})(["width:100%;display:flex;justify-content:space-between;align-items:center;padding-top:0.5rem;em{font-weight:600;font-style:normal;}svg{width:1rem;stroke-width:2;transition:transform 250ms ease;}&[aria-expanded='true']{svg{transform:rotateZ(180deg);}}"]);
let C = /*#__PURE__*/r.div.withConfig({
  displayName: "StyledAddress",
  componentId: "sc-202c79f3-4"
})(["color:var(--privy-color-foreground-2);"]);
const I = /*#__PURE__*/r.span.withConfig({
  displayName: "WalletName",
  componentId: "sc-202c79f3-5"
})(["font-size:0.875rem;font-weight:500;line-height:1.375rem;"]);
let N = /*#__PURE__*/r(g).withConfig({
  displayName: "StyledCurrentNetwork",
  componentId: "sc-202c79f3-6"
})(["position:absolute;right:1rem;top:2rem;transform:translate3d(0,-50%,0);cursor:pointer;"]);
let S = /*#__PURE__*/r(u).withConfig({
  displayName: "StyledNetworkPicker",
  componentId: "sc-202c79f3-7"
})(["position:absolute;right:1rem;top:2rem;transform:translate3d(0,-50%,0);"]);
let x = /*#__PURE__*/r(e).withConfig({
  displayName: "StyledDisclosurePanel",
  componentId: "sc-202c79f3-8"
})(["interpolate-size:allow-keywords;padding-top:0.5rem;height:auto;opacity:1;transition:height 250ms ease,opacity 250ms ease;&[data-leave]{height:0;opacity:0;}&[data-enter]{height:0;opacity:0;}"]);
export { y as WalletCardView, I as WalletName };
