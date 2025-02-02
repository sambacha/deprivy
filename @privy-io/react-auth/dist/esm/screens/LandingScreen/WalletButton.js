import { jsxs as o, jsx as n } from "react/jsx-runtime";
import { ModalScreen as t } from "../index.mjs";
import { isMobile as e } from "react-device-detect";
import { styled as i } from "styled-components";
import { InjectedWalletIcon as s } from "../../components/external-wallets/InjectedWalletIcon.mjs";
import { Chip as c } from "../../components/ui/chips/Chip.mjs";
import { isPhantomInstalled as r, isCoinbaseWalletInstalled as m } from "../../connectors/is-wallet-installed.mjs";
import { usePrivyInternal as a } from "../../hooks/internal-context.mjs";
import { usePrivyModal as p } from "../../hooks/modal-context.mjs";
import { toLogo as l, toDisplayName as h } from "../../lib/external-wallets/displayHelpers.mjs";
import j from "../../lib/isEmbeddedWebview.mjs";
import { useRecentlyUsedLogin as d } from "../../recent-login/context.mjs";
import { LoginMethodButton as y } from "./styles.mjs";
import "@heroicons/react/24/outline/WalletIcon";
import "../../components/ui/animation/LoadingSkeleton.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "react";
import "../../hooks/index.mjs";
import "../../components/PrefetchedImage.mjs";
import "../../configuration/context.mjs";
import "../../config.mjs";
import "../../configuration/defaultClientConfig.mjs";
import "../../constants.mjs";
import "../../configuration/login-methods.mjs";
import "../../configuration/wallets.mjs";
import "../../connectors/chains/index.mjs";
import "../../connectors/chains/arbitrum.mjs";
import "../../connectors/chains/arbitrumSepolia.mjs";
import "../../connectors/chains/avalanche.mjs";
import "../../connectors/chains/avalancheFuji.mjs";
import "../../connectors/chains/base.mjs";
import "../../connectors/chains/baseSepolia.mjs";
import "../../connectors/chains/berachainArtio.mjs";
import "../../connectors/chains/celo.mjs";
import "../../connectors/chains/celoAlfajores.mjs";
import "../../connectors/chains/filecoin.mjs";
import "../../connectors/chains/filecoinCalibration.mjs";
import "../../connectors/chains/garnetHolesky.mjs";
import "../../connectors/chains/holesky.mjs";
import "../../connectors/chains/linea.mjs";
import "../../connectors/chains/lineaTestnet.mjs";
import "../../connectors/chains/lukso.mjs";
import "../../connectors/chains/mainnet.mjs";
import "../../connectors/chains/optimism.mjs";
import "../../connectors/chains/optimismSepolia.mjs";
import "../../connectors/chains/polygon.mjs";
import "../../connectors/chains/polygonAmoy.mjs";
import "../../connectors/chains/redstone.mjs";
import "../../connectors/chains/sepolia.mjs";
import "../../connectors/chains/zora.mjs";
import "../../connectors/chains/zoraSepolia.mjs";
import "../../connectors/chains/zoraTestnet.mjs";
import "../../connectors/chains/utils.mjs";
import "../../lib/solana/index.mjs";
import "../../theme.mjs";
import "tinycolor2";
import "../../lib/cybr53.mjs";
import "../../svg/brave-browser-icon.mjs";
import "../../svg/bybit.mjs";
import "../../svg/coinbase-wallet.mjs";
import "../../svg/cryptocom.mjs";
import "../../svg/metamask.mjs";
import "../../svg/phantom.mjs";
import "../../svg/rabby.mjs";
import "../../svg/rainbow.mjs";
import "../../svg/safe.mjs";
import "../../svg/uniswap.mjs";
import "../../svg/universal-profile.mjs";
import "../../svg/wallet-connect.mjs";
import "../../svg/zerion.mjs";
import "../../hooks/events-context.mjs";
import "../../storage.mjs";
const g = ({
  provider: i,
  displayName: c,
  logo: y,
  connectOnly: g,
  connector: C
}) => {
  let {
    navigate: N
  } = p();
  let {
    connectWallet: v
  } = a();
  let b = d();
  let I = C.connectorType === "wallet_connect_v2" ? i : C.walletClientType;
  let u = window.matchMedia("(display-mode: standalone)").matches;
  /*#__PURE__*/
  return o(f, {
    onClick: C.connectorType === "phantom" || C.connectorType === "solana_adapter" && C.walletClientType === "phantom" ? () => {
      if (r() || C.chainType === "solana" && "isInstalled" in C && C.isInstalled) {
        v(C, I);
        N(g ? t.AWAITING_CONNECT_ONLY_CONNECTION : t.AWAITING_CONNECTION);
      } else {
        N(e ? t.PHANTOM_INTERSTITIAL_SCREEN : t.INSTALL_PHANTOM_SCREEN);
      }
    } : C.connectorType !== "coinbase_wallet" || C.connectionOptions !== "eoaOnly" || !e || u || m() ? () => {
      if (!j(window.navigator.userAgent) || event?.isTrusted) {
        v(C, I);
        N(g ? t.AWAITING_CONNECT_ONLY_CONNECTION : t.AWAITING_CONNECTION);
      }
    } : () => {
      window.location.href = `https://go.cb-w.com/dapp?cb_url=${encodeURI(window.location.href)}`;
    },
    children: [/*#__PURE__*/n(s, {
      icon: l(i, C.connectorType, C.walletClientType) ?? y,
      name: C.walletClientType
    }), /*#__PURE__*/n("span", {
      children: h(i, C.connectorType, C.walletClientType) || c || C.walletClientType
    }), /*#__PURE__*/o(w, {
      id: "chip-container",
      children: [b?.walletClientType === I && b?.chainType === C.chainType ? /*#__PURE__*/n(T, {
        color: "gray",
        children: "Recent"
      }) : /*#__PURE__*/n("span", {
        id: "connect-text",
        children: "Connect"
      }), C.connectorType === "solana_adapter" && /*#__PURE__*/n(T, {
        color: "gray",
        children: "Solana"
      })]
    })]
  });
};
let f = /*#__PURE__*/i(y).withConfig({
  displayName: "ConnectWalletButton",
  componentId: "sc-b6343d12-0"
})(["> #chip-container > #connect-text{font-weight:500;color:var(--privy-color-accent);opacity:0;transition:opacity 0.1s ease-out;}:hover > #chip-container > #connect-text{opacity:1;}@media (max-width:440px){> #chip-container > #connect-text{display:none;}}"]);
let T = /*#__PURE__*/i(c).withConfig({
  displayName: "StyledChip",
  componentId: "sc-b6343d12-1"
})(["margin-left:auto;"]);
let w = /*#__PURE__*/i.div.withConfig({
  displayName: "ChipContainer",
  componentId: "sc-b6343d12-2"
})(["display:flex;flex-wrap:wrap;gap:8px;margin-left:auto;"]);
export { g as WalletButton };
