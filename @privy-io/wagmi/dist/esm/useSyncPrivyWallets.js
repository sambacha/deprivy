import { useEffect } from "react";
import { useConfig, useReconnect } from "wagmi";
import { injected as createInjectedConnector } from "wagmi/connectors";
import { 
  useWallets, 
  usePrivy, 
  useConnectWallet, 
  useLogin 
} from "@privy-io/react-auth";

const useSyncPrivyWallets = ({
  setActiveWalletForWagmi: walletSelector
}) => {
  const {
    wallets: privyWallets,
    ready: isPrivyReady
  } = useWallets();
  
  const { user: privyUser } = usePrivy();
  const wagmiConfig = useConfig();
  const { reconnect: reconnectWagmi } = useReconnect();

  useConnectWallet({
    onSuccess: async ({ wallet: connectedWallet }) => {
      await wagmiConfig.storage?.removeItem(`${connectedWallet.meta.id}.disconnected`);
      if (!walletSelector) {
        await wagmiConfig.storage?.setItem("recentConnectorId", connectedWallet.meta.id);
        reconnectWagmi();
      }
    }
  });

  useLogin({
    onComplete: async ({ user: loggedInUser, loginAccount }) => {
      const hasPrivyWallet = loginAccount && 
        loginAccount.type !== "wallet" && 
        loggedInUser.linkedAccounts.find(account => 
          account.type === "wallet" && 
          account.walletClientType === "privy"
        );

      if (hasPrivyWallet) {
        await wagmiConfig.storage?.removeItem("io.privy.wallet.disconnected");
        reconnectWagmi();
      }
    }
  });

  useEffect(() => {
    if (walletSelector) {
      (async () => {
        const selectedWallet = walletSelector({
          wallets: privyWallets,
          user: privyUser
        });

        if (!selectedWallet) {
          clearWagmiState(wagmiConfig);
          reconnectWagmi();
          return;
        }

        const [setupConnector] = await setupWalletConnectors([selectedWallet], wagmiConfig);
        
        if (setupConnector) {
          await initializeWagmiState(selectedWallet, setupConnector, wagmiConfig);
          reconnectWagmi();
        } else {
          console.error(`Failed to setup connector for ${selectedWallet.address}`);
        }
      })();
    }
  }, [privyWallets, privyUser, walletSelector, wagmiConfig, reconnectWagmi]);

  useEffect(() => {
    if (!walletSelector) {
      setupWalletConnectors(privyWallets, wagmiConfig).then(() => {
        if (isPrivyReady) {
          reconnectWagmi();
        }
      });
    }
  }, [privyWallets, walletSelector, isPrivyReady, wagmiConfig, reconnectWagmi]);
};
const setupWalletConnectors = async (wallets, config) => {
  const connectors = await Promise.all(wallets.map(async wallet => {
    const provider = await wallet.getEthereumProvider();
    const existingConnector = config.connectors.find(
      connector => connector.id === wallet.meta.id
    );

    if (existingConnector) {
      return existingConnector;
    }

    const injectedConnector = createInjectedConnector({
      target: {
        provider,
        id: wallet.meta.id,
        name: wallet.meta.name,
        icon: wallet.meta.icon
      }
    });

    return config._internal.connectors.setup(injectedConnector);
  }));

  config._internal.connectors.setState(connectors);
  return connectors;
};

const clearWagmiState = config => {
  config._internal.connectors.setState([]);
  config.setState(currentState => ({
    chainId: currentState.chainId,
    connections: new Map(),
    current: undefined,
    status: "disconnected"
  }));
};

const initializeWagmiState = async (wallet, connector, config) => {
  await Promise.all([
    config.storage?.removeItem(`${wallet.meta.id}.disconnected`),
    config.storage?.setItem("recentConnectorId", connector.id)
  ]);

  let chainId = Number(wallet.chainId.replace("eip155:", ""));
  
  if (!config.chains.find(chain => chain.id === chainId)) {
    chainId = config.chains[0].id;
  }

  const connections = new Map([[connector.uid, {
    accounts: [wallet.address],
    chainId,
    connector
  }]]);

  config.setState(currentState => ({
    ...currentState,
    chainId,
    connections,
    current: connector.uid,
    status: "connected"
  }));
};

export { useSyncPrivyWallets };