import { useContext as t } from "react";
import { PrivyContext as m } from "./privy-context.mjs";
import "./index.mjs";
function i() {
  let {
    promptMfa: i,
    init: o,
    submit: r,
    cancel: e,
    mfaMethods: n
  } = t(m);
  return {
    promptMfa: i,
    init: o,
    submit: r,
    cancel: e,
    mfaMethods: n
  };
}
export { i as useMfa };
