import { jsxs as e, Fragment as o, jsx as t } from "react/jsx-runtime";
import { useState as r, useRef as n, useEffect as i } from "react";
import { isMobile as s, isIOS as c } from "react-device-detect";
import { styled as a } from "styled-components";
import { PrimaryButton as m } from "../components/Button.mjs";
import { CopytoClipboardButton as l } from "../components/CopyToClipboard.mjs";
import { RefactorSpacerTop as p, FixedGappedContainer as d, CenteredItem as h, CenteredItemWithPadding as u } from "../components/Layouts.mjs";
import { ConnectionLoader as j, Loader as f } from "../components/Loader.mjs";
import { ModalFooter as g } from "../components/ModalFooter.mjs";
import { ModalHeader as v } from "../components/ModalHeader.mjs";
import { OpenLinkButton as y } from "../components/OpenLink.mjs";
import { QrCode as k } from "../components/QrCode.mjs";
import w from "../components/layout/StackedContainer.mjs";
import { DEFAULT_SUCCESS_SCREEN_DURATION_MS as x } from "../constants.mjs";
import { usePrivyInternal as b } from "../hooks/internal-context.mjs";
import { usePrivyModal as C } from "../hooks/modal-context.mjs";
import { Farcaster as S } from "../svg/farcaster.mjs";
import { Title as I, SubTitle as T } from "./MfaScreens/StyledComponents.mjs";
import "../svg/checkmark.mjs";
import "../svg/copy.mjs";
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
import "qrcode";
import "../svg/black-rounded-square.mjs";
import "../utils/index.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../errors.mjs";
import "ofetch";
import "../utils/eth/getPublicClient.mjs";
import "viem";
import "../components/PrefetchedImage.mjs";
import "./index.mjs";
let _ = "#8a63d2";
const A = () => {
  let {
    lastScreen: a,
    navigateBack: A,
    data: M,
    app: L
  } = C();
  let {
    requestFarcasterSignerStatus: O,
    closePrivyModal: P
  } = b();
  let [z, B] = r(undefined);
  let [D, N] = r(false);
  let [R, W] = r(false);
  let E = n([]);
  let H = M?.farcasterSigner;
  i(() => {
    let e = Date.now();
    let o = setInterval(async () => {
      if (!H?.public_key) {
        clearInterval(o);
        B({
          retryable: true,
          message: "Connect failed",
          detail: "Something went wrong. Please try again."
        });
        return;
      }
      if (H.status === "approved") {
        clearInterval(o);
        N(false);
        W(true);
        E.current.push(setTimeout(() => P({
          shouldCallAuthOnSuccess: false,
          isSuccess: true
        }), x));
      }
      let t = await O(H?.public_key);
      let r = Date.now() - e;
      if (t.status === "approved") {
        clearInterval(o);
        N(false);
        W(true);
        E.current.push(setTimeout(() => P({
          shouldCallAuthOnSuccess: false,
          isSuccess: true
        }), x));
      } else if (r > 300000) {
        clearInterval(o);
        B({
          retryable: true,
          message: "Connect failed",
          detail: "The request timed out. Try again."
        });
      } else if (t.status === "revoked") {
        clearInterval(o);
        B({
          retryable: true,
          message: "Request rejected",
          detail: "The request was rejected. Please try again."
        });
      }
    }, 2000);
    return () => {
      clearInterval(o);
      E.current.forEach(e => clearTimeout(e));
    };
  }, []);
  let Q = H?.status === "pending_approval" ? H.signer_approval_url : undefined; /*#__PURE__*/
  return e(o, s || D ? {
    children: [/*#__PURE__*/t(v, {
      backFn: a ? A : undefined,
      onClose: P
    }, "header"), /*#__PURE__*/t(p, {}), /*#__PURE__*/t(o, c ? {
      children: /*#__PURE__*/e(F, {
        children: [/*#__PURE__*/t(w, {
          children: /*#__PURE__*/e("div", {
            children: [/*#__PURE__*/t(j, {
              success: R,
              fail: !!z
            }), /*#__PURE__*/t(S, {
              style: {
                width: "38px",
                height: "38px"
              }
            })]
          })
        }), /*#__PURE__*/e(d, {
          children: [/*#__PURE__*/t(I, {
            children: z ? z.message : "Add a signer to Farcaster"
          }), /*#__PURE__*/t(T, {
            children: z ? z.detail : "This will allow " + L.name + " to add casts, likes, follows, and more on your behalf."
          })]
        }), Q && /*#__PURE__*/t(m, {
          onClick: e => {
            e.preventDefault();
            window.location.href = Q;
          },
          children: "Open Warpcast app"
        })]
      })
    } : {
      children: /*#__PURE__*/e(q, {
        children: [/*#__PURE__*/t(w, {
          children: /*#__PURE__*/e("div", {
            children: [/*#__PURE__*/t(j, {
              success: R,
              fail: !!z
            }), /*#__PURE__*/t(S, {
              style: {
                width: "38px",
                height: "38px"
              }
            })]
          })
        }), /*#__PURE__*/e(d, {
          children: [/*#__PURE__*/t(I, {
            children: z ? z.message : "Requesting signer from Farcaster"
          }), /*#__PURE__*/t(T, {
            children: z ? z.detail : "This should only take a moment"
          }), /*#__PURE__*/t(h, {
            children: Q && s && /*#__PURE__*/t(y, {
              text: "Take me to Warpcast",
              url: Q,
              color: _
            })
          })]
        })]
      })
    }), /*#__PURE__*/t(g, {})]
  } : {
    children: [/*#__PURE__*/t(v, {
      backFn: a ? A : undefined,
      onClose: P
    }, "header"), /*#__PURE__*/t(p, {}), /*#__PURE__*/t(q, {
      children: /*#__PURE__*/e("div", {
        children: [/*#__PURE__*/t(I, {
          children: "Add a signer to Farcaster"
        }), /*#__PURE__*/e(T, {
          children: ["This will allow ", L.name, " to add casts, likes, follows, and more on your behalf."]
        }), /*#__PURE__*/t(u, {
          children: H?.status === "pending_approval" ? /*#__PURE__*/t(k, {
            url: H.signer_approval_url,
            size: 275,
            squareLogoElement: S
          }) : /*#__PURE__*/t(f, {})
        }), /*#__PURE__*/e(h, {
          children: [/*#__PURE__*/t(T, {
            children: "Or copy this link and paste it into a phone browser to open the Warpcast app."
          }), H?.status === "pending_approval" && /*#__PURE__*/t(l, {
            text: H.signer_approval_url,
            itemName: "link",
            color: _
          })]
        })]
      })
    }), /*#__PURE__*/t(g, {})]
  });
};
let q = /*#__PURE__*/a.div.withConfig({
  displayName: "ConnectContainer",
  componentId: "sc-6e2c96cd-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin-left:27px;margin-right:27px;gap:24px;"]);
let F = /*#__PURE__*/a.div.withConfig({
  displayName: "ConnectContainerButton",
  componentId: "sc-6e2c96cd-1"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;width:100%;"]);
export { A as FarcasterSignerStatusScreen };
