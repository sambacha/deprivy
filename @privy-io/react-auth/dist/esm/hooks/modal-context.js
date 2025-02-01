import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { createContext as i, useState as e, useEffect as t, useRef as r, useContext as s } from "react";
import { PrefetchedImage as c } from "../components/PrefetchedImage.mjs";
import { DEFAULT_APP_CONFIG as a, useAppConfig as m } from "../configuration/context.mjs";
import { ModalScreen as l } from "../screens/index.mjs";
import { notImplemented as p } from "./index.mjs";
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
const j = /*#__PURE__*/i({
  ready: false,
  app: a,
  currentScreen: null,
  lastScreen: null,
  navigate: p,
  navigateBack: p,
  resetNavigation: p,
  setModalData: p,
  onUserCloseViaDialogOrKeybindRef: undefined
});
let h = [l.LANDING, l.CONNECT_ONLY_LANDING_SCREEN, null];
const u = i => {
  let s = m();
  let a = i.authenticated;
  let [l, p] = e(i.initialScreen);
  t(() => {
    if (!a && !h.includes(i.initialScreen)) {
      i.setInitialScreen(null);
    }
  }, [a]);
  let u = r(null);
  t(() => {
    if (!i.open) {
      u.current = null;
    }
  }, [i.open]);
  t(() => {
    u.current = null;
  }, [i.initialScreen]);
  let g = {
    ready: !!s.id,
    app: s,
    data: i.data,
    setModalData: i.setModalData,
    currentScreen: i.initialScreen,
    lastScreen: l,
    navigate: (n, o = true) => {
      i.setInitialScreen(n);
      if (o) {
        p(i.initialScreen);
      }
    },
    navigateBack: () => {
      i.setInitialScreen(l);
    },
    resetNavigation: () => {
      i.setInitialScreen(null);
      p(null);
    },
    onUserCloseViaDialogOrKeybindRef: u
  }; /*#__PURE__*/
  return n(j.Provider, {
    value: g,
    children: [(typeof s.appearance.logo == "string" || s.appearance.logo?.type === "img") && /*#__PURE__*/o(c, {
      src: typeof s.appearance.logo == "string" ? s.appearance.logo : s.appearance.logo.props.src
    }), i.children]
  });
};
const g = () => s(j);
export { j as ModalContext, u as ModalProvider, g as usePrivyModal };
