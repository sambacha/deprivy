import { jsxs as o, Fragment as e, jsx as t } from "react/jsx-runtime";
import r from "@heroicons/react/24/solid/XCircleIcon";
import { useState as i, useEffect as n } from "react";
import { styled as s } from "styled-components";
import { PrimaryButton as c } from "../components/Button.mjs";
import { CenteredItemWithGap as m } from "../components/Layouts.mjs";
import { ModalHeader as a } from "../components/ModalHeader.mjs";
import { CenteredScreenHeader as l } from "../components/ScreenHeader.mjs";
import { FullScreenLoadingSpinner as p } from "../components/primitives/LoadingSpinner/index.mjs";
import { useAppConfig as h } from "../configuration/context.mjs";
import { RunEffectOnce as j } from "../effect.mjs";
import { PrivyEmbeddedWalletError as d } from "../errors.mjs";
import { usePrivyInternal as u } from "../hooks/internal-context.mjs";
import { usePrivyModal as f } from "../hooks/modal-context.mjs";
import { usePrivyContext as g } from "../hooks/privy-context.mjs";
import { useCreateWallet as y } from "../hooks/useEmbeddedWalletCreate.mjs";
import { toEmbeddedWalletSetRecoveryScreen as b } from "../lib/embeddedWalletRecovery.mjs";
import { ModalScreen as v } from "./index.mjs";
import "../components/Loader.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
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
import "ofetch";
import "../components/PrefetchedImage.mjs";
import "../client/user.mjs";
import "viem/utils";
import "../paths.mjs";
import "../lib/pkce.mjs";
import "jose";
import "../crypto.mjs";
import "../storage.mjs";
const w = () => {
  let {
    app: s,
    setModalData: w,
    navigate: S,
    data: x,
    onUserCloseViaDialogOrKeybindRef: A
  } = f();
  let [k, E] = i("");
  let {
    embeddedWallets: R
  } = h();
  let {
    authenticated: I,
    user: O
  } = g();
  let {
    closePrivyModal: W
  } = u();
  let {
    onSuccess: D,
    onFailure: L,
    callAuthOnSuccessOnClose: M
  } = x.createWallet;
  let P = s?.embeddedWallets.requireUserOwnedRecoveryOnCreate === true;
  let {
    createWallet: F
  } = y();
  let [N, T] = i(null);
  let U = new j(async () => {
    try {
      let o = await F({
        user: O
      });
      if (!o) {
        return;
      }
      T(o);
      S(v.EMBEDDED_WALLET_CREATED_SCREEN);
    } catch (o) {
      E(o.message);
    }
  });
  n(() => I && O ? P ? (w({
    ...x,
    recoverySelection: {
      ...x?.recoverySelection,
      isInAccountCreateFlow: true
    }
  }), S(b({
    walletAction: "create",
    showAutomaticRecovery: false,
    availableRecoveryMethods: R.userOwnedRecoveryOptions,
    legacySetWalletPasswordFlow: false,
    isResettingPassword: false
  }))) : void U.execute() : (S(v.LANDING), void L(Error("User must be authenticated before creating a Privy wallet"))), [P, I]);
  A.current = () => null;
  if (k) {
    return /*#__PURE__*/o(e, {
      children: [/*#__PURE__*/t(a, {
        closeable: false
      }), /*#__PURE__*/o(m, {
        children: [/*#__PURE__*/t(r, {
          fill: "var(--privy-color-error)",
          width: "64px",
          height: "64px"
        }), /*#__PURE__*/t(l, {
          title: "Something went wrong",
          description: k
        })]
      }), /*#__PURE__*/t(c, {
        onClick: () => {
          if (N) {
            D(N);
            W({
              shouldCallAuthOnSuccess: M
            });
          } else {
            L(new d("User wallet creation failed"));
            W({
              shouldCallAuthOnSuccess: false
            });
          }
        },
        children: "Close"
      }), /*#__PURE__*/t(C, {})]
    });
  } else {
    return /*#__PURE__*/t(p, {});
  }
};
let C = /*#__PURE__*/s.div.withConfig({
  displayName: "BottomSpacing",
  componentId: "sc-eabafbf4-0"
})(["height:44px;"]);
export { w as EmbeddedWalletOnAccountCreateScreen };
