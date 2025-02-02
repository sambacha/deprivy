import { jsxs as e, Fragment as o, jsx as t } from "react/jsx-runtime";
import { ModalScreen as r } from "./index.mjs";
import { useState as n, useRef as i, useEffect as s } from "react";
import { isMobile as a, isIOS as c } from "react-device-detect";
import { styled as m } from "styled-components";
import { shouldProceedtoEmbeddedWalletCreationFlow as l } from "../client/user.mjs";
import { PrimaryButton as p } from "../components/Button.mjs";
import { CopytoClipboardButton as d } from "../components/CopyToClipboard.mjs";
import { RefactorSpacerTop as h, FixedGappedContainer as u, CenteredItem as j, CenteredItemWithPadding as f } from "../components/Layouts.mjs";
import { ConnectionLoader as g, Loader as E } from "../components/Loader.mjs";
import { ModalFooter as y } from "../components/ModalFooter.mjs";
import { ModalHeader as C } from "../components/ModalHeader.mjs";
import { OpenLinkButton as v } from "../components/OpenLink.mjs";
import { QrCode as T } from "../components/QrCode.mjs";
import S from "../components/layout/StackedContainer.mjs";
import { DEFAULT_SUCCESS_SCREEN_DURATION_MS as _ } from "../constants.mjs";
import { PrivyErrorCode as A, PrivyUserLimitReachedError as N } from "../errors.mjs";
import { usePrivyInternal as b } from "../hooks/internal-context.mjs";
import { usePrivyModal as I } from "../hooks/modal-context.mjs";
import { usePrivyContext as w } from "../hooks/privy-context.mjs";
import { Farcaster as x } from "../svg/farcaster.mjs";
import { Title as R, SubTitle as k } from "./MfaScreens/StyledComponents.mjs";
import "viem/utils";
import "../svg/checkmark.mjs";
import "../svg/copy.mjs";
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
import "qrcode";
import "../svg/black-rounded-square.mjs";
import "../utils/index.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../utils/eth/getPublicClient.mjs";
import "viem";
import "ofetch";
import "../components/PrefetchedImage.mjs";
let O = "#8a63d2";
const L = () => {
  let {
    authenticated: m,
    logout: L,
    ready: U,
    user: M
  } = w();
  let {
    lastScreen: W,
    navigate: q,
    navigateBack: H,
    setModalData: z,
    app: B
  } = I();
  let {
    getAuthFlow: P,
    loginWithFarcaster: Q,
    closePrivyModal: J,
    createAnalyticsEvent: K
  } = b();
  let [V, X] = n(undefined);
  let [Y, G] = n(false);
  let [Z, $] = n(false);
  let ee = i([]);
  let oe = P();
  let te = oe?.meta.connectUri;
  s(() => {
    let e = Date.now();
    let o = setInterval(async () => {
      let t = await oe.pollForReady.execute();
      let n = Date.now() - e;
      if (t) {
        clearInterval(o);
        G(true);
        try {
          await Q();
          $(true);
        } catch (e) {
          let o = {
            retryable: false,
            message: "Authentication failed"
          };
          if (e?.privyErrorCode === A.ALLOWLIST_REJECTED) {
            q(r.ALLOWLIST_REJECTION_SCREEN);
            return;
          }
          if (e?.privyErrorCode === A.USER_LIMIT_REACHED) {
            console.error(new N(e).toString());
            q(r.USER_LIMIT_REACHED_SCREEN);
            return;
          }
          if (e?.privyErrorCode === A.USER_DOES_NOT_EXIST) {
            q(r.ACCOUNT_NOT_FOUND_SCREEN);
            return;
          }
          if (e?.privyErrorCode === A.LINKED_TO_ANOTHER_USER) {
            o.detail = e.message ?? "This account has already been linked to another user.";
          } else {
            if (e?.privyErrorCode === A.ACCOUNT_TRANSFER_REQUIRED && e.data?.data?.nonce) {
              z({
                accountTransfer: {
                  nonce: e.data?.data?.nonce,
                  account: e.data?.data?.subject,
                  displayName: e.data?.data?.account?.displayName,
                  linkMethod: "farcaster",
                  embeddedWalletAddress: e.data?.data?.otherUser?.embeddedWalletAddress,
                  farcasterEmbeddedAddress: e.data?.data?.otherUser?.farcasterEmbeddedAddress
                }
              });
              q(r.LINK_CONFLICT_SCREEN);
              return;
            }
            if (e?.privyErrorCode === A.INVALID_CREDENTIALS) {
              o.retryable = true;
              o.detail = "Something went wrong. Try again.";
            } else if (e?.privyErrorCode === A.TOO_MANY_REQUESTS) {
              o.detail = "Too many requests. Please wait before trying again.";
            }
          }
          X(o);
        }
      } else if (n > 120000) {
        clearInterval(o);
        X({
          retryable: true,
          message: "Authentication failed",
          detail: "The request timed out. Try again."
        });
      }
    }, 2000);
    return () => {
      clearInterval(o);
      ee.current.forEach(e => clearTimeout(e));
    };
  }, []);
  s(() => {
    if (U && m && Z && M) {
      if (B?.legal.requireUsersAcceptTerms && !M.hasAcceptedTerms) {
        let e = setTimeout(() => {
          q(r.AFFIRMATIVE_CONSENT_SCREEN);
        }, _);
        return () => clearTimeout(e);
      }
      if (Z) {
        if (l(M, B?.embeddedWallets.createOnLogin)) {
          ee.current.push(setTimeout(() => {
            z({
              createWallet: {
                onSuccess: () => {},
                onFailure: e => {
                  console.error(e);
                  K({
                    eventName: "embedded_wallet_creation_failure_logout",
                    payload: {
                      error: e,
                      screen: "FarcasterConnectStatusScreen"
                    }
                  });
                  L();
                },
                callAuthOnSuccessOnClose: true
              }
            });
            q(r.EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN);
          }, _));
        } else {
          ee.current.push(setTimeout(() => J({
            shouldCallAuthOnSuccess: true,
            isSuccess: true
          }), _));
        }
      }
    }
  }, [Z, U, m, M]);
  return /*#__PURE__*/e(o, a || Y ? {
    children: [/*#__PURE__*/t(C, {
      backFn: W ? H : undefined,
      onClose: J
    }, "header"), /*#__PURE__*/t(h, {}), /*#__PURE__*/t(o, c ? {
      children: /*#__PURE__*/e(D, {
        children: [/*#__PURE__*/t(S, {
          children: /*#__PURE__*/e("div", {
            children: [/*#__PURE__*/t(g, {
              success: Z,
              fail: !!V
            }), /*#__PURE__*/t(x, {
              style: {
                width: "38px",
                height: "38px"
              }
            })]
          })
        }), /*#__PURE__*/e(u, {
          children: [/*#__PURE__*/t(R, {
            children: V ? V.message : "Sign in with Farcaster"
          }), /*#__PURE__*/t(k, {
            children: V ? V.detail : "To sign in with Farcaster, please open the Warpcast app."
          })]
        }), te && /*#__PURE__*/t(p, {
          onClick: e => {
            e.preventDefault();
            window.location.href = te;
          },
          children: "Open Warpcast app"
        })]
      })
    } : {
      children: /*#__PURE__*/e(F, {
        children: [/*#__PURE__*/t(S, {
          children: /*#__PURE__*/e("div", {
            children: [/*#__PURE__*/t(g, {
              success: Z,
              fail: !!V
            }), /*#__PURE__*/t(x, {
              style: {
                width: "38px",
                height: "38px"
              }
            })]
          })
        }), /*#__PURE__*/e(u, {
          children: [/*#__PURE__*/t(R, {
            children: V ? V.message : "Signing in with Farcaster"
          }), /*#__PURE__*/t(k, {
            children: V ? V.detail : "This should only take a moment"
          }), /*#__PURE__*/t(j, {
            children: te && a && /*#__PURE__*/t(v, {
              text: "Take me to Warpcast",
              url: te,
              color: O
            })
          })]
        })]
      })
    }), /*#__PURE__*/t(y, {})]
  } : {
    children: [/*#__PURE__*/t(C, {
      backFn: W ? H : undefined,
      onClose: J
    }, "header"), /*#__PURE__*/t(h, {}), /*#__PURE__*/t(F, {
      children: /*#__PURE__*/e("div", {
        children: [/*#__PURE__*/t(R, {
          children: "Sign in with Farcaster"
        }), /*#__PURE__*/t(k, {
          children: "Scan with your phone's camera to continue."
        }), /*#__PURE__*/t(f, {
          children: te ? /*#__PURE__*/t(T, {
            url: te,
            size: 275,
            squareLogoElement: x
          }) : /*#__PURE__*/t(E, {})
        }), /*#__PURE__*/e(j, {
          children: [/*#__PURE__*/t(k, {
            children: "Or copy this link and paste it into a phone browser to open the Warpcast app."
          }), te && /*#__PURE__*/t(d, {
            text: te,
            itemName: "link",
            color: O
          })]
        })]
      })
    }), /*#__PURE__*/t(y, {})]
  });
};
let F = /*#__PURE__*/m.div.withConfig({
  displayName: "ConnectContainer",
  componentId: "sc-5a361367-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin-left:27px;margin-right:27px;gap:24px;"]);
let D = /*#__PURE__*/m.div.withConfig({
  displayName: "ConnectContainerButton",
  componentId: "sc-5a361367-1"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;width:100%;"]);
export { L as FarcasterConnectStatusScreen };
