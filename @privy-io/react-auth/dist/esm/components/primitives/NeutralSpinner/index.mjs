import{jsx as i,jsxs as e}from"react/jsx-runtime";import{styled as n}from"styled-components";const t=({size:n})=>/*#__PURE__*/i(o,{$size:n,children:/*#__PURE__*/e(r,{children:[/*#__PURE__*/i(a,{}),/*#__PURE__*/i(s,{})]})});let o=/*#__PURE__*/n.div.withConfig({displayName:"LoadingContainer",componentId:"sc-3ddaba1c-0"})(["--spinner-size:",";display:flex;justify-content:center;align-items:center;flex-grow:1;@media all and (display-mode:standalone){margin-bottom:30px;}"],(i=>i.$size?i.$size:"96px")),r=/*#__PURE__*/n.div.withConfig({displayName:"SpinnerContainer",componentId:"sc-3ddaba1c-1"})(["position:relative;height:var(--spinner-size);width:var(--spinner-size);opacity:1;animation:fadein 200ms ease;"]),a=/*#__PURE__*/n.div.withConfig({displayName:"CircleFixed",componentId:"sc-3ddaba1c-2"})(["position:absolute;top:0;right:0;bottom:0;left:0;width:var(--spinner-size);height:var(--spinner-size);&&{border:4px solid #f1f2f9;border-radius:50%;}"]),s=/*#__PURE__*/n.div.withConfig({displayName:"CircleRotate",componentId:"sc-3ddaba1c-3"})(["position:absolute;top:0;right:0;bottom:0;left:0;width:var(--spinner-size);height:var(--spinner-size);animation:spin 1200ms linear infinite;&&{border:4px solid;border-color:#cbcde1 transparent transparent transparent;border-radius:50%;}@keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}"]);export{t as NeutralSpinner};
