import { formatApiError as e, PrivyClientError as o, PrivyErrorCode as t } from "../errors.mjs";
import { recoveryOAuthInitICloudPath as r, recoveryOAuthInitPath as i, recoveryOAuthAuthenticatePath as E } from "../paths.mjs";
import { ModalScreen as a } from "../screens/index.mjs";
import { createCodeVerifier as n, createStateCode as s, deriveCodeChallengeFromCodeVerifier as c } from "./pkce.mjs";
import "ofetch";
import "jose";
import "../constants.mjs";
import "../crypto.mjs";
import "../storage.mjs";
function d({
  isCreatingWallet: e,
  skipSplashScreen: o
}) {
  if (e) {
    return a.EMBEDDED_WALLET_PASSWORD_CREATE_SCREEN;
  } else if (o) {
    return a.EMBEDDED_WALLET_PASSWORD_UPDATE_SCREEN;
  } else {
    return a.EMBEDDED_WALLET_PASSWORD_UPDATE_SPLASH_SCREEN;
  }
}
function _({
  walletAction: e,
  availableRecoveryMethods: o,
  legacySetWalletPasswordFlow: t,
  isResettingPassword: r,
  showAutomaticRecovery: i
}) {
  if (i) {
    return a.EMBEDDED_WALLET_SET_AUTOMATIC_RECOVERY_SCREEN;
  } else if (t || o.length === 1) {
    return d({
      isCreatingWallet: e === "create",
      skipSplashScreen: r
    });
  } else {
    return a.EMBEDDED_WALLET_RECOVERY_SELECTION_SCREEN;
  }
}
function l(e) {
  switch (e) {
    case "user-passcode":
      return a.EMBEDDED_WALLET_PASSWORD_RECOVERY_SCREEN;
    case "google-drive":
    case "icloud":
      return a.EMBEDDED_WALLET_RECOVERY_OAUTH_SCREEN;
    default:
      throw Error("Recovery method not supported");
  }
}
async function u({
  api: o,
  provider: t
}) {
  let E = n();
  let a = s();
  let d = await c(E);
  try {
    if (t === "icloud") {
      return {
        url: (await o.post(r, {
          client_type: "web"
        })).url
      };
    } else {
      return {
        url: (await o.post(i, {
          redirect_to: window.location.href,
          code_challenge: d,
          state_code: a
        })).url,
        codeVerifier: E,
        stateCode: a,
        provider: t
      };
    }
  } catch (o) {
    throw e(o);
  }
}
async function p({
  api: r,
  provider: i,
  stateCode: a,
  codeVerifier: n,
  authorizationCode: s
}) {
  if (!s || !a) {
    throw new o("[OAuth AuthFlow] Authorization and state codes code must be set prior to calling authenicate.");
  }
  if (s === "undefined") {
    throw new o("User denied confirmation during OAuth flow");
  }
  try {
    return (await r.post(E, {
      authorization_code: s,
      state_code: a,
      code_verifier: n,
      provider: i
    })).access_token;
  } catch (r) {
    let i = e(r);
    if (i.privyErrorCode) {
      throw new o(i.message || "Invalid code during OAuth flow.", undefined, i.privyErrorCode);
    }
    if (i.message === "User denied confirmation during OAuth flow") {
      throw new o("Invalid code during oauth flow.", undefined, t.OAUTH_USER_DENIED);
    }
    throw new o("Invalid code during OAuth flow.", undefined, t.UNKNOWN_AUTH_ERROR);
  }
}
export { p as authenticateRecovery, l as embeddedWalletRecoveryScreen, d as embeddedWalletSetPasswordScreen, u as getRecoveryAuthorizationUrl, _ as toEmbeddedWalletSetRecoveryScreen };
