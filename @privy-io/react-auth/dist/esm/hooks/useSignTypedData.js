import { useContext as t } from "react";
import { usePrivyEventSubscription as e } from "./events-context.mjs";
import { PrivyContext as r } from "./privy-context.mjs";
import "./index.mjs";
function o(o) {
  let {
    signTypedData: i
  } = t(r);
  e("signTypedData", o);
  return {
    signTypedData: i
  };
}
export { o as useSignTypedData };
