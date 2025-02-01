import { jsxs as e, Fragment as t, jsx as o } from "react/jsx-runtime";
import { useState as r, useEffect as i } from "react";
import { styled as n } from "styled-components";
import { getTelegramAuthErrorMessage as s } from "../auth-flows/telegram.mjs";
import { shouldProceedtoEmbeddedWalletCreationFlow as a } from "../client/user.mjs";
import { SoftCtaButton as c } from "../components/Button.mjs";
import { RefactorSpacerTop as m, FixedGappedContainer as l, RefactorSpacerBottom as p } from "../components/Layouts.mjs";
import { ConnectionLoader as d } from "../components/Loader.mjs";
import { ModalFooter as u } from "../components/ModalFooter.mjs";
import { ModalHeader as h } from "../components/ModalHeader.mjs";
import j from "../components/layout/StackedContainer.mjs";
import { DEFAULT_SUCCESS_SCREEN_DURATION_MS as f } from "../constants.mjs";
import { PrivyErrorCode as g, PrivyUserLimitReachedError as y } from "../errors.mjs";
import { useCaptcha as E, CaptchaError as C } from "../hooks/captcha-context.mjs";
import { usePrivyInternal as A } from "../hooks/internal-context.mjs";
import { usePrivyModal as T } from "../hooks/modal-context.mjs";
import { usePrivyContext as v } from "../hooks/privy-context.mjs";
import { Telegram as _ } from "../svg/telegram.mjs";
import { ModalScreen as b } from "./index.mjs";
import "../paths.mjs";
import "ofetch";
import "../hooks/index.mjs";
import "../utils/index.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../utils/eth/getPublicClient.mjs";
import "viem";
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
import "../components/PrefetchedImage.mjs";
const S = () => {
  let {
    authenticated: n,
    logout: S,
    ready: N,
    user: x
  } = v();
  let {
    app: I,
    setModalData: w,
    navigate: L,
    resetNavigation: O,
    data: k
  } = T();
  let {
    initLoginWithTelegram: D,
    loginWithTelegram: M,
    updateWallets: W,
    setReadyToTrue: U,
    closePrivyModal: F,
    createAnalyticsEvent: H,
    getAuthMeta: P
  } = A();
  let [z, J] = r(false);
  let [B, Q] = r(undefined);
  let V = E();
  async function X() {
    try {
      let e = await async function () {
        let e;
        if (!n) {
          if (V.enabled && V.status === "error") {
            throw new C(V.error, null, g.CAPTCHA_FAILURE);
          }
          if (V.enabled && V.status !== "success") {
            V.execute();
            e = await V.waitForResult();
          }
          return e;
        }
      }();
      await M(e);
      J(true);
      U(true);
    } catch (e) {
      if (e?.privyErrorCode === g.ALLOWLIST_REJECTED) {
        Q(undefined);
        O();
        L(b.ALLOWLIST_REJECTION_SCREEN);
        return;
      }
      if (e?.privyErrorCode === g.USER_LIMIT_REACHED) {
        console.error(new y(e).toString());
        Q(undefined);
        O();
        L(b.USER_LIMIT_REACHED_SCREEN);
        return;
      }
      if (e?.privyErrorCode === g.USER_DOES_NOT_EXIST) {
        Q(undefined);
        O();
        L(b.ACCOUNT_NOT_FOUND_SCREEN);
        return;
      }
      if (e?.privyErrorCode === g.ACCOUNT_TRANSFER_REQUIRED && e.data?.data?.nonce) {
        Q(undefined);
        O();
        w({
          accountTransfer: {
            nonce: e.data?.data?.nonce,
            account: e.data?.data?.subject,
            telegramAuthResult: P()?.telegramAuthResult,
            telegramWebAppData: P()?.telegramWebAppData,
            displayName: e.data?.data?.account?.displayName,
            linkMethod: "telegram",
            embeddedWalletAddress: e.data?.data?.otherUser?.embeddedWalletAddress
          }
        });
        L(b.LINK_CONFLICT_SCREEN);
        return;
      }
      let {
        retryable: t,
        detail: o
      } = s(e);
      Q({
        retryable: t,
        detail: o,
        message: "Authentication failed"
      });
    }
  }
  i(() => {
    X();
  }, []);
  i(() => {
    if (!N || !n || !z || !x) {
      return;
    }
    if (I?.legal.requireUsersAcceptTerms && !x.hasAcceptedTerms) {
      let e = setTimeout(() => {
        L(b.AFFIRMATIVE_CONSENT_SCREEN);
      }, f);
      return () => clearTimeout(e);
    }
    if (a(x, I?.embeddedWallets?.createOnLogin)) {
      let e = setTimeout(() => {
        w({
          createWallet: {
            onSuccess: () => {},
            onFailure: e => {
              console.error(e);
              H({
                eventName: "embedded_wallet_creation_failure_logout",
                payload: {
                  error: e,
                  provider: "telegram",
                  screen: "TelegramAuthScreen"
                }
              });
              S();
            },
            callAuthOnSuccessOnClose: true
          }
        });
        L(b.EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN);
      }, f);
      return () => clearTimeout(e);
    }
    W();
    let e = setTimeout(() => F({
      shouldCallAuthOnSuccess: true,
      isSuccess: true
    }), f);
    return () => clearTimeout(e);
  }, [N, n, z, x]);
  let q = z ? "Successfully connected with Telegram" : B ? B.message : "Verifying connection to Telegram";
  let K = "";
  K = z ? "You’re good to go!" : B ? B.detail : "Just a few moments more";
  return /*#__PURE__*/e(t, {
    children: [/*#__PURE__*/o(h, {}), /*#__PURE__*/o(m, {}), /*#__PURE__*/e(R, {
      children: [/*#__PURE__*/o(j, {
        children: /*#__PURE__*/e("div", {
          children: [/*#__PURE__*/o(d, {
            success: z,
            fail: !!B
          }), /*#__PURE__*/o(_, {
            style: {
              width: "38px",
              height: "38px"
            }
          })]
        })
      }), /*#__PURE__*/e(l, {
        children: [/*#__PURE__*/o("h3", {
          children: q
        }), /*#__PURE__*/o("p", {
          children: K
        })]
      }), B && B?.retryable ? /*#__PURE__*/o(c, {
        onClick: async () => {
          try {
            Q(undefined);
            if (!k?.telegramAuthModalData?.seamlessAuth) {
              await D(undefined, k?.login?.disableSignup);
            }
            await X();
          } catch (e) {
            let {
              retryable: t,
              detail: o
            } = s(e);
            Q({
              retryable: t,
              detail: o,
              message: "Authentication failed"
            });
          }
        },
        disabled: !z && !B?.retryable,
        children: "Retry"
      }) : null]
    }), /*#__PURE__*/o(p, {}), /*#__PURE__*/o(u, {})]
  });
};
let R = /*#__PURE__*/n.div.withConfig({
  displayName: "ConnectContainer",
  componentId: "sc-2d1c6341-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin-left:27px;margin-right:27px;gap:24px;"]);
export { S as TelegramAuthScreen };
