import { jsxs as o, Fragment as n, jsx as t } from "react/jsx-runtime";
import { PrimaryButton as i, SecondaryButton as r } from "../components/Button.mjs";
import { RefactorSpacerTop as s, BottomPusherContainer as c, RefactorSpacerBottom as e } from "../components/Layouts.mjs";
import { BlobbyFooter as m } from "../components/ModalFooter.mjs";
import { ModalHeader as a } from "../components/ModalHeader.mjs";
import { PaddedScreenHeader as p } from "../components/ScreenHeader.mjs";
import { usePrivyInternal as l } from "../hooks/internal-context.mjs";
import { usePrivyModal as h } from "../hooks/modal-context.mjs";
import { ErrorCircle as j } from "../svg/error-circle.mjs";
import { ModalScreen as d } from "./index.mjs";
import "styled-components";
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
import "../components/PrefetchedImage.mjs";
const f = () => {
  let {
    closePrivyModal: f
  } = l();
  let {
    navigate: u
  } = h();
  /*#__PURE__*/
  return o(n, {
    children: [/*#__PURE__*/t(a, {}, "header"), /*#__PURE__*/t(s, {}), /*#__PURE__*/t(j, {
      style: {
        width: "160px",
        height: "160px",
        margin: "0 auto 20px"
      }
    }), /*#__PURE__*/t(p, {
      title: "Could not connect with wallet",
      description: "Please check that Phantom multichain is enabled and try again.",
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }
    }), /*#__PURE__*/o(c, {
      children: [/*#__PURE__*/t(i, {
        onClick: () => u(d.LANDING),
        children: "Try again"
      }), /*#__PURE__*/t(r, {
        onClick: () => f(),
        children: "Cancel"
      })]
    }), /*#__PURE__*/t(e, {}), /*#__PURE__*/t(m, {})]
  });
};
export { f as LoginFailedScreen };
