import { useContext as t } from "react";
import { PrivyContext as r } from "./privy-context.mjs";
import { useImportWallet as m } from "./useImportWallet.mjs";
import "./index.mjs";
import "../actions/importWallet.mjs";
import "../client/user.mjs";
import "viem/utils";
import "../errors.mjs";
import "ofetch";
import "./events-context.mjs";
import "./internal-context.mjs";
const o = () => {
  let {
    importWallet: o
  } = m();
  return {
    ...t(r),
    importWallet: o
  };
};
export { o as usePrivy };
