import { jsxs as o, Fragment as r, jsx as n } from "react/jsx-runtime";
import i from "@heroicons/react/24/outline/ExclamationTriangleIcon";
import { useState as t } from "react";
import { styled as c } from "styled-components";
import { SecondaryButton as s } from "../../Button.mjs";
import { Checkbox as e } from "../../Checkbox.mjs";
import { RefactorSpacerTop as m, RefactorSpacerBottom as a } from "../../Layouts.mjs";
import { BlobbyFooter as l } from "../../ModalFooter.mjs";
import { ModalHeader as p } from "../../ModalHeader.mjs";
import { EmbeddedWalletScreenContainer as h, Header as d, Details as j, DetailItem as u, NoAnimationPrimaryButton as y } from "./shared.mjs";
import "../../Loader.mjs";
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
const f = ({
  buttonHideAnimations: c,
  buttonLoading: f,
  onSubmit: v,
  onBack: b,
  config: k
}) => {
  let [C, I] = t(false); /*#__PURE__*/
  return o(r, {
    children: [/*#__PURE__*/n(p, {
      closeable: false,
      backFn: b
    }), /*#__PURE__*/n(m, {}), /*#__PURE__*/o(h, {
      children: [/*#__PURE__*/o(d, {
        children: [/*#__PURE__*/n(i, {
          height: 48,
          width: 48,
          stroke: "var(--privy-color-background)",
          fill: "var(--privy-color-error)"
        }), /*#__PURE__*/n("h3", {
          style: {
            color: "var(--privy-color-foreground)"
          },
          children: "Confirm you have saved"
        }), /*#__PURE__*/n("p", {
          style: {
            color: "var(--privy-color-foreground-2)"
          },
          children: "Losing access to your password means you will lose access to your account."
        })]
      }), /*#__PURE__*/n(j, {
        children: /*#__PURE__*/o(u, {
          style: {
            color: "var(--privy-color-error)",
            cursor: "pointer"
          },
          onClick: o => {
            o.preventDefault();
            I(o => !o);
          },
          children: [/*#__PURE__*/n(e, {
            color: "var(--privy-color-error)",
            readOnly: true,
            checked: C
          }), /*#__PURE__*/n(r, {
            children: "I understand that if I lose my password and device, I will lose access to my account and my assets."
          })]
        })
      })]
    }), /*#__PURE__*/o(g, {
      children: [k.initiatedBy === "user" && /*#__PURE__*/n(s, {
        onClick: k.onCancel,
        disabled: f,
        children: "Cancel"
      }), /*#__PURE__*/n(y, {
        onClick: v,
        loading: f,
        hideAnimations: c,
        disabled: !C,
        children: "Set Password"
      })]
    }), /*#__PURE__*/n(a, {}), /*#__PURE__*/n(l, {})]
  });
};
let g = /*#__PURE__*/c.div.withConfig({
  displayName: "ButtonsContainer",
  componentId: "sc-eb601350-0"
})(["display:flex;gap:10px;"]);
export { f as ConfirmWalletPasswordSaved };
