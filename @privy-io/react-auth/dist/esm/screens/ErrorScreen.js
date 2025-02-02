import { jsx as t, jsxs as o, Fragment as e } from "react/jsx-runtime";
import r from "@heroicons/react/24/outline/ExclamationTriangleIcon";
import i from "@heroicons/react/24/outline/PhoneIcon";
import { styled as n } from "styled-components";
import { PrimaryButton as a } from "../components/Button.mjs";
import { CircleBorder as c } from "../components/CircleBorder.mjs";
import { ModalHeader as s } from "../components/ModalHeader.mjs";
import m from "../components/layout/StackedContainer.mjs";
import { PrivyIframeError as l } from "../embedded-wallets/errors.mjs";
import { PrivyError as p, PrivyErrorCode as d, PrivyClientError as h, PrivyApiError as g } from "../errors.mjs";
import { useCaptcha as T } from "../hooks/captcha-context.mjs";
import { usePrivyModal as u } from "../hooks/modal-context.mjs";
import { LockClosed as j } from "../svg/lock-closed.mjs";
import { ModalScreen as f } from "./index.mjs";
import "../components/Loader.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
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
import "../hooks/internal-context.mjs";
import "../hooks/index.mjs";
import "../embedded-wallets/types.mjs";
import "ofetch";
import "../utils/index.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../utils/eth/getPublicClient.mjs";
import "viem";
import "../components/PrefetchedImage.mjs";
let y = (o, e) => {
  let n = /*#__PURE__*/t(r, {
    height: 38,
    width: 38,
    stroke: "var(--privy-color-error)"
  });
  if (o instanceof h) {
    switch (o.privyErrorCode) {
      case d.CLIENT_REQUEST_TIMEOUT:
        return {
          title: "Timed out",
          detail: o.message,
          ctaText: "Try again",
          icon: n
        };
      case d.INSUFFICIENT_BALANCE:
        return {
          title: "Insufficient balance",
          detail: o.message,
          ctaText: "Try again",
          icon: n
        };
      case d.TRANSACTION_FAILURE:
        return {
          title: "Transaction failure",
          detail: o.message,
          ctaText: "Try again",
          icon: n
        };
      default:
        return {
          title: "Something went wrong",
          detail: "Try again later",
          ctaText: "Try again",
          icon: n
        };
    }
  } else {
    if (o instanceof l && o.type === "twilio_verification_failed") {
      return {
        title: "Something went wrong",
        detail: o.message,
        ctaText: "Try again",
        icon: /*#__PURE__*/t(i, {
          height: 38,
          width: 38,
          stroke: "var(--privy-color-error)"
        })
      };
    }
    if (!(o instanceof p)) {
      if (o instanceof g && o.status && [400, 422].includes(o.status)) {
        return {
          title: "Something went wrong",
          detail: o.message,
          ctaText: "Try again",
          icon: n
        };
      } else {
        return {
          title: "Something went wrong",
          detail: "Try again later",
          ctaText: "Try again",
          icon: n
        };
      }
    }
    switch (o.privyErrorCode) {
      case d.INVALID_CAPTCHA:
        return {
          title: "Something went wrong",
          detail: "Please try again.",
          ctaText: "Try again",
          icon: n
        };
      case d.DISALLOWED_LOGIN_METHOD:
        return {
          title: "Not allowed",
          detail: o.message,
          ctaText: "Try another method",
          icon: n
        };
      case d.ALLOWLIST_REJECTED:
        return {
          title: e.errorTitle || "You don't have access to this app",
          detail: e.errorDetail || "Have you been invited?",
          ctaText: e.errorCtaText || "Try another account",
          icon: /*#__PURE__*/t(j, {
            style: {
              width: "38px",
              height: "38px",
              strokeWidth: "1",
              stroke: "var(--privy-color-accent)",
              fill: "var(--privy-color-accent)"
            }
          })
        };
      case d.CAPTCHA_FAILURE:
        return {
          title: "Something went wrong",
          detail: "You did not pass CAPTCHA. Please try again.",
          ctaText: "Try again",
          icon: /*#__PURE__*/t("span", {})
        };
      case d.CAPTCHA_TIMEOUT:
        return {
          title: "Something went wrong",
          detail: "Something went wrong! Please try again later.",
          ctaText: "Try again",
          icon: /*#__PURE__*/t("span", {})
        };
      case d.LINKED_TO_ANOTHER_USER:
        return {
          title: "Authentication failed",
          detail: "This account has already been linked to another user.",
          ctaText: "Try again",
          icon: n
        };
      case d.NOT_SUPPORTED:
        return {
          title: "This region is not supported",
          detail: "SMS authentication from this region is not available",
          ctaText: "Try another method",
          icon: n
        };
      case d.TOO_MANY_REQUESTS:
        return {
          title: "Request failed",
          detail: "Too many attempts.",
          ctaText: "Try again later",
          icon: n
        };
      default:
        return {
          title: "Something went wrong",
          detail: "Try again later",
          ctaText: "Try again",
          icon: n
        };
    }
  }
};
const C = () => {
  let {
    navigate: o,
    navigateBack: e,
    data: r,
    lastScreen: i,
    currentScreen: n
  } = u();
  let a = r?.errorModalData?.previousScreen || (i === n ? undefined : i);
  /*#__PURE__*/
  return t(w, {
    error: r?.errorModalData?.error || Error(),
    backFn: () => a ? o(a, false) : e(),
    onClick: () => o(a || f.LANDING, false)
  });
};
const w = ({
  error: r,
  backFn: i,
  onClick: n
}) => {
  let {
    reset: l
  } = T();
  let {
    app: h
  } = u();
  let g = y(r, h.allowlistConfig);
  /*#__PURE__*/
  return o(e, {
    children: [/*#__PURE__*/t(s, {
      backFn: i
    }), /*#__PURE__*/o(x, {
      children: [/*#__PURE__*/t(m, {
        children: /*#__PURE__*/o("div", {
          children: [/*#__PURE__*/t(c, {
            color: "var(--privy-color-error)"
          }), g.icon]
        })
      }), /*#__PURE__*/o(v, {
        children: [/*#__PURE__*/t("h3", {
          children: g.title
        }), /*#__PURE__*/t("p", {
          children: g.detail
        })]
      }), /*#__PURE__*/t(a, {
        color: "var(--privy-color-error)",
        onClick: () => {
          if (r instanceof p && (r.privyErrorCode === d.INVALID_CAPTCHA && l(), r.privyErrorCode === d.ALLOWLIST_REJECTED && h.allowlistConfig.errorCtaLink)) {
            window.location.href = h.allowlistConfig.errorCtaLink;
          } else {
            n?.();
          }
        },
        children: g.ctaText
      })]
    })]
  });
};
let x = /*#__PURE__*/n.div.withConfig({
  displayName: "ConnectContainer",
  componentId: "sc-1d84a574-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;width:100%;padding-bottom:16px;"]);
let v = /*#__PURE__*/n.div.withConfig({
  displayName: "GappedContainer",
  componentId: "sc-1d84a574-1"
})(["display:flex;flex-direction:column;gap:8px;"]);
export { C as ErrorScreen, w as ErrorScreenView };
