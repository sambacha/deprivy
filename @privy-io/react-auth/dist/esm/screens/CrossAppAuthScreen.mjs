import{jsxs as o,Fragment as e,jsx as t}from"react/jsx-runtime";import{useState as r,useEffect as n,useMemo as i}from"react";import{styled as s}from"styled-components";import{shouldProceedtoEmbeddedWalletCreationFlow as c}from"../client/user.mjs";import{RefactorSpacerTop as m,FixedGappedContainer as a,RefactorSpacerBottom as p}from"../components/Layouts.mjs";import{ConnectionLoader as l}from"../components/Loader.mjs";import{ModalFooter as u}from"../components/ModalFooter.mjs";import{ModalHeader as h}from"../components/ModalHeader.mjs";import{ProviderAppLogo as d}from"../components/ProviderAppLogo.mjs";import j from"../components/layout/StackedContainer.mjs";import{useAppConfig as f}from"../configuration/context.mjs";import{DEFAULT_SUCCESS_SCREEN_DURATION_MS as g}from"../constants.mjs";import{RunEffectOnce as y}from"../effect.mjs";import{PrivyClientError as A,PrivyApiError as C}from"../errors.mjs";import{usePrivyInternal as b}from"../hooks/internal-context.mjs";import{usePrivyModal as x}from"../hooks/modal-context.mjs";import{useLogout as S}from"../hooks/useLogout.mjs";import{ModalScreen as v}from"./index.mjs";import"viem/utils";import"../svg/protected-by-privy.mjs";import"../config.mjs";import"../configuration/defaultClientConfig.mjs";import"../configuration/login-methods.mjs";import"../configuration/wallets.mjs";import"../connectors/chains/index.mjs";import"../connectors/chains/arbitrum.mjs";import"../connectors/chains/arbitrumSepolia.mjs";import"../connectors/chains/avalanche.mjs";import"../connectors/chains/avalancheFuji.mjs";import"../connectors/chains/base.mjs";import"../connectors/chains/baseSepolia.mjs";import"../connectors/chains/berachainArtio.mjs";import"../connectors/chains/celo.mjs";import"../connectors/chains/celoAlfajores.mjs";import"../connectors/chains/filecoin.mjs";import"../connectors/chains/filecoinCalibration.mjs";import"../connectors/chains/garnetHolesky.mjs";import"../connectors/chains/holesky.mjs";import"../connectors/chains/linea.mjs";import"../connectors/chains/lineaTestnet.mjs";import"../connectors/chains/lukso.mjs";import"../connectors/chains/mainnet.mjs";import"../connectors/chains/optimism.mjs";import"../connectors/chains/optimismSepolia.mjs";import"../connectors/chains/polygon.mjs";import"../connectors/chains/polygonAmoy.mjs";import"../connectors/chains/redstone.mjs";import"../connectors/chains/sepolia.mjs";import"../connectors/chains/zora.mjs";import"../connectors/chains/zoraSepolia.mjs";import"../connectors/chains/zoraTestnet.mjs";import"../connectors/chains/utils.mjs";import"../lib/solana/index.mjs";import"../theme.mjs";import"tinycolor2";import"../lib/cybr53.mjs";import"@heroicons/react/24/outline/ArrowLeftIcon";import"@heroicons/react/24/outline/ArrowRightIcon";import"@heroicons/react/24/outline/QuestionMarkCircleIcon";import"@heroicons/react/24/outline/XMarkIcon";import"../hooks/index.mjs";import"ofetch";import"../components/PrefetchedImage.mjs";import"../hooks/events-context.mjs";import"../hooks/privy-context.mjs";const T=()=>{let s=f(),{data:T,navigate:k,setModalData:w,onUserCloseViaDialogOrKeybindRef:_}=x(),{crossAppAuthFlow:I,updateWallets:O,closePrivyModal:L,createAnalyticsEvent:M}=b(),{logout:N}=S(),[U,F]=r({}),R=T?.crossAppAuth,D={id:R.appId,name:R.name,logoUrl:R.logoUrl},P=new A(`There was an issue connecting your ${D.name} account. Please try again.`),$=new y((async o=>{if(R.popup)try{let e=await I({appId:o,popup:R.popup,action:R.action});F({data:e})}catch(o){o instanceof A?F({error:o}):(o instanceof C&&R.popup&&R.popup.close(),F({error:P}))}else F({error:P})})),W=()=>{U.data&&(O(),R.onSuccess(U.data),L({shouldCallAuthOnSuccess:!0,isSuccess:!0})),R.onError(U.error??new A("User canceled flow")),L({shouldCallAuthOnSuccess:!1,isSuccess:!1})};_.current=W,n((()=>{D.id.length&&$.execute(D.id)}),[D.id]),n((()=>{if(!U.data)return;let o=U.data;if(s.legal.requireUsersAcceptTerms&&!o.hasAcceptedTerms){let o=setTimeout((()=>{k(v.AFFIRMATIVE_CONSENT_SCREEN)}),g);return()=>clearTimeout(o)}if(c(o,s.embeddedWallets?.createOnLogin)){let o=setTimeout((()=>{w({createWallet:{onSuccess:()=>{},onFailure:o=>{console.error(o),M({eventName:"embedded_wallet_creation_failure_logout",payload:{error:o,provider:`privy:${D.id}`,screen:"CrossAppAuthScreen"}}),N()},callAuthOnSuccessOnClose:!0}}),k(v.EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN)}),g);return()=>clearTimeout(o)}let e=setTimeout(W,g);return()=>clearTimeout(e)}),[U.data]);let{title:z,subtitle:H}=i((()=>U.data?{title:`Successfully connected with ${D.name}`,subtitle:"You're good to go!"}:U.error?{title:"Authentication failed",subtitle:U.error.message}:{title:`Connecting to ${D.name}`,subtitle:`Please check the pop-up from ${D.name} to continue`}),[U,D.name]);/*#__PURE__*/return o(e,{children:[/*#__PURE__*/t(h,{onClose:W}),/*#__PURE__*/t(m,{}),/*#__PURE__*/o(E,{children:[/*#__PURE__*/t(j,{children:/*#__PURE__*/o("div",{children:[/*#__PURE__*/t(l,{success:!!U.data,fail:!!U.error}),/*#__PURE__*/t(d,{name:D.name,logoUrl:D.logoUrl})]})}),/*#__PURE__*/o(a,{children:[/*#__PURE__*/t("h3",{children:z}),/*#__PURE__*/t("p",{children:H})]})]}),/*#__PURE__*/t(p,{}),/*#__PURE__*/t(u,{})]})};let E=/*#__PURE__*/s.div.withConfig({displayName:"ConnectContainer",componentId:"sc-2ae0702a-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin-left:27px;margin-right:27px;gap:24px;"]);export{T as CrossAppAuthScreen};
