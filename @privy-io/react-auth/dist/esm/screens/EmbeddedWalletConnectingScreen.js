import { jsxs as o, Fragment as e, jsx as t } from "react/jsx-runtime";
import r from "@heroicons/react/24/solid/XCircleIcon";
import { useMemo as n, useState as i, useEffect as s } from "react";
import { styled as c } from "styled-components";
import { getPrivyWalletWithAddress as m } from "../client/user.mjs";
import { PrimaryButton as a } from "../components/Button.mjs";
import { CenteredItemWithGap as l } from "../components/Layouts.mjs";
import { ModalHeader as p } from "../components/ModalHeader.mjs";
import { CenteredScreenHeader as d } from "../components/ScreenHeader.mjs";
import { FullScreenLoadingSpinner as h } from "../components/primitives/LoadingSpinner/index.mjs";
import { errorIndicatesRecoveryIsNeeded as j } from "../embedded-wallets/errors.mjs";
import { usePrivyInternal as u } from "../hooks/internal-context.mjs";
import { usePrivyModal as y } from "../hooks/modal-context.mjs";
import { usePrivyContext as f } from "../hooks/privy-context.mjs";
import { embeddedWalletRecoveryScreen as v } from "../lib/embeddedWalletRecovery.mjs";
import { ModalScreen as b } from "./index.mjs";
import "viem/utils";
import "../components/Loader.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
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
import "../hooks/index.mjs";
import "../embedded-wallets/types.mjs";
import "../components/PrefetchedImage.mjs";
import "../errors.mjs";
import "ofetch";
import "../paths.mjs";
import "../lib/pkce.mjs";
import "jose";
import "../crypto.mjs";
import "../storage.mjs";
const g = () => {
  let {
    authenticated: c,
    user: g,
    getAccessToken: A
  } = f();
  let {
    closePrivyModal: C,
    createAnalyticsEvent: I,
    walletProxy: x
  } = u();
  let {
    navigate: k,
    data: S,
    setModalData: M,
    onUserCloseViaDialogOrKeybindRef: T
  } = y();
  let E = n(() => Date.now(), []);
  let [_, P] = i(false);
  let {
    onCompleteNavigateTo: D,
    onFailure: F,
    shouldForceMFA: L,
    entropyId: N,
    entropyIdVerifier: O
  } = S?.connectWallet;
  let U = o => {
    if (!_) {
      P(true);
      F(typeof o == "string" ? Error(o) : o);
    }
  };
  s(() => {
    let o;
    let e = m(g, N);
    if (c && e) {
      if (x) {
        (async () => {
          let t = await A();
          if (!t) {
            return U("User must be authenticated and have a Privy wallet before it can be connected");
          }
          try {
            await x.connect({
              accessToken: t,
              entropyId: N,
              entropyIdVerifier: O
            });
            if (L) {
              await x.verifyMfa({
                accessToken: t
              });
            }
            let e = (Date.now() - E) / 1000;
            if (D === b.EMBEDDED_WALLET_KEY_EXPORT_SCREEN && e < 1) {
              o = setTimeout(() => {
                k(D, false);
              }, (1 - e) * 1000);
            } else {
              k(D, false);
            }
          } catch (o) {
            if (j(o) && e.recoveryMethod === "privy") {
              let o = await A();
              if (!o) {
                return U("User must be authenticated and have a Privy wallet before it can be recovered");
              }
              try {
                I({
                  eventName: "embedded_wallet_pinless_recovery_started",
                  payload: {
                    walletAddress: e.address
                  }
                });
                let t = await x?.recover({
                  accessToken: o,
                  entropyId: N,
                  entropyIdVerifier: O
                });
                if (!t?.entropyId) {
                  U(Error("Unable to recover wallet"));
                }
                if (D) {
                  k(D);
                } else {
                  C({
                    shouldCallAuthOnSuccess: false
                  });
                }
                I({
                  eventName: "embedded_wallet_recovery_completed",
                  payload: {
                    walletAddress: e.address
                  }
                });
                k(D);
              } catch (o) {
                U("An error has occurred, please try again.");
              }
            } else if (j(o) && e.recoveryMethod !== "privy") {
              M({
                ...S,
                recoverWallet: {
                  entropyId: N,
                  entropyIdVerifier: O,
                  onCompleteNavigateTo: D,
                  onFailure: F
                },
                recoveryOAuthStatus: {
                  provider: e.recoveryMethod,
                  action: "recover",
                  isInAccountCreateFlow: false
                }
              });
              k(v(e.recoveryMethod));
            } else {
              U(o);
            }
          }
        })();
        return () => clearTimeout(o);
      } else {
        return undefined;
      }
    } else {
      return U("User must be authenticated and have a Privy wallet before it can be connected");
    }
  }, [c, g, x]);
  let R = () => {
    U("User exited before wallet could be connected");
    C({
      shouldCallAuthOnSuccess: false
    });
  };
  T.current = R;
  return /*#__PURE__*/o(e, {
    children: [/*#__PURE__*/t(p, {
      onClose: R
    }), _ ? /*#__PURE__*/o(e, {
      children: [/*#__PURE__*/o(l, {
        children: [/*#__PURE__*/t(r, {
          fill: "var(--privy-color-error)",
          width: "64px",
          height: "64px"
        }), /*#__PURE__*/t(d, {
          title: "Something went wrong",
          description: "We’re on it. Please try again later."
        })]
      }), /*#__PURE__*/t(a, {
        onClick: () => C({
          shouldCallAuthOnSuccess: false
        }),
        children: "Close"
      })]
    }) : /*#__PURE__*/t(h, {}), /*#__PURE__*/t(w, {})]
  });
};
let w = /*#__PURE__*/c.div.withConfig({
  displayName: "BottomSpacing",
  componentId: "sc-124dbb1c-0"
})(["height:44px;"]);
export { g as EmbeddedWalletConnectingScreen };
