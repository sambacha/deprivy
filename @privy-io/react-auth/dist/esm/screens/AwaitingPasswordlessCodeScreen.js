import { jsxs as e, jsx as o, Fragment as r } from "react/jsx-runtime";
import t from "@heroicons/react/20/solid/CheckIcon";
import i from "@heroicons/react/24/outline/EnvelopeIcon";
import n from "@heroicons/react/24/outline/PhoneIcon";
import { useState as c, useEffect as a } from "react";
import { isMobile as s } from "react-device-detect";
import { styled as l } from "styled-components";
import { shouldProceedtoEmbeddedWalletCreationFlow as m } from "../client/user.mjs";
import { HorizontallyCenteredItem as p } from "../components/Layouts.mjs";
import { BlobbyFooter as d } from "../components/ModalFooter.mjs";
import { ModalHeader as u } from "../components/ModalHeader.mjs";
import { CenteredScreenHeader as h } from "../components/ScreenHeader.mjs";
import { DEFAULT_SUCCESS_SCREEN_DURATION_MS as f } from "../constants.mjs";
import { PrivyApiError as v, PrivyErrorCode as y, PrivyUserLimitReachedError as g } from "../errors.mjs";
import { usePrivyInternal as E } from "../hooks/internal-context.mjs";
import { usePrivyModal as x } from "../hooks/modal-context.mjs";
import { usePrivyContext as C } from "../hooks/privy-context.mjs";
import { ModalScreen as j } from "./index.mjs";
import "viem/utils";
import "../configuration/context.mjs";
import "../config.mjs";
import "../configuration/defaultClientConfig.mjs";
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
import "ofetch";
import "../components/PrefetchedImage.mjs";
let N = Array(6).fill("");
var _;
var b;
(_ = T || {})[_.RESET_AFTER_DELAY = 0] = "RESET_AFTER_DELAY";
_[_.CLEAR_ON_NEXT_VALID_INPUT = 1] = "CLEAR_ON_NEXT_VALID_INPUT";
var T = _;
(b = S || {})[b.EMAIL = 0] = "EMAIL";
b[b.SMS = 1] = "SMS";
var S = b;
const A = () => {
  let {
    app: l,
    navigate: _,
    lastScreen: b,
    navigateBack: T,
    setModalData: S,
    onUserCloseViaDialogOrKeybindRef: A
  } = x();
  let {
    closePrivyModal: M,
    resendEmailCode: U,
    resendSmsCode: W,
    getAuthMeta: F,
    loginWithCode: P,
    updateWallets: $,
    createAnalyticsEvent: H
  } = E();
  let {
    authenticated: z,
    logout: B,
    user: q
  } = C();
  let [K, V] = c(N);
  let [X, Y] = c(false);
  let [Q, G] = c(null);
  let [J, Z] = c(null);
  let [ee, oe] = c(0);
  A.current = () => null;
  let re = F()?.email ? 0 : 1;
  let te = f - 500;
  a(() => {
    if (ee) {
      let e = setTimeout(() => {
        oe(ee - 1);
      }, 1000);
      return () => clearTimeout(e);
    }
  }, [ee]);
  a(() => {
    if (z && X && q) {
      if (l?.legal.requireUsersAcceptTerms && !q.hasAcceptedTerms) {
        let e = setTimeout(() => {
          _(j.AFFIRMATIVE_CONSENT_SCREEN);
        }, te);
        return () => clearTimeout(e);
      }
      if (m(q, l?.embeddedWallets?.createOnLogin)) {
        let e = setTimeout(() => {
          S({
            createWallet: {
              onSuccess: () => {},
              onFailure: e => {
                console.error(e);
                H({
                  eventName: "embedded_wallet_creation_failure_logout",
                  payload: {
                    error: e,
                    screen: "AwaitingPasswordlessCodeScreen"
                  }
                });
                B();
              },
              callAuthOnSuccessOnClose: true
            }
          });
          _(j.EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN);
        }, te);
        return () => clearTimeout(e);
      }
      {
        $();
        let e = setTimeout(() => M({
          shouldCallAuthOnSuccess: true,
          isSuccess: true
        }), f);
        return () => clearTimeout(e);
      }
    }
  }, [z, X, q]);
  a(() => {
    if (Q && J === 0) {
      let e = setTimeout(() => {
        V(N);
        G(null);
        let e = document.querySelector("input[name=code-0]");
        e?.focus();
      }, 1400);
      return () => clearTimeout(e);
    }
  }, [Q]);
  let ie = e => {
    e.preventDefault();
    let o = e.currentTarget.value.replace(" ", "");
    if (o === "") {
      return;
    }
    if (isNaN(Number(o))) {
      G("Code should be numeric");
      Z(1);
      return;
    }
    G(null);
    Z(null);
    let r = Number(e.currentTarget.name?.charAt(5));
    let t = [...(o || [""])].slice(0, 6 - r);
    let i = [...K.slice(0, r), ...t, ...K.slice(r + t.length)];
    V(i);
    let n = Math.min(Math.max(r + t.length, 0), 5);
    if (!isNaN(Number(e.currentTarget.value))) {
      let e = document.querySelector(`input[name=code-${n}]`);
      e?.focus();
    }
    if (i.every(e => e && !isNaN(+e))) {
      let e = document.querySelector(`input[name=code-${n}]`);
      e?.blur();
      P(i.join("")).then(() => Y(true)).catch(e => {
        if (e instanceof v && e.privyErrorCode === y.INVALID_CREDENTIALS) {
          G("Invalid or expired verification code");
        } else if (e instanceof v && e.privyErrorCode === y.CANNOT_LINK_MORE_OF_TYPE) {
          G(e.message);
        } else {
          if (e instanceof v && e.privyErrorCode === y.USER_LIMIT_REACHED) {
            console.error(new g(e).toString());
            _(j.USER_LIMIT_REACHED_SCREEN);
            return;
          }
          if (e instanceof v && e.privyErrorCode === y.USER_DOES_NOT_EXIST) {
            _(j.ACCOUNT_NOT_FOUND_SCREEN);
            return;
          }
          if (e instanceof v && e.privyErrorCode === y.LINKED_TO_ANOTHER_USER) {
            S({
              errorModalData: {
                error: e,
                previousScreen: b ?? j.AWAITING_PASSWORDLESS_CODE
              }
            });
            _(j.ERROR_SCREEN, false);
            return;
          }
          if (e instanceof v && e.privyErrorCode === y.DISALLOWED_PLUS_EMAIL) {
            S({
              inlineError: {
                error: e
              }
            });
            _(j.CONNECT_OR_CREATE, false);
            return;
          }
          if (e instanceof v && e.privyErrorCode === y.ACCOUNT_TRANSFER_REQUIRED && e.data?.data?.nonce) {
            S({
              accountTransfer: {
                nonce: e.data?.data?.nonce,
                account: re === 0 ? F()?.email : F()?.phoneNumber,
                displayName: e.data?.data?.account?.displayName,
                linkMethod: re === 0 ? "email" : "sms",
                embeddedWalletAddress: e.data?.data?.otherUser?.embeddedWalletAddress
              }
            });
            _(j.LINK_CONFLICT_SCREEN);
            return;
          }
          G("Issue verifying code");
        }
        Z(0);
      });
    }
  };
  let ne = re == 0 ? /*#__PURE__*/o(i, {
    color: "var(--privy-color-accent)",
    strokeWidth: 2,
    height: "48px",
    width: "48px"
  }) : /*#__PURE__*/o(n, {
    color: "var(--privy-color-accent)",
    strokeWidth: 2,
    height: "40px",
    width: "40px"
  });
  let ce = /*#__PURE__*/e("p", re == 0 ? {
    children: ["Please check ", /*#__PURE__*/o(D, {
      children: F()?.email
    }), " for an email from privy.io and enter your code below."]
  } : {
    children: ["Please check ", /*#__PURE__*/o(D, {
      children: F()?.phoneNumber
    }), " for a message from ", l?.name || "Privy", " and enter your code below."]
  });
  /*#__PURE__*/
  return e(r, {
    children: [/*#__PURE__*/o(u, {
      backFn: () => T()
    }, "header"), /*#__PURE__*/e(I, {
      children: [/*#__PURE__*/o(h, {
        title: "Enter confirmation code",
        description: ce,
        icon: ne
      }), /*#__PURE__*/e(p, {
        children: [/*#__PURE__*/e(R, {
          children: [/*#__PURE__*/o(k, {
            $fail: !!Q,
            $success: X,
            children: /*#__PURE__*/o("span", {
              children: Q || (X ? "Success!" : "")
            })
          }), /*#__PURE__*/o("div", {
            children: K.map((e, r) => /*#__PURE__*/o("input", {
              name: `code-${r}`,
              type: "text",
              value: K[r],
              onChange: ie,
              onKeyUp: e => {
                if (e.key === "Backspace") {
                  (e => {
                    if (J === 1) {
                      G(null);
                      Z(null);
                    }
                    V([...K.slice(0, e), "", ...K.slice(e + 1)]);
                    if (e > 0) {
                      let o = document.querySelector(`input[name=code-${e - 1}]`);
                      o?.focus();
                    }
                  })(r);
                }
              },
              inputMode: "numeric",
              autoFocus: r === 0,
              pattern: "[0-9]",
              className: `${X ? "success" : ""} ${Q ? "fail" : ""}`,
              autoComplete: s ? "one-time-code" : "off"
            }, r))
          })]
        }), /*#__PURE__*/e(w, {
          children: [/*#__PURE__*/e("span", {
            children: ["Didn't get ", re == 0 ? "an email" : "a message", "?"]
          }), ee ? /*#__PURE__*/e(L, {
            children: [/*#__PURE__*/o(t, {
              color: "var(--privy-color-foreground)",
              strokeWidth: 1.33,
              height: "12px",
              width: "12px"
            }), /*#__PURE__*/o("span", {
              children: "Code sent"
            })]
          }) : /*#__PURE__*/o(O, {
            children: /*#__PURE__*/o("button", {
              onClick: async () => {
                oe(30);
                if (re == 0) {
                  await U();
                } else {
                  await W();
                }
              },
              children: "Resend code"
            })
          })]
        })]
      })]
    }), /*#__PURE__*/o(d, {})]
  });
};
let I = /*#__PURE__*/l.div.withConfig({
  displayName: "PasswordlessCodeContainer",
  componentId: "sc-463c12b2-0"
})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:center;margin:auto;gap:16px;flex-grow:1;"]);
let R = /*#__PURE__*/l.div.withConfig({
  displayName: "CodeInput",
  componentId: "sc-463c12b2-1"
})(["display:flex;flex-direction:column;width:100%;gap:8px;> div:last-child{display:flex;justify-content:center;gap:0.5rem;width:100%;border-radius:var(--privy-border-radius-md);> input{border:1px solid var(--privy-color-foreground-4);background:var(--privy-color-background);border-radius:var(--privy-border-radius-md);padding:8px 10px;height:58px;width:46px;text-align:center;font-size:18px;}> input:focus{border:1px solid var(--privy-color-accent);}> input:invalid{border:1px solid var(--privy-color-error);}> input.success{border:1px solid var(--privy-color-success);}> input.fail{border:1px solid var(--privy-color-error);animation:shake 180ms;animation-iteration-count:2;}}@keyframes shake{0%{transform:translate(1px,0px);}33%{transform:translate(-1px,0px);}67%{transform:translate(-1px,0px);}100%{transform:translate(1px,0px);}}"]);
let k = /*#__PURE__*/l.div.withConfig({
  displayName: "InputHelp",
  componentId: "sc-463c12b2-2"
})(["line-height:20px;height:20px;font-size:13px;color:", ";display:flex;justify-content:flex-end;width:100%;"], e => e.$success ? "var(--privy-color-success)" : e.$fail ? "var(--privy-color-error)" : "var(--privy-color-foreground-3)");
let w = /*#__PURE__*/l.div.withConfig({
  displayName: "HelpText",
  componentId: "sc-463c12b2-3"
})(["font-size:13px;color:var(--privy-color-foreground);display:flex;gap:8px;align-items:center;width:100%;margin-top:16px;padding-bottom:32px;"]);
let O = /*#__PURE__*/l.div.withConfig({
  displayName: "ResendButtonContainer",
  componentId: "sc-463c12b2-4"
})(["color:var(--privy-color-accent);padding:2px 0;> button{text-decoration:underline;}"]);
let L = /*#__PURE__*/l.div.withConfig({
  displayName: "Badge",
  componentId: "sc-463c12b2-5"
})(["display:flex;align-items:center;justify-content:center;border-radius:var(--privy-border-radius-sm);padding:2px 8px;gap:4px;background:var(--privy-color-background-2);color:var(--privy-color-foreground-2);"]);
let D = /*#__PURE__*/l.span.withConfig({
  displayName: "BoldWrappingSpan",
  componentId: "sc-463c12b2-6"
})(["font-weight:500;word-break:break-all;"]);
export { A as AwaitingPasswordlessCodeScreen };
