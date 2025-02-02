import { Adapter, WalletError, MessageSignerWalletAdapterProps, WalletAdapterProps, SignerWalletAdapterProps } from '@solana/wallet-adapter-base';
import { ReactElement } from 'react';
import { Hex } from 'viem';
import { Cluster as Cluster$1, CountryCode } from '@privy-io/js-sdk-core';
import { SmartWalletType, CustomMetadataType, PasskeyAuthenticateInputType } from '@privy-io/public-api';
import EventEmitter from 'eventemitter3';
import { TypedMessage as TypedMessage$1, MessageTypes as MessageTypes$1 } from '@metamask/eth-sig-util';
import { Transaction, VersionedTransaction, ParsedTransactionWithMeta, Cluster } from '@solana/web3.js';

interface ConnectorEvents {
    walletsUpdated(): void;
    initialized(): void;
}
/**
 * @hidden
 *
 * A WalletConnector is identified by a connectorType and walletClientType. A
 * connectorType includes injected, wallet_connect, etc. A walletClientType
 * includes metamask, trustwallet, etc.
 *
 * Each WalletConnector manages a list of wallets, identified by an address
 * and chainId. Each wallet has a connected property indicating its current
 * connection status, which is determined based on events emitted by the
 * underlying provider.
 *
 * The WalletConnector also emits two events: walletsUpdated and initialized.
 * The walletsUpdated event is triggered when the list of wallets changes,
 * while the initialized event is triggered when the WalletConnector is
 * ready and has successfully executed the syncAccounts() function for
 * the first time.
 */
declare abstract class WalletConnector extends EventEmitter<ConnectorEvents> {
    connected: boolean;
    initialized: boolean;
    walletClientType: WalletClientType;
    abstract wallets: (BaseConnectedEthereumWallet | BaseConnectedSolanaWallet)[];
    abstract chainType: 'ethereum' | 'solana';
    abstract connectorType: ConnectorType;
    constructor(walletClientType: WalletClientType);
    abstract isConnected(): Promise<boolean>;
    abstract subscribeListeners(): void;
    abstract unsubscribeListeners(): void;
    abstract get walletBranding(): WalletBranding;
    abstract initialize(): Promise<void>;
    abstract connect(options: {
        showPrompt?: boolean;
        chainId?: number;
    }): Promise<BaseConnectedWallet | null>;
    abstract disconnect(): void;
    abstract promptConnection(walletClientType: WalletClientType): void;
}

/**
 * These types are fully compatible with WAGMI chain types, in case
 * we need interop in the future.
 */
type RpcUrls = {
    http: readonly string[];
    webSocket?: readonly string[];
};
type NativeCurrency = {
    name: string;
    /** 2-6 characters long */
    symbol: string;
    decimals: number;
};
type BlockExplorer = {
    name: string;
    url: string;
};
/** A subset of WAGMI's chain type
 * https://github.com/wagmi-dev/references/blob/6aea7ee9c65cfac24f33173ab3c98176b8366f05/packages/chains/src/types.ts#L8
 *
 * @example
 *
 * override the RPC URL for a chain
 *
 * ```ts
 * import { mainnet } from 'viem/chains';
 *
 * const mainnetOverride: Chain = {
 *  ...mainnet,
 *  rpcUrls: {
 *    ...mainnet.rpcUrls,
 *    privyWalletOverride: {
 *      http: [INSERT_MAINNET_OVERRIDE_URL],
 *    },
 *  },
 * };
 *
 * ```
 * or
 * ```ts
 * import { mainnet } from 'viem/chains';
 * import { addRpcUrlOverrideToChain } from '@privy-io/react-auth';
 *
 * const mainnetOverride = addRpcUrlOverrideToChain(mainnet, INSERT_MAINNET_OVERRIDE_URL);
 * ```
 *
 */
type Chain = {
    /** Id in number form */
    id: number;
    /** Human readable name */
    name: string;
    /** Internal network name */
    network?: string;
    /** Currency used by chain */
    nativeCurrency: NativeCurrency;
    /** Collection of block explorers */
    blockExplorers?: {
        [key: string]: BlockExplorer;
        default: BlockExplorer;
    };
    /** Collection of RPC endpoints */
    rpcUrls: {
        [key: string]: RpcUrls;
        default: RpcUrls;
    } | {
        [key: string]: RpcUrls;
        default: RpcUrls;
        /** @optional Allows you to override the RPC url for this chain */
        privyWalletOverride: RpcUrls;
    };
    /** Flag for test networks */
    testnet?: boolean;
};
type ChainLikeWithId = {
    id: number;
};
/**
 * RPC configuration for wallets.
 */
type RpcConfig = {
    /**
     * Mapping of chainId to RPC URL. Overrides Privy default RPC URLs that are shared across projects. Set your own RPC URLs
     * to avoid rate limits or other throughput bottlenecks.
     *
     * Do not provide an RPC URL that can serve multiple networks. You should only provide RPC URLs that are speciifc to the
     * chain ID you'd like to override.
     */
    rpcUrls?: {
        [key: number]: string;
    };
    /**
     * Mapping between `walletClientType`s to the length of time after which RPC requests will timeout for that
     * `walletClientType`.
     *
     * By default, all RPC requests through Privy will timeout after 2 mins (120000 ms). Use this object to
     * override the RPC timeout in ms for specific` walletClientType`s, e.g. 'safe', in order to extend or
     * shorten the timeout duration.
     */
    rpcTimeouts?: {
        [key in WalletClientType]?: number;
    };
};

declare abstract class PrivyError extends Error {
    /**
     * Privy error type.
     */
    abstract type: string;
    /**
     * Original Error object, it the error originated client-side.
     */
    cause?: Error;
    /**
     * An optional error code, often included in Privy API responses.
     */
    privyErrorCode?: PrivyErrorCode;
    /**
     * @param type Privy error type.
     * @param message Human-readable message.
     * @param cause Source of this error.
     */
    protected constructor(message: string, cause?: unknown, privyErrorCode?: PrivyErrorCode);
    toString(): string;
}
/**
 * The PrivyConnector instance threw an exception.
 */
declare class PrivyConnectorError extends PrivyError {
    type: string;
    constructor(message: string, cause?: unknown, privyErrorCode?: PrivyErrorCode);
}
declare enum PrivyErrorCode {
    OAUTH_ACCOUNT_SUSPENDED = "oauth_account_suspended",
    MISSING_OR_INVALID_PRIVY_APP_ID = "missing_or_invalid_privy_app_id",
    MISSING_OR_INVALID_PRIVY_ACCOUNT_ID = "missing_or_invalid_privy_account_id",
    MISSING_OR_INVALID_TOKEN = "missing_or_invalid_token",
    INVALID_DATA = "invalid_data",
    INVALID_CAPTCHA = "invalid_captcha",
    LINKED_TO_ANOTHER_USER = "linked_to_another_user",
    CANNOT_LINK_MORE_OF_TYPE = "cannot_link_more_of_type",
    FAILED_TO_LINK_ACCOUNT = "failed_to_link_account",
    FAILED_TO_UPDATE_ACCOUNT = "failed_to_update_account",
    USER_EXITED_UPDATE_FLOW = "exited_update_flow",
    ALLOWLIST_REJECTED = "allowlist_rejected",
    OAUTH_USER_DENIED = "oauth_user_denied",
    OAUTH_UNEXPECTED = "oauth_unexpected",
    UNKNOWN_AUTH_ERROR = "unknown_auth_error",
    USER_EXITED_AUTH_FLOW = "exited_auth_flow",
    USER_EXITED_LINK_FLOW = "exited_link_flow",
    USER_EXITED_SET_PASSWORD_FLOW = "user_exited_set_password_flow",
    MUST_BE_AUTHENTICATED = "must_be_authenticated",
    UNKNOWN_CONNECT_WALLET_ERROR = "unknown_connect_wallet_error",
    GENERIC_CONNECT_WALLET_ERROR = "generic_connect_wallet_error",
    CLIENT_REQUEST_TIMEOUT = "client_request_timeout",
    INVALID_CREDENTIALS = "invalid_credentials",
    MISSING_MFA_CREDENTIALS = "missing_or_invalid_mfa",
    UNKNOWN_MFA_ERROR = "unknown_mfa_error",
    EMBEDDED_WALLET_ALREADY_EXISTS = "embedded_wallet_already_exists",
    EMBEDDED_WALLET_NOT_FOUND = "embedded_wallet_not_found",
    EMBEDDED_WALLET_CREATE_ERROR = "embedded_wallet_create_error",
    UNKNOWN_EMBEDDED_WALLET_ERROR = "unknown_embedded_wallet_error",
    EMBEDDED_WALLET_PASSWORD_UNCONFIRMED = "embedded_wallet_password_unconfirmed",
    EMBEDDED_WALLET_PASSWORD_ALREADY_EXISTS = "embedded_wallet_password_already_exists",
    EMBEDDED_WALLET_RECOVERY_ALREADY_EXISTS = "embedded_wallet_recovery_already_exists",
    TRANSACTION_FAILURE = "transaction_failure",
    UNSUPPORTED_CHAIN_ID = "unsupported_chain_id",
    NOT_SUPPORTED = "not_supported",
    CAPTCHA_TIMEOUT = "captcha_timeout",
    INVALID_MESSAGE = "invalid_message",
    UNABLE_TO_SIGN = "unable_to_sign",
    CAPTCHA_FAILURE = "captcha_failure",
    CAPTCHA_DISABLED = "captcha_disabled",
    SESSION_STORAGE_UNAVAILABLE = "session_storage_unavailable",
    TOO_MANY_REQUESTS = "too_many_requests",
    USER_LIMIT_REACHED = "max_accounts_reached",
    DISALLOWED_LOGIN_METHOD = "disallowed_login_method",
    DISALLOWED_PLUS_EMAIL = "disallowed_plus_email",
    PASSKEY_NOT_ALLOWED = "passkey_not_allowed",
    USER_DOES_NOT_EXIST = "user_does_not_exist",
    INSUFFICIENT_BALANCE = "insufficient_balance",
    ACCOUNT_TRANSFER_REQUIRED = "account_transfer_required"
}

declare class WalletTimeoutError extends PrivyConnectorError {
    type: string;
    constructor();
}
/**
 * A ProviderRpcError combines the necessary bits of the {PrivyError} with the
 * EIP-compliant ProviderRpcError. This is meant to be a type around errors raised
 * by the ethereum provider.
 */
declare class ProviderRpcError extends PrivyError {
    type: string;
    readonly code: number;
    readonly data?: unknown;
    constructor(message: string, code: number, data?: unknown);
}

type ProviderConnectInfo = {
    chainId: string;
};
type OnConnectEventHandler = (connectInfo: ProviderConnectInfo) => void;
type OnDisconnectEventHandler = (error: ProviderRpcError) => void;
type OnChainChangedEventHandler = (chainId: string | number) => void;
type OnAccountsChangedEventHandler = (accounts: string[]) => void;
type ProviderMessage = {
    type: string;
    data: unknown;
};
type OnMessageEventHandler = (message: ProviderMessage) => void;
type EIP1193OnEventHandler = OnConnectEventHandler | OnDisconnectEventHandler | OnChainChangedEventHandler | OnAccountsChangedEventHandler | OnMessageEventHandler;
interface EIP1193Provider {
    rpcTimeoutDuration?: number;
    request: (request: {
        method: string;
        params?: Array<any> | undefined;
    }) => Promise<any>;
    on: (eventName: string, listener: EIP1193OnEventHandler) => any;
    removeListener: (eventName: string | symbol, listener: (...args: any[]) => void) => any;
}
interface RequestArguments {
    readonly method: string;
    readonly params?: readonly unknown[] | object | any;
}

/**
 * Represents a connection with a single Solana wallet provider. Manages wallet state
 * including ongoing connection status, and exposes methods for connecting and disconnecting.
 */
declare class SolanaWalletConnector extends WalletConnector {
    chainType: "solana";
    connectorType: "solana_adapter";
    wallets: BaseConnectedSolanaWallet[];
    private adapter;
    private shouldAutoConnect;
    constructor(adapter: Adapter, shouldAutoConnect: boolean);
    get isInstalled(): boolean;
    /**
     * Builds a connected wallet object to be exposed to the developer. This object
     * contains the address and a few helper methods.
     *
     * Provider methods share the PrivyProxyProvider instance. This means that multiple
     * wallets may share the same provider if one wallet was disconnected and another
     * wallet was connected.
     *
     * A wallet is considered connected if it is present in the wallets array and is
     * in a connected state.
     *
     * @hidden
     */
    buildConnectedWallet(wallet: Adapter, meta: ConnectedWalletMetadata): BaseConnectedSolanaWallet;
    /**
     * @hidden
     */
    syncAccounts(): Promise<void>;
    /**
     * @hidden
     */
    get walletBranding(): WalletBranding;
    /**
     * @hidden
     */
    initialize(): Promise<void>;
    /**
     * @hidden
     */
    connect(options: {
        showPrompt: boolean;
    }): Promise<BaseConnectedSolanaWallet | null>;
    /**
     * @hidden
     */
    disconnect: () => void;
    /**
     * @hidden
     */
    promptConnection: () => Promise<void>;
    protected onDisconnect: () => void;
    protected onConnect: (_: any) => void;
    protected onError: (_: WalletError) => void;
    protected onReadyStateChange: (readyState: string) => void;
    /**
     * Get the most recently connected wallet.
     *
     * @hidden
     */
    getConnectedWallet(): Promise<BaseConnectedSolanaWallet | null>;
    /**
     * We depend on the adapter to manage the connection state. We consider a wallet
     * connected if the adapter is connected and its readyState is 'Installed'.
     *
     * @hidden
     */
    isConnected(): Promise<boolean>;
    /**
     * @hidden
     */
    subscribeListeners(): void;
    /**
     * @hidden
     */
    unsubscribeListeners(): void;
}

interface SolanaWalletConnectorsOptions {
    shouldAutoConnect?: boolean;
}
/**
 * Plugin object to add solana support to the Privy SDK
 */
type SolanaWalletConnectorsConfig = {
    /**
     * Creates listeners for when solana wallets are registered or unregistered
     */
    onMount: () => void;
    /**
     * Remove listener registered by `onMount`
     */
    onUnmount: () => void;
    /**
     * Get all Wallets that have been registered, converted to `SolanaWalletConnectors`.
     */
    get: () => SolanaWalletConnector[];
};
/**
 * Wraps the wallet detection logic found in `@solana/wallet-standard-wallet-adapter-base`
 * and `@wallet-standard-app`. Returns a `SolanaWalletConnectors` object to be used with the `PrivyProvider`.
 *
 * @param {SolanaWalletConnectorsOptions} args Configuration object
 * @param {boolean} args.shouldAutoConnect Whether to automatically connect to the wallet.
 * Defaults to `true` and should not prompt the user loudly for connection. However, some legacy
 * adapters may still auto-connect loudly, so this flag can be used to disable that behavior.
 */
declare const toSolanaWalletConnectors: (args?: SolanaWalletConnectorsOptions) => SolanaWalletConnectorsConfig;

interface SolanaProvider {
    request: (request: {
        method: string;
        params?: any;
    }) => Promise<any>;
}

/**
 * Accepted payment methods for the MoonPay fiat on-ramp.
 */
type MoonpayPaymentMethod = 'ach_bank_transfer' | 'credit_debit_card' | 'gbp_bank_transfer' | 'gbp_open_banking_payment' | 'mobile_wallet' | 'sepa_bank_transfer' | 'sepa_open_banking_payment' | 'pix_instant_payment' | 'yellow_card_bank_transfer';
type MoonpayUiConfig = {
    accentColor?: string;
    theme?: 'light' | 'dark';
};
/**
 * Cryptocurrency codes for the MoonPay fiat on-ramp. These codes
 * follow the format {TOKEN_NAME}_{NETWORK_NAME}.
 */
type MoonpayCurrencyCode = 'AVAX_CCHAIN' | 'CELO_CELO' | 'CUSD_CELO' | 'DAI_ETHEREUM' | 'ETH_ETHEREUM' | 'ETH_ARBITRUM' | 'ETH_POLYGON' | 'ETH_BASE' | 'FIL_FVM' | 'MATIC_ETHEREUM' | 'MATIC_POLYGON' | 'USDC_ETHEREUM' | 'USDC_ARBITRUM' | 'USDC_OPTIMISM' | 'USDC_POLYGON' | 'USDC_BASE' | 'USDT_ETHEREUM' | 'USDT_POLYGON' | 'WETH_POLYGON' | 'WBTC_ETHEREUM' | 'BNB_BNB' | 'BNB_BSC' | 'SOL';
/**
 * Configuration parameter for the MoonPay fiat on-ramp.
 */
type MoonpayConfig = {
    currencyCode?: MoonpayCurrencyCode;
    quoteCurrencyAmount?: number;
    paymentMethod?: MoonpayPaymentMethod;
    uiConfig?: MoonpayUiConfig;
};
type MoonpaySignRequest = {
    address: string;
    config: MoonpayConfig;
    useSandbox: boolean;
};
type MoonpaySignResponse = {
    signedUrl: string;
    externalTransactionId: string;
};

declare const DEFAULT_BICONOMY_PAYMASTER_CONTEXT: {
    mode: string;
    calculateGasLimits: boolean;
    expiryDuration: number;
    sponsorshipInfo: {
        webhookData: {};
        smartAccountInfo: {
            name: string;
            version: string;
        };
    };
};
type BiconomyPaymasterContext = typeof DEFAULT_BICONOMY_PAYMASTER_CONTEXT;
type AlchemyPaymasterContextClient = {
    policyId: string;
};

/**
 * A transaction that can be sent to the Solana network. Legacy transactions or v0 transactions (versioned) are supported.
 * Refer to {@link https://solana-labs.github.io/solana-web3.js/classes/Transaction.html Transaction} and {@link https://solana-labs.github.io/solana-web3.js/classes/VersionedTransaction.html VersionedTransaction}
 */
type SupportedSolanaTransaction = Transaction | VersionedTransaction;
/**
 * Result of the transaction sent to the Solana network.
 */
type SolanaTransactionReceipt = {
    /** The signature of the transaction */
    signature: string;
    /** The parsed transaction result. Refer to {@link https://solana-labs.github.io/solana-web3.js/types/ParsedTransactionWithMeta.html ParsedTransactionWithMeta}*/
    parsedTransaction: ParsedTransactionWithMeta | null;
    /** The fees payed for the transaction in lamports */
    fees: bigint;
};
type SolanaCluster = {
    /**
     * The network name
     * Refer to {@link https://solana-labs.github.io/solana-web3.js/types/Cluster.html Cluster} for more information
     * */
    name: Cluster;
    /** The RPC endpoint */
    rpcUrl?: string;
};

declare const SUPPORTED_OAUTH_PROVIDERS: readonly ["google", "discord", "twitter", "github", "spotify", "instagram", "tiktok", "linkedin", "apple"];
declare const SUPPORTED_RECOVERY_PROVIDERS: readonly ["google-drive", "icloud"];
declare const SUPPORTED_MFA_METHODS: readonly ["sms", "totp", "passkey"];
type MfaMethod = (typeof SUPPORTED_MFA_METHODS)[number];
type MfaSubmitArgs = {
    mfaMethod: MfaMethod;
    mfaCode: string | PasskeyAuthenticateInputType['authenticator_response'];
    relyingParty: string;
};
type EntropyIdVerifier = 'ethereum-address-verifier' | 'solana-address-verifier';
/**
 * Supported OAuth providers. Can be `'google'`, `'discord'`, `'twitter'`, `'github'`, `'spotify'`,
 * `'instagram'`, `'tiktok'`, `'linkedin'`, or `'apple'`
 */
type OAuthProviderType = (typeof SUPPORTED_OAUTH_PROVIDERS)[number];
/**
 * Supported OAuth providers for the recovery flow. Can be `'google-drive'`
 */
type RecoveryProviderType = (typeof SUPPORTED_RECOVERY_PROVIDERS)[number];
type LoginMethod = 'email' | 'sms' | 'siwe' | 'siws' | 'farcaster' | OAuthProviderType | 'passkey' | 'telegram' | 'custom' | `privy:${string}` | 'guest';
type LoginWithCode = {
    /**
     * One-time password _([OTP](https://en.wikipedia.org/wiki/One-time_password))_ that was sent to user during first login step
     */
    code: string;
};
declare const EMBEDDED_WALLET_CLIENT_TYPES: readonly ["privy"];
type EmbeddedWalletClientType = (typeof EMBEDDED_WALLET_CLIENT_TYPES)[number];
declare const INJECTED_WALLET_CLIENT_TYPES: readonly ["metamask", "phantom", "brave_wallet", "rainbow", "uniswap_wallet_extension", "uniswap_extension", "rabby_wallet", "bybit_wallet", "crypto.com_wallet_extension", "crypto.com_onchain"];
type InjectedWalletClientType = (typeof INJECTED_WALLET_CLIENT_TYPES)[number];
declare const COINBASE_WALLET_CLIENT_TYPES: readonly ["coinbase_wallet", "coinbase_smart_wallet"];
type CoinbaseWalletClientType = (typeof COINBASE_WALLET_CLIENT_TYPES)[number];
type WalletConnectWalletClientType = (typeof WALLET_CONNECT_WALLET_CLIENT_TYPES)[number];
declare const UNKNOWN_WALLET_CLIENT_TYPES: readonly ["unknown"];
type UnknownWalletClientType = (typeof UNKNOWN_WALLET_CLIENT_TYPES)[number];
declare const SOLANA_WALLET_CLIENT_TYPES: readonly ["phantom", "solflare", "glow"];
type SolanaWalletClientType = (typeof SOLANA_WALLET_CLIENT_TYPES)[number];
type WalletClientType = InjectedWalletClientType | CoinbaseWalletClientType | WalletConnectWalletClientType | EmbeddedWalletClientType | UnknownWalletClientType | SolanaWalletClientType;
declare const SUPPORTED_CONNECTOR_TYPES: string[];
type ConnectorType = (typeof SUPPORTED_CONNECTOR_TYPES)[number];
/**
 * Wallet metadata currently for internal use only
 */
type WalletBranding = {
    name: string;
    id: string;
    icon?: string | EmbeddedSVG;
};
type LinkedAccountType = 'wallet' | 'smart_wallet' | 'email' | 'phone' | 'google_oauth' | 'twitter_oauth' | 'discord_oauth' | 'github_oauth' | 'spotify_oauth' | 'instagram_oauth' | 'tiktok_oauth' | 'linkedin_oauth' | 'apple_oauth' | 'custom_auth' | 'farcaster' | 'passkey' | 'telegram' | 'cross_app' | 'guest';
/** @ignore */
interface LinkMetadata {
    /** Account type, most commonly useful when filtering through linkedAccounts */
    type: LinkedAccountType;
    /**
     * @deprecated use `firstVerifiedAt` instead.
     * Datetime when this account was linked to the user or created. */
    verifiedAt: Date;
    /** Datetime when this account was linked to the user. */
    firstVerifiedAt: Date | null;
    /** Datetime when this account was most recently used as a login/link method by the user. */
    latestVerifiedAt: Date | null;
}
/**
 * Legacy configuration for the Moonpay funding selection.
 *
 * @deprecated
 */
type MoonpayFundingConfig = {
    config: MoonpayConfig;
    provider?: 'moonpay';
};
/**
 * Config for preferred credit card provider. We will default to using this method first if available.
 */
type PreferredCardProvider = 'coinbase' | 'moonpay';
/**
 * Configuration for Solana funding
 */
type SolanaFundingConfig = {
    /** The cluster used for connections */
    cluster?: {
        name: Cluster$1;
    };
    /** The default amount in SOL */
    amount?: string;
    /** The default funding method */
    defaultFundingMethod?: DefaultFundingMethod;
    card?: {
        /** The preferred card provider for funding */
        preferredProvider?: PreferredCardProvider;
    };
};
/**
 * Configuration for native funding amount.
 */
type NativeFundingConfig = {
    chain?: ChainLikeWithId;
    amount?: string;
    defaultFundingMethod?: DefaultFundingMethod;
    card?: {
        /** The preferred card onramp for funding */
        preferredProvider?: PreferredCardProvider;
    };
} | {
    chain?: ChainLikeWithId;
    amount: string;
    asset: {
        erc20: Hex;
    } | 'USDC' | 'native-currency';
    defaultFundingMethod?: DefaultFundingMethod;
    card?: {
        /** The preferred card onramp for funding */
        preferredProvider?: PreferredCardProvider;
    };
};
/**
 * Optional configuration parameter for the fiat on-ramp.
 */
type FundWalletConfig = MoonpayFundingConfig | NativeFundingConfig;
/**
 * Possible methods of user-driven recovery.
 * This is set, per app, on the server.
 */
type UserRecoveryMethod = 'user-passcode' | RecoveryProviderType;
/**
 * Object representation of a user's wallet.
 */
interface Wallet {
    /** The wallet address. */
    address: string;
    /**
     * Chain type of the wallet address.
     */
    chainType: 'ethereum' | 'solana';
    /**
     * The wallet client used for this wallet during the most recent verification.
     *
     * If the value is `privy`, then this is a privy embedded wallet.
     *
     * Other values include but are not limited to `metamask`, `rainbow`, `coinbase_wallet`, etc.
     */
    walletClientType?: string;
    /**
     * The connector type used for this wallet during the most recent verification.
     *
     * This includes but is not limited to `injected`, `wallet_connect`, `coinbase_wallet`, `embedded`.
     */
    connectorType?: string;
    /**
     * If this is a 'privy' embedded wallet, stores the recovery method:
     *
     *     1. 'privy': privy escrow of the recovery material
     *     2. 'user-passcode': recovery protected by user-input passcode
     */
    recoveryMethod?: 'privy' | UserRecoveryMethod;
    /** Whether the wallet is imported. Only applies to embedded wallets (`walletClientType === 'privy'`). */
    imported: boolean;
    /** Whether the wallet is delegated. Only applies to embedded wallets (`walletClientType === 'privy'`). */
    delegated: boolean;
    /** HD index for the wallet. Only applies to embedded wallets (`walletClientType === 'privy'`). */
    walletIndex: number | null;
}
/**
 * Union type of all possible base connected wallets.
 */
type BaseConnectedWalletType = BaseConnectedEthereumWallet | BaseConnectedSolanaWallet;
/**
 * Object representation of metadata reported by a connected wallet from a wallet connector
 */
interface ConnectedWalletMetadata {
    /** The wallet name (e.g. MetaMask). */
    name: string;
    /** The wallet RDNS, falls back to the wallet name if none is available. */
    id: string;
    /** The wallet logo */
    icon?: string;
}
/**
 * Object representation of a base connected wallet from a wallet connector.
 */
interface BaseConnectedWallet {
    type: 'ethereum' | 'solana';
    /** The wallet address. */
    address: string;
    /** The first time this wallet was connected without break. */
    connectedAt: number;
    /**
     * The wallet client where this key-pair is stored.
     * e.g. metamask, rainbow, coinbase_wallet, etc.
     */
    walletClientType: WalletClientType;
    /**
     * The connector used to initiate the connection with the wallet client.
     * e.g. injected, wallet_connect, coinbase_wallet, etc.
     */
    connectorType: ConnectorType;
    /** Whether the wallet is imported. */
    imported: boolean;
    /**
     * Metadata for the wallet.
     */
    meta: ConnectedWalletMetadata;
    /** Returns true if the wallet is connected, false otherwise */
    isConnected: () => Promise<boolean>;
    /**
     * @experimental **Experimental**: This property is subject to change at any time.
     *
     * Not all wallet clients support programmatic disconnects (e.g. MetaMask, Phantom).
     * In kind, if the wallet's client does not support programmatic disconnects,
     * this method will no-op.
     */
    disconnect: () => void;
}
/**
 * Object representation of a base connected Solana wallet from a wallet connector.
 */
interface BaseConnectedSolanaWallet extends BaseConnectedWallet {
    type: 'solana';
    /**
     * Returns a light provider for interfacing with this wallet. Support message signing
     * on embedded and external wallets using an internal interface.
     */
    getProvider: () => Promise<SolanaProvider>;
    signMessage: MessageSignerWalletAdapterProps['signMessage'];
    sendTransaction: WalletAdapterProps['sendTransaction'];
    signTransaction: SignerWalletAdapterProps['signTransaction'];
}
/**
 * Object representation of a base connected Ethereum wallet from a wallet connector.
 */
interface BaseConnectedEthereumWallet extends BaseConnectedWallet {
    type: 'ethereum';
    /** The current chain ID with CAIP-2 formatting. */
    chainId: string;
    /**
     * Switch the network chain to a specified ID.
     * Note: The chainId must be a supported network: https://docs.privy.io/guide/frontend/embedded/networks
     * Note: This will not update any existing provider instances, re-request `wallet.getEthereumProvider` (e.g.)
     *   to get a provider with the updated chainId.
     *
     * @param targetChainId The specified chain ID to switch to, as a number or 0x prefixed string.
     * @returns void
     */
    switchChain: (targetChainId: `0x${string}` | number) => Promise<void>;
    /** Helper methods to build providers for interfacing with this wallet. */
    getEthereumProvider: () => Promise<EIP1193Provider>;
    /**
     * Perform personal_sign with the user's wallet.
     *
     * @param {string} message The message to sign.
     * @returns {string} The resulting signature.
     */
    sign: (message: string) => Promise<string>;
}
interface PrivyConnectedWallet {
    /** True if this wallet is linked to the authenticated user. False if it is not yet linked or
     * the user has not yet authenticated. */
    linked: boolean;
    /** Login with this wallet or link this wallet to the authenticated user.
     *
     * Throws a PrivyClientError if the wallet is not connected.
     */
    loginOrLink: () => Promise<void>;
    /** Unlink this wallet to the authenticated user. Throws a PrivyClientError if the user is not
     * authenticated. */
    unlink: () => Promise<void>;
    /** The HD wallet index  */
    walletIndex?: number;
}
/**
 * Object representation of a connected wallet, with additional Privy flows
 */
interface ConnectedWallet extends BaseConnectedEthereumWallet, PrivyConnectedWallet {
    /**
     * Prompt the user to go through the funding flow and for the connected wallet.
     *
     * This will open the modal with a prompt for the user to select a funding method (if multiple are enabled).
     *
     * Once the user continues to the funding flow, Privy will display the funding status screen, and wait
     * for the transaction to complete.
     *
     * Note: Even after a successful funding, funds can take a few minutes to arrive in the user's wallet.
     *
     * Privy currently supports funding via external wallets and Moonpay.
     *
     *  @param {FundWalletConfig} fundWalletConfig Funding configuration to specify chain and funding amount (if enabled)
     * **/
    fund: (fundWalletConfig?: FundWalletConfig) => Promise<void>;
}
/**
 * Object representation of a connected Solana wallet for the user.
 */
interface ConnectedSolanaWallet extends BaseConnectedSolanaWallet, PrivyConnectedWallet {
    /**
     * @deprecated use the `useFundWallet` hook from the solana package instead.
     *
     **/
    fund: (fundWalletConfig?: SolanaFundingConfig) => Promise<void>;
}
/**
 * Object representation of a smart wallet.
 */
interface SmartWallet {
    /** The wallet address. */
    address: string;
    /** The provider of the smart wallet. */
    smartWalletType: SmartWalletType;
}
/** Object representation of a user's email. */
interface Email {
    /** The email address. */
    address: string;
}
/** Object representation of a user's phone number. */
interface Phone {
    /** The phone number. */
    number: string;
}
/** Object representation of a user's Google account. */
interface Google {
    /** The `sub` claim from the Google-issued JWT for this account. */
    subject: string;
    /** The email associated with the Google account. */
    email: string;
    /** The name associated with the Google account. */
    name: string | null;
}
/** Object representation of a user's Twitter account. */
interface Twitter {
    /** The `sub` claim from the Twitter-issued JWT for this account. */
    subject: string;
    /** The username associated with the Twitter account. */
    username: string | null;
    /** The name associated with the Twitter account. */
    name: string | null;
    /** The profile picture URL associated with the Twitter account.
     *  Note that the Twitter image URL returned is appended with `_normal`
     *  to return a 48x48px image. In order to retrieve the original-sized image,
     *  remove the `_normal` from the URL as specified in the Twitter API docs:
     *  https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/user-profile-images-and-banners
     */
    profilePictureUrl: string | null;
}
/** Object representation of a user's Discord account. */
interface Discord {
    /** The `sub` claim from the Discord-issued JWT for this account. */
    subject: string;
    /** The username associated with the Discord account.  */
    username: string | null;
    /** The email associated with the Discord account. */
    email: string | null;
}
/** Object representation of a user's Github account. */
interface Github {
    /** The `sub` claim from the Github-issued JWT for this account. */
    subject: string;
    /** The username associated with the Github account.  */
    username: string | null;
    /** The name associated with the Github account. */
    name: string | null;
    /** The email associated with the Github account. */
    email: string | null;
}
/** Object representation of a user's Spotify account. */
interface Spotify {
    /** The user id associated with the Spotify account. */
    subject: string;
    /** The email associated with the Spotify account.  */
    email: string | null;
    /** The display name associated with the Spotify account. */
    name: string | null;
}
/** Object representation of a user's Instagram account. */
interface Instagram {
    /** The user id associated with the Instagram account. */
    subject: string;
    /** The username associated with the Instagram account.  */
    username: string | null;
}
/** Object representation of a user's Tiktok account. */
interface Tiktok {
    /** The `sub` claim from the Tiktok-issued JWT for this account. */
    subject: string;
    /** The username associated with the Tiktok account.  */
    username: string | null;
    /** The display name associated with the Tiktok account. */
    name: string | null;
}
/** Object representation of a user's LinkedIn account. */
interface LinkedIn {
    /** The `sub` claim from the LinkedIn-issued JWT for this account. */
    subject: string;
    /** The name associated with the LinkedIn account. */
    name: string | null;
    /** The email associated with the LinkedIn account. */
    email: string | null;
    /** The vanityName/profile URL associated with the LinkedIn account. */
    vanityName: string | null;
}
/** Object representation of a user's Apple account. */
interface Apple {
    /** The `sub` claim from the Apple-issued JWT for this account. */
    subject: string;
    /** The email associated with the Apple account. */
    email: string;
}
interface CustomJwtAccount {
    /** The user ID given by the custom auth provider */
    customUserId: string;
}
interface Farcaster {
    /** The Farcaster on-chain FID */
    fid: number | null;
    /** The Farcaster ethereum address that owns the FID */
    ownerAddress: string;
    /** The Farcaster protocol username */
    username: string | null;
    /** The Farcaster protocol display name */
    displayName: string | null;
    /** The Farcaster protocol bio */
    bio: string | null;
    /** The Farcaster protocol profile picture */
    pfp: string | null;
    /** The Farcaster protocol profile url */
    url: string | null;
    /** The public key of the signer, if set. This is not guaranteed to be valid, as the user can revoke the key at any time */
    signerPublicKey: string | null;
}
interface Telegram {
    /** The user ID that owns this Telegram account. */
    telegramUserId: string;
    /** The first name of the user . */
    firstName: string | null;
    /** The last name of the user . */
    lastName: string | null;
    /** The username associated with the Telegram account. */
    username: string | null;
    /** The url of the user's profile picture. */
    photoUrl: string | null;
}
interface Passkey {
    /** The passkey credential ID */
    credentialId: string;
    /** Whether or not this passkey can be used for MFA */
    enrolledInMfa: boolean;
    /** The type of authenticator holding the passkey */
    authenticatorName?: string;
    /** Metadata about the device that registered the passkey  */
    createdWithDevice?: string;
    /** Metadata about the OS that registered the passkey  */
    createdWithOs?: string;
    /** Metadata about the browser that registered the passkey  */
    createdWithBrowser?: string;
}
/** Metadata about the provider app for a cross-app account */
interface ProviderAppMetadata {
    /** Privy app ID for the provider app. */
    id: string;
    /** Name for the provider app. */
    name?: string;
    /** Logo URL for the provider app. */
    logoUrl?: string;
}
interface CrossAppAccount {
    /** The user's embedded wallet address(es) from the provider app */
    embeddedWallets: {
        address: string;
    }[];
    smartWallets: {
        address: string;
    }[];
    providerApp: ProviderAppMetadata;
    subject: string;
}
/** Object representation of a user's email, with additional metadata for advanced use cases. */
interface EmailWithMetadata extends LinkMetadata, Email {
    /** Denotes that this is an email account. */
    type: 'email';
}
/** Object representation of a user's phone number, with additional metadata for advanced use cases. */
interface PhoneWithMetadata extends LinkMetadata, Phone {
    /** Denotes that this is a phone account. */
    type: 'phone';
}
/** Object representation of a user's wallet, with additional metadata for advanced use cases. */
interface WalletWithMetadata extends LinkMetadata, Wallet {
    /** Denotes that this is a wallet account. */
    type: 'wallet';
}
interface SmartWalletWithMetadata extends LinkMetadata, SmartWallet {
    /** Denotes that this is a smart wallet account. */
    type: 'smart_wallet';
}
/** Object representation of a user's Google Account, with additional metadata for advanced use cases. */
interface GoogleOAuthWithMetadata extends LinkMetadata, Google {
    /** Denotes that this is a Google account. */
    type: 'google_oauth';
}
/** Object representation of a user's Twitter Account, with additional metadata for advanced use cases. */
interface TwitterOAuthWithMetadata extends LinkMetadata, Twitter {
    /** Denotes that this is a Twitter account. */
    type: 'twitter_oauth';
}
/** Object representation of a user's Discord Account, with additional metadata for advanced use cases. */
interface DiscordOAuthWithMetadata extends LinkMetadata, Discord {
    /** Denotes that this is a Discord account. */
    type: 'discord_oauth';
}
/** Object representation of a user's Github Account, with additional metadata for advanced use cases. */
interface GithubOAuthWithMetadata extends LinkMetadata, Github {
    /** Denotes that this is a Github account. */
    type: 'github_oauth';
}
/** Object representation of a user's Tiktok Account, with additional metadata for advanced use cases. */
interface SpotifyOAuthWithMetadata extends LinkMetadata, Spotify {
    /** Denotes that this is a Tiktok account. */
    type: 'spotify_oauth';
}
/** Object representation of a user's Instagram Account, with additional metadata for advanced use cases. */
interface InstagramOAuthWithMetadata extends LinkMetadata, Instagram {
    /** Denotes that this is a Instagram account. */
    type: 'instagram_oauth';
}
/** Object representation of a user's Tiktok Account, with additional metadata for advanced use cases. */
interface TiktokOAuthWithMetadata extends LinkMetadata, Tiktok {
    /** Denotes that this is a Tiktok account. */
    type: 'tiktok_oauth';
}
/** Object representation of a user's LinkedIn Account, with additional metadata for advanced use cases. */
interface LinkedInOAuthWithMetadata extends LinkMetadata, LinkedIn {
    /** Denotes that this is a LinkedIn account. */
    type: 'linkedin_oauth';
}
/** Object representation of a user's Apple Account, with additional metadata for advanced use cases. */
interface AppleOAuthWithMetadata extends LinkMetadata, Apple {
    /** Denotes that this is a Apple account. */
    type: 'apple_oauth';
}
/** Object representation of a user's Custom JWT Account, with additional metadata for advanced use cases. */
interface CustomJwtAccountWithMetadata extends LinkMetadata, CustomJwtAccount {
    /** Denotes that this is an custom account. */
    type: 'custom_auth';
}
/** Object representation of a user's Farcaster Account, with additional metadata for advanced use cases. */
interface FarcasterWithMetadata extends LinkMetadata, Farcaster {
    /** Denotes that this is a Farcaster account. */
    type: 'farcaster';
}
/** Object representation of a user's Passkey Account, with additional metadata for advanced use cases. */
interface PasskeyWithMetadata extends LinkMetadata, Passkey {
    /** Denotes that this is a Passkey account. */
    type: 'passkey';
}
/** Object representation of a user's Telegram Account, with additional metadata for advanced use cases. */
interface TelegramWithMetadata extends LinkMetadata, Telegram {
    /** Denotes that this is a Telegram account. */
    type: 'telegram';
}
/** Object representation of a user's cross-app account, with additional metadata for advanced use cases. */
interface CrossAppAccountWithMetadata extends LinkMetadata, CrossAppAccount {
    /** Denotes that this is a cross-app account */
    type: 'cross_app';
}
/**
 * Object representation of a user's linked accounts
 */
type LinkedAccountWithMetadata = WalletWithMetadata | SmartWalletWithMetadata | EmailWithMetadata | PhoneWithMetadata | GoogleOAuthWithMetadata | TwitterOAuthWithMetadata | DiscordOAuthWithMetadata | GithubOAuthWithMetadata | SpotifyOAuthWithMetadata | InstagramOAuthWithMetadata | TiktokOAuthWithMetadata | LinkedInOAuthWithMetadata | AppleOAuthWithMetadata | CustomJwtAccountWithMetadata | FarcasterWithMetadata | PasskeyWithMetadata | TelegramWithMetadata | CrossAppAccountWithMetadata;
interface User {
    /** The Privy-issued DID for the user. If you need to store additional information
     * about a user, you can use this DID to reference them. */
    id: string;
    /** The datetime of when the user was created. */
    createdAt: Date;
    /** The user's email address, if they have linked one. It cannot be linked to another user. */
    email?: Email;
    /** The user's phone number, if they have linked one. It cannot be linked to another user. */
    phone?: Phone;
    /** The user's most recently linked wallet, if they have linked at least one wallet.
     *  It cannot be linked to another user.
     *  This wallet is the wallet that will be used for transactions and signing if it is connected.
     **/
    wallet?: Wallet;
    /**
     * The user's smart wallet, if they have set up through the Privy Smart Wallet SDK.
     */
    smartWallet?: SmartWallet;
    /** The user's Google account, if they have linked one. It cannot be linked to another user. */
    google?: Google;
    /** The user's Twitter account, if they have linked one. It cannot be linked to another user. */
    twitter?: Twitter;
    /** The user's Discord account, if they have linked one. It cannot be linked to another user. */
    discord?: Discord;
    /** The user's Github account, if they have linked one. It cannot be linked to another user. */
    github?: Github;
    /** The user's Spotify account, if they have linked one. It cannot be linked to another user. */
    spotify?: Spotify;
    /** The user's Instagram account, if they have linked one. It cannot be linked to another user. */
    instagram?: Instagram;
    /** The user's Tiktok account, if they have linked one. It cannot be linked to another user. */
    tiktok?: Tiktok;
    /** The user's LinkedIn account, if they have linked one. It cannot be linked to another user. */
    linkedin?: LinkedIn;
    /** The user's Apple account, if they have linked one. It cannot be linked to another user. */
    apple?: Apple;
    /** The user's Farcaster account, if they have linked one. It cannot be linked to another user. */
    farcaster?: Farcaster;
    /** The user's Telegram account, if they have linked one. It cannot be linked to another user. */
    telegram?: Telegram;
    /** The list of accounts associated with this user. Each account contains additional metadata
     * that may be helpful for advanced use cases. */
    linkedAccounts: Array<LinkedAccountWithMetadata>;
    /** The list of MFA Methods associated with this user. */
    mfaMethods: Array<MfaMethod>;
    /**
     * Whether or not the user has explicitly accepted the Terms and Conditions
     * and/or Privacy Policy
     */
    hasAcceptedTerms: boolean;
    /** Whether or not the user is a guest */
    isGuest: boolean;
    /** Custom metadata field for a given user account */
    customMetadata?: CustomMetadataType;
}
type OAuthTokens = {
    /** The OAuth provider. */
    provider: OAuthProviderType;
    /** The OAuth access token. */
    accessToken: string;
    /** The number of seconds until the OAuth access token expires. */
    accessTokenExpiresInSeconds?: number;
    /** The OAuth refresh token. */
    refreshToken?: string;
    /** The number of seconds until the OAuth refresh token expires.
     *  if the refresh token is present and this field is undefined, it is assumed
     *  that the refresh token does not have an expiration date
     */
    refreshTokenExpiresInSeconds?: number;
    /** The list of OAuth scopes the access token is approved for. */
    scopes?: string[];
};
type TelegramAuthConfiguration = {
    botId: string;
    botName: string;
    seamlessAuthEnabled: boolean;
};
type FundingMethod = 'moonpay' | 'coinbase-onramp' | 'external';
type FundingOption = {
    method: string;
    provider: string;
};
type FundingConfig = {
    /** The recommended currency for the user to fund.  Note: to begin with we default to the chain's native currency. */
    defaultRecommendedCurrency: {
        chain: string;
        asset?: 'native-currency' | 'USDC';
    };
    /** The recommended amount of the specified currency to fund, in human readable format (eg '0.1') */
    defaultRecommendedAmount: string;
    /** @deprecated Use options. The list of funding methods enabled for the app */
    methods: FundingMethod[];
    /** The list of funding methods enabled for the app */
    options: FundingOption[];
    /** Whether to prompt the user to fund upon embedded wallet creation */
    promptFundingOnWalletCreation: boolean;
    /** Determines if EVM<->SOL bridging is enabled */
    crossChainBridgingEnabled?: boolean;
};
/** The default funding method to immediately trigger when funding is requested */
type DefaultFundingMethod = 'card' | 'exchange' | 'wallet' | 'manual';
type PrivyServerConfig = {
    id?: string;
    name?: string;
    verificationKey?: string;
    showWalletLoginFirst?: boolean;
    allowlistConfig: AllowlistConfig;
    walletAuth?: boolean;
    solanaWalletAuth?: boolean;
    emailAuth?: boolean;
    smsAuth?: boolean;
    googleOAuth?: boolean;
    twitterOAuth?: boolean;
    discordOAuth?: boolean;
    githubOAuth?: boolean;
    spotifyOAuth?: boolean;
    instagramOAuth?: boolean;
    tiktokOAuth?: boolean;
    linkedinOAuth?: boolean;
    appleOAuth?: boolean;
    farcasterAuth?: boolean;
    passkeyAuth?: boolean;
    passkeysForSignupEnabled?: boolean;
    telegramAuth?: boolean;
    disablePlusEmails: boolean;
    termsAndConditionsUrl: string | null;
    privacyPolicyUrl: string | null;
    requireUsersAcceptTerms?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    customApiUrl?: string | null;
    walletConnectCloudProjectId?: string | null;
    embeddedWalletConfig: EmbeddedWalletsConfig;
    fiatOnRampEnabled?: boolean;
    captchaEnabled?: boolean;
    captchaSiteKey: string;
    enforceWalletUis?: boolean;
    legacyWalletUiConfig?: boolean;
    /** May be deprecated from the server config in a future release */
    logoUrl?: string;
    /** May be deprecated from the server config in a future release */
    accentColor?: string;
    mfaMethods?: Array<MfaMethod>;
    telegramAuthConfiguration?: TelegramAuthConfiguration;
    fundingConfig?: FundingConfig;
};
type HexColor = `#${string}`;
/**
 * Options to customize the display of transaction prices in the embedded wallet's transaction prompt.
 */
type PriceDisplayOptions = {
    primary: 'fiat-currency';
    secondary: 'native-token';
} | {
    primary: 'native-token';
    secondary: null;
};
type WalletListEntry = 'metamask' | 'coinbase_wallet' | 'rainbow' | 'phantom' | 'zerion' | 'cryptocom' | 'uniswap' | 'okx_wallet' | 'universal_profile'
/** @deprecated Use `detected_ethereum_wallets` or `detected_solana_wallets` instead */
 | 'detected_wallets' | 'detected_solana_wallets' | 'detected_ethereum_wallets' | 'wallet_connect' | 'rabby_wallet' | 'bybit_wallet' | 'safe';
type NonEmptyArray<T> = [T, ...T[]];
type LoginMethodOrderOption = 'email' | 'sms' | WalletListEntry | OAuthProviderType | `privy:${string}` | 'farcaster' | 'telegram';
type ExternalWalletsConfig = {
    /**
     * Options to configure connections to the Coinbase Wallet (browser extension wallet, mobile wallet, and
     * passkey-based smart wallet).
     *
     * @experimental This is an experimental config designed to give Privy developers a way to test the Coinbase Smart Wallet
     * ahead of its mainnet launch. The smart wallet currently only supports the Base Sepolia testnet. In kind, DO NOT use this
     * configuration in production as it will prevent users from using the Coinbase Wallet on networks other than Base Sepolia.
     */
    coinbaseWallet?: {
        /**
         * Whether Coinbase wallet connections should prompt the smart wallet, the extension wallet, or intelligently decide between the two.
         * - If 'eoaOnly', Coinbase wallet connections will only prompt the Coinbase wallet browser extension or mobile app (an externally-owned account)
         * - If 'smartWalletOnly', Coinbase wallet connections will only prompt the Coinbase smart wallet and will not allow users to use the extension or mobile app.
         *   DO NOT use this setting in production.
         * - If 'all', Coinbase wallet connections will prompt the Coinbase wallet browser extension if it is detected as installed, and will otherwise prompt the smart wallet.
         */
        connectionOptions: 'all' | 'eoaOnly' | 'smartWalletOnly';
    };
    /**
     * Options to configure WalletConnect behavior.
     *
     * @experimental This may change in future releases
     */
    walletConnect?: {
        /**
         * If disabled, stops WalletConnect from being initialized by the Privy SDK.
         *
         * WARNING: If you allow WalletConnect or WalletConnect-powered wallets, this will cause issues.
         *
         * Note that even if disabled, WalletConnect code may still be loaded in the browser. Defaults to true.
         *
         * @experimental This feature is very experimental and may break your wallet connector experience if you use external wallets.
         */
        enabled: boolean;
    };
    solana?: {
        connectors?: SolanaWalletConnectorsConfig;
    };
};
interface PrivyClientConfig {
    /** All UI and theme related configuration */
    appearance?: {
        /** Primary theme for the privy UI. This dictates the foreground and background colors within the UI.
         *
         *  'light' (default): The privy default light UI.
         *  'dark': The privy default dark UI.
         *  custom hex code (i.e. '#13152F'): A custom background. This will generate the remainder of the foreground and
         *  background colors for the UI by modulating the luminance of the passed color. This value should be _either_ dark
         *  or light (<20% or >80% luminance), for accessibility. */
        theme?: 'light' | 'dark' | HexColor;
        /** Accent color for the privy UI.
         *  Used for buttons, active borders, etc. This will generate light and dark variants.
         *  This overrides the server setting `accent_color`. */
        accentColor?: HexColor;
        /** Logo for the main privy modal screen.
         *  This can be a string (url) or an img / svg react element.
         *  If passing an element, Privy will overwrite the `style` props, to ensure proper rendering.
         *  This overrides the server setting `logo_url` */
        logo?: string | ReactElement;
        /**
         * Header text for the landing screen of the Privy login modal. We strongly recommend using a string
         *  of length 35 or less. Strings longer than the width of the login modal will be ellipsified.
         *
         * Defaults to 'Log in or sign up'.
         */
        landingHeader?: string;
        /**
         * Subtitle text for the landing screen of the Privy login modal.
         *
         * This text will renders below the logo and will be capped at 100 characters.
         *
         * Defaults to undefined.
         */
        loginMessage?: string;
        /** Determines the order of the login options in the privy modal. If true, the wallet login will render above
         *  social and email / sms login options.
         *  This overrides the server setting `show_wallet_login_first` */
        showWalletLoginFirst?: boolean;
        /**
         * An array of {@link WalletListEntry wallet names} to configure the wallet buttons shown within
         * the `login`, `connectWallet`, and `linkWallet` modals. Privy will show buttons for each option
         * present in the list, in the order in which they are configured.
         *
         * On 'detected_wallets':
         * - This option serves as a fallback to include all wallets that detected by Privy, that might not be
         *   individually configured in the `walletList`. Browser extension wallets that are not explicitly configured
         *   in the `walletList` will fall into this category.
         * - If Privy detects a wallet, _and_ that wallet is configured within the `walletList` (e.g. 'metamask'),
         *   the order of the wallet's explicit name (e.g. 'metamask') in the `walletList` will take priority
         *   over the order of 'detected_wallets'.
         *
         * Defaults to ['detected_wallets', 'metamask', 'coinbase_wallet', 'rainbow', 'wallet_connect']
         *
         * @default ['detected_wallets', 'metamask', 'coinbase_wallet', 'rainbow', 'wallet_connect']
         */
        walletList?: WalletListEntry[];
        /**
         * Determines which external wallet types to show in the modal. By default, only Ethereum external wallets
         * are shown. If you want to show Solana wallets, set this to 'solana-only' or 'ethereum-and-solana'.
         *
         * When 'ethereum-and-solana' is set, Solana wallets will have a badge indicating that they are Solana wallets.
         *
         * @defaults 'ethereum-only'
         */
        walletChainType?: 'ethereum-only' | 'solana-only' | 'ethereum-and-solana';
    };
    /**
     * Login methods for the privy modal.
     *
     * This parameter enables you to display a subset of the login methods specified in the developer dashboard. `loginMethods` cannot be an empty array if specified. The order of this array does not  dictate order of the login methods in the UI.
     *
     * Note that any login method included in this parameter must also be enabled as a login method in the developer dashboard.
     *
     * If both `loginMethodsAndOrder` and `loginMethods` are defined, `loginMethodsAndOrder` will take precedence.
     */
    loginMethods?: Array<'wallet' | 'email' | 'sms' | 'google' | 'twitter' | 'discord' | 'github' | 'linkedin' | 'spotify' | 'instagram' | 'tiktok' | 'apple' | 'farcaster' | 'telegram'>;
    /**
     * Login methods for the Privy modal. _This will override carefully designed defaults and should be used with caution._
     *
     * This parameter enables you to display a subset of the login methods specified in the developer dashboard. Login methods will be rendered in the order they appear in the array. The first 4 options specified in the `primary` list will render on the default screen of the login experience. Options in the `overflow` list will appear on the following screen.
     *
     * Note that any login method included in this parameter must also be enabled as a login method in the developer dashboard.
     *
     * If both `loginMethodsAndOrder` and `loginMethods` are defined, `loginMethodsAndOrder` will take precedence.
     */
    loginMethodsAndOrder?: {
        primary: NonEmptyArray<LoginMethodOrderOption>;
        overflow?: Array<LoginMethodOrderOption>;
    };
    /** Options for internationalization of the privy modal */
    intl?: {
        /**
         * This property is used to configure formatting and validation for the phone number input
         * used when `phone` is enabled as a login method. Must be a valid
         * [two-leter ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) (e.g. 'US').
         * Defaults to 'US'.
         *
         * @default 'US'
         */
        defaultCountry: CountryCode;
    };
    /**
     * This property is only required for apps that use a third-party authentication provider.
     */
    customAuth?: {
        /**
         * If true, enable custom authentication integration.
         * This enables a JWT from a custom auth provider to be used to authenticate Privy embedded wallets.
         * Defaults to true.
         *
         * @default true
         */
        enabled?: boolean;
        /**
         * A callback that returns the user's custom auth provider's access token as a string.
         * Can be left blank if using cookies to store and send access tokens
         *
         * @example
         * const {getAccessTokenSilently} = useAuth();
         *
         * <PrivyProvider
         *   {...props}
         *   config={{
         *     customAuth: {
         *       getCustomAccessToken: getAccessTokenSilently
         *     },
         *   }}
         * />
         */
        getCustomAccessToken: () => Promise<string | undefined>;
        /**
         * Custom auth providers loading state
         *
         * @example
         * const {isLoading} = useAuth();
         *
         * <PrivyProvider
         *   {...props}
         *   config={{
         *     customAuth: {
         *       isLoading,
         *     },
         *   }}
         * />
         */
        isLoading: boolean;
    };
    /** All legal configuration */
    legal?: {
        /** URL to the terms and conditions page for your application.
         *  Rendered as a link in the privy modal footer.
         *  This overrides the server setting `terms_and_conditions_url` */
        termsAndConditionsUrl?: string | null;
        /** URL to the privacy policy page for your application.
         *  Rendered as a link in the privy modal footer.
         *  This overrides the server setting `privacy_policy_url` */
        privacyPolicyUrl?: string | null;
    };
    walletConnectCloudProjectId?: string;
    /**
     * A list of supported chains, used to specify which chains should be used throughout the application.
     *
     * Calling `sendTransaction` or `switchChain` on an unsupported network will throw an error.
     *
     * For external wallets, if the wallet's current chain post-connection (during connect-only or siwe flows)
     * is not within the supported chains list, the user will be prompted to switch to the `defaultChain` (if set) or first supplied. If the chain
     * switching process does not fully succeed, the user will **not** be blocked from the application (and the wallet's current `chainId` can always
     * be observed and acted upon accordingly).
     *
     * For embedded wallets, the wallet will automatically default to the `defaultChain` (if set) or first supplied `supportedChain`.
     */
    supportedChains?: Chain[];
    /**
     * A list of SolanaCluster objects, used to specify which RPC URLs should be used for each cluster.
     *
     * If a cluster is not specified, the default RPC URL for that cluster will be used.
     */
    solanaClusters?: SolanaCluster[];
    /**
     * When supplied, the `defaultChain` will be the default chain used throughout the application.
     *
     * For external wallets, it will be used if the user's wallet it not within the `supportedChains` (or default chains) list.
     *
     * For embedded wallets, it will be used upon initialization, when the user hasn't switched to another supported chain.
     */
    defaultChain?: Chain;
    captchaEnabled?: boolean;
    /**
     * Options for connecting to external wallets like Coinbase Wallet, MetaMask, etc.
     *
     * @experimental This is an experimental config that is subject to breaking changes without a major version bump of the SDK.
     */
    externalWallets?: ExternalWalletsConfig;
    /** All embedded wallets configuration */
    embeddedWallets?: {
        /**
         * Whether an embedded wallet should be created for the user on login.
         *
         * For `all-users`, the user will be prompted to create a Privy wallet after successfully
         * logging in. If they cancel or are visiting after this flag was put in place, they will be
         * prompted to create a wallet on their next login.
         *
         * For `users-without-wallets`, the user will be prompted to create a Privy wallet after\
         * successfully logging in, only if they do not currently have any wallet associated with their
         * user object - for example if they have linked an external wallet.
         *
         * For `off`, an embedded wallet is not created during login. You can always prompt the user to
         * create one manually with your app.
         *
         * Defaults to 'off'.
         */
        createOnLogin?: EmbeddedWalletCreateOnLoginConfig;
        /**
         * @deprecated. Instead, use the server-driven configuration found in the Privy console: https://dashboard.privy.io/apps/YOUR_APP_ID/embedded. This client-side setting
         * is currently honored, but will be fully removed in a future release.
         *
         * If true, Privy will prompt users to create a password for their Privy embedded wallet.
         * If false, embedded wallets will be created without the need of password.
         *
         * Defaults to false.
         */
        requireUserPasswordOnCreate?: boolean;
        /**
         * Override any settings for the embedded wallet's UI to show or hide the wallet UIs.
         *
         * If true, wallet UIs will always be shown.
         * If false, wallet UIs will always be hidden.
         *
         * If not set, the default behavior will match the server configuration.
         */
        showWalletUIs?: boolean;
        /**
         * Options to customize the display of transaction prices in the embedded wallet's transaction
         * prompt. You may configure a primary currency to emphasize, and a secondary currency to show
         * as subtext. Defaults to emphasizing the price in fiat currency, and showing the price in the native
         * token as subtext.
         *
         * You may either set:
         * - `{primary: 'fiat-currency', secondary: 'native-token'}` to emphasize fiat currency prices, showing native token
         *    prices as subtext. This is the default.
         * - `{secondary: 'native-token', secondary: null}` to show native token prices only, with no subtext.
         *
         * Privy does not currently support:
         * - emphasizing native token prices over fiat currency prices
         * - showing prices only in fiat currency, without native token prices
         *
         */
        priceDisplay?: PriceDisplayOptions;
        /**
         * If true, Privy will attempt to additional decoding calldata for 721 and 1155 approval, transfer, and mint sendTransaction calls,
         * in addition to the default ERC20 `transfer` and `approve` decoding.
         * If false, Privy will only decode `transfer` and `approve` calldata for ERC20 tokens.
         *
         * @default false
         * @experimental This is an experimental config that is subject to breaking changes without a major version bump of the SDK.
         */
        extendedCalldataDecoding?: boolean;
    };
    /**
     * All multi-factor authentication configuration
     */
    mfa?: {
        /**
         * If true, Privy will not prompt or instantiate any UI for MFA Verification. The developer
         * must handle MFA verification themselves.
         * If false, any action that requires MFA will raise a modal and require user to verify MFA
         * before proceeding.
         *
         * Defaults to false.
         */
        noPromptOnMfaRequired?: boolean;
    };
    /**
     * @deprecated. Use `fundingMethodConfigurations -> moonpay -> useSandbox` instead.
     * Setting associated with fiat-on-ramp flows
     */
    fiatOnRamp?: {
        /**
         * Determines whether to use the sandbox flow.
         *
         * Defaults to false.
         */
        useSandbox?: boolean;
    };
    /**
     * Settings associated with funding methods
     */
    fundingMethodConfig?: {
        moonpay: {
            /**
             * Determines whether to use the Moonpay sandbox flow.
             *
             * Defaults to false.
             */
            useSandbox?: boolean;
            /**
             * Determines the payment method for each Moonpay transaction.
             *
             * Defaults to Moonpay's default.
             */
            paymentMethod?: MoonpayPaymentMethod;
            /**
             * Determines the UI settings for each Moonpay transaction.
             *
             * Defaults to Moonpay's default.
             */
            uiConfig?: MoonpayUiConfig;
        };
    };
}
/**
 * The data received from Telegram when the user is authenticated.
 *
 * @see https://core.telegram.org/widgets/login#receiving-authorization-data
 */
interface TelegramAuthResult {
    id: number;
    first_name: string;
    auth_date: number;
    hash: string;
    last_name?: string;
    photo_url?: string;
    username?: string;
}
/**
 * Data received from Telegram when the user is authenticated via the Telegram Web App.
 *
 * @see https://core.telegram.org/widgets/login#receiving-authorization-data
 */
interface TelegramWebAppData {
    query_id?: string;
    auth_date: number;
    hash: string;
    user: string;
    chat_instance?: string;
    chat_type?: string;
    start_param?: string;
    signature?: string;
}
/**
 * Data received from an OAuth user endpoint
 */
interface OAuthUserInfo {
    subject: string;
    username?: string;
    name?: string;
    email?: string;
    profilePictureUrl?: string;
    vanityName?: string;
}
/**
 * Object representation of metadata reported by a connected wallet during the SIWE flow
 */
interface SiweWalletMetadata {
    walletClientType: WalletClientType;
    chainId: string;
    connectorType: string;
}
/**
 * Configuration for the Privy Smart Wallet SDK.
 * This configuration is used to enable the Smart Wallet SDK and configure the networks that the Smart Wallet will be used on.
 * This is internal so changes to this do not count as breaking API changes.
 */
type SmartWalletConfig = {
    enabled: false;
} | {
    enabled: true;
    smartWalletType: SmartWalletType;
    configuredNetworks: SmartWalletNetworkConfig[];
};
type SmartWalletNetworkConfig = {
    chainId: string;
    bundlerUrl: string;
    paymasterUrl?: string;
    paymasterContext?: AlchemyPaymasterContextClient | BiconomyPaymasterContext;
};
interface AllowlistConfig {
    errorTitle: string | null;
    errorDetail: string | null;
    errorCtaText: string | null;
    errorCtaLink: string | null;
}
type EmbeddedWalletCreateOnLoginConfig = 'users-without-wallets' | 'all-users' | 'off';
interface EmbeddedWalletsConfig {
    createOnLogin: EmbeddedWalletCreateOnLoginConfig;
    requireUserOwnedRecoveryOnCreate: boolean;
    userOwnedRecoveryOptions: UserRecoveryMethod[];
}
type OtpFlowState = {
    status: 'initial';
} | {
    status: 'error';
    error: Error | null;
} | {
    status: 'sending-code';
} | {
    status: 'awaiting-code-input';
} | {
    status: 'submitting-code';
} | {
    status: 'done';
};
type PasskeyFlowState = {
    status: 'initial';
} | {
    status: 'error';
    error: Error | null;
} | {
    status: 'generating-challenge';
} | {
    status: 'awaiting-passkey';
} | {
    status: 'submitting-response';
} | {
    status: 'done';
};
type SiweFlowState = {
    status: 'initial';
} | {
    status: 'error';
    error: Error | null;
} | {
    status: 'generating-message';
} | {
    status: 'awaiting-signature';
} | {
    status: 'submitting-signature';
} | {
    status: 'done';
};
type OAuthFlowState = {
    status: 'initial';
} | {
    status: 'loading';
} | {
    status: 'done';
} | {
    status: 'error';
    error: Error | null;
};
/**
 * UI configuration object for the embedded wallet's Sign Message screen
 */
type SignMessageModalUIOptions = {
    /**
     * Whether or not to show wallet UIs for this action. Defaults to the wallet UI setting enabled
     * for your app in the Privy Dashboard, or `showWalletUIs` in the `embeddedWallets` config.
     */
    showWalletUIs?: boolean;
    /**
     * Title for the Sign Message screen. Defaults to 'Sign'.
     */
    title?: string;
    /**
     * Description text for the Sign Message screen. Defaults to
     * 'Sign to continue'.
     */
    description?: string;
    /**
     * Text for the CTA button on the Sign Message screen. Defaults to
     * 'Sign and Continue'
     */
    buttonText?: string;
    /**
     * An icon to display on the Sign Message screen. Defaults to no icon.
     */
    iconUrl?: string;
};
type MessageTypeProperty = {
    name: string;
    type: string;
};
type MessageTypes = {
    [additionalProperties: string]: MessageTypeProperty[];
};
/**
 * JSON Object that conforms to the EIP-712 [`TypedData JSON schema.`](https://eips.ethereum.org/EIPS/eip-712#specification-of-the-eth_signtypeddata-json-rpc)
 *
 */
type TypedMessage<T extends MessageTypes> = {
    types: T;
    primaryType: keyof T;
    domain: {
        name?: string;
        version?: string;
        chainId?: number;
        verifyingContract?: string;
        salt?: ArrayBuffer;
    };
    message: Record<string, unknown>;
};
/**
 * JSON Object that conforms to the EIP-712 [`TypedData JSON schema.`](https://eips.ethereum.org/EIPS/eip-712#specification-of-the-eth_signtypeddata-json-rpc)
 * See [`TypedMessage`](TypedMessage) for specs on the specific params of typedData.
 */
type SignTypedDataParams = TypedMessage<MessageTypes>;
/**
 * UI customization object for additional transaction details. Will be shown
 * in an expandable accordion in the Send Transaction screen.
 */
type TransactionUIOptions = {
    /**
     * Title for the transaction details accordion within the
     * Send Transaction screen. Defaults to 'Details'.
     */
    title?: string;
    /**
     * Action that the user is taking when sending this transaction. This
     * should be short (<4 words, e.g. 'Buy NFT'). Will be shown inside
     * the transaction details accordion in Send Transaction screen.
     */
    action?: string;
    /**
     * If the transaction to be sent is a call to a smart contract, you may
     * use this object to fill in additional details about the contract being called.
     */
    contractInfo?: ContractUIOptions;
};
/**
 * If the transaction to be sent is a call to a smart contract, you may use this
 * object to fill in additional details about the contract being called.
 */
type ContractUIOptions = {
    /**
     * URL with more information about the smart contract.
     */
    url?: string;
    /**
     * Name of smart contract being called.
     */
    name?: string;
    /**
     * URL for an image to show in the Send Transaction screen.
     */
    imgUrl?: string;
    /**
     * Alt text for the image in the Send Transaction screen, if a
     * valid `imgUrl` is set.
     */
    imgAltText?: string;
    /**
     * Size for the image in the Send Transaction screen, if a valid
     * `imgUrl` is set.
     */
    imgSize?: 'sm' | 'lg';
};
/**
 * UI customization object for the embedded wallet's Send Transaction screen
 */
type SendTransactionModalUIOptions = {
    /**
     * Whether or not to show wallet UIs for this action. Defaults to the wallet UI setting enabled
     * for your app in the Privy Dashboard, or `showWalletUIs` in the `embeddedWallets` config.
     */
    showWalletUIs?: boolean;
    /**
     * Description of the transaction being sent.
     */
    description?: string;
    /**
     * Text to show on CTA button for Send Transaction screen. Defaults to
     * 'Submit'. For fund transactions, defaults to 'Approve'.
     */
    buttonText?: string;
    /**
     * Details about the transaction that the user will send. Will be shown
     * in an accordion in the Send Transaction screen.
     */
    transactionInfo?: TransactionUIOptions;
    /**
     * Text to display at top of Send Transaction Success screen. Defaults to
     * 'Transaction complete!' if transaction is successful.
     */
    successHeader?: string;
    /**
     * Description of the transaction Success screen. Defaults to 'You're all set.'
     */
    successDescription?: string;
};
/**
 * Our external-facing `UnsignedTransactionRequest` type makes the `chainId` field optional,
 * matching ethers, wagmi, and other libraries. However, our modal needs to be "aware"
 * of the transaction's `chainId` to ensure it does price conversion, quote labeling, etc. importantly.
 *
 * Thus, in the modal, we enforce a stricter type `UnsignedTransactionRequestWithChainId` which wraps
 * `UnsignedTransactionRequest` to make `chainId` required.
 *
 * If the developer does not set a `chainId` in their `UnsignedTransactionRequest`, we default to the embedded
 * provider's  current `chainId` in `privy-provider.tsx` > `sendTransaction`
 */
type UnsignedTransactionRequestWithChainId = UnsignedTransactionRequest & {
    chainId: number;
};
type LoginModalOptions = RuntimeLoginOverridableOptions;
type ConnectWalletModalOptions = ExternalConnectWalletModalOptions;
type PrivyFarcasterSignerInitResponse = {
    public_key: string;
    status: 'pending_approval';
    signer_approval_url: string;
} | {
    public_key: string;
    status: 'approved';
    fid: bigint;
} | {
    public_key: string;
    status: 'revoked';
};
type PrefillLoginOptions = {
    type: 'email' | 'phone';
    value: string;
};
/** Options for Privy's `login` method. */
type RuntimeLoginOverridableOptions = {
    /** An array of login methods to display in the login modal. */
    loginMethods?: PrivyClientConfig['loginMethods'];
    /** Details to prefill a user's email or phone number for email or SMS login. */
    prefill?: PrefillLoginOptions;
    /**
     * Whether or not to block sign ups (only allow existing users to log in).
     */
    disableSignup?: boolean;
};
/** Options for Privy's `connectWallet` method */
type ExternalConnectWalletModalOptions = {
    /**
     * An address to suggest the user to connect in Privy's UIs. This is only a suggestion for the
     * user and the method will not error if they connect a different address.
     */
    suggestedAddress?: string;
    /**
     * An array of wallet options to present the user in the connect wallet modal.
     */
    walletList?: WalletListEntry[];
};
/** Options for Privy's `createWallet` method */
type CreateWalletOptions = {
    /**
     * Whether or not to create an additional Ethereum embedded wallet for a user that already has
     * an Ethereum embedded wallet. If this is set to `true` and the user does not already have an Ethereum
     * embedded wallet, `createWallet` will throw an error.
     *
     * Defaults to `false`.
     */
    createAdditional?: boolean;
} | {
    /**
     * Specify the hierarchical deterministic (HD) index of the embedded wallet to create.
     * **A wallet with HD index 0 must be created before creating a wallet at greater HD indices.**
     * If a value < 0 is passed in, `createWallet` will throw an error.
     * If a value > 1 is passed in, and the user does not have a primary wallet (HD index == 0),
     * `createWallet` will throw an error.
     *
     */
    walletIndex: number;
};
type SetWalletRecoveryOptions = {};
type CrossAppProviderDetails = {
    name: string;
    icon_url: string | null;
};
type CustomAuthFlowState = {
    status: 'initial';
} | {
    status: 'loading';
} | {
    status: 'not-enabled';
} | {
    status: 'done';
} | {
    status: 'error';
    error: Error | null;
};
type LoginToFrame = {
    /**
     * The message the Farcaster wallet signed
     */
    message: string;
    /**
     * The SIWF signature
     */
    signature: string;
};

/**
 * We support a subset of the provider methods found here:
 *
 *     https://ethereum.org/en/developers/docs/apis/json-rpc/#json-rpc-methods
 *
 * For now, we're focused on signing-related methods because the iframe (this code)
 * is the only place that has access to the private key and thus is the only one
 * who can create signatures. All other methods do not need the private key and
 * can therefore be implemented by clients of the iframe.
 */

declare const SUPPORTED_ETHEREUM_RPC_METHODS: readonly ["eth_sign", "eth_populateTransactionRequest", "eth_signTransaction", "personal_sign", "eth_signTypedData_v4", "csw_signUserOperation", "secp256k1_sign"];
type EthereumRpcMethodType = (typeof SUPPORTED_ETHEREUM_RPC_METHODS)[number];
declare const SUPPORTED_SOLANA_RPC_METHODS: string[];
type SolanaRpcMethodType = (typeof SUPPORTED_SOLANA_RPC_METHODS)[number];
type Quantity = string | number | bigint;
type UnsignedTransactionRequest = {
    from?: string;
    to?: string;
    nonce?: Quantity;
    gasLimit?: Quantity;
    gasPrice?: Quantity;
    data?: ArrayLike<number> | string;
    value?: Quantity;
    chainId?: number;
    type?: number;
    accessList?: Array<{
        address: string;
        storageKeys: Array<string>;
    }> | Array<[string, Array<string>]> | Record<string, Array<string>>;
    maxPriorityFeePerGas?: Quantity;
    maxFeePerGas?: Quantity;
};
type TransactionLog = {
    blockNumber: number;
    blockHash: string;
    transactionIndex: number;
    removed: boolean;
    address: string;
    data: string;
    topics: Array<string>;
    transactionHash: string;
    logIndex: number;
};
type TransactionReceipt = {
    to: string;
    from: string;
    contractAddress: string;
    transactionIndex: number;
    root?: string;
    logs: Array<TransactionLog>;
    logsBloom: string;
    blockHash: string;
    transactionHash: string;
    blockNumber: number;
    confirmations: number;
    byzantium: boolean;
    type: number;
    status?: number;
    gasUsed: string;
    cumulativeGasUsed: string;
    effectiveGasPrice?: string;
};
interface BaseEthereumRpcRequestType {
    method: EthereumRpcMethodType;
}
interface BaseSolanaRpcRequestType {
    method: SolanaRpcMethodType;
}
interface eth_populateTransactionRequest extends BaseEthereumRpcRequestType {
    method: 'eth_populateTransactionRequest';
    params: [UnsignedTransactionRequest];
}
interface eth_populateTransactionRequestResponse {
    method: 'eth_populateTransactionRequest';
    data: UnsignedTransactionRequest;
}
interface eth_signTransaction extends BaseEthereumRpcRequestType {
    method: 'eth_signTransaction';
    params: [UnsignedTransactionRequest];
}
interface eth_sign extends BaseEthereumRpcRequestType {
    method: 'eth_sign';
    params: [address: string, message: string];
}
interface eth_signResponse {
    method: 'eth_sign';
    data: string;
}
interface personal_sign extends BaseEthereumRpcRequestType {
    method: 'personal_sign';
    params: [string, string];
}
interface personal_signResponse {
    method: 'personal_sign';
    data: string;
}
interface eth_signTransactionResponse {
    method: 'eth_signTransaction';
    data: string;
}
interface eth_signTypedData_v4 extends BaseEthereumRpcRequestType {
    method: 'eth_signTypedData_v4';
    params: [string, TypedMessage$1<MessageTypes$1> | string];
}
interface eth_signTypedData_v4Response {
    method: 'eth_signTypedData_v4';
    data: string;
}
interface solana_signMessage extends BaseSolanaRpcRequestType {
    method: 'signMessage';
    params: {
        message: string;
    };
}
interface solana_signMessageResponse {
    method: 'signMessage';
    data: {
        signature: string;
    };
}
type EthereumRpcRequestType = eth_signTransaction | eth_populateTransactionRequest | eth_sign | personal_sign | eth_signTypedData_v4;
type EthereumRpcResponseType = eth_signTransactionResponse | eth_populateTransactionRequestResponse | eth_signResponse | personal_signResponse | eth_signTypedData_v4Response;
type SolanaRpcRequestType = solana_signMessage;
type SolanaRpcResponseType = solana_signMessageResponse;

export { type MoonpaySignResponse as $, type ConnectedWalletMetadata as A, type BaseConnectedEthereumWallet as B, type Chain as C, type ConnectorType as D, type EthereumRpcRequestType as E, type FundingMethod as F, type WalletListEntry as G, type ExternalWalletsConfig as H, type BaseConnectedWallet as I, type ConnectWalletModalOptions as J, type LoginModalOptions as K, type LoginToFrame as L, type MfaMethod as M, type SetWalletRecoveryOptions as N, type OAuthTokens as O, PrivyErrorCode as P, type SignTypedDataParams as Q, type RuntimeLoginOverridableOptions as R, type SolanaTransactionReceipt as S, type UnsignedTransactionRequest as T, type User as U, type FundWalletConfig as V, type Wallet as W, type ConnectedWallet as X, type CrossAppProviderDetails as Y, type OAuthProviderType as Z, type MoonpaySignRequest as _, type LoginMethod as a, type SmartWalletConfig as a0, type PrivyServerConfig as a1, type SiweWalletMetadata as a2, type TelegramAuthResult as a3, type TelegramWebAppData as a4, type OAuthUserInfo as a5, type OAuthFlowState as a6, type LoginWithCode as a7, type OtpFlowState as a8, type PasskeyFlowState as a9, type LinkedAccountType as aA, type GoogleOAuthWithMetadata as aB, type TwitterOAuthWithMetadata as aC, type DiscordOAuthWithMetadata as aD, type GithubOAuthWithMetadata as aE, type TiktokOAuthWithMetadata as aF, type LinkedInOAuthWithMetadata as aG, type AppleOAuthWithMetadata as aH, type FarcasterWithMetadata as aI, type TelegramWithMetadata as aJ, type CrossAppAccountWithMetadata as aK, type PasskeyWithMetadata as aL, type Email as aM, type Phone as aN, type TransactionUIOptions as aO, type ContractUIOptions as aP, type NativeFundingConfig as aQ, type MoonpayFundingConfig as aR, type PriceDisplayOptions as aS, type Farcaster as aT, type Passkey as aU, type LoginMethodOrderOption as aV, type SiweFlowState as aa, type UnsignedTransactionRequestWithChainId as ab, type BaseConnectedWalletType as ac, type CustomAuthFlowState as ad, type TypedMessage as ae, type MessageTypes as af, type SmartWallet as ag, type MoonpayConfig as ah, type MoonpayCurrencyCode as ai, type MoonpayPaymentMethod as aj, type Quantity as ak, type TransactionLog as al, type TransactionReceipt as am, type NonEmptyArray as an, type EmailWithMetadata as ao, type PhoneWithMetadata as ap, type WalletWithMetadata as aq, type Google as ar, type Twitter as as, type Discord as at, type Github as au, type LinkedIn as av, type Apple as aw, type Tiktok as ax, type Telegram as ay, type CrossAppAccount as az, type LinkedAccountWithMetadata as b, type BaseConnectedSolanaWallet as c, type UserRecoveryMethod as d, type SolanaCluster as e, type ConnectedSolanaWallet as f, type CreateWalletOptions as g, type SendTransactionModalUIOptions as h, type SignMessageModalUIOptions as i, type SolanaFundingConfig as j, type SupportedSolanaTransaction as k, SolanaWalletConnector as l, type PrivyFarcasterSignerInitResponse as m, type MfaSubmitArgs as n, type SolanaRpcRequestType as o, type EthereumRpcResponseType as p, type SolanaRpcResponseType as q, type PrivyClientConfig as r, type RpcConfig as s, toSolanaWalletConnectors as t, type EIP1193Provider as u, type EntropyIdVerifier as v, type RequestArguments as w, WalletTimeoutError as x, WalletConnector as y, type WalletClientType as z };
