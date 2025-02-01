import { createPublicClient as t, http as e } from "viem";
import { getJsonRpcEndpointFromChain as i } from "../../../utils/eth/getPublicClient.mjs";
import "../../../errors.mjs";
import "ofetch";
const n = async ({
  address: n,
  chain: r,
  rpcConfig: s,
  privyAppId: o
}) => {
  try {
    let m = t({
      chain: r,
      transport: e(i(r, s, o))
    });
    let [l, p] = await Promise.all([m.readContract({
      abi: a,
      address: n,
      functionName: "symbol"
    }), m.readContract({
      abi: a,
      address: n,
      functionName: "decimals"
    })]);
    return {
      decimals: p,
      symbol: l
    };
  } catch (t) {
    console.log(t);
    return null;
  }
};
let a = [{
  inputs: [],
  name: "decimals",
  outputs: [{
    internalType: "uint8",
    name: "",
    type: "uint8"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "symbol",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  stateMutability: "view",
  type: "function"
}];
export { n as getErc20TokenInfo };
