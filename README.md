# DePrivy

> [!NOTE]
> FOR EDUCATIONAL PURPOSES ONLY


```
├── @privy-io
│   ├── api-base
│   │   ├── LICENSE
│   │   ├── dist
│   │   │   ├── dts
│   │   │   │   ├── index.d.mts
│   │   │   │   └── index.d.ts
│   │   │   └── esm
│   │   │       ├── classes
│   │   │       │   ├── api-error.js
│   │   │       │   ├── api-error.mjs
│   │   │       │   ├── index.js
│   │   │       │   └── index.mjs
│   │   │       ├── constants
│   │   │       │   ├── error-codes.js
│   │   │       │   ├── error-codes.mjs
│   │   │       │   ├── index.js
│   │   │       │   └── index.mjs
│   │   │       ├── index.js
│   │   │       ├── index.mjs
│   │   │       └── schemas
│   │   │           ├── error.js
│   │   │           ├── error.mjs
│   │   │           ├── index.js
│   │   │           └── index.mjs
│   │   └── package.json
│   ├── js-sdk-core
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── dist
│   │   │   ├── dts
│   │   │   │   ├── index.d.mts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── smart-wallets.d.mts
│   │   │   │   └── smart-wallets.d.ts
│   │   │   └── esm
│   │   │       ├── Error.js
│   │   │       ├── Error.mjs
│   │   │       ├── Session.js
│   │   │       ├── Session.mjs
│   │   │       ├── Token.js
│   │   │       ├── Token.mjs
│   │   │       ├── action
│   │   │       │   ├── crossApp
│   │   │       │   │   ├── index.js
│   │   │       │   │   ├── index.mjs
│   │   │       │   │   ├── linkWithCrossAppAuth.js
│   │   │       │   │   ├── linkWithCrossAppAuth.mjs
│   │   │       │   │   ├── loginWithCrossAppAuth.js
│   │   │       │   │   └── loginWithCrossAppAuth.mjs
│   │   │       │   ├── delegatedActions
│   │   │       │   │   ├── delegateWallet.js
│   │   │       │   │   ├── delegateWallet.mjs
│   │   │       │   │   ├── index.js
│   │   │       │   │   ├── index.mjs
│   │   │       │   │   ├── revokeWallets.js
│   │   │       │   │   ├── revokeWallets.mjs
│   │   │       │   │   ├── utils.js
│   │   │       │   │   └── utils.mjs
│   │   │       │   ├── index.js
│   │   │       │   └── index.mjs
│   │   │       ├── chains
│   │   │       │   ├── arbitrum.js
│   │   │       │   ├── arbitrum.mjs
│   │   │       │   ├── arbitrumGoerli.js
│   │   │       │   ├── arbitrumGoerli.mjs
│   │   │       │   ├── arbitrumSepolia.js
│   │   │       │   ├── arbitrumSepolia.mjs
│   │   │       │   ├── avalanche.js
│   │   │       │   ├── avalanche.mjs
│   │   │       │   ├── avalancheFuji.js
│   │   │       │   ├── avalancheFuji.mjs
│   │   │       │   ├── base.js
│   │   │       │   ├── base.mjs
│   │   │       │   ├── baseGoerli.js
│   │   │       │   ├── baseGoerli.mjs
│   │   │       │   ├── baseSepolia.js
│   │   │       │   ├── baseSepolia.mjs
│   │   │       │   ├── berachainArtio.js
│   │   │       │   ├── berachainArtio.mjs
│   │   │       │   ├── celo.js
│   │   │       │   ├── celo.mjs
│   │   │       │   ├── celoAlfajores.js
│   │   │       │   ├── celoAlfajores.mjs
│   │   │       │   ├── filecoin.js
│   │   │       │   ├── filecoin.mjs
│   │   │       │   ├── filecoinCalibration.js
│   │   │       │   ├── filecoinCalibration.mjs
│   │   │       │   ├── garnetHolesky.js
│   │   │       │   ├── garnetHolesky.mjs
│   │   │       │   ├── goerli.js
│   │   │       │   ├── goerli.mjs
│   │   │       │   ├── holesky.js
│   │   │       │   ├── holesky.mjs
│   │   │       │   ├── index.js
│   │   │       │   ├── index.mjs
│   │   │       │   ├── linea.js
│   │   │       │   ├── linea.mjs
│   │   │       │   ├── lineaTestnet.js
│   │   │       │   ├── lineaTestnet.mjs
│   │   │       │   ├── mainnet.js
│   │   │       │   ├── mainnet.mjs
│   │   │       │   ├── optimism.js
│   │   │       │   ├── optimism.mjs
│   │   │       │   ├── optimismGoerli.js
│   │   │       │   ├── optimismGoerli.mjs
│   │   │       │   ├── optimismSepolia.js
│   │   │       │   ├── optimismSepolia.mjs
│   │   │       │   ├── polygon.js
│   │   │       │   ├── polygon.mjs
│   │   │       │   ├── polygonAmoy.js
│   │   │       │   ├── polygonAmoy.mjs
│   │   │       │   ├── polygonMumbai.js
│   │   │       │   ├── polygonMumbai.mjs
│   │   │       │   ├── redstone.js
│   │   │       │   ├── redstone.mjs
│   │   │       │   ├── redstoneHolesky.js
│   │   │       │   ├── redstoneHolesky.mjs
│   │   │       │   ├── sepolia.js
│   │   │       │   ├── sepolia.mjs
│   │   │       │   ├── types.js
│   │   │       │   ├── types.mjs
│   │   │       │   ├── zora.js
│   │   │       │   ├── zora.mjs
│   │   │       │   ├── zoraSepolia.js
│   │   │       │   ├── zoraSepolia.mjs
│   │   │       │   ├── zoraTestnet.js
│   │   │       │   └── zoraTestnet.mjs
│   │   │       ├── client
│   │   │       │   ├── AppApi.js
│   │   │       │   ├── AppApi.mjs
│   │   │       │   ├── CrossAppApi.js
│   │   │       │   ├── CrossAppApi.mjs
│   │   │       │   ├── DelegatedWalletsApi.js
│   │   │       │   ├── DelegatedWalletsApi.mjs
│   │   │       │   ├── EmbeddedWalletApi.js
│   │   │       │   ├── EmbeddedWalletApi.mjs
│   │   │       │   ├── MfaPromises.js
│   │   │       │   ├── MfaPromises.mjs
│   │   │       │   ├── Privy.js
│   │   │       │   ├── Privy.mjs
│   │   │       │   ├── PrivyInternal.js
│   │   │       │   ├── PrivyInternal.mjs
│   │   │       │   ├── UserApi.js
│   │   │       │   ├── UserApi.mjs
│   │   │       │   ├── auth
│   │   │       │   │   ├── AuthApi.js
│   │   │       │   │   ├── AuthApi.mjs
│   │   │       │   │   ├── CustomProviderApi.js
│   │   │       │   │   ├── CustomProviderApi.mjs
│   │   │       │   │   ├── EmailApi.js
│   │   │       │   │   ├── EmailApi.mjs
│   │   │       │   │   ├── FarcasterApi.js
│   │   │       │   │   ├── FarcasterApi.mjs
│   │   │       │   │   ├── FarcasterV2Api.js
│   │   │       │   │   ├── FarcasterV2Api.mjs
│   │   │       │   │   ├── GuestApi.js
│   │   │       │   │   ├── GuestApi.mjs
│   │   │       │   │   ├── OAuthApi.js
│   │   │       │   │   ├── OAuthApi.mjs
│   │   │       │   │   ├── PasskeyApi.js
│   │   │       │   │   ├── PasskeyApi.mjs
│   │   │       │   │   ├── PhoneApi.js
│   │   │       │   │   ├── PhoneApi.mjs
│   │   │       │   │   ├── SiweApi.js
│   │   │       │   │   ├── SiweApi.mjs
│   │   │       │   │   ├── SmartWalletApi.js
│   │   │       │   │   ├── SmartWalletApi.mjs
│   │   │       │   │   ├── maybeCreateWalletOnLogin.js
│   │   │       │   │   └── maybeCreateWalletOnLogin.mjs
│   │   │       │   ├── funding
│   │   │       │   │   ├── CoinbaseOnRampApi.js
│   │   │       │   │   ├── CoinbaseOnRampApi.mjs
│   │   │       │   │   ├── FundingApi.js
│   │   │       │   │   ├── FundingApi.mjs
│   │   │       │   │   ├── MoonpayOnRampApi.js
│   │   │       │   │   └── MoonpayOnRampApi.mjs
│   │   │       │   ├── mfa
│   │   │       │   │   ├── MfaApi.js
│   │   │       │   │   ├── MfaApi.mjs
│   │   │       │   │   ├── MfaPasskeyApi.js
│   │   │       │   │   ├── MfaPasskeyApi.mjs
│   │   │       │   │   ├── MfaSmsApi.js
│   │   │       │   │   └── MfaSmsApi.mjs
│   │   │       │   └── recovery
│   │   │       │       ├── RecoveryApi.js
│   │   │       │       ├── RecoveryApi.mjs
│   │   │       │       ├── RecoveryICloudApi.js
│   │   │       │       ├── RecoveryICloudApi.mjs
│   │   │       │       ├── RecoveryOAuthApi.js
│   │   │       │       └── RecoveryOAuthApi.mjs
│   │   │       ├── config
│   │   │       │   ├── types.js
│   │   │       │   └── types.mjs
│   │   │       ├── crypto
│   │   │       │   ├── types.js
│   │   │       │   └── types.mjs
│   │   │       ├── embedded
│   │   │       │   ├── EmbeddedBitcoinWalletProvider.js
│   │   │       │   ├── EmbeddedBitcoinWalletProvider.mjs
│   │   │       │   ├── EmbeddedSolanaWalletProvider.js
│   │   │       │   ├── EmbeddedSolanaWalletProvider.mjs
│   │   │       │   ├── EmbeddedWalletProvider.js
│   │   │       │   ├── EmbeddedWalletProvider.mjs
│   │   │       │   ├── EmbeddedWalletProxy.js
│   │   │       │   ├── EmbeddedWalletProxy.mjs
│   │   │       │   ├── EventCallbackQueue.js
│   │   │       │   ├── EventCallbackQueue.mjs
│   │   │       │   ├── errors.js
│   │   │       │   ├── errors.mjs
│   │   │       │   ├── gas
│   │   │       │   │   ├── arbitrum.js
│   │   │       │   │   ├── arbitrum.mjs
│   │   │       │   │   ├── bsc.js
│   │   │       │   │   ├── bsc.mjs
│   │   │       │   │   ├── op-stack.js
│   │   │       │   │   ├── op-stack.mjs
│   │   │       │   │   ├── polygon.js
│   │   │       │   │   └── polygon.mjs
│   │   │       │   ├── index.js
│   │   │       │   ├── index.mjs
│   │   │       │   ├── methods.js
│   │   │       │   ├── methods.mjs
│   │   │       │   ├── polygonGasStation.js
│   │   │       │   ├── polygonGasStation.mjs
│   │   │       │   ├── types.js
│   │   │       │   ├── types.mjs
│   │   │       │   ├── utils
│   │   │       │   │   ├── ethers.js
│   │   │       │   │   ├── ethers.mjs
│   │   │       │   │   ├── gas.js
│   │   │       │   │   ├── gas.mjs
│   │   │       │   │   ├── index.js
│   │   │       │   │   └── index.mjs
│   │   │       │   ├── withMfa.js
│   │   │       │   └── withMfa.mjs
│   │   │       ├── funding
│   │   │       │   ├── coinbase.js
│   │   │       │   ├── coinbase.mjs
│   │   │       │   ├── moonpay.js
│   │   │       │   ├── moonpay.mjs
│   │   │       │   ├── types.js
│   │   │       │   └── types.mjs
│   │   │       ├── index-CL5Nuxcp.js
│   │   │       ├── index-CL5Nuxcp.mjs
│   │   │       ├── index-g0cxoRWQ.js
│   │   │       ├── index-g0cxoRWQ.mjs
│   │   │       ├── index.js
│   │   │       ├── index.mjs
│   │   │       ├── pkce.js
│   │   │       ├── pkce.mjs
│   │   │       ├── smart-wallets.js
│   │   │       ├── smart-wallets.mjs
│   │   │       ├── solana
│   │   │       │   ├── client.js
│   │   │       │   ├── client.mjs
│   │   │       │   ├── getSolanaClusterDisplayName.js
│   │   │       │   ├── getSolanaClusterDisplayName.mjs
│   │   │       │   ├── getSolanaRpcEndpointForCluster.js
│   │   │       │   ├── getSolanaRpcEndpointForCluster.mjs
│   │   │       │   ├── getSolanaUsdcMintAddressForCluster.js
│   │   │       │   ├── getSolanaUsdcMintAddressForCluster.mjs
│   │   │       │   ├── getWalletPublicKeyFromTransaction.js
│   │   │       │   ├── getWalletPublicKeyFromTransaction.mjs
│   │   │       │   ├── isVersionedTransaction.js
│   │   │       │   ├── isVersionedTransaction.mjs
│   │   │       │   ├── types.js
│   │   │       │   └── types.mjs
│   │   │       ├── storage
│   │   │       │   ├── InMemoryStorage.js
│   │   │       │   ├── InMemoryStorage.mjs
│   │   │       │   ├── LocalStorage.js
│   │   │       │   ├── LocalStorage.mjs
│   │   │       │   ├── Storage.js
│   │   │       │   └── Storage.mjs
│   │   │       ├── toAbortSignalTimeout.js
│   │   │       ├── toAbortSignalTimeout.mjs
│   │   │       ├── types.js
│   │   │       ├── types.mjs
│   │   │       └── utils
│   │   │           ├── NonEmptyArray.js
│   │   │           ├── NonEmptyArray.mjs
│   │   │           ├── allSettled.js
│   │   │           ├── allSettled.mjs
│   │   │           ├── formatters.js
│   │   │           ├── formatters.mjs
│   │   │           ├── getAllUserEmbeddedBitcoinWallets.js
│   │   │           ├── getAllUserEmbeddedBitcoinWallets.mjs
│   │   │           ├── getAllUserEmbeddedEthereumWallets.js
│   │   │           ├── getAllUserEmbeddedEthereumWallets.mjs
│   │   │           ├── getAllUserEmbeddedSolanaWallets.js
│   │   │           ├── getAllUserEmbeddedSolanaWallets.mjs
│   │   │           ├── getEntropyDetailsFromAccount.js
│   │   │           ├── getEntropyDetailsFromAccount.mjs
│   │   │           ├── getEntropyDetailsFromUser.js
│   │   │           ├── getEntropyDetailsFromUser.mjs
│   │   │           ├── getIsTokenUsdc.js
│   │   │           ├── getIsTokenUsdc.mjs
│   │   │           ├── getUserEmbeddedEthereumWallet.js
│   │   │           ├── getUserEmbeddedEthereumWallet.mjs
│   │   │           ├── getUserEmbeddedSolanaWallet.js
│   │   │           ├── getUserEmbeddedSolanaWallet.mjs
│   │   │           ├── getUserSmartWallet.js
│   │   │           ├── getUserSmartWallet.mjs
│   │   │           ├── phoneNumberUtils.js
│   │   │           ├── phoneNumberUtils.mjs
│   │   │           ├── shouldCreateEmbeddedEthWallet.js
│   │   │           ├── shouldCreateEmbeddedEthWallet.mjs
│   │   │           ├── shouldCreateEmbeddedSolWallet.js
│   │   │           ├── shouldCreateEmbeddedSolWallet.mjs
│   │   │           ├── sleep.js
│   │   │           ├── sleep.mjs
│   │   │           ├── toObjectKeys.js
│   │   │           ├── toObjectKeys.mjs
│   │   │           ├── toSearchParams.js
│   │   │           └── toSearchParams.mjs
│   │   └── package.json
│   ├── public-api
│   │   ├── LICENSE
│   │   ├── dist
│   │   │   ├── index.d.ts
│   │   │   ├── index.d.ts.map
│   │   │   ├── index.js
│   │   │   └── index.mjs
│   │   └── package.json
│   ├── react-auth
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── dist
│   │   │   ├── dts
│   │   │   │   ├── abstract-smart-wallets.d.mts
│   │   │   │   ├── abstract-smart-wallets.d.ts
│   │   │   │   ├── farcaster.d.mts
│   │   │   │   ├── farcaster.d.ts
│   │   │   │   ├── index.d.mts
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── smart-wallets.d.mts
│   │   │   │   ├── smart-wallets.d.ts
│   │   │   │   ├── solana.d.mts
│   │   │   │   ├── solana.d.ts
│   │   │   │   ├── types-CyPM8Lj_.d.mts
│   │   │   │   ├── types-CyPM8Lj_.d.ts
│   │   │   │   ├── ui.d.mts
│   │   │   │   ├── ui.d.ts
│   │   │   │   ├── useSolanaWallets-lHWYp_2Q.d.mts
│   │   │   │   └── useSolanaWallets-lHWYp_2Q.d.ts
│   │   │   └── esm
│   │   │       ├── abstract-smart-wallets.js
│   │   │       ├── abstract-smart-wallets.mjs
│   │   │       ├── accessToken.js
│   │   │       ├── accessToken.mjs
│   │   │       ├── actions
│   │   │       │   ├── importWallet.js
│   │   │       │   └── importWallet.mjs
│   │   │       ├── auth-flows
│   │   │       │   ├── authFlowToAuthenticateMethod.js
│   │   │       │   ├── authFlowToAuthenticateMethod.mjs
│   │   │       │   ├── cross-app.js
│   │   │       │   ├── cross-app.mjs
│   │   │       │   ├── custom-jwt-account.js
│   │   │       │   ├── custom-jwt-account.mjs
│   │   │       │   ├── email.js
│   │   │       │   ├── email.mjs
│   │   │       │   ├── farcaster.js
│   │   │       │   ├── farcaster.mjs
│   │   │       │   ├── frame.js
│   │   │       │   ├── frame.mjs
│   │   │       │   ├── getUiHeader.js
│   │   │       │   ├── getUiHeader.mjs
│   │   │       │   ├── guest.js
│   │   │       │   ├── guest.mjs
│   │   │       │   ├── oauth
│   │   │       │   │   ├── OAuthFlow.js
│   │   │       │   │   ├── OAuthFlow.mjs
│   │   │       │   │   ├── detectCompletingOAuthFlow.js
│   │   │       │   │   ├── detectCompletingOAuthFlow.mjs
│   │   │       │   │   ├── getDisplayForProvider.js
│   │   │       │   │   ├── getDisplayForProvider.mjs
│   │   │       │   │   ├── getIsHeadlessOAuthFlowInProgress.js
│   │   │       │   │   ├── getIsHeadlessOAuthFlowInProgress.mjs
│   │   │       │   │   ├── getOAuthErrorMessage.js
│   │   │       │   │   ├── getOAuthErrorMessage.mjs
│   │   │       │   │   ├── index.js
│   │   │       │   │   ├── index.mjs
│   │   │       │   │   ├── stripUrlOAuthParamsAndRemoveStateCode.js
│   │   │       │   │   └── stripUrlOAuthParamsAndRemoveStateCode.mjs
│   │   │       │   ├── passkey.js
│   │   │       │   ├── passkey.mjs
│   │   │       │   ├── siwe.js
│   │   │       │   ├── siwe.mjs
│   │   │       │   ├── siws.js
│   │   │       │   ├── siws.mjs
│   │   │       │   ├── sms.js
│   │   │       │   ├── sms.mjs
│   │   │       │   ├── telegram.js
│   │   │       │   ├── telegram.mjs
│   │   │       │   ├── types.js
│   │   │       │   └── types.mjs
│   │   │       ├── client
│   │   │       │   ├── user.js
│   │   │       │   └── user.mjs
│   │   │       ├── client.js
│   │   │       ├── client.mjs
│   │   │       ├── components
│   │   │       │   ├── AppLogo.js
│   │   │       │   ├── AppLogo.mjs
│   │   │       │   ├── BaseModal.js
│   │   │       │   ├── BaseModal.mjs
│   │   │       │   ├── Button.js
│   │   │       │   ├── Button.mjs
│   │   │       │   ├── Captcha.js
│   │   │       │   ├── Captcha.mjs
│   │   │       │   ├── Checkbox.js
│   │   │       │   ├── Checkbox.mjs
│   │   │       │   ├── CircleBackground.js
│   │   │       │   ├── CircleBackground.mjs
│   │   │       │   ├── CircleBorder.js
│   │   │       │   ├── CircleBorder.mjs
│   │   │       │   ├── ConnectEmailForm.js
│   │   │       │   ├── ConnectEmailForm.mjs
│   │   │       │   ├── ConnectPhoneForm.js
│   │   │       │   ├── ConnectPhoneForm.mjs
│   │   │       │   ├── CopyToClipboard.js
│   │   │       │   ├── CopyToClipboard.mjs
│   │   │       │   ├── CopyableText.js
│   │   │       │   ├── CopyableText.mjs
│   │   │       │   ├── Dialog.js
│   │   │       │   ├── Dialog.mjs
│   │   │       │   ├── FiatOnrampPrompt.js
│   │   │       │   ├── FiatOnrampPrompt.mjs
│   │   │       │   ├── Layouts.js
│   │   │       │   ├── Layouts.mjs
│   │   │       │   ├── Loader.js
│   │   │       │   ├── Loader.mjs
│   │   │       │   ├── LoginMethodIcon.js
│   │   │       │   ├── LoginMethodIcon.mjs
│   │   │       │   ├── LoginModal.js
│   │   │       │   ├── LoginModal.mjs
│   │   │       │   ├── ModalFooter.js
│   │   │       │   ├── ModalFooter.mjs
│   │   │       │   ├── ModalHeader.js
│   │   │       │   ├── ModalHeader.mjs
│   │   │       │   ├── OpenLink.js
│   │   │       │   ├── OpenLink.mjs
│   │   │       │   ├── PhoneCountryDropdown.js
│   │   │       │   ├── PhoneCountryDropdown.mjs
│   │   │       │   ├── PinInput.js
│   │   │       │   ├── PinInput.mjs
│   │   │       │   ├── PrefetchedImage.js
│   │   │       │   ├── PrefetchedImage.mjs
│   │   │       │   ├── ProviderAppLogo.js
│   │   │       │   ├── ProviderAppLogo.mjs
│   │   │       │   ├── QrCode.js
│   │   │       │   ├── QrCode.mjs
│   │   │       │   ├── ScreenHeader.js
│   │   │       │   ├── ScreenHeader.mjs
│   │   │       │   ├── ScreenHelpers.js
│   │   │       │   ├── ScreenHelpers.mjs
│   │   │       │   ├── TelegramLoginButton.js
│   │   │       │   ├── TelegramLoginButton.mjs
│   │   │       │   ├── TodoList.js
│   │   │       │   ├── TodoList.mjs
│   │   │       │   ├── UpdateEmailForm.js
│   │   │       │   ├── UpdateEmailForm.mjs
│   │   │       │   ├── WrappedLoader.js
│   │   │       │   ├── WrappedLoader.mjs
│   │   │       │   ├── embedded-wallets
│   │   │       │   │   ├── Details.js
│   │   │       │   │   ├── Details.mjs
│   │   │       │   │   ├── DisplayInfoItem.js
│   │   │       │   │   ├── DisplayInfoItem.mjs
│   │   │       │   │   ├── FundWalletMethodHeader.js
│   │   │       │   │   ├── FundWalletMethodHeader.mjs
│   │   │       │   │   ├── PriceDisplay.js
│   │   │       │   │   ├── PriceDisplay.mjs
│   │   │       │   │   ├── SetWalletPasswordForm
│   │   │       │   │   │   ├── ConfimWalletPasswordForm.js
│   │   │       │   │   │   ├── ConfimWalletPasswordForm.mjs
│   │   │       │   │   │   ├── ConfimWalletPasswordSaved.js
│   │   │       │   │   │   ├── ConfimWalletPasswordSaved.mjs
│   │   │       │   │   │   ├── CreateWalletPassword.js
│   │   │       │   │   │   ├── CreateWalletPassword.mjs
│   │   │       │   │   │   ├── SaveWalletPassword.js
│   │   │       │   │   │   ├── SaveWalletPassword.mjs
│   │   │       │   │   │   ├── SetWalletPasswordComplete.js
│   │   │       │   │   │   ├── SetWalletPasswordComplete.mjs
│   │   │       │   │   │   ├── SetWalletPasswordForm.js
│   │   │       │   │   │   ├── SetWalletPasswordForm.mjs
│   │   │       │   │   │   ├── index.js
│   │   │       │   │   │   ├── index.mjs
│   │   │       │   │   │   ├── setWalletPassword.hooks.js
│   │   │       │   │   │   ├── setWalletPassword.hooks.mjs
│   │   │       │   │   │   ├── shared.js
│   │   │       │   │   │   └── shared.mjs
│   │   │       │   │   ├── SolanaTransactionDetails.js
│   │   │       │   │   ├── SolanaTransactionDetails.mjs
│   │   │       │   │   ├── StyledLogo.js
│   │   │       │   │   ├── StyledLogo.mjs
│   │   │       │   │   ├── TransactionDetails.js
│   │   │       │   │   ├── TransactionDetails.mjs
│   │   │       │   │   ├── TransactionDetailsWrapper.js
│   │   │       │   │   ├── TransactionDetailsWrapper.mjs
│   │   │       │   │   ├── TransactionTotal.js
│   │   │       │   │   ├── TransactionTotal.mjs
│   │   │       │   │   ├── WalletLink.js
│   │   │       │   │   ├── WalletLink.mjs
│   │   │       │   │   ├── index.js
│   │   │       │   │   └── index.mjs
│   │   │       │   ├── external-wallets
│   │   │       │   │   ├── InjectedWalletIcon.js
│   │   │       │   │   └── InjectedWalletIcon.mjs
│   │   │       │   ├── layout
│   │   │       │   │   ├── StackedContainer.js
│   │   │       │   │   └── StackedContainer.mjs
│   │   │       │   ├── primitives
│   │   │       │   │   ├── Accordion
│   │   │       │   │   │   ├── AccordionContext.js
│   │   │       │   │   │   ├── AccordionContext.mjs
│   │   │       │   │   │   ├── index.js
│   │   │       │   │   │   └── index.mjs
│   │   │       │   │   ├── LoadingSpinner
│   │   │       │   │   │   ├── index.js
│   │   │       │   │   │   └── index.mjs
│   │   │       │   │   └── NeutralSpinner
│   │   │       │   │       ├── index.js
│   │   │       │   │       └── index.mjs
│   │   │       │   └── ui
│   │   │       │       ├── animation
│   │   │       │       │   ├── LoadingSkeleton.js
│   │   │       │       │   └── LoadingSkeleton.mjs
│   │   │       │       ├── banners
│   │   │       │       │   ├── ErrorBanner.js
│   │   │       │       │   ├── ErrorBanner.mjs
│   │   │       │       │   ├── InfoBanner.js
│   │   │       │       │   ├── InfoBanner.mjs
│   │   │       │       │   ├── WarningBanner.js
│   │   │       │       │   └── WarningBanner.mjs
│   │   │       │       ├── chips
│   │   │       │       │   ├── Chip.js
│   │   │       │       │   └── Chip.mjs
│   │   │       │       ├── forms
│   │   │       │       │   ├── EmailInputForm.js
│   │   │       │       │   └── EmailInputForm.mjs
│   │   │       │       ├── icons
│   │   │       │       │   ├── ApplePay.js
│   │   │       │       │   ├── ApplePay.mjs
│   │   │       │       │   ├── Arbitum.js
│   │   │       │       │   ├── Arbitum.mjs
│   │   │       │       │   ├── Avalanche.js
│   │   │       │       │   ├── Avalanche.mjs
│   │   │       │       │   ├── Base.js
│   │   │       │       │   ├── Base.mjs
│   │   │       │       │   ├── Celo.js
│   │   │       │       │   ├── Celo.mjs
│   │   │       │       │   ├── GooglePay.js
│   │   │       │       │   ├── GooglePay.mjs
│   │   │       │       │   ├── Linea.js
│   │   │       │       │   ├── Linea.mjs
│   │   │       │       │   ├── Mainnnet.js
│   │   │       │       │   ├── Mainnnet.mjs
│   │   │       │       │   ├── Optimism.js
│   │   │       │       │   ├── Optimism.mjs
│   │   │       │       │   ├── Polygon.js
│   │   │       │       │   ├── Polygon.mjs
│   │   │       │       │   ├── Solana.js
│   │   │       │       │   ├── Solana.mjs
│   │   │       │       │   ├── WithCircleBorder.js
│   │   │       │       │   ├── WithCircleBorder.mjs
│   │   │       │       │   ├── Zora.js
│   │   │       │       │   └── Zora.mjs
│   │   │       │       ├── layout
│   │   │       │       │   ├── Column.js
│   │   │       │       │   ├── Column.mjs
│   │   │       │       │   ├── Row.js
│   │   │       │       │   └── Row.mjs
│   │   │       │       ├── typography
│   │   │       │       │   ├── ErrorMessage.js
│   │   │       │       │   ├── ErrorMessage.mjs
│   │   │       │       │   ├── LabelSm.js
│   │   │       │       │   ├── LabelSm.mjs
│   │   │       │       │   ├── LabelXs.js
│   │   │       │       │   ├── LabelXs.mjs
│   │   │       │       │   ├── Subtitle.js
│   │   │       │       │   ├── Subtitle.mjs
│   │   │       │       │   ├── Title.js
│   │   │       │       │   ├── Title.mjs
│   │   │       │       │   ├── Value.js
│   │   │       │       │   └── Value.mjs
│   │   │       │       └── wallet
│   │   │       │           ├── Address.js
│   │   │       │           ├── Address.mjs
│   │   │       │           ├── NetworkBalanceCard.js
│   │   │       │           ├── NetworkBalanceCard.mjs
│   │   │       │           ├── NetworkIcon.js
│   │   │       │           ├── NetworkIcon.mjs
│   │   │       │           ├── NetworkSelectorPanel.js
│   │   │       │           ├── NetworkSelectorPanel.mjs
│   │   │       │           ├── WalletInfoCard.js
│   │   │       │           ├── WalletInfoCard.mjs
│   │   │       │           ├── shared.js
│   │   │       │           └── shared.mjs
│   │   │       ├── config.js
│   │   │       ├── config.mjs
│   │   │       ├── configuration
│   │   │       │   ├── context.js
│   │   │       │   ├── context.mjs
│   │   │       │   ├── defaultClientConfig.js
│   │   │       │   ├── defaultClientConfig.mjs
│   │   │       │   ├── login-methods.js
│   │   │       │   ├── login-methods.mjs
│   │   │       │   ├── wallets.js
│   │   │       │   └── wallets.mjs
│   │   │       ├── connectors
│   │   │       │   ├── areWalletArraysEqual.js
│   │   │       │   ├── areWalletArraysEqual.mjs
│   │   │       │   ├── base.js
│   │   │       │   ├── base.mjs
│   │   │       │   ├── chains
│   │   │       │   │   ├── arbitrum.js
│   │   │       │   │   ├── arbitrum.mjs
│   │   │       │   │   ├── arbitrumSepolia.js
│   │   │       │   │   ├── arbitrumSepolia.mjs
│   │   │       │   │   ├── avalanche.js
│   │   │       │   │   ├── avalanche.mjs
│   │   │       │   │   ├── avalancheFuji.js
│   │   │       │   │   ├── avalancheFuji.mjs
│   │   │       │   │   ├── base.js
│   │   │       │   │   ├── base.mjs
│   │   │       │   │   ├── baseSepolia.js
│   │   │       │   │   ├── baseSepolia.mjs
│   │   │       │   │   ├── berachainArtio.js
│   │   │       │   │   ├── berachainArtio.mjs
│   │   │       │   │   ├── celo.js
│   │   │       │   │   ├── celo.mjs
│   │   │       │   │   ├── celoAlfajores.js
│   │   │       │   │   ├── celoAlfajores.mjs
│   │   │       │   │   ├── filecoin.js
│   │   │       │   │   ├── filecoin.mjs
│   │   │       │   │   ├── filecoinCalibration.js
│   │   │       │   │   ├── filecoinCalibration.mjs
│   │   │       │   │   ├── garnetHolesky.js
│   │   │       │   │   ├── garnetHolesky.mjs
│   │   │       │   │   ├── holesky.js
│   │   │       │   │   ├── holesky.mjs
│   │   │       │   │   ├── index.js
│   │   │       │   │   ├── index.mjs
│   │   │       │   │   ├── linea.js
│   │   │       │   │   ├── linea.mjs
│   │   │       │   │   ├── lineaTestnet.js
│   │   │       │   │   ├── lineaTestnet.mjs
│   │   │       │   │   ├── lukso.js
│   │   │       │   │   ├── lukso.mjs
│   │   │       │   │   ├── mainnet.js
│   │   │       │   │   ├── mainnet.mjs
│   │   │       │   │   ├── optimism.js
│   │   │       │   │   ├── optimism.mjs
│   │   │       │   │   ├── optimismSepolia.js
│   │   │       │   │   ├── optimismSepolia.mjs
│   │   │       │   │   ├── polygon.js
│   │   │       │   │   ├── polygon.mjs
│   │   │       │   │   ├── polygonAmoy.js
│   │   │       │   │   ├── polygonAmoy.mjs
│   │   │       │   │   ├── redstone.js
│   │   │       │   │   ├── redstone.mjs
│   │   │       │   │   ├── sepolia.js
│   │   │       │   │   ├── sepolia.mjs
│   │   │       │   │   ├── types.js
│   │   │       │   │   ├── types.mjs
│   │   │       │   │   ├── utils.js
│   │   │       │   │   ├── utils.mjs
│   │   │       │   │   ├── zora.js
│   │   │       │   │   ├── zora.mjs
│   │   │       │   │   ├── zoraSepolia.js
│   │   │       │   │   ├── zoraSepolia.mjs
│   │   │       │   │   ├── zoraTestnet.js
│   │   │       │   │   └── zoraTestnet.mjs
│   │   │       │   ├── coinbase.js
│   │   │       │   ├── coinbase.mjs
│   │   │       │   ├── embedded.js
│   │   │       │   ├── embedded.mjs
│   │   │       │   ├── embeddedProvider.js
│   │   │       │   ├── embeddedProvider.mjs
│   │   │       │   ├── errors.js
│   │   │       │   ├── errors.mjs
│   │   │       │   ├── ethereum
│   │   │       │   │   ├── EthereumNullConnector.js
│   │   │       │   │   ├── EthereumNullConnector.mjs
│   │   │       │   │   ├── index.js
│   │   │       │   │   └── index.mjs
│   │   │       │   ├── get-legacy-injected-providers.js
│   │   │       │   ├── get-legacy-injected-providers.mjs
│   │   │       │   ├── getRpcTimeout.js
│   │   │       │   ├── getRpcTimeout.mjs
│   │   │       │   ├── index.js
│   │   │       │   ├── index.mjs
│   │   │       │   ├── injected.js
│   │   │       │   ├── injected.mjs
│   │   │       │   ├── is-wallet-installed.js
│   │   │       │   ├── is-wallet-installed.mjs
│   │   │       │   ├── isBaseConnectedEthereumWallet.js
│   │   │       │   ├── isBaseConnectedEthereumWallet.mjs
│   │   │       │   ├── metamask.js
│   │   │       │   ├── metamask.mjs
│   │   │       │   ├── phantom-redirect.js
│   │   │       │   ├── phantom-redirect.mjs
│   │   │       │   ├── phantom-solana.js
│   │   │       │   ├── phantom-solana.mjs
│   │   │       │   ├── phantom.js
│   │   │       │   ├── phantom.mjs
│   │   │       │   ├── privyProxyProvider.js
│   │   │       │   ├── privyProxyProvider.mjs
│   │   │       │   ├── providerTypes.js
│   │   │       │   ├── providerTypes.mjs
│   │   │       │   ├── solana
│   │   │       │   │   ├── SolanaNullConnector.js
│   │   │       │   │   ├── SolanaNullConnector.mjs
│   │   │       │   │   ├── index.js
│   │   │       │   │   ├── index.mjs
│   │   │       │   │   ├── toSolanaWalletConnectors.js
│   │   │       │   │   └── toSolanaWalletConnectors.mjs
│   │   │       │   ├── userAlreadyHasConnectedCoinbaseWallet.js
│   │   │       │   ├── userAlreadyHasConnectedCoinbaseWallet.mjs
│   │   │       │   ├── walletconnect-client.js
│   │   │       │   ├── walletconnect-client.mjs
│   │   │       │   ├── walletconnect-registry.js
│   │   │       │   ├── walletconnect-registry.mjs
│   │   │       │   ├── walletconnect-v2.js
│   │   │       │   └── walletconnect-v2.mjs
│   │   │       ├── constants.js
│   │   │       ├── constants.mjs
│   │   │       ├── cookies.js
│   │   │       ├── cookies.mjs
│   │   │       ├── crypto.js
│   │   │       ├── crypto.mjs
│   │   │       ├── cssNormalize.js
│   │   │       ├── cssNormalize.mjs
│   │   │       ├── effect.js
│   │   │       ├── effect.mjs
│   │   │       ├── embedded-wallets
│   │   │       │   ├── EmbeddedWalletIframe.js
│   │   │       │   ├── EmbeddedWalletIframe.mjs
│   │   │       │   ├── delegated-actions.js
│   │   │       │   ├── delegated-actions.mjs
│   │   │       │   ├── errors.js
│   │   │       │   ├── errors.mjs
│   │   │       │   ├── eventCallbacksQueue.js
│   │   │       │   ├── eventCallbacksQueue.mjs
│   │   │       │   ├── invokeWithMfa.js
│   │   │       │   ├── invokeWithMfa.mjs
│   │   │       │   ├── rpc
│   │   │       │   │   ├── index.js
│   │   │       │   │   ├── index.mjs
│   │   │       │   │   ├── types.js
│   │   │       │   │   └── types.mjs
│   │   │       │   ├── solana
│   │   │       │   │   ├── provider.js
│   │   │       │   │   ├── provider.mjs
│   │   │       │   │   ├── transaction.js
│   │   │       │   │   └── transaction.mjs
│   │   │       │   ├── transactions.js
│   │   │       │   ├── transactions.mjs
│   │   │       │   ├── types.js
│   │   │       │   └── types.mjs
│   │   │       ├── errors.js
│   │   │       ├── errors.mjs
│   │   │       ├── farcaster.js
│   │   │       ├── farcaster.mjs
│   │   │       ├── hook-utils
│   │   │       │   ├── useAsyncValue.js
│   │   │       │   ├── useAsyncValue.mjs
│   │   │       │   ├── useInterval.js
│   │   │       │   └── useInterval.mjs
│   │   │       ├── hooks
│   │   │       │   ├── captcha-context.js
│   │   │       │   ├── captcha-context.mjs
│   │   │       │   ├── events-context.js
│   │   │       │   ├── events-context.mjs
│   │   │       │   ├── index.js
│   │   │       │   ├── index.mjs
│   │   │       │   ├── internal-context.js
│   │   │       │   ├── internal-context.mjs
│   │   │       │   ├── modal-context.js
│   │   │       │   ├── modal-context.mjs
│   │   │       │   ├── privy-context.js
│   │   │       │   ├── privy-context.mjs
│   │   │       │   ├── privy-provider.js
│   │   │       │   ├── privy-provider.mjs
│   │   │       │   ├── smart-wallets-provider.js
│   │   │       │   ├── smart-wallets-provider.mjs
│   │   │       │   ├── solana
│   │   │       │   │   ├── useFundWallet.js
│   │   │       │   │   ├── useFundWallet.mjs
│   │   │       │   │   ├── useSendTransaction.js
│   │   │       │   │   ├── useSendTransaction.mjs
│   │   │       │   │   ├── useSolanaWallets.js
│   │   │       │   │   └── useSolanaWallets.mjs
│   │   │       │   ├── useConnectCoinbaseSmartWallet.js
│   │   │       │   ├── useConnectCoinbaseSmartWallet.mjs
│   │   │       │   ├── useConnectWallet.js
│   │   │       │   ├── useConnectWallet.mjs
│   │   │       │   ├── useCreateWallet.js
│   │   │       │   ├── useCreateWallet.mjs
│   │   │       │   ├── useCrossAppAccounts.js
│   │   │       │   ├── useCrossAppAccounts.mjs
│   │   │       │   ├── useCustomAuth.js
│   │   │       │   ├── useCustomAuth.mjs
│   │   │       │   ├── useDelegatedActions.js
│   │   │       │   ├── useDelegatedActions.mjs
│   │   │       │   ├── useElementHeight.js
│   │   │       │   ├── useElementHeight.mjs
│   │   │       │   ├── useEmbeddedWalletCreate.js
│   │   │       │   ├── useEmbeddedWalletCreate.mjs
│   │   │       │   ├── useFarcasterSigner.js
│   │   │       │   ├── useFarcasterSigner.mjs
│   │   │       │   ├── useFormattedBalances.js
│   │   │       │   ├── useFormattedBalances.mjs
│   │   │       │   ├── useFundWallet.js
│   │   │       │   ├── useFundWallet.mjs
│   │   │       │   ├── useGetSolPrice.js
│   │   │       │   ├── useGetSolPrice.mjs
│   │   │       │   ├── useGetTokenPrice.js
│   │   │       │   ├── useGetTokenPrice.mjs
│   │   │       │   ├── useGuestAccounts.js
│   │   │       │   ├── useGuestAccounts.mjs
│   │   │       │   ├── useHeadlessDelegatedActions.js
│   │   │       │   ├── useHeadlessDelegatedActions.mjs
│   │   │       │   ├── useIdentityToken.js
│   │   │       │   ├── useIdentityToken.mjs
│   │   │       │   ├── useImportSolanaWallet.js
│   │   │       │   ├── useImportSolanaWallet.mjs
│   │   │       │   ├── useImportWallet.js
│   │   │       │   ├── useImportWallet.mjs
│   │   │       │   ├── useLinkAccount.js
│   │   │       │   ├── useLinkAccount.mjs
│   │   │       │   ├── useLinkWithPasskey.js
│   │   │       │   ├── useLinkWithPasskey.mjs
│   │   │       │   ├── useLinkWithSiwe.js
│   │   │       │   ├── useLinkWithSiwe.mjs
│   │   │       │   ├── useLogin.js
│   │   │       │   ├── useLogin.mjs
│   │   │       │   ├── useLoginToFrame.js
│   │   │       │   ├── useLoginToFrame.mjs
│   │   │       │   ├── useLoginWithEmail.js
│   │   │       │   ├── useLoginWithEmail.mjs
│   │   │       │   ├── useLoginWithOAuth.js
│   │   │       │   ├── useLoginWithOAuth.mjs
│   │   │       │   ├── useLoginWithPasskey.js
│   │   │       │   ├── useLoginWithPasskey.mjs
│   │   │       │   ├── useLoginWithSms.js
│   │   │       │   ├── useLoginWithSms.mjs
│   │   │       │   ├── useLogout.js
│   │   │       │   ├── useLogout.mjs
│   │   │       │   ├── useMfa.js
│   │   │       │   ├── useMfa.mjs
│   │   │       │   ├── useMfaEnrollment.js
│   │   │       │   ├── useMfaEnrollment.mjs
│   │   │       │   ├── useModalStatus.js
│   │   │       │   ├── useModalStatus.mjs
│   │   │       │   ├── useOAuthTokens.js
│   │   │       │   ├── useOAuthTokens.mjs
│   │   │       │   ├── usePrivy.js
│   │   │       │   ├── usePrivy.mjs
│   │   │       │   ├── useRegisterMfaListener.js
│   │   │       │   ├── useRegisterMfaListener.mjs
│   │   │       │   ├── useSendTransaction.js
│   │   │       │   ├── useSendTransaction.mjs
│   │   │       │   ├── useSetWalletPassword.js
│   │   │       │   ├── useSetWalletPassword.mjs
│   │   │       │   ├── useSetWalletRecovery.js
│   │   │       │   ├── useSetWalletRecovery.mjs
│   │   │       │   ├── useSignMessage.js
│   │   │       │   ├── useSignMessage.mjs
│   │   │       │   ├── useSignTransaction.js
│   │   │       │   ├── useSignTransaction.mjs
│   │   │       │   ├── useSignTypedData.js
│   │   │       │   ├── useSignTypedData.mjs
│   │   │       │   ├── useSmartWalletChain.js
│   │   │       │   ├── useSmartWalletChain.mjs
│   │   │       │   ├── useToken.js
│   │   │       │   ├── useToken.mjs
│   │   │       │   ├── useUpdateAccount.js
│   │   │       │   ├── useUpdateAccount.mjs
│   │   │       │   ├── useWalletBalance.js
│   │   │       │   ├── useWalletBalance.mjs
│   │   │       │   ├── useWallets.js
│   │   │       │   └── useWallets.mjs
│   │   │       ├── http.js
│   │   │       ├── http.mjs
│   │   │       ├── icons
│   │   │       │   ├── Apple.js
│   │   │       │   ├── Apple.mjs
│   │   │       │   ├── ArrowLeft.js
│   │   │       │   ├── ArrowLeft.mjs
│   │   │       │   ├── Avatar.js
│   │   │       │   ├── Avatar.mjs
│   │   │       │   ├── Bot.js
│   │   │       │   ├── Bot.mjs
│   │   │       │   ├── Check.js
│   │   │       │   ├── Check.mjs
│   │   │       │   ├── Copy.js
│   │   │       │   ├── Copy.mjs
│   │   │       │   ├── DomainsIcon.js
│   │   │       │   ├── DomainsIcon.mjs
│   │   │       │   ├── EmptyCheckedCircle.js
│   │   │       │   ├── EmptyCheckedCircle.mjs
│   │   │       │   ├── KeyRound.js
│   │   │       │   ├── KeyRound.mjs
│   │   │       │   ├── Login.js
│   │   │       │   ├── Login.mjs
│   │   │       │   ├── Logout.js
│   │   │       │   ├── Logout.mjs
│   │   │       │   ├── Mail.js
│   │   │       │   ├── Mail.mjs
│   │   │       │   ├── Phone.js
│   │   │       │   ├── Phone.mjs
│   │   │       │   ├── Portal.js
│   │   │       │   ├── Portal.mjs
│   │   │       │   ├── Settings.js
│   │   │       │   ├── Settings.mjs
│   │   │       │   ├── Slack.js
│   │   │       │   ├── Slack.mjs
│   │   │       │   ├── Socials.js
│   │   │       │   ├── Socials.mjs
│   │   │       │   ├── TicketCheck.js
│   │   │       │   ├── TicketCheck.mjs
│   │   │       │   ├── WalletCards.js
│   │   │       │   ├── WalletCards.mjs
│   │   │       │   ├── Wallets.js
│   │   │       │   ├── Wallets.mjs
│   │   │       │   ├── X.js
│   │   │       │   └── X.mjs
│   │   │       ├── index.js
│   │   │       ├── index.mjs
│   │   │       ├── lib
│   │   │       │   ├── abstract-smart-wallets.js
│   │   │       │   ├── abstract-smart-wallets.mjs
│   │   │       │   ├── caip2.js
│   │   │       │   ├── caip2.mjs
│   │   │       │   ├── capitalizeFirstLetter.js
│   │   │       │   ├── capitalizeFirstLetter.mjs
│   │   │       │   ├── cross-app
│   │   │       │   │   ├── authFlow.js
│   │   │       │   │   ├── authFlow.mjs
│   │   │       │   │   ├── index.js
│   │   │       │   │   ├── index.mjs
│   │   │       │   │   ├── popupCrossAppAuthFlow.js
│   │   │       │   │   ├── popupCrossAppAuthFlow.mjs
│   │   │       │   │   ├── sendCrossAppRequest.js
│   │   │       │   │   ├── sendCrossAppRequest.mjs
│   │   │       │   │   ├── types.js
│   │   │       │   │   └── types.mjs
│   │   │       │   ├── cybr53.js
│   │   │       │   ├── cybr53.mjs
│   │   │       │   ├── deployAccount
│   │   │       │   │   └── actions
│   │   │       │   │       └── abis
│   │   │       │   │           ├── deployAccount.js
│   │   │       │   │           └── deployAccount.mjs
│   │   │       │   ├── embeddedWalletRecovery.js
│   │   │       │   ├── embeddedWalletRecovery.mjs
│   │   │       │   ├── erc1155
│   │   │       │   │   └── actions
│   │   │       │   │       └── abis
│   │   │       │   │           ├── safeBatchTransferFrom.js
│   │   │       │   │           ├── safeBatchTransferFrom.mjs
│   │   │       │   │           ├── safeTransferFrom.js
│   │   │       │   │           └── safeTransferFrom.mjs
│   │   │       │   ├── erc20
│   │   │       │   │   ├── actions
│   │   │       │   │   │   ├── abis
│   │   │       │   │   │   │   ├── approve.js
│   │   │       │   │   │   │   ├── approve.mjs
│   │   │       │   │   │   │   ├── transfer.js
│   │   │       │   │   │   │   └── transfer.mjs
│   │   │       │   │   │   ├── getErc20TokenInfo.js
│   │   │       │   │   │   └── getErc20TokenInfo.mjs
│   │   │       │   │   ├── formatErc20TokenAmount.js
│   │   │       │   │   └── formatErc20TokenAmount.mjs
│   │   │       │   ├── erc721
│   │   │       │   │   └── actions
│   │   │       │   │       └── abis
│   │   │       │   │           ├── mint.js
│   │   │       │   │           ├── mint.mjs
│   │   │       │   │           ├── safeTransferFrom.js
│   │   │       │   │           ├── safeTransferFrom.mjs
│   │   │       │   │           ├── setApprovalForAll.js
│   │   │       │   │           ├── setApprovalForAll.mjs
│   │   │       │   │           ├── transferFrom.js
│   │   │       │   │           └── transferFrom.mjs
│   │   │       │   ├── ethers.js
│   │   │       │   ├── ethers.mjs
│   │   │       │   ├── external-wallets
│   │   │       │   │   ├── displayHelpers.js
│   │   │       │   │   └── displayHelpers.mjs
│   │   │       │   ├── farcaster.js
│   │   │       │   ├── farcaster.mjs
│   │   │       │   ├── funding
│   │   │       │   │   ├── analytics.js
│   │   │       │   │   ├── analytics.mjs
│   │   │       │   │   ├── coinbase
│   │   │       │   │   │   ├── isSupportedChainIdForCoinbaseOnramp.js
│   │   │       │   │   │   ├── isSupportedChainIdForCoinbaseOnramp.mjs
│   │   │       │   │   │   ├── toCoinbaseBlockchainFromChainId.js
│   │   │       │   │   │   ├── toCoinbaseBlockchainFromChainId.mjs
│   │   │       │   │   │   ├── triggerCoinbaseFlow.js
│   │   │       │   │   │   ├── triggerCoinbaseFlow.mjs
│   │   │       │   │   │   ├── types.js
│   │   │       │   │   │   └── types.mjs
│   │   │       │   │   ├── externalTransfer.js
│   │   │       │   │   ├── externalTransfer.mjs
│   │   │       │   │   ├── filterSupportedOptions.js
│   │   │       │   │   ├── filterSupportedOptions.mjs
│   │   │       │   │   ├── index.js
│   │   │       │   │   ├── index.mjs
│   │   │       │   │   ├── isFundingEnabled.js
│   │   │       │   │   ├── isFundingEnabled.mjs
│   │   │       │   │   ├── moonpay
│   │   │       │   │   │   ├── index.js
│   │   │       │   │   │   ├── index.mjs
│   │   │       │   │   │   ├── triggerMoonpayFlow.js
│   │   │       │   │   │   ├── triggerMoonpayFlow.mjs
│   │   │       │   │   │   ├── types.js
│   │   │       │   │   │   └── types.mjs
│   │   │       │   │   ├── prepareFundingMethods.js
│   │   │       │   │   ├── prepareFundingMethods.mjs
│   │   │       │   │   ├── prepareFundingModalData.js
│   │   │       │   │   ├── prepareFundingModalData.mjs
│   │   │       │   │   ├── reservoir.js
│   │   │       │   │   ├── reservoir.mjs
│   │   │       │   │   ├── usdc.js
│   │   │       │   │   └── usdc.mjs
│   │   │       │   ├── getEmbeddedConnectedWallet.js
│   │   │       │   ├── getEmbeddedConnectedWallet.mjs
│   │   │       │   ├── isEmbeddedWebview.js
│   │   │       │   ├── isEmbeddedWebview.mjs
│   │   │       │   ├── pkce.js
│   │   │       │   ├── pkce.mjs
│   │   │       │   ├── popup
│   │   │       │   │   ├── triggerPopup.js
│   │   │       │   │   └── triggerPopup.mjs
│   │   │       │   ├── popupOAuthFlow.js
│   │   │       │   ├── popupOAuthFlow.mjs
│   │   │       │   ├── siwe.js
│   │   │       │   ├── siwe.mjs
│   │   │       │   ├── siws.js
│   │   │       │   ├── siws.mjs
│   │   │       │   ├── smart-wallet-helpers.js
│   │   │       │   ├── smart-wallet-helpers.mjs
│   │   │       │   ├── smart-wallets-shared.js
│   │   │       │   ├── smart-wallets-shared.mjs
│   │   │       │   ├── smart-wallets.js
│   │   │       │   ├── smart-wallets.mjs
│   │   │       │   ├── solana
│   │   │       │   │   ├── index.js
│   │   │       │   │   ├── index.mjs
│   │   │       │   │   ├── transaction.js
│   │   │       │   │   ├── transaction.mjs
│   │   │       │   │   ├── types.js
│   │   │       │   │   └── types.mjs
│   │   │       │   ├── toDisplayFromAccountType.js
│   │   │       │   ├── toDisplayFromAccountType.mjs
│   │   │       │   ├── useHasTabbedAway.js
│   │   │       │   ├── useHasTabbedAway.mjs
│   │   │       │   ├── viem
│   │   │       │   │   ├── prepareTransactionRequest.js
│   │   │       │   │   ├── prepareTransactionRequest.mjs
│   │   │       │   │   ├── toViemTransactionSerializable.js
│   │   │       │   │   └── toViemTransactionSerializable.mjs
│   │   │       │   └── wallets
│   │   │       │       └── actions
│   │   │       │           ├── getBalanceForChains.js
│   │   │       │           ├── getBalanceForChains.mjs
│   │   │       │           ├── getErc20Balance.js
│   │   │       │           └── getErc20Balance.mjs
│   │   │       ├── passkeys
│   │   │       │   ├── transformOptionsToCamelCase.js
│   │   │       │   ├── transformOptionsToCamelCase.mjs
│   │   │       │   ├── transformResponseToSnakeCase.js
│   │   │       │   └── transformResponseToSnakeCase.mjs
│   │   │       ├── password.js
│   │   │       ├── password.mjs
│   │   │       ├── paths.js
│   │   │       ├── paths.mjs
│   │   │       ├── payment-request
│   │   │       │   ├── isPaymentRequestAvailable.js
│   │   │       │   └── isPaymentRequestAvailable.mjs
│   │   │       ├── plugins
│   │   │       │   ├── context
│   │   │       │   │   ├── PrivyPluginContext.js
│   │   │       │   │   └── PrivyPluginContext.mjs
│   │   │       │   ├── models.js
│   │   │       │   ├── models.mjs
│   │   │       │   └── solana-funding
│   │   │       │       ├── id.js
│   │   │       │       ├── id.mjs
│   │   │       │       ├── plugin.js
│   │   │       │       ├── plugin.mjs
│   │   │       │       ├── type.js
│   │   │       │       ├── type.mjs
│   │   │       │       ├── useSolanaFundingPlugin.js
│   │   │       │       └── useSolanaFundingPlugin.mjs
│   │   │       ├── privy-components
│   │   │       │   ├── shared
│   │   │       │   │   ├── PillButton.js
│   │   │       │   │   ├── PillButton.mjs
│   │   │       │   │   ├── X.js
│   │   │       │   │   └── X.mjs
│   │   │       │   ├── user-pill
│   │   │       │   │   ├── Account.js
│   │   │       │   │   ├── Account.mjs
│   │   │       │   │   ├── AddFundsButton.js
│   │   │       │   │   ├── AddFundsButton.mjs
│   │   │       │   │   ├── Avatar.js
│   │   │       │   │   ├── Avatar.mjs
│   │   │       │   │   ├── BackButton.js
│   │   │       │   │   ├── BackButton.mjs
│   │   │       │   │   ├── Menu.js
│   │   │       │   │   ├── Menu.mjs
│   │   │       │   │   ├── MenuProvider.js
│   │   │       │   │   ├── MenuProvider.mjs
│   │   │       │   │   ├── Popover.js
│   │   │       │   │   ├── Popover.mjs
│   │   │       │   │   ├── PrimaryAccount.js
│   │   │       │   │   ├── PrimaryAccount.mjs
│   │   │       │   │   ├── PrimaryWallet.js
│   │   │       │   │   ├── PrimaryWallet.mjs
│   │   │       │   │   ├── PrimaryWalletContainer.js
│   │   │       │   │   ├── PrimaryWalletContainer.mjs
│   │   │       │   │   ├── UserMenu.js
│   │   │       │   │   ├── UserMenu.mjs
│   │   │       │   │   ├── UserPill.js
│   │   │       │   │   ├── UserPill.mjs
│   │   │       │   │   └── screens
│   │   │       │   │       ├── AccountScreen.js
│   │   │       │   │       ├── AccountScreen.mjs
│   │   │       │   │       ├── LinkedAccountsScreen.js
│   │   │       │   │       ├── LinkedAccountsScreen.mjs
│   │   │       │   │       ├── MenuScreen.js
│   │   │       │   │       ├── MenuScreen.mjs
│   │   │       │   │       ├── WalletActionsScreen.js
│   │   │       │   │       └── WalletActionsScreen.mjs
│   │   │       │   └── wallets-pill
│   │   │       │       ├── ActiveWalletCard.js
│   │   │       │       ├── ActiveWalletCard.mjs
│   │   │       │       ├── AssetBalance.js
│   │   │       │       ├── AssetBalance.mjs
│   │   │       │       ├── ConnectWalletView.js
│   │   │       │       ├── ConnectWalletView.mjs
│   │   │       │       ├── NetworkPicker.js
│   │   │       │       ├── NetworkPicker.mjs
│   │   │       │       ├── SelectActiveWalletView.js
│   │   │       │       ├── SelectActiveWalletView.mjs
│   │   │       │       ├── WalletCardView.js
│   │   │       │       ├── WalletCardView.mjs
│   │   │       │       ├── WalletsDialog.js
│   │   │       │       ├── WalletsDialog.mjs
│   │   │       │       ├── data
│   │   │       │       │   ├── wcRegistryPatch.js
│   │   │       │       │   └── wcRegistryPatch.mjs
│   │   │       │       ├── icons
│   │   │       │       │   ├── EVM.js
│   │   │       │       │   ├── EVM.mjs
│   │   │       │       │   ├── Solana.js
│   │   │       │       │   └── Solana.mjs
│   │   │       │       ├── state.js
│   │   │       │       ├── state.mjs
│   │   │       │       ├── styles.js
│   │   │       │       ├── styles.mjs
│   │   │       │       ├── useActiveWallet.js
│   │   │       │       └── useActiveWallet.mjs
│   │   │       ├── privy-provider-DOccla45.js
│   │   │       ├── privy-provider-DOccla45.mjs
│   │   │       ├── recent-login
│   │   │       │   ├── context.js
│   │   │       │   └── context.mjs
│   │   │       ├── screens
│   │   │       │   ├── AccountNotFoundScreen.js
│   │   │       │   ├── AccountNotFoundScreen.mjs
│   │   │       │   ├── AccountTransferScreen
│   │   │       │   │   ├── AccountTransferButton.js
│   │   │       │   │   ├── AccountTransferButton.mjs
│   │   │       │   │   ├── EmbeddedWalletInfoView.js
│   │   │       │   │   ├── EmbeddedWalletInfoView.mjs
│   │   │       │   │   ├── LinkConflictScreen.js
│   │   │       │   │   ├── LinkConflictScreen.mjs
│   │   │       │   │   ├── styled.js
│   │   │       │   │   └── styled.mjs
│   │   │       │   ├── AffirmativeConsentScreen.js
│   │   │       │   ├── AffirmativeConsentScreen.mjs
│   │   │       │   ├── AllowlistRejectionScreen.js
│   │   │       │   ├── AllowlistRejectionScreen.mjs
│   │   │       │   ├── AwaitingPasswordlessCodeScreen.js
│   │   │       │   ├── AwaitingPasswordlessCodeScreen.mjs
│   │   │       │   ├── CaptchaScreen.js
│   │   │       │   ├── CaptchaScreen.mjs
│   │   │       │   ├── ConnectOnlyAuthenticatedScreen.js
│   │   │       │   ├── ConnectOnlyAuthenticatedScreen.mjs
│   │   │       │   ├── ConnectOnlyLandingScreen.js
│   │   │       │   ├── ConnectOnlyLandingScreen.mjs
│   │   │       │   ├── ConnectOnlyStatusScreen.js
│   │   │       │   ├── ConnectOnlyStatusScreen.mjs
│   │   │       │   ├── ConnectionStatusScreen.js
│   │   │       │   ├── ConnectionStatusScreen.mjs
│   │   │       │   ├── CrossAppAuthScreen.js
│   │   │       │   ├── CrossAppAuthScreen.mjs
│   │   │       │   ├── DelegatedActionsConsentScreen.js
│   │   │       │   ├── DelegatedActionsConsentScreen.mjs
│   │   │       │   ├── DelegatedActionsRevokeScreen.js
│   │   │       │   ├── DelegatedActionsRevokeScreen.mjs
│   │   │       │   ├── EmbeddedWalletConnectingScreen.js
│   │   │       │   ├── EmbeddedWalletConnectingScreen.mjs
│   │   │       │   ├── EmbeddedWalletCreatedScreen.js
│   │   │       │   ├── EmbeddedWalletCreatedScreen.mjs
│   │   │       │   ├── EmbeddedWalletKeyExportScreen.js
│   │   │       │   ├── EmbeddedWalletKeyExportScreen.mjs
│   │   │       │   ├── EmbeddedWalletOnAccountCreateScreen.js
│   │   │       │   ├── EmbeddedWalletOnAccountCreateScreen.mjs
│   │   │       │   ├── EmbeddedWalletPasswordUpdateScreen.js
│   │   │       │   ├── EmbeddedWalletPasswordUpdateScreen.mjs
│   │   │       │   ├── EmbeddedWalletPasswordUpdateSplashScreen.js
│   │   │       │   ├── EmbeddedWalletPasswordUpdateSplashScreen.mjs
│   │   │       │   ├── ErrorScreen.js
│   │   │       │   ├── ErrorScreen.mjs
│   │   │       │   ├── FarcasterConnectStatusScreen.js
│   │   │       │   ├── FarcasterConnectStatusScreen.mjs
│   │   │       │   ├── FarcasterSignerStatusScreen.js
│   │   │       │   ├── FarcasterSignerStatusScreen.mjs
│   │   │       │   ├── Funding
│   │   │       │   │   ├── AwaitingEvmToSolBridgingScreen.js
│   │   │       │   │   ├── AwaitingEvmToSolBridgingScreen.mjs
│   │   │       │   │   ├── AwaitingExternalSolanaTransferScreen.js
│   │   │       │   │   ├── AwaitingExternalSolanaTransferScreen.mjs
│   │   │       │   │   ├── AwaitingExternalTransferScreen.js
│   │   │       │   │   ├── AwaitingExternalTransferScreen.mjs
│   │   │       │   │   ├── AwaitingSolToEvmBridgingScreen.js
│   │   │       │   │   ├── AwaitingSolToEvmBridgingScreen.mjs
│   │   │       │   │   ├── BridgeNetworkSelectionView.js
│   │   │       │   │   ├── BridgeNetworkSelectionView.mjs
│   │   │       │   │   ├── CoinbaseOnrampStatusScreen.js
│   │   │       │   │   ├── CoinbaseOnrampStatusScreen.mjs
│   │   │       │   │   ├── FundingEditAmountScreen.js
│   │   │       │   │   ├── FundingEditAmountScreen.mjs
│   │   │       │   │   ├── FundingMethodSelectionScreen.js
│   │   │       │   │   ├── FundingMethodSelectionScreen.mjs
│   │   │       │   │   ├── ManualTransferScreen.js
│   │   │       │   │   ├── ManualTransferScreen.mjs
│   │   │       │   │   ├── MoonpayStatusScreen.js
│   │   │       │   │   ├── MoonpayStatusScreen.mjs
│   │   │       │   │   ├── TransferFromWalletScreen.js
│   │   │       │   │   ├── TransferFromWalletScreen.mjs
│   │   │       │   │   ├── TransferOrBridgeLoadingScreen.js
│   │   │       │   │   ├── TransferOrBridgeLoadingScreen.mjs
│   │   │       │   │   ├── styles.js
│   │   │       │   │   └── styles.mjs
│   │   │       │   ├── InAppBrowserLoginNotPossible.js
│   │   │       │   ├── InAppBrowserLoginNotPossible.mjs
│   │   │       │   ├── InstallPhantomScreen.js
│   │   │       │   ├── InstallPhantomScreen.mjs
│   │   │       │   ├── LandingScreen
│   │   │       │   │   ├── AppLogoHeader.js
│   │   │       │   │   ├── AppLogoHeader.mjs
│   │   │       │   │   ├── ConnectOrCreateScreen.js
│   │   │       │   │   ├── ConnectOrCreateScreen.mjs
│   │   │       │   │   ├── CrossAppButton.js
│   │   │       │   │   ├── CrossAppButton.mjs
│   │   │       │   │   ├── CustomLandingScreenView.js
│   │   │       │   │   ├── CustomLandingScreenView.mjs
│   │   │       │   │   ├── EmailButton.js
│   │   │       │   │   ├── EmailButton.mjs
│   │   │       │   │   ├── EmptyWalletView.js
│   │   │       │   │   ├── EmptyWalletView.mjs
│   │   │       │   │   ├── FarcasterButton.js
│   │   │       │   │   ├── FarcasterButton.mjs
│   │   │       │   │   ├── LandingScreen.js
│   │   │       │   │   ├── LandingScreen.mjs
│   │   │       │   │   ├── LandingScreenView.js
│   │   │       │   │   ├── LandingScreenView.mjs
│   │   │       │   │   ├── PasskeyLink.js
│   │   │       │   │   ├── PasskeyLink.mjs
│   │   │       │   │   ├── SmsButton.js
│   │   │       │   │   ├── SmsButton.mjs
│   │   │       │   │   ├── SocialButton.js
│   │   │       │   │   ├── SocialButton.mjs
│   │   │       │   │   ├── TelegramButton.js
│   │   │       │   │   ├── TelegramButton.mjs
│   │   │       │   │   ├── WalletButton.js
│   │   │       │   │   ├── WalletButton.mjs
│   │   │       │   │   ├── WalletButtonList.js
│   │   │       │   │   ├── WalletButtonList.mjs
│   │   │       │   │   ├── WalletOverflowButton.js
│   │   │       │   │   ├── WalletOverflowButton.mjs
│   │   │       │   │   ├── Web2OverflowButton.js
│   │   │       │   │   ├── Web2OverflowButton.mjs
│   │   │       │   │   ├── styles.js
│   │   │       │   │   └── styles.mjs
│   │   │       │   ├── LinkEmailScreen.js
│   │   │       │   ├── LinkEmailScreen.mjs
│   │   │       │   ├── LinkPasskeyScreen.js
│   │   │       │   ├── LinkPasskeyScreen.mjs
│   │   │       │   ├── LinkPhoneScreen.js
│   │   │       │   ├── LinkPhoneScreen.mjs
│   │   │       │   ├── LinkWalletScreen.js
│   │   │       │   ├── LinkWalletScreen.mjs
│   │   │       │   ├── LoginFailedScreen.js
│   │   │       │   ├── LoginFailedScreen.mjs
│   │   │       │   ├── MfaScreens
│   │   │       │   │   ├── EnrollLandingScreen.js
│   │   │       │   │   ├── EnrollLandingScreen.mjs
│   │   │       │   │   ├── EnrollPasskey.js
│   │   │       │   │   ├── EnrollPasskey.mjs
│   │   │       │   │   ├── EnrollSms.js
│   │   │       │   │   ├── EnrollSms.mjs
│   │   │       │   │   ├── EnrollTotp.js
│   │   │       │   │   ├── EnrollTotp.mjs
│   │   │       │   │   ├── MfaEnrollmentFlowScreen.js
│   │   │       │   │   ├── MfaEnrollmentFlowScreen.mjs
│   │   │       │   │   ├── MfaVerifyFlowScreen.js
│   │   │       │   │   ├── MfaVerifyFlowScreen.mjs
│   │   │       │   │   ├── StyledComponents.js
│   │   │       │   │   ├── StyledComponents.mjs
│   │   │       │   │   ├── VerifyWithPasskey.js
│   │   │       │   │   └── VerifyWithPasskey.mjs
│   │   │       │   ├── OAuthStatusScreen.js
│   │   │       │   ├── OAuthStatusScreen.mjs
│   │   │       │   ├── PasskeySelectSignupOrLogin.js
│   │   │       │   ├── PasskeySelectSignupOrLogin.mjs
│   │   │       │   ├── PasskeyStatusScreen.js
│   │   │       │   ├── PasskeyStatusScreen.mjs
│   │   │       │   ├── PhantomInterstitialScreen.js
│   │   │       │   ├── PhantomInterstitialScreen.mjs
│   │   │       │   ├── Recovery
│   │   │       │   │   ├── PasswordRecoveryScreen.js
│   │   │       │   │   ├── PasswordRecoveryScreen.mjs
│   │   │       │   │   ├── RecoveryOAuthStatusScreen.js
│   │   │       │   │   ├── RecoveryOAuthStatusScreen.mjs
│   │   │       │   │   ├── RecoveryPasswordCreateScreen.js
│   │   │       │   │   ├── RecoveryPasswordCreateScreen.mjs
│   │   │       │   │   ├── RecoverySelectionScreen.js
│   │   │       │   │   ├── RecoverySelectionScreen.mjs
│   │   │       │   │   ├── SetAutomaticRecoveryScreen.js
│   │   │       │   │   ├── SetAutomaticRecoveryScreen.mjs
│   │   │       │   │   ├── styles.js
│   │   │       │   │   └── styles.mjs
│   │   │       │   ├── SendSolanaTransactionScreen
│   │   │       │   │   ├── SendSolanaTransactionScreen.js
│   │   │       │   │   ├── SendSolanaTransactionScreen.mjs
│   │   │       │   │   ├── SolanaTransactionReceiptView.js
│   │   │       │   │   └── SolanaTransactionReceiptView.mjs
│   │   │       │   ├── SendTransactionScreen
│   │   │       │   │   ├── SendTransactionScreen.js
│   │   │       │   │   ├── SendTransactionScreen.mjs
│   │   │       │   │   ├── SendTransactionScreenView.js
│   │   │       │   │   ├── SendTransactionScreenView.mjs
│   │   │       │   │   ├── TransactionDetail.js
│   │   │       │   │   ├── TransactionDetail.mjs
│   │   │       │   │   ├── TransactionErrorView.js
│   │   │       │   │   ├── TransactionErrorView.mjs
│   │   │       │   │   ├── TransactionReceiptView.js
│   │   │       │   │   ├── TransactionReceiptView.mjs
│   │   │       │   │   ├── getStaticTransactionMetadata.js
│   │   │       │   │   ├── getStaticTransactionMetadata.mjs
│   │   │       │   │   ├── index.js
│   │   │       │   │   ├── index.mjs
│   │   │       │   │   ├── usePrepareTransaction.js
│   │   │       │   │   ├── usePrepareTransaction.mjs
│   │   │       │   │   ├── useTransactionDetails.js
│   │   │       │   │   └── useTransactionDetails.mjs
│   │   │       │   ├── SignRequestScreen.js
│   │   │       │   ├── SignRequestScreen.mjs
│   │   │       │   ├── TelegramAuthScreen.js
│   │   │       │   ├── TelegramAuthScreen.mjs
│   │   │       │   ├── UpdateEmailScreen.js
│   │   │       │   ├── UpdateEmailScreen.mjs
│   │   │       │   ├── UpdatePhoneScreen.js
│   │   │       │   ├── UpdatePhoneScreen.mjs
│   │   │       │   ├── UserLimitReachedScreen.js
│   │   │       │   ├── UserLimitReachedScreen.mjs
│   │   │       │   ├── index.js
│   │   │       │   └── index.mjs
│   │   │       ├── session.js
│   │   │       ├── session.mjs
│   │   │       ├── smart-wallets.js
│   │   │       ├── smart-wallets.mjs
│   │   │       ├── solana.js
│   │   │       ├── solana.mjs
│   │   │       ├── storage.js
│   │   │       ├── storage.mjs
│   │   │       ├── styles.js
│   │   │       ├── styles.mjs
│   │   │       ├── svg
│   │   │       │   ├── alert-circle.js
│   │   │       │   ├── alert-circle.mjs
│   │   │       │   ├── apple-icloud.js
│   │   │       │   ├── apple-icloud.mjs
│   │   │       │   ├── apple.js
│   │   │       │   ├── apple.mjs
│   │   │       │   ├── arrow-cycle.js
│   │   │       │   ├── arrow-cycle.mjs
│   │   │       │   ├── black-rounded-square.js
│   │   │       │   ├── black-rounded-square.mjs
│   │   │       │   ├── blobby.js
│   │   │       │   ├── blobby.mjs
│   │   │       │   ├── brave-browser-icon.js
│   │   │       │   ├── brave-browser-icon.mjs
│   │   │       │   ├── browser-extension-wallet-icon.js
│   │   │       │   ├── browser-extension-wallet-icon.mjs
│   │   │       │   ├── bybit.js
│   │   │       │   ├── bybit.mjs
│   │   │       │   ├── chains
│   │   │       │   │   ├── base.js
│   │   │       │   │   └── base.mjs
│   │   │       │   ├── check-badge.js
│   │   │       │   ├── check-badge.mjs
│   │   │       │   ├── checkmark.js
│   │   │       │   ├── checkmark.mjs
│   │   │       │   ├── circle-alert.js
│   │   │       │   ├── circle-alert.mjs
│   │   │       │   ├── coinbase-wallet.js
│   │   │       │   ├── coinbase-wallet.mjs
│   │   │       │   ├── copy.js
│   │   │       │   ├── copy.mjs
│   │   │       │   ├── cryptocom.js
│   │   │       │   ├── cryptocom.mjs
│   │   │       │   ├── discord.js
│   │   │       │   ├── discord.mjs
│   │   │       │   ├── email-or-phone.js
│   │   │       │   ├── email-or-phone.mjs
│   │   │       │   ├── error-circle.js
│   │   │       │   ├── error-circle.mjs
│   │   │       │   ├── face-id.js
│   │   │       │   ├── face-id.mjs
│   │   │       │   ├── farcaster.js
│   │   │       │   ├── farcaster.mjs
│   │   │       │   ├── fingerprint.js
│   │   │       │   ├── fingerprint.mjs
│   │   │       │   ├── github.js
│   │   │       │   ├── github.mjs
│   │   │       │   ├── globe.js
│   │   │       │   ├── globe.mjs
│   │   │       │   ├── google-drive.js
│   │   │       │   ├── google-drive.mjs
│   │   │       │   ├── google.js
│   │   │       │   ├── google.mjs
│   │   │       │   ├── index.d.js
│   │   │       │   ├── index.d.mjs
│   │   │       │   ├── instagram.js
│   │   │       │   ├── instagram.mjs
│   │   │       │   ├── linkedin.js
│   │   │       │   ├── linkedin.mjs
│   │   │       │   ├── lock-closed.js
│   │   │       │   ├── lock-closed.mjs
│   │   │       │   ├── metamask.js
│   │   │       │   ├── metamask.mjs
│   │   │       │   ├── mfa-shield.js
│   │   │       │   ├── mfa-shield.mjs
│   │   │       │   ├── moonpay.js
│   │   │       │   ├── moonpay.mjs
│   │   │       │   ├── phantom.js
│   │   │       │   ├── phantom.mjs
│   │   │       │   ├── protected-by-privy.js
│   │   │       │   ├── protected-by-privy.mjs
│   │   │       │   ├── qr-codes.js
│   │   │       │   ├── qr-codes.mjs
│   │   │       │   ├── rabby.js
│   │   │       │   ├── rabby.mjs
│   │   │       │   ├── rainbow.js
│   │   │       │   ├── rainbow.mjs
│   │   │       │   ├── safe.js
│   │   │       │   ├── safe.mjs
│   │   │       │   ├── spotify.js
│   │   │       │   ├── spotify.mjs
│   │   │       │   ├── telegram.js
│   │   │       │   ├── telegram.mjs
│   │   │       │   ├── tiktok.js
│   │   │       │   ├── tiktok.mjs
│   │   │       │   ├── twitter.js
│   │   │       │   ├── twitter.mjs
│   │   │       │   ├── uniswap.js
│   │   │       │   ├── uniswap.mjs
│   │   │       │   ├── universal-profile.js
│   │   │       │   ├── universal-profile.mjs
│   │   │       │   ├── wallet-connect.js
│   │   │       │   ├── wallet-connect.mjs
│   │   │       │   ├── zerion.js
│   │   │       │   └── zerion.mjs
│   │   │       ├── theme.js
│   │   │       ├── theme.mjs
│   │   │       ├── token.js
│   │   │       ├── token.mjs
│   │   │       ├── types.js
│   │   │       ├── types.mjs
│   │   │       ├── ui.js
│   │   │       ├── ui.mjs
│   │   │       └── utils
│   │   │           ├── buffer
│   │   │           │   ├── readBigInt64LE.js
│   │   │           │   └── readBigInt64LE.mjs
│   │   │           ├── eth
│   │   │           │   ├── getPublicClient.js
│   │   │           │   └── getPublicClient.mjs
│   │   │           ├── index.js
│   │   │           └── index.mjs
│   │   └── package.json
│   └── wagmi
│       ├── LICENSE
│       ├── README.md
│       ├── dist
│       │   ├── dts
│       │   │   ├── index.d.mts
│       │   │   └── index.d.ts
│       │   └── esm
│       │       ├── PrivyWagmiConnector.js
│       │       ├── PrivyWagmiConnector.mjs
│       │       ├── WagmiProvider.js
│       │       ├── WagmiProvider.mjs
│       │       ├── createConfig.js
│       │       ├── createConfig.mjs
│       │       ├── index.js
│       │       ├── index.mjs
│       │       ├── mkConfig.js
│       │       ├── useEmbeddedSmartAccountConnector.js
│       │       ├── useEmbeddedSmartAccountConnector.mjs
│       │       ├── usePrivyWagmi.js
│       │       ├── usePrivyWagmi.mjs
│       │       ├── useSetActiveWallet.js
│       │       ├── useSetActiveWallet.mjs
│       │       ├── useSyncPrivyWallets.js
│       │       └── useSyncPrivyWallets.mjs
│       └── package.json
├── README.md
├── deob.sh
├── package-lock.json
└── package.json

124 directories, 1410 files
