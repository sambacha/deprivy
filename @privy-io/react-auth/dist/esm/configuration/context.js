import { jsx as o } from "react/jsx-runtime";
import { useState as n, useMemo as t, useEffect as i, useContext as e, createContext as r } from "react";
import { generateAppConfig as s, generateClientConfigAnalyticsPayload as c } from "../config.mjs";
import { cyrb53 as a } from "../lib/cybr53.mjs";
import "./defaultClientConfig.mjs";
import "../constants.mjs";
import "./login-methods.mjs";
import "./wallets.mjs";
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
let m = {
  showWalletLoginFirst: true,
  allowlistConfig: {
    errorTitle: null,
    errorDetail: null,
    errorCtaText: null,
    errorCtaLink: null
  },
  walletAuth: true,
  emailAuth: true,
  smsAuth: false,
  googleOAuth: false,
  twitterOAuth: false,
  discordOAuth: false,
  githubOAuth: false,
  linkedinOAuth: false,
  appleOAuth: false,
  disablePlusEmails: false,
  termsAndConditionsUrl: null,
  privacyPolicyUrl: null,
  embeddedWalletConfig: {
    createOnLogin: "off",
    requireUserOwnedRecoveryOnCreate: false,
    userOwnedRecoveryOptions: ["user-passcode"]
  },
  fiatOnRampEnabled: false,
  captchaEnabled: false,
  captchaSiteKey: "",
  enforceWalletUis: false,
  legacyWalletUiConfig: false
};
const l = s(m, undefined, false);
let p = /*#__PURE__*/r({
  appConfig: l,
  isServerConfigLoaded: false
});
const h = ({
  children: e,
  client: r,
  clientConfig: l
}) => {
  let [h, j] = n(null);
  let u = t(() => s(h ?? m, l, !!h), [h, l]);
  i(() => {
    if (!h) {
      return;
    }
    let o = c(l);
    let n = a(JSON.stringify(o)).toString();
    let t = `privy:sent:${h.id}:${n}`;
    if (!localStorage.getItem(t)) {
      r.createAnalyticsEvent({
        eventName: "sdk_initialize",
        payload: o
      });
      localStorage.setItem(t, "t");
    }
  }, [l, h]);
  i(() => {
    if (!h) {
      (async () => {
        try {
          let o = await r.getServerConfig();
          if (o.customApiUrl) {
            r.updateApiUrl(o.customApiUrl);
          }
          j(o);
        } catch (o) {
          console.warn("Error generating app config: ", o);
        }
      })();
    }
  }, []);
  return /*#__PURE__*/o(p.Provider, {
    value: {
      appConfig: u,
      isServerConfigLoaded: !!h
    },
    children: e
  });
};
const j = () => {
  let {
    appConfig: o
  } = e(p);
  return o;
};
const u = () => {
  let {
    isServerConfigLoaded: o
  } = e(p);
  return o;
};
export { l as DEFAULT_APP_CONFIG, h as PrivyAppConfigProvider, j as useAppConfig, u as useIsServerConfigLoaded };
