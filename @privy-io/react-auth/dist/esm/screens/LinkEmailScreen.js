import { jsxs as o, Fragment as t, jsx as n } from "react/jsx-runtime";
import i from "@heroicons/react/24/outline/EnvelopeIcon";
import { ConnectEmailForm as r } from "../components/ConnectEmailForm.mjs";
import { RefactorSpacerTop as s, BottomPusherContainer as m, RefactorSpacerBottom as e } from "../components/Layouts.mjs";
import { BlobbyFooter as c } from "../components/ModalFooter.mjs";
import { ModalHeader as p } from "../components/ModalHeader.mjs";
import { CenteredScreenHeader as a } from "../components/ScreenHeader.mjs";
import { usePrivyModal as j } from "../hooks/modal-context.mjs";
import "react";
import "../configuration/context.mjs";
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
import "../errors.mjs";
import "ofetch";
import "../hooks/captcha-context.mjs";
import "../hooks/index.mjs";
import "../utils/index.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../utils/eth/getPublicClient.mjs";
import "viem";
import "../hooks/internal-context.mjs";
import "../hooks/privy-context.mjs";
import "../recent-login/context.mjs";
import "../hooks/events-context.mjs";
import "../storage.mjs";
import "./index.mjs";
import "../components/Button.mjs";
import "styled-components";
import "../components/Loader.mjs";
import "../components/ui/chips/Chip.mjs";
import "../components/ui/animation/LoadingSkeleton.mjs";
import "../components/ui/forms/EmailInputForm.mjs";
import "../components/ui/typography/ErrorMessage.mjs";
import "../svg/protected-by-privy.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../components/PrefetchedImage.mjs";
const l = () => {
  let {
    app: l
  } = j(); /*#__PURE__*/
  return o(t, {
    children: [/*#__PURE__*/n(p, {}, "header"), /*#__PURE__*/n(s, {}), /*#__PURE__*/n(a, {
      title: "Connect your email",
      description: `Add your email to your ${l?.name} account`,
      icon: /*#__PURE__*/n(i, {
        color: "var(--privy-color-accent)",
        strokeWidth: 2,
        height: "48px",
        width: "48px"
      })
    }), /*#__PURE__*/n(m, {
      children: /*#__PURE__*/n(r, {
        stacked: true
      })
    }), /*#__PURE__*/n(e, {}), /*#__PURE__*/n(c, {})]
  });
};
export { l as LinkEmailScreen };
