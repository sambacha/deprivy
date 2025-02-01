import { jsxs as o, Fragment as t, jsx as n } from "react/jsx-runtime";
import { useState as e } from "react";
import { styled as i } from "styled-components";
import { PrimaryButtonLink as r } from "../components/Button.mjs";
import { RefactorSpacerTop as c, BottomPusherContainer as s, RefactorSpacerBottom as m, CenteredItem as a } from "../components/Layouts.mjs";
import { BlobbyFooter as p } from "../components/ModalFooter.mjs";
import { ModalHeader as l } from "../components/ModalHeader.mjs";
import { PaddedScreenHeader as h } from "../components/ScreenHeader.mjs";
import { getPhantomMobileRedirect as j } from "../connectors/phantom-redirect.mjs";
import { usePrivyInternal as d } from "../hooks/internal-context.mjs";
import { usePrivyContext as u } from "../hooks/privy-context.mjs";
import { Phantom as f } from "../svg/phantom.mjs";
import "../components/Loader.mjs";
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
import "../svg/protected-by-privy.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../hooks/index.mjs";
import "react-device-detect";
import "../connectors/is-wallet-installed.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
const y = () => {
  let {
    ready: i
  } = u();
  let {
    walletConnectionStatus: a
  } = d();
  let [y, b] = e(false);
  let x = j(!y, a?.connector?.chainType === "solana");
  let w = {
    title: "Redirecting to Phantom Mobile Wallet",
    description: "We'll take you to the Phantom Mobile Wallet app to continue your login experience.",
    footnote: ""
  };
  if (i) {
    w.description = "For the best experience, we'll automatically log you into the Phantom Mobile Wallet in-app browser.";
    w.footnote = "Once you're done, you can always return here and refresh to view your updated account.";
  }
  if (y) {
    w.title = "Still here?";
    w.description = "You may need to install the Phantom mobile app.";
    w.footnote = "Once you're done, you can return here or connect via Phantom's in-app browser.";
  }
  return /*#__PURE__*/o(t, {
    children: [/*#__PURE__*/n(l, {}, "header"), /*#__PURE__*/n(c, {}), /*#__PURE__*/n(h, {
      title: w.title,
      description: w.description
    }), /*#__PURE__*/o(s, {
      children: [/*#__PURE__*/n(g, {
        children: /*#__PURE__*/n(f, {
          style: {
            width: "72px",
            height: "72px"
          }
        })
      }), /*#__PURE__*/n(r, {
        href: x,
        onClick: () => {
          setTimeout(() => b(true), 1000);
        },
        loading: i && !x,
        children: y ? "Go to App Store" : "Continue"
      }), w.footnote ? /*#__PURE__*/n("p", {
        children: w.footnote
      }) : null]
    }), /*#__PURE__*/n(m, {}), /*#__PURE__*/n(p, {})]
  });
};
let g = /*#__PURE__*/i(a).withConfig({
  displayName: "LogoContainer",
  componentId: "sc-33ad6c8b-0"
})(["margin:16px auto;"]);
export { y as PhantomInterstitialScreen };
