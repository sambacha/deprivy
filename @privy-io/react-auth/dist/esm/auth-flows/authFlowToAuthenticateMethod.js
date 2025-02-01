import { CustomJwtAccountFlow as m } from "./custom-jwt-account.mjs";
import { EmailFlow as t } from "./email.mjs";
import { GuestFlow as o } from "./guest.mjs";
import { SiweFlow as s } from "./siwe.mjs";
import { SmsFlow as r } from "./sms.mjs";
import { OAuthFlow as i } from "./oauth/OAuthFlow.mjs";
import "../errors.mjs";
import "ofetch";
import "../paths.mjs";
import "./getUiHeader.mjs";
import "jose";
import "../constants.mjs";
import "../crypto.mjs";
import "../storage.mjs";
import "../effect.mjs";
import "../lib/siwe.mjs";
import "../lib/pkce.mjs";
function e(e) {
  if (e instanceof t) {
    return "email";
  } else if (e instanceof r) {
    return "sms";
  } else if (e instanceof s) {
    return "siwe";
  } else if (e instanceof o) {
    return "guest";
  } else if (e instanceof m) {
    return "custom_auth";
  } else if (e instanceof i) {
    return e.meta.provider;
  } else {
    return null;
  }
}
export { e as authFlowToAuthenticateMethod };
