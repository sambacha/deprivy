import { useContext as t } from "react";
import { PrivyContext as e } from "./privy-context.mjs";
import "./index.mjs";
function r() {
  let {
    createGuestAccount: r
  } = t(e);
  return {
    createGuestAccount: r
  };
}
export { r as useGuestAccounts };
