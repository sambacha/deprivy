import { jsx as e } from "react/jsx-runtime";
import { useContext as t, useState as r, createContext as n } from "react";
let a = /*#__PURE__*/n({
  screen: "Account",
  setScreen: e => {},
  menuData: {
    walletData: null
  },
  setMenuData: e => {},
  history: [],
  goBack: () => {},
  reset: () => {}
});
const c = () => t(a);
function o({
  children: t
}) {
  let [n, c] = r("Account");
  let [o, l] = r({
    walletData: null
  });
  let [u, s] = r([]);
  /*#__PURE__*/
  return e(a.Provider, {
    value: {
      history: u,
      goBack: () => {
        if (u.length === 0) {
          return;
        }
        let e = [...u];
        let t = e.pop();
        if (t) {
          s(e);
          c(t);
        }
      },
      screen: n,
      setScreen: e => {
        s([...u, n]);
        c(e);
      },
      menuData: o,
      setMenuData: e => {
        l(e);
      },
      reset: () => {
        c("Account");
        s([]);
      }
    },
    children: t
  });
}
export { o as MenuProvider, c as useMenu };
