import { jsx as e } from "react/jsx-runtime";
import { ModalScreen as o } from "./index.mjs";
import { useState as t, useEffect as r } from "react";
import { getPrivyPrimaryWallet as s, getEntropyDetailsFromAccount as n } from "../client/user.mjs";
import { PrivyUnauthenticatedError as i, PrivyEmbeddedWalletError as a } from "../errors.mjs";
import { usePrivyInternal as c } from "../hooks/internal-context.mjs";
import { usePrivyModal as m } from "../hooks/modal-context.mjs";
import { usePrivyContext as l } from "../hooks/privy-context.mjs";
import { generatePassphrase as d } from "../password.mjs";
import { SetWalletPasswordForm as p } from "../components/embedded-wallets/SetWalletPasswordForm/SetWalletPasswordForm.mjs";
import "viem/utils";
import "ofetch";
import "../hooks/index.mjs";
import "../components/PrefetchedImage.mjs";
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
import "fast-password-entropy";
import "secure-password-utilities";
import "secure-password-utilities/wordlists";
import "../components/embedded-wallets/SetWalletPasswordForm/ConfimWalletPasswordForm.mjs";
import "@heroicons/react/24/outline/ExclamationTriangleIcon";
import "../components/Layouts.mjs";
import "styled-components";
import "../components/ModalFooter.mjs";
import "../svg/protected-by-privy.mjs";
import "../components/ModalHeader.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../components/embedded-wallets/SetWalletPasswordForm/shared.mjs";
import "@heroicons/react/24/outline/ArrowPathIcon";
import "@heroicons/react/24/outline/EyeIcon";
import "@heroicons/react/24/outline/EyeSlashIcon";
import "../components/Button.mjs";
import "../components/Loader.mjs";
import "../components/embedded-wallets/SetWalletPasswordForm/ConfimWalletPasswordSaved.mjs";
import "../components/Checkbox.mjs";
import "../components/embedded-wallets/SetWalletPasswordForm/CreateWalletPassword.mjs";
import "@heroicons/react/24/outline/KeyIcon";
import "@heroicons/react/24/solid/CheckCircleIcon";
import "../components/embedded-wallets/SetWalletPasswordForm/SaveWalletPassword.mjs";
import "@heroicons/react/24/outline/ArrowDownTrayIcon";
import "@heroicons/react/24/outline/ClipboardDocumentCheckIcon";
import "@heroicons/react/24/outline/DocumentDuplicateIcon";
import "../components/embedded-wallets/SetWalletPasswordForm/SetWalletPasswordComplete.mjs";
import "@heroicons/react/24/solid/XCircleIcon";
import "../components/ScreenHeader.mjs";
import "../components/embedded-wallets/SetWalletPasswordForm/setWalletPassword.hooks.mjs";
const h = () => {
  let [h, w] = t(null);
  let [u, j] = t(false);
  let [y, v] = t(null);
  let [f, g] = t("");
  let {
    authenticated: b,
    getAccessToken: P,
    user: S
  } = l();
  let {
    walletProxy: C,
    refreshUser: A,
    closePrivyModal: I,
    createAnalyticsEvent: M
  } = c();
  let {
    app: _,
    navigate: x,
    data: R,
    onUserCloseViaDialogOrKeybindRef: W
  } = m();
  let {
    onSuccess: k,
    onFailure: F
  } = R.createWallet;
  let E = s(S);
  let N = h?.recoveryMethod === "user-passcode";
  let D = E?.recoveryMethod === "user-passcode";
  r(() => {
    if (!b) {
      x(o.LANDING);
      F(new i("User must be authenticated before setting a password on a Privy wallet"));
    }
  }, [b]);
  let T = () => y ? (F(y), void I({
    shouldCallAuthOnSuccess: false
  })) : N ? (k(h), void I({
    shouldCallAuthOnSuccess: false
  })) : (F(new a("Exited before password was added to wallet")), void I({
    shouldCallAuthOnSuccess: false
  }));
  W.current = T; /*#__PURE__*/
  return e(p, {
    appName: _?.name || "privy",
    config: {
      initiatedBy: "user",
      onCancel: T
    },
    error: y ? "An error has occurred, please try again." : undefined,
    buttonLoading: u,
    buttonHideAnimations: false,
    password: f,
    isResettingPassword: D,
    onPasswordGenerate: () => g(d()),
    onPasswordChange: g,
    onSubmit: async () => {
      if (N) {
        k(h);
        I({
          shouldCallAuthOnSuccess: false
        });
      } else {
        j(true);
        v(null);
        await (async () => {
          let e = await P();
          if (e && E?.address && f && C) {
            try {
              M({
                eventName: "embedded_wallet_set_recovery_started",
                payload: {
                  walletAddress: E.address,
                  existingRecoveryMethod: E.recoveryMethod,
                  targetRecoveryMethod: "user-passcode",
                  isResettingPassword: D
                }
              });
              let {
                entropyId: o,
                entropyIdVerifier: t
              } = n(E);
              if (!(await C.setRecovery({
                accessToken: e,
                entropyId: o,
                entropyIdVerifier: t,
                recoveryPassword: f,
                recoveryMethod: "user-passcode"
              })).entropyId) {
                v(new a("Error setting password on privy wallet"));
                M({
                  eventName: "embedded_wallet_set_recovery_failed",
                  payload: {
                    walletAddress: E.address,
                    existingRecoveryMethod: E.recoveryMethod,
                    targetRecoveryMethod: "user-passcode",
                    isResettingPassword: D,
                    reason: "error setting password"
                  }
                });
                return;
              }
              let r = await A();
              let i = s(r);
              if (!i) {
                v(new a("Error setting password on privy wallet"));
                M({
                  eventName: "embedded_wallet_set_recovery_failed",
                  payload: {
                    walletAddress: E.address,
                    existingRecoveryMethod: E.recoveryMethod,
                    targetRecoveryMethod: "user-passcode",
                    isResettingPassword: D,
                    reason: "wallet disconnected"
                  }
                });
                return;
              }
              w(i);
              M({
                eventName: "embedded_wallet_set_recovery_completed",
                payload: {
                  walletAddress: E.address,
                  existingRecoveryMethod: E.recoveryMethod,
                  targetRecoveryMethod: "user-passcode",
                  isResettingPassword: D
                }
              });
            } catch (e) {
              console.warn(e);
              v(e instanceof Error ? e : Error("Error setting password on privy wallet"));
              M({
                eventName: "embedded_wallet_set_password_failed",
                payload: {
                  walletAddress: E.address,
                  reason: e
                }
              });
            }
          }
        })();
        j(false);
      }
    },
    onClose: T
  });
};
export { h as EmbeddedWalletPasswordUpdateScreen };
