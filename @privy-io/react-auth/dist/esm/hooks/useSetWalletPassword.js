import { useContext as t } from "react";
import { usePrivyEventSubscription as e } from "./events-context.mjs";
import { PrivyContext as r } from "./privy-context.mjs";
import "./index.mjs";
function o(o) {
  let {
    setWalletPassword: s
  } = t(r);
  e("setWalletPassword", o);
  return {
    setWalletPassword: s
  };
}
export { o as useSetWalletPassword };
