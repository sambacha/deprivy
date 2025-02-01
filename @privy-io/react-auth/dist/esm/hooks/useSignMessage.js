import { useContext as e } from "react";
import { usePrivyEventSubscription as t } from "./events-context.mjs";
import { PrivyContext as s } from "./privy-context.mjs";
import "./index.mjs";
function r(r) {
  let {
    signMessage: o
  } = e(s);
  t("signMessage", r);
  return {
    signMessage: o
  };
}
export { r as useSignMessage };
