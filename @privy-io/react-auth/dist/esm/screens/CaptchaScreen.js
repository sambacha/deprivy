import { jsx as o, jsxs as t, Fragment as e } from "react/jsx-runtime";
import { ModalScreen as n } from "./index.mjs";
import r from "@heroicons/react/24/solid/CheckCircleIcon";
import i from "@heroicons/react/24/solid/XCircleIcon";
import { useRef as s, useState as c, useEffect as a } from "react";
import { styled as m } from "styled-components";
import { PrimaryButton as p } from "../components/Button.mjs";
import { FixedGappedContainer as l } from "../components/Layouts.mjs";
import { ModalFooter as h } from "../components/ModalFooter.mjs";
import { ModalHeader as u } from "../components/ModalHeader.mjs";
import { WrappedLoader as d } from "../components/WrappedLoader.mjs";
import { useCaptcha as j, CaptchaError as f } from "../hooks/captcha-context.mjs";
import { usePrivyModal as g } from "../hooks/modal-context.mjs";
import "../components/Loader.mjs";
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
import "../svg/protected-by-privy.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../hooks/internal-context.mjs";
import "../hooks/index.mjs";
import "../errors.mjs";
import "ofetch";
import "../utils/index.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../utils/eth/getPublicClient.mjs";
import "viem";
import "../components/PrefetchedImage.mjs";
const y = () => {
  let {
    lastScreen: m,
    currentScreen: y,
    data: k,
    navigateBack: b,
    navigate: x,
    setModalData: v
  } = g();
  let {
    status: w,
    token: I,
    waitForResult: S,
    reset: R,
    execute: T
  } = j();
  let A = s([]);
  let N = o => {
    A.current = [o, ...A.current];
  };
  let [M, P] = c(true);
  a(() => {
    N(setTimeout(P, 1000, false));
    return () => {
      A.current.forEach(o => clearTimeout(o));
      A.current = [];
    };
  }, []);
  let [E, L] = c("");
  let [q, D] = c("Checking that you are a human...");
  let [F, H] = c(/*#__PURE__*/o(p, {
    onClick: () => {},
    disabled: true,
    children: "Continue"
  }));
  let [z, B] = c(false);
  let [X, G] = c(3);
  let O = k?.captchaModalData;
  let Q = async o => {
    try {
      await O?.callback(o);
      if (O?.onSuccessNavigateTo) {
        x(O?.onSuccessNavigateTo, false);
      }
    } catch (o) {
      if (o instanceof f) {
        return;
      }
      v({
        errorModalData: {
          error: o,
          previousScreen: m || n.LANDING
        }
      });
      x(O?.onErrorNavigateTo || n.ERROR_SCREEN, false);
    }
  };
  a(() => {
    if (w === "success") {
      N(setTimeout(async () => {
        let o = await S();
        if (!!o && !O?.userIntentRequired) {
          Q(o);
        }
      }, 1000));
    } else if (w === "ready") {
      N(setTimeout(() => {
        if (w === "ready") {
          T();
        }
      }, 500));
    }
  }, [w]);
  a(() => {
    if (!M) {
      switch (w) {
        case "success":
          L("Success!");
          D("CAPTCHA passed successfully.");
          H(/*#__PURE__*/o(p, {
            onClick: () => {
              B(true);
              Q(I);
            },
            disabled: !O?.userIntentRequired,
            loading: z,
            children: O?.userIntentRequired ? "Continue" : "Continuing..."
          }));
          break;
        case "loading":
          L("");
          D("Checking that you are a human...");
          H(/*#__PURE__*/o(p, {
            onClick: () => {},
            disabled: true,
            children: "Continue"
          }));
          break;
        case "error":
          L("Something went wrong");
          if (X <= 0) {
            D("If you use an adblocker or VPN, try disabling and re-attempting.");
            H(null);
          } else {
            D("You did not pass CAPTCHA. Please try again.");
            H(/*#__PURE__*/o(p, {
              onClick: V,
              children: "Retry"
            }));
          }
      }
    }
  }, [w, M, z]);
  let V = async () => {
    if (X <= 0) {
      return;
    }
    G(o => o - 1);
    R();
    T();
    let o = await S();
    if (!!o && !O?.userIntentRequired) {
      Q(o);
    }
  }; /*#__PURE__*/
  return t(e, {
    children: [/*#__PURE__*/o(u, {
      backFn: m && y !== m ? b : undefined
    }), /*#__PURE__*/t(C, {
      children: [w === "success" ? /*#__PURE__*/o(r, {
        fill: "var(--privy-color-success)",
        width: "64px",
        height: "64px"
      }) : w === "error" ? /*#__PURE__*/o(i, {
        fill: "var(--privy-color-error)",
        width: "64px",
        height: "64px"
      }) : /*#__PURE__*/o(d, {}), /*#__PURE__*/t(l, {
        children: [E ? /*#__PURE__*/o("h3", {
          children: E
        }) : null, /*#__PURE__*/o("p", {
          children: q
        })]
      }), F]
    }), /*#__PURE__*/o(h, {})]
  });
};
let C = /*#__PURE__*/m.div.withConfig({
  displayName: "CaptchaContainer",
  componentId: "sc-9afcf974-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;width:100%;"]);
export { y as CaptchaScreen };
