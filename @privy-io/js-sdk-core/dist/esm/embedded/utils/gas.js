import { BigNumber as e } from "@ethersproject/bignumber";
import { PrivyProviderRpcError as t } from "../errors.mjs";
import { isOpStack as i, estimateOpStackL1Gas as r } from "../gas/op-stack.mjs";
import { QuantityToBigNumber as a } from "./ethers.mjs";
import "../types.mjs";
import "@ethersproject/contracts";
import "@ethersproject/transactions";
import "../../chains/base.mjs";
import "../../chains/baseGoerli.mjs";
import "../../chains/baseSepolia.mjs";
import "../../chains/optimism.mjs";
import "../../chains/optimismGoerli.mjs";
import "../../chains/optimismSepolia.mjs";
import "../../chains/zora.mjs";
import "../../chains/zoraSepolia.mjs";
import "../../chains/zoraTestnet.mjs";
const s = async (e, t) => {
  if (e.type === undefined) {
    e.type = 2;
  }
  if (e.type === 2) {
    if (!e.maxFeePerGas || !e.maxPriorityFeePerGas) {
      let i = await t.getFeeData();
      e.maxFeePerGas ||= i.maxFeePerGas?.toHexString();
      e.maxPriorityFeePerGas ||= i.maxPriorityFeePerGas?.toHexString();
    }
  } else if (!e.gasPrice) {
    let i = await t.getFeeData();
    e.gasPrice = i.gasPrice?.toHexString();
  }
  return e;
};
async function o(s, o) {
  if (!s.gasLimit) {
    throw new t("gasLimit was not successfully set for transaction.");
  }
  let n = a(s.gasLimit);
  let m = e.from(0);
  if (s.type == 2) {
    if (!s.maxFeePerGas) {
      throw new t("maxFeePerGas was not successfully set for transaction of type 2.");
    }
    m = a(s.maxFeePerGas);
  } else {
    if (!s.gasPrice) {
      throw new t("gasPrice was not successfully set for transaction of type 0 or 1.");
    }
    m = a(s.gasPrice);
  }
  let c = n.mul(m);
  let l = e.from(0);
  if (s.chainId && i(s.chainId)) {
    try {
      l = await r(s, o);
      c = c.add(l);
    } catch (e) {}
  }
  return {
    totalGasEstimate: c,
    l1ExecutionFeeEstimate: l
  };
}
async function n(e, t) {
  try {
    return (await t.estimateGas(e)).toHexString();
  } catch (i) {
    let r;
    if ("message" in i && i.message.includes("insufficient funds")) {
      console.warn(`Gas estimation failed with error: ${i}. Retrying gas estimation by omitting the 'value'`);
      r = await async function ({
        txRequest: e,
        provider: t
      }) {
        try {
          let i = {
            ...e,
            value: undefined
          };
          return (await t.estimateGas(i)).toHexString();
        } catch (e) {
          console.warn(`Gas estimation failed with error: ${e} when omitting the 'value'`);
          return null;
        }
      }({
        txRequest: e,
        provider: t
      });
    }
    if (!r) {
      console.warn(`Gas estimation failed with error: ${i}. Retrying gas estimation by omitting the 'from'`);
      r = await async function ({
        txRequest: e,
        provider: t
      }) {
        try {
          let i = {
            ...e,
            from: undefined
          };
          return (await t.estimateGas(i)).toHexString();
        } catch (e) {
          console.warn(`Gas estimation failed with error: ${e} when omitting the 'from' address`);
          return null;
        }
      }({
        txRequest: e,
        provider: t
      });
    }
    if (!r) {
      throw i;
    }
    return r;
  }
}
export { o as calculateTotalGasEstimate, s as defaultGasForEvmChain, n as defaultGasLimit };
