import { PrivyClientError as e, formatApiError as t, PrivyErrorCode as a } from "../errors.mjs";
import { CaptchaError as r } from "../hooks/captcha-context.mjs";
import { telegramAccountAuthenticatePath as i, telegramAccountLinkPath as o } from "../paths.mjs";
import "ofetch";
import "react/jsx-runtime";
import "../hooks/index.mjs";
import "react";
import "../utils/index.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../utils/eth/getPublicClient.mjs";
import "viem";
class n {
  async authenticate() {
    if (!this.api) {
      throw new e("Auth flow has no API instance");
    }
    try {
      return await this.api.post(i, {
        captcha_token: this.meta.captchaToken,
        telegram_auth_result: this.meta.telegramAuthResult,
        telegram_web_app_data: this.meta.telegramWebAppData,
        mode: this.meta.disableSignup ? "no-signup" : "login-or-sign-up"
      });
    } catch (e) {
      throw t(e);
    }
  }
  async link() {
    if (!this.api) {
      throw new e("Auth flow has no API instance");
    }
    try {
      return await this.api.post(o, {
        telegram_auth_result: this.meta.telegramAuthResult,
        telegram_web_app_data: this.meta.telegramWebAppData
      });
    } catch (e) {
      throw t(e);
    }
  }
  constructor(e, t = false) {
    this.meta = {
      disableSignup: false
    };
    this.meta = {
      captchaToken: e,
      disableSignup: false
    };
    this.meta.disableSignup = t;
  }
}
function s(e) {
  let t = {
    detail: "",
    retryable: false
  };
  if (e?.privyErrorCode === a.LINKED_TO_ANOTHER_USER) {
    t.detail = "This account has already been linked to another user.";
  }
  if (e?.privyErrorCode === a.DISALLOWED_LOGIN_METHOD) {
    t.detail = "Login with Telegram not allowed.";
  }
  if (e?.privyErrorCode === a.INVALID_DATA) {
    t.retryable = true;
    t.detail = "Something went wrong. Try again.";
  }
  if (e?.privyErrorCode === a.CANNOT_LINK_MORE_OF_TYPE) {
    t.retryable = true;
    t.detail = "Something went wrong. Try again.";
  }
  if (e?.privyErrorCode === a.INVALID_CREDENTIALS) {
    t.retryable = true;
    t.detail = "Something went wrong. Try again.";
  }
  if (e?.privyErrorCode === a.TOO_MANY_REQUESTS) {
    t.detail = "Too many requests. Please wait before trying again.";
  }
  if (e?.privyErrorCode === a.TOO_MANY_REQUESTS && e.message.includes("rate limit")) {
    t.detail = "Request limit reached for Telegram. Please wait a moment and try again.";
  }
  if (e instanceof r) {
    t.retryable = true;
    t.detail = "Something went wrong. Try again.";
  }
  return t;
}
function l() {
  let e;
  if (e = function () {
    let e = new URLSearchParams(window.location.search);
    let t = Number(e.get("id") || "");
    let a = e.get("hash");
    let r = Number(e.get("auth_date") || "");
    let i = e.get("first_name");
    if (t && i && r && a) {
      return Object.fromEntries(e.entries());
    }
  }()) {
    h();
    return {
      flowType: "login-url",
      authData: e
    };
  } else if (e = function () {
    let e = window.location.hash;
    if (!e || !e.startsWith("#tgWebAppData")) {
      return;
    }
    let t = m(e.replace("#tgWebAppData=", ""));
    let {
      user: a,
      auth_date: r,
      hash: i
    } = t;
    if (a && r && i) {
      return t;
    } else {
      return undefined;
    }
  }()) {
    h();
    return {
      flowType: "web-app",
      authData: e
    };
  } else {
    return undefined;
  }
}
function m(e) {
  return Object.fromEntries(decodeURIComponent(e).split("&").map(e => e.split("=").map(decodeURIComponent)));
}
function h() {
  let e = new URL(window.location.href);
  e.searchParams.delete("id");
  e.searchParams.delete("hash");
  e.searchParams.delete("auth_date");
  e.searchParams.delete("first_name");
  e.searchParams.delete("last_name");
  e.searchParams.delete("username");
  e.searchParams.delete("photo_url");
  e.hash = "";
  window.history.replaceState({}, "", e);
}
export { n as TelegramAuthFlow, m as convertInitDataRawToTelegramWebAppData, l as detectCompletingTelegramFlow, s as getTelegramAuthErrorMessage };
