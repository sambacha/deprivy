import { jsx as e, jsxs as o, Fragment as r } from "react/jsx-runtime";
import { useState as s, useEffect as i, useRef as t, useCallback as n } from "react";
import { styled as m } from "styled-components";
import { useAppConfig as c } from "../configuration/context.mjs";
import { useCaptcha as a } from "../hooks/captcha-context.mjs";
import { usePrivyInternal as p } from "../hooks/internal-context.mjs";
import { usePrivyModal as l } from "../hooks/modal-context.mjs";
import { usePrivyContext as d } from "../hooks/privy-context.mjs";
import { useElementHeight as j } from "../hooks/useElementHeight.mjs";
import { useRegisterMfaListener as E } from "../hooks/useRegisterMfaListener.mjs";
import { ModalScreen as S } from "../screens/index.mjs";
import { AccountNotFoundScreen as u } from "../screens/AccountNotFoundScreen.mjs";
import { LinkConflictScreen as h } from "../screens/AccountTransferScreen/LinkConflictScreen.mjs";
import { AffirmativeConsentScreen as g } from "../screens/AffirmativeConsentScreen.mjs";
import { AllowlistRejectionScreen as C } from "../screens/AllowlistRejectionScreen.mjs";
import { AwaitingPasswordlessCodeScreen as f } from "../screens/AwaitingPasswordlessCodeScreen.mjs";
import { CaptchaScreen as A } from "../screens/CaptchaScreen.mjs";
import { ConnectOnlyAuthenticatedScreen as _ } from "../screens/ConnectOnlyAuthenticatedScreen.mjs";
import { ConnectOnlyLandingScreen as N } from "../screens/ConnectOnlyLandingScreen.mjs";
import { ConnectOnlyStatusScreen as T } from "../screens/ConnectOnlyStatusScreen.mjs";
import { ConnectionStatusScreen as I } from "../screens/ConnectionStatusScreen.mjs";
import { CrossAppAuthScreen as b } from "../screens/CrossAppAuthScreen.mjs";
import { DelegatedActionsConsentScreen as L } from "../screens/DelegatedActionsConsentScreen.mjs";
import { DelegatedActionsRevokeScreen as R } from "../screens/DelegatedActionsRevokeScreen.mjs";
import { EmbeddedWalletConnectingScreen as y } from "../screens/EmbeddedWalletConnectingScreen.mjs";
import { EmbeddedWalletCreatedScreen as w } from "../screens/EmbeddedWalletCreatedScreen.mjs";
import { EmbeddedWalletKeyExportScreen as v } from "../screens/EmbeddedWalletKeyExportScreen.mjs";
import { EmbeddedWalletOnAccountCreateScreen as D } from "../screens/EmbeddedWalletOnAccountCreateScreen.mjs";
import { EmbeddedWalletPasswordUpdateScreen as O } from "../screens/EmbeddedWalletPasswordUpdateScreen.mjs";
import { EmbeddedWalletPasswordUpdateSplashScreen as P } from "../screens/EmbeddedWalletPasswordUpdateSplashScreen.mjs";
import { ErrorScreen as W } from "../screens/ErrorScreen.mjs";
import { FarcasterConnectStatusScreen as M } from "../screens/FarcasterConnectStatusScreen.mjs";
import { FarcasterSignerStatusScreen as k } from "../screens/FarcasterSignerStatusScreen.mjs";
import { AwaitingEvmToSolBridgingScreen as F } from "../screens/Funding/AwaitingEvmToSolBridgingScreen.mjs";
import { AwaitingExternalSolanaTransferScreen as B } from "../screens/Funding/AwaitingExternalSolanaTransferScreen.mjs";
import { AwaitingExternalTransferScreen as x } from "../screens/Funding/AwaitingExternalTransferScreen.mjs";
import { AwaitingSolToEvmBridgingScreen as G } from "../screens/Funding/AwaitingSolToEvmBridgingScreen.mjs";
import { CoinbaseOnrampStatusScreen as U } from "../screens/Funding/CoinbaseOnrampStatusScreen.mjs";
import { FundingAmountEditScreen as V } from "../screens/Funding/FundingEditAmountScreen.mjs";
import { FundingMethodSelectionScreen as H } from "../screens/Funding/FundingMethodSelectionScreen.mjs";
import { ManualTransferScreen as q } from "../screens/Funding/ManualTransferScreen.mjs";
import { MoonpayStatusScreen as K } from "../screens/Funding/MoonpayStatusScreen.mjs";
import { TransferFromWalletScreen as Y } from "../screens/Funding/TransferFromWalletScreen.mjs";
import { InAppBrowserLoginNotPossible as z } from "../screens/InAppBrowserLoginNotPossible.mjs";
import { InstallPhantomScreen as X } from "../screens/InstallPhantomScreen.mjs";
import { ConnectOrCreateScreen as Q } from "../screens/LandingScreen/ConnectOrCreateScreen.mjs";
import { LandingScreen as $ } from "../screens/LandingScreen/LandingScreen.mjs";
import { Hide as J } from "../screens/LandingScreen/styles.mjs";
import { LinkEmailScreen as Z } from "../screens/LinkEmailScreen.mjs";
import { LinkPasskeyScreen as ee } from "../screens/LinkPasskeyScreen.mjs";
import { LinkPhoneScreen as oe } from "../screens/LinkPhoneScreen.mjs";
import { LinkWalletScreen as re } from "../screens/LinkWalletScreen.mjs";
import { LoginFailedScreen as se } from "../screens/LoginFailedScreen.mjs";
import { MfaEnrollmentFlowScreen as ie } from "../screens/MfaScreens/MfaEnrollmentFlowScreen.mjs";
import { MfaVerifyFlowScreen as te } from "../screens/MfaScreens/MfaVerifyFlowScreen.mjs";
import { OAuthStatusScreen as ne } from "../screens/OAuthStatusScreen.mjs";
import { PasskeySelectSignupOrLogin as me } from "../screens/PasskeySelectSignupOrLogin.mjs";
import { PasskeyStatusScreen as ce } from "../screens/PasskeyStatusScreen.mjs";
import { PhantomInterstitialScreen as ae } from "../screens/PhantomInterstitialScreen.mjs";
import { PasswordRecoveryScreen as pe } from "../screens/Recovery/PasswordRecoveryScreen.mjs";
import { RecoveryOAuthScreen as le } from "../screens/Recovery/RecoveryOAuthStatusScreen.mjs";
import { EmbeddedWalletPasswordCreateScreen as de } from "../screens/Recovery/RecoveryPasswordCreateScreen.mjs";
import { RecoverySelectionScreen as je } from "../screens/Recovery/RecoverySelectionScreen.mjs";
import { SetAutomaticRecoveryScreen as Ee } from "../screens/Recovery/SetAutomaticRecoveryScreen.mjs";
import { SendSolanaTransactionScreen as Se } from "../screens/SendSolanaTransactionScreen/SendSolanaTransactionScreen.mjs";
import { SendTransactionScreen as ue } from "../screens/SendTransactionScreen/SendTransactionScreen.mjs";
import { SignRequestScreen as he } from "../screens/SignRequestScreen.mjs";
import { TelegramAuthScreen as ge } from "../screens/TelegramAuthScreen.mjs";
import { UpdateEmailScreen as Ce } from "../screens/UpdateEmailScreen.mjs";
import { UpdatePhoneScreen as fe } from "../screens/UpdatePhoneScreen.mjs";
import { UserLimitReachedScreen as Ae } from "../screens/UserLimitReachedScreen.mjs";
import { StylesWrapper as _e } from "../styles.mjs";
import { Dialog as Ne, CenterItem as Te } from "./Dialog.mjs";
import { RefactorSpacerTop as Ie, RefactorSpacerBottom as be } from "./Layouts.mjs";
import { Loader as Le } from "./Loader.mjs";
import { ModalFooter as Re } from "./ModalFooter.mjs";
import { ModalHeader as ye } from "./ModalHeader.mjs";
import "../config.mjs";
import "../configuration/defaultClientConfig.mjs";
import "../constants.mjs";
import "../configuration/login-methods.mjs";
import "../configuration/wallets.mjs";
import "../connectors/chains/index.mjs";
import "../connectors/chains/arbitrum.mjs";
import "../connectors/chains/arbitrumSepolia.mjs";
import "../connectors/chains/avalanche.mjs";
import "../connectors/chains/avalancheFuji.mjs";
import "../connectors/chains/base.mjs";
import "../connectors/chains/baseSepolia.mjs";
import "../connectors/chains/berachainArtio.mjs";
import "../connectors/chains/celo.mjs";
import "../connectors/chains/celoAlfajores.mjs";
import "../connectors/chains/filecoin.mjs";
import "../connectors/chains/filecoinCalibration.mjs";
import "../connectors/chains/garnetHolesky.mjs";
import "../connectors/chains/holesky.mjs";
import "../connectors/chains/linea.mjs";
import "../connectors/chains/lineaTestnet.mjs";
import "../connectors/chains/lukso.mjs";
import "../connectors/chains/mainnet.mjs";
import "../connectors/chains/optimism.mjs";
import "../connectors/chains/optimismSepolia.mjs";
import "../connectors/chains/polygon.mjs";
import "../connectors/chains/polygonAmoy.mjs";
import "../connectors/chains/redstone.mjs";
import "../connectors/chains/sepolia.mjs";
import "../connectors/chains/zora.mjs";
import "../connectors/chains/zoraSepolia.mjs";
import "../connectors/chains/zoraTestnet.mjs";
import "../connectors/chains/utils.mjs";
import "../lib/solana/index.mjs";
import "../theme.mjs";
import "tinycolor2";
import "../lib/cybr53.mjs";
import "../hooks/index.mjs";
import "../errors.mjs";
import "ofetch";
import "../utils/index.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../utils/eth/getPublicClient.mjs";
import "viem";
import "./PrefetchedImage.mjs";
import "../hooks/events-context.mjs";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "./Button.mjs";
import "./CircleBackground.mjs";
import "./layout/StackedContainer.mjs";
import "@heroicons/react/24/outline/ExclamationTriangleIcon";
import "@heroicons/react/24/outline/WalletIcon";
import "./CircleBorder.mjs";
import "./ui/wallet/Address.mjs";
import "@heroicons/react/24/outline/CheckIcon";
import "@heroicons/react/24/outline/Square2StackIcon";
import "../lib/capitalizeFirstLetter.mjs";
import "../svg/circle-alert.mjs";
import "../screens/AccountTransferScreen/AccountTransferButton.mjs";
import "../screens/AccountTransferScreen/EmbeddedWalletInfoView.mjs";
import "../screens/AccountTransferScreen/styled.mjs";
import "@heroicons/react/24/outline/ExclamationCircleIcon";
import "@heroicons/react/24/outline/ArrowTopRightOnSquareIcon";
import "@heroicons/react/24/solid/DocumentCheckIcon";
import "../client/user.mjs";
import "viem/utils";
import "../screens/MfaScreens/StyledComponents.mjs";
import "../svg/lock-closed.mjs";
import "@heroicons/react/20/solid/CheckIcon";
import "@heroicons/react/24/outline/EnvelopeIcon";
import "@heroicons/react/24/outline/PhoneIcon";
import "react-device-detect";
import "./ScreenHeader.mjs";
import "@heroicons/react/24/solid/CheckCircleIcon";
import "@heroicons/react/24/solid/XCircleIcon";
import "./WrappedLoader.mjs";
import "../screens/LandingScreen/WalletButtonList.mjs";
import "../screens/LandingScreen/EmptyWalletView.mjs";
import "../screens/LandingScreen/WalletButton.mjs";
import "./external-wallets/InjectedWalletIcon.mjs";
import "./ui/chips/Chip.mjs";
import "./ui/animation/LoadingSkeleton.mjs";
import "../lib/external-wallets/displayHelpers.mjs";
import "../svg/brave-browser-icon.mjs";
import "../svg/bybit.mjs";
import "../svg/coinbase-wallet.mjs";
import "../svg/cryptocom.mjs";
import "../svg/metamask.mjs";
import "../svg/phantom.mjs";
import "../svg/rabby.mjs";
import "../svg/rainbow.mjs";
import "../svg/safe.mjs";
import "../svg/uniswap.mjs";
import "../svg/universal-profile.mjs";
import "../svg/wallet-connect.mjs";
import "../svg/zerion.mjs";
import "../lib/isEmbeddedWebview.mjs";
import "../recent-login/context.mjs";
import "../storage.mjs";
import "../connectors/errors.mjs";
import "@privy-io/js-sdk-core";
import "../svg/browser-extension-wallet-icon.mjs";
import "../auth-flows/siwe.mjs";
import "../effect.mjs";
import "../lib/siwe.mjs";
import "../auth-flows/siws.mjs";
import "../lib/siws.mjs";
import "../connectors/userAlreadyHasConnectedCoinbaseWallet.mjs";
import "../connectors/walletconnect-v2.mjs";
import "@walletconnect/ethereum-provider";
import "../connectors/ethereum/index.mjs";
import "../connectors/areWalletArraysEqual.mjs";
import "../connectors/isBaseConnectedEthereumWallet.mjs";
import "../connectors/base.mjs";
import "eventemitter3";
import "../connectors/getRpcTimeout.mjs";
import "../connectors/privyProxyProvider.mjs";
import "../connectors/walletconnect-registry.mjs";
import "../hook-utils/useInterval.mjs";
import "../lib/useHasTabbedAway.mjs";
import "../svg/protected-by-privy.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "./ProviderAppLogo.mjs";
import "../hooks/useLogout.mjs";
import "@heroicons/react/24/outline/CheckCircleIcon";
import "@heroicons/react/24/outline/CloudArrowUpIcon";
import "./ui/wallet/WalletInfoCard.mjs";
import "./ui/layout/Column.mjs";
import "./ui/typography/ErrorMessage.mjs";
import "./ui/typography/LabelXs.mjs";
import "./ui/wallet/shared.mjs";
import "@heroicons/react/24/outline/NoSymbolIcon";
import "./primitives/LoadingSpinner/index.mjs";
import "../embedded-wallets/errors.mjs";
import "../embedded-wallets/types.mjs";
import "../lib/embeddedWalletRecovery.mjs";
import "../paths.mjs";
import "../lib/pkce.mjs";
import "jose";
import "../crypto.mjs";
import "./ui/banners/WarningBanner.mjs";
import "./ui/typography/Subtitle.mjs";
import "./ui/typography/Title.mjs";
import "../hooks/useEmbeddedWalletCreate.mjs";
import "../password.mjs";
import "fast-password-entropy";
import "secure-password-utilities";
import "secure-password-utilities/wordlists";
import "./embedded-wallets/SetWalletPasswordForm/SetWalletPasswordForm.mjs";
import "./embedded-wallets/SetWalletPasswordForm/ConfimWalletPasswordForm.mjs";
import "./embedded-wallets/SetWalletPasswordForm/shared.mjs";
import "@heroicons/react/24/outline/ArrowPathIcon";
import "@heroicons/react/24/outline/EyeIcon";
import "@heroicons/react/24/outline/EyeSlashIcon";
import "./embedded-wallets/SetWalletPasswordForm/ConfimWalletPasswordSaved.mjs";
import "./Checkbox.mjs";
import "./embedded-wallets/SetWalletPasswordForm/CreateWalletPassword.mjs";
import "@heroicons/react/24/outline/KeyIcon";
import "./embedded-wallets/SetWalletPasswordForm/SaveWalletPassword.mjs";
import "@heroicons/react/24/outline/ArrowDownTrayIcon";
import "@heroicons/react/24/outline/ClipboardDocumentCheckIcon";
import "@heroicons/react/24/outline/DocumentDuplicateIcon";
import "./embedded-wallets/SetWalletPasswordForm/SetWalletPasswordComplete.mjs";
import "./embedded-wallets/SetWalletPasswordForm/setWalletPassword.hooks.mjs";
import "@heroicons/react/24/outline/UserCircleIcon";
import "@heroicons/react/24/solid/LockClosedIcon";
import "./CopyToClipboard.mjs";
import "../svg/checkmark.mjs";
import "../svg/copy.mjs";
import "./OpenLink.mjs";
import "./QrCode.mjs";
import "qrcode";
import "../svg/black-rounded-square.mjs";
import "../svg/farcaster.mjs";
import "./embedded-wallets/FundWalletMethodHeader.mjs";
import "./primitives/NeutralSpinner/index.mjs";
import "../hooks/useGetTokenPrice.mjs";
import "../hooks/useGetSolPrice.mjs";
import "../hooks/useWallets.mjs";
import "../lib/funding/analytics.mjs";
import "../lib/funding/reservoir.mjs";
import "../lib/solana/transaction.mjs";
import "../utils/buffer/readBigInt64LE.mjs";
import "../lib/wallets/actions/getBalanceForChains.mjs";
import "../plugins/context/PrivyPluginContext.mjs";
import "../plugins/solana-funding/id.mjs";
import "../screens/Funding/BridgeNetworkSelectionView.mjs";
import "./ui/layout/Row.mjs";
import "./ui/typography/LabelSm.mjs";
import "./ui/wallet/NetworkBalanceCard.mjs";
import "./ui/typography/Value.mjs";
import "./ui/wallet/NetworkIcon.mjs";
import "@heroicons/react/24/outline/GlobeAltIcon";
import "./ui/icons/Arbitum.mjs";
import "./ui/icons/Avalanche.mjs";
import "./ui/icons/Base.mjs";
import "./ui/icons/Celo.mjs";
import "./ui/icons/Linea.mjs";
import "./ui/icons/Mainnnet.mjs";
import "./ui/icons/Optimism.mjs";
import "./ui/icons/Polygon.mjs";
import "./ui/icons/Solana.mjs";
import "./ui/icons/Zora.mjs";
import "./ui/wallet/NetworkSelectorPanel.mjs";
import "@headlessui/react";
import "@heroicons/react/24/outline/ChevronDownIcon";
import "../lib/ethers.mjs";
import "../screens/Funding/styles.mjs";
import "../screens/Funding/TransferOrBridgeLoadingScreen.mjs";
import "../hooks/solana/useSolanaWallets.mjs";
import "../lib/erc20/actions/abis/transfer.mjs";
import "../lib/erc20/formatErc20TokenAmount.mjs";
import "../lib/wallets/actions/getErc20Balance.mjs";
import "@heroicons/react/24/solid/ArrowsRightLeftIcon";
import "@heroicons/react/24/outline/CreditCardIcon";
import "@heroicons/react/24/outline/QrCodeIcon";
import "./ui/banners/ErrorBanner.mjs";
import "./ui/banners/InfoBanner.mjs";
import "@heroicons/react/24/outline/InformationCircleIcon";
import "./ui/icons/ApplePay.mjs";
import "./ui/icons/GooglePay.mjs";
import "../hook-utils/useAsyncValue.mjs";
import "../icons/WalletCards.mjs";
import "../lib/erc20/actions/getErc20TokenInfo.mjs";
import "../lib/funding/prepareFundingMethods.mjs";
import "../lib/funding/coinbase/isSupportedChainIdForCoinbaseOnramp.mjs";
import "../lib/funding/coinbase/triggerCoinbaseFlow.mjs";
import "../lib/popup/triggerPopup.mjs";
import "../lib/funding/coinbase/toCoinbaseBlockchainFromChainId.mjs";
import "../lib/funding/moonpay/index.mjs";
import "../lib/funding/moonpay/triggerMoonpayFlow.mjs";
import "../payment-request/isPaymentRequestAvailable.mjs";
import "../hooks/useWalletBalance.mjs";
import "../svg/blobby.mjs";
import "../svg/moonpay.mjs";
import "../screens/LandingScreen/WalletOverflowButton.mjs";
import "@heroicons/react/24/outline/ChevronRightIcon";
import "./TodoList.mjs";
import "../svg/check-badge.mjs";
import "../screens/LandingScreen/CustomLandingScreenView.mjs";
import "../lib/toDisplayFromAccountType.mjs";
import "../screens/LandingScreen/AppLogoHeader.mjs";
import "./AppLogo.mjs";
import "../screens/LandingScreen/CrossAppButton.mjs";
import "../screens/LandingScreen/EmailButton.mjs";
import "./ConnectEmailForm.mjs";
import "./ui/forms/EmailInputForm.mjs";
import "../screens/LandingScreen/FarcasterButton.mjs";
import "../screens/LandingScreen/PasskeyLink.mjs";
import "../screens/LandingScreen/SmsButton.mjs";
import "./ConnectPhoneForm.mjs";
import "./PhoneCountryDropdown.mjs";
import "../screens/LandingScreen/SocialButton.mjs";
import "../svg/apple.mjs";
import "../svg/discord.mjs";
import "../svg/github.mjs";
import "../svg/google.mjs";
import "../svg/instagram.mjs";
import "../svg/linkedin.mjs";
import "../svg/spotify.mjs";
import "../svg/tiktok.mjs";
import "../svg/twitter.mjs";
import "../screens/LandingScreen/TelegramButton.mjs";
import "../svg/telegram.mjs";
import "../screens/LandingScreen/Web2OverflowButton.mjs";
import "../screens/LandingScreen/LandingScreenView.mjs";
import "../svg/email-or-phone.mjs";
import "@heroicons/react/24/outline/ClockIcon";
import "@heroicons/react/24/outline/TrashIcon";
import "@heroicons/react/24/solid/CheckBadgeIcon";
import "../svg/face-id.mjs";
import "../svg/fingerprint.mjs";
import "../svg/error-circle.mjs";
import "@heroicons/react/24/outline/ShieldCheckIcon";
import "@heroicons/react/24/solid/IdentificationIcon";
import "../hooks/useMfa.mjs";
import "../hooks/useMfaEnrollment.mjs";
import "../svg/mfa-shield.mjs";
import "../screens/MfaScreens/EnrollLandingScreen.mjs";
import "@heroicons/react/24/outline/DevicePhoneMobileIcon";
import "@heroicons/react/24/outline/FingerPrintIcon";
import "@heroicons/react/24/outline/MinusCircleIcon";
import "../screens/MfaScreens/EnrollPasskey.mjs";
import "@heroicons/react/24/outline/ArrowRightEndOnRectangleIcon";
import "../screens/MfaScreens/EnrollSms.mjs";
import "./PinInput.mjs";
import "../screens/MfaScreens/EnrollTotp.mjs";
import "../svg/qr-codes.mjs";
import "@heroicons/react/24/solid/ShieldCheckIcon";
import "./embedded-wallets/TransactionDetailsWrapper.mjs";
import "../lib/viem/prepareTransactionRequest.mjs";
import "../lib/viem/toViemTransactionSerializable.mjs";
import "./embedded-wallets/TransactionDetails.mjs";
import "./embedded-wallets/DisplayInfoItem.mjs";
import "./embedded-wallets/PriceDisplay.mjs";
import "./embedded-wallets/TransactionTotal.mjs";
import "./primitives/Accordion/index.mjs";
import "./primitives/Accordion/AccordionContext.mjs";
import "./embedded-wallets/WalletLink.mjs";
import "../screens/MfaScreens/VerifyWithPasskey.mjs";
import "@heroicons/react/24/outline/CalendarIcon";
import "../auth-flows/oauth/getDisplayForProvider.mjs";
import "../svg/globe.mjs";
import "../auth-flows/oauth/getOAuthErrorMessage.mjs";
import "../auth-flows/oauth/stripUrlOAuthParamsAndRemoveStateCode.mjs";
import "../connectors/phantom-redirect.mjs";
import "../svg/apple-icloud.mjs";
import "../svg/google-drive.mjs";
import "../screens/Recovery/styles.mjs";
import "@heroicons/react/24/outline/LockClosedIcon";
import "@heroicons/react/24/outline/PencilSquareIcon";
import "./ui/icons/WithCircleBorder.mjs";
import "../embedded-wallets/solana/transaction.mjs";
import "../screens/SendTransactionScreen/SendTransactionScreenView.mjs";
import "@heroicons/react/24/outline";
import "../screens/SendTransactionScreen/TransactionDetail.mjs";
import "../screens/SendTransactionScreen/useTransactionDetails.mjs";
import "../screens/SendTransactionScreen/TransactionErrorView.mjs";
import "@heroicons/react/24/outline/ClipboardDocumentIcon";
import "../screens/SendSolanaTransactionScreen/SolanaTransactionReceiptView.mjs";
import "./embedded-wallets/SolanaTransactionDetails.mjs";
import "../embedded-wallets/rpc/index.mjs";
import "../screens/SendTransactionScreen/TransactionReceiptView.mjs";
import "../screens/SendTransactionScreen/getStaticTransactionMetadata.mjs";
import "../lib/deployAccount/actions/abis/deployAccount.mjs";
import "../lib/erc20/actions/abis/approve.mjs";
import "../lib/erc721/actions/abis/mint.mjs";
import "../lib/erc721/actions/abis/safeTransferFrom.mjs";
import "../lib/erc721/actions/abis/setApprovalForAll.mjs";
import "../lib/erc721/actions/abis/transferFrom.mjs";
import "../lib/erc1155/actions/abis/safeBatchTransferFrom.mjs";
import "../lib/erc1155/actions/abis/safeTransferFrom.mjs";
import "../screens/SendTransactionScreen/usePrepareTransaction.mjs";
import "./embedded-wallets/StyledLogo.mjs";
import "../auth-flows/telegram.mjs";
import "./UpdateEmailForm.mjs";
import "../svg/alert-circle.mjs";
import "../cssNormalize.mjs";
let we = {
  [S.LANDING]: $,
  [S.CONNECT_OR_CREATE]: Q,
  [S.AWAITING_PASSWORDLESS_CODE]: f,
  [S.AWAITING_CONNECTION]: I,
  [S.AWAITING_CONNECT_ONLY_CONNECTION]: T,
  [S.AWAITING_FARCASTER_CONNECTION]: M,
  [S.AWAITING_FARCASTER_SIGNER]: k,
  [S.SELECT_PASSKEY_SIGNUP_OR_LOGIN]: me,
  [S.AWAITING_PASSKEY_SYSTEM_DIALOGUE]: ce,
  [S.PHANTOM_INTERSTITIAL_SCREEN]: ae,
  [S.LOGIN_FAILED_SCREEN]: se,
  [S.AWAITING_OAUTH_SCREEN]: ne,
  [S.CROSS_APP_AUTH_SCREEN]: b,
  [S.ALLOWLIST_REJECTION_SCREEN]: C,
  [S.ACCOUNT_NOT_FOUND_SCREEN]: u,
  [S.USER_LIMIT_REACHED_SCREEN]: Ae,
  [S.INSTALL_PHANTOM_SCREEN]: X,
  [S.LINK_EMAIL_SCREEN]: Z,
  [S.LINK_PHONE_SCREEN]: oe,
  [S.LINK_WALLET_SCREEN]: re,
  [S.LINK_PASSKEY_SCREEN]: ee,
  [S.UPDATE_EMAIL_SCREEN]: Ce,
  [S.UPDATE_PHONE_SCREEN]: fe,
  [S.CONNECT_ONLY_LANDING_SCREEN]: N,
  [S.CONNECT_ONLY_AUTHENTICATED_SCREEN]: _,
  [S.EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN]: D,
  [S.EMBEDDED_WALLET_CREATED_SCREEN]: w,
  [S.EMBEDDED_WALLET_CONNECTING_SCREEN]: y,
  [S.EMBEDDED_WALLET_PASSWORD_RECOVERY_SCREEN]: pe,
  [S.EMBEDDED_WALLET_RECOVERY_SELECTION_SCREEN]: je,
  [S.EMBEDDED_WALLET_SET_AUTOMATIC_RECOVERY_SCREEN]: Ee,
  [S.EMBEDDED_WALLET_RECOVERY_OAUTH_SCREEN]: le,
  [S.EMBEDDED_WALLET_KEY_EXPORT_SCREEN]: v,
  [S.EMBEDDED_WALLET_SIGN_REQUEST_SCREEN]: he,
  [S.EMBEDDED_WALLET_SEND_TRANSACTION_SCREEN]: ue,
  [S.EMBEDDED_WALLET_SEND_SOLANA_TRANSACTION_SCREEN]: Se,
  [S.EMBEDDED_WALLET_DELEGATED_ACTIONS_CONSENT_SCREEN]: L,
  [S.EMBEDDED_WALLET_DELEGATED_ACTIONS_REVOKE_SCREEN]: R,
  [S.FUNDING_METHOD_SELECTION_SCREEN]: H,
  [S.MOONPAY_STATUS_SCREEN]: K,
  [S.COINBASE_ONRAMP_STATUS_SCREEN]: U,
  [S.FUNDING_TRANSFER_FROM_WALLET_SCREEN]: Y,
  [S.FUNDING_EDIT_AMOUNT_SCREEN]: V,
  [S.FUNDING_AWAITING_TRANSFER_FROM_EXTERNAL_WALLET_SCREEN]: x,
  [S.FUNDING_AWAITING_TRANSFER_FROM_EXTERNAL_SOLANA_WALLET_SCREEN]: B,
  [S.FUNDING_AWAITING_EVM_TO_SOL_BRIDGING_SCREEN]: F,
  [S.FUNDING_AWAITING_SOL_TO_EVM_BRIDGING_SCREEN]: G,
  [S.FUNDING_MANUAL_TRANSFER_SCREEN]: q,
  [S.EMBEDDED_WALLET_PASSWORD_UPDATE_SPLASH_SCREEN]: P,
  [S.EMBEDDED_WALLET_PASSWORD_UPDATE_SCREEN]: O,
  [S.EMBEDDED_WALLET_PASSWORD_CREATE_SCREEN]: de,
  [S.MFA_ENROLLMENT_FLOW_SCREEN]: ie,
  [S.CAPTCHA_SCREEN]: A,
  [S.ERROR_SCREEN]: W,
  [S.IN_APP_BROWSER_LOGIN_NOT_POSSIBLE]: z,
  [S.AFFIRMATIVE_CONSENT_SCREEN]: g,
  [S.TELEGRAM_AUTH_SCREEN]: ge,
  [S.LINK_CONFLICT_SCREEN]: h
};
let ve = [S.LANDING, S.AWAITING_CONNECTION];
let De = ({
  isMfaVerifying: s,
  onMfaVerificationComplete: t
}) => {
  let {
    ready: n,
    isModalOpen: m
  } = d();
  let {
    headless: p
  } = c();
  let {
    ready: j,
    currentScreen: E
  } = l();
  let {
    status: u,
    execute: h,
    reset: g,
    enabled: C
  } = a();
  let f = m && E && ve.includes(E) && !p && u === "ready";
  i(() => {
    if (f) {
      h();
    }
  }, [f]);
  i(() => {
    if (!m && C) {
      g();
    }
  }, [m, C]);
  if (n && j || E === S.AWAITING_OAUTH_SCREEN || E === S.CROSS_APP_AUTH_SCREEN || E === S.TELEGRAM_AUTH_SCREEN) {
    if (!E && s) {
      return /*#__PURE__*/e(te, {
        open: s,
        onClose: t
      });
    } else if (E) {
      return /*#__PURE__*/o(r, {
        children: [/*#__PURE__*/e(J, {
          $if: !!s,
          children: /*#__PURE__*/e(we[E], {})
        }), /*#__PURE__*/e(J, {
          $if: !s,
          children: /*#__PURE__*/e(te, {
            open: s,
            onClose: t
          })
        })]
      });
    } else {
      return null;
    }
  } else {
    return /*#__PURE__*/o(r, {
      children: [/*#__PURE__*/e(ye, {}), /*#__PURE__*/e(Ie, {}), /*#__PURE__*/e(Te, {
        children: /*#__PURE__*/e(Le, {})
      }), /*#__PURE__*/e(be, {}), /*#__PURE__*/e(Re, {})]
    });
  }
};
let Oe = ({
  isMfaVerifying: o,
  onMfaVerificationComplete: r
}) => {
  let s = t(null); /*#__PURE__*/
  return e(Me, {
    style: {
      height: j(s)
    },
    id: "privy-modal-content",
    children: /*#__PURE__*/e("div", {
      ref: s,
      children: /*#__PURE__*/e(De, {
        isMfaVerifying: o,
        onMfaVerificationComplete: r
      })
    })
  });
};
const Pe = ({
  open: o
}) => {
  let {
    app: r
  } = l();
  let {
    gracefulClosePrivyModal: i
  } = (() => {
    let {
      closePrivyModal: e
    } = p();
    let {
      onUserCloseViaDialogOrKeybindRef: o
    } = l();
    return {
      gracefulClosePrivyModal: n(() => {
        if (!o?.current) {
          return e({
            shouldCallAuthOnSuccess: false
          });
        }
        o.current();
      }, [e])
    };
  })();
  let [t, m] = s(false);
  E({
    onMfaRequired: () => {
      if (!r?.mfa.noPromptOnMfaRequired) {
        m(true);
      }
    }
  });
  let c = o || t;
  if (r.render.standalone) {
    return /*#__PURE__*/e(_e, {
      children: /*#__PURE__*/e(We, {
        id: "privy-modal-content",
        children: /*#__PURE__*/e(De, {
          isMfaVerifying: t,
          onMfaVerificationComplete: () => m(false)
        })
      })
    });
  } else {
    return /*#__PURE__*/e(Ne, {
      open: c,
      id: "privy-dialog",
      "aria-label": "log in or sign up",
      "aria-labelledby": "privy-dialog-title",
      onClick: () => i(),
      children: /*#__PURE__*/e(_e, {
        children: /*#__PURE__*/e(Oe, {
          isMfaVerifying: t,
          onMfaVerificationComplete: () => m(false)
        })
      })
    });
  }
};
let We = /*#__PURE__*/m.div.withConfig({
  displayName: "ContentWrapper",
  componentId: "sc-5c971bfb-0"
})(["display:flex;flex-direction:column;text-align:center;font-size:14px;line-height:20px;width:100%;background:var(--privy-color-background);padding:0 16px;"]);
let Me = /*#__PURE__*/m(We).withConfig({
  displayName: "BaseModal",
  componentId: "sc-5c971bfb-1"
})(["transition:height 150ms ease-out;overflow:hidden;max-height:calc(100svh - 32px);border-radius:var(--privy-border-radius-lg) var(--privy-border-radius-lg) 0 0;box-shadow:0px 0px 36px rgba(55,65,81,0.15);@media (min-width:441px){box-shadow:0px 8px 36px rgba(55,65,81,0.15);border-radius:var(--privy-border-radius-lg);}"]);
export { Pe as LoginModal };
