import{jsxs as o,Fragment as t,jsx as i}from"react/jsx-runtime";import{ModalScreen as n}from"./index.mjs";import{styled as r}from"styled-components";import{PrimaryButton as s}from"../components/Button.mjs";import{BlobbyFooter as e}from"../components/ModalFooter.mjs";import{ModalHeader as c}from"../components/ModalHeader.mjs";import{useCaptcha as a}from"../hooks/captcha-context.mjs";import{usePrivyInternal as m}from"../hooks/internal-context.mjs";import{usePrivyModal as p}from"../hooks/modal-context.mjs";import{FaceId as l}from"../svg/face-id.mjs";import{FingerPrint as h}from"../svg/fingerprint.mjs";import{AppLogoContainer as j,Title as d,SubTitle as u,BottomSection as g,PrimaryTextButton as y}from"./MfaScreens/StyledComponents.mjs";import"../components/Loader.mjs";import"../configuration/context.mjs";import"react";import"../config.mjs";import"../configuration/defaultClientConfig.mjs";import"../constants.mjs";import"../configuration/login-methods.mjs";import"../configuration/wallets.mjs";import"../connectors/chains/index.mjs";import"../connectors/chains/arbitrum.mjs";import"../connectors/chains/arbitrumSepolia.mjs";import"../connectors/chains/avalanche.mjs";import"../connectors/chains/avalancheFuji.mjs";import"../connectors/chains/base.mjs";import"../connectors/chains/baseSepolia.mjs";import"../connectors/chains/berachainArtio.mjs";import"../connectors/chains/celo.mjs";import"../connectors/chains/celoAlfajores.mjs";import"../connectors/chains/filecoin.mjs";import"../connectors/chains/filecoinCalibration.mjs";import"../connectors/chains/garnetHolesky.mjs";import"../connectors/chains/holesky.mjs";import"../connectors/chains/linea.mjs";import"../connectors/chains/lineaTestnet.mjs";import"../connectors/chains/lukso.mjs";import"../connectors/chains/mainnet.mjs";import"../connectors/chains/optimism.mjs";import"../connectors/chains/optimismSepolia.mjs";import"../connectors/chains/polygon.mjs";import"../connectors/chains/polygonAmoy.mjs";import"../connectors/chains/redstone.mjs";import"../connectors/chains/sepolia.mjs";import"../connectors/chains/zora.mjs";import"../connectors/chains/zoraSepolia.mjs";import"../connectors/chains/zoraTestnet.mjs";import"../connectors/chains/utils.mjs";import"../lib/solana/index.mjs";import"../theme.mjs";import"tinycolor2";import"../lib/cybr53.mjs";import"../svg/protected-by-privy.mjs";import"@heroicons/react/24/outline/ArrowLeftIcon";import"@heroicons/react/24/outline/ArrowRightIcon";import"@heroicons/react/24/outline/QuestionMarkCircleIcon";import"@heroicons/react/24/outline/XMarkIcon";import"../hooks/index.mjs";import"../errors.mjs";import"ofetch";import"../utils/index.mjs";import"../connectors/get-legacy-injected-providers.mjs";import"../connectors/is-wallet-installed.mjs";import"../utils/eth/getPublicClient.mjs";import"viem";import"../components/PrefetchedImage.mjs";const f=()=>{let{enabled:r,token:f}=a(),{lastScreen:k,currentScreen:v,navigateBack:A,navigate:E,setModalData:w}=p(),{initSignupWithPasskey:I,initLoginWithPasskey:C}=m();/*#__PURE__*/return o(t,{children:[/*#__PURE__*/i(c,{backFn:k&&v!==k?A:void 0}),/*#__PURE__*/i(j,{children:/*#__PURE__*/o(S,{children:[/*#__PURE__*/i(l,{}),/*#__PURE__*/i(h,{})]})}),/*#__PURE__*/i(d,{children:"Log in or create a new account?"}),/*#__PURE__*/i(u,{children:"Create a new account with a passkey or use a passkey to log in to an existing account."}),/*#__PURE__*/o(g,{children:[/*#__PURE__*/i(s,{onClick:async()=>{r&&!f?(w({passkeyAuthModalData:{passkeySignupFlow:!0},captchaModalData:{callback:o=>I({captchaToken:o,withPrivyUi:!0}),userIntentRequired:!1,onSuccessNavigateTo:n.AWAITING_PASSKEY_SYSTEM_DIALOGUE,onErrorNavigateTo:n.ERROR_SCREEN}}),E(n.CAPTCHA_SCREEN)):(await I({withPrivyUi:!0}),w({passkeyAuthModalData:{passkeySignupFlow:!0}}),E(n.AWAITING_PASSKEY_SYSTEM_DIALOGUE))},children:"Create new account"}),/*#__PURE__*/i(y,{onClick:async()=>{r&&!f?(w({passkeyAuthModalData:{passkeySignupFlow:!1},captchaModalData:{callback:o=>C({captchaToken:o,withPrivyUi:!0}),userIntentRequired:!1,onSuccessNavigateTo:n.AWAITING_PASSKEY_SYSTEM_DIALOGUE,onErrorNavigateTo:n.ERROR_SCREEN}}),E(n.CAPTCHA_SCREEN)):(await C({withPrivyUi:!0}),w({passkeyAuthModalData:{passkeySignupFlow:!1}}),E(n.AWAITING_PASSKEY_SYSTEM_DIALOGUE))},children:"Log in with a passkey"})]}),/*#__PURE__*/i(e,{})]})},S=/*#__PURE__*/r.div.withConfig({displayName:"DoubleIconWrapper",componentId:"sc-fd7f30b7-0"})(["display:flex;align-items:center;justify-content:center;width:180px;height:90px;border-radius:50%;svg + svg{margin-left:12px;}> svg{z-index:2;color:var(--privy-color-accent);stroke:var(--privy-color-accent);fill:var(--privy-color-accent);}"]);export{S as DoubleIconWrapper,f as PasskeySelectSignupOrLogin};
