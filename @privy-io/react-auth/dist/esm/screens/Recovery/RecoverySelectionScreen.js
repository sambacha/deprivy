import { jsxs as o, jsx as e, Fragment as r } from "react/jsx-runtime";
import { ModalScreen as t } from "../index.mjs";
import i from "@heroicons/react/24/outline/LockClosedIcon";
import n from "@heroicons/react/24/outline/PencilSquareIcon";
import s from "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import { useState as c } from "react";
import { styled as m } from "styled-components";
import { getPrivyPrimaryWallet as a } from "../../client/user.mjs";
import { PrimaryButton as l } from "../../components/Button.mjs";
import { BlobbyFooter as p } from "../../components/ModalFooter.mjs";
import { ModalHeader as d } from "../../components/ModalHeader.mjs";
import { CenteredScreenHeader as h } from "../../components/ScreenHeader.mjs";
import { useAppConfig as u } from "../../configuration/context.mjs";
import { usePrivyInternal as j } from "../../hooks/internal-context.mjs";
import { usePrivyModal as y } from "../../hooks/modal-context.mjs";
import { usePrivyContext as f } from "../../hooks/privy-context.mjs";
import { embeddedWalletSetPasswordScreen as g } from "../../lib/embeddedWalletRecovery.mjs";
import { AppleICloud as v } from "../../svg/apple-icloud.mjs";
import { GoogleDrive as w } from "../../svg/google-drive.mjs";
import { LoginMethodButton as C } from "../LandingScreen/styles.mjs";
import { RecoveryContainer as k, RecoveryExplainerContainer as S } from "./styles.mjs";
import "viem/utils";
import "../../components/Loader.mjs";
import "../../svg/protected-by-privy.mjs";
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
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../../hooks/index.mjs";
import "../../components/PrefetchedImage.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../paths.mjs";
import "../../lib/pkce.mjs";
import "jose";
import "../../crypto.mjs";
import "../../storage.mjs";
let b = /*#__PURE__*/m.div.withConfig({
  displayName: "IconContainer",
  componentId: "sc-6716a2fa-0"
})(["width:24px;height:24px;display:flex;justify-content:center;align-items:center;"]);
let A = {
  "google-drive": "Google Drive",
  icloud: "iCloud",
  "user-passcode": "password",
  privy: "Privy"
};
let x = ({
  onClose: t
}) => /*#__PURE__*/o(S, {
  children: [/*#__PURE__*/e(h, {
    title: "Why do I need to secure my account?",
    icon: /*#__PURE__*/e(s, {
      width: 48
    }),
    description: /*#__PURE__*/o(r, {
      children: [/*#__PURE__*/e("p", {
        children: "Your app uses cryptography to secure your account. App secrets are split and encrypted so only you can access them."
      }), /*#__PURE__*/e("p", {
        children: "To use this app on new devices, secure account secrets using a password, your Google or your Apple account. It’s important you don’t lose access to the method you choose."
      })]
    })
  }), /*#__PURE__*/e(l, {
    onClick: t,
    children: "Select backup method"
  })]
});
const I = () => {
  let [s, m] = c(false);
  let {
    navigate: l,
    lastScreen: S,
    navigateBack: I,
    setModalData: M,
    data: E,
    onUserCloseViaDialogOrKeybindRef: O
  } = y();
  let {
    user: R
  } = f();
  let {
    embeddedWallets: D
  } = u();
  let {
    closePrivyModal: F
  } = j();
  let P = a(R);
  let W = P === null;
  let {
    isInAccountCreateFlow: L,
    isResettingPassword: B
  } = E.recoverySelection;
  let T = P && P.recoveryMethod !== "privy";
  let H = T ? /*#__PURE__*/o("span", {
    children: ["Your account is currently secured using", " ", /*#__PURE__*/e("strong", {
      children: A[P?.recoveryMethod || "user-passcode"]
    }), "."]
  }) : "Select a method for logging in on new devices and recovering your account.";
  function U(o) {
    M({
      recoveryOAuthStatus: {
        provider: o,
        action: W ? "create-wallet" : "set-recovery",
        isInAccountCreateFlow: L
      }
    });
    l(t.EMBEDDED_WALLET_RECOVERY_OAUTH_SCREEN);
  }
  function _() {
    E?.setWalletPassword?.onFailure(Error("User exited set recovery flow"));
    F({
      shouldCallAuthOnSuccess: E?.setWalletPassword?.callAuthOnSuccessOnClose ?? false
    });
  }
  O.current = _;
  return /*#__PURE__*/o(r, {
    children: [/*#__PURE__*/e(d, {
      onClose: _,
      backFn: s ? () => m(false) : S ? I : undefined,
      infoFn: S || s ? undefined : () => m(true)
    }, "header"), s ? /*#__PURE__*/e(x, {
      onClose: () => m(false)
    }) : /*#__PURE__*/o(r, {
      children: [/*#__PURE__*/e(h, {
        title: T ? "Update backup method" : "Secure your account",
        icon: /*#__PURE__*/e(i, {
          width: 48
        }),
        description: H
      }), /*#__PURE__*/e(k, {
        children: D.userOwnedRecoveryOptions.filter(o => !["icloud", "google-drive"].includes(P?.recoveryMethod || "") || o !== P?.recoveryMethod).sort().map(r => {
          switch (r) {
            case "google-drive":
              /*#__PURE__*/return o(C, {
                onClick: () => U("google-drive"),
                children: [/*#__PURE__*/e(b, {
                  children: /*#__PURE__*/e(w, {
                    style: {
                      width: 18
                    }
                  })
                }), "Back up to Google Drive"]
              }, r);
            case "icloud":
              /*#__PURE__*/return o(C, {
                onClick: () => U("icloud"),
                children: [/*#__PURE__*/e(b, {
                  children: /*#__PURE__*/e(v, {
                    style: {
                      width: 24
                    }
                  })
                }), "Back up to Apple iCloud"]
              }, r);
            case "user-passcode":
              /*#__PURE__*/return o(C, {
                onClick: () => {
                  l(g({
                    isCreatingWallet: W,
                    skipSplashScreen: true
                  }));
                },
                children: [/*#__PURE__*/e(b, {
                  children: /*#__PURE__*/e(n, {
                    style: {
                      width: 18
                    }
                  })
                }), B ? "Reset your" : "Set a", " password"]
              }, r);
            default:
              return null;
          }
        })
      })]
    }), /*#__PURE__*/e(p, {})]
  });
};
export { I as RecoverySelectionScreen };
