import { jsx as r } from "react/jsx-runtime";
import { useRef as e, useContext as t, useEffect as n, useCallback as l, createContext as u } from "react";
let i = /*#__PURE__*/u({
  plugins: {
    current: {}
  }
});
const o = ({
  children: t
}) => {
  let n = e({}); /*#__PURE__*/
  return r(i.Provider, {
    value: {
      plugins: n
    },
    children: t
  });
};
const c = (...r) => {
  let {
    plugins: e
  } = t(i);
  n(() => {
    for (let t of r) {
      e.current[t.id] = t;
    }
    return () => {
      for (let t of r) {
        delete e.current[t.id];
      }
    };
  }, [e]);
};
const p = () => {
  let {
    plugins: r
  } = t(i);
  return l(e => r.current[e], [r]);
};
export { o as PrivyPluginProvider, p as usePlugins, c as useRegisterPlugin };
