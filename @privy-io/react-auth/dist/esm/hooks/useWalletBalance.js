import { useState as r, useMemo as t, useCallback as e, useEffect as o } from "react";
import { createPublicClient as i, http as n } from "viem";
import { getJsonRpcEndpointFromChain as a } from "../utils/eth/getPublicClient.mjs";
import { usePrivyInternal as c } from "./internal-context.mjs";
import "../errors.mjs";
import "ofetch";
import "./index.mjs";
function m({
  rpcConfig: m,
  appId: s,
  address: l,
  chain: p
}) {
  let {
    chains: d
  } = c();
  let [f, h] = r(0n);
  let [u, g] = r(false);
  let j = t(() => {
    let r = p || d[0];
    if (r) {
      return i({
        chain: p,
        transport: n(a(r, m, s))
      });
    }
  }, [p, m, s]);
  let x = e(async () => {
    if (!l || !j) {
      return;
    }
    g(true);
    let r = await j.getBalance({
      address: l
    }).catch(console.error);
    if (r) {
      h(r);
      g(false);
      return r;
    } else {
      return undefined;
    }
  }, [j, l, h]);
  o(() => {
    x().catch(console.error);
  }, []);
  return {
    balance: f,
    isLoading: u,
    reloadBalance: x
  };
}
export { m as useWalletBalance };
