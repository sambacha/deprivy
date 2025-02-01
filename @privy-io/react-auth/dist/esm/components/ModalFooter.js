import { jsx as o, jsxs as n } from "react/jsx-runtime";
import { styled as i } from "styled-components";
import { useAppConfig as t } from "../configuration/context.mjs";
import { ProtectedByPrivy as r } from "../svg/protected-by-privy.mjs";
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
let e = /*#__PURE__*/i.div.withConfig({
  displayName: "TermsAndConditionsContainer",
  componentId: "sc-a5dd6bd7-0"
})(["margin-top:16px;font-size:13px;text-align:center;color:var(--privy-color-foreground-3);&& > a{color:var(--privy-color-accent);}"]);
function s(i) {
  let {
    legal: {
      privacyPolicyUrl: t,
      termsAndConditionsUrl: r,
      requireUsersAcceptTerms: s
    }
  } = i.app;
  if (s && !i.alwaysShowImplicitConsent || !r && !t) {
    /*#__PURE__*/
    return o(e, {});
  }
  let c = !!t && !!r; /*#__PURE__*/
  return n(e, {
    children: ["By logging in I agree to the", " ", r && /*#__PURE__*/o("a", {
      href: r,
      target: "_blank",
      children: c ? "Terms" : "Terms of Service"
    }), c && " & ", t && /*#__PURE__*/o("a", {
      href: t,
      target: "_blank",
      children: "Privacy Policy"
    })]
  });
}
const c = () => {
  let {
    appearance: n
  } = t(); /*#__PURE__*/
  return o(a, {
    children: n.footerLogo ?? /*#__PURE__*/o("a", {
      href: "https://www.privy.io/",
      target: "_blank",
      id: "protected-by-privy",
      children: /*#__PURE__*/o(r, {
        height: 13,
        width: 150
      })
    })
  });
};
const a = /*#__PURE__*/i.div.withConfig({
  displayName: "ModalFooter",
  componentId: "sc-a5dd6bd7-1"
})(["display:flex;align-items:center;justify-content:center;padding-top:8px;padding-bottom:12px;gap:8px;font-size:13px;&& a{padding:0.5rem 0;&:hover{text-decoration:none;}}@media all and (display-mode:standalone){padding-bottom:30px;}"]);
export { c as BlobbyFooter, a as ModalFooter, s as TermsAndConditions };
