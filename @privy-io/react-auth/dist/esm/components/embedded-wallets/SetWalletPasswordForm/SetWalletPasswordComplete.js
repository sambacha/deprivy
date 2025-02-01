import { jsxs as o, Fragment as i, jsx as r } from "react/jsx-runtime";
import n from "@heroicons/react/24/solid/CheckCircleIcon";
import t from "@heroicons/react/24/solid/XCircleIcon";
import { PrimaryButton as s } from "../../Button.mjs";
import { RefactorSpacerTop as c, CenteredItemWithGap as e, RefactorSpacerBottom as m } from "../../Layouts.mjs";
import { BlobbyFooter as a } from "../../ModalFooter.mjs";
import { ModalHeader as p } from "../../ModalHeader.mjs";
import { CenteredScreenHeader as l } from "../../ScreenHeader.mjs";
import "styled-components";
import "../../Loader.mjs";
import "../../../configuration/context.mjs";
import "react";
import "../../../config.mjs";
import "../../../configuration/defaultClientConfig.mjs";
import "../../../constants.mjs";
import "../../../configuration/login-methods.mjs";
import "../../../configuration/wallets.mjs";
import "../../../connectors/chains/index.mjs";
import "../../../connectors/chains/arbitrum.mjs";
import "../../../connectors/chains/arbitrumSepolia.mjs";
import "../../../connectors/chains/avalanche.mjs";
import "../../../connectors/chains/avalancheFuji.mjs";
import "../../../connectors/chains/base.mjs";
import "../../../connectors/chains/baseSepolia.mjs";
import "../../../connectors/chains/berachainArtio.mjs";
import "../../../connectors/chains/celo.mjs";
import "../../../connectors/chains/celoAlfajores.mjs";
import "../../../connectors/chains/filecoin.mjs";
import "../../../connectors/chains/filecoinCalibration.mjs";
import "../../../connectors/chains/garnetHolesky.mjs";
import "../../../connectors/chains/holesky.mjs";
import "../../../connectors/chains/linea.mjs";
import "../../../connectors/chains/lineaTestnet.mjs";
import "../../../connectors/chains/lukso.mjs";
import "../../../connectors/chains/mainnet.mjs";
import "../../../connectors/chains/optimism.mjs";
import "../../../connectors/chains/optimismSepolia.mjs";
import "../../../connectors/chains/polygon.mjs";
import "../../../connectors/chains/polygonAmoy.mjs";
import "../../../connectors/chains/redstone.mjs";
import "../../../connectors/chains/sepolia.mjs";
import "../../../connectors/chains/zora.mjs";
import "../../../connectors/chains/zoraSepolia.mjs";
import "../../../connectors/chains/zoraTestnet.mjs";
import "../../../connectors/chains/utils.mjs";
import "../../../lib/solana/index.mjs";
import "../../../theme.mjs";
import "tinycolor2";
import "../../../lib/cybr53.mjs";
import "../../../svg/protected-by-privy.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../../../hooks/internal-context.mjs";
import "../../../hooks/index.mjs";
const h = ({
  error: h,
  onClose: j
}) => /*#__PURE__*/o(i, {
  children: [/*#__PURE__*/r(p, {
    closeable: false
  }), /*#__PURE__*/r(c, {}), /*#__PURE__*/o(e, h ? {
    children: [/*#__PURE__*/r(t, {
      fill: "var(--privy-color-error)",
      width: "64px",
      height: "64px"
    }), /*#__PURE__*/r(l, {
      title: "Something went wrong",
      description: h
    })]
  } : {
    children: [/*#__PURE__*/r(n, {
      fill: "var(--privy-color-success)",
      width: "64px",
      height: "64px"
    }), /*#__PURE__*/r(l, {
      title: "Success"
    })]
  }), /*#__PURE__*/r(s, {
    onClick: j,
    children: "Close"
  }), /*#__PURE__*/r(m, {}), /*#__PURE__*/r(a, {})]
});
export { h as SetWalletPasswordComplete };
