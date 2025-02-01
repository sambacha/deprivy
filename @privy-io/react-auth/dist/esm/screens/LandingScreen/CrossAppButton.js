import { jsx as o, jsxs as t, Fragment as r } from "react/jsx-runtime";
import { useState as e, useEffect as i } from "react";
import { ButtonLoader as m } from "../../components/Loader.mjs";
import { ProviderAppLogo as n } from "../../components/ProviderAppLogo.mjs";
import { usePrivyInternal as s } from "../../hooks/internal-context.mjs";
import { usePrivyContext as p } from "../../hooks/privy-context.mjs";
import { LoginMethodButton as a } from "./styles.mjs";
import "styled-components";
import "../../hooks/index.mjs";
const c = ({
  appId: c
}) => {
  let [l, d] = e(undefined);
  let {
    startCrossAppAuthFlow: f,
    authenticated: h
  } = p();
  let {
    client: j
  } = s();
  i(() => {
    (async () => {
      if (j) {
        d(await j.getCrossAppProviderDetails(c));
      }
    })();
  }, [j]);
  return /*#__PURE__*/o(a, {
    onClick: () => f({
      appId: c,
      action: h ? "link" : "login"
    }),
    disabled: !l,
    children: l ? /*#__PURE__*/t(r, {
      children: [/*#__PURE__*/o(n, {
        name: l.name,
        logoUrl: l.icon_url || undefined,
        size: "24px"
      }), " ", l.name]
    }) : /*#__PURE__*/o(m, {})
  });
};
export { c as CrossAppButton };
