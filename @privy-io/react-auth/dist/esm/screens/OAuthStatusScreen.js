import { jsxs as o, Fragment as t, jsx as e } from "react/jsx-runtime";
import { useState as r, useEffect as i } from "react";
import { styled as n } from "styled-components";
import { getDisplayForProvider as s } from "../auth-flows/oauth/getDisplayForProvider.mjs";
import { shouldProceedtoEmbeddedWalletCreationFlow as m } from "../client/user.mjs";
import { SoftCtaButton as c } from "../components/Button.mjs";
import { RefactorSpacerTop as a, FixedGappedContainer as l, RefactorSpacerBottom as p } from "../components/Layouts.mjs";
import { ConnectionLoader as d } from "../components/Loader.mjs";
import { ModalFooter as h } from "../components/ModalFooter.mjs";
import { ModalHeader as u } from "../components/ModalHeader.mjs";
import j from "../components/layout/StackedContainer.mjs";
import { DEFAULT_SUCCESS_SCREEN_DURATION_MS as f } from "../constants.mjs";
import { PrivyErrorCode as g, PrivyUserLimitReachedError as E } from "../errors.mjs";
import { usePrivyInternal as v } from "../hooks/internal-context.mjs";
import { usePrivyModal as y } from "../hooks/modal-context.mjs";
import { usePrivyContext as C } from "../hooks/privy-context.mjs";
import { ModalScreen as A } from "./index.mjs";
import { getOAuthErrorMessage as T } from "../auth-flows/oauth/getOAuthErrorMessage.mjs";
import { stripUrlOAuthParamsAndRemoveStateCode as S } from "../auth-flows/oauth/stripUrlOAuthParamsAndRemoveStateCode.mjs";
import "../svg/apple.mjs";
import "../svg/discord.mjs";
import "../svg/github.mjs";
import "../svg/globe.mjs";
import "@heroicons/react/24/outline/GlobeAltIcon";
import "../svg/google.mjs";
import "../svg/instagram.mjs";
import "../svg/linkedin.mjs";
import "../svg/spotify.mjs";
import "../svg/tiktok.mjs";
import "../svg/twitter.mjs";
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
import "../lib/capitalizeFirstLetter.mjs";
import "../storage.mjs";
const _ = () => {
  let {
    authenticated: n,
    logout: _,
    ready: N,
    user: R
  } = C();
  let {
    app: I,
    setModalData: O,
    navigate: L,
    resetNavigation: x
  } = y();
  let {
    getAuthMeta: k,
    initLoginWithOAuth: U,
    loginWithOAuth: w,
    updateWallets: M,
    setReadyToTrue: D,
    closePrivyModal: F,
    createAnalyticsEvent: W
  } = v();
  let [z, H] = r(false);
  let [P, J] = r(undefined);
  let B = k()?.provider || "google";
  let {
    name: Q,
    component: V
  } = s(B);
  i(() => {
    w(B).then(() => {
      H(true);
      D(true);
    }).catch(o => {
      D(false);
      if (o?.privyErrorCode === g.ALLOWLIST_REJECTED) {
        J(undefined);
        x();
        L(A.ALLOWLIST_REJECTION_SCREEN);
        return;
      }
      if (o?.privyErrorCode === g.USER_LIMIT_REACHED) {
        console.error(new E(o).toString());
        J(undefined);
        x();
        L(A.USER_LIMIT_REACHED_SCREEN);
        return;
      }
      if (o?.privyErrorCode === g.USER_DOES_NOT_EXIST) {
        J(undefined);
        x();
        L(A.ACCOUNT_NOT_FOUND_SCREEN);
        return;
      }
      if (o?.privyErrorCode === g.ACCOUNT_TRANSFER_REQUIRED && o.data?.data?.nonce) {
        J(undefined);
        x();
        O({
          accountTransfer: {
            nonce: o.data?.data?.nonce,
            account: o.data?.data?.subject,
            displayName: o.data?.data?.account?.displayName,
            linkMethod: k()?.provider,
            embeddedWalletAddress: o.data?.data?.otherUser?.embeddedWalletAddress,
            oAuthUserInfo: o.data?.data?.otherUser?.oAuthUserInfo
          }
        });
        L(A.LINK_CONFLICT_SCREEN);
        return;
      }
      let {
        retryable: t,
        detail: e
      } = T(o, B);
      J({
        retryable: t,
        detail: e,
        message: "Authentication failed"
      });
    }).finally(() => {
      S();
    });
  }, [Q, B]);
  i(() => {
    if (N && n && z && R) {
      if (I?.legal.requireUsersAcceptTerms && !R.hasAcceptedTerms) {
        let o = setTimeout(() => {
          L(A.AFFIRMATIVE_CONSENT_SCREEN);
        }, f);
        return () => clearTimeout(o);
      }
      if (m(R, I?.embeddedWallets?.createOnLogin)) {
        let o = setTimeout(() => {
          O({
            createWallet: {
              onSuccess: () => {},
              onFailure: o => {
                console.error(o);
                W({
                  eventName: "embedded_wallet_creation_failure_logout",
                  payload: {
                    error: o,
                    provider: B,
                    screen: "OAuthStatusScreen"
                  }
                });
                _();
              },
              callAuthOnSuccessOnClose: true
            }
          });
          L(A.EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN);
        }, f);
        return () => clearTimeout(o);
      }
      {
        let o = setTimeout(() => F({
          shouldCallAuthOnSuccess: true,
          isSuccess: true
        }), f);
        M();
        return () => clearTimeout(o);
      }
    }
  }, [N, n, z, R]);
  let X = z ? `Successfully connected with ${Q}` : P ? P.message : `Verifying connection to ${Q}`;
  let $ = "";
  $ = z ? "You’re good to go!" : P ? P.detail : "Just a few moments more";
  return /*#__PURE__*/o(t, {
    children: [/*#__PURE__*/e(u, {}), /*#__PURE__*/e(a, {}), /*#__PURE__*/o(b, {
      children: [/*#__PURE__*/e(j, {
        children: /*#__PURE__*/o("div", {
          children: [/*#__PURE__*/e(d, {
            success: z,
            fail: !!P
          }), /*#__PURE__*/e(V, {
            style: {
              width: "38px",
              height: "38px"
            }
          })]
        })
      }), /*#__PURE__*/o(l, {
        children: [/*#__PURE__*/e("h3", {
          children: X
        }), /*#__PURE__*/e("p", {
          children: $
        })]
      }), P && P?.retryable ? /*#__PURE__*/e(c, {
        onClick: () => {
          S();
          U(B);
          J(undefined);
        },
        disabled: !z && !P?.retryable,
        children: "Retry"
      }) : null]
    }), /*#__PURE__*/e(p, {}), /*#__PURE__*/e(h, {})]
  });
};
let b = /*#__PURE__*/n.div.withConfig({
  displayName: "ConnectContainer",
  componentId: "sc-aa7588ca-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin-left:27px;margin-right:27px;gap:24px;"]);
export { _ as OAuthStatusScreen };
