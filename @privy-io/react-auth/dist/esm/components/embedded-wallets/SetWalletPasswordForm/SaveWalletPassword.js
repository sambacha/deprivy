import { jsxs as o, Fragment as r, jsx as e } from "react/jsx-runtime";
import t from "@heroicons/react/24/outline/ArrowDownTrayIcon";
import i from "@heroicons/react/24/outline/ClipboardDocumentCheckIcon";
import n from "@heroicons/react/24/outline/DocumentDuplicateIcon";
import c from "@heroicons/react/24/outline/ExclamationTriangleIcon";
import { useState as s, useCallback as a } from "react";
import { RefactorSpacerTop as m, RefactorSpacerBottom as l } from "../../Layouts.mjs";
import { BlobbyFooter as p } from "../../ModalFooter.mjs";
import { ModalHeader as h } from "../../ModalHeader.mjs";
import { EmbeddedWalletScreenContainer as d, Header as j, PasswordContainer as u, PasswordDisplay as y, InputRightIcons as g, HiddenIcon as f, ShownIcon as v, ExportButton as w, NoAnimationPrimaryButton as k } from "./shared.mjs";
import "styled-components";
import "../../../configuration/context.mjs";
import "../../../config.mjs";
import "../../../configuration/defaultClientConfig.mjs";
import "../../../constants.mjs";
import "../../../configuration/login-methods.mjs";
import "../../../configuration/wallets.mjs";
import "../../../connectors/chains/index.mjs";
import "../../../connectors/chains/arbitrum.mjs";
import "../../../connectors/chains/arbitrumSepolia.mjs";
import "../../../connectors/chains/avalanche.mjs";
import "../../../connectors/chains/avalancheFuji.mjs";
import "../../../connectors/chains/base.mjs";
import "../../../connectors/chains/baseSepolia.mjs";
import "../../../connectors/chains/berachainArtio.mjs";
import "../../../connectors/chains/celo.mjs";
import "../../../connectors/chains/celoAlfajores.mjs";
import "../../../connectors/chains/filecoin.mjs";
import "../../../connectors/chains/filecoinCalibration.mjs";
import "../../../connectors/chains/garnetHolesky.mjs";
import "../../../connectors/chains/holesky.mjs";
import "../../../connectors/chains/linea.mjs";
import "../../../connectors/chains/lineaTestnet.mjs";
import "../../../connectors/chains/lukso.mjs";
import "../../../connectors/chains/mainnet.mjs";
import "../../../connectors/chains/optimism.mjs";
import "../../../connectors/chains/optimismSepolia.mjs";
import "../../../connectors/chains/polygon.mjs";
import "../../../connectors/chains/polygonAmoy.mjs";
import "../../../connectors/chains/redstone.mjs";
import "../../../connectors/chains/sepolia.mjs";
import "../../../connectors/chains/zora.mjs";
import "../../../connectors/chains/zoraSepolia.mjs";
import "../../../connectors/chains/zoraTestnet.mjs";
import "../../../connectors/chains/utils.mjs";
import "../../../lib/solana/index.mjs";
import "../../../theme.mjs";
import "tinycolor2";
import "../../../lib/cybr53.mjs";
import "../../../svg/protected-by-privy.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../../../hooks/internal-context.mjs";
import "../../../hooks/index.mjs";
import "@heroicons/react/24/outline/ArrowPathIcon";
import "@heroicons/react/24/outline/EyeIcon";
import "@heroicons/react/24/outline/EyeSlashIcon";
import "../../Button.mjs";
import "../../Loader.mjs";
const b = ({
  buttonHideAnimations: b,
  buttonLoading: x,
  appName: I,
  password: A,
  onSubmit: L,
  onBack: S
}) => {
  let [T, D] = s(false);
  let [R, z] = s(true);
  let E = a(() => {
    D(true);
    if (A) {
      navigator.clipboard.writeText(A);
    }
  }, [A]);
  let F = a(() => {
    let o = document.createElement("a");
    let r = I.toLowerCase().replace(/[^a-z\s]/g, "").replace(/\s/g, "-");
    let e = new Blob([C(I, A)], {
      type: "text/plain"
    });
    let t = URL.createObjectURL(e);
    o.href = t;
    o.target = "_blank";
    o.download = `${r}-privy-wallet-recovery.txt`;
    document.body.appendChild(o);
    o.click();
    setTimeout(() => {
      o.remove();
      URL.revokeObjectURL(t);
    }, 5000);
  }, [A]);
  /*#__PURE__*/
  return o(r, {
    children: [/*#__PURE__*/e(h, {
      backFn: S,
      closeable: false
    }), /*#__PURE__*/e(m, {}), /*#__PURE__*/o(d, {
      children: [/*#__PURE__*/o(j, {
        children: [/*#__PURE__*/e(c, {
          height: 48,
          width: 48,
          stroke: "var(--privy-color-background)",
          fill: "var(--privy-color-accent)"
        }), /*#__PURE__*/e("h3", {
          style: {
            color: "var(--privy-color-foreground)"
          },
          children: "Save your password"
        }), /*#__PURE__*/e("p", {
          style: {
            color: "var(--privy-color-foreground-2)"
          },
          children: "For your security, this password cannot be reset, so keep it somewhere safe."
        })]
      }), /*#__PURE__*/o(u, {
        centered: true,
        children: [/*#__PURE__*/e(y, {
          children: R ? "•".repeat(A.length) : A
        }), /*#__PURE__*/e(g, {
          style: {
            right: "0.75rem"
          },
          children: R ? /*#__PURE__*/e(f, {
            onClick: () => z(false)
          }) : /*#__PURE__*/e(v, {
            onClick: () => z(true)
          })
        })]
      }), /*#__PURE__*/o("div", {
        style: {
          display: "flex",
          margin: "12px 0",
          gap: "12px"
        },
        children: [/*#__PURE__*/e(w, {
          onClick: E,
          children: /*#__PURE__*/o(r, T ? {
            children: [/*#__PURE__*/e(i, {
              style: {
                width: 24,
                height: 24
              },
              stroke: "var(--privy-color-accent)"
            }), "Copied"]
          } : {
            children: [/*#__PURE__*/e(n, {
              style: {
                width: 24,
                height: 24
              },
              stroke: "var(--privy-color-accent)"
            }), "Copy"]
          })
        }), /*#__PURE__*/o(w, {
          onClick: F,
          children: [/*#__PURE__*/e(t, {
            style: {
              width: 24,
              height: 24
            },
            stroke: "var(--privy-color-accent)"
          }), "Download"]
        })]
      })]
    }), /*#__PURE__*/e(k, {
      onClick: L,
      loading: x,
      hideAnimations: b,
      children: "Continue"
    }), /*#__PURE__*/e(l, {}), /*#__PURE__*/e(p, {})]
  });
};
let C = (o, r) => `Your wallet recovery password for ${o} is\n\n${r}\n\nYou will need this password to access your ${o} wallet on a new device. Please keep it somewhere safe.`;
export { b as SaveWalletPassword };
