import { useContext as o } from "react";
import { usePrivyEventSubscription as t } from "./events-context.mjs";
import { PrivyContext as r } from "./privy-context.mjs";
import "./index.mjs";
function m(m) {
  let {
    logout: e
  } = o(r);
  t("logout", m);
  return {
    logout: e
  };
}
export { m as useLogout };
