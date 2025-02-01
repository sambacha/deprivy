import { jsxs as o, Fragment as t, jsx as n } from "react/jsx-runtime";
import e from "@heroicons/react/24/outline/CheckCircleIcon";
import r from "@heroicons/react/24/outline/CloudArrowUpIcon";
import i from "@heroicons/react/24/outline/ExclamationCircleIcon";
import { useState as s, useEffect as c } from "react";
import { styled as m } from "styled-components";
import { SecondaryButton as a, PrimaryButton as p } from "../components/Button.mjs";
import { RefactorSpacerTop as l, HorizontallyCenteredItem as h, ConfigurableSpacer as j, RefactorSpacerBottom as d } from "../components/Layouts.mjs";
import { BlobbyFooter as u } from "../components/ModalFooter.mjs";
import { ModalHeader as g } from "../components/ModalHeader.mjs";
import { CenteredScreenHeader as f } from "../components/ScreenHeader.mjs";
import { WalletInfoCard as y } from "../components/ui/wallet/WalletInfoCard.mjs";
import { DEFAULT_SUCCESS_SCREEN_LONG_DURATION_MS as C } from "../constants.mjs";
import { PrivyClientError as w } from "../errors.mjs";
import { usePrivyInternal as b } from "../hooks/internal-context.mjs";
import { usePrivyModal as x } from "../hooks/modal-context.mjs";
import { Title as k, SubTitle as v } from "./MfaScreens/StyledComponents.mjs";
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
import "../components/ui/chips/Chip.mjs";
import "../components/ui/animation/LoadingSkeleton.mjs";
import "../components/ui/layout/Column.mjs";
import "../components/ui/typography/ErrorMessage.mjs";
import "../components/ui/typography/LabelXs.mjs";
import "../components/ui/wallet/Address.mjs";
import "@heroicons/react/24/outline/CheckIcon";
import "@heroicons/react/24/outline/Square2StackIcon";
import "../utils/index.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../utils/eth/getPublicClient.mjs";
import "viem";
import "ofetch";
import "../components/ui/wallet/shared.mjs";
import "../components/PrefetchedImage.mjs";
import "./index.mjs";
const I = () => {
  let {
    app: m,
    data: y
  } = x();
  let {
    closePrivyModal: I
  } = b();
  let [M, L] = s(false);
  let [T, B] = s();
  let {
    address: E,
    onDelegate: P,
    onSuccess: W,
    onError: z
  } = y.delegatedActions.consent;
  let H = async () => {
    if (M) {
      W();
    } else {
      z(T ?? new w("User declined delegating actions."));
    }
    I({
      shouldCallAuthOnSuccess: false
    });
  };
  c(() => {
    if (!M && !T) {
      return;
    }
    let o = setTimeout(H, C);
    return () => clearTimeout(o);
  }, [M, T]);
  return /*#__PURE__*/o(t, M || T ? {
    children: [/*#__PURE__*/n(g, {
      onClose: H
    }), /*#__PURE__*/n(l, {}), /*#__PURE__*/o(h, {
      children: [T ? /*#__PURE__*/n(i, {
        stroke: "var(--privy-color-error)",
        width: "64px",
        height: "64px"
      }) : /*#__PURE__*/n(e, {
        stroke: "var(--privy-color-success)",
        width: "64px",
        height: "64px"
      }), /*#__PURE__*/n(j, {
        height: 20
      }), /*#__PURE__*/n(f, {
        title: T ? "Something went wrong" : "Success!",
        description: T ? "Please try again." : `You’ve successfully granted delegated action permissions to ${m.name}.`
      })]
    }), /*#__PURE__*/n(d, {}), /*#__PURE__*/n(u, {})]
  } : {
    children: [/*#__PURE__*/n(g, {
      closeable: true,
      onClose: H
    }), /*#__PURE__*/n(r, {
      width: 56,
      height: 56,
      style: {
        margin: "auto"
      }
    }), /*#__PURE__*/n(k, {
      style: {
        marginTop: 24,
        color: "var(--privy-color-foreground)"
      },
      children: "Enable offline access"
    }), /*#__PURE__*/o(v, {
      style: {
        marginBottom: 24,
        textWrap: "pretty"
      },
      children: ["By confirming, ", m.name, " will be able to use your wallet for you even when you're not around. You can revoke this later."]
    }), /*#__PURE__*/n(A, {
      showIcon: true,
      address: E,
      title: "Wallet",
      isLoading: false
    }), /*#__PURE__*/o(S, {
      style: {
        marginTop: 24
      },
      children: [/*#__PURE__*/n(a, {
        onClick: H,
        children: "Not now"
      }), /*#__PURE__*/n(p, {
        onClick: async () => {
          try {
            await P();
            L(true);
          } catch (o) {
            B(o);
          }
        },
        children: "Accept"
      })]
    }), /*#__PURE__*/n(u, {})]
  });
};
let S = /*#__PURE__*/m.div.withConfig({
  displayName: "ButtonsContainer",
  componentId: "sc-b99bc0c0-0"
})(["display:flex;gap:10px;"]);
let A = /*#__PURE__*/m(y).withConfig({
  displayName: "StyledWalletInfoCard",
  componentId: "sc-b99bc0c0-1"
})(["margin-top:1.5rem;"]);
export { I as DelegatedActionsConsentScreen };
