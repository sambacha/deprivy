import { usePrivyEventSubscription as t } from "./events-context.mjs";
import { usePrivyInternal as o } from "./internal-context.mjs";
import "react";
import "./index.mjs";
const m = m => {
  let {
    customAuthStatus: r
  } = o();
  t("customAuth", m);
  return {
    status: r
  };
};
export { m as useCustomAuth };
