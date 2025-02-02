import { jsxs as o, Fragment as r, jsx as e } from "react/jsx-runtime";
import n from "@heroicons/react/24/solid/ArrowsRightLeftIcon";
import t from "@heroicons/react/24/solid/CheckCircleIcon";
import { useState as i, useRef as s, useEffect as c, useMemo as a } from "react";
import { styled as m } from "styled-components";
import { PrimaryButton as l } from "../../components/Button.mjs";
import { FixedGappedContainer as p } from "../../components/Layouts.mjs";
import { Loader as d, LoaderFaint as u } from "../../components/Loader.mjs";
import { BlobbyFooter as h } from "../../components/ModalFooter.mjs";
import { ModalHeader as f } from "../../components/ModalHeader.mjs";
import { usePrivyInternal as g } from "../../hooks/internal-context.mjs";
import { usePrivyModal as j } from "../../hooks/modal-context.mjs";
import { ON_RAMP_COMPLETE_ANALYTICS_EVENT as y } from "../../lib/funding/analytics.mjs";
import { CoinbaseWallet as b } from "../../svg/coinbase-wallet.mjs";
import { ModalScreen as v } from "../index.mjs";
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
const C = () => {
  let {
    data: n,
    setModalData: t,
    navigate: a,
    navigateBack: m
  } = j();
  let {
    closePrivyModal: l,
    createAnalyticsEvent: p,
    client: d
  } = g();
  let [u, b] = i("pending-in-flow");
  let C = s(0);
  let I = {
    ...n?.funding,
    showAlternateFundingMethod: true
  };
  I.usingDefaultFundingMethod &&= false;
  let {
    partnerUserId: k,
    popup: x
  } = n?.coinbaseOnrampStatus ?? {};
  c(() => {
    if (u === "pending-in-flow" || u === "pending-after-flow") {
      let o = setInterval(async () => {
        if (k) {
          try {
            let {
              status: o
            } = await d.getCoinbaseOnRampStatus({
              partnerUserId: k
            });
            if (o === "success") {
              b("success");
              return;
            }
            if (o === "failure") {
              throw Error("There was an error completing Coinbase Onramp flow.");
            }
            if (C.current >= 3) {
              t({
                funding: I
              });
              a(v.FUNDING_METHOD_SELECTION_SCREEN);
              return;
            }
            if (x?.closed) {
              C.current = C.current + 1;
              b("pending-after-flow");
            }
          } catch (o) {
            console.error(o);
            b("error");
            p({
              eventName: y,
              payload: {
                status: "failure",
                provider: "coinbase-onramp",
                error: o.message
              }
            });
            t({
              funding: {
                ...I,
                errorMessage: "Something went wrong adding funds. Please try again or use another method."
              }
            });
            a(v.FUNDING_METHOD_SELECTION_SCREEN);
          }
        }
      }, 1500);
      return () => clearInterval(o);
    }
  }, [k, x, u]);
  return /*#__PURE__*/o(r, {
    children: [/*#__PURE__*/e(f, {
      title: "Fund account",
      backFn: () => {
        t({
          funding: I
        });
        m();
      }
    }, "header"), /*#__PURE__*/e(w, {
      status: u,
      onClickCta: l
    }), /*#__PURE__*/e(h, {})]
  });
};
let w = ({
  status: n,
  onClickCta: t
}) => {
  let {
    title: i,
    body: s,
    cta: c
  } = a(() => (o => {
    switch (o) {
      case "success":
        return {
          title: "You've funded your account!",
          body: "It may take a few minutes for the assets to appear.",
          cta: "Continue"
        };
      case "pending-after-flow":
        return {
          title: "In Progress",
          body: "Almost done. Retrieving transaction status from Coinbase",
          cta: ""
        };
      case "error":
      case "pending-in-flow":
        return {
          title: "In Progress",
          body: "Go back to Coinbase Onramp to finish funding your account.",
          cta: ""
        };
    }
  })(n), [n]); /*#__PURE__*/
  return o(r, {
    children: [/*#__PURE__*/o(S, {
      children: [/*#__PURE__*/e(k, {
        isSucccess: n === "success"
      }), /*#__PURE__*/o(p, {
        children: [/*#__PURE__*/e("h3", {
          children: i
        }), /*#__PURE__*/e(x, {
          children: s
        })]
      })]
    }), c && /*#__PURE__*/e(l, {
      onClick: t,
      children: c
    })]
  });
};
let I = o => o ? t : () => /*#__PURE__*/e(n, {
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
let k = ({
  isSucccess: r
}) => {
  if (!r) {
    let r = "var(--privy-color-foreground-4)"; /*#__PURE__*/
    return o("div", {
      style: {
        position: "relative"
      },
      children: [/*#__PURE__*/e(d, {
        color: r,
        style: {
          position: "absolute"
        }
      }), /*#__PURE__*/e(u, {
        color: r
      }), /*#__PURE__*/e(b, {
        style: {
          position: "absolute",
          width: "2.8rem",
          height: "2.8rem",
          top: "1.2rem",
          left: "1.2rem"
        }
      })]
    });
  }
  let n = I(r);
  let t = r ? "var(--privy-color-success)" : "var(--privy-color-foreground-4)";
  /*#__PURE__*/
  return e("div", {
    style: {
      borderColor: t,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "100%",
      borderWidth: 2,
      padding: "0.5rem",
      marginBottom: "0.5rem"
    },
    children: n && /*#__PURE__*/e(n, {
      width: "4rem",
      height: "4rem",
      color: t
    })
  });
};
let x = /*#__PURE__*/m.p.withConfig({
  displayName: "StatusBody",
  componentId: "sc-96ef1540-0"
})(["font-size:1rem;color:var(--privy-color-foreground-3);margin-bottom:1rem;display:flex;flex-direction:column;gap:1rem;"]);
let S = /*#__PURE__*/m.div.withConfig({
  displayName: "ConnectContainer",
  componentId: "sc-96ef1540-1"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin-left:1.75rem;margin-right:1.75rem;padding:2rem 0;"]);
export { C as CoinbaseOnrampStatusScreen };
