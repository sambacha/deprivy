import { jsxs as o, Fragment as n, jsx as i } from "react/jsx-runtime";
import { styled as t } from "styled-components";
import { PrimaryButton as r } from "../components/Button.mjs";
import { BlobbyFooter as c } from "../components/ModalFooter.mjs";
import { ModalHeader as s } from "../components/ModalHeader.mjs";
import { usePrivyModal as e } from "../hooks/modal-context.mjs";
import { AlertCircle as m } from "../svg/alert-circle.mjs";
import { ModalScreen as a } from "./index.mjs";
import "../components/Loader.mjs";
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
import "../svg/protected-by-privy.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../hooks/internal-context.mjs";
import "../hooks/index.mjs";
import "../components/PrefetchedImage.mjs";
const p = () => {
  let {
    navigate: t
  } = e(); /*#__PURE__*/
  return o(n, {
    children: [/*#__PURE__*/i(s, {}), /*#__PURE__*/o(l, {
      children: [/*#__PURE__*/i(h, {
        children: /*#__PURE__*/i(m, {})
      }), /*#__PURE__*/o(j, {
        children: [/*#__PURE__*/i("h3", {
          children: "Unable to sign in"
        }), /*#__PURE__*/i("p", {
          children: "This application has reached its user limit and cannot sign in new users."
        })]
      }), /*#__PURE__*/i(r, {
        onClick: () => {
          t(a.LANDING);
        },
        children: "Go back"
      })]
    }), /*#__PURE__*/i(c, {})]
  });
};
let l = /*#__PURE__*/t.div.withConfig({
  displayName: "ConnectContainer",
  componentId: "sc-fc448c87-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;width:100%;padding-top:8px;padding-bottom:32px;"]);
let h = /*#__PURE__*/t.div.withConfig({
  displayName: "IconContainer",
  componentId: "sc-fc448c87-1"
})(["display:flex;align-items:center;justify-content:center;height:72px;aspect-ratio:1;color:var(--privy-color-error);background-color:var(--privy-color-error-light);border-radius:50%;"]);
let j = /*#__PURE__*/t.div.withConfig({
  displayName: "GappedContainer",
  componentId: "sc-fc448c87-2"
})(["display:flex;flex-direction:column;gap:8px;"]);
export { p as UserLimitReachedScreen };
