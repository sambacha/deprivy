import { jsxs as o, Fragment as r, jsx as e } from "react/jsx-runtime";
import i from "@heroicons/react/24/outline/KeyIcon";
import n from "@heroicons/react/24/solid/CheckCircleIcon";
import { useState as t, useEffect as s, useMemo as c } from "react";
import { styled as a } from "styled-components";
import { validPasswordRegex as m, getInvalidCharacters as l, getPasswordSummary as p } from "../../../password.mjs";
import { RefactorSpacerTop as h, RefactorSpacerBottom as d } from "../../Layouts.mjs";
import { BlobbyFooter as u } from "../../ModalFooter.mjs";
import { ModalHeader as j } from "../../ModalHeader.mjs";
import { EmbeddedWalletScreenContainer as g, Header as y, PasswordContainer as f, PasswordInput as w, InputRightIcons as b, HiddenIcon as v, ShownIcon as C, RegenerateIcon as k, StrengthMeter as I, StatusText as x, Details as S, DetailItem as A, NoAnimationPrimaryButton as P } from "./shared.mjs";
import "fast-password-entropy";
import "secure-password-utilities";
import "secure-password-utilities/wordlists";
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
const L = ({
  buttonHideAnimations: a,
  buttonLoading: L,
  password: z = "",
  config: B,
  isResettingPassword: E,
  onSubmit: F,
  onClose: H,
  onBack: T,
  onPasswordChange: K,
  onPasswordGenerate: N
}) => {
  let [U, $] = t(false);
  let [D, G] = t(false);
  s(() => {
    if (z && !D) {
      G(true);
    }
  }, [z]);
  let Q = c(() => D ? (z?.length || 0) < 6 ? "Password must be at least 6 characters" : m.test(z || "") ? null : `Invalid characters used ( ${l(z).join(" ")} )` : null, [z, D]);
  let W = c(() => Q ? {
    value: 0,
    label: "Weak"
  } : p(z), [z, Q]);
  let X = c(() => !z?.length || !!Q, [Q, z]);
  /*#__PURE__*/
  return o(r, {
    children: [/*#__PURE__*/e(j, {
      onClose: H,
      closeable: B.initiatedBy === "user",
      backFn: T
    }), /*#__PURE__*/e(h, {}), /*#__PURE__*/o(g, {
      children: [/*#__PURE__*/o(y, {
        children: [/*#__PURE__*/e(i, {
          height: 48,
          width: 48,
          stroke: "var(--privy-color-accent)"
        }), /*#__PURE__*/o("h3", {
          style: {
            color: "var(--privy-color-foreground)"
          },
          children: [E ? "Reset" : "Set", " your password"]
        }), /*#__PURE__*/e("p", {
          style: {
            color: "var(--privy-color-foreground-2)"
          },
          children: "Select a strong, memorable password to secure your account."
        })]
      }), /*#__PURE__*/o(f, {
        children: [/*#__PURE__*/e(w, {
          value: z,
          onChange: o => K(o.target.value),
          onKeyUp: o => {
            if (o.key === "Enter") {
              F();
            }
          },
          placeholder: "enter or generate a strong password",
          type: U ? "password" : "text",
          style: {
            paddingRight: "3.8rem"
          }
        }), /*#__PURE__*/o(b, {
          style: {
            width: "3.5rem"
          },
          children: [U ? /*#__PURE__*/e(v, {
            onClick: () => $(false)
          }) : /*#__PURE__*/e(C, {
            onClick: () => $(true)
          }), /*#__PURE__*/e(k, {
            onClick: N
          })]
        })]
      }), /*#__PURE__*/e(I, {
        value: W.value === 0 ? 0.01 : W.value,
        label: W.label
      }), /*#__PURE__*/e(x, {
        error: !!Q,
        children: Q || `Password Strength: ${D ? W.label : "--"}`
      }), /*#__PURE__*/o(R, {
        children: [/*#__PURE__*/e(M, {
          children: /*#__PURE__*/o(S, {
            children: [/*#__PURE__*/o(A, {
              children: [/*#__PURE__*/e(n, {
                width: 24,
                height: 24,
                fill: "var(--privy-color-accent)"
              }), "This password is used to secure your account."]
            }), /*#__PURE__*/o(A, {
              children: [/*#__PURE__*/e(n, {
                width: 24,
                height: 24,
                fill: "var(--privy-color-accent)"
              }), "Use it to log in on a new environment, like another browser or device."]
            })]
          })
        }), /*#__PURE__*/e(P, {
          onClick: F,
          loading: L,
          disabled: X,
          hideAnimations: a,
          children: "Continue"
        })]
      })]
    }), /*#__PURE__*/e(d, {}), /*#__PURE__*/e(u, {})]
  });
};
let M = /*#__PURE__*/a(S).withConfig({
  displayName: "DetailsContainer",
  componentId: "sc-7b3b7727-0"
})(["flex:1;padding-top:1rem;"]);
let R = /*#__PURE__*/a.div.withConfig({
  displayName: "LowerContainer",
  componentId: "sc-7b3b7727-1"
})(["display:flex;flex-direction:column;height:100%;"]);
export { L as CreateWalletPassword };
