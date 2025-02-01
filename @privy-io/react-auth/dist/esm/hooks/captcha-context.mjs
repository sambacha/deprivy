import{jsx as e}from"react/jsx-runtime";import{notImplemented as t}from"./index.mjs";import{createContext as r,useRef as s,useState as o,useMemo as i,useContext as a}from"react";import{PrivyError as n,PrivyErrorCode as c}from"../errors.mjs";import{pollForResult as u}from"../utils/index.mjs";import"ofetch";import"../connectors/get-legacy-injected-providers.mjs";import"../connectors/is-wallet-installed.mjs";import"../utils/eth/getPublicClient.mjs";import"viem";const d=/*#__PURE__*/r({siteKey:"",enabled:!1,appId:void 0,token:void 0,error:void 0,status:"disabled",setToken:t,setError:t,setExecuting:t,waitForResult:()=>Promise.resolve(""),ref:{current:null},remove:t,reset:t,execute:t});class l extends n{constructor(e,t,r){super(e||"Captcha failed"),this.type="Captcha",t instanceof Error&&(this.cause=t),this.privyErrorCode=r}}const m=({children:t,id:r,captchaSiteKey:a,captchaEnabled:n})=>{let m=s(null),[p,v]=o(),[h,f]=o(),[x,y]=o(!1),j=i((()=>n?x||p||h?!x||p||h?p&&!h?{status:"success",token:p}:h?{status:"error",error:h}:{status:"ready"}:{status:"loading"}:{status:"ready"}:{status:"disabled"}),[n,p,h,x]);/*#__PURE__*/return e(d.Provider,{value:{...j,ref:m,enabled:n,siteKey:a,appId:r,setToken:v,setError:f,setExecuting:y,remove(){n&&(m.current?.remove(),y(!1),f(void 0),v(void 0))},reset(){n&&(m.current?.reset(),y(!1),f(void 0),v(void 0))},execute(){n&&(y(!0),m.current?.execute())},async waitForResult(){if(!n)return"";try{return await u((()=>m.current?.getResponse()),{interval:200,timeout:2e4})}catch(e){throw new l("Captcha failed",null,c.CAPTCHA_TIMEOUT)}}},children:t})},p=()=>a(d);export{d as CaptchaContext,l as CaptchaError,m as CaptchaProvider,p as useCaptcha};
