import { ofetch as n } from "ofetch";
import { useState as o, useRef as t, useEffect as e } from "react";
import { arbitrum as r } from "../../../connectors/chains/arbitrum.mjs";
import { base as i } from "../../../connectors/chains/base.mjs";
import { celo as s } from "../../../connectors/chains/celo.mjs";
import { mainnet as a } from "../../../connectors/chains/mainnet.mjs";
import { optimism as c } from "../../../connectors/chains/optimism.mjs";
import { polygon as m } from "../../../connectors/chains/polygon.mjs";
import { MOONPAY_API_URL_SANDBOX as u, MOONPAY_API_URL as p, MOONPAY_PUBLIC_KEY_SANDBOX as d, MOONPAY_PUBLIC_KEY as l } from "../../../constants.mjs";
import { usePrivyInternal as h } from "../../../hooks/internal-context.mjs";
import { usePrivyModal as f } from "../../../hooks/modal-context.mjs";
import { ModalScreen as j } from "../../../screens/index.mjs";
import { ON_RAMP_COMPLETE_ANALYTICS_EVENT as y } from "../analytics.mjs";
import "../../../hooks/index.mjs";
import "react/jsx-runtime";
import "../../../components/PrefetchedImage.mjs";
import "../../../configuration/context.mjs";
import "../../../config.mjs";
import "../../../configuration/defaultClientConfig.mjs";
import "../../../configuration/login-methods.mjs";
import "../../../configuration/wallets.mjs";
import "../../../connectors/chains/index.mjs";
import "../../../connectors/chains/arbitrumSepolia.mjs";
import "../../../connectors/chains/avalanche.mjs";
import "../../../connectors/chains/avalancheFuji.mjs";
import "../../../connectors/chains/baseSepolia.mjs";
import "../../../connectors/chains/berachainArtio.mjs";
import "../../../connectors/chains/celoAlfajores.mjs";
import "../../../connectors/chains/filecoin.mjs";
import "../../../connectors/chains/filecoinCalibration.mjs";
import "../../../connectors/chains/garnetHolesky.mjs";
import "../../../connectors/chains/holesky.mjs";
import "../../../connectors/chains/linea.mjs";
import "../../../connectors/chains/lineaTestnet.mjs";
import "../../../connectors/chains/lukso.mjs";
import "../../../connectors/chains/optimismSepolia.mjs";
import "../../../connectors/chains/polygonAmoy.mjs";
import "../../../connectors/chains/redstone.mjs";
import "../../../connectors/chains/sepolia.mjs";
import "../../../connectors/chains/zora.mjs";
import "../../../connectors/chains/zoraSepolia.mjs";
import "../../../connectors/chains/zoraTestnet.mjs";
import "../../../connectors/chains/utils.mjs";
import "../../solana/index.mjs";
import "../../../theme.mjs";
import "tinycolor2";
import "../../cybr53.mjs";
const g = "moonpay";
let E = new Set([a.id, r.id, i.id, m.id]);
let v = new Set([a.id, r.id, c.id, i.id, m.id]);
function A(n, o) {
  switch (n) {
    case r.id:
      if (o === "native-currency") {
        return "ETH_ARBITRUM";
      } else {
        return "USDC_ARBITRUM";
      }
    case 43114:
      return "AVAX_CCHAIN";
    case i.id:
      if (o === "native-currency") {
        return "ETH_BASE";
      } else {
        return "USDC_BASE";
      }
    case s.id:
      return "CELO_CELO";
    case m.id:
      if (o === "native-currency") {
        return "MATIC_POLYGON";
      } else {
        return "USDC_POLYGON";
      }
    case a.id:
      if (o === "native-currency") {
        return "ETH_ETHEREUM";
      } else {
        return "USDC_ETHEREUM";
      }
    default:
      console.warn(`Chain ${n} not supported by Moonpay, defaulting to Ethereum mainnet`);
      return "ETH_ETHEREUM";
  }
}
function C(n) {
  return parseFloat(n);
}
function S(n) {
  return !!n && n.config !== undefined && n.provider !== undefined;
}
function w(n) {
  return !!n && (n.chain !== undefined || n.amount !== undefined);
}
async function _(o, t) {
  return n(`${t ? u : p}/transactions/ext/${o}`, {
    query: {
      apiKey: t ? d : l
    }
  });
}
function M(n, r = false) {
  let [i, s] = o(null);
  let {
    createAnalyticsEvent: a
  } = h();
  let {
    data: c,
    navigate: m,
    setModalData: u
  } = f();
  let p = c?.funding;
  let d = t(0);
  e(() => {
    let o = setInterval(async () => {
      if (n) {
        try {
          let [t] = await _(n, r);
          let e = t.status === "waitingAuthorization" && t.paymentMethod === "credit_debit_card" ? "pending" : t.status;
          if (["failed", "completed", "awaitingAuthorization"].includes(e)) {
            a({
              eventName: y,
              payload: {
                status: e,
                provider: g,
                paymentMethod: t.paymentMethod,
                cardPaymentType: t.cardPaymentType,
                currency: t.currency?.code,
                baseCurrencyAmount: t.baseCurrencyAmount,
                quoteCurrencyAmount: t.quoteCurrencyAmount,
                feeAmount: t.feeAmount,
                extraFeeAmount: t.extraFeeAmount,
                networkFeeAmount: t.networkFeeAmount,
                isSandbox: r
              }
            });
            clearInterval(o);
          }
          if (e === "failed" || e === "serviceFailure") {
            u({
              funding: {
                ...p,
                errorMessage: "Something went wrong adding funds from Moonpay. Please try again or use another method to fund your wallet."
              }
            });
            m(j.FUNDING_METHOD_SELECTION_SCREEN);
            return;
          }
          s(e);
        } catch (n) {
          if (n.response?.status !== 404) {
            d.current += 1;
          }
          if (d.current >= 3) {
            a({
              eventName: y,
              payload: {
                status: "serviceFailure",
                provider: g
              }
            });
            clearInterval(o);
            u({
              funding: {
                ...p,
                errorMessage: "Something went wrong adding funds from Moonpay. Please try again or use another method to fund your wallet."
              }
            });
            m(j.FUNDING_METHOD_SELECTION_SCREEN);
          }
        }
      }
    }, 3000);
    return () => clearInterval(o);
  }, [n, d]);
  return i;
}
const T = (n, o) => {
  switch (o) {
    case "native-currency":
      return E.has(n);
    case "USDC":
      return v.has(n);
    default:
      console.warn("Unknown asset passed to MoonPay Onramp");
      return false;
  }
};
export { g as MOONPAY_PROVIDER_ID, C as amountToMoonpayAmount, A as chainToMoonpayCurrency, _ as getMoonpayTransactionStatus, S as isLegacyMoonpayConfig, w as isNewFundWalletConfig, T as isSupportedChainIdForMoonpay, M as usePollMoonpayTransactionStatus };
