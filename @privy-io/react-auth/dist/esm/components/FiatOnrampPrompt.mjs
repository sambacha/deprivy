import{jsxs as e,jsx as n,Fragment as o}from"react/jsx-runtime";import t from"@heroicons/react/24/outline/ClockIcon";import i from"@heroicons/react/24/outline/EyeSlashIcon";import a from"@heroicons/react/24/outline/LinkIcon";import{styled as r}from"styled-components";import{PrimaryButtonLink as c}from"./Button.mjs";import{Moonpay as l}from"../svg/moonpay.mjs";import"./Loader.mjs";const m=({title:o,desc:t,icon:i})=>/*#__PURE__*/e(y,{children:[/*#__PURE__*/n(w,{children:i}),/*#__PURE__*/e(u,{children:[/*#__PURE__*/n(f,{children:o}),/*#__PURE__*/n(g,{children:t})]})]}),d=({app:r,signedUrl:d,onContinue:f})=>/*#__PURE__*/e(o,{children:[/*#__PURE__*/e(p,{children:[/*#__PURE__*/n(l,{size:"3.75rem"}),/*#__PURE__*/e(h,{children:[r?.name," uses ",/*#__PURE__*/n("span",{style:{fontWeight:"bold"},children:"Moonpay"})," to fund your account"]}),/*#__PURE__*/e(x,{children:[/*#__PURE__*/n(m,{icon:/*#__PURE__*/n(a,{width:"1rem"}),title:"Purchase assets to fund your account",desc:/*#__PURE__*/e(o,{children:["Connect a payment method (",/*#__PURE__*/n("strong",{children:"debit card recommended"}),") to purchase digital assets."]})}),/*#__PURE__*/n(m,{icon:/*#__PURE__*/n(t,{width:"1rem"}),title:"Compliance takes time",desc:"Funding a new account may take a few hours. You'll be good to go thereafter."}),/*#__PURE__*/n(m,{icon:/*#__PURE__*/n(i,{width:"1rem"}),title:"Your data belongs to you",desc:"MoonPay does not sell your data and will only use it with your permission."})]}),/*#__PURE__*/n(C,{className:"mobile-only"})]}),/*#__PURE__*/n(s,{children:"By clicking continue, you will be taken to MoonPay in a new tab."}),/*#__PURE__*/n(c,{disabled:!d,href:d??"#",target:"_blank",rel:"noopener noreferrer",onClick:f,children:"Continue to Moonpay"})]});let s=/*#__PURE__*/r.span.withConfig({displayName:"ButtonAnnotation",componentId:"sc-2a06ac69-0"})(["display:inline-block;color:var(--privy-color-foreground-3);text-align:center;font-size:0.625rem;font-style:normal;font-weight:400;line-height:140%;margin-bottom:0.25rem;"]),p=/*#__PURE__*/r.div.withConfig({displayName:"ModalContent",componentId:"sc-2a06ac69-1"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1.5rem 0;"]),h=/*#__PURE__*/r.span.withConfig({displayName:"Title",componentId:"sc-2a06ac69-2"})(["color:var(--privy-color-foreground);text-align:center;font-size:1.125rem;font-weight:500;line-height:1.25rem;margin:1.5rem 0;text-align:center;max-width:19.5rem;"]),f=/*#__PURE__*/r.span.withConfig({displayName:"OnrampStepTitle",componentId:"sc-2a06ac69-3"})(["color:var(--privy-color-foreground);font-size:0.875rem;font-weight:500;line-height:1.225rem;width:100%;"]),g=/*#__PURE__*/r.span.withConfig({displayName:"OnrampStepDesc",componentId:"sc-2a06ac69-4"})(["color:var(--privy-color-foreground-2);font-size:0.875rem;font-weight:400;line-height:1.225rem;"]),y=/*#__PURE__*/r.div.withConfig({displayName:"OnrampStepContainer",componentId:"sc-2a06ac69-5"})(["display:flex;align-items:flex-start;gap:0.5rem;align-self:stretch;"]),u=/*#__PURE__*/r.div.withConfig({displayName:"OnrampStepTextContainer",componentId:"sc-2a06ac69-6"})(["display:flex;flex-direction:column;gap:0.25rem;align-items:flex-start;text-align:left;flex:1 0 0;"]),w=/*#__PURE__*/r.div.withConfig({displayName:"OnRampStepIcon",componentId:"sc-2a06ac69-7"})(["padding-top:2px;"]),x=/*#__PURE__*/r.div.withConfig({displayName:"OnrampSteps",componentId:"sc-2a06ac69-8"})(["display:flex;flex-direction:column;gap:1.25rem;margin:0 0.5rem;"]),C=/*#__PURE__*/r.div.withConfig({displayName:"Spacer",componentId:"sc-2a06ac69-9"})(["margin:30px 0;"]);export{d as FiatOnrampPrompt,m as OnrampStep};
