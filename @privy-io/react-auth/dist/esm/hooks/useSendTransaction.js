import { useContext as t } from "react";
import { usePrivyEventSubscription as n } from "./events-context.mjs";
import { PrivyContext as r } from "./privy-context.mjs";
import "./index.mjs";
function o(o) {
  let {
    sendTransaction: e
  } = t(r);
  n("sendTransaction", o);
  return {
    sendTransaction: e
  };
}
export { o as useSendTransaction };
