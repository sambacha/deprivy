import{jsx as o,jsxs as n,Fragment as t}from"react/jsx-runtime";import{ModalScreen as e}from"./index.mjs";import r from"@heroicons/react/24/outline/ArrowTopRightOnSquareIcon";import i from"@heroicons/react/24/solid/DocumentCheckIcon";import{styled as s}from"styled-components";import{shouldProceedtoEmbeddedWalletCreationFlow as c}from"../client/user.mjs";import{SecondaryButton as m,PrimaryButton as a}from"../components/Button.mjs";import{BlobbyFooter as l}from"../components/ModalFooter.mjs";import{ModalHeader as p}from"../components/ModalHeader.mjs";import{usePrivyInternal as h}from"../hooks/internal-context.mjs";import{usePrivyModal as j}from"../hooks/modal-context.mjs";import{usePrivyContext as d}from"../hooks/privy-context.mjs";import{LoginMethodContainer as u,LoginMethodButtonLink as f}from"./LandingScreen/styles.mjs";import{Title as y,SubTitle as g}from"./MfaScreens/StyledComponents.mjs";import"viem/utils";import"../components/Loader.mjs";import"../configuration/context.mjs";import"react";import"../config.mjs";import"../configuration/defaultClientConfig.mjs";import"../constants.mjs";import"../configuration/login-methods.mjs";import"../configuration/wallets.mjs";import"../connectors/chains/index.mjs";import"../connectors/chains/arbitrum.mjs";import"../connectors/chains/arbitrumSepolia.mjs";import"../connectors/chains/avalanche.mjs";import"../connectors/chains/avalancheFuji.mjs";import"../connectors/chains/base.mjs";import"../connectors/chains/baseSepolia.mjs";import"../connectors/chains/berachainArtio.mjs";import"../connectors/chains/celo.mjs";import"../connectors/chains/celoAlfajores.mjs";import"../connectors/chains/filecoin.mjs";import"../connectors/chains/filecoinCalibration.mjs";import"../connectors/chains/garnetHolesky.mjs";import"../connectors/chains/holesky.mjs";import"../connectors/chains/linea.mjs";import"../connectors/chains/lineaTestnet.mjs";import"../connectors/chains/lukso.mjs";import"../connectors/chains/mainnet.mjs";import"../connectors/chains/optimism.mjs";import"../connectors/chains/optimismSepolia.mjs";import"../connectors/chains/polygon.mjs";import"../connectors/chains/polygonAmoy.mjs";import"../connectors/chains/redstone.mjs";import"../connectors/chains/sepolia.mjs";import"../connectors/chains/zora.mjs";import"../connectors/chains/zoraSepolia.mjs";import"../connectors/chains/zoraTestnet.mjs";import"../connectors/chains/utils.mjs";import"../lib/solana/index.mjs";import"../theme.mjs";import"tinycolor2";import"../lib/cybr53.mjs";import"../svg/protected-by-privy.mjs";import"@heroicons/react/24/outline/ArrowLeftIcon";import"@heroicons/react/24/outline/ArrowRightIcon";import"@heroicons/react/24/outline/QuestionMarkCircleIcon";import"@heroicons/react/24/outline/XMarkIcon";import"../hooks/index.mjs";import"../components/PrefetchedImage.mjs";const v=()=>{let{user:n,logout:t}=d(),{app:r,onUserCloseViaDialogOrKeybindRef:i,setModalData:s,navigate:m}=j(),{acceptTerms:a,closePrivyModal:l,createAnalyticsEvent:p}=h(),u=o=>{o?.preventDefault(),l({shouldCallAuthOnSuccess:!1}),t()};i.current=u;/*#__PURE__*/return o(C,{termsAndConditionsUrl:r?.legal.termsAndConditionsUrl,privacyPolicyUrl:r?.legal.privacyPolicyUrl,onAccept:async o=>{o.preventDefault(),await a(),n&&c(n,r?.embeddedWallets?.createOnLogin)?(s({createWallet:{onSuccess:()=>{},onFailure:o=>{console.error(o),p({eventName:"embedded_wallet_creation_failure_logout",payload:{error:o,screen:"AffirmativeConsentScreen"}}),t()},callAuthOnSuccessOnClose:!0}}),m(e.EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN)):l()},onDecline:u})},C=({termsAndConditionsUrl:e,privacyPolicyUrl:s,onAccept:c,onDecline:h})=>/*#__PURE__*/n(t,{children:[/*#__PURE__*/o(p,{closeable:!1}),/*#__PURE__*/o(i,{width:56,height:56,fill:"var(--privy-color-accent)",style:{margin:"auto"}}),/*#__PURE__*/o(y,{style:{marginTop:24},children:"One last step"}),/*#__PURE__*/o(g,{children:"By signing up, you agree to our terms and privacy policy."}),/*#__PURE__*/n(u,{style:{marginTop:24},children:[e&&/*#__PURE__*/n(f,{target:"_blank",href:e,children:["View Terms ",/*#__PURE__*/o(r,{style:{marginLeft:"auto"}})]}),s&&/*#__PURE__*/n(f,{target:"_blank",href:s,children:["View Privacy Policy ",/*#__PURE__*/o(r,{style:{marginLeft:"auto"}})]})]}),/*#__PURE__*/n(A,{style:{marginTop:24},children:[/*#__PURE__*/o(m,{onClick:h,children:"No thanks"}),/*#__PURE__*/o(a,{onClick:c,children:"Accept"})]}),/*#__PURE__*/o(l,{})]});let A=/*#__PURE__*/s.div.withConfig({displayName:"ButtonsContainer",componentId:"sc-4aff18c8-0"})(["display:flex;gap:10px;"]);export{v as AffirmativeConsentScreen,C as View};
