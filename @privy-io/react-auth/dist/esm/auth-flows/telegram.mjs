import{PrivyClientError as e,formatApiError as t,PrivyErrorCode as a}from"../errors.mjs";import{CaptchaError as r}from"../hooks/captcha-context.mjs";import{telegramAccountAuthenticatePath as i,telegramAccountLinkPath as o}from"../paths.mjs";import"ofetch";import"react/jsx-runtime";import"../hooks/index.mjs";import"react";import"../utils/index.mjs";import"../connectors/get-legacy-injected-providers.mjs";import"../connectors/is-wallet-installed.mjs";import"../utils/eth/getPublicClient.mjs";import"viem";class n{async authenticate(){if(!this.api)throw new e("Auth flow has no API instance");try{return await this.api.post(i,{captcha_token:this.meta.captchaToken,telegram_auth_result:this.meta.telegramAuthResult,telegram_web_app_data:this.meta.telegramWebAppData,mode:this.meta.disableSignup?"no-signup":"login-or-sign-up"})}catch(e){throw t(e)}}async link(){if(!this.api)throw new e("Auth flow has no API instance");try{return await this.api.post(o,{telegram_auth_result:this.meta.telegramAuthResult,telegram_web_app_data:this.meta.telegramWebAppData})}catch(e){throw t(e)}}constructor(e,t=!1){this.meta={disableSignup:!1},this.meta={captchaToken:e,disableSignup:!1},this.meta.disableSignup=t}}function s(e){let t={detail:"",retryable:!1};return e?.privyErrorCode===a.LINKED_TO_ANOTHER_USER&&(t.detail="This account has already been linked to another user."),e?.privyErrorCode===a.DISALLOWED_LOGIN_METHOD&&(t.detail="Login with Telegram not allowed."),e?.privyErrorCode===a.INVALID_DATA&&(t.retryable=!0,t.detail="Something went wrong. Try again."),e?.privyErrorCode===a.CANNOT_LINK_MORE_OF_TYPE&&(t.retryable=!0,t.detail="Something went wrong. Try again."),e?.privyErrorCode===a.INVALID_CREDENTIALS&&(t.retryable=!0,t.detail="Something went wrong. Try again."),e?.privyErrorCode===a.TOO_MANY_REQUESTS&&(t.detail="Too many requests. Please wait before trying again."),e?.privyErrorCode===a.TOO_MANY_REQUESTS&&e.message.includes("rate limit")&&(t.detail="Request limit reached for Telegram. Please wait a moment and try again."),e instanceof r&&(t.retryable=!0,t.detail="Something went wrong. Try again."),t}function l(){let e;return(e=function(){let e=new URLSearchParams(window.location.search),t=Number(e.get("id")||""),a=e.get("hash"),r=Number(e.get("auth_date")||""),i=e.get("first_name");if(t&&i&&r&&a)return Object.fromEntries(e.entries())}())?(h(),{flowType:"login-url",authData:e}):(e=function(){let e=window.location.hash;if(!e||!e.startsWith("#tgWebAppData"))return;let t=m(e.replace("#tgWebAppData=","")),{user:a,auth_date:r,hash:i}=t;return a&&r&&i?t:void 0}())?(h(),{flowType:"web-app",authData:e}):void 0}function m(e){return Object.fromEntries(decodeURIComponent(e).split("&").map((e=>e.split("=").map(decodeURIComponent))))}function h(){let e=new URL(window.location.href);e.searchParams.delete("id"),e.searchParams.delete("hash"),e.searchParams.delete("auth_date"),e.searchParams.delete("first_name"),e.searchParams.delete("last_name"),e.searchParams.delete("username"),e.searchParams.delete("photo_url"),e.hash="",window.history.replaceState({},"",e)}export{n as TelegramAuthFlow,m as convertInitDataRawToTelegramWebAppData,l as detectCompletingTelegramFlow,s as getTelegramAuthErrorMessage};
