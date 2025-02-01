import{jsxs as o,Fragment as r,jsx as e}from"react/jsx-runtime";import{styled as t}from"styled-components";const i=({success:t,fail:i})=>/*#__PURE__*/o(r,{children:[/*#__PURE__*/e(c,{className:t?"success":i?"fail":""}),/*#__PURE__*/e(a,{className:t?"success":i?"fail":""})]}),c=/*#__PURE__*/t.span.withConfig({displayName:"Loader",componentId:"sc-ce7792e2-0"})(["&&{width:82px;height:82px;border-width:4px;border-style:solid;border-color:",";border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1.2s linear infinite;transition:border-color 800ms;}@keyframes rotation{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}&&&.success{border-color:var(--privy-color-success);border-bottom-color:var(--privy-color-success);}&&&.fail{border-color:var(--privy-color-error);border-bottom-color:var(--privy-color-error);}"],(o=>o.color??"var(--privy-color-accent)")),a=/*#__PURE__*/t(c).withConfig({displayName:"LoaderFaint",componentId:"sc-ce7792e2-1"})(["&&{border-bottom-color:",";animation:none;opacity:0.5;}"],(o=>o.color??"var(--privy-color-accent)")),s=o=>/*#__PURE__*/e(n,{color:o.color||"var(--privy-color-foreground-3)"});let n=/*#__PURE__*/t(c).withConfig({displayName:"StyledButtonLoader",componentId:"sc-ce7792e2-2"})(["&&{height:1rem;width:1rem;margin:2px 0;border-width:1.5px;transition:border-color 200ms ease;}"]);export{s as ButtonLoader,i as ConnectionLoader,c as Loader,a as LoaderFaint};
