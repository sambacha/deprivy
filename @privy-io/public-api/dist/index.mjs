import $3z62d$zod, {z as $3z62d$z} from "zod";
import {InvalidInputError as $3z62d$InvalidInputError, PrivyErrorCode as $3z62d$PrivyErrorCode, UnauthorizedError as $3z62d$UnauthorizedError, LegacyInvalidInputError as $3z62d$LegacyInvalidInputError} from "@privy-io/api-base";
import $3z62d$bs58 from "bs58";
import {ethers as $3z62d$ethers} from "ethers";
import {parsePhoneNumber as $3z62d$parsePhoneNumber} from "libphonenumber-js/max";


function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $007c106f876c4b2e$exports = {};
var $9389a438679dfb17$exports = {};

$parcel$export($9389a438679dfb17$exports, "AnalyticsEvent", () => $9389a438679dfb17$export$30b7662faa307ee);
const $9389a438679dfb17$export$30b7662faa307ee = {
    path: "/api/v1/analytics_events",
    method: "POST"
};


var $3eadf33fb6d2173f$exports = {};

$parcel$export($3eadf33fb6d2173f$exports, "AppConfig", () => $3eadf33fb6d2173f$export$d67e1898834e3885);
const $3eadf33fb6d2173f$export$d67e1898834e3885 = {
    path: "/api/v1/apps/:app_id",
    method: "GET"
};


var $3c21d05a2d9eac05$exports = {};

$parcel$export($3c21d05a2d9eac05$exports, "CoinbaseOnRampInit", () => $3c21d05a2d9eac05$export$4d795ff6fee0e993);
$parcel$export($3c21d05a2d9eac05$exports, "CoinbaseOnRampStatus", () => $3c21d05a2d9eac05$export$56adef0ec94545fa);
const $3c21d05a2d9eac05$export$4d795ff6fee0e993 = {
    path: "/api/v1/funding/coinbase_on_ramp/init",
    method: "POST"
};
const $3c21d05a2d9eac05$export$56adef0ec94545fa = {
    path: "/api/v1/funding/coinbase_on_ramp/status",
    method: "GET"
};


var $5273a2b7956efa12$exports = {};

$parcel$export($5273a2b7956efa12$exports, "GetCrossAppConnections", () => $5273a2b7956efa12$export$b9aa74fef6e2a10e);
const $5273a2b7956efa12$export$b9aa74fef6e2a10e = {
    path: "/api/v1/apps/:app_id/cross-app/connections",
    method: "GET"
};


var $abe1801c1695c2e5$exports = {};

$parcel$export($abe1801c1695c2e5$exports, "CustomJWTAuthenticate", () => $abe1801c1695c2e5$export$cca9af2746f9b569);
const $abe1801c1695c2e5$export$cca9af2746f9b569 = {
    path: "/api/v1/custom_jwt_account/authenticate",
    method: "POST"
};


var $edf644e56ded1c98$exports = {};

$parcel$export($edf644e56ded1c98$exports, "FarcasterInit", () => $edf644e56ded1c98$export$7ed9dd4c28ecc8b6);
$parcel$export($edf644e56ded1c98$exports, "FarcasterAuthenticate", () => $edf644e56ded1c98$export$c5985ffc97c7fdbb);
$parcel$export($edf644e56ded1c98$exports, "FarcasterLink", () => $edf644e56ded1c98$export$d51549470a941fce);
$parcel$export($edf644e56ded1c98$exports, "FarcasterUnlink", () => $edf644e56ded1c98$export$6017b5ccb660b0c8);
$parcel$export($edf644e56ded1c98$exports, "FarcasterStatus", () => $edf644e56ded1c98$export$a14f766edcdfe001);
$parcel$export($edf644e56ded1c98$exports, "FarcasterV2Init", () => $edf644e56ded1c98$export$1fd254d2511870dc);
$parcel$export($edf644e56ded1c98$exports, "FarcasterV2Authenticate", () => $edf644e56ded1c98$export$830c712ac562c817);
const $edf644e56ded1c98$export$7ed9dd4c28ecc8b6 = {
    path: "/api/v1/farcaster/init",
    method: "POST"
};
const $edf644e56ded1c98$export$c5985ffc97c7fdbb = {
    path: "/api/v1/farcaster/authenticate",
    method: "POST"
};
const $edf644e56ded1c98$export$d51549470a941fce = {
    path: "/api/v1/farcaster/link",
    method: "POST"
};
const $edf644e56ded1c98$export$6017b5ccb660b0c8 = {
    path: "/api/v1/farcaster/unlink",
    method: "POST"
};
const $edf644e56ded1c98$export$a14f766edcdfe001 = {
    path: "/api/v1/farcaster/status",
    method: "GET"
};
const $edf644e56ded1c98$export$1fd254d2511870dc = {
    path: "/api/v2/farcaster/init",
    method: "POST"
};
const $edf644e56ded1c98$export$830c712ac562c817 = {
    path: "/api/v2/farcaster/authenticate",
    method: "POST"
};


var $660bfeb10a2941e4$exports = {};

$parcel$export($660bfeb10a2941e4$exports, "FarcasterSignerInit", () => $660bfeb10a2941e4$export$42654a8cac183ef0);
$parcel$export($660bfeb10a2941e4$exports, "FarcasterSignerStatus", () => $660bfeb10a2941e4$export$7f204ee171a84aa2);
const $660bfeb10a2941e4$export$42654a8cac183ef0 = {
    path: "/api/v1/farcaster/signer/init",
    method: "POST"
};
const $660bfeb10a2941e4$export$7f204ee171a84aa2 = {
    path: "/api/v1/farcaster/signer/status",
    method: "POST"
};


var $49151fbe89f83d57$exports = {};

$parcel$export($49151fbe89f83d57$exports, "GuestAuthenticate", () => $49151fbe89f83d57$export$bed08221a49a43ad);
const $49151fbe89f83d57$export$bed08221a49a43ad = {
    path: "/api/v1/guest/authenticate",
    method: "POST"
};


var $0a1e817e31d20e9b$exports = {};

$parcel$export($0a1e817e31d20e9b$exports, "MfaPasskeyInit", () => $0a1e817e31d20e9b$export$5e38d17588971983);
$parcel$export($0a1e817e31d20e9b$exports, "MfaPasskeyVerify", () => $0a1e817e31d20e9b$export$52d08a59e63ca968);
$parcel$export($0a1e817e31d20e9b$exports, "MfaPasskeyEnrollment", () => $0a1e817e31d20e9b$export$d79952c9effdb95b);
const $0a1e817e31d20e9b$export$5e38d17588971983 = {
    path: "/api/v1/mfa/passkeys/init",
    method: "POST"
};
const $0a1e817e31d20e9b$export$52d08a59e63ca968 = {
    path: "/api/v1/mfa/passkeys/verify",
    method: "POST"
};
const $0a1e817e31d20e9b$export$d79952c9effdb95b = {
    path: "/api/v1/mfa/passkeys/enrollment",
    method: "POST"
};


var $c7d288da08ab8fee$exports = {};

$parcel$export($c7d288da08ab8fee$exports, "MfaPasswordlessSmsEnroll", () => $c7d288da08ab8fee$export$2ca9d9da76a9e126);
$parcel$export($c7d288da08ab8fee$exports, "MfaPasswordlessSmsVerify", () => $c7d288da08ab8fee$export$3308cba1d8516f90);
$parcel$export($c7d288da08ab8fee$exports, "MfaPasswordlessSmsInit", () => $c7d288da08ab8fee$export$cf4de95cb6da600f);
$parcel$export($c7d288da08ab8fee$exports, "MfaPasswordlessSmsUnenroll", () => $c7d288da08ab8fee$export$503f112538d6ca09);
const $c7d288da08ab8fee$export$2ca9d9da76a9e126 = {
    path: "/api/v1/mfa/passwordless_sms/enroll",
    method: "POST"
};
const $c7d288da08ab8fee$export$3308cba1d8516f90 = {
    path: "/api/v1/mfa/passwordless_sms/verify",
    method: "POST"
};
const $c7d288da08ab8fee$export$cf4de95cb6da600f = {
    path: "/api/v1/mfa/passwordless_sms/init",
    method: "POST"
};
const $c7d288da08ab8fee$export$503f112538d6ca09 = {
    path: "/api/v1/mfa/passwordless_sms/unenroll",
    method: "POST"
};


var $ef838b7d29915095$exports = {};

$parcel$export($ef838b7d29915095$exports, "MfaTotpEnroll", () => $ef838b7d29915095$export$8cde043d756d30a7);
$parcel$export($ef838b7d29915095$exports, "MfaTotpVerify", () => $ef838b7d29915095$export$68c952ebd3c622ec);
$parcel$export($ef838b7d29915095$exports, "MfaTotpInit", () => $ef838b7d29915095$export$9cfb70b9ef75b776);
$parcel$export($ef838b7d29915095$exports, "MfaTotpUnenroll", () => $ef838b7d29915095$export$2241a8a66d2e6498);
const $ef838b7d29915095$export$8cde043d756d30a7 = {
    path: "/api/v1/mfa/totp/enroll",
    method: "POST"
};
const $ef838b7d29915095$export$68c952ebd3c622ec = {
    path: "/api/v1/mfa/totp/verify",
    method: "POST"
};
const $ef838b7d29915095$export$9cfb70b9ef75b776 = {
    path: "/api/v1/mfa/totp/init",
    method: "POST"
};
const $ef838b7d29915095$export$2241a8a66d2e6498 = {
    path: "/api/v1/mfa/totp/unenroll",
    method: "POST"
};


var $2ca5a28d205a53b0$exports = {};

$parcel$export($2ca5a28d205a53b0$exports, "OAuthAuthenticate", () => $2ca5a28d205a53b0$export$866d3936787f21ca);
$parcel$export($2ca5a28d205a53b0$exports, "OAuthInit", () => $2ca5a28d205a53b0$export$7dd94108c3c957b6);
$parcel$export($2ca5a28d205a53b0$exports, "OAuthLink", () => $2ca5a28d205a53b0$export$b555c05c68965095);
$parcel$export($2ca5a28d205a53b0$exports, "OAuthUnlink", () => $2ca5a28d205a53b0$export$7246a40b726a26ea);
const $2ca5a28d205a53b0$export$866d3936787f21ca = {
    path: "/api/v1/oauth/authenticate",
    method: "POST"
};
const $2ca5a28d205a53b0$export$7dd94108c3c957b6 = {
    path: "/api/v1/oauth/init",
    method: "POST"
};
const $2ca5a28d205a53b0$export$b555c05c68965095 = {
    path: "/api/v1/oauth/link",
    method: "POST"
};
const $2ca5a28d205a53b0$export$7246a40b726a26ea = {
    path: "/api/v1/oauth/unlink",
    method: "POST"
};


var $78cfd2898280092a$exports = {};

$parcel$export($78cfd2898280092a$exports, "OAuthProviderAuthorize", () => $78cfd2898280092a$export$3251d162865f5fbf);
$parcel$export($78cfd2898280092a$exports, "OAuthProviderVerify", () => $78cfd2898280092a$export$e2c685498411d101);
const $78cfd2898280092a$export$3251d162865f5fbf = {
    path: "/oauth/authorization_code",
    method: "POST"
};
const $78cfd2898280092a$export$e2c685498411d101 = {
    path: "/oauth/verify",
    method: "POST"
};


var $3a63df4ab9924d1e$exports = {};

$parcel$export($3a63df4ab9924d1e$exports, "PasskeyLink", () => $3a63df4ab9924d1e$export$8cc9b733d1d27bf);
$parcel$export($3a63df4ab9924d1e$exports, "PasskeyAuthenticate", () => $3a63df4ab9924d1e$export$dd91b2a2913f179);
$parcel$export($3a63df4ab9924d1e$exports, "PasskeyRegister", () => $3a63df4ab9924d1e$export$6c765e6aa2cc600d);
$parcel$export($3a63df4ab9924d1e$exports, "PasskeyAuthenticateInit", () => $3a63df4ab9924d1e$export$fbd0752c8f04789a);
$parcel$export($3a63df4ab9924d1e$exports, "PasskeyRegisterInit", () => $3a63df4ab9924d1e$export$fbda2eea42eab208);
$parcel$export($3a63df4ab9924d1e$exports, "PasskeyLinkInit", () => $3a63df4ab9924d1e$export$908a107a443c8819);
$parcel$export($3a63df4ab9924d1e$exports, "PasskeyUnlink", () => $3a63df4ab9924d1e$export$73b251c34ecfbbd2);
const $3a63df4ab9924d1e$export$8cc9b733d1d27bf = {
    path: "/api/v1/passkeys/link",
    method: "POST"
};
const $3a63df4ab9924d1e$export$dd91b2a2913f179 = {
    path: "/api/v1/passkeys/authenticate",
    method: "POST"
};
const $3a63df4ab9924d1e$export$6c765e6aa2cc600d = {
    path: "/api/v1/passkeys/register",
    method: "POST"
};
const $3a63df4ab9924d1e$export$fbd0752c8f04789a = {
    path: "/api/v1/passkeys/authenticate/init",
    method: "POST"
};
const $3a63df4ab9924d1e$export$fbda2eea42eab208 = {
    path: "/api/v1/passkeys/register/init",
    method: "POST"
};
const $3a63df4ab9924d1e$export$908a107a443c8819 = {
    path: "/api/v1/passkeys/link/init",
    method: "POST"
};
const $3a63df4ab9924d1e$export$73b251c34ecfbbd2 = {
    path: "/api/v1/passkeys/unlink",
    method: "POST"
};


var $16a3a5bf7ffb2729$exports = {};

$parcel$export($16a3a5bf7ffb2729$exports, "PasswordlessAuthenticate", () => $16a3a5bf7ffb2729$export$2399ea1e38345a53);
$parcel$export($16a3a5bf7ffb2729$exports, "PasswordlessInit", () => $16a3a5bf7ffb2729$export$90dfa8041dde28f7);
$parcel$export($16a3a5bf7ffb2729$exports, "PasswordlessLink", () => $16a3a5bf7ffb2729$export$c9ba5b5d6d996387);
$parcel$export($16a3a5bf7ffb2729$exports, "PasswordlessUnlink", () => $16a3a5bf7ffb2729$export$770e866201444bcd);
$parcel$export($16a3a5bf7ffb2729$exports, "PasswordlessUpdate", () => $16a3a5bf7ffb2729$export$95d6a76319eb3229);
const $16a3a5bf7ffb2729$export$2399ea1e38345a53 = {
    path: "/api/v1/passwordless/authenticate",
    method: "POST"
};
const $16a3a5bf7ffb2729$export$90dfa8041dde28f7 = {
    path: "/api/v1/passwordless/init",
    method: "POST"
};
const $16a3a5bf7ffb2729$export$c9ba5b5d6d996387 = {
    path: "/api/v1/passwordless/link",
    method: "POST"
};
const $16a3a5bf7ffb2729$export$770e866201444bcd = {
    path: "/api/v1/passwordless/unlink",
    method: "POST"
};
const $16a3a5bf7ffb2729$export$95d6a76319eb3229 = {
    path: "/api/v1/passwordless/update",
    method: "POST"
};


var $2b6bb8c3ab899712$exports = {};

$parcel$export($2b6bb8c3ab899712$exports, "PasswordlessSmsAuthenticate", () => $2b6bb8c3ab899712$export$7e171ae579c30d39);
$parcel$export($2b6bb8c3ab899712$exports, "PasswordlessSmsInit", () => $2b6bb8c3ab899712$export$5c9a94090bb8ee8b);
$parcel$export($2b6bb8c3ab899712$exports, "PasswordlessSmsLink", () => $2b6bb8c3ab899712$export$e1b8c2813604d498);
$parcel$export($2b6bb8c3ab899712$exports, "PasswordlessSmsUnlink", () => $2b6bb8c3ab899712$export$140d5f525bd53d81);
$parcel$export($2b6bb8c3ab899712$exports, "PasswordlessSmsUpdate", () => $2b6bb8c3ab899712$export$3a4526cc549be74f);
const $2b6bb8c3ab899712$export$7e171ae579c30d39 = {
    path: "/api/v1/passwordless_sms/authenticate",
    method: "POST"
};
const $2b6bb8c3ab899712$export$5c9a94090bb8ee8b = {
    path: "/api/v1/passwordless_sms/init",
    method: "POST"
};
const $2b6bb8c3ab899712$export$e1b8c2813604d498 = {
    path: "/api/v1/passwordless_sms/link",
    method: "POST"
};
const $2b6bb8c3ab899712$export$140d5f525bd53d81 = {
    path: "/api/v1/passwordless_sms/unlink",
    method: "POST"
};
const $2b6bb8c3ab899712$export$3a4526cc549be74f = {
    path: "/api/v1/passwordless_sms/update",
    method: "POST"
};


var $b2630510667625da$exports = {};

$parcel$export($b2630510667625da$exports, "RecoveryKeyMaterial", () => $b2630510667625da$export$53205c78d6e0d37f);
$parcel$export($b2630510667625da$exports, "RecoveryOAuthInit", () => $b2630510667625da$export$f75c08c106aa5263);
$parcel$export($b2630510667625da$exports, "RecoveryOAuthAuthenticate", () => $b2630510667625da$export$c4a18348874706ae);
$parcel$export($b2630510667625da$exports, "RecoveryOAuthInitICloud", () => $b2630510667625da$export$4af466c8016ee40a);
$parcel$export($b2630510667625da$exports, "RecoveryOAuthCallbackICloudExpo", () => $b2630510667625da$export$7b1580cc69e35e8);
$parcel$export($b2630510667625da$exports, "RecoveryConfigurationICloud", () => $b2630510667625da$export$bce86382d6c75077);
const $b2630510667625da$export$53205c78d6e0d37f = {
    path: "/api/v1/embedded_wallets/:address/recovery/key_material",
    method: "POST"
};
const $b2630510667625da$export$f75c08c106aa5263 = {
    path: "/api/v1/recovery/oauth/init",
    method: "POST"
};
const $b2630510667625da$export$c4a18348874706ae = {
    path: "/api/v1/recovery/oauth/authenticate",
    method: "POST"
};
const $b2630510667625da$export$4af466c8016ee40a = {
    path: "/api/v1/recovery/oauth/init_icloud",
    method: "POST"
};
const $b2630510667625da$export$7b1580cc69e35e8 = {
    path: "/api/v1/recovery/oauth/callback_icloud/:app_id/expo_ios",
    method: "GET"
};
const $b2630510667625da$export$bce86382d6c75077 = {
    path: "/api/v1/recovery/configuration_icloud",
    method: "POST"
};


var $ee0ed6043fcfdb6b$exports = {};

$parcel$export($ee0ed6043fcfdb6b$exports, "getPathWithParams", () => $ee0ed6043fcfdb6b$export$e2939f516ef264b4);
const $ee0ed6043fcfdb6b$export$e2939f516ef264b4 = (path, params)=>{
    if (!params) return path;
    return Object.entries(params).reduce((acc, [key, value])=>{
        return acc.replace(`:${key}`, `${value}`);
    }, path);
};


var $79bab14ca2e2f50f$exports = {};

$parcel$export($79bab14ca2e2f50f$exports, "RefreshSession", () => $79bab14ca2e2f50f$export$99faf8b86d913c70);
$parcel$export($79bab14ca2e2f50f$exports, "Logout", () => $79bab14ca2e2f50f$export$cad1a703886b4e3a);
const $79bab14ca2e2f50f$export$99faf8b86d913c70 = {
    path: "/api/v1/sessions",
    method: "POST"
};
const $79bab14ca2e2f50f$export$cad1a703886b4e3a = {
    path: "/api/v1/sessions/logout",
    method: "POST"
};


var $9ee41d7932256464$exports = {};

$parcel$export($9ee41d7932256464$exports, "GetSmartWalletConfig", () => $9ee41d7932256464$export$ac60d564e06c26d5);
$parcel$export($9ee41d7932256464$exports, "PostSmartWalletConfig", () => $9ee41d7932256464$export$24ec2b09f284e0b1);
const $9ee41d7932256464$export$ac60d564e06c26d5 = {
    path: "/api/v1/apps/:app_id/smart_wallets",
    method: "GET"
};
const $9ee41d7932256464$export$24ec2b09f284e0b1 = {
    path: "/api/v1/apps/:app_id/smart_wallets",
    method: "POST"
};


var $614eb8d391676d00$exports = {};

$parcel$export($614eb8d391676d00$exports, "WalletsRevoke", () => $614eb8d391676d00$export$9babfd8a159b0c8c);
const $614eb8d391676d00$export$9babfd8a159b0c8c = {
    path: "/api/v1/wallets/revoke",
    method: "POST"
};


var $42210e9696f6a3c0$exports = {};

$parcel$export($42210e9696f6a3c0$exports, "SiweInit", () => $42210e9696f6a3c0$export$81e59ade100f8964);
$parcel$export($42210e9696f6a3c0$exports, "SiweAuthenticate", () => $42210e9696f6a3c0$export$5caf5d9f95cfdd58);
$parcel$export($42210e9696f6a3c0$exports, "SiweLink", () => $42210e9696f6a3c0$export$626623f305a79065);
$parcel$export($42210e9696f6a3c0$exports, "SiweLinkSmartWallet", () => $42210e9696f6a3c0$export$dae4aed6dc91c7bf);
$parcel$export($42210e9696f6a3c0$exports, "SiweUnlink", () => $42210e9696f6a3c0$export$cb415236257a3f80);
const $42210e9696f6a3c0$export$81e59ade100f8964 = {
    path: "/api/v1/siwe/init",
    method: "POST"
};
const $42210e9696f6a3c0$export$5caf5d9f95cfdd58 = {
    path: "/api/v1/siwe/authenticate",
    method: "POST"
};
const $42210e9696f6a3c0$export$626623f305a79065 = {
    path: "/api/v1/siwe/link",
    method: "POST"
};
const $42210e9696f6a3c0$export$dae4aed6dc91c7bf = {
    path: "/api/v1/siwe/link_smart_wallet",
    method: "POST"
};
const $42210e9696f6a3c0$export$cb415236257a3f80 = {
    path: "/api/v1/siwe/unlink",
    method: "POST"
};


var $92c6a916bc730c33$exports = {};

$parcel$export($92c6a916bc730c33$exports, "SiwsInit", () => $92c6a916bc730c33$export$dd0e464f35c701ad);
$parcel$export($92c6a916bc730c33$exports, "SiwsAuthenticate", () => $92c6a916bc730c33$export$93f5e2370a853629);
$parcel$export($92c6a916bc730c33$exports, "SiwsLink", () => $92c6a916bc730c33$export$c309d30a2a2815ee);
$parcel$export($92c6a916bc730c33$exports, "SiwsUnlink", () => $92c6a916bc730c33$export$553e646318a6c92f);
const $92c6a916bc730c33$export$dd0e464f35c701ad = {
    path: "/api/v1/siws/init",
    method: "POST"
};
const $92c6a916bc730c33$export$93f5e2370a853629 = {
    path: "/api/v1/siws/authenticate",
    method: "POST"
};
const $92c6a916bc730c33$export$c309d30a2a2815ee = {
    path: "/api/v1/siws/link",
    method: "POST"
};
const $92c6a916bc730c33$export$553e646318a6c92f = {
    path: "/api/v1/siws/unlink",
    method: "POST"
};


var $57efb675b9f4605e$exports = {};

$parcel$export($57efb675b9f4605e$exports, "AcceptTermsOnUser", () => $57efb675b9f4605e$export$cae4629dc339a1d3);
const $57efb675b9f4605e$export$cae4629dc339a1d3 = {
    path: "/api/v1/users/me/accept_terms",
    method: "POST"
};


var $b1eedf334909d160$exports = {};

$parcel$export($b1eedf334909d160$exports, "TelegramAuthenticate", () => $b1eedf334909d160$export$7429ccdbcca0d2ad);
$parcel$export($b1eedf334909d160$exports, "TelegramLink", () => $b1eedf334909d160$export$db55e97c1ee79975);
$parcel$export($b1eedf334909d160$exports, "TelegramUnlink", () => $b1eedf334909d160$export$513feadc9dae72fd);
const $b1eedf334909d160$export$7429ccdbcca0d2ad = {
    path: "/api/v1/telegram/authenticate",
    method: "POST"
};
const $b1eedf334909d160$export$db55e97c1ee79975 = {
    path: "/api/v1/telegram/link",
    method: "POST"
};
const $b1eedf334909d160$export$513feadc9dae72fd = {
    path: "/api/v1/telegram/unlink",
    method: "POST"
};


var $605b12778484ba49$exports = {};

$parcel$export($605b12778484ba49$exports, "MoonpayOnRampSign", () => $605b12778484ba49$export$a3b3bb064af22a7a);
const $605b12778484ba49$export$a3b3bb064af22a7a = {
    path: "/api/v1/plugins/moonpay_on_ramp/sign",
    method: "POST"
};


$parcel$exportWildcard($007c106f876c4b2e$exports, $9389a438679dfb17$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $3eadf33fb6d2173f$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $3c21d05a2d9eac05$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $5273a2b7956efa12$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $abe1801c1695c2e5$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $edf644e56ded1c98$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $660bfeb10a2941e4$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $49151fbe89f83d57$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $0a1e817e31d20e9b$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $c7d288da08ab8fee$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $ef838b7d29915095$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $2ca5a28d205a53b0$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $78cfd2898280092a$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $3a63df4ab9924d1e$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $16a3a5bf7ffb2729$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $2b6bb8c3ab899712$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $b2630510667625da$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $ee0ed6043fcfdb6b$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $79bab14ca2e2f50f$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $9ee41d7932256464$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $614eb8d391676d00$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $42210e9696f6a3c0$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $92c6a916bc730c33$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $57efb675b9f4605e$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $b1eedf334909d160$exports);
$parcel$exportWildcard($007c106f876c4b2e$exports, $605b12778484ba49$exports);


var $f8351206a8fc12e3$exports = {};
var $2d14ad2950d830fc$exports = {};

$parcel$export($2d14ad2950d830fc$exports, "AnalyticsEventInput", () => $2d14ad2950d830fc$export$5ac03ce02eff89f4);

const $2d14ad2950d830fc$export$5ac03ce02eff89f4 = (0, $3z62d$z).object({
    event_name: (0, $3z62d$z).string().max(255),
    client_id: (0, $3z62d$z).string().max(255).nullable(),
    payload: (0, $3z62d$z).record((0, $3z62d$z).any()).optional()
});


var $d5521858886c4cef$exports = {};

$parcel$export($d5521858886c4cef$exports, "AccountIdFromPath", () => $d5521858886c4cef$export$570fdd1008d53ff0);
$parcel$export($d5521858886c4cef$exports, "AppIdFromPath", () => $d5521858886c4cef$export$85be2ce1a760a71d);
$parcel$export($d5521858886c4cef$exports, "Pagination", () => $d5521858886c4cef$export$68f5e1453c188a82);


var $cd63f1af6df0c007$exports = {};

$parcel$export($cd63f1af6df0c007$exports, "UserId", () => $cd63f1af6df0c007$export$22a69335b09c6066);
$parcel$export($cd63f1af6df0c007$exports, "Email", () => $cd63f1af6df0c007$export$5a6b8595f311cbb0);
$parcel$export($cd63f1af6df0c007$exports, "PasswordlessCode", () => $cd63f1af6df0c007$export$6051224a4b788b5f);
$parcel$export($cd63f1af6df0c007$exports, "WalletAddress", () => $cd63f1af6df0c007$export$e1ae011f7e31ddec);
$parcel$export($cd63f1af6df0c007$exports, "normalizeEthereumAddress", () => $cd63f1af6df0c007$export$52d99941c9f2e1af);
$parcel$export($cd63f1af6df0c007$exports, "SolanaWalletAddress", () => $cd63f1af6df0c007$export$a6c60903ce1c32fc);
$parcel$export($cd63f1af6df0c007$exports, "PhoneNumber", () => $cd63f1af6df0c007$export$3d623a7758cab61e);
$parcel$export($cd63f1af6df0c007$exports, "normalizePhoneNumber", () => $cd63f1af6df0c007$export$eeb94ade8d38f116);
$parcel$export($cd63f1af6df0c007$exports, "isValidAddress", () => $cd63f1af6df0c007$export$1987372119294ebb);
$parcel$export($cd63f1af6df0c007$exports, "AuthenticateMode", () => $cd63f1af6df0c007$export$1d53282181ae94da);




const $cd63f1af6df0c007$export$22a69335b09c6066 = (0, $3z62d$z).string({
    required_error: "Privy DID must be included",
    invalid_type_error: "Privy DID is not a valid string"
}).min(1).transform((id)=>id.replace("did:privy:", ""));
const $cd63f1af6df0c007$export$5a6b8595f311cbb0 = (0, $3z62d$z).string({
    required_error: "Email address must be provided",
    invalid_type_error: "Email address must be a valid string"
}).email("Invalid email address").transform((email)=>email.toLowerCase());
const $cd63f1af6df0c007$export$6051224a4b788b5f = (0, $3z62d$z).string({
    required_error: "Verification code must be provided",
    invalid_type_error: "Invalid verification code"
}).length(6, "Verification code must have 6 digits.");
const $cd63f1af6df0c007$export$e1ae011f7e31ddec = (0, $3z62d$z).string({
    required_error: "Ethereum address must be provided",
    invalid_type_error: "Invalid Ethereum address"
}).transform((address, ctx)=>{
    // After verifying that the address is a string, we attempt to
    // checksum it per EIP-55.
    const normalizedAddress = $cd63f1af6df0c007$export$52d99941c9f2e1af(address);
    // If our normalization method returns falsy, the address is not
    // a valid Ethereum address, and we mark the input as invalid.
    if (!normalizedAddress) {
        ctx.addIssue({
            code: (0, $3z62d$z).ZodIssueCode.custom,
            message: "Invalid Ethereum address"
        });
        return (0, $3z62d$z).NEVER;
    }
    // Otherwise, we return the normalized (checksummed) address.
    return normalizedAddress;
});
const $cd63f1af6df0c007$export$a6c60903ce1c32fc = (0, $3z62d$z).string({
    required_error: "Solana address must be provided",
    invalid_type_error: "Invalid Solana address"
}).trim().transform((address, ctx)=>{
    try {
        // Try to decode. If it fails the address is not a valid base58 string.
        (0, $3z62d$bs58).decode(address);
    } catch (error) {
        ctx.addIssue({
            code: (0, $3z62d$z).ZodIssueCode.custom,
            message: "Invalid Solana address"
        });
        return (0, $3z62d$z).NEVER;
    }
    return address;
});
const $cd63f1af6df0c007$export$3d623a7758cab61e = (0, $3z62d$z).string({
    required_error: "Phone number must be included",
    invalid_type_error: "Phone number is not a valid string"
}).refine((val)=>{
    try {
        return $cd63f1af6df0c007$export$eeb94ade8d38f116(val) !== undefined;
    } catch (e) {
        return false;
    }
}, {
    message: "Phone number is not valid"
}).transform((val)=>$cd63f1af6df0c007$export$eeb94ade8d38f116(val) || ""); // This operation is safe because we previously refine the schema and break if it's undefined
function $cd63f1af6df0c007$export$eeb94ade8d38f116(inputPhoneNumber) {
    const phoneNumber = (0, $3z62d$parsePhoneNumber)(inputPhoneNumber, "US");
    // https://www.npmjs.com/package/libphonenumber-js#using-phone-number-validation-feature
    if (phoneNumber?.isPossible()) return phoneNumber.formatInternational();
}
function $cd63f1af6df0c007$export$1987372119294ebb(address) {
    return !!$cd63f1af6df0c007$export$52d99941c9f2e1af(address);
}
function $cd63f1af6df0c007$export$52d99941c9f2e1af(address) {
    if (typeof address !== "string") return;
    try {
        return (0, $3z62d$ethers).utils.getAddress(address.trim());
    } catch (e) {}
}
const $cd63f1af6df0c007$export$1d53282181ae94da = (0, $3z62d$z).object({
    mode: (0, $3z62d$z).enum([
        "no-signup",
        "login-or-sign-up"
    ]).optional()
});


const $d5521858886c4cef$export$570fdd1008d53ff0 = (0, $3z62d$z).object({
    account_id: (0, $3z62d$z).string({
        required_error: "Account ID must be provided",
        invalid_type_error: "Account ID is not a valid string"
    }).min(1)
});
const $d5521858886c4cef$export$85be2ce1a760a71d = (0, $3z62d$z).object({
    app_id: (0, $3z62d$z).string({
        required_error: "App ID must be provided",
        invalid_type_error: "App ID is not a valid string"
    }).min(1)
})/* eslint-disable-next-line @typescript-eslint/naming-convention */ .transform(({ app_id: app_id })=>({
        app_id: app_id,
        appId: app_id
    })).catch(({ error: error })=>{
    throw new (0, $3z62d$InvalidInputError)(error.message, (0, $3z62d$PrivyErrorCode).MISSING_OR_INVALID_PRIVY_APP_ID);
});
const $d5521858886c4cef$export$68f5e1453c188a82 = (0, $3z62d$z).object({
    cursor: (0, $cd63f1af6df0c007$export$22a69335b09c6066).optional(),
    limit: (0, $3z62d$z).coerce.number().max(100, {
        message: "Query limit can be at maximum 100 records."
    }).optional()
});


var $164ad09aa405585d$exports = {};

$parcel$export($164ad09aa405585d$exports, "AppResponseSchema", () => $164ad09aa405585d$export$dc5469a0fff5641e);

var $517ac5899dfbdcfa$exports = {};

$parcel$export($517ac5899dfbdcfa$exports, "EmbeddedWalletConfigSchema", () => $517ac5899dfbdcfa$export$95372738a64f3b79);
$parcel$export($517ac5899dfbdcfa$exports, "TelegramAuthConfigSchema", () => $517ac5899dfbdcfa$export$367c50094464beeb);
$parcel$export($517ac5899dfbdcfa$exports, "FundingMethodEnum", () => $517ac5899dfbdcfa$export$fe80bb11c98cc392);
$parcel$export($517ac5899dfbdcfa$exports, "FundingMethodArraySchema", () => $517ac5899dfbdcfa$export$f5d20e939383f95);
$parcel$export($517ac5899dfbdcfa$exports, "FundingConfigResponseSchema", () => $517ac5899dfbdcfa$export$9ca1d1c7ecf8a0a);

var $2764b54e10251e85$exports = {};

$parcel$export($2764b54e10251e85$exports, "Currency", () => $2764b54e10251e85$export$b733e092f9f44b2c);

const $2764b54e10251e85$var$SUPPORTED_CHAIN_TYPES = [
    "evm",
    "solana"
];
const $2764b54e10251e85$export$b733e092f9f44b2c = (0, $3z62d$zod).object({
    /**
   * CAIP-2 formatted chain ID
   * Resource: https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-2.md
   */ chain: (0, $3z62d$zod).string(),
    // Defaulting to `native` token for now, so not specifying anything beyond chain
    // Currency asset
    asset: (0, $3z62d$zod).enum([
        "native-currency",
        "USDC"
    ]).optional()
});


const $517ac5899dfbdcfa$export$95372738a64f3b79 = (0, $3z62d$zod).object({
    /**
   * Whether to create embedded wallets on login. Note that this still requires distinct API
   * calls, rather than the server creating one on the /authenticate call.
   *
   * Default: 'users-without-wallets'
   *
   * Overridable from client.
   */ create_on_login: (0, $3z62d$zod).enum([
        "users-without-wallets",
        "all-users",
        "off"
    ]),
    /**
   * Will be one or more of `user-passcode` | `google-drive` | `icloud`
   * - all enabled methods other than `password` require prior configuration
   */ user_owned_recovery_options: (0, $3z62d$zod).array((0, $3z62d$zod).enum([
        "user-passcode",
        "google-drive",
        "icloud"
    ])),
    /**
   * If true, this will prompt the user use one of the enabled recovery methods
   * to secure the recovery share of their embedded wallet.
   *
   * Otherwise (the default), Privy will secure the recovery share, and the embedded wallet
   * will be created without showing any UIs to the user.
   *
   * Overridable from client.
   */ require_user_owned_recovery_on_create: (0, $3z62d$zod).boolean().optional(),
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
   */ require_user_password_on_create: (0, $3z62d$zod).boolean().optional()
});
const $517ac5899dfbdcfa$export$367c50094464beeb = (0, $3z62d$zod).object({
    bot_id: (0, $3z62d$zod).string(),
    bot_name: (0, $3z62d$zod).string(),
    link_enabled: (0, $3z62d$zod).boolean(),
    seamless_auth_enabled: (0, $3z62d$zod).boolean()
});
const $517ac5899dfbdcfa$export$fe80bb11c98cc392 = (0, $3z62d$zod).enum([
    "moonpay",
    "coinbase-onramp",
    "external"
]);
const $517ac5899dfbdcfa$export$f5d20e939383f95 = (0, $3z62d$zod).array($517ac5899dfbdcfa$export$fe80bb11c98cc392);
const $517ac5899dfbdcfa$export$9ca1d1c7ecf8a0a = (0, $3z62d$zod).object({
    default_recommended_currency: (0, $2764b54e10251e85$export$b733e092f9f44b2c),
    default_recommended_amount: (0, $3z62d$zod).string(),
    methods: $517ac5899dfbdcfa$export$f5d20e939383f95,
    options: (0, $3z62d$zod).array((0, $3z62d$zod).object({
        method: (0, $3z62d$zod).string(),
        provider: (0, $3z62d$zod).string()
    })),
    prompt_funding_on_wallet_creation: (0, $3z62d$zod).boolean(),
    cross_chain_bridging_enabled: (0, $3z62d$zod).boolean()
});


const $164ad09aa405585d$export$dc5469a0fff5641e = (0, $3z62d$z).object({
    id: (0, $3z62d$z).string(),
    name: (0, $3z62d$z).string(),
    logo_url: (0, $3z62d$z).string().nullable(),
    icon_url: (0, $3z62d$z).string().nullable(),
    terms_and_conditions_url: (0, $3z62d$z).string().nullable(),
    privacy_policy_url: (0, $3z62d$z).string().nullable(),
    require_users_accept_terms: (0, $3z62d$z).boolean().nullable(),
    theme: (0, $3z62d$z).string(),
    accent_color: (0, $3z62d$z).string().nullable(),
    show_wallet_login_first: (0, $3z62d$z).boolean(),
    allowed_domains: (0, $3z62d$z).array((0, $3z62d$z).string()),
    allowed_native_app_ids: (0, $3z62d$z).array((0, $3z62d$z).string()),
    allowed_native_app_url_schemes: (0, $3z62d$z).array((0, $3z62d$z).string()),
    wallet_auth: (0, $3z62d$z).boolean(),
    email_auth: (0, $3z62d$z).boolean(),
    sms_auth: (0, $3z62d$z).boolean(),
    google_oauth: (0, $3z62d$z).boolean(),
    twitter_oauth: (0, $3z62d$z).boolean(),
    discord_oauth: (0, $3z62d$z).boolean(),
    github_oauth: (0, $3z62d$z).boolean(),
    spotify_oauth: (0, $3z62d$z).boolean(),
    instagram_oauth: (0, $3z62d$z).boolean(),
    tiktok_oauth: (0, $3z62d$z).boolean(),
    linkedin_oauth: (0, $3z62d$z).boolean(),
    apple_oauth: (0, $3z62d$z).boolean(),
    farcaster_auth: (0, $3z62d$z).boolean(),
    passkey_auth: (0, $3z62d$z).boolean(),
    passkeys_for_signup_enabled: (0, $3z62d$z).boolean(),
    telegram_auth: (0, $3z62d$z).boolean(),
    guest_auth: (0, $3z62d$z).boolean(),
    solana_wallet_auth: (0, $3z62d$z).boolean(),
    disable_plus_emails: (0, $3z62d$z).boolean(),
    // TODO: allowlist_enabled should be moved to AdminOnlyAppResponseSchema but is technically in older
    // versions of the server-auth getAppSettings response
    allowlist_enabled: (0, $3z62d$z).boolean(),
    allowlist_config: (0, $3z62d$z).object({
        error_title: (0, $3z62d$z).string().nullable(),
        error_detail: (0, $3z62d$z).string().nullable(),
        cta_text: (0, $3z62d$z).string().nullable(),
        cta_link: (0, $3z62d$z).string().nullable()
    }),
    wallet_connect_cloud_project_id: (0, $3z62d$z).string().nullable(),
    custom_api_url: (0, $3z62d$z).string().nullable(),
    embedded_wallet_config: (0, $517ac5899dfbdcfa$export$95372738a64f3b79),
    enforce_wallet_uis: (0, $3z62d$z).boolean(),
    legacy_wallet_ui_config: (0, $3z62d$z).boolean(),
    fiat_on_ramp_enabled: (0, $3z62d$z).boolean(),
    captcha_enabled: (0, $3z62d$z).boolean(),
    twitter_oauth_on_mobile_enabled: (0, $3z62d$z).boolean(),
    mfa_methods: (0, $3z62d$z).array((0, $3z62d$z).enum([
        "sms",
        "totp",
        "passkey"
    ])),
    captcha_site_key: (0, $3z62d$z).string().optional(),
    verification_key: (0, $3z62d$z).string(),
    telegram_auth_config: (0, $517ac5899dfbdcfa$export$367c50094464beeb).optional(),
    funding_config: (0, $517ac5899dfbdcfa$export$9ca1d1c7ecf8a0a).optional(),
    max_linked_wallets_per_user: (0, $3z62d$z).number().nullable(),
    farcaster_link_wallets_enabled: (0, $3z62d$z).boolean()
});



var $81a8385d5b29682b$exports = {};

$parcel$export($81a8385d5b29682b$exports, "CoinbaseOnRampInitInput", () => $81a8385d5b29682b$export$f01d538aa036a41a);
$parcel$export($81a8385d5b29682b$exports, "CoinbaseOnRampInitResponse", () => $81a8385d5b29682b$export$4731ee7c27e49d6e);
$parcel$export($81a8385d5b29682b$exports, "CoinbaseOnRampStatusResponse", () => $81a8385d5b29682b$export$146ab3c80d47ce12);


const $81a8385d5b29682b$var$Blockchain = (0, $3z62d$z).enum([
    "ethereum",
    "bitcoin",
    "base",
    "avacchain",
    "optimism",
    "solana",
    "polygon",
    "arbitrum",
    "stellar"
]);
// Assets must be capitalized to work with Coinbase Onramp. We preserve 'eth' here for backwards
// compatibility with older SDKs when Coinbase Onramp did not require capitalization
const $81a8385d5b29682b$var$EthereumAssets = (0, $3z62d$z).enum([
    "eth",
    "ETH",
    "USDC"
]).transform((asset)=>asset.toUpperCase());
const $81a8385d5b29682b$var$SolanaAssets = (0, $3z62d$z).enum([
    "SOL",
    "USDC"
]).transform((asset)=>asset.toUpperCase());
const $81a8385d5b29682b$var$CoinbaseOnRampInitEthereumInput = (0, $3z62d$z).object({
    addresses: (0, $3z62d$z).array((0, $3z62d$z).object({
        address: (0, $cd63f1af6df0c007$export$e1ae011f7e31ddec),
        blockchains: (0, $3z62d$z).array($81a8385d5b29682b$var$Blockchain)
    })).max(1).min(1),
    assets: (0, $3z62d$z).array($81a8385d5b29682b$var$EthereumAssets).optional()
});
const $81a8385d5b29682b$var$CoinbaseOnRampInitSolanaInput = (0, $3z62d$z).object({
    addresses: (0, $3z62d$z).array((0, $3z62d$z).object({
        address: (0, $cd63f1af6df0c007$export$a6c60903ce1c32fc),
        blockchains: (0, $3z62d$z).array($81a8385d5b29682b$var$Blockchain)
    })).max(1).min(1),
    assets: (0, $3z62d$z).array($81a8385d5b29682b$var$SolanaAssets).optional()
});
const $81a8385d5b29682b$export$f01d538aa036a41a = (0, $3z62d$z).union([
    $81a8385d5b29682b$var$CoinbaseOnRampInitEthereumInput,
    $81a8385d5b29682b$var$CoinbaseOnRampInitSolanaInput
]);
const $81a8385d5b29682b$export$4731ee7c27e49d6e = (0, $3z62d$z).object({
    app_id: (0, $3z62d$z).string(),
    session_token: (0, $3z62d$z).string(),
    channel_id: (0, $3z62d$z).string(),
    partner_user_id: (0, $3z62d$z).string()
});
const $81a8385d5b29682b$export$146ab3c80d47ce12 = (0, $3z62d$z).object({
    status: (0, $3z62d$z).enum([
        "pending",
        "success",
        "failure"
    ])
});



var $116ced06f6ab4132$exports = {};

$parcel$export($116ced06f6ab4132$exports, "CrossAppConnectionsResponse", () => $116ced06f6ab4132$export$39ad28598f91ae95);

const $116ced06f6ab4132$export$39ad28598f91ae95 = (0, $3z62d$z).object({
    connections: (0, $3z62d$z).array((0, $3z62d$z).object({
        provider_app_id: (0, $3z62d$z).string(),
        provider_app_name: (0, $3z62d$z).string(),
        provider_app_icon_url: (0, $3z62d$z).string().url().nullable(),
        provider_app_custom_api_url: (0, $3z62d$z).string().url().nullable(),
        read_only: (0, $3z62d$z).boolean()
    }))
});



var $04de102d3f540aa5$exports = {};

$parcel$export($04de102d3f540aa5$exports, "AuthenticateJwtInput", () => $04de102d3f540aa5$export$ad1e2c0abc3d279d);

const $04de102d3f540aa5$export$ad1e2c0abc3d279d = (0, $3z62d$zod).object({
    /** A JWT from the custom authentication provider */ token: (0, $3z62d$zod).string().optional()
});


var $0a2bfa4af4eefcd7$exports = {};

$parcel$export($0a2bfa4af4eefcd7$exports, "DelegatedActionsConsentInput", () => $0a2bfa4af4eefcd7$export$5b3e61549b992e7e);
$parcel$export($0a2bfa4af4eefcd7$exports, "WalletApiRevokeResponse", () => $0a2bfa4af4eefcd7$export$60ba52d20922d865);

const $0a2bfa4af4eefcd7$export$5b3e61549b992e7e = (0, $3z62d$z).object({
    encrypted_tee_share: (0, $3z62d$z).string(),
    app_share: (0, $3z62d$z).string(),
    // array of specific wallets the user has delegated access to
    delegated_addresses: (0, $3z62d$z).array((0, $3z62d$z).object({
        chain_type: (0, $3z62d$z).union([
            (0, $3z62d$z).literal("solana"),
            (0, $3z62d$z).literal("ethereum")
        ]),
        address: (0, $3z62d$z).string(),
        wallet_index: (0, $3z62d$z).number().default(0)
    }))
});
const $0a2bfa4af4eefcd7$export$60ba52d20922d865 = (0, $3z62d$z).object({
    /** Success message */ message: (0, $3z62d$z).string()
});


var $b50f62513fa1b739$exports = {};

$parcel$export($b50f62513fa1b739$exports, "VerifyEmailInput", () => $b50f62513fa1b739$export$ca08e252312baf4);
$parcel$export($b50f62513fa1b739$exports, "AuthenticateEmailInput", () => $b50f62513fa1b739$export$161958b06841b78e);
$parcel$export($b50f62513fa1b739$exports, "InitEmailInput", () => $b50f62513fa1b739$export$ef1330eae1875774);
$parcel$export($b50f62513fa1b739$exports, "UnlinkEmailInput", () => $b50f62513fa1b739$export$b0a53354e7257ebb);
$parcel$export($b50f62513fa1b739$exports, "UpdateEmailInput", () => $b50f62513fa1b739$export$9ad98d5ba2865624);
$parcel$export($b50f62513fa1b739$exports, "TransferEmailInput", () => $b50f62513fa1b739$export$950dcc3b67d595fb);


const $9120aa9051938dbe$export$820fe5dd3e07cd33 = (0, $3z62d$z).object({
    nonce: (0, $3z62d$z).string()
});



const $b50f62513fa1b739$export$ca08e252312baf4 = (0, $3z62d$z).object({
    code: (0, $cd63f1af6df0c007$export$6051224a4b788b5f),
    email: (0, $cd63f1af6df0c007$export$5a6b8595f311cbb0)
});
const $b50f62513fa1b739$export$161958b06841b78e = $b50f62513fa1b739$export$ca08e252312baf4.merge((0, $cd63f1af6df0c007$export$1d53282181ae94da));
const $b50f62513fa1b739$export$ef1330eae1875774 = (0, $3z62d$z).object({
    email: (0, $cd63f1af6df0c007$export$5a6b8595f311cbb0),
    token: (0, $3z62d$z).string().optional()
});
const $b50f62513fa1b739$export$b0a53354e7257ebb = (0, $3z62d$z).object({
    address: (0, $cd63f1af6df0c007$export$5a6b8595f311cbb0)
});
const $b50f62513fa1b739$export$9ad98d5ba2865624 = (0, $3z62d$z).object({
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ oldAddress: (0, $cd63f1af6df0c007$export$5a6b8595f311cbb0),
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ newAddress: (0, $cd63f1af6df0c007$export$5a6b8595f311cbb0),
    code: (0, $cd63f1af6df0c007$export$6051224a4b788b5f)
});
const $b50f62513fa1b739$export$950dcc3b67d595fb = (0, $9120aa9051938dbe$export$820fe5dd3e07cd33).extend({
    email: (0, $cd63f1af6df0c007$export$5a6b8595f311cbb0)
});


var $3d02fb74c61c9f4e$exports = {};

$parcel$export($3d02fb74c61c9f4e$exports, "JsonWebKey", () => $3d02fb74c61c9f4e$export$d3aaee921473d84f);
$parcel$export($3d02fb74c61c9f4e$exports, "JsonWebKeySet", () => $3d02fb74c61c9f4e$export$c8fd35505bb1704a);

const $3d02fb74c61c9f4e$export$d3aaee921473d84f = (0, $3z62d$z).object({
    kty: (0, $3z62d$z).string(),
    use: (0, $3z62d$z).enum([
        "sig",
        "enc"
    ]).optional(),
    key_ops: (0, $3z62d$z).array((0, $3z62d$z).enum([
        "sign",
        "verify",
        "encrypt",
        "decrypt",
        "wrapKey",
        "unwrapKey",
        "deriveKey",
        "deriveBits"
    ])).optional(),
    alg: (0, $3z62d$z).enum([
        "RS256",
        "ES256"
    ]),
    kid: (0, $3z62d$z).string().optional(),
    x5u: (0, $3z62d$z).string().optional(),
    x5c: (0, $3z62d$z).array((0, $3z62d$z).string()).optional(),
    x5t: (0, $3z62d$z).string().optional(),
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ "x5t#S256": (0, $3z62d$z).string().optional(),
    n: (0, $3z62d$z).string().optional(),
    e: (0, $3z62d$z).string().optional(),
    d: (0, $3z62d$z).string().optional()
});
const $3d02fb74c61c9f4e$export$c8fd35505bb1704a = (0, $3z62d$z).object({
    keys: (0, $3z62d$z).array($3d02fb74c61c9f4e$export$d3aaee921473d84f)
});


var $460866cad3e1bfe4$exports = {};

$parcel$export($460866cad3e1bfe4$exports, "FarcasterConnectInitResponse", () => $460866cad3e1bfe4$export$6ddd112193bb4f42);
$parcel$export($460866cad3e1bfe4$exports, "FarcasterConnectStatusCompletedResponse", () => $460866cad3e1bfe4$export$10e572b3d0f4fe4f);
$parcel$export($460866cad3e1bfe4$exports, "FarcasterConnectStatusPendingResponse", () => $460866cad3e1bfe4$export$430853814f05cdc4);
$parcel$export($460866cad3e1bfe4$exports, "FarcasterAuthenticateInput", () => $460866cad3e1bfe4$export$2c59d6b32b518c6e);
$parcel$export($460866cad3e1bfe4$exports, "FarcasterLinkInput", () => $460866cad3e1bfe4$export$40d6546edc9ccfd3);
$parcel$export($460866cad3e1bfe4$exports, "FarcasterInitInput", () => $460866cad3e1bfe4$export$8dd30088cf36d3f5);
$parcel$export($460866cad3e1bfe4$exports, "FarcasterUnlinkInput", () => $460866cad3e1bfe4$export$325ad26071643d09);
$parcel$export($460866cad3e1bfe4$exports, "TransferFarcasterInput", () => $460866cad3e1bfe4$export$c3501b02c91b7cf6);
$parcel$export($460866cad3e1bfe4$exports, "FarcasterV2InitInput", () => $460866cad3e1bfe4$export$23aefcbca0cf697f);
$parcel$export($460866cad3e1bfe4$exports, "FarcasterV2InitResponse", () => $460866cad3e1bfe4$export$adb9e233aa20093);
$parcel$export($460866cad3e1bfe4$exports, "FarcasterV2AuthenticateInput", () => $460866cad3e1bfe4$export$d960cd5dfc1ec120);



const $460866cad3e1bfe4$export$6ddd112193bb4f42 = (0, $3z62d$z).object({
    channel_token: (0, $3z62d$z).string(),
    connect_uri: (0, $3z62d$z).string()
});
const $460866cad3e1bfe4$export$10e572b3d0f4fe4f = (0, $3z62d$z).object({
    state: (0, $3z62d$z).literal("completed"),
    nonce: (0, $3z62d$z).string(),
    message: (0, $3z62d$z).string(),
    signature: (0, $3z62d$z).string(),
    fid: (0, $3z62d$z).number(),
    username: (0, $3z62d$z).string(),
    display_name: (0, $3z62d$z).string(),
    bio: (0, $3z62d$z).string(),
    pfp_url: (0, $3z62d$z).string()
});
const $460866cad3e1bfe4$export$430853814f05cdc4 = (0, $3z62d$z).object({
    state: (0, $3z62d$z).literal("pending"),
    nonce: (0, $3z62d$z).string()
});
const $460866cad3e1bfe4$export$2c59d6b32b518c6e = (0, $3z62d$z).object({
    channel_token: (0, $3z62d$z).string(),
    message: (0, $3z62d$z).string(),
    signature: (0, $3z62d$z).string(),
    fid: (0, $3z62d$z).number()
}).merge((0, $cd63f1af6df0c007$export$1d53282181ae94da));
const $460866cad3e1bfe4$export$40d6546edc9ccfd3 = (0, $3z62d$z).object({
    channel_token: (0, $3z62d$z).string(),
    message: (0, $3z62d$z).string(),
    signature: (0, $3z62d$z).string(),
    fid: (0, $3z62d$z).number()
});
const $460866cad3e1bfe4$export$8dd30088cf36d3f5 = (0, $3z62d$z).object({
    token: (0, $3z62d$z).string().optional(),
    redirect_url: (0, $3z62d$z).string().url().optional(),
    relying_party: (0, $3z62d$z).string().optional()
});
const $460866cad3e1bfe4$export$325ad26071643d09 = (0, $3z62d$z).object({
    fid: (0, $3z62d$z).number()
});
const $460866cad3e1bfe4$export$c3501b02c91b7cf6 = (0, $9120aa9051938dbe$export$820fe5dd3e07cd33).extend({
    farcaster_id: (0, $3z62d$z).string(),
    farcaster_embedded_address: (0, $3z62d$z).string()
});
const $460866cad3e1bfe4$export$23aefcbca0cf697f = (0, $3z62d$z).object({});
const $460866cad3e1bfe4$export$adb9e233aa20093 = (0, $3z62d$z).object({
    nonce: (0, $3z62d$z).string(),
    expires_at: (0, $3z62d$z).string()
});
const $460866cad3e1bfe4$export$d960cd5dfc1ec120 = (0, $3z62d$z).object({
    fid: (0, $3z62d$z).number(),
    message: (0, $3z62d$z).string(),
    signature: (0, $3z62d$z).string()
}).merge((0, $cd63f1af6df0c007$export$1d53282181ae94da));


var $76c1f4ed95029183$exports = {};

$parcel$export($76c1f4ed95029183$exports, "FarcasterSignerInitInput", () => $76c1f4ed95029183$export$809802d572486db);
$parcel$export($76c1f4ed95029183$exports, "FarcasterSignerInitResponse", () => $76c1f4ed95029183$export$327461233dec5bf6);
$parcel$export($76c1f4ed95029183$exports, "FarcasterSignerStatusResponse", () => $76c1f4ed95029183$export$2a58492abd647af5);

const $76c1f4ed95029183$export$809802d572486db = (0, $3z62d$z).object({
    // TODO: Down the line, we should support specifying developer's own app FID
    // request_fid: z.bigint().optional(),
    /** Must be an ed25519 key, NOT secp256k1 (ethereum native curve) */ ed25519_public_key: (0, $3z62d$z).string().refine((key)=>key.startsWith("0x") && key.length === 66),
    /**
   * The deadline for a signer request to succeed. After the deadline, the request will no longer
   * succeed. Defaults to 1 hour.
   */ deadline: (0, $3z62d$z).bigint().optional().default(()=>{
        const now = Math.floor(Date.now() / 1000);
        const oneHour = 3600;
        return BigInt(now + oneHour);
    })
});
const $76c1f4ed95029183$export$327461233dec5bf6 = (0, $3z62d$z).discriminatedUnion("status", [
    (0, $3z62d$z).object({
        /** The public key reflected back from the API
     * ie 0x2087e48968ca16a8954d0da041de84b66392b2821c2af42bc28aa079bcbe1dfe
     */ public_key: (0, $3z62d$z).string(),
        status: (0, $3z62d$z).literal("pending_approval"),
        signer_approval_url: (0, $3z62d$z).string()
    }),
    (0, $3z62d$z).object({
        /** The public key reflected back from the API
     * ie 0x2087e48968ca16a8954d0da041de84b66392b2821c2af42bc28aa079bcbe1dfe
     */ public_key: (0, $3z62d$z).string(),
        status: (0, $3z62d$z).literal("approved"),
        /** The FID of the user who approved the signer */ fid: (0, $3z62d$z).bigint()
    }),
    (0, $3z62d$z).object({
        /** The public key reflected back from the API
     * ie 0x2087e48968ca16a8954d0da041de84b66392b2821c2af42bc28aa079bcbe1dfe
     */ public_key: (0, $3z62d$z).string(),
        status: (0, $3z62d$z).literal("revoked"),
        /** The FID of the user who approved the signer */ fid: (0, $3z62d$z).bigint()
    })
]);
const $76c1f4ed95029183$export$2a58492abd647af5 = (0, $3z62d$z).discriminatedUnion("status", [
    (0, $3z62d$z).object({
        /** The public key reflected back from the API
     * ie 0x2087e48968ca16a8954d0da041de84b66392b2821c2af42bc28aa079bcbe1dfe
     */ public_key: (0, $3z62d$z).string(),
        status: (0, $3z62d$z).literal("pending_approval")
    }),
    (0, $3z62d$z).object({
        /** The public key reflected back from the API
     * ie 0x2087e48968ca16a8954d0da041de84b66392b2821c2af42bc28aa079bcbe1dfe
     */ public_key: (0, $3z62d$z).string(),
        status: (0, $3z62d$z).literal("approved"),
        /** The FID of the user who approved the signer */ fid: (0, $3z62d$z).bigint()
    }),
    (0, $3z62d$z).object({
        /** The public key reflected back from the API
     * ie 0x2087e48968ca16a8954d0da041de84b66392b2821c2af42bc28aa079bcbe1dfe
     */ public_key: (0, $3z62d$z).string(),
        status: (0, $3z62d$z).literal("revoked"),
        /** The FID of the user who approved the signer */ fid: (0, $3z62d$z).bigint()
    })
]);


var $292c7e19cacc7f55$exports = {};

$parcel$export($292c7e19cacc7f55$exports, "AuthenticateGuestInput", () => $292c7e19cacc7f55$export$494be569a247ec9a);

const $292c7e19cacc7f55$export$494be569a247ec9a = (0, $3z62d$z).object({
    /**
     * Locally-persisted guest secret.
     * This credential should have as much entropy as embedded wallet entropy.
     */ guest_credential: (0, $3z62d$z).string().length(43)
}).strict();


var $619c9ebe0c9955fa$exports = {};

$parcel$export($619c9ebe0c9955fa$exports, "EmailIdTokenEntry", () => $619c9ebe0c9955fa$export$783ee7c583b70bea);
$parcel$export($619c9ebe0c9955fa$exports, "PhoneIdTokenEntry", () => $619c9ebe0c9955fa$export$5050d0079ef11bc6);
$parcel$export($619c9ebe0c9955fa$exports, "WalletIdTokenEntry", () => $619c9ebe0c9955fa$export$fd3f2073209314f0);
$parcel$export($619c9ebe0c9955fa$exports, "FarcasterIdTokenEntry", () => $619c9ebe0c9955fa$export$7d91b89a98a32206);
$parcel$export($619c9ebe0c9955fa$exports, "PasskeyIdTokenEntry", () => $619c9ebe0c9955fa$export$3da0109396521ad1);
$parcel$export($619c9ebe0c9955fa$exports, "TelegramIdTokenEntry", () => $619c9ebe0c9955fa$export$883001ac4b913adc);
$parcel$export($619c9ebe0c9955fa$exports, "GoogleOauthIdTokenEntry", () => $619c9ebe0c9955fa$export$10bcfd05b1db0bfb);
$parcel$export($619c9ebe0c9955fa$exports, "TwitterOauthIdTokenEntry", () => $619c9ebe0c9955fa$export$5cf36acae8eed78);
$parcel$export($619c9ebe0c9955fa$exports, "DiscordOauthIdTokenEntry", () => $619c9ebe0c9955fa$export$18e770e71ddcac8b);
$parcel$export($619c9ebe0c9955fa$exports, "GithubOauthIdTokenEntry", () => $619c9ebe0c9955fa$export$2fd8fb76725390c8);
$parcel$export($619c9ebe0c9955fa$exports, "LinkedInOauthIdTokenEntry", () => $619c9ebe0c9955fa$export$7325b1b9ff5b138f);
$parcel$export($619c9ebe0c9955fa$exports, "SpotifyOauthIdTokenEntry", () => $619c9ebe0c9955fa$export$5991ad07a5ac6061);
$parcel$export($619c9ebe0c9955fa$exports, "InstagramOauthIdTokenEntry", () => $619c9ebe0c9955fa$export$d50f791175bcd25a);
$parcel$export($619c9ebe0c9955fa$exports, "TiktokOauthIdTokenEntry", () => $619c9ebe0c9955fa$export$ad548be3bcd74188);
$parcel$export($619c9ebe0c9955fa$exports, "AppleOauthIdTokenEntry", () => $619c9ebe0c9955fa$export$b8a150e8882d7617);
$parcel$export($619c9ebe0c9955fa$exports, "CustomJwtIdTokenEntry", () => $619c9ebe0c9955fa$export$4a1709b5a6406ed8);
$parcel$export($619c9ebe0c9955fa$exports, "CrossAppIdTokenEntry", () => $619c9ebe0c9955fa$export$23abd82a93e245c8);
$parcel$export($619c9ebe0c9955fa$exports, "SmartWalletIdTokenEntry", () => $619c9ebe0c9955fa$export$18ff60c21403359);
// This file contains zod schemas for the linked account entries that appear with the `user` claim of
// Privy's identity token. These are a subset of the full linked account object that only contains
// critical data about the account (e.g. type and address for email). When developers request more fields
// about an account to be returned in the identity token, we can add them to the schemas here.

var $d8cf89bca885903a$exports = {};

$parcel$export($d8cf89bca885903a$exports, "EmailAccount", () => $d8cf89bca885903a$export$b291b2a8281f162e);
$parcel$export($d8cf89bca885903a$exports, "PhoneAccount", () => $d8cf89bca885903a$export$e461068a75eb0fb3);
$parcel$export($d8cf89bca885903a$exports, "BaseWalletAccount", () => $d8cf89bca885903a$export$16168ca1ad2afd69);
$parcel$export($d8cf89bca885903a$exports, "EthereumAccount", () => $d8cf89bca885903a$export$e72ed3751242ab66);
$parcel$export($d8cf89bca885903a$exports, "SmartWalletAccount", () => $d8cf89bca885903a$export$9847d582941f64b6);
$parcel$export($d8cf89bca885903a$exports, "SolanaAccount", () => $d8cf89bca885903a$export$d08a38b431a135bc);
$parcel$export($d8cf89bca885903a$exports, "FarcasterAccount", () => $d8cf89bca885903a$export$70b11e99555e84cb);
$parcel$export($d8cf89bca885903a$exports, "PasskeyAccount", () => $d8cf89bca885903a$export$c7ead6bbfb2c42a0);
$parcel$export($d8cf89bca885903a$exports, "TelegramAccount", () => $d8cf89bca885903a$export$70ddd50daefc295f);
$parcel$export($d8cf89bca885903a$exports, "EthereumEmbeddedWalletAccount", () => $d8cf89bca885903a$export$42e79fc33a58a2f5);
$parcel$export($d8cf89bca885903a$exports, "SolanaEmbeddedWalletAccount", () => $d8cf89bca885903a$export$734c44f2e990ba65);
$parcel$export($d8cf89bca885903a$exports, "BitcoinSegwitEmbeddedWalletAccount", () => $d8cf89bca885903a$export$c05834be0df10117);
$parcel$export($d8cf89bca885903a$exports, "BitcoinTaprootEmbeddedWalletAccount", () => $d8cf89bca885903a$export$4d795c7186f7e1f1);
$parcel$export($d8cf89bca885903a$exports, "GoogleOauthAccount", () => $d8cf89bca885903a$export$ab3c40bebc4d6f36);
$parcel$export($d8cf89bca885903a$exports, "TwitterOauthAccount", () => $d8cf89bca885903a$export$31cc32c7bc65c2e0);
$parcel$export($d8cf89bca885903a$exports, "DiscordOauthAccount", () => $d8cf89bca885903a$export$cb35596f96141125);
$parcel$export($d8cf89bca885903a$exports, "GithubOauthAccount", () => $d8cf89bca885903a$export$55430b29b82d98a8);
$parcel$export($d8cf89bca885903a$exports, "LinkedInOauthAccount", () => $d8cf89bca885903a$export$25b982740d2e431c);
$parcel$export($d8cf89bca885903a$exports, "SpotifyOauthAccount", () => $d8cf89bca885903a$export$260592be4b1062f4);
$parcel$export($d8cf89bca885903a$exports, "InstagramOauthAccount", () => $d8cf89bca885903a$export$c683d35f732c1912);
$parcel$export($d8cf89bca885903a$exports, "TiktokOauthAccount", () => $d8cf89bca885903a$export$5e8143c3f32ac816);
$parcel$export($d8cf89bca885903a$exports, "AppleOauthAccount", () => $d8cf89bca885903a$export$67af8a2e34850611);
$parcel$export($d8cf89bca885903a$exports, "CustomJwtAccount", () => $d8cf89bca885903a$export$5da87a1cf22b57d0);
$parcel$export($d8cf89bca885903a$exports, "CrossAppEmbeddedWallet", () => $d8cf89bca885903a$export$ccd62fbf4b025fee);
$parcel$export($d8cf89bca885903a$exports, "CrossAppSmartWallet", () => $d8cf89bca885903a$export$8f1f4ad4f8276ad7);
$parcel$export($d8cf89bca885903a$exports, "CrossAppAccount", () => $d8cf89bca885903a$export$564035ac82295c40);
$parcel$export($d8cf89bca885903a$exports, "LinkedAccount", () => $d8cf89bca885903a$export$70ab2a322f92399);
$parcel$export($d8cf89bca885903a$exports, "SmsMfaMethod", () => $d8cf89bca885903a$export$3250154351927c42);
$parcel$export($d8cf89bca885903a$exports, "TotpMfaMethod", () => $d8cf89bca885903a$export$27837b14d6717da8);
$parcel$export($d8cf89bca885903a$exports, "PasskeyMfaMethod", () => $d8cf89bca885903a$export$dd0fcfda522da705);
$parcel$export($d8cf89bca885903a$exports, "LinkedMfaMethod", () => $d8cf89bca885903a$export$7d2a870b119c9ff4);
$parcel$export($d8cf89bca885903a$exports, "CustomMetadata", () => $d8cf89bca885903a$export$58677eb7a73b7d5a);
$parcel$export($d8cf89bca885903a$exports, "OAuthTokens", () => $d8cf89bca885903a$export$fdfea991b75c2811);
$parcel$export($d8cf89bca885903a$exports, "User", () => $d8cf89bca885903a$export$1f44aaf2ec115b54);
$parcel$export($d8cf89bca885903a$exports, "SessionUpdateActionEnum", () => $d8cf89bca885903a$export$bbd8e1b014079dc1);
$parcel$export($d8cf89bca885903a$exports, "AuthenticatedUser", () => $d8cf89bca885903a$export$7de20aee312d6767);
$parcel$export($d8cf89bca885903a$exports, "LoggedOutUser", () => $d8cf89bca885903a$export$8339543958fe900f);
$parcel$export($d8cf89bca885903a$exports, "MaybeUser", () => $d8cf89bca885903a$export$2b6251d563a4e626);


var $1aadd0fe5ffa17b5$exports = {};

$parcel$export($1aadd0fe5ffa17b5$exports, "SmartWalletProvider", () => $1aadd0fe5ffa17b5$export$96b3537f43197348);
$parcel$export($1aadd0fe5ffa17b5$exports, "AlchemyPaymasterContextSchema", () => $1aadd0fe5ffa17b5$export$2a5d583dc6eed366);
$parcel$export($1aadd0fe5ffa17b5$exports, "SmartWalletNetworkConfigurationInputSchema", () => $1aadd0fe5ffa17b5$export$524bc600c78a5033);
$parcel$export($1aadd0fe5ffa17b5$exports, "SmartWalletConfigurationSchema", () => $1aadd0fe5ffa17b5$export$721df9a9735783ee);
$parcel$export($1aadd0fe5ffa17b5$exports, "SmartWalletConfigurationInputSchema", () => $1aadd0fe5ffa17b5$export$8501bbb82f9b8fbb);
$parcel$export($1aadd0fe5ffa17b5$exports, "SmartWalletConfigurationResponseSchema", () => $1aadd0fe5ffa17b5$export$3744ee3bf2e1e5e2);
$parcel$export($1aadd0fe5ffa17b5$exports, "SAFE", () => $af5265fd3dba53f1$export$467c4d345d20536b);
$parcel$export($1aadd0fe5ffa17b5$exports, "KERNEL", () => $af5265fd3dba53f1$export$5a7fd86629827df3);
$parcel$export($1aadd0fe5ffa17b5$exports, "LIGHT_ACCOUNT", () => $af5265fd3dba53f1$export$619884a26e96e55d);
$parcel$export($1aadd0fe5ffa17b5$exports, "BICONOMY", () => $af5265fd3dba53f1$export$96c76464f555e39d);
$parcel$export($1aadd0fe5ffa17b5$exports, "COINBASE_SMART_WALLET", () => $af5265fd3dba53f1$export$404e03620b321d9e);
$parcel$export($1aadd0fe5ffa17b5$exports, "SUPPORTED_SMART_WALLET_TYPES", () => $af5265fd3dba53f1$export$9a0b8cb5335f5046);

const $af5265fd3dba53f1$export$467c4d345d20536b = "safe";
const $af5265fd3dba53f1$export$5a7fd86629827df3 = "kernel";
const $af5265fd3dba53f1$export$96c76464f555e39d = "biconomy";
const $af5265fd3dba53f1$export$619884a26e96e55d = "light_account";
const $af5265fd3dba53f1$export$404e03620b321d9e = "coinbase_smart_wallet";
const $af5265fd3dba53f1$export$9a0b8cb5335f5046 = [
    $af5265fd3dba53f1$export$467c4d345d20536b,
    $af5265fd3dba53f1$export$5a7fd86629827df3,
    $af5265fd3dba53f1$export$96c76464f555e39d,
    $af5265fd3dba53f1$export$619884a26e96e55d,
    $af5265fd3dba53f1$export$404e03620b321d9e
];


const $1aadd0fe5ffa17b5$export$96b3537f43197348 = (0, $3z62d$z).enum((0, $af5265fd3dba53f1$export$9a0b8cb5335f5046), {
    invalid_type_error: "Please specify a supported provider.",
    required_error: "Please specify a supported provider."
});
const $1aadd0fe5ffa17b5$var$Eip155Schema = (0, $3z62d$z).string().regex(/^eip155:\d+$/, "Chain ID must be an eip155 chain ID");
const $1aadd0fe5ffa17b5$export$2a5d583dc6eed366 = (0, $3z62d$z).object({
    policy_id: (0, $3z62d$z).string().uuid()
});
const $1aadd0fe5ffa17b5$var$SmartWalletNetworkConfigurationSchema = (0, $3z62d$z).object({
    chain_id: $1aadd0fe5ffa17b5$var$Eip155Schema,
    bundler_url: (0, $3z62d$z).string(),
    paymaster_url: (0, $3z62d$z).string().optional(),
    rpc_url: (0, $3z62d$z).string().optional(),
    chain_name: (0, $3z62d$z).string().optional(),
    paymaster_context: $1aadd0fe5ffa17b5$export$2a5d583dc6eed366.optional()
});
const $1aadd0fe5ffa17b5$export$524bc600c78a5033 = (0, $3z62d$z).object({
    chain_id: $1aadd0fe5ffa17b5$var$Eip155Schema,
    bundler_url: (0, $3z62d$z).string().optional(),
    paymaster_url: (0, $3z62d$z).string().optional(),
    rpc_url: (0, $3z62d$z).string().optional(),
    chain_name: (0, $3z62d$z).string().optional(),
    paymaster_context: $1aadd0fe5ffa17b5$export$2a5d583dc6eed366.optional()
});
const $1aadd0fe5ffa17b5$export$721df9a9735783ee = (0, $3z62d$z).discriminatedUnion("enabled", [
    (0, $3z62d$z).object({
        enabled: (0, $3z62d$z).literal(false)
    }),
    (0, $3z62d$z).object({
        enabled: (0, $3z62d$z).literal(true),
        smart_wallet_type: $1aadd0fe5ffa17b5$export$96b3537f43197348,
        configured_networks: (0, $3z62d$z).array($1aadd0fe5ffa17b5$var$SmartWalletNetworkConfigurationSchema).min(1)
    })
]);
const $1aadd0fe5ffa17b5$export$8501bbb82f9b8fbb = (0, $3z62d$z).discriminatedUnion("enabled", [
    (0, $3z62d$z).object({
        enabled: (0, $3z62d$z).literal(false)
    }),
    (0, $3z62d$z).object({
        enabled: (0, $3z62d$z).literal(true),
        smart_wallet_type: $1aadd0fe5ffa17b5$export$96b3537f43197348,
        configured_networks: (0, $3z62d$z).array($1aadd0fe5ffa17b5$export$524bc600c78a5033).min(1)
    })
]);
const $1aadd0fe5ffa17b5$export$3744ee3bf2e1e5e2 = $1aadd0fe5ffa17b5$export$721df9a9735783ee;


const $d8cf89bca885903a$export$b291b2a8281f162e = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("email"),
    address: (0, $3z62d$z).string(),
    /** @deprecated use `first_verified_at` instead. */ verified_at: (0, $3z62d$z).number(),
    first_verified_at: (0, $3z62d$z).number().nullable(),
    latest_verified_at: (0, $3z62d$z).number().nullable()
});
const $d8cf89bca885903a$export$e461068a75eb0fb3 = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("phone"),
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ phoneNumber: (0, $3z62d$z).string(),
    /** @deprecated use `first_verified_at` instead. */ verified_at: (0, $3z62d$z).number(),
    first_verified_at: (0, $3z62d$z).number().nullable(),
    latest_verified_at: (0, $3z62d$z).number().nullable()
});
const $d8cf89bca885903a$export$16168ca1ad2afd69 = (0, $3z62d$z).object({
    type: (0, $3z62d$z).enum([
        "wallet",
        "smart_wallet"
    ]),
    address: (0, $3z62d$z).string(),
    chain_type: (0, $3z62d$z).enum([
        "solana",
        "ethereum"
    ])
});
const $d8cf89bca885903a$export$e72ed3751242ab66 = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("wallet"),
    address: (0, $3z62d$z).string(),
    /**
   * @deprecated Will be removed in a future release
   */ chain_id: (0, $3z62d$z).string().optional(),
    chain_type: (0, $3z62d$z).literal("ethereum"),
    /**
   * @deprecated Use `wallet_client_type` instead.
   */ wallet_client: (0, $3z62d$z).literal("unknown"),
    wallet_client_type: (0, $3z62d$z).string().optional(),
    connector_type: (0, $3z62d$z).string().optional(),
    /** @deprecated use `first_verified_at` instead. */ verified_at: (0, $3z62d$z).number(),
    first_verified_at: (0, $3z62d$z).number().nullable(),
    latest_verified_at: (0, $3z62d$z).number().nullable()
});
const $d8cf89bca885903a$export$9847d582941f64b6 = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("smart_wallet"),
    address: (0, $3z62d$z).string(),
    smart_wallet_type: (0, $1aadd0fe5ffa17b5$export$96b3537f43197348),
    /** @deprecated use `first_verified_at` instead. */ verified_at: (0, $3z62d$z).number(),
    first_verified_at: (0, $3z62d$z).number().nullable(),
    latest_verified_at: (0, $3z62d$z).number().nullable()
});
const $d8cf89bca885903a$export$d08a38b431a135bc = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("wallet"),
    address: (0, $3z62d$z).string(),
    chain_type: (0, $3z62d$z).literal("solana"),
    /**
   * @deprecated Use `wallet_client_type` instead.
   */ wallet_client: (0, $3z62d$z).literal("unknown"),
    wallet_client_type: (0, $3z62d$z).string().optional(),
    connector_type: (0, $3z62d$z).string().optional(),
    /** @deprecated use `first_verified_at` instead. */ verified_at: (0, $3z62d$z).number(),
    first_verified_at: (0, $3z62d$z).number().nullable(),
    latest_verified_at: (0, $3z62d$z).number().nullable()
});
const $d8cf89bca885903a$export$70b11e99555e84cb = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("farcaster"),
    fid: (0, $3z62d$z).number(),
    owner_address: (0, $cd63f1af6df0c007$export$e1ae011f7e31ddec),
    username: (0, $3z62d$z).string().optional(),
    display_name: (0, $3z62d$z).string().optional(),
    bio: (0, $3z62d$z).string().optional(),
    // The `profile_picture` interface is deprecated in favor of `profile_picture_url`
    // as of `react-auth@1.55.2`.
    profile_picture: (0, $3z62d$z).string().optional(),
    profile_picture_url: (0, $3z62d$z).string().optional(),
    homepage_url: (0, $3z62d$z).string().optional(),
    /** @deprecated use `first_verified_at` instead. */ verified_at: (0, $3z62d$z).number(),
    first_verified_at: (0, $3z62d$z).number().nullable(),
    latest_verified_at: (0, $3z62d$z).number().nullable(),
    signer_public_key: (0, $3z62d$z).string().optional()
});
const $d8cf89bca885903a$export$c7ead6bbfb2c42a0 = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("passkey"),
    created_with_browser: (0, $3z62d$z).string().optional(),
    created_with_os: (0, $3z62d$z).string().optional(),
    created_with_device: (0, $3z62d$z).string().optional(),
    credential_id: (0, $3z62d$z).string(),
    authenticator_name: (0, $3z62d$z).string().optional(),
    enrolled_in_mfa: (0, $3z62d$z).boolean(),
    /** @deprecated use `first_verified_at` instead. */ verified_at: (0, $3z62d$z).number(),
    first_verified_at: (0, $3z62d$z).number().nullable(),
    latest_verified_at: (0, $3z62d$z).number().nullable()
});
const $d8cf89bca885903a$export$70ddd50daefc295f = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("telegram"),
    telegram_user_id: (0, $3z62d$z).string(),
    first_name: (0, $3z62d$z).string().nullish(),
    last_name: (0, $3z62d$z).string().nullish(),
    username: (0, $3z62d$z).string().nullish(),
    photo_url: (0, $3z62d$z).string().nullish(),
    /** @deprecated use `first_verified_at` instead. */ verified_at: (0, $3z62d$z).number(),
    first_verified_at: (0, $3z62d$z).number().nullable(),
    latest_verified_at: (0, $3z62d$z).number().nullable()
}).transform((value)=>({
        ...value,
        // TODO: We keep this for backwards compatibility. Remove this after we make sure no one uses this version of the response
        /* eslint-disable-next-line @typescript-eslint/naming-convention */ telegramUserId: value.telegram_user_id,
        /* eslint-disable-next-line @typescript-eslint/naming-convention */ firstName: value.first_name
    }));
const $d8cf89bca885903a$var$RecoveryMethod = (0, $3z62d$z).enum([
    "privy",
    "user-passcode",
    "google-drive",
    "icloud"
]);
const $d8cf89bca885903a$var$EmbeddedWalletAccount = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("wallet"),
    address: (0, $3z62d$z).string(),
    imported: (0, $3z62d$z).boolean().default(false),
    delegated: (0, $3z62d$z).boolean().default(false),
    wallet_index: (0, $3z62d$z).number(),
    /**
   * @deprecated Will be removed in a future release
   */ chain_id: (0, $3z62d$z).string(),
    chain_type: (0, $3z62d$z).string(),
    /**
   * @deprecated Use `wallet_client_type` instead.
   */ wallet_client: (0, $3z62d$z).literal("privy"),
    wallet_client_type: (0, $3z62d$z).literal("privy"),
    connector_type: (0, $3z62d$z).literal("embedded"),
    recovery_method: $d8cf89bca885903a$var$RecoveryMethod,
    /** @deprecated use `first_verified_at` instead. */ verified_at: (0, $3z62d$z).number(),
    first_verified_at: (0, $3z62d$z).number().nullable(),
    latest_verified_at: (0, $3z62d$z).number().nullable()
});
const $d8cf89bca885903a$export$42e79fc33a58a2f5 = $d8cf89bca885903a$var$EmbeddedWalletAccount.merge((0, $3z62d$z).object({
    chain_type: (0, $3z62d$z).literal("ethereum")
}));
const $d8cf89bca885903a$export$734c44f2e990ba65 = $d8cf89bca885903a$var$EmbeddedWalletAccount.merge((0, $3z62d$z).object({
    chain_type: (0, $3z62d$z).literal("solana"),
    /** @deprecated use `address` instead. */ public_key: (0, $3z62d$z).string()
}));
const $d8cf89bca885903a$export$c05834be0df10117 = $d8cf89bca885903a$var$EmbeddedWalletAccount.merge((0, $3z62d$z).object({
    chain_type: (0, $3z62d$z).literal("bitcoin-segwit"),
    public_key: (0, $3z62d$z).string()
}));
const $d8cf89bca885903a$export$4d795c7186f7e1f1 = $d8cf89bca885903a$var$EmbeddedWalletAccount.merge((0, $3z62d$z).object({
    chain_type: (0, $3z62d$z).literal("bitcoin-taproot"),
    public_key: (0, $3z62d$z).string()
}));
const $d8cf89bca885903a$export$ab3c40bebc4d6f36 = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("google_oauth"),
    subject: (0, $3z62d$z).string(),
    email: (0, $3z62d$z).string(),
    name: (0, $3z62d$z).string().nullable(),
    /** @deprecated use `first_verified_at` instead. */ verified_at: (0, $3z62d$z).number(),
    first_verified_at: (0, $3z62d$z).number().nullable(),
    latest_verified_at: (0, $3z62d$z).number().nullable()
});
const $d8cf89bca885903a$export$31cc32c7bc65c2e0 = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("twitter_oauth"),
    subject: (0, $3z62d$z).string(),
    username: (0, $3z62d$z).string().nullable(),
    name: (0, $3z62d$z).string().nullable(),
    profile_picture_url: (0, $3z62d$z).string().nullable(),
    /** @deprecated use `first_verified_at` instead. */ verified_at: (0, $3z62d$z).number(),
    first_verified_at: (0, $3z62d$z).number().nullable(),
    latest_verified_at: (0, $3z62d$z).number().nullable()
});
const $d8cf89bca885903a$export$cb35596f96141125 = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("discord_oauth"),
    subject: (0, $3z62d$z).string(),
    username: (0, $3z62d$z).string().nullable(),
    email: (0, $3z62d$z).string().nullable(),
    /** @deprecated use `first_verified_at` instead. */ verified_at: (0, $3z62d$z).number(),
    first_verified_at: (0, $3z62d$z).number().nullable(),
    latest_verified_at: (0, $3z62d$z).number().nullable()
});
const $d8cf89bca885903a$export$55430b29b82d98a8 = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("github_oauth"),
    subject: (0, $3z62d$z).string(),
    username: (0, $3z62d$z).string().nullable(),
    name: (0, $3z62d$z).string().nullable(),
    email: (0, $3z62d$z).string().nullable(),
    /** @deprecated use `first_verified_at` instead. */ verified_at: (0, $3z62d$z).number(),
    first_verified_at: (0, $3z62d$z).number().nullable(),
    latest_verified_at: (0, $3z62d$z).number().nullable()
});
const $d8cf89bca885903a$export$25b982740d2e431c = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("linkedin_oauth"),
    subject: (0, $3z62d$z).string(),
    name: (0, $3z62d$z).string().optional(),
    email: (0, $3z62d$z).string().nullable(),
    vanity_name: (0, $3z62d$z).string().optional(),
    /** @deprecated use `first_verified_at` instead. */ verified_at: (0, $3z62d$z).number(),
    first_verified_at: (0, $3z62d$z).number().nullable(),
    latest_verified_at: (0, $3z62d$z).number().nullable()
});
const $d8cf89bca885903a$export$260592be4b1062f4 = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("spotify_oauth"),
    subject: (0, $3z62d$z).string(),
    email: (0, $3z62d$z).string().nullable(),
    name: (0, $3z62d$z).string().nullable(),
    /** @deprecated use `first_verified_at` instead. */ verified_at: (0, $3z62d$z).number(),
    first_verified_at: (0, $3z62d$z).number().nullable(),
    latest_verified_at: (0, $3z62d$z).number().nullable()
});
const $d8cf89bca885903a$export$c683d35f732c1912 = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("instagram_oauth"),
    subject: (0, $3z62d$z).string(),
    username: (0, $3z62d$z).string().nullable(),
    /** @deprecated use `first_verified_at` instead. */ verified_at: (0, $3z62d$z).number(),
    first_verified_at: (0, $3z62d$z).number().nullable(),
    latest_verified_at: (0, $3z62d$z).number().nullable()
});
const $d8cf89bca885903a$export$5e8143c3f32ac816 = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("tiktok_oauth"),
    subject: (0, $3z62d$z).string(),
    username: (0, $3z62d$z).string().nullable(),
    name: (0, $3z62d$z).string().nullable(),
    /** @deprecated use `first_verified_at` instead. */ verified_at: (0, $3z62d$z).number(),
    first_verified_at: (0, $3z62d$z).number().nullable(),
    latest_verified_at: (0, $3z62d$z).number().nullable()
});
const $d8cf89bca885903a$export$67af8a2e34850611 = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("apple_oauth"),
    subject: (0, $3z62d$z).string(),
    email: (0, $3z62d$z).string().nullable(),
    /** @deprecated use `first_verified_at` instead. */ verified_at: (0, $3z62d$z).number(),
    first_verified_at: (0, $3z62d$z).number().nullable(),
    latest_verified_at: (0, $3z62d$z).number().nullable()
});
const $d8cf89bca885903a$export$5da87a1cf22b57d0 = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("custom_auth"),
    custom_user_id: (0, $3z62d$z).string(),
    /** @deprecated use `first_verified_at` instead. */ verified_at: (0, $3z62d$z).number(),
    first_verified_at: (0, $3z62d$z).number().nullable(),
    latest_verified_at: (0, $3z62d$z).number().nullable()
});
const $d8cf89bca885903a$export$ccd62fbf4b025fee = (0, $3z62d$z).object({
    address: (0, $3z62d$z).string()
});
const $d8cf89bca885903a$export$8f1f4ad4f8276ad7 = (0, $3z62d$z).object({
    address: (0, $3z62d$z).string()
});
const $d8cf89bca885903a$export$564035ac82295c40 = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("cross_app"),
    subject: (0, $3z62d$z).string(),
    provider_app_id: (0, $3z62d$z).string(),
    embedded_wallets: (0, $3z62d$z).array($d8cf89bca885903a$export$ccd62fbf4b025fee),
    smart_wallets: (0, $3z62d$z).array($d8cf89bca885903a$export$8f1f4ad4f8276ad7),
    /** @deprecated use `first_verified_at` instead. */ verified_at: (0, $3z62d$z).number(),
    first_verified_at: (0, $3z62d$z).number().nullable(),
    latest_verified_at: (0, $3z62d$z).number().nullable()
});
const $d8cf89bca885903a$export$70ab2a322f92399 = (0, $3z62d$z).union([
    $d8cf89bca885903a$export$b291b2a8281f162e,
    $d8cf89bca885903a$export$e461068a75eb0fb3,
    $d8cf89bca885903a$export$e72ed3751242ab66,
    $d8cf89bca885903a$export$d08a38b431a135bc,
    $d8cf89bca885903a$export$9847d582941f64b6,
    $d8cf89bca885903a$export$42e79fc33a58a2f5,
    $d8cf89bca885903a$export$734c44f2e990ba65,
    $d8cf89bca885903a$export$c05834be0df10117,
    $d8cf89bca885903a$export$4d795c7186f7e1f1,
    $d8cf89bca885903a$export$ab3c40bebc4d6f36,
    $d8cf89bca885903a$export$31cc32c7bc65c2e0,
    $d8cf89bca885903a$export$cb35596f96141125,
    $d8cf89bca885903a$export$55430b29b82d98a8,
    $d8cf89bca885903a$export$260592be4b1062f4,
    $d8cf89bca885903a$export$c683d35f732c1912,
    $d8cf89bca885903a$export$5e8143c3f32ac816,
    $d8cf89bca885903a$export$25b982740d2e431c,
    $d8cf89bca885903a$export$67af8a2e34850611,
    $d8cf89bca885903a$export$5da87a1cf22b57d0,
    $d8cf89bca885903a$export$70b11e99555e84cb,
    $d8cf89bca885903a$export$c7ead6bbfb2c42a0,
    $d8cf89bca885903a$export$70ddd50daefc295f,
    $d8cf89bca885903a$export$564035ac82295c40
]);
const $d8cf89bca885903a$export$3250154351927c42 = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("sms"),
    verified_at: (0, $3z62d$z).number()
});
const $d8cf89bca885903a$export$27837b14d6717da8 = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("totp"),
    verified_at: (0, $3z62d$z).number()
});
const $d8cf89bca885903a$export$dd0fcfda522da705 = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("passkey"),
    verified_at: (0, $3z62d$z).number()
});
const $d8cf89bca885903a$export$7d2a870b119c9ff4 = (0, $3z62d$z).union([
    $d8cf89bca885903a$export$3250154351927c42,
    $d8cf89bca885903a$export$27837b14d6717da8,
    $d8cf89bca885903a$export$dd0fcfda522da705
]);
const $d8cf89bca885903a$export$58677eb7a73b7d5a = (0, $3z62d$z).record((0, $3z62d$z).string(), (0, $3z62d$z).union([
    (0, $3z62d$z).string(),
    (0, $3z62d$z).number(),
    (0, $3z62d$z).boolean()
]));
const $d8cf89bca885903a$export$fdfea991b75c2811 = (0, $3z62d$z).object({
    provider: (0, $3z62d$z).string(),
    access_token: (0, $3z62d$z).string(),
    // The following additional parameters are optional as some OAuth providers may not return them.
    // Being conservative with marking them optional for now.
    access_token_expires_in_seconds: (0, $3z62d$z).number().optional(),
    refresh_token: (0, $3z62d$z).string().optional(),
    refresh_token_expires_in_seconds: (0, $3z62d$z).number().optional(),
    scopes: (0, $3z62d$z).array((0, $3z62d$z).string()).optional()
});
const $d8cf89bca885903a$export$1f44aaf2ec115b54 = (0, $3z62d$z).object({
    id: (0, $3z62d$z).string(),
    linked_accounts: (0, $3z62d$z).array($d8cf89bca885903a$export$70ab2a322f92399),
    mfa_methods: (0, $3z62d$z).array($d8cf89bca885903a$export$7d2a870b119c9ff4),
    created_at: (0, $3z62d$z).number(),
    has_accepted_terms: (0, $3z62d$z).boolean(),
    is_guest: (0, $3z62d$z).boolean(),
    custom_metadata: $d8cf89bca885903a$export$58677eb7a73b7d5a.optional()
});
const $d8cf89bca885903a$export$bbd8e1b014079dc1 = (0, $3z62d$z).enum([
    "set",
    "ignore",
    "clear"
]);
const $d8cf89bca885903a$export$7de20aee312d6767 = (0, $3z62d$z).object({
    user: $d8cf89bca885903a$export$1f44aaf2ec115b54,
    token: (0, $3z62d$z).string().min(1).nullable(),
    privy_access_token: (0, $3z62d$z).string().min(1).nullable(),
    refresh_token: (0, $3z62d$z).string().min(1).nullable(),
    identity_token: (0, $3z62d$z).string().min(1).optional(),
    is_new_user: (0, $3z62d$z).boolean().optional(),
    oauth_tokens: $d8cf89bca885903a$export$fdfea991b75c2811.optional(),
    // TODO: deprecate once Deform moves off of the legacy method
    oauth_provider_tokens: (0, $3z62d$z).object({
        provider: (0, $3z62d$z).string(),
        access_token: (0, $3z62d$z).string(),
        // The following additional parameters are optional as some OAuth providers may not return them.
        // Being conservative with marking them optional for now.
        access_token_expires_in_seconds: (0, $3z62d$z).number().optional(),
        refresh_token: (0, $3z62d$z).string().optional(),
        scopes: (0, $3z62d$z).array((0, $3z62d$z).string()).optional()
    }).optional(),
    /**
   * Instructs the client on how to handle tokens received from /sessions endpoint
   * Seeks to mimic the behavior of cookies with manual storage
   *
   * - `set`: _write both tokens to storage_
   * - `clear`: _remove tokens from storage_
   * - `ignore`: _leave tokens storage unchanged_
   */ session_update_action: $d8cf89bca885903a$export$bbd8e1b014079dc1
});
const $d8cf89bca885903a$export$8339543958fe900f = (0, $3z62d$z).object({
    user: (0, $3z62d$z).null(),
    token: (0, $3z62d$z).null(),
    refresh_token: (0, $3z62d$z).null(),
    /** Instructs the client to clear any persisted tokens */ session_update_action: (0, $3z62d$z).literal($d8cf89bca885903a$export$bbd8e1b014079dc1.Values.clear)
});
const $d8cf89bca885903a$export$2b6251d563a4e626 = (0, $3z62d$z).union([
    $d8cf89bca885903a$export$7de20aee312d6767,
    $d8cf89bca885903a$export$8339543958fe900f
]);


const $619c9ebe0c9955fa$var$latestVerifiedAt = {
    lv: (0, $3z62d$z).number().nullable()
};
const $619c9ebe0c9955fa$export$783ee7c583b70bea = (0, $d8cf89bca885903a$export$b291b2a8281f162e).pick({
    type: true,
    address: true
}).extend($619c9ebe0c9955fa$var$latestVerifiedAt);
const $619c9ebe0c9955fa$export$5050d0079ef11bc6 = (0, $d8cf89bca885903a$export$e461068a75eb0fb3).pick({
    type: true,
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ phoneNumber: true
}).extend($619c9ebe0c9955fa$var$latestVerifiedAt).transform(({ phoneNumber: phoneNumber, ...rest })=>({
        phone_number: phoneNumber,
        ...rest
    }));
const $619c9ebe0c9955fa$export$fd3f2073209314f0 = (0, $d8cf89bca885903a$export$e72ed3751242ab66).pick({
    type: true,
    address: true,
    chain_type: true,
    wallet_client_type: true
}).extend($619c9ebe0c9955fa$var$latestVerifiedAt);
const $619c9ebe0c9955fa$export$7d91b89a98a32206 = (0, $d8cf89bca885903a$export$70b11e99555e84cb).pick({
    type: true,
    fid: true,
    username: true,
    owner_address: true
}).extend($619c9ebe0c9955fa$var$latestVerifiedAt)// Owner address abbriviated to oa to be efficient in cookie-space
.transform(({ owner_address: owner_address, ...rest })=>({
        oa: owner_address,
        ...rest
    }));
const $619c9ebe0c9955fa$export$3da0109396521ad1 = (0, $d8cf89bca885903a$export$c7ead6bbfb2c42a0).pick({
    type: true,
    credential_id: true
}).extend($619c9ebe0c9955fa$var$latestVerifiedAt);
const $619c9ebe0c9955fa$export$883001ac4b913adc = (0, $3z62d$z).object({
    type: (0, $3z62d$z).literal("telegram"),
    telegram_user_id: (0, $3z62d$z).string(),
    username: (0, $3z62d$z).string().nullish(),
    lv: (0, $3z62d$z).number().nullable()
});
const $619c9ebe0c9955fa$export$10bcfd05b1db0bfb = (0, $d8cf89bca885903a$export$ab3c40bebc4d6f36).pick({
    type: true,
    subject: true,
    email: true,
    name: true
}).extend($619c9ebe0c9955fa$var$latestVerifiedAt);
const $619c9ebe0c9955fa$export$5cf36acae8eed78 = (0, $d8cf89bca885903a$export$31cc32c7bc65c2e0).pick({
    type: true,
    subject: true,
    username: true
}).extend($619c9ebe0c9955fa$var$latestVerifiedAt);
const $619c9ebe0c9955fa$export$18e770e71ddcac8b = (0, $d8cf89bca885903a$export$cb35596f96141125).pick({
    type: true,
    subject: true,
    username: true
}).extend($619c9ebe0c9955fa$var$latestVerifiedAt);
const $619c9ebe0c9955fa$export$2fd8fb76725390c8 = (0, $d8cf89bca885903a$export$55430b29b82d98a8).pick({
    type: true,
    subject: true,
    username: true
}).extend($619c9ebe0c9955fa$var$latestVerifiedAt);
const $619c9ebe0c9955fa$export$7325b1b9ff5b138f = (0, $d8cf89bca885903a$export$25b982740d2e431c).pick({
    type: true,
    subject: true,
    email: true
}).extend($619c9ebe0c9955fa$var$latestVerifiedAt);
const $619c9ebe0c9955fa$export$5991ad07a5ac6061 = (0, $d8cf89bca885903a$export$260592be4b1062f4).pick({
    type: true,
    subject: true,
    email: true
}).extend($619c9ebe0c9955fa$var$latestVerifiedAt);
const $619c9ebe0c9955fa$export$d50f791175bcd25a = (0, $d8cf89bca885903a$export$c683d35f732c1912).pick({
    type: true,
    subject: true,
    username: true
}).extend($619c9ebe0c9955fa$var$latestVerifiedAt);
const $619c9ebe0c9955fa$export$ad548be3bcd74188 = (0, $d8cf89bca885903a$export$5e8143c3f32ac816).pick({
    type: true,
    subject: true,
    username: true
}).extend($619c9ebe0c9955fa$var$latestVerifiedAt);
const $619c9ebe0c9955fa$export$b8a150e8882d7617 = (0, $d8cf89bca885903a$export$67af8a2e34850611).pick({
    type: true,
    subject: true,
    email: true
}).extend($619c9ebe0c9955fa$var$latestVerifiedAt);
const $619c9ebe0c9955fa$export$4a1709b5a6406ed8 = (0, $d8cf89bca885903a$export$5da87a1cf22b57d0).pick({
    type: true,
    custom_user_id: true
}).extend($619c9ebe0c9955fa$var$latestVerifiedAt);
const $619c9ebe0c9955fa$export$23abd82a93e245c8 = (0, $d8cf89bca885903a$export$564035ac82295c40).pick({
    type: true,
    subject: true,
    provider_app_id: true,
    embedded_wallets: true,
    smart_wallets: true
}).extend($619c9ebe0c9955fa$var$latestVerifiedAt);
const $619c9ebe0c9955fa$export$18ff60c21403359 = (0, $d8cf89bca885903a$export$9847d582941f64b6).pick({
    type: true,
    smart_wallet_type: true,
    address: true
}).extend($619c9ebe0c9955fa$var$latestVerifiedAt);


var $eaaefcff8b45215e$exports = {};

$parcel$export($eaaefcff8b45215e$exports, "MfaVerifyResponse", () => $eaaefcff8b45215e$export$2a073761fe65eeb);
$parcel$export($eaaefcff8b45215e$exports, "MfaSmsInitInput", () => $eaaefcff8b45215e$export$5f85d1e59e4b8093);
$parcel$export($eaaefcff8b45215e$exports, "MfaSmsAuthenticateEnrollInput", () => $eaaefcff8b45215e$export$d79e41bdbeb33bc8);
$parcel$export($eaaefcff8b45215e$exports, "MfaSmsEnrollInput", () => $eaaefcff8b45215e$export$44ba6bee6f8c49bc);
$parcel$export($eaaefcff8b45215e$exports, "MfaSmsVerifyInput", () => $eaaefcff8b45215e$export$826840b7b6a37c22);
$parcel$export($eaaefcff8b45215e$exports, "MfaTotpInput", () => $eaaefcff8b45215e$export$c5079467361455e6);
$parcel$export($eaaefcff8b45215e$exports, "ResponseTotpInitMfa", () => $eaaefcff8b45215e$export$2e0b8857111f6a95);


const $eaaefcff8b45215e$export$2a073761fe65eeb = (0, $3z62d$zod).object({
    token: (0, $3z62d$zod).string()
}).strict();
/**
 * SMS MFA enrollment and verification inputs.
 */ const $eaaefcff8b45215e$var$MfaSmsInitVerifyInput = (0, $3z62d$zod).object({
    action: (0, $3z62d$zod).literal("verify")
}).strict();
const $eaaefcff8b45215e$var$MfaSmsInitEnrollInput = (0, $3z62d$zod).object({
    action: (0, $3z62d$zod).literal("enroll"),
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ phoneNumber: (0, $cd63f1af6df0c007$export$3d623a7758cab61e)
}).strict();
const $eaaefcff8b45215e$export$5f85d1e59e4b8093 = (0, $3z62d$zod).union([
    $eaaefcff8b45215e$var$MfaSmsInitVerifyInput,
    $eaaefcff8b45215e$var$MfaSmsInitEnrollInput
]);
const $eaaefcff8b45215e$export$d79e41bdbeb33bc8 = (0, $3z62d$zod).object({
    action: (0, $3z62d$zod).literal("enroll").optional(),
    code: (0, $cd63f1af6df0c007$export$6051224a4b788b5f),
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ phoneNumber: (0, $cd63f1af6df0c007$export$3d623a7758cab61e)
}).strict();
const $eaaefcff8b45215e$export$44ba6bee6f8c49bc = (0, $3z62d$zod).object({
    code: (0, $cd63f1af6df0c007$export$6051224a4b788b5f),
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ phoneNumber: (0, $cd63f1af6df0c007$export$3d623a7758cab61e)
}).strict();
const $eaaefcff8b45215e$export$826840b7b6a37c22 = (0, $3z62d$zod).object({
    code: (0, $cd63f1af6df0c007$export$6051224a4b788b5f)
}).strict();
const $eaaefcff8b45215e$export$c5079467361455e6 = (0, $3z62d$zod).object({
    code: (0, $cd63f1af6df0c007$export$6051224a4b788b5f)
}).strict();
const $eaaefcff8b45215e$export$2e0b8857111f6a95 = (0, $3z62d$zod).object({
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ totpSecret: (0, $3z62d$zod).string(),
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ totpAuthUrl: (0, $3z62d$zod).string()
}).strict();


var $c43ea27f3e41dce1$exports = {};

$parcel$export($c43ea27f3e41dce1$exports, "MfaPasskeyInitInput", () => $c43ea27f3e41dce1$export$2d6bddbbdba11994);
$parcel$export($c43ea27f3e41dce1$exports, "ResponsePasskeyInitMfa", () => $c43ea27f3e41dce1$export$94c076e2d3cd7355);
$parcel$export($c43ea27f3e41dce1$exports, "MfaPasskeyVerifyInput", () => $c43ea27f3e41dce1$export$afc24607eeb5f33e);
$parcel$export($c43ea27f3e41dce1$exports, "MfaEnrollmentPasskeyInput", () => $c43ea27f3e41dce1$export$3c909b91f5e6545f);

var $69a0fb8bb890224f$exports = {};

$parcel$export($69a0fb8bb890224f$exports, "PasskeyAuthenticatorVerifyOptions", () => $69a0fb8bb890224f$export$7b01305e0ab33ea3);
$parcel$export($69a0fb8bb890224f$exports, "PasskeyAuthenticatorEnrollmentOptions", () => $69a0fb8bb890224f$export$1c8fd79a94eba09d);
$parcel$export($69a0fb8bb890224f$exports, "PasskeyAuthenticatorVerifyResponse", () => $69a0fb8bb890224f$export$96203b761bf7cadb);
$parcel$export($69a0fb8bb890224f$exports, "PasskeyAuthenticatorEnrollmentResponse", () => $69a0fb8bb890224f$export$49424bcfec0159aa);
$parcel$export($69a0fb8bb890224f$exports, "PasskeyInitInput", () => $69a0fb8bb890224f$export$8c48c68e39a52ea);
$parcel$export($69a0fb8bb890224f$exports, "ResponsePasskeyInitAuthenticate", () => $69a0fb8bb890224f$export$2741be68c8db9b43);
$parcel$export($69a0fb8bb890224f$exports, "ResponsePasskeyInitLink", () => $69a0fb8bb890224f$export$b968e9f4fdc5f0b2);
$parcel$export($69a0fb8bb890224f$exports, "ResponsePasskeyInitRegister", () => $69a0fb8bb890224f$export$88c08ece0d5f563d);
$parcel$export($69a0fb8bb890224f$exports, "PasskeyLinkInput", () => $69a0fb8bb890224f$export$9bd14c1a22f65d2);
$parcel$export($69a0fb8bb890224f$exports, "PasskeyRegisterInput", () => $69a0fb8bb890224f$export$6f9781ad5a96bdcf);
$parcel$export($69a0fb8bb890224f$exports, "PasskeyAuthenticateInput", () => $69a0fb8bb890224f$export$8525265affc59e4b);
$parcel$export($69a0fb8bb890224f$exports, "UnlinkPasskeyInput", () => $69a0fb8bb890224f$export$1d32dd5b05e1d4dd);

const $69a0fb8bb890224f$export$7b01305e0ab33ea3 = (0, $3z62d$zod).object({
    challenge: (0, $3z62d$zod).string(),
    timeout: (0, $3z62d$zod).number().optional(),
    rp_id: (0, $3z62d$zod).string().optional(),
    allow_credentials: (0, $3z62d$zod).array((0, $3z62d$zod).object({
        id: (0, $3z62d$zod).string(),
        type: (0, $3z62d$zod).string(),
        transports: (0, $3z62d$zod).array((0, $3z62d$zod).string()).optional()
    })).optional(),
    user_verification: (0, $3z62d$zod).string().optional(),
    extensions: (0, $3z62d$zod).object({
        app_id: (0, $3z62d$zod).string().optional(),
        cred_props: (0, $3z62d$zod).boolean().optional(),
        hmac_create_secret: (0, $3z62d$zod).boolean().optional()
    }).optional()
});
const $69a0fb8bb890224f$export$1c8fd79a94eba09d = (0, $3z62d$zod).object({
    rp: (0, $3z62d$zod).object({
        name: (0, $3z62d$zod).string(),
        id: (0, $3z62d$zod).string().optional()
    }),
    user: (0, $3z62d$zod).object({
        id: (0, $3z62d$zod).string(),
        name: (0, $3z62d$zod).string(),
        display_name: (0, $3z62d$zod).string()
    }),
    challenge: (0, $3z62d$zod).string(),
    pub_key_cred_params: (0, $3z62d$zod).array((0, $3z62d$zod).object({
        alg: (0, $3z62d$zod).number(),
        type: (0, $3z62d$zod).literal("public-key")
    })),
    timeout: (0, $3z62d$zod).number().optional(),
    exclude_credentials: (0, $3z62d$zod).array((0, $3z62d$zod).object({
        id: (0, $3z62d$zod).string(),
        type: (0, $3z62d$zod).string(),
        transports: (0, $3z62d$zod).array((0, $3z62d$zod).string()).optional()
    })).optional(),
    authenticator_selection: (0, $3z62d$zod).object({
        authenticator_attachment: (0, $3z62d$zod).string().optional(),
        require_resident_key: (0, $3z62d$zod).boolean().optional(),
        resident_key: (0, $3z62d$zod).string().optional(),
        user_verification: (0, $3z62d$zod).string().optional()
    }).optional(),
    attestation: (0, $3z62d$zod).string().optional(),
    extensions: (0, $3z62d$zod).object({
        app_id: (0, $3z62d$zod).string().optional(),
        cred_props: (0, $3z62d$zod).object({
            rk: (0, $3z62d$zod).boolean().optional()
        }).optional(),
        hmac_create_secret: (0, $3z62d$zod).boolean().optional()
    }).optional()
});
const $69a0fb8bb890224f$export$96203b761bf7cadb = (0, $3z62d$zod).object({
    id: (0, $3z62d$zod).string(),
    raw_id: (0, $3z62d$zod).string(),
    response: (0, $3z62d$zod).object({
        client_data_json: (0, $3z62d$zod).string(),
        authenticator_data: (0, $3z62d$zod).string(),
        signature: (0, $3z62d$zod).string(),
        user_handle: (0, $3z62d$zod).string().optional()
    }),
    authenticator_attachment: (0, $3z62d$zod).string().optional(),
    client_extension_results: (0, $3z62d$zod).object({
        app_id: (0, $3z62d$zod).boolean().optional(),
        cred_props: (0, $3z62d$zod).object({
            rk: (0, $3z62d$zod).boolean().optional()
        }).optional(),
        hmac_create_secret: (0, $3z62d$zod).boolean().optional()
    }),
    type: (0, $3z62d$zod).literal("public-key")
});
const $69a0fb8bb890224f$export$49424bcfec0159aa = (0, $3z62d$zod).object({
    id: (0, $3z62d$zod).string(),
    raw_id: (0, $3z62d$zod).string(),
    response: (0, $3z62d$zod).object({
        client_data_json: (0, $3z62d$zod).string(),
        attestation_object: (0, $3z62d$zod).string(),
        authenticator_data: (0, $3z62d$zod).string().optional(),
        // TODO: Type this to AuthenticatorTransportFuture[]
        transports: (0, $3z62d$zod).array((0, $3z62d$zod).any()).optional(),
        public_key_algorithm: (0, $3z62d$zod).number().optional(),
        public_key: (0, $3z62d$zod).string().optional()
    }),
    authenticator_attachment: (0, $3z62d$zod).string().optional(),
    client_extension_results: (0, $3z62d$zod).object({
        app_id: (0, $3z62d$zod).boolean().optional(),
        cred_props: (0, $3z62d$zod).object({
            rk: (0, $3z62d$zod).boolean().optional()
        }).optional(),
        hmac_create_secret: (0, $3z62d$zod).boolean().optional()
    }),
    type: (0, $3z62d$zod).literal("public-key")
});
const $69a0fb8bb890224f$export$8c48c68e39a52ea = (0, $3z62d$zod).object({
    relying_party: (0, $3z62d$zod).string().url().optional(),
    token: (0, $3z62d$zod).string().optional()
}).strict();
const $69a0fb8bb890224f$export$2741be68c8db9b43 = (0, $3z62d$zod).object({
    relying_party: (0, $3z62d$zod).string().url().optional(),
    options: $69a0fb8bb890224f$export$7b01305e0ab33ea3
}).strict();
const $69a0fb8bb890224f$export$b968e9f4fdc5f0b2 = (0, $3z62d$zod).object({
    relying_party: (0, $3z62d$zod).string().url().optional(),
    options: $69a0fb8bb890224f$export$1c8fd79a94eba09d
}).strict();
const $69a0fb8bb890224f$export$88c08ece0d5f563d = (0, $3z62d$zod).object({
    relying_party: (0, $3z62d$zod).string().url().optional(),
    options: $69a0fb8bb890224f$export$1c8fd79a94eba09d
}).strict();
const $69a0fb8bb890224f$export$9bd14c1a22f65d2 = (0, $3z62d$zod).object({
    relying_party: (0, $3z62d$zod).string().url().optional(),
    authenticator_response: $69a0fb8bb890224f$export$49424bcfec0159aa
}).strict();
const $69a0fb8bb890224f$export$6f9781ad5a96bdcf = (0, $3z62d$zod).object({
    relying_party: (0, $3z62d$zod).string().url().optional(),
    authenticator_response: $69a0fb8bb890224f$export$49424bcfec0159aa
}).strict();
const $69a0fb8bb890224f$export$8525265affc59e4b = (0, $3z62d$zod).object({
    relying_party: (0, $3z62d$zod).string().url().optional(),
    challenge: (0, $3z62d$zod).string(),
    authenticator_response: $69a0fb8bb890224f$export$96203b761bf7cadb
}).strict();
const $69a0fb8bb890224f$export$1d32dd5b05e1d4dd = (0, $3z62d$zod).object({
    credential_id: (0, $3z62d$zod).string()
});


const $c43ea27f3e41dce1$export$2d6bddbbdba11994 = (0, $3z62d$zod).object({
    relying_party: (0, $3z62d$zod).string().url().optional()
}).strict();
const $c43ea27f3e41dce1$export$94c076e2d3cd7355 = (0, $3z62d$zod).object({
    options: (0, $69a0fb8bb890224f$export$7b01305e0ab33ea3)
}).strict();
const $c43ea27f3e41dce1$export$afc24607eeb5f33e = (0, $3z62d$zod).object({
    authenticator_response: (0, $69a0fb8bb890224f$export$96203b761bf7cadb),
    relying_party: (0, $3z62d$zod).string().url().optional()
}).strict();
const $c43ea27f3e41dce1$export$3c909b91f5e6545f = (0, $3z62d$zod).object({
    credential_ids: (0, $3z62d$zod).array((0, $3z62d$zod).string())
});


var $743ea2550daa8de4$exports = {};

$parcel$export($743ea2550daa8de4$exports, "MoonpayOnRampSignInput", () => $743ea2550daa8de4$export$6c475a9528377d79);
$parcel$export($743ea2550daa8de4$exports, "MoonpayOnRampSignResponse", () => $743ea2550daa8de4$export$2ce1205fd9aec915);


const $743ea2550daa8de4$var$PaymentMethod = (0, $3z62d$z).enum([
    "ach_bank_transfer",
    "credit_debit_card",
    "gbp_bank_transfer",
    "gbp_open_banking_payment",
    "mobile_wallet",
    "sepa_bank_transfer",
    "sepa_open_banking_payment",
    "pix_instant_payment",
    "yellow_card_bank_transfer"
]);
// Adapted from Moonpay's exact currency codes
const $743ea2550daa8de4$var$CurrencyCode = (0, $3z62d$z).enum([
    "AVAX_CCHAIN",
    "CELO_CELO",
    "CUSD_CELO",
    "DAI_ETHEREUM",
    "ETH_ETHEREUM",
    "ETH_ARBITRUM",
    "ETH_OPTIMISM",
    "ETH_POLYGON",
    "ETH_BASE",
    "FIL_FVM",
    "MATIC_ETHEREUM",
    "MATIC_POLYGON",
    "USDC_ETHEREUM",
    "USDC_ARBITRUM",
    "USDC_OPTIMISM",
    "USDC_POLYGON",
    "USDC_BASE",
    "USDT_ETHEREUM",
    "USDT_POLYGON",
    "WETH_POLYGON",
    "WBTC_ETHEREUM",
    "BNB_BNB",
    "BNB_BSC",
    // Transformed Privy Currency Codes
    "CELO",
    "CUSD",
    "DAI",
    "ETH",
    "FIL",
    "MATIC",
    "USDC",
    "USDT",
    "WETH",
    "WBTC"
]);
const $743ea2550daa8de4$var$MoonpayFiatOnRampConfigInput = (0, $3z62d$z).object({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    quoteCurrencyAmount: (0, $3z62d$z).number().optional(),
    email: (0, $cd63f1af6df0c007$export$5a6b8595f311cbb0).optional(),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    paymentMethod: $743ea2550daa8de4$var$PaymentMethod.optional(),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    uiConfig: (0, $3z62d$z).object({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        accentColor: (0, $3z62d$z).string().optional(),
        theme: (0, $3z62d$z).enum([
            "light",
            "dark"
        ]).optional()
    }).optional()
});
const $743ea2550daa8de4$var$MoonpayFiatOnRampEthereumInput = (0, $3z62d$z).object({
    address: (0, $cd63f1af6df0c007$export$e1ae011f7e31ddec),
    config: $743ea2550daa8de4$var$MoonpayFiatOnRampConfigInput.extend({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        currencyCode: $743ea2550daa8de4$var$CurrencyCode.transform((val)=>{
            switch(val){
                case "AVAX_CCHAIN":
                    return "AVAX_CCHAIN";
                case "CELO_CELO":
                    return "CELO";
                case "CUSD_CELO":
                    return "CUSD";
                case "DAI_ETHEREUM":
                    return "DAI";
                case "ETH_ETHEREUM":
                    return "ETH";
                case "ETH_ARBITRUM":
                    return "ETH_ARBITRUM";
                case "ETH_OPTIMISM":
                    return "ETH_OPTIMISM";
                case "ETH_POLYGON":
                    return "ETH_POLYGON";
                case "ETH_BASE":
                    return "ETH_BASE";
                case "FIL_FVM":
                    return "FIL";
                case "MATIC_ETHEREUM":
                    return "MATIC";
                case "MATIC_POLYGON":
                    return "MATIC_POLYGON";
                case "USDC_ETHEREUM":
                    return "USDC";
                case "USDC_ARBITRUM":
                    return "USDC_ARBITRUM";
                case "USDC_OPTIMISM":
                    return "USDC_OPTIMISM";
                case "USDC_POLYGON":
                    return "USDC_POLYGON";
                case "USDC_BASE":
                    return "USDC_BASE";
                case "USDT_ETHEREUM":
                    return "USDT";
                case "USDT_POLYGON":
                    return "USDT_POLYGON";
                case "WETH_POLYGON":
                    return "WETH";
                case "WBTC_ETHEREUM":
                    return "WBTC";
                case "BNB_BNB":
                    return "BNB";
                case "BNB_BSC":
                    return "BNB_BSC";
                // Transformed Privy Currency Codes
                case "CELO":
                case "CUSD":
                case "DAI":
                case "ETH":
                case "FIL":
                case "MATIC":
                case "USDC":
                case "USDT":
                case "WETH":
                case "WBTC":
                    return val;
                default:
                    throw new Error(`Invalid currency code: ${val}`);
            }
        }).optional()
    })
});
const $743ea2550daa8de4$var$MoonpayFiatOnRampSolanaInput = (0, $3z62d$z).object({
    address: (0, $cd63f1af6df0c007$export$a6c60903ce1c32fc),
    config: $743ea2550daa8de4$var$MoonpayFiatOnRampConfigInput.extend({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        currencyCode: (0, $3z62d$z).enum([
            "SOL",
            "USDC_SOL"
        ]).optional()
    })
});
const $743ea2550daa8de4$export$6c475a9528377d79 = (0, $3z62d$z).union([
    $743ea2550daa8de4$var$MoonpayFiatOnRampEthereumInput,
    $743ea2550daa8de4$var$MoonpayFiatOnRampSolanaInput
]).and((0, $3z62d$z).object({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    useSandbox: (0, $3z62d$z).boolean().optional().default(false)
}));
const $743ea2550daa8de4$export$2ce1205fd9aec915 = (0, $3z62d$z).object({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    signedUrl: (0, $3z62d$z).string(),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    externalTransactionId: (0, $3z62d$z).string()
});


var $a1655510be3aa817$exports = {};

$parcel$export($a1655510be3aa817$exports, "ExternalOAuthProvider", () => $a1655510be3aa817$export$16a6de659e03cb8c);
$parcel$export($a1655510be3aa817$exports, "OAuthProvider", () => $a1655510be3aa817$export$96d4e4cf27d59030);
$parcel$export($a1655510be3aa817$exports, "AuthenticateOauthInput", () => $a1655510be3aa817$export$3a815e8ae7821b6e);
$parcel$export($a1655510be3aa817$exports, "OAuthInitInput", () => $a1655510be3aa817$export$25d68298fd675d8b);
$parcel$export($a1655510be3aa817$exports, "LinkOAuthInput", () => $a1655510be3aa817$export$5169dcfff85dfbff);
$parcel$export($a1655510be3aa817$exports, "OAuthUnlinkInput", () => $a1655510be3aa817$export$100da24bb64f0e09);
$parcel$export($a1655510be3aa817$exports, "OAuthInitResponse", () => $a1655510be3aa817$export$98ade43b6adcef0b);
$parcel$export($a1655510be3aa817$exports, "OAuthLinkResponse", () => $a1655510be3aa817$export$ae2e7f22cae2163f);
$parcel$export($a1655510be3aa817$exports, "TransferOAuthInput", () => $a1655510be3aa817$export$259a6aeda60f92c3);
$parcel$export($a1655510be3aa817$exports, "SUPPORTED_OAUTH_PROVIDERS", () => $cc5a4e53c1cd130b$export$b5266d2768e29008);


// Casting as const makes it immutable.
const $cc5a4e53c1cd130b$export$b5266d2768e29008 = [
    "google",
    "discord",
    "twitter",
    "github",
    "spotify",
    "instagram",
    "tiktok",
    "linkedin",
    "apple"
];





const $a1655510be3aa817$export$16a6de659e03cb8c = (0, $3z62d$z).enum((0, $cc5a4e53c1cd130b$export$b5266d2768e29008), {
    invalid_type_error: "Please specify a supported provider.",
    required_error: "Please specify a supported provider."
});
const $a1655510be3aa817$export$96d4e4cf27d59030 = $a1655510be3aa817$export$16a6de659e03cb8c.or((0, $3z62d$z).custom((value)=>{
    return typeof value === "string" ? /^privy:[a-z0-9]{25}$/i.test(value) : false;
}, {
    message: "Please specify a supported provider."
}));
const $a1655510be3aa817$export$3a815e8ae7821b6e = (0, $3z62d$z).object({
    authorization_code: (0, $3z62d$z).string(),
    state_code: (0, $3z62d$z).string(),
    code_verifier: (0, $3z62d$z).string().min(43).max(128).optional(),
    code_type: (0, $3z62d$z).enum([
        "raw"
    ]).optional()
}).merge((0, $cd63f1af6df0c007$export$1d53282181ae94da)).catch(()=>{
    throw new (0, $3z62d$UnauthorizedError)("Please specify authorization_code and state_code.", (0, $3z62d$PrivyErrorCode).INVALID_CREDENTIALS);
});
const $a1655510be3aa817$export$25d68298fd675d8b = (0, $3z62d$z).object({
    redirect_to: (0, $3z62d$z).string({
        required_error: "Please provide a redirect_to value."
    }),
    provider: $a1655510be3aa817$export$96d4e4cf27d59030,
    token: (0, $3z62d$z).string().optional(),
    state_code: (0, $3z62d$z).string().optional(),
    code_challenge: (0, $3z62d$z).string().optional()
});
const $a1655510be3aa817$export$5169dcfff85dfbff = (0, $3z62d$z).object({
    authorization_code: (0, $3z62d$z).string(),
    state_code: (0, $3z62d$z).string(),
    code_verifier: (0, $3z62d$z).string().min(43).max(128).optional(),
    code_type: (0, $3z62d$z).enum([
        "raw"
    ]).optional()
});
const $a1655510be3aa817$export$100da24bb64f0e09 = (0, $3z62d$z).object({
    subject: (0, $3z62d$z).string(),
    provider: $a1655510be3aa817$export$96d4e4cf27d59030
});
const $a1655510be3aa817$export$98ade43b6adcef0b = (0, $3z62d$z).object({
    url: (0, $3z62d$z).string()
});
const $a1655510be3aa817$export$ae2e7f22cae2163f = (0, $d8cf89bca885903a$export$1f44aaf2ec115b54).extend({
    oauth_tokens: (0, $d8cf89bca885903a$export$fdfea991b75c2811).optional()
});
const $a1655510be3aa817$export$259a6aeda60f92c3 = (0, $9120aa9051938dbe$export$820fe5dd3e07cd33).extend({
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ userInfo: (0, $3z62d$z).object({
        subject: (0, $3z62d$z).string(),
        name: (0, $3z62d$z).string().optional(),
        username: (0, $3z62d$z).string().optional(),
        /* eslint-disable-next-line @typescript-eslint/naming-convention */ profilePictureUrl: (0, $3z62d$z).string().optional(),
        email: (0, $3z62d$z).string().optional().nullable(),
        /* eslint-disable-next-line @typescript-eslint/naming-convention */ vanityName: (0, $3z62d$z).string().optional()
    })
});


var $21fe323195bdda7f$exports = {};

$parcel$export($21fe323195bdda7f$exports, "AuthorizationCodeInput", () => $21fe323195bdda7f$export$b20be2048fbb4ed4);

const $21fe323195bdda7f$export$b20be2048fbb4ed4 = (0, $3z62d$z).object({
    redirect_to: (0, $3z62d$z).string(),
    state: (0, $3z62d$z).string(),
    code_challenge: (0, $3z62d$z).string()
});


var $fdca613bd10859b9$exports = {};

$parcel$export($fdca613bd10859b9$exports, "EmptyObject", () => $fdca613bd10859b9$export$2441567ff18621e0);
$parcel$export($fdca613bd10859b9$exports, "SuccessObject", () => $fdca613bd10859b9$export$8aed050e83c45a78);

const $fdca613bd10859b9$export$2441567ff18621e0 = (0, $3z62d$z).record((0, $3z62d$z).string(), (0, $3z62d$z).never());
const $fdca613bd10859b9$export$8aed050e83c45a78 = (0, $3z62d$z).object({
    success: (0, $3z62d$z).boolean()
});



var $e64ead081b284a70$exports = {};

$parcel$export($e64ead081b284a70$exports, "PolicyAction", () => $e64ead081b284a70$export$caca141f74b70633);
$parcel$export($e64ead081b284a70$exports, "Condition", () => $e64ead081b284a70$export$fcea0b2db26e6b18);
$parcel$export($e64ead081b284a70$exports, "Rule", () => $e64ead081b284a70$export$f1ff2a90c38ff669);
$parcel$export($e64ead081b284a70$exports, "PolicyWithoutRefinement", () => $e64ead081b284a70$export$c245a5cc5068498);
$parcel$export($e64ead081b284a70$exports, "OldPolicySchema", () => $e64ead081b284a70$export$86f9a84f969241f4);
$parcel$export($e64ead081b284a70$exports, "Policy", () => $e64ead081b284a70$export$40ee6f678dc3fb2e);
$parcel$export($e64ead081b284a70$exports, "PolicyResponse", () => $e64ead081b284a70$export$8e4ee22739746a51);
$parcel$export($e64ead081b284a70$exports, "PolicyIdFromPath", () => $e64ead081b284a70$export$42acce85b8458b03);
$parcel$export($e64ead081b284a70$exports, "UpdatePolicyInput", () => $e64ead081b284a70$export$b8f9d7b6ca76a8cf);



const $e64ead081b284a70$export$caca141f74b70633 = (0, $3z62d$z).enum([
    "ALLOW",
    "DENY"
]);
const $e64ead081b284a70$export$fcea0b2db26e6b18 = (0, $3z62d$z).object({
    /** The field's source (e.g. ethereum_transaction) */ field_source: (0, $3z62d$z).enum([
        "ethereum_transaction"
    ]),
    /** The field to compare in the condition */ field: (0, $3z62d$z).literal("to"),
    /** The operator to use */ operator: (0, $3z62d$z).union([
        (0, $3z62d$z).literal("eq"),
        (0, $3z62d$z).literal("in")
    ]),
    /** The value to compare */ value: (0, $3z62d$z).union([
        (0, $3z62d$z).string(),
        (0, $3z62d$z).array((0, $3z62d$z).string())
    ])
}).superRefine((condition, ctx)=>{
    // These validations are done at this level because they apply to all conditions and we do not need the context of what field_source, etc is being used
    if (condition.operator === "eq" && typeof condition.value !== "string") ctx.addIssue({
        path: [
            "value"
        ],
        code: (0, $3z62d$z).ZodIssueCode.custom,
        message: "Value must be a string for the `eq` operator"
    });
    if (condition.operator === "in" && !Array.isArray(condition.value)) ctx.addIssue({
        path: [
            "value"
        ],
        code: (0, $3z62d$z).ZodIssueCode.custom,
        message: "Value must be an array for the `in` operator"
    });
});
const $e64ead081b284a70$export$f1ff2a90c38ff669 = (0, $3z62d$z).object({
    /** The name of the rule */ name: (0, $3z62d$z).string().max(50, "Rule name must be fewer than 50 characters"),
    /** The conditions that must be true for the rule action to be applied */ conditions: (0, $3z62d$z).array($e64ead081b284a70$export$fcea0b2db26e6b18),
    /** The action to apply if the rule conditions are true */ action: $e64ead081b284a70$export$caca141f74b70633
});
const $e64ead081b284a70$var$PolicyMethod = (0, $3z62d$z).union([
    (0, $3z62d$z).literal("eth_sendTransaction"),
    (0, $3z62d$z).literal("eth_signTransaction")
]);
const $e64ead081b284a70$var$MethodRules = (0, $3z62d$z).object({
    method: $e64ead081b284a70$var$PolicyMethod,
    rules: (0, $3z62d$z).array($e64ead081b284a70$export$f1ff2a90c38ff669)
});
const $e64ead081b284a70$export$c245a5cc5068498 = (0, $3z62d$z).object({
    /** The policy schema version */ version: (0, $3z62d$z).literal("1.0"),
    /** The name of the policy */ name: (0, $3z62d$z).string().max(50, "Policy name must be fewer than 50 characters"),
    /** The chain type the policy applies to */ chain_type: (0, $3z62d$z).literal("ethereum"),
    /** The rules that apply to each method the policy covers, each method can only be specified once */ method_rules: (0, $3z62d$z).array($e64ead081b284a70$var$MethodRules),
    /** The default action to take if the request does not match the method or if no rules match for the request's method */ default_action: $e64ead081b284a70$export$caca141f74b70633
});
const $e64ead081b284a70$export$86f9a84f969241f4 = (0, $3z62d$z).object({
    /** The policy schema version */ version: (0, $3z62d$z).literal("1.0"),
    /** The name of the policy */ name: (0, $3z62d$z).string().max(50, "Policy name must be fewer than 50 characters"),
    /** The chain type the policy applies to */ chain_type: (0, $3z62d$z).literal("ethereum"),
    /** The method the policy applies to */ method: $e64ead081b284a70$var$PolicyMethod,
    /** The rules that define the policy */ rules: (0, $3z62d$z).array($e64ead081b284a70$export$f1ff2a90c38ff669),
    /** The default action to take if no rules match */ default_action: $e64ead081b284a70$export$caca141f74b70633
});
const $e64ead081b284a70$export$40ee6f678dc3fb2e = $e64ead081b284a70$export$c245a5cc5068498.superRefine((bp, ctx)=>{
    // TODO: currently this fails at the first error it sees, we could improve this by collecting all errors and returning them all to the client
    // TODO: once we support multiple chains, we'll also need to add a check here that the `method` is supported for the chain
    const methodSet = new Set(bp.method_rules.map((mr)=>mr.method));
    if (methodSet.size !== bp.method_rules.length) ctx.addIssue({
        path: [
            "method_rules"
        ],
        code: (0, $3z62d$z).ZodIssueCode.custom,
        message: "Each method can only be specified once"
    });
    // Next we need to validate all the policy conditions within each rule for each method, as the policy schema is permissive enough to allow
    // for any type of condition we support, but not all combinations of field_source, field, operator, and value are valid
    // These validations must be done at this level because we need the context of what field_source is being used
    for (const methodRule of bp.method_rules){
        for (const rule of methodRule.rules)for (const condition of rule.conditions)switch(condition.field_source){
            case "ethereum_transaction":
                if (condition.field_source !== "ethereum_transaction") ctx.addIssue({
                    path: [
                        "field_source"
                    ],
                    code: (0, $3z62d$z).ZodIssueCode.custom,
                    message: "Field source must be ethereum_transaction"
                });
                if (condition.field !== "to") ctx.addIssue({
                    path: [
                        "field"
                    ],
                    code: (0, $3z62d$z).ZodIssueCode.custom,
                    message: "Only the `to` field is supported for ethereum_transaction field source"
                });
                if (![
                    "eq",
                    "in"
                ].includes(condition.operator)) ctx.addIssue({
                    path: [
                        "operator"
                    ],
                    code: (0, $3z62d$z).ZodIssueCode.custom,
                    message: "Only the `eq` and `in` operators are supported for ethereum_transaction field source"
                });
                if (condition.field === "to") {
                    if (condition.operator === "eq" && typeof condition.value === "string") // Normalize a singular ethereum address
                    condition.value = (0, $cd63f1af6df0c007$export$e1ae011f7e31ddec).parse(condition.value);
                    else if (condition.operator === "in" && Array.isArray(condition.value)) // Normalize an array of ethereum addresses
                    condition.value = condition.value.map((address)=>(0, $cd63f1af6df0c007$export$e1ae011f7e31ddec).parse(address));
                }
                break;
            default:
                ctx.addIssue({
                    path: [
                        "field_source"
                    ],
                    code: (0, $3z62d$z).ZodIssueCode.custom,
                    message: "Invalid field source"
                });
        }
    }
});
const $e64ead081b284a70$export$8e4ee22739746a51 = $e64ead081b284a70$export$c245a5cc5068498.extend({
    id: (0, $3z62d$z).string(),
    created_at: (0, $3z62d$z).number()
});
const $e64ead081b284a70$export$42acce85b8458b03 = (0, $3z62d$z).object({
    policy_id: (0, $3z62d$z).string({
        required_error: "Policy ID must be provided",
        invalid_type_error: "Policy ID is not a valid string"
    }).min(1)
}).catch(({ error: error })=>{
    throw new (0, $3z62d$InvalidInputError)(error.message, (0, $3z62d$PrivyErrorCode).INVALID_DATA);
});
const $e64ead081b284a70$export$b8f9d7b6ca76a8cf = (0, $3z62d$z).object({
    name: (0, $3z62d$z).string().trim().min(1, "Name is required").max(50, "Policy name must be fewer than 50 characters").optional(),
    method_rules: (0, $3z62d$z).array($e64ead081b284a70$var$MethodRules).optional()
}).superRefine((input, ctx)=>{
    const isEmpty = Object.values(input).every((value)=>value == null);
    if (isEmpty) ctx.addIssue({
        code: "custom",
        message: "At least one field must be provided"
    });
});


var $8c18f111dab342b1$exports = {};

$parcel$export($8c18f111dab342b1$exports, "RecoveryKeyMaterialInput", () => $8c18f111dab342b1$export$5133f8b99ced310e);
$parcel$export($8c18f111dab342b1$exports, "RecoveryKeyMaterialResponse", () => $8c18f111dab342b1$export$52cacd413024ecd);
$parcel$export($8c18f111dab342b1$exports, "OAuthAuthenticateRecoveryResponse", () => $8c18f111dab342b1$export$8d23e6b066801647);
$parcel$export($8c18f111dab342b1$exports, "OAuthInitRecoveryInput", () => $8c18f111dab342b1$export$eb513813549270a);
$parcel$export($8c18f111dab342b1$exports, "OAuthInitICloudRecoveryInput", () => $8c18f111dab342b1$export$425e6a14ed44c52f);
$parcel$export($8c18f111dab342b1$exports, "OAuthCallbackICloudExpoInput", () => $8c18f111dab342b1$export$bec1efaa57e00983);
$parcel$export($8c18f111dab342b1$exports, "OAuthCallbackICloudExpoResponse", () => $8c18f111dab342b1$export$ea90bf451d6cb856);
$parcel$export($8c18f111dab342b1$exports, "RecoveryConfigurationICloudInput", () => $8c18f111dab342b1$export$dfb75001bba12cf3);
$parcel$export($8c18f111dab342b1$exports, "RecoveryConfigurationICloudResponse", () => $8c18f111dab342b1$export$a53156909e5ca052);



const $8c18f111dab342b1$export$5133f8b99ced310e = (0, $3z62d$z).object({
    chain_type: (0, $3z62d$z).string().optional()
});
const $8c18f111dab342b1$export$52cacd413024ecd = (0, $3z62d$z).object({
    recovery_type: (0, $3z62d$z).enum([
        "user_passcode_derived_recovery_key",
        "privy_passcode_derived_recovery_key",
        "privy_generated_recovery_key",
        "google_drive_recovery_secret",
        "icloud_recovery_secret"
    ]),
    recovery_key_derivation_salt: (0, $3z62d$z).string(),
    recovery_code: (0, $3z62d$z).string(),
    recovery_key: (0, $3z62d$z).string(),
    file_id: (0, $3z62d$z).string(),
    icloud_record_name: (0, $3z62d$z).string()
});
const $8c18f111dab342b1$export$8d23e6b066801647 = (0, $3z62d$z).object({
    access_token: (0, $3z62d$z).string()
});
const $8c18f111dab342b1$export$eb513813549270a = (0, $3z62d$z).object({
    redirect_to: (0, $3z62d$z).string({
        required_error: "Please provide a redirect_to value."
    }),
    token: (0, $3z62d$z).string().optional(),
    state_code: (0, $3z62d$z).string().optional(),
    code_challenge: (0, $3z62d$z).string().optional()
});
const $8c18f111dab342b1$export$425e6a14ed44c52f = (0, $3z62d$z).object({
    client_type: (0, $3z62d$z).enum([
        "web",
        "expo-ios"
    ])
});
const $8c18f111dab342b1$export$bec1efaa57e00983 = (0, $3z62d$z).object({
    /**
     * The authorization code from apple
     */ /* eslint-disable-next-line @typescript-eslint/naming-convention */ ckWebAuthToken: (0, $3z62d$z).string()
}).transform((input)=>({
        /* eslint-disable-next-line @typescript-eslint/naming-convention */ ckWebAuthToken: input.ckWebAuthToken
    })).catch(()=>{
    throw new (0, $3z62d$UnauthorizedError)("Missing ckWebAuthToken.", (0, $3z62d$PrivyErrorCode).INVALID_DATA);
});
const $8c18f111dab342b1$export$ea90bf451d6cb856 = (0, $fdca613bd10859b9$export$2441567ff18621e0);
const $8c18f111dab342b1$export$dfb75001bba12cf3 = (0, $3z62d$z).object({
    client_type: (0, $3z62d$z).enum([
        "web",
        "expo-ios"
    ])
});
const $8c18f111dab342b1$export$a53156909e5ca052 = (0, $3z62d$z).object({
    api_token: (0, $3z62d$z).string(),
    container_identifier: (0, $3z62d$z).string(),
    environment: (0, $3z62d$z).string()
});


var $88c861fe63372cd3$exports = {};

$parcel$export($88c861fe63372cd3$exports, "SiweInput", () => $88c861fe63372cd3$export$1c8c55e22e1d8d9);
$parcel$export($88c861fe63372cd3$exports, "SmartWalletSiweInput", () => $88c861fe63372cd3$export$1317218caaacf800);
$parcel$export($88c861fe63372cd3$exports, "AuthenticateSiweInput", () => $88c861fe63372cd3$export$3435c4883fbaeb7f);
$parcel$export($88c861fe63372cd3$exports, "SiweAddressInput", () => $88c861fe63372cd3$export$b5b65f417dc17888);
$parcel$export($88c861fe63372cd3$exports, "SiweInitInput", () => $88c861fe63372cd3$export$6c957bbdcf62135c);
$parcel$export($88c861fe63372cd3$exports, "SiweNonce", () => $88c861fe63372cd3$export$8535d2f477730820);
$parcel$export($88c861fe63372cd3$exports, "TransferSiweInput", () => $88c861fe63372cd3$export$c072e3bc69534ade);




const $88c861fe63372cd3$export$1c8c55e22e1d8d9 = (0, $3z62d$z).object({
    message: (0, $3z62d$z).string({
        invalid_type_error: "Invalid SIWE message"
    }),
    signature: (0, $3z62d$z).string({
        invalid_type_error: "Invalid SIWE signature"
    }),
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ chainId: (0, $3z62d$z).string().max(41).nullable().default(null),
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ walletClientType: (0, $3z62d$z).string().max(64).nullable().default(null),
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ connectorType: (0, $3z62d$z).string().max(64).nullable().default(null)
});
const $88c861fe63372cd3$export$1317218caaacf800 = (0, $3z62d$z).object({
    message: (0, $3z62d$z).string({
        invalid_type_error: "Invalid SIWE message"
    }),
    signature: (0, $3z62d$z).string({
        invalid_type_error: "Invalid SIWE signature"
    }),
    smart_wallet_type: (0, $1aadd0fe5ffa17b5$export$96b3537f43197348)
});
const $88c861fe63372cd3$export$3435c4883fbaeb7f = $88c861fe63372cd3$export$1c8c55e22e1d8d9.merge((0, $cd63f1af6df0c007$export$1d53282181ae94da));
const $88c861fe63372cd3$export$b5b65f417dc17888 = (0, $3z62d$z).object({
    address: (0, $cd63f1af6df0c007$export$e1ae011f7e31ddec)
});
const $88c861fe63372cd3$export$6c957bbdcf62135c = (0, $3z62d$z).object({
    address: (0, $cd63f1af6df0c007$export$e1ae011f7e31ddec),
    token: (0, $3z62d$z).string().optional()
});
const $88c861fe63372cd3$export$8535d2f477730820 = (0, $3z62d$z).object({
    nonce: (0, $3z62d$z).string(),
    address: (0, $3z62d$z).string(),
    expires_at: (0, $3z62d$z).string()
});
const $88c861fe63372cd3$export$c072e3bc69534ade = (0, $9120aa9051938dbe$export$820fe5dd3e07cd33).extend({
    address: (0, $cd63f1af6df0c007$export$e1ae011f7e31ddec),
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ chainId: (0, $3z62d$z).string().max(41).nullable().default(null),
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ walletClientType: (0, $3z62d$z).string().max(64).nullable().default(null),
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ connectorType: (0, $3z62d$z).string().max(64).nullable().default(null)
});


var $ed7b6c91dc59ac8d$exports = {};

$parcel$export($ed7b6c91dc59ac8d$exports, "SiwsInput", () => $ed7b6c91dc59ac8d$export$fa2883d1fd7d2f4d);
$parcel$export($ed7b6c91dc59ac8d$exports, "AuthenticateSiwsInput", () => $ed7b6c91dc59ac8d$export$defac42dc31eb54f);
$parcel$export($ed7b6c91dc59ac8d$exports, "SiwsAddressInput", () => $ed7b6c91dc59ac8d$export$767d61e052aa619c);
$parcel$export($ed7b6c91dc59ac8d$exports, "SiwsInitInput", () => $ed7b6c91dc59ac8d$export$334006f5cf1e2e10);
$parcel$export($ed7b6c91dc59ac8d$exports, "SiwsNonce", () => $ed7b6c91dc59ac8d$export$678e538743698961);


const $ed7b6c91dc59ac8d$export$fa2883d1fd7d2f4d = (0, $3z62d$z).object({
    message: (0, $3z62d$z).string({
        invalid_type_error: "Invalid SIWS message"
    }),
    signature: (0, $3z62d$z).string({
        invalid_type_error: "Invalid SIWS signature"
    }),
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ walletClientType: (0, $3z62d$z).string().max(64).nullable().default(null),
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ connectorType: (0, $3z62d$z).string().max(64).nullable().default(null)
});
const $ed7b6c91dc59ac8d$export$defac42dc31eb54f = $ed7b6c91dc59ac8d$export$fa2883d1fd7d2f4d.merge((0, $cd63f1af6df0c007$export$1d53282181ae94da));
const $ed7b6c91dc59ac8d$export$767d61e052aa619c = (0, $3z62d$z).object({
    address: (0, $cd63f1af6df0c007$export$a6c60903ce1c32fc)
});
const $ed7b6c91dc59ac8d$export$334006f5cf1e2e10 = (0, $3z62d$z).object({
    address: (0, $cd63f1af6df0c007$export$a6c60903ce1c32fc),
    token: (0, $3z62d$z).string().optional()
});
const $ed7b6c91dc59ac8d$export$678e538743698961 = (0, $3z62d$z).object({
    nonce: (0, $3z62d$z).string(),
    address: (0, $3z62d$z).string(),
    expires_at: (0, $3z62d$z).string()
});


var $81e03de001ba4005$exports = {};

$parcel$export($81e03de001ba4005$exports, "VerifyPhoneInput", () => $81e03de001ba4005$export$1bbb8302b8922d52);
$parcel$export($81e03de001ba4005$exports, "AuthenticatePhoneInput", () => $81e03de001ba4005$export$d57783821ffbf377);
$parcel$export($81e03de001ba4005$exports, "PasswordlessSmsPhoneInput", () => $81e03de001ba4005$export$794b219acd817434);
$parcel$export($81e03de001ba4005$exports, "UnlinkPhoneInput", () => $81e03de001ba4005$export$63fc94c9f0d4eea8);
$parcel$export($81e03de001ba4005$exports, "UpdatePhoneInput", () => $81e03de001ba4005$export$bbf6b1d1316adec);
$parcel$export($81e03de001ba4005$exports, "TransferPhoneInput", () => $81e03de001ba4005$export$c7b05f9abdd2e9cc);




const $81e03de001ba4005$export$1bbb8302b8922d52 = (0, $3z62d$z).object({
    code: (0, $cd63f1af6df0c007$export$6051224a4b788b5f).catch(()=>{
        throw new (0, $3z62d$LegacyInvalidInputError)("Invalid SMS verification code", (0, $3z62d$PrivyErrorCode).INVALID_CREDENTIALS);
    }),
    // Not a mistake, it's actually camelCase
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ phoneNumber: (0, $cd63f1af6df0c007$export$3d623a7758cab61e).catch(()=>{
        throw new (0, $3z62d$LegacyInvalidInputError)("Invalid phone number", (0, $3z62d$PrivyErrorCode).INVALID_CREDENTIALS);
    })
});
const $81e03de001ba4005$export$d57783821ffbf377 = $81e03de001ba4005$export$1bbb8302b8922d52.merge((0, $cd63f1af6df0c007$export$1d53282181ae94da));
const $81e03de001ba4005$export$794b219acd817434 = (0, $3z62d$z).object({
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ phoneNumber: (0, $cd63f1af6df0c007$export$3d623a7758cab61e).catch(()=>{
        throw new (0, $3z62d$LegacyInvalidInputError)("Invalid phone number, not formatted correctly", (0, $3z62d$PrivyErrorCode).INVALID_DATA);
    }),
    token: (0, $3z62d$z).string().optional()
});
const $81e03de001ba4005$export$63fc94c9f0d4eea8 = (0, $3z62d$z).object({
    // Not a mistake, it's actually camelCase
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ phoneNumber: (0, $cd63f1af6df0c007$export$3d623a7758cab61e)
});
const $81e03de001ba4005$export$bbf6b1d1316adec = (0, $3z62d$z).object({
    old_phone_number: (0, $cd63f1af6df0c007$export$3d623a7758cab61e),
    new_phone_number: (0, $cd63f1af6df0c007$export$3d623a7758cab61e),
    code: (0, $cd63f1af6df0c007$export$6051224a4b788b5f)
});
const $81e03de001ba4005$export$c7b05f9abdd2e9cc = (0, $9120aa9051938dbe$export$820fe5dd3e07cd33).extend({
    /* eslint-disable-next-line @typescript-eslint/naming-convention */ phoneNumber: (0, $cd63f1af6df0c007$export$3d623a7758cab61e)
});



var $95be9d600865bb8f$exports = {};

$parcel$export($95be9d600865bb8f$exports, "TelegramAuthResult", () => $95be9d600865bb8f$export$5fae4cf22073ac85);
$parcel$export($95be9d600865bb8f$exports, "TelegramWebAppData", () => $95be9d600865bb8f$export$4ce98ed8f8cad76d);
$parcel$export($95be9d600865bb8f$exports, "TelegramAuthenticateInput", () => $95be9d600865bb8f$export$fb9405d8cbdd092d);
$parcel$export($95be9d600865bb8f$exports, "TelegramLinkInput", () => $95be9d600865bb8f$export$303a24e5db03ece6);
$parcel$export($95be9d600865bb8f$exports, "TelegramUnlinkInput", () => $95be9d600865bb8f$export$aad710dcc06a76fc);
$parcel$export($95be9d600865bb8f$exports, "TransferTelegramInput", () => $95be9d600865bb8f$export$835d5d8163cea1a1);



const $95be9d600865bb8f$export$5fae4cf22073ac85 = (0, $3z62d$zod).object({
    id: (0, $3z62d$zod).coerce.number(),
    first_name: (0, $3z62d$zod).string(),
    auth_date: (0, $3z62d$zod).coerce.number(),
    hash: (0, $3z62d$zod).string(),
    username: (0, $3z62d$zod).string().optional(),
    last_name: (0, $3z62d$zod).string().optional(),
    photo_url: (0, $3z62d$zod).string().optional()
});
const $95be9d600865bb8f$export$4ce98ed8f8cad76d = (0, $3z62d$zod).object({
    // query id provided by Telegram. It's present when logging in from a chat button but it's not when logging in from a direct link to the mini-app
    query_id: (0, $3z62d$zod).string().optional(),
    // This is the timestamp the auth result was verified at, in seconds from epoch
    auth_date: (0, $3z62d$zod).coerce.number(),
    // hash provided by Telegram to verify the payload is authentic
    hash: (0, $3z62d$zod).string(),
    // user data provided by Telegram, it is a JSON string with a shape similar to TelegramAuthResult
    user: (0, $3z62d$zod).string(),
    // chat instance provided by Telegram. It's present when logging in from a direct link to the mini-app but not when logging in from a chat button
    chat_instance: (0, $3z62d$zod).string().optional(),
    // chat type provided by Telegram. It's present when logging in from a direct link to the mini-app but not when logging in from a chat button
    chat_type: (0, $3z62d$zod).string().optional(),
    // start param provided by Telegram. It's present when logging in from a direct link to the mini-app but not when logging in from a chat button
    start_param: (0, $3z62d$zod).string().optional(),
    // signature provided by Telegram
    signature: (0, $3z62d$zod).string().optional()
});
const $95be9d600865bb8f$export$fb9405d8cbdd092d = (0, $3z62d$zod).object({
    captcha_token: (0, $3z62d$zod).string().optional(),
    telegram_auth_result: $95be9d600865bb8f$export$5fae4cf22073ac85.optional(),
    telegram_web_app_data: $95be9d600865bb8f$export$4ce98ed8f8cad76d.optional()
}).merge((0, $cd63f1af6df0c007$export$1d53282181ae94da));
const $95be9d600865bb8f$export$303a24e5db03ece6 = $95be9d600865bb8f$export$fb9405d8cbdd092d;
const $95be9d600865bb8f$export$aad710dcc06a76fc = (0, $3z62d$zod).object({
    telegram_user_id: (0, $3z62d$zod).string()
});
const $95be9d600865bb8f$export$835d5d8163cea1a1 = (0, $9120aa9051938dbe$export$820fe5dd3e07cd33).extend({
    telegram_auth_result: $95be9d600865bb8f$export$5fae4cf22073ac85.optional(),
    telegram_web_app_data: $95be9d600865bb8f$export$4ce98ed8f8cad76d.optional()
});


var $210eda2272406f20$exports = {};

$parcel$export($210eda2272406f20$exports, "RefreshTokenInput", () => $210eda2272406f20$export$6aa3af8166ea5386);
$parcel$export($210eda2272406f20$exports, "OptionalRefreshTokenInput", () => $210eda2272406f20$export$3ea9bae16087a241);
$parcel$export($210eda2272406f20$exports, "ForkedToken", () => $210eda2272406f20$export$874b0538e4f42518);

const $210eda2272406f20$export$6aa3af8166ea5386 = (0, $3z62d$z).object({
    refresh_token: (0, $3z62d$z).string()
});
const $210eda2272406f20$export$3ea9bae16087a241 = $210eda2272406f20$export$6aa3af8166ea5386.partial();
const $210eda2272406f20$export$874b0538e4f42518 = (0, $3z62d$z).object({
    token: (0, $3z62d$z).string(),
    refresh_token: (0, $3z62d$z).string(),
    new_session_refresh_token: (0, $3z62d$z).string()
});



var $a3f3fb49e367cffa$exports = {};

$parcel$export($a3f3fb49e367cffa$exports, "CAIP2", () => $a3f3fb49e367cffa$export$3e5f628c87c944ea);
$parcel$export($a3f3fb49e367cffa$exports, "AuthorizationKeyRole", () => $a3f3fb49e367cffa$export$e00d5c89c01be30a);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiSolanaSignTransactionRpcInput", () => $a3f3fb49e367cffa$export$8e148d8e0fa27f14);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiSolanaSignAndSendTransactionRpcInput", () => $a3f3fb49e367cffa$export$9b59b888d99d2b7);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiSolanaSignMessageRpcInput", () => $a3f3fb49e367cffa$export$97fa15d15442509a);
$parcel$export($a3f3fb49e367cffa$exports, "UnsignedEthereumTransaction", () => $a3f3fb49e367cffa$export$4dd5c56c048ca51c);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiEthereumSignTransactionRpcInput", () => $a3f3fb49e367cffa$export$6d6b46e54d62b80f);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiEthereumSendTransactionRpcInput", () => $a3f3fb49e367cffa$export$6a1a144657f01857);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiEthereumPersonalSignRpcInputParams", () => $a3f3fb49e367cffa$export$47e0aa7143de6eba);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiEthereumPersonalSignRpcInput", () => $a3f3fb49e367cffa$export$b1c3bd1406731d97);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiEthereumSignTypedDataRpcInput", () => $a3f3fb49e367cffa$export$c4aa7e4bbb51693f);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiEthereumRpcInput", () => $a3f3fb49e367cffa$export$86729abbdf3cb00d);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiSolanaRpcInput", () => $a3f3fb49e367cffa$export$56c132d7290bb7ea);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiRpcInput", () => $a3f3fb49e367cffa$export$a965e12848db29a7);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiSolanaSignTransactionRpcResponse", () => $a3f3fb49e367cffa$export$310e1d354b294aac);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiSolanaSignAndSendTransactionRpcResponse", () => $a3f3fb49e367cffa$export$1aae029e61aa62e3);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiSolanaSignMessageRpcResponse", () => $a3f3fb49e367cffa$export$261cb1d601edd7b1);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiEthereumSignTransactionRpcResponse", () => $a3f3fb49e367cffa$export$2f7b6ef5cdff0e98);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiEthereumSendTransactionRpcResponse", () => $a3f3fb49e367cffa$export$c62c1852c4cb6e04);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiEthereumPersonalSignRpcResponse", () => $a3f3fb49e367cffa$export$f31262cd6c9b0637);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiEthereumSignTypedDataRpcResponse", () => $a3f3fb49e367cffa$export$21a19a0ce9a88106);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiRpcResponse", () => $a3f3fb49e367cffa$export$e53e6185409931b0);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiRegisterAuthorizationKeyInput", () => $a3f3fb49e367cffa$export$1022a916e1be96e);
$parcel$export($a3f3fb49e367cffa$exports, "WalletResponse", () => $a3f3fb49e367cffa$export$9f7c9fccce46ad2a);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiCreateInput", () => $a3f3fb49e367cffa$export$ccfd4ef2d9850a86);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiCreateResponse", () => $a3f3fb49e367cffa$export$7041defd4179afea);
$parcel$export($a3f3fb49e367cffa$exports, "WalletIdFromPath", () => $a3f3fb49e367cffa$export$690ece09e17200e1);
$parcel$export($a3f3fb49e367cffa$exports, "WalletApiRevokeAuthorizationKeyInput", () => $a3f3fb49e367cffa$export$255e70f0df8a680a);
$parcel$export($a3f3fb49e367cffa$exports, "AuthorizationKey", () => $a3f3fb49e367cffa$export$9465dc060ac9c626);
$parcel$export($a3f3fb49e367cffa$exports, "WalletsSearchInput", () => $a3f3fb49e367cffa$export$fc58525428fff10b);
$parcel$export($a3f3fb49e367cffa$exports, "WalletUpdateInput", () => $a3f3fb49e367cffa$export$df3cb5ed53755486);




const $a3f3fb49e367cffa$export$3e5f628c87c944ea = (0, $3z62d$z).string().regex(// regex from the spec https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-2.md#specification
/^[-a-z0-9]{3,8}:[-_a-zA-Z0-9]{1,32}$/, "Chain ID must be a valid CAIP-2 chain ID, e.g. 'eip155:1'");
const $a3f3fb49e367cffa$var$BaseSolanaRpcInput = (0, $3z62d$z).object({
    /** Address of the wallet. */ address: (0, $cd63f1af6df0c007$export$a6c60903ce1c32fc).optional(),
    /** Chain type of the wallet. */ chain_type: (0, $3z62d$z).literal("solana").optional()
});
const $a3f3fb49e367cffa$var$BaseEthereumRpcInput = (0, $3z62d$z).object({
    /** Address of the wallet. */ address: (0, $cd63f1af6df0c007$export$e1ae011f7e31ddec).optional(),
    /** Chain type of the wallet. */ chain_type: (0, $3z62d$z).literal("ethereum").optional()
});
const $a3f3fb49e367cffa$export$e00d5c89c01be30a = (0, $3z62d$z).enum([
    "root",
    "manager"
]).nullable();
const $a3f3fb49e367cffa$export$8e148d8e0fa27f14 = (0, $3z62d$z).object({
    /** RPC method to execute with the wallet. */ method: (0, $3z62d$z).literal("signTransaction"),
    /** Parameters for the RPC method.  */ params: (0, $3z62d$z).object({
        /** Serialized transaction object to sign with the wallet. Must be encoded per the scheme in `encoding`. */ transaction: (0, $3z62d$z).string(),
        /** Encoding scheme for the transaction. */ encoding: (0, $3z62d$z).literal("base64")
    })
}).merge($a3f3fb49e367cffa$var$BaseSolanaRpcInput);
const $a3f3fb49e367cffa$export$9b59b888d99d2b7 = (0, $3z62d$z).object({
    /** RPC method to execute with the wallet. */ method: (0, $3z62d$z).literal("signAndSendTransaction"),
    /** The CAIP-2 chain id to send the transaction on. */ caip2: $a3f3fb49e367cffa$export$3e5f628c87c944ea,
    /** Parameters for the RPC method.  */ params: (0, $3z62d$z).object({
        /** Serialized transaction object to sign and send with the wallet. Must be encoded per the scheme in `encoding`. */ transaction: (0, $3z62d$z).string(),
        /** Encoding scheme for the transaction. */ encoding: (0, $3z62d$z).literal("base64")
    })
}).merge($a3f3fb49e367cffa$var$BaseSolanaRpcInput);
const $a3f3fb49e367cffa$export$97fa15d15442509a = (0, $3z62d$z).object({
    /** RPC method to execute with the wallet. */ method: (0, $3z62d$z).literal("signMessage"),
    /** Parameters for the RPC method.  */ params: (0, $3z62d$z).object({
        /** Message to sign with the wallet. Must be encoded per the scheme in `encoding`. */ message: (0, $3z62d$z).string(),
        /** Encoding scheme for the message. */ encoding: (0, $3z62d$z).literal("base64")
    })
}).merge($a3f3fb49e367cffa$var$BaseSolanaRpcInput);
const $a3f3fb49e367cffa$var$Hex = (0, $3z62d$z).string().startsWith("0x");
const $a3f3fb49e367cffa$var$Quantity = (0, $3z62d$z).union([
    $a3f3fb49e367cffa$var$Hex,
    (0, $3z62d$z).number()
]);
const $a3f3fb49e367cffa$export$4dd5c56c048ca51c = (0, $3z62d$z).object({
    /** The address the transaction is sent from. Must be hexadecimal formatted. */ from: (0, $cd63f1af6df0c007$export$e1ae011f7e31ddec).optional(),
    /** Destination address of the transaction. */ to: (0, $cd63f1af6df0c007$export$e1ae011f7e31ddec).optional(),
    /** The chain ID of network your transaction will  be sent on (hexadecimal or number). */ chain_id: $a3f3fb49e367cffa$var$Quantity.optional(),
    /** (optional) The nonce to be used for the transaction (hexadecimal or number). */ nonce: $a3f3fb49e367cffa$var$Quantity.optional(),
    /** (optional) Data to send to the receiving address, especially when calling smart contracts. Must be hexadecimal formatted. */ data: $a3f3fb49e367cffa$var$Hex.optional(),
    /** (optional) The value (in wei) be sent with the transaction (hexadecimal or number). */ value: $a3f3fb49e367cffa$var$Quantity.optional(),
    /** (optional) The EIP-2718 transction type (e.g. `2` for EIP-1559 transactions). */ type: (0, $3z62d$z).union([
        (0, $3z62d$z).literal(0),
        (0, $3z62d$z).literal(1),
        (0, $3z62d$z).literal(2)
    ]).optional(),
    /** (optional) The max units of gas that can be used by this transaction (hexadecimal or number). */ gas_limit: $a3f3fb49e367cffa$var$Quantity.optional(),
    /** (optional) The price (in wei) per unit of gas for this transaction (hexadecimal or number), for use in non EIP-1559 transactions (type 0 or 1). */ gas_price: $a3f3fb49e367cffa$var$Quantity.optional(),
    /** (optional) The maxFeePerGas (hexadecimal or number) to be used in this transaction, for use in EIP-1559 (type 2) transactions. */ max_fee_per_gas: $a3f3fb49e367cffa$var$Quantity.optional(),
    /** (optional) The maxPriorityFeePerGas (hexadecimal or number) to be used in this transaction, for use in EIP-1559 (type 2) transactions. */ max_priority_fee_per_gas: $a3f3fb49e367cffa$var$Quantity.optional()
});
const $a3f3fb49e367cffa$export$6d6b46e54d62b80f = (0, $3z62d$z).object({
    /** RPC method to execute with the wallet. */ method: (0, $3z62d$z).literal("eth_signTransaction"),
    /** Parameters for the RPC method.  */ params: (0, $3z62d$z).object({
        /** Transaction object to sign with the wallet. */ transaction: $a3f3fb49e367cffa$export$4dd5c56c048ca51c
    })
}).merge($a3f3fb49e367cffa$var$BaseEthereumRpcInput);
const $a3f3fb49e367cffa$export$6a1a144657f01857 = (0, $3z62d$z).object({
    /** RPC method to execute with the wallet. */ method: (0, $3z62d$z).literal("eth_sendTransaction"),
    /** The CAIP-2 chain id to send the transaction on. */ caip2: $a3f3fb49e367cffa$export$3e5f628c87c944ea,
    /** Parameters for the RPC method.  */ params: (0, $3z62d$z).object({
        /** Transaction object to sign with the wallet. */ transaction: $a3f3fb49e367cffa$export$4dd5c56c048ca51c
    })
}).merge($a3f3fb49e367cffa$var$BaseEthereumRpcInput);
const $a3f3fb49e367cffa$export$47e0aa7143de6eba = (0, $3z62d$z).object({
    /** Message to sign with the wallet. Must be encoded per the scheme in `encoding`. */ message: (0, $3z62d$z).string(),
    /** Encoding scheme for the message (utf-8 for plaintext, hex for raw bytes). */ encoding: (0, $3z62d$z).union([
        (0, $3z62d$z).literal("utf-8"),
        (0, $3z62d$z).literal("hex")
    ])
});
const $a3f3fb49e367cffa$export$b1c3bd1406731d97 = (0, $3z62d$z).object({
    /** RPC method to execute with the wallet. */ method: (0, $3z62d$z).literal("personal_sign"),
    /** Parameters for the RPC method.  */ params: $a3f3fb49e367cffa$export$47e0aa7143de6eba
}).merge($a3f3fb49e367cffa$var$BaseEthereumRpcInput);
const $a3f3fb49e367cffa$export$c4aa7e4bbb51693f = (0, $3z62d$z).object({
    /** RPC method to execute with the wallet. */ method: (0, $3z62d$z).literal("eth_signTypedData_v4"),
    /** Parameters for the RPC method.  */ params: (0, $3z62d$z).object({
        /** The JSON typed data to sign with the wallet. */ typed_data: (0, $3z62d$z).object({
            domain: (0, $3z62d$z).record((0, $3z62d$z).string(), (0, $3z62d$z).any()),
            types: (0, $3z62d$z).record((0, $3z62d$z).string(), (0, $3z62d$z).any()),
            message: (0, $3z62d$z).record((0, $3z62d$z).string(), (0, $3z62d$z).any()),
            primary_type: (0, $3z62d$z).string()
        })
    })
}).merge($a3f3fb49e367cffa$var$BaseEthereumRpcInput);
const $a3f3fb49e367cffa$export$86729abbdf3cb00d = (0, $3z62d$z).discriminatedUnion("method", [
    $a3f3fb49e367cffa$export$6d6b46e54d62b80f,
    $a3f3fb49e367cffa$export$6a1a144657f01857,
    $a3f3fb49e367cffa$export$b1c3bd1406731d97,
    $a3f3fb49e367cffa$export$c4aa7e4bbb51693f
]);
const $a3f3fb49e367cffa$export$56c132d7290bb7ea = (0, $3z62d$z).discriminatedUnion("method", [
    $a3f3fb49e367cffa$export$8e148d8e0fa27f14,
    $a3f3fb49e367cffa$export$9b59b888d99d2b7,
    $a3f3fb49e367cffa$export$97fa15d15442509a
]);
const $a3f3fb49e367cffa$export$a965e12848db29a7 = (0, $3z62d$z).union([
    $a3f3fb49e367cffa$export$86729abbdf3cb00d,
    $a3f3fb49e367cffa$export$56c132d7290bb7ea
]);
const $a3f3fb49e367cffa$export$310e1d354b294aac = (0, $3z62d$z).object({
    /** RPC method executed by the wallet */ method: (0, $3z62d$z).literal("signTransaction"),
    /** Data returned by the RPC method. */ data: (0, $3z62d$z).object({
        /** Signature produced by the wallet. */ signed_transaction: (0, $3z62d$z).string(),
        /** Encoding of the signature */ encoding: (0, $3z62d$z).literal("base64")
    })
});
const $a3f3fb49e367cffa$export$1aae029e61aa62e3 = (0, $3z62d$z).object({
    /** RPC method executed by the wallet */ method: (0, $3z62d$z).literal("signAndSendTransaction"),
    /** Data returned by the RPC method. */ data: (0, $3z62d$z).object({
        // TODO: add back ID once we store in the database
        // /** A Privy-assigned id for the sent transaction. */
        // id: z.string(),
        /** Blockchain hash of the sent transaction. */ hash: (0, $3z62d$z).string(),
        /** The CAIP-2 chain id the transaction was sent on. */ caip2: $a3f3fb49e367cffa$export$3e5f628c87c944ea
    }).optional(),
    /** Error object returned by the RPC method. */ error: (0, $3z62d$z).object({
        /** Error code */ code: (0, $3z62d$z).string(),
        /** Error message */ message: (0, $3z62d$z).string()
    }).optional()
});
const $a3f3fb49e367cffa$export$261cb1d601edd7b1 = (0, $3z62d$z).object({
    /** RPC method executed by the wallet */ method: (0, $3z62d$z).literal("signMessage"),
    /** Data returned by the RPC method. */ data: (0, $3z62d$z).object({
        /** Signature produced by the wallet. */ signature: (0, $3z62d$z).string(),
        /** Encoding of the signature */ encoding: (0, $3z62d$z).literal("base64")
    })
});
const $a3f3fb49e367cffa$export$2f7b6ef5cdff0e98 = (0, $3z62d$z).object({
    /** RPC method executed by the wallet */ method: (0, $3z62d$z).literal("eth_signTransaction"),
    /** Data returned by the RPC method. */ data: (0, $3z62d$z).object({
        /** Signature produced by the wallet. */ signed_transaction: (0, $3z62d$z).string(),
        /** Encoding of the signed transaction */ encoding: (0, $3z62d$z).literal("rlp")
    })
});
const $a3f3fb49e367cffa$export$c62c1852c4cb6e04 = (0, $3z62d$z).object({
    /** RPC method executed by the wallet */ method: (0, $3z62d$z).literal("eth_sendTransaction"),
    /** Data returned by the RPC method. */ data: (0, $3z62d$z).object({
        // TODO: add back ID once we store in the database
        // /** A Privy-assigned id for the sent transaction. */
        // id: z.string(),
        /** Blockchain hash of the sent transaction. */ hash: (0, $3z62d$z).string(),
        /** The CAIP-2 chain id the transaction was sent on. */ caip2: $a3f3fb49e367cffa$export$3e5f628c87c944ea
    }).optional(),
    /** Error object returned by the RPC method. */ error: (0, $3z62d$z).object({
        /** Error code */ code: (0, $3z62d$z).string(),
        /** Error message */ message: (0, $3z62d$z).string()
    }).optional()
});
const $a3f3fb49e367cffa$export$f31262cd6c9b0637 = (0, $3z62d$z).object({
    /** RPC method executed by the wallet */ method: (0, $3z62d$z).literal("personal_sign"),
    /** Data returned by the RPC method. */ data: (0, $3z62d$z).object({
        /** Signature produced by the wallet. */ signature: (0, $3z62d$z).string(),
        /** Encoding of the signature */ encoding: (0, $3z62d$z).literal("hex")
    })
});
const $a3f3fb49e367cffa$export$21a19a0ce9a88106 = (0, $3z62d$z).object({
    /** RPC method executed by the wallet */ method: (0, $3z62d$z).literal("eth_signTypedData_v4"),
    /** Data returned by the RPC method. */ data: (0, $3z62d$z).object({
        /** Signature produced by the wallet. */ signature: (0, $3z62d$z).string(),
        /** Encoding of the signature */ encoding: (0, $3z62d$z).literal("hex")
    })
});
const $a3f3fb49e367cffa$export$e53e6185409931b0 = (0, $3z62d$z).discriminatedUnion("method", [
    $a3f3fb49e367cffa$export$310e1d354b294aac,
    $a3f3fb49e367cffa$export$1aae029e61aa62e3,
    $a3f3fb49e367cffa$export$261cb1d601edd7b1,
    $a3f3fb49e367cffa$export$2f7b6ef5cdff0e98,
    $a3f3fb49e367cffa$export$c62c1852c4cb6e04,
    $a3f3fb49e367cffa$export$f31262cd6c9b0637,
    $a3f3fb49e367cffa$export$21a19a0ce9a88106
]);
const $a3f3fb49e367cffa$export$1022a916e1be96e = (0, $3z62d$z).object({
    display_name: (0, $3z62d$z).string().optional(),
    // The PEM-formatted public key used to verify signatures.
    // Overwrites existing values, if they exist.
    public_key: (0, $3z62d$z).string(),
    role: $a3f3fb49e367cffa$export$e00d5c89c01be30a.optional()
});
const $a3f3fb49e367cffa$var$ChainTypes = (0, $3z62d$z).union([
    (0, $3z62d$z).literal("solana"),
    (0, $3z62d$z).literal("ethereum")
]);
const $a3f3fb49e367cffa$export$9f7c9fccce46ad2a = (0, $3z62d$z).object({
    id: (0, $3z62d$z).string(),
    address: (0, $3z62d$z).string(),
    created_at: (0, $3z62d$z).number(),
    chain_type: $a3f3fb49e367cffa$var$ChainTypes,
    policy_ids: (0, $3z62d$z).array((0, $3z62d$z).string()),
    authorization_threshold: (0, $3z62d$z).number().optional()
});
const $a3f3fb49e367cffa$export$ccfd4ef2d9850a86 = (0, $3z62d$z).object({
    /** Chain to create wallet for. */ chain_type: $a3f3fb49e367cffa$var$ChainTypes,
    /** Optional policy ID to create wallet for. */ policy_ids: (0, $3z62d$z).array((0, $3z62d$z).string()).max(1).optional(),
    /** The set of authorization key IDs that can authorize actions on this wallet.
     * If unspecified, any request authorized by the app secret is sufficient to take
     * actions with the wallet. */ authorization_key_ids: (0, $3z62d$z).array((0, $3z62d$z).string()).optional(),
    /** The minimum number of keys required to authorize actions on this wallet.
     * Leave unspecified to require all keys to sign a request for any action. */ authorization_threshold: (0, $3z62d$z).number().optional()
}).refine((input)=>input.authorization_threshold === undefined || input.authorization_threshold >= 1 && input.authorization_key_ids && input.authorization_threshold <= input.authorization_key_ids.length, {
    message: "If specified, authorization_threshold must be an integer between 1 and the length of authorization_key_ids."
}).catch(({ error: error })=>{
    throw new (0, $3z62d$InvalidInputError)(error.message, (0, $3z62d$PrivyErrorCode).INVALID_DATA);
});
const $a3f3fb49e367cffa$export$7041defd4179afea = (0, $3z62d$z).object({
    /** Unique ID for the created wallet. */ id: (0, $3z62d$z).string(),
    /** Chain type of the created wallet. */ chain_type: $a3f3fb49e367cffa$var$ChainTypes,
    /** Address of the created wallet */ address: (0, $3z62d$z).string(),
    /** The optional authorization threshold for the wallet. */ authorization_threshold: (0, $3z62d$z).number().optional()
});
const $a3f3fb49e367cffa$export$690ece09e17200e1 = (0, $3z62d$z).object({
    wallet_id: (0, $3z62d$z).string({
        required_error: "Wallet ID must be provided",
        invalid_type_error: "Wallet ID is not a valid string"
    }).min(1)
}).catch(({ error: error })=>{
    throw new (0, $3z62d$InvalidInputError)(error.message, (0, $3z62d$PrivyErrorCode).INVALID_DATA);
});
const $a3f3fb49e367cffa$export$255e70f0df8a680a = (0, $3z62d$z).object({
    id: (0, $3z62d$z).string()
});
const $a3f3fb49e367cffa$export$9465dc060ac9c626 = (0, $3z62d$z).object({
    id: (0, $3z62d$z).string(),
    display_name: (0, $3z62d$z).string().nullable(),
    public_key: (0, $3z62d$z).string(),
    role: $a3f3fb49e367cffa$export$e00d5c89c01be30a,
    created_at: (0, $3z62d$z).number()
});
const $a3f3fb49e367cffa$export$fc58525428fff10b = (0, $d5521858886c4cef$export$68f5e1453c188a82).extend({
    chain_type: $a3f3fb49e367cffa$var$ChainTypes.optional()
});
const $a3f3fb49e367cffa$export$df3cb5ed53755486 = (0, $3z62d$z).object({
    policy_ids: (0, $3z62d$z).array((0, $3z62d$z).string()).max(1, "Only one policy ID can be set").optional(),
    authorization_key_ids: (0, $3z62d$z).array((0, $3z62d$z).string()).optional(),
    tags: (0, $3z62d$z).array((0, $3z62d$z).string()).optional(),
    authorization_threshold: (0, $3z62d$z).number().optional()
}).superRefine((input, ctx)=>{
    const isEmpty = Object.values(input).every((value)=>value == null);
    if (isEmpty) ctx.addIssue({
        code: "custom",
        message: "At least one field must be provided"
    });
    if (input.authorization_key_ids) ctx.addIssue({
        code: "custom",
        path: [
            "authorization_key_ids"
        ],
        message: "Updating authorization key IDs is not supported"
    });
    if (input.authorization_threshold) ctx.addIssue({
        code: "custom",
        path: [
            "authorization_threshold"
        ],
        message: "Updating authorization threshold is not supported"
    });
    if (input.tags) ctx.addIssue({
        code: "custom",
        path: [
            "tags"
        ],
        message: "Updating tags is not supported"
    });
});


var $83e43f00db01140e$exports = {};

$parcel$export($83e43f00db01140e$exports, "TransactionScanningInput", () => $83e43f00db01140e$export$efbe4bc9200568b5);
$parcel$export($83e43f00db01140e$exports, "TransactionScanningResponse", () => $83e43f00db01140e$export$738d8427b643e4f5);

const $83e43f00db01140e$export$efbe4bc9200568b5 = (0, $3z62d$z).object({
    /** The integer chain id to send the transaction on. */ chain_id: (0, $3z62d$z).string(),
    /**  Additional information for Blockaid to validate against. */ metadata: (0, $3z62d$z).object({
        domain: (0, $3z62d$z).string()
    }),
    /** Raw RPC request */ request: (0, $3z62d$z).object({
        /** RPC method to execute with the wallet. */ method: (0, $3z62d$z).string(),
        /** Parameters for the RPC method.  */ params: (0, $3z62d$z).array((0, $3z62d$z).any())
    })
});
const $83e43f00db01140e$var$ValidationResult = (0, $3z62d$z).object({
    status: (0, $3z62d$z).string(),
    result_type: (0, $3z62d$z).string(),
    error: (0, $3z62d$z).string()
});
const $83e43f00db01140e$var$SimulationResult = (0, $3z62d$z).object({
    status: (0, $3z62d$z).string(),
    error: (0, $3z62d$z).string(),
    assets_diffs: (0, $3z62d$z).array((0, $3z62d$z).any()),
    exposures: (0, $3z62d$z).array((0, $3z62d$z).any())
});
const $83e43f00db01140e$export$738d8427b643e4f5 = (0, $3z62d$z).object({
    validation: $83e43f00db01140e$var$ValidationResult,
    simulation: $83e43f00db01140e$var$SimulationResult
});


$parcel$exportWildcard($f8351206a8fc12e3$exports, $2d14ad2950d830fc$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $d5521858886c4cef$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $164ad09aa405585d$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $517ac5899dfbdcfa$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $81a8385d5b29682b$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $cd63f1af6df0c007$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $116ced06f6ab4132$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $2764b54e10251e85$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $04de102d3f540aa5$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $0a2bfa4af4eefcd7$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $b50f62513fa1b739$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $3d02fb74c61c9f4e$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $460866cad3e1bfe4$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $76c1f4ed95029183$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $292c7e19cacc7f55$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $619c9ebe0c9955fa$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $eaaefcff8b45215e$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $c43ea27f3e41dce1$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $743ea2550daa8de4$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $a1655510be3aa817$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $21fe323195bdda7f$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $fdca613bd10859b9$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $69a0fb8bb890224f$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $e64ead081b284a70$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $8c18f111dab342b1$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $88c861fe63372cd3$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $ed7b6c91dc59ac8d$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $81e03de001ba4005$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $1aadd0fe5ffa17b5$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $95be9d600865bb8f$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $210eda2272406f20$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $d8cf89bca885903a$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $a3f3fb49e367cffa$exports);
$parcel$exportWildcard($f8351206a8fc12e3$exports, $83e43f00db01140e$exports);




export {$9389a438679dfb17$export$30b7662faa307ee as AnalyticsEvent, $3eadf33fb6d2173f$export$d67e1898834e3885 as AppConfig, $3c21d05a2d9eac05$export$4d795ff6fee0e993 as CoinbaseOnRampInit, $3c21d05a2d9eac05$export$56adef0ec94545fa as CoinbaseOnRampStatus, $5273a2b7956efa12$export$b9aa74fef6e2a10e as GetCrossAppConnections, $abe1801c1695c2e5$export$cca9af2746f9b569 as CustomJWTAuthenticate, $edf644e56ded1c98$export$7ed9dd4c28ecc8b6 as FarcasterInit, $edf644e56ded1c98$export$c5985ffc97c7fdbb as FarcasterAuthenticate, $edf644e56ded1c98$export$d51549470a941fce as FarcasterLink, $edf644e56ded1c98$export$6017b5ccb660b0c8 as FarcasterUnlink, $edf644e56ded1c98$export$a14f766edcdfe001 as FarcasterStatus, $edf644e56ded1c98$export$1fd254d2511870dc as FarcasterV2Init, $edf644e56ded1c98$export$830c712ac562c817 as FarcasterV2Authenticate, $660bfeb10a2941e4$export$42654a8cac183ef0 as FarcasterSignerInit, $660bfeb10a2941e4$export$7f204ee171a84aa2 as FarcasterSignerStatus, $49151fbe89f83d57$export$bed08221a49a43ad as GuestAuthenticate, $0a1e817e31d20e9b$export$5e38d17588971983 as MfaPasskeyInit, $0a1e817e31d20e9b$export$52d08a59e63ca968 as MfaPasskeyVerify, $0a1e817e31d20e9b$export$d79952c9effdb95b as MfaPasskeyEnrollment, $c7d288da08ab8fee$export$2ca9d9da76a9e126 as MfaPasswordlessSmsEnroll, $c7d288da08ab8fee$export$3308cba1d8516f90 as MfaPasswordlessSmsVerify, $c7d288da08ab8fee$export$cf4de95cb6da600f as MfaPasswordlessSmsInit, $c7d288da08ab8fee$export$503f112538d6ca09 as MfaPasswordlessSmsUnenroll, $ef838b7d29915095$export$8cde043d756d30a7 as MfaTotpEnroll, $ef838b7d29915095$export$68c952ebd3c622ec as MfaTotpVerify, $ef838b7d29915095$export$9cfb70b9ef75b776 as MfaTotpInit, $ef838b7d29915095$export$2241a8a66d2e6498 as MfaTotpUnenroll, $2ca5a28d205a53b0$export$866d3936787f21ca as OAuthAuthenticate, $2ca5a28d205a53b0$export$7dd94108c3c957b6 as OAuthInit, $2ca5a28d205a53b0$export$b555c05c68965095 as OAuthLink, $2ca5a28d205a53b0$export$7246a40b726a26ea as OAuthUnlink, $78cfd2898280092a$export$3251d162865f5fbf as OAuthProviderAuthorize, $78cfd2898280092a$export$e2c685498411d101 as OAuthProviderVerify, $3a63df4ab9924d1e$export$8cc9b733d1d27bf as PasskeyLink, $3a63df4ab9924d1e$export$dd91b2a2913f179 as PasskeyAuthenticate, $3a63df4ab9924d1e$export$6c765e6aa2cc600d as PasskeyRegister, $3a63df4ab9924d1e$export$fbd0752c8f04789a as PasskeyAuthenticateInit, $3a63df4ab9924d1e$export$fbda2eea42eab208 as PasskeyRegisterInit, $3a63df4ab9924d1e$export$908a107a443c8819 as PasskeyLinkInit, $3a63df4ab9924d1e$export$73b251c34ecfbbd2 as PasskeyUnlink, $16a3a5bf7ffb2729$export$2399ea1e38345a53 as PasswordlessAuthenticate, $16a3a5bf7ffb2729$export$90dfa8041dde28f7 as PasswordlessInit, $16a3a5bf7ffb2729$export$c9ba5b5d6d996387 as PasswordlessLink, $16a3a5bf7ffb2729$export$770e866201444bcd as PasswordlessUnlink, $16a3a5bf7ffb2729$export$95d6a76319eb3229 as PasswordlessUpdate, $2b6bb8c3ab899712$export$7e171ae579c30d39 as PasswordlessSmsAuthenticate, $2b6bb8c3ab899712$export$5c9a94090bb8ee8b as PasswordlessSmsInit, $2b6bb8c3ab899712$export$e1b8c2813604d498 as PasswordlessSmsLink, $2b6bb8c3ab899712$export$140d5f525bd53d81 as PasswordlessSmsUnlink, $2b6bb8c3ab899712$export$3a4526cc549be74f as PasswordlessSmsUpdate, $b2630510667625da$export$53205c78d6e0d37f as RecoveryKeyMaterial, $b2630510667625da$export$f75c08c106aa5263 as RecoveryOAuthInit, $b2630510667625da$export$c4a18348874706ae as RecoveryOAuthAuthenticate, $b2630510667625da$export$4af466c8016ee40a as RecoveryOAuthInitICloud, $b2630510667625da$export$7b1580cc69e35e8 as RecoveryOAuthCallbackICloudExpo, $b2630510667625da$export$bce86382d6c75077 as RecoveryConfigurationICloud, $ee0ed6043fcfdb6b$export$e2939f516ef264b4 as getPathWithParams, $79bab14ca2e2f50f$export$99faf8b86d913c70 as RefreshSession, $79bab14ca2e2f50f$export$cad1a703886b4e3a as Logout, $9ee41d7932256464$export$ac60d564e06c26d5 as GetSmartWalletConfig, $9ee41d7932256464$export$24ec2b09f284e0b1 as PostSmartWalletConfig, $614eb8d391676d00$export$9babfd8a159b0c8c as WalletsRevoke, $42210e9696f6a3c0$export$81e59ade100f8964 as SiweInit, $42210e9696f6a3c0$export$5caf5d9f95cfdd58 as SiweAuthenticate, $42210e9696f6a3c0$export$626623f305a79065 as SiweLink, $42210e9696f6a3c0$export$dae4aed6dc91c7bf as SiweLinkSmartWallet, $42210e9696f6a3c0$export$cb415236257a3f80 as SiweUnlink, $92c6a916bc730c33$export$dd0e464f35c701ad as SiwsInit, $92c6a916bc730c33$export$93f5e2370a853629 as SiwsAuthenticate, $92c6a916bc730c33$export$c309d30a2a2815ee as SiwsLink, $92c6a916bc730c33$export$553e646318a6c92f as SiwsUnlink, $57efb675b9f4605e$export$cae4629dc339a1d3 as AcceptTermsOnUser, $b1eedf334909d160$export$7429ccdbcca0d2ad as TelegramAuthenticate, $b1eedf334909d160$export$db55e97c1ee79975 as TelegramLink, $b1eedf334909d160$export$513feadc9dae72fd as TelegramUnlink, $605b12778484ba49$export$a3b3bb064af22a7a as MoonpayOnRampSign, $2d14ad2950d830fc$export$5ac03ce02eff89f4 as AnalyticsEventInput, $d5521858886c4cef$export$570fdd1008d53ff0 as AccountIdFromPath, $d5521858886c4cef$export$85be2ce1a760a71d as AppIdFromPath, $d5521858886c4cef$export$68f5e1453c188a82 as Pagination, $164ad09aa405585d$export$dc5469a0fff5641e as AppResponseSchema, $517ac5899dfbdcfa$export$95372738a64f3b79 as EmbeddedWalletConfigSchema, $517ac5899dfbdcfa$export$367c50094464beeb as TelegramAuthConfigSchema, $517ac5899dfbdcfa$export$fe80bb11c98cc392 as FundingMethodEnum, $517ac5899dfbdcfa$export$f5d20e939383f95 as FundingMethodArraySchema, $517ac5899dfbdcfa$export$9ca1d1c7ecf8a0a as FundingConfigResponseSchema, $81a8385d5b29682b$export$f01d538aa036a41a as CoinbaseOnRampInitInput, $81a8385d5b29682b$export$4731ee7c27e49d6e as CoinbaseOnRampInitResponse, $81a8385d5b29682b$export$146ab3c80d47ce12 as CoinbaseOnRampStatusResponse, $cd63f1af6df0c007$export$22a69335b09c6066 as UserId, $cd63f1af6df0c007$export$5a6b8595f311cbb0 as Email, $cd63f1af6df0c007$export$6051224a4b788b5f as PasswordlessCode, $cd63f1af6df0c007$export$e1ae011f7e31ddec as WalletAddress, $cd63f1af6df0c007$export$52d99941c9f2e1af as normalizeEthereumAddress, $cd63f1af6df0c007$export$a6c60903ce1c32fc as SolanaWalletAddress, $cd63f1af6df0c007$export$3d623a7758cab61e as PhoneNumber, $cd63f1af6df0c007$export$eeb94ade8d38f116 as normalizePhoneNumber, $cd63f1af6df0c007$export$1987372119294ebb as isValidAddress, $cd63f1af6df0c007$export$1d53282181ae94da as AuthenticateMode, $116ced06f6ab4132$export$39ad28598f91ae95 as CrossAppConnectionsResponse, $2764b54e10251e85$export$b733e092f9f44b2c as Currency, $04de102d3f540aa5$export$ad1e2c0abc3d279d as AuthenticateJwtInput, $0a2bfa4af4eefcd7$export$5b3e61549b992e7e as DelegatedActionsConsentInput, $0a2bfa4af4eefcd7$export$60ba52d20922d865 as WalletApiRevokeResponse, $b50f62513fa1b739$export$ca08e252312baf4 as VerifyEmailInput, $b50f62513fa1b739$export$161958b06841b78e as AuthenticateEmailInput, $b50f62513fa1b739$export$ef1330eae1875774 as InitEmailInput, $b50f62513fa1b739$export$b0a53354e7257ebb as UnlinkEmailInput, $b50f62513fa1b739$export$9ad98d5ba2865624 as UpdateEmailInput, $b50f62513fa1b739$export$950dcc3b67d595fb as TransferEmailInput, $3d02fb74c61c9f4e$export$d3aaee921473d84f as JsonWebKey, $3d02fb74c61c9f4e$export$c8fd35505bb1704a as JsonWebKeySet, $460866cad3e1bfe4$export$6ddd112193bb4f42 as FarcasterConnectInitResponse, $460866cad3e1bfe4$export$10e572b3d0f4fe4f as FarcasterConnectStatusCompletedResponse, $460866cad3e1bfe4$export$430853814f05cdc4 as FarcasterConnectStatusPendingResponse, $460866cad3e1bfe4$export$2c59d6b32b518c6e as FarcasterAuthenticateInput, $460866cad3e1bfe4$export$40d6546edc9ccfd3 as FarcasterLinkInput, $460866cad3e1bfe4$export$8dd30088cf36d3f5 as FarcasterInitInput, $460866cad3e1bfe4$export$325ad26071643d09 as FarcasterUnlinkInput, $460866cad3e1bfe4$export$c3501b02c91b7cf6 as TransferFarcasterInput, $460866cad3e1bfe4$export$23aefcbca0cf697f as FarcasterV2InitInput, $460866cad3e1bfe4$export$adb9e233aa20093 as FarcasterV2InitResponse, $460866cad3e1bfe4$export$d960cd5dfc1ec120 as FarcasterV2AuthenticateInput, $76c1f4ed95029183$export$809802d572486db as FarcasterSignerInitInput, $76c1f4ed95029183$export$327461233dec5bf6 as FarcasterSignerInitResponse, $76c1f4ed95029183$export$2a58492abd647af5 as FarcasterSignerStatusResponse, $292c7e19cacc7f55$export$494be569a247ec9a as AuthenticateGuestInput, $619c9ebe0c9955fa$export$783ee7c583b70bea as EmailIdTokenEntry, $619c9ebe0c9955fa$export$5050d0079ef11bc6 as PhoneIdTokenEntry, $619c9ebe0c9955fa$export$fd3f2073209314f0 as WalletIdTokenEntry, $619c9ebe0c9955fa$export$7d91b89a98a32206 as FarcasterIdTokenEntry, $619c9ebe0c9955fa$export$3da0109396521ad1 as PasskeyIdTokenEntry, $619c9ebe0c9955fa$export$883001ac4b913adc as TelegramIdTokenEntry, $619c9ebe0c9955fa$export$10bcfd05b1db0bfb as GoogleOauthIdTokenEntry, $619c9ebe0c9955fa$export$5cf36acae8eed78 as TwitterOauthIdTokenEntry, $619c9ebe0c9955fa$export$18e770e71ddcac8b as DiscordOauthIdTokenEntry, $619c9ebe0c9955fa$export$2fd8fb76725390c8 as GithubOauthIdTokenEntry, $619c9ebe0c9955fa$export$7325b1b9ff5b138f as LinkedInOauthIdTokenEntry, $619c9ebe0c9955fa$export$5991ad07a5ac6061 as SpotifyOauthIdTokenEntry, $619c9ebe0c9955fa$export$d50f791175bcd25a as InstagramOauthIdTokenEntry, $619c9ebe0c9955fa$export$ad548be3bcd74188 as TiktokOauthIdTokenEntry, $619c9ebe0c9955fa$export$b8a150e8882d7617 as AppleOauthIdTokenEntry, $619c9ebe0c9955fa$export$4a1709b5a6406ed8 as CustomJwtIdTokenEntry, $619c9ebe0c9955fa$export$23abd82a93e245c8 as CrossAppIdTokenEntry, $619c9ebe0c9955fa$export$18ff60c21403359 as SmartWalletIdTokenEntry, $eaaefcff8b45215e$export$2a073761fe65eeb as MfaVerifyResponse, $eaaefcff8b45215e$export$5f85d1e59e4b8093 as MfaSmsInitInput, $eaaefcff8b45215e$export$d79e41bdbeb33bc8 as MfaSmsAuthenticateEnrollInput, $eaaefcff8b45215e$export$44ba6bee6f8c49bc as MfaSmsEnrollInput, $eaaefcff8b45215e$export$826840b7b6a37c22 as MfaSmsVerifyInput, $eaaefcff8b45215e$export$c5079467361455e6 as MfaTotpInput, $eaaefcff8b45215e$export$2e0b8857111f6a95 as ResponseTotpInitMfa, $c43ea27f3e41dce1$export$2d6bddbbdba11994 as MfaPasskeyInitInput, $c43ea27f3e41dce1$export$94c076e2d3cd7355 as ResponsePasskeyInitMfa, $c43ea27f3e41dce1$export$afc24607eeb5f33e as MfaPasskeyVerifyInput, $c43ea27f3e41dce1$export$3c909b91f5e6545f as MfaEnrollmentPasskeyInput, $743ea2550daa8de4$export$6c475a9528377d79 as MoonpayOnRampSignInput, $743ea2550daa8de4$export$2ce1205fd9aec915 as MoonpayOnRampSignResponse, $a1655510be3aa817$export$16a6de659e03cb8c as ExternalOAuthProvider, $a1655510be3aa817$export$96d4e4cf27d59030 as OAuthProvider, $a1655510be3aa817$export$3a815e8ae7821b6e as AuthenticateOauthInput, $a1655510be3aa817$export$25d68298fd675d8b as OAuthInitInput, $a1655510be3aa817$export$5169dcfff85dfbff as LinkOAuthInput, $a1655510be3aa817$export$100da24bb64f0e09 as OAuthUnlinkInput, $a1655510be3aa817$export$98ade43b6adcef0b as OAuthInitResponse, $a1655510be3aa817$export$ae2e7f22cae2163f as OAuthLinkResponse, $a1655510be3aa817$export$259a6aeda60f92c3 as TransferOAuthInput, $cc5a4e53c1cd130b$export$b5266d2768e29008 as SUPPORTED_OAUTH_PROVIDERS, $21fe323195bdda7f$export$b20be2048fbb4ed4 as AuthorizationCodeInput, $fdca613bd10859b9$export$2441567ff18621e0 as EmptyObject, $fdca613bd10859b9$export$8aed050e83c45a78 as SuccessObject, $69a0fb8bb890224f$export$7b01305e0ab33ea3 as PasskeyAuthenticatorVerifyOptions, $69a0fb8bb890224f$export$1c8fd79a94eba09d as PasskeyAuthenticatorEnrollmentOptions, $69a0fb8bb890224f$export$96203b761bf7cadb as PasskeyAuthenticatorVerifyResponse, $69a0fb8bb890224f$export$49424bcfec0159aa as PasskeyAuthenticatorEnrollmentResponse, $69a0fb8bb890224f$export$8c48c68e39a52ea as PasskeyInitInput, $69a0fb8bb890224f$export$2741be68c8db9b43 as ResponsePasskeyInitAuthenticate, $69a0fb8bb890224f$export$b968e9f4fdc5f0b2 as ResponsePasskeyInitLink, $69a0fb8bb890224f$export$88c08ece0d5f563d as ResponsePasskeyInitRegister, $69a0fb8bb890224f$export$9bd14c1a22f65d2 as PasskeyLinkInput, $69a0fb8bb890224f$export$6f9781ad5a96bdcf as PasskeyRegisterInput, $69a0fb8bb890224f$export$8525265affc59e4b as PasskeyAuthenticateInput, $69a0fb8bb890224f$export$1d32dd5b05e1d4dd as UnlinkPasskeyInput, $e64ead081b284a70$export$caca141f74b70633 as PolicyAction, $e64ead081b284a70$export$fcea0b2db26e6b18 as Condition, $e64ead081b284a70$export$f1ff2a90c38ff669 as Rule, $e64ead081b284a70$export$c245a5cc5068498 as PolicyWithoutRefinement, $e64ead081b284a70$export$86f9a84f969241f4 as OldPolicySchema, $e64ead081b284a70$export$40ee6f678dc3fb2e as Policy, $e64ead081b284a70$export$8e4ee22739746a51 as PolicyResponse, $e64ead081b284a70$export$42acce85b8458b03 as PolicyIdFromPath, $e64ead081b284a70$export$b8f9d7b6ca76a8cf as UpdatePolicyInput, $8c18f111dab342b1$export$5133f8b99ced310e as RecoveryKeyMaterialInput, $8c18f111dab342b1$export$52cacd413024ecd as RecoveryKeyMaterialResponse, $8c18f111dab342b1$export$8d23e6b066801647 as OAuthAuthenticateRecoveryResponse, $8c18f111dab342b1$export$eb513813549270a as OAuthInitRecoveryInput, $8c18f111dab342b1$export$425e6a14ed44c52f as OAuthInitICloudRecoveryInput, $8c18f111dab342b1$export$bec1efaa57e00983 as OAuthCallbackICloudExpoInput, $8c18f111dab342b1$export$ea90bf451d6cb856 as OAuthCallbackICloudExpoResponse, $8c18f111dab342b1$export$dfb75001bba12cf3 as RecoveryConfigurationICloudInput, $8c18f111dab342b1$export$a53156909e5ca052 as RecoveryConfigurationICloudResponse, $88c861fe63372cd3$export$1c8c55e22e1d8d9 as SiweInput, $88c861fe63372cd3$export$1317218caaacf800 as SmartWalletSiweInput, $88c861fe63372cd3$export$3435c4883fbaeb7f as AuthenticateSiweInput, $88c861fe63372cd3$export$b5b65f417dc17888 as SiweAddressInput, $88c861fe63372cd3$export$6c957bbdcf62135c as SiweInitInput, $88c861fe63372cd3$export$8535d2f477730820 as SiweNonce, $88c861fe63372cd3$export$c072e3bc69534ade as TransferSiweInput, $ed7b6c91dc59ac8d$export$fa2883d1fd7d2f4d as SiwsInput, $ed7b6c91dc59ac8d$export$defac42dc31eb54f as AuthenticateSiwsInput, $ed7b6c91dc59ac8d$export$767d61e052aa619c as SiwsAddressInput, $ed7b6c91dc59ac8d$export$334006f5cf1e2e10 as SiwsInitInput, $ed7b6c91dc59ac8d$export$678e538743698961 as SiwsNonce, $81e03de001ba4005$export$1bbb8302b8922d52 as VerifyPhoneInput, $81e03de001ba4005$export$d57783821ffbf377 as AuthenticatePhoneInput, $81e03de001ba4005$export$794b219acd817434 as PasswordlessSmsPhoneInput, $81e03de001ba4005$export$63fc94c9f0d4eea8 as UnlinkPhoneInput, $81e03de001ba4005$export$bbf6b1d1316adec as UpdatePhoneInput, $81e03de001ba4005$export$c7b05f9abdd2e9cc as TransferPhoneInput, $1aadd0fe5ffa17b5$export$96b3537f43197348 as SmartWalletProvider, $1aadd0fe5ffa17b5$export$2a5d583dc6eed366 as AlchemyPaymasterContextSchema, $1aadd0fe5ffa17b5$export$524bc600c78a5033 as SmartWalletNetworkConfigurationInputSchema, $1aadd0fe5ffa17b5$export$721df9a9735783ee as SmartWalletConfigurationSchema, $1aadd0fe5ffa17b5$export$8501bbb82f9b8fbb as SmartWalletConfigurationInputSchema, $1aadd0fe5ffa17b5$export$3744ee3bf2e1e5e2 as SmartWalletConfigurationResponseSchema, $af5265fd3dba53f1$export$467c4d345d20536b as SAFE, $af5265fd3dba53f1$export$5a7fd86629827df3 as KERNEL, $af5265fd3dba53f1$export$619884a26e96e55d as LIGHT_ACCOUNT, $af5265fd3dba53f1$export$96c76464f555e39d as BICONOMY, $af5265fd3dba53f1$export$404e03620b321d9e as COINBASE_SMART_WALLET, $af5265fd3dba53f1$export$9a0b8cb5335f5046 as SUPPORTED_SMART_WALLET_TYPES, $95be9d600865bb8f$export$5fae4cf22073ac85 as TelegramAuthResult, $95be9d600865bb8f$export$4ce98ed8f8cad76d as TelegramWebAppData, $95be9d600865bb8f$export$fb9405d8cbdd092d as TelegramAuthenticateInput, $95be9d600865bb8f$export$303a24e5db03ece6 as TelegramLinkInput, $95be9d600865bb8f$export$aad710dcc06a76fc as TelegramUnlinkInput, $95be9d600865bb8f$export$835d5d8163cea1a1 as TransferTelegramInput, $210eda2272406f20$export$6aa3af8166ea5386 as RefreshTokenInput, $210eda2272406f20$export$3ea9bae16087a241 as OptionalRefreshTokenInput, $210eda2272406f20$export$874b0538e4f42518 as ForkedToken, $d8cf89bca885903a$export$b291b2a8281f162e as EmailAccount, $d8cf89bca885903a$export$e461068a75eb0fb3 as PhoneAccount, $d8cf89bca885903a$export$16168ca1ad2afd69 as BaseWalletAccount, $d8cf89bca885903a$export$e72ed3751242ab66 as EthereumAccount, $d8cf89bca885903a$export$9847d582941f64b6 as SmartWalletAccount, $d8cf89bca885903a$export$d08a38b431a135bc as SolanaAccount, $d8cf89bca885903a$export$70b11e99555e84cb as FarcasterAccount, $d8cf89bca885903a$export$c7ead6bbfb2c42a0 as PasskeyAccount, $d8cf89bca885903a$export$70ddd50daefc295f as TelegramAccount, $d8cf89bca885903a$export$42e79fc33a58a2f5 as EthereumEmbeddedWalletAccount, $d8cf89bca885903a$export$734c44f2e990ba65 as SolanaEmbeddedWalletAccount, $d8cf89bca885903a$export$c05834be0df10117 as BitcoinSegwitEmbeddedWalletAccount, $d8cf89bca885903a$export$4d795c7186f7e1f1 as BitcoinTaprootEmbeddedWalletAccount, $d8cf89bca885903a$export$ab3c40bebc4d6f36 as GoogleOauthAccount, $d8cf89bca885903a$export$31cc32c7bc65c2e0 as TwitterOauthAccount, $d8cf89bca885903a$export$cb35596f96141125 as DiscordOauthAccount, $d8cf89bca885903a$export$55430b29b82d98a8 as GithubOauthAccount, $d8cf89bca885903a$export$25b982740d2e431c as LinkedInOauthAccount, $d8cf89bca885903a$export$260592be4b1062f4 as SpotifyOauthAccount, $d8cf89bca885903a$export$c683d35f732c1912 as InstagramOauthAccount, $d8cf89bca885903a$export$5e8143c3f32ac816 as TiktokOauthAccount, $d8cf89bca885903a$export$67af8a2e34850611 as AppleOauthAccount, $d8cf89bca885903a$export$5da87a1cf22b57d0 as CustomJwtAccount, $d8cf89bca885903a$export$ccd62fbf4b025fee as CrossAppEmbeddedWallet, $d8cf89bca885903a$export$8f1f4ad4f8276ad7 as CrossAppSmartWallet, $d8cf89bca885903a$export$564035ac82295c40 as CrossAppAccount, $d8cf89bca885903a$export$70ab2a322f92399 as LinkedAccount, $d8cf89bca885903a$export$3250154351927c42 as SmsMfaMethod, $d8cf89bca885903a$export$27837b14d6717da8 as TotpMfaMethod, $d8cf89bca885903a$export$dd0fcfda522da705 as PasskeyMfaMethod, $d8cf89bca885903a$export$7d2a870b119c9ff4 as LinkedMfaMethod, $d8cf89bca885903a$export$58677eb7a73b7d5a as CustomMetadata, $d8cf89bca885903a$export$fdfea991b75c2811 as OAuthTokens, $d8cf89bca885903a$export$1f44aaf2ec115b54 as User, $d8cf89bca885903a$export$bbd8e1b014079dc1 as SessionUpdateActionEnum, $d8cf89bca885903a$export$7de20aee312d6767 as AuthenticatedUser, $d8cf89bca885903a$export$8339543958fe900f as LoggedOutUser, $d8cf89bca885903a$export$2b6251d563a4e626 as MaybeUser, $a3f3fb49e367cffa$export$3e5f628c87c944ea as CAIP2, $a3f3fb49e367cffa$export$e00d5c89c01be30a as AuthorizationKeyRole, $a3f3fb49e367cffa$export$8e148d8e0fa27f14 as WalletApiSolanaSignTransactionRpcInput, $a3f3fb49e367cffa$export$9b59b888d99d2b7 as WalletApiSolanaSignAndSendTransactionRpcInput, $a3f3fb49e367cffa$export$97fa15d15442509a as WalletApiSolanaSignMessageRpcInput, $a3f3fb49e367cffa$export$4dd5c56c048ca51c as UnsignedEthereumTransaction, $a3f3fb49e367cffa$export$6d6b46e54d62b80f as WalletApiEthereumSignTransactionRpcInput, $a3f3fb49e367cffa$export$6a1a144657f01857 as WalletApiEthereumSendTransactionRpcInput, $a3f3fb49e367cffa$export$47e0aa7143de6eba as WalletApiEthereumPersonalSignRpcInputParams, $a3f3fb49e367cffa$export$b1c3bd1406731d97 as WalletApiEthereumPersonalSignRpcInput, $a3f3fb49e367cffa$export$c4aa7e4bbb51693f as WalletApiEthereumSignTypedDataRpcInput, $a3f3fb49e367cffa$export$86729abbdf3cb00d as WalletApiEthereumRpcInput, $a3f3fb49e367cffa$export$56c132d7290bb7ea as WalletApiSolanaRpcInput, $a3f3fb49e367cffa$export$a965e12848db29a7 as WalletApiRpcInput, $a3f3fb49e367cffa$export$310e1d354b294aac as WalletApiSolanaSignTransactionRpcResponse, $a3f3fb49e367cffa$export$1aae029e61aa62e3 as WalletApiSolanaSignAndSendTransactionRpcResponse, $a3f3fb49e367cffa$export$261cb1d601edd7b1 as WalletApiSolanaSignMessageRpcResponse, $a3f3fb49e367cffa$export$2f7b6ef5cdff0e98 as WalletApiEthereumSignTransactionRpcResponse, $a3f3fb49e367cffa$export$c62c1852c4cb6e04 as WalletApiEthereumSendTransactionRpcResponse, $a3f3fb49e367cffa$export$f31262cd6c9b0637 as WalletApiEthereumPersonalSignRpcResponse, $a3f3fb49e367cffa$export$21a19a0ce9a88106 as WalletApiEthereumSignTypedDataRpcResponse, $a3f3fb49e367cffa$export$e53e6185409931b0 as WalletApiRpcResponse, $a3f3fb49e367cffa$export$1022a916e1be96e as WalletApiRegisterAuthorizationKeyInput, $a3f3fb49e367cffa$export$9f7c9fccce46ad2a as WalletResponse, $a3f3fb49e367cffa$export$ccfd4ef2d9850a86 as WalletApiCreateInput, $a3f3fb49e367cffa$export$7041defd4179afea as WalletApiCreateResponse, $a3f3fb49e367cffa$export$690ece09e17200e1 as WalletIdFromPath, $a3f3fb49e367cffa$export$255e70f0df8a680a as WalletApiRevokeAuthorizationKeyInput, $a3f3fb49e367cffa$export$9465dc060ac9c626 as AuthorizationKey, $a3f3fb49e367cffa$export$fc58525428fff10b as WalletsSearchInput, $a3f3fb49e367cffa$export$df3cb5ed53755486 as WalletUpdateInput, $83e43f00db01140e$export$efbe4bc9200568b5 as TransactionScanningInput, $83e43f00db01140e$export$738d8427b643e4f5 as TransactionScanningResponse};
