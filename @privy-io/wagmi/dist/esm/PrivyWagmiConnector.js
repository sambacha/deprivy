import { jsx as jsxElement, Fragment as ReactFragment } from "react/jsx-runtime";
import { useSyncPrivyWallets as syncWalletsHook } from "./useSyncPrivyWallets.mjs";
import "react";
import "wagmi";
import "wagmi/connectors";
import "@privy-io/react-auth";

const PrivyWagmiConnector = ({
  children: childComponents,
  setActiveWalletForWagmi: updateActiveWallet
}) => {
  syncWalletsHook({
    setActiveWalletForWagmi: updateActiveWallet
  });
  return /*#__PURE__*/jsxElement(ReactFragment, {
    children: childComponents
  });
};

export { PrivyWagmiConnector };
