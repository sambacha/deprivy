import { useContext as e } from "react";
import { usePrivyEventSubscription as t } from "./events-context.mjs";
import { PrivyContext as r } from "./privy-context.mjs";
import "./index.mjs";
function o(o) {
  let {
    setWalletRecovery: m
  } = e(r);
  t("setWalletRecovery", o);
  return {
    setWalletRecovery: m
  };
}
export { o as useSetWalletRecovery };
