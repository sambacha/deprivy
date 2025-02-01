import { createPublicClient as r, http as t } from "viem";
import { getJsonRpcEndpointFromChain as a } from "../../../utils/eth/getPublicClient.mjs";
import "../../../errors.mjs";
import "ofetch";
const e = ({
  chains: e,
  appId: i,
  address: o,
  rpcConfig: s
}) => Promise.all(e.map(async e => {
  let c = r({
    chain: e,
    transport: t(a(e, s, i))
  });
  return {
    balance: await c.getBalance({
      address: o
    }).catch(() => 0n),
    chain: e
  };
}));
export { e as getBalanceForChains };
