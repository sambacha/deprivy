import { useContext as r } from "react";
import { PrivyContext as t } from "./privy-context.mjs";
import "./index.mjs";
function n() {
  let {
    signTransaction: n
  } = r(t);
  return {
    signTransaction: n
  };
}
export { n as useSignTransaction };
