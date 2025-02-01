import { jsx as o, jsxs as t, Fragment as e } from "react/jsx-runtime";
import { useState as n, useEffect as r } from "react";
import { isMobile as i } from "react-device-detect";
import { styled as s } from "styled-components";
import { PrimaryButton as c } from "../components/Button.mjs";
import { FixedGappedContainer as m } from "../components/Layouts.mjs";
import { ModalFooter as a } from "../components/ModalFooter.mjs";
import { ModalHeader as l } from "../components/ModalHeader.mjs";
import { ConnectorErrors as p } from "../connectors/errors.mjs";
import { DEFAULT_SUCCESS_SCREEN_DURATION_MS as j } from "../constants.mjs";
import { usePrivyInternal as h } from "../hooks/internal-context.mjs";
import { usePrivyModal as d } from "../hooks/modal-context.mjs";
import { WALLET_UI_MAP as u } from "../lib/external-wallets/displayHelpers.mjs";
import { BrowserExtensionWallet as g } from "../svg/browser-extension-wallet-icon.mjs";
import { WalletLoading as w, getErrorDetails as f } from "./ConnectionStatusScreen.mjs";
import "../components/Loader.mjs";
import "../configuration/context.mjs";
import "../config.mjs";
import "../configuration/defaultClientConfig.mjs";
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
import "@privy-io/js-sdk-core";
import "../errors.mjs";
import "ofetch";
import "../components/PrefetchedImage.mjs";
import "./index.mjs";
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
import "../auth-flows/siwe.mjs";
import "../effect.mjs";
import "../lib/siwe.mjs";
import "../auth-flows/siws.mjs";
import "../lib/siws.mjs";
import "../client/user.mjs";
import "viem/utils";
import "../connectors/is-wallet-installed.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/userAlreadyHasConnectedCoinbaseWallet.mjs";
import "viem";
import "../connectors/walletconnect-v2.mjs";
import "@walletconnect/ethereum-provider";
import "../utils/index.mjs";
import "../utils/eth/getPublicClient.mjs";
import "../connectors/ethereum/index.mjs";
import "../storage.mjs";
import "../connectors/areWalletArraysEqual.mjs";
import "../connectors/isBaseConnectedEthereumWallet.mjs";
import "../connectors/base.mjs";
import "eventemitter3";
import "../connectors/getRpcTimeout.mjs";
import "../connectors/privyProxyProvider.mjs";
import "../connectors/walletconnect-registry.mjs";
import "../hook-utils/useInterval.mjs";
import "../hooks/captcha-context.mjs";
import "../hooks/privy-context.mjs";
import "../lib/useHasTabbedAway.mjs";
const y = () => {
  let s;
  let {
    navigateBack: y,
    navigate: b,
    lastScreen: k,
    currentScreen: C,
    data: x,
    setModalData: S
  } = d();
  let {
    walletConnectionStatus: T,
    closePrivyModal: A
  } = h();
  let [E, I] = n(undefined);
  let [M, R] = n(0);
  let W = T?.status === "connected";
  let _ = T?.status === "switching_to_supported_chain";
  r(() => {
    if (W) {
      let o;
      if (x?.externalConnectWallet?.onCompleteNavigateTo) {
        let t = x.externalConnectWallet.onCompleteNavigateTo;
        let e = T.connectedWallet?.address;
        o = setTimeout(() => {
          if (x.funding) {
            S({
              ...x,
              funding: {
                ...x.funding,
                connectedWalletAddress: e
              }
            });
          }
          b(t({
            walletChainType: T.connector?.chainType
          }));
        }, j);
      } else {
        o = setTimeout(A, j);
      }
      return () => clearTimeout(o);
    }
  }, [W]);
  r(() => {
    var o;
    if (T?.connectError) {
      o = T?.connectError;
      I(f(o));
    }
  }, [T]);
  let B = T?.connector?.connectorType || "injected";
  let H = T?.connector?.walletClientType || "unknown";
  let L = u[H]?.displayName || T?.connector?.walletBranding.name || "Browser Extension";
  let P = u[H]?.logo || T?.connector?.walletBranding.icon || (t => /*#__PURE__*/o(g, {
    ...t
  }));
  let z = L === "Browser Extension" ? L.toLowerCase() : L;
  s = W ? `Successfully connected with ${z}` : E ? E.message : _ ? "Switching networks" : `Waiting for ${z}`;
  let F = "Don’t see your wallet? Check your other browser windows.";
  if (W) {
    F = "You’re good to go!";
  } else if (M >= 2 && E) {
    F = "Unable to connect wallet";
  } else if (E) {
    F = E.detail;
  } else if (_) {
    F = "Switch your wallet to the requested network.";
  } else if (H === "metamask" && i) {
    F = "Click to continue to open and connect MetaMask.";
  } else if (H === "metamask") {
    F = "For the best experience, connect only one wallet at a time.";
  } else if (B === "wallet_connect_v2") {
    F = "Open your mobile wallet app to continue";
  } else if (B === "coinbase_wallet") {
    F = "Open the Coinbase app on your phone to continue.";
  }
  return /*#__PURE__*/t(e, {
    children: [/*#__PURE__*/o(l, {
      backFn: C === k ? undefined : y
    }), /*#__PURE__*/t(v, {
      children: [/*#__PURE__*/o(w, {
        walletLogo: P,
        success: W,
        fail: !!E
      }), /*#__PURE__*/t(m, {
        children: [/*#__PURE__*/o("h3", {
          children: s
        }), /*#__PURE__*/o("p", {
          children: F
        })]
      }), E == p.ERROR_USER_EXISTS ? /*#__PURE__*/o(c, {
        onClick: y,
        children: "Use a different wallet"
      }) : !W && E?.retryable && M < 2 ? /*#__PURE__*/o(c, {
        onClick: () => {
          R(M + 1);
          I(undefined);
          T?.connectRetry();
        },
        disabled: !W && (!E?.retryable || M >= 2),
        children: "Retry"
      }) : !W && E && M >= 2 ? /*#__PURE__*/o(c, {
        onClick: y,
        children: "Use a different wallet"
      }) : null]
    }), /*#__PURE__*/o(a, {})]
  });
};
let v = /*#__PURE__*/s.div.withConfig({
  displayName: "ConnectContainer",
  componentId: "sc-1346f57-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;width:100%;"]);
export { y as ConnectOnlyStatusScreen };
