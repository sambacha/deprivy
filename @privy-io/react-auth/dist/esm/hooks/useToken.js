import { useContext as e } from "react";
import { usePrivyEventSubscription as t } from "./events-context.mjs";
import { PrivyContext as o } from "./privy-context.mjs";
import "./index.mjs";
function r(r) {
  let {
    getAccessToken: c
  } = e(o);
  t("accessToken", r);
  return {
    getAccessToken: c
  };
}
export { r as useToken };
