import { jsxs as o, Fragment as e, jsx as t } from "react/jsx-runtime";
import { useState as r, useEffect as n, useRef as i } from "react";
import { styled as s } from "styled-components";
import { BlobbyFooter as c } from "../components/ModalFooter.mjs";
import { ModalHeader as a } from "../components/ModalHeader.mjs";
import { WarningBanner as m } from "../components/ui/banners/WarningBanner.mjs";
import { Subtitle as l } from "../components/ui/typography/Subtitle.mjs";
import { Title as p } from "../components/ui/typography/Title.mjs";
import { WalletInfoCard as d } from "../components/ui/wallet/WalletInfoCard.mjs";
import { useAppConfig as h } from "../configuration/context.mjs";
import { usePrivyInternal as u } from "../hooks/internal-context.mjs";
import { usePrivyModal as g } from "../hooks/modal-context.mjs";
import { usePrivyContext as y } from "../hooks/privy-context.mjs";
import { constructURL as j } from "../utils/index.mjs";
import "../svg/protected-by-privy.mjs";
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
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../hooks/index.mjs";
import "@heroicons/react/24/outline/ExclamationTriangleIcon";
import "../components/ui/chips/Chip.mjs";
import "../components/ui/animation/LoadingSkeleton.mjs";
import "../components/ui/layout/Column.mjs";
import "../components/ui/typography/ErrorMessage.mjs";
import "../components/ui/typography/LabelXs.mjs";
import "../components/ui/wallet/Address.mjs";
import "@heroicons/react/24/outline/CheckIcon";
import "@heroicons/react/24/outline/Square2StackIcon";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../errors.mjs";
import "ofetch";
import "../utils/eth/getPublicClient.mjs";
import "viem";
import "../components/ui/wallet/shared.mjs";
import "../components/PrefetchedImage.mjs";
import "./index.mjs";
const f = () => {
  let [i, s] = r(null);
  let {
    authenticated: j,
    user: f,
    getAccessToken: w
  } = y();
  let {
    closePrivyModal: x,
    createAnalyticsEvent: k,
    clientAnalyticsId: I
  } = u();
  let C = h();
  let {
    data: A,
    onUserCloseViaDialogOrKeybindRef: T
  } = g();
  let {
    onFailure: E,
    onSuccess: S,
    origin: P,
    appId: L,
    appClientId: V,
    walletToExport: M,
    primaryWallet: W
  } = A.keyExport;
  let _ = o => {
    x({
      shouldCallAuthOnSuccess: false
    });
    E(typeof o == "string" ? Error(o) : o);
  };
  let z = () => {
    x({
      shouldCallAuthOnSuccess: false
    });
    S();
    k({
      eventName: "embedded_wallet_key_export_completed",
      payload: {
        walletAddress: M.address
      }
    });
  };
  n(() => {
    if (!j || !M) {
      return _("User must be authenticated before exporting their wallet");
    }
    w().then(s, _);
  }, [j, f]);
  T.current = z;
  return /*#__PURE__*/o(e, {
    children: [/*#__PURE__*/t(a, {
      onClose: z
    }), /*#__PURE__*/o(v, {
      children: [/*#__PURE__*/t(p, {
        children: "Transfer wallet"
      }), /*#__PURE__*/o(l, {
        children: ["Either copy your private key or seed phrase to transfer your wallet.", " ", /*#__PURE__*/t("a", {
          href: "https://privy-io.notion.site/Transferring-your-account-9dab9e16c6034a7ab1ff7fa479b02828",
          target: "blank",
          rel: "noopener noreferrer",
          children: "Learn more"
        })]
      }), /*#__PURE__*/t(m, {
        theme: C.appearance.palette.colorScheme,
        children: "Never share your private key or seed phrase with anyone."
      }), /*#__PURE__*/t(d, {
        isLoading: false,
        isPulsing: false,
        title: "Your wallet",
        address: M.address,
        showIcon: true
      }), /*#__PURE__*/t("div", {
        style: {
          width: "100%"
        },
        children: i && /*#__PURE__*/t(b, {
          origin: P,
          appId: L,
          appClientId: V,
          accessToken: i,
          clientAnalyticsId: I,
          walletToExport: M,
          primaryWallet: W,
          dimensions: {
            height: "44px"
          }
        })
      })]
    }), /*#__PURE__*/t(c, {})]
  });
};
function b(e) {
  let [s, c] = r(e.dimensions.width);
  let [a, m] = r(undefined);
  let l = i(null);
  n(() => {
    if (l.current && s === undefined) {
      let {
        width: o
      } = l.current.getBoundingClientRect();
      c(o);
    }
    let o = getComputedStyle(document.documentElement);
    m({
      background: o.getPropertyValue("--privy-color-background"),
      background2: o.getPropertyValue("--privy-color-background-2"),
      foreground3: o.getPropertyValue("--privy-color-foreground-3"),
      foregroundAccent: o.getPropertyValue("--privy-color-foreground-accent"),
      accent: o.getPropertyValue("--privy-color-accent"),
      accentDark: o.getPropertyValue("--privy-color-accent-dark"),
      success: o.getPropertyValue("--privy-color-success")
    });
  }, []);
  let p = e.walletToExport.chainType === "ethereum" && !e.walletToExport.imported; /*#__PURE__*/
  return t("div", {
    ref: l,
    children: s && /*#__PURE__*/o(w, {
      children: [/*#__PURE__*/t("iframe", {
        style: {
          position: "absolute",
          zIndex: 1
        },
        width: s,
        height: e.dimensions.height,
        allow: "clipboard-write self *",
        src: j(e.origin, `/apps/${e.appId}/embedded-wallets/export`, {
          client_id: e.appClientId,
          primaryAddress: e.primaryWallet.address,
          address: e.walletToExport.address,
          walletIndex: e.walletToExport.walletIndex,
          width: `${s}px`,
          caid: e.clientAnalyticsId,
          phrase_export: p,
          ...a
        }, {
          token: e.accessToken
        })
      }), /*#__PURE__*/t(x, {
        children: "Loading..."
      }), p && /*#__PURE__*/t(x, {
        children: "Loading..."
      })]
    })
  });
}
let v = /*#__PURE__*/s.div.withConfig({
  displayName: "EmbeddedWalletScreenContainer",
  componentId: "sc-eaab13a9-0"
})(["display:flex;flex-direction:column;gap:1.25rem;text-align:left;"]);
let w = /*#__PURE__*/s.div.withConfig({
  displayName: "ButtonContainer",
  componentId: "sc-eaab13a9-1"
})(["overflow:visible;position:relative;overflow:none;height:44px;display:flex;gap:12px;"]);
let x = /*#__PURE__*/s.div.withConfig({
  displayName: "LoadingButton",
  componentId: "sc-eaab13a9-2"
})(["display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:16px;font-weight:500;border-radius:var(--privy-border-radius-md);background-color:var(--privy-color-background-2);color:var(--privy-color-foreground-3);"]);
export { f as EmbeddedWalletKeyExportScreen };
