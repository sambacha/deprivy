import { jsx as jsxRuntime } from "react/jsx-runtime";
import { WagmiProvider as BaseWagmiProvider } from "wagmi";
import { PrivyWagmiConnector as WalletConnector } from "./PrivyWagmiConnector.mjs";
import "./useSyncPrivyWallets.mjs";
import "react";
import "wagmi/connectors";
import "@privy-io/react-auth";

const CustomWagmiProvider = ({
  children: childComponents,
  setActiveWalletForWagmi: setActiveWallet,
  ...providerConfig
}) => /*#__PURE__*/jsxRuntime(BaseWagmiProvider, {
  reconnectOnMount: false,
  ...providerConfig,
  children: /*#__PURE__*/jsxRuntime(WalletConnector, {
    setActiveWalletForWagmi: setActiveWallet,
    children: childComponents
  })
});

export { CustomWagmiProvider as WagmiProvider };