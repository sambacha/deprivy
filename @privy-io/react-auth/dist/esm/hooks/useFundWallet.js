import { usePrivyEventSubscription as t } from "./events-context.mjs";
import { usePrivyInternal as e } from "./internal-context.mjs";
import "react";
import "./index.mjs";
const n = n => {
  t("fundWallet", n);
  let {
    fundWallet: r
  } = e();
  return {
    fundWallet: r
  };
};
export { n as useFundWallet };
