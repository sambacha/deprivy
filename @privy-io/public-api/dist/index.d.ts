import { z } from "zod";
export const AnalyticsEventInput: z.ZodObject<{
    event_name: z.ZodString;
    client_id: z.ZodNullable<z.ZodString>;
    payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    event_name: string;
    client_id: string | null;
    payload?: Record<string, any> | undefined;
}, {
    event_name: string;
    client_id: string | null;
    payload?: Record<string, any> | undefined;
}>;
export interface PrivyAnalyticsEventInput extends z.infer<typeof AnalyticsEventInput> {
}
/**
 * Parses a user ID string, removes the 'did:privy:'
 * prefix, and returns it.
 *
 * Throws an error if no such key is found or the object
 * is not a valid, non-empty string.
 */
export const UserId: z.ZodEffects<z.ZodString, string, string>;
/**
 * Parses a string and checks that it is a valid email address.
 *
 * Transforms email to lowercase both the handle and domain, regardless
 * of the casing entered by the user
 *
 * Throws an error if the input is not a string or is
 * not a valid email
 */
export const Email: z.ZodEffects<z.ZodString, string, string>;
/**
 * Parses a verification code and checks that it is a valid string of length 6.
 */
export const PasswordlessCode: z.ZodString;
/**
 * Parses a string, checks that it is a valid Ethereum address,
 * and returns a normalized address that is checksummed per
 * EIP-55.
 *
 * See https://zod.dev/?id=validating-during-transform for how to do custom
 * validation and transformation on inputs.
 *
 * Throws an error if the input is not a string or is not a valid
 * Ethereum address.
 */
export const WalletAddress: z.ZodEffects<z.ZodString, string, string>;
/**
 * Parses a string, checks that it is a valid Solana address,
 *
 * Throws an error if the input is not a string or is not a valid
 * Solana address.
 */
export const SolanaWalletAddress: z.ZodEffects<z.ZodString, string, string>;
/**
 * Parses a phone number string and returns a normalized version.
 * Currently only accepts U.S. phone numbers.
 *
 * Throws an error if input is not a string or not a valid US
 * phone number.
 */
export const PhoneNumber: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
/**
 * Accepts a phone number in various formats and outputs in E.164 format, or
 * if a phone number could not be parsed - returns `undefined`
 */
export function normalizePhoneNumber(inputPhoneNumber: string): string | undefined;
/**
 * Check if the address is an EIP-55 or ICAP address.
 */
export function isValidAddress(address: string | null | undefined): boolean;
/**
 * Get the normalized EIP-55 address with checksum (case-sensitive address).
 * This is a thin pass-through to the ethers util and also supports ICAP address
 * conversion.
 *
 * @param address EIP-55 or ICAP address
 * @returns EIP-55 checksummed address
 */
export function normalizeEthereumAddress(address: string | null | undefined): string | undefined;
/**
 * For use with authenticate endpoints - if signup is disallowed, calls
 * to the /authenticate endpoint will fail if the user does not already exist.
 */
export const AuthenticateMode: z.ZodObject<{
    mode: z.ZodOptional<z.ZodEnum<["no-signup", "login-or-sign-up"]>>;
}, "strip", z.ZodTypeAny, {
    mode?: "no-signup" | "login-or-sign-up" | undefined;
}, {
    mode?: "no-signup" | "login-or-sign-up" | undefined;
}>;
/**
 * Parses a JSON representation of a URL's path variables
 * for the `account_id`
 *
 * Throws an error if the `account_id` is not defined
 * or is not a valid, non-empty string.
 */
export const AccountIdFromPath: z.ZodObject<{
    account_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    account_id: string;
}, {
    account_id: string;
}>;
/**
 * Parses a JSON representation of a URL's path variables
 * for the `app_id`
 *
 * Throws an error if the `app_id` is not defined
 * or is not a valid, non-empty string.
 */
export const AppIdFromPath: z.ZodCatch<z.ZodEffects<z.ZodObject<{
    app_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    app_id: string;
}, {
    app_id: string;
}>, {
    app_id: string;
    appId: string;
}, {
    app_id: string;
}>>;
/**
 * Parse `cursor` and `limit` for paginating lists of results
 */
export const Pagination: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    limit: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    cursor?: string | undefined;
    limit?: number | undefined;
}, {
    cursor?: string | undefined;
    limit?: number | undefined;
}>;
declare const SUPPORTED_CHAIN_TYPES: readonly ["evm", "solana"];
export type SupportedChainType = (typeof SUPPORTED_CHAIN_TYPES)[number];
export const Currency: z.ZodObject<{
    /**
     * CAIP-2 formatted chain ID
     * Resource: https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-2.md
     */
    chain: z.ZodString;
    asset: z.ZodOptional<z.ZodEnum<["native-currency", "USDC"]>>;
}, "strip", z.ZodTypeAny, {
    chain: string;
    asset?: "native-currency" | "USDC" | undefined;
}, {
    chain: string;
    asset?: "native-currency" | "USDC" | undefined;
}>;
/**
 * Utility type that takes an object type and makes the hover overlay more readable.
 *
 * [Learn more](https://www.totaltypescript.com/concepts/the-prettify-helper)
 */
type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
export const EmbeddedWalletConfigSchema: z.ZodObject<{
    /**
     * Whether to create embedded wallets on login. Note that this still requires distinct API
     * calls, rather than the server creating one on the /authenticate call.
     *
     * Default: 'users-without-wallets'
     *
     * Overridable from client.
     */
    create_on_login: z.ZodEnum<["users-without-wallets", "all-users", "off"]>;
    /**
     * Will be one or more of `user-passcode` | `google-drive` | `icloud`
     * - all enabled methods other than `password` require prior configuration
     */
    user_owned_recovery_options: z.ZodArray<z.ZodEnum<["user-passcode", "google-drive", "icloud"]>, "many">;
    /**
     * If true, this will prompt the user use one of the enabled recovery methods
     * to secure the recovery share of their embedded wallet.
     *
     * Otherwise (the default), Privy will secure the recovery share, and the embedded wallet
     * will be created without showing any UIs to the user.
     *
     * Overridable from client.
     */
    require_user_owned_recovery_on_create: z.ZodOptional<z.ZodBoolean>;
    /**
     * @deprecated use `require_user_owned_recovery_on_create`
     *
     * If true, this will prompt the user to enter a password to secure the recovery share of
     * their embedded wallet.
     *
     * Otherwise (the default), Privy will secure the recovery share, and the embedded wallet
     * will be created without showing any UIs to the user.
     *
     * Overridable from client.
     */
    require_user_password_on_create: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    create_on_login: "users-without-wallets" | "all-users" | "off";
    user_owned_recovery_options: ("user-passcode" | "google-drive" | "icloud")[];
    require_user_owned_recovery_on_create?: boolean | undefined;
    require_user_password_on_create?: boolean | undefined;
}, {
    create_on_login: "users-without-wallets" | "all-users" | "off";
    user_owned_recovery_options: ("user-passcode" | "google-drive" | "icloud")[];
    require_user_owned_recovery_on_create?: boolean | undefined;
    require_user_password_on_create?: boolean | undefined;
}>;
export type EmbeddedWalletConfig = Prettify<z.infer<typeof EmbeddedWalletConfigSchema>>;
export const TelegramAuthConfigSchema: z.ZodObject<{
    bot_id: z.ZodString;
    bot_name: z.ZodString;
    link_enabled: z.ZodBoolean;
    seamless_auth_enabled: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    bot_id: string;
    bot_name: string;
    link_enabled: boolean;
    seamless_auth_enabled: boolean;
}, {
    bot_id: string;
    bot_name: string;
    link_enabled: boolean;
    seamless_auth_enabled: boolean;
}>;
export const FundingMethodEnum: z.ZodEnum<["moonpay", "coinbase-onramp", "external"]>;
export const FundingMethodArraySchema: z.ZodArray<z.ZodEnum<["moonpay", "coinbase-onramp", "external"]>, "many">;
export type FundingMethod = z.infer<typeof FundingMethodEnum>;
export const FundingConfigResponseSchema: z.ZodObject<{
    default_recommended_currency: z.ZodObject<{
        chain: z.ZodString;
        asset: z.ZodOptional<z.ZodEnum<["native-currency", "USDC"]>>;
    }, "strip", z.ZodTypeAny, {
        chain: string;
        asset?: "native-currency" | "USDC" | undefined;
    }, {
        chain: string;
        asset?: "native-currency" | "USDC" | undefined;
    }>;
    default_recommended_amount: z.ZodString;
    methods: z.ZodArray<z.ZodEnum<["moonpay", "coinbase-onramp", "external"]>, "many">;
    options: z.ZodArray<z.ZodObject<{
        method: z.ZodString;
        provider: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        method: string;
        provider: string;
    }, {
        method: string;
        provider: string;
    }>, "many">;
    prompt_funding_on_wallet_creation: z.ZodBoolean;
    cross_chain_bridging_enabled: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>;
export type FundingConfig = Prettify<z.infer<typeof FundingConfigResponseSchema>>;
export const AppResponseSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    logo_url: z.ZodNullable<z.ZodString>;
    icon_url: z.ZodNullable<z.ZodString>;
    terms_and_conditions_url: z.ZodNullable<z.ZodString>;
    privacy_policy_url: z.ZodNullable<z.ZodString>;
    require_users_accept_terms: z.ZodNullable<z.ZodBoolean>;
    theme: z.ZodString;
    accent_color: z.ZodNullable<z.ZodString>;
    show_wallet_login_first: z.ZodBoolean;
    allowed_domains: z.ZodArray<z.ZodString, "many">;
    allowed_native_app_ids: z.ZodArray<z.ZodString, "many">;
    allowed_native_app_url_schemes: z.ZodArray<z.ZodString, "many">;
    wallet_auth: z.ZodBoolean;
    email_auth: z.ZodBoolean;
    sms_auth: z.ZodBoolean;
    google_oauth: z.ZodBoolean;
    twitter_oauth: z.ZodBoolean;
    discord_oauth: z.ZodBoolean;
    github_oauth: z.ZodBoolean;
    spotify_oauth: z.ZodBoolean;
    instagram_oauth: z.ZodBoolean;
    tiktok_oauth: z.ZodBoolean;
    linkedin_oauth: z.ZodBoolean;
    apple_oauth: z.ZodBoolean;
    farcaster_auth: z.ZodBoolean;
    passkey_auth: z.ZodBoolean;
    passkeys_for_signup_enabled: z.ZodBoolean;
    telegram_auth: z.ZodBoolean;
    guest_auth: z.ZodBoolean;
    solana_wallet_auth: z.ZodBoolean;
    disable_plus_emails: z.ZodBoolean;
    allowlist_enabled: z.ZodBoolean;
    allowlist_config: z.ZodObject<{
        error_title: z.ZodNullable<z.ZodString>;
        error_detail: z.ZodNullable<z.ZodString>;
        cta_text: z.ZodNullable<z.ZodString>;
        cta_link: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        error_title: string | null;
        error_detail: string | null;
        cta_text: string | null;
        cta_link: string | null;
    }, {
        error_title: string | null;
        error_detail: string | null;
        cta_text: string | null;
        cta_link: string | null;
    }>;
    wallet_connect_cloud_project_id: z.ZodNullable<z.ZodString>;
    custom_api_url: z.ZodNullable<z.ZodString>;
    embedded_wallet_config: z.ZodObject<{
        create_on_login: z.ZodEnum<["users-without-wallets", "all-users", "off"]>;
        user_owned_recovery_options: z.ZodArray<z.ZodEnum<["user-passcode", "google-drive", "icloud"]>, "many">;
        require_user_owned_recovery_on_create: z.ZodOptional<z.ZodBoolean>;
        require_user_password_on_create: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        create_on_login: "users-without-wallets" | "all-users" | "off";
        user_owned_recovery_options: ("user-passcode" | "google-drive" | "icloud")[];
        require_user_owned_recovery_on_create?: boolean | undefined;
        require_user_password_on_create?: boolean | undefined;
    }, {
        create_on_login: "users-without-wallets" | "all-users" | "off";
        user_owned_recovery_options: ("user-passcode" | "google-drive" | "icloud")[];
        require_user_owned_recovery_on_create?: boolean | undefined;
        require_user_password_on_create?: boolean | undefined;
    }>;
    enforce_wallet_uis: z.ZodBoolean;
    legacy_wallet_ui_config: z.ZodBoolean;
    fiat_on_ramp_enabled: z.ZodBoolean;
    captcha_enabled: z.ZodBoolean;
    twitter_oauth_on_mobile_enabled: z.ZodBoolean;
    mfa_methods: z.ZodArray<z.ZodEnum<["sms", "totp", "passkey"]>, "many">;
    captcha_site_key: z.ZodOptional<z.ZodString>;
    verification_key: z.ZodString;
    telegram_auth_config: z.ZodOptional<z.ZodObject<{
        bot_id: z.ZodString;
        bot_name: z.ZodString;
        link_enabled: z.ZodBoolean;
        seamless_auth_enabled: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        bot_id: string;
        bot_name: string;
        link_enabled: boolean;
        seamless_auth_enabled: boolean;
    }, {
        bot_id: string;
        bot_name: string;
        link_enabled: boolean;
        seamless_auth_enabled: boolean;
    }>>;
    funding_config: z.ZodOptional<z.ZodObject<{
        default_recommended_currency: z.ZodObject<{
            chain: z.ZodString;
            asset: z.ZodOptional<z.ZodEnum<["native-currency", "USDC"]>>;
        }, "strip", z.ZodTypeAny, {
            chain: string;
            asset?: "native-currency" | "USDC" | undefined;
        }, {
            chain: string;
            asset?: "native-currency" | "USDC" | undefined;
        }>;
        default_recommended_amount: z.ZodString;
        methods: z.ZodArray<z.ZodEnum<["moonpay", "coinbase-onramp", "external"]>, "many">;
        options: z.ZodArray<z.ZodObject<{
            method: z.ZodString;
            provider: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            method: string;
            provider: string;
        }, {
            method: string;
            provider: string;
        }>, "many">;
        prompt_funding_on_wallet_creation: z.ZodBoolean;
        cross_chain_bridging_enabled: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>>;
    max_linked_wallets_per_user: z.ZodNullable<z.ZodNumber>;
    farcaster_link_wallets_enabled: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>;
export interface PrivyAppResponse extends z.output<typeof AppResponseSchema> {
}
export const CoinbaseOnRampInitInput: z.ZodUnion<[z.ZodObject<{
    addresses: z.ZodArray<z.ZodObject<{
        address: z.ZodEffects<z.ZodString, string, string>;
        blockchains: z.ZodArray<z.ZodEnum<["ethereum", "bitcoin", "base", "avacchain", "optimism", "solana", "polygon", "arbitrum", "stellar"]>, "many">;
    }, "strip", z.ZodTypeAny, {
        address: string;
        blockchains: ("solana" | "ethereum" | "bitcoin" | "base" | "avacchain" | "optimism" | "polygon" | "arbitrum" | "stellar")[];
    }, {
        address: string;
        blockchains: ("solana" | "ethereum" | "bitcoin" | "base" | "avacchain" | "optimism" | "polygon" | "arbitrum" | "stellar")[];
    }>, "many">;
    assets: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodEnum<["eth", "ETH", "USDC"]>, string, "USDC" | "eth" | "ETH">, "many">>;
}, "strip", z.ZodTypeAny, {
    addresses: {
        address: string;
        blockchains: ("solana" | "ethereum" | "bitcoin" | "base" | "avacchain" | "optimism" | "polygon" | "arbitrum" | "stellar")[];
    }[];
    assets?: string[] | undefined;
}, {
    addresses: {
        address: string;
        blockchains: ("solana" | "ethereum" | "bitcoin" | "base" | "avacchain" | "optimism" | "polygon" | "arbitrum" | "stellar")[];
    }[];
    assets?: ("USDC" | "eth" | "ETH")[] | undefined;
}>, z.ZodObject<{
    addresses: z.ZodArray<z.ZodObject<{
        address: z.ZodEffects<z.ZodString, string, string>;
        blockchains: z.ZodArray<z.ZodEnum<["ethereum", "bitcoin", "base", "avacchain", "optimism", "solana", "polygon", "arbitrum", "stellar"]>, "many">;
    }, "strip", z.ZodTypeAny, {
        address: string;
        blockchains: ("solana" | "ethereum" | "bitcoin" | "base" | "avacchain" | "optimism" | "polygon" | "arbitrum" | "stellar")[];
    }, {
        address: string;
        blockchains: ("solana" | "ethereum" | "bitcoin" | "base" | "avacchain" | "optimism" | "polygon" | "arbitrum" | "stellar")[];
    }>, "many">;
    assets: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodEnum<["SOL", "USDC"]>, string, "USDC" | "SOL">, "many">>;
}, "strip", z.ZodTypeAny, {
    addresses: {
        address: string;
        blockchains: ("solana" | "ethereum" | "bitcoin" | "base" | "avacchain" | "optimism" | "polygon" | "arbitrum" | "stellar")[];
    }[];
    assets?: string[] | undefined;
}, {
    addresses: {
        address: string;
        blockchains: ("solana" | "ethereum" | "bitcoin" | "base" | "avacchain" | "optimism" | "polygon" | "arbitrum" | "stellar")[];
    }[];
    assets?: ("USDC" | "SOL")[] | undefined;
}>]>;
export type CoinbaseOnRampInitInput = z.infer<typeof CoinbaseOnRampInitInput>;
export type PrivyCoinbaseOnRampInitInput = CoinbaseOnRampInitInput;
export const CoinbaseOnRampInitResponse: z.ZodObject<{
    app_id: z.ZodString;
    session_token: z.ZodString;
    channel_id: z.ZodString;
    partner_user_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    app_id: string;
    session_token: string;
    channel_id: string;
    partner_user_id: string;
}, {
    app_id: string;
    session_token: string;
    channel_id: string;
    partner_user_id: string;
}>;
export interface PrivyCoinbaseOnRampInitResponse extends z.infer<typeof CoinbaseOnRampInitResponse> {
}
export const CoinbaseOnRampStatusResponse: z.ZodObject<{
    status: z.ZodEnum<["pending", "success", "failure"]>;
}, "strip", z.ZodTypeAny, {
    status: "pending" | "success" | "failure";
}, {
    status: "pending" | "success" | "failure";
}>;
export interface PrivyCoinbaseOnRampStatusResponse extends z.infer<typeof CoinbaseOnRampStatusResponse> {
}
export const CrossAppConnectionsResponse: z.ZodObject<{
    connections: z.ZodArray<z.ZodObject<{
        provider_app_id: z.ZodString;
        provider_app_name: z.ZodString;
        provider_app_icon_url: z.ZodNullable<z.ZodString>;
        provider_app_custom_api_url: z.ZodNullable<z.ZodString>;
        read_only: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        provider_app_id: string;
        provider_app_name: string;
        provider_app_icon_url: string | null;
        provider_app_custom_api_url: string | null;
        read_only: boolean;
    }, {
        provider_app_id: string;
        provider_app_name: string;
        provider_app_icon_url: string | null;
        provider_app_custom_api_url: string | null;
        read_only: boolean;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    connections: {
        provider_app_id: string;
        provider_app_name: string;
        provider_app_icon_url: string | null;
        provider_app_custom_api_url: string | null;
        read_only: boolean;
    }[];
}, {
    connections: {
        provider_app_id: string;
        provider_app_name: string;
        provider_app_icon_url: string | null;
        provider_app_custom_api_url: string | null;
        read_only: boolean;
    }[];
}>;
export interface PrivyCrossAppConnectionsResponse extends z.infer<typeof CrossAppConnectionsResponse> {
}
export const AuthenticateJwtInput: z.ZodObject<{
    /** A JWT from the custom authentication provider */
    token: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    token?: string | undefined;
}, {
    token?: string | undefined;
}>;
export interface PrivyAuthenticateJwtInput extends z.infer<typeof AuthenticateJwtInput> {
}
export const DelegatedActionsConsentInput: z.ZodObject<{
    encrypted_tee_share: z.ZodString;
    app_share: z.ZodString;
    delegated_addresses: z.ZodArray<z.ZodObject<{
        chain_type: z.ZodUnion<[z.ZodLiteral<"solana">, z.ZodLiteral<"ethereum">]>;
        address: z.ZodString;
        wallet_index: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        address: string;
        chain_type: "solana" | "ethereum";
        wallet_index: number;
    }, {
        address: string;
        chain_type: "solana" | "ethereum";
        wallet_index?: number | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    encrypted_tee_share: string;
    app_share: string;
    delegated_addresses: {
        address: string;
        chain_type: "solana" | "ethereum";
        wallet_index: number;
    }[];
}, {
    encrypted_tee_share: string;
    app_share: string;
    delegated_addresses: {
        address: string;
        chain_type: "solana" | "ethereum";
        wallet_index?: number | undefined;
    }[];
}>;
export type DelegatedActionsConsentInput = z.infer<typeof DelegatedActionsConsentInput>;
export const WalletApiRevokeResponse: z.ZodObject<{
    /** Success message */
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
}, {
    message: string;
}>;
export type WalletApiRevokeResponseType = z.infer<typeof WalletApiRevokeResponse>;
export const VerifyEmailInput: z.ZodObject<{
    code: z.ZodString;
    email: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    code: string;
    email: string;
}, {
    code: string;
    email: string;
}>;
export interface PrivyVerifyEmailInput extends z.infer<typeof VerifyEmailInput> {
}
export const AuthenticateEmailInput: z.ZodObject<z.objectUtil.extendShape<{
    code: z.ZodString;
    email: z.ZodEffects<z.ZodString, string, string>;
}, {
    mode: z.ZodOptional<z.ZodEnum<["no-signup", "login-or-sign-up"]>>;
}>, "strip", z.ZodTypeAny, {
    code: string;
    email: string;
    mode?: "no-signup" | "login-or-sign-up" | undefined;
}, {
    code: string;
    email: string;
    mode?: "no-signup" | "login-or-sign-up" | undefined;
}>;
export interface PrivyAuthenticateEmailInput extends z.infer<typeof AuthenticateEmailInput> {
}
export const InitEmailInput: z.ZodObject<{
    email: z.ZodEffects<z.ZodString, string, string>;
    token: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    token?: string | undefined;
}, {
    email: string;
    token?: string | undefined;
}>;
export interface PrivyInitEmailInput extends z.infer<typeof InitEmailInput> {
}
export const UnlinkEmailInput: z.ZodObject<{
    address: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    address: string;
}, {
    address: string;
}>;
export interface PrivyUnlinkEmailInput extends z.infer<typeof UnlinkEmailInput> {
}
export const UpdateEmailInput: z.ZodObject<{
    oldAddress: z.ZodEffects<z.ZodString, string, string>;
    newAddress: z.ZodEffects<z.ZodString, string, string>;
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
    oldAddress: string;
    newAddress: string;
}, {
    code: string;
    oldAddress: string;
    newAddress: string;
}>;
export interface PrivyUpdateEmailInput extends z.infer<typeof UpdateEmailInput> {
}
export const TransferEmailInput: z.ZodObject<z.objectUtil.extendShape<{
    nonce: z.ZodString;
}, {
    email: z.ZodEffects<z.ZodString, string, string>;
}>, "strip", z.ZodTypeAny, {
    nonce: string;
    email: string;
}, {
    nonce: string;
    email: string;
}>;
export interface PrivyTransferEmailInput extends z.infer<typeof TransferEmailInput> {
}
export const JsonWebKey: z.ZodObject<{
    kty: z.ZodString;
    use: z.ZodOptional<z.ZodEnum<["sig", "enc"]>>;
    key_ops: z.ZodOptional<z.ZodArray<z.ZodEnum<["sign", "verify", "encrypt", "decrypt", "wrapKey", "unwrapKey", "deriveKey", "deriveBits"]>, "many">>;
    alg: z.ZodEnum<["RS256", "ES256"]>;
    kid: z.ZodOptional<z.ZodString>;
    x5u: z.ZodOptional<z.ZodString>;
    x5c: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    x5t: z.ZodOptional<z.ZodString>;
    'x5t#S256': z.ZodOptional<z.ZodString>;
    n: z.ZodOptional<z.ZodString>;
    e: z.ZodOptional<z.ZodString>;
    d: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    kty: string;
    alg: "RS256" | "ES256";
    use?: "sig" | "enc" | undefined;
    key_ops?: ("sign" | "verify" | "encrypt" | "decrypt" | "wrapKey" | "unwrapKey" | "deriveKey" | "deriveBits")[] | undefined;
    kid?: string | undefined;
    x5u?: string | undefined;
    x5c?: string[] | undefined;
    x5t?: string | undefined;
    'x5t#S256'?: string | undefined;
    n?: string | undefined;
    e?: string | undefined;
    d?: string | undefined;
}, {
    kty: string;
    alg: "RS256" | "ES256";
    use?: "sig" | "enc" | undefined;
    key_ops?: ("sign" | "verify" | "encrypt" | "decrypt" | "wrapKey" | "unwrapKey" | "deriveKey" | "deriveBits")[] | undefined;
    kid?: string | undefined;
    x5u?: string | undefined;
    x5c?: string[] | undefined;
    x5t?: string | undefined;
    'x5t#S256'?: string | undefined;
    n?: string | undefined;
    e?: string | undefined;
    d?: string | undefined;
}>;
export const JsonWebKeySet: z.ZodObject<{
    keys: z.ZodArray<z.ZodObject<{
        kty: z.ZodString;
        use: z.ZodOptional<z.ZodEnum<["sig", "enc"]>>;
        key_ops: z.ZodOptional<z.ZodArray<z.ZodEnum<["sign", "verify", "encrypt", "decrypt", "wrapKey", "unwrapKey", "deriveKey", "deriveBits"]>, "many">>;
        alg: z.ZodEnum<["RS256", "ES256"]>;
        kid: z.ZodOptional<z.ZodString>;
        x5u: z.ZodOptional<z.ZodString>;
        x5c: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        x5t: z.ZodOptional<z.ZodString>;
        'x5t#S256': z.ZodOptional<z.ZodString>;
        n: z.ZodOptional<z.ZodString>;
        e: z.ZodOptional<z.ZodString>;
        d: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        kty: string;
        alg: "RS256" | "ES256";
        use?: "sig" | "enc" | undefined;
        key_ops?: ("sign" | "verify" | "encrypt" | "decrypt" | "wrapKey" | "unwrapKey" | "deriveKey" | "deriveBits")[] | undefined;
        kid?: string | undefined;
        x5u?: string | undefined;
        x5c?: string[] | undefined;
        x5t?: string | undefined;
        'x5t#S256'?: string | undefined;
        n?: string | undefined;
        e?: string | undefined;
        d?: string | undefined;
    }, {
        kty: string;
        alg: "RS256" | "ES256";
        use?: "sig" | "enc" | undefined;
        key_ops?: ("sign" | "verify" | "encrypt" | "decrypt" | "wrapKey" | "unwrapKey" | "deriveKey" | "deriveBits")[] | undefined;
        kid?: string | undefined;
        x5u?: string | undefined;
        x5c?: string[] | undefined;
        x5t?: string | undefined;
        'x5t#S256'?: string | undefined;
        n?: string | undefined;
        e?: string | undefined;
        d?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    keys: {
        kty: string;
        alg: "RS256" | "ES256";
        use?: "sig" | "enc" | undefined;
        key_ops?: ("sign" | "verify" | "encrypt" | "decrypt" | "wrapKey" | "unwrapKey" | "deriveKey" | "deriveBits")[] | undefined;
        kid?: string | undefined;
        x5u?: string | undefined;
        x5c?: string[] | undefined;
        x5t?: string | undefined;
        'x5t#S256'?: string | undefined;
        n?: string | undefined;
        e?: string | undefined;
        d?: string | undefined;
    }[];
}, {
    keys: {
        kty: string;
        alg: "RS256" | "ES256";
        use?: "sig" | "enc" | undefined;
        key_ops?: ("sign" | "verify" | "encrypt" | "decrypt" | "wrapKey" | "unwrapKey" | "deriveKey" | "deriveBits")[] | undefined;
        kid?: string | undefined;
        x5u?: string | undefined;
        x5c?: string[] | undefined;
        x5t?: string | undefined;
        'x5t#S256'?: string | undefined;
        n?: string | undefined;
        e?: string | undefined;
        d?: string | undefined;
    }[];
}>;
/**
 * Proxy for the Farcaster Connect init response as defined in FIP-11
 * https://github.com/farcasterxyz/protocol/discussions/110
 *
 * We use this response object for our primary init endpoint because
 * that's all the user needs to know to connect to the relay and request
 * a signature from their Farcaster app.
 */
export const FarcasterConnectInitResponse: z.ZodObject<{
    channel_token: z.ZodString;
    connect_uri: z.ZodString;
}, "strip", z.ZodTypeAny, {
    channel_token: string;
    connect_uri: string;
}, {
    channel_token: string;
    connect_uri: string;
}>;
export interface PrivyFarcasterConnectInitResponse extends z.infer<typeof FarcasterConnectInitResponse> {
}
/**
 * Proxy for the Farcaster Connect completed status response as defined in FIP-11
 * https://github.com/farcasterxyz/protocol/discussions/110
 */
export const FarcasterConnectStatusCompletedResponse: z.ZodObject<{
    state: z.ZodLiteral<"completed">;
    nonce: z.ZodString;
    message: z.ZodString;
    signature: z.ZodString;
    fid: z.ZodNumber;
    username: z.ZodString;
    display_name: z.ZodString;
    bio: z.ZodString;
    pfp_url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    nonce: string;
    state: "completed";
    signature: string;
    fid: number;
    username: string;
    display_name: string;
    bio: string;
    pfp_url: string;
}, {
    message: string;
    nonce: string;
    state: "completed";
    signature: string;
    fid: number;
    username: string;
    display_name: string;
    bio: string;
    pfp_url: string;
}>;
export interface PrivyFarcasterConnectStatusCompletedResponse extends z.infer<typeof FarcasterConnectStatusCompletedResponse> {
}
/**
 * Proxy for the Farcaster Connect pending status response as defined in FIP-11
 * https://github.com/farcasterxyz/protocol/discussions/110
 */
export const FarcasterConnectStatusPendingResponse: z.ZodObject<{
    state: z.ZodLiteral<"pending">;
    nonce: z.ZodString;
}, "strip", z.ZodTypeAny, {
    nonce: string;
    state: "pending";
}, {
    nonce: string;
    state: "pending";
}>;
export interface PrivyFarcasterConnectStatusPendingResponse extends z.infer<typeof FarcasterConnectStatusPendingResponse> {
}
export const FarcasterAuthenticateInput: z.ZodObject<z.objectUtil.extendShape<{
    channel_token: z.ZodString;
    message: z.ZodString;
    signature: z.ZodString;
    fid: z.ZodNumber;
}, {
    mode: z.ZodOptional<z.ZodEnum<["no-signup", "login-or-sign-up"]>>;
}>, "strip", z.ZodTypeAny, {
    message: string;
    channel_token: string;
    signature: string;
    fid: number;
    mode?: "no-signup" | "login-or-sign-up" | undefined;
}, {
    message: string;
    channel_token: string;
    signature: string;
    fid: number;
    mode?: "no-signup" | "login-or-sign-up" | undefined;
}>;
export interface PrivyFarcasterAuthenticateInput extends z.infer<typeof FarcasterAuthenticateInput> {
}
export const FarcasterLinkInput: z.ZodObject<{
    channel_token: z.ZodString;
    message: z.ZodString;
    signature: z.ZodString;
    fid: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    message: string;
    channel_token: string;
    signature: string;
    fid: number;
}, {
    message: string;
    channel_token: string;
    signature: string;
    fid: number;
}>;
export interface PrivyFarcasterLinkInput extends z.infer<typeof FarcasterLinkInput> {
}
export const FarcasterInitInput: z.ZodObject<{
    token: z.ZodOptional<z.ZodString>;
    redirect_url: z.ZodOptional<z.ZodString>;
    relying_party: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    token?: string | undefined;
    redirect_url?: string | undefined;
    relying_party?: string | undefined;
}, {
    token?: string | undefined;
    redirect_url?: string | undefined;
    relying_party?: string | undefined;
}>;
export interface PrivyFarcasterInitInput extends z.infer<typeof FarcasterInitInput> {
}
export const FarcasterUnlinkInput: z.ZodObject<{
    fid: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    fid: number;
}, {
    fid: number;
}>;
export interface PrivyFarcasterUnlinkInput extends z.infer<typeof FarcasterUnlinkInput> {
}
export const TransferFarcasterInput: z.ZodObject<z.objectUtil.extendShape<{
    nonce: z.ZodString;
}, {
    farcaster_id: z.ZodString;
    farcaster_embedded_address: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    nonce: string;
    farcaster_id: string;
    farcaster_embedded_address: string;
}, {
    nonce: string;
    farcaster_id: string;
    farcaster_embedded_address: string;
}>;
export interface PrivyTransferFarcasterInput extends z.infer<typeof TransferFarcasterInput> {
}
export const FarcasterV2InitInput: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export interface PrivyFarcasterV2InitInput extends z.infer<typeof FarcasterV2InitInput> {
}
export const FarcasterV2InitResponse: z.ZodObject<{
    nonce: z.ZodString;
    expires_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
    nonce: string;
    expires_at: string;
}, {
    nonce: string;
    expires_at: string;
}>;
export interface PrivyFarcasterV2InitResponse extends z.infer<typeof FarcasterV2InitResponse> {
}
export const FarcasterV2AuthenticateInput: z.ZodObject<z.objectUtil.extendShape<{
    fid: z.ZodNumber;
    message: z.ZodString;
    signature: z.ZodString;
}, {
    mode: z.ZodOptional<z.ZodEnum<["no-signup", "login-or-sign-up"]>>;
}>, "strip", z.ZodTypeAny, {
    message: string;
    signature: string;
    fid: number;
    mode?: "no-signup" | "login-or-sign-up" | undefined;
}, {
    message: string;
    signature: string;
    fid: number;
    mode?: "no-signup" | "login-or-sign-up" | undefined;
}>;
export interface PrivyFarcasterV2AuthenticateInput extends z.infer<typeof FarcasterV2AuthenticateInput> {
}
/**
 * Input to add a public key signer for a user.
 */
export const FarcasterSignerInitInput: z.ZodObject<{
    /** Must be an ed25519 key, NOT secp256k1 (ethereum native curve) */
    ed25519_public_key: z.ZodEffects<z.ZodString, string, string>;
    /**
     * The deadline for a signer request to succeed. After the deadline, the request will no longer
     * succeed. Defaults to 1 hour.
     */
    deadline: z.ZodDefault<z.ZodOptional<z.ZodBigInt>>;
}, "strip", z.ZodTypeAny, {
    ed25519_public_key: string;
    deadline: bigint;
}, {
    ed25519_public_key: string;
    deadline?: bigint | undefined;
}>;
export interface PrivyFarcasterSignerInitInput extends z.input<typeof FarcasterSignerInitInput> {
}
export const FarcasterSignerInitResponse: z.ZodDiscriminatedUnion<"status", [z.ZodObject<{
    /** The public key reflected back from the API
     * ie 0x2087e48968ca16a8954d0da041de84b66392b2821c2af42bc28aa079bcbe1dfe
     */
    public_key: z.ZodString;
    status: z.ZodLiteral<"pending_approval">;
    signer_approval_url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: "pending_approval";
    public_key: string;
    signer_approval_url: string;
}, {
    status: "pending_approval";
    public_key: string;
    signer_approval_url: string;
}>, z.ZodObject<{
    /** The public key reflected back from the API
     * ie 0x2087e48968ca16a8954d0da041de84b66392b2821c2af42bc28aa079bcbe1dfe
     */
    public_key: z.ZodString;
    status: z.ZodLiteral<"approved">;
    /** The FID of the user who approved the signer */
    fid: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    status: "approved";
    fid: bigint;
    public_key: string;
}, {
    status: "approved";
    fid: bigint;
    public_key: string;
}>, z.ZodObject<{
    /** The public key reflected back from the API
     * ie 0x2087e48968ca16a8954d0da041de84b66392b2821c2af42bc28aa079bcbe1dfe
     */
    public_key: z.ZodString;
    status: z.ZodLiteral<"revoked">;
    /** The FID of the user who approved the signer */
    fid: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    status: "revoked";
    fid: bigint;
    public_key: string;
}, {
    status: "revoked";
    fid: bigint;
    public_key: string;
}>]>;
export type PrivyFarcasterSignerInitResponse = z.output<typeof FarcasterSignerInitResponse>;
export const FarcasterSignerStatusResponse: z.ZodDiscriminatedUnion<"status", [z.ZodObject<{
    /** The public key reflected back from the API
     * ie 0x2087e48968ca16a8954d0da041de84b66392b2821c2af42bc28aa079bcbe1dfe
     */
    public_key: z.ZodString;
    status: z.ZodLiteral<"pending_approval">;
}, "strip", z.ZodTypeAny, {
    status: "pending_approval";
    public_key: string;
}, {
    status: "pending_approval";
    public_key: string;
}>, z.ZodObject<{
    /** The public key reflected back from the API
     * ie 0x2087e48968ca16a8954d0da041de84b66392b2821c2af42bc28aa079bcbe1dfe
     */
    public_key: z.ZodString;
    status: z.ZodLiteral<"approved">;
    /** The FID of the user who approved the signer */
    fid: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    status: "approved";
    fid: bigint;
    public_key: string;
}, {
    status: "approved";
    fid: bigint;
    public_key: string;
}>, z.ZodObject<{
    /** The public key reflected back from the API
     * ie 0x2087e48968ca16a8954d0da041de84b66392b2821c2af42bc28aa079bcbe1dfe
     */
    public_key: z.ZodString;
    status: z.ZodLiteral<"revoked">;
    /** The FID of the user who approved the signer */
    fid: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    status: "revoked";
    fid: bigint;
    public_key: string;
}, {
    status: "revoked";
    fid: bigint;
    public_key: string;
}>]>;
export type PrivyFarcasterSignerStatusResponse = z.output<typeof FarcasterSignerStatusResponse>;
export type PrivyFarcasterSubmitCastResponse = Record<string, any>;
export type PrivyFarcasterRemoveCastResponse = Record<string, any>;
export type PrivyFarcasterReactToCastResponse = Record<string, any>;
export type PrivyFarcasterSubmitLinkResponse = Record<string, any>;
export type PrivyFarcasterRemoveLinkResponse = Record<string, any>;
/**
 * Parses the authentication input for guest accounts.
 */
export const AuthenticateGuestInput: z.ZodObject<{
    /**
     * Locally-persisted guest secret.
     * This credential should have as much entropy as embedded wallet entropy.
     */
    guest_credential: z.ZodString;
}, "strict", z.ZodTypeAny, {
    guest_credential: string;
}, {
    guest_credential: string;
}>;
export interface PrivyAuthenticateGuestInput extends z.infer<typeof AuthenticateGuestInput> {
}
export const SAFE: "safe";
export const KERNEL: "kernel";
export const BICONOMY: "biconomy";
export const LIGHT_ACCOUNT: "light_account";
export const COINBASE_SMART_WALLET: "coinbase_smart_wallet";
export const SUPPORTED_SMART_WALLET_TYPES: readonly ["safe", "kernel", "biconomy", "light_account", "coinbase_smart_wallet"];
export type SmartWalletType = (typeof SUPPORTED_SMART_WALLET_TYPES)[number];
export const SmartWalletProvider: z.ZodEnum<["safe", "kernel", "biconomy", "light_account", "coinbase_smart_wallet"]>;
export const AlchemyPaymasterContextSchema: z.ZodObject<{
    policy_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    policy_id: string;
}, {
    policy_id: string;
}>;
export type AlchemyPaymasterContext = z.infer<typeof AlchemyPaymasterContextSchema>;
export const SmartWalletNetworkConfigurationInputSchema: z.ZodObject<{
    chain_id: z.ZodString;
    bundler_url: z.ZodOptional<z.ZodString>;
    paymaster_url: z.ZodOptional<z.ZodString>;
    rpc_url: z.ZodOptional<z.ZodString>;
    chain_name: z.ZodOptional<z.ZodString>;
    paymaster_context: z.ZodOptional<z.ZodObject<{
        policy_id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        policy_id: string;
    }, {
        policy_id: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    chain_id: string;
    bundler_url?: string | undefined;
    paymaster_url?: string | undefined;
    rpc_url?: string | undefined;
    chain_name?: string | undefined;
    paymaster_context?: {
        policy_id: string;
    } | undefined;
}, {
    chain_id: string;
    bundler_url?: string | undefined;
    paymaster_url?: string | undefined;
    rpc_url?: string | undefined;
    chain_name?: string | undefined;
    paymaster_context?: {
        policy_id: string;
    } | undefined;
}>;
export type SmartWalletNetworkConfigurationInput = Prettify<z.infer<typeof SmartWalletNetworkConfigurationInputSchema>>;
export const SmartWalletConfigurationSchema: z.ZodDiscriminatedUnion<"enabled", [z.ZodObject<{
    enabled: z.ZodLiteral<false>;
}, "strip", z.ZodTypeAny, {
    enabled: false;
}, {
    enabled: false;
}>, z.ZodObject<{
    enabled: z.ZodLiteral<true>;
    smart_wallet_type: z.ZodEnum<["safe", "kernel", "biconomy", "light_account", "coinbase_smart_wallet"]>;
    configured_networks: z.ZodArray<z.ZodObject<{
        chain_id: z.ZodString;
        bundler_url: z.ZodString;
        paymaster_url: z.ZodOptional<z.ZodString>;
        rpc_url: z.ZodOptional<z.ZodString>;
        chain_name: z.ZodOptional<z.ZodString>;
        paymaster_context: z.ZodOptional<z.ZodObject<{
            policy_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            policy_id: string;
        }, {
            policy_id: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        chain_id: string;
        bundler_url: string;
        paymaster_url?: string | undefined;
        rpc_url?: string | undefined;
        chain_name?: string | undefined;
        paymaster_context?: {
            policy_id: string;
        } | undefined;
    }, {
        chain_id: string;
        bundler_url: string;
        paymaster_url?: string | undefined;
        rpc_url?: string | undefined;
        chain_name?: string | undefined;
        paymaster_context?: {
            policy_id: string;
        } | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    enabled: true;
    smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
    configured_networks: {
        chain_id: string;
        bundler_url: string;
        paymaster_url?: string | undefined;
        rpc_url?: string | undefined;
        chain_name?: string | undefined;
        paymaster_context?: {
            policy_id: string;
        } | undefined;
    }[];
}, {
    enabled: true;
    smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
    configured_networks: {
        chain_id: string;
        bundler_url: string;
        paymaster_url?: string | undefined;
        rpc_url?: string | undefined;
        chain_name?: string | undefined;
        paymaster_context?: {
            policy_id: string;
        } | undefined;
    }[];
}>]>;
export const SmartWalletConfigurationInputSchema: z.ZodDiscriminatedUnion<"enabled", [z.ZodObject<{
    enabled: z.ZodLiteral<false>;
}, "strip", z.ZodTypeAny, {
    enabled: false;
}, {
    enabled: false;
}>, z.ZodObject<{
    enabled: z.ZodLiteral<true>;
    smart_wallet_type: z.ZodEnum<["safe", "kernel", "biconomy", "light_account", "coinbase_smart_wallet"]>;
    configured_networks: z.ZodArray<z.ZodObject<{
        chain_id: z.ZodString;
        bundler_url: z.ZodOptional<z.ZodString>;
        paymaster_url: z.ZodOptional<z.ZodString>;
        rpc_url: z.ZodOptional<z.ZodString>;
        chain_name: z.ZodOptional<z.ZodString>;
        paymaster_context: z.ZodOptional<z.ZodObject<{
            policy_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            policy_id: string;
        }, {
            policy_id: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        chain_id: string;
        bundler_url?: string | undefined;
        paymaster_url?: string | undefined;
        rpc_url?: string | undefined;
        chain_name?: string | undefined;
        paymaster_context?: {
            policy_id: string;
        } | undefined;
    }, {
        chain_id: string;
        bundler_url?: string | undefined;
        paymaster_url?: string | undefined;
        rpc_url?: string | undefined;
        chain_name?: string | undefined;
        paymaster_context?: {
            policy_id: string;
        } | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    enabled: true;
    smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
    configured_networks: {
        chain_id: string;
        bundler_url?: string | undefined;
        paymaster_url?: string | undefined;
        rpc_url?: string | undefined;
        chain_name?: string | undefined;
        paymaster_context?: {
            policy_id: string;
        } | undefined;
    }[];
}, {
    enabled: true;
    smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
    configured_networks: {
        chain_id: string;
        bundler_url?: string | undefined;
        paymaster_url?: string | undefined;
        rpc_url?: string | undefined;
        chain_name?: string | undefined;
        paymaster_context?: {
            policy_id: string;
        } | undefined;
    }[];
}>]>;
export const SmartWalletConfigurationResponseSchema: z.ZodDiscriminatedUnion<"enabled", [z.ZodObject<{
    enabled: z.ZodLiteral<false>;
}, "strip", z.ZodTypeAny, {
    enabled: false;
}, {
    enabled: false;
}>, z.ZodObject<{
    enabled: z.ZodLiteral<true>;
    smart_wallet_type: z.ZodEnum<["safe", "kernel", "biconomy", "light_account", "coinbase_smart_wallet"]>;
    configured_networks: z.ZodArray<z.ZodObject<{
        chain_id: z.ZodString;
        bundler_url: z.ZodString;
        paymaster_url: z.ZodOptional<z.ZodString>;
        rpc_url: z.ZodOptional<z.ZodString>;
        chain_name: z.ZodOptional<z.ZodString>;
        paymaster_context: z.ZodOptional<z.ZodObject<{
            policy_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            policy_id: string;
        }, {
            policy_id: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        chain_id: string;
        bundler_url: string;
        paymaster_url?: string | undefined;
        rpc_url?: string | undefined;
        chain_name?: string | undefined;
        paymaster_context?: {
            policy_id: string;
        } | undefined;
    }, {
        chain_id: string;
        bundler_url: string;
        paymaster_url?: string | undefined;
        rpc_url?: string | undefined;
        chain_name?: string | undefined;
        paymaster_context?: {
            policy_id: string;
        } | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    enabled: true;
    smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
    configured_networks: {
        chain_id: string;
        bundler_url: string;
        paymaster_url?: string | undefined;
        rpc_url?: string | undefined;
        chain_name?: string | undefined;
        paymaster_context?: {
            policy_id: string;
        } | undefined;
    }[];
}, {
    enabled: true;
    smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
    configured_networks: {
        chain_id: string;
        bundler_url: string;
        paymaster_url?: string | undefined;
        rpc_url?: string | undefined;
        chain_name?: string | undefined;
        paymaster_context?: {
            policy_id: string;
        } | undefined;
    }[];
}>]>;
export type PrivySmartWalletConfigurationInput = Prettify<z.infer<typeof SmartWalletConfigurationInputSchema>>;
export type PrivySmartWalletConfigurationResponse = Prettify<z.infer<typeof SmartWalletConfigurationResponseSchema>>;
export const EmailAccount: z.ZodObject<{
    type: z.ZodLiteral<"email">;
    address: z.ZodString;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "email";
    address: string;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}, {
    type: "email";
    address: string;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}>;
export interface PrivyEmailAccount extends z.infer<typeof EmailAccount> {
}
export const PhoneAccount: z.ZodObject<{
    type: z.ZodLiteral<"phone">;
    phoneNumber: z.ZodString;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "phone";
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    phoneNumber: string;
}, {
    type: "phone";
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    phoneNumber: string;
}>;
export interface PrivyPhoneAccount extends z.infer<typeof PhoneAccount> {
}
export const BaseWalletAccount: z.ZodObject<{
    type: z.ZodEnum<["wallet", "smart_wallet"]>;
    address: z.ZodString;
    chain_type: z.ZodEnum<["solana", "ethereum"]>;
}, "strip", z.ZodTypeAny, {
    type: "wallet" | "smart_wallet";
    address: string;
    chain_type: "solana" | "ethereum";
}, {
    type: "wallet" | "smart_wallet";
    address: string;
    chain_type: "solana" | "ethereum";
}>;
export interface PrivyBaseWalletAccount extends z.infer<typeof BaseWalletAccount> {
}
export const EthereumAccount: z.ZodObject<{
    type: z.ZodLiteral<"wallet">;
    address: z.ZodString;
    /**
     * @deprecated Will be removed in a future release
     */
    chain_id: z.ZodOptional<z.ZodString>;
    chain_type: z.ZodLiteral<"ethereum">;
    /**
     * @deprecated Use `wallet_client_type` instead.
     */
    wallet_client: z.ZodLiteral<"unknown">;
    wallet_client_type: z.ZodOptional<z.ZodString>;
    connector_type: z.ZodOptional<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>;
export interface PrivyEthereumAccount extends z.infer<typeof EthereumAccount> {
}
export const SmartWalletAccount: z.ZodObject<{
    type: z.ZodLiteral<"smart_wallet">;
    address: z.ZodString;
    smart_wallet_type: z.ZodEnum<["safe", "kernel", "biconomy", "light_account", "coinbase_smart_wallet"]>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "smart_wallet";
    address: string;
    smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}, {
    type: "smart_wallet";
    address: string;
    smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}>;
export interface PrivySmartWalletAccount extends z.infer<typeof SmartWalletAccount> {
}
export const SolanaAccount: z.ZodObject<{
    type: z.ZodLiteral<"wallet">;
    address: z.ZodString;
    chain_type: z.ZodLiteral<"solana">;
    /**
     * @deprecated Use `wallet_client_type` instead.
     */
    wallet_client: z.ZodLiteral<"unknown">;
    wallet_client_type: z.ZodOptional<z.ZodString>;
    connector_type: z.ZodOptional<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "wallet";
    address: string;
    chain_type: "solana";
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    wallet_client: "unknown";
    wallet_client_type?: string | undefined;
    connector_type?: string | undefined;
}, {
    type: "wallet";
    address: string;
    chain_type: "solana";
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    wallet_client: "unknown";
    wallet_client_type?: string | undefined;
    connector_type?: string | undefined;
}>;
export interface PrivySolanaAccount extends z.infer<typeof SolanaAccount> {
}
export const FarcasterAccount: z.ZodObject<{
    type: z.ZodLiteral<"farcaster">;
    fid: z.ZodNumber;
    owner_address: z.ZodEffects<z.ZodString, string, string>;
    username: z.ZodOptional<z.ZodString>;
    display_name: z.ZodOptional<z.ZodString>;
    bio: z.ZodOptional<z.ZodString>;
    profile_picture: z.ZodOptional<z.ZodString>;
    profile_picture_url: z.ZodOptional<z.ZodString>;
    homepage_url: z.ZodOptional<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
    signer_public_key: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>;
export interface PrivyFarcasterAccount extends z.infer<typeof FarcasterAccount> {
}
export const PasskeyAccount: z.ZodObject<{
    type: z.ZodLiteral<"passkey">;
    created_with_browser: z.ZodOptional<z.ZodString>;
    created_with_os: z.ZodOptional<z.ZodString>;
    created_with_device: z.ZodOptional<z.ZodString>;
    credential_id: z.ZodString;
    authenticator_name: z.ZodOptional<z.ZodString>;
    enrolled_in_mfa: z.ZodBoolean;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>;
export interface PrivyPasskeyAccount extends z.infer<typeof PasskeyAccount> {
}
export const TelegramAccount: z.ZodEffects<z.ZodObject<{
    type: z.ZodLiteral<"telegram">;
    telegram_user_id: z.ZodString;
    first_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    last_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    username: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    photo_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "telegram";
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    telegram_user_id: string;
    username?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    photo_url?: string | null | undefined;
}, {
    type: "telegram";
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    telegram_user_id: string;
    username?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    photo_url?: string | null | undefined;
}>, {
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
}, {
    type: "telegram";
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    telegram_user_id: string;
    username?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    photo_url?: string | null | undefined;
}>;
export interface PrivyTelegramAccount extends z.infer<typeof TelegramAccount> {
}
export const EthereumEmbeddedWalletAccount: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"wallet">;
    address: z.ZodString;
    imported: z.ZodDefault<z.ZodBoolean>;
    delegated: z.ZodDefault<z.ZodBoolean>;
    wallet_index: z.ZodNumber;
    /**
     * @deprecated Will be removed in a future release
     */
    chain_id: z.ZodString;
    chain_type: z.ZodString;
    /**
     * @deprecated Use `wallet_client_type` instead.
     */
    wallet_client: z.ZodLiteral<"privy">;
    wallet_client_type: z.ZodLiteral<"privy">;
    connector_type: z.ZodLiteral<"embedded">;
    recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, {
    chain_type: z.ZodLiteral<"ethereum">;
}>, "strip", z.ZodTypeAny, {
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
}, {
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
    recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
    imported?: boolean | undefined;
    delegated?: boolean | undefined;
}>;
export interface PrivyEthereumEmbeddedWalletAccount extends z.infer<typeof EthereumEmbeddedWalletAccount> {
}
export const SolanaEmbeddedWalletAccount: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"wallet">;
    address: z.ZodString;
    imported: z.ZodDefault<z.ZodBoolean>;
    delegated: z.ZodDefault<z.ZodBoolean>;
    wallet_index: z.ZodNumber;
    /**
     * @deprecated Will be removed in a future release
     */
    chain_id: z.ZodString;
    chain_type: z.ZodString;
    /**
     * @deprecated Use `wallet_client_type` instead.
     */
    wallet_client: z.ZodLiteral<"privy">;
    wallet_client_type: z.ZodLiteral<"privy">;
    connector_type: z.ZodLiteral<"embedded">;
    recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, {
    chain_type: z.ZodLiteral<"solana">;
    /** @deprecated use `address` instead. */
    public_key: z.ZodString;
}>, "strip", z.ZodTypeAny, {
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
}, {
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
    recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
    imported?: boolean | undefined;
    delegated?: boolean | undefined;
}>;
export interface PrivySolanaEmbeddedWalletAccount extends z.infer<typeof SolanaEmbeddedWalletAccount> {
}
export const BitcoinSegwitEmbeddedWalletAccount: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"wallet">;
    address: z.ZodString;
    imported: z.ZodDefault<z.ZodBoolean>;
    delegated: z.ZodDefault<z.ZodBoolean>;
    wallet_index: z.ZodNumber;
    /**
     * @deprecated Will be removed in a future release
     */
    chain_id: z.ZodString;
    chain_type: z.ZodString;
    /**
     * @deprecated Use `wallet_client_type` instead.
     */
    wallet_client: z.ZodLiteral<"privy">;
    wallet_client_type: z.ZodLiteral<"privy">;
    connector_type: z.ZodLiteral<"embedded">;
    recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, {
    chain_type: z.ZodLiteral<"bitcoin-segwit">;
    public_key: z.ZodString;
}>, "strip", z.ZodTypeAny, {
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
}, {
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
    recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
    imported?: boolean | undefined;
    delegated?: boolean | undefined;
}>;
export interface PrivyBitcoinSegwitEmbeddedWalletAccount extends z.infer<typeof BitcoinSegwitEmbeddedWalletAccount> {
}
export const BitcoinTaprootEmbeddedWalletAccount: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"wallet">;
    address: z.ZodString;
    imported: z.ZodDefault<z.ZodBoolean>;
    delegated: z.ZodDefault<z.ZodBoolean>;
    wallet_index: z.ZodNumber;
    /**
     * @deprecated Will be removed in a future release
     */
    chain_id: z.ZodString;
    chain_type: z.ZodString;
    /**
     * @deprecated Use `wallet_client_type` instead.
     */
    wallet_client: z.ZodLiteral<"privy">;
    wallet_client_type: z.ZodLiteral<"privy">;
    connector_type: z.ZodLiteral<"embedded">;
    recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, {
    chain_type: z.ZodLiteral<"bitcoin-taproot">;
    public_key: z.ZodString;
}>, "strip", z.ZodTypeAny, {
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
}, {
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
    recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
    imported?: boolean | undefined;
    delegated?: boolean | undefined;
}>;
export interface PrivyBitcoinTaprootEmbeddedWalletAccount extends z.infer<typeof BitcoinTaprootEmbeddedWalletAccount> {
}
export const GoogleOauthAccount: z.ZodObject<{
    type: z.ZodLiteral<"google_oauth">;
    subject: z.ZodString;
    email: z.ZodString;
    name: z.ZodNullable<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "google_oauth";
    name: string | null;
    email: string;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}, {
    type: "google_oauth";
    name: string | null;
    email: string;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}>;
export interface PrivyGoogleOauthAccount extends z.infer<typeof GoogleOauthAccount> {
}
export const TwitterOauthAccount: z.ZodObject<{
    type: z.ZodLiteral<"twitter_oauth">;
    subject: z.ZodString;
    username: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    profile_picture_url: z.ZodNullable<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "twitter_oauth";
    name: string | null;
    username: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    profile_picture_url: string | null;
    subject: string;
}, {
    type: "twitter_oauth";
    name: string | null;
    username: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    profile_picture_url: string | null;
    subject: string;
}>;
export interface PrivyTwitterOauthAccount extends z.infer<typeof TwitterOauthAccount> {
}
export const DiscordOauthAccount: z.ZodObject<{
    type: z.ZodLiteral<"discord_oauth">;
    subject: z.ZodString;
    username: z.ZodNullable<z.ZodString>;
    email: z.ZodNullable<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "discord_oauth";
    email: string | null;
    username: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}, {
    type: "discord_oauth";
    email: string | null;
    username: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}>;
export interface PrivyDiscordOauthAccount extends z.infer<typeof DiscordOauthAccount> {
}
export const GithubOauthAccount: z.ZodObject<{
    type: z.ZodLiteral<"github_oauth">;
    subject: z.ZodString;
    username: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    email: z.ZodNullable<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "github_oauth";
    name: string | null;
    email: string | null;
    username: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}, {
    type: "github_oauth";
    name: string | null;
    email: string | null;
    username: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}>;
export interface PrivyGithubOauthAccount extends z.infer<typeof GithubOauthAccount> {
}
export const LinkedInOauthAccount: z.ZodObject<{
    type: z.ZodLiteral<"linkedin_oauth">;
    subject: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodNullable<z.ZodString>;
    vanity_name: z.ZodOptional<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "linkedin_oauth";
    email: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
    name?: string | undefined;
    vanity_name?: string | undefined;
}, {
    type: "linkedin_oauth";
    email: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
    name?: string | undefined;
    vanity_name?: string | undefined;
}>;
export interface PrivyLinkedInOauthAccount extends z.infer<typeof LinkedInOauthAccount> {
}
export const SpotifyOauthAccount: z.ZodObject<{
    type: z.ZodLiteral<"spotify_oauth">;
    subject: z.ZodString;
    email: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "spotify_oauth";
    name: string | null;
    email: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}, {
    type: "spotify_oauth";
    name: string | null;
    email: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}>;
export interface PrivySpotifyOauthAccount extends z.infer<typeof SpotifyOauthAccount> {
}
export const InstagramOauthAccount: z.ZodObject<{
    type: z.ZodLiteral<"instagram_oauth">;
    subject: z.ZodString;
    username: z.ZodNullable<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "instagram_oauth";
    username: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}, {
    type: "instagram_oauth";
    username: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}>;
export interface PrivyInstagramOauthAccount extends z.infer<typeof InstagramOauthAccount> {
}
export const TiktokOauthAccount: z.ZodObject<{
    type: z.ZodLiteral<"tiktok_oauth">;
    subject: z.ZodString;
    username: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "tiktok_oauth";
    name: string | null;
    username: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}, {
    type: "tiktok_oauth";
    name: string | null;
    username: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}>;
export const AppleOauthAccount: z.ZodObject<{
    type: z.ZodLiteral<"apple_oauth">;
    subject: z.ZodString;
    email: z.ZodNullable<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "apple_oauth";
    email: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}, {
    type: "apple_oauth";
    email: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}>;
export interface PrivyAppleOauthAccount extends z.infer<typeof AppleOauthAccount> {
}
export const CustomJwtAccount: z.ZodObject<{
    type: z.ZodLiteral<"custom_auth">;
    custom_user_id: z.ZodString;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "custom_auth";
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    custom_user_id: string;
}, {
    type: "custom_auth";
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    custom_user_id: string;
}>;
export const CrossAppEmbeddedWallet: z.ZodObject<{
    address: z.ZodString;
}, "strip", z.ZodTypeAny, {
    address: string;
}, {
    address: string;
}>;
export const CrossAppSmartWallet: z.ZodObject<{
    address: z.ZodString;
}, "strip", z.ZodTypeAny, {
    address: string;
}, {
    address: string;
}>;
export const CrossAppAccount: z.ZodObject<{
    type: z.ZodLiteral<"cross_app">;
    subject: z.ZodString;
    provider_app_id: z.ZodString;
    embedded_wallets: z.ZodArray<z.ZodObject<{
        address: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        address: string;
    }, {
        address: string;
    }>, "many">;
    smart_wallets: z.ZodArray<z.ZodObject<{
        address: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        address: string;
    }, {
        address: string;
    }>, "many">;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>;
export interface PrivyCrossAppWalletAccount extends z.infer<typeof CrossAppAccount> {
}
export const LinkedAccount: z.ZodUnion<[z.ZodObject<{
    type: z.ZodLiteral<"email">;
    address: z.ZodString;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "email";
    address: string;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}, {
    type: "email";
    address: string;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}>, z.ZodObject<{
    type: z.ZodLiteral<"phone">;
    phoneNumber: z.ZodString;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "phone";
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    phoneNumber: string;
}, {
    type: "phone";
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    phoneNumber: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"wallet">;
    address: z.ZodString;
    /**
     * @deprecated Will be removed in a future release
     */
    chain_id: z.ZodOptional<z.ZodString>;
    chain_type: z.ZodLiteral<"ethereum">;
    /**
     * @deprecated Use `wallet_client_type` instead.
     */
    wallet_client: z.ZodLiteral<"unknown">;
    wallet_client_type: z.ZodOptional<z.ZodString>;
    connector_type: z.ZodOptional<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>, z.ZodObject<{
    type: z.ZodLiteral<"wallet">;
    address: z.ZodString;
    chain_type: z.ZodLiteral<"solana">;
    /**
     * @deprecated Use `wallet_client_type` instead.
     */
    wallet_client: z.ZodLiteral<"unknown">;
    wallet_client_type: z.ZodOptional<z.ZodString>;
    connector_type: z.ZodOptional<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "wallet";
    address: string;
    chain_type: "solana";
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    wallet_client: "unknown";
    wallet_client_type?: string | undefined;
    connector_type?: string | undefined;
}, {
    type: "wallet";
    address: string;
    chain_type: "solana";
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    wallet_client: "unknown";
    wallet_client_type?: string | undefined;
    connector_type?: string | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"smart_wallet">;
    address: z.ZodString;
    smart_wallet_type: z.ZodEnum<["safe", "kernel", "biconomy", "light_account", "coinbase_smart_wallet"]>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "smart_wallet";
    address: string;
    smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}, {
    type: "smart_wallet";
    address: string;
    smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"wallet">;
    address: z.ZodString;
    imported: z.ZodDefault<z.ZodBoolean>;
    delegated: z.ZodDefault<z.ZodBoolean>;
    wallet_index: z.ZodNumber;
    /**
     * @deprecated Will be removed in a future release
     */
    chain_id: z.ZodString;
    chain_type: z.ZodString;
    /**
     * @deprecated Use `wallet_client_type` instead.
     */
    wallet_client: z.ZodLiteral<"privy">;
    wallet_client_type: z.ZodLiteral<"privy">;
    connector_type: z.ZodLiteral<"embedded">;
    recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, {
    chain_type: z.ZodLiteral<"ethereum">;
}>, "strip", z.ZodTypeAny, {
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
}, {
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
    recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
    imported?: boolean | undefined;
    delegated?: boolean | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"wallet">;
    address: z.ZodString;
    imported: z.ZodDefault<z.ZodBoolean>;
    delegated: z.ZodDefault<z.ZodBoolean>;
    wallet_index: z.ZodNumber;
    /**
     * @deprecated Will be removed in a future release
     */
    chain_id: z.ZodString;
    chain_type: z.ZodString;
    /**
     * @deprecated Use `wallet_client_type` instead.
     */
    wallet_client: z.ZodLiteral<"privy">;
    wallet_client_type: z.ZodLiteral<"privy">;
    connector_type: z.ZodLiteral<"embedded">;
    recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, {
    chain_type: z.ZodLiteral<"solana">;
    /** @deprecated use `address` instead. */
    public_key: z.ZodString;
}>, "strip", z.ZodTypeAny, {
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
}, {
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
    recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
    imported?: boolean | undefined;
    delegated?: boolean | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"wallet">;
    address: z.ZodString;
    imported: z.ZodDefault<z.ZodBoolean>;
    delegated: z.ZodDefault<z.ZodBoolean>;
    wallet_index: z.ZodNumber;
    /**
     * @deprecated Will be removed in a future release
     */
    chain_id: z.ZodString;
    chain_type: z.ZodString;
    /**
     * @deprecated Use `wallet_client_type` instead.
     */
    wallet_client: z.ZodLiteral<"privy">;
    wallet_client_type: z.ZodLiteral<"privy">;
    connector_type: z.ZodLiteral<"embedded">;
    recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, {
    chain_type: z.ZodLiteral<"bitcoin-segwit">;
    public_key: z.ZodString;
}>, "strip", z.ZodTypeAny, {
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
}, {
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
    recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
    imported?: boolean | undefined;
    delegated?: boolean | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"wallet">;
    address: z.ZodString;
    imported: z.ZodDefault<z.ZodBoolean>;
    delegated: z.ZodDefault<z.ZodBoolean>;
    wallet_index: z.ZodNumber;
    /**
     * @deprecated Will be removed in a future release
     */
    chain_id: z.ZodString;
    chain_type: z.ZodString;
    /**
     * @deprecated Use `wallet_client_type` instead.
     */
    wallet_client: z.ZodLiteral<"privy">;
    wallet_client_type: z.ZodLiteral<"privy">;
    connector_type: z.ZodLiteral<"embedded">;
    recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, {
    chain_type: z.ZodLiteral<"bitcoin-taproot">;
    public_key: z.ZodString;
}>, "strip", z.ZodTypeAny, {
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
}, {
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
    recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
    imported?: boolean | undefined;
    delegated?: boolean | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"google_oauth">;
    subject: z.ZodString;
    email: z.ZodString;
    name: z.ZodNullable<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "google_oauth";
    name: string | null;
    email: string;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}, {
    type: "google_oauth";
    name: string | null;
    email: string;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"twitter_oauth">;
    subject: z.ZodString;
    username: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    profile_picture_url: z.ZodNullable<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "twitter_oauth";
    name: string | null;
    username: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    profile_picture_url: string | null;
    subject: string;
}, {
    type: "twitter_oauth";
    name: string | null;
    username: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    profile_picture_url: string | null;
    subject: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"discord_oauth">;
    subject: z.ZodString;
    username: z.ZodNullable<z.ZodString>;
    email: z.ZodNullable<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "discord_oauth";
    email: string | null;
    username: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}, {
    type: "discord_oauth";
    email: string | null;
    username: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"github_oauth">;
    subject: z.ZodString;
    username: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    email: z.ZodNullable<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "github_oauth";
    name: string | null;
    email: string | null;
    username: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}, {
    type: "github_oauth";
    name: string | null;
    email: string | null;
    username: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"spotify_oauth">;
    subject: z.ZodString;
    email: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "spotify_oauth";
    name: string | null;
    email: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}, {
    type: "spotify_oauth";
    name: string | null;
    email: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"instagram_oauth">;
    subject: z.ZodString;
    username: z.ZodNullable<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "instagram_oauth";
    username: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}, {
    type: "instagram_oauth";
    username: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"tiktok_oauth">;
    subject: z.ZodString;
    username: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "tiktok_oauth";
    name: string | null;
    username: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}, {
    type: "tiktok_oauth";
    name: string | null;
    username: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"linkedin_oauth">;
    subject: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodNullable<z.ZodString>;
    vanity_name: z.ZodOptional<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "linkedin_oauth";
    email: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
    name?: string | undefined;
    vanity_name?: string | undefined;
}, {
    type: "linkedin_oauth";
    email: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
    name?: string | undefined;
    vanity_name?: string | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"apple_oauth">;
    subject: z.ZodString;
    email: z.ZodNullable<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "apple_oauth";
    email: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}, {
    type: "apple_oauth";
    email: string | null;
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    subject: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"custom_auth">;
    custom_user_id: z.ZodString;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "custom_auth";
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    custom_user_id: string;
}, {
    type: "custom_auth";
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    custom_user_id: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"farcaster">;
    fid: z.ZodNumber;
    owner_address: z.ZodEffects<z.ZodString, string, string>;
    username: z.ZodOptional<z.ZodString>;
    display_name: z.ZodOptional<z.ZodString>;
    bio: z.ZodOptional<z.ZodString>;
    profile_picture: z.ZodOptional<z.ZodString>;
    profile_picture_url: z.ZodOptional<z.ZodString>;
    homepage_url: z.ZodOptional<z.ZodString>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
    signer_public_key: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>, z.ZodObject<{
    type: z.ZodLiteral<"passkey">;
    created_with_browser: z.ZodOptional<z.ZodString>;
    created_with_os: z.ZodOptional<z.ZodString>;
    created_with_device: z.ZodOptional<z.ZodString>;
    credential_id: z.ZodString;
    authenticator_name: z.ZodOptional<z.ZodString>;
    enrolled_in_mfa: z.ZodBoolean;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>, z.ZodEffects<z.ZodObject<{
    type: z.ZodLiteral<"telegram">;
    telegram_user_id: z.ZodString;
    first_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    last_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    username: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    photo_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "telegram";
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    telegram_user_id: string;
    username?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    photo_url?: string | null | undefined;
}, {
    type: "telegram";
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    telegram_user_id: string;
    username?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    photo_url?: string | null | undefined;
}>, {
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
}, {
    type: "telegram";
    verified_at: number;
    first_verified_at: number | null;
    latest_verified_at: number | null;
    telegram_user_id: string;
    username?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    photo_url?: string | null | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"cross_app">;
    subject: z.ZodString;
    provider_app_id: z.ZodString;
    embedded_wallets: z.ZodArray<z.ZodObject<{
        address: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        address: string;
    }, {
        address: string;
    }>, "many">;
    smart_wallets: z.ZodArray<z.ZodObject<{
        address: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        address: string;
    }, {
        address: string;
    }>, "many">;
    /** @deprecated use `first_verified_at` instead. */
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>]>;
export const SmsMfaMethod: z.ZodObject<{
    type: z.ZodLiteral<"sms">;
    verified_at: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: "sms";
    verified_at: number;
}, {
    type: "sms";
    verified_at: number;
}>;
export interface PrivySmsMfaMethod extends z.infer<typeof SmsMfaMethod> {
}
export const TotpMfaMethod: z.ZodObject<{
    type: z.ZodLiteral<"totp">;
    verified_at: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: "totp";
    verified_at: number;
}, {
    type: "totp";
    verified_at: number;
}>;
export interface PrivyTotpMfaMethod extends z.infer<typeof TotpMfaMethod> {
}
export const PasskeyMfaMethod: z.ZodObject<{
    type: z.ZodLiteral<"passkey">;
    verified_at: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: "passkey";
    verified_at: number;
}, {
    type: "passkey";
    verified_at: number;
}>;
export interface PrivyPasskeyMfaMethod extends z.infer<typeof PasskeyMfaMethod> {
}
export const LinkedMfaMethod: z.ZodUnion<[z.ZodObject<{
    type: z.ZodLiteral<"sms">;
    verified_at: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: "sms";
    verified_at: number;
}, {
    type: "sms";
    verified_at: number;
}>, z.ZodObject<{
    type: z.ZodLiteral<"totp">;
    verified_at: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: "totp";
    verified_at: number;
}, {
    type: "totp";
    verified_at: number;
}>, z.ZodObject<{
    type: z.ZodLiteral<"passkey">;
    verified_at: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: "passkey";
    verified_at: number;
}, {
    type: "passkey";
    verified_at: number;
}>]>;
export const CustomMetadata: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
export type CustomMetadataType = z.infer<typeof CustomMetadata>;
export const OAuthTokens: z.ZodObject<{
    provider: z.ZodString;
    access_token: z.ZodString;
    access_token_expires_in_seconds: z.ZodOptional<z.ZodNumber>;
    refresh_token: z.ZodOptional<z.ZodString>;
    refresh_token_expires_in_seconds: z.ZodOptional<z.ZodNumber>;
    scopes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    provider: string;
    access_token: string;
    access_token_expires_in_seconds?: number | undefined;
    refresh_token?: string | undefined;
    refresh_token_expires_in_seconds?: number | undefined;
    scopes?: string[] | undefined;
}, {
    provider: string;
    access_token: string;
    access_token_expires_in_seconds?: number | undefined;
    refresh_token?: string | undefined;
    refresh_token_expires_in_seconds?: number | undefined;
    scopes?: string[] | undefined;
}>;
export const User: z.ZodObject<{
    id: z.ZodString;
    linked_accounts: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"email">;
        address: z.ZodString;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "email";
        address: string;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
    }, {
        type: "email";
        address: string;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"phone">;
        phoneNumber: z.ZodString;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "phone";
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        phoneNumber: string;
    }, {
        type: "phone";
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        phoneNumber: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"wallet">;
        address: z.ZodString;
        /**
         * @deprecated Will be removed in a future release
         */
        chain_id: z.ZodOptional<z.ZodString>;
        chain_type: z.ZodLiteral<"ethereum">;
        /**
         * @deprecated Use `wallet_client_type` instead.
         */
        wallet_client: z.ZodLiteral<"unknown">;
        wallet_client_type: z.ZodOptional<z.ZodString>;
        connector_type: z.ZodOptional<z.ZodString>;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, z.ZodObject<{
        type: z.ZodLiteral<"wallet">;
        address: z.ZodString;
        chain_type: z.ZodLiteral<"solana">;
        /**
         * @deprecated Use `wallet_client_type` instead.
         */
        wallet_client: z.ZodLiteral<"unknown">;
        wallet_client_type: z.ZodOptional<z.ZodString>;
        connector_type: z.ZodOptional<z.ZodString>;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "wallet";
        address: string;
        chain_type: "solana";
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        wallet_client: "unknown";
        wallet_client_type?: string | undefined;
        connector_type?: string | undefined;
    }, {
        type: "wallet";
        address: string;
        chain_type: "solana";
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        wallet_client: "unknown";
        wallet_client_type?: string | undefined;
        connector_type?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"smart_wallet">;
        address: z.ZodString;
        smart_wallet_type: z.ZodEnum<["safe", "kernel", "biconomy", "light_account", "coinbase_smart_wallet"]>;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "smart_wallet";
        address: string;
        smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
    }, {
        type: "smart_wallet";
        address: string;
        smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"wallet">;
        address: z.ZodString;
        imported: z.ZodDefault<z.ZodBoolean>;
        delegated: z.ZodDefault<z.ZodBoolean>;
        wallet_index: z.ZodNumber;
        /**
         * @deprecated Will be removed in a future release
         */
        chain_id: z.ZodString;
        chain_type: z.ZodString;
        /**
         * @deprecated Use `wallet_client_type` instead.
         */
        wallet_client: z.ZodLiteral<"privy">;
        wallet_client_type: z.ZodLiteral<"privy">;
        connector_type: z.ZodLiteral<"embedded">;
        recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, {
        chain_type: z.ZodLiteral<"ethereum">;
    }>, "strip", z.ZodTypeAny, {
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
    }, {
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
        recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        imported?: boolean | undefined;
        delegated?: boolean | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"wallet">;
        address: z.ZodString;
        imported: z.ZodDefault<z.ZodBoolean>;
        delegated: z.ZodDefault<z.ZodBoolean>;
        wallet_index: z.ZodNumber;
        /**
         * @deprecated Will be removed in a future release
         */
        chain_id: z.ZodString;
        chain_type: z.ZodString;
        /**
         * @deprecated Use `wallet_client_type` instead.
         */
        wallet_client: z.ZodLiteral<"privy">;
        wallet_client_type: z.ZodLiteral<"privy">;
        connector_type: z.ZodLiteral<"embedded">;
        recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, {
        chain_type: z.ZodLiteral<"solana">;
        /** @deprecated use `address` instead. */
        public_key: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
    }, {
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
        recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        imported?: boolean | undefined;
        delegated?: boolean | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"wallet">;
        address: z.ZodString;
        imported: z.ZodDefault<z.ZodBoolean>;
        delegated: z.ZodDefault<z.ZodBoolean>;
        wallet_index: z.ZodNumber;
        /**
         * @deprecated Will be removed in a future release
         */
        chain_id: z.ZodString;
        chain_type: z.ZodString;
        /**
         * @deprecated Use `wallet_client_type` instead.
         */
        wallet_client: z.ZodLiteral<"privy">;
        wallet_client_type: z.ZodLiteral<"privy">;
        connector_type: z.ZodLiteral<"embedded">;
        recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, {
        chain_type: z.ZodLiteral<"bitcoin-segwit">;
        public_key: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
    }, {
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
        recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        imported?: boolean | undefined;
        delegated?: boolean | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"wallet">;
        address: z.ZodString;
        imported: z.ZodDefault<z.ZodBoolean>;
        delegated: z.ZodDefault<z.ZodBoolean>;
        wallet_index: z.ZodNumber;
        /**
         * @deprecated Will be removed in a future release
         */
        chain_id: z.ZodString;
        chain_type: z.ZodString;
        /**
         * @deprecated Use `wallet_client_type` instead.
         */
        wallet_client: z.ZodLiteral<"privy">;
        wallet_client_type: z.ZodLiteral<"privy">;
        connector_type: z.ZodLiteral<"embedded">;
        recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, {
        chain_type: z.ZodLiteral<"bitcoin-taproot">;
        public_key: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
    }, {
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
        recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        imported?: boolean | undefined;
        delegated?: boolean | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"google_oauth">;
        subject: z.ZodString;
        email: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "google_oauth";
        name: string | null;
        email: string;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }, {
        type: "google_oauth";
        name: string | null;
        email: string;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"twitter_oauth">;
        subject: z.ZodString;
        username: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        profile_picture_url: z.ZodNullable<z.ZodString>;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "twitter_oauth";
        name: string | null;
        username: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        profile_picture_url: string | null;
        subject: string;
    }, {
        type: "twitter_oauth";
        name: string | null;
        username: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        profile_picture_url: string | null;
        subject: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"discord_oauth">;
        subject: z.ZodString;
        username: z.ZodNullable<z.ZodString>;
        email: z.ZodNullable<z.ZodString>;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "discord_oauth";
        email: string | null;
        username: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }, {
        type: "discord_oauth";
        email: string | null;
        username: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"github_oauth">;
        subject: z.ZodString;
        username: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        email: z.ZodNullable<z.ZodString>;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "github_oauth";
        name: string | null;
        email: string | null;
        username: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }, {
        type: "github_oauth";
        name: string | null;
        email: string | null;
        username: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"spotify_oauth">;
        subject: z.ZodString;
        email: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "spotify_oauth";
        name: string | null;
        email: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }, {
        type: "spotify_oauth";
        name: string | null;
        email: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"instagram_oauth">;
        subject: z.ZodString;
        username: z.ZodNullable<z.ZodString>;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "instagram_oauth";
        username: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }, {
        type: "instagram_oauth";
        username: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"tiktok_oauth">;
        subject: z.ZodString;
        username: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "tiktok_oauth";
        name: string | null;
        username: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }, {
        type: "tiktok_oauth";
        name: string | null;
        username: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"linkedin_oauth">;
        subject: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        email: z.ZodNullable<z.ZodString>;
        vanity_name: z.ZodOptional<z.ZodString>;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "linkedin_oauth";
        email: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
        name?: string | undefined;
        vanity_name?: string | undefined;
    }, {
        type: "linkedin_oauth";
        email: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
        name?: string | undefined;
        vanity_name?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"apple_oauth">;
        subject: z.ZodString;
        email: z.ZodNullable<z.ZodString>;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "apple_oauth";
        email: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }, {
        type: "apple_oauth";
        email: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"custom_auth">;
        custom_user_id: z.ZodString;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "custom_auth";
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        custom_user_id: string;
    }, {
        type: "custom_auth";
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        custom_user_id: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"farcaster">;
        fid: z.ZodNumber;
        owner_address: z.ZodEffects<z.ZodString, string, string>;
        username: z.ZodOptional<z.ZodString>;
        display_name: z.ZodOptional<z.ZodString>;
        bio: z.ZodOptional<z.ZodString>;
        profile_picture: z.ZodOptional<z.ZodString>;
        profile_picture_url: z.ZodOptional<z.ZodString>;
        homepage_url: z.ZodOptional<z.ZodString>;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
        signer_public_key: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, z.ZodObject<{
        type: z.ZodLiteral<"passkey">;
        created_with_browser: z.ZodOptional<z.ZodString>;
        created_with_os: z.ZodOptional<z.ZodString>;
        created_with_device: z.ZodOptional<z.ZodString>;
        credential_id: z.ZodString;
        authenticator_name: z.ZodOptional<z.ZodString>;
        enrolled_in_mfa: z.ZodBoolean;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, z.ZodEffects<z.ZodObject<{
        type: z.ZodLiteral<"telegram">;
        telegram_user_id: z.ZodString;
        first_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        last_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        username: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        photo_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "telegram";
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        telegram_user_id: string;
        username?: string | null | undefined;
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        photo_url?: string | null | undefined;
    }, {
        type: "telegram";
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        telegram_user_id: string;
        username?: string | null | undefined;
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        photo_url?: string | null | undefined;
    }>, {
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
    }, {
        type: "telegram";
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        telegram_user_id: string;
        username?: string | null | undefined;
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        photo_url?: string | null | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"cross_app">;
        subject: z.ZodString;
        provider_app_id: z.ZodString;
        embedded_wallets: z.ZodArray<z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>, "many">;
        smart_wallets: z.ZodArray<z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>, "many">;
        /** @deprecated use `first_verified_at` instead. */
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>]>, "many">;
    mfa_methods: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"sms">;
        verified_at: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "sms";
        verified_at: number;
    }, {
        type: "sms";
        verified_at: number;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"totp">;
        verified_at: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "totp";
        verified_at: number;
    }, {
        type: "totp";
        verified_at: number;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"passkey">;
        verified_at: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "passkey";
        verified_at: number;
    }, {
        type: "passkey";
        verified_at: number;
    }>]>, "many">;
    created_at: z.ZodNumber;
    has_accepted_terms: z.ZodBoolean;
    is_guest: z.ZodBoolean;
    custom_metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
        recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        imported?: boolean | undefined;
        delegated?: boolean | undefined;
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
        recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        imported?: boolean | undefined;
        delegated?: boolean | undefined;
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
        recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        imported?: boolean | undefined;
        delegated?: boolean | undefined;
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
        recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        imported?: boolean | undefined;
        delegated?: boolean | undefined;
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
export const SessionUpdateActionEnum: z.ZodEnum<["set", "ignore", "clear"]>;
export type SessionUpdateAction = z.infer<typeof SessionUpdateActionEnum>;
export const AuthenticatedUser: z.ZodObject<{
    user: z.ZodObject<{
        id: z.ZodString;
        linked_accounts: z.ZodArray<z.ZodUnion<[z.ZodObject<{
            type: z.ZodLiteral<"email">;
            address: z.ZodString;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "email";
            address: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        }, {
            type: "email";
            address: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"phone">;
            phoneNumber: z.ZodString;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "phone";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            phoneNumber: string;
        }, {
            type: "phone";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            phoneNumber: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"wallet">;
            address: z.ZodString;
            /**
             * @deprecated Will be removed in a future release
             */
            chain_id: z.ZodOptional<z.ZodString>;
            chain_type: z.ZodLiteral<"ethereum">;
            /**
             * @deprecated Use `wallet_client_type` instead.
             */
            wallet_client: z.ZodLiteral<"unknown">;
            wallet_client_type: z.ZodOptional<z.ZodString>;
            connector_type: z.ZodOptional<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>, z.ZodObject<{
            type: z.ZodLiteral<"wallet">;
            address: z.ZodString;
            chain_type: z.ZodLiteral<"solana">;
            /**
             * @deprecated Use `wallet_client_type` instead.
             */
            wallet_client: z.ZodLiteral<"unknown">;
            wallet_client_type: z.ZodOptional<z.ZodString>;
            connector_type: z.ZodOptional<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "wallet";
            address: string;
            chain_type: "solana";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        }, {
            type: "wallet";
            address: string;
            chain_type: "solana";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"smart_wallet">;
            address: z.ZodString;
            smart_wallet_type: z.ZodEnum<["safe", "kernel", "biconomy", "light_account", "coinbase_smart_wallet"]>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "smart_wallet";
            address: string;
            smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        }, {
            type: "smart_wallet";
            address: string;
            smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            type: z.ZodLiteral<"wallet">;
            address: z.ZodString;
            imported: z.ZodDefault<z.ZodBoolean>;
            delegated: z.ZodDefault<z.ZodBoolean>;
            wallet_index: z.ZodNumber;
            /**
             * @deprecated Will be removed in a future release
             */
            chain_id: z.ZodString;
            chain_type: z.ZodString;
            /**
             * @deprecated Use `wallet_client_type` instead.
             */
            wallet_client: z.ZodLiteral<"privy">;
            wallet_client_type: z.ZodLiteral<"privy">;
            connector_type: z.ZodLiteral<"embedded">;
            recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, {
            chain_type: z.ZodLiteral<"ethereum">;
        }>, "strip", z.ZodTypeAny, {
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
        }, {
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            type: z.ZodLiteral<"wallet">;
            address: z.ZodString;
            imported: z.ZodDefault<z.ZodBoolean>;
            delegated: z.ZodDefault<z.ZodBoolean>;
            wallet_index: z.ZodNumber;
            /**
             * @deprecated Will be removed in a future release
             */
            chain_id: z.ZodString;
            chain_type: z.ZodString;
            /**
             * @deprecated Use `wallet_client_type` instead.
             */
            wallet_client: z.ZodLiteral<"privy">;
            wallet_client_type: z.ZodLiteral<"privy">;
            connector_type: z.ZodLiteral<"embedded">;
            recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, {
            chain_type: z.ZodLiteral<"solana">;
            /** @deprecated use `address` instead. */
            public_key: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
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
        }, {
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            type: z.ZodLiteral<"wallet">;
            address: z.ZodString;
            imported: z.ZodDefault<z.ZodBoolean>;
            delegated: z.ZodDefault<z.ZodBoolean>;
            wallet_index: z.ZodNumber;
            /**
             * @deprecated Will be removed in a future release
             */
            chain_id: z.ZodString;
            chain_type: z.ZodString;
            /**
             * @deprecated Use `wallet_client_type` instead.
             */
            wallet_client: z.ZodLiteral<"privy">;
            wallet_client_type: z.ZodLiteral<"privy">;
            connector_type: z.ZodLiteral<"embedded">;
            recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, {
            chain_type: z.ZodLiteral<"bitcoin-segwit">;
            public_key: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
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
        }, {
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            type: z.ZodLiteral<"wallet">;
            address: z.ZodString;
            imported: z.ZodDefault<z.ZodBoolean>;
            delegated: z.ZodDefault<z.ZodBoolean>;
            wallet_index: z.ZodNumber;
            /**
             * @deprecated Will be removed in a future release
             */
            chain_id: z.ZodString;
            chain_type: z.ZodString;
            /**
             * @deprecated Use `wallet_client_type` instead.
             */
            wallet_client: z.ZodLiteral<"privy">;
            wallet_client_type: z.ZodLiteral<"privy">;
            connector_type: z.ZodLiteral<"embedded">;
            recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, {
            chain_type: z.ZodLiteral<"bitcoin-taproot">;
            public_key: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
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
        }, {
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"google_oauth">;
            subject: z.ZodString;
            email: z.ZodString;
            name: z.ZodNullable<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "google_oauth";
            name: string | null;
            email: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }, {
            type: "google_oauth";
            name: string | null;
            email: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"twitter_oauth">;
            subject: z.ZodString;
            username: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            profile_picture_url: z.ZodNullable<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "twitter_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            profile_picture_url: string | null;
            subject: string;
        }, {
            type: "twitter_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            profile_picture_url: string | null;
            subject: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"discord_oauth">;
            subject: z.ZodString;
            username: z.ZodNullable<z.ZodString>;
            email: z.ZodNullable<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "discord_oauth";
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }, {
            type: "discord_oauth";
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"github_oauth">;
            subject: z.ZodString;
            username: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            email: z.ZodNullable<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "github_oauth";
            name: string | null;
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }, {
            type: "github_oauth";
            name: string | null;
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"spotify_oauth">;
            subject: z.ZodString;
            email: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "spotify_oauth";
            name: string | null;
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }, {
            type: "spotify_oauth";
            name: string | null;
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"instagram_oauth">;
            subject: z.ZodString;
            username: z.ZodNullable<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "instagram_oauth";
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }, {
            type: "instagram_oauth";
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"tiktok_oauth">;
            subject: z.ZodString;
            username: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "tiktok_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }, {
            type: "tiktok_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"linkedin_oauth">;
            subject: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
            email: z.ZodNullable<z.ZodString>;
            vanity_name: z.ZodOptional<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "linkedin_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            name?: string | undefined;
            vanity_name?: string | undefined;
        }, {
            type: "linkedin_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            name?: string | undefined;
            vanity_name?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"apple_oauth">;
            subject: z.ZodString;
            email: z.ZodNullable<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "apple_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }, {
            type: "apple_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"custom_auth">;
            custom_user_id: z.ZodString;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "custom_auth";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            custom_user_id: string;
        }, {
            type: "custom_auth";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            custom_user_id: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"farcaster">;
            fid: z.ZodNumber;
            owner_address: z.ZodEffects<z.ZodString, string, string>;
            username: z.ZodOptional<z.ZodString>;
            display_name: z.ZodOptional<z.ZodString>;
            bio: z.ZodOptional<z.ZodString>;
            profile_picture: z.ZodOptional<z.ZodString>;
            profile_picture_url: z.ZodOptional<z.ZodString>;
            homepage_url: z.ZodOptional<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
            signer_public_key: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>, z.ZodObject<{
            type: z.ZodLiteral<"passkey">;
            created_with_browser: z.ZodOptional<z.ZodString>;
            created_with_os: z.ZodOptional<z.ZodString>;
            created_with_device: z.ZodOptional<z.ZodString>;
            credential_id: z.ZodString;
            authenticator_name: z.ZodOptional<z.ZodString>;
            enrolled_in_mfa: z.ZodBoolean;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>, z.ZodEffects<z.ZodObject<{
            type: z.ZodLiteral<"telegram">;
            telegram_user_id: z.ZodString;
            first_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            username: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            photo_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "telegram";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            telegram_user_id: string;
            username?: string | null | undefined;
            first_name?: string | null | undefined;
            last_name?: string | null | undefined;
            photo_url?: string | null | undefined;
        }, {
            type: "telegram";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            telegram_user_id: string;
            username?: string | null | undefined;
            first_name?: string | null | undefined;
            last_name?: string | null | undefined;
            photo_url?: string | null | undefined;
        }>, {
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
        }, {
            type: "telegram";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            telegram_user_id: string;
            username?: string | null | undefined;
            first_name?: string | null | undefined;
            last_name?: string | null | undefined;
            photo_url?: string | null | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"cross_app">;
            subject: z.ZodString;
            provider_app_id: z.ZodString;
            embedded_wallets: z.ZodArray<z.ZodObject<{
                address: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                address: string;
            }, {
                address: string;
            }>, "many">;
            smart_wallets: z.ZodArray<z.ZodObject<{
                address: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                address: string;
            }, {
                address: string;
            }>, "many">;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>]>, "many">;
        mfa_methods: z.ZodArray<z.ZodUnion<[z.ZodObject<{
            type: z.ZodLiteral<"sms">;
            verified_at: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "sms";
            verified_at: number;
        }, {
            type: "sms";
            verified_at: number;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"totp">;
            verified_at: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "totp";
            verified_at: number;
        }, {
            type: "totp";
            verified_at: number;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"passkey">;
            verified_at: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "passkey";
            verified_at: number;
        }, {
            type: "passkey";
            verified_at: number;
        }>]>, "many">;
        created_at: z.ZodNumber;
        has_accepted_terms: z.ZodBoolean;
        is_guest: z.ZodBoolean;
        custom_metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
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
    token: z.ZodNullable<z.ZodString>;
    privy_access_token: z.ZodNullable<z.ZodString>;
    refresh_token: z.ZodNullable<z.ZodString>;
    identity_token: z.ZodOptional<z.ZodString>;
    is_new_user: z.ZodOptional<z.ZodBoolean>;
    oauth_tokens: z.ZodOptional<z.ZodObject<{
        provider: z.ZodString;
        access_token: z.ZodString;
        access_token_expires_in_seconds: z.ZodOptional<z.ZodNumber>;
        refresh_token: z.ZodOptional<z.ZodString>;
        refresh_token_expires_in_seconds: z.ZodOptional<z.ZodNumber>;
        scopes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        provider: string;
        access_token: string;
        access_token_expires_in_seconds?: number | undefined;
        refresh_token?: string | undefined;
        refresh_token_expires_in_seconds?: number | undefined;
        scopes?: string[] | undefined;
    }, {
        provider: string;
        access_token: string;
        access_token_expires_in_seconds?: number | undefined;
        refresh_token?: string | undefined;
        refresh_token_expires_in_seconds?: number | undefined;
        scopes?: string[] | undefined;
    }>>;
    oauth_provider_tokens: z.ZodOptional<z.ZodObject<{
        provider: z.ZodString;
        access_token: z.ZodString;
        access_token_expires_in_seconds: z.ZodOptional<z.ZodNumber>;
        refresh_token: z.ZodOptional<z.ZodString>;
        scopes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        provider: string;
        access_token: string;
        access_token_expires_in_seconds?: number | undefined;
        refresh_token?: string | undefined;
        scopes?: string[] | undefined;
    }, {
        provider: string;
        access_token: string;
        access_token_expires_in_seconds?: number | undefined;
        refresh_token?: string | undefined;
        scopes?: string[] | undefined;
    }>>;
    /**
     * Instructs the client on how to handle tokens received from /sessions endpoint
     * Seeks to mimic the behavior of cookies with manual storage
     *
     * - `set`: _write both tokens to storage_
     * - `clear`: _remove tokens from storage_
     * - `ignore`: _leave tokens storage unchanged_
     */
    session_update_action: z.ZodEnum<["set", "ignore", "clear"]>;
}, "strip", z.ZodTypeAny, {
    token: string | null;
    refresh_token: string | null;
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
    privy_access_token: string | null;
    session_update_action: "set" | "ignore" | "clear";
    identity_token?: string | undefined;
    is_new_user?: boolean | undefined;
    oauth_tokens?: {
        provider: string;
        access_token: string;
        access_token_expires_in_seconds?: number | undefined;
        refresh_token?: string | undefined;
        refresh_token_expires_in_seconds?: number | undefined;
        scopes?: string[] | undefined;
    } | undefined;
    oauth_provider_tokens?: {
        provider: string;
        access_token: string;
        access_token_expires_in_seconds?: number | undefined;
        refresh_token?: string | undefined;
        scopes?: string[] | undefined;
    } | undefined;
}, {
    token: string | null;
    refresh_token: string | null;
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
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
    privy_access_token: string | null;
    session_update_action: "set" | "ignore" | "clear";
    identity_token?: string | undefined;
    is_new_user?: boolean | undefined;
    oauth_tokens?: {
        provider: string;
        access_token: string;
        access_token_expires_in_seconds?: number | undefined;
        refresh_token?: string | undefined;
        refresh_token_expires_in_seconds?: number | undefined;
        scopes?: string[] | undefined;
    } | undefined;
    oauth_provider_tokens?: {
        provider: string;
        access_token: string;
        access_token_expires_in_seconds?: number | undefined;
        refresh_token?: string | undefined;
        scopes?: string[] | undefined;
    } | undefined;
}>;
export interface PrivyUser extends z.infer<typeof User> {
}
export interface PrivyAuthenticatedUser extends z.infer<typeof AuthenticatedUser> {
}
export const LoggedOutUser: z.ZodObject<{
    user: z.ZodNull;
    token: z.ZodNull;
    refresh_token: z.ZodNull;
    /** Instructs the client to clear any persisted tokens */
    session_update_action: z.ZodLiteral<"clear">;
}, "strip", z.ZodTypeAny, {
    token: null;
    refresh_token: null;
    user: null;
    session_update_action: "clear";
}, {
    token: null;
    refresh_token: null;
    user: null;
    session_update_action: "clear";
}>;
export interface PrivyLoggedOutUser extends z.infer<typeof LoggedOutUser> {
}
export const MaybeUser: z.ZodUnion<[z.ZodObject<{
    user: z.ZodObject<{
        id: z.ZodString;
        linked_accounts: z.ZodArray<z.ZodUnion<[z.ZodObject<{
            type: z.ZodLiteral<"email">;
            address: z.ZodString;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "email";
            address: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        }, {
            type: "email";
            address: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"phone">;
            phoneNumber: z.ZodString;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "phone";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            phoneNumber: string;
        }, {
            type: "phone";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            phoneNumber: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"wallet">;
            address: z.ZodString;
            /**
             * @deprecated Will be removed in a future release
             */
            chain_id: z.ZodOptional<z.ZodString>;
            chain_type: z.ZodLiteral<"ethereum">;
            /**
             * @deprecated Use `wallet_client_type` instead.
             */
            wallet_client: z.ZodLiteral<"unknown">;
            wallet_client_type: z.ZodOptional<z.ZodString>;
            connector_type: z.ZodOptional<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>, z.ZodObject<{
            type: z.ZodLiteral<"wallet">;
            address: z.ZodString;
            chain_type: z.ZodLiteral<"solana">;
            /**
             * @deprecated Use `wallet_client_type` instead.
             */
            wallet_client: z.ZodLiteral<"unknown">;
            wallet_client_type: z.ZodOptional<z.ZodString>;
            connector_type: z.ZodOptional<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "wallet";
            address: string;
            chain_type: "solana";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        }, {
            type: "wallet";
            address: string;
            chain_type: "solana";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            wallet_client: "unknown";
            wallet_client_type?: string | undefined;
            connector_type?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"smart_wallet">;
            address: z.ZodString;
            smart_wallet_type: z.ZodEnum<["safe", "kernel", "biconomy", "light_account", "coinbase_smart_wallet"]>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "smart_wallet";
            address: string;
            smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        }, {
            type: "smart_wallet";
            address: string;
            smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            type: z.ZodLiteral<"wallet">;
            address: z.ZodString;
            imported: z.ZodDefault<z.ZodBoolean>;
            delegated: z.ZodDefault<z.ZodBoolean>;
            wallet_index: z.ZodNumber;
            /**
             * @deprecated Will be removed in a future release
             */
            chain_id: z.ZodString;
            chain_type: z.ZodString;
            /**
             * @deprecated Use `wallet_client_type` instead.
             */
            wallet_client: z.ZodLiteral<"privy">;
            wallet_client_type: z.ZodLiteral<"privy">;
            connector_type: z.ZodLiteral<"embedded">;
            recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, {
            chain_type: z.ZodLiteral<"ethereum">;
        }>, "strip", z.ZodTypeAny, {
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
        }, {
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            type: z.ZodLiteral<"wallet">;
            address: z.ZodString;
            imported: z.ZodDefault<z.ZodBoolean>;
            delegated: z.ZodDefault<z.ZodBoolean>;
            wallet_index: z.ZodNumber;
            /**
             * @deprecated Will be removed in a future release
             */
            chain_id: z.ZodString;
            chain_type: z.ZodString;
            /**
             * @deprecated Use `wallet_client_type` instead.
             */
            wallet_client: z.ZodLiteral<"privy">;
            wallet_client_type: z.ZodLiteral<"privy">;
            connector_type: z.ZodLiteral<"embedded">;
            recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, {
            chain_type: z.ZodLiteral<"solana">;
            /** @deprecated use `address` instead. */
            public_key: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
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
        }, {
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            type: z.ZodLiteral<"wallet">;
            address: z.ZodString;
            imported: z.ZodDefault<z.ZodBoolean>;
            delegated: z.ZodDefault<z.ZodBoolean>;
            wallet_index: z.ZodNumber;
            /**
             * @deprecated Will be removed in a future release
             */
            chain_id: z.ZodString;
            chain_type: z.ZodString;
            /**
             * @deprecated Use `wallet_client_type` instead.
             */
            wallet_client: z.ZodLiteral<"privy">;
            wallet_client_type: z.ZodLiteral<"privy">;
            connector_type: z.ZodLiteral<"embedded">;
            recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, {
            chain_type: z.ZodLiteral<"bitcoin-segwit">;
            public_key: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
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
        }, {
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            type: z.ZodLiteral<"wallet">;
            address: z.ZodString;
            imported: z.ZodDefault<z.ZodBoolean>;
            delegated: z.ZodDefault<z.ZodBoolean>;
            wallet_index: z.ZodNumber;
            /**
             * @deprecated Will be removed in a future release
             */
            chain_id: z.ZodString;
            chain_type: z.ZodString;
            /**
             * @deprecated Use `wallet_client_type` instead.
             */
            wallet_client: z.ZodLiteral<"privy">;
            wallet_client_type: z.ZodLiteral<"privy">;
            connector_type: z.ZodLiteral<"embedded">;
            recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, {
            chain_type: z.ZodLiteral<"bitcoin-taproot">;
            public_key: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
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
        }, {
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"google_oauth">;
            subject: z.ZodString;
            email: z.ZodString;
            name: z.ZodNullable<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "google_oauth";
            name: string | null;
            email: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }, {
            type: "google_oauth";
            name: string | null;
            email: string;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"twitter_oauth">;
            subject: z.ZodString;
            username: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            profile_picture_url: z.ZodNullable<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "twitter_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            profile_picture_url: string | null;
            subject: string;
        }, {
            type: "twitter_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            profile_picture_url: string | null;
            subject: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"discord_oauth">;
            subject: z.ZodString;
            username: z.ZodNullable<z.ZodString>;
            email: z.ZodNullable<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "discord_oauth";
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }, {
            type: "discord_oauth";
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"github_oauth">;
            subject: z.ZodString;
            username: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            email: z.ZodNullable<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "github_oauth";
            name: string | null;
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }, {
            type: "github_oauth";
            name: string | null;
            email: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"spotify_oauth">;
            subject: z.ZodString;
            email: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "spotify_oauth";
            name: string | null;
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }, {
            type: "spotify_oauth";
            name: string | null;
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"instagram_oauth">;
            subject: z.ZodString;
            username: z.ZodNullable<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "instagram_oauth";
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }, {
            type: "instagram_oauth";
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"tiktok_oauth">;
            subject: z.ZodString;
            username: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "tiktok_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }, {
            type: "tiktok_oauth";
            name: string | null;
            username: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"linkedin_oauth">;
            subject: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
            email: z.ZodNullable<z.ZodString>;
            vanity_name: z.ZodOptional<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "linkedin_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            name?: string | undefined;
            vanity_name?: string | undefined;
        }, {
            type: "linkedin_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
            name?: string | undefined;
            vanity_name?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"apple_oauth">;
            subject: z.ZodString;
            email: z.ZodNullable<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "apple_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }, {
            type: "apple_oauth";
            email: string | null;
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            subject: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"custom_auth">;
            custom_user_id: z.ZodString;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "custom_auth";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            custom_user_id: string;
        }, {
            type: "custom_auth";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            custom_user_id: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"farcaster">;
            fid: z.ZodNumber;
            owner_address: z.ZodEffects<z.ZodString, string, string>;
            username: z.ZodOptional<z.ZodString>;
            display_name: z.ZodOptional<z.ZodString>;
            bio: z.ZodOptional<z.ZodString>;
            profile_picture: z.ZodOptional<z.ZodString>;
            profile_picture_url: z.ZodOptional<z.ZodString>;
            homepage_url: z.ZodOptional<z.ZodString>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
            signer_public_key: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>, z.ZodObject<{
            type: z.ZodLiteral<"passkey">;
            created_with_browser: z.ZodOptional<z.ZodString>;
            created_with_os: z.ZodOptional<z.ZodString>;
            created_with_device: z.ZodOptional<z.ZodString>;
            credential_id: z.ZodString;
            authenticator_name: z.ZodOptional<z.ZodString>;
            enrolled_in_mfa: z.ZodBoolean;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>, z.ZodEffects<z.ZodObject<{
            type: z.ZodLiteral<"telegram">;
            telegram_user_id: z.ZodString;
            first_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            last_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            username: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            photo_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "telegram";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            telegram_user_id: string;
            username?: string | null | undefined;
            first_name?: string | null | undefined;
            last_name?: string | null | undefined;
            photo_url?: string | null | undefined;
        }, {
            type: "telegram";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            telegram_user_id: string;
            username?: string | null | undefined;
            first_name?: string | null | undefined;
            last_name?: string | null | undefined;
            photo_url?: string | null | undefined;
        }>, {
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
        }, {
            type: "telegram";
            verified_at: number;
            first_verified_at: number | null;
            latest_verified_at: number | null;
            telegram_user_id: string;
            username?: string | null | undefined;
            first_name?: string | null | undefined;
            last_name?: string | null | undefined;
            photo_url?: string | null | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"cross_app">;
            subject: z.ZodString;
            provider_app_id: z.ZodString;
            embedded_wallets: z.ZodArray<z.ZodObject<{
                address: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                address: string;
            }, {
                address: string;
            }>, "many">;
            smart_wallets: z.ZodArray<z.ZodObject<{
                address: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                address: string;
            }, {
                address: string;
            }>, "many">;
            /** @deprecated use `first_verified_at` instead. */
            verified_at: z.ZodNumber;
            first_verified_at: z.ZodNullable<z.ZodNumber>;
            latest_verified_at: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>]>, "many">;
        mfa_methods: z.ZodArray<z.ZodUnion<[z.ZodObject<{
            type: z.ZodLiteral<"sms">;
            verified_at: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "sms";
            verified_at: number;
        }, {
            type: "sms";
            verified_at: number;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"totp">;
            verified_at: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "totp";
            verified_at: number;
        }, {
            type: "totp";
            verified_at: number;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"passkey">;
            verified_at: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "passkey";
            verified_at: number;
        }, {
            type: "passkey";
            verified_at: number;
        }>]>, "many">;
        created_at: z.ZodNumber;
        has_accepted_terms: z.ZodBoolean;
        is_guest: z.ZodBoolean;
        custom_metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
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
    token: z.ZodNullable<z.ZodString>;
    privy_access_token: z.ZodNullable<z.ZodString>;
    refresh_token: z.ZodNullable<z.ZodString>;
    identity_token: z.ZodOptional<z.ZodString>;
    is_new_user: z.ZodOptional<z.ZodBoolean>;
    oauth_tokens: z.ZodOptional<z.ZodObject<{
        provider: z.ZodString;
        access_token: z.ZodString;
        access_token_expires_in_seconds: z.ZodOptional<z.ZodNumber>;
        refresh_token: z.ZodOptional<z.ZodString>;
        refresh_token_expires_in_seconds: z.ZodOptional<z.ZodNumber>;
        scopes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        provider: string;
        access_token: string;
        access_token_expires_in_seconds?: number | undefined;
        refresh_token?: string | undefined;
        refresh_token_expires_in_seconds?: number | undefined;
        scopes?: string[] | undefined;
    }, {
        provider: string;
        access_token: string;
        access_token_expires_in_seconds?: number | undefined;
        refresh_token?: string | undefined;
        refresh_token_expires_in_seconds?: number | undefined;
        scopes?: string[] | undefined;
    }>>;
    oauth_provider_tokens: z.ZodOptional<z.ZodObject<{
        provider: z.ZodString;
        access_token: z.ZodString;
        access_token_expires_in_seconds: z.ZodOptional<z.ZodNumber>;
        refresh_token: z.ZodOptional<z.ZodString>;
        scopes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        provider: string;
        access_token: string;
        access_token_expires_in_seconds?: number | undefined;
        refresh_token?: string | undefined;
        scopes?: string[] | undefined;
    }, {
        provider: string;
        access_token: string;
        access_token_expires_in_seconds?: number | undefined;
        refresh_token?: string | undefined;
        scopes?: string[] | undefined;
    }>>;
    /**
     * Instructs the client on how to handle tokens received from /sessions endpoint
     * Seeks to mimic the behavior of cookies with manual storage
     *
     * - `set`: _write both tokens to storage_
     * - `clear`: _remove tokens from storage_
     * - `ignore`: _leave tokens storage unchanged_
     */
    session_update_action: z.ZodEnum<["set", "ignore", "clear"]>;
}, "strip", z.ZodTypeAny, {
    token: string | null;
    refresh_token: string | null;
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
    privy_access_token: string | null;
    session_update_action: "set" | "ignore" | "clear";
    identity_token?: string | undefined;
    is_new_user?: boolean | undefined;
    oauth_tokens?: {
        provider: string;
        access_token: string;
        access_token_expires_in_seconds?: number | undefined;
        refresh_token?: string | undefined;
        refresh_token_expires_in_seconds?: number | undefined;
        scopes?: string[] | undefined;
    } | undefined;
    oauth_provider_tokens?: {
        provider: string;
        access_token: string;
        access_token_expires_in_seconds?: number | undefined;
        refresh_token?: string | undefined;
        scopes?: string[] | undefined;
    } | undefined;
}, {
    token: string | null;
    refresh_token: string | null;
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
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
            recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
            imported?: boolean | undefined;
            delegated?: boolean | undefined;
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
    privy_access_token: string | null;
    session_update_action: "set" | "ignore" | "clear";
    identity_token?: string | undefined;
    is_new_user?: boolean | undefined;
    oauth_tokens?: {
        provider: string;
        access_token: string;
        access_token_expires_in_seconds?: number | undefined;
        refresh_token?: string | undefined;
        refresh_token_expires_in_seconds?: number | undefined;
        scopes?: string[] | undefined;
    } | undefined;
    oauth_provider_tokens?: {
        provider: string;
        access_token: string;
        access_token_expires_in_seconds?: number | undefined;
        refresh_token?: string | undefined;
        scopes?: string[] | undefined;
    } | undefined;
}>, z.ZodObject<{
    user: z.ZodNull;
    token: z.ZodNull;
    refresh_token: z.ZodNull;
    /** Instructs the client to clear any persisted tokens */
    session_update_action: z.ZodLiteral<"clear">;
}, "strip", z.ZodTypeAny, {
    token: null;
    refresh_token: null;
    user: null;
    session_update_action: "clear";
}, {
    token: null;
    refresh_token: null;
    user: null;
    session_update_action: "clear";
}>]>;
export const EmailIdTokenEntry: z.ZodObject<z.objectUtil.extendShape<Pick<{
    type: z.ZodLiteral<"email">;
    address: z.ZodString;
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "type" | "address">, {
    lv: z.ZodNullable<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    type: "email";
    address: string;
    lv: number | null;
}, {
    type: "email";
    address: string;
    lv: number | null;
}>;
export interface PrivyEmailIdTokenEntry extends z.infer<typeof EmailIdTokenEntry> {
}
export const PhoneIdTokenEntry: z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<Pick<{
    type: z.ZodLiteral<"phone">;
    phoneNumber: z.ZodString;
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "type" | "phoneNumber">, {
    lv: z.ZodNullable<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    type: "phone";
    phoneNumber: string;
    lv: number | null;
}, {
    type: "phone";
    phoneNumber: string;
    lv: number | null;
}>, {
    type: "phone";
    lv: number | null;
    phone_number: string;
}, {
    type: "phone";
    phoneNumber: string;
    lv: number | null;
}>;
export interface PrivyPhoneIdTokenEntry extends z.infer<typeof PhoneIdTokenEntry> {
}
export const WalletIdTokenEntry: z.ZodObject<z.objectUtil.extendShape<Pick<{
    type: z.ZodLiteral<"wallet">;
    address: z.ZodString;
    chain_id: z.ZodOptional<z.ZodString>;
    chain_type: z.ZodLiteral<"ethereum">;
    wallet_client: z.ZodLiteral<"unknown">;
    wallet_client_type: z.ZodOptional<z.ZodString>;
    connector_type: z.ZodOptional<z.ZodString>;
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "type" | "address" | "chain_type" | "wallet_client_type">, {
    lv: z.ZodNullable<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    type: "wallet";
    address: string;
    chain_type: "ethereum";
    lv: number | null;
    wallet_client_type?: string | undefined;
}, {
    type: "wallet";
    address: string;
    chain_type: "ethereum";
    lv: number | null;
    wallet_client_type?: string | undefined;
}>;
export interface PrivyWalletIdTokenEntry extends z.infer<typeof WalletIdTokenEntry> {
}
export const FarcasterIdTokenEntry: z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<Pick<{
    type: z.ZodLiteral<"farcaster">;
    fid: z.ZodNumber;
    owner_address: z.ZodEffects<z.ZodString, string, string>;
    username: z.ZodOptional<z.ZodString>;
    display_name: z.ZodOptional<z.ZodString>;
    bio: z.ZodOptional<z.ZodString>;
    profile_picture: z.ZodOptional<z.ZodString>;
    profile_picture_url: z.ZodOptional<z.ZodString>;
    homepage_url: z.ZodOptional<z.ZodString>;
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
    signer_public_key: z.ZodOptional<z.ZodString>;
}, "type" | "fid" | "username" | "owner_address">, {
    lv: z.ZodNullable<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    type: "farcaster";
    fid: number;
    owner_address: string;
    lv: number | null;
    username?: string | undefined;
}, {
    type: "farcaster";
    fid: number;
    owner_address: string;
    lv: number | null;
    username?: string | undefined;
}>, {
    type: "farcaster";
    fid: number;
    lv: number | null;
    username?: string | undefined;
    oa: string;
}, {
    type: "farcaster";
    fid: number;
    owner_address: string;
    lv: number | null;
    username?: string | undefined;
}>;
export interface PrivyFarcasterIdTokenEntry extends z.infer<typeof FarcasterIdTokenEntry> {
}
export const PasskeyIdTokenEntry: z.ZodObject<z.objectUtil.extendShape<Pick<{
    type: z.ZodLiteral<"passkey">;
    created_with_browser: z.ZodOptional<z.ZodString>;
    created_with_os: z.ZodOptional<z.ZodString>;
    created_with_device: z.ZodOptional<z.ZodString>;
    credential_id: z.ZodString;
    authenticator_name: z.ZodOptional<z.ZodString>;
    enrolled_in_mfa: z.ZodBoolean;
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "type" | "credential_id">, {
    lv: z.ZodNullable<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    type: "passkey";
    credential_id: string;
    lv: number | null;
}, {
    type: "passkey";
    credential_id: string;
    lv: number | null;
}>;
export interface PrivyPasskeyIdTokenEntry extends z.infer<typeof PasskeyIdTokenEntry> {
}
export const TelegramIdTokenEntry: z.ZodObject<{
    type: z.ZodLiteral<"telegram">;
    telegram_user_id: z.ZodString;
    username: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lv: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "telegram";
    telegram_user_id: string;
    lv: number | null;
    username?: string | null | undefined;
}, {
    type: "telegram";
    telegram_user_id: string;
    lv: number | null;
    username?: string | null | undefined;
}>;
export interface PrivyTelegramIdTokenEntry extends z.infer<typeof TelegramIdTokenEntry> {
}
export const GoogleOauthIdTokenEntry: z.ZodObject<z.objectUtil.extendShape<Pick<{
    type: z.ZodLiteral<"google_oauth">;
    subject: z.ZodString;
    email: z.ZodString;
    name: z.ZodNullable<z.ZodString>;
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "type" | "name" | "email" | "subject">, {
    lv: z.ZodNullable<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    type: "google_oauth";
    name: string | null;
    email: string;
    subject: string;
    lv: number | null;
}, {
    type: "google_oauth";
    name: string | null;
    email: string;
    subject: string;
    lv: number | null;
}>;
export interface PrivyGoogleOauthIdTokenEntry extends z.infer<typeof GoogleOauthIdTokenEntry> {
}
export const TwitterOauthIdTokenEntry: z.ZodObject<z.objectUtil.extendShape<Pick<{
    type: z.ZodLiteral<"twitter_oauth">;
    subject: z.ZodString;
    username: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    profile_picture_url: z.ZodNullable<z.ZodString>;
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "type" | "username" | "subject">, {
    lv: z.ZodNullable<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    type: "twitter_oauth";
    username: string | null;
    subject: string;
    lv: number | null;
}, {
    type: "twitter_oauth";
    username: string | null;
    subject: string;
    lv: number | null;
}>;
export interface PrivyTwitterOauthIdTokenEntry extends z.infer<typeof TwitterOauthIdTokenEntry> {
}
export const DiscordOauthIdTokenEntry: z.ZodObject<z.objectUtil.extendShape<Pick<{
    type: z.ZodLiteral<"discord_oauth">;
    subject: z.ZodString;
    username: z.ZodNullable<z.ZodString>;
    email: z.ZodNullable<z.ZodString>;
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "type" | "username" | "subject">, {
    lv: z.ZodNullable<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    type: "discord_oauth";
    username: string | null;
    subject: string;
    lv: number | null;
}, {
    type: "discord_oauth";
    username: string | null;
    subject: string;
    lv: number | null;
}>;
export interface PrivyDiscordOauthIdTokenEntry extends z.infer<typeof DiscordOauthIdTokenEntry> {
}
export const GithubOauthIdTokenEntry: z.ZodObject<z.objectUtil.extendShape<Pick<{
    type: z.ZodLiteral<"github_oauth">;
    subject: z.ZodString;
    username: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    email: z.ZodNullable<z.ZodString>;
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "type" | "username" | "subject">, {
    lv: z.ZodNullable<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    type: "github_oauth";
    username: string | null;
    subject: string;
    lv: number | null;
}, {
    type: "github_oauth";
    username: string | null;
    subject: string;
    lv: number | null;
}>;
export interface PrivyGithubOauthIdTokenEntry extends z.infer<typeof GithubOauthIdTokenEntry> {
}
export const LinkedInOauthIdTokenEntry: z.ZodObject<z.objectUtil.extendShape<Pick<{
    type: z.ZodLiteral<"linkedin_oauth">;
    subject: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodNullable<z.ZodString>;
    vanity_name: z.ZodOptional<z.ZodString>;
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "type" | "email" | "subject">, {
    lv: z.ZodNullable<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    type: "linkedin_oauth";
    email: string | null;
    subject: string;
    lv: number | null;
}, {
    type: "linkedin_oauth";
    email: string | null;
    subject: string;
    lv: number | null;
}>;
export interface PrivyLinkedInOauthIdTokenEntry extends z.infer<typeof LinkedInOauthIdTokenEntry> {
}
export const SpotifyOauthIdTokenEntry: z.ZodObject<z.objectUtil.extendShape<Pick<{
    type: z.ZodLiteral<"spotify_oauth">;
    subject: z.ZodString;
    email: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "type" | "email" | "subject">, {
    lv: z.ZodNullable<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    type: "spotify_oauth";
    email: string | null;
    subject: string;
    lv: number | null;
}, {
    type: "spotify_oauth";
    email: string | null;
    subject: string;
    lv: number | null;
}>;
export interface PrivySpotifyOauthIdTokenEntry extends z.infer<typeof SpotifyOauthIdTokenEntry> {
}
export const InstagramOauthIdTokenEntry: z.ZodObject<z.objectUtil.extendShape<Pick<{
    type: z.ZodLiteral<"instagram_oauth">;
    subject: z.ZodString;
    username: z.ZodNullable<z.ZodString>;
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "type" | "username" | "subject">, {
    lv: z.ZodNullable<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    type: "instagram_oauth";
    username: string | null;
    subject: string;
    lv: number | null;
}, {
    type: "instagram_oauth";
    username: string | null;
    subject: string;
    lv: number | null;
}>;
export interface PrivyInstagramOauthIdTokenEntry extends z.infer<typeof InstagramOauthIdTokenEntry> {
}
export const TiktokOauthIdTokenEntry: z.ZodObject<z.objectUtil.extendShape<Pick<{
    type: z.ZodLiteral<"tiktok_oauth">;
    subject: z.ZodString;
    username: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "type" | "username" | "subject">, {
    lv: z.ZodNullable<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    type: "tiktok_oauth";
    username: string | null;
    subject: string;
    lv: number | null;
}, {
    type: "tiktok_oauth";
    username: string | null;
    subject: string;
    lv: number | null;
}>;
export interface PrivyTiktokOauthIdTokenEntry extends z.infer<typeof TiktokOauthIdTokenEntry> {
}
export const AppleOauthIdTokenEntry: z.ZodObject<z.objectUtil.extendShape<Pick<{
    type: z.ZodLiteral<"apple_oauth">;
    subject: z.ZodString;
    email: z.ZodNullable<z.ZodString>;
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "type" | "email" | "subject">, {
    lv: z.ZodNullable<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    type: "apple_oauth";
    email: string | null;
    subject: string;
    lv: number | null;
}, {
    type: "apple_oauth";
    email: string | null;
    subject: string;
    lv: number | null;
}>;
export interface PrivyAppleOauthIdTokenEntry extends z.infer<typeof AppleOauthIdTokenEntry> {
}
export const CustomJwtIdTokenEntry: z.ZodObject<z.objectUtil.extendShape<Pick<{
    type: z.ZodLiteral<"custom_auth">;
    custom_user_id: z.ZodString;
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "type" | "custom_user_id">, {
    lv: z.ZodNullable<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    type: "custom_auth";
    custom_user_id: string;
    lv: number | null;
}, {
    type: "custom_auth";
    custom_user_id: string;
    lv: number | null;
}>;
export interface PrivyCustomJwtIdTokenEntry extends z.infer<typeof CustomJwtIdTokenEntry> {
}
export const CrossAppIdTokenEntry: z.ZodObject<z.objectUtil.extendShape<Pick<{
    type: z.ZodLiteral<"cross_app">;
    subject: z.ZodString;
    provider_app_id: z.ZodString;
    embedded_wallets: z.ZodArray<z.ZodObject<{
        address: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        address: string;
    }, {
        address: string;
    }>, "many">;
    smart_wallets: z.ZodArray<z.ZodObject<{
        address: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        address: string;
    }, {
        address: string;
    }>, "many">;
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "type" | "provider_app_id" | "subject" | "embedded_wallets" | "smart_wallets">, {
    lv: z.ZodNullable<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    type: "cross_app";
    provider_app_id: string;
    subject: string;
    embedded_wallets: {
        address: string;
    }[];
    smart_wallets: {
        address: string;
    }[];
    lv: number | null;
}, {
    type: "cross_app";
    provider_app_id: string;
    subject: string;
    embedded_wallets: {
        address: string;
    }[];
    smart_wallets: {
        address: string;
    }[];
    lv: number | null;
}>;
export interface PrivyCrossAppIdTokenEntry extends z.infer<typeof CrossAppIdTokenEntry> {
}
export const SmartWalletIdTokenEntry: z.ZodObject<z.objectUtil.extendShape<Pick<{
    type: z.ZodLiteral<"smart_wallet">;
    address: z.ZodString;
    smart_wallet_type: z.ZodEnum<["safe", "kernel", "biconomy", "light_account", "coinbase_smart_wallet"]>;
    verified_at: z.ZodNumber;
    first_verified_at: z.ZodNullable<z.ZodNumber>;
    latest_verified_at: z.ZodNullable<z.ZodNumber>;
}, "type" | "address" | "smart_wallet_type">, {
    lv: z.ZodNullable<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    type: "smart_wallet";
    address: string;
    smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
    lv: number | null;
}, {
    type: "smart_wallet";
    address: string;
    smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
    lv: number | null;
}>;
export interface PrivySmartWalletIdTokenEntry extends z.infer<typeof SmartWalletIdTokenEntry> {
}
export type LinkedAccountsIdTokenEntry = PrivyEmailIdTokenEntry | PrivyPhoneIdTokenEntry | PrivyWalletIdTokenEntry | PrivyGoogleOauthIdTokenEntry | PrivyTwitterOauthIdTokenEntry | PrivyDiscordOauthIdTokenEntry | PrivyGithubOauthIdTokenEntry | PrivySpotifyOauthIdTokenEntry | PrivyInstagramOauthIdTokenEntry | PrivyTiktokOauthIdTokenEntry | PrivyLinkedInOauthIdTokenEntry | PrivyAppleOauthIdTokenEntry | PrivyCustomJwtIdTokenEntry | PrivyFarcasterIdTokenEntry | PrivyPasskeyIdTokenEntry | PrivyTelegramIdTokenEntry | PrivyCrossAppIdTokenEntry | PrivySmartWalletIdTokenEntry;
export const MfaVerifyResponse: z.ZodObject<{
    token: z.ZodString;
}, "strict", z.ZodTypeAny, {
    token: string;
}, {
    token: string;
}>;
export type MfaVerifyResponseType = z.infer<typeof MfaVerifyResponse>;
export const MfaSmsInitInput: z.ZodUnion<[z.ZodObject<{
    action: z.ZodLiteral<"verify">;
}, "strict", z.ZodTypeAny, {
    action: "verify";
}, {
    action: "verify";
}>, z.ZodObject<{
    action: z.ZodLiteral<"enroll">;
    phoneNumber: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
}, "strict", z.ZodTypeAny, {
    phoneNumber: string;
    action: "enroll";
}, {
    phoneNumber: string;
    action: "enroll";
}>]>;
export type MfaSmsInitInputType = z.infer<typeof MfaSmsInitInput>;
/** @deprecated Please use MfaSmsEnrollInput */
export const MfaSmsAuthenticateEnrollInput: z.ZodObject<{
    action: z.ZodOptional<z.ZodLiteral<"enroll">>;
    code: z.ZodString;
    phoneNumber: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
}, "strict", z.ZodTypeAny, {
    code: string;
    phoneNumber: string;
    action?: "enroll" | undefined;
}, {
    code: string;
    phoneNumber: string;
    action?: "enroll" | undefined;
}>;
/** @deprecated Please use MfaSmsEnrollInputType */
export type MfaSmsAuthenticateEnrollInputType = z.infer<typeof MfaSmsAuthenticateEnrollInput>;
export const MfaSmsEnrollInput: z.ZodObject<{
    code: z.ZodString;
    phoneNumber: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
}, "strict", z.ZodTypeAny, {
    code: string;
    phoneNumber: string;
}, {
    code: string;
    phoneNumber: string;
}>;
export type MfaSmsEnrollInputType = z.infer<typeof MfaSmsEnrollInput>;
export const MfaSmsVerifyInput: z.ZodObject<{
    code: z.ZodString;
}, "strict", z.ZodTypeAny, {
    code: string;
}, {
    code: string;
}>;
export type MfaSmsVerifyInputType = z.infer<typeof MfaSmsVerifyInput>;
/**
 * TOTP MFA enrollment and verification inputs.
 */
export const MfaTotpInput: z.ZodObject<{
    code: z.ZodString;
}, "strict", z.ZodTypeAny, {
    code: string;
}, {
    code: string;
}>;
export type MfaTotpInputType = z.infer<typeof MfaTotpInput>;
export const ResponseTotpInitMfa: z.ZodObject<{
    totpSecret: z.ZodString;
    totpAuthUrl: z.ZodString;
}, "strict", z.ZodTypeAny, {
    totpSecret: string;
    totpAuthUrl: string;
}, {
    totpSecret: string;
    totpAuthUrl: string;
}>;
export type ResponseTotpInitMfaType = z.infer<typeof ResponseTotpInitMfa>;
/**
 * Contents are defined by webauthn
 * https://w3c.github.io/webauthn/#dictionary-assertion-options
 *
 * Types and fields are pulled from @simplewebauthn/types
 * (these may be slightly different from the webauthn spec)
 */
export const PasskeyAuthenticatorVerifyOptions: z.ZodObject<{
    challenge: z.ZodString;
    timeout: z.ZodOptional<z.ZodNumber>;
    rp_id: z.ZodOptional<z.ZodString>;
    allow_credentials: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
        transports: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        type: string;
        id: string;
        transports?: string[] | undefined;
    }, {
        type: string;
        id: string;
        transports?: string[] | undefined;
    }>, "many">>;
    user_verification: z.ZodOptional<z.ZodString>;
    extensions: z.ZodOptional<z.ZodObject<{
        app_id: z.ZodOptional<z.ZodString>;
        cred_props: z.ZodOptional<z.ZodBoolean>;
        hmac_create_secret: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        app_id?: string | undefined;
        cred_props?: boolean | undefined;
        hmac_create_secret?: boolean | undefined;
    }, {
        app_id?: string | undefined;
        cred_props?: boolean | undefined;
        hmac_create_secret?: boolean | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>;
export type PasskeyAuthenticatorVerifyOptionsType = z.infer<typeof PasskeyAuthenticatorVerifyOptions>;
/**
 * Contents are defined by webauthn
 * https://w3c.github.io/webauthn/#dictionary-assertion-options
 *
 * Types and fields are pulled from @simplewebauthn/types
 * (these may be slightly different from the webauthn spec)
 */
export const PasskeyAuthenticatorEnrollmentOptions: z.ZodObject<{
    rp: z.ZodObject<{
        name: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id?: string | undefined;
    }, {
        name: string;
        id?: string | undefined;
    }>;
    user: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        display_name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        display_name: string;
    }, {
        id: string;
        name: string;
        display_name: string;
    }>;
    challenge: z.ZodString;
    pub_key_cred_params: z.ZodArray<z.ZodObject<{
        alg: z.ZodNumber;
        type: z.ZodLiteral<"public-key">;
    }, "strip", z.ZodTypeAny, {
        type: "public-key";
        alg: number;
    }, {
        type: "public-key";
        alg: number;
    }>, "many">;
    timeout: z.ZodOptional<z.ZodNumber>;
    exclude_credentials: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
        transports: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        type: string;
        id: string;
        transports?: string[] | undefined;
    }, {
        type: string;
        id: string;
        transports?: string[] | undefined;
    }>, "many">>;
    authenticator_selection: z.ZodOptional<z.ZodObject<{
        authenticator_attachment: z.ZodOptional<z.ZodString>;
        require_resident_key: z.ZodOptional<z.ZodBoolean>;
        resident_key: z.ZodOptional<z.ZodString>;
        user_verification: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        user_verification?: string | undefined;
        authenticator_attachment?: string | undefined;
        require_resident_key?: boolean | undefined;
        resident_key?: string | undefined;
    }, {
        user_verification?: string | undefined;
        authenticator_attachment?: string | undefined;
        require_resident_key?: boolean | undefined;
        resident_key?: string | undefined;
    }>>;
    attestation: z.ZodOptional<z.ZodString>;
    extensions: z.ZodOptional<z.ZodObject<{
        app_id: z.ZodOptional<z.ZodString>;
        cred_props: z.ZodOptional<z.ZodObject<{
            rk: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            rk?: boolean | undefined;
        }, {
            rk?: boolean | undefined;
        }>>;
        hmac_create_secret: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        app_id?: string | undefined;
        cred_props?: {
            rk?: boolean | undefined;
        } | undefined;
        hmac_create_secret?: boolean | undefined;
    }, {
        app_id?: string | undefined;
        cred_props?: {
            rk?: boolean | undefined;
        } | undefined;
        hmac_create_secret?: boolean | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>;
export type PasskeyAuthenticatorEnrollmentOptionsType = z.infer<typeof PasskeyAuthenticatorEnrollmentOptions>;
/**
 * Contents of are defined by webauthn
 * https://w3c.github.io/webauthn/#dictdef-authenticationresponsejson
 *
 * Types and fields are pulled from @simplewebauthn/types
 */
export const PasskeyAuthenticatorVerifyResponse: z.ZodObject<{
    id: z.ZodString;
    raw_id: z.ZodString;
    response: z.ZodObject<{
        client_data_json: z.ZodString;
        authenticator_data: z.ZodString;
        signature: z.ZodString;
        user_handle: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        signature: string;
        client_data_json: string;
        authenticator_data: string;
        user_handle?: string | undefined;
    }, {
        signature: string;
        client_data_json: string;
        authenticator_data: string;
        user_handle?: string | undefined;
    }>;
    authenticator_attachment: z.ZodOptional<z.ZodString>;
    client_extension_results: z.ZodObject<{
        app_id: z.ZodOptional<z.ZodBoolean>;
        cred_props: z.ZodOptional<z.ZodObject<{
            rk: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            rk?: boolean | undefined;
        }, {
            rk?: boolean | undefined;
        }>>;
        hmac_create_secret: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        app_id?: boolean | undefined;
        cred_props?: {
            rk?: boolean | undefined;
        } | undefined;
        hmac_create_secret?: boolean | undefined;
    }, {
        app_id?: boolean | undefined;
        cred_props?: {
            rk?: boolean | undefined;
        } | undefined;
        hmac_create_secret?: boolean | undefined;
    }>;
    type: z.ZodLiteral<"public-key">;
}, "strip", z.ZodTypeAny, {
    type: "public-key";
    id: string;
    raw_id: string;
    response: {
        signature: string;
        client_data_json: string;
        authenticator_data: string;
        user_handle?: string | undefined;
    };
    client_extension_results: {
        app_id?: boolean | undefined;
        cred_props?: {
            rk?: boolean | undefined;
        } | undefined;
        hmac_create_secret?: boolean | undefined;
    };
    authenticator_attachment?: string | undefined;
}, {
    type: "public-key";
    id: string;
    raw_id: string;
    response: {
        signature: string;
        client_data_json: string;
        authenticator_data: string;
        user_handle?: string | undefined;
    };
    client_extension_results: {
        app_id?: boolean | undefined;
        cred_props?: {
            rk?: boolean | undefined;
        } | undefined;
        hmac_create_secret?: boolean | undefined;
    };
    authenticator_attachment?: string | undefined;
}>;
export type PasskeyAuthenticatorVerifyResponseType = z.infer<typeof PasskeyAuthenticatorVerifyResponse>;
/**
 * Contents are defined by webauthn
 * https://w3c.github.io/webauthn/#dictdef-registrationresponsejson
 *
 * Types and fields are pulled from @simplewebauthn/types
 */
export const PasskeyAuthenticatorEnrollmentResponse: z.ZodObject<{
    id: z.ZodString;
    raw_id: z.ZodString;
    response: z.ZodObject<{
        client_data_json: z.ZodString;
        attestation_object: z.ZodString;
        authenticator_data: z.ZodOptional<z.ZodString>;
        transports: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
        public_key_algorithm: z.ZodOptional<z.ZodNumber>;
        public_key: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        client_data_json: string;
        attestation_object: string;
        public_key?: string | undefined;
        transports?: any[] | undefined;
        authenticator_data?: string | undefined;
        public_key_algorithm?: number | undefined;
    }, {
        client_data_json: string;
        attestation_object: string;
        public_key?: string | undefined;
        transports?: any[] | undefined;
        authenticator_data?: string | undefined;
        public_key_algorithm?: number | undefined;
    }>;
    authenticator_attachment: z.ZodOptional<z.ZodString>;
    client_extension_results: z.ZodObject<{
        app_id: z.ZodOptional<z.ZodBoolean>;
        cred_props: z.ZodOptional<z.ZodObject<{
            rk: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            rk?: boolean | undefined;
        }, {
            rk?: boolean | undefined;
        }>>;
        hmac_create_secret: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        app_id?: boolean | undefined;
        cred_props?: {
            rk?: boolean | undefined;
        } | undefined;
        hmac_create_secret?: boolean | undefined;
    }, {
        app_id?: boolean | undefined;
        cred_props?: {
            rk?: boolean | undefined;
        } | undefined;
        hmac_create_secret?: boolean | undefined;
    }>;
    type: z.ZodLiteral<"public-key">;
}, "strip", z.ZodTypeAny, {
    type: "public-key";
    id: string;
    raw_id: string;
    response: {
        client_data_json: string;
        attestation_object: string;
        public_key?: string | undefined;
        transports?: any[] | undefined;
        authenticator_data?: string | undefined;
        public_key_algorithm?: number | undefined;
    };
    client_extension_results: {
        app_id?: boolean | undefined;
        cred_props?: {
            rk?: boolean | undefined;
        } | undefined;
        hmac_create_secret?: boolean | undefined;
    };
    authenticator_attachment?: string | undefined;
}, {
    type: "public-key";
    id: string;
    raw_id: string;
    response: {
        client_data_json: string;
        attestation_object: string;
        public_key?: string | undefined;
        transports?: any[] | undefined;
        authenticator_data?: string | undefined;
        public_key_algorithm?: number | undefined;
    };
    client_extension_results: {
        app_id?: boolean | undefined;
        cred_props?: {
            rk?: boolean | undefined;
        } | undefined;
        hmac_create_secret?: boolean | undefined;
    };
    authenticator_attachment?: string | undefined;
}>;
export type PasskeyAuthenticatorEnrollmentResponseType = z.infer<typeof PasskeyAuthenticatorEnrollmentResponse>;
export const PasskeyInitInput: z.ZodObject<{
    relying_party: z.ZodOptional<z.ZodString>;
    token: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    token?: string | undefined;
    relying_party?: string | undefined;
}, {
    token?: string | undefined;
    relying_party?: string | undefined;
}>;
export type PasskeyInitInputType = z.infer<typeof PasskeyInitInput>;
export const ResponsePasskeyInitAuthenticate: z.ZodObject<{
    relying_party: z.ZodOptional<z.ZodString>;
    options: z.ZodObject<{
        challenge: z.ZodString;
        timeout: z.ZodOptional<z.ZodNumber>;
        rp_id: z.ZodOptional<z.ZodString>;
        allow_credentials: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            type: z.ZodString;
            transports: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
            transports?: string[] | undefined;
        }, {
            type: string;
            id: string;
            transports?: string[] | undefined;
        }>, "many">>;
        user_verification: z.ZodOptional<z.ZodString>;
        extensions: z.ZodOptional<z.ZodObject<{
            app_id: z.ZodOptional<z.ZodString>;
            cred_props: z.ZodOptional<z.ZodBoolean>;
            hmac_create_secret: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            app_id?: string | undefined;
            cred_props?: boolean | undefined;
            hmac_create_secret?: boolean | undefined;
        }, {
            app_id?: string | undefined;
            cred_props?: boolean | undefined;
            hmac_create_secret?: boolean | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>;
}, "strict", z.ZodTypeAny, {
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
}, {
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
export type ResponsePasskeyInitAuthenticateType = z.infer<typeof ResponsePasskeyInitAuthenticate>;
export const ResponsePasskeyInitLink: z.ZodObject<{
    relying_party: z.ZodOptional<z.ZodString>;
    options: z.ZodObject<{
        rp: z.ZodObject<{
            name: z.ZodString;
            id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            id?: string | undefined;
        }, {
            name: string;
            id?: string | undefined;
        }>;
        user: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            display_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string;
            display_name: string;
        }, {
            id: string;
            name: string;
            display_name: string;
        }>;
        challenge: z.ZodString;
        pub_key_cred_params: z.ZodArray<z.ZodObject<{
            alg: z.ZodNumber;
            type: z.ZodLiteral<"public-key">;
        }, "strip", z.ZodTypeAny, {
            type: "public-key";
            alg: number;
        }, {
            type: "public-key";
            alg: number;
        }>, "many">;
        timeout: z.ZodOptional<z.ZodNumber>;
        exclude_credentials: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            type: z.ZodString;
            transports: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
            transports?: string[] | undefined;
        }, {
            type: string;
            id: string;
            transports?: string[] | undefined;
        }>, "many">>;
        authenticator_selection: z.ZodOptional<z.ZodObject<{
            authenticator_attachment: z.ZodOptional<z.ZodString>;
            require_resident_key: z.ZodOptional<z.ZodBoolean>;
            resident_key: z.ZodOptional<z.ZodString>;
            user_verification: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_verification?: string | undefined;
            authenticator_attachment?: string | undefined;
            require_resident_key?: boolean | undefined;
            resident_key?: string | undefined;
        }, {
            user_verification?: string | undefined;
            authenticator_attachment?: string | undefined;
            require_resident_key?: boolean | undefined;
            resident_key?: string | undefined;
        }>>;
        attestation: z.ZodOptional<z.ZodString>;
        extensions: z.ZodOptional<z.ZodObject<{
            app_id: z.ZodOptional<z.ZodString>;
            cred_props: z.ZodOptional<z.ZodObject<{
                rk: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                rk?: boolean | undefined;
            }, {
                rk?: boolean | undefined;
            }>>;
            hmac_create_secret: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            app_id?: string | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        }, {
            app_id?: string | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>;
}, "strict", z.ZodTypeAny, {
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
}, {
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
export type ResponsePasskeyInitLinkType = z.infer<typeof ResponsePasskeyInitLink>;
export const ResponsePasskeyInitRegister: z.ZodObject<{
    relying_party: z.ZodOptional<z.ZodString>;
    options: z.ZodObject<{
        rp: z.ZodObject<{
            name: z.ZodString;
            id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            id?: string | undefined;
        }, {
            name: string;
            id?: string | undefined;
        }>;
        user: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            display_name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string;
            display_name: string;
        }, {
            id: string;
            name: string;
            display_name: string;
        }>;
        challenge: z.ZodString;
        pub_key_cred_params: z.ZodArray<z.ZodObject<{
            alg: z.ZodNumber;
            type: z.ZodLiteral<"public-key">;
        }, "strip", z.ZodTypeAny, {
            type: "public-key";
            alg: number;
        }, {
            type: "public-key";
            alg: number;
        }>, "many">;
        timeout: z.ZodOptional<z.ZodNumber>;
        exclude_credentials: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            type: z.ZodString;
            transports: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
            transports?: string[] | undefined;
        }, {
            type: string;
            id: string;
            transports?: string[] | undefined;
        }>, "many">>;
        authenticator_selection: z.ZodOptional<z.ZodObject<{
            authenticator_attachment: z.ZodOptional<z.ZodString>;
            require_resident_key: z.ZodOptional<z.ZodBoolean>;
            resident_key: z.ZodOptional<z.ZodString>;
            user_verification: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_verification?: string | undefined;
            authenticator_attachment?: string | undefined;
            require_resident_key?: boolean | undefined;
            resident_key?: string | undefined;
        }, {
            user_verification?: string | undefined;
            authenticator_attachment?: string | undefined;
            require_resident_key?: boolean | undefined;
            resident_key?: string | undefined;
        }>>;
        attestation: z.ZodOptional<z.ZodString>;
        extensions: z.ZodOptional<z.ZodObject<{
            app_id: z.ZodOptional<z.ZodString>;
            cred_props: z.ZodOptional<z.ZodObject<{
                rk: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                rk?: boolean | undefined;
            }, {
                rk?: boolean | undefined;
            }>>;
            hmac_create_secret: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            app_id?: string | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        }, {
            app_id?: string | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>;
}, "strict", z.ZodTypeAny, {
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
}, {
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
export type ResponsePasskeyInitRegisterType = z.infer<typeof ResponsePasskeyInitRegister>;
export const PasskeyLinkInput: z.ZodObject<{
    relying_party: z.ZodOptional<z.ZodString>;
    authenticator_response: z.ZodObject<{
        id: z.ZodString;
        raw_id: z.ZodString;
        response: z.ZodObject<{
            client_data_json: z.ZodString;
            attestation_object: z.ZodString;
            authenticator_data: z.ZodOptional<z.ZodString>;
            transports: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
            public_key_algorithm: z.ZodOptional<z.ZodNumber>;
            public_key: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_data_json: string;
            attestation_object: string;
            public_key?: string | undefined;
            transports?: any[] | undefined;
            authenticator_data?: string | undefined;
            public_key_algorithm?: number | undefined;
        }, {
            client_data_json: string;
            attestation_object: string;
            public_key?: string | undefined;
            transports?: any[] | undefined;
            authenticator_data?: string | undefined;
            public_key_algorithm?: number | undefined;
        }>;
        authenticator_attachment: z.ZodOptional<z.ZodString>;
        client_extension_results: z.ZodObject<{
            app_id: z.ZodOptional<z.ZodBoolean>;
            cred_props: z.ZodOptional<z.ZodObject<{
                rk: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                rk?: boolean | undefined;
            }, {
                rk?: boolean | undefined;
            }>>;
            hmac_create_secret: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        }, {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        }>;
        type: z.ZodLiteral<"public-key">;
    }, "strip", z.ZodTypeAny, {
        type: "public-key";
        id: string;
        raw_id: string;
        response: {
            client_data_json: string;
            attestation_object: string;
            public_key?: string | undefined;
            transports?: any[] | undefined;
            authenticator_data?: string | undefined;
            public_key_algorithm?: number | undefined;
        };
        client_extension_results: {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        };
        authenticator_attachment?: string | undefined;
    }, {
        type: "public-key";
        id: string;
        raw_id: string;
        response: {
            client_data_json: string;
            attestation_object: string;
            public_key?: string | undefined;
            transports?: any[] | undefined;
            authenticator_data?: string | undefined;
            public_key_algorithm?: number | undefined;
        };
        client_extension_results: {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        };
        authenticator_attachment?: string | undefined;
    }>;
}, "strict", z.ZodTypeAny, {
    authenticator_response: {
        type: "public-key";
        id: string;
        raw_id: string;
        response: {
            client_data_json: string;
            attestation_object: string;
            public_key?: string | undefined;
            transports?: any[] | undefined;
            authenticator_data?: string | undefined;
            public_key_algorithm?: number | undefined;
        };
        client_extension_results: {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        };
        authenticator_attachment?: string | undefined;
    };
    relying_party?: string | undefined;
}, {
    authenticator_response: {
        type: "public-key";
        id: string;
        raw_id: string;
        response: {
            client_data_json: string;
            attestation_object: string;
            public_key?: string | undefined;
            transports?: any[] | undefined;
            authenticator_data?: string | undefined;
            public_key_algorithm?: number | undefined;
        };
        client_extension_results: {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        };
        authenticator_attachment?: string | undefined;
    };
    relying_party?: string | undefined;
}>;
export type PasskeyLinkInputType = z.infer<typeof PasskeyLinkInput>;
export const PasskeyRegisterInput: z.ZodObject<{
    relying_party: z.ZodOptional<z.ZodString>;
    authenticator_response: z.ZodObject<{
        id: z.ZodString;
        raw_id: z.ZodString;
        response: z.ZodObject<{
            client_data_json: z.ZodString;
            attestation_object: z.ZodString;
            authenticator_data: z.ZodOptional<z.ZodString>;
            transports: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
            public_key_algorithm: z.ZodOptional<z.ZodNumber>;
            public_key: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            client_data_json: string;
            attestation_object: string;
            public_key?: string | undefined;
            transports?: any[] | undefined;
            authenticator_data?: string | undefined;
            public_key_algorithm?: number | undefined;
        }, {
            client_data_json: string;
            attestation_object: string;
            public_key?: string | undefined;
            transports?: any[] | undefined;
            authenticator_data?: string | undefined;
            public_key_algorithm?: number | undefined;
        }>;
        authenticator_attachment: z.ZodOptional<z.ZodString>;
        client_extension_results: z.ZodObject<{
            app_id: z.ZodOptional<z.ZodBoolean>;
            cred_props: z.ZodOptional<z.ZodObject<{
                rk: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                rk?: boolean | undefined;
            }, {
                rk?: boolean | undefined;
            }>>;
            hmac_create_secret: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        }, {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        }>;
        type: z.ZodLiteral<"public-key">;
    }, "strip", z.ZodTypeAny, {
        type: "public-key";
        id: string;
        raw_id: string;
        response: {
            client_data_json: string;
            attestation_object: string;
            public_key?: string | undefined;
            transports?: any[] | undefined;
            authenticator_data?: string | undefined;
            public_key_algorithm?: number | undefined;
        };
        client_extension_results: {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        };
        authenticator_attachment?: string | undefined;
    }, {
        type: "public-key";
        id: string;
        raw_id: string;
        response: {
            client_data_json: string;
            attestation_object: string;
            public_key?: string | undefined;
            transports?: any[] | undefined;
            authenticator_data?: string | undefined;
            public_key_algorithm?: number | undefined;
        };
        client_extension_results: {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        };
        authenticator_attachment?: string | undefined;
    }>;
}, "strict", z.ZodTypeAny, {
    authenticator_response: {
        type: "public-key";
        id: string;
        raw_id: string;
        response: {
            client_data_json: string;
            attestation_object: string;
            public_key?: string | undefined;
            transports?: any[] | undefined;
            authenticator_data?: string | undefined;
            public_key_algorithm?: number | undefined;
        };
        client_extension_results: {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        };
        authenticator_attachment?: string | undefined;
    };
    relying_party?: string | undefined;
}, {
    authenticator_response: {
        type: "public-key";
        id: string;
        raw_id: string;
        response: {
            client_data_json: string;
            attestation_object: string;
            public_key?: string | undefined;
            transports?: any[] | undefined;
            authenticator_data?: string | undefined;
            public_key_algorithm?: number | undefined;
        };
        client_extension_results: {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        };
        authenticator_attachment?: string | undefined;
    };
    relying_party?: string | undefined;
}>;
export type PasskeyRegisterInputType = z.infer<typeof PasskeyRegisterInput>;
export const PasskeyAuthenticateInput: z.ZodObject<{
    relying_party: z.ZodOptional<z.ZodString>;
    challenge: z.ZodString;
    authenticator_response: z.ZodObject<{
        id: z.ZodString;
        raw_id: z.ZodString;
        response: z.ZodObject<{
            client_data_json: z.ZodString;
            authenticator_data: z.ZodString;
            signature: z.ZodString;
            user_handle: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            signature: string;
            client_data_json: string;
            authenticator_data: string;
            user_handle?: string | undefined;
        }, {
            signature: string;
            client_data_json: string;
            authenticator_data: string;
            user_handle?: string | undefined;
        }>;
        authenticator_attachment: z.ZodOptional<z.ZodString>;
        client_extension_results: z.ZodObject<{
            app_id: z.ZodOptional<z.ZodBoolean>;
            cred_props: z.ZodOptional<z.ZodObject<{
                rk: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                rk?: boolean | undefined;
            }, {
                rk?: boolean | undefined;
            }>>;
            hmac_create_secret: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        }, {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        }>;
        type: z.ZodLiteral<"public-key">;
    }, "strip", z.ZodTypeAny, {
        type: "public-key";
        id: string;
        raw_id: string;
        response: {
            signature: string;
            client_data_json: string;
            authenticator_data: string;
            user_handle?: string | undefined;
        };
        client_extension_results: {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        };
        authenticator_attachment?: string | undefined;
    }, {
        type: "public-key";
        id: string;
        raw_id: string;
        response: {
            signature: string;
            client_data_json: string;
            authenticator_data: string;
            user_handle?: string | undefined;
        };
        client_extension_results: {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        };
        authenticator_attachment?: string | undefined;
    }>;
}, "strict", z.ZodTypeAny, {
    challenge: string;
    authenticator_response: {
        type: "public-key";
        id: string;
        raw_id: string;
        response: {
            signature: string;
            client_data_json: string;
            authenticator_data: string;
            user_handle?: string | undefined;
        };
        client_extension_results: {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        };
        authenticator_attachment?: string | undefined;
    };
    relying_party?: string | undefined;
}, {
    challenge: string;
    authenticator_response: {
        type: "public-key";
        id: string;
        raw_id: string;
        response: {
            signature: string;
            client_data_json: string;
            authenticator_data: string;
            user_handle?: string | undefined;
        };
        client_extension_results: {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        };
        authenticator_attachment?: string | undefined;
    };
    relying_party?: string | undefined;
}>;
export type PasskeyAuthenticateInputType = z.infer<typeof PasskeyAuthenticateInput>;
export const UnlinkPasskeyInput: z.ZodObject<{
    credential_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    credential_id: string;
}, {
    credential_id: string;
}>;
export interface PrivyUnlinkPasskeyInput extends z.infer<typeof UnlinkPasskeyInput> {
}
export const MfaPasskeyInitInput: z.ZodObject<{
    relying_party: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    relying_party?: string | undefined;
}, {
    relying_party?: string | undefined;
}>;
export type MfaPasskeyInitInputType = z.infer<typeof MfaPasskeyInitInput>;
export const ResponsePasskeyInitMfa: z.ZodObject<{
    options: z.ZodObject<{
        challenge: z.ZodString;
        timeout: z.ZodOptional<z.ZodNumber>;
        rp_id: z.ZodOptional<z.ZodString>;
        allow_credentials: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            type: z.ZodString;
            transports: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
            transports?: string[] | undefined;
        }, {
            type: string;
            id: string;
            transports?: string[] | undefined;
        }>, "many">>;
        user_verification: z.ZodOptional<z.ZodString>;
        extensions: z.ZodOptional<z.ZodObject<{
            app_id: z.ZodOptional<z.ZodString>;
            cred_props: z.ZodOptional<z.ZodBoolean>;
            hmac_create_secret: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            app_id?: string | undefined;
            cred_props?: boolean | undefined;
            hmac_create_secret?: boolean | undefined;
        }, {
            app_id?: string | undefined;
            cred_props?: boolean | undefined;
            hmac_create_secret?: boolean | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>;
}, "strict", z.ZodTypeAny, {
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
}, {
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
}>;
export type ResponsePasskeyInitMfaType = z.infer<typeof ResponsePasskeyInitMfa>;
export const MfaPasskeyVerifyInput: z.ZodObject<{
    authenticator_response: z.ZodObject<{
        id: z.ZodString;
        raw_id: z.ZodString;
        response: z.ZodObject<{
            client_data_json: z.ZodString;
            authenticator_data: z.ZodString;
            signature: z.ZodString;
            user_handle: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            signature: string;
            client_data_json: string;
            authenticator_data: string;
            user_handle?: string | undefined;
        }, {
            signature: string;
            client_data_json: string;
            authenticator_data: string;
            user_handle?: string | undefined;
        }>;
        authenticator_attachment: z.ZodOptional<z.ZodString>;
        client_extension_results: z.ZodObject<{
            app_id: z.ZodOptional<z.ZodBoolean>;
            cred_props: z.ZodOptional<z.ZodObject<{
                rk: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                rk?: boolean | undefined;
            }, {
                rk?: boolean | undefined;
            }>>;
            hmac_create_secret: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        }, {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        }>;
        type: z.ZodLiteral<"public-key">;
    }, "strip", z.ZodTypeAny, {
        type: "public-key";
        id: string;
        raw_id: string;
        response: {
            signature: string;
            client_data_json: string;
            authenticator_data: string;
            user_handle?: string | undefined;
        };
        client_extension_results: {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        };
        authenticator_attachment?: string | undefined;
    }, {
        type: "public-key";
        id: string;
        raw_id: string;
        response: {
            signature: string;
            client_data_json: string;
            authenticator_data: string;
            user_handle?: string | undefined;
        };
        client_extension_results: {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        };
        authenticator_attachment?: string | undefined;
    }>;
    relying_party: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    authenticator_response: {
        type: "public-key";
        id: string;
        raw_id: string;
        response: {
            signature: string;
            client_data_json: string;
            authenticator_data: string;
            user_handle?: string | undefined;
        };
        client_extension_results: {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        };
        authenticator_attachment?: string | undefined;
    };
    relying_party?: string | undefined;
}, {
    authenticator_response: {
        type: "public-key";
        id: string;
        raw_id: string;
        response: {
            signature: string;
            client_data_json: string;
            authenticator_data: string;
            user_handle?: string | undefined;
        };
        client_extension_results: {
            app_id?: boolean | undefined;
            cred_props?: {
                rk?: boolean | undefined;
            } | undefined;
            hmac_create_secret?: boolean | undefined;
        };
        authenticator_attachment?: string | undefined;
    };
    relying_party?: string | undefined;
}>;
export type MfaPasskeyVerifyInputType = z.infer<typeof MfaPasskeyVerifyInput>;
export const MfaEnrollmentPasskeyInput: z.ZodObject<{
    credential_ids: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    credential_ids: string[];
}, {
    credential_ids: string[];
}>;
export interface PrivyMfaEnrollmentPasskeyInputType extends z.infer<typeof MfaEnrollmentPasskeyInput> {
}
/**
 * Strict type checking is done for most values here. This is because we are signing these
 * configurations with our own key and must avoid any sort of injection attempt.
 *
 * Be careful with adding/relaxing any of these types.
 */
export const MoonpayOnRampSignInput: z.ZodIntersection<z.ZodUnion<[z.ZodObject<{
    address: z.ZodEffects<z.ZodString, string, string>;
    config: z.ZodObject<z.objectUtil.extendShape<{
        quoteCurrencyAmount: z.ZodOptional<z.ZodNumber>;
        email: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        paymentMethod: z.ZodOptional<z.ZodEnum<["ach_bank_transfer", "credit_debit_card", "gbp_bank_transfer", "gbp_open_banking_payment", "mobile_wallet", "sepa_bank_transfer", "sepa_open_banking_payment", "pix_instant_payment", "yellow_card_bank_transfer"]>>;
        uiConfig: z.ZodOptional<z.ZodObject<{
            accentColor: z.ZodOptional<z.ZodString>;
            theme: z.ZodOptional<z.ZodEnum<["light", "dark"]>>;
        }, "strip", z.ZodTypeAny, {
            theme?: "light" | "dark" | undefined;
            accentColor?: string | undefined;
        }, {
            theme?: "light" | "dark" | undefined;
            accentColor?: string | undefined;
        }>>;
    }, {
        currencyCode: z.ZodOptional<z.ZodEffects<z.ZodEnum<["AVAX_CCHAIN", "CELO_CELO", "CUSD_CELO", "DAI_ETHEREUM", "ETH_ETHEREUM", "ETH_ARBITRUM", "ETH_OPTIMISM", "ETH_POLYGON", "ETH_BASE", "FIL_FVM", "MATIC_ETHEREUM", "MATIC_POLYGON", "USDC_ETHEREUM", "USDC_ARBITRUM", "USDC_OPTIMISM", "USDC_POLYGON", "USDC_BASE", "USDT_ETHEREUM", "USDT_POLYGON", "WETH_POLYGON", "WBTC_ETHEREUM", "BNB_BNB", "BNB_BSC", "CELO", "CUSD", "DAI", "ETH", "FIL", "MATIC", "USDC", "USDT", "WETH", "WBTC"]>, "USDC" | "ETH" | "AVAX_CCHAIN" | "ETH_ARBITRUM" | "ETH_OPTIMISM" | "ETH_POLYGON" | "ETH_BASE" | "MATIC_POLYGON" | "USDC_ARBITRUM" | "USDC_OPTIMISM" | "USDC_POLYGON" | "USDC_BASE" | "USDT_POLYGON" | "BNB_BSC" | "CELO" | "CUSD" | "DAI" | "FIL" | "MATIC" | "USDT" | "WETH" | "WBTC" | "BNB", "USDC" | "ETH" | "AVAX_CCHAIN" | "CELO_CELO" | "CUSD_CELO" | "DAI_ETHEREUM" | "ETH_ETHEREUM" | "ETH_ARBITRUM" | "ETH_OPTIMISM" | "ETH_POLYGON" | "ETH_BASE" | "FIL_FVM" | "MATIC_ETHEREUM" | "MATIC_POLYGON" | "USDC_ETHEREUM" | "USDC_ARBITRUM" | "USDC_OPTIMISM" | "USDC_POLYGON" | "USDC_BASE" | "USDT_ETHEREUM" | "USDT_POLYGON" | "WETH_POLYGON" | "WBTC_ETHEREUM" | "BNB_BNB" | "BNB_BSC" | "CELO" | "CUSD" | "DAI" | "FIL" | "MATIC" | "USDT" | "WETH" | "WBTC">>;
    }>, "strip", z.ZodTypeAny, {
        email?: string | undefined;
        quoteCurrencyAmount?: number | undefined;
        paymentMethod?: "ach_bank_transfer" | "credit_debit_card" | "gbp_bank_transfer" | "gbp_open_banking_payment" | "mobile_wallet" | "sepa_bank_transfer" | "sepa_open_banking_payment" | "pix_instant_payment" | "yellow_card_bank_transfer" | undefined;
        uiConfig?: {
            theme?: "light" | "dark" | undefined;
            accentColor?: string | undefined;
        } | undefined;
        currencyCode?: "USDC" | "ETH" | "AVAX_CCHAIN" | "ETH_ARBITRUM" | "ETH_OPTIMISM" | "ETH_POLYGON" | "ETH_BASE" | "MATIC_POLYGON" | "USDC_ARBITRUM" | "USDC_OPTIMISM" | "USDC_POLYGON" | "USDC_BASE" | "USDT_POLYGON" | "BNB_BSC" | "CELO" | "CUSD" | "DAI" | "FIL" | "MATIC" | "USDT" | "WETH" | "WBTC" | "BNB" | undefined;
    }, {
        email?: string | undefined;
        quoteCurrencyAmount?: number | undefined;
        paymentMethod?: "ach_bank_transfer" | "credit_debit_card" | "gbp_bank_transfer" | "gbp_open_banking_payment" | "mobile_wallet" | "sepa_bank_transfer" | "sepa_open_banking_payment" | "pix_instant_payment" | "yellow_card_bank_transfer" | undefined;
        uiConfig?: {
            theme?: "light" | "dark" | undefined;
            accentColor?: string | undefined;
        } | undefined;
        currencyCode?: "USDC" | "ETH" | "AVAX_CCHAIN" | "CELO_CELO" | "CUSD_CELO" | "DAI_ETHEREUM" | "ETH_ETHEREUM" | "ETH_ARBITRUM" | "ETH_OPTIMISM" | "ETH_POLYGON" | "ETH_BASE" | "FIL_FVM" | "MATIC_ETHEREUM" | "MATIC_POLYGON" | "USDC_ETHEREUM" | "USDC_ARBITRUM" | "USDC_OPTIMISM" | "USDC_POLYGON" | "USDC_BASE" | "USDT_ETHEREUM" | "USDT_POLYGON" | "WETH_POLYGON" | "WBTC_ETHEREUM" | "BNB_BNB" | "BNB_BSC" | "CELO" | "CUSD" | "DAI" | "FIL" | "MATIC" | "USDT" | "WETH" | "WBTC" | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    address: string;
    config: {
        email?: string | undefined;
        quoteCurrencyAmount?: number | undefined;
        paymentMethod?: "ach_bank_transfer" | "credit_debit_card" | "gbp_bank_transfer" | "gbp_open_banking_payment" | "mobile_wallet" | "sepa_bank_transfer" | "sepa_open_banking_payment" | "pix_instant_payment" | "yellow_card_bank_transfer" | undefined;
        uiConfig?: {
            theme?: "light" | "dark" | undefined;
            accentColor?: string | undefined;
        } | undefined;
        currencyCode?: "USDC" | "ETH" | "AVAX_CCHAIN" | "ETH_ARBITRUM" | "ETH_OPTIMISM" | "ETH_POLYGON" | "ETH_BASE" | "MATIC_POLYGON" | "USDC_ARBITRUM" | "USDC_OPTIMISM" | "USDC_POLYGON" | "USDC_BASE" | "USDT_POLYGON" | "BNB_BSC" | "CELO" | "CUSD" | "DAI" | "FIL" | "MATIC" | "USDT" | "WETH" | "WBTC" | "BNB" | undefined;
    };
}, {
    address: string;
    config: {
        email?: string | undefined;
        quoteCurrencyAmount?: number | undefined;
        paymentMethod?: "ach_bank_transfer" | "credit_debit_card" | "gbp_bank_transfer" | "gbp_open_banking_payment" | "mobile_wallet" | "sepa_bank_transfer" | "sepa_open_banking_payment" | "pix_instant_payment" | "yellow_card_bank_transfer" | undefined;
        uiConfig?: {
            theme?: "light" | "dark" | undefined;
            accentColor?: string | undefined;
        } | undefined;
        currencyCode?: "USDC" | "ETH" | "AVAX_CCHAIN" | "CELO_CELO" | "CUSD_CELO" | "DAI_ETHEREUM" | "ETH_ETHEREUM" | "ETH_ARBITRUM" | "ETH_OPTIMISM" | "ETH_POLYGON" | "ETH_BASE" | "FIL_FVM" | "MATIC_ETHEREUM" | "MATIC_POLYGON" | "USDC_ETHEREUM" | "USDC_ARBITRUM" | "USDC_OPTIMISM" | "USDC_POLYGON" | "USDC_BASE" | "USDT_ETHEREUM" | "USDT_POLYGON" | "WETH_POLYGON" | "WBTC_ETHEREUM" | "BNB_BNB" | "BNB_BSC" | "CELO" | "CUSD" | "DAI" | "FIL" | "MATIC" | "USDT" | "WETH" | "WBTC" | undefined;
    };
}>, z.ZodObject<{
    address: z.ZodEffects<z.ZodString, string, string>;
    config: z.ZodObject<z.objectUtil.extendShape<{
        quoteCurrencyAmount: z.ZodOptional<z.ZodNumber>;
        email: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        paymentMethod: z.ZodOptional<z.ZodEnum<["ach_bank_transfer", "credit_debit_card", "gbp_bank_transfer", "gbp_open_banking_payment", "mobile_wallet", "sepa_bank_transfer", "sepa_open_banking_payment", "pix_instant_payment", "yellow_card_bank_transfer"]>>;
        uiConfig: z.ZodOptional<z.ZodObject<{
            accentColor: z.ZodOptional<z.ZodString>;
            theme: z.ZodOptional<z.ZodEnum<["light", "dark"]>>;
        }, "strip", z.ZodTypeAny, {
            theme?: "light" | "dark" | undefined;
            accentColor?: string | undefined;
        }, {
            theme?: "light" | "dark" | undefined;
            accentColor?: string | undefined;
        }>>;
    }, {
        currencyCode: z.ZodOptional<z.ZodEnum<["SOL", "USDC_SOL"]>>;
    }>, "strip", z.ZodTypeAny, {
        email?: string | undefined;
        quoteCurrencyAmount?: number | undefined;
        paymentMethod?: "ach_bank_transfer" | "credit_debit_card" | "gbp_bank_transfer" | "gbp_open_banking_payment" | "mobile_wallet" | "sepa_bank_transfer" | "sepa_open_banking_payment" | "pix_instant_payment" | "yellow_card_bank_transfer" | undefined;
        uiConfig?: {
            theme?: "light" | "dark" | undefined;
            accentColor?: string | undefined;
        } | undefined;
        currencyCode?: "SOL" | "USDC_SOL" | undefined;
    }, {
        email?: string | undefined;
        quoteCurrencyAmount?: number | undefined;
        paymentMethod?: "ach_bank_transfer" | "credit_debit_card" | "gbp_bank_transfer" | "gbp_open_banking_payment" | "mobile_wallet" | "sepa_bank_transfer" | "sepa_open_banking_payment" | "pix_instant_payment" | "yellow_card_bank_transfer" | undefined;
        uiConfig?: {
            theme?: "light" | "dark" | undefined;
            accentColor?: string | undefined;
        } | undefined;
        currencyCode?: "SOL" | "USDC_SOL" | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    address: string;
    config: {
        email?: string | undefined;
        quoteCurrencyAmount?: number | undefined;
        paymentMethod?: "ach_bank_transfer" | "credit_debit_card" | "gbp_bank_transfer" | "gbp_open_banking_payment" | "mobile_wallet" | "sepa_bank_transfer" | "sepa_open_banking_payment" | "pix_instant_payment" | "yellow_card_bank_transfer" | undefined;
        uiConfig?: {
            theme?: "light" | "dark" | undefined;
            accentColor?: string | undefined;
        } | undefined;
        currencyCode?: "SOL" | "USDC_SOL" | undefined;
    };
}, {
    address: string;
    config: {
        email?: string | undefined;
        quoteCurrencyAmount?: number | undefined;
        paymentMethod?: "ach_bank_transfer" | "credit_debit_card" | "gbp_bank_transfer" | "gbp_open_banking_payment" | "mobile_wallet" | "sepa_bank_transfer" | "sepa_open_banking_payment" | "pix_instant_payment" | "yellow_card_bank_transfer" | undefined;
        uiConfig?: {
            theme?: "light" | "dark" | undefined;
            accentColor?: string | undefined;
        } | undefined;
        currencyCode?: "SOL" | "USDC_SOL" | undefined;
    };
}>]>, z.ZodObject<{
    useSandbox: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    useSandbox: boolean;
}, {
    useSandbox?: boolean | undefined;
}>>;
export type PrivyMoonpayOnRampSignInput = z.infer<typeof MoonpayOnRampSignInput>;
export const MoonpayOnRampSignResponse: z.ZodObject<{
    signedUrl: z.ZodString;
    externalTransactionId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    signedUrl: string;
    externalTransactionId: string;
}, {
    signedUrl: string;
    externalTransactionId: string;
}>;
export type PrivyMoonpayOnRampSignResponse = z.infer<typeof MoonpayOnRampSignResponse>;
export const SUPPORTED_OAUTH_PROVIDERS: readonly ["google", "discord", "twitter", "github", "spotify", "instagram", "tiktok", "linkedin", "apple"];
type PrivyOAuthProvider = `privy:${string}`;
type ExternalOAuthProviderType = (typeof SUPPORTED_OAUTH_PROVIDERS)[number];
export type OAuthProviderType = ExternalOAuthProviderType | PrivyOAuthProvider;
export const ExternalOAuthProvider: z.ZodEnum<["google", "discord", "twitter", "github", "spotify", "instagram", "tiktok", "linkedin", "apple"]>;
export const OAuthProvider: z.ZodUnion<[z.ZodEnum<["google", "discord", "twitter", "github", "spotify", "instagram", "tiktok", "linkedin", "apple"]>, z.ZodType<`privy:${string}`, z.ZodTypeDef, `privy:${string}`>]>;
export const AuthenticateOauthInput: z.ZodCatch<z.ZodObject<z.objectUtil.extendShape<{
    authorization_code: z.ZodString;
    state_code: z.ZodString;
    code_verifier: z.ZodOptional<z.ZodString>;
    code_type: z.ZodOptional<z.ZodEnum<["raw"]>>;
}, {
    mode: z.ZodOptional<z.ZodEnum<["no-signup", "login-or-sign-up"]>>;
}>, "strip", z.ZodTypeAny, {
    authorization_code: string;
    state_code: string;
    mode?: "no-signup" | "login-or-sign-up" | undefined;
    code_verifier?: string | undefined;
    code_type?: "raw" | undefined;
}, {
    authorization_code: string;
    state_code: string;
    mode?: "no-signup" | "login-or-sign-up" | undefined;
    code_verifier?: string | undefined;
    code_type?: "raw" | undefined;
}>>;
export interface PrivyAuthenticateOauthInput extends z.infer<typeof AuthenticateOauthInput> {
}
export const OAuthInitInput: z.ZodObject<{
    redirect_to: z.ZodString;
    provider: z.ZodUnion<[z.ZodEnum<["google", "discord", "twitter", "github", "spotify", "instagram", "tiktok", "linkedin", "apple"]>, z.ZodType<`privy:${string}`, z.ZodTypeDef, `privy:${string}`>]>;
    token: z.ZodOptional<z.ZodString>;
    state_code: z.ZodOptional<z.ZodString>;
    code_challenge: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    provider: "google" | "discord" | "twitter" | "github" | "spotify" | "instagram" | "tiktok" | "linkedin" | "apple" | `privy:${string}`;
    redirect_to: string;
    token?: string | undefined;
    state_code?: string | undefined;
    code_challenge?: string | undefined;
}, {
    provider: "google" | "discord" | "twitter" | "github" | "spotify" | "instagram" | "tiktok" | "linkedin" | "apple" | `privy:${string}`;
    redirect_to: string;
    token?: string | undefined;
    state_code?: string | undefined;
    code_challenge?: string | undefined;
}>;
export interface PrivyOAuthInitInput extends z.infer<typeof OAuthInitInput> {
}
export const LinkOAuthInput: z.ZodObject<{
    authorization_code: z.ZodString;
    state_code: z.ZodString;
    code_verifier: z.ZodOptional<z.ZodString>;
    code_type: z.ZodOptional<z.ZodEnum<["raw"]>>;
}, "strip", z.ZodTypeAny, {
    authorization_code: string;
    state_code: string;
    code_verifier?: string | undefined;
    code_type?: "raw" | undefined;
}, {
    authorization_code: string;
    state_code: string;
    code_verifier?: string | undefined;
    code_type?: "raw" | undefined;
}>;
export interface PrivyLinkOAuthInput extends z.infer<typeof LinkOAuthInput> {
}
export const OAuthUnlinkInput: z.ZodObject<{
    subject: z.ZodString;
    provider: z.ZodUnion<[z.ZodEnum<["google", "discord", "twitter", "github", "spotify", "instagram", "tiktok", "linkedin", "apple"]>, z.ZodType<`privy:${string}`, z.ZodTypeDef, `privy:${string}`>]>;
}, "strip", z.ZodTypeAny, {
    provider: "google" | "discord" | "twitter" | "github" | "spotify" | "instagram" | "tiktok" | "linkedin" | "apple" | `privy:${string}`;
    subject: string;
}, {
    provider: "google" | "discord" | "twitter" | "github" | "spotify" | "instagram" | "tiktok" | "linkedin" | "apple" | `privy:${string}`;
    subject: string;
}>;
export interface PrivyOAuthUnlinkInput extends z.infer<typeof OAuthUnlinkInput> {
}
export const OAuthInitResponse: z.ZodObject<{
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
}, {
    url: string;
}>;
export interface PrivyOAuthInitResponse extends z.infer<typeof OAuthInitResponse> {
}
export const OAuthLinkResponse: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    linked_accounts: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"email">;
        address: z.ZodString;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "email";
        address: string;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
    }, {
        type: "email";
        address: string;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"phone">;
        phoneNumber: z.ZodString;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "phone";
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        phoneNumber: string;
    }, {
        type: "phone";
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        phoneNumber: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"wallet">;
        address: z.ZodString;
        chain_id: z.ZodOptional<z.ZodString>;
        chain_type: z.ZodLiteral<"ethereum">;
        wallet_client: z.ZodLiteral<"unknown">;
        wallet_client_type: z.ZodOptional<z.ZodString>;
        connector_type: z.ZodOptional<z.ZodString>;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, z.ZodObject<{
        type: z.ZodLiteral<"wallet">;
        address: z.ZodString;
        chain_type: z.ZodLiteral<"solana">;
        wallet_client: z.ZodLiteral<"unknown">;
        wallet_client_type: z.ZodOptional<z.ZodString>;
        connector_type: z.ZodOptional<z.ZodString>;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "wallet";
        address: string;
        chain_type: "solana";
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        wallet_client: "unknown";
        wallet_client_type?: string | undefined;
        connector_type?: string | undefined;
    }, {
        type: "wallet";
        address: string;
        chain_type: "solana";
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        wallet_client: "unknown";
        wallet_client_type?: string | undefined;
        connector_type?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"smart_wallet">;
        address: z.ZodString;
        smart_wallet_type: z.ZodEnum<["safe", "kernel", "biconomy", "light_account", "coinbase_smart_wallet"]>;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "smart_wallet";
        address: string;
        smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
    }, {
        type: "smart_wallet";
        address: string;
        smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"wallet">;
        address: z.ZodString;
        imported: z.ZodDefault<z.ZodBoolean>;
        delegated: z.ZodDefault<z.ZodBoolean>;
        wallet_index: z.ZodNumber;
        chain_id: z.ZodString;
        chain_type: z.ZodString;
        wallet_client: z.ZodLiteral<"privy">;
        wallet_client_type: z.ZodLiteral<"privy">;
        connector_type: z.ZodLiteral<"embedded">;
        recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, {
        chain_type: z.ZodLiteral<"ethereum">;
    }>, "strip", z.ZodTypeAny, {
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
    }, {
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
        recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        imported?: boolean | undefined;
        delegated?: boolean | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"wallet">;
        address: z.ZodString;
        imported: z.ZodDefault<z.ZodBoolean>;
        delegated: z.ZodDefault<z.ZodBoolean>;
        wallet_index: z.ZodNumber;
        chain_id: z.ZodString;
        chain_type: z.ZodString;
        wallet_client: z.ZodLiteral<"privy">;
        wallet_client_type: z.ZodLiteral<"privy">;
        connector_type: z.ZodLiteral<"embedded">;
        recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, {
        chain_type: z.ZodLiteral<"solana">;
        public_key: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
    }, {
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
        recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        imported?: boolean | undefined;
        delegated?: boolean | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"wallet">;
        address: z.ZodString;
        imported: z.ZodDefault<z.ZodBoolean>;
        delegated: z.ZodDefault<z.ZodBoolean>;
        wallet_index: z.ZodNumber;
        chain_id: z.ZodString;
        chain_type: z.ZodString;
        wallet_client: z.ZodLiteral<"privy">;
        wallet_client_type: z.ZodLiteral<"privy">;
        connector_type: z.ZodLiteral<"embedded">;
        recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, {
        chain_type: z.ZodLiteral<"bitcoin-segwit">;
        public_key: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
    }, {
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
        recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        imported?: boolean | undefined;
        delegated?: boolean | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"wallet">;
        address: z.ZodString;
        imported: z.ZodDefault<z.ZodBoolean>;
        delegated: z.ZodDefault<z.ZodBoolean>;
        wallet_index: z.ZodNumber;
        chain_id: z.ZodString;
        chain_type: z.ZodString;
        wallet_client: z.ZodLiteral<"privy">;
        wallet_client_type: z.ZodLiteral<"privy">;
        connector_type: z.ZodLiteral<"embedded">;
        recovery_method: z.ZodEnum<["privy", "user-passcode", "google-drive", "icloud"]>;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, {
        chain_type: z.ZodLiteral<"bitcoin-taproot">;
        public_key: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
    }, {
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
        recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        imported?: boolean | undefined;
        delegated?: boolean | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"google_oauth">;
        subject: z.ZodString;
        email: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "google_oauth";
        name: string | null;
        email: string;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }, {
        type: "google_oauth";
        name: string | null;
        email: string;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"twitter_oauth">;
        subject: z.ZodString;
        username: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        profile_picture_url: z.ZodNullable<z.ZodString>;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "twitter_oauth";
        name: string | null;
        username: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        profile_picture_url: string | null;
        subject: string;
    }, {
        type: "twitter_oauth";
        name: string | null;
        username: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        profile_picture_url: string | null;
        subject: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"discord_oauth">;
        subject: z.ZodString;
        username: z.ZodNullable<z.ZodString>;
        email: z.ZodNullable<z.ZodString>;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "discord_oauth";
        email: string | null;
        username: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }, {
        type: "discord_oauth";
        email: string | null;
        username: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"github_oauth">;
        subject: z.ZodString;
        username: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        email: z.ZodNullable<z.ZodString>;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "github_oauth";
        name: string | null;
        email: string | null;
        username: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }, {
        type: "github_oauth";
        name: string | null;
        email: string | null;
        username: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"spotify_oauth">;
        subject: z.ZodString;
        email: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "spotify_oauth";
        name: string | null;
        email: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }, {
        type: "spotify_oauth";
        name: string | null;
        email: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"instagram_oauth">;
        subject: z.ZodString;
        username: z.ZodNullable<z.ZodString>;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "instagram_oauth";
        username: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }, {
        type: "instagram_oauth";
        username: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"tiktok_oauth">;
        subject: z.ZodString;
        username: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "tiktok_oauth";
        name: string | null;
        username: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }, {
        type: "tiktok_oauth";
        name: string | null;
        username: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"linkedin_oauth">;
        subject: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        email: z.ZodNullable<z.ZodString>;
        vanity_name: z.ZodOptional<z.ZodString>;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "linkedin_oauth";
        email: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
        name?: string | undefined;
        vanity_name?: string | undefined;
    }, {
        type: "linkedin_oauth";
        email: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
        name?: string | undefined;
        vanity_name?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"apple_oauth">;
        subject: z.ZodString;
        email: z.ZodNullable<z.ZodString>;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "apple_oauth";
        email: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }, {
        type: "apple_oauth";
        email: string | null;
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        subject: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"custom_auth">;
        custom_user_id: z.ZodString;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "custom_auth";
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        custom_user_id: string;
    }, {
        type: "custom_auth";
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        custom_user_id: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"farcaster">;
        fid: z.ZodNumber;
        owner_address: z.ZodEffects<z.ZodString, string, string>;
        username: z.ZodOptional<z.ZodString>;
        display_name: z.ZodOptional<z.ZodString>;
        bio: z.ZodOptional<z.ZodString>;
        profile_picture: z.ZodOptional<z.ZodString>;
        profile_picture_url: z.ZodOptional<z.ZodString>;
        homepage_url: z.ZodOptional<z.ZodString>;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
        signer_public_key: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, z.ZodObject<{
        type: z.ZodLiteral<"passkey">;
        created_with_browser: z.ZodOptional<z.ZodString>;
        created_with_os: z.ZodOptional<z.ZodString>;
        created_with_device: z.ZodOptional<z.ZodString>;
        credential_id: z.ZodString;
        authenticator_name: z.ZodOptional<z.ZodString>;
        enrolled_in_mfa: z.ZodBoolean;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, z.ZodEffects<z.ZodObject<{
        type: z.ZodLiteral<"telegram">;
        telegram_user_id: z.ZodString;
        first_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        last_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        username: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        photo_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "telegram";
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        telegram_user_id: string;
        username?: string | null | undefined;
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        photo_url?: string | null | undefined;
    }, {
        type: "telegram";
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        telegram_user_id: string;
        username?: string | null | undefined;
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        photo_url?: string | null | undefined;
    }>, {
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
    }, {
        type: "telegram";
        verified_at: number;
        first_verified_at: number | null;
        latest_verified_at: number | null;
        telegram_user_id: string;
        username?: string | null | undefined;
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        photo_url?: string | null | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"cross_app">;
        subject: z.ZodString;
        provider_app_id: z.ZodString;
        embedded_wallets: z.ZodArray<z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>, "many">;
        smart_wallets: z.ZodArray<z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>, "many">;
        verified_at: z.ZodNumber;
        first_verified_at: z.ZodNullable<z.ZodNumber>;
        latest_verified_at: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>]>, "many">;
    mfa_methods: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"sms">;
        verified_at: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "sms";
        verified_at: number;
    }, {
        type: "sms";
        verified_at: number;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"totp">;
        verified_at: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "totp";
        verified_at: number;
    }, {
        type: "totp";
        verified_at: number;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"passkey">;
        verified_at: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "passkey";
        verified_at: number;
    }, {
        type: "passkey";
        verified_at: number;
    }>]>, "many">;
    created_at: z.ZodNumber;
    has_accepted_terms: z.ZodBoolean;
    is_guest: z.ZodBoolean;
    custom_metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>>;
}, {
    oauth_tokens: z.ZodOptional<z.ZodObject<{
        provider: z.ZodString;
        access_token: z.ZodString;
        access_token_expires_in_seconds: z.ZodOptional<z.ZodNumber>;
        refresh_token: z.ZodOptional<z.ZodString>;
        refresh_token_expires_in_seconds: z.ZodOptional<z.ZodNumber>;
        scopes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        provider: string;
        access_token: string;
        access_token_expires_in_seconds?: number | undefined;
        refresh_token?: string | undefined;
        refresh_token_expires_in_seconds?: number | undefined;
        scopes?: string[] | undefined;
    }, {
        provider: string;
        access_token: string;
        access_token_expires_in_seconds?: number | undefined;
        refresh_token?: string | undefined;
        refresh_token_expires_in_seconds?: number | undefined;
        scopes?: string[] | undefined;
    }>>;
}>, "strip", z.ZodTypeAny, {
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
    oauth_tokens?: {
        provider: string;
        access_token: string;
        access_token_expires_in_seconds?: number | undefined;
        refresh_token?: string | undefined;
        refresh_token_expires_in_seconds?: number | undefined;
        scopes?: string[] | undefined;
    } | undefined;
}, {
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
        recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        imported?: boolean | undefined;
        delegated?: boolean | undefined;
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
        recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        imported?: boolean | undefined;
        delegated?: boolean | undefined;
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
        recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        imported?: boolean | undefined;
        delegated?: boolean | undefined;
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
        recovery_method: "user-passcode" | "google-drive" | "icloud" | "privy";
        imported?: boolean | undefined;
        delegated?: boolean | undefined;
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
    oauth_tokens?: {
        provider: string;
        access_token: string;
        access_token_expires_in_seconds?: number | undefined;
        refresh_token?: string | undefined;
        refresh_token_expires_in_seconds?: number | undefined;
        scopes?: string[] | undefined;
    } | undefined;
}>;
export interface PrivyOAuthLinkResponse extends z.infer<typeof OAuthLinkResponse> {
}
export const TransferOAuthInput: z.ZodObject<z.objectUtil.extendShape<{
    nonce: z.ZodString;
}, {
    userInfo: z.ZodObject<{
        subject: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        username: z.ZodOptional<z.ZodString>;
        profilePictureUrl: z.ZodOptional<z.ZodString>;
        email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        vanityName: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        subject: string;
        name?: string | undefined;
        email?: string | null | undefined;
        username?: string | undefined;
        profilePictureUrl?: string | undefined;
        vanityName?: string | undefined;
    }, {
        subject: string;
        name?: string | undefined;
        email?: string | null | undefined;
        username?: string | undefined;
        profilePictureUrl?: string | undefined;
        vanityName?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    nonce: string;
    userInfo: {
        subject: string;
        name?: string | undefined;
        email?: string | null | undefined;
        username?: string | undefined;
        profilePictureUrl?: string | undefined;
        vanityName?: string | undefined;
    };
}, {
    nonce: string;
    userInfo: {
        subject: string;
        name?: string | undefined;
        email?: string | null | undefined;
        username?: string | undefined;
        profilePictureUrl?: string | undefined;
        vanityName?: string | undefined;
    };
}>;
export const AuthorizationCodeInput: z.ZodObject<{
    redirect_to: z.ZodString;
    state: z.ZodString;
    code_challenge: z.ZodString;
}, "strip", z.ZodTypeAny, {
    state: string;
    redirect_to: string;
    code_challenge: string;
}, {
    state: string;
    redirect_to: string;
    code_challenge: string;
}>;
export const EmptyObject: z.ZodRecord<z.ZodString, z.ZodNever>;
export interface PrivyEmptyObject extends z.infer<typeof EmptyObject> {
}
export const SuccessObject: z.ZodObject<{
    success: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    success: boolean;
}, {
    success: boolean;
}>;
export interface PrivySuccessObject extends z.infer<typeof SuccessObject> {
}
export const PolicyAction: z.ZodEnum<["ALLOW", "DENY"]>;
export type PolicyActionType = z.infer<typeof PolicyAction>;
export const Condition: z.ZodEffects<z.ZodObject<{
    /** The field's source (e.g. ethereum_transaction) */
    field_source: z.ZodEnum<["ethereum_transaction"]>;
    /** The field to compare in the condition */
    field: z.ZodLiteral<"to">;
    /** The operator to use */
    operator: z.ZodUnion<[z.ZodLiteral<"eq">, z.ZodLiteral<"in">]>;
    /** The value to compare */
    value: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
}, "strip", z.ZodTypeAny, {
    value: string | string[];
    field_source: "ethereum_transaction";
    field: "to";
    operator: "eq" | "in";
}, {
    value: string | string[];
    field_source: "ethereum_transaction";
    field: "to";
    operator: "eq" | "in";
}>, {
    value: string | string[];
    field_source: "ethereum_transaction";
    field: "to";
    operator: "eq" | "in";
}, {
    value: string | string[];
    field_source: "ethereum_transaction";
    field: "to";
    operator: "eq" | "in";
}>;
export type ConditionType = z.infer<typeof Condition>;
export const Rule: z.ZodObject<{
    /** The name of the rule */
    name: z.ZodString;
    /** The conditions that must be true for the rule action to be applied */
    conditions: z.ZodArray<z.ZodEffects<z.ZodObject<{
        /** The field's source (e.g. ethereum_transaction) */
        field_source: z.ZodEnum<["ethereum_transaction"]>;
        /** The field to compare in the condition */
        field: z.ZodLiteral<"to">;
        /** The operator to use */
        operator: z.ZodUnion<[z.ZodLiteral<"eq">, z.ZodLiteral<"in">]>;
        /** The value to compare */
        value: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
    }, "strip", z.ZodTypeAny, {
        value: string | string[];
        field_source: "ethereum_transaction";
        field: "to";
        operator: "eq" | "in";
    }, {
        value: string | string[];
        field_source: "ethereum_transaction";
        field: "to";
        operator: "eq" | "in";
    }>, {
        value: string | string[];
        field_source: "ethereum_transaction";
        field: "to";
        operator: "eq" | "in";
    }, {
        value: string | string[];
        field_source: "ethereum_transaction";
        field: "to";
        operator: "eq" | "in";
    }>, "many">;
    /** The action to apply if the rule conditions are true */
    action: z.ZodEnum<["ALLOW", "DENY"]>;
}, "strip", z.ZodTypeAny, {
    name: string;
    action: "ALLOW" | "DENY";
    conditions: {
        value: string | string[];
        field_source: "ethereum_transaction";
        field: "to";
        operator: "eq" | "in";
    }[];
}, {
    name: string;
    action: "ALLOW" | "DENY";
    conditions: {
        value: string | string[];
        field_source: "ethereum_transaction";
        field: "to";
        operator: "eq" | "in";
    }[];
}>;
export type RuleType = z.infer<typeof Rule>;
declare const PolicyMethod: z.ZodUnion<[z.ZodLiteral<"eth_sendTransaction">, z.ZodLiteral<"eth_signTransaction">]>;
export type PolicyMethodType = z.infer<typeof PolicyMethod>;
declare const MethodRules: z.ZodObject<{
    method: z.ZodUnion<[z.ZodLiteral<"eth_sendTransaction">, z.ZodLiteral<"eth_signTransaction">]>;
    rules: z.ZodArray<z.ZodObject<{
        /** The name of the rule */
        name: z.ZodString;
        /** The conditions that must be true for the rule action to be applied */
        conditions: z.ZodArray<z.ZodEffects<z.ZodObject<{
            /** The field's source (e.g. ethereum_transaction) */
            field_source: z.ZodEnum<["ethereum_transaction"]>;
            /** The field to compare in the condition */
            field: z.ZodLiteral<"to">;
            /** The operator to use */
            operator: z.ZodUnion<[z.ZodLiteral<"eq">, z.ZodLiteral<"in">]>;
            /** The value to compare */
            value: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
        }, "strip", z.ZodTypeAny, {
            value: string | string[];
            field_source: "ethereum_transaction";
            field: "to";
            operator: "eq" | "in";
        }, {
            value: string | string[];
            field_source: "ethereum_transaction";
            field: "to";
            operator: "eq" | "in";
        }>, {
            value: string | string[];
            field_source: "ethereum_transaction";
            field: "to";
            operator: "eq" | "in";
        }, {
            value: string | string[];
            field_source: "ethereum_transaction";
            field: "to";
            operator: "eq" | "in";
        }>, "many">;
        /** The action to apply if the rule conditions are true */
        action: z.ZodEnum<["ALLOW", "DENY"]>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        action: "ALLOW" | "DENY";
        conditions: {
            value: string | string[];
            field_source: "ethereum_transaction";
            field: "to";
            operator: "eq" | "in";
        }[];
    }, {
        name: string;
        action: "ALLOW" | "DENY";
        conditions: {
            value: string | string[];
            field_source: "ethereum_transaction";
            field: "to";
            operator: "eq" | "in";
        }[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    method: "eth_sendTransaction" | "eth_signTransaction";
    rules: {
        name: string;
        action: "ALLOW" | "DENY";
        conditions: {
            value: string | string[];
            field_source: "ethereum_transaction";
            field: "to";
            operator: "eq" | "in";
        }[];
    }[];
}, {
    method: "eth_sendTransaction" | "eth_signTransaction";
    rules: {
        name: string;
        action: "ALLOW" | "DENY";
        conditions: {
            value: string | string[];
            field_source: "ethereum_transaction";
            field: "to";
            operator: "eq" | "in";
        }[];
    }[];
}>;
export type MethodRulesType = z.infer<typeof MethodRules>;
export const PolicyWithoutRefinement: z.ZodObject<{
    /** The policy schema version */
    version: z.ZodLiteral<"1.0">;
    /** The name of the policy */
    name: z.ZodString;
    /** The chain type the policy applies to */
    chain_type: z.ZodLiteral<"ethereum">;
    /** The rules that apply to each method the policy covers, each method can only be specified once */
    method_rules: z.ZodArray<z.ZodObject<{
        method: z.ZodUnion<[z.ZodLiteral<"eth_sendTransaction">, z.ZodLiteral<"eth_signTransaction">]>;
        rules: z.ZodArray<z.ZodObject<{
            /** The name of the rule */
            name: z.ZodString;
            /** The conditions that must be true for the rule action to be applied */
            conditions: z.ZodArray<z.ZodEffects<z.ZodObject<{
                /** The field's source (e.g. ethereum_transaction) */
                field_source: z.ZodEnum<["ethereum_transaction"]>;
                /** The field to compare in the condition */
                field: z.ZodLiteral<"to">;
                /** The operator to use */
                operator: z.ZodUnion<[z.ZodLiteral<"eq">, z.ZodLiteral<"in">]>;
                /** The value to compare */
                value: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
            }, "strip", z.ZodTypeAny, {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }, {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }>, {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }, {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }>, "many">;
            /** The action to apply if the rule conditions are true */
            action: z.ZodEnum<["ALLOW", "DENY"]>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }, {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        method: "eth_sendTransaction" | "eth_signTransaction";
        rules: {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }[];
    }, {
        method: "eth_sendTransaction" | "eth_signTransaction";
        rules: {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }[];
    }>, "many">;
    /** The default action to take if the request does not match the method or if no rules match for the request's method */
    default_action: z.ZodEnum<["ALLOW", "DENY"]>;
}, "strip", z.ZodTypeAny, {
    name: string;
    chain_type: "ethereum";
    version: "1.0";
    method_rules: {
        method: "eth_sendTransaction" | "eth_signTransaction";
        rules: {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }[];
    }[];
    default_action: "ALLOW" | "DENY";
}, {
    name: string;
    chain_type: "ethereum";
    version: "1.0";
    method_rules: {
        method: "eth_sendTransaction" | "eth_signTransaction";
        rules: {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }[];
    }[];
    default_action: "ALLOW" | "DENY";
}>;
export type PolicyType = z.infer<typeof PolicyWithoutRefinement>;
export const OldPolicySchema: z.ZodObject<{
    /** The policy schema version */
    version: z.ZodLiteral<"1.0">;
    /** The name of the policy */
    name: z.ZodString;
    /** The chain type the policy applies to */
    chain_type: z.ZodLiteral<"ethereum">;
    /** The method the policy applies to */
    method: z.ZodUnion<[z.ZodLiteral<"eth_sendTransaction">, z.ZodLiteral<"eth_signTransaction">]>;
    /** The rules that define the policy */
    rules: z.ZodArray<z.ZodObject<{
        /** The name of the rule */
        name: z.ZodString;
        /** The conditions that must be true for the rule action to be applied */
        conditions: z.ZodArray<z.ZodEffects<z.ZodObject<{
            /** The field's source (e.g. ethereum_transaction) */
            field_source: z.ZodEnum<["ethereum_transaction"]>;
            /** The field to compare in the condition */
            field: z.ZodLiteral<"to">;
            /** The operator to use */
            operator: z.ZodUnion<[z.ZodLiteral<"eq">, z.ZodLiteral<"in">]>;
            /** The value to compare */
            value: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
        }, "strip", z.ZodTypeAny, {
            value: string | string[];
            field_source: "ethereum_transaction";
            field: "to";
            operator: "eq" | "in";
        }, {
            value: string | string[];
            field_source: "ethereum_transaction";
            field: "to";
            operator: "eq" | "in";
        }>, {
            value: string | string[];
            field_source: "ethereum_transaction";
            field: "to";
            operator: "eq" | "in";
        }, {
            value: string | string[];
            field_source: "ethereum_transaction";
            field: "to";
            operator: "eq" | "in";
        }>, "many">;
        /** The action to apply if the rule conditions are true */
        action: z.ZodEnum<["ALLOW", "DENY"]>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        action: "ALLOW" | "DENY";
        conditions: {
            value: string | string[];
            field_source: "ethereum_transaction";
            field: "to";
            operator: "eq" | "in";
        }[];
    }, {
        name: string;
        action: "ALLOW" | "DENY";
        conditions: {
            value: string | string[];
            field_source: "ethereum_transaction";
            field: "to";
            operator: "eq" | "in";
        }[];
    }>, "many">;
    /** The default action to take if no rules match */
    default_action: z.ZodEnum<["ALLOW", "DENY"]>;
}, "strip", z.ZodTypeAny, {
    method: "eth_sendTransaction" | "eth_signTransaction";
    name: string;
    chain_type: "ethereum";
    rules: {
        name: string;
        action: "ALLOW" | "DENY";
        conditions: {
            value: string | string[];
            field_source: "ethereum_transaction";
            field: "to";
            operator: "eq" | "in";
        }[];
    }[];
    version: "1.0";
    default_action: "ALLOW" | "DENY";
}, {
    method: "eth_sendTransaction" | "eth_signTransaction";
    name: string;
    chain_type: "ethereum";
    rules: {
        name: string;
        action: "ALLOW" | "DENY";
        conditions: {
            value: string | string[];
            field_source: "ethereum_transaction";
            field: "to";
            operator: "eq" | "in";
        }[];
    }[];
    version: "1.0";
    default_action: "ALLOW" | "DENY";
}>;
export type OldPolicyType = z.infer<typeof OldPolicySchema>;
export const Policy: z.ZodEffects<z.ZodObject<{
    /** The policy schema version */
    version: z.ZodLiteral<"1.0">;
    /** The name of the policy */
    name: z.ZodString;
    /** The chain type the policy applies to */
    chain_type: z.ZodLiteral<"ethereum">;
    /** The rules that apply to each method the policy covers, each method can only be specified once */
    method_rules: z.ZodArray<z.ZodObject<{
        method: z.ZodUnion<[z.ZodLiteral<"eth_sendTransaction">, z.ZodLiteral<"eth_signTransaction">]>;
        rules: z.ZodArray<z.ZodObject<{
            /** The name of the rule */
            name: z.ZodString;
            /** The conditions that must be true for the rule action to be applied */
            conditions: z.ZodArray<z.ZodEffects<z.ZodObject<{
                /** The field's source (e.g. ethereum_transaction) */
                field_source: z.ZodEnum<["ethereum_transaction"]>;
                /** The field to compare in the condition */
                field: z.ZodLiteral<"to">;
                /** The operator to use */
                operator: z.ZodUnion<[z.ZodLiteral<"eq">, z.ZodLiteral<"in">]>;
                /** The value to compare */
                value: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
            }, "strip", z.ZodTypeAny, {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }, {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }>, {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }, {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }>, "many">;
            /** The action to apply if the rule conditions are true */
            action: z.ZodEnum<["ALLOW", "DENY"]>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }, {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        method: "eth_sendTransaction" | "eth_signTransaction";
        rules: {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }[];
    }, {
        method: "eth_sendTransaction" | "eth_signTransaction";
        rules: {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }[];
    }>, "many">;
    /** The default action to take if the request does not match the method or if no rules match for the request's method */
    default_action: z.ZodEnum<["ALLOW", "DENY"]>;
}, "strip", z.ZodTypeAny, {
    name: string;
    chain_type: "ethereum";
    version: "1.0";
    method_rules: {
        method: "eth_sendTransaction" | "eth_signTransaction";
        rules: {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }[];
    }[];
    default_action: "ALLOW" | "DENY";
}, {
    name: string;
    chain_type: "ethereum";
    version: "1.0";
    method_rules: {
        method: "eth_sendTransaction" | "eth_signTransaction";
        rules: {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }[];
    }[];
    default_action: "ALLOW" | "DENY";
}>, {
    name: string;
    chain_type: "ethereum";
    version: "1.0";
    method_rules: {
        method: "eth_sendTransaction" | "eth_signTransaction";
        rules: {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }[];
    }[];
    default_action: "ALLOW" | "DENY";
}, {
    name: string;
    chain_type: "ethereum";
    version: "1.0";
    method_rules: {
        method: "eth_sendTransaction" | "eth_signTransaction";
        rules: {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }[];
    }[];
    default_action: "ALLOW" | "DENY";
}>;
export type PolicyInputType = z.infer<typeof Policy>;
export const PolicyResponse: z.ZodObject<z.objectUtil.extendShape<{
    /** The policy schema version */
    version: z.ZodLiteral<"1.0">;
    /** The name of the policy */
    name: z.ZodString;
    /** The chain type the policy applies to */
    chain_type: z.ZodLiteral<"ethereum">;
    /** The rules that apply to each method the policy covers, each method can only be specified once */
    method_rules: z.ZodArray<z.ZodObject<{
        method: z.ZodUnion<[z.ZodLiteral<"eth_sendTransaction">, z.ZodLiteral<"eth_signTransaction">]>;
        rules: z.ZodArray<z.ZodObject<{
            /** The name of the rule */
            name: z.ZodString;
            /** The conditions that must be true for the rule action to be applied */
            conditions: z.ZodArray<z.ZodEffects<z.ZodObject<{
                /** The field's source (e.g. ethereum_transaction) */
                field_source: z.ZodEnum<["ethereum_transaction"]>;
                /** The field to compare in the condition */
                field: z.ZodLiteral<"to">;
                /** The operator to use */
                operator: z.ZodUnion<[z.ZodLiteral<"eq">, z.ZodLiteral<"in">]>;
                /** The value to compare */
                value: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
            }, "strip", z.ZodTypeAny, {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }, {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }>, {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }, {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }>, "many">;
            /** The action to apply if the rule conditions are true */
            action: z.ZodEnum<["ALLOW", "DENY"]>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }, {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        method: "eth_sendTransaction" | "eth_signTransaction";
        rules: {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }[];
    }, {
        method: "eth_sendTransaction" | "eth_signTransaction";
        rules: {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }[];
    }>, "many">;
    /** The default action to take if the request does not match the method or if no rules match for the request's method */
    default_action: z.ZodEnum<["ALLOW", "DENY"]>;
}, {
    id: z.ZodString;
    created_at: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    chain_type: "ethereum";
    created_at: number;
    version: "1.0";
    method_rules: {
        method: "eth_sendTransaction" | "eth_signTransaction";
        rules: {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }[];
    }[];
    default_action: "ALLOW" | "DENY";
}, {
    id: string;
    name: string;
    chain_type: "ethereum";
    created_at: number;
    version: "1.0";
    method_rules: {
        method: "eth_sendTransaction" | "eth_signTransaction";
        rules: {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }[];
    }[];
    default_action: "ALLOW" | "DENY";
}>;
export type PolicyResponseType = z.infer<typeof PolicyResponse>;
/**
 * Parses a JSON representation of a URL's path variables
 * for the `policy_id`
 *
 * Throws an error if the `policy_id` is not defined
 * or is not a valid, non-empty string.
 */
export const PolicyIdFromPath: z.ZodCatch<z.ZodObject<{
    policy_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    policy_id: string;
}, {
    policy_id: string;
}>>;
export const UpdatePolicyInput: z.ZodEffects<z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    method_rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
        method: z.ZodUnion<[z.ZodLiteral<"eth_sendTransaction">, z.ZodLiteral<"eth_signTransaction">]>;
        rules: z.ZodArray<z.ZodObject<{
            /** The name of the rule */
            name: z.ZodString;
            /** The conditions that must be true for the rule action to be applied */
            conditions: z.ZodArray<z.ZodEffects<z.ZodObject<{
                /** The field's source (e.g. ethereum_transaction) */
                field_source: z.ZodEnum<["ethereum_transaction"]>;
                /** The field to compare in the condition */
                field: z.ZodLiteral<"to">;
                /** The operator to use */
                operator: z.ZodUnion<[z.ZodLiteral<"eq">, z.ZodLiteral<"in">]>;
                /** The value to compare */
                value: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
            }, "strip", z.ZodTypeAny, {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }, {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }>, {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }, {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }>, "many">;
            /** The action to apply if the rule conditions are true */
            action: z.ZodEnum<["ALLOW", "DENY"]>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }, {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        method: "eth_sendTransaction" | "eth_signTransaction";
        rules: {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }[];
    }, {
        method: "eth_sendTransaction" | "eth_signTransaction";
        rules: {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }[];
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    method_rules?: {
        method: "eth_sendTransaction" | "eth_signTransaction";
        rules: {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }[];
    }[] | undefined;
}, {
    name?: string | undefined;
    method_rules?: {
        method: "eth_sendTransaction" | "eth_signTransaction";
        rules: {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }[];
    }[] | undefined;
}>, {
    name?: string | undefined;
    method_rules?: {
        method: "eth_sendTransaction" | "eth_signTransaction";
        rules: {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }[];
    }[] | undefined;
}, {
    name?: string | undefined;
    method_rules?: {
        method: "eth_sendTransaction" | "eth_signTransaction";
        rules: {
            name: string;
            action: "ALLOW" | "DENY";
            conditions: {
                value: string | string[];
                field_source: "ethereum_transaction";
                field: "to";
                operator: "eq" | "in";
            }[];
        }[];
    }[] | undefined;
}>;
export type UpdatePolicyInputType = z.infer<typeof UpdatePolicyInput>;
export interface PrivyRecoveryKeyMaterialInput extends z.infer<typeof RecoveryKeyMaterialInput> {
}
export const RecoveryKeyMaterialInput: z.ZodObject<{
    chain_type: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    chain_type?: string | undefined;
}, {
    chain_type?: string | undefined;
}>;
export const RecoveryKeyMaterialResponse: z.ZodObject<{
    recovery_type: z.ZodEnum<["user_passcode_derived_recovery_key", "privy_passcode_derived_recovery_key", "privy_generated_recovery_key", "google_drive_recovery_secret", "icloud_recovery_secret"]>;
    recovery_key_derivation_salt: z.ZodString;
    recovery_code: z.ZodString;
    recovery_key: z.ZodString;
    file_id: z.ZodString;
    icloud_record_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    recovery_type: "user_passcode_derived_recovery_key" | "privy_passcode_derived_recovery_key" | "privy_generated_recovery_key" | "google_drive_recovery_secret" | "icloud_recovery_secret";
    recovery_key_derivation_salt: string;
    recovery_code: string;
    recovery_key: string;
    file_id: string;
    icloud_record_name: string;
}, {
    recovery_type: "user_passcode_derived_recovery_key" | "privy_passcode_derived_recovery_key" | "privy_generated_recovery_key" | "google_drive_recovery_secret" | "icloud_recovery_secret";
    recovery_key_derivation_salt: string;
    recovery_code: string;
    recovery_key: string;
    file_id: string;
    icloud_record_name: string;
}>;
export interface PrivyRecoveryKeyMaterialResponse extends z.infer<typeof RecoveryKeyMaterialResponse> {
}
export const OAuthAuthenticateRecoveryResponse: z.ZodObject<{
    access_token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    access_token: string;
}, {
    access_token: string;
}>;
export interface PrivyOAuthAuthenticateRecoveryResponse extends z.infer<typeof OAuthAuthenticateRecoveryResponse> {
}
export const OAuthInitRecoveryInput: z.ZodObject<{
    redirect_to: z.ZodString;
    token: z.ZodOptional<z.ZodString>;
    state_code: z.ZodOptional<z.ZodString>;
    code_challenge: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    redirect_to: string;
    token?: string | undefined;
    state_code?: string | undefined;
    code_challenge?: string | undefined;
}, {
    redirect_to: string;
    token?: string | undefined;
    state_code?: string | undefined;
    code_challenge?: string | undefined;
}>;
export interface PrivyOAuthInitRecoveryInput extends z.infer<typeof OAuthInitRecoveryInput> {
}
export const OAuthInitICloudRecoveryInput: z.ZodObject<{
    client_type: z.ZodEnum<["web", "expo-ios"]>;
}, "strip", z.ZodTypeAny, {
    client_type: "web" | "expo-ios";
}, {
    client_type: "web" | "expo-ios";
}>;
export interface PrivyOAuthInitICloudRecoveryInput extends z.infer<typeof OAuthInitICloudRecoveryInput> {
}
export const OAuthCallbackICloudExpoInput: z.ZodCatch<z.ZodEffects<z.ZodObject<{
    /**
     * The authorization code from apple
     */
    ckWebAuthToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    ckWebAuthToken: string;
}, {
    ckWebAuthToken: string;
}>, {
    ckWebAuthToken: string;
}, {
    ckWebAuthToken: string;
}>>;
export interface PrivyOAuthCallbackICloudExpoInput extends z.infer<typeof OAuthCallbackICloudExpoInput> {
}
export const OAuthCallbackICloudExpoResponse: z.ZodRecord<z.ZodString, z.ZodNever>;
export interface PrivyOAuthCallbackICloudExpoResponse extends z.infer<typeof OAuthCallbackICloudExpoResponse> {
}
export const RecoveryConfigurationICloudInput: z.ZodObject<{
    client_type: z.ZodEnum<["web", "expo-ios"]>;
}, "strip", z.ZodTypeAny, {
    client_type: "web" | "expo-ios";
}, {
    client_type: "web" | "expo-ios";
}>;
export interface PrivyRecoveryConfigurationICloudInput extends z.infer<typeof RecoveryConfigurationICloudInput> {
}
export const RecoveryConfigurationICloudResponse: z.ZodObject<{
    api_token: z.ZodString;
    container_identifier: z.ZodString;
    environment: z.ZodString;
}, "strip", z.ZodTypeAny, {
    api_token: string;
    container_identifier: string;
    environment: string;
}, {
    api_token: string;
    container_identifier: string;
    environment: string;
}>;
export interface PrivyRecoveryConfigurationICloudResponse extends z.infer<typeof RecoveryConfigurationICloudResponse> {
}
export const SiweInput: z.ZodObject<{
    message: z.ZodString;
    signature: z.ZodString;
    chainId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    walletClientType: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    connectorType: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    message: string;
    signature: string;
    chainId: string | null;
    walletClientType: string | null;
    connectorType: string | null;
}, {
    message: string;
    signature: string;
    chainId?: string | null | undefined;
    walletClientType?: string | null | undefined;
    connectorType?: string | null | undefined;
}>;
export interface PrivySiweInput extends z.input<typeof SiweInput> {
}
export const SmartWalletSiweInput: z.ZodObject<{
    message: z.ZodString;
    signature: z.ZodString;
    smart_wallet_type: z.ZodEnum<["safe", "kernel", "biconomy", "light_account", "coinbase_smart_wallet"]>;
}, "strip", z.ZodTypeAny, {
    message: string;
    signature: string;
    smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
}, {
    message: string;
    signature: string;
    smart_wallet_type: "safe" | "kernel" | "biconomy" | "light_account" | "coinbase_smart_wallet";
}>;
export interface PrivySmartWalletSiweInput extends z.input<typeof SmartWalletSiweInput> {
}
export const AuthenticateSiweInput: z.ZodObject<z.objectUtil.extendShape<{
    message: z.ZodString;
    signature: z.ZodString;
    chainId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    walletClientType: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    connectorType: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, {
    mode: z.ZodOptional<z.ZodEnum<["no-signup", "login-or-sign-up"]>>;
}>, "strip", z.ZodTypeAny, {
    message: string;
    signature: string;
    chainId: string | null;
    walletClientType: string | null;
    connectorType: string | null;
    mode?: "no-signup" | "login-or-sign-up" | undefined;
}, {
    message: string;
    signature: string;
    mode?: "no-signup" | "login-or-sign-up" | undefined;
    chainId?: string | null | undefined;
    walletClientType?: string | null | undefined;
    connectorType?: string | null | undefined;
}>;
export type PrivyAuthenticateSiweInput = z.input<typeof AuthenticateSiweInput>;
export const SiweAddressInput: z.ZodObject<{
    address: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    address: string;
}, {
    address: string;
}>;
export interface PrivySiweAddressInput extends z.infer<typeof SiweAddressInput> {
}
export const SiweInitInput: z.ZodObject<{
    address: z.ZodEffects<z.ZodString, string, string>;
    token: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    address: string;
    token?: string | undefined;
}, {
    address: string;
    token?: string | undefined;
}>;
export interface PrivySiweInitInput extends z.infer<typeof SiweInitInput> {
}
export const SiweNonce: z.ZodObject<{
    nonce: z.ZodString;
    address: z.ZodString;
    expires_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
    address: string;
    nonce: string;
    expires_at: string;
}, {
    address: string;
    nonce: string;
    expires_at: string;
}>;
export interface PrivySiweNonce extends z.infer<typeof SiweNonce> {
}
export const TransferSiweInput: z.ZodObject<z.objectUtil.extendShape<{
    nonce: z.ZodString;
}, {
    address: z.ZodEffects<z.ZodString, string, string>;
    chainId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    walletClientType: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    connectorType: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}>, "strip", z.ZodTypeAny, {
    address: string;
    nonce: string;
    chainId: string | null;
    walletClientType: string | null;
    connectorType: string | null;
}, {
    address: string;
    nonce: string;
    chainId?: string | null | undefined;
    walletClientType?: string | null | undefined;
    connectorType?: string | null | undefined;
}>;
export interface PrivyTransferSiweInput extends z.infer<typeof TransferSiweInput> {
}
export const SiwsInput: z.ZodObject<{
    message: z.ZodString;
    signature: z.ZodString;
    walletClientType: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    connectorType: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    message: string;
    signature: string;
    walletClientType: string | null;
    connectorType: string | null;
}, {
    message: string;
    signature: string;
    walletClientType?: string | null | undefined;
    connectorType?: string | null | undefined;
}>;
export interface PrivySiwsInput extends z.input<typeof SiwsInput> {
}
export const AuthenticateSiwsInput: z.ZodObject<z.objectUtil.extendShape<{
    message: z.ZodString;
    signature: z.ZodString;
    walletClientType: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    connectorType: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, {
    mode: z.ZodOptional<z.ZodEnum<["no-signup", "login-or-sign-up"]>>;
}>, "strip", z.ZodTypeAny, {
    message: string;
    signature: string;
    walletClientType: string | null;
    connectorType: string | null;
    mode?: "no-signup" | "login-or-sign-up" | undefined;
}, {
    message: string;
    signature: string;
    mode?: "no-signup" | "login-or-sign-up" | undefined;
    walletClientType?: string | null | undefined;
    connectorType?: string | null | undefined;
}>;
export type PrivyAuthenticateSiwsInput = z.input<typeof AuthenticateSiwsInput>;
export const SiwsAddressInput: z.ZodObject<{
    address: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    address: string;
}, {
    address: string;
}>;
export interface PrivySiwsAddressInput extends z.infer<typeof SiwsAddressInput> {
}
export const SiwsInitInput: z.ZodObject<{
    address: z.ZodEffects<z.ZodString, string, string>;
    token: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    address: string;
    token?: string | undefined;
}, {
    address: string;
    token?: string | undefined;
}>;
export interface PrivySiwsInitInput extends z.infer<typeof SiwsInitInput> {
}
export const SiwsNonce: z.ZodObject<{
    nonce: z.ZodString;
    address: z.ZodString;
    expires_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
    address: string;
    nonce: string;
    expires_at: string;
}, {
    address: string;
    nonce: string;
    expires_at: string;
}>;
export interface PrivySiwsNonce extends z.infer<typeof SiwsNonce> {
}
export const VerifyPhoneInput: z.ZodObject<{
    code: z.ZodCatch<z.ZodString>;
    phoneNumber: z.ZodCatch<z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>>;
}, "strip", z.ZodTypeAny, {
    code: string;
    phoneNumber: string;
}, {
    code?: unknown;
    phoneNumber?: unknown;
}>;
export interface PrivyVerifyPhoneInput extends z.infer<typeof VerifyPhoneInput> {
}
export const AuthenticatePhoneInput: z.ZodObject<z.objectUtil.extendShape<{
    code: z.ZodCatch<z.ZodString>;
    phoneNumber: z.ZodCatch<z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>>;
}, {
    mode: z.ZodOptional<z.ZodEnum<["no-signup", "login-or-sign-up"]>>;
}>, "strip", z.ZodTypeAny, {
    code: string;
    phoneNumber: string;
    mode?: "no-signup" | "login-or-sign-up" | undefined;
}, {
    code?: unknown;
    mode?: "no-signup" | "login-or-sign-up" | undefined;
    phoneNumber?: unknown;
}>;
export interface PrivyAuthenticatePhoneInput extends z.infer<typeof AuthenticatePhoneInput> {
}
export const PasswordlessSmsPhoneInput: z.ZodObject<{
    phoneNumber: z.ZodCatch<z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>>;
    token: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    phoneNumber: string;
    token?: string | undefined;
}, {
    token?: string | undefined;
    phoneNumber?: unknown;
}>;
export interface PrivyLinkPhoneInput extends z.infer<typeof PasswordlessSmsPhoneInput> {
}
export const UnlinkPhoneInput: z.ZodObject<{
    phoneNumber: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
}, "strip", z.ZodTypeAny, {
    phoneNumber: string;
}, {
    phoneNumber: string;
}>;
export interface PrivyUnlinkPhoneInput extends z.infer<typeof UnlinkPhoneInput> {
}
export const UpdatePhoneInput: z.ZodObject<{
    old_phone_number: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    new_phone_number: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
    old_phone_number: string;
    new_phone_number: string;
}, {
    code: string;
    old_phone_number: string;
    new_phone_number: string;
}>;
export interface PrivyUpdatePhoneInput extends z.infer<typeof UpdatePhoneInput> {
}
export const TransferPhoneInput: z.ZodObject<z.objectUtil.extendShape<{
    nonce: z.ZodString;
}, {
    phoneNumber: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
}>, "strip", z.ZodTypeAny, {
    nonce: string;
    phoneNumber: string;
}, {
    nonce: string;
    phoneNumber: string;
}>;
export interface PrivyTransferPhoneInput extends z.infer<typeof TransferPhoneInput> {
}
export const TelegramAuthResult: z.ZodObject<{
    id: z.ZodNumber;
    first_name: z.ZodString;
    auth_date: z.ZodNumber;
    hash: z.ZodString;
    username: z.ZodOptional<z.ZodString>;
    last_name: z.ZodOptional<z.ZodString>;
    photo_url: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: number;
    first_name: string;
    auth_date: number;
    hash: string;
    username?: string | undefined;
    last_name?: string | undefined;
    photo_url?: string | undefined;
}, {
    id: number;
    first_name: string;
    auth_date: number;
    hash: string;
    username?: string | undefined;
    last_name?: string | undefined;
    photo_url?: string | undefined;
}>;
export type TelegramAuthResultType = z.infer<typeof TelegramAuthResult>;
export const TelegramWebAppData: z.ZodObject<{
    query_id: z.ZodOptional<z.ZodString>;
    auth_date: z.ZodNumber;
    hash: z.ZodString;
    user: z.ZodString;
    chat_instance: z.ZodOptional<z.ZodString>;
    chat_type: z.ZodOptional<z.ZodString>;
    start_param: z.ZodOptional<z.ZodString>;
    signature: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    user: string;
    auth_date: number;
    hash: string;
    signature?: string | undefined;
    query_id?: string | undefined;
    chat_instance?: string | undefined;
    chat_type?: string | undefined;
    start_param?: string | undefined;
}, {
    user: string;
    auth_date: number;
    hash: string;
    signature?: string | undefined;
    query_id?: string | undefined;
    chat_instance?: string | undefined;
    chat_type?: string | undefined;
    start_param?: string | undefined;
}>;
export type TelegramAuthWebDataType = z.infer<typeof TelegramWebAppData>;
/**
 * @prop captcha_token - Captcha token
 * @prop telegram_auth_result - Auth result object returned by Telegram when a user authenticates using the login widget
 * @prop telegram_web_app_data - Auth result object returned by Telegram when a user authenticates using a mini app
 */
export const TelegramAuthenticateInput: z.ZodObject<z.objectUtil.extendShape<{
    captcha_token: z.ZodOptional<z.ZodString>;
    telegram_auth_result: z.ZodOptional<z.ZodObject<{
        id: z.ZodNumber;
        first_name: z.ZodString;
        auth_date: z.ZodNumber;
        hash: z.ZodString;
        username: z.ZodOptional<z.ZodString>;
        last_name: z.ZodOptional<z.ZodString>;
        photo_url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        first_name: string;
        auth_date: number;
        hash: string;
        username?: string | undefined;
        last_name?: string | undefined;
        photo_url?: string | undefined;
    }, {
        id: number;
        first_name: string;
        auth_date: number;
        hash: string;
        username?: string | undefined;
        last_name?: string | undefined;
        photo_url?: string | undefined;
    }>>;
    telegram_web_app_data: z.ZodOptional<z.ZodObject<{
        query_id: z.ZodOptional<z.ZodString>;
        auth_date: z.ZodNumber;
        hash: z.ZodString;
        user: z.ZodString;
        chat_instance: z.ZodOptional<z.ZodString>;
        chat_type: z.ZodOptional<z.ZodString>;
        start_param: z.ZodOptional<z.ZodString>;
        signature: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        user: string;
        auth_date: number;
        hash: string;
        signature?: string | undefined;
        query_id?: string | undefined;
        chat_instance?: string | undefined;
        chat_type?: string | undefined;
        start_param?: string | undefined;
    }, {
        user: string;
        auth_date: number;
        hash: string;
        signature?: string | undefined;
        query_id?: string | undefined;
        chat_instance?: string | undefined;
        chat_type?: string | undefined;
        start_param?: string | undefined;
    }>>;
}, {
    mode: z.ZodOptional<z.ZodEnum<["no-signup", "login-or-sign-up"]>>;
}>, "strip", z.ZodTypeAny, {
    mode?: "no-signup" | "login-or-sign-up" | undefined;
    captcha_token?: string | undefined;
    telegram_auth_result?: {
        id: number;
        first_name: string;
        auth_date: number;
        hash: string;
        username?: string | undefined;
        last_name?: string | undefined;
        photo_url?: string | undefined;
    } | undefined;
    telegram_web_app_data?: {
        user: string;
        auth_date: number;
        hash: string;
        signature?: string | undefined;
        query_id?: string | undefined;
        chat_instance?: string | undefined;
        chat_type?: string | undefined;
        start_param?: string | undefined;
    } | undefined;
}, {
    mode?: "no-signup" | "login-or-sign-up" | undefined;
    captcha_token?: string | undefined;
    telegram_auth_result?: {
        id: number;
        first_name: string;
        auth_date: number;
        hash: string;
        username?: string | undefined;
        last_name?: string | undefined;
        photo_url?: string | undefined;
    } | undefined;
    telegram_web_app_data?: {
        user: string;
        auth_date: number;
        hash: string;
        signature?: string | undefined;
        query_id?: string | undefined;
        chat_instance?: string | undefined;
        chat_type?: string | undefined;
        start_param?: string | undefined;
    } | undefined;
}>;
export interface PrivyTelegramAuthenticateInput extends z.infer<typeof TelegramAuthenticateInput> {
}
export const TelegramLinkInput: z.ZodObject<z.objectUtil.extendShape<{
    captcha_token: z.ZodOptional<z.ZodString>;
    telegram_auth_result: z.ZodOptional<z.ZodObject<{
        id: z.ZodNumber;
        first_name: z.ZodString;
        auth_date: z.ZodNumber;
        hash: z.ZodString;
        username: z.ZodOptional<z.ZodString>;
        last_name: z.ZodOptional<z.ZodString>;
        photo_url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        first_name: string;
        auth_date: number;
        hash: string;
        username?: string | undefined;
        last_name?: string | undefined;
        photo_url?: string | undefined;
    }, {
        id: number;
        first_name: string;
        auth_date: number;
        hash: string;
        username?: string | undefined;
        last_name?: string | undefined;
        photo_url?: string | undefined;
    }>>;
    telegram_web_app_data: z.ZodOptional<z.ZodObject<{
        query_id: z.ZodOptional<z.ZodString>;
        auth_date: z.ZodNumber;
        hash: z.ZodString;
        user: z.ZodString;
        chat_instance: z.ZodOptional<z.ZodString>;
        chat_type: z.ZodOptional<z.ZodString>;
        start_param: z.ZodOptional<z.ZodString>;
        signature: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        user: string;
        auth_date: number;
        hash: string;
        signature?: string | undefined;
        query_id?: string | undefined;
        chat_instance?: string | undefined;
        chat_type?: string | undefined;
        start_param?: string | undefined;
    }, {
        user: string;
        auth_date: number;
        hash: string;
        signature?: string | undefined;
        query_id?: string | undefined;
        chat_instance?: string | undefined;
        chat_type?: string | undefined;
        start_param?: string | undefined;
    }>>;
}, {
    mode: z.ZodOptional<z.ZodEnum<["no-signup", "login-or-sign-up"]>>;
}>, "strip", z.ZodTypeAny, {
    mode?: "no-signup" | "login-or-sign-up" | undefined;
    captcha_token?: string | undefined;
    telegram_auth_result?: {
        id: number;
        first_name: string;
        auth_date: number;
        hash: string;
        username?: string | undefined;
        last_name?: string | undefined;
        photo_url?: string | undefined;
    } | undefined;
    telegram_web_app_data?: {
        user: string;
        auth_date: number;
        hash: string;
        signature?: string | undefined;
        query_id?: string | undefined;
        chat_instance?: string | undefined;
        chat_type?: string | undefined;
        start_param?: string | undefined;
    } | undefined;
}, {
    mode?: "no-signup" | "login-or-sign-up" | undefined;
    captcha_token?: string | undefined;
    telegram_auth_result?: {
        id: number;
        first_name: string;
        auth_date: number;
        hash: string;
        username?: string | undefined;
        last_name?: string | undefined;
        photo_url?: string | undefined;
    } | undefined;
    telegram_web_app_data?: {
        user: string;
        auth_date: number;
        hash: string;
        signature?: string | undefined;
        query_id?: string | undefined;
        chat_instance?: string | undefined;
        chat_type?: string | undefined;
        start_param?: string | undefined;
    } | undefined;
}>;
export interface PrivyTelegramLinkInput extends z.infer<typeof TelegramLinkInput> {
}
export const TelegramUnlinkInput: z.ZodObject<{
    telegram_user_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    telegram_user_id: string;
}, {
    telegram_user_id: string;
}>;
export interface PrivyTelegramUnlinkInput extends z.infer<typeof TelegramUnlinkInput> {
}
export const TransferTelegramInput: z.ZodObject<z.objectUtil.extendShape<{
    nonce: z.ZodString;
}, {
    telegram_auth_result: z.ZodOptional<z.ZodObject<{
        id: z.ZodNumber;
        first_name: z.ZodString;
        auth_date: z.ZodNumber;
        hash: z.ZodString;
        username: z.ZodOptional<z.ZodString>;
        last_name: z.ZodOptional<z.ZodString>;
        photo_url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        first_name: string;
        auth_date: number;
        hash: string;
        username?: string | undefined;
        last_name?: string | undefined;
        photo_url?: string | undefined;
    }, {
        id: number;
        first_name: string;
        auth_date: number;
        hash: string;
        username?: string | undefined;
        last_name?: string | undefined;
        photo_url?: string | undefined;
    }>>;
    telegram_web_app_data: z.ZodOptional<z.ZodObject<{
        query_id: z.ZodOptional<z.ZodString>;
        auth_date: z.ZodNumber;
        hash: z.ZodString;
        user: z.ZodString;
        chat_instance: z.ZodOptional<z.ZodString>;
        chat_type: z.ZodOptional<z.ZodString>;
        start_param: z.ZodOptional<z.ZodString>;
        signature: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        user: string;
        auth_date: number;
        hash: string;
        signature?: string | undefined;
        query_id?: string | undefined;
        chat_instance?: string | undefined;
        chat_type?: string | undefined;
        start_param?: string | undefined;
    }, {
        user: string;
        auth_date: number;
        hash: string;
        signature?: string | undefined;
        query_id?: string | undefined;
        chat_instance?: string | undefined;
        chat_type?: string | undefined;
        start_param?: string | undefined;
    }>>;
}>, "strip", z.ZodTypeAny, {
    nonce: string;
    telegram_auth_result?: {
        id: number;
        first_name: string;
        auth_date: number;
        hash: string;
        username?: string | undefined;
        last_name?: string | undefined;
        photo_url?: string | undefined;
    } | undefined;
    telegram_web_app_data?: {
        user: string;
        auth_date: number;
        hash: string;
        signature?: string | undefined;
        query_id?: string | undefined;
        chat_instance?: string | undefined;
        chat_type?: string | undefined;
        start_param?: string | undefined;
    } | undefined;
}, {
    nonce: string;
    telegram_auth_result?: {
        id: number;
        first_name: string;
        auth_date: number;
        hash: string;
        username?: string | undefined;
        last_name?: string | undefined;
        photo_url?: string | undefined;
    } | undefined;
    telegram_web_app_data?: {
        user: string;
        auth_date: number;
        hash: string;
        signature?: string | undefined;
        query_id?: string | undefined;
        chat_instance?: string | undefined;
        chat_type?: string | undefined;
        start_param?: string | undefined;
    } | undefined;
}>;
export interface PrivyTransferTelegramInput extends z.infer<typeof TransferTelegramInput> {
}
export const RefreshTokenInput: z.ZodObject<{
    refresh_token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    refresh_token: string;
}, {
    refresh_token: string;
}>;
export interface PrivyRefreshTokenInput extends z.infer<typeof RefreshTokenInput> {
}
/**
 * In the case of a customer using cookies, refreshToken is in the cookies instead of the body
 */
export const OptionalRefreshTokenInput: z.ZodObject<{
    refresh_token: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    refresh_token?: string | undefined;
}, {
    refresh_token?: string | undefined;
}>;
export interface PrivyOptionalRefreshTokenInput extends z.infer<typeof OptionalRefreshTokenInput> {
}
export const ForkedToken: z.ZodObject<{
    token: z.ZodString;
    refresh_token: z.ZodString;
    new_session_refresh_token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    token: string;
    refresh_token: string;
    new_session_refresh_token: string;
}, {
    token: string;
    refresh_token: string;
    new_session_refresh_token: string;
}>;
export interface PrivyForkedToken extends z.infer<typeof ForkedToken> {
}
/** A valid CAIP-2 chain ID */
export const CAIP2: z.ZodString;
export const AuthorizationKeyRole: z.ZodNullable<z.ZodEnum<["root", "manager"]>>;
export type AuthorizationKeyRole = z.infer<typeof AuthorizationKeyRole>;
export const WalletApiSolanaSignTransactionRpcInput: z.ZodObject<z.objectUtil.extendShape<{
    /** RPC method to execute with the wallet. */
    method: z.ZodLiteral<"signTransaction">;
    /** Parameters for the RPC method.  */
    params: z.ZodObject<{
        /** Serialized transaction object to sign with the wallet. Must be encoded per the scheme in `encoding`. */
        transaction: z.ZodString;
        /** Encoding scheme for the transaction. */
        encoding: z.ZodLiteral<"base64">;
    }, "strip", z.ZodTypeAny, {
        transaction: string;
        encoding: "base64";
    }, {
        transaction: string;
        encoding: "base64";
    }>;
}, {
    /** Address of the wallet. */
    address: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** Chain type of the wallet. */
    chain_type: z.ZodOptional<z.ZodLiteral<"solana">>;
}>, "strip", z.ZodTypeAny, {
    params: {
        transaction: string;
        encoding: "base64";
    };
    method: "signTransaction";
    address?: string | undefined;
    chain_type?: "solana" | undefined;
}, {
    params: {
        transaction: string;
        encoding: "base64";
    };
    method: "signTransaction";
    address?: string | undefined;
    chain_type?: "solana" | undefined;
}>;
export const WalletApiSolanaSignAndSendTransactionRpcInput: z.ZodObject<z.objectUtil.extendShape<{
    /** RPC method to execute with the wallet. */
    method: z.ZodLiteral<"signAndSendTransaction">;
    /** The CAIP-2 chain id to send the transaction on. */
    caip2: z.ZodString;
    /** Parameters for the RPC method.  */
    params: z.ZodObject<{
        /** Serialized transaction object to sign and send with the wallet. Must be encoded per the scheme in `encoding`. */
        transaction: z.ZodString;
        /** Encoding scheme for the transaction. */
        encoding: z.ZodLiteral<"base64">;
    }, "strip", z.ZodTypeAny, {
        transaction: string;
        encoding: "base64";
    }, {
        transaction: string;
        encoding: "base64";
    }>;
}, {
    /** Address of the wallet. */
    address: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** Chain type of the wallet. */
    chain_type: z.ZodOptional<z.ZodLiteral<"solana">>;
}>, "strip", z.ZodTypeAny, {
    params: {
        transaction: string;
        encoding: "base64";
    };
    method: "signAndSendTransaction";
    caip2: string;
    address?: string | undefined;
    chain_type?: "solana" | undefined;
}, {
    params: {
        transaction: string;
        encoding: "base64";
    };
    method: "signAndSendTransaction";
    caip2: string;
    address?: string | undefined;
    chain_type?: "solana" | undefined;
}>;
export type WalletApiSolanaSignAndSendTransactionRpcInputType = z.infer<typeof WalletApiSolanaSignAndSendTransactionRpcInput>;
export const WalletApiSolanaSignMessageRpcInput: z.ZodObject<z.objectUtil.extendShape<{
    /** RPC method to execute with the wallet. */
    method: z.ZodLiteral<"signMessage">;
    /** Parameters for the RPC method.  */
    params: z.ZodObject<{
        /** Message to sign with the wallet. Must be encoded per the scheme in `encoding`. */
        message: z.ZodString;
        /** Encoding scheme for the message. */
        encoding: z.ZodLiteral<"base64">;
    }, "strip", z.ZodTypeAny, {
        message: string;
        encoding: "base64";
    }, {
        message: string;
        encoding: "base64";
    }>;
}, {
    /** Address of the wallet. */
    address: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** Chain type of the wallet. */
    chain_type: z.ZodOptional<z.ZodLiteral<"solana">>;
}>, "strip", z.ZodTypeAny, {
    params: {
        message: string;
        encoding: "base64";
    };
    method: "signMessage";
    address?: string | undefined;
    chain_type?: "solana" | undefined;
}, {
    params: {
        message: string;
        encoding: "base64";
    };
    method: "signMessage";
    address?: string | undefined;
    chain_type?: "solana" | undefined;
}>;
declare const Quantity: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
export type QuantityType = z.infer<typeof Quantity>;
export const UnsignedEthereumTransaction: z.ZodObject<{
    /** The address the transaction is sent from. Must be hexadecimal formatted. */
    from: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** Destination address of the transaction. */
    to: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** The chain ID of network your transaction will  be sent on (hexadecimal or number). */
    chain_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    /** (optional) The nonce to be used for the transaction (hexadecimal or number). */
    nonce: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    /** (optional) Data to send to the receiving address, especially when calling smart contracts. Must be hexadecimal formatted. */
    data: z.ZodOptional<z.ZodString>;
    /** (optional) The value (in wei) be sent with the transaction (hexadecimal or number). */
    value: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    /** (optional) The EIP-2718 transction type (e.g. `2` for EIP-1559 transactions). */
    type: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
    /** (optional) The max units of gas that can be used by this transaction (hexadecimal or number). */
    gas_limit: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    /** (optional) The price (in wei) per unit of gas for this transaction (hexadecimal or number), for use in non EIP-1559 transactions (type 0 or 1). */
    gas_price: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    /** (optional) The maxFeePerGas (hexadecimal or number) to be used in this transaction, for use in EIP-1559 (type 2) transactions. */
    max_fee_per_gas: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    /** (optional) The maxPriorityFeePerGas (hexadecimal or number) to be used in this transaction, for use in EIP-1559 (type 2) transactions. */
    max_priority_fee_per_gas: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
}, "strip", z.ZodTypeAny, {
    type?: 0 | 1 | 2 | undefined;
    value?: string | number | undefined;
    nonce?: string | number | undefined;
    chain_id?: string | number | undefined;
    to?: string | undefined;
    from?: string | undefined;
    data?: string | undefined;
    gas_limit?: string | number | undefined;
    gas_price?: string | number | undefined;
    max_fee_per_gas?: string | number | undefined;
    max_priority_fee_per_gas?: string | number | undefined;
}, {
    type?: 0 | 1 | 2 | undefined;
    value?: string | number | undefined;
    nonce?: string | number | undefined;
    chain_id?: string | number | undefined;
    to?: string | undefined;
    from?: string | undefined;
    data?: string | undefined;
    gas_limit?: string | number | undefined;
    gas_price?: string | number | undefined;
    max_fee_per_gas?: string | number | undefined;
    max_priority_fee_per_gas?: string | number | undefined;
}>;
export type UnsignedEthereumTransactionType = z.infer<typeof UnsignedEthereumTransaction>;
export const WalletApiEthereumSignTransactionRpcInput: z.ZodObject<z.objectUtil.extendShape<{
    /** RPC method to execute with the wallet. */
    method: z.ZodLiteral<"eth_signTransaction">;
    /** Parameters for the RPC method.  */
    params: z.ZodObject<{
        /** Transaction object to sign with the wallet. */
        transaction: z.ZodObject<{
            /** The address the transaction is sent from. Must be hexadecimal formatted. */
            from: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            /** Destination address of the transaction. */
            to: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            /** The chain ID of network your transaction will  be sent on (hexadecimal or number). */
            chain_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The nonce to be used for the transaction (hexadecimal or number). */
            nonce: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) Data to send to the receiving address, especially when calling smart contracts. Must be hexadecimal formatted. */
            data: z.ZodOptional<z.ZodString>;
            /** (optional) The value (in wei) be sent with the transaction (hexadecimal or number). */
            value: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The EIP-2718 transction type (e.g. `2` for EIP-1559 transactions). */
            type: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            /** (optional) The max units of gas that can be used by this transaction (hexadecimal or number). */
            gas_limit: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The price (in wei) per unit of gas for this transaction (hexadecimal or number), for use in non EIP-1559 transactions (type 0 or 1). */
            gas_price: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The maxFeePerGas (hexadecimal or number) to be used in this transaction, for use in EIP-1559 (type 2) transactions. */
            max_fee_per_gas: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The maxPriorityFeePerGas (hexadecimal or number) to be used in this transaction, for use in EIP-1559 (type 2) transactions. */
            max_priority_fee_per_gas: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        }, "strip", z.ZodTypeAny, {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        }, {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    }, {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    }>;
}, {
    /** Address of the wallet. */
    address: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** Chain type of the wallet. */
    chain_type: z.ZodOptional<z.ZodLiteral<"ethereum">>;
}>, "strip", z.ZodTypeAny, {
    params: {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    };
    method: "eth_signTransaction";
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}, {
    params: {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    };
    method: "eth_signTransaction";
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}>;
export const WalletApiEthereumSendTransactionRpcInput: z.ZodObject<z.objectUtil.extendShape<{
    /** RPC method to execute with the wallet. */
    method: z.ZodLiteral<"eth_sendTransaction">;
    /** The CAIP-2 chain id to send the transaction on. */
    caip2: z.ZodString;
    /** Parameters for the RPC method.  */
    params: z.ZodObject<{
        /** Transaction object to sign with the wallet. */
        transaction: z.ZodObject<{
            /** The address the transaction is sent from. Must be hexadecimal formatted. */
            from: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            /** Destination address of the transaction. */
            to: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            /** The chain ID of network your transaction will  be sent on (hexadecimal or number). */
            chain_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The nonce to be used for the transaction (hexadecimal or number). */
            nonce: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) Data to send to the receiving address, especially when calling smart contracts. Must be hexadecimal formatted. */
            data: z.ZodOptional<z.ZodString>;
            /** (optional) The value (in wei) be sent with the transaction (hexadecimal or number). */
            value: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The EIP-2718 transction type (e.g. `2` for EIP-1559 transactions). */
            type: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            /** (optional) The max units of gas that can be used by this transaction (hexadecimal or number). */
            gas_limit: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The price (in wei) per unit of gas for this transaction (hexadecimal or number), for use in non EIP-1559 transactions (type 0 or 1). */
            gas_price: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The maxFeePerGas (hexadecimal or number) to be used in this transaction, for use in EIP-1559 (type 2) transactions. */
            max_fee_per_gas: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The maxPriorityFeePerGas (hexadecimal or number) to be used in this transaction, for use in EIP-1559 (type 2) transactions. */
            max_priority_fee_per_gas: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        }, "strip", z.ZodTypeAny, {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        }, {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    }, {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    }>;
}, {
    /** Address of the wallet. */
    address: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** Chain type of the wallet. */
    chain_type: z.ZodOptional<z.ZodLiteral<"ethereum">>;
}>, "strip", z.ZodTypeAny, {
    params: {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    };
    method: "eth_sendTransaction";
    caip2: string;
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}, {
    params: {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    };
    method: "eth_sendTransaction";
    caip2: string;
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}>;
export type WalletApiEthereumSendTransactionRpcInputType = z.infer<typeof WalletApiEthereumSendTransactionRpcInput>;
export const WalletApiEthereumPersonalSignRpcInputParams: z.ZodObject<{
    /** Message to sign with the wallet. Must be encoded per the scheme in `encoding`. */
    message: z.ZodString;
    /** Encoding scheme for the message (utf-8 for plaintext, hex for raw bytes). */
    encoding: z.ZodUnion<[z.ZodLiteral<"utf-8">, z.ZodLiteral<"hex">]>;
}, "strip", z.ZodTypeAny, {
    message: string;
    encoding: "utf-8" | "hex";
}, {
    message: string;
    encoding: "utf-8" | "hex";
}>;
export type WalletApiEthereumPersonalSignRpcInputParamsType = z.infer<typeof WalletApiEthereumPersonalSignRpcInputParams>;
export const WalletApiEthereumPersonalSignRpcInput: z.ZodObject<z.objectUtil.extendShape<{
    /** RPC method to execute with the wallet. */
    method: z.ZodLiteral<"personal_sign">;
    /** Parameters for the RPC method.  */
    params: z.ZodObject<{
        /** Message to sign with the wallet. Must be encoded per the scheme in `encoding`. */
        message: z.ZodString;
        /** Encoding scheme for the message (utf-8 for plaintext, hex for raw bytes). */
        encoding: z.ZodUnion<[z.ZodLiteral<"utf-8">, z.ZodLiteral<"hex">]>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        encoding: "utf-8" | "hex";
    }, {
        message: string;
        encoding: "utf-8" | "hex";
    }>;
}, {
    /** Address of the wallet. */
    address: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** Chain type of the wallet. */
    chain_type: z.ZodOptional<z.ZodLiteral<"ethereum">>;
}>, "strip", z.ZodTypeAny, {
    params: {
        message: string;
        encoding: "utf-8" | "hex";
    };
    method: "personal_sign";
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}, {
    params: {
        message: string;
        encoding: "utf-8" | "hex";
    };
    method: "personal_sign";
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}>;
export const WalletApiEthereumSignTypedDataRpcInput: z.ZodObject<z.objectUtil.extendShape<{
    /** RPC method to execute with the wallet. */
    method: z.ZodLiteral<"eth_signTypedData_v4">;
    /** Parameters for the RPC method.  */
    params: z.ZodObject<{
        /** The JSON typed data to sign with the wallet. */
        typed_data: z.ZodObject<{
            domain: z.ZodRecord<z.ZodString, z.ZodAny>;
            types: z.ZodRecord<z.ZodString, z.ZodAny>;
            message: z.ZodRecord<z.ZodString, z.ZodAny>;
            primary_type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: Record<string, any>;
            domain: Record<string, any>;
            types: Record<string, any>;
            primary_type: string;
        }, {
            message: Record<string, any>;
            domain: Record<string, any>;
            types: Record<string, any>;
            primary_type: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        typed_data: {
            message: Record<string, any>;
            domain: Record<string, any>;
            types: Record<string, any>;
            primary_type: string;
        };
    }, {
        typed_data: {
            message: Record<string, any>;
            domain: Record<string, any>;
            types: Record<string, any>;
            primary_type: string;
        };
    }>;
}, {
    /** Address of the wallet. */
    address: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** Chain type of the wallet. */
    chain_type: z.ZodOptional<z.ZodLiteral<"ethereum">>;
}>, "strip", z.ZodTypeAny, {
    params: {
        typed_data: {
            message: Record<string, any>;
            domain: Record<string, any>;
            types: Record<string, any>;
            primary_type: string;
        };
    };
    method: "eth_signTypedData_v4";
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}, {
    params: {
        typed_data: {
            message: Record<string, any>;
            domain: Record<string, any>;
            types: Record<string, any>;
            primary_type: string;
        };
    };
    method: "eth_signTypedData_v4";
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}>;
export const WalletApiEthereumRpcInput: z.ZodDiscriminatedUnion<"method", [z.ZodObject<z.objectUtil.extendShape<{
    /** RPC method to execute with the wallet. */
    method: z.ZodLiteral<"eth_signTransaction">;
    /** Parameters for the RPC method.  */
    params: z.ZodObject<{
        /** Transaction object to sign with the wallet. */
        transaction: z.ZodObject<{
            /** The address the transaction is sent from. Must be hexadecimal formatted. */
            from: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            /** Destination address of the transaction. */
            to: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            /** The chain ID of network your transaction will  be sent on (hexadecimal or number). */
            chain_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The nonce to be used for the transaction (hexadecimal or number). */
            nonce: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) Data to send to the receiving address, especially when calling smart contracts. Must be hexadecimal formatted. */
            data: z.ZodOptional<z.ZodString>;
            /** (optional) The value (in wei) be sent with the transaction (hexadecimal or number). */
            value: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The EIP-2718 transction type (e.g. `2` for EIP-1559 transactions). */
            type: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            /** (optional) The max units of gas that can be used by this transaction (hexadecimal or number). */
            gas_limit: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The price (in wei) per unit of gas for this transaction (hexadecimal or number), for use in non EIP-1559 transactions (type 0 or 1). */
            gas_price: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The maxFeePerGas (hexadecimal or number) to be used in this transaction, for use in EIP-1559 (type 2) transactions. */
            max_fee_per_gas: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The maxPriorityFeePerGas (hexadecimal or number) to be used in this transaction, for use in EIP-1559 (type 2) transactions. */
            max_priority_fee_per_gas: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        }, "strip", z.ZodTypeAny, {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        }, {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    }, {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    }>;
}, {
    /** Address of the wallet. */
    address: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** Chain type of the wallet. */
    chain_type: z.ZodOptional<z.ZodLiteral<"ethereum">>;
}>, "strip", z.ZodTypeAny, {
    params: {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    };
    method: "eth_signTransaction";
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}, {
    params: {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    };
    method: "eth_signTransaction";
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    /** RPC method to execute with the wallet. */
    method: z.ZodLiteral<"eth_sendTransaction">;
    /** The CAIP-2 chain id to send the transaction on. */
    caip2: z.ZodString;
    /** Parameters for the RPC method.  */
    params: z.ZodObject<{
        /** Transaction object to sign with the wallet. */
        transaction: z.ZodObject<{
            /** The address the transaction is sent from. Must be hexadecimal formatted. */
            from: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            /** Destination address of the transaction. */
            to: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            /** The chain ID of network your transaction will  be sent on (hexadecimal or number). */
            chain_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The nonce to be used for the transaction (hexadecimal or number). */
            nonce: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) Data to send to the receiving address, especially when calling smart contracts. Must be hexadecimal formatted. */
            data: z.ZodOptional<z.ZodString>;
            /** (optional) The value (in wei) be sent with the transaction (hexadecimal or number). */
            value: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The EIP-2718 transction type (e.g. `2` for EIP-1559 transactions). */
            type: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            /** (optional) The max units of gas that can be used by this transaction (hexadecimal or number). */
            gas_limit: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The price (in wei) per unit of gas for this transaction (hexadecimal or number), for use in non EIP-1559 transactions (type 0 or 1). */
            gas_price: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The maxFeePerGas (hexadecimal or number) to be used in this transaction, for use in EIP-1559 (type 2) transactions. */
            max_fee_per_gas: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The maxPriorityFeePerGas (hexadecimal or number) to be used in this transaction, for use in EIP-1559 (type 2) transactions. */
            max_priority_fee_per_gas: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        }, "strip", z.ZodTypeAny, {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        }, {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    }, {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    }>;
}, {
    /** Address of the wallet. */
    address: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** Chain type of the wallet. */
    chain_type: z.ZodOptional<z.ZodLiteral<"ethereum">>;
}>, "strip", z.ZodTypeAny, {
    params: {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    };
    method: "eth_sendTransaction";
    caip2: string;
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}, {
    params: {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    };
    method: "eth_sendTransaction";
    caip2: string;
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    /** RPC method to execute with the wallet. */
    method: z.ZodLiteral<"personal_sign">;
    /** Parameters for the RPC method.  */
    params: z.ZodObject<{
        /** Message to sign with the wallet. Must be encoded per the scheme in `encoding`. */
        message: z.ZodString;
        /** Encoding scheme for the message (utf-8 for plaintext, hex for raw bytes). */
        encoding: z.ZodUnion<[z.ZodLiteral<"utf-8">, z.ZodLiteral<"hex">]>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        encoding: "utf-8" | "hex";
    }, {
        message: string;
        encoding: "utf-8" | "hex";
    }>;
}, {
    /** Address of the wallet. */
    address: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** Chain type of the wallet. */
    chain_type: z.ZodOptional<z.ZodLiteral<"ethereum">>;
}>, "strip", z.ZodTypeAny, {
    params: {
        message: string;
        encoding: "utf-8" | "hex";
    };
    method: "personal_sign";
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}, {
    params: {
        message: string;
        encoding: "utf-8" | "hex";
    };
    method: "personal_sign";
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    /** RPC method to execute with the wallet. */
    method: z.ZodLiteral<"eth_signTypedData_v4">;
    /** Parameters for the RPC method.  */
    params: z.ZodObject<{
        /** The JSON typed data to sign with the wallet. */
        typed_data: z.ZodObject<{
            domain: z.ZodRecord<z.ZodString, z.ZodAny>;
            types: z.ZodRecord<z.ZodString, z.ZodAny>;
            message: z.ZodRecord<z.ZodString, z.ZodAny>;
            primary_type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: Record<string, any>;
            domain: Record<string, any>;
            types: Record<string, any>;
            primary_type: string;
        }, {
            message: Record<string, any>;
            domain: Record<string, any>;
            types: Record<string, any>;
            primary_type: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        typed_data: {
            message: Record<string, any>;
            domain: Record<string, any>;
            types: Record<string, any>;
            primary_type: string;
        };
    }, {
        typed_data: {
            message: Record<string, any>;
            domain: Record<string, any>;
            types: Record<string, any>;
            primary_type: string;
        };
    }>;
}, {
    /** Address of the wallet. */
    address: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** Chain type of the wallet. */
    chain_type: z.ZodOptional<z.ZodLiteral<"ethereum">>;
}>, "strip", z.ZodTypeAny, {
    params: {
        typed_data: {
            message: Record<string, any>;
            domain: Record<string, any>;
            types: Record<string, any>;
            primary_type: string;
        };
    };
    method: "eth_signTypedData_v4";
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}, {
    params: {
        typed_data: {
            message: Record<string, any>;
            domain: Record<string, any>;
            types: Record<string, any>;
            primary_type: string;
        };
    };
    method: "eth_signTypedData_v4";
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}>]>;
export const WalletApiSolanaRpcInput: z.ZodDiscriminatedUnion<"method", [z.ZodObject<z.objectUtil.extendShape<{
    /** RPC method to execute with the wallet. */
    method: z.ZodLiteral<"signTransaction">;
    /** Parameters for the RPC method.  */
    params: z.ZodObject<{
        /** Serialized transaction object to sign with the wallet. Must be encoded per the scheme in `encoding`. */
        transaction: z.ZodString;
        /** Encoding scheme for the transaction. */
        encoding: z.ZodLiteral<"base64">;
    }, "strip", z.ZodTypeAny, {
        transaction: string;
        encoding: "base64";
    }, {
        transaction: string;
        encoding: "base64";
    }>;
}, {
    /** Address of the wallet. */
    address: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** Chain type of the wallet. */
    chain_type: z.ZodOptional<z.ZodLiteral<"solana">>;
}>, "strip", z.ZodTypeAny, {
    params: {
        transaction: string;
        encoding: "base64";
    };
    method: "signTransaction";
    address?: string | undefined;
    chain_type?: "solana" | undefined;
}, {
    params: {
        transaction: string;
        encoding: "base64";
    };
    method: "signTransaction";
    address?: string | undefined;
    chain_type?: "solana" | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    /** RPC method to execute with the wallet. */
    method: z.ZodLiteral<"signAndSendTransaction">;
    /** The CAIP-2 chain id to send the transaction on. */
    caip2: z.ZodString;
    /** Parameters for the RPC method.  */
    params: z.ZodObject<{
        /** Serialized transaction object to sign and send with the wallet. Must be encoded per the scheme in `encoding`. */
        transaction: z.ZodString;
        /** Encoding scheme for the transaction. */
        encoding: z.ZodLiteral<"base64">;
    }, "strip", z.ZodTypeAny, {
        transaction: string;
        encoding: "base64";
    }, {
        transaction: string;
        encoding: "base64";
    }>;
}, {
    /** Address of the wallet. */
    address: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** Chain type of the wallet. */
    chain_type: z.ZodOptional<z.ZodLiteral<"solana">>;
}>, "strip", z.ZodTypeAny, {
    params: {
        transaction: string;
        encoding: "base64";
    };
    method: "signAndSendTransaction";
    caip2: string;
    address?: string | undefined;
    chain_type?: "solana" | undefined;
}, {
    params: {
        transaction: string;
        encoding: "base64";
    };
    method: "signAndSendTransaction";
    caip2: string;
    address?: string | undefined;
    chain_type?: "solana" | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    /** RPC method to execute with the wallet. */
    method: z.ZodLiteral<"signMessage">;
    /** Parameters for the RPC method.  */
    params: z.ZodObject<{
        /** Message to sign with the wallet. Must be encoded per the scheme in `encoding`. */
        message: z.ZodString;
        /** Encoding scheme for the message. */
        encoding: z.ZodLiteral<"base64">;
    }, "strip", z.ZodTypeAny, {
        message: string;
        encoding: "base64";
    }, {
        message: string;
        encoding: "base64";
    }>;
}, {
    /** Address of the wallet. */
    address: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** Chain type of the wallet. */
    chain_type: z.ZodOptional<z.ZodLiteral<"solana">>;
}>, "strip", z.ZodTypeAny, {
    params: {
        message: string;
        encoding: "base64";
    };
    method: "signMessage";
    address?: string | undefined;
    chain_type?: "solana" | undefined;
}, {
    params: {
        message: string;
        encoding: "base64";
    };
    method: "signMessage";
    address?: string | undefined;
    chain_type?: "solana" | undefined;
}>]>;
export const WalletApiRpcInput: z.ZodUnion<[z.ZodDiscriminatedUnion<"method", [z.ZodObject<z.objectUtil.extendShape<{
    /** RPC method to execute with the wallet. */
    method: z.ZodLiteral<"eth_signTransaction">;
    /** Parameters for the RPC method.  */
    params: z.ZodObject<{
        /** Transaction object to sign with the wallet. */
        transaction: z.ZodObject<{
            /** The address the transaction is sent from. Must be hexadecimal formatted. */
            from: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            /** Destination address of the transaction. */
            to: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            /** The chain ID of network your transaction will  be sent on (hexadecimal or number). */
            chain_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The nonce to be used for the transaction (hexadecimal or number). */
            nonce: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) Data to send to the receiving address, especially when calling smart contracts. Must be hexadecimal formatted. */
            data: z.ZodOptional<z.ZodString>;
            /** (optional) The value (in wei) be sent with the transaction (hexadecimal or number). */
            value: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The EIP-2718 transction type (e.g. `2` for EIP-1559 transactions). */
            type: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            /** (optional) The max units of gas that can be used by this transaction (hexadecimal or number). */
            gas_limit: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The price (in wei) per unit of gas for this transaction (hexadecimal or number), for use in non EIP-1559 transactions (type 0 or 1). */
            gas_price: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The maxFeePerGas (hexadecimal or number) to be used in this transaction, for use in EIP-1559 (type 2) transactions. */
            max_fee_per_gas: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The maxPriorityFeePerGas (hexadecimal or number) to be used in this transaction, for use in EIP-1559 (type 2) transactions. */
            max_priority_fee_per_gas: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        }, "strip", z.ZodTypeAny, {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        }, {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    }, {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    }>;
}, {
    /** Address of the wallet. */
    address: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** Chain type of the wallet. */
    chain_type: z.ZodOptional<z.ZodLiteral<"ethereum">>;
}>, "strip", z.ZodTypeAny, {
    params: {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    };
    method: "eth_signTransaction";
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}, {
    params: {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    };
    method: "eth_signTransaction";
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    /** RPC method to execute with the wallet. */
    method: z.ZodLiteral<"eth_sendTransaction">;
    /** The CAIP-2 chain id to send the transaction on. */
    caip2: z.ZodString;
    /** Parameters for the RPC method.  */
    params: z.ZodObject<{
        /** Transaction object to sign with the wallet. */
        transaction: z.ZodObject<{
            /** The address the transaction is sent from. Must be hexadecimal formatted. */
            from: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            /** Destination address of the transaction. */
            to: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            /** The chain ID of network your transaction will  be sent on (hexadecimal or number). */
            chain_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The nonce to be used for the transaction (hexadecimal or number). */
            nonce: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) Data to send to the receiving address, especially when calling smart contracts. Must be hexadecimal formatted. */
            data: z.ZodOptional<z.ZodString>;
            /** (optional) The value (in wei) be sent with the transaction (hexadecimal or number). */
            value: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The EIP-2718 transction type (e.g. `2` for EIP-1559 transactions). */
            type: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            /** (optional) The max units of gas that can be used by this transaction (hexadecimal or number). */
            gas_limit: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The price (in wei) per unit of gas for this transaction (hexadecimal or number), for use in non EIP-1559 transactions (type 0 or 1). */
            gas_price: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The maxFeePerGas (hexadecimal or number) to be used in this transaction, for use in EIP-1559 (type 2) transactions. */
            max_fee_per_gas: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            /** (optional) The maxPriorityFeePerGas (hexadecimal or number) to be used in this transaction, for use in EIP-1559 (type 2) transactions. */
            max_priority_fee_per_gas: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        }, "strip", z.ZodTypeAny, {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        }, {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    }, {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    }>;
}, {
    /** Address of the wallet. */
    address: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** Chain type of the wallet. */
    chain_type: z.ZodOptional<z.ZodLiteral<"ethereum">>;
}>, "strip", z.ZodTypeAny, {
    params: {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    };
    method: "eth_sendTransaction";
    caip2: string;
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}, {
    params: {
        transaction: {
            type?: 0 | 1 | 2 | undefined;
            value?: string | number | undefined;
            nonce?: string | number | undefined;
            chain_id?: string | number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            data?: string | undefined;
            gas_limit?: string | number | undefined;
            gas_price?: string | number | undefined;
            max_fee_per_gas?: string | number | undefined;
            max_priority_fee_per_gas?: string | number | undefined;
        };
    };
    method: "eth_sendTransaction";
    caip2: string;
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    /** RPC method to execute with the wallet. */
    method: z.ZodLiteral<"personal_sign">;
    /** Parameters for the RPC method.  */
    params: z.ZodObject<{
        /** Message to sign with the wallet. Must be encoded per the scheme in `encoding`. */
        message: z.ZodString;
        /** Encoding scheme for the message (utf-8 for plaintext, hex for raw bytes). */
        encoding: z.ZodUnion<[z.ZodLiteral<"utf-8">, z.ZodLiteral<"hex">]>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        encoding: "utf-8" | "hex";
    }, {
        message: string;
        encoding: "utf-8" | "hex";
    }>;
}, {
    /** Address of the wallet. */
    address: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** Chain type of the wallet. */
    chain_type: z.ZodOptional<z.ZodLiteral<"ethereum">>;
}>, "strip", z.ZodTypeAny, {
    params: {
        message: string;
        encoding: "utf-8" | "hex";
    };
    method: "personal_sign";
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}, {
    params: {
        message: string;
        encoding: "utf-8" | "hex";
    };
    method: "personal_sign";
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    /** RPC method to execute with the wallet. */
    method: z.ZodLiteral<"eth_signTypedData_v4">;
    /** Parameters for the RPC method.  */
    params: z.ZodObject<{
        /** The JSON typed data to sign with the wallet. */
        typed_data: z.ZodObject<{
            domain: z.ZodRecord<z.ZodString, z.ZodAny>;
            types: z.ZodRecord<z.ZodString, z.ZodAny>;
            message: z.ZodRecord<z.ZodString, z.ZodAny>;
            primary_type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: Record<string, any>;
            domain: Record<string, any>;
            types: Record<string, any>;
            primary_type: string;
        }, {
            message: Record<string, any>;
            domain: Record<string, any>;
            types: Record<string, any>;
            primary_type: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        typed_data: {
            message: Record<string, any>;
            domain: Record<string, any>;
            types: Record<string, any>;
            primary_type: string;
        };
    }, {
        typed_data: {
            message: Record<string, any>;
            domain: Record<string, any>;
            types: Record<string, any>;
            primary_type: string;
        };
    }>;
}, {
    /** Address of the wallet. */
    address: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** Chain type of the wallet. */
    chain_type: z.ZodOptional<z.ZodLiteral<"ethereum">>;
}>, "strip", z.ZodTypeAny, {
    params: {
        typed_data: {
            message: Record<string, any>;
            domain: Record<string, any>;
            types: Record<string, any>;
            primary_type: string;
        };
    };
    method: "eth_signTypedData_v4";
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}, {
    params: {
        typed_data: {
            message: Record<string, any>;
            domain: Record<string, any>;
            types: Record<string, any>;
            primary_type: string;
        };
    };
    method: "eth_signTypedData_v4";
    address?: string | undefined;
    chain_type?: "ethereum" | undefined;
}>]>, z.ZodDiscriminatedUnion<"method", [z.ZodObject<z.objectUtil.extendShape<{
    /** RPC method to execute with the wallet. */
    method: z.ZodLiteral<"signTransaction">;
    /** Parameters for the RPC method.  */
    params: z.ZodObject<{
        /** Serialized transaction object to sign with the wallet. Must be encoded per the scheme in `encoding`. */
        transaction: z.ZodString;
        /** Encoding scheme for the transaction. */
        encoding: z.ZodLiteral<"base64">;
    }, "strip", z.ZodTypeAny, {
        transaction: string;
        encoding: "base64";
    }, {
        transaction: string;
        encoding: "base64";
    }>;
}, {
    /** Address of the wallet. */
    address: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** Chain type of the wallet. */
    chain_type: z.ZodOptional<z.ZodLiteral<"solana">>;
}>, "strip", z.ZodTypeAny, {
    params: {
        transaction: string;
        encoding: "base64";
    };
    method: "signTransaction";
    address?: string | undefined;
    chain_type?: "solana" | undefined;
}, {
    params: {
        transaction: string;
        encoding: "base64";
    };
    method: "signTransaction";
    address?: string | undefined;
    chain_type?: "solana" | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    /** RPC method to execute with the wallet. */
    method: z.ZodLiteral<"signAndSendTransaction">;
    /** The CAIP-2 chain id to send the transaction on. */
    caip2: z.ZodString;
    /** Parameters for the RPC method.  */
    params: z.ZodObject<{
        /** Serialized transaction object to sign and send with the wallet. Must be encoded per the scheme in `encoding`. */
        transaction: z.ZodString;
        /** Encoding scheme for the transaction. */
        encoding: z.ZodLiteral<"base64">;
    }, "strip", z.ZodTypeAny, {
        transaction: string;
        encoding: "base64";
    }, {
        transaction: string;
        encoding: "base64";
    }>;
}, {
    /** Address of the wallet. */
    address: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** Chain type of the wallet. */
    chain_type: z.ZodOptional<z.ZodLiteral<"solana">>;
}>, "strip", z.ZodTypeAny, {
    params: {
        transaction: string;
        encoding: "base64";
    };
    method: "signAndSendTransaction";
    caip2: string;
    address?: string | undefined;
    chain_type?: "solana" | undefined;
}, {
    params: {
        transaction: string;
        encoding: "base64";
    };
    method: "signAndSendTransaction";
    caip2: string;
    address?: string | undefined;
    chain_type?: "solana" | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    /** RPC method to execute with the wallet. */
    method: z.ZodLiteral<"signMessage">;
    /** Parameters for the RPC method.  */
    params: z.ZodObject<{
        /** Message to sign with the wallet. Must be encoded per the scheme in `encoding`. */
        message: z.ZodString;
        /** Encoding scheme for the message. */
        encoding: z.ZodLiteral<"base64">;
    }, "strip", z.ZodTypeAny, {
        message: string;
        encoding: "base64";
    }, {
        message: string;
        encoding: "base64";
    }>;
}, {
    /** Address of the wallet. */
    address: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /** Chain type of the wallet. */
    chain_type: z.ZodOptional<z.ZodLiteral<"solana">>;
}>, "strip", z.ZodTypeAny, {
    params: {
        message: string;
        encoding: "base64";
    };
    method: "signMessage";
    address?: string | undefined;
    chain_type?: "solana" | undefined;
}, {
    params: {
        message: string;
        encoding: "base64";
    };
    method: "signMessage";
    address?: string | undefined;
    chain_type?: "solana" | undefined;
}>]>]>;
export type WalletApiRpcInputType = z.infer<typeof WalletApiRpcInput>;
export const WalletApiSolanaSignTransactionRpcResponse: z.ZodObject<{
    /** RPC method executed by the wallet */
    method: z.ZodLiteral<"signTransaction">;
    /** Data returned by the RPC method. */
    data: z.ZodObject<{
        /** Signature produced by the wallet. */
        signed_transaction: z.ZodString;
        /** Encoding of the signature */
        encoding: z.ZodLiteral<"base64">;
    }, "strip", z.ZodTypeAny, {
        encoding: "base64";
        signed_transaction: string;
    }, {
        encoding: "base64";
        signed_transaction: string;
    }>;
}, "strip", z.ZodTypeAny, {
    method: "signTransaction";
    data: {
        encoding: "base64";
        signed_transaction: string;
    };
}, {
    method: "signTransaction";
    data: {
        encoding: "base64";
        signed_transaction: string;
    };
}>;
export type WalletApiSolanaSignTransactionRpcResponseType = z.infer<typeof WalletApiSolanaSignTransactionRpcResponse>;
export const WalletApiSolanaSignAndSendTransactionRpcResponse: z.ZodObject<{
    /** RPC method executed by the wallet */
    method: z.ZodLiteral<"signAndSendTransaction">;
    /** Data returned by the RPC method. */
    data: z.ZodOptional<z.ZodObject<{
        /** Blockchain hash of the sent transaction. */
        hash: z.ZodString;
        /** The CAIP-2 chain id the transaction was sent on. */
        caip2: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        hash: string;
        caip2: string;
    }, {
        hash: string;
        caip2: string;
    }>>;
    /** Error object returned by the RPC method. */
    error: z.ZodOptional<z.ZodObject<{
        /** Error code */
        code: z.ZodString;
        /** Error message */
        message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
    }, {
        code: string;
        message: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    method: "signAndSendTransaction";
    error?: {
        code: string;
        message: string;
    } | undefined;
    data?: {
        hash: string;
        caip2: string;
    } | undefined;
}, {
    method: "signAndSendTransaction";
    error?: {
        code: string;
        message: string;
    } | undefined;
    data?: {
        hash: string;
        caip2: string;
    } | undefined;
}>;
export type WalletApiSolanaSignAndSendTransactionRpcResponseType = z.infer<typeof WalletApiSolanaSignAndSendTransactionRpcResponse>;
export const WalletApiSolanaSignMessageRpcResponse: z.ZodObject<{
    /** RPC method executed by the wallet */
    method: z.ZodLiteral<"signMessage">;
    /** Data returned by the RPC method. */
    data: z.ZodObject<{
        /** Signature produced by the wallet. */
        signature: z.ZodString;
        /** Encoding of the signature */
        encoding: z.ZodLiteral<"base64">;
    }, "strip", z.ZodTypeAny, {
        signature: string;
        encoding: "base64";
    }, {
        signature: string;
        encoding: "base64";
    }>;
}, "strip", z.ZodTypeAny, {
    method: "signMessage";
    data: {
        signature: string;
        encoding: "base64";
    };
}, {
    method: "signMessage";
    data: {
        signature: string;
        encoding: "base64";
    };
}>;
export type WalletApiSolanaSignMessageRpcResponseType = z.infer<typeof WalletApiSolanaSignMessageRpcResponse>;
export const WalletApiEthereumSignTransactionRpcResponse: z.ZodObject<{
    /** RPC method executed by the wallet */
    method: z.ZodLiteral<"eth_signTransaction">;
    /** Data returned by the RPC method. */
    data: z.ZodObject<{
        /** Signature produced by the wallet. */
        signed_transaction: z.ZodString;
        /** Encoding of the signed transaction */
        encoding: z.ZodLiteral<"rlp">;
    }, "strip", z.ZodTypeAny, {
        encoding: "rlp";
        signed_transaction: string;
    }, {
        encoding: "rlp";
        signed_transaction: string;
    }>;
}, "strip", z.ZodTypeAny, {
    method: "eth_signTransaction";
    data: {
        encoding: "rlp";
        signed_transaction: string;
    };
}, {
    method: "eth_signTransaction";
    data: {
        encoding: "rlp";
        signed_transaction: string;
    };
}>;
export type WalletApiEthereumSignTransactionRpcResponseType = z.infer<typeof WalletApiEthereumSignTransactionRpcResponse>;
export const WalletApiEthereumSendTransactionRpcResponse: z.ZodObject<{
    /** RPC method executed by the wallet */
    method: z.ZodLiteral<"eth_sendTransaction">;
    /** Data returned by the RPC method. */
    data: z.ZodOptional<z.ZodObject<{
        /** Blockchain hash of the sent transaction. */
        hash: z.ZodString;
        /** The CAIP-2 chain id the transaction was sent on. */
        caip2: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        hash: string;
        caip2: string;
    }, {
        hash: string;
        caip2: string;
    }>>;
    /** Error object returned by the RPC method. */
    error: z.ZodOptional<z.ZodObject<{
        /** Error code */
        code: z.ZodString;
        /** Error message */
        message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
    }, {
        code: string;
        message: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    method: "eth_sendTransaction";
    error?: {
        code: string;
        message: string;
    } | undefined;
    data?: {
        hash: string;
        caip2: string;
    } | undefined;
}, {
    method: "eth_sendTransaction";
    error?: {
        code: string;
        message: string;
    } | undefined;
    data?: {
        hash: string;
        caip2: string;
    } | undefined;
}>;
export type WalletApiEthereumSendTransactionRpcResponseType = z.infer<typeof WalletApiEthereumSendTransactionRpcResponse>;
export const WalletApiEthereumPersonalSignRpcResponse: z.ZodObject<{
    /** RPC method executed by the wallet */
    method: z.ZodLiteral<"personal_sign">;
    /** Data returned by the RPC method. */
    data: z.ZodObject<{
        /** Signature produced by the wallet. */
        signature: z.ZodString;
        /** Encoding of the signature */
        encoding: z.ZodLiteral<"hex">;
    }, "strip", z.ZodTypeAny, {
        signature: string;
        encoding: "hex";
    }, {
        signature: string;
        encoding: "hex";
    }>;
}, "strip", z.ZodTypeAny, {
    method: "personal_sign";
    data: {
        signature: string;
        encoding: "hex";
    };
}, {
    method: "personal_sign";
    data: {
        signature: string;
        encoding: "hex";
    };
}>;
export type WalletApiEthereumPersonalSignRpcResponseType = z.infer<typeof WalletApiEthereumPersonalSignRpcResponse>;
export const WalletApiEthereumSignTypedDataRpcResponse: z.ZodObject<{
    /** RPC method executed by the wallet */
    method: z.ZodLiteral<"eth_signTypedData_v4">;
    /** Data returned by the RPC method. */
    data: z.ZodObject<{
        /** Signature produced by the wallet. */
        signature: z.ZodString;
        /** Encoding of the signature */
        encoding: z.ZodLiteral<"hex">;
    }, "strip", z.ZodTypeAny, {
        signature: string;
        encoding: "hex";
    }, {
        signature: string;
        encoding: "hex";
    }>;
}, "strip", z.ZodTypeAny, {
    method: "eth_signTypedData_v4";
    data: {
        signature: string;
        encoding: "hex";
    };
}, {
    method: "eth_signTypedData_v4";
    data: {
        signature: string;
        encoding: "hex";
    };
}>;
export type WalletApiEthereumSignTypedDataRpcResponseType = z.infer<typeof WalletApiEthereumSignTypedDataRpcResponse>;
export const WalletApiRpcResponse: z.ZodDiscriminatedUnion<"method", [z.ZodObject<{
    /** RPC method executed by the wallet */
    method: z.ZodLiteral<"signTransaction">;
    /** Data returned by the RPC method. */
    data: z.ZodObject<{
        /** Signature produced by the wallet. */
        signed_transaction: z.ZodString;
        /** Encoding of the signature */
        encoding: z.ZodLiteral<"base64">;
    }, "strip", z.ZodTypeAny, {
        encoding: "base64";
        signed_transaction: string;
    }, {
        encoding: "base64";
        signed_transaction: string;
    }>;
}, "strip", z.ZodTypeAny, {
    method: "signTransaction";
    data: {
        encoding: "base64";
        signed_transaction: string;
    };
}, {
    method: "signTransaction";
    data: {
        encoding: "base64";
        signed_transaction: string;
    };
}>, z.ZodObject<{
    /** RPC method executed by the wallet */
    method: z.ZodLiteral<"signAndSendTransaction">;
    /** Data returned by the RPC method. */
    data: z.ZodOptional<z.ZodObject<{
        /** Blockchain hash of the sent transaction. */
        hash: z.ZodString;
        /** The CAIP-2 chain id the transaction was sent on. */
        caip2: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        hash: string;
        caip2: string;
    }, {
        hash: string;
        caip2: string;
    }>>;
    /** Error object returned by the RPC method. */
    error: z.ZodOptional<z.ZodObject<{
        /** Error code */
        code: z.ZodString;
        /** Error message */
        message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
    }, {
        code: string;
        message: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    method: "signAndSendTransaction";
    error?: {
        code: string;
        message: string;
    } | undefined;
    data?: {
        hash: string;
        caip2: string;
    } | undefined;
}, {
    method: "signAndSendTransaction";
    error?: {
        code: string;
        message: string;
    } | undefined;
    data?: {
        hash: string;
        caip2: string;
    } | undefined;
}>, z.ZodObject<{
    /** RPC method executed by the wallet */
    method: z.ZodLiteral<"signMessage">;
    /** Data returned by the RPC method. */
    data: z.ZodObject<{
        /** Signature produced by the wallet. */
        signature: z.ZodString;
        /** Encoding of the signature */
        encoding: z.ZodLiteral<"base64">;
    }, "strip", z.ZodTypeAny, {
        signature: string;
        encoding: "base64";
    }, {
        signature: string;
        encoding: "base64";
    }>;
}, "strip", z.ZodTypeAny, {
    method: "signMessage";
    data: {
        signature: string;
        encoding: "base64";
    };
}, {
    method: "signMessage";
    data: {
        signature: string;
        encoding: "base64";
    };
}>, z.ZodObject<{
    /** RPC method executed by the wallet */
    method: z.ZodLiteral<"eth_signTransaction">;
    /** Data returned by the RPC method. */
    data: z.ZodObject<{
        /** Signature produced by the wallet. */
        signed_transaction: z.ZodString;
        /** Encoding of the signed transaction */
        encoding: z.ZodLiteral<"rlp">;
    }, "strip", z.ZodTypeAny, {
        encoding: "rlp";
        signed_transaction: string;
    }, {
        encoding: "rlp";
        signed_transaction: string;
    }>;
}, "strip", z.ZodTypeAny, {
    method: "eth_signTransaction";
    data: {
        encoding: "rlp";
        signed_transaction: string;
    };
}, {
    method: "eth_signTransaction";
    data: {
        encoding: "rlp";
        signed_transaction: string;
    };
}>, z.ZodObject<{
    /** RPC method executed by the wallet */
    method: z.ZodLiteral<"eth_sendTransaction">;
    /** Data returned by the RPC method. */
    data: z.ZodOptional<z.ZodObject<{
        /** Blockchain hash of the sent transaction. */
        hash: z.ZodString;
        /** The CAIP-2 chain id the transaction was sent on. */
        caip2: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        hash: string;
        caip2: string;
    }, {
        hash: string;
        caip2: string;
    }>>;
    /** Error object returned by the RPC method. */
    error: z.ZodOptional<z.ZodObject<{
        /** Error code */
        code: z.ZodString;
        /** Error message */
        message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
    }, {
        code: string;
        message: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    method: "eth_sendTransaction";
    error?: {
        code: string;
        message: string;
    } | undefined;
    data?: {
        hash: string;
        caip2: string;
    } | undefined;
}, {
    method: "eth_sendTransaction";
    error?: {
        code: string;
        message: string;
    } | undefined;
    data?: {
        hash: string;
        caip2: string;
    } | undefined;
}>, z.ZodObject<{
    /** RPC method executed by the wallet */
    method: z.ZodLiteral<"personal_sign">;
    /** Data returned by the RPC method. */
    data: z.ZodObject<{
        /** Signature produced by the wallet. */
        signature: z.ZodString;
        /** Encoding of the signature */
        encoding: z.ZodLiteral<"hex">;
    }, "strip", z.ZodTypeAny, {
        signature: string;
        encoding: "hex";
    }, {
        signature: string;
        encoding: "hex";
    }>;
}, "strip", z.ZodTypeAny, {
    method: "personal_sign";
    data: {
        signature: string;
        encoding: "hex";
    };
}, {
    method: "personal_sign";
    data: {
        signature: string;
        encoding: "hex";
    };
}>, z.ZodObject<{
    /** RPC method executed by the wallet */
    method: z.ZodLiteral<"eth_signTypedData_v4">;
    /** Data returned by the RPC method. */
    data: z.ZodObject<{
        /** Signature produced by the wallet. */
        signature: z.ZodString;
        /** Encoding of the signature */
        encoding: z.ZodLiteral<"hex">;
    }, "strip", z.ZodTypeAny, {
        signature: string;
        encoding: "hex";
    }, {
        signature: string;
        encoding: "hex";
    }>;
}, "strip", z.ZodTypeAny, {
    method: "eth_signTypedData_v4";
    data: {
        signature: string;
        encoding: "hex";
    };
}, {
    method: "eth_signTypedData_v4";
    data: {
        signature: string;
        encoding: "hex";
    };
}>]>;
export type WalletApiRpcResponseType = z.infer<typeof WalletApiRpcResponse>;
export const WalletApiRegisterAuthorizationKeyInput: z.ZodObject<{
    display_name: z.ZodOptional<z.ZodString>;
    public_key: z.ZodString;
    role: z.ZodOptional<z.ZodNullable<z.ZodEnum<["root", "manager"]>>>;
}, "strip", z.ZodTypeAny, {
    public_key: string;
    display_name?: string | undefined;
    role?: "root" | "manager" | null | undefined;
}, {
    public_key: string;
    display_name?: string | undefined;
    role?: "root" | "manager" | null | undefined;
}>;
export type WalletApiRegisterAuthorizationKeyInputType = z.infer<typeof WalletApiRegisterAuthorizationKeyInput>;
export const WalletResponse: z.ZodObject<{
    id: z.ZodString;
    address: z.ZodString;
    created_at: z.ZodNumber;
    chain_type: z.ZodUnion<[z.ZodLiteral<"solana">, z.ZodLiteral<"ethereum">]>;
    policy_ids: z.ZodArray<z.ZodString, "many">;
    authorization_threshold: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: string;
    address: string;
    chain_type: "solana" | "ethereum";
    created_at: number;
    policy_ids: string[];
    authorization_threshold?: number | undefined;
}, {
    id: string;
    address: string;
    chain_type: "solana" | "ethereum";
    created_at: number;
    policy_ids: string[];
    authorization_threshold?: number | undefined;
}>;
export type WalletResponseType = z.infer<typeof WalletResponse>;
export const WalletApiCreateInput: z.ZodCatch<z.ZodEffects<z.ZodObject<{
    /** Chain to create wallet for. */
    chain_type: z.ZodUnion<[z.ZodLiteral<"solana">, z.ZodLiteral<"ethereum">]>;
    /** Optional policy ID to create wallet for. */
    policy_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /** The set of authorization key IDs that can authorize actions on this wallet.
     * If unspecified, any request authorized by the app secret is sufficient to take
     * actions with the wallet. */
    authorization_key_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /** The minimum number of keys required to authorize actions on this wallet.
     * Leave unspecified to require all keys to sign a request for any action. */
    authorization_threshold: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    chain_type: "solana" | "ethereum";
    policy_ids?: string[] | undefined;
    authorization_threshold?: number | undefined;
    authorization_key_ids?: string[] | undefined;
}, {
    chain_type: "solana" | "ethereum";
    policy_ids?: string[] | undefined;
    authorization_threshold?: number | undefined;
    authorization_key_ids?: string[] | undefined;
}>, {
    chain_type: "solana" | "ethereum";
    policy_ids?: string[] | undefined;
    authorization_threshold?: number | undefined;
    authorization_key_ids?: string[] | undefined;
}, {
    chain_type: "solana" | "ethereum";
    policy_ids?: string[] | undefined;
    authorization_threshold?: number | undefined;
    authorization_key_ids?: string[] | undefined;
}>>;
export type WalletApiCreateInputType = z.infer<typeof WalletApiCreateInput>;
export const WalletApiCreateResponse: z.ZodObject<{
    /** Unique ID for the created wallet. */
    id: z.ZodString;
    /** Chain type of the created wallet. */
    chain_type: z.ZodUnion<[z.ZodLiteral<"solana">, z.ZodLiteral<"ethereum">]>;
    /** Address of the created wallet */
    address: z.ZodString;
    /** The optional authorization threshold for the wallet. */
    authorization_threshold: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: string;
    address: string;
    chain_type: "solana" | "ethereum";
    authorization_threshold?: number | undefined;
}, {
    id: string;
    address: string;
    chain_type: "solana" | "ethereum";
    authorization_threshold?: number | undefined;
}>;
export type WalletApiCreateResponseType = z.infer<typeof WalletApiCreateResponse>;
/**
 * Parses a JSON representation of a URL's path variables
 * for the `wallet_id`
 *
 * Throws an error if the `wallet_id` is not defined
 * or is not a valid, non-empty string.
 */
export const WalletIdFromPath: z.ZodCatch<z.ZodObject<{
    wallet_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    wallet_id: string;
}, {
    wallet_id: string;
}>>;
export type WalletsResponseType = {
    data: Array<WalletResponseType>;
    next_cursor: string | null;
};
export const WalletApiRevokeAuthorizationKeyInput: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type WalletApiRevokeAuthorizationKeyInput = z.infer<typeof WalletApiRevokeAuthorizationKeyInput>;
export const AuthorizationKey: z.ZodObject<{
    id: z.ZodString;
    display_name: z.ZodNullable<z.ZodString>;
    public_key: z.ZodString;
    role: z.ZodNullable<z.ZodEnum<["root", "manager"]>>;
    created_at: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    display_name: string | null;
    public_key: string;
    created_at: number;
    role: "root" | "manager" | null;
}, {
    id: string;
    display_name: string | null;
    public_key: string;
    created_at: number;
    role: "root" | "manager" | null;
}>;
export type AuthorizationKey = z.infer<typeof AuthorizationKey>;
export const WalletsSearchInput: z.ZodObject<z.objectUtil.extendShape<{
    cursor: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    limit: z.ZodOptional<z.ZodNumber>;
}, {
    chain_type: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"solana">, z.ZodLiteral<"ethereum">]>>;
}>, "strip", z.ZodTypeAny, {
    cursor?: string | undefined;
    limit?: number | undefined;
    chain_type?: "solana" | "ethereum" | undefined;
}, {
    cursor?: string | undefined;
    limit?: number | undefined;
    chain_type?: "solana" | "ethereum" | undefined;
}>;
export type WalletsSearchInputType = z.infer<typeof WalletsSearchInput>;
export const WalletUpdateInput: z.ZodEffects<z.ZodObject<{
    policy_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    authorization_key_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    authorization_threshold: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    policy_ids?: string[] | undefined;
    authorization_threshold?: number | undefined;
    authorization_key_ids?: string[] | undefined;
    tags?: string[] | undefined;
}, {
    policy_ids?: string[] | undefined;
    authorization_threshold?: number | undefined;
    authorization_key_ids?: string[] | undefined;
    tags?: string[] | undefined;
}>, {
    policy_ids?: string[] | undefined;
    authorization_threshold?: number | undefined;
    authorization_key_ids?: string[] | undefined;
    tags?: string[] | undefined;
}, {
    policy_ids?: string[] | undefined;
    authorization_threshold?: number | undefined;
    authorization_key_ids?: string[] | undefined;
    tags?: string[] | undefined;
}>;
export type WalletUpdateInputType = z.infer<typeof WalletUpdateInput>;
export const TransactionScanningInput: z.ZodObject<{
    /** The integer chain id to send the transaction on. */
    chain_id: z.ZodString;
    /**  Additional information for Blockaid to validate against. */
    metadata: z.ZodObject<{
        domain: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        domain: string;
    }, {
        domain: string;
    }>;
    /** Raw RPC request */
    request: z.ZodObject<{
        /** RPC method to execute with the wallet. */
        method: z.ZodString;
        /** Parameters for the RPC method.  */
        params: z.ZodArray<z.ZodAny, "many">;
    }, "strip", z.ZodTypeAny, {
        params: any[];
        method: string;
    }, {
        params: any[];
        method: string;
    }>;
}, "strip", z.ZodTypeAny, {
    chain_id: string;
    metadata: {
        domain: string;
    };
    request: {
        params: any[];
        method: string;
    };
}, {
    chain_id: string;
    metadata: {
        domain: string;
    };
    request: {
        params: any[];
        method: string;
    };
}>;
export type PrivyTransactionScanningInputType = z.infer<typeof TransactionScanningInput>;
export const TransactionScanningResponse: z.ZodObject<{
    validation: z.ZodObject<{
        status: z.ZodString;
        result_type: z.ZodString;
        error: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: string;
        error: string;
        result_type: string;
    }, {
        status: string;
        error: string;
        result_type: string;
    }>;
    simulation: z.ZodObject<{
        status: z.ZodString;
        error: z.ZodString;
        assets_diffs: z.ZodArray<z.ZodAny, "many">;
        exposures: z.ZodArray<z.ZodAny, "many">;
    }, "strip", z.ZodTypeAny, {
        status: string;
        error: string;
        assets_diffs: any[];
        exposures: any[];
    }, {
        status: string;
        error: string;
        assets_diffs: any[];
        exposures: any[];
    }>;
}, "strip", z.ZodTypeAny, {
    validation: {
        status: string;
        error: string;
        result_type: string;
    };
    simulation: {
        status: string;
        error: string;
        assets_diffs: any[];
        exposures: any[];
    };
}, {
    validation: {
        status: string;
        error: string;
        result_type: string;
    };
    simulation: {
        status: string;
        error: string;
        assets_diffs: any[];
        exposures: any[];
    };
}>;
export type PrivyTransactionScanningResponse = z.infer<typeof TransactionScanningResponse>;
export interface Route<Body = Record<string, unknown>, Response = Record<string, unknown>> {
    path: string;
    method: string;
    body?: Body;
    response?: Response;
}
export type RouteResponse<T extends Route<U, V>, U = any, V = any> = NonNullable<T['response']>;
type PathParam = string | number;
/**
 * PathParams is a recursive type that parses a path string and creates an object type
 * where each property is a path parameter and its value is a PathParam type.
 */
export type PathParams<T extends string> = T extends `${infer _Start}:${infer Param}/${infer Rest}` ? {
    [K in Param | keyof PathParams<Rest>]: PathParam;
} : T extends `${infer _Start}:${infer Param}` ? {
    [K in Param]: PathParam;
} : Record<string, string>;
export const getPathWithParams: (path: string, params?: Record<string, string | number>) => string;
export const AnalyticsEvent: Route<PrivyAnalyticsEventInput, null>;
export const AppConfig: Route<PrivyEmptyObject, PrivyAppResponse>;
export const CoinbaseOnRampInit: Route<PrivyCoinbaseOnRampInitInput, PrivyCoinbaseOnRampInitResponse>;
export const CoinbaseOnRampStatus: Route<Record<string, never>, PrivyCoinbaseOnRampStatusResponse>;
export const GetCrossAppConnections: Route<PrivyEmptyObject, PrivyCrossAppConnectionsResponse>;
export const CustomJWTAuthenticate: Route<PrivyAuthenticateJwtInput, PrivyAuthenticatedUser>;
export const FarcasterInit: Route<PrivyFarcasterInitInput, PrivyFarcasterConnectInitResponse>;
export const FarcasterAuthenticate: Route<PrivyFarcasterAuthenticateInput, PrivyAuthenticatedUser>;
export const FarcasterLink: Route<PrivyFarcasterLinkInput, PrivyUser>;
export const FarcasterUnlink: Route<PrivyFarcasterUnlinkInput, PrivyUser>;
export const FarcasterStatus: Route<Record<string, never>, PrivyFarcasterConnectStatusCompletedResponse | PrivyFarcasterConnectStatusPendingResponse>;
export const FarcasterV2Init: Route<PrivyFarcasterV2InitInput, PrivyFarcasterV2InitResponse>;
export const FarcasterV2Authenticate: Route<PrivyFarcasterV2AuthenticateInput, PrivyAuthenticatedUser>;
export const FarcasterSignerInit: Route<PrivyFarcasterSignerInitInput, PrivyFarcasterSignerInitResponse>;
export const FarcasterSignerStatus: Route<PrivyEmptyObject, PrivyFarcasterSignerStatusResponse>;
export const GuestAuthenticate: Route<PrivyAuthenticateGuestInput, PrivyAuthenticatedUser>;
export const MfaPasskeyInit: Route<MfaPasskeyInitInputType, ResponsePasskeyInitAuthenticateType>;
export const MfaPasskeyVerify: Route<MfaPasskeyVerifyInputType, MfaVerifyResponseType>;
export const MfaPasskeyEnrollment: Route<PrivyMfaEnrollmentPasskeyInputType, PrivyEmptyObject>;
export const MfaPasswordlessSmsEnroll: Route<MfaSmsEnrollInputType, PrivyUser>;
export const MfaPasswordlessSmsVerify: Route<MfaSmsVerifyInputType, MfaVerifyResponseType>;
export const MfaPasswordlessSmsInit: Route<MfaSmsInitInputType, PrivySuccessObject>;
export const MfaPasswordlessSmsUnenroll: Route<Record<string, never>, PrivySuccessObject>;
export const MfaTotpEnroll: Route<MfaTotpInputType, PrivyUser>;
export const MfaTotpVerify: Route<MfaTotpInputType, MfaVerifyResponseType>;
export const MfaTotpInit: Route<Record<string, never>, ResponseTotpInitMfaType>;
export const MfaTotpUnenroll: Route<Record<string, never>, PrivySuccessObject>;
export const OAuthAuthenticate: Route<PrivyAuthenticateOauthInput, PrivyAuthenticatedUser>;
export const OAuthInit: Route<PrivyOAuthInitInput, PrivyOAuthInitResponse>;
export const OAuthLink: Route<PrivyLinkOAuthInput, PrivyOAuthLinkResponse>;
export const OAuthUnlink: Route<PrivyOAuthUnlinkInput, PrivyUser>;
export const OAuthProviderAuthorize: Route<z.infer<typeof AuthorizationCodeInput>>;
export const OAuthProviderVerify: Route<{
    prat: string;
}, {
    verified: boolean;
}>;
export const PasskeyLink: Route<PasskeyLinkInputType, PrivyUser>;
export const PasskeyAuthenticate: Route<PasskeyAuthenticateInputType, PrivyAuthenticatedUser>;
export const PasskeyRegister: Route<PasskeyRegisterInputType, PrivyAuthenticatedUser>;
export const PasskeyAuthenticateInit: Route<PasskeyInitInputType, ResponsePasskeyInitAuthenticateType>;
export const PasskeyRegisterInit: Route<PasskeyInitInputType, ResponsePasskeyInitRegisterType>;
export const PasskeyLinkInit: Route<PasskeyInitInputType, ResponsePasskeyInitLinkType>;
export const PasskeyUnlink: Route<PrivyUnlinkPasskeyInput, PrivyUser>;
export const PasswordlessAuthenticate: Route<PrivyAuthenticateEmailInput, PrivyAuthenticatedUser>;
export const PasswordlessInit: Route<PrivyInitEmailInput, PrivySuccessObject>;
export const PasswordlessLink: Route<PrivyVerifyEmailInput, PrivyUser>;
export const PasswordlessUnlink: Route<PrivyUnlinkEmailInput, PrivyUser>;
export const PasswordlessUpdate: Route<PrivyUpdateEmailInput, PrivyUser>;
export const PasswordlessSmsAuthenticate: Route<PrivyAuthenticatePhoneInput, PrivyAuthenticatedUser>;
export const PasswordlessSmsInit: Route<PrivyLinkPhoneInput, PrivySuccessObject>;
export const PasswordlessSmsLink: Route<PrivyVerifyPhoneInput, PrivyUser>;
export const PasswordlessSmsUnlink: Route<PrivyUnlinkPhoneInput, PrivyUser>;
export const PasswordlessSmsUpdate: Route<PrivyUpdatePhoneInput, PrivyUser>;
export const RecoveryKeyMaterial: Route<PrivyRecoveryKeyMaterialInput, PrivyRecoveryKeyMaterialResponse>;
export const RecoveryOAuthInit: Route<PrivyOAuthInitRecoveryInput, PrivyOAuthInitResponse>;
export const RecoveryOAuthAuthenticate: Route<PrivyAuthenticateOauthInput, PrivyOAuthAuthenticateRecoveryResponse>;
export const RecoveryOAuthInitICloud: Route<PrivyOAuthInitICloudRecoveryInput, PrivyOAuthInitResponse>;
export const RecoveryOAuthCallbackICloudExpo: Route<PrivyOAuthCallbackICloudExpoInput, PrivyOAuthCallbackICloudExpoResponse>;
export const RecoveryConfigurationICloud: Route<PrivyRecoveryConfigurationICloudInput, PrivyRecoveryConfigurationICloudResponse>;
export const RefreshSession: Route<PrivyOptionalRefreshTokenInput, PrivyAuthenticatedUser>;
export const Logout: Route<PrivyOptionalRefreshTokenInput, PrivyEmptyObject>;
export const GetSmartWalletConfig: Route<PrivyEmptyObject, PrivySmartWalletConfigurationResponse>;
export const PostSmartWalletConfig: Route<PrivySmartWalletConfigurationInput, PrivySmartWalletConfigurationResponse>;
export const WalletsRevoke: Route<PrivyEmptyObject, WalletApiRevokeResponseType>;
export const SiweInit: Route<PrivySiweAddressInput, PrivySiweNonce>;
export const SiweAuthenticate: Route<PrivyAuthenticateSiweInput, PrivyAuthenticatedUser>;
export const SiweLink: Route<PrivySiweInput, PrivyUser>;
export const SiweLinkSmartWallet: Route<PrivySmartWalletSiweInput, PrivyUser>;
export const SiweUnlink: Route<PrivySiweAddressInput, PrivyUser>;
export const SiwsInit: Route<PrivySiwsAddressInput, PrivySiwsNonce>;
export const SiwsAuthenticate: Route<PrivyAuthenticateSiwsInput, PrivyAuthenticatedUser>;
export const SiwsLink: Route<PrivySiwsInput, PrivyUser>;
export const SiwsUnlink: Route<PrivySiwsAddressInput, PrivyUser>;
export const AcceptTermsOnUser: Route<Record<string, never>, PrivyUser>;
export const TelegramAuthenticate: Route<PrivyTelegramAuthenticateInput, PrivyAuthenticatedUser>;
export const TelegramLink: Route<PrivyTelegramLinkInput, PrivyUser>;
export const TelegramUnlink: Route<PrivyTelegramUnlinkInput, PrivyUser>;
export const MoonpayOnRampSign: Route<PrivyMoonpayOnRampSignInput, PrivyMoonpayOnRampSignResponse>;

//# sourceMappingURL=index.d.ts.map
