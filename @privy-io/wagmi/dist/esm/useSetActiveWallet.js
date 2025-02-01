import { useCallback } from "react";
import { useSwitchAccount, useConnect, useConfig } from "wagmi";

const useSetActiveWallet = () => {
  const { switchAccount: handleSwitchAccount } = useSwitchAccount();
  const { connect: handleConnect } = useConnect();
  const wagmiConfig = useConfig();

  return {
    setActiveWallet: useCallback(async (walletToActivate) => {
      for (const connector of wagmiConfig.connectors) {
        if (
          connector.id === walletToActivate.meta.id && 
          (await connector.getAccounts()).includes(walletToActivate.address)
        ) {
          await wagmiConfig.storage?.removeItem(
            `${walletToActivate.meta.id}.disconnected`
          );

          if (wagmiConfig.state.connections.get(connector.uid)) {
            handleSwitchAccount({
              connector: connector
            });
          } else {
            handleConnect({
              connector: connector
            });
          }
          return;
        }
      }
    }, [wagmiConfig.connectors, wagmiConfig.state.connections, wagmiConfig.storage, handleConnect, handleSwitchAccount])
  };
};
export { useSetActiveWallet };