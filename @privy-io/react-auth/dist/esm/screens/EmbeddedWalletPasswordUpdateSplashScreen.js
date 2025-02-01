import { jsxs as o, Fragment as t, jsx as s } from "react/jsx-runtime";
import { ModalScreen as n } from "./index.mjs";
import r from "@heroicons/react/24/outline/UserCircleIcon";
import i from "@heroicons/react/24/solid/LockClosedIcon";
import { PrimaryButton as e } from "../components/Button.mjs";
import { RefactorSpacerTop as c, CenteredItemWithGap as m, RelativeContainer as a, Circle as p, RefactorSpacerBottom as l } from "../components/Layouts.mjs";
import { BlobbyFooter as h } from "../components/ModalFooter.mjs";
import { ModalHeader as j } from "../components/ModalHeader.mjs";
import { CenteredScreenHeader as d } from "../components/ScreenHeader.mjs";
import { PrivyEmbeddedWalletError as u } from "../errors.mjs";
import { usePrivyInternal as f } from "../hooks/internal-context.mjs";
import { usePrivyModal as g } from "../hooks/modal-context.mjs";
import "styled-components";
import "../components/Loader.mjs";
import "../configuration/context.mjs";
import "react";
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
import "../svg/protected-by-privy.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../hooks/index.mjs";
import "ofetch";
import "../components/PrefetchedImage.mjs";
const w = () => {
  let {
    closePrivyModal: w
  } = f();
  let {
    data: y,
    setModalData: b,
    navigate: x,
    onUserCloseViaDialogOrKeybindRef: S
  } = g();
  let {
    onSuccess: k,
    onFailure: A
  } = y.setWalletPassword;
  let C = () => {
    A(new u("Exited before password was added to wallet"));
    w({
      shouldCallAuthOnSuccess: false
    });
  };
  S.current = C;
  return /*#__PURE__*/o(t, {
    children: [/*#__PURE__*/s(j, {
      onClose: C
    }), /*#__PURE__*/s(c, {}), /*#__PURE__*/o(m, {
      children: [/*#__PURE__*/o(a, {
        children: [/*#__PURE__*/s(r, {
          stroke: "var(--privy-color-accent)",
          width: "64px",
          height: "64px"
        }), /*#__PURE__*/s(p, {
          style: {
            width: 24,
            height: 24,
            position: "absolute",
            bottom: 0,
            right: 0
          },
          children: /*#__PURE__*/s(i, {
            width: "12px",
            height: "12px",
            fill: "white"
          })
        })]
      }), /*#__PURE__*/o(d, {
        title: "Secure Your Account",
        children: ["Please set a password to secure your account.", /*#__PURE__*/s("p", {
          children: "Losing access to this password and this device will make your account inaccessible."
        })]
      })]
    }), /*#__PURE__*/s(e, {
      onClick: () => {
        b({
          createWallet: {
            onFailure: A,
            onSuccess: k,
            callAuthOnSuccessOnClose: false,
            addPasswordToExistingWallet: true
          }
        });
        x(n.EMBEDDED_WALLET_PASSWORD_UPDATE_SCREEN);
      },
      children: "Add password"
    }), /*#__PURE__*/s(l, {}), /*#__PURE__*/s(h, {})]
  });
};
export { w as EmbeddedWalletPasswordUpdateSplashScreen };
