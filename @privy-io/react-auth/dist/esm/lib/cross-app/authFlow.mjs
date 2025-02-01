import{CrossAppAuthFlow as o}from"../../auth-flows/cross-app.mjs";import{PrivyClientError as r,formatApiError as e,PrivyErrorCode as t}from"../../errors.mjs";import{oAuthInitPath as i}from"../../paths.mjs";import{createCodeVerifier as a,createStateCode as n,deriveCodeChallengeFromCodeVerifier as p}from"../pkce.mjs";import"ofetch";import"jose";import"../../constants.mjs";import"../../crypto.mjs";import"../../storage.mjs";async function s({api:o,requesterAppId:e,providerAppId:t}){let i=(await o.get(`/api/v1/apps/${e}/cross-app/connections`)).connections.find((o=>o.provider_app_id===t));if(!i)throw new r("Invalid connected app");return{name:i.provider_app_name,logoUrl:i.provider_app_icon_url||void 0,apiUrl:i.provider_app_custom_api_url,readOnly:i.read_only}}async function d({api:o,appId:r}){let t=a(),s=n(),d=await p(t);try{let{url:e}=await o.post(i,{provider:`privy:${r}`,redirect_to:window.location.href,code_challenge:d,state_code:s});return{url:e,stateCode:s,codeVerifier:t}}catch(o){throw e(o)}}async function c({appId:i,stateCode:a,codeVerifier:n,authorizationCode:p,action:s,client:d}){if(!p||!a)throw new r("[Cross-App AuthFlow] Authorization and state codes code must be set prior to calling authenicate.");if("undefined"===p)throw new r("User denied confirmation during cross-app auth flow");try{let r=new o({authorizationCode:p,stateCode:a,codeVerifier:n,provider:`privy:${i}`});d.startAuthFlow(r);let e="link"===s?await d.link():await d.authenticate(),t=e.oAuthTokens?.accessToken;return console.debug(),t}catch(i){let o=e(i);if(o.privyErrorCode)throw new r(o.message||"Invalid code during cross-app auth flow.",void 0,o.privyErrorCode);if("User denied confirmation during cross-app auth flow"===o.message)throw new r("Invalid code during cross-app auth flow.",void 0,t.OAUTH_USER_DENIED);throw new r("Invalid code during cross-app auth flow.",void 0,t.UNKNOWN_AUTH_ERROR)}}export{c as authenticateCrossAppAccount,d as getCrossAppAuthorizationUrl,s as getProviderAppMetadata};
