import * as react_jsx_runtime from 'react/jsx-runtime';
import * as wagmi from 'wagmi';
import { WagmiProviderProps, CreateConfigParameters } from 'wagmi';
import * as _privy_io_react_auth from '@privy-io/react-auth';
import { ConnectedWallet, User } from '@privy-io/react-auth';
import { Chain, Transport, EIP1193Provider } from 'viem';

type SetActiveWalletForWagmiType = ({ wallets, user, }: {
    wallets: ConnectedWallet[];
    user: User | null;
}) => ConnectedWallet | undefined;

interface PrivyWagmiConnectorProps {
    /**
     * @experimental Filter the connected wallets (including the embedded wallet) that are passed to wagmi state.
     */
    setActiveWalletForWagmi?: SetActiveWalletForWagmiType;
}

declare const WagmiProvider: ({ children, setActiveWalletForWagmi, ...props }: React.PropsWithChildren<WagmiProviderProps & PrivyWagmiConnectorProps>) => react_jsx_runtime.JSX.Element;

declare const createConfig: <const chains extends readonly [Chain, ...Chain[]], transports extends Record<chains[number]["id"], Transport>>(args: CreateConfigParameters<chains, transports>) => wagmi.Config<chains, transports>;

/**
 * Set the active connection in wagmi to a Privy ConnectedWallet
 *
 * @example
 * const {setActiveWallet} = useSetActiveWallet()
 * const {wallets} = useWallets();
 *
 * <section>
 *   {wallets.map(wallet => (
 *     <button onClick={() => setActiveWallet(wallet)>{wallet.address}</button>
 *   ))}
 * </section>
 */
declare const useSetActiveWallet: () => {
    setActiveWallet: (wallet: ConnectedWallet) => Promise<void>;
};

/**
 * @deprecated Instead:
 * - to set the active wallet use `const {setActiveWallet} = useSetActiveWallet()` from `@privy-io/wagmi`
 * - to view the current active wallet, use `const {address} = useAccount()` from `wagmi`
 */
declare const usePrivyWagmi: () => {
    setActiveWallet: (wallet: _privy_io_react_auth.ConnectedWallet) => Promise<void>;
    activeWallet: undefined;
};

type useEmbeddedSmartAccountConnectorParams = {
    /**
     * Function to convert an EIP1193Provider for an externally-owned account to an EIP1193Provider
     * for the smart account implementation of your choice.
     *
     * @param signer {EIP1193Provider} viem EIP1193Provider for the user's embedded wallet (externally-owned account)
     * @returns Promise for a viem EIP1193Provider for the smart account implementation of your choice
     */
    getSmartAccountFromSigner: ({ signer }: {
        signer: EIP1193Provider;
    }) => Promise<EIP1193Provider>;
};
/**
 * Registers a smart account connector in wagmi for the Privy embedded wallet. As an argument,
 * pass an object with a `getSmartAccountFromSigner` method that converts a viem `EIP1193Provider`
 * object for the embedded wallet (EOA) to a viem `EIP1193Provider` object for the smart account
 * implementation used by your app (e.g. Kernel, Safe, SimpleAccount, etc.).
 *
 * @experimental
 * Currently, this hook only supports:
 * - creating a smart account connector for a Privy embedded wallet
 * - using only the smart account connector if an embedded wallet exists. All other connectors
 *   (e.g. external wallets) will be removed while the user is using the embedded wallet.
 *
 * @example
 * useEmbeddedSmartAccountConnector({
 *   getSmartAccountFromSigner: async ({signer}: {signer: EIP1193Provider}) => {
 *      // Replace `eoaToSmartAccount` with logic that converts the `signer` for the user's
 *      // externally-owned account (EOA) to an `EIP1193Provider` object for the smart account
 *      // implementation of your choice
 *      return eoaToSmartAccount(signer);
 *   }
 * });
 */
declare const useEmbeddedSmartAccountConnector: ({ getSmartAccountFromSigner, }: useEmbeddedSmartAccountConnectorParams) => void;

export { type SetActiveWalletForWagmiType, WagmiProvider, createConfig, useEmbeddedSmartAccountConnector, usePrivyWagmi, useSetActiveWallet };
