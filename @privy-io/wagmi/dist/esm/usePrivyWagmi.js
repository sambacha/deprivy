import { useSetActiveWallet as t } from "./useSetActiveWallet.mjs";
import "react";
import "wagmi";
const e = () => {
  let {
    setActiveWallet: e
  } = t();
  return {
    setActiveWallet: e,
    activeWallet: undefined
  };
};
export { e as usePrivyWagmi };
