import { getLegacyInjectedProviders as e, getLegacyInjectedName as t } from "../connectors/get-legacy-injected-providers.mjs";
import { isMetaMask as n } from "../connectors/is-wallet-installed.mjs";
import { PrivyConnectorError as r } from "../errors.mjs";
import { getJsonRpcEndpointFromChain as o } from "./eth/getPublicClient.mjs";
import "ofetch";
import "viem";
const i = (e, t) => {
  let n = [];
  let r = [];
  for (let [o, i] of e.entries()) {
    if (o < t) {
      n.push(i);
    } else {
      r.push(i);
    }
  }
  return [n, r];
};
const s = e => !!String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const a = (e, t) => {
  let n = e.slice(0);
  let r = [];
  while (n.length) {
    r.push(n.splice(0, t));
  }
  return r;
};
const l = (e, t = 3, n = 4, r = "ethereum") => {
  if (!e) {
    return "";
  }
  let o = r === "ethereum" ? 2 : 0;
  if (t + n + o + 3 >= e.length) {
    return e;
  } else {
    return `${e.slice(0, o + t)}...${e.slice(e.length - n, e.length)}`;
  }
};
const u = (e, t = 3, n = 4) => l(e, t, n, "solana");
const c = e => new Promise(t => setTimeout(t, e));
function m(e, {
  interval: t = 100,
  timeout: n = 5000
} = {}) {
  return new Promise((r, o) => {
    let i;
    let s = 0;
    let a = () => {
      if (s >= n) {
        o("Max attempts reached without result");
      } else {
        i = e();
        s += t;
        if (i == null) {
          setTimeout(a, t);
        } else {
          r(i);
        }
      }
    };
    a();
  });
}
const p = (e, t = {}) => {
  let n = t.delayMs || 150;
  let r = t.maxAttempts || 270;
  return new Promise(async (o, i) => {
    let s = false;
    let a = 0;
    while (!s && a < r) {
      if (t.abortSignal?.aborted) {
        return;
      }
      e().then(e => {
        s = true;
        o(e);
      }, (...e) => {
        s = true;
        i(...e);
      });
      a += 1;
      await c(n);
    }
    if (!s) {
      i(Error("Exceeded max attempts before resolving function"));
    }
  });
};
const f = (e, t, n = {}, r = {}) => {
  let o = new URL(t, e);
  for (let [e, t] of Object.entries(n)) {
    if (t !== undefined) {
      o.searchParams.set(e, t);
    }
  }
  let i = Object.entries(r);
  if (i.length > 0) {
    let e = new URLSearchParams();
    for (let [t, n] of i) {
      e.append(t, n);
    }
    o.hash = e.toString();
  }
  return o.href;
};
const d = (e, t) => e.toLowerCase() === t.toLowerCase();
const h = (e, t) => {
  for (let n of e) {
    if (d(n, t)) {
      return true;
    }
  }
  return false;
};
const w = e => e.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, "");
const g = e => typeof e == "string" ? e : "0x" + e.toString(16);
async function y({
  store: r,
  walletList: o,
  externalWalletConfig: i,
  walletChainType: s,
  timeout: a = 3000
}) {
  let l = false;
  let u = window;
  return new Promise(c => {
    function m() {
      if (l) {
        return;
      }
      l = true;
      window.removeEventListener("ethereum#initialized", m);
      let a = r.getProviders();
      console.debug("Detected injected providers:", a.map(e => e.info));
      let u = [];
      for (let e of a) {
        if ((!o.includes("coinbase_wallet") || e.info.rdns !== "com.coinbase.wallet") && (s !== "solana-only" || e.info.rdns !== "app.phantom")) {
          u.push({
            type: e.info.name.toLowerCase().replace(/\s/g, "_"),
            eip6963InjectedProvider: e
          });
        }
      }
      if (s !== "solana-only") {
        for (let r of e()) {
          let e = t(r);
          if (!a.some(t => t.info.name === e)) {
            if (n(r, true) && !u.find(e => e.type === "metamask")) {
              u.push({
                type: "metamask",
                legacyInjectedProvider: r
              });
              continue;
            }
            if (e === "Phantom" && !u.find(e => e.type === "phantom")) {
              u.push({
                type: "phantom",
                legacyInjectedProvider: r
              });
              continue;
            }
            if (e === "Coinbase Wallet" && !u.find(e => e.type === "coinbase_wallet" && i.coinbaseWallet?.connectionOptions !== "smartWalletOnly")) {
              u.push({
                type: "coinbase_wallet",
                legacyInjectedProvider: r
              });
              continue;
            }
            if (!u.find(e => e.type === "unknown_browser_extension")) {
              u.push({
                type: "unknown_browser_extension",
                legacyInjectedProvider: r
              });
            }
          }
        }
      }
      c(u);
    }
    if (u.ethereum) {
      m();
    } else {
      window.addEventListener("ethereum#initialized", m, {
        once: true
      });
      setTimeout(() => {
        m();
      }, a);
    }
  });
}
function b(e) {
  return `eip155:${String(Number(e))}`;
}
const v = e => w(e).toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s/g, "_");
const P = (e, t, n, i) => {
  let s = Number(e);
  let a = t.find(e => e.id === s);
  if (!a) {
    throw new r(`Unsupported chainId ${e}`, 4901);
  }
  return o(a, n, i);
};
const D = (e, t) => {
  let n = Number(e);
  let o = t.find(e => e.id === n);
  if (!o) {
    throw new r(`Unsupported chainId ${e}`, 4901);
  }
  return o.blockExplorers?.default.url;
};
const j = e => {
  let t = {
    name: "string",
    version: "string",
    chainId: "uint256",
    verifyingContract: "address",
    salt: "bytes32"
  };
  let n = e.types.EIP712Domain ?? Object.entries(e.domain).map(([e, n]) => {
    if (n != null && typeof e == "string" && e in t) {
      return {
        name: e,
        type: t[e]
      };
    }
  }).filter(e => e !== undefined);
  return {
    ...e,
    types: {
      ...e.types,
      EIP712Domain: n
    }
  };
};
function F(e, {
  min: t,
  max: n
}) {
  return Math.min(Math.max(e, t), n);
}
export { F as clamp, f as constructURL, h as containsEthAddress, a as convert1dTo2dArray, y as detectInjectedConnectors, b as formatChainIdToCAIP2, u as formatSolanaWalletAddress, l as formatWalletAddress, j as generateTypedDataWithDomainType, D as getBlockExplorer, P as getJsonRpcEndpoint, p as invokeUntilSettled, v as normalizeWalletShortName, m as pollForResult, d as sameEthAddress, c as sleep, i as splitAtIndex, w as stripEmoji, g as toHex, s as validateEmail };
