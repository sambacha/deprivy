import { DEFAULT_SUPPORTED_CHAIN_IDS as m, DEFAULT_SUPPORTED_CHAINS as r } from "./index.mjs";
import "./arbitrum.mjs";
import "./arbitrumSepolia.mjs";
import "./avalanche.mjs";
import "./avalancheFuji.mjs";
import "./base.mjs";
import "./baseSepolia.mjs";
import "./berachainArtio.mjs";
import "./celo.mjs";
import "./celoAlfajores.mjs";
import "./filecoin.mjs";
import "./filecoinCalibration.mjs";
import "./garnetHolesky.mjs";
import "./holesky.mjs";
import "./linea.mjs";
import "./lineaTestnet.mjs";
import "./lukso.mjs";
import "./mainnet.mjs";
import "./optimism.mjs";
import "./optimismSepolia.mjs";
import "./polygon.mjs";
import "./polygonAmoy.mjs";
import "./redstone.mjs";
import "./sepolia.mjs";
import "./zora.mjs";
import "./zoraSepolia.mjs";
import "./zoraTestnet.mjs";
function i(m, r) {
  return {
    ...m,
    rpcUrls: {
      ...m.rpcUrls,
      privyWalletOverride: {
        http: [r]
      }
    }
  };
}
function o(i) {
  let o = i.filter(r => !m.has(r.id));
  return r.concat(o);
}
function t(m, r) {
  return {
    ...m,
    rpcUrls: {
      ...m.rpcUrls,
      privy: {
        http: [r]
      }
    }
  };
}
export { t as addPrivyRpcToChain, i as addRpcUrlOverrideToChain, o as addToDefaultChains };
