import { z } from 'zod';

declare enum PrivyErrorCode {
    /** The user's OAuth account is suspended and is not allowed. */
    OAUTH_ACCOUNT_SUSPENDED = "oauth_account_suspended",
    /** The Privy app id is either not provided or not valid. Check the developer dashboard to verify you are setting the correct value. */
    MISSING_OR_INVALID_PRIVY_APP_ID = "missing_or_invalid_privy_app_id",
    /** The Privy app client id is either not provided or not valid. Check the developer dashboard to verify you are setting the correct value. */
    MISSING_OR_INVALID_PRIVY_CLIENT_ID = "missing_or_invalid_privy_client_id",
    /** The Privy account id is either not provided or not valid. Check the developer dashboard to verify you are setting the correct value. */
    MISSING_OR_INVALID_PRIVY_ACCOUNT_ID = "missing_or_invalid_privy_account_id",
    /** The refresh or access token is either not provided or not valid. */
    MISSING_OR_INVALID_TOKEN = "missing_or_invalid_token",
    /** The user does not have a valid MFA connected */
    MISSING_OR_INVALID_MFA = "missing_or_invalid_mfa",
    /** The MFA Token provided has expired */
    EXPIRED_OR_INVALID_MFA_TOKEN = "expired_or_invalid_mfa_token",
    /** The body of the request contains input that is invalid. Check the response body for detailed information. */
    INVALID_DATA = "invalid_data",
    /** A form of INVALID_DATA specifically when the user is trying to authenticate and did not match the provided challenge. */
    INVALID_CREDENTIALS = "invalid_credentials",
    /** When the user is trying to authenticate and did provide a valid CAPTCHA token. */
    INVALID_CAPTCHA = "invalid_captcha",
    /** You attempted to link an account that belongs to another user. */
    LINKED_TO_ANOTHER_USER = "linked_to_another_user",
    /** This app has an allowlist and the login account was not included. Either disable the allowlist or have the user try again with a different account. */
    ALLOWLIST_REJECTED = "allowlist_rejected",
    /** Embedded wallets cannot be unlinked */
    CANNOT_UNLINK_EMBEDDED_WALLET = "cannot_unlink_embedded_wallet",
    /** You are unable to unlink an account when there is only one account present. */
    CANNOT_UNLINK_SOLE_ACCOUNT = "cannot_unlink_sole_account",
    /** Cannot link another account of this type */
    CANNOT_LINK_MORE_OF_TYPE = "cannot_link_more_of_type",
    /** Linked account cannot be found. The account was either invalid or has already been unlinked. */
    LINKED_ACCOUNT_NOT_FOUND = "linked_account_not_found",
    /** Too many requests. Please wait to try again. */
    TOO_MANY_REQUESTS = "too_many_requests",
    /** Origin was expected and is invalid. */
    INVALID_ORIGIN = "invalid_origin",
    /** Origin was expected and is not set. */
    MISSING_ORIGIN = "missing_origin",
    /** Native App ID was expected and is invalid. */
    INVALID_NATIVE_APP_ID = "invalid_native_app_id",
    /** Refresh token re-use detected. */
    TOKEN_ALREADY_USED = "token_already_used",
    /** Attempting to log out of a session that does not exist. */
    ALREADY_LOGGED_OUT = "already_logged_out",
    /** The value (phone number, email) that was submitted is not supported. */
    NOT_SUPPORTED = "not_supported",
    /** You have previously unsubscribed from the sending email/phone number. */
    USER_UNSUBSCRIBED = "user_unsubscribed",
    /** You have reached the maximum number of apps allowed per account. */
    MAX_APPS_REACHED = "max_apps_reached",
    /** You have reached the maximum number of users allowed per app. */
    USER_LIMIT_REACHED = "max_accounts_reached",
    /** You are trying to reconstruct an embedded wallet on a device that has been marked as revoked */
    DEVICE_REVOKED = "device_revoked",
    /** You attempted to set a password on a wallet with an existing password */
    WALLET_PASSWORD_EXISTS = "wallet_password_exists",
    /** The user attempted to complete an oauth flow with a different state than started. */
    OAUTH_STATE_MISMATCH = "oauth_state_mismatch",
    /** You have reached the maximum number of denylist entries allowed per app. */
    MAX_DENYLIST_ENTRIES_REACHED = "max_denylist_entries_reached",
    /** The user attempted to log in or link a disallowed method. */
    DISALLOWED_LOGIN_METHOD = "disallowed_login_method",
    /** The user attempted to log in with an email address with a + in it, but the app is configured to disallow this  */
    DISALLOWED_PLUS_EMAIL = "disallowed_plus_email",
    /** The user attempted to recover their embedded wallet via a disallowed method. */
    DISALLOWED_RECOVERY_METHOD = "disallowed_recovery_method",
    /** The customer must enforce login methods through the dashboard */
    LEGACY_DASHBOARD_LOGIN_CONFIGURATION = "legacy_dashboard_login_configuration",
    /** Cannot set password on this wallet */
    CANNOT_SET_PASSWORD = "cannot_set_password",
    /** Invalid PKCE parameters */
    INVALID_PKCE_PARAMETERS = "invalid_pkce_parameters",
    /** Invalid app url scheme configuration */
    INVALID_APP_URL_SCHEME_CONFIGURATION = "invalid_app_url_scheme_configuration",
    /** This app is not permitted to provider to target app */
    CROSS_APP_CONNECTION_NOT_ALLOWED = "cross_app_connection_not_allowed",
    /** There is no user with this login method */
    USER_DOES_NOT_EXIST = "user_does_not_exist",
    ACCOUNT_TRANSFER_REQUIRED = "account_transfer_required",
    /** The user has not consented to delegated actions for this wallet */
    USER_HAS_NOT_DELEGATED_WALLET = "user_has_not_delegated_wallet",
    /** This feature is not enabled on the app */
    FEATURE_NOT_ENABLED = "feature_not_enabled",
    /** Wallet has insufficent funds for transaction */
    INSUFFICIENT_FUNDS = "insufficient_funds",
    /** Transaction broadcast failure */
    TRANSACTION_BROADCAST_FAILURE = "transaction_broadcast_failure",
    /** Invalid policy format */
    INVALID_POLICY_FORMAT = "invalid_policy_format",
    /** Policy violation */
    POLICY_VIOLATION = "policy_violation"
}

type ApiErrorType = {
    error: string;
    cause?: string;
    code?: PrivyErrorCode;
    data?: Record<string, any>;
};
declare class HttpError extends Error {
    status: number;
    /** Unique Privy error code. The SDK/customers should be able to use this code to programmatically */
    code?: PrivyErrorCode;
    responseData?: Record<string, any>;
    constructor(status: number, message: string, code?: PrivyErrorCode, responseData?: Record<string, any>);
    toString(): string;
}
declare class InvalidInputError extends HttpError {
    constructor(message: string, errorCode?: PrivyErrorCode);
}
declare class UnauthorizedError extends HttpError {
    constructor(message: string, errorCode?: PrivyErrorCode);
}
declare class AllowlistRejectedError extends UnauthorizedError {
    /**
     * TODO: Changing the default message will cause existing allowlist SDK checks to fail and
     * should not be done until we're sure all users are off the version of the SDK that checks for
     * that string.
     */
    constructor(message?: string);
}
declare class ForbiddenError extends HttpError {
    constructor(message: string, errorCode?: PrivyErrorCode);
}
declare class NotFoundError extends HttpError {
    constructor(message: string);
}
declare class RequestTimeoutError extends HttpError {
    constructor(message: string, errorCode?: PrivyErrorCode);
}
declare class UnsupportedMediaType extends HttpError {
    constructor(message: string);
}
/**
 * @deprecated
 *
 * Use InvalidInputError moving forward.
 *
 * In the past, we would occasionally return 422 for invalid input.
 */
declare class LegacyInvalidInputError extends HttpError {
    constructor(message: string, errorCode: PrivyErrorCode);
}
declare class TooManyRequestsError extends HttpError {
    constructor(message?: string);
}
declare class InternalServerError extends HttpError {
    constructor(message?: string);
}
declare class AccountTransferRequiredError extends HttpError {
    data: {
        nonce: string;
        subject: string;
        otherUser: {
            embeddedWalletAddress: string | null;
            farcasterEmbeddedAddress?: string;
            oAuthUserInfo?: Record<string, any>;
        };
        account: {
            displayName: string | null;
        };
    };
    constructor(data: {
        nonce: string;
        subject: string;
        otherUser: {
            embeddedWalletAddress: string | null;
            farcasterEmbeddedAddress?: string;
            oAuthUserInfo?: Record<string, any>;
        };
        account: {
            displayName: string | null;
        };
    });
}

declare const APIError: z.ZodObject<{
    error: z.ZodString;
    cause: z.ZodOptional<z.ZodString>;
    code: z.ZodOptional<z.ZodNativeEnum<typeof PrivyErrorCode>>;
}, "strip", z.ZodTypeAny, {
    error: string;
    cause?: string | undefined;
    code?: PrivyErrorCode | undefined;
}, {
    error: string;
    cause?: string | undefined;
    code?: PrivyErrorCode | undefined;
}>;

export { APIError, AccountTransferRequiredError, AllowlistRejectedError, type ApiErrorType, ForbiddenError, HttpError, InternalServerError, InvalidInputError, LegacyInvalidInputError, NotFoundError, PrivyErrorCode, RequestTimeoutError, TooManyRequestsError, UnauthorizedError, UnsupportedMediaType };
