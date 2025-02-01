import { createContext as t, useContext as e } from "react";
import { notImplemented as i } from "./index.mjs";
const a = /*#__PURE__*/t({
  setAuthenticated: i,
  setUser: i,
  isNewUserThisSession: false,
  walletConnectionStatus: null,
  connectors: [],
  solanaWallets: [],
  rpcConfig: {
    rpcUrls: {}
  },
  showFiatPrices: true,
  chains: [],
  clientAnalyticsId: null,
  pendingTransaction: null,
  client: null,
  appId: "notAdded",
  customAuthStatus: {
    status: "not-enabled"
  },
  hideWalletUIs: {
    current: false
  },
  nativeTokenSymbolForChainId: i,
  initializeWalletProxy: i,
  getAuthMeta: i,
  getAuthFlow: i,
  closePrivyModal: i,
  openPrivyModal: i,
  connectWallet: i,
  initLoginWithWallet: i,
  loginWithWallet: i,
  initLoginWithFarcaster: i,
  loginWithFarcaster: i,
  loginWithCode: i,
  initLoginWithEmail: i,
  initLoginWithSms: i,
  initUpdateEmail: i,
  initUpdatePhone: i,
  resendEmailCode: i,
  resendSmsCode: i,
  initLoginWithHeadlessOAuth: i,
  loginWithHeadlessOAuth: i,
  crossAppAuthFlow: i,
  initLoginWithOAuth: i,
  recoveryOAuthFlow: i,
  loginWithOAuth: i,
  passkeyAuthState: {
    status: "initial"
  },
  setPasskeyAuthState: i,
  initSignupWithPasskey: i,
  signupWithPasskey: i,
  initLoginWithPasskey: i,
  loginWithPasskey: i,
  initLinkWithPasskey: i,
  linkWithPasskey: i,
  refreshUser: i,
  loginWithGuestAccountFlow: i,
  walletProxy: null,
  createAnalyticsEvent: i,
  acceptTerms: i,
  getUsdTokenPrice: i,
  getUsdPriceForSol: i,
  getSplTokenMetadata: i,
  recoverPrimaryWallet: i,
  updateWallets: i,
  fundWallet: i,
  openModal: i,
  setReadyToTrue: i,
  requestFarcasterSignerStatus: i,
  initLoginWithTelegram: i,
  loginWithTelegram: i,
  generateSiweMessage: i,
  generateSiweMessageForSmartWallet: i,
  linkWithSiwe: i,
  linkSmartWallet: i,
  delegateWallet: i,
  revokeDelegatedWallets: i,
  embeddedSolanaWallets: null,
  createEmbeddedSolanaWallet: i,
  exportSolanaWallet: i,
  solanaSignMessage: i,
  sendSolanaTransaction: i,
  connectCoinbaseSmartWallet: i,
  initiateAccountTransfer: i,
  emailOtpState: {
    status: "initial"
  },
  setEmailOtpState: i,
  smsOtpState: {
    status: "initial"
  },
  setSmsOtpState: i,
  siweState: {
    status: "initial"
  },
  setSiweState: i,
  oAuthState: {
    status: "initial"
  },
  setOAuthState: i,
  isHeadlessOAuthLoading: false
});
const n = () => e(a);
export { a as InternalPrivyContext, n as usePrivyInternal };
