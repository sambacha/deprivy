import { useCallback as e } from "react";
import { importWallet as t } from "../actions/importWallet.mjs";
import { useEmitPrivyEvent as r } from "./events-context.mjs";
import { usePrivyInternal as i } from "./internal-context.mjs";
import { usePrivyContext as o } from "./privy-context.mjs";
import "../client/user.mjs";
import "viem/utils";
import "../errors.mjs";
import "ofetch";
import "./index.mjs";
const m = () => {
  let {
    getAccessToken: m,
    user: s
  } = o();
  let {
    refreshUser: n,
    initializeWalletProxy: p
  } = i();
  let l = r();
  return {
    importWallet: e(({
      privateKey: e
    }) => t({
      getAccessToken: m,
      user: s,
      initializeWalletProxy: p,
      refreshUser: n,
      emitPrivyEvent: l
    }, {
      privateKey: e,
      chainType: "solana"
    }), [s, m, n, p, l])
  };
};
export { m as useImportWallet };
