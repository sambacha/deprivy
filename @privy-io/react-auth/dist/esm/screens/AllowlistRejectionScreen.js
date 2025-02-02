import { jsxs as o, Fragment as n, jsx as i } from "react/jsx-runtime";
import { styled as t } from "styled-components";
import { PrimaryButton as r } from "../components/Button.mjs";
import { CircleBorder as e } from "../components/CircleBorder.mjs";
import { ModalHeader as c } from "../components/ModalHeader.mjs";
import s from "../components/layout/StackedContainer.mjs";
import { usePrivyModal as m } from "../hooks/modal-context.mjs";
import { LockClosed as a } from "../svg/lock-closed.mjs";
import { ModalScreen as p } from "./index.mjs";
import "../components/Loader.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../configuration/context.mjs";
import "react";
import "../config.mjs";
import "../configuration/defaultClientConfig.mjs";
import "../constants.mjs";
import "../configuration/login-methods.mjs";
import "../configuration/wallets.mjs";
import "../connectors/chains/index.mjs";
import "../connectors/chains/arbitrum.mjs";
import "../connectors/chains/arbitrumSepolia.mjs";
import "../connectors/chains/avalanche.mjs";
import "../connectors/chains/avalancheFuji.mjs";
import "../connectors/chains/base.mjs";
import "../connectors/chains/baseSepolia.mjs";
import "../connectors/chains/berachainArtio.mjs";
import "../connectors/chains/celo.mjs";
import "../connectors/chains/celoAlfajores.mjs";
import "../connectors/chains/filecoin.mjs";
import "../connectors/chains/filecoinCalibration.mjs";
import "../connectors/chains/garnetHolesky.mjs";
import "../connectors/chains/holesky.mjs";
import "../connectors/chains/linea.mjs";
import "../connectors/chains/lineaTestnet.mjs";
import "../connectors/chains/lukso.mjs";
import "../connectors/chains/mainnet.mjs";
import "../connectors/chains/optimism.mjs";
import "../connectors/chains/optimismSepolia.mjs";
import "../connectors/chains/polygon.mjs";
import "../connectors/chains/polygonAmoy.mjs";
import "../connectors/chains/redstone.mjs";
import "../connectors/chains/sepolia.mjs";
import "../connectors/chains/zora.mjs";
import "../connectors/chains/zoraSepolia.mjs";
import "../connectors/chains/zoraTestnet.mjs";
import "../connectors/chains/utils.mjs";
import "../lib/solana/index.mjs";
import "../theme.mjs";
import "tinycolor2";
import "../lib/cybr53.mjs";
import "../hooks/internal-context.mjs";
import "../hooks/index.mjs";
import "../components/PrefetchedImage.mjs";
const l = () => {
  let {
    navigate: t,
    app: l
  } = m();
  let d = l?.allowlistConfig.errorTitle || "You don't have access to this app";
  let f = l?.allowlistConfig.errorDetail || "Have you been invited?";
  let g = l?.allowlistConfig.errorCtaText || "Try another account";
  /*#__PURE__*/
  return o(n, {
    children: [/*#__PURE__*/i(c, {}), /*#__PURE__*/o(h, {
      children: [/*#__PURE__*/i(s, {
        children: /*#__PURE__*/o("div", {
          children: [/*#__PURE__*/i(e, {}), /*#__PURE__*/i(a, {
            style: {
              width: "38px",
              height: "38px",
              strokeWidth: "1",
              stroke: "var(--privy-color-accent)",
              fill: "var(--privy-color-accent)"
            }
          })]
        })
      }), /*#__PURE__*/o(j, {
        children: [/*#__PURE__*/i(typeof d == "string" ? "h3" : n, {
          children: d
        }), /*#__PURE__*/i(typeof f == "string" ? "p" : n, {
          children: f
        })]
      }), l?.allowlistConfig.errorCtaLink ? /*#__PURE__*/i(r, {
        as: "a",
        href: l.allowlistConfig.errorCtaLink,
        children: g
      }) : /*#__PURE__*/i(r, {
        onClick: () => {
          t(p.LANDING);
        },
        children: g
      })]
    })]
  });
};
let h = /*#__PURE__*/t.div.withConfig({
  displayName: "ConnectContainer",
  componentId: "sc-ed4ecf-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;width:100%;padding-bottom:16px;"]);
let j = /*#__PURE__*/t.div.withConfig({
  displayName: "GappedContainer",
  componentId: "sc-ed4ecf-1"
})(["display:flex;flex-direction:column;gap:8px;"]);
export { l as AllowlistRejectionScreen };
