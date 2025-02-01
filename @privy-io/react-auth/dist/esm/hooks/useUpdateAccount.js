import { useContext as t } from "react";
import { usePrivyEventSubscription as e } from "./events-context.mjs";
import { PrivyContext as o } from "./privy-context.mjs";
import "./index.mjs";
function m(m) {
  let {
    updateEmail: r,
    updatePhone: p
  } = t(o);
  e("update", m);
  return {
    updateEmail: r,
    updatePhone: p
  };
}
export { m as useUpdateAccount };
