import { jsx as o, jsxs as r, Fragment as e } from "react/jsx-runtime";
import { ModalScreen as n } from "../index.mjs";
import t from "@heroicons/react/24/outline/ExclamationTriangleIcon";
import s from "@heroicons/react/24/outline/WalletIcon";
import { useState as c } from "react";
import { PrimaryButton as i, SecondaryButton as a } from "../../components/Button.mjs";
import { CircleBorder as m } from "../../components/CircleBorder.mjs";
import { BlobbyFooter as l } from "../../components/ModalFooter.mjs";
import { ModalHeader as d } from "../../components/ModalHeader.mjs";
import p from "../../components/layout/StackedContainer.mjs";
import { Address as h } from "../../components/ui/wallet/Address.mjs";
import { usePrivyInternal as u } from "../../hooks/internal-context.mjs";
import { usePrivyModal as f } from "../../hooks/modal-context.mjs";
import j from "../../lib/capitalizeFirstLetter.mjs";
import { CircleAlert as g } from "../../svg/circle-alert.mjs";
import { AccountTransferButton as T } from "./AccountTransferButton.mjs";
import { EmbeddedWalletInfoView as y } from "./EmbeddedWalletInfoView.mjs";
import { ConnectContainer as b, GappedContainer as k, DisclosedAccountContainer as A } from "./styled.mjs";
import "styled-components";
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
import "@heroicons/react/24/outline/CheckIcon";
import "@heroicons/react/24/outline/Square2StackIcon";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
import "../../components/PrefetchedImage.mjs";
import "@heroicons/react/24/outline/ExclamationCircleIcon";
const C = () => {
  let {
    initiateAccountTransfer: r,
    closePrivyModal: e
  } = u();
  let {
    data: t,
    navigate: s,
    lastScreen: i,
    setModalData: a
  } = f();
  let [m, l] = c(undefined);
  let [d, p] = c(false);
  let [h, j] = c(false);
  let g = async () => {
    try {
      if (!t?.accountTransfer?.nonce || !t?.accountTransfer?.account) {
        throw Error("missing account transfer inputs");
      }
      j(true);
      await r({
        nonce: t?.accountTransfer?.nonce,
        account: t?.accountTransfer?.account,
        accountType: t?.accountTransfer?.linkMethod,
        externalWalletMetadata: t?.accountTransfer?.externalWalletMetadata,
        telegramWebAppData: t?.accountTransfer?.telegramWebAppData,
        telegramAuthResult: t?.accountTransfer?.telegramAuthResult,
        farcasterEmbeddedAddress: t?.accountTransfer?.farcasterEmbeddedAddress,
        oAuthUserInfo: t?.accountTransfer?.oAuthUserInfo
      });
      p(true);
      j(false);
      setTimeout(e, 1000);
    } catch (o) {
      a({
        errorModalData: {
          error: o,
          previousScreen: i || n.LINK_CONFLICT_SCREEN
        }
      });
      s(n.ERROR_SCREEN, true);
    }
  };
  if (m) {
    return /*#__PURE__*/o(y, {
      address: m,
      onClose: e,
      onRetry: () => l(undefined),
      onTransfer: g,
      isTransferring: h,
      transferSuccess: d
    });
  } else {
    return /*#__PURE__*/o(v, {
      onClose: e,
      onInfo: () => l(t?.accountTransfer?.embeddedWalletAddress),
      onContinue: () => l(t?.accountTransfer?.embeddedWalletAddress),
      onTransfer: g,
      isTransferring: h,
      transferSuccess: d,
      data: t
    });
  }
};
const v = ({
  onClose: n,
  onContinue: s,
  onInfo: c,
  onTransfer: h,
  transferSuccess: u,
  isTransferring: f,
  data: g
}) => {
  if (!g?.accountTransfer?.linkMethod || !g?.accountTransfer?.displayName) {
    return;
  }
  let y = {
    method: g?.accountTransfer?.linkMethod,
    handle: g?.accountTransfer?.displayName,
    disclosedAccount: g?.accountTransfer?.embeddedWalletAddress ? {
      type: "wallet",
      handle: g?.accountTransfer?.embeddedWalletAddress
    } : undefined
  }; /*#__PURE__*/
  return r(e, {
    children: [/*#__PURE__*/o(d, {
      closeable: true
    }), /*#__PURE__*/r(b, {
      children: [/*#__PURE__*/o(p, {
        children: /*#__PURE__*/r("div", {
          children: [/*#__PURE__*/o(m, {
            color: "var(--privy-color-error)"
          }), /*#__PURE__*/o(t, {
            height: 38,
            width: 38,
            stroke: "var(--privy-color-error)"
          })]
        })
      }), /*#__PURE__*/r(k, {
        children: [/*#__PURE__*/r("h3", {
          children: [function (o) {
            switch (o) {
              case "sms":
                return "Phone number";
              case "email":
                return "Email address";
              case "siwe":
                return "Wallet address";
              case "linkedin":
                return "LinkedIn profile";
              case "google":
              case "apple":
              case "discord":
              case "github":
              case "instagram":
              case "spotify":
              case "tiktok":
              case "twitter":
              case "telegram":
              case "farcaster":
                return `${j(o.replace("_oauth", ""))} profile`;
              default:
                return o;
            }
          }(y.method), " is associated with another account"]
        }), /*#__PURE__*/r("p", {
          children: ["Do you want to transfer", /*#__PURE__*/o("b", {
            children: y.handle ? ` ${y.handle}` : ""
          }), " to this account instead? This will delete your other account."]
        }), /*#__PURE__*/o(w, {
          onClick: c,
          disclosedAccount: y.disclosedAccount
        })]
      }), /*#__PURE__*/r(k, {
        style: {
          gap: 12,
          marginTop: 12
        },
        children: [g?.accountTransfer?.embeddedWalletAddress ? /*#__PURE__*/o(i, {
          onClick: s,
          children: "Continue"
        }) : /*#__PURE__*/o(T, {
          onTransfer: h,
          transferSuccess: u,
          isTransferring: f
        }), /*#__PURE__*/o(a, {
          onClick: n,
          children: "No thanks"
        })]
      })]
    }), /*#__PURE__*/o(l, {})]
  });
};
function w({
  disclosedAccount: e,
  onClick: n
}) {
  if (e) {
    return /*#__PURE__*/r(A, {
      onClick: n,
      children: [/*#__PURE__*/o(s, {
        color: "var(--privy-color-foreground-1)",
        strokeWidth: 2,
        height: "28px",
        width: "28px"
      }), /*#__PURE__*/o(h, {
        address: e.handle,
        showCopyIcon: false
      }), /*#__PURE__*/o(g, {
        width: 15,
        height: 15,
        color: "var(--privy-color-foreground-3)",
        style: {
          marginLeft: "auto"
        }
      })]
    });
  } else {
    return null;
  }
}
export { C as LinkConflictScreen, v as LinkConflictScreenView };
