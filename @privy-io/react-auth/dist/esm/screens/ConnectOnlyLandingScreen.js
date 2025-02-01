import { jsxs as o, jsx as t, Fragment as n } from "react/jsx-runtime";
import { TermsAndConditions as e, BlobbyFooter as i } from "../components/ModalFooter.mjs";
import { ModalHeader as s } from "../components/ModalHeader.mjs";
import { ScreenHeader as r } from "../components/ScreenHeader.mjs";
import { Address as m } from "../components/ui/wallet/Address.mjs";
import { usePrivyInternal as c } from "../hooks/internal-context.mjs";
import { usePrivyModal as a } from "../hooks/modal-context.mjs";
import { toWalletButtons as p, WalletButtonList as l } from "./LandingScreen/WalletButtonList.mjs";
import { LoginMethodContainer as j } from "./LandingScreen/styles.mjs";
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
import "../hooks/index.mjs";
import "@heroicons/react/24/outline/CheckIcon";
import "@heroicons/react/24/outline/Square2StackIcon";
import "../utils/index.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../errors.mjs";
import "ofetch";
import "../utils/eth/getPublicClient.mjs";
import "viem";
import "../components/PrefetchedImage.mjs";
import "./index.mjs";
import "./LandingScreen/EmptyWalletView.mjs";
import "./LandingScreen/WalletButton.mjs";
import "react-device-detect";
import "../components/external-wallets/InjectedWalletIcon.mjs";
import "@heroicons/react/24/outline/WalletIcon";
import "../components/ui/chips/Chip.mjs";
import "../components/ui/animation/LoadingSkeleton.mjs";
import "../lib/external-wallets/displayHelpers.mjs";
import "../svg/brave-browser-icon.mjs";
import "../svg/bybit.mjs";
import "../svg/coinbase-wallet.mjs";
import "../svg/cryptocom.mjs";
import "../svg/metamask.mjs";
import "../svg/phantom.mjs";
import "../svg/rabby.mjs";
import "../svg/rainbow.mjs";
import "../svg/safe.mjs";
import "../svg/uniswap.mjs";
import "../svg/universal-profile.mjs";
import "../svg/wallet-connect.mjs";
import "../svg/zerion.mjs";
import "../lib/isEmbeddedWebview.mjs";
import "../recent-login/context.mjs";
import "../hooks/events-context.mjs";
import "../storage.mjs";
const h = () => {
  let {
    app: h,
    data: d
  } = a();
  let g = d?.externalConnectWallet?.suggestedAddress;
  let u = g ? /*#__PURE__*/o("span", {
    children: ["Connect the wallet with address ", /*#__PURE__*/t(m, {
      showCopyIcon: false,
      address: g
    }), " ", h?.name ? `to ${h.name}.` : "."]
  }) : `Connect a wallet to your ${h?.name} account`;
  let {
    connectors: w
  } = c();
  let b = p({
    walletList: d?.externalConnectWallet?.walletList ?? h.appearance.walletList,
    walletChainType: h.appearance.walletChainType,
    connectors: w,
    connectOnly: true,
    ignore: h.appearance.walletList,
    walletConnectEnabled: h.externalWallets.walletConnect.enabled
  });
  /*#__PURE__*/
  return o(n, {
    children: [/*#__PURE__*/t(s, {}, "header"), b.length > 0 && /*#__PURE__*/t(r, {
      title: "Connect your wallet",
      description: u
    }), /*#__PURE__*/t(j, {
      children: /*#__PURE__*/t(l, {
        wallets: b
      })
    }), h && /*#__PURE__*/t(e, {
      app: h,
      alwaysShowImplicitConsent: true
    }), /*#__PURE__*/t(i, {})]
  });
};
export { h as ConnectOnlyLandingScreen };
