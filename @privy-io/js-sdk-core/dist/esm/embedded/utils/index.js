import { VoidSigner as r } from "@ethersproject/abstract-signer";
import { StaticJsonRpcProvider as t } from "@ethersproject/providers";
import { PrivyConnectorError as e } from "../errors.mjs";
import { isArbitrum as i, defaultGasForArbitrum as p } from "../gas/arbitrum.mjs";
import { isBsc as s, defaultGasForBsc as o } from "../gas/bsc.mjs";
import { isOpStack as a, defaultGasForOpStack as n } from "../gas/op-stack.mjs";
import { isPolygon as m, defaultGasForPolygon as c } from "../gas/polygon.mjs";
import { defaultGasLimit as l, defaultGasForEvmChain as h } from "./gas.mjs";
import "../types.mjs";
import "@ethersproject/bignumber";
import "../../chains/arbitrum.mjs";
import "../../chains/arbitrumGoerli.mjs";
import "../../chains/arbitrumSepolia.mjs";
import "./ethers.mjs";
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
import "@ethersproject/units";
import "fetch-retry";
import "../../chains/polygon.mjs";
import "../../chains/polygonAmoy.mjs";
import "../../chains/polygonMumbai.mjs";
const u = (r, i, p, s) => {
  let o = Number(r);
  let a = i.find(r => r.id === o);
  if (!a) {
    throw new e(`Unsupported chainId ${r}`, 4901);
  }
  return new t(a.rpcUrls.privyWalletOverride && a.rpcUrls.privyWalletOverride.http[0] ? a.rpcUrls.privyWalletOverride.http[0] : p.rpcUrls && p.rpcUrls[o] ? p.rpcUrls[o] : a.rpcUrls.privy?.http[0] ? {
    url: a.rpcUrls.privy.http[0],
    headers: {
      "privy-app-id": s.appId
    }
  } : a.rpcUrls.public?.http[0] ? a.rpcUrls.public?.http[0] : a.rpcUrls.default?.http[0]);
};
const d = (r, t, i) => {
  let p;
  let s = r.id;
  let o = Number(r.id);
  if (r.rpcUrls.privyWalletOverride && r.rpcUrls.privyWalletOverride.http[0]) {
    p = r.rpcUrls.privyWalletOverride.http[0];
  } else if (t.rpcUrls && t.rpcUrls[o]) {
    p = t.rpcUrls[o];
  } else if (r.rpcUrls.privy?.http[0]) {
    let t = new URL(r.rpcUrls.privy.http[0]);
    t.searchParams.append("privyAppId", i);
    p = t.toString();
  } else {
    p = r.rpcUrls.public?.http[0] ? r.rpcUrls.public.http[0] : r.rpcUrls.default?.http[0];
  }
  if (!p) {
    throw new e(`No RPC url found for ${s}`);
  }
  return p;
};
function y(r) {
  return /^-?0x[a-f0-9]+$/i.test(r);
}
function f(r) {
  for (let t of ["gasLimit", "gasPrice", "value", "maxPriorityFeePerGas", "maxFeePerGas"]) {
    let e = r[t];
    if (e !== undefined && !function (r) {
      let t = typeof r == "number";
      let e = typeof r == "bigint";
      let i = typeof r == "string" && y(r);
      return t || e || i;
    }(e)) {
      throw Error(`Transaction request property '${t}' must be a valid number, bigint, or hex string representing a quantity`);
    }
  }
  if (typeof r.chainId != "number") {
    throw Error("Transaction request property 'chainId' must be a number");
  }
}
async function g(t, e, u) {
  e.chainId = Number(e.chainId);
  f(e);
  e.from ||= t;
  if (!e.nonce) {
    let i = new r(t, u);
    e.nonce = await i.getTransactionCount("pending");
  }
  if (!e.gasLimit) {
    if (e.gas) {
      e.gasLimit = e.gas;
      delete e.gas;
    } else {
      e.gasLimit = await l(e, u);
    }
  }
  if (typeof e.type == "string" && y(e.type)) {
    e.type = Number(e.type);
  }
  if ([23294, 23295].includes(e.chainId)) {
    e.type = 0;
  }
  if ((e = m(e.chainId) ? await c(e) : i(e.chainId) ? await p(e, u) : a(e.chainId) ? await n(e, u) : s(e.chainId) ? await o(e, u) : await h(e, u)).type === 0) {
    delete e.accessList;
  }
  if (e.type !== 2) {
    delete e.maxPriorityFeePerGas;
    delete e.maxFeePerGas;
  }
  return e;
}
function j({
  currentRecoveryMethod: r,
  upgradeToRecoveryMethod: t
}) {
  switch (r) {
    case "privy":
    case "user-passcode":
      return true;
    case "icloud":
    case "google-drive":
      if (r === t) {
        throw Error("Cannot upgrade to the existing cloud platform");
      }
      return true;
    default:
      throw Error("Unknown recovery method");
  }
}
export { d as getJsonRpcEndpointFromChain, u as getJsonRpcProvider, g as populateTransactionRequest, j as throwIfInvalidRecoveryUpgradePath, f as validateTransactionRequest };
