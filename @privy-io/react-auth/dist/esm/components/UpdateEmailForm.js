import { jsxs as o, Fragment as t, jsx as i } from "react/jsx-runtime";
import r from "@heroicons/react/24/outline/EnvelopeIcon";
import { forwardRef as e, useState as n } from "react";
import { useAppConfig as s } from "../configuration/context.mjs";
import { useCaptcha as m } from "../hooks/captcha-context.mjs";
import { usePrivyInternal as c } from "../hooks/internal-context.mjs";
import { usePrivyModal as a } from "../hooks/modal-context.mjs";
import { usePrivyContext as l } from "../hooks/privy-context.mjs";
import { ModalScreen as p } from "../screens/index.mjs";
import { validateEmail as h } from "../utils/index.mjs";
import { EmbeddedButton as j, PrimaryButton as d } from "./Button.mjs";
import { InputContainerForm as u, EmailUpdateForm as f } from "./ui/forms/EmailInputForm.mjs";
import { ErrorMessage as g } from "./ui/typography/ErrorMessage.mjs";
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
import "../hooks/index.mjs";
import "../errors.mjs";
import "ofetch";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../utils/eth/getPublicClient.mjs";
import "viem";
import "./PrefetchedImage.mjs";
import "styled-components";
import "./Loader.mjs";
const S = /*#__PURE__*/e((e, u) => {
  let [f, S] = n("");
  let [E, k] = n("");
  let [v, x] = n(false);
  let {
    authenticated: C,
    user: A
  } = l();
  let {
    initUpdateEmail: I
  } = c();
  let {
    navigate: T,
    setModalData: D,
    currentScreen: N
  } = a();
  let {
    enabled: R,
    token: P
  } = m();
  let w = s();
  let _ = h(f) && (w.disablePlusEmails && f.includes("+") ? (E || k("Please enter a valid email address without a '+'."), false) : (E && k(""), true));
  let O = v || !_;
  let L = () => {
    if (!R || P || C) {
      (async o => {
        if (!A?.email) {
          throw Error("User is required to have an email address to update it.");
        }
        x(true);
        try {
          await I(A.email.address, f, o);
          T(p.AWAITING_PASSWORDLESS_CODE);
        } catch (o) {
          D({
            errorModalData: {
              error: o,
              previousScreen: N || p.LANDING
            }
          });
        }
        x(false);
      })(P);
    } else {
      D({
        captchaModalData: {
          callback: o => {
            if (!A?.email) {
              throw Error("User is required to have an email address to update it.");
            }
            return I(A.email.address, f, o);
          },
          userIntentRequired: false,
          onSuccessNavigateTo: p.AWAITING_PASSWORDLESS_CODE,
          onErrorNavigateTo: p.ERROR_SCREEN
        }
      });
      T(p.CAPTCHA_SCREEN);
    }
  };
  /*#__PURE__*/
  return o(t, {
    children: [/*#__PURE__*/o(y, {
      children: [E && /*#__PURE__*/i(g, {
        style: {
          marginTop: "0.25rem",
          textAlign: "left"
        },
        children: E
      }), /*#__PURE__*/o(b, {
        $error: !!E,
        children: [/*#__PURE__*/i(r, {}), /*#__PURE__*/i("input", {
          ref: u,
          id: "email-input",
          type: "email",
          placeholder: "your@email.com",
          onChange: o => S(o.target.value),
          onKeyUp: o => {
            if (o.key === "Enter") {
              L();
            }
          },
          value: f,
          autoComplete: "email"
        }), e.stacked ? null : /*#__PURE__*/i(j, {
          isSubmitting: v,
          onClick: L,
          disabled: O,
          children: "Submit"
        })]
      })]
    }), e.stacked ? /*#__PURE__*/i(d, {
      loadingText: null,
      loading: v,
      disabled: O,
      onClick: L,
      children: "Submit"
    }) : null]
  });
});
let y = u;
let b = f;
export { S as UpdateEmailForm };
