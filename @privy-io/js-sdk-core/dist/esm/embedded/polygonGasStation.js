import { parseUnits as i } from "@ethersproject/units";
import { chainDefs as o } from "../chains/index.mjs";
import "../chains/arbitrum.mjs";
import "../chains/arbitrumGoerli.mjs";
import "../chains/arbitrumSepolia.mjs";
import "../chains/avalanche.mjs";
import "../chains/avalancheFuji.mjs";
import "../chains/base.mjs";
import "../chains/baseGoerli.mjs";
import "../chains/baseSepolia.mjs";
import "../chains/berachainArtio.mjs";
import "../chains/celo.mjs";
import "../chains/celoAlfajores.mjs";
import "../chains/filecoin.mjs";
import "../chains/filecoinCalibration.mjs";
import "../chains/garnetHolesky.mjs";
import "../chains/goerli.mjs";
import "../chains/holesky.mjs";
import "../chains/linea.mjs";
import "../chains/lineaTestnet.mjs";
import "../chains/mainnet.mjs";
import "../chains/optimism.mjs";
import "../chains/optimismGoerli.mjs";
import "../chains/optimismSepolia.mjs";
import "../chains/polygon.mjs";
import "../chains/polygonMumbai.mjs";
import "../chains/redstone.mjs";
import "../chains/redstoneHolesky.mjs";
import "../chains/sepolia.mjs";
import "../chains/zora.mjs";
import "../chains/zoraSepolia.mjs";
import "../chains/zoraTestnet.mjs";
const s = [o.polygon.id, o.polygonMumbai.id];
let t = o => ({
  maxPriorityFee: i(o.maxPriorityFee.toFixed(9), "gwei").toHexString(),
  maxFee: i(o.maxFee.toFixed(9), "gwei").toHexString()
});
let a = i => ({
  safeLow: t(i.safeLow),
  standard: t(i.standard),
  fast: t(i.fast)
});
const m = async i => {
  let s = "";
  switch (i) {
    case o.polygon.id:
      s = "https://gasstation.polygon.technology/v2";
      break;
    case o.polygonMumbai.id:
      s = "https://gasstation-testnet.polygon.technology/v2";
      break;
    default:
      throw Error(`chainId ${i} does not support polygon gas stations`);
  }
  let t = await fetch(s);
  return a(await t.json());
};
export { s as POLYGON_GAS_STATION_CHAIN_IDS, m as getPolygonGasStationFees };
