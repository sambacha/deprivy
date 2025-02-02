import { jsxs as o, Fragment as t, jsx as n } from "react/jsx-runtime";
import * as r from "react-device-detect";
import { styled as e } from "styled-components";
import { SoftCtaButton as i } from "../components/Button.mjs";
import { RefactorSpacerTop as s, RefactorSpacerBottom as c, CenteredItem as m } from "../components/Layouts.mjs";
import { ModalFooter as a } from "../components/ModalFooter.mjs";
import { ModalHeader as p } from "../components/ModalHeader.mjs";
import { ScreenHeader as l } from "../components/ScreenHeader.mjs";
import { TodoList as h, TodoItem as j, TodoSpacer as d } from "../components/TodoList.mjs";
import { usePrivyModal as f } from "../hooks/modal-context.mjs";
import { Phantom as g } from "../svg/phantom.mjs";
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
import "../svg/check-badge.mjs";
import "../components/PrefetchedImage.mjs";
import "./index.mjs";
let u = () => {
  let t = r.isFirefox ? "https://addons.mozilla.org/en-US/firefox/addon/phantom-app/" : "https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa?hl=en"; /*#__PURE__*/
  return o(y, {
    children: [/*#__PURE__*/n(l, {
      title: "Create a Phantom wallet",
      description: "Follow the instructions below to get started."
    }), /*#__PURE__*/n(m, {
      children: /*#__PURE__*/n(g, {
        style: {
          width: "152px",
          height: "152px"
        }
      })
    }), /*#__PURE__*/o(h, {
      children: [/*#__PURE__*/n(j, {
        children: /*#__PURE__*/o("div", {
          children: [/*#__PURE__*/n("span", {
            children: "Install the "
          }), /*#__PURE__*/n("a", {
            href: t,
            target: "_blank",
            children: "Phantom browser extension"
          })]
        })
      }), /*#__PURE__*/n(d, {}), /*#__PURE__*/n(j, {
        children: "Set up your first wallet"
      }), /*#__PURE__*/n(d, {}), /*#__PURE__*/n(j, {
        children: "Store your recovery phrase in a safe place!"
      })]
    }), /*#__PURE__*/n(i, {
      onClick: () => window.location.reload(),
      children: "Reload the page to use your wallet"
    })]
  });
};
const b = () => {
  let {
    navigateBack: r
  } = f(); /*#__PURE__*/
  return o(t, {
    children: [/*#__PURE__*/n(p, {
      backFn: r
    }, "header"), /*#__PURE__*/n(s, {}), /*#__PURE__*/n(u, {}), /*#__PURE__*/n(c, {}), /*#__PURE__*/o(a, {
      children: [/*#__PURE__*/n("span", {
        children: "Still not sure? "
      }), /*#__PURE__*/n("a", {
        target: "_blank",
        href: "https://solana.com/docs/intro/wallets",
        children: "Learn more"
      })]
    })]
  });
};
let y = /*#__PURE__*/e(m).withConfig({
  displayName: "CreateWalletContainer",
  componentId: "sc-8f484e26-0"
})(["gap:30px;> :first-child > svg{margin-top:20px;}"]);
export { b as InstallPhantomScreen };
