import { P as PrivyErrorCode, U as User, a as LoginMethod, b as LinkedAccountWithMetadata, B as BaseConnectedEthereumWallet, c as BaseConnectedSolanaWallet, W as Wallet, M as MfaMethod, d as UserRecoveryMethod, S as SolanaTransactionReceipt, O as OAuthTokens, C as Chain, F as FundingMethod, e as SolanaCluster, f as ConnectedSolanaWallet, g as CreateWalletOptions } from './types-CyPM8Lj_.js';
import { MouseEvent } from 'react';

/**
 * `CallbackError` optionally includes a second parameter with further error details.
 */
type CallbackError<Details extends Record<string, any> | undefined = undefined> = Details extends Record<string, any> ? (error: PrivyErrorCode, details: Details) => void : (error: PrivyErrorCode) => void;
interface PrivyEvents {
    login: {
        /**
         * Callback that will execute once a `login` flow successfully completes.
         * - If `config.embeddedWallets.createOnLogin` is set to 'off' or a wallet creation flow is not applicable,
         *   this will run after the user successfully authenticates.
         * - If `config.embeddedWallets.createOnLogin` is set to 'users-without-wallets' or 'all-users',
         *   this will run after the user successfully authenticates _and_ creates their wallet (if applicable).
         * - If a user is already authenticated, this will run immediately and the `wasAlreadyAuthenticated` flag will be set to `true`.
         *
         * @param params.user {@link User} the `user` oject corresponding to the authenticated user
         * @param params.isNewUser {boolean} boolean flag indicating if this is the user's first time logging in to your app
         * @param params.wasAlreadyAuthenticated {boolean} - boolean flag indicating whether the user entered the application already authenticated
         * @param params.loginMethod {string} - the method used by the user to login
         * @param params.loginAccount - the account corresponding to the loginMethod used
         */
        onComplete?: (params: {
            user: User;
            isNewUser: boolean;
            wasAlreadyAuthenticated: boolean;
            loginMethod: LoginMethod | null;
            loginAccount: LinkedAccountWithMetadata | null;
        }) => void;
        /**
         * Callback that will execute in the case of a non-successful login.
         *
         * @param error {@link PrivyErrorCode} - the corresponding error code
         */
        onError?: CallbackError;
    };
    logout: {
        /**
         * Callback that will execute when a user successfully logs out.
         */
        onSuccess?: () => void;
    };
    connectWallet: {
        /**
         * Callback that will execute once a successful `connectWallet` completes.
         * This will not run in the case of a wallet-based authentication or link flow.
         *
         * @param params.wallet {@link BaseConnectedEthereumWallet | BaseConnectedSolanaWallet} the `wallet` object correspending to the connection
         */
        onSuccess?: (params: {
            wallet: BaseConnectedEthereumWallet | BaseConnectedSolanaWallet;
        }) => void;
        /**
         * Callback that will execute in the case of a non-successful wallet connection.
         *
         * @param params.error {@link PrivyErrorCode} - the corresponding error code
         */
        onError?: CallbackError;
    };
    createWallet: {
        /**
         * Callback that will execute once on a successful embedded wallet creation.
         * This will run when `createWallet` is called manually, or when `config.embeddedWallets.createOnLogin` triggers
         * an automatic wallet creation.
         *
         * @param params.wallet {@link BaseConnectedWallet}- the created `wallet` object
         */
        onSuccess?: (params: {
            wallet: Wallet;
        }) => void;
        /**
         * Callback that will execute in the case of a non-successful wallet creation.
         *
         * @param params.error {@link PrivyErrorCode} - the corresponding error code
         */
        onError?: CallbackError;
    };
    linkAccount: {
        /**
         * Callback that will execute once on a successful linking of a new account/login method.
         * This will run when any of the 'link' methods are called manually.
         * @param params.user {@link User}- the user the account was linked to
         * @param params.linkMethod {@link LoginMethod}- the type of linked account
         * @param params.linkedAccount - the newly linked account
         */
        onSuccess?: (params: {
            user: User;
            linkMethod: LoginMethod;
            linkedAccount: LinkedAccountWithMetadata;
        }) => void;
        /**
         * Callback that will execute in the case of a non-successful account linking.
         *
         * @param error {PrivyErrorCode} - the corresponding error code
         * @param details.linkMethod {LoginMethod} - the type of (attempted) linked account
         */
        onError?: CallbackError<{
            linkMethod: LoginMethod;
        }>;
    };
    update: {
        /**
         * Callback that will execute once on a successful updating of an account.
         * This will run when any of the 'updateAccount' methods are called manually.
         * @param params.user {@link User}- the user the account was linked to
         * @param params.updateMethod {@link LoginMethod}- the type of updated account
         * @param params.updatedAccount - the newly updated account
         */
        onSuccess?: (params: {
            user: User;
            updateMethod: LoginMethod;
            updatedAccount: LinkedAccountWithMetadata;
        }) => void;
        /**
         * Callback that will execute in the case of a non-successful account linking.
         *
         * @param error {PrivyErrorCode} - the corresponding error code
         * @param details.linkMethod {LoginMethod} - the type of (attempted) linked account
         */
        onError?: CallbackError<{
            linkMethod: LoginMethod;
        }>;
    };
    configureMfa: {
        /**
         * Callback that will execute when MFA is required to complete a given action.
         * @param params.mfaMethods {@link MfaMethod[]} - List of MFA methods that the user can choose from
         */
        onMfaRequired: (params: {
            mfaMethods: MfaMethod[];
        }) => void;
    };
    setWalletPassword: {
        /**
         * Callback that will execute once a successful `setWalletPassword` completes.
         * @param params.wallet {@link Wallet}- the `wallet` object that the password was set for
         */
        onSuccess?: (params: {
            wallet: Wallet;
        }) => void;
        /**
         * Callback that will execute in the case of a non-successful setWalletPassword.
         *
         * @param params.error {PrivyErrorCode} - the corresponding error code
         */
        onError?: CallbackError;
    };
    setWalletRecovery: {
        /**
         * Callback that will execute once a successful `setWalletRecovery` completes.
         * @param params.method {@link UserRecoveryMethod} - the recovery method that was set
         * @param params.wallet {@link Wallet}- the wallet object that the recovery was set for
         */
        onSuccess?: (params: {
            method: UserRecoveryMethod;
            wallet: Wallet;
        }) => void;
        /**
         * Callback that will execute in the case of a non-successful setWalletRecovery.
         *
         * @param params.error {PrivyErrorCode} - the corresponding error code
         */
        onError?: CallbackError;
    };
    signMessage: {
        /**
         * Callback that will execute once a successful `signMessage` completes.
         * This will not run in the case of a wallet-based authentication or link flow.
         * @param params.signature - the signature (type string) of the embedded wallet used to sign message
         */
        onSuccess?: (params: {
            signature: string;
        }) => void;
        /**
         * Callback that will execute in the case of a non-successful signMessage.
         *
         * @param params.error {@link PrivyErrorCode} - the corresponding error code
         */
        onError?: CallbackError;
    };
    signTypedData: {
        /**
         * Callback that will execute once a successful `signTypedData` completes.
         * @param params.signature - the signature (type string) of the embedded wallet used to sign
         */
        onSuccess?: (params: {
            signature: string;
        }) => void;
        /**
         * Callback that will execute in the case of a non-successful signTypedData.
         *
         * @param params.error {@link PrivyErrorCode} - the corresponding error code
         */
        onError?: CallbackError;
    };
    sendTransaction: {
        /**
         * Callback that will execute once a successful `sendTransaction` completes.
         * This will not run for transactions with external wallets.
         * @param an object with the transaction hash
         */
        onSuccess?: (params: {
            hash: `0x${string}`;
        }) => void;
        /**
         * Callback that will execute in the case of a non-successful sendTransaction.
         *
         * @param params.error {@link PrivyErrorCode} - the corresponding error code
         */
        onError?: CallbackError;
    };
    signTransaction: {
        /**
         * Callback that will execute once a successful `signTransaction` completes.
         * This will not run for transactions with external wallets.
         * @param an object with the transaction signature
         */
        onSuccess?: (params: {
            signature: `0x${string}`;
        }) => void;
        /**
         * Callback that will execute in the case of a non-successful signTransaction.
         *
         * @param params.error {@link PrivyErrorCode} - the corresponding error code
         */
        onError?: CallbackError;
    };
    sendSolanaTransaction: {
        /**
         * Callback that will execute once a successful `sendSolanaTransaction` completes.
         * This will not run in the case of a wallet-based authentication or link flow.
         * @param params.response - the response {@link https://solana-labs.github.io/solana-web3.js/types/ParsedTransactionMeta.html SolanaTransactionReceipt} from the successful transaction
         */
        onSuccess?: (params: {
            response: SolanaTransactionReceipt;
        }) => void;
        /**
         * Callback that will execute in the case of a non-successful sendTransaction.
         *
         * @param params.error {@link PrivyErrorCode} - the corresponding error code
         */
        onError?: CallbackError;
    };
    accessToken: {
        /**
         * Callback that will execute when a user's access token is granted.
         * @param params.accessToken - The user's access token
         */
        onAccessTokenGranted: (params: {
            accessToken: string;
        }) => void;
        /**
         * Callback that will execute when a user's access token is removed.
         */
        onAccessTokenRemoved: () => void;
    };
    oAuthAuthorization: {
        /**
         * Callback that will execute when a user successfully authorizes an OAuth flow.
         *
         * @param params.oAuthTokens {@link OAuthTokens} - the OAuth tokens returned from the OAuth provider:
         * @param params.oAuthTokens.provider - {string}  The OAuth provider type.
         * @param params.oAuthTokens.accessToken - {string} The OAuth access token.
         * @param params.oAuthTokens.accessTokenExpiresInSeconds - {number} (optional) The number of seconds until the OAuth access token expires.
         * @param params.oAuthTokens.refreshToken - {string} (optional) The OAuth refresh token.
         * @param params.oAuthTokens.refreshTokenExpiresInSeconds - {number} (optional) The number of seconds until the OAuth refresh token expires.
         * if the refresh token is present and this field is undefined, it is assumed
         * that the refresh token does not have an expiration date.
         * @param params.oAuthTokens.scopes -  {string[]} (optional) The list of OAuth scopes the access token is approved for.
         *
         * @param params.user {@link User} The authenticated user
         */
        onOAuthTokenGrant: (params: {
            oAuthTokens: OAuthTokens;
            user: User;
        }) => void;
    };
    fundWallet: {
        /**
         * Callback that will execute when a funding flow is exited. This fires when a user closes a funding flow modal, for any reason.
         *
         * @param params.address {string} The address of the wallet being funded
         * @param params.chain {Chain} The chain of the wallet being funded
         * @param params.fundingMethod {@link FundingMethod} The funding method associated with the flow at time of exit. If the user had not yet selected
         * a recovery method, this will be null.
         * @param params.balance {bigint} The value for the funded wallet at the point of user exit.
         */
        onUserExited?: (params: {
            address: string;
            chain: Chain;
            fundingMethod: FundingMethod | 'manual' | null;
            balance: bigint | undefined;
        }) => void;
    };
    fundSolanaWallet: {
        /**
         * Callback that will execute when a funding flow is exited. This fires when a user closes a funding flow modal, for any reason.
         *
         * @param params.address {string} The address of the wallet being funded
         * @param params.cluster {SolanaCluster} The Solana cluster of the wallet being funded
         * @param params.fundingMethod {@link FundingMethod} The funding method associated with the flow at time of exit. If the user had not yet selected
         * a recovery method, this will be null.
         * @param params.balance {bigint} The value for the funded wallet at the point of user exit.
         */
        onUserExited?: (params: {
            address: string;
            cluster: SolanaCluster;
            fundingMethod: FundingMethod | 'manual' | null;
            balance: bigint | undefined;
        }) => void;
    };
    customAuth: {
        /**
         * Callback that will execute when Privy successfully exchanges a custom auth JWT for a Privy JWT
         * @param params.user - The Privy user
         */
        onAuthenticated: (params: {
            user: User;
        }) => void;
        /**
         * Callback that will execute when Privy detects a user is logged out from the third-party auth system, and correspondingly logs the user out.
         */
        onUnauthenticated: () => void;
    };
}

/**
 * Hook to create and interact with Solana wallets. This currently only supports an embedded Solana wallet and no
 * external wallets.
 *
 * @returns wallets {ConnectedSolanaWallet[]} an array of connected Solana wallets
 * @returns createWallet {() => Promise<Wallet>} an method to create an embedded Solana wallet.
 */
interface UseSolanaWalletsInterface {
    /**
     * Whether the wallets are ready to be used.
     */
    ready: boolean;
    /**
     * An array of the connected Solana wallets for the user. Currently, this will only contain the embedded
     * Solana wallet if the user has created one.
     */
    wallets: ConnectedSolanaWallet[];
    /**
     * Method to create an embedded Solana wallet for a user. This method will throw an error if the user already has an
     * embedded Solana wallet.
     * @returns wallet {Wallet} the Solana linked account for the user.
     */
    /**
     * Creates a Solana embedded wallet for the current user.
     *
     * This method will error if the user already has an embedded wallet or if they
     * exit in the middle of the flow.
     *
     * @returns Promise for the {@link Wallet} object for the newly created Solana embedded wallet
     */
    createWallet: (options?: CreateWalletOptions | MouseEvent<any, any>) => Promise<Wallet>;
    /**
     * Shows the user a Privy modal, from which they can copy their embedded solana wallet's private
     * key for easy export to another wallet client (e.g. Phantom, Backpack). The private key is loaded
     * on an iframe running on a separate domain from your app, meaning your app cannot access it.
     *
     * This method will error if the user is not authenticated or does not have an embedded solana wallet.
     * @param options {@link {address: string}} (optional) wallet address to export the private key for
     * @returns Promise that resolves once the user exits the modal
     */
    exportWallet: (options?: {
        address: string;
    }) => Promise<void>;
}
declare const useSolanaWallets: () => UseSolanaWalletsInterface;

export { type CallbackError as C, type PrivyEvents as P, type UseSolanaWalletsInterface as U, useSolanaWallets as u };
