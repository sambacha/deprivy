import { useContext as o } from "react";
import { usePrivyEventSubscription as t } from "./events-context.mjs";
import { PrivyContext as r } from "./privy-context.mjs";
import "./index.mjs";
function i(i) {
  let {
    login: m
  } = o(r);
  t("login", i);
  return {
    login: m
  };
}
export { i as useLogin };
