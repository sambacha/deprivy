import { usePrivyContext as s } from "./privy-context.mjs";
import "react";
import "./index.mjs";
const p = () => {
  let {
    startCrossAppAuthFlow: p,
    unlinkCrossAppAccount: t,
    signMessageWithCrossAppWallet: n,
    signTypedDataWithCrossAppWallet: o,
    sendTransactionWithCrossAppWallet: i
  } = s();
  return {
    loginWithCrossAppAccount: ({
      appId: s
    }) => p({
      appId: s,
      action: "login"
    }),
    linkCrossAppAccount: ({
      appId: s
    }) => p({
      appId: s,
      action: "link"
    }),
    unlinkCrossAppAccount: t,
    signMessage: n,
    signTypedData: o,
    sendTransaction: i
  };
};
export { p as useCrossAppAccounts };
