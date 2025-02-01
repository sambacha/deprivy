import { formatEther as t } from "viem";
import { usePrivyInternal as r } from "../hooks/internal-context.mjs";
import { getBlockExplorer as e } from "../utils/index.mjs";
import "react";
import "../hooks/index.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../errors.mjs";
import "ofetch";
import "../utils/eth/getPublicClient.mjs";
let o = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2
});
let i = t => o.format(t);
const s = (t, r) => {
  let e = i(r * parseFloat(t));
  if (e !== "$0.00") {
    return e;
  } else {
    return "<$0.01";
  }
};
const n = (r, e) => {
  let o = i(e * parseFloat(t(r)));
  if (o === "$0.00") {
    return "<$0.01";
  } else {
    return o;
  }
};
const m = (r, e, o = 6, i = false) => {
  let s = parseFloat(t(r)).toFixed(o).replace(/0+$/, "").replace(/\.$/, "");
  if (i) {
    return `${s} ${e}`;
  } else {
    return `${s === "0" ? "<0.001" : s} ${e}`;
  }
};
const c = t => t.reduce((t, r) => t + r, 0n);
const a = (t, o) => {
  let {
    chains: i
  } = r();
  let s = `https://etherscan.io/address/${o}`;
  let n = `${e(t, i)}/address/${o}`;
  if (!n) {
    return s;
  }
  try {
    new URL(n);
  } catch {
    return s;
  }
  return n;
};
export { a as getBlockExplorerUrlForAddress, s as getDollarsFromStringFloat, n as getDollarsFromWei, m as getNativeCurrencyFromWei, c as sumWeiQuantities };
