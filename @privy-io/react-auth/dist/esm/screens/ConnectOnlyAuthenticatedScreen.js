import { jsxs as o, Fragment as t, jsx as n } from "react/jsx-runtime";
import { BlobbyFooter as e } from "../components/ModalFooter.mjs";
import { ModalHeader as i } from "../components/ModalHeader.mjs";
import { PaddedScreenHeader as s } from "../components/ScreenHeader.mjs";
import { usePrivyInternal as r } from "../hooks/internal-context.mjs";
import { usePrivyModal as m } from "../hooks/modal-context.mjs";
import { formatWalletAddress as c } from "../utils/index.mjs";
import { toWalletButtons as a, WalletButtonList as p } from "./LandingScreen/WalletButtonList.mjs";
import { LoginMethodContainer as l } from "./LandingScreen/styles.mjs";
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
import "../components/PrefetchedImage.mjs";
import "./index.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../errors.mjs";
import "ofetch";
import "../utils/eth/getPublicClient.mjs";
import "viem";
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
const j = () => {
  let {
    app: j,
    data: h
  } = m();
  let d = h?.externalConnectWallet?.suggestedAddress;
  let g = d ? `Connect the wallet with address ${c(d)} ${j?.name ? `to ${j.name}.` : "."}` : `Connect a wallet to ${j?.name}`;
  let {
    connectors: u
  } = r();
  let w = a({
    walletList: h?.externalConnectWallet?.walletList ?? j.appearance.walletList,
    walletChainType: j.appearance.walletChainType,
    connectors: u,
    connectOnly: true,
    ignore: j.appearance.walletList,
    walletConnectEnabled: j.externalWallets.walletConnect.enabled
  });
  /*#__PURE__*/
  return o(t, {
    children: [/*#__PURE__*/n(i, {}, "header"), w.length > 0 && /*#__PURE__*/n(s, {
      title: "Connect your wallet",
      description: g
    }), /*#__PURE__*/n(l, {
      children: /*#__PURE__*/n(p, {
        wallets: w
      })
    }), /*#__PURE__*/n(e, {})]
  });
};
export { j as ConnectOnlyAuthenticatedScreen };
