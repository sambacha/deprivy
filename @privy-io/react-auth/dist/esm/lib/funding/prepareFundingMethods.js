import { ModalScreen as o } from "../../screens/index.mjs";
import { isSupportedChainIdForCoinbaseOnramp as i } from "./coinbase/isSupportedChainIdForCoinbaseOnramp.mjs";
import { triggerCoinbaseFlow as r } from "./coinbase/triggerCoinbaseFlow.mjs";
import { isSupportedChainIdForMoonpay as n } from "./moonpay/index.mjs";
import { triggerMoonpayFlow as s } from "./moonpay/triggerMoonpayFlow.mjs";
import "../../connectors/chains/arbitrum.mjs";
import "../../connectors/chains/base.mjs";
import "../../connectors/chains/mainnet.mjs";
import "../../connectors/chains/optimism.mjs";
import "../../connectors/chains/polygon.mjs";
import "@privy-io/js-sdk-core";
import "../popup/triggerPopup.mjs";
import "./coinbase/toCoinbaseBlockchainFromChainId.mjs";
import "../../errors.mjs";
import "ofetch";
import "react";
import "../../connectors/chains/celo.mjs";
import "../../constants.mjs";
import "../../hooks/internal-context.mjs";
import "../../hooks/index.mjs";
import "../../hooks/modal-context.mjs";
import "react/jsx-runtime";
import "../../components/PrefetchedImage.mjs";
import "../../configuration/context.mjs";
import "../../config.mjs";
import "../../configuration/defaultClientConfig.mjs";
import "../../configuration/login-methods.mjs";
import "../../configuration/wallets.mjs";
import "../../connectors/chains/index.mjs";
import "../../connectors/chains/arbitrumSepolia.mjs";
import "../../connectors/chains/avalanche.mjs";
import "../../connectors/chains/avalancheFuji.mjs";
import "../../connectors/chains/baseSepolia.mjs";
import "../../connectors/chains/berachainArtio.mjs";
import "../../connectors/chains/celoAlfajores.mjs";
import "../../connectors/chains/filecoin.mjs";
import "../../connectors/chains/filecoinCalibration.mjs";
import "../../connectors/chains/garnetHolesky.mjs";
import "../../connectors/chains/holesky.mjs";
import "../../connectors/chains/linea.mjs";
import "../../connectors/chains/lineaTestnet.mjs";
import "../../connectors/chains/lukso.mjs";
import "../../connectors/chains/optimismSepolia.mjs";
import "../../connectors/chains/polygonAmoy.mjs";
import "../../connectors/chains/redstone.mjs";
import "../../connectors/chains/sepolia.mjs";
import "../../connectors/chains/zora.mjs";
import "../../connectors/chains/zoraSepolia.mjs";
import "../../connectors/chains/zoraTestnet.mjs";
import "../../connectors/chains/utils.mjs";
import "../solana/index.mjs";
import "../../theme.mjs";
import "tinycolor2";
import "../cybr53.mjs";
import "./analytics.mjs";
const t = (t, e, m, c, a, p) => {
  let h;
  let j;
  let d = m.chainType === "solana";
  let l = d ? undefined : m;
  let u = m.isUSDC ? "USDC" : l?.erc20Address ? undefined : "native-currency";
  let f = !!d || u && n(Number(m.chain.id), u);
  let b = !!d || u && i(Number(m.chain.id), u);
  let g = [];
  if (m.preferredCardProvider) {
    m.supportedOptions.sort(o => o.provider === m.preferredCardProvider ? -1 : 1);
  }
  for (let o of m.supportedOptions) {
    if (o.method === "card" && o.provider === "coinbase" && b) {
      g.push(() => r(e, m, c, a, p, "buy"));
    }
    if (o.method === "card" && o.provider === "moonpay" && f && u) {
      g.push(() => s(e, m, t, u, c, a, p, "credit_debit_card"));
    }
  }
  for (let o of m.supportedOptions) {
    if (o.method === "exchange" && o.provider === "coinbase" && b) {
      h = () => r(e, m, c, a, p, "buy");
    }
  }
  for (let i of p?.funding?.supportedOptions ?? []) {
    if (i.method === "wallets") {
      j = () => a(o.FUNDING_TRANSFER_FROM_WALLET_SCREEN);
    }
  }
  return {
    onFundWithCard: g,
    onFundWithExchange: h,
    onFundWithWallet: j
  };
};
export { t as prepareFundingMethods };
