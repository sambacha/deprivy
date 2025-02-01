import { createPublicClient as r, http as p } from "viem";
import { PrivyConnectorError as t } from "../../errors.mjs";
import "ofetch";
const e = (e, l, s, c) => {
  let o = Number(e);
  let d = l.find(r => r.id === o);
  if (!d) {
    throw new t(`Unsupported chainId ${e}`, 4901);
  }
  return r({
    transport: p(i(d, s, c.appId)),
    chain: d
  });
};
const i = (r, p, e) => {
  let i;
  let l = r.id;
  let s = Number(r.id);
  if (r.rpcUrls.privyWalletOverride && r.rpcUrls.privyWalletOverride.http[0]) {
    i = r.rpcUrls.privyWalletOverride.http[0];
  } else if (p.rpcUrls && p.rpcUrls[s]) {
    i = p.rpcUrls[s];
  } else if (r.rpcUrls.privy?.http[0]) {
    let p = new URL(r.rpcUrls.privy.http[0]);
    p.searchParams.append("privyAppId", e);
    i = p.toString();
  } else {
    i = r.rpcUrls.public?.http[0] ? r.rpcUrls.public.http[0] : r.rpcUrls.default?.http[0];
  }
  if (!i) {
    throw new t(`No RPC url found for ${l}`);
  }
  return i;
};
export { i as getJsonRpcEndpointFromChain, e as getPublicClient };
