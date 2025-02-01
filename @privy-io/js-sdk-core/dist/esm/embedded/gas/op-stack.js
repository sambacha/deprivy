import { BigNumber as e } from "@ethersproject/bignumber";
import { Contract as r } from "@ethersproject/contracts";
import { serialize as a } from "@ethersproject/transactions";
import { base as i } from "../../chains/base.mjs";
import { baseGoerli as t } from "../../chains/baseGoerli.mjs";
import { baseSepolia as o } from "../../chains/baseSepolia.mjs";
import { optimism as s } from "../../chains/optimism.mjs";
import { optimismGoerli as m } from "../../chains/optimismGoerli.mjs";
import { optimismSepolia as n } from "../../chains/optimismSepolia.mjs";
import { zora as c } from "../../chains/zora.mjs";
import { zoraSepolia as P } from "../../chains/zoraSepolia.mjs";
import { zoraTestnet as f } from "../../chains/zoraTestnet.mjs";
import { convertBigNumberish as h, toEthersUnsignedTransaction as l } from "../utils/ethers.mjs";
const d = "0x420000000000000000000000000000000000000F";
const p = ["function getL1Fee(bytes memory _data) external view returns (uint256)"];
const F = e => [i.id, t.id, o.id, s.id, m.id, n.id, c.id, f.id, P.id, 81457, 168587773].includes(e);
const x = async (r, a) => {
  if (!F(r.chainId)) {
    throw Error("Invalid chain ID for OP Stack gas estimation.");
  }
  if (r.type === undefined) {
    r.type = 2;
  }
  if (r.gasPrice) {
    console.warn("`gasPrice` is not supported on this chain and will be ignored. Use `maxPriorityFeePerGas` and/or `maxFeePerGas` instead.");
    delete r.gasPrice;
  }
  if (r.maxPriorityFeePerGas && r.maxFeePerGas) {
    return r;
  }
  try {
    if (!r.maxPriorityFeePerGas) {
      let e = await a.send("eth_maxPriorityFeePerGas", []);
      r.maxPriorityFeePerGas = e;
    }
    if (r.maxFeePerGas && (console.warn("maxFeePerGas is specified without maxPriorityFeePerGas - this can result in hung transactions."), r.maxPriorityFeePerGas >= r.maxFeePerGas)) {
      throw Error("Overridden maxFeePerGas is less than or equal to the calculated maxPriorityFeePerGas. Please set both values or maxPriorityFeePerGas alone for correct gas estimation.");
    }
    if (!r.maxFeePerGas) {
      let {
        lastBaseFeePerGas: i
      } = await a.getFeeData();
      if (!i) {
        throw Error("Unable to fetch baseFee for last block.");
      }
      let t = e.from(i).mul(e.from(126)).div(e.from(100)).add(e.from(r.maxPriorityFeePerGas));
      r.maxFeePerGas = h(t);
    }
  } catch (e) {
    throw Error(`Failed to set gas price for OP stack transaction: ${e}.`);
  }
  return r;
};
async function G(i, t) {
  if (!i.chainId || i.chainId && !F(i.chainId)) {
    return e.from(0);
  }
  let o = e.from(0);
  try {
    let e = new r("0x420000000000000000000000000000000000000F", p, t);
    let s = l(i);
    let m = a(s);
    o = await e.getL1Fee(m);
  } catch (e) {}
  return o;
}
export { p as OPTIMISM_STACK_GAS_PRICE_ORACLE_ABI, d as OPTIMISM_STACK_GAS_PRICE_ORACLE_ADDRESS, x as defaultGasForOpStack, G as estimateOpStackL1Gas, F as isOpStack };
