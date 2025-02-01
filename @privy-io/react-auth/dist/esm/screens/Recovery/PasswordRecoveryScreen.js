import { jsxs as o, Fragment as e, jsx as r } from "react/jsx-runtime";
import t from "@heroicons/react/24/outline/ShieldCheckIcon";
import { useState as n, useEffect as i } from "react";
import { styled as s, css as c } from "styled-components";
import { getPrivyWalletWithAddress as a } from "../../client/user.mjs";
import { PrimaryButton as m } from "../../components/Button.mjs";
import { RefactorSpacerTop as l, StyledCalloutSection as p, RefactorSpacerBottom as d } from "../../components/Layouts.mjs";
import { BlobbyFooter as h } from "../../components/ModalFooter.mjs";
import { ModalHeader as y } from "../../components/ModalHeader.mjs";
import { PasswordContainer as u, PasswordInput as f, InputRightIcons as j, HiddenIcon as v, ShownIcon as g } from "../../components/embedded-wallets/SetWalletPasswordForm/shared.mjs";
import { errorIndicatesInvalidRecoveryPassword as w } from "../../embedded-wallets/errors.mjs";
import { PrivyEmbeddedWalletError as x } from "../../errors.mjs";
import { usePrivyInternal as b } from "../../hooks/internal-context.mjs";
import { usePrivyModal as C } from "../../hooks/modal-context.mjs";
import { usePrivyContext as I } from "../../hooks/privy-context.mjs";
import "viem/utils";
import "../../components/Loader.mjs";
import "../../configuration/context.mjs";
import "../../config.mjs";
import "../../configuration/defaultClientConfig.mjs";
import "../../constants.mjs";
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
import "@heroicons/react/24/outline/ArrowPathIcon";
import "@heroicons/react/24/outline/EyeIcon";
import "@heroicons/react/24/outline/EyeSlashIcon";
import "../../embedded-wallets/types.mjs";
import "ofetch";
import "../../components/PrefetchedImage.mjs";
import "../index.mjs";
const k = () => {
  let [s, c] = n(true);
  let {
    authenticated: m,
    getAccessToken: k,
    user: T
  } = I();
  let {
    walletProxy: z,
    closePrivyModal: M,
    createAnalyticsEvent: _
  } = b();
  let {
    navigate: E,
    data: F,
    onUserCloseViaDialogOrKeybindRef: R
  } = C();
  let [U, H] = n(undefined);
  let [L, O] = n("");
  let [V, W] = n(false);
  let {
    entropyId: B,
    entropyIdVerifier: D,
    onCompleteNavigateTo: K,
    onSuccess: Q,
    onFailure: X
  } = F.recoverWallet;
  let Y = (o = "User exited before their wallet could be recovered") => {
    M({
      shouldCallAuthOnSuccess: false
    });
    X(typeof o == "string" ? new x(o) : o);
  };
  R.current = Y;
  i(() => {
    if (!m) {
      return Y("User must be authenticated and have a Privy wallet before it can be recovered");
    }
  }, [m]);
  /*#__PURE__*/
  return o(e, {
    children: [/*#__PURE__*/r(y, {
      onClose: Y
    }), /*#__PURE__*/r(l, {}), /*#__PURE__*/o(P, {
      children: [/*#__PURE__*/o(A, {
        children: [/*#__PURE__*/r(t, {
          height: 48,
          width: 48,
          stroke: "var(--privy-color-accent)"
        }), /*#__PURE__*/r("h3", {
          style: {
            color: "var(--privy-color-foreground)"
          },
          children: "Enter your password"
        }), /*#__PURE__*/r("p", {
          style: {
            color: "var(--privy-color-foreground-2)"
          },
          children: "Please provision your account on this new device. To continue, enter your recovery password."
        })]
      }), /*#__PURE__*/o("div", {
        children: [/*#__PURE__*/o(u, {
          children: [/*#__PURE__*/r(f, {
            type: s ? "password" : "text",
            onChange: o => (o => {
              if (o) {
                H(o);
              }
            })(o.target.value),
            disabled: V,
            style: {
              paddingRight: "2.3rem"
            }
          }), /*#__PURE__*/r(j, {
            style: {
              right: "0.75rem"
            },
            children: s ? /*#__PURE__*/r(v, {
              onClick: () => c(false)
            }) : /*#__PURE__*/r(g, {
              onClick: () => c(true)
            })
          })]
        }), !!L && /*#__PURE__*/r(S, {
          children: L
        })]
      }), /*#__PURE__*/o("div", {
        children: [/*#__PURE__*/o(p, {
          children: [/*#__PURE__*/r("h4", {
            children: "Why is this necessary?"
          }), /*#__PURE__*/r("p", {
            children: "You previously set a password for this wallet. This helps ensure only you can access it"
          })]
        }), /*#__PURE__*/r(N, {
          loading: V || !z,
          disabled: !U,
          onClick: async () => {
            W(true);
            let o = await k();
            let e = a(T, B);
            if (!o || !e || U === null) {
              return Y("User must be authenticated and have a Privy wallet before it can be recovered");
            }
            try {
              _({
                eventName: "embedded_wallet_recovery_started",
                payload: {
                  walletAddress: e.address
                }
              });
              await z?.recover({
                accessToken: o,
                entropyId: B,
                entropyIdVerifier: D,
                recoveryPassword: U
              });
              O("");
              if (K) {
                E(K);
              } else {
                M({
                  shouldCallAuthOnSuccess: false
                });
              }
              Q?.(e);
              _({
                eventName: "embedded_wallet_recovery_completed",
                payload: {
                  walletAddress: e.address
                }
              });
            } catch (o) {
              if (w(o)) {
                O("Invalid recovery password, please try again.");
              } else {
                O("An error has occurred, please try again.");
              }
            } finally {
              W(false);
            }
          },
          warn: false,
          hideAnimations: !B && V,
          children: "Recover your account"
        })]
      })]
    }), /*#__PURE__*/r(d, {}), /*#__PURE__*/r(h, {})]
  });
};
const A = /*#__PURE__*/s.div.withConfig({
  displayName: "Header",
  componentId: "sc-858d1103-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin:20px 0;gap:4px;& h3{font-size:18px;font-style:normal;font-weight:600;line-height:24px;}& p{max-width:300px;font-size:14px;font-style:normal;font-weight:400;line-height:20px;}"]);
let P = /*#__PURE__*/s.div.withConfig({
  displayName: "Content",
  componentId: "sc-858d1103-1"
})(["display:flex;flex-direction:column;justify-content:space-between;"]);
let S = /*#__PURE__*/s.div.withConfig({
  displayName: "ErrorMessage",
  componentId: "sc-858d1103-2"
})(["line-height:20px;height:20px;font-size:13px;color:var(--privy-color-error);text-align:left;margin-top:0.5rem;"]);
let N = /*#__PURE__*/s(m).withConfig({
  displayName: "NoAnimationPrimaryButton",
  componentId: "sc-858d1103-3"
})(["", ""], o => o.hideAnimations && /*#__PURE__*/c(["&&{transition:none;}"]));
export { A as Header, k as PasswordRecoveryScreen };
