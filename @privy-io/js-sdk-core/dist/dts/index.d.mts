import * as _privy_io_public_api from '@privy-io/public-api';
import { PasskeyAuthenticateInputType, PrivyEthereumEmbeddedWalletAccount, PrivySolanaEmbeddedWalletAccount, PrivyUser, PrivySmartWalletConfigurationResponse, PrivyAuthenticatedUser, OAuthProviderType, SmartWalletType, CoinbaseOnRampInitInput, PrivyMoonpayOnRampSignInput, MfaPasskeyInitInputType, MfaSmsInitInputType, PrivyBitcoinSegwitEmbeddedWalletAccount as PrivyBitcoinSegwitEmbeddedWalletAccount$1, PrivyBitcoinTaprootEmbeddedWalletAccount as PrivyBitcoinTaprootEmbeddedWalletAccount$1, PrivySmartWalletAccount, PrivyCoinbaseOnRampInitResponse, PrivyCoinbaseOnRampInitInput } from '@privy-io/public-api';
export { BICONOMY, COINBASE_SMART_WALLET, KERNEL, LIGHT_ACCOUNT, OAuthProviderType, SAFE, SmartWalletType } from '@privy-io/public-api';
import EventEmitter from 'eventemitter3';
import { PrivyErrorCode } from '@privy-io/api-base';
import { PrivyBitcoinSegwitEmbeddedWalletAccount, PrivyBitcoinTaprootEmbeddedWalletAccount, PrivySolanaEmbeddedWalletAccount as PrivySolanaEmbeddedWalletAccount$1, PrivyAuthenticatedUser as PrivyAuthenticatedUser$1, PrivyEthereumEmbeddedWalletAccount as PrivyEthereumEmbeddedWalletAccount$1 } from '@privy-io/public-api/schemas';
import { Transaction, VersionedTransaction, Connection, SendOptions } from '@solana/web3.js';
import { AuthenticationResponseJSON, RegistrationResponseJSON } from '@simplewebauthn/types';
import { StaticJsonRpcProvider } from '@ethersproject/providers';
import * as libphonenumber_js_min from 'libphonenumber-js/min';
import { CountryCode, AsYouType } from 'libphonenumber-js/min';
export { CountryCode, getCountryCallingCode } from 'libphonenumber-js/min';
import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { UnsignedTransaction } from '@ethersproject/transactions';
import { Hex } from 'viem';

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
type Unit = 'ether' | 'gwei' | 'wei' | number;
/** A subset of WAGMI's chain type
 * https://github.com/wagmi-dev/references/blob/6aea7ee9c65cfac24f33173ab3c98176b8366f05/packages/chains/src/types.ts#L8
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
    };
    /** Flag for test networks */
    testnet?: boolean;
};
/**
 * RPC overrides to support custom RPC URLs. Do not provide an RPC URL
 * that can serve multiple networks. You should only provide RPC URLs that
 * are specific to the network you'd like to override.
 */
type RpcConfig = {
    /**
     * Mapping of chainId to RPC URL. Overrides Privy default RPC URLs that are shared across projects. Set your own RPC URLs
     * to avoid rate limits or other throughput bottlenecks.
     */
    rpcUrls: {
        [key: number]: string;
    };
};

declare enum PrivyEmbeddedWalletErrorCode {
    MISSING_OR_INVALID_PRIVY_APP_ID = "missing_or_invalid_privy_app_id",
    MISSING_OR_INVALID_PRIVY_ACCOUNT_ID = "missing_or_invalid_privy_account_id",
    INVALID_DATA = "invalid_data",
    LINKED_TO_ANOTHER_USER = "linked_to_another_user",
    ALLOWLIST_REJECTED = "allowlist_rejected",
    OAUTH_USER_DENIED = "oauth_user_denied",
    UNKNOWN_AUTH_ERROR = "unknown_auth_error",
    USER_EXITED_AUTH_FLOW = "exited_auth_flow",
    MUST_BE_AUTHENTICATED = "must_be_authenticated",
    UNKNOWN_CONNECT_WALLET_ERROR = "unknown_connect_wallet_error",
    GENERIC_CONNECT_WALLET_ERROR = "generic_connect_wallet_error",
    CLIENT_REQUEST_TIMEOUT = "client_request_timeout",
    INVALID_CREDENTIALS = "invalid_credentials"
}
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
    privyErrorCode?: PrivyEmbeddedWalletErrorCode;
    /**
     * @param type Privy error type.
     * @param message Human-readable message.
     * @param cause Source of this error.
     */
    protected constructor(message: string, cause?: unknown, privyErrorCode?: PrivyEmbeddedWalletErrorCode);
    toString(): string;
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
declare class PrivyIframeError extends Error {
    type: PrivyIframeErrorTypesType;
    constructor(type: PrivyIframeErrorTypesType, message: string);
}
declare class PrivyConnectorError extends PrivyError {
    type: string;
    constructor(message: string, cause?: unknown, privyErrorCode?: PrivyEmbeddedWalletErrorCode);
}
declare class EmbeddedProviderError extends Error {
    code: number;
    data?: unknown;
    constructor(message: string, code: number, data?: unknown);
}
declare const ProviderErrors: {
    E32002_CONNECTION_ALREADY_PENDING: {
        eipCode: number;
        message: string;
        detail: string;
        retryable: boolean;
    };
    E32002_REQUEST_ALREADY_PENDING: {
        eipCode: number;
        message: string;
        detail: string;
        retryable: boolean;
    };
    E32002_WALLET_LOCKED: {
        eipCode: number;
        message: string;
        detail: string;
        retryable: boolean;
    };
    E4001_USER_REJECTED_REQUEST: {
        eipCode: number;
        message: string;
        detail: string;
        retryable: boolean;
    };
    E4001_DEFAULT_USER_REJECTED_REQUEST: {
        eipCode: number;
        message: string;
        detail: string;
        default: boolean;
        retryable: boolean;
    };
    E4100_DEFAULT_UNAUTHORIZED: {
        eipCode: number;
        message: string;
        detail: string;
        default: boolean;
        retryable: boolean;
    };
    E4200_DEFAULT_UNSUPPORTED_METHOD: {
        eipCode: number;
        message: string;
        detail: string;
        default: boolean;
        retryable: boolean;
    };
    E4900_DEFAULT_DISCONNECTED: {
        eipCode: number;
        message: string;
        detail: string;
        default: boolean;
        retryable: boolean;
    };
    E4901_DEFAULT_CHAIN_DISCONNECTED: {
        eipCode: number;
        message: string;
        detail: string;
        default: boolean;
        retryable: boolean;
    };
    E32700_DEFAULT_PARSE_ERROR: {
        eipCode: number;
        message: string;
        detail: string;
        default: boolean;
        retryable: boolean;
    };
    E32600_DEFAULT_INVALID_REQUEST: {
        eipCode: number;
        message: string;
        detail: string;
        default: boolean;
        retryable: boolean;
    };
    E32601_DEFAULT_METHOD_NOT_FOUND: {
        eipCode: number;
        message: string;
        detail: string;
        default: boolean;
        retryable: boolean;
    };
    E32602_DEFAULT_INVALID_PARAMS: {
        eipCode: number;
        message: string;
        detail: string;
        default: boolean;
        retryable: boolean;
    };
    E32603_DEFAULT_INTERNAL_ERROR: {
        eipCode: number;
        message: string;
        detail: string;
        default: boolean;
        retryable: boolean;
    };
    E32000_DEFAULT_INVALID_INPUT: {
        eipCode: number;
        message: string;
        detail: string;
        default: boolean;
        retryable: boolean;
    };
    E32001_DEFAULT_RESOURCE_NOT_FOUND: {
        eipCode: number;
        message: string;
        detail: string;
        default: boolean;
        retryable: boolean;
    };
    E32002_DEFAULT_RESOURCE_UNAVAILABLE: {
        eipCode: number;
        message: string;
        detail: string;
        default: boolean;
        retryable: boolean;
    };
    E32003_DEFAULT_TRANSACTION_REJECTED: {
        eipCode: number;
        message: string;
        detail: string;
        default: boolean;
        retryable: boolean;
    };
    E32004_DEFAULT_METHOD_NOT_SUPPORTED: {
        eipCode: number;
        message: string;
        detail: string;
        default: boolean;
        retryable: boolean;
    };
    E32005_DEFAULT_LIMIT_EXCEEDED: {
        eipCode: number;
        message: string;
        detail: string;
        default: boolean;
        retryable: boolean;
    };
    E32006_DEFAULT_JSON_RPC_VERSION_NOT_SUPPORTED: {
        eipCode: number;
        message: string;
        detail: string;
        default: boolean;
        retryable: boolean;
    };
    UNKNOWN_ERROR: {
        eipCode: number;
        message: string;
        detail: string;
        retryable: boolean;
    };
};
declare function errorIndicatesRecoveryIsNeeded(error: unknown): error is PrivyIframeError;
declare function errorIndicatesMfaTimeout(error: unknown): error is PrivyIframeError;
declare function errorIndicatesMfaVerificationFailed(error: unknown): error is PrivyIframeError;
declare function errorIndicatesMaxMfaRetries(error: unknown): error is PrivyIframeError;
declare function errorIndicatesMfaRateLimit(error: unknown): error is PrivyIframeError;
/**
 * Represents an error message meant to display within the UI
 */
type UiErrorMessage = {
    /**
     * Main message to convey, one line
     */
    message: string;
    /**
     * Additional detail that may be relevant if it cannot be conveyed in the message
     */
    detail: string;
    /**
     * Whether this error is expected to be retryable
     */
    retryable: boolean;
};
type ProviderError = UiErrorMessage & {
    /**
     * The EIP code, either [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193#provider-errors)
     * or [EIP-1474](https://eips.ethereum.org/EIPS/eip-1474#error-codes)
     */
    eipCode: number;
    /**
     * Whether the contents (message & detail) are the default specified by the
     * EIP or if this is a custom message from our own semantic understanding of
     * the error.
     */
    default?: boolean;
};
/**
 * A PrivyProviderRpcError is a classified {ProviderRpcError}. When relevant,
 * we will attempt to replace the original messaging with our best guess of what
 * is going on.
 */
declare class PrivyProviderRpcError extends ProviderRpcError {
    details: ProviderError;
    constructor(error: unknown);
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
    request: (request: {
        method: string;
        params?: Array<unknown> | undefined;
    }) => Promise<unknown>;
    on: (eventName: string, listener: EIP1193OnEventHandler) => unknown;
    removeListener: (eventName: string | symbol, listener: (...args: unknown[]) => void) => unknown;
}
type RequestArguments = {
    method: string;
    params?: Array<any> | undefined;
};
declare class EmbeddedWalletProvider extends EventEmitter implements EIP1193Provider {
    request(request: RequestArguments): Promise<any>;
    /**
     * Backfills a transaction that may not specify a `chainId` with the provider's `this._chianId`
     */
    private ensureChainId;
    /**
     * If a chainId is provided that differs from the current `this._chainId`,
     * the new chain and StaticJsonRpcProvider will be set
     */
    private internalSwitchEthereumChain;
    private handlePopulateTransaction;
    private handleSendTransaction;
    private handleEstimateGas;
    private handleSwitchEthereumChain;
    private handleIFrameRpc;
    private handleJsonRpc;
    toJSON(): string;
}

type AuthAction = 'login' | 'link';
type Method = 'email' | 'sms' | 'oauth' | 'siwe' | 'passkey' | 'farcaster';
type ClientErrorCode = `failed_to_complete_${AuthAction}_with_oauth` | `${AuthAction}_with_oauth_returned_with_invalid_credentials` | `${AuthAction}_with_oauth_was_cancelled_by_user` | 'attempted_rpc_call_before_logged_in' | 'attempted_submit_otp_before_sending' | 'attempted_to_set_password_before_connected' | 'attempted_to_set_password_but_password_already_set' | `attempted_login_with_${Method}_while_already_logged_in` | `attempted_link_${Method}_before_logged_in` | 'attempted_link_cross_app_before_logged_in' | 'attempted_login_with_cross_app_while_already_logged_in' | `attempted_unlink_siwe_before_logged_in` | 'oauth_session_failed' | 'oauth_session_timeout' | 'embedded_wallet_needs_recovery' | 'embedded_wallet_creation_error' | 'embedded_wallet_recovery_error' | 'embedded_wallet_set_password_error' | 'embedded_wallet_set_recovery_error' | 'unknown_embedded_wallet_error' | 'embedded_wallet_does_not_exist' | 'embedded_wallet_already_exists' | 'embedded_wallet_webview_not_loaded' | 'embedded_wallet_request_error' | 'delegated_actions_before_logged_in' | 'delegated_actions_wallet_not_found' | 'delegated_actions_no_wallet_to_revoke' | 'no_passkey_found_for_challenge' | 'pkce_state_code_mismatch' | 'failed_to_create_passkey' | 'failed_to_generate_farcaster_uri' | 'failed_to_generate_farcaster_channel_token' | 'farcaster_polling_timeout' | 'farcaster_polling_canceled' | 'unsupported_recovery_method' | 'attempted_to_create_guest_account_for_logged_in_user' | 'attempted_to_read_storage_before_client_initialized' | 'third_party_auth_error' | 'invalid_native_app_id' | 'unsupported_mfa_method' | 'unsupported_chain_type' | 'invalid_mfa_code' | 'invalid_passkey_response' | 'storage_error' | 'smart_wallet_client_error' | 'chain_not_supported' | 'mfa_canceled' | 'failed_to_fetch_moonpay_transaction_status';
type ErrorBody<T extends PrivyErrorCode | ClientErrorCode> = {
    error: string;
    code: T;
};
type ServerErrorBody = ErrorBody<PrivyErrorCode>;
declare class PrivyApiError extends Error {
    error: string;
    code: PrivyErrorCode;
    constructor({ error, code }: ServerErrorBody);
}
declare class PrivyClientError extends Error {
    error: string;
    code: ClientErrorCode;
    constructor({ error, code }: ErrorBody<ClientErrorCode>);
}
declare class MoonpayApiError extends Error {
    error: string;
    code: ClientErrorCode;
    response: Response;
    constructor({ error, code, response }: ErrorBody<ClientErrorCode> & {
        response: Response;
    });
}
/**
 * This type converts the {@link PrivyErrorCode} enum into a string literal union type,
 * in order to match the structure of {@link ClientErrorCode}.
 *
 * Note this is valid because the {@link PrivyErrorCode} enum is a string enum.
 */
type PrivyApiErrorCode = `${PrivyErrorCode}`;
/**
 * All possible error codes, be it from the API or the client, plus an `'unknown_error'`
 * code for unexpected errors.
 */
type ErrorCode = PrivyApiErrorCode | ClientErrorCode | 'unknown_error';
/**
 * A partial map of error codes to error messages, with a `default` message as a fallback.
 */
type ErrorMessageMap = Partial<Record<ErrorCode, string>> & {
    default: string;
};
/**
 * Takes a message map and return an error formatter, that takes an error and
 * returns the corresponding error message.
 *
 * Valid errors are all those in the classes {@link PrivyApiError} and {@link PrivyClientError}.
 * Any other error will be treated as an unknown error.
 *
 * @param messageMap The partial map used to format error messages by their error code.
 * @returns
 */
declare const createErrorFormatter: (messageMap: ErrorMessageMap) => (error: unknown) => string;
declare function errorIndicatesMfaCanceled(error: unknown): unknown;

type MfaMethod = 'sms' | 'totp' | 'passkey';
type MfaSubmitArgs = {
    mfaMethod: MfaMethod;
    mfaCode: string | PasskeyAuthenticateInputType['authenticator_response'];
    relyingParty: string;
};
type MfaPromise = {
    current: {
        resolve: (args: MfaSubmitArgs) => void;
        reject: (error: PrivyClientError) => void;
    } | null;
};
type MfaSubmitPromise = {
    current: {
        resolve: (x: undefined) => void;
        reject: (error: PrivyIframeError) => void;
    } | null;
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
/**
 * {@link UnsignedTransactionRequest} specifies the `chainId` field as optional,
 * which matches ethers, wagmi, and a bunch of other libraries.
 *
 * However, we need the transaction's `chainId` to ensure it does price conversion, quote
 * labeling, etc. importantly.
 *
 * > Note:
 * > If the developer does not set a `chainId` in their `UnsignedTransactionRequest`,
 * > we default to the embedded provider's  current `chainId`
 */
type UnsignedTransactionRequestWithChainId = UnsignedTransactionRequest & {
    chainId: number;
};
interface eth_populateTransactionRequestResponse {
    method: 'eth_populateTransactionRequest';
    data: UnsignedTransactionRequest;
}
interface eth_signResponse {
    method: 'eth_sign';
    data: string;
}
interface personal_signResponse {
    method: 'personal_sign';
    data: string;
}
interface eth_signTransactionResponse {
    method: 'eth_signTransaction';
    data: string;
}
interface eth_signTypedData_v4Response {
    method: 'eth_signTypedData_v4';
    data: string;
}
type RpcResponseType = eth_signTransactionResponse | eth_populateTransactionRequestResponse | eth_signResponse | personal_signResponse | eth_signTypedData_v4Response;
interface SolanaRpcResponseType {
    data: {
        signature: string;
    };
}
type BaseBitcoinRpcResponseType = {
    method: string;
    data: any;
};
/**
 * The Privy SDK(s) will return the signature as a `Uint8Array`, but the iframe must serialize it to
 * a `string` in order to pass it over the message bus. You can see how this is done in the signature handler.
 *
 * The Privy SDK(s) themselves must then deserialize the `string` to a `Uint8Array` before
 * returning the signature to the caller.
 */
interface bitcoin_signResponse extends BaseBitcoinRpcResponseType {
    method: 'sign';
    data: {
        signature: string;
    };
}
interface bitcoin_signTransactionResponse extends BaseBitcoinRpcResponseType {
    method: 'signTransaction';
    data: {
        signedTransaction: string;
    };
}
type BitcoinRpcResponseType = bitcoin_signResponse | bitcoin_signTransactionResponse;
type PrivyEventType = 'privy:iframe:ready' | 'privy:wallets:create' | 'privy:wallets:add' | 'privy:wallets:set-recovery' | 'privy:wallets:connect' | 'privy:wallets:recover' | 'privy:wallets:rpc' | 'privy:wallet:create' | 'privy:wallet:connect' | 'privy:wallet:recover' | 'privy:wallet:rpc' | 'privy:solana-wallet:create' | 'privy:solana-wallet:create-additional' | 'privy:solana-wallet:connect' | 'privy:solana-wallet:recover' | 'privy:solana-wallet:rpc' | 'privy:delegated-actions:consent' | 'privy:mfa:verify' | 'privy:mfa:init-enrollment' | 'privy:mfa:submit-enrollment' | 'privy:mfa:unenroll' | 'privy:mfa:clear';
type IEmbeddedWalletRecoveryOptions = 'privy' | 'user-passcode' | 'google-drive' | 'icloud' | 'icloud-native';
type EmbeddedWalletRecoveryOptions = 'privy' | 'user-passcode' | 'google-drive' | 'icloud';
type PasswordRecoveryInput = {
    recoveryMethod: 'user-passcode';
    password: string;
};
type CloudRecoveryInput = {
    recoveryMethod: 'google-drive' | 'icloud';
    recoveryAccessToken: string;
};
type ICloudNativeRecoveryInput = {
    recoveryMethod: 'icloud-native';
    recoverySecretOverride: string;
    iCloudRecordNameOverride: string;
};
type SetRecoveryInput = {
    wallet: PrivyEthereumEmbeddedWalletAccount | PrivySolanaEmbeddedWalletAccount;
} & (PasswordRecoveryInput | CloudRecoveryInput | ICloudNativeRecoveryInput | PrivyRecoveryInput);
interface SetRecoveryOutput {
    /** User object with the updated embedded wallet */
    user: PrivyUser;
    /**
     * Provider for the embedded ethereum wallet.
     *
     * This value will be `null` if and only if the wallet passed in the input is not an Ethereum wallet.
     * @deprecated Get the provider instance from the `getProvider(...)` method instead.
     */
    provider: EmbeddedWalletProvider | null;
}
type BaseProxyRequest = {
    accessToken: string;
} & Partial<MfaSubmitArgs>;
type PrivyResponseBaseEventType<E extends PrivyEventType, D extends PrivyResponseDataType> = {
    id: string;
    event: E;
    data: D;
};
type ChainType = 'ethereum' | 'solana' | 'bitcoin-taproot' | 'bitcoin-segwit';
type BaseWalletsRequestData = BaseProxyRequest;
type IframeReadyResponseDataType = Record<string, never>;
type IframeReadyResponseEventType = PrivyResponseBaseEventType<'privy:iframe:ready', IframeReadyResponseDataType>;
type WalletsCreateResponseDataType = {
    address: string;
};
type WalletsCreateResponseEventType = PrivyResponseBaseEventType<'privy:wallets:create', WalletsCreateResponseDataType>;
type EntropyIdVerifier = 'ethereum-address-verifier' | 'solana-address-verifier';
type WalletsAddResponseDataType = {
    address: string;
};
type WalletsAddResponseEventType = PrivyResponseBaseEventType<'privy:wallets:add', WalletsAddResponseDataType>;
type WalletsSetRecoveryBaseRequestDataType = BaseWalletsRequestData & {
    /**
     * Key with which to look up the existing entropy
     */
    entropyId: string;
    /**
     * Source of the `entropyId` property. This field determines how the entropyId will
     * be used. Possible values include:
     * - ethereum-address-verifier: the entropyId is the address of the Ethereum wallet derived
     * at index 0 for this entropy
     * - solana-address-verifier: the entropyId is a the address of the Solana wallet derived
     * at index 0 for this entropy
     *
     * When this field is a wallet address, we can verify reconstitution was successful by
     * deriving the specified wallet and comparing the address to the `entropyId`
     */
    entropyIdVerifier: EntropyIdVerifier;
    existingRecoveryMethod?: EmbeddedWalletRecoveryOptions;
};
type WalletsSetRecoveryPasswordDataType = WalletsSetRecoveryBaseRequestDataType & {
    recoveryMethod: 'user-passcode';
    recoveryPassword: string;
};
type WalletsSetRecoveryGoogleDriveDataType = WalletsSetRecoveryBaseRequestDataType & {
    recoveryMethod: 'google-drive';
    recoveryAccessToken: string;
};
type WalletsSetRecoveryICloudDataType = WalletsSetRecoveryBaseRequestDataType & {
    recoveryMethod: 'icloud';
    recoveryAccessToken: string;
};
type WalletsSetRecoveryICloudNativeDataType = WalletsSetRecoveryBaseRequestDataType & {
    recoveryMethod: 'icloud-native';
    recoverySecretOverride: string;
    iCloudRecordNameOverride: string;
};
type WalletsSetRecoveryRequestDataType = Omit<WalletsSetRecoveryPasswordDataType, 'chainType'> | Omit<WalletsSetRecoveryGoogleDriveDataType, 'chainType'> | Omit<WalletsSetRecoveryICloudDataType, 'chainType'> | Omit<WalletsSetRecoveryICloudNativeDataType, 'chainType'>;
type WalletsSetRecoveryResponseDataType = {
    entropyId: string;
    entropyIdVerifier: EntropyIdVerifier;
    recoveryMethod: WalletsSetRecoveryRequestDataType['recoveryMethod'];
};
type WalletsSetRecoveryResponseEventType = PrivyResponseBaseEventType<'privy:wallets:set-recovery', WalletsSetRecoveryResponseDataType>;
type WalletsConnectResponseDataType = {
    entropyId: string;
};
type WalletsConnectResponseEventType = PrivyResponseBaseEventType<'privy:wallets:connect', WalletsConnectResponseDataType>;
type WalletsRecoverResponseDataType = {
    entropyId: string;
};
type WalletsRecoverResponseEventType = PrivyResponseBaseEventType<'privy:wallets:recover', WalletsRecoverResponseDataType>;
type WalletsRpcEthereumResponseDataType = {
    chainType: 'ethereum';
    response: RpcResponseType;
};
type WalletsRpcSolanaResponseDataType = {
    chainType: 'solana';
    response: SolanaRpcResponseType;
};
type WalletsRpcBitcoinResponseDataType = {
    chainType: 'bitcoin-taproot' | 'bitcoin-segwit';
    response: BitcoinRpcResponseType;
};
type WalletsRpcResponseDataType = {
    address: string;
} & (WalletsRpcEthereumResponseDataType | WalletsRpcSolanaResponseDataType | WalletsRpcBitcoinResponseDataType);
type WalletsRpcResponseEventType = PrivyResponseBaseEventType<'privy:wallets:rpc', WalletsRpcResponseDataType>;
type WalletCreateResponseDataType = {
    address: string;
};
type WalletCreateResponseEventType = PrivyResponseBaseEventType<'privy:wallet:create', WalletCreateResponseDataType>;
type WalletConnectResponseDataType = {
    address: string;
};
type WalletConnectResponseEventType = PrivyResponseBaseEventType<'privy:wallet:connect', WalletConnectResponseDataType>;
type WalletRecoverResponseDataType = {
    address: string;
};
type WalletRecoverResponseEventType = PrivyResponseBaseEventType<'privy:wallet:recover', WalletRecoverResponseDataType>;
type WalletRpcResponseDataType = {
    address: string;
    response: RpcResponseType;
};
type WalletRpcResponseEventType = PrivyResponseBaseEventType<'privy:wallet:rpc', WalletRpcResponseDataType>;
type SolanaWalletCreateResponseDataType = {
    publicKey: string;
};
type SolanaWalletCreateResponseEventType = PrivyResponseBaseEventType<'privy:solana-wallet:create', SolanaWalletCreateResponseDataType>;
type SolanaWalletCreateAdditionalResponseDataType = {
    publicKey: string;
};
type SolanaWalletCreateAdditionalResponseEventType = PrivyResponseBaseEventType<'privy:solana-wallet:create-additional', SolanaWalletCreateAdditionalResponseDataType>;
type SolanaWalletConnectResponseDataType = {
    publicKey: string;
};
type SolanaWalletConnectResponseEventType = PrivyResponseBaseEventType<'privy:solana-wallet:connect', SolanaWalletConnectResponseDataType>;
type SolanaWalletRecoverResponseDataType = {
    publicKey: string;
};
type SolanaWalletRecoverResponseEventType = PrivyResponseBaseEventType<'privy:solana-wallet:recover', SolanaWalletRecoverResponseDataType>;
type SolanaWalletRpcResponseDataType = {
    publicKey: string;
    response: SolanaRpcResponseType;
};
type SolanaWalletRpcResponseEventType = PrivyResponseBaseEventType<'privy:solana-wallet:rpc', SolanaWalletRpcResponseDataType>;
type RootWalletForDelegation = {
    /** Address of the root wallet for the entropy being delegated. */
    address: string;
    /** Chain type of the root wallet for the entropy being delegated. */
    chainType: 'ethereum' | 'solana';
    /** Whether or not the root wallet for the entropy being delegated is imported. */
    imported: boolean;
};
type DelegatedWallet = {
    /** Address for a wallet to delegate. */
    address: string;
    /** Chain type for a wallet to delegate. */
    chainType: 'ethereum' | 'solana';
    /** HD index for the wallet to delegate. */
    walletIndex: number;
};
type DelegatedActionsConsentResponseDataType = {
    success: boolean;
};
type DelegatedActionsConsentResponseEventType = PrivyResponseBaseEventType<'privy:delegated-actions:consent', DelegatedActionsConsentResponseDataType>;
type MfaVerifyResponseDataType = Record<string, never>;
type MfaVerifyResponseEventType = PrivyResponseBaseEventType<'privy:mfa:verify', MfaVerifyResponseDataType>;
type MfaInitEnrollmentResponseDataType = {
    method: string;
    secret?: string;
    authUrl?: string;
};
type MfaInitEnrollmentResponseEventType = PrivyResponseBaseEventType<'privy:mfa:init-enrollment', MfaInitEnrollmentResponseDataType>;
type MfaSubmitEnrollmentResponseDataType = Record<string, never>;
type MfaSubmitEnrollmentResponseEventType = PrivyResponseBaseEventType<'privy:mfa:submit-enrollment', MfaSubmitEnrollmentResponseDataType>;
type MfaUnenrollResponseDataType = Record<string, never>;
type MfaUnenrollResponseEventType = PrivyResponseBaseEventType<'privy:mfa:unenroll', MfaUnenrollResponseDataType>;
type MfaClearResponseDataType = Record<string, never>;
type MfaClearResponseEventType = PrivyResponseBaseEventType<'privy:mfa:clear', MfaClearResponseDataType>;
type PrivyResponseDataType = IframeReadyResponseDataType | WalletsCreateResponseDataType | WalletsAddResponseDataType | WalletsSetRecoveryResponseDataType | WalletsConnectResponseDataType | WalletsRecoverResponseDataType | WalletsRpcResponseDataType | WalletCreateResponseDataType | WalletConnectResponseDataType | WalletRecoverResponseDataType | WalletRpcResponseDataType | SolanaWalletCreateResponseDataType | SolanaWalletConnectResponseDataType | SolanaWalletRecoverResponseDataType | SolanaWalletRpcResponseDataType | DelegatedActionsConsentResponseDataType | MfaVerifyResponseDataType | MfaInitEnrollmentResponseDataType | MfaSubmitEnrollmentResponseDataType | MfaUnenrollResponseDataType | MfaClearResponseDataType;
declare const PrivyIframeErrorTypes: readonly ["error", "invalid_request_arguments", "wallet_not_on_device", "invalid_recovery_pin", "insufficient_funds", "mfa_timeout", "missing_or_invalid_mfa", "mfa_verification_max_attempts_reached"];
type PrivyIframeErrorTypesType = (typeof PrivyIframeErrorTypes)[number];
type PrivyErrorResponseEventType = PrivyResponseBaseEventType<PrivyEventType, PrivyResponseDataType> & {
    error: {
        type: PrivyIframeErrorTypesType;
        message: string;
    };
};
type PrivyResponseEvent = IframeReadyResponseEventType | PrivyErrorResponseEventType | WalletsCreateResponseEventType | WalletsAddResponseEventType | WalletsSetRecoveryResponseEventType | WalletsConnectResponseEventType | WalletsRecoverResponseEventType | WalletsRpcResponseEventType | WalletCreateResponseEventType | WalletConnectResponseEventType | WalletRecoverResponseEventType | WalletRpcResponseEventType | SolanaWalletCreateResponseEventType | SolanaWalletCreateAdditionalResponseEventType | SolanaWalletConnectResponseEventType | SolanaWalletRecoverResponseEventType | SolanaWalletRpcResponseEventType | DelegatedActionsConsentResponseEventType | MfaVerifyResponseEventType | MfaInitEnrollmentResponseEventType | MfaSubmitEnrollmentResponseEventType | MfaUnenrollResponseEventType | MfaClearResponseEventType;
type EmbeddedWalletMessagePoster = {
    postMessage: (message: any, targetOrigin: string, transfer?: Transferable) => void;
};
type PreparedTransactionRequestEIP1559 = UnsignedTransactionRequest & {
    from: string;
    to: string;
    nonce: Quantity;
    chainId: number;
    gasLimit: Quantity;
    type: 2;
    maxFeePerGas: Quantity;
};
type PreparedTransactionRequestLegacy = UnsignedTransactionRequest & {
    from: string;
    to: string;
    nonce: Quantity;
    chainId: number;
    gasLimit: Quantity;
    type: 0 | 1;
    gasPrice: Quantity;
};
type PreparedTransactionRequest = PreparedTransactionRequestEIP1559 | PreparedTransactionRequestLegacy;

interface Storage {
    get(key: string): unknown | Promise<unknown>;
    put(key: string, value: unknown): void | Promise<void>;
    del(key: string): void | Promise<void>;
    getKeys(): string[] | Promise<string[]>;
}

type NonEmptyArray<T> = [T, ...T[]];

declare class AppApi {
    private _smartWalletConfig;
    getConfig(): {
        id: string;
        name: string;
        logo_url: string | null;
        icon_url: string | null;
        terms_and_conditions_url: string | null;
        privacy_policy_url: string | null;
        require_users_accept_terms: boolean | null;
        theme: string;
        accent_color: string | null;
        show_wallet_login_first: boolean;
        allowed_domains: string[];
        allowed_native_app_ids: string[];
        allowed_native_app_url_schemes: string[];
        wallet_auth: boolean;
        email_auth: boolean;
        sms_auth: boolean;
        google_oauth: boolean;
        twitter_oauth: boolean;
        discord_oauth: boolean;
        github_oauth: boolean;
        spotify_oauth: boolean;
        instagram_oauth: boolean;
        tiktok_oauth: boolean;
        linkedin_oauth: boolean;
        apple_oauth: boolean;
        farcaster_auth: boolean;
        passkey_auth: boolean;
        passkeys_for_signup_enabled: boolean;
        telegram_auth: boolean;
        guest_auth: boolean;
        solana_wallet_auth: boolean;
        disable_plus_emails: boolean;
        allowlist_enabled: boolean;
        allowlist_config: {
            error_title: string | null;
            error_detail: string | null;
            cta_text: string | null;
            cta_link: string | null;
        };
        wallet_connect_cloud_project_id: string | null;
        custom_api_url: string | null;
        embedded_wallet_config: {
            create_on_login: "users-without-wallets" | "all-users" | "off";
            user_owned_recovery_options: ("user-passcode" | "google-drive" | "icloud")[];
            require_user_owned_recovery_on_create?: boolean | undefined;
            require_user_password_on_create?: boolean | undefined;
        };
        enforce_wallet_uis: boolean;
        legacy_wallet_ui_config: boolean;
        fiat_on_ramp_enabled: boolean;
        captcha_enabled: boolean;
        twitter_oauth_on_mobile_enabled: boolean;
        mfa_methods: ("sms" | "totp" | "passkey")[];
        verification_key: string;
        max_linked_wallets_per_user: number | null;
        farcaster_link_wallets_enabled: boolean;
        captcha_site_key?: string | undefined;
        telegram_auth_config?: {
            bot_id: string;
            bot_name: string;
            link_enabled: boolean;
            seamless_auth_enabled: boolean;
        } | undefined;
        funding_config?: {
            options: {
                method: string;
                provider: string;
            }[];
            default_recommended_currency: {
                chain: string;
                asset?: "native-currency" | "USDC" | undefined;
            };
            default_recommended_amount: string;
            methods: ("moonpay" | "coinbase-onramp" | "external")[];
            prompt_funding_on_wallet_creation: boolean;
            cross_chain_bridging_enabled: boolean;
        } | undefined;
    } | undefined;
    getSmartWalletConfig(): Promise<PrivySmartWalletConfigurationResponse>;
    get appId(): string;
}

declare class CrossAppApi {
    /** Defines the format of the storage key for provider access tokens */
    private static providerAccessTokenStorageKey;
    /**
     * Updates the stored token information of a given cross-app provider.
     * @param providerAppId the Privy app ID to which the oauth tokens correspond.
     * @param tokens should be the result of cross app authentication (be it login or linking).
     */
    updateOnCrossAppAuthentication(providerAppId: string, tokens: OAuthTokens): Promise<void>;
}
type OAuthTokens = NonNullable<PrivyAuthenticatedUser['oauth_tokens']>;

declare class DelegatedWalletsApi {
    /**
     * Revokes delegation permission of all the wallets associated with the user.
     */
    revoke(): Promise<void>;
}

declare const chainDefs: {
    readonly mainnet: Chain;
    readonly goerli: Chain;
    readonly sepolia: Chain;
    readonly arbitrum: Chain;
    readonly arbitrumGoerli: Chain;
    readonly arbitrumSepolia: Chain;
    readonly optimism: Chain;
    readonly optimismGoerli: Chain;
    readonly optimismSepolia: Chain;
    readonly polygon: Chain;
    readonly polygonMumbai: Chain;
    readonly celo: Chain;
    readonly celoAlfajores: Chain;
    readonly filecoin: Chain;
    readonly filecoinCalibration: Chain;
    readonly base: Chain;
    readonly baseGoerli: Chain;
    readonly baseSepolia: Chain;
    readonly linea: Chain;
    readonly lineaTestnet: Chain;
    readonly avalanche: Chain;
    readonly avalancheFuji: Chain;
    readonly holesky: Chain;
    readonly redstone: Chain;
    readonly garnetHolesky: Chain;
    readonly redstoneHolesky: Chain;
    readonly zora: Chain;
    readonly zoraSepolia: Chain;
    readonly zoraTestnet: Chain;
};
declare const DEFAULT_SUPPORTED_CHAINS: readonly [Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain, Chain];
declare const DEFAULT_SUPPORTED_CHAIN_IDS: Set<number>;
declare function getSupportedChainById(id: number): Chain | undefined;

type SignMessageRequestArguments = {
    method: 'signMessage';
    params: {
        message: string;
    };
};
type SignAndSendTransactionRequestArguments = {
    method: 'signAndSendTransaction';
    params: {
        transaction: Transaction | VersionedTransaction;
        connection: Connection;
        options?: SendOptions;
    };
};
type SignTransactionRequestArguments<T extends Transaction | VersionedTransaction = Transaction> = {
    method: 'signTransaction';
    params: {
        transaction: T;
    };
};
/**
 * Privy embedded wallet provider for Solana accounts.
 *
 * Currently only supports signing messages.
 */
declare class EmbeddedSolanaWalletProvider {
    /**
     * Legacy API for reading the public key for this provider.
     *
     * @deprecated
     */
    readonly _publicKey: string;
    request(request: SignMessageRequestArguments): Promise<{
        signature: string;
    }>;
    request(request: SignAndSendTransactionRequestArguments): Promise<{
        signature: string;
    }>;
    request<T extends Transaction | VersionedTransaction>(request: SignTransactionRequestArguments<T>): Promise<{
        signedTransaction: T;
    }>;
    private handleIFrameRpc;
    private handleSignAndSendTransaction;
    private handleSignTransaction;
    /**
     * Pretty log output for when an instance of this class is `console.log`'d
     */
    toJSON(): string;
}

/**
 * Privy embedded wallet provider for Bitcoin accounts.
 *
 * Currently only supports signing messages.
 */
declare class EmbeddedBitcoinWalletProvider {
    /**
     * Sign an arbitrary message
     *
     * @param o the input object
     * @param o.message a byte array to sign
     *
     * @returns a base64-endoed signature
     */
    sign({ message }: {
        message: Uint8Array;
    }): Promise<{
        signature: string;
    }>;
    /**
     * Sign an encoded transaction
     *
     * @param o the input object
     * @param o.txPSBT a bitcoin transaction in PSBT format, hex-encoded
     *
     * @returns a hex-encoded signed transaction
     */
    signTransaction({ psbt }: {
        psbt: string;
    }): Promise<{
        signedTransaction: string;
    }>;
    private request;
    private handleIFrameRpc;
    /**
     * Pretty log output for when an instance of this class is `console.log`'d
     */
    toJSON(): string;
}

/** Options for creating the Solana embedded wallet */
type CreateSolanaOpts = {
    /**
     * The user's existing Ethereum embedded wallet if they have one. This parameter
     * MUST be set if the user has an Ethereum embedded wallet, otherwise Solana creation
     * will fail in the iframe.
     */
    ethereumAccount?: PrivyEthereumEmbeddedWalletAccount$1;
};
declare class EmbeddedWalletApi {
    /**
     * Add a new embedded wallet account.
     *
     * Requires that the user already have created an embedded wallet via `create`.
     *
     * @param o input options
     * @param o.chainType the type of wallet to create
     * @param o.hdWalletIndex the index of the wallet to create
     * @param o.entropyId the key used to look up the existing wallet
     * @param o.entropyIdVerifier the method used to verify the entropy ID
     *
     * @returns the updated user
     */
    add(opts: {
        chainType: ChainType;
        hdWalletIndex: number;
        entropyId: string;
        entropyIdVerifier: EntropyIdVerifier;
    }): Promise<{
        user: {
            id: string;
            mfa_methods: ({
                type: "sms";
                verified_at: number;
            } | {
                type: "totp";
                verified_at: number;
            } | {
                type: "passkey";
                verified_at: number;
            })[];
            linked_accounts: ({
                type: "email";
                address: string;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
            } | {
                type: "phone";
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                phoneNumber: string;
            } | {
                type: "wallet";
                address: string;
                chain_type: "ethereum";
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                wallet_client: "unknown";
                chain_id?: string | undefined;
                wallet_client_type?: string | undefined;
                connector_type?: string | undefined;
            } | {
                type: "smart_wallet";
                address: string;
                smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
            } | {
                type: "wallet";
                address: string;
                chain_type: "solana";
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                wallet_client: "unknown";
                wallet_client_type?: string | undefined;
                connector_type?: string | undefined;
            } | {
                type: "farcaster";
                fid: number;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                owner_address: string;
                username?: string | undefined;
                display_name?: string | undefined;
                bio?: string | undefined;
                profile_picture?: string | undefined;
                profile_picture_url?: string | undefined;
                homepage_url?: string | undefined;
                signer_public_key?: string | undefined;
            } | {
                type: "passkey";
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                credential_id: string;
                enrolled_in_mfa: boolean;
                created_with_browser?: string | undefined;
                created_with_os?: string | undefined;
                created_with_device?: string | undefined;
                authenticator_name?: string | undefined;
            } | {
                telegramUserId: string;
                firstName: string | null | undefined;
                type: "telegram";
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                telegram_user_id: string;
                username?: string | null | undefined;
                first_name?: string | null | undefined;
                last_name?: string | null | undefined;
                photo_url?: string | null | undefined;
            } | {
                type: "wallet";
                address: string;
                chain_type: "ethereum";
                wallet_index: number;
                chain_id: string;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                wallet_client: "privy";
                wallet_client_type: "privy";
                connector_type: "embedded";
                imported: boolean;
                delegated: boolean;
                recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            } | {
                type: "wallet";
                address: string;
                chain_type: "solana";
                wallet_index: number;
                public_key: string;
                chain_id: string;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                wallet_client: "privy";
                wallet_client_type: "privy";
                connector_type: "embedded";
                imported: boolean;
                delegated: boolean;
                recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            } | {
                type: "wallet";
                address: string;
                chain_type: "bitcoin-segwit";
                wallet_index: number;
                public_key: string;
                chain_id: string;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                wallet_client: "privy";
                wallet_client_type: "privy";
                connector_type: "embedded";
                imported: boolean;
                delegated: boolean;
                recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            } | {
                type: "wallet";
                address: string;
                chain_type: "bitcoin-taproot";
                wallet_index: number;
                public_key: string;
                chain_id: string;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                wallet_client: "privy";
                wallet_client_type: "privy";
                connector_type: "embedded";
                imported: boolean;
                delegated: boolean;
                recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            } | {
                type: "google_oauth";
                name: string | null;
                email: string;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                subject: string;
            } | {
                type: "twitter_oauth";
                name: string | null;
                username: string | null;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                profile_picture_url: string | null;
                subject: string;
            } | {
                type: "discord_oauth";
                email: string | null;
                username: string | null;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                subject: string;
            } | {
                type: "github_oauth";
                name: string | null;
                email: string | null;
                username: string | null;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                subject: string;
            } | {
                type: "linkedin_oauth";
                email: string | null;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                subject: string;
                name?: string | undefined;
                vanity_name?: string | undefined;
            } | {
                type: "spotify_oauth";
                name: string | null;
                email: string | null;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                subject: string;
            } | {
                type: "instagram_oauth";
                username: string | null;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                subject: string;
            } | {
                type: "tiktok_oauth";
                name: string | null;
                username: string | null;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                subject: string;
            } | {
                type: "apple_oauth";
                email: string | null;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                subject: string;
            } | {
                type: "custom_auth";
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                custom_user_id: string;
            } | {
                type: "cross_app";
                provider_app_id: string;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                subject: string;
                embedded_wallets: {
                    address: string;
                }[];
                smart_wallets: {
                    address: string;
                }[];
            })[];
            created_at: number;
            has_accepted_terms: boolean;
            is_guest: boolean;
            custom_metadata?: Record<string, string | number | boolean> | undefined;
        };
    }>;
    getBitcoinProvider({ wallet, entropyId, entropyIdVerifier, recoveryPassword, recoveryAccessToken, recoverySecretOverride, }: {
        wallet: PrivyBitcoinSegwitEmbeddedWalletAccount | PrivyBitcoinTaprootEmbeddedWalletAccount;
        entropyId: string;
        entropyIdVerifier: EntropyIdVerifier;
        recoveryPassword?: string;
        recoveryAccessToken?: string;
        recoverySecretOverride?: string;
    }): Promise<EmbeddedBitcoinWalletProvider>;
    /**
     * Creates an embedded wallet
     *
     * @param password Recovery password for the embedded wallet
     * @param recoveryMethod recovery method to create the wallet with
     * @param recoveryToken access token for recovery
     * @param recoverySecretOverride override for the recovery secret used to encrypt the recovery shares
     * @param iCloudRecordNameOverride override for the icloud record name where the recovery secret is stored in cloud recovery
     * @param solanaAccount The user's existing Solana embedded wallet if they have one. This parameter
     * MUST be set if the user has an Solana embedded wallet, otherwise Ethereum creation
     * will fail in the iframe.
     * @param skipCallbacks whether or not to skip user update callbacks when refreshing the user object
     *
     * @returns the updated user
     */
    create({ password, recoveryMethod, recoveryToken, recoverySecretOverride, iCloudRecordNameOverride, solanaAccount, skipCallbacks, }: {
        password?: string;
        recoveryMethod?: IEmbeddedWalletRecoveryOptions;
        recoveryToken?: string;
        recoverySecretOverride?: string;
        iCloudRecordNameOverride?: string;
        solanaAccount?: PrivySolanaEmbeddedWalletAccount$1;
        skipCallbacks?: boolean;
    }): Promise<Omit<PrivyAuthenticatedUser$1, 'session_update_action'>>;
    /**
     * Creates an embedded Solana wallet
     *
     * @param opts.ethereumAccount the user's existing embedded wallet account if they have one. This parameter
     * MUST be passed if the user has an existing Ethereum embedded wallet otherwise Solana wallet creation will fail.
     *
     * @returns the updated user
     */
    createSolana(opts?: CreateSolanaOpts): Promise<Omit<PrivyAuthenticatedUser$1, 'session_update_action'>>;
    delegateWallets({ delegatedWallets, rootWallet, }: {
        delegatedWallets: DelegatedWallet[];
        rootWallet: RootWalletForDelegation;
    }): Promise<void>;
    /**
     * Retrieve this user's embedded wallet.
     * If the wallet has never been used on this device recover.
     *
     * @param password Recovery password for the embedded wallet
     * @returns EmbeddedWalletProvider implementing EIP1193Provider
     */
    getProvider(wallet: PrivyEthereumEmbeddedWalletAccount$1, recoveryPassword?: string, recoveryAccessToken?: string, recoverySecretOverride?: string): Promise<EmbeddedWalletProvider>;
    /**
     * Retrieve this users embedded Solana wallet.
     * If the wallet has never been used on this device recover.
     *
     * @returns EmbeddedSolanaWalletProvider
     */
    getSolanaProvider(account: PrivySolanaEmbeddedWalletAccount$1, entropyId: string, entropyIdVerifier: EntropyIdVerifier, recoveryPassword?: string, recoveryAccessToken?: string, recoverySecretOverride?: string): Promise<EmbeddedSolanaWalletProvider>;
    /**
     * Add or change the recovery method used to recover an embedded wallet.
     *
     * @param password New recovery password
     * @param currentPassword Current recovery password used to recover the embedded wallet
     * @returns PrivyUser the user object with the updated embedded wallet.
     * @returns EmbeddedWalletProvider implementing EIP1193Provider if the input wallet is an Ethereum wallet.
     */
    setRecovery(setRecoveryInput: SetRecoveryInput): Promise<SetRecoveryOutput>;
    /**
     * @returns URL to load in the embedded wallet iframe
     */
    getURL(): string;
    /**
     * @deprecated Require higher level SDKs to pass in the chain configuration
     */
    get chains(): NonEmptyArray<Chain>;
    /**
     * Handles messages from the embedded wallet secure contexts
     *
     * @example
     * const onMessage = async (e: WebViewMessageEvent) => {
     *   const {data} = e.nativeEvent;
     *   client.embeddedWallet.onMessage(JSON.parse(data));
     * }
     */
    onMessage(event: PrivyResponseEvent): void;
}

declare class MfaPromises extends EventEmitter<{
    mfaRequired: [];
}> {
    /**
     * This is the root promise for MFA flows. It is resolved or rejected when MFA is complete.
     */
    readonly rootPromise: MfaPromise;
    /**
     * This is the promise for MFA attempts. It is resolved or rejected for every attempt to verify MFA.
     */
    readonly submitPromise: MfaSubmitPromise;
}

declare class UserApi {
    /**
     * Get the logged in user.
     */
    get(): Promise<{
        user: {
            id: string;
            mfa_methods: ({
                type: "sms";
                verified_at: number;
            } | {
                type: "totp";
                verified_at: number;
            } | {
                type: "passkey";
                verified_at: number;
            })[];
            linked_accounts: ({
                type: "email";
                address: string;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
            } | {
                type: "phone";
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                phoneNumber: string;
            } | {
                type: "wallet";
                address: string;
                chain_type: "ethereum";
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                wallet_client: "unknown";
                chain_id?: string | undefined;
                wallet_client_type?: string | undefined;
                connector_type?: string | undefined;
            } | {
                type: "smart_wallet";
                address: string;
                smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
            } | {
                type: "wallet";
                address: string;
                chain_type: "solana";
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                wallet_client: "unknown";
                wallet_client_type?: string | undefined;
                connector_type?: string | undefined;
            } | {
                type: "farcaster";
                fid: number;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                owner_address: string;
                username?: string | undefined;
                display_name?: string | undefined;
                bio?: string | undefined;
                profile_picture?: string | undefined;
                profile_picture_url?: string | undefined;
                homepage_url?: string | undefined;
                signer_public_key?: string | undefined;
            } | {
                type: "passkey";
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                credential_id: string;
                enrolled_in_mfa: boolean;
                created_with_browser?: string | undefined;
                created_with_os?: string | undefined;
                created_with_device?: string | undefined;
                authenticator_name?: string | undefined;
            } | {
                telegramUserId: string;
                firstName: string | null | undefined;
                type: "telegram";
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                telegram_user_id: string;
                username?: string | null | undefined;
                first_name?: string | null | undefined;
                last_name?: string | null | undefined;
                photo_url?: string | null | undefined;
            } | {
                type: "wallet";
                address: string;
                chain_type: "ethereum";
                wallet_index: number;
                chain_id: string;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                wallet_client: "privy";
                wallet_client_type: "privy";
                connector_type: "embedded";
                imported: boolean;
                delegated: boolean;
                recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            } | {
                type: "wallet";
                address: string;
                chain_type: "solana";
                wallet_index: number;
                public_key: string;
                chain_id: string;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                wallet_client: "privy";
                wallet_client_type: "privy";
                connector_type: "embedded";
                imported: boolean;
                delegated: boolean;
                recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            } | {
                type: "wallet";
                address: string;
                chain_type: "bitcoin-segwit";
                wallet_index: number;
                public_key: string;
                chain_id: string;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                wallet_client: "privy";
                wallet_client_type: "privy";
                connector_type: "embedded";
                imported: boolean;
                delegated: boolean;
                recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            } | {
                type: "wallet";
                address: string;
                chain_type: "bitcoin-taproot";
                wallet_index: number;
                public_key: string;
                chain_id: string;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                wallet_client: "privy";
                wallet_client_type: "privy";
                connector_type: "embedded";
                imported: boolean;
                delegated: boolean;
                recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            } | {
                type: "google_oauth";
                name: string | null;
                email: string;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                subject: string;
            } | {
                type: "twitter_oauth";
                name: string | null;
                username: string | null;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                profile_picture_url: string | null;
                subject: string;
            } | {
                type: "discord_oauth";
                email: string | null;
                username: string | null;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                subject: string;
            } | {
                type: "github_oauth";
                name: string | null;
                email: string | null;
                username: string | null;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                subject: string;
            } | {
                type: "linkedin_oauth";
                email: string | null;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                subject: string;
                name?: string | undefined;
                vanity_name?: string | undefined;
            } | {
                type: "spotify_oauth";
                name: string | null;
                email: string | null;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                subject: string;
            } | {
                type: "instagram_oauth";
                username: string | null;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                subject: string;
            } | {
                type: "tiktok_oauth";
                name: string | null;
                username: string | null;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                subject: string;
            } | {
                type: "apple_oauth";
                email: string | null;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                subject: string;
            } | {
                type: "custom_auth";
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                custom_user_id: string;
            } | {
                type: "cross_app";
                provider_app_id: string;
                verified_at: number;
                first_verified_at: number | null;
                latest_verified_at: number | null;
                subject: string;
                embedded_wallets: {
                    address: string;
                }[];
                smart_wallets: {
                    address: string;
                }[];
            })[];
            created_at: number;
            has_accepted_terms: boolean;
            is_guest: boolean;
            custom_metadata?: Record<string, string | number | boolean> | undefined;
        } | null;
    }>;
}

type CreateOnLogin = 'off' | 'user-without-wallets' | 'all-users';
type EmbeddedWalletConfig = {
    createOnLogin: CreateOnLogin;
};
type LoginOptions = {
    embedded?: {
        ethereum?: EmbeddedWalletConfig;
        solana?: EmbeddedWalletConfig;
    };
};

declare class CustomProviderApi {
    /**
     * Logs a user in via a custom JWT from another (non-Privy) service
     *
     * @param token The JWT from the non-Privy service
     */
    syncWithToken(token: string, opts?: LoginOptions): Promise<Omit<_privy_io_public_api.PrivyAuthenticatedUser, "session_update_action">>;
}

declare class EmailApi {
    /**
     * Sends a one time login code to a user's email address
     *
     * @param email The email address to send the one time login code
     * @param token A CAPTCHA token
     */
    sendCode(email: string, token?: string): Promise<_privy_io_public_api.PrivySuccessObject>;
    /**
     * Logs a user in via an email address and one time code
     *
     * @param email The email address that the one time code was sent to
     * @param code The one time code
     * @param mode Optional Whether or not to block sign ups (only allow existing users to log in).
     */
    loginWithCode(email: string, code: string, mode?: 'login-or-sign-up' | 'no-signup', opts?: LoginOptions): Promise<Omit<_privy_io_public_api.PrivyAuthenticatedUser, "session_update_action">>;
    /**
     * Links an email adress to an existing user
     *
     * @param email The email address that the one time code was sent to
     * @param code The one time code
     */
    linkWithCode(email: string, code: string): Promise<{
        id: string;
        mfa_methods: ({
            type: "sms";
            verified_at: number;
        } | {
            type: "totp";
            verified_at: number;
        } | {
            type: "passkey";
            verified_at: number;
        })[];
        linked_accounts: ({
            type: "email";
            address: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        } | {
            type: "phone";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            phoneNumber: string;
        } | {
            type: "wallet";
            address: string;
            chain_type: "ethereum";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            chain_id?: string | undefined;
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        } | {
            type: "smart_wallet";
            address: string;
            smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        } | {
            type: "wallet";
            address: string;
            chain_type: "solana";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        } | {
            type: "farcaster";
            fid: number;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            owner_address: string;
            username?: string | undefined;
            display_name?: string | undefined;
            bio?: string | undefined;
            profile_picture?: string | undefined;
            profile_picture_url?: string | undefined;
            homepage_url?: string | undefined;
            signer_public_key?: string | undefined;
        } | {
            type: "passkey";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            credential_id: string;
            enrolled_in_mfa: boolean;
            created_with_browser?: string | undefined;
            created_with_os?: string | undefined;
            created_with_device?: string | undefined;
            authenticator_name?: string | undefined;
        } | {
            telegramUserId: string;
            firstName: string | null | undefined;
            type: "telegram";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            telegram_user_id: string;
            username?: string | null | undefined;
            first_name?: string | null | undefined;
            last_name?: string | null | undefined;
            photo_url?: string | null | undefined;
        } | {
            type: "wallet";
            address: string;
            chain_type: "ethereum";
            wallet_index: number;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "solana";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "bitcoin-segwit";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "bitcoin-taproot";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "google_oauth";
            name: string | null;
            email: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "twitter_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            profile_picture_url: string | null;
            subject: string;
        } | {
            type: "discord_oauth";
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "github_oauth";
            name: string | null;
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "linkedin_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            name?: string | undefined;
            vanity_name?: string | undefined;
        } | {
            type: "spotify_oauth";
            name: string | null;
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "instagram_oauth";
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "tiktok_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "apple_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "custom_auth";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            custom_user_id: string;
        } | {
            type: "cross_app";
            provider_app_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            embedded_wallets: {
                address: string;
            }[];
            smart_wallets: {
                address: string;
            }[];
        })[];
        created_at: number;
        has_accepted_terms: boolean;
        is_guest: boolean;
        custom_metadata?: Record<string, string | number | boolean> | undefined;
    }>;
    unlink(email: string): Promise<{
        id: string;
        mfa_methods: ({
            type: "sms";
            verified_at: number;
        } | {
            type: "totp";
            verified_at: number;
        } | {
            type: "passkey";
            verified_at: number;
        })[];
        linked_accounts: ({
            type: "email";
            address: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        } | {
            type: "phone";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            phoneNumber: string;
        } | {
            type: "wallet";
            address: string;
            chain_type: "ethereum";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            chain_id?: string | undefined;
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        } | {
            type: "smart_wallet";
            address: string;
            smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        } | {
            type: "wallet";
            address: string;
            chain_type: "solana";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        } | {
            type: "farcaster";
            fid: number;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            owner_address: string;
            username?: string | undefined;
            display_name?: string | undefined;
            bio?: string | undefined;
            profile_picture?: string | undefined;
            profile_picture_url?: string | undefined;
            homepage_url?: string | undefined;
            signer_public_key?: string | undefined;
        } | {
            type: "passkey";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            credential_id: string;
            enrolled_in_mfa: boolean;
            created_with_browser?: string | undefined;
            created_with_os?: string | undefined;
            created_with_device?: string | undefined;
            authenticator_name?: string | undefined;
        } | {
            telegramUserId: string;
            firstName: string | null | undefined;
            type: "telegram";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            telegram_user_id: string;
            username?: string | null | undefined;
            first_name?: string | null | undefined;
            last_name?: string | null | undefined;
            photo_url?: string | null | undefined;
        } | {
            type: "wallet";
            address: string;
            chain_type: "ethereum";
            wallet_index: number;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "solana";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "bitcoin-segwit";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "bitcoin-taproot";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "google_oauth";
            name: string | null;
            email: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "twitter_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            profile_picture_url: string | null;
            subject: string;
        } | {
            type: "discord_oauth";
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "github_oauth";
            name: string | null;
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "linkedin_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            name?: string | undefined;
            vanity_name?: string | undefined;
        } | {
            type: "spotify_oauth";
            name: string | null;
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "instagram_oauth";
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "tiktok_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "apple_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "custom_auth";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            custom_user_id: string;
        } | {
            type: "cross_app";
            provider_app_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            embedded_wallets: {
                address: string;
            }[];
            smart_wallets: {
                address: string;
            }[];
        })[];
        created_at: number;
        has_accepted_terms: boolean;
        is_guest: boolean;
        custom_metadata?: Record<string, string | number | boolean> | undefined;
    }>;
}

declare class FarcasterApi {
    /**
     * Begin a login / link flow with a farcaster.
     */
    initializeAuth({ relyingParty, redirectUrl, token, }: {
        relyingParty?: string;
        redirectUrl?: string;
        token?: string;
    }): Promise<_privy_io_public_api.PrivyFarcasterConnectInitResponse>;
    /**
     * Get the status of a user's SIWF request.
     */
    getFarcasterStatus({ channel_token }: {
        channel_token: string;
    }): Promise<NonNullable<_privy_io_public_api.PrivyFarcasterConnectStatusCompletedResponse | _privy_io_public_api.PrivyFarcasterConnectStatusPendingResponse | undefined>>;
    /**
     * Authenticate with Privy via the Sign-In With Farcaster spec [FIP-11: Sign in with Farcaster](https://github.com/farcasterxyz/protocol/discussions/110).
     */
    authenticate({ channel_token, message, signature, fid, mode, }: {
        channel_token: string;
        message: string;
        signature: string;
        fid: number;
        mode?: 'login-or-sign-up' | 'no-signup';
    }, opts?: LoginOptions): Promise<Omit<_privy_io_public_api.PrivyAuthenticatedUser, "session_update_action">>;
    /**
     * Link with Privy via the Sign-In With Farcaster spec [FIP-11: Sign in with Farcaster](https://github.com/farcasterxyz/protocol/discussions/110).
     */
    link({ channel_token, message, signature, fid, }: {
        channel_token: string;
        message: string;
        signature: string;
        fid: number;
    }): Promise<{
        id: string;
        mfa_methods: ({
            type: "sms";
            verified_at: number;
        } | {
            type: "totp";
            verified_at: number;
        } | {
            type: "passkey";
            verified_at: number;
        })[];
        linked_accounts: ({
            type: "email";
            address: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        } | {
            type: "phone";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            phoneNumber: string;
        } | {
            type: "wallet";
            address: string;
            chain_type: "ethereum";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            chain_id?: string | undefined;
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        } | {
            type: "smart_wallet";
            address: string;
            smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        } | {
            type: "wallet";
            address: string;
            chain_type: "solana";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        } | {
            type: "farcaster";
            fid: number;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            owner_address: string;
            username?: string | undefined;
            display_name?: string | undefined;
            bio?: string | undefined;
            profile_picture?: string | undefined;
            profile_picture_url?: string | undefined;
            homepage_url?: string | undefined;
            signer_public_key?: string | undefined;
        } | {
            type: "passkey";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            credential_id: string;
            enrolled_in_mfa: boolean;
            created_with_browser?: string | undefined;
            created_with_os?: string | undefined;
            created_with_device?: string | undefined;
            authenticator_name?: string | undefined;
        } | {
            telegramUserId: string;
            firstName: string | null | undefined;
            type: "telegram";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            telegram_user_id: string;
            username?: string | null | undefined;
            first_name?: string | null | undefined;
            last_name?: string | null | undefined;
            photo_url?: string | null | undefined;
        } | {
            type: "wallet";
            address: string;
            chain_type: "ethereum";
            wallet_index: number;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "solana";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "bitcoin-segwit";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "bitcoin-taproot";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "google_oauth";
            name: string | null;
            email: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "twitter_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            profile_picture_url: string | null;
            subject: string;
        } | {
            type: "discord_oauth";
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "github_oauth";
            name: string | null;
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "linkedin_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            name?: string | undefined;
            vanity_name?: string | undefined;
        } | {
            type: "spotify_oauth";
            name: string | null;
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "instagram_oauth";
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "tiktok_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "apple_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "custom_auth";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            custom_user_id: string;
        } | {
            type: "cross_app";
            provider_app_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            embedded_wallets: {
                address: string;
            }[];
            smart_wallets: {
                address: string;
            }[];
        })[];
        created_at: number;
        has_accepted_terms: boolean;
        is_guest: boolean;
        custom_metadata?: Record<string, string | number | boolean> | undefined;
    }>;
    /**
     * Unlink with Privy via the Sign-In With Farcaster spec.
     */
    unlink({ fid }: {
        fid: number;
    }): Promise<{
        id: string;
        mfa_methods: ({
            type: "sms";
            verified_at: number;
        } | {
            type: "totp";
            verified_at: number;
        } | {
            type: "passkey";
            verified_at: number;
        })[];
        linked_accounts: ({
            type: "email";
            address: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        } | {
            type: "phone";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            phoneNumber: string;
        } | {
            type: "wallet";
            address: string;
            chain_type: "ethereum";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            chain_id?: string | undefined;
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        } | {
            type: "smart_wallet";
            address: string;
            smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        } | {
            type: "wallet";
            address: string;
            chain_type: "solana";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        } | {
            type: "farcaster";
            fid: number;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            owner_address: string;
            username?: string | undefined;
            display_name?: string | undefined;
            bio?: string | undefined;
            profile_picture?: string | undefined;
            profile_picture_url?: string | undefined;
            homepage_url?: string | undefined;
            signer_public_key?: string | undefined;
        } | {
            type: "passkey";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            credential_id: string;
            enrolled_in_mfa: boolean;
            created_with_browser?: string | undefined;
            created_with_os?: string | undefined;
            created_with_device?: string | undefined;
            authenticator_name?: string | undefined;
        } | {
            telegramUserId: string;
            firstName: string | null | undefined;
            type: "telegram";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            telegram_user_id: string;
            username?: string | null | undefined;
            first_name?: string | null | undefined;
            last_name?: string | null | undefined;
            photo_url?: string | null | undefined;
        } | {
            type: "wallet";
            address: string;
            chain_type: "ethereum";
            wallet_index: number;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "solana";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "bitcoin-segwit";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "bitcoin-taproot";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "google_oauth";
            name: string | null;
            email: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "twitter_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            profile_picture_url: string | null;
            subject: string;
        } | {
            type: "discord_oauth";
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "github_oauth";
            name: string | null;
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "linkedin_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            name?: string | undefined;
            vanity_name?: string | undefined;
        } | {
            type: "spotify_oauth";
            name: string | null;
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "instagram_oauth";
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "tiktok_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "apple_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "custom_auth";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            custom_user_id: string;
        } | {
            type: "cross_app";
            provider_app_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            embedded_wallets: {
                address: string;
            }[];
            smart_wallets: {
                address: string;
            }[];
        })[];
        created_at: number;
        has_accepted_terms: boolean;
        is_guest: boolean;
        custom_metadata?: Record<string, string | number | boolean> | undefined;
    }>;
}

declare class FarcasterV2Api {
    /**
     * Begin a login / link flow with a farcaster.
     */
    initializeAuth(): Promise<_privy_io_public_api.PrivyFarcasterV2InitResponse>;
    /**
     * Authenticate with Privy via the Sign-In With Farcaster spec [FIP-11: Sign in with Farcaster](https://github.com/farcasterxyz/protocol/discussions/110).
     */
    authenticate({ message, signature, fid, }: {
        message: string;
        signature: string;
        fid: number;
        mode?: 'login-or-sign-up' | 'no-signup';
    }, opts?: LoginOptions): Promise<Omit<_privy_io_public_api.PrivyAuthenticatedUser, "session_update_action">>;
}

declare class GuestApi {
    /**
     * Sends a one time login code to a user's email address
     *
     * @param email The email address to send the one time login code
     * @param token A CAPTCHA token
     */
    create(opts?: LoginOptions): Promise<Omit<_privy_io_public_api.PrivyAuthenticatedUser, "session_update_action">>;
}

declare class OAuthApi {
    /**
     * Starts an OAuth flow with a specific provider
     * Sends a one time login code to a user's email address
     *
     * @param provider The OAuth provider
     * @param redirectURI The URL to redirect to after a successful OAuth flow
     */
    generateURL(provider: OAuthProviderType, redirectURI: string): Promise<_privy_io_public_api.PrivyOAuthInitResponse>;
    /**
     * Logs a user in via successfull OAuth flow codes
     *
     * @param authorizationCode The code generated by the authorization server
     * @param returnedStateCode The state value initially set in the request by Privy to the authorization server
     * @param provider The OAuth provider (e.g. google, apple)
     * @param codeType The string literal `raw` indicating this the authorizationCode is unhashed, from a native sign in flow.
     * @param mode Optional Whether or not to block sign ups (only allow existing users to log in).
     */
    loginWithCode(authorizationCode: string, returnedStateCode: string, provider?: OAuthProviderType, codeType?: 'raw', mode?: 'login-or-sign-up' | 'no-signup', opts?: LoginOptions): Promise<Omit<_privy_io_public_api.PrivyAuthenticatedUser, "session_update_action">>;
    /**
     * Links an OAuth account to an existing user
     *
     * @param authorizationCode The code generated by the authorization server
     * @param returnedStateCode The state value initially set in the request by Privy to the authorization server
     */
    linkWithCode(authorizationCode: string, returnedStateCode: string, provider?: OAuthProviderType, codeType?: 'raw'): Promise<{
        id: string;
        mfa_methods: ({
            type: "sms";
            verified_at: number;
        } | {
            type: "totp";
            verified_at: number;
        } | {
            type: "passkey";
            verified_at: number;
        })[];
        linked_accounts: ({
            type: "email";
            address: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        } | {
            type: "phone";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            phoneNumber: string;
        } | {
            type: "wallet";
            address: string;
            chain_type: "ethereum";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            chain_id?: string | undefined;
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        } | {
            type: "smart_wallet";
            address: string;
            smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        } | {
            type: "wallet";
            address: string;
            chain_type: "solana";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        } | {
            type: "farcaster";
            fid: number;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            owner_address: string;
            username?: string | undefined;
            display_name?: string | undefined;
            bio?: string | undefined;
            profile_picture?: string | undefined;
            profile_picture_url?: string | undefined;
            homepage_url?: string | undefined;
            signer_public_key?: string | undefined;
        } | {
            type: "passkey";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            credential_id: string;
            enrolled_in_mfa: boolean;
            created_with_browser?: string | undefined;
            created_with_os?: string | undefined;
            created_with_device?: string | undefined;
            authenticator_name?: string | undefined;
        } | {
            telegramUserId: string;
            firstName: string | null | undefined;
            type: "telegram";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            telegram_user_id: string;
            username?: string | null | undefined;
            first_name?: string | null | undefined;
            last_name?: string | null | undefined;
            photo_url?: string | null | undefined;
        } | {
            type: "wallet";
            address: string;
            chain_type: "ethereum";
            wallet_index: number;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "solana";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "bitcoin-segwit";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "bitcoin-taproot";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "google_oauth";
            name: string | null;
            email: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "twitter_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            profile_picture_url: string | null;
            subject: string;
        } | {
            type: "discord_oauth";
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "github_oauth";
            name: string | null;
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "linkedin_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            name?: string | undefined;
            vanity_name?: string | undefined;
        } | {
            type: "spotify_oauth";
            name: string | null;
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "instagram_oauth";
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "tiktok_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "apple_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "custom_auth";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            custom_user_id: string;
        } | {
            type: "cross_app";
            provider_app_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            embedded_wallets: {
                address: string;
            }[];
            smart_wallets: {
                address: string;
            }[];
        })[];
        created_at: number;
        has_accepted_terms: boolean;
        is_guest: boolean;
        custom_metadata?: Record<string, string | number | boolean> | undefined;
    }>;
    /**
     * Un-links an OAuth account from an existing user
     *
     * @param provider The OAuth provider
     * @param subject The subject of the OAuth account, usually an email or username
     */
    unlink(provider: OAuthProviderType, subject: string): Promise<{
        id: string;
        mfa_methods: ({
            type: "sms";
            verified_at: number;
        } | {
            type: "totp";
            verified_at: number;
        } | {
            type: "passkey";
            verified_at: number;
        })[];
        linked_accounts: ({
            type: "email";
            address: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        } | {
            type: "phone";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            phoneNumber: string;
        } | {
            type: "wallet";
            address: string;
            chain_type: "ethereum";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            chain_id?: string | undefined;
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        } | {
            type: "smart_wallet";
            address: string;
            smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        } | {
            type: "wallet";
            address: string;
            chain_type: "solana";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        } | {
            type: "farcaster";
            fid: number;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            owner_address: string;
            username?: string | undefined;
            display_name?: string | undefined;
            bio?: string | undefined;
            profile_picture?: string | undefined;
            profile_picture_url?: string | undefined;
            homepage_url?: string | undefined;
            signer_public_key?: string | undefined;
        } | {
            type: "passkey";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            credential_id: string;
            enrolled_in_mfa: boolean;
            created_with_browser?: string | undefined;
            created_with_os?: string | undefined;
            created_with_device?: string | undefined;
            authenticator_name?: string | undefined;
        } | {
            telegramUserId: string;
            firstName: string | null | undefined;
            type: "telegram";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            telegram_user_id: string;
            username?: string | null | undefined;
            first_name?: string | null | undefined;
            last_name?: string | null | undefined;
            photo_url?: string | null | undefined;
        } | {
            type: "wallet";
            address: string;
            chain_type: "ethereum";
            wallet_index: number;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "solana";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "bitcoin-segwit";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "bitcoin-taproot";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "google_oauth";
            name: string | null;
            email: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "twitter_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            profile_picture_url: string | null;
            subject: string;
        } | {
            type: "discord_oauth";
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "github_oauth";
            name: string | null;
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "linkedin_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            name?: string | undefined;
            vanity_name?: string | undefined;
        } | {
            type: "spotify_oauth";
            name: string | null;
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "instagram_oauth";
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "tiktok_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "apple_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "custom_auth";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            custom_user_id: string;
        } | {
            type: "cross_app";
            provider_app_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            embedded_wallets: {
                address: string;
            }[];
            smart_wallets: {
                address: string;
            }[];
        })[];
        created_at: number;
        has_accepted_terms: boolean;
        is_guest: boolean;
        custom_metadata?: Record<string, string | number | boolean> | undefined;
    }>;
}

declare class PasskeyApi {
    /**
     * Begin a link flow with a passkey.
     */
    generateRegistrationOptions(relyingParty?: string): Promise<{
        options: {
            user: {
                id: string;
                name: string;
                display_name: string;
            };
            challenge: string;
            rp: {
                name: string;
                id?: string | undefined;
            };
            pub_key_cred_params: {
                type: "public-key";
                alg: number;
            }[];
            timeout?: number | undefined;
            extensions?: {
                app_id?: string | undefined;
                cred_props?: {
                    rk?: boolean | undefined;
                } | undefined;
                hmac_create_secret?: boolean | undefined;
            } | undefined;
            exclude_credentials?: {
                type: string;
                id: string;
                transports?: string[] | undefined;
            }[] | undefined;
            authenticator_selection?: {
                user_verification?: string | undefined;
                authenticator_attachment?: string | undefined;
                require_resident_key?: boolean | undefined;
                resident_key?: string | undefined;
            } | undefined;
            attestation?: string | undefined;
        };
        relying_party?: string | undefined;
    }>;
    /**
     * Begin a login flow with a passkey.
     */
    generateAuthenticationOptions(relyingParty?: string): Promise<{
        options: {
            challenge: string;
            timeout?: number | undefined;
            rp_id?: string | undefined;
            allow_credentials?: {
                type: string;
                id: string;
                transports?: string[] | undefined;
            }[] | undefined;
            user_verification?: string | undefined;
            extensions?: {
                app_id?: string | undefined;
                cred_props?: boolean | undefined;
                hmac_create_secret?: boolean | undefined;
            } | undefined;
        };
        relying_party?: string | undefined;
    }>;
    /**
     * Begin a sign up flow with a passkey.
     */
    generateSignupOptions(relyingParty?: string): Promise<{
        options: {
            user: {
                id: string;
                name: string;
                display_name: string;
            };
            challenge: string;
            rp: {
                name: string;
                id?: string | undefined;
            };
            pub_key_cred_params: {
                type: "public-key";
                alg: number;
            }[];
            timeout?: number | undefined;
            extensions?: {
                app_id?: string | undefined;
                cred_props?: {
                    rk?: boolean | undefined;
                } | undefined;
                hmac_create_secret?: boolean | undefined;
            } | undefined;
            exclude_credentials?: {
                type: string;
                id: string;
                transports?: string[] | undefined;
            }[] | undefined;
            authenticator_selection?: {
                user_verification?: string | undefined;
                authenticator_attachment?: string | undefined;
                require_resident_key?: boolean | undefined;
                resident_key?: string | undefined;
            } | undefined;
            attestation?: string | undefined;
        };
        relying_party?: string | undefined;
    }>;
    /**
     * Log a user in via a passkey.
     *
     * Does _NOT_ create a new passkey account for the current user.
     */
    loginWithPasskey(input: AuthenticationResponseJSON, challenge: string, relyingParty?: string, opts?: LoginOptions): Promise<Omit<PrivyAuthenticatedUser, 'session_update_action'>>;
    /**
     * Sign up into a new user account via a passkey.
     *
     * Creates a new user with a passkey account.
     */
    signupWithPasskey(input: RegistrationResponseJSON, relyingParty?: string, opts?: LoginOptions): Promise<Omit<PrivyAuthenticatedUser, 'session_update_action'>>;
    /**
     * Links a passkey to an existing user.
     *
     * Creates a new passkey account for the current user.
     */
    linkWithPasskey(input: RegistrationResponseJSON, relyingParty?: string): Promise<PrivyUser>;
    private _transformRegistrationResponseToSnakeCase;
    private _transformAuthenticationResponseToSnakeCase;
}

declare class PhoneApi {
    /**
     * Sends a one time login code to a user's phone number via sms
     *
     * @param phoneNumber The phone number to send the one time login code
     * @param token A CAPTCHA token
     */
    sendCode(phoneNumber: string, token?: string): Promise<_privy_io_public_api.PrivySuccessObject>;
    /**
     * Logs a user in via a phone number and one time code
     *
     * @param phoneNumber The phone number that the one time code was sent to
     * @param code The one time code
     * @param mode Optional Whether or not to block sign ups (only allow existing users to log in).
     */
    loginWithCode(phoneNumber: string, code: string, mode?: 'login-or-sign-up' | 'no-signup', opts?: LoginOptions): Promise<Omit<_privy_io_public_api.PrivyAuthenticatedUser, "session_update_action">>;
    /**
     * Links a phone number to an existing user
     *
     * @param phoneNumber The phone number that the one time code was sent to
     * @param code The one time code
     */
    linkWithCode(phoneNumber: string, code: string): Promise<{
        id: string;
        mfa_methods: ({
            type: "sms";
            verified_at: number;
        } | {
            type: "totp";
            verified_at: number;
        } | {
            type: "passkey";
            verified_at: number;
        })[];
        linked_accounts: ({
            type: "email";
            address: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        } | {
            type: "phone";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            phoneNumber: string;
        } | {
            type: "wallet";
            address: string;
            chain_type: "ethereum";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            chain_id?: string | undefined;
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        } | {
            type: "smart_wallet";
            address: string;
            smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        } | {
            type: "wallet";
            address: string;
            chain_type: "solana";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        } | {
            type: "farcaster";
            fid: number;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            owner_address: string;
            username?: string | undefined;
            display_name?: string | undefined;
            bio?: string | undefined;
            profile_picture?: string | undefined;
            profile_picture_url?: string | undefined;
            homepage_url?: string | undefined;
            signer_public_key?: string | undefined;
        } | {
            type: "passkey";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            credential_id: string;
            enrolled_in_mfa: boolean;
            created_with_browser?: string | undefined;
            created_with_os?: string | undefined;
            created_with_device?: string | undefined;
            authenticator_name?: string | undefined;
        } | {
            telegramUserId: string;
            firstName: string | null | undefined;
            type: "telegram";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            telegram_user_id: string;
            username?: string | null | undefined;
            first_name?: string | null | undefined;
            last_name?: string | null | undefined;
            photo_url?: string | null | undefined;
        } | {
            type: "wallet";
            address: string;
            chain_type: "ethereum";
            wallet_index: number;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "solana";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "bitcoin-segwit";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "bitcoin-taproot";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "google_oauth";
            name: string | null;
            email: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "twitter_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            profile_picture_url: string | null;
            subject: string;
        } | {
            type: "discord_oauth";
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "github_oauth";
            name: string | null;
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "linkedin_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            name?: string | undefined;
            vanity_name?: string | undefined;
        } | {
            type: "spotify_oauth";
            name: string | null;
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "instagram_oauth";
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "tiktok_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "apple_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "custom_auth";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            custom_user_id: string;
        } | {
            type: "cross_app";
            provider_app_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            embedded_wallets: {
                address: string;
            }[];
            smart_wallets: {
                address: string;
            }[];
        })[];
        created_at: number;
        has_accepted_terms: boolean;
        is_guest: boolean;
        custom_metadata?: Record<string, string | number | boolean> | undefined;
    }>;
    unlink(phoneNumber: string): Promise<{
        id: string;
        mfa_methods: ({
            type: "sms";
            verified_at: number;
        } | {
            type: "totp";
            verified_at: number;
        } | {
            type: "passkey";
            verified_at: number;
        })[];
        linked_accounts: ({
            type: "email";
            address: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        } | {
            type: "phone";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            phoneNumber: string;
        } | {
            type: "wallet";
            address: string;
            chain_type: "ethereum";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            chain_id?: string | undefined;
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        } | {
            type: "smart_wallet";
            address: string;
            smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        } | {
            type: "wallet";
            address: string;
            chain_type: "solana";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        } | {
            type: "farcaster";
            fid: number;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            owner_address: string;
            username?: string | undefined;
            display_name?: string | undefined;
            bio?: string | undefined;
            profile_picture?: string | undefined;
            profile_picture_url?: string | undefined;
            homepage_url?: string | undefined;
            signer_public_key?: string | undefined;
        } | {
            type: "passkey";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            credential_id: string;
            enrolled_in_mfa: boolean;
            created_with_browser?: string | undefined;
            created_with_os?: string | undefined;
            created_with_device?: string | undefined;
            authenticator_name?: string | undefined;
        } | {
            telegramUserId: string;
            firstName: string | null | undefined;
            type: "telegram";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            telegram_user_id: string;
            username?: string | null | undefined;
            first_name?: string | null | undefined;
            last_name?: string | null | undefined;
            photo_url?: string | null | undefined;
        } | {
            type: "wallet";
            address: string;
            chain_type: "ethereum";
            wallet_index: number;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "solana";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "bitcoin-segwit";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "bitcoin-taproot";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "google_oauth";
            name: string | null;
            email: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "twitter_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            profile_picture_url: string | null;
            subject: string;
        } | {
            type: "discord_oauth";
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "github_oauth";
            name: string | null;
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "linkedin_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            name?: string | undefined;
            vanity_name?: string | undefined;
        } | {
            type: "spotify_oauth";
            name: string | null;
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "instagram_oauth";
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "tiktok_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "apple_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "custom_auth";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            custom_user_id: string;
        } | {
            type: "cross_app";
            provider_app_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            embedded_wallets: {
                address: string;
            }[];
            smart_wallets: {
                address: string;
            }[];
        })[];
        created_at: number;
        has_accepted_terms: boolean;
        is_guest: boolean;
        custom_metadata?: Record<string, string | number | boolean> | undefined;
    }>;
}

type PrivyEmbeddedWalletProvider = EmbeddedWalletProvider;
type PrivyEmbeddedSolanaWalletProvider = EmbeddedSolanaWalletProvider;

type LogLevel = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
declare const EMBEDDED_WALLET_CLIENT_TYPES: readonly ["privy"];
type EmbeddedWalletClientType = (typeof EMBEDDED_WALLET_CLIENT_TYPES)[number];
declare const INJECTED_WALLET_CLIENT_TYPES: readonly ["metamask", "phantom", "brave_wallet", "rainbow"];
type InjectedWalletClientType = (typeof INJECTED_WALLET_CLIENT_TYPES)[number];
declare const COINBASE_WALLET_CLIENT_TYPES: readonly ["coinbase_wallet"];
type CoinbaseWalletClientType = (typeof COINBASE_WALLET_CLIENT_TYPES)[number];
type WalletConnectWalletClientType = (typeof WALLET_CONNECT_WALLET_CLIENT_TYPES)[number];
declare const UNKNOWN_WALLET_CLIENT_TYPES: readonly ["unknown"];
type UnknownWalletClientType = (typeof UNKNOWN_WALLET_CLIENT_TYPES)[number];
declare const ALL_WALLET_CLIENT_TYPES: ("unknown" | "privy" | "safe" | "metamask" | "phantom" | "brave_wallet" | "rainbow" | "coinbase_wallet" | "trust" | "uniswap" | "zerion" | "argent" | "spot" | "omni" | "cryptocom" | "blockchain" | "safepal" | "bitkeep" | "zengo" | "1inch" | "binance" | "exodus" | "mew_wallet" | "alphawallet" | "keyring_pro" | "mathwallet" | "unstoppable" | "obvious" | "ambire" | "internet_money_wallet" | "coin98" | "abc_wallet" | "arculus_wallet" | "haha" | "cling_wallet" | "broearn" | "copiosa" | "burrito_wallet" | "enjin_wallet" | "plasma_wallet" | "avacus" | "bee" | "pitaka" | "pltwallet" | "minerva" | "kryptogo" | "prema" | "slingshot" | "kriptonio" | "timeless" | "secux" | "bitizen" | "blocto" | "safemoon")[];
type WalletClientType = InjectedWalletClientType | CoinbaseWalletClientType | WalletConnectWalletClientType | EmbeddedWalletClientType | UnknownWalletClientType;
declare const SUPPORTED_CONNECTOR_TYPES: readonly ["injected", "wallet_connect", "wallet_connect_v2", "coinbase_wallet", "embedded"];
type ConnectorType = (typeof SUPPORTED_CONNECTOR_TYPES)[number];
type WalletBranding = {
    /** The display name for the wallet. */
    name: string;
    /** Unique identifier for this wallet, can be RDNS or other unique data. */
    id: string;
    /** Wallet brand icon url. */
    icon?: string;
};
type ExternalWalletMetadata = {
    /** The wallet name (e.g. MetaMask). */
    name: string;
    /** The wallet RDNS, falls back to the wallet name if none is available. */
    id: string;
    /** The wallet logo */
    icon?: string;
};
/**
 * Wallet to request a [Sign-In With Ethereum](https://eips.ethereum.org/EIPS/eip-4361) signature from
 */
type ExternalWallet = {
    /** [EIP-55](https://eips.ethereum.org/EIPS/eip-55) mixed-case checksum-encoded address */
    address: string;
    /** [EIP-155](https://eips.ethereum.org/EIPS/eip-155) Chain ID with [CAIP-2](https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-2.md) formatting */
    chainId: string;
    /**
     * The wallet client where this key-pair is stored.
     * e.g. `metamask`, `rainbow`, `coinbase_wallet`, etc.
     */
    walletClientType?: WalletClientType;
    /**
     * The connector used to initiate the connection with the wallet client.
     * e.g. `injected`, `wallet_connect`, `coinbase_wallet`, etc.
     */
    connectorType?: ConnectorType;
    meta?: ExternalWalletMetadata;
};

/**
 * [Sign-In With Ethereum](https://eips.ethereum.org/EIPS/eip-4361) auth flow.
 *
 * Privy's backend is able to issue access tokens using the [Sign-In With Ethereum](https://eips.ethereum.org/EIPS/eip-4361) spec.
 * This enables developers to use Privy for reading/writing user *without* hosting their own backend to handle authentication. A big win for reducing operational complexity!
 */
declare class SiweApi {
    /**
     * Unlink a wallet account from a user. Note that you can only unlink a wallet account if the user has at least one other account.
     *
     * @returns The user object.
     */
    unlinkWallet(
    /**
     * The address of the wallet to be unlinked
     */
    address: string): Promise<PrivyUser>;
    /**
     * Link a new wallet via the [Sign-In With Ethereum](https://eips.ethereum.org/EIPS/eip-4361) spec.
     *
     * @returns The user object.
     */
    linkWithSiwe(
    /**
     * Signature generated against standard [Sign-In With Ethereum](https://eips.ethereum.org/EIPS/eip-4361) message
     */
    signature: string, 
    /**
     * Optional `ExternalWallet`, only needed if the wallet differs from the one cached during previous call to `generateMessage`
     */
    walletOverride?: ExternalWallet, 
    /**
     * Optional [Sign-In With Ethereum](https://eips.ethereum.org/EIPS/eip-4361) message, only needed if the message differs from the one in memory that was cached in previous call to `generateMessage`
     */
    messageOverride?: string): Promise<PrivyUser>;
    /**
     * Authenticate with Privy via the [Sign-In With Ethereum](https://eips.ethereum.org/EIPS/eip-4361) spec.
     *
     * @returns Session information.
     */
    loginWithSiwe(
    /**
     * Signature generated against standard [Sign-In With Ethereum](https://eips.ethereum.org/EIPS/eip-4361) message
     */
    signature: string, 
    /**
     * Optional `ExternalWallet`, only needed if the wallet differs from the one cached during previous call to `generateMessage`
     */
    walletOverride?: ExternalWallet, 
    /**
     * Optional [Sign-In With Ethereum](https://eips.ethereum.org/EIPS/eip-4361) message, only needed if the message differs from the one in memory that was cached in previous call to `generateMessage`
     */
    messageOverride?: string, 
    /**
     * Optional Whether or not to block sign ups (only allow existing users to log in).
     */
    mode?: 'login-or-sign-up' | 'no-signup', opts?: LoginOptions): Promise<Omit<PrivyAuthenticatedUser, 'session_update_action'>>;
    /**
     * Begin a login or link flow according to the [Sign-In With Ethereum](https://eips.ethereum.org/EIPS/eip-4361) spec.
     *
     * @returns [EIP-4361](https://eips.ethereum.org/EIPS/eip-4361) message and nonce used to create it
     */
    init(
    /** Wallet to request a [Sign-In With Ethereum](https://eips.ethereum.org/EIPS/eip-4361) signature from */
    wallet: ExternalWallet, 
    /** [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) authority that is requesting the signing */
    domain: string, 
    /** [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) URI referring to the resource that is the subject of the signing */
    uri: string): Promise<{
        nonce: string;
        message: string;
    }>;
}

/**
 * [Sign-In With Ethereum](https://eips.ethereum.org/EIPS/eip-4361) auth flow.
 *
 * Privy's backend is able to issue access tokens using the [Sign-In With Ethereum](https://eips.ethereum.org/EIPS/eip-4361) spec.
 * This enables developers to use Privy for reading/writing user *without* hosting their own backend to handle authentication. A big win for reducing operational complexity!
 */
declare class SmartWalletApi {
    /**
     * Link a smart wallet via the [Sign-In With Ethereum](https://eips.ethereum.org/EIPS/eip-4361) spec.
     *
     * @returns The user object.
     */
    link(
    /**
     * Signature generated against standard [Sign-In With Ethereum](https://eips.ethereum.org/EIPS/eip-4361) message
     */
    message: string, signature: string, smartWalletType: SmartWalletType): Promise<PrivyUser>;
    /**
     * Begin a link flow according to the [Sign-In With Ethereum](https://eips.ethereum.org/EIPS/eip-4361) spec for
     * a smart wallet.
     *
     * @returns [EIP-4361](https://eips.ethereum.org/EIPS/eip-4361) message and nonce used to create it
     */
    init(
    /** Wallet to request a [Sign-In With Ethereum](https://eips.ethereum.org/EIPS/eip-4361) signature from */
    wallet: {
        address: string;
        chainId: string;
    }): Promise<{
        nonce: string;
        message: string;
    }>;
}

declare class AuthApi {
    /**
     * APIs for login with a custom JWT
     */
    readonly customProvider: CustomProviderApi;
    /**
     * APIs for passwordless login with sms
     */
    readonly phone: PhoneApi;
    /**
     * APIs for passwordless login with email
     */
    readonly email: EmailApi;
    /**
     * APIs for login with OAuth
     */
    readonly oauth: OAuthApi;
    /**
     * APIs for login with wallets
     */
    readonly siwe: SiweApi;
    /**
     * APIs for linking smart wallets
     */
    readonly smartWallet: SmartWalletApi;
    /**
     * APIs for login with Passkeys
     */
    readonly passkey: PasskeyApi;
    /**
     * APIs for login with Farcaster
     */
    readonly farcaster: FarcasterApi;
    /**
     * @experimental
     * APIs for bare metal login with Farcaster
     */
    readonly farcasterV2: FarcasterV2Api;
    /**
     * APIs for guest login
     */
    readonly guest: GuestApi;
    /**
     * Logs the current user out.
     */
    logout(): Promise<void>;
}

declare class CoinbaseOnRampApi {
    /**
     * Creates a new on-ramp session in coinbase.
     * @returns the session information for this on-ramp flow
     */
    initOnRampSession(args: CoinbaseOnRampInitInput): Promise<_privy_io_public_api.PrivyCoinbaseOnRampInitResponse>;
    /**
     * Fetch the status of a Coinbase on-ramp flow
     */
    getStatus(partnerUserId: string): Promise<_privy_io_public_api.PrivyCoinbaseOnRampStatusResponse>;
}

/**
 * Funding method type.
 */
type FundingMethod = 'card' | 'payment-request' | 'exchange' | 'wallets' | 'manual';
/**
 * Funding provider type.
 */
type FundingProvider = 'coinbase' | 'moonpay';
/**
 * Payment option type.
 */
type PaymentOption = {
    method: FundingMethod;
    provider: FundingProvider;
};

type MoonpayTransactionStatusWithoutFailures = 'pending' | 'waitingAuthorization' | 'completed';
type MoonpayTransactionStatus = MoonpayTransactionStatusWithoutFailures | 'failed' | 'serviceFailure';
/**
 * Cryptocurrency codes for the MoonPay fiat on-ramp. These codes
 * follow the format {TOKEN_NAME}_{NETWORK_NAME}.
 */
type MoonpayCurrencyCode = 'AVAX_CCHAIN' | 'CELO_CELO' | 'CUSD_CELO' | 'DAI_ETHEREUM' | 'ETH_ETHEREUM' | 'ETH_ARBITRUM' | 'ETH_POLYGON' | 'ETH_BASE' | 'FIL_FVM' | 'MATIC_ETHEREUM' | 'MATIC_POLYGON' | 'USDC_ETHEREUM' | 'USDC_ARBITRUM' | 'USDC_OPTIMISM' | 'USDC_POLYGON' | 'USDC_BASE' | 'USDT_ETHEREUM' | 'USDT_POLYGON' | 'WETH_POLYGON' | 'WBTC_ETHEREUM' | 'BNB_BNB' | 'BNB_BSC' | 'SOL';
type MoonpayTransactionStatusResponse = {
    status?: MoonpayTransactionStatus;
    paymentMethod?: string;
    cardPaymentType?: string;
    currency?: {
        code: string;
    };
    baseCurrencyAmount?: string;
    quoteCurrencyAmount?: string;
    feeAmount?: string;
    extraFeeAmount?: string;
    networkFeeAmount?: string;
    getValidQuote?: {
        quoteCurrencyAmount?: number;
    };
};
declare function isSupportedChainIdForMoonpay(chainId: number, asset: 'native-currency' | 'USDC'): boolean;
/**
 * Maps the privy chain to the moonpay currency. We currently only support ETH, which is hardcoded here.
 * When we support multiple tokens, they will need to be taken into account as input here.
 */
declare function chainToMoonpayCurrency(chainId: number, asset: 'native-currency' | 'USDC'): MoonpayCurrencyCode;
declare function fundingMethodToMoonpayPaymentMethod(method: FundingMethod): PrivyMoonpayOnRampSignInput['config']['paymentMethod'];

declare class MoonpayOnRampApi {
    /**
     * Sign Moonpay OnRamp arguments for a new flow
     */
    sign(args: PrivyMoonpayOnRampSignInput): Promise<{
        signedUrl: string;
        externalTransactionId: string;
    }>;
    /**
     * Fetch the status of a Moonpay transaction
     * @param transactionId
     * @param useSandbox
     * @returns
     */
    getTransactionStatus({ transactionId, useSandbox, }: {
        transactionId: string;
        useSandbox: boolean;
    }): Promise<MoonpayTransactionStatusResponse | undefined>;
}

declare class FundingApi {
    /**
     * API for Moonpay On-ramp
     */
    readonly moonpay: MoonpayOnRampApi;
    /**
     * API for Coinbase On-ramp
     */
    readonly coinbase: CoinbaseOnRampApi;
}

declare class MfaPasskeyApi {
    /**
     * Initiate Passkey MFA flow
     */
    generateAuthenticationOptions(args: MfaPasskeyInitInputType): Promise<{
        options: {
            challenge: string;
            timeout?: number | undefined;
            rp_id?: string | undefined;
            allow_credentials?: {
                type: string;
                id: string;
                transports?: string[] | undefined;
            }[] | undefined;
            user_verification?: string | undefined;
            extensions?: {
                app_id?: string | undefined;
                cred_props?: boolean | undefined;
                hmac_create_secret?: boolean | undefined;
            } | undefined;
        };
        relying_party?: string | undefined;
    }>;
}

declare class MfaSmsApi {
    /**
     * Initiate SMS MFA flow
     */
    sendCode(args: MfaSmsInitInputType): Promise<_privy_io_public_api.PrivySuccessObject>;
}

type InitMfaEnrollmentParams = {
    method: 'sms';
    phoneNumber: string;
} | {
    method: 'totp';
};
type SubmitMfaEnrollmentParams = {
    method: 'sms';
    code: string;
    phoneNumber: string;
} | {
    method: 'totp';
    code: string;
} | {
    method: 'passkey';
    credentialIds: string[];
};
declare class MfaApi {
    /**
     * API for SMS MFA
     */
    readonly sms: MfaSmsApi;
    /**
     * API for Passkey MFA
     */
    readonly passkey: MfaPasskeyApi;
    /**
     * Sends privy:mfa:verify event to the embedded wallet iframe. If MFA is required, the proxy will emit an
     * event through the MfaApi instance.
     */
    verifyMfa(): Promise<MfaVerifyResponseDataType>;
    /**
     * Sends privy:mfa:init-enrollment event to the embedded wallet iframe. If MFA is required, the proxy will emit an
     * event through the MfaApi instance.
     */
    initEnrollMfa(args: InitMfaEnrollmentParams): Promise<MfaInitEnrollmentResponseDataType>;
    /**
     * Sends privy:mfa:submit-enrollment event to the embedded wallet iframe. If MFA is required, the proxy will emit an
     * event through the MfaApi instance.
     */
    submitEnrollMfa(args: SubmitMfaEnrollmentParams): Promise<MfaSubmitEnrollmentResponseDataType>;
    /**
     * Sends privy:mfa:unenroll event to the embedded wallet iframe. If MFA is required, the proxy will emit an
     * event through the MfaApi instance.
     */
    unenrollMfa(method: 'sms' | 'totp'): Promise<MfaUnenrollResponseDataType>;
    /**
     * Sends privy:mfa:clear event to the embedded wallet iframe.
     */
    clearMfa(args: {
        userId: string;
    }): Promise<MfaClearResponseDataType>;
}

declare class RecoveryICloudApi {
    /**
     * Starts a Recovery iCloud flow
     *
     * @param provider The OAuth provider
     * @param redirectURI The URL to redirect to after a successful OAuth flow
     */
    init(client_type: 'web' | 'expo-ios'): Promise<_privy_io_public_api.PrivyOAuthInitResponse>;
    /**
     * Pulls the iCloud configuration for recovery
     *
     * @param client_type The querying client (web | expo-ios)
     */
    getICloudConfiguration(client_type: 'web' | 'expo-ios'): Promise<_privy_io_public_api.PrivyRecoveryConfigurationICloudResponse>;
}

declare class RecoveryOAuthApi {
    /**
     * Starts a Recovery OAuth flow with a specific provider
     *
     * @param provider The OAuth provider
     * @param redirectURI The URL to redirect to after a successful OAuth flow
     */
    generateURL(redirectURI: string): Promise<_privy_io_public_api.PrivyOAuthInitResponse>;
    /**
     * Completes the recovery OAuth login flow for user
     *
     * @param authorizationCode The code generated by the authorization server
     * @param returnedStateCode The state value initially set in the request by Privy to the authorization server
     */
    authorize(authorizationCode: string, returnedStateCode: string): Promise<_privy_io_public_api.PrivyOAuthAuthenticateRecoveryResponse>;
}

declare class RecoveryApi {
    /**
     * APIs for recovery auth with OAuth
     */
    readonly auth: RecoveryOAuthApi;
    /**
     * APIs for recovery auth with iCloud
     */
    readonly icloudAuth: RecoveryICloudApi;
    /**
     * Pulls the recovery material
     *
     * @param address The embedded wallet's address
     * @param chain_type The chain_type to fetch the recovery material for
     */
    getRecoveryKeyMaterial(address: string, chain_type?: string): Promise<_privy_io_public_api.PrivyRecoveryKeyMaterialResponse>;
}

/**
 * `PrivyOptions` to setup the `Privy` SDK
 */
type PrivyOptions = {
    /** The `Storage` instance to be used */
    storage: Storage;
    /** The application ID */
    appId: string;
    /** The client ID */
    clientId?: string;
    /** A reference the the embedded wallet iframe content window */
    embeddedWalletMessagePoster?: EmbeddedWalletMessagePoster;
    /**
     * A list of supported chains, used to specify which chains should be used throughout the application.
     * **Overrides the default list of supported chains.** Calling `sendTransaction` or `switchChain` on
     * an unsupported network will throw an error.
     *
     * For embedded wallets, the wallet will automatically default to the first supplied `supportedChain`.
     *
     * Defaults to:
     * - mainnet
     * - goerli
     * - sepolia
     * - arbitrum
     * - arbitrumGoerli
     * - optimism
     * - optimismGoerli
     * - polygon
     * - polygonMumbai
     * - celo
     * - celoAlfajores
     * - filecoin
     * - filecoinCalibration
     * - base
     * - baseGoerli
     * - linea
     * - lineaTestnet
     * - avalanche
     * - avalancheFuji
     * - holesky
     * - redstoneHolesky
     */
    supportedChains?: NonEmptyArray<Chain>;
};
/**
 * Privy API Client SDK
 */
declare class Privy {
    /**
     * APIs for interacting with a user's embedded wallet
     */
    readonly auth: AuthApi;
    /**
     * APIs for fetching user data
     */
    readonly user: UserApi;
    /**
     * APIs for interacting with a user's embedded wallet
     */
    readonly embeddedWallet: EmbeddedWalletApi;
    /**
     * APIs for recovery auth with OAuth
     */
    readonly recovery: RecoveryApi;
    /**
     * APIs for MFA auth
     */
    readonly mfa: MfaApi;
    /**
     * APIs for App configurations
     */
    readonly app: AppApi;
    /**
     * Promises for MFA flows
     */
    readonly mfaPromises: MfaPromises;
    /**
     * APIs for Funding
     */
    readonly funding: FundingApi;
    /**
     * APIs for Wallet Delegated Actions
     */
    readonly delegated: DelegatedWalletsApi;
    /**
     * APIs for Cross App Connections
     */
    readonly crossApp: CrossAppApi;
    /** Create a new `Privy` Client */
    constructor({ clientId, ...o }: PrivyOptions);
    /**
     * Initialize the SDK
     *
     * @returns void
     * @throws if there are errors
     */
    initialize(): Promise<void>;
    setMessagePoster(poster: EmbeddedWalletMessagePoster): void;
    getAccessToken(): Promise<string | null>;
    getIdentityToken(): Promise<string | null>;
}

declare class LocalStorage implements Storage {
    get(key: string): Promise<any>;
    put(key: string, val: unknown): void;
    del(key: string): void;
    getKeys(): string[];
}

declare class InMemoryCache implements Storage {
    private _cache;
    get(key: string): unknown;
    put(key: string, val: unknown): void;
    del(key: string): void;
    getKeys(): string[];
}

/**
 * @description Finds the embedded wallet account (if it exists) for a given user.
 *
 * @param user A privy user object
 *
 * @returns The user's embedded wallet account
 *
 * @example
 * const account = getUserEmbeddedWallet(user)
 * console.log(account.address)
 */
declare const getUserEmbeddedEthereumWallet: (user: PrivyUser | null) => PrivyEthereumEmbeddedWalletAccount | null;
/**
 * @deprecated use `getUserEmbeddedEthereumWallet` instead
 */
declare const getUserEmbeddedWallet: (user: PrivyUser | null) => PrivyEthereumEmbeddedWalletAccount | null;

/**
 * @description Finds all of the embedded ethereum wallet accounts for a user.
 *
 * @param user A privy user object
 *
 * @returns The user's embedded ethereum wallet accounts, sorted by wallet_index.
 *
 * @example
 * const accounts = getAllUserEmbeddedEthereumWallet(user)
 */
declare const getAllUserEmbeddedEthereumWallets: (user: PrivyUser | null) => PrivyEthereumEmbeddedWalletAccount[];

/**
 * @description Finds all of the embedded Solana wallet accounts for a user.
 *
 * @param user A privy user object
 *
 * @returns The user's embedded Solana wallet accounts, sorted by wallet_index.
 *
 * @example
 * const accounts = getAllUserEmbeddedSolanaWallet(user)
 */
declare const getAllUserEmbeddedSolanaWallets: (user: PrivyUser | null) => PrivySolanaEmbeddedWalletAccount[];

/**
 * @description Finds all of the embedded Bitcoin wallet accounts for a user.
 *
 * @param user A privy user object
 *
 * @returns The user's embedded Bitcoin wallet accounts, sorted by wallet_index.
 *
 * @example
 * const accounts = getAllUserEmbeddedBitcoinWallets(user)
 */
declare const getAllUserEmbeddedBitcoinWallets: (user: PrivyUser | null) => (PrivyBitcoinSegwitEmbeddedWalletAccount$1 | PrivyBitcoinTaprootEmbeddedWalletAccount$1)[];

/**
 * Get the entropyId and entropyIdVerifier given a privy user.
 *
 * NOTE: this utility will return the details for non-imported embedded wallets.
 *
 * @param user the privy user
 *
 * @returns the correct entropy ID and entropy ID verifier for the account
 */
declare const getEntropyDetailsFromUser: (user: PrivyUser | null) => {
    entropyId: string;
    entropyIdVerifier: EntropyIdVerifier;
} | null;

/**
 * Get the entropyId and entropyIdVerifier given an Ethereum or Solana account.
 *
 * @param account the embedded wallet account
 *
 * @returns the correct entropy ID and entropy ID verifier for the account
 */
declare const getEntropyDetailsFromAccount: (account: PrivyEthereumEmbeddedWalletAccount | PrivySolanaEmbeddedWalletAccount) => {
    entropyId: string;
    entropyIdVerifier: EntropyIdVerifier;
};

/**
 * @description Finds the embedded smart wallet account for a given user.
 *
 * @param user A privy user object
 *
 * @returns The user's smart wallet account
 *
 * @example
 * const account = getUserSmartWallet(user)
 */
declare const getUserSmartWallet: (user: PrivyUser | null) => PrivySmartWalletAccount | null;

/**
 * Build a JSON RPC endpoint for a given chainId if it is one of our
 * supported chains.
 */
declare const getJsonRpcEndpointFromChain: (chain: Chain, rpcConfig: RpcConfig, privyAppId: string) => string;
/**
 * This method takes the `UnsignedTransactionRequestWithChainId` provided by the app
 * and ensures that the following parameters are set, or at least defaulted by Privy;
 * `from`, `chainId`, `nonce`, `gasLimit`, `type`, `gasPrice` OR `maxFeePerGas`.
 * These values must be set before sending the transaction to the network.
 *
 * This method will NOT throw an error if the user does not have sufficient funds
 * to cover gas costs - that must be explicitly checked elsewhere with `getAndCheckBalance`.
 *
 * @param address {string} wallet address sending the transaction
 * @param txRequest {UnsignedTransactionRequestWithChainId} the transaction request from the app
 * @param provider {StaticJsonRpcProvider} a provider connected to the chain of the transaction
 * @returns {UnsignedTransactionRequestWithChainId} the transaction request with the necessary defaults set
 */
declare function populateTransactionRequest(address: string, txRequest: UnsignedTransactionRequestWithChainId, provider: StaticJsonRpcProvider): Promise<PreparedTransactionRequest>;
/**
 * Ensure that the recovery upgrade path is valid.
 *
 * @param currentRecoveryType The existing wallet's recovery type
 * @param upgradeToRecoveryType The desired recovery type
 */
declare function throwIfInvalidRecoveryUpgradePath({ currentRecoveryMethod, upgradeToRecoveryMethod, }: {
    currentRecoveryMethod: EmbeddedWalletRecoveryOptions;
    upgradeToRecoveryMethod: IEmbeddedWalletRecoveryOptions;
}): boolean;

/**
 * Do a lightweight validation of phone number. We'll do much heavier validation
 * on the backend, so this just needs to be sensible. This hints a default country
 * code of the US/+1, but will work for international numbers, provided they give
 * the country code in the number (ie +49 123123123).
 */
declare const validatePhoneNumber: (phoneNumber: string, countryCode: CountryCode) => boolean;
declare const formatPhoneNumber: (phoneNumber: string, countryCode: CountryCode) => string;
declare const lastFourDigits: (phoneNumber: string) => string;
declare const phoneNumberTypingFormatter: (countryCode: CountryCode) => AsYouType;
declare const countryCodesAndNumbers: {
    code: CountryCode;
    callCode: libphonenumber_js_min.CountryCallingCode;
}[];
declare const getPlaceholderPhoneNumber: (countryCode: CountryCode) => string | undefined;
declare const getPhoneCountryCodeAndNumber: (phoneNumber: string) => {
    countryCode: CountryCode;
    phone: string;
};

/**
 * @description Finds the primary (HD index = 0) embedded Solana wallet account for a given user.
 *
 * @param user A privy user object
 *
 * @returns The user's primary embedded Solana wallet account
 *
 * @example
 * const account = getUserEmbeddedSolanaWallet(user)
 */
declare const getUserEmbeddedSolanaWallet: (user: PrivyUser | null) => PrivySolanaEmbeddedWalletAccount | null;

/**
 * Given an array, convert it into an object with a supplied value per key
 */
declare const toObjectKeys: <TArray extends Array<string>, TValue = true>(array: TArray, value?: TValue) => Record<TArray[number], TValue>;

/**
 * Calculate the total estimated gas cost from the transaction request. This method assumes
 * the transaction has already been processed by Privy's `populateTransactionRequest` and that
 * both a `gasLimit` and one of the `gasPrice` or `maxFeePerGas` have been set.
 *
 * If the transaction is on an OP Stack chain, this method will include the L1 execution fee in the returned
 * `totalGasEstimate` and will also return the execution fee as a separate `l1ExecutionFeeEstimate`. For
 * non-OP Stack chains, the `l1ExecutionFeeEstimate` will be 0.
 *
 * @param txRequest {UnsignedTransactionRequest} the transaction request for which to total estimated gas for
 * @param provider {StaticJsonRpcProvider} ethers provider
 * @returns the `totalGasEstimate` and `l1ExecutionFeeEstimate`
 */
declare function calculateTotalGasEstimate(txRequest: UnsignedTransactionRequestWithChainId, provider: StaticJsonRpcProvider): Promise<{
    totalGasEstimate: BigNumber;
    l1ExecutionFeeEstimate: BigNumber;
}>;

declare const QuantityToBigNumber: (quantity: Quantity) => BigNumber;
declare function convertBigNumberish(value: BigNumberish): string | number | bigint;
declare function toEthersUnsignedTransaction(txRequest: UnsignedTransactionRequest): UnsignedTransaction;

declare const UsdcAddressMap: Record<number, Hex>;
/**
 * Helper function to determine if a token address is one of our known USDC addresses
 *
 * @param address {string} token address
 * @param chain {Chain} chain where token lives
 * @returns {boolean}
 */
declare function getIsTokenUsdc(address: string, chain: Chain): boolean;

declare const ASSET_ID_MAP: {
    readonly USDC: "2b92315d-eab7-5bef-84fa-089a131333f5";
    readonly ETH: "d85dce9b-5b73-5c3c-8978-522ce1d1c1b4";
    readonly BTC: "5b71fc48-3dd3-540c-809b-f8c94d0e68b5";
    readonly SOL: "4f039497-3af8-5bb3-951c-6df9afa9be1c";
    readonly POL: "026bcc1e-9163-591c-a709-34dd18b2e7a1";
};
type CoinbaseAssetId = keyof typeof ASSET_ID_MAP;
type SupportedBlockchains = PrivyCoinbaseOnRampInitInput['addresses'][0]['blockchains'][0];
declare function getCoinbaseOnRampUrl({ input, amount, blockchain, asset, experience, }: {
    input: PrivyCoinbaseOnRampInitResponse;
    amount: string;
    blockchain: SupportedBlockchains;
    asset: CoinbaseAssetId;
    experience: 'buy' | 'send';
}): {
    url: URL;
};
declare const isSupportedChainIdForCoinbaseOnramp: (chainId: number, asset: "native-currency" | "USDC") => boolean;
/**
 * Returns the Coinbase blockchain name given a chain ID. Currently unsupported chains
 * include: solana, bitcoin, avachain, stellar
 */
declare function toCoinbaseBlockchainFromChainId(chainId: number): SupportedBlockchains | undefined;
declare function toCoinbaseAssetId(chainId: number, asset: 'USDC' | 'native-currency'): CoinbaseAssetId;

type Cluster = 'devnet' | 'testnet' | 'mainnet-beta';
type SolanaCluster = {
    /**
     * The network name
     * Refer to {@link https://solana-labs.github.io/solana-web3.js/types/Cluster.html Cluster} for more information
     * */
    name: Cluster;
    /** The RPC endpoint */
    rpcUrl?: string;
};

declare class SolanaClient {
    cluster: SolanaCluster & {
        rpcUrl: string;
    };
    constructor(cluster: SolanaCluster & {
        rpcUrl: string;
    });
    private invokeRpc;
    getBalance(address: string): Promise<bigint | null>;
    getTokenAccountsByOwner(address: string, mintAddress: string): Promise<{
        amount: bigint;
        decimals: number;
    } | null>;
    getAccountInfo(address: string): Promise<{
        decimals: number;
    } | null>;
}

declare function getSolanaRpcEndpointForCluster({ name, rpcUrl }: SolanaCluster): string;

declare function getSolanaUsdcMintAddressForCluster({ name }: SolanaCluster): "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" | "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU";

/**
 * Get the display name for a Solana cluster. This is used in the UI to show the cluster name.
 * Users don't know/care what mainnet-beta is, they just want to see "Solana".
 * "Testnet" and "Devnet" are meant for devs, they will know what it means (hopefully)
 *
 * @param name The cluster name
 */
declare function getSolanaClusterDisplayName(name: Cluster): "Solana" | "Testnet" | "Devnet";

/**
 * Formats a wallet address by showing the first 5 characters, followed by an ellipsis,
 * and then the last 4 characters.
 * @param address
 */
declare function formatWalletAddress(address: string | undefined): string;
/**
 * Converts a wei value into a native currency price, given the token symbol of the native
 * currency. Returns a string with the native currency price of the wei value, rounded to 3
 * decimals.
 */
declare function formatWeiAmount({ wei, precision }: {
    wei: bigint;
    precision?: number;
}): string;
/**
 * Format token amount with a given number of decimal.
 */
declare function formatTokenAmount({ amount, decimals }: {
    amount: bigint | number;
    decimals: number;
}): string;
/**
 * Format a Solana amount in lamports.
 */
declare function formatLamportsAmount({ lamports }: {
    lamports: bigint;
}): string;

interface DelegateWalletInput {
    /** address of the wallet to delegate */
    address: string;
    /** chain type for the wallet to delegate */
    chainType: 'solana' | 'ethereum';
}
/**
 * Delegates access to the wallet to allow an app to transact on behalf of a user within a set of
 * pre-defined permissions.
 *
 * Users should be visible prompted for it, and always given the option to decline or revoke
 * delegation.
 *
 * @param address {string} address of the wallet to delegate
 * @param chainType {'solana' | 'ethereum'} chain type for the wallet to delegate
 */
declare const delegateWallet: (client: Privy) => ({ address, chainType }: DelegateWalletInput) => Promise<{
    user: {
        id: string;
        mfa_methods: ({
            type: "sms";
            verified_at: number;
        } | {
            type: "totp";
            verified_at: number;
        } | {
            type: "passkey";
            verified_at: number;
        })[];
        linked_accounts: ({
            type: "email";
            address: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        } | {
            type: "phone";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            phoneNumber: string;
        } | {
            type: "wallet";
            address: string;
            chain_type: "ethereum";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            chain_id?: string | undefined;
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        } | {
            type: "smart_wallet";
            address: string;
            smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        } | {
            type: "wallet";
            address: string;
            chain_type: "solana";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        } | {
            type: "farcaster";
            fid: number;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            owner_address: string;
            username?: string | undefined;
            display_name?: string | undefined;
            bio?: string | undefined;
            profile_picture?: string | undefined;
            profile_picture_url?: string | undefined;
            homepage_url?: string | undefined;
            signer_public_key?: string | undefined;
        } | {
            type: "passkey";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            credential_id: string;
            enrolled_in_mfa: boolean;
            created_with_browser?: string | undefined;
            created_with_os?: string | undefined;
            created_with_device?: string | undefined;
            authenticator_name?: string | undefined;
        } | {
            telegramUserId: string;
            firstName: string | null | undefined;
            type: "telegram";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            telegram_user_id: string;
            username?: string | null | undefined;
            first_name?: string | null | undefined;
            last_name?: string | null | undefined;
            photo_url?: string | null | undefined;
        } | {
            type: "wallet";
            address: string;
            chain_type: "ethereum";
            wallet_index: number;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "solana";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "bitcoin-segwit";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "bitcoin-taproot";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "google_oauth";
            name: string | null;
            email: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "twitter_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            profile_picture_url: string | null;
            subject: string;
        } | {
            type: "discord_oauth";
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "github_oauth";
            name: string | null;
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "linkedin_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            name?: string | undefined;
            vanity_name?: string | undefined;
        } | {
            type: "spotify_oauth";
            name: string | null;
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "instagram_oauth";
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "tiktok_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "apple_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "custom_auth";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            custom_user_id: string;
        } | {
            type: "cross_app";
            provider_app_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            embedded_wallets: {
                address: string;
            }[];
            smart_wallets: {
                address: string;
            }[];
        })[];
        created_at: number;
        has_accepted_terms: boolean;
        is_guest: boolean;
        custom_metadata?: Record<string, string | number | boolean> | undefined;
    };
}>;

/**
 * Revokes the wallet API's ability to transact with a user's delegated wallets. This will revoke
 * ALL wallets that have been delegated by the user, in case the user has delegated multiple
 * embedded wallets.
 *
 * @returns Promise that resolves if the revocation was successful, with the updated user object,
 * and errors otherwise
 */
declare const revokeWallets: (client: Privy) => () => Promise<{
    user: {
        id: string;
        mfa_methods: ({
            type: "sms";
            verified_at: number;
        } | {
            type: "totp";
            verified_at: number;
        } | {
            type: "passkey";
            verified_at: number;
        })[];
        linked_accounts: ({
            type: "email";
            address: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        } | {
            type: "phone";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            phoneNumber: string;
        } | {
            type: "wallet";
            address: string;
            chain_type: "ethereum";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            chain_id?: string | undefined;
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        } | {
            type: "smart_wallet";
            address: string;
            smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        } | {
            type: "wallet";
            address: string;
            chain_type: "solana";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        } | {
            type: "farcaster";
            fid: number;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            owner_address: string;
            username?: string | undefined;
            display_name?: string | undefined;
            bio?: string | undefined;
            profile_picture?: string | undefined;
            profile_picture_url?: string | undefined;
            homepage_url?: string | undefined;
            signer_public_key?: string | undefined;
        } | {
            type: "passkey";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            credential_id: string;
            enrolled_in_mfa: boolean;
            created_with_browser?: string | undefined;
            created_with_os?: string | undefined;
            created_with_device?: string | undefined;
            authenticator_name?: string | undefined;
        } | {
            telegramUserId: string;
            firstName: string | null | undefined;
            type: "telegram";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            telegram_user_id: string;
            username?: string | null | undefined;
            first_name?: string | null | undefined;
            last_name?: string | null | undefined;
            photo_url?: string | null | undefined;
        } | {
            type: "wallet";
            address: string;
            chain_type: "ethereum";
            wallet_index: number;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "solana";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "bitcoin-segwit";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "wallet";
            address: string;
            chain_type: "bitcoin-taproot";
            wallet_index: number;
            public_key: string;
            chain_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "privy";
            wallet_client_type: "privy";
            connector_type: "embedded";
            imported: boolean;
            delegated: boolean;
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        } | {
            type: "google_oauth";
            name: string | null;
            email: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "twitter_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            profile_picture_url: string | null;
            subject: string;
        } | {
            type: "discord_oauth";
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "github_oauth";
            name: string | null;
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "linkedin_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            name?: string | undefined;
            vanity_name?: string | undefined;
        } | {
            type: "spotify_oauth";
            name: string | null;
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "instagram_oauth";
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "tiktok_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "apple_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        } | {
            type: "custom_auth";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            custom_user_id: string;
        } | {
            type: "cross_app";
            provider_app_id: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            embedded_wallets: {
                address: string;
            }[];
            smart_wallets: {
                address: string;
            }[];
        })[];
        created_at: number;
        has_accepted_terms: boolean;
        is_guest: boolean;
        custom_metadata?: Record<string, string | number | boolean> | undefined;
    };
}>;

declare const index$1_delegateWallet: typeof delegateWallet;
declare const index$1_revokeWallets: typeof revokeWallets;
declare namespace index$1 {
  export { index$1_delegateWallet as delegateWallet, index$1_revokeWallets as revokeWallets };
}

interface LoginWithCrossAppAuthDependencies {
    client: Privy;
    openAuthSession: (url: string) => Promise<Record<string, string>>;
}
interface LoginWithCrossAppAuthInput {
    providerAppId: string;
    redirectUrl: string;
}
type LoginWithCrossAppAuthOutput = Omit<PrivyAuthenticatedUser, 'session_update_action'>;
/**
 * Logs a user into your app through an account on **another Privy app**.
 *
 * @param options.providerAppId the Privy app ID to which the external account should belong.
 * @param options.redirectUrl a URL path used to redirect back to your app after successful authentication
 * @returns a promise that resolves with the new session
 */
declare const loginWithCrossAppAuth: ({ client, openAuthSession }: LoginWithCrossAppAuthDependencies) => ({ providerAppId, redirectUrl, }: LoginWithCrossAppAuthInput) => Promise<LoginWithCrossAppAuthOutput>;

interface LinkWithCrossAppAuthDependencies {
    client: Privy;
    openAuthSession: (url: string) => Promise<Record<string, string>>;
}
interface LinkWithCrossAppAuthInput {
    providerAppId: string;
    redirectUrl: string;
}
type LinkWithCrossAppAuthOutput = PrivyUser;
/**
 * Links an account on **another Privy app** to the currently logged-in user in your app.
 *
 * @param options.providerAppId the Privy app ID from which the external account should be linked
 * @param options.redirectUrl a URL path used to redirect back to your app after successful authentication
 * @returns a promise that resolves with the user object
 */
declare const linkWithCrossAppAuth: ({ client, openAuthSession }: LinkWithCrossAppAuthDependencies) => ({ providerAppId, redirectUrl, }: LinkWithCrossAppAuthInput) => Promise<LinkWithCrossAppAuthOutput>;

type index_LinkWithCrossAppAuthDependencies = LinkWithCrossAppAuthDependencies;
type index_LinkWithCrossAppAuthInput = LinkWithCrossAppAuthInput;
type index_LinkWithCrossAppAuthOutput = LinkWithCrossAppAuthOutput;
type index_LoginWithCrossAppAuthDependencies = LoginWithCrossAppAuthDependencies;
type index_LoginWithCrossAppAuthInput = LoginWithCrossAppAuthInput;
type index_LoginWithCrossAppAuthOutput = LoginWithCrossAppAuthOutput;
declare const index_linkWithCrossAppAuth: typeof linkWithCrossAppAuth;
declare const index_loginWithCrossAppAuth: typeof loginWithCrossAppAuth;
declare namespace index {
  export { type index_LinkWithCrossAppAuthDependencies as LinkWithCrossAppAuthDependencies, type index_LinkWithCrossAppAuthInput as LinkWithCrossAppAuthInput, type index_LinkWithCrossAppAuthOutput as LinkWithCrossAppAuthOutput, type index_LoginWithCrossAppAuthDependencies as LoginWithCrossAppAuthDependencies, type index_LoginWithCrossAppAuthInput as LoginWithCrossAppAuthInput, type index_LoginWithCrossAppAuthOutput as LoginWithCrossAppAuthOutput, index_linkWithCrossAppAuth as linkWithCrossAppAuth, index_loginWithCrossAppAuth as loginWithCrossAppAuth };
}

export { ALL_WALLET_CLIENT_TYPES, type Chain, type Cluster, type CoinbaseAssetId, type CoinbaseWalletClientType, type ConnectorType, DEFAULT_SUPPORTED_CHAINS, DEFAULT_SUPPORTED_CHAIN_IDS, type EIP1193Provider, EmbeddedBitcoinWalletProvider, EmbeddedProviderError, type EmbeddedWalletClientType, type EmbeddedWalletConfig, type EmbeddedWalletRecoveryOptions, type EntropyIdVerifier, type ErrorMessageMap, type ExternalWallet, type ExternalWalletMetadata, type FundingMethod, type FundingProvider, InMemoryCache, type InjectedWalletClientType, LocalStorage, type LogLevel, type MfaMethod, type MfaPromise, type MfaSubmitArgs, type MfaSubmitPromise, MoonpayApiError, type MoonpayTransactionStatus, type MoonpayTransactionStatusResponse, type PaymentOption, type PreparedTransactionRequest, PrivyApiError, PrivyClientError, PrivyConnectorError, type PrivyEmbeddedSolanaWalletProvider, PrivyEmbeddedWalletErrorCode, type PrivyEmbeddedWalletProvider, PrivyProviderRpcError, ProviderErrors, type Quantity, QuantityToBigNumber, type RpcConfig, SUPPORTED_CONNECTOR_TYPES, type SetRecoveryInput, SolanaClient, type SolanaCluster, type Storage, type Unit, type UnknownWalletClientType, type UnsignedTransactionRequest, type UnsignedTransactionRequestWithChainId, UsdcAddressMap, type WalletBranding, type WalletClientType, type WalletConnectWalletClientType, calculateTotalGasEstimate, chainDefs, chainToMoonpayCurrency, convertBigNumberish, countryCodesAndNumbers, createErrorFormatter, index as crossApp, Privy as default, index$1 as delegatedActions, errorIndicatesMaxMfaRetries, errorIndicatesMfaCanceled, errorIndicatesMfaRateLimit, errorIndicatesMfaTimeout, errorIndicatesMfaVerificationFailed, errorIndicatesRecoveryIsNeeded, formatLamportsAmount, formatPhoneNumber, formatTokenAmount, formatWalletAddress, formatWeiAmount, fundingMethodToMoonpayPaymentMethod, getAllUserEmbeddedBitcoinWallets, getAllUserEmbeddedEthereumWallets, getAllUserEmbeddedSolanaWallets, getCoinbaseOnRampUrl, getEntropyDetailsFromAccount, getEntropyDetailsFromUser, getIsTokenUsdc, getJsonRpcEndpointFromChain, getPhoneCountryCodeAndNumber, getPlaceholderPhoneNumber, getSolanaClusterDisplayName, getSolanaRpcEndpointForCluster, getSolanaUsdcMintAddressForCluster, getSupportedChainById, getUserEmbeddedEthereumWallet, getUserEmbeddedSolanaWallet, getUserEmbeddedWallet, getUserSmartWallet, isSupportedChainIdForCoinbaseOnramp, isSupportedChainIdForMoonpay, lastFourDigits, phoneNumberTypingFormatter, populateTransactionRequest, throwIfInvalidRecoveryUpgradePath, toCoinbaseAssetId, toCoinbaseBlockchainFromChainId, toEthersUnsignedTransaction, toObjectKeys, validatePhoneNumber };
