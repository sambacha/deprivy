import { jsxs as o, Fragment as r, jsx as t } from "react/jsx-runtime";
import n from "@heroicons/react/24/solid/ArrowsRightLeftIcon";
import i from "@heroicons/react/24/solid/CheckCircleIcon";
import { useMemo as e } from "react";
import { styled as s } from "styled-components";
import { PrimaryButton as c } from "../../components/Button.mjs";
import { FixedGappedContainer as a } from "../../components/Layouts.mjs";
import { Loader as m, LoaderFaint as l } from "../../components/Loader.mjs";
import { BlobbyFooter as p } from "../../components/ModalFooter.mjs";
import { ModalHeader as d } from "../../components/ModalHeader.mjs";
import { usePrivyInternal as u } from "../../hooks/internal-context.mjs";
import { usePrivyModal as h } from "../../hooks/modal-context.mjs";
import { usePollMoonpayTransactionStatus as f } from "../../lib/funding/moonpay/index.mjs";
import { Moonpay as g } from "../../svg/moonpay.mjs";
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
import "../../components/PrefetchedImage.mjs";
import "../index.mjs";
import "ofetch";
import "../../lib/funding/analytics.mjs";
const j = () => {
  let {
    app: n,
    data: i,
    setModalData: e,
    navigateBack: s
  } = h();
  let {
    closePrivyModal: c
  } = u();
  let {
    externalTransactionId: a
  } = i?.moonpayStatus;
  let m = f(a || null, n.fundingMethodConfig.moonpay.useSandbox ?? false);
  /*#__PURE__*/
  return o(r, {
    children: [/*#__PURE__*/t(d, {
      title: "Fund account",
      backFn: () => {
        let o = {
          ...i?.funding,
          showAlternateFundingMethod: true
        };
        o.usingDefaultFundingMethod &&= false;
        e({
          funding: o
        });
        s();
      }
    }), /*#__PURE__*/t(y, {
      status: m,
      onClickCta: c
    }), /*#__PURE__*/t(p, {})]
  });
};
let y = ({
  status: n,
  onClickCta: i
}) => {
  let {
    title: s,
    body: m,
    cta: l
  } = e(() => (o => {
    switch (o) {
      case "completed":
        return {
          title: "You've funded your account!",
          body: "It may take a few minutes for the assets to appear.",
          cta: "Continue"
        };
      case "waitingAuthorization":
        return {
          title: "Processing payment",
          body: "This may take up to a few hours. You will receive an email when the purchase is complete.",
          cta: "Continue"
        };
      default:
        return {
          title: "In Progress",
          body: "Go back to MoonPay to finish funding your account.",
          cta: ""
        };
    }
  })(n), [n]); /*#__PURE__*/
  return o(r, {
    children: [/*#__PURE__*/o(k, {
      children: [/*#__PURE__*/t(b, {
        status: n
      }), /*#__PURE__*/o(a, {
        children: [/*#__PURE__*/t("h3", {
          children: s
        }), /*#__PURE__*/t(C, {
          children: m
        })]
      })]
    }), l && /*#__PURE__*/t(c, {
      onClick: i,
      children: l
    })]
  });
};
let v = o => {
  switch (o) {
    case "completed":
      return i;
    case "waitingAuthorization":
      return () => /*#__PURE__*/t(n, {
        width: "3rem",
        height: "3rem",
        style: {
          backgroundColor: "var(--privy-color-foreground-4)",
          color: "var(--privy-color-background)",
          borderRadius: "100%",
          padding: "0.5rem",
          margin: "0.5rem"
        }
      });
    default:
      return;
  }
};
let b = ({
  status: r
}) => {
  if (!r || r === "pending") {
    let r = "var(--privy-color-foreground-4)"; /*#__PURE__*/
    return o("div", {
      style: {
        position: "relative"
      },
      children: [/*#__PURE__*/t(m, {
        color: r,
        style: {
          position: "absolute"
        }
      }), /*#__PURE__*/t(l, {
        color: r
      }), /*#__PURE__*/t(g, {
        size: "3rem",
        style: {
          position: "absolute",
          top: "1rem",
          left: "1rem"
        }
      })]
    });
  }
  let n = v(r);
  let i = (e = r) ? {
    completed: "var(--privy-color-success)",
    failed: "var(--privy-color-error)",
    serviceFailure: "var(--privy-color-error)",
    waitingAuthorization: "var(--privy-color-accent)",
    pending: "var(--privy-color-foreground-4)"
  }[e] : "var(--privy-color-foreground-4)";
  var e; /*#__PURE__*/
  return t("div", {
    style: {
      borderColor: i,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "100%",
      borderWidth: 2,
      padding: "0.5rem",
      marginBottom: "0.5rem"
    },
    children: n && /*#__PURE__*/t(n, {
      width: "4rem",
      height: "4rem",
      color: i
    })
  });
};
let C = /*#__PURE__*/s.p.withConfig({
  displayName: "StatusBody",
  componentId: "sc-56bea42a-0"
})(["font-size:1rem;color:var(--privy-color-foreground-3);margin-bottom:1rem;display:flex;flex-direction:column;gap:1rem;"]);
let k = /*#__PURE__*/s.div.withConfig({
  displayName: "ConnectContainer",
  componentId: "sc-56bea42a-1"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin-left:1.75rem;margin-right:1.75rem;padding:2rem 0;"]);
export { j as MoonpayStatusScreen };
