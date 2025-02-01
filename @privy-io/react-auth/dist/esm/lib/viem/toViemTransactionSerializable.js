import { isHex as e, toHex as a } from "viem";
import { PrivyClientError as r } from "../../errors.mjs";
import "ofetch";
let s = {
  0: "legacy",
  1: "eip2930",
  2: "eip1559",
  3: "eip4844"
};
const i = {
  legacy: 0,
  eip2930: 1,
  eip1559: 2,
  eip4844: 3
};
let t = e => e !== undefined ? BigInt(e) : undefined;
function o(i) {
  let o;
  let {
    type: c = 2,
    ...d
  } = i;
  if (d.accessList && Array.isArray(d.accessList)) {
    o = d.accessList.map(e => Array.isArray(e) ? {
      address: e[0],
      storageKeys: e[1]
    } : e);
  } else if (d.accessList) {
    o = Object.entries(d.accessList).map(e => ({
      address: e[0],
      storageKeys: e[1]
    }));
  }
  let n = Number(d.chainId ?? 1);
  let m = e(d.data) ? d.data : d.data ? a(Uint8Array.from(d.data)) : undefined;
  let p = d.nonce ? Number(d.nonce) : undefined;
  let y = {
    chainId: n,
    data: m,
    nonce: p,
    value: t(d.value),
    gas: t(d.gas ?? d.gasLimit)
  };
  if (c === 0) {
    return {
      ...d,
      type: s[c],
      ...y,
      gasPrice: t(d.gasPrice),
      accessList: undefined,
      maxFeePerGas: undefined,
      maxPriorityFeePerGas: undefined
    };
  }
  if (c === 1) {
    return {
      ...d,
      type: s[c],
      ...y,
      gasPrice: t(d.gasPrice),
      accessList: o,
      maxFeePerGas: undefined,
      maxPriorityFeePerGas: undefined
    };
  }
  if (c === 2) {
    return {
      ...d,
      type: s[c],
      ...y,
      nonce: p,
      accessList: o,
      maxFeePerGas: t(d.maxFeePerGas),
      maxPriorityFeePerGas: t(d.maxPriorityFeePerGas),
      gasPrice: undefined,
      maxFeePerBlobGas: undefined
    };
  }
  throw new r(`Unsupported transaction type: ${c}`);
}
export { i as STRING_TO_NUMBER_TXN_TYPE, o as toViemTransactionSerializable };
