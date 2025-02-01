import { jsxs as o, Fragment as i, jsx as t } from "react/jsx-runtime";
import r from "@heroicons/react/24/outline/EnvelopeIcon";
import { forwardRef as n, useState as e, useEffect as s } from "react";
import { useAppConfig as m } from "../configuration/context.mjs";
import { PrivyError as c, PrivyErrorCode as a } from "../errors.mjs";
import { useCaptcha as l } from "../hooks/captcha-context.mjs";
import { usePrivyInternal as p } from "../hooks/internal-context.mjs";
import { usePrivyModal as h } from "../hooks/modal-context.mjs";
import { usePrivyContext as j } from "../hooks/privy-context.mjs";
import { useRecentlyUsedLogin as d } from "../recent-login/context.mjs";
import { ModalScreen as u } from "../screens/index.mjs";
import { validateEmail as g } from "../utils/index.mjs";
import { EmbeddedButton as f, PrimaryButton as S } from "./Button.mjs";
import { Chip as E } from "./ui/chips/Chip.mjs";
import { InputContainerForm as y, EmailInputForm as b } from "./ui/forms/EmailInputForm.mjs";
import { ErrorMessage as k } from "./ui/typography/ErrorMessage.mjs";
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
import "ofetch";
import "../hooks/index.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../utils/eth/getPublicClient.mjs";
import "viem";
import "./PrefetchedImage.mjs";
import "../hooks/events-context.mjs";
import "../storage.mjs";
import "styled-components";
import "./Loader.mjs";
import "./ui/animation/LoadingSkeleton.mjs";
const v = /*#__PURE__*/n((n, y) => {
  let [b, v] = e(n.defaultValue || "");
  let [A, R] = e("");
  let [T, I] = e(false);
  let {
    authenticated: D
  } = j();
  let {
    initLoginWithEmail: L
  } = p();
  let {
    navigate: N,
    setModalData: P,
    currentScreen: _,
    data: O
  } = h();
  let {
    enabled: W,
    token: w
  } = l();
  let [M, U] = e(false);
  let {
    accountType: z
  } = d();
  let F = m();
  s(() => {
    if (!b && F.disablePlusEmails && O?.inlineError?.error instanceof c && O?.inlineError?.error.privyErrorCode === a.DISALLOWED_PLUS_EMAIL && !A) {
      R("Please enter a valid email address without a '+'.");
    }
    if (A) {
      R("");
    }
  }, [b]);
  let G = g(b);
  let H = T || !G;
  let q = () => {
    var o;
    P({
      inlineError: undefined
    });
    if (!W || w || D) {
      o = w;
      I(true);
      L({
        email: b,
        captchaToken: o,
        disableSignup: O?.login?.disableSignup,
        withPrivyUi: true
      }).then(() => {
        N(u.AWAITING_PASSWORDLESS_CODE);
      }).catch(o => {
        P({
          errorModalData: {
            error: o,
            previousScreen: _ || u.LANDING
          }
        });
        N(u.ERROR_SCREEN);
      }).finally(() => {
        I(false);
      });
    } else {
      P({
        captchaModalData: {
          callback: o => L({
            email: b,
            captchaToken: o,
            withPrivyUi: true
          }),
          userIntentRequired: false,
          onSuccessNavigateTo: u.AWAITING_PASSWORDLESS_CODE,
          onErrorNavigateTo: u.ERROR_SCREEN
        }
      });
      N(u.CAPTCHA_SCREEN);
    }
  };
  /*#__PURE__*/
  return o(i, {
    children: [/*#__PURE__*/o(C, {
      children: [A && /*#__PURE__*/t(k, {
        style: {
          display: "block",
          marginTop: "0.25rem",
          textAlign: "left"
        },
        children: A
      }), /*#__PURE__*/o(x, {
        stacked: n.stacked,
        $error: !!A,
        children: [/*#__PURE__*/t(r, {}), /*#__PURE__*/t("input", {
          ref: y,
          id: "email-input",
          className: "login-method-button",
          type: "email",
          placeholder: "your@email.com",
          onFocus: () => U(true),
          onChange: o => v(o.target.value),
          onKeyUp: o => {
            if (o.key === "Enter") {
              q();
            }
          },
          value: b,
          autoComplete: "email"
        }), z !== "email" || M ? n.stacked ? /*#__PURE__*/t("span", {}) : /*#__PURE__*/t(f, {
          isSubmitting: T,
          onClick: q,
          disabled: H,
          children: "Submit"
        }) : /*#__PURE__*/t(E, {
          color: "gray",
          children: "Recent"
        })]
      })]
    }), n.stacked ? /*#__PURE__*/t(S, {
      loadingText: null,
      loading: T,
      disabled: H,
      onClick: q,
      children: "Submit"
    }) : null]
  });
});
let C = y;
let x = b;
export { v as ConnectEmailForm };
