import{useState as t,useEffect as r}from"react";import{usePrivyInternal as e}from"../../hooks/internal-context.mjs";import{usePrivyContext as o}from"../../hooks/privy-context.mjs";import{prepareTransactionRequest as i}from"../../lib/viem/prepareTransactionRequest.mjs";import"../../hooks/index.mjs";import"../../lib/viem/toViemTransactionSerializable.mjs";import"viem";import"../../errors.mjs";import"ofetch";const s=(s,m,n)=>{let[a,l]=t(null),{getAccessToken:c}=o(),{walletProxy:p}=e();return r((()=>{a&&l(null),(async()=>{if(!await c()||!p||!m)return null;let t=[],r=!0,e=await i(s,n,m.address).catch((e=>(e.details.includes("insufficient funds")?r=!1:t.push(e),s)));return{tx:e,totalGasEstimate:e.gas,hasFunds:r,errors:t}})().then(l)}),[s]),a};export{s as usePrepareTransaction};
