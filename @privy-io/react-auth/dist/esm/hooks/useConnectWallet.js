import { useContext as t } from "react";
import { usePrivyEventSubscription as e } from "./events-context.mjs";
import { PrivyContext as o } from "./privy-context.mjs";
import "./index.mjs";
function n(n) {
  let {
    connectWallet: r
  } = t(o);
  e("connectWallet", n);
  return {
    connectWallet: r
  };
}
export { n as useConnectWallet };
