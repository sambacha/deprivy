import { PrivyClientError as n } from "../../errors.mjs";
import { extractChainIdFromCAIP2 as o } from "../caip2.mjs";
import { filterSupportedOptions as i } from "./filterSupportedOptions.mjs";
import { isNewFundWalletConfig as e, isLegacyMoonpayConfig as t } from "./moonpay/index.mjs";
import { getIsTokenUsdc as r, UsdcAddressMap as s } from "./usdc.mjs";
import "ofetch";
import "react";
import "../../connectors/chains/arbitrum.mjs";
import "../../connectors/chains/base.mjs";
import "../../connectors/chains/celo.mjs";
import "../../connectors/chains/mainnet.mjs";
import "../../connectors/chains/optimism.mjs";
import "../../connectors/chains/polygon.mjs";
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
import "../../screens/index.mjs";
import "./analytics.mjs";
const a = ({
  address: a,
  appConfig: c,
  fundWalletConfig: m,
  methodScreen: d,
  chainIdOverride: l,
  comingFromSendTransactionScreen: p = false
}) => {
  let f;
  let h;
  if (!c.fundingConfig) {
    throw Error("Wallet funding is not enabled");
  }
  let u = i(c.fundingConfig.options);
  if (u.length < 1) {
    throw Error("Wallet funding is not enabled");
  }
  f = l || (e(m) && m.chain ? m.chain.id : o(c.fundingConfig.defaultRecommendedCurrency.chain));
  let g = c.chains.find(n => n.id === f);
  if (!g) {
    throw new n(`Funding chain ${f} is not in PrivyProvider chains list`);
  }
  let j = e(m) && m.amount ? m.amount : c.fundingConfig.defaultRecommendedAmount;
  let C = false;
  function S() {
    if (!f) {
      return;
    }
    let n = s[f];
    if (u.find(n => n.method === "wallets") && !n) {
      console.warn("Attempting to fund with USDC on chain where USDC address is not known. Funding via external wallet will be disabled.");
    }
    h = n;
    C = true;
  }
  if (e(m) && "asset" in m) {
    if (m.asset === "USDC") {
      S();
    } else if (typeof m.asset != "string" && "erc20" in m.asset) {
      C = r(h = m.asset.erc20, g);
    }
  } else if (c.fundingConfig.defaultRecommendedCurrency.asset === "USDC") {
    S();
  }
  let b = m?.defaultFundingMethod;
  return {
    chainType: "ethereum",
    address: a,
    amount: j,
    chain: g,
    erc20Address: h,
    erc20ContractInfo: C ? {
      symbol: "USDC",
      decimals: 6
    } : undefined,
    isUSDC: C,
    methodScreen: d,
    supportedOptions: u,
    comingFromSendTransactionScreen: p,
    defaultFundingMethod: b,
    usingDefaultFundingMethod: !!b,
    preferredCardProvider: m?.card?.preferredProvider,
    crossChainBridgingEnabled: c.fundingConfig.crossChainBridgingEnabled ?? false,
    cluster: {
      name: "mainnet-beta",
      rpcUrl: c.solanaClusters["mainnet-beta"]
    },
    ...(t(m) ? {
      moonpayConfigOverride: m.config
    } : {})
  };
};
function c({
  address: n,
  fundWalletConfig: o,
  appConfig: e,
  comingFromSendTransactionScreen: t,
  methodScreen: r
}) {
  if (!e.fundingConfig) {
    throw Error("Wallet funding is not enabled");
  }
  let s = i(e.fundingConfig.options);
  if (s.length < 1) {
    throw Error("Wallet funding is not enabled");
  }
  let a = o?.amount ?? e.fundingConfig.defaultRecommendedAmount;
  let c = o?.defaultFundingMethod;
  return {
    chainType: "solana",
    address: n,
    supportedOptions: s,
    amount: a,
    isUSDC: false,
    methodScreen: r,
    comingFromSendTransactionScreen: t,
    cluster: {
      name: o?.cluster?.name ?? "mainnet-beta",
      rpcUrl: e.solanaClusters[o?.cluster?.name ?? "mainnet-beta"]
    },
    crossChainBridgingEnabled: e.fundingConfig.crossChainBridgingEnabled ?? false,
    defaultFundingMethod: c,
    preferredCardProvider: o?.card?.preferredProvider,
    usingDefaultFundingMethod: !!c
  };
}
export { a as prepareFundingModalData, c as prepareSolanaFundingModalData };
