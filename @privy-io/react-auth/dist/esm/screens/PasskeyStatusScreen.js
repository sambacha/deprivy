import { jsxs as o, Fragment as e, jsx as r } from "react/jsx-runtime";
import { ModalScreen as t } from "./index.mjs";
import { useState as s, useRef as n, useEffect as i } from "react";
import { styled as c } from "styled-components";
import { shouldProceedtoEmbeddedWalletCreationFlow as a } from "../client/user.mjs";
import { PrimaryButton as m } from "../components/Button.mjs";
import { FixedGappedContainer as p } from "../components/Layouts.mjs";
import { ConnectionLoader as l } from "../components/Loader.mjs";
import { ModalFooter as u } from "../components/ModalFooter.mjs";
import { ModalHeader as h } from "../components/ModalHeader.mjs";
import d from "../components/layout/StackedContainer.mjs";
import { DEFAULT_SUCCESS_SCREEN_DURATION_MS as f } from "../constants.mjs";
import { PrivyError as j, PrivyErrorCode as y } from "../errors.mjs";
import { usePrivyInternal as g } from "../hooks/internal-context.mjs";
import { usePrivyModal as v } from "../hooks/modal-context.mjs";
import { usePrivyContext as k } from "../hooks/privy-context.mjs";
import { FingerPrint as w } from "../svg/fingerprint.mjs";
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
const C = () => {
  let {
    app: c,
    lastScreen: C,
    currentScreen: x,
    navigateBack: A,
    data: E,
    setModalData: b,
    navigate: _
  } = v();
  let {
    loginWithPasskey: T,
    signupWithPasskey: N,
    closePrivyModal: O,
    createAnalyticsEvent: I
  } = g();
  let {
    user: M,
    logout: P
  } = k();
  let {
    passkeySignupFlow: L
  } = E?.passkeyAuthModalData ?? {};
  let F = f - 500;
  let [W, D] = s("loading");
  let [R, Y] = s(null);
  let z = n([]);
  let B = o => {
    z.current = [o, ...z.current];
  };
  i(() => () => {
    z.current.forEach(o => clearTimeout(o));
    z.current = [];
  }, []);
  let q = async () => {
    D("loading");
    try {
      if (L) {
        await N();
      } else {
        await T();
      }
      D("success");
    } catch (o) {
      Y(o);
      D("error");
    }
  };
  i(() => {
    if (W === "success" && M) {
      if (c?.legal.requireUsersAcceptTerms && !M.hasAcceptedTerms) {
        B(setTimeout(() => {
          _(t.AFFIRMATIVE_CONSENT_SCREEN);
        }, F));
        return;
      }
      if (!a(M, c?.embeddedWallets?.createOnLogin)) {
        B(setTimeout(() => {
          O({
            shouldCallAuthOnSuccess: true,
            isSuccess: true
          });
        }, f));
        return;
      }
      B(setTimeout(() => {
        b({
          createWallet: {
            onSuccess: () => {},
            onFailure: o => {
              console.error(o);
              I({
                eventName: "embedded_wallet_creation_failure_logout",
                payload: {
                  error: o,
                  screen: "PasskeyStatusScreen"
                }
              });
              P();
            },
            callAuthOnSuccessOnClose: true
          }
        });
        _(t.EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN);
      }, F));
    }
  }, [M, W]);
  i(() => {
    q();
  }, []);
  return /*#__PURE__*/o(e, {
    children: [/*#__PURE__*/r(h, {
      backFn: C && x !== C ? A : undefined
    }), /*#__PURE__*/o(S, {
      children: [/*#__PURE__*/r(d, {
        children: /*#__PURE__*/o("div", {
          children: [/*#__PURE__*/r(l, {
            success: W === "success",
            fail: W === "error"
          }), /*#__PURE__*/r(w, {
            style: {
              width: "38px",
              height: "38px"
            }
          })]
        })
      }), /*#__PURE__*/o(p, {
        children: [/*#__PURE__*/r("h3", {
          children: (() => {
            switch (W) {
              case "loading":
                return "Waiting for passkey";
              case "success":
                return "Success";
              case "error":
                return "Something went wrong";
            }
          })()
        }), /*#__PURE__*/r("p", {
          style: {
            whiteSpace: "pre-wrap"
          },
          children: (() => {
            switch (W) {
              case "loading":
                if (L) {
                  return "Please follow prompts to register your passkey.";
                } else {
                  return "Please follow prompts to verify your passkey.\nYou will have to sign up with another method first to register a passkey for your account.";
                }
              case "success":
                return "You've successfully logged in with your passkey.";
              case "error":
                if (R instanceof j) {
                  if (R.privyErrorCode === y.CANNOT_LINK_MORE_OF_TYPE) {
                    return "Cannot link more passkeys to account.";
                  }
                  if (R.privyErrorCode === y.PASSKEY_NOT_ALLOWED) {
                    return "Passkey request timed out or rejected by user.\nYou will have to sign up with another method first to register a passkey for your account.";
                  }
                }
                return "An unknown error occurred.\nYou will have to sign up with another method first to register a passkey for your account.";
            }
          })()
        })]
      }), (() => {
        switch (W) {
          case "loading":
          case "success":
            /*#__PURE__*/return r(m, {
              onClick: () => {},
              disabled: true,
              children: "Continue"
            });
          case "error":
            /*#__PURE__*/return r(m, {
              onClick: q,
              disabled: false,
              children: "Retry"
            });
        }
      })()]
    }), /*#__PURE__*/r(u, {})]
  });
};
let S = /*#__PURE__*/c.div.withConfig({
  displayName: "Container",
  componentId: "sc-4165a41e-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;width:100%;"]);
const x = /*#__PURE__*/c.div.withConfig({
  displayName: "DoubleIconWrapper",
  componentId: "sc-4165a41e-1"
})(["display:flex;align-items:center;justify-content:center;width:180px;height:90px;border-radius:50%;svg + svg{margin-left:12px;}> svg{z-index:2;color:var(--privy-color-accent) !important;stroke:var(--privy-color-accent) !important;fill:var(--privy-color-accent) !important;}"]);
export { x as DoubleIconWrapper, C as PasskeyStatusScreen };
