import { PrivyErrorCode as r } from "../../errors.mjs";
import e from "../../lib/capitalizeFirstLetter.mjs";
import { getDisplayForProvider as t } from "./getDisplayForProvider.mjs";
import "ofetch";
import "../../svg/apple.mjs";
import "react/jsx-runtime";
import "../../svg/discord.mjs";
import "../../svg/github.mjs";
import "../../svg/globe.mjs";
import "@heroicons/react/24/outline/GlobeAltIcon";
import "../../svg/google.mjs";
import "../../svg/instagram.mjs";
import "../../svg/linkedin.mjs";
import "../../svg/spotify.mjs";
import "../../svg/tiktok.mjs";
import "../../svg/twitter.mjs";
function o(o, i) {
  let a = {
    detail: "",
    retryable: false
  };
  let s = e(i);
  if (o?.privyErrorCode === r.LINKED_TO_ANOTHER_USER) {
    a.detail = "This account has already been linked to another user.";
  }
  if (o?.privyErrorCode === r.INVALID_CREDENTIALS) {
    a.retryable = true;
    a.detail = "Something went wrong. Try again.";
  }
  if (o.privyErrorCode === r.OAUTH_USER_DENIED) {
    a.detail = `Retry and check ${s} to finish connecting your account.`;
    a.retryable = true;
  }
  if (o?.privyErrorCode === r.TOO_MANY_REQUESTS) {
    a.detail = "Too many requests. Please wait before trying again.";
  }
  if (o?.privyErrorCode === r.TOO_MANY_REQUESTS && o.message.includes("provider rate limit")) {
    let r = t(i).name;
    a.detail = `Request limit reached for ${r}. Please wait a moment and try again.`;
  }
  if (o?.privyErrorCode === r.OAUTH_ACCOUNT_SUSPENDED) {
    let r = t(i).name;
    a.detail = `Your ${r} account is suspended. Please try another login method.`;
  }
  if (o?.privyErrorCode === r.CANNOT_LINK_MORE_OF_TYPE) {
    a.detail = "You cannot authorize more than one account for this user.";
  }
  if (o?.privyErrorCode === r.OAUTH_UNEXPECTED && i.startsWith("privy:")) {
    a.detail = "Something went wrong. Please try again.";
  }
  return a;
}
export { o as getOAuthErrorMessage };
