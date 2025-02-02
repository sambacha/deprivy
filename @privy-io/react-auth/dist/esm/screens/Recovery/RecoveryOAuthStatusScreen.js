import { jsxs as o, Fragment as e, jsx as t } from "react/jsx-runtime";
import { useState as r, useEffect as i, useCallback as n } from "react";
import { PrimaryButton as c } from "../../components/Button.mjs";
import { BlobbyFooter as s } from "../../components/ModalFooter.mjs";
import { ModalHeader as m } from "../../components/ModalHeader.mjs";
import { CenteredScreenHeader as a } from "../../components/ScreenHeader.mjs";
import { DEFAULT_SUCCESS_SCREEN_DURATION_MS as l } from "../../constants.mjs";
import { RunEffectOnce as p } from "../../effect.mjs";
import { usePrivyInternal as h } from "../../hooks/internal-context.mjs";
import { usePrivyModal as u } from "../../hooks/modal-context.mjs";
import { usePrivyContext as d } from "../../hooks/privy-context.mjs";
import { AppleICloud as j } from "../../svg/apple-icloud.mjs";
import { GoogleDrive as f } from "../../svg/google-drive.mjs";
import { ModalScreen as y } from "../index.mjs";
import { RecoveryContainer as v } from "./styles.mjs";
import { stripUrlOAuthParamsAndRemoveStateCode as g } from "../../auth-flows/oauth/stripUrlOAuthParamsAndRemoveStateCode.mjs";
import "styled-components";
import "../../components/Loader.mjs";
import "../../configuration/context.mjs";
import "../../config.mjs";
import "../../configuration/defaultClientConfig.mjs";
import "../../configuration/login-methods.mjs";
import "../../configuration/wallets.mjs";
import "../../connectors/chains/index.mjs";
import "../../connectors/chains/arbitrum.mjs";
import "../../connectors/chains/arbitrumSepolia.mjs";
import "../../connectors/chains/avalanche.mjs";
import "../../connectors/chains/avalancheFuji.mjs";
import "../../connectors/chains/base.mjs";
import "../../connectors/chains/baseSepolia.mjs";
import "../../connectors/chains/berachainArtio.mjs";
import "../../connectors/chains/celo.mjs";
import "../../connectors/chains/celoAlfajores.mjs";
import "../../connectors/chains/filecoin.mjs";
import "../../connectors/chains/filecoinCalibration.mjs";
import "../../connectors/chains/garnetHolesky.mjs";
import "../../connectors/chains/holesky.mjs";
import "../../connectors/chains/linea.mjs";
import "../../connectors/chains/lineaTestnet.mjs";
import "../../connectors/chains/lukso.mjs";
import "../../connectors/chains/mainnet.mjs";
import "../../connectors/chains/optimism.mjs";
import "../../connectors/chains/optimismSepolia.mjs";
import "../../connectors/chains/polygon.mjs";
import "../../connectors/chains/polygonAmoy.mjs";
import "../../connectors/chains/redstone.mjs";
import "../../connectors/chains/sepolia.mjs";
import "../../connectors/chains/zora.mjs";
import "../../connectors/chains/zoraSepolia.mjs";
import "../../connectors/chains/zoraTestnet.mjs";
import "../../connectors/chains/utils.mjs";
import "../../lib/solana/index.mjs";
import "../../theme.mjs";
import "tinycolor2";
import "../../lib/cybr53.mjs";
import "../../svg/protected-by-privy.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../../hooks/index.mjs";
import "../../components/PrefetchedImage.mjs";
import "../../storage.mjs";
let w = {
  "google-drive": {
    name: "Google Drive",
    component: f
  },
  icloud: {
    name: "iCloud",
    component: j
  }
};
const b = () => {
  let {
    logout: j
  } = d();
  let {
    navigate: f,
    setModalData: b,
    data: A
  } = u();
  let {
    recoveryOAuthFlow: C,
    closePrivyModal: k,
    createAnalyticsEvent: x
  } = h();
  let [S, E] = r(false);
  let {
    provider: T,
    action: M,
    isInAccountCreateFlow: O
  } = A?.recoveryOAuthStatus;
  let [R, $] = r(undefined);
  let [D, _] = r(M === "create-wallet");
  if (T === "user-passcode") {
    throw Error("RecoveryOAuthScreen should never be called with a wallet that specifies recoveryMethod: `user-passcode`");
  }
  let I = w[T].name;
  let F = w[T].component;
  let P = A?.recoverWallet?.onCompleteNavigateTo;
  let B = new p(async (o = "create-wallet") => {
    _(true);
    return new Promise((e, t) => {
      setTimeout(async () => {
        try {
          let t = window.open();
          await C(T, o, t);
          E(true);
          e();
        } catch (e) {
          $({
            message: `${o === "recover" ? "Recovery" : "Back up"} with ${I} unsuccessful`,
            detail: M === "recover" ? `Please verify that you are selecting the ${I} account associated with your backup.` : "",
            retryable: true
          });
          t();
        }
      }, 0);
    });
  });
  i(() => {
    if (M !== "recover") {
      B.execute(O ? "create-wallet" : "set-recovery");
    }
  }, []);
  i(() => {
    if (!S) {
      return;
    }
    let o = setTimeout(() => {
      if (O) {
        b({
          createWallet: {
            onSuccess: () => {},
            onFailure: o => {
              x({
                eventName: "embedded_wallet_creation_failure_logout",
                payload: {
                  error: o,
                  screen: "RecoveryOAuthScreen"
                }
              });
              j();
            },
            callAuthOnSuccessOnClose: true
          }
        });
        f(y.EMBEDDED_WALLET_CREATED_SCREEN);
      } else {
        k({
          shouldCallAuthOnSuccess: false
        });
      }
    }, l);
    return () => clearTimeout(o);
  }, [S]);
  let L = n(async () => {
    await B.execute("recover");
    if (P) {
      f(P);
    } else {
      E(true);
    }
  }, []);
  let z = T === "google-drive" ? "Google Drive" : "Apple iCloud";
  let H = S && `Successfully ${M === "recover" ? "recovered" : "backed up"} with ${z}.` || R && R.message || `${M === "recover" ? "Recovering" : "Backing up"} with ${z}...`;
  let N = R ? R.detail : "";
  /*#__PURE__*/
  return o(e, {
    children: [/*#__PURE__*/t(m, {}), D ? /*#__PURE__*/t(e, {
      children: /*#__PURE__*/o(v, {
        children: [/*#__PURE__*/t(a, {
          title: H,
          icon: /*#__PURE__*/t(F, {
            style: {
              width: "38px",
              height: "38px"
            }
          }),
          description: N
        }), R && R?.retryable ? /*#__PURE__*/t(c, {
          onClick: () => {
            g();
            $(undefined);
            if (M === "create-wallet") {
              B.execute("create-wallet");
            } else {
              L();
            }
          },
          disabled: !S && !R?.retryable,
          children: "Try again"
        }) : null]
      })
    }) : /*#__PURE__*/o(v, {
      children: [/*#__PURE__*/t(a, {
        title: "Confirm it's really you",
        icon: /*#__PURE__*/t(F, {
          style: {
            height: 42,
            width: 48
          }
        }),
        description: `To confirm your identity, please log in to ${z} where your account is backed up.`
      }), /*#__PURE__*/o(c, {
        onClick: L,
        children: ["Confirm with ", z]
      })]
    }), /*#__PURE__*/t(s, {})]
  });
};
export { b as RecoveryOAuthScreen };
