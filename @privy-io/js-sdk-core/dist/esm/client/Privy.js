import e from "./AppApi.mjs";
import i from "./CrossAppApi.mjs";
import t from "./DelegatedWalletsApi.mjs";
import s from "./EmbeddedWalletApi.mjs";
import m from "./MfaPromises.mjs";
import { PrivyInternal as r } from "./PrivyInternal.mjs";
import o from "./UserApi.mjs";
import a from "./auth/AuthApi.mjs";
import p from "./funding/FundingApi.mjs";
import n from "./mfa/MfaApi.mjs";
import d from "./recovery/RecoveryApi.mjs";
import "@privy-io/public-api";
import "../Error.mjs";
import "../chains/index.mjs";
import "../chains/arbitrum.mjs";
import "../chains/arbitrumGoerli.mjs";
import "../chains/arbitrumSepolia.mjs";
import "../chains/avalanche.mjs";
import "../chains/avalancheFuji.mjs";
import "../chains/base.mjs";
import "../chains/baseGoerli.mjs";
import "../chains/baseSepolia.mjs";
import "../chains/berachainArtio.mjs";
import "../chains/celo.mjs";
import "../chains/celoAlfajores.mjs";
import "../chains/filecoin.mjs";
import "../chains/filecoinCalibration.mjs";
import "../chains/garnetHolesky.mjs";
import "../chains/goerli.mjs";
import "../chains/holesky.mjs";
import "../chains/linea.mjs";
import "../chains/lineaTestnet.mjs";
import "../chains/mainnet.mjs";
import "../chains/optimism.mjs";
import "../chains/optimismGoerli.mjs";
import "../chains/optimismSepolia.mjs";
import "../chains/polygon.mjs";
import "../chains/polygonMumbai.mjs";
import "../chains/redstone.mjs";
import "../chains/redstoneHolesky.mjs";
import "../chains/sepolia.mjs";
import "../chains/zora.mjs";
import "../chains/zoraSepolia.mjs";
import "../chains/zoraTestnet.mjs";
import "../embedded/EmbeddedBitcoinWalletProvider.mjs";
import "../embedded/errors.mjs";
import "../embedded/types.mjs";
import "../embedded/utils/index.mjs";
import "@ethersproject/abstract-signer";
import "@ethersproject/providers";
import "../embedded/gas/arbitrum.mjs";
import "@ethersproject/bignumber";
import "../embedded/utils/ethers.mjs";
import "../embedded/gas/bsc.mjs";
import "../embedded/gas/op-stack.mjs";
import "@ethersproject/contracts";
import "@ethersproject/transactions";
import "../embedded/gas/polygon.mjs";
import "@ethersproject/units";
import "fetch-retry";
import "../chains/polygonAmoy.mjs";
import "../embedded/utils/gas.mjs";
import "../embedded/EmbeddedWalletProxy.mjs";
import "../utils/sleep.mjs";
import "../embedded/EventCallbackQueue.mjs";
import "../embedded/withMfa.mjs";
import "../embedded/EmbeddedWalletProvider.mjs";
import "eventemitter3";
import "../embedded/methods.mjs";
import "../embedded/EmbeddedSolanaWalletProvider.mjs";
import "../solana/getWalletPublicKeyFromTransaction.mjs";
import "../solana/isVersionedTransaction.mjs";
import "uuid";
import "@privy-io/api-base";
import "../Session.mjs";
import "jose";
import "js-cookie";
import "../Token.mjs";
import "../utils/allSettled.mjs";
import "../toAbortSignalTimeout.mjs";
import "../utils/toSearchParams.mjs";
import "./auth/CustomProviderApi.mjs";
import "./auth/maybeCreateWalletOnLogin.mjs";
import "../utils/getUserEmbeddedEthereumWallet.mjs";
import "../utils/getAllUserEmbeddedEthereumWallets.mjs";
import "../utils/getUserEmbeddedSolanaWallet.mjs";
import "../utils/getAllUserEmbeddedSolanaWallets.mjs";
import "../utils/shouldCreateEmbeddedEthWallet.mjs";
import "../utils/shouldCreateEmbeddedSolWallet.mjs";
import "./auth/EmailApi.mjs";
import "./auth/FarcasterApi.mjs";
import "./auth/FarcasterV2Api.mjs";
import "./auth/GuestApi.mjs";
import "./auth/OAuthApi.mjs";
import "../pkce.mjs";
import "./auth/PasskeyApi.mjs";
import "./auth/PhoneApi.mjs";
import "./auth/SiweApi.mjs";
import "./auth/SmartWalletApi.mjs";
import "./funding/CoinbaseOnRampApi.mjs";
import "./funding/MoonpayOnRampApi.mjs";
import "../funding/moonpay.mjs";
import "./mfa/MfaPasskeyApi.mjs";
import "./mfa/MfaSmsApi.mjs";
import "./recovery/RecoveryICloudApi.mjs";
import "./recovery/RecoveryOAuthApi.mjs";
class l {
  async initialize() {
    await this._privyInternal._initialize();
  }
  setMessagePoster(e) {
    this.embeddedWallet.setMessagePoster(e);
  }
  addOAuthTokensListener(e) {
    this._privyInternal.session.on("oauth_tokens_granted", e);
    return {
      unsubscribe: () => {
        this._privyInternal.session.removeListener("oauth_tokens_granted", e);
      }
    };
  }
  setCallbacks(e) {
    this._privyInternal.setCallbacks(e);
  }
  getAccessToken() {
    return this._privyInternal.getAccessToken();
  }
  getIdentityToken() {
    return this._privyInternal.getIdentityToken();
  }
  constructor({
    clientId: l,
    ...j
  }) {
    this._privyInternal = new r({
      ...j,
      appClientId: l
    });
    this.mfa = new n(this._privyInternal);
    this.mfaPromises = new m();
    this.embeddedWallet = new s(this._privyInternal, j.embeddedWalletMessagePoster, j.supportedChains, this.mfa, this.mfaPromises);
    this.user = new o(this._privyInternal);
    this.app = new e(this._privyInternal);
    this.auth = new a(this._privyInternal, this.embeddedWallet, j.storage, j.crypto);
    this.recovery = new d(this._privyInternal, j.storage, j.crypto);
    this.funding = new p(this._privyInternal);
    this.delegated = new t(this._privyInternal);
    this.crossApp = new i(j.storage);
  }
}
export { l as default };
