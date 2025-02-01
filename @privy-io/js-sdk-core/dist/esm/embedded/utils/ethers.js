import { BigNumber as e } from "@ethersproject/bignumber";
const i = i => e.from(i);
function t(e) {
  if (typeof e == "number" || typeof e == "bigint" || typeof e == "string") {
    return e;
  }
  if (typeof e.toHexString == "function") {
    return e.toHexString();
  }
  throw Error(`Expected numeric value but received ${e}`);
}
function r(e) {
  let t = {};
  if (e.to !== undefined) {
    t.to = e.to;
  }
  if (e.data !== undefined) {
    t.data = e.data;
  }
  if (e.chainId !== undefined) {
    t.chainId = e.chainId;
  }
  if (e.type !== undefined) {
    t.type = e.type;
  }
  if (e.accessList !== undefined) {
    t.accessList = e.accessList;
  }
  if (e.nonce !== undefined) {
    t.nonce = i(e.nonce).toNumber();
  }
  if (e.gasLimit !== undefined) {
    t.gasLimit = i(e.gasLimit);
  }
  if (e.gasPrice !== undefined) {
    t.gasPrice = i(e.gasPrice);
  }
  if (e.value !== undefined) {
    t.value = i(e.value);
  }
  if (e.maxFeePerGas !== undefined) {
    t.maxFeePerGas = i(e.maxFeePerGas);
  }
  if (e.maxPriorityFeePerGas !== undefined) {
    t.maxPriorityFeePerGas = i(e.maxPriorityFeePerGas);
  }
  return t;
}
export { i as QuantityToBigNumber, t as convertBigNumberish, r as toEthersUnsignedTransaction };
