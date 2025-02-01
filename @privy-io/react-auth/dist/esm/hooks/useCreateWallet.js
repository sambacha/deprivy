import { useContext as t } from "react";
import { usePrivyEventSubscription as e } from "./events-context.mjs";
import { PrivyContext as r } from "./privy-context.mjs";
import "./index.mjs";
function o(o) {
  let {
    createWallet: m
  } = t(r);
  e("createWallet", o);
  return {
    createWallet: m
  };
}
export { o as useCreateWallet };
