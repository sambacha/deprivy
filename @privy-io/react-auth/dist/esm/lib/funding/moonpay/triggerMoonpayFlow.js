import { ModalScreen as o } from "../../../screens/index.mjs";
import { triggerPopup as n } from "../../popup/triggerPopup.mjs";
import { chainToMoonpayCurrency as t, amountToMoonpayAmount as i } from "./index.mjs";
import "ofetch";
import "react";
import "../../../connectors/chains/arbitrum.mjs";
import "../../../connectors/chains/base.mjs";
import "../../../connectors/chains/celo.mjs";
import "../../../connectors/chains/mainnet.mjs";
import "../../../connectors/chains/optimism.mjs";
import "../../../connectors/chains/polygon.mjs";
import "../../../constants.mjs";
import "../../../hooks/internal-context.mjs";
import "../../../hooks/index.mjs";
import "../../../hooks/modal-context.mjs";
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
import "../analytics.mjs";
const e = async (e, s, r, c, m, a, p, h) => {
  let l = n();
  if (!l) {
    throw Error("Unable to initialize flow");
  }
  let j = s.chainType === "ethereum" ? s.moonpayConfigOverride?.currencyCode ?? t(s.chain.id, c) : "SOL";
  let {
    signedUrl: d,
    externalTransactionId: u
  } = await e.signMoonpayOnRampUrl({
    address: s.address,
    useSandbox: r.fundingMethodConfig.moonpay.useSandbox ?? false,
    config: {
      uiConfig: {
        accentColor: r.appearance.palette.accent,
        theme: r.appearance.palette.colorScheme
      },
      ...s.moonpayConfigOverride,
      paymentMethod: h ?? r.fundingMethodConfig.moonpay.paymentMethod,
      currencyCode: j,
      quoteCurrencyAmount: s.moonpayConfigOverride?.quoteCurrencyAmount ?? i(s.amount)
    }
  });
  e.createAnalyticsEvent({
    eventName: "sdk_fiat_on_ramp_started",
    payload: {
      provider: "moonpay",
      value: s.amount,
      chainType: s.chainType,
      chainId: s.chainType === "ethereum" ? s.chain.id : s.cluster.name
    }
  });
  l.location = d;
  let f = {
    ...p?.funding,
    showAlternateFundingMethod: true
  };
  if (s.usingDefaultFundingMethod) {
    f.usingDefaultFundingMethod = false;
  }
  m({
    moonpayStatus: {},
    funding: f
  });
  a(o.MOONPAY_STATUS_SCREEN);
  setTimeout(() => {
    m({
      moonpayStatus: {
        externalTransactionId: u
      },
      funding: f
    });
  }, 8000);
};
export { e as triggerMoonpayFlow };
