import { jsxs as o, Fragment as n, jsx as t } from "react/jsx-runtime";
import { forwardRef as i, useState as e, useEffect as r } from "react";
import { styled as c } from "styled-components";
import { validatePhoneNumber as a, phoneNumberTypingFormatter as s, getPlaceholderPhoneNumber as p, getCountryCallingCode as m, getPhoneCountryCodeAndNumber as l, formatPhoneNumber as d } from "@privy-io/js-sdk-core";
import { usePrivyModal as h } from "../hooks/modal-context.mjs";
import { useRecentlyUsedLogin as u } from "../recent-login/context.mjs";
import { EmbeddedButton as g, PrimaryButton as j } from "./Button.mjs";
import { PhoneCountryDropdown as f } from "./PhoneCountryDropdown.mjs";
import { Chip as b } from "./ui/chips/Chip.mjs";
import "./PrefetchedImage.mjs";
import "../configuration/context.mjs";
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
import "../screens/index.mjs";
import "../hooks/index.mjs";
import "../hooks/events-context.mjs";
import "../storage.mjs";
import "./Loader.mjs";
import "./ui/animation/LoadingSkeleton.mjs";
const x = /*#__PURE__*/i((i, c) => {
  let {
    app: x
  } = h();
  let [v, C] = e(false);
  let {
    accountType: k
  } = u();
  let [S, N] = e("");
  let [P, z] = e(x?.intl.defaultCountry ?? "US");
  let I = a(S, P);
  let L = s(P);
  let V = p(P);
  let $ = m(P);
  let T = !I;
  let [q, A] = e(false);
  let B = $.length;
  let D = o => {
    let n = o.target.value;
    z(n);
    N("");
    if (i.onChange) {
      i.onChange({
        rawPhoneNumber: S,
        qualifiedPhoneNumber: d(S, n),
        countryCode: n,
        isValid: a(S, P)
      });
    }
  };
  let E = (o, n) => {
    try {
      let t = o.replace(/\D/g, "") === S.replace(/\D/g, "") ? o : L.input(o);
      N(t);
      if (i.onChange) {
        i.onChange({
          rawPhoneNumber: t,
          qualifiedPhoneNumber: d(o, n),
          countryCode: n,
          isValid: a(o, n)
        });
      }
    } catch (o) {
      console.error("Error processing phone number:", o);
    }
  };
  let F = () => {
    A(true);
    let o = d(S, P);
    i.onSubmit({
      rawPhoneNumber: S,
      qualifiedPhoneNumber: o,
      countryCode: P,
      isValid: a(S, P)
    }).finally(() => A(false));
  };
  r(() => {
    if (i.defaultValue) {
      let o = l(i.defaultValue);
      L.reset();
      D({
        target: {
          value: o.countryCode
        }
      });
      E(o.phone, o.countryCode);
    }
  }, [i.defaultValue]);
  return /*#__PURE__*/o(n, {
    children: [/*#__PURE__*/t(y, {
      children: /*#__PURE__*/o(w, {
        $callingCodeLength: B,
        $stacked: i.stacked,
        children: [/*#__PURE__*/t(f, {
          value: P,
          onChange: D
        }), /*#__PURE__*/t("input", {
          ref: c,
          id: "phone-number-input",
          className: "login-method-button",
          type: "tel",
          placeholder: V,
          onFocus: () => C(true),
          onChange: o => {
            E(o.target.value, P);
          },
          onKeyUp: o => {
            if (o.key === "Enter") {
              F();
            }
          },
          value: S,
          autoComplete: "tel"
        }), k !== "phone" || v || i.hideRecent ? i.stacked || i.noIncludeSubmitButton ? /*#__PURE__*/t("span", {}) : /*#__PURE__*/t(g, {
          isSubmitting: q,
          onClick: F,
          disabled: T,
          children: "Submit"
        }) : /*#__PURE__*/t(b, {
          color: "gray",
          children: "Recent"
        })]
      })
    }), i.stacked && !i.noIncludeSubmitButton ? /*#__PURE__*/t(j, {
      loading: q,
      loadingText: null,
      onClick: F,
      disabled: T,
      children: "Submit"
    }) : null]
  });
});
let y = /*#__PURE__*/c.div.withConfig({
  displayName: "InputContainer",
  componentId: "sc-2a729487-0"
})(["width:100%;"]);
let w = /*#__PURE__*/c.label.withConfig({
  displayName: "PhoneNumberInput",
  componentId: "sc-2a729487-1"
})(["--country-code-dropdown-width:calc(54px + calc(12 * ", "px));--phone-input-extra-padding-left:calc(12px + calc(3 * ", "px));display:block;position:relative;width:100%;@media (min-width:441px){--country-code-dropdown-width:calc(52px + calc(10 * ", "px));}&& > select{font-size:16px;height:24px;position:absolute;margin:13px calc(var(--country-code-dropdown-width) / 4);line-height:24px;width:var(--country-code-dropdown-width);background-color:var(--privy-color-background);background-size:auto;background-position-x:right;cursor:pointer;@media (min-width:441px){font-size:14px;width:var(--country-code-dropdown-width);}:focus{outline:none;box-shadow:none;}}&& > input{font-size:16px;line-height:24px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:calc(100% - var(--country-code-dropdown-width));padding:12px 88px 12px calc(var(--country-code-dropdown-width) + var(--phone-input-extra-padding-left));padding-right:", ";flex-grow:1;background:var(--privy-color-background);border:1px solid var(--privy-color-foreground-4);border-radius:var(--privy-border-radius-mdlg);width:100%;:focus{outline:none;border-color:var(--privy-color-accent);}:autofill,:-webkit-autofill{background:var(--privy-color-background);}@media (min-width:441px){font-size:14px;padding-right:78px;}}&& > :last-child{right:16px;position:absolute;top:50%;transform:translate(0,-50%);}&& > button:last-child{right:0px;line-height:24px;padding:13px 17px;:focus{outline:none;border-color:var(--privy-color-accent);}}&& > input::placeholder{color:var(--privy-color-foreground-3);}"], o => o.$callingCodeLength, o => o.$callingCodeLength, o => o.$callingCodeLength, o => o.$stacked ? "16px" : "88px");
export { x as ConnectPhoneNumberForm };
