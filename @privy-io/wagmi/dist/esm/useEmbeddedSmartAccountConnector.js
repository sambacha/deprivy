import { useEffect } from "react";
import { useConnectors, useConfig, useReconnect } from "wagmi";
import { injected as createInjectedConnector } from "wagmi/connectors";

const useEmbeddedSmartAccountConnector = ({
  getSmartAccountFromSigner
}) => {
  const availableConnectors = useConnectors();
  const wagmiConfig = useConfig();
  const { reconnect: reconnectWallet } = useReconnect();

  useEffect(() => {
    (async () => {
      if (availableConnectors.find(connector => connector.id === "io.privy.smart_wallet")) {
        return;
      }

      const privyWalletConnector = availableConnectors.find(connector => 
        connector.id === "io.privy.wallet"
      );

      if (!privyWalletConnector) {
        return;
      }

      const walletProvider = await privyWalletConnector.getProvider();
      const smartWalletConnector = createInjectedConnector({
        target: {
          provider: await getSmartAccountFromSigner({
            signer: walletProvider
          }),
          id: "io.privy.smart_wallet",
          name: "io.privy.smart_wallet",
          icon: ""
        }
      });

      const configuredConnector = wagmiConfig._internal.connectors.setup(smartWalletConnector);
      wagmiConfig._internal.connectors.setState([configuredConnector]);
      await wagmiConfig.storage?.setItem("recentConnectorId", configuredConnector.id);
      reconnectWallet();
    })();
  }, [availableConnectors, wagmiConfig, getSmartAccountFromSigner, reconnectWallet]);
};

export { useEmbeddedSmartAccountConnector };