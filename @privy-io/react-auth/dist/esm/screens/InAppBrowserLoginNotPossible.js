import { jsxs as o, Fragment as n, jsx as t } from "react/jsx-runtime";
import i from "@heroicons/react/24/outline/ArrowTopRightOnSquareIcon";
import { styled as r } from "styled-components";
import { PrimaryButton as e } from "../components/Button.mjs";
import { BottomPusherContainer as s, RefactorSpacerBottom as c } from "../components/Layouts.mjs";
import { BlobbyFooter as m } from "../components/ModalFooter.mjs";
import { ModalHeader as a } from "../components/ModalHeader.mjs";
import { PaddedScreenHeader as p } from "../components/ScreenHeader.mjs";
import { usePrivyInternal as l } from "../hooks/internal-context.mjs";
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
import "../hooks/index.mjs";
const h = () => {
  let {
    closePrivyModal: r
  } = l(); /*#__PURE__*/
  return o(n, {
    children: [/*#__PURE__*/t(a, {}, "header"), /*#__PURE__*/t(j, {
      children: /*#__PURE__*/t(i, {
        style: {
          width: 32,
          height: 32
        }
      })
    }), /*#__PURE__*/t(p, {
      title: "Could not log in with provider",
      description: "It looks like you're using an in-app browser.  To log in, please try again using an external browser.",
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }
    }), /*#__PURE__*/t(s, {
      children: /*#__PURE__*/t(e, {
        onClick: () => r(),
        children: "Close"
      })
    }), /*#__PURE__*/t(c, {}), /*#__PURE__*/t(m, {})]
  });
};
let j = /*#__PURE__*/r.div.withConfig({
  displayName: "StyledCircle",
  componentId: "sc-30eca48b-0"
})(["border-radius:50%;height:68px;width:68px;display:flex;align-items:center;justify-content:center;background-color:var(--privy-color-accent);color:white;margin:0 auto 24px auto;"]);
export { h as InAppBrowserLoginNotPossible };
