import { parseUnits as e } from "@ethersproject/units";
import t from "fetch-retry";
import { polygon as o } from "../../chains/polygon.mjs";
import { polygonAmoy as r } from "../../chains/polygonAmoy.mjs";
import { polygonMumbai as a } from "../../chains/polygonMumbai.mjs";
let i = t(fetch, {
  retries: 3,
  retryDelay: 500
});
const s = e => [o.id, a.id, r.id].includes(e);
let n = t => ({
  maxPriorityFee: e(t.maxPriorityFee.toFixed(9), "gwei").toHexString(),
  maxFee: e(t.maxFee.toFixed(9), "gwei").toHexString()
});
let m = e => ({
  safeLow: n(e.safeLow),
  standard: n(e.standard),
  fast: n(e.fast)
});
const c = async e => {
  let t = "";
  switch (e) {
    case o.id:
      t = "https://gasstation.polygon.technology/v2";
      break;
    case a.id:
      t = "https://gasstation-testnet.polygon.technology/v2";
      break;
    case r.id:
      t = "https://gasstation.polygon.technology/amoy";
      break;
    default:
      throw Error(`chainId ${e} does not support polygon gas stations`);
  }
  let s = await i(t);
  let n = await s.json();
  if (s.status > 399) {
    throw n;
  }
  return m(n);
};
async function d(e) {
  if (!s(e.chainId)) {
    throw Error("Invalid chain ID for Polygon gas estimation.");
  }
  if (e.type === undefined) {
    e.type = 2;
  }
  if (e.maxPriorityFeePerGas && e.maxFeePerGas) {
    return e;
  }
  try {
    let {
      standard: t
    } = await c(e.chainId);
    e.maxPriorityFeePerGas ||= t.maxPriorityFee;
    e.maxFeePerGas ||= t.maxFee;
    if (e.gasPrice) {
      console.warn("`gasPrice` is not supported on this chain and will be ignored. Use `maxPriorityFeePerGas` and/or `maxFeePerGas` instead.");
      delete e.gasPrice;
    }
  } catch (e) {
    throw Error(`Failed to set gas prices from Polygon gas station with error: ${e}.`);
  }
  return e;
}
export { d as defaultGasForPolygon, c as getPolygonGasStationFees, s as isPolygon };
