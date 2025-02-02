import { jsxs as o, Fragment as n, jsx as t } from "react/jsx-runtime";
import e from "@heroicons/react/24/outline/CheckCircleIcon";
import r from "@heroicons/react/24/outline/ExclamationCircleIcon";
import i from "@heroicons/react/24/outline/NoSymbolIcon";
import { useState as s, useEffect as c } from "react";
import { styled as m } from "styled-components";
import { SecondaryButton as a, PrimaryButton as p } from "../components/Button.mjs";
import { RefactorSpacerTop as l, HorizontallyCenteredItem as h, ConfigurableSpacer as j, RefactorSpacerBottom as d } from "../components/Layouts.mjs";
import { BlobbyFooter as f } from "../components/ModalFooter.mjs";
import { ModalHeader as u } from "../components/ModalHeader.mjs";
import { CenteredScreenHeader as g } from "../components/ScreenHeader.mjs";
import { DEFAULT_SUCCESS_SCREEN_LONG_DURATION_MS as y } from "../constants.mjs";
import { PrivyClientError as k } from "../errors.mjs";
import { usePrivyInternal as v } from "../hooks/internal-context.mjs";
import { usePrivyModal as w } from "../hooks/modal-context.mjs";
import { Title as x, SubTitle as C } from "./MfaScreens/StyledComponents.mjs";
import "../components/Loader.mjs";
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
import "./index.mjs";
const b = () => {
  let {
    app: m,
    data: b
  } = w();
  let {
    closePrivyModal: I
  } = v();
  let [A, M] = s(false);
  let [T, z] = s();
  let {
    onRevoke: B,
    onSuccess: H,
    onError: L
  } = b.delegatedActions.revoke;
  let P = async () => {
    if (A) {
      H();
    } else {
      L(T ?? new k("User declined revoking access to their delegated wallet."));
    }
    I({
      shouldCallAuthOnSuccess: false
    });
  };
  c(() => {
    if (!A && !T) {
      return;
    }
    let o = setTimeout(P, y);
    return () => clearTimeout(o);
  }, [A, T]);
  return /*#__PURE__*/o(n, A || T ? {
    children: [/*#__PURE__*/t(u, {
      onClose: P
    }), /*#__PURE__*/t(l, {}), /*#__PURE__*/o(h, {
      children: [T ? /*#__PURE__*/t(r, {
        stroke: "var(--privy-color-error)",
        width: "64px",
        height: "64px"
      }) : /*#__PURE__*/t(e, {
        stroke: "var(--privy-color-success)",
        width: "64px",
        height: "64px"
      }), /*#__PURE__*/t(j, {
        height: 20
      }), /*#__PURE__*/t(g, {
        title: T ? "Something went wrong" : "Success!",
        description: T ? "Please try again." : "You've successfully revoked permissions."
      })]
    }), /*#__PURE__*/t(d, {}), /*#__PURE__*/t(f, {})]
  } : {
    children: [/*#__PURE__*/t(u, {
      closeable: true,
      onClose: P
    }), /*#__PURE__*/t(i, {
      width: 56,
      height: 56,
      style: {
        margin: "auto"
      }
    }), /*#__PURE__*/t(x, {
      style: {
        marginTop: 24
      },
      children: "Revoke offline access to wallet"
    }), /*#__PURE__*/o(C, {
      children: ["By confirming, ", m.name, " will no longer be able to use this wallet on your behalf when you are not online."]
    }), /*#__PURE__*/o(S, {
      style: {
        marginTop: 24
      },
      children: [/*#__PURE__*/t(a, {
        onClick: P,
        children: "Deny"
      }), /*#__PURE__*/t(p, {
        onClick: async () => {
          try {
            await B();
            M(true);
          } catch (o) {
            z(o);
          }
        },
        children: "Confirm"
      })]
    }), /*#__PURE__*/t(f, {})]
  });
};
let S = /*#__PURE__*/m.div.withConfig({
  displayName: "ButtonsContainer",
  componentId: "sc-8ff214d7-0"
})(["display:flex;gap:10px;"]);
export { b as DelegatedActionsRevokeScreen };
