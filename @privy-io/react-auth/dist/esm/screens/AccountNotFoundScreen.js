import { jsxs as o, Fragment as n, jsx as i } from "react/jsx-runtime";
import t from "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import { styled as r } from "styled-components";
import { PrimaryButton as c } from "../components/Button.mjs";
import { CircleBackground as e } from "../components/CircleBackground.mjs";
import { ModalHeader as s } from "../components/ModalHeader.mjs";
import m from "../components/layout/StackedContainer.mjs";
import { usePrivyInternal as a } from "../hooks/internal-context.mjs";
import { usePrivyModal as p } from "../hooks/modal-context.mjs";
import { ModalScreen as l } from "./index.mjs";
import { Grow as h } from "./LandingScreen/styles.mjs";
import "../components/Loader.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
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
import "../hooks/index.mjs";
import "../components/PrefetchedImage.mjs";
const j = () => {
  let {
    navigate: r,
    app: j,
    setModalData: f,
    data: u
  } = p();
  let {
    getAuthMeta: y,
    client: x
  } = a();
  /*#__PURE__*/
  return o(n, {
    children: [/*#__PURE__*/i(s, {}), /*#__PURE__*/o(d, {
      children: [/*#__PURE__*/i(m, {
        children: /*#__PURE__*/o("div", {
          children: [/*#__PURE__*/i(e, {
            color: "var(--privy-color-warn-light)"
          }), /*#__PURE__*/i(t, {
            height: 38,
            width: 38,
            strokeWidth: 2,
            stroke: "var(--privy-color-warn)"
          })]
        })
      }), /*#__PURE__*/o(g, {
        children: [/*#__PURE__*/i("h3", {
          children: "Account not found"
        }), /*#__PURE__*/o("p", {
          children: ["Please try logging in again or go to ", j.name, " to create an account."]
        })]
      }), /*#__PURE__*/i(h, {}), /*#__PURE__*/i(c, {
        onClick: () => {
          let o = y();
          f({
            ...u,
            login: {
              ...u?.login,
              ...(o?.disableSignup ? {
                disableSignup: true
              } : {})
            }
          });
          if (x?.authFlow) {
            x.authFlow = undefined;
          }
          r(l.LANDING);
        },
        children: "Try logging in again"
      })]
    })]
  });
};
let d = /*#__PURE__*/r.div.withConfig({
  displayName: "ConnectContainer",
  componentId: "sc-a3e74b9e-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;width:100%;padding-bottom:16px;margin-top:24px;"]);
let g = /*#__PURE__*/r.div.withConfig({
  displayName: "GappedContainer",
  componentId: "sc-a3e74b9e-1"
})(["display:flex;flex-direction:column;gap:8px;"]);
export { j as AccountNotFoundScreen };
