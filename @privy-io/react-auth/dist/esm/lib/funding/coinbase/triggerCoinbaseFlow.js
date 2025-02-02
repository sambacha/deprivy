import { getCoinbaseOnRampUrl as e } from "@privy-io/js-sdk-core";
import { ModalScreen as n } from "../../../screens/index.mjs";
import { triggerPopup as i } from "../../popup/triggerPopup.mjs";
import { toCoinbaseBlockchainFromChainId as o } from "./toCoinbaseBlockchainFromChainId.mjs";
import "../../../connectors/chains/arbitrum.mjs";
import "../../../connectors/chains/base.mjs";
import "../../../connectors/chains/mainnet.mjs";
import "../../../connectors/chains/optimism.mjs";
import "../../../connectors/chains/polygon.mjs";
import "../../../errors.mjs";
import "ofetch";
const t = (t, a, r, s, c, m) => new Promise(async (p, u) => {
  let d = i();
  if (!d) {
    u(Error("Unable to initialize flow"));
    return;
  }
  let h = a.chainType === "ethereum" ? o(a.chain.id) : "solana";
  let l = a.isUSDC ? "USDC" : a.chainType === "ethereum" ? "ETH" : "SOL";
  let f = await t.initCoinbaseOnRamp({
    addresses: [{
      address: a.address,
      blockchains: [h]
    }],
    assets: [l]
  });
  let {
    url: g
  } = e({
    input: f,
    amount: a.amount,
    blockchain: h,
    asset: l,
    experience: m
  });
  d.location = g.toString();
  let b = {
    ...c?.funding,
    showAlternateFundingMethod: true
  };
  if (a.usingDefaultFundingMethod) {
    b.usingDefaultFundingMethod = false;
  }
  r({
    funding: b,
    coinbaseOnrampStatus: {
      popup: d
    }
  });
  s(n.COINBASE_ONRAMP_STATUS_SCREEN);
  t.createAnalyticsEvent({
    eventName: "sdk_fiat_on_ramp_started",
    payload: {
      provider: m === "buy" ? "coinbase-onramp" : "coinbase-exchange",
      value: a.amount,
      chainType: a.chainType,
      chainId: a.chainType === "ethereum" ? a.chain.id : a.cluster.name
    }
  });
  setTimeout(() => {
    r({
      funding: b,
      coinbaseOnrampStatus: {
        partnerUserId: f.partner_user_id,
        popup: d
      }
    });
  }, 5000);
  p();
});
export { t as triggerCoinbaseFlow };
