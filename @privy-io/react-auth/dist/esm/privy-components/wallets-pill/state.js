import { create as e } from "zustand";
import { shallow as t } from "zustand/shallow";
import { createWithEqualityFn as l } from "zustand/traditional";
import a from "../../storage.mjs";
const o = e(() => ({
  isModalOpen: false,
  resolvers: null
}));
let s = l(() => ({}), t);
const r = (e, t) => s(l => l[e]?.[t]);
const n = (e, t, l) => {
  s.setState(a => ({
    ...a,
    [e]: {
      ...a[e],
      [t]: l
    }
  }));
};
const i = async () => {
  let e;
  let t;
  let l = new Promise((l, a) => {
    e = l;
    t = a;
  });
  s.setState({});
  o.setState({
    isModalOpen: true,
    resolvers: {
      resolve: e,
      reject: t
    }
  });
  return await l;
};
const p = () => {
  let e = o.getState().resolvers;
  if (!e) {
    console.warn("useActiveWalletStore: Called close while modal was not open");
  }
  o.setState({
    isModalOpen: false
  });
  e?.resolve({
    wallet: o.getState().wallet
  });
};
const d = ({
  address: e,
  client: t,
  appId: l
}) => {
  let s = `${t}:${e}`;
  if (l) {
    a.put(m(l), s);
  }
  o.setState({
    wallet: s
  });
};
const c = () => o(e => e.isModalOpen);
const m = e => `privy:${e}:active-wallet-connection`;
export { p as close, i as open, d as setActiveWallet, m as toActiveWalletKey, n as updateBalance, o as useActiveWalletStore, r as useBalance, c as useIsModalOpen };
