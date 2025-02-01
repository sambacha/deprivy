import { isWalletAdapterCompatibleStandardWallet as t } from "@solana/wallet-adapter-base";
import { StandardWalletAdapter as e } from "@solana/wallet-standard-wallet-adapter-base";
import { getWallets as o } from "@wallet-standard/app";
import { SolanaWalletConnector as r } from "./index.mjs";
import "../../hooks/index.mjs";
import "../../types.mjs";
import "../base.mjs";
import "eventemitter3";
import "../errors.mjs";
import "@privy-io/js-sdk-core";
import "../../errors.mjs";
import "ofetch";
const m = t => {
  let e;
  let {
    get: m,
    on: a
  } = o();
  let s = t?.shouldAutoConnect ?? true;
  let n = p(m());
  let i = n.map(t => new r(t, s));
  let l = [];
  return {
    _setOnConnectorsUpdated: t => {
      e = t;
    },
    onMount: () => {
      l.push(a("register", (...t) => {
        i = (n = n.concat(...p(t))).map(t => new r(t, s));
        e?.(i);
      }), a("unregister", (...t) => {
        i = (n = n.filter(e => t.some(t => e.wallet === t))).map(t => new r(t, s));
        e?.(i);
      }));
    },
    onUnmount: () => {
      let t = l.pop();
      while (t) {
        t();
        t = l.pop();
      }
    },
    get: () => i
  };
};
let p = o => o.filter(t).map(t => new e({
  wallet: t
}));
export { m as toSolanaWalletConnectors };
