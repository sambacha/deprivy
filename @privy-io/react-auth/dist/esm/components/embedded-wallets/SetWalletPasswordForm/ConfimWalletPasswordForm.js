import { jsxs as o, Fragment as r, jsx as n } from "react/jsx-runtime";
import i from "@heroicons/react/24/outline/ExclamationTriangleIcon";
import { useState as t, useEffect as s } from "react";
import { RefactorSpacerTop as c, RefactorSpacerBottom as e } from "../../Layouts.mjs";
import { BlobbyFooter as m } from "../../ModalFooter.mjs";
import { ModalHeader as a } from "../../ModalHeader.mjs";
import { EmbeddedWalletScreenContainer as p, Header as l, PasswordContainer as h, PasswordInput as j, InputRightIcons as d, HiddenIcon as u, ShownIcon as y, StatusText as g, NoAnimationPrimaryButton as f } from "./shared.mjs";
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
  buttonLoading: k,
  password: v,
  onSubmit: w,
  onBack: C
}) => {
  let [x, A] = t(true);
  let [I, S] = t(false);
  let [E, L] = t("");
  let M = v === E;
  s(() => {
    if (E && !I) {
      S(true);
    }
  }, [E]);
  return /*#__PURE__*/o(r, {
    children: [/*#__PURE__*/n(a, {
      closeable: false,
      backFn: C
    }), /*#__PURE__*/n(c, {}), /*#__PURE__*/o(p, {
      children: [/*#__PURE__*/o(l, {
        children: [/*#__PURE__*/n(i, {
          height: 48,
          width: 48,
          stroke: "var(--privy-color-background)",
          fill: "var(--privy-color-accent)"
        }), /*#__PURE__*/n("h3", {
          style: {
            color: "var(--privy-color-foreground)"
          },
          children: "Confirm your password"
        }), /*#__PURE__*/n("p", {
          style: {
            color: "var(--privy-color-foreground-2)"
          },
          children: "Please re-enter your password below to continue."
        })]
      }), /*#__PURE__*/o(h, {
        children: [/*#__PURE__*/n(j, {
          value: E,
          onChange: o => L(o.target.value),
          onKeyUp: o => {
            if (o.key === "Enter") {
              w();
            }
          },
          onBlur: () => S(true),
          placeholder: "confirm your password",
          type: x ? "password" : "text",
          style: {
            paddingRight: "2.3rem"
          }
        }), /*#__PURE__*/n(d, {
          style: {
            right: "0.75rem"
          },
          children: x ? /*#__PURE__*/n(u, {
            onClick: () => A(false)
          }) : /*#__PURE__*/n(y, {
            onClick: () => A(true)
          })
        })]
      }), /*#__PURE__*/n(g, {
        "aria-hidden": !I || M,
        error: true,
        children: "Passwords do not match"
      })]
    }), /*#__PURE__*/n(f, {
      onClick: w,
      loading: k,
      disabled: !M,
      hideAnimations: b,
      children: "Continue"
    }), /*#__PURE__*/n(e, {}), /*#__PURE__*/n(m, {})]
  });
};
export { b as ConfirmWalletPasswordForm };
