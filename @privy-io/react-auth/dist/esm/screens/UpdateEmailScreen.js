import { jsxs as o, Fragment as t, jsx as i } from "react/jsx-runtime";
import n from "@heroicons/react/24/outline/EnvelopeIcon";
import { RefactorSpacerTop as r, BottomPusherContainer as s, RefactorSpacerBottom as m } from "../components/Layouts.mjs";
import { BlobbyFooter as e } from "../components/ModalFooter.mjs";
import { ModalHeader as c } from "../components/ModalHeader.mjs";
import { CenteredScreenHeader as p } from "../components/ScreenHeader.mjs";
import { UpdateEmailForm as a } from "../components/UpdateEmailForm.mjs";
import "styled-components";
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
import "../hooks/captcha-context.mjs";
import "../errors.mjs";
import "ofetch";
import "../utils/index.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../utils/eth/getPublicClient.mjs";
import "viem";
import "../hooks/modal-context.mjs";
import "../components/PrefetchedImage.mjs";
import "./index.mjs";
import "../hooks/privy-context.mjs";
import "../components/Button.mjs";
import "../components/Loader.mjs";
import "../components/ui/forms/EmailInputForm.mjs";
import "../components/ui/typography/ErrorMessage.mjs";
const j = () => /*#__PURE__*/o(t, {
  children: [/*#__PURE__*/i(c, {}, "header"), /*#__PURE__*/i(r, {}), /*#__PURE__*/i(p, {
    title: "Update your email",
    description: "Add the email address you'd like to use going forward. We'll send you a confirmation code",
    icon: /*#__PURE__*/i(n, {
      color: "var(--privy-color-accent)",
      strokeWidth: 2,
      height: "48px",
      width: "48px"
    })
  }), /*#__PURE__*/i(s, {
    children: /*#__PURE__*/i(a, {
      stacked: true
    })
  }), /*#__PURE__*/i(m, {}), /*#__PURE__*/i(e, {})]
});
export { j as UpdateEmailScreen };
