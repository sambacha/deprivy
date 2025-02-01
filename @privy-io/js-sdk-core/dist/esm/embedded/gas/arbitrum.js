import { BigNumber as r } from "@ethersproject/bignumber";
import { arbitrum as i } from "../../chains/arbitrum.mjs";
import { arbitrumGoerli as t } from "../../chains/arbitrumGoerli.mjs";
import { arbitrumSepolia as e } from "../../chains/arbitrumSepolia.mjs";
import { convertBigNumberish as a } from "../utils/ethers.mjs";
const o = r => [i.id, t.id, e.id].includes(r);
const m = async (i, t) => {
  if (!o(i.chainId)) {
    throw Error("Invalid chain ID for Arbitrum gas estimation.");
  }
  if (i.type === undefined) {
    i.type = 2;
  }
  if (i.maxFeePerGas) {
    return i;
  }
  try {
    let {
      lastBaseFeePerGas: e
    } = await t.getFeeData();
    if (e) {
      let t = e.mul(r.from(120)).div(r.from(100));
      i.maxFeePerGas = a(t);
      i.maxPriorityFeePerGas = a(r.from(0));
    }
  } catch (r) {
    throw Error(`Failed to set gas price for Arbitrum transaction: ${r}.`);
  }
  return i;
};
export { m as defaultGasForArbitrum, o as isArbitrum };
