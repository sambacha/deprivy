import{jsxs as o,Fragment as n,jsx as i}from"react/jsx-runtime";import r from"@heroicons/react/24/outline/ClipboardDocumentCheckIcon";import t from"@heroicons/react/24/outline/ClipboardDocumentIcon";import e from"@heroicons/react/24/outline/ExclamationCircleIcon";import{useState as c}from"react";import{styled as s}from"styled-components";import{PrimaryButton as a}from"../../components/Button.mjs";import{ModalFooter as m}from"../../components/ModalFooter.mjs";import{ModalHeader as p}from"../../components/ModalHeader.mjs";import{usePrivyInternal as l}from"../../hooks/internal-context.mjs";import{getSolanaTransactionExplorerUrl as d,getSolanaNetworkFromRpcEndpoint as h}from"../../lib/solana/index.mjs";import"../../components/Loader.mjs";import"../../configuration/context.mjs";import"../../config.mjs";import"../../configuration/defaultClientConfig.mjs";import"../../constants.mjs";import"../../configuration/login-methods.mjs";import"../../configuration/wallets.mjs";import"../../connectors/chains/index.mjs";import"../../connectors/chains/arbitrum.mjs";import"../../connectors/chains/arbitrumSepolia.mjs";import"../../connectors/chains/avalanche.mjs";import"../../connectors/chains/avalancheFuji.mjs";import"../../connectors/chains/base.mjs";import"../../connectors/chains/baseSepolia.mjs";import"../../connectors/chains/berachainArtio.mjs";import"../../connectors/chains/celo.mjs";import"../../connectors/chains/celoAlfajores.mjs";import"../../connectors/chains/filecoin.mjs";import"../../connectors/chains/filecoinCalibration.mjs";import"../../connectors/chains/garnetHolesky.mjs";import"../../connectors/chains/holesky.mjs";import"../../connectors/chains/linea.mjs";import"../../connectors/chains/lineaTestnet.mjs";import"../../connectors/chains/lukso.mjs";import"../../connectors/chains/mainnet.mjs";import"../../connectors/chains/optimism.mjs";import"../../connectors/chains/optimismSepolia.mjs";import"../../connectors/chains/polygon.mjs";import"../../connectors/chains/polygonAmoy.mjs";import"../../connectors/chains/redstone.mjs";import"../../connectors/chains/sepolia.mjs";import"../../connectors/chains/zora.mjs";import"../../connectors/chains/zoraSepolia.mjs";import"../../connectors/chains/zoraTestnet.mjs";import"../../connectors/chains/utils.mjs";import"../../theme.mjs";import"tinycolor2";import"../../lib/cybr53.mjs";import"../../svg/protected-by-privy.mjs";import"@heroicons/react/24/outline/ArrowLeftIcon";import"@heroicons/react/24/outline/ArrowRightIcon";import"@heroicons/react/24/outline/QuestionMarkCircleIcon";import"@heroicons/react/24/outline/XMarkIcon";import"../../hooks/index.mjs";let g=()=>/*#__PURE__*/o(j,{children:[/*#__PURE__*/i(C,{}),/*#__PURE__*/i(w,{})]});const f=({transactionError:r,chainId:t,onClose:e,onRetry:s,network:a,connection:f,transactionHash:j})=>{let{chains:w}=l(),[C,S]=c(!1),{errorCode:T,errorMessage:z}=((o,n)=>{if("ethereum"===n)return{errorCode:o.details??o.message,errorMessage:o.shortMessage};let i=o.txSignature,r=o?.transactionMessage||"Something went wrong.";if(Array.isArray(o.logs)){let n=o.logs.find((o=>/insufficient (lamports|funds)/gi.test(o)));n&&(r=n)}return{transactionHash:i,errorMessage:r}})(r,a),E=(({chains:o,chainId:n,network:i,connection:r,transactionHash:t})=>"ethereum"===i?o.find((o=>o.id===n))?.blockExplorers?.default.url??"https://etherscan.io":d(t||"",h(r?.rpcEndpoint||"")))({chains:w,chainId:t,network:a,connection:f,transactionHash:j});/*#__PURE__*/return o(n,{children:[/*#__PURE__*/i(p,{onClose:e}),/*#__PURE__*/o(x,{children:[/*#__PURE__*/i(g,{}),/*#__PURE__*/i(u,{children:T}),/*#__PURE__*/i(y,{children:"Please try again."}),/*#__PURE__*/o(k,{children:[/*#__PURE__*/i(v,{children:"Error message"}),/*#__PURE__*/i(N,{$clickable:!1,children:z})]}),j&&/*#__PURE__*/o(k,{children:[/*#__PURE__*/i(v,{children:"Transaction hash"}),/*#__PURE__*/o(I,{children:["Copy this hash to view details about the transaction on a"," ",/*#__PURE__*/i("u",{children:/*#__PURE__*/i("a",{href:E,children:"block explorer"})}),"."]}),/*#__PURE__*/o(N,{$clickable:!0,onClick:async()=>{await navigator.clipboard.writeText(j),S(!0)},children:[j,/*#__PURE__*/i(M,{clicked:C})]})]}),/*#__PURE__*/i(b,{onClick:()=>s({resetNonce:!!j}),children:"Retry transaction"})]}),/*#__PURE__*/i(m,{})]})};let x=/*#__PURE__*/s.div.withConfig({displayName:"TransactionErrorScreenContainer",componentId:"sc-a4816d51-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;"]),u=/*#__PURE__*/s.span.withConfig({displayName:"ErrorCode",componentId:"sc-a4816d51-1"})(["color:var(--privy-color-foreground);text-align:center;font-size:1.125rem;font-weight:500;line-height:1.25rem;text-align:center;margin:10px;"]),y=/*#__PURE__*/s.span.withConfig({displayName:"Subtitle",componentId:"sc-a4816d51-2"})(["margin-top:4px;margin-bottom:10px;color:var(--privy-color-foreground-3);text-align:center;font-size:0.875rem;font-style:normal;font-weight:400;line-height:20px;letter-spacing:-0.008px;"]),j=/*#__PURE__*/s.div.withConfig({displayName:"CircleContainer",componentId:"sc-a4816d51-3"})(["position:relative;width:60px;height:60px;margin:10px;display:flex;justify-content:center;align-items:center;"]),w=/*#__PURE__*/s(e).withConfig({displayName:"StyledExclamationCircleIcon",componentId:"sc-a4816d51-4"})(["position:absolute;width:35px;height:35px;color:var(--privy-color-error);"]),C=/*#__PURE__*/s.div.withConfig({displayName:"StyledRedCircle",componentId:"sc-a4816d51-5"})(["position:absolute;width:60px;height:60px;border-radius:50%;background-color:var(--privy-color-error);opacity:0.1;"]),b=/*#__PURE__*/s(a).withConfig({displayName:"RetryButton",componentId:"sc-a4816d51-6"})(["&&{margin-top:24px;}transition:color 350ms ease,background-color 350ms ease;"]),v=/*#__PURE__*/s.span.withConfig({displayName:"TextBoxTitle",componentId:"sc-a4816d51-7"})(["width:100%;text-align:left;font-size:0.825rem;color:var(--privy-color-foreground);padding:4px;"]),k=/*#__PURE__*/s.div.withConfig({displayName:"TextBoxContainer",componentId:"sc-a4816d51-8"})(["width:100%;margin:5px;display:flex;flex-direction:column;justify-content:center;align-items:center;"]),I=/*#__PURE__*/s.text.withConfig({displayName:"HelperText",componentId:"sc-a4816d51-9"})(["position:relative;width:100%;padding:5px;font-size:0.8rem;color:var(--privy-color-foreground-3);text-align:left;word-wrap:break-word;"]),N=/*#__PURE__*/s.span.withConfig({displayName:"TextBox",componentId:"sc-a4816d51-10"})(["position:relative;width:100%;background-color:var(--privy-color-background-2);padding:8px 12px;border-radius:10px;margin-top:5px;font-size:14px;color:var(--privy-color-foreground-3);text-align:left;word-wrap:break-word;",""],(o=>o.$clickable&&"cursor: pointer;\n  transition: background-color 0.3s;\n  padding-right: 45px;\n\n  &:hover {\n    background-color: var(--privy-color-foreground-4);\n  }")),S=/*#__PURE__*/s(t).withConfig({displayName:"StyledClipboardIcon",componentId:"sc-a4816d51-11"})(["position:absolute;top:13px;right:13px;width:24px;height:24px;"]),T=/*#__PURE__*/s(r).withConfig({displayName:"StyledClipboardCheckIcon",componentId:"sc-a4816d51-12"})(["position:absolute;top:13px;right:13px;width:24px;height:24px;"]),M=({clicked:o})=>/*#__PURE__*/i(o?T:S,{});export{f as TransactionErrorView};
