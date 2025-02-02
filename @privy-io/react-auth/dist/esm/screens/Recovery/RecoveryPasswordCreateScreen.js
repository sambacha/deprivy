import { jsx as o } from "react/jsx-runtime";
import { useState as e, useEffect as t } from "react";
import { ModalScreen as s } from "../index.mjs";
import { RunEffectOnce as r } from "../../effect.mjs";
import { PrivyEmbeddedWalletError as n } from "../../errors.mjs";
import { usePrivyInternal as i } from "../../hooks/internal-context.mjs";
import { usePrivyModal as m } from "../../hooks/modal-context.mjs";
import { usePrivyContext as c } from "../../hooks/privy-context.mjs";
import { useCreateWallet as a } from "../../hooks/useEmbeddedWalletCreate.mjs";
import { generatePassphrase as l } from "../../password.mjs";
import { SetWalletPasswordForm as p } from "../../components/embedded-wallets/SetWalletPasswordForm/SetWalletPasswordForm.mjs";
import "ofetch";
import "../../hooks/index.mjs";
import "../../components/PrefetchedImage.mjs";
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
import "../../client/user.mjs";
import "viem/utils";
import "fast-password-entropy";
import "secure-password-utilities";
import "secure-password-utilities/wordlists";
import "../../components/embedded-wallets/SetWalletPasswordForm/ConfimWalletPasswordForm.mjs";
import "@heroicons/react/24/outline/ExclamationTriangleIcon";
import "../../components/Layouts.mjs";
import "styled-components";
import "../../components/ModalFooter.mjs";
import "../../svg/protected-by-privy.mjs";
import "../../components/ModalHeader.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../../components/embedded-wallets/SetWalletPasswordForm/shared.mjs";
import "@heroicons/react/24/outline/ArrowPathIcon";
import "@heroicons/react/24/outline/EyeIcon";
import "@heroicons/react/24/outline/EyeSlashIcon";
import "../../components/Button.mjs";
import "../../components/Loader.mjs";
import "../../components/embedded-wallets/SetWalletPasswordForm/ConfimWalletPasswordSaved.mjs";
import "../../components/Checkbox.mjs";
import "../../components/embedded-wallets/SetWalletPasswordForm/CreateWalletPassword.mjs";
import "@heroicons/react/24/outline/KeyIcon";
import "@heroicons/react/24/solid/CheckCircleIcon";
import "../../components/embedded-wallets/SetWalletPasswordForm/SaveWalletPassword.mjs";
import "@heroicons/react/24/outline/ArrowDownTrayIcon";
import "@heroicons/react/24/outline/ClipboardDocumentCheckIcon";
import "@heroicons/react/24/outline/DocumentDuplicateIcon";
import "../../components/embedded-wallets/SetWalletPasswordForm/SetWalletPasswordComplete.mjs";
import "@heroicons/react/24/solid/XCircleIcon";
import "../../components/ScreenHeader.mjs";
import "../../components/embedded-wallets/SetWalletPasswordForm/setWalletPassword.hooks.mjs";
const d = () => {
  let {
    app: d,
    navigate: h,
    data: u,
    onUserCloseViaDialogOrKeybindRef: j
  } = m();
  let [w, f] = e("");
  let [y, b] = e(false);
  let [S, C] = e();
  let [P, g] = e(null);
  let {
    authenticated: W,
    user: A
  } = c();
  let {
    closePrivyModal: I,
    isNewUserThisSession: v,
    initializeWalletProxy: k
  } = i();
  let {
    onSuccess: x,
    onFailure: E,
    callAuthOnSuccessOnClose: F
  } = u.createWallet;
  let {
    createWallet: D
  } = a();
  let [T, L] = e(null);
  let M = new r(async () => {
    try {
      let o = await D({
        recoveryPassword: S,
        user: A
      });
      if (!o) {
        return;
      }
      L(o);
      if (v) {
        h(s.EMBEDDED_WALLET_CREATED_SCREEN);
      } else {
        x(o);
        I({
          shouldCallAuthOnSuccess: F
        });
      }
    } catch (o) {
      f(o.message);
    }
  });
  t(() => {
    if (!P) {
      k(30000).then(o => g(o));
    }
  }, [P]);
  t(() => {
    if (!W || !A) {
      h(s.LANDING);
      E(Error("User must be authenticated before creating a Privy wallet"));
      return;
    }
  }, [W]);
  j.current = () => null;
  /*#__PURE__*/
  return o(p, {
    config: {
      initiatedBy: "automatic"
    },
    appName: d?.name || "privy",
    loading: !P,
    buttonLoading: y,
    buttonHideAnimations: !T && y,
    isResettingPassword: false,
    error: w,
    password: S || "",
    onClose: () => {
      if (T && T?.recoveryMethod !== "user-passcode") {
        E(new n("User created a wallet but failed to set a password for it"));
        I({
          shouldCallAuthOnSuccess: false
        });
      } else if (T) {
        x(T);
        I({
          shouldCallAuthOnSuccess: F
        });
      } else {
        E(new n("User wallet creation failed"));
        I({
          shouldCallAuthOnSuccess: false
        });
      }
    },
    onPasswordChange: C,
    onPasswordGenerate: () => C(l()),
    onSubmit: async () => {
      b(true);
      return M.execute().then(() => new Promise(o => setTimeout(o, 250))).finally(() => b(false));
    }
  });
};
export { d as EmbeddedWalletPasswordCreateScreen };
