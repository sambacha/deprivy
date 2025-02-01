import { jsx as e, Fragment as n } from "react/jsx-runtime";
import { usePrivyModal as o } from "../../hooks/modal-context.mjs";
import { EmptyWalletView as t } from "./EmptyWalletView.mjs";
import { WalletButton as i } from "./WalletButton.mjs";
import "react";
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
import "../index.mjs";
import "../../hooks/index.mjs";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "./styles.mjs";
import "styled-components";
import "react-device-detect";
import "../../components/external-wallets/InjectedWalletIcon.mjs";
import "@heroicons/react/24/outline/WalletIcon";
import "../../components/ui/chips/Chip.mjs";
import "../../components/ui/animation/LoadingSkeleton.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../hooks/internal-context.mjs";
import "../../lib/external-wallets/displayHelpers.mjs";
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
import "../../lib/isEmbeddedWebview.mjs";
import "../../recent-login/context.mjs";
import "../../hooks/events-context.mjs";
import "../../storage.mjs";
const s = ["coinbase_wallet"];
let c = ["metamask", "okx_wallet", "rainbow", "uniswap", "bybit_wallet", "uniswap_extension", "zerion", "rabby_wallet", "cryptocom"];
const r = ["safe"];
const l = ["phantom", "universal_profile"];
const a = ({
  wallets: i
}) => {
  let {
    app: s
  } = o();
  if (i.length === 0) {
    return /*#__PURE__*/e(t, {
      chainType: s.appearance.walletChainType,
      withPadding: true
    });
  } else {
    return /*#__PURE__*/e(n, {
      children: i
    });
  }
};
const m = ({
  walletList: n,
  walletChainType: o,
  connectors: t,
  connectOnly: a,
  ignore: m,
  walletConnectEnabled: p,
  forceWallet: d
}) => {
  let h = [];
  let j = [];
  let y = [];
  let w = t.filter(e => o === "ethereum-only" ? e.chainType === "ethereum" : o !== "solana-only" || e.chainType === "solana");
  let u = w.find(e => e.connectorType === "wallet_connect_v2");
  for (let [t, f] of (d ? [d.wallet] : n).entries()) {
    if (f === "detected_ethereum_wallets" || f === "detected_wallets") {
      for (let [n, o] of w.filter(({
        chainType: e,
        connectorType: n,
        walletClientType: o
      }) => e !== "solana" && (o === "uniswap_wallet_extension" || o === "uniswap_extension" ? !m.includes("uniswap") : o === "crypto.com_wallet_extension" || o === "crypto.com_onchain" ? !m.includes("cryptocom") : n === "injected" && !m.includes(o))).entries()) {
        let {
          walletClientType: s,
          walletBranding: c,
          chainType: r
        } = o;
        (s === "unknown" ? j : h).push(/*#__PURE__*/e(i, {
          connectOnly: a,
          provider: s,
          logo: c.icon,
          displayName: c.name,
          connector: o
        }, `${t}-${f}-${s}-${r}-${n}`));
      }
    }
    if (f === "detected_solana_wallets" || f === "detected_wallets") {
      for (let [n, s] of w.filter(({
        chainType: e,
        walletClientType: n
      }) => {
        if (e === "solana") {
          return o !== "ethereum-only" && !m.includes(n);
        }
      }).entries()) {
        let {
          walletClientType: o,
          walletBranding: c,
          chainType: r
        } = s;
        (o === "unknown" ? j : h).push(/*#__PURE__*/e(i, {
          connectOnly: a,
          provider: o,
          logo: c.icon,
          displayName: c.name,
          connector: s
        }, `${t}-${f}-${o}-${r}-${n}`));
      }
    }
    if (l.includes(f)) {
      let n = w.find(e => e.connectorType === "injected" && e.walletClientType === f || e.connectorType === f);
      if (n) {
        h.push(/*#__PURE__*/e(i, {
          connectOnly: a,
          provider: f,
          connector: n
        }, `${t}-${f}`));
      }
      if (o === "solana-only" || o === "ethereum-and-solana") {
        let n = w.find(({
          chainType: e,
          connectorType: n,
          walletClientType: o
        }) => e === "solana" && n === "solana_adapter" && o === f);
        if (n) {
          h.push(/*#__PURE__*/e(i, {
            connectOnly: a,
            provider: f,
            connector: n
          }, `${f}-solana`));
        }
      }
    } else if (c.includes(f)) {
      let n = w.find(e => f === "uniswap" ? e.walletClientType === "uniswap_wallet_extension" || e.walletClientType === "uniswap_extension" : f === "cryptocom" ? e.walletClientType === "crypto.com_wallet_extension" || e.walletClientType === "crypto.com_onchain" : e.connectorType === "injected" && e.walletClientType === f);
      if (p && !n) {
        n = u;
      }
      if (n) {
        h.push(/*#__PURE__*/e(i, {
          connectOnly: a,
          provider: f,
          connector: n,
          logo: n.connectorType === "injected" ? n.walletBranding.icon : undefined,
          displayName: n.connectorType === "injected" ? n.walletBranding.name : undefined
        }, `${t}-${f}`));
      }
    } else if (s.includes(f)) {
      let n = w.find(({
        connectorType: e
      }) => e === f);
      if (n) {
        h.push(/*#__PURE__*/e(i, {
          connectOnly: a,
          provider: f,
          connector: n
        }, `${t}-${f}`));
      }
    } else if (r.includes(f)) {
      if (u) {
        y.push(/*#__PURE__*/e(i, {
          connectOnly: a,
          provider: f,
          connector: u
        }, `${t}-${f}`));
      }
    } else if (f === "wallet_connect") {
      if (u) {
        y.push(/*#__PURE__*/e(i, {
          connectOnly: a,
          provider: f,
          connector: u
        }, `${t}-${f}`));
      }
    } else if (f === d?.wallet) {
      let o = d.chainType === "ethereum" && n.includes("detected_ethereum_wallets");
      let s = d.chainType === "solana" && n.includes("detected_solana_wallets");
      if (n.includes("detected_wallets") || o || s) {
        let n = w.find(({
          walletClientType: e
        }) => e === f);
        if (n) {
          h.push(/*#__PURE__*/e(i, {
            connectOnly: a,
            provider: f,
            displayName: n.walletBranding?.name,
            logo: n.walletBranding?.icon,
            connector: n
          }, `${t}-${f}`));
        }
      }
    }
  }
  return [...j, ...h, ...y];
};
export { s as INJECTED_WALLETS_WITHOUT_EIP6963, l as INJECTED_WALLETS_WITHOUT_WALLET_CONNECT_FALLBACK, r as WALLETS_WITH_WALLET_CONNECT_ONLY, a as WalletButtonList, m as toWalletButtons };
