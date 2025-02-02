import { arbitrum as o } from "./arbitrum.mjs";
import { arbitrumGoerli as m } from "./arbitrumGoerli.mjs";
import { arbitrumSepolia as r } from "./arbitrumSepolia.mjs";
import { avalanche as i } from "./avalanche.mjs";
import { avalancheFuji as e } from "./avalancheFuji.mjs";
import { base as t } from "./base.mjs";
import { baseGoerli as s } from "./baseGoerli.mjs";
import { baseSepolia as a } from "./baseSepolia.mjs";
import { berachainArtio as p } from "./berachainArtio.mjs";
import { celo as l } from "./celo.mjs";
import { celoAlfajores as n } from "./celoAlfajores.mjs";
import { filecoin as f } from "./filecoin.mjs";
import { filecoinCalibration as j } from "./filecoinCalibration.mjs";
import { garnetHolesky as b } from "./garnetHolesky.mjs";
import { goerli as c } from "./goerli.mjs";
import { holesky as u } from "./holesky.mjs";
import { linea as y } from "./linea.mjs";
import { lineaTestnet as S } from "./lineaTestnet.mjs";
import { mainnet as g } from "./mainnet.mjs";
import { optimism as d } from "./optimism.mjs";
import { optimismGoerli as h } from "./optimismGoerli.mjs";
import { optimismSepolia as k } from "./optimismSepolia.mjs";
import { polygon as z } from "./polygon.mjs";
import { polygonMumbai as G } from "./polygonMumbai.mjs";
import { redstone as v } from "./redstone.mjs";
import { redstoneHolesky as H } from "./redstoneHolesky.mjs";
import { sepolia as T } from "./sepolia.mjs";
import { zora as A } from "./zora.mjs";
import { zoraSepolia as C } from "./zoraSepolia.mjs";
import { zoraTestnet as F } from "./zoraTestnet.mjs";
const M = {
  mainnet: g,
  goerli: c,
  sepolia: T,
  arbitrum: o,
  arbitrumGoerli: m,
  arbitrumSepolia: r,
  optimism: d,
  optimismGoerli: h,
  optimismSepolia: k,
  polygon: z,
  polygonMumbai: G,
  celo: l,
  celoAlfajores: n,
  filecoin: f,
  filecoinCalibration: j,
  base: t,
  baseGoerli: s,
  baseSepolia: a,
  linea: y,
  lineaTestnet: S,
  avalanche: i,
  avalancheFuji: e,
  holesky: u,
  redstone: v,
  garnetHolesky: b,
  redstoneHolesky: H,
  zora: A,
  zoraSepolia: C,
  zoraTestnet: F
};
const w = [g, c, T, o, m, r, d, h, k, z, G, l, n, f, j, t, s, a, p, y, S, i, e, u, v, b, H, A, C, F];
const x = new Set(w.map(o => o.id));
function q(o) {
  return w.find(m => m.id === o);
}
export { w as DEFAULT_SUPPORTED_CHAINS, x as DEFAULT_SUPPORTED_CHAIN_IDS, M as chainDefs, q as getSupportedChainById };
