import { createPublicClient as t, http as a } from "viem";
import { getJsonRpcEndpointFromChain as e } from "../../../utils/eth/getPublicClient.mjs";
import "../../../errors.mjs";
import "ofetch";
const n = async ({
  chain: n,
  address: i,
  appId: s,
  rpcConfig: c,
  erc20Address: o
}) => {
  let p = t({
    chain: n,
    transport: a(e(n, c, s))
  });
  return {
    balance: await p.readContract({
      address: o,
      abi: r,
      functionName: "balanceOf",
      args: [i]
    }).catch(() => 0n),
    chain: n
  };
};
let r = [{
  constant: true,
  inputs: [{
    name: "_owner",
    type: "address"
  }],
  name: "balanceOf",
  outputs: [{
    name: "balance",
    type: "uint256"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}];
export { n as getErc20Balance };
