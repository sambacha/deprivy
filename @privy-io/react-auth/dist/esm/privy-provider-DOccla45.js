import { jsx as e, jsxs as t } from "react/jsx-runtime";
import { createStore as a } from "mipd";
import { useState as r, useRef as n, useEffect as i, useMemo as o } from "react";
import { isAndroid as s } from "react-device-detect";
import { getAddress as l } from "viem/utils";
import { CustomJwtAccountFlow as c } from "./auth-flows/custom-jwt-account.mjs";
import { UpdateEmailFlow as d, EmailFlow as u } from "./auth-flows/email.mjs";
import { FarcasterFlow as h } from "./auth-flows/farcaster.mjs";
import { GuestFlow as p } from "./auth-flows/guest.mjs";
import { PasskeyFlow as w } from "./auth-flows/passkey.mjs";
import { SiweFlow as m } from "./auth-flows/siwe.mjs";
import { SiwsFlow as y } from "./auth-flows/siws.mjs";
import { UpdateSmsFlow as g, SmsFlow as f } from "./auth-flows/sms.mjs";
import { TelegramAuthFlow as E, convertInitDataRawToTelegramWebAppData as A, detectCompletingTelegramFlow as _ } from "./auth-flows/telegram.mjs";
import { v4 as T } from "uuid";
import { AccessToken as v } from "./accessToken.mjs";
import { getEntropyDetailsFromAccount as C, convertUserResponseToUser as I, getPrivySolanaHDWallets as k, getImportedPrivySolanaWallet as W, getPrivyPrimaryWallet as N, getPrivyEthereumWallet as b, getPrivyEthereumHDWallets as U, getImportedPrivyEthereumWallet as O, shouldProceedtoEmbeddedWalletCreationFlow as S, getPrivySolanaWallet as R, getLatestPrivyEthereumWallet as P, getSolanaSigningAndRootWallet as D, getEthereumSigningAndRootWallet as M, getLatestPrivySolanaWallet as L, getEntropyDetailsFromUser as F } from "./client/user.mjs";
import x from "eventemitter3";
import { CONNECTORS_STATE_KEY as j, CONNECTIONS_HISTORY_KEY as B, DEFAULT_PRIVY_API_URL as V, DEFAULT_API_TIMEOUT_MS as H, CLIENT_ANALYTICS_ID_KEY as K, CUSTOMER_ACCESS_TOKEN_STORAGE_KEY as z, PRIVY_ACCESS_TOKEN_STORAGE_KEY as G, getGuestCredentialStorageKey as q, HEADLESS_OAUTH_KEY as $, OAUTH_DISABLE_SIGNUP_KEY as Y, STATE_CODE_KEY as X, WALLET_PROXY_TIMEOUT as Q, FORKED_TOKEN_STORAGE_KEY as J } from "./constants.mjs";
import Z, { isLocalStorageAccessible as ee } from "./storage.mjs";
import { generateTypedDataWithDomainType as te, toHex as ae, detectInjectedConnectors as re, formatChainIdToCAIP2 as ne } from "./utils/index.mjs";
import { CoinbaseWalletConnector as ie } from "./connectors/coinbase.mjs";
import { EmbeddedWalletConnector as oe } from "./connectors/embedded.mjs";
import { isSupportedEthereumRpcMethod as se } from "./embedded-wallets/rpc/types.mjs";
import { Captcha as le } from "./components/Captcha.mjs";
import { LoginModal as ce } from "./components/LoginModal.mjs";
import { TelegramLoginButton as de } from "./components/TelegramLoginButton.mjs";
import { PrivyAppConfigProvider as ue, useAppConfig as he, useIsServerConfigLoaded as pe } from "./configuration/context.mjs";
import { areWalletArraysEqual as we } from "./connectors/areWalletArraysEqual.mjs";
import { PrivyProviderRpcError as me } from "./connectors/errors.mjs";
import { isPhantomInstalled as ye } from "./connectors/is-wallet-installed.mjs";
import { isBaseConnectedEthereumWallet as ge } from "./connectors/isBaseConnectedEthereumWallet.mjs";
import { isSolanaWalletConnector as fe, isBaseConnectedSolanaWallet as Ee } from "./connectors/solana/index.mjs";
import { WalletConnectV2WalletConnector as Ae } from "./connectors/walletconnect-v2.mjs";
import { EmbeddedWalletIframe as _e } from "./embedded-wallets/EmbeddedWalletIframe.mjs";
import { isWalletDelegated as Te, getDelegatedWalletsData as ve, getRootWalletDataForDelegation as Ce, getDelegatedWalletsForUser as Ie } from "./embedded-wallets/delegated-actions.mjs";
import { errorIndicatesRecoveryIsNeeded as ke } from "./embedded-wallets/errors.mjs";
import { signTransaction as We, sendTransaction as Ne } from "./embedded-wallets/rpc/index.mjs";
import { PrivyClientError as be, formatApiError as Ue, formatPrivyError as Oe, PrivyErrorCode as Se, PrivyNotReadyError as Re, PrivyConnectorError as Pe, PrivyError as De } from "./errors.mjs";
import { signSolanaTransaction as Me, sendSolanaTransaction as Le } from "./embedded-wallets/solana/transaction.mjs";
import { extractChainIdFromCAIP2 as Fe } from "./lib/caip2.mjs";
import { USE_BROADCAST_CHANNEL_EVENT_TYPE as xe, isPrivyTheOAuthProvider as je, CROSS_APP_BROADCAST_CHANNEL_NAME as Be } from "./lib/cross-app/index.mjs";
import { getCrossAppAuthorizationUrl as Ve, authenticateCrossAppAccount as He, getProviderAppMetadata as Ke } from "./lib/cross-app/authFlow.mjs";
import { popupCrossAppAuthFlow as ze } from "./lib/cross-app/popupCrossAppAuthFlow.mjs";
import { sendCrossAppRequest as Ge } from "./lib/cross-app/sendCrossAppRequest.mjs";
import { getRecoveryAuthorizationUrl as qe, authenticateRecovery as $e, embeddedWalletRecoveryScreen as Ye, toEmbeddedWalletSetRecoveryScreen as Xe } from "./lib/embeddedWalletRecovery.mjs";
import { FUNDING_SCREENS as Qe, fundingScreenMethodMap as Je } from "./lib/funding/index.mjs";
import { isFundingEnabled as Ze } from "./lib/funding/isFundingEnabled.mjs";
import et from "./lib/isEmbeddedWebview.mjs";
import { triggerPopup as tt } from "./lib/popup/triggerPopup.mjs";
import { popupOAuthFlow as at } from "./lib/popupOAuthFlow.mjs";
import { prepareSiweMessageWithNonce as rt } from "./lib/siwe.mjs";
import { hasSufficientFunds as nt, createSolanaTransactionReceipt as it } from "./lib/solana/transaction.mjs";
import { toDisplayFromAccountType as ot } from "./lib/toDisplayFromAccountType.mjs";
import { prepareTransactionRequest as st } from "./lib/viem/prepareTransactionRequest.mjs";
import { transformResponseToSnakeCase as lt } from "./passkeys/transformResponseToSnakeCase.mjs";
import { PrivyPluginProvider as ct, usePlugins as dt } from "./plugins/context/PrivyPluginContext.mjs";
import { SOLANA_FUNDING_PLUGIN_ID as ut } from "./plugins/solana-funding/id.mjs";
import { RecentlyUsedAccountProvider as ht } from "./recent-login/context.mjs";
import { ModalScreen as pt } from "./screens/index.mjs";
import { Hide as wt } from "./screens/LandingScreen/styles.mjs";
import { GlobalStyle as mt } from "./styles.mjs";
import { getPublicClient as yt } from "./utils/eth/getPublicClient.mjs";
import { notImplemented as gt } from "./hooks/index.mjs";
import { CaptchaProvider as ft } from "./hooks/captcha-context.mjs";
import { privyEventsDefault as Et, emitPrivyEvent as At, PrivyEventsContext as _t } from "./hooks/events-context.mjs";
import { InternalPrivyContext as Tt } from "./hooks/internal-context.mjs";
import { ModalProvider as vt } from "./hooks/modal-context.mjs";
import { PrivyContext as Ct } from "./hooks/privy-context.mjs";
import { UseWalletsContext as It } from "./hooks/useWallets.mjs";
import { prepareSolanaFundingModalData as kt, prepareFundingModalData as Wt } from "./lib/funding/prepareFundingModalData.mjs";
import { detectCompletingOAuthFlow as Nt } from "./auth-flows/oauth/detectCompletingOAuthFlow.mjs";
import { OAuthFlow as bt } from "./auth-flows/oauth/OAuthFlow.mjs";
import { toViemTransactionSerializable as Ut } from "./lib/viem/toViemTransactionSerializable.mjs";
import { getRpcTimeout as Ot } from "./connectors/getRpcTimeout.mjs";
import { EmbeddedProviderError as St } from "./connectors/providerTypes.mjs";
import { isEthereumWalletConnector as Rt } from "./connectors/ethereum/index.mjs";
import { LegacyInjectedWalletConnector as Pt, Injected6963WalletConnector as Dt } from "./connectors/injected.mjs";
import { MetamaskWalletConnector as Mt } from "./connectors/metamask.mjs";
import { PhantomEthereumNullWalletConnector as Lt } from "./connectors/phantom.mjs";
import { PhantomSolanaNullWalletConnector as Ft } from "./connectors/phantom-solana.mjs";
import { PrivyProxyProvider as xt } from "./connectors/privyProxyProvider.mjs";
import { Http as jt } from "./http.mjs";
import { getPaymasterContext as Bt } from "./lib/smart-wallet-helpers.mjs";
import { transformOptionsToCamelCase as Vt } from "./passkeys/transformOptionsToCamelCase.mjs";
import { mfaPasswordlessSmsInitPath as Ht, mfaPasskeyInitPath as Kt, acceptTermsPath as zt, unlinkEmailPath as Gt, unlinkPhonePath as qt, unlinkWalletPath as $t, siwsUnlinkWalletPath as Yt, unlinkOAuthPath as Xt, unlinkFarcasterPath as Qt, telegramAccountUnlinkPath as Jt, unlinkPasskeyPath as Zt, delegatedActionsRevokePath as ea, analyticsEventsPath as ta, moonpayPluginOnRampPath as aa, coinbaseOnRampInitPath as ra, coinbaseOnRampStatusPath as na, siweInitPath as ia, siweAuthenticatePath as oa, siweLinkPath as sa, smartWalletLinkPath as la, siwsInitPath as ca, siwsAuthenticatePath as da, transferOAuthPath as ua, telegramAccountTransferPath as ha, transferFarcasterPath as pa, transferWalletPath as wa, transferPhonePath as ma, transferEmailPath as ya, siwsLinkPath as ga } from "./paths.mjs";
import { AccessTokenTypes as fa, Session as Ea } from "./session.mjs";
class Aa extends x {
  async handleSendTransaction(e) {
    if (!e.params || !Array.isArray(e.params)) {
      throw new St(`Invalid params for ${e.method}`, 4200);
    }
    let t = e.params[0];
    if (!(await Fa()) || !this.address) {
      throw new St("Disconnected", 4900);
    }
    let {
      hash: a
    } = await Va(t, {
      address: this.address
    });
    return a;
  }
  async handleSignTransaction(e) {
    if (!e.params || !Array.isArray(e.params)) {
      throw new St(`Invalid params for ${e.method}`, 4200);
    }
    let t = e.params[0];
    if (!(await Fa()) || !this.address) {
      throw new St("Disconnected", 4900);
    }
    let {
      signature: a
    } = await Ba(t, {
      address: this.address
    });
    return a;
  }
  handleSwitchEthereumChain(e) {
    let t;
    if (!e.params || !Array.isArray(e.params)) {
      throw new St(`Invalid params for ${e.method}`, 4200);
    }
    if (typeof e.params[0] == "string") {
      t = e.params[0];
    } else {
      if (!("chainId" in e.params[0]) || typeof e.params[0].chainId != "string") {
        throw new St(`Invalid params for ${e.method}`, 4200);
      }
      t = e.params[0].chainId;
    }
    this.chainId = Number(t);
    this.publicClient = yt(this.chainId, this.chains, this.rpcConfig, {
      appId: this.appId
    });
    this.emit("chainChanged", t);
  }
  async handlePersonalSign(e) {
    if (!e.params || !Array.isArray(e.params)) {
      throw Error("Invalid params for personal_sign");
    }
    let t = e.params[0];
    let a = e.params[1];
    let {
      signature: r
    } = await xa({
      message: t
    }, {
      address: a
    });
    return r;
  }
  async handleSignedTypedData(e) {
    if (!e.params || !Array.isArray(e.params)) {
      throw Error("Invalid params for eth_signTypedData_v4");
    }
    let t = e.params[0];
    let a = typeof e.params[1] == "string" ? JSON.parse(e.params[1]) : e.params[1];
    let {
      signature: r
    } = await ja(te(a), {
      address: t
    });
    return r;
  }
  async handleEstimateGas(e) {
    if (!e.params || !Array.isArray(e.params)) {
      throw Error("Invalid params for eth_estimateGas");
    }
    delete e.params[0].gasPrice;
    delete e.params[0].maxFeePerGas;
    delete e.params[0].maxPriorityFeePerGas;
    let t = {
      ...e.params[0],
      chainId: ae(this.chainId)
    };
    return await this.publicClient.estimateGas({
      account: t.from ?? this.address,
      ...Ut(t)
    });
  }
  async request(e) {
    console.debug("Embedded1193Provider.request() called with args", e);
    switch (e.method) {
      case "eth_accounts":
      case "eth_requestAccounts":
        if (this.address) {
          return [this.address];
        } else {
          return [];
        }
      case "eth_chainId":
        return ae(this.chainId);
      case "eth_estimateGas":
        return this.handleEstimateGas(e);
      case "eth_sendTransaction":
        return this.handleSendTransaction(e);
      case "eth_signTransaction":
        return this.handleSignTransaction(e);
      case "wallet_switchEthereumChain":
        return this.handleSwitchEthereumChain(e);
      case "personal_sign":
        return this.handlePersonalSign(e);
      case "eth_signTypedData_v4":
        return this.handleSignedTypedData(e);
    }
    if (!se(e.method)) {
      return this.publicClient.request({
        method: e.method,
        params: e.params
      });
    }
    {
      let t = await Fa();
      await Ha();
      if (!t || !this.address) {
        throw new St("Disconnected", 4900);
      }
      try {
        return (await this.walletProxy.rpc({
          accessToken: t,
          entropyId: this.entropyId,
          entropyIdVerifier: this.entropyIdVerifier,
          chainType: "ethereum",
          hdWalletIndex: this.walletIndex,
          request: {
            method: e.method,
            params: e.params
          }
        })).response.data;
      } catch (e) {
        console.error(e);
        throw new St("Disconnected", 4900);
      }
    }
  }
  constructor({
    walletProxy: e,
    address: t,
    entropyId: a,
    entropyIdVerifier: r,
    rpcConfig: n,
    chains: i,
    appId: o,
    chainId: s = 1,
    walletIndex: l
  }) {
    super();
    this.walletProxy = e;
    this.address = t;
    this.entropyId = a;
    this.entropyIdVerifier = r;
    this.chainId = s;
    this.rpcConfig = n;
    this.chains = i;
    this.publicClient = yt(s, this.chains, n, {
      appId: o
    });
    this.rpcTimeoutDuration = Ot(n, "privy");
    this.appId = o;
    this.walletIndex = l;
  }
}
class _a extends x {
  get wallets() {
    let e = new Set();
    let t = this.walletConnectors.flatMap(e => e.wallets).sort((e, t) => e.connectedAt && t.connectedAt ? t.connectedAt - e.connectedAt : 0).filter(t => {
      let a = `${t.address}${t.walletClientType}${t.connectorType}`;
      return !e.has(a) && (e.add(a), true);
    });
    let a = t.findIndex(e => e.address === (this.activeWallet ? this.activeWallet : "unknown"));
    if (a >= 0) {
      t.unshift(t.splice(a, 1)[0]);
    }
    return t;
  }
  async initialize() {
    if (this.initialized) {
      return;
    }
    if (Z.get(j)) {
      Z.getKeys().forEach(e => {
        if (e.startsWith("walletconnect")) {
          Z.del(e);
        }
      });
      Z.del(j);
    }
    let e = re({
      store: this.store,
      walletList: this.walletList,
      externalWalletConfig: this.externalWalletConfig,
      walletChainType: this.walletChainType
    }).then(e => {
      e.forEach(({
        type: e,
        eip6963InjectedProvider: t,
        legacyInjectedProvider: a
      }) => {
        this.createEthereumWalletConnector("injected", e, {
          eip6963InjectedProvider: t,
          legacyInjectedProvider: a
        });
      });
    });
    if (this.walletList.includes("coinbase_wallet")) {
      this.createEthereumWalletConnector("coinbase_wallet", "coinbase_wallet");
    }
    if (!ye() && this.walletList.includes("phantom")) {
      if (["ethereum-only", "ethereum-and-solana"].includes(this.walletChainType)) {
        this.createEthereumWalletConnector("phantom", "phantom");
      }
      if (["ethereum-and-solana", "solana-only"].includes(this.walletChainType)) {
        this.addWalletConnector(new Ft());
      }
    }
    if (this.externalWalletConfig.walletConnect.enabled) {
      this.createEthereumWalletConnector("wallet_connect_v2", "unknown");
    }
    this.externalWalletConfig.solana.connectors?.get().forEach(this.addSolanaWalletConnector);
    this.externalWalletConfig.solana.connectors?._setOnConnectorsUpdated?.(e => {
      e?.forEach(this.addSolanaWalletConnector);
    });
    await e;
    this.initialized = true;
  }
  findWalletConnector(e, t) {
    if (e === "wallet_connect_v2") {
      return this.walletConnectors.filter(Rt).find(t => t.connectorType === e) ?? null;
    } else {
      return this.walletConnectors.filter(Rt).find(a => a.connectorType === e && a.walletClientType === t) ?? null;
    }
  }
  findSolanaWalletConnector(e, t) {
    return this.walletConnectors.filter(fe).find(a => a.connectorType === e && a.walletClientType === t) ?? null;
  }
  findEmbeddedWalletConnectors() {
    return this.walletConnectors.filter(e => e.connectorType === "embedded");
  }
  onInitialized(e) {
    e.wallets.forEach(e => {
      let t = this.storedConnections.find(t => t.address === e.address && t.connectorType === e.connectorType && t.walletClientType === e.walletClientType);
      if (t) {
        e.connectedAt = t.connectedAt;
      }
    });
    this.saveConnectionHistory();
    this.emit("walletsUpdated");
    this.emit("connectorInitialized");
  }
  onWalletsUpdated(e) {
    if (e.initialized) {
      this.saveConnectionHistory();
      this.emit("walletsUpdated");
    }
  }
  addEmbeddedWalletConnectors({
    walletProxy: e,
    rootWallet: t,
    embeddedWallets: a,
    defaultChain: r,
    appId: n
  }) {
    for (let i of a) {
      let a = this.findEmbeddedWalletConnectors().find(e => e.walletIndex === i.walletIndex);
      if (a && Rt(a)) {
        a.proxyProvider.walletProxy = e;
      } else {
        let {
          entropyId: a,
          entropyIdVerifier: o
        } = C(t);
        let s = new oe({
          provider: new Aa({
            walletProxy: e,
            address: i.address,
            entropyId: a,
            entropyIdVerifier: o,
            rpcConfig: this.rpcConfig,
            chains: this.chains,
            appId: n,
            chainId: r.id,
            walletIndex: i.walletIndex
          }),
          chains: this.chains,
          defaultChain: r,
          rpcConfig: this.rpcConfig,
          imported: false,
          walletIndex: i.walletIndex
        });
        this.addWalletConnector(s);
      }
    }
  }
  addImportedWalletConnector(e, t, a, r) {
    let n = this.findWalletConnector("embedded_imported", "privy");
    if (n && Rt(n)) {
      n.proxyProvider.walletProxy = e;
    } else {
      let n = new oe({
        provider: new Aa({
          walletProxy: e,
          address: t,
          entropyId: t,
          entropyIdVerifier: "ethereum-address-verifier",
          walletIndex: 0,
          rpcConfig: this.rpcConfig,
          chains: this.chains,
          appId: r,
          chainId: a.id
        }),
        chains: this.chains,
        walletIndex: 0,
        defaultChain: a,
        rpcConfig: this.rpcConfig,
        imported: true
      });
      this.addWalletConnector(n);
    }
  }
  removeEmbeddedWalletConnectors() {
    this.walletConnectors = this.walletConnectors.filter(e => e.connectorType !== "embedded");
    this.saveConnectionHistory();
    this.storedConnections = Ta();
    this.emit("walletsUpdated");
  }
  removeImportedWalletConnector() {
    let e = this.findWalletConnector("embedded_imported", "privy");
    if (e) {
      let t = this.walletConnectors.indexOf(e);
      this.walletConnectors.splice(t, 1);
      this.saveConnectionHistory();
      this.storedConnections = Ta();
      this.emit("walletsUpdated");
    }
  }
  async createEthereumWalletConnector(e, t, a) {
    let r = this.findWalletConnector(e, t);
    if (r && Rt(r)) {
      if (r instanceof Ae) {
        r.resetConnection(t);
      }
      return r;
    }
    let n = (() => e !== "injected" ? e === "coinbase_wallet" ? new ie(this.chains, this.defaultChain, this.rpcConfig, this.externalWalletConfig, this.privyAppName, this.privyAppLogo) : e === "phantom" ? new Lt(this.defaultChain) : new Ae(this.walletConnectCloudProjectId, this.rpcConfig, this.chains, this.defaultChain, this.shouldEnforceDefaultChainOnConnect, this.privyAppId, this.privyAppName, t) : t === "metamask" && a?.eip6963InjectedProvider ? new Mt(this.chains, this.defaultChain, this.rpcConfig, a?.eip6963InjectedProvider, "metamask") : t === "metamask" && a?.legacyInjectedProvider ? new Pt(this.chains, this.defaultChain, this.rpcConfig, a?.legacyInjectedProvider, "metamask") : t === "phantom" && a?.legacyInjectedProvider ? new Pt(this.chains, this.defaultChain, this.rpcConfig, a?.legacyInjectedProvider, "phantom") : a?.legacyInjectedProvider && t === "unknown_browser_extension" ? new Pt(this.chains, this.defaultChain, this.rpcConfig, a?.legacyInjectedProvider) : a?.eip6963InjectedProvider ? new Dt(this.chains, this.defaultChain, this.rpcConfig, a?.eip6963InjectedProvider, t) : undefined)();
    if (n) {
      this.addWalletConnector(n);
    }
    return n || null;
  }
  addWalletConnector(e) {
    this.walletConnectors.push(e);
    e.on("initialized", () => this.onInitialized(e));
    e.on("walletsUpdated", () => this.onWalletsUpdated(e));
    e.initialize().catch(e => {
      console.debug("Failed to initialize connector", e);
    });
  }
  saveConnectionHistory() {
    let e = this.wallets.map(e => ({
      address: e.address,
      connectorType: e.connectorType,
      walletClientType: e.walletClientType,
      connectedAt: e.connectedAt
    }));
    Z.put(B, e);
  }
  async activeWalletSign(e) {
    let t = this.wallets;
    let a = t.length > 0 ? t[0] : null;
    if (a && ge(a)) {
      return a.sign(e);
    } else {
      return null;
    }
  }
  setActiveWallet(e) {
    this.activeWallet = l(e);
    this.emit("walletsUpdated");
  }
  constructor(e, t, a, r, n, i, o, s, l, c, d, u) {
    super();
    this.addSolanaWalletConnector = async e => {
      if (!this.findSolanaWalletConnector("solana_adapter", e.walletClientType)) {
        this.addWalletConnector(e);
      }
    };
    this.getEthereumProvider = () => {
      let e = this.wallets[0];
      let t = this.walletConnectors.find(t => t.wallets.find(t => t.address === e?.address));
      if (e && t) {
        return t.proxyProvider;
      } else {
        return new xt();
      }
    };
    this.privyAppId = e;
    this.walletConnectCloudProjectId = t;
    this.rpcConfig = a;
    this.chains = r;
    this.defaultChain = n;
    this.walletConnectors = [];
    this.initialized = false;
    this.store = i;
    this.walletList = o;
    this.shouldEnforceDefaultChainOnConnect = s;
    this.externalWalletConfig = l;
    this.privyAppName = c;
    this.privyAppLogo = d;
    this.walletChainType = u || "ethereum-only";
    this.storedConnections = Ta();
  }
}
const Ta = () => {
  let e = Z.get(B);
  if (e && Array.isArray(e) && e.map(e => (e => e && typeof e.address == "string" && typeof e.connectorType == "string" && typeof e.walletClientType == "string" && typeof e.connectedAt == "number")(e)).every(Boolean)) {
    return e;
  } else {
    return [];
  }
};
let va;
var Ca = 0;
var Ia = "__private_" + Ca++ + "__getOrGenerateClientAnalyticsId";
class ka {
  initializeConnectorManager({
    walletConnectCloudProjectId: e,
    rpcConfig: t,
    chains: a,
    defaultChain: r,
    store: n,
    walletList: i,
    shouldEnforceDefaultChainOnConnect: o,
    externalWalletConfig: s,
    appName: l,
    walletChainType: c
  }) {
    this.connectors ||= new _a(this.appId, e, t, a, r, n, i, o, s, l, undefined, c);
  }
  generateApi() {
    let e = new jt({
      appId: this.appId,
      appClientId: this.appClientId,
      client: this,
      defaults: {
        baseURL: this.apiUrl,
        timeout: this.timeout
      }
    });
    this.session.api = e;
    return e;
  }
  updateApiUrl(e) {
    this.apiUrl = e || this.fallbackApiUrl;
    this.api = this.generateApi();
    if (e) {
      this.useServerCookies = true;
    }
  }
  authenticate() {
    if (!this.authFlow) {
      throw new be("No auth flow in progress.");
    }
    return this.session.authenticate(this.authFlow);
  }
  async link() {
    if (!this.authFlow) {
      throw new be("No auth flow in progress.");
    }
    let {
      oAuthTokens: e
    } = await this.session.link(this.authFlow);
    return {
      user: await this.getAuthenticatedUser(),
      oAuthTokens: e
    };
  }
  storeProviderAccessToken(e, t) {
    this.session.storeProviderAccessToken(e, t);
  }
  getProviderAccessToken(e) {
    return this.session.getProviderAccessToken(e);
  }
  async logout() {
    await this.session.destroy();
    this.authFlow = undefined;
  }
  clearProviderAcccessTokens(e) {
    e.linkedAccounts.filter(e => e.type === "cross_app").forEach(e => {
      this.storeProviderAccessToken(e.providerApp.id, null);
    });
  }
  startAuthFlow(e) {
    e.api = this.api;
    this.authFlow = e;
    return this.authFlow;
  }
  async initMfaSmsVerification() {
    try {
      await this.api.post(Ht, {
        action: "verify"
      });
    } catch (e) {
      throw Ue(e);
    }
  }
  async initMfaPasskeyVerification() {
    try {
      let e = await this.api.post(Kt, {});
      return Vt(e.options);
    } catch (e) {
      throw Ue(e);
    }
  }
  async getCrossAppProviderDetails(e) {
    try {
      this._cachedProviderAppDetails[e] ||= await this.api.get(`/api/v1/apps/${e}/cross-app/details`);
      return this._cachedProviderAppDetails[e];
    } catch (e) {
      console.error("Error fetching cross app provider details", e);
    }
  }
  async acceptTerms() {
    try {
      let e = await this.api.post(zt, {});
      return I(e);
    } catch (e) {
      throw Oe(e);
    }
  }
  async unlinkEmail(e) {
    try {
      let t = await this.api.post(Gt, {
        address: e
      });
      return (await this.getAuthenticatedUser()) ?? I(t);
    } catch (e) {
      throw Oe(e);
    }
  }
  async unlinkPhone(e) {
    try {
      let t = await this.api.post(qt, {
        phoneNumber: e
      });
      return (await this.getAuthenticatedUser()) ?? I(t);
    } catch (e) {
      throw Oe(e);
    }
  }
  async unlinkEthereumWallet(e) {
    try {
      let t = await this.api.post($t, {
        address: e
      });
      return (await this.getAuthenticatedUser()) ?? I(t);
    } catch (e) {
      throw Oe(e);
    }
  }
  async unlinkSolanaWallet(e) {
    try {
      let t = await this.api.post(Yt, {
        address: e
      });
      return (await this.getAuthenticatedUser()) ?? I(t);
    } catch (e) {
      throw Oe(e);
    }
  }
  async unlinkOAuth(e, t) {
    try {
      let a = await this.api.post(Xt, {
        provider: e,
        subject: t
      });
      return (await this.getAuthenticatedUser()) ?? I(a);
    } catch (e) {
      throw Oe(e);
    }
  }
  async unlinkFarcaster(e) {
    try {
      let t = await this.api.post(Qt, {
        fid: e
      });
      return (await this.getAuthenticatedUser()) ?? I(t);
    } catch (e) {
      throw Oe(e);
    }
  }
  async unlinkTelegram(e) {
    try {
      let t = await this.api.post(Jt, {
        telegram_user_id: e
      });
      return (await this.getAuthenticatedUser()) ?? I(t);
    } catch (e) {
      throw Oe(e);
    }
  }
  async unlinkPasskey(e) {
    try {
      let t = await this.api.post(Zt, {
        credential_id: e
      });
      return (await this.getAuthenticatedUser()) ?? I(t);
    } catch (e) {
      throw Oe(e);
    }
  }
  async revokeDelegatedWallet() {
    try {
      await this.api.post(ea, {});
    } catch (e) {
      throw Oe(e);
    }
  }
  async createAnalyticsEvent({
    eventName: e,
    payload: t,
    timestamp: a,
    options: r
  }) {
    if (typeof window != "undefined") {
      try {
        if (!this.clientAnalyticsId) {
          console.warn("No client analytics id set, refusing to send analytics event");
        }
        await this.api.post(ta, {
          event_name: e,
          client_id: this.clientAnalyticsId,
          payload: {
            ...(t || {}),
            clientTimestamp: a ? a.toISOString() : new Date().toISOString()
          }
        }, {
          retry: -1,
          keepalive: r?.keepAlive ?? false
        });
      } catch (e) {}
    }
  }
  async signMoonpayOnRampUrl(e) {
    try {
      return this.api.post(aa, e);
    } catch (e) {
      throw Oe(e);
    }
  }
  async initCoinbaseOnRamp(e) {
    try {
      return this.api.post(ra, e);
    } catch (e) {
      throw Oe(e);
    }
  }
  async getCoinbaseOnRampStatus({
    partnerUserId: e
  }) {
    try {
      return this.api.get(`${na}?partnerUserId=${e}`);
    } catch (e) {
      throw Oe(e);
    }
  }
  async getAuthenticatedUser() {
    if (this.session.hasRefreshCredentials() || this.session.hasRecoveryCredentials()) {
      return this.session.refresh();
    } else {
      return null;
    }
  }
  async getAccessToken(e) {
    return (await this.getPrivyAccessToken(e)) || (await this.getCustomerAccessToken(e));
  }
  async getCustomerAccessToken(e) {
    return await this._getToken(fa.CUSTOMER, e);
  }
  async getPrivyAccessToken(e) {
    return await this._getToken(fa.PRIVY, e);
  }
  async _getToken(e, t) {
    if (this.session.getToken(e)) {
      if (this.session.hasActiveAccessToken(e)) {
        if (this.session.hasRefreshCredentials(e)) {
          if (v.parse(this.session.getToken(e))?.appId !== this.appId) {
            await this.logout();
            return null;
          } else {
            return this.session.getToken(e);
          }
        } else {
          this.session.destroyLocalState();
          return null;
        }
      } else if (!t?.disableAutoRefresh && this.session.hasRefreshCredentials(e)) {
        await this.session.refresh();
        return this.session.getToken(e);
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
  async getSmartWalletsConfig() {
    try {
      let e = {};
      let t = this.session.token;
      if (t) {
        e.authorization = `Bearer ${t}`;
      }
      let a = await this.api.get(`/api/v1/apps/${this.appId}/smart_wallets`, {
        baseURL: this.fallbackApiUrl,
        headers: e
      });
      if (a.enabled) {
        return {
          enabled: a.enabled,
          smartWalletType: a.smart_wallet_type,
          configuredNetworks: a.configured_networks.map(e => ({
            chainId: e.chain_id,
            bundlerUrl: e.bundler_url,
            paymasterUrl: e.paymaster_url,
            paymasterContext: Bt(e.paymaster_url, e.paymaster_context)
          }))
        };
      } else {
        return {
          enabled: a.enabled
        };
      }
    } catch (e) {
      throw Oe(e);
    }
  }
  async getServerConfig() {
    try {
      let e = {};
      let t = this.session.token;
      if (t) {
        e.authorization = `Bearer ${t}`;
      }
      let a = await this.api.get(`/api/v1/apps/${this.appId}`, {
        baseURL: this.fallbackApiUrl,
        headers: e
      });
      let r = a.telegram_auth_config ? {
        botId: a.telegram_auth_config.bot_id,
        botName: a.telegram_auth_config.bot_name,
        linkEnabled: a.telegram_auth_config.link_enabled,
        seamlessAuthEnabled: a.telegram_auth_config.seamless_auth_enabled
      } : undefined;
      let n = a.funding_config ? {
        methods: a.funding_config.methods,
        options: a.funding_config.options,
        defaultRecommendedAmount: a.funding_config.default_recommended_amount,
        defaultRecommendedCurrency: a.funding_config.default_recommended_currency,
        promptFundingOnWalletCreation: a.funding_config.prompt_funding_on_wallet_creation,
        crossChainBridgingEnabled: a.funding_config.cross_chain_bridging_enabled
      } : undefined;
      return {
        id: a.id,
        name: a.name,
        verificationKey: a.verification_key,
        logoUrl: a.logo_url || undefined,
        accentColor: a.accent_color || undefined,
        showWalletLoginFirst: a.show_wallet_login_first,
        allowlistConfig: {
          errorTitle: a.allowlist_config.error_title,
          errorDetail: a.allowlist_config.error_detail,
          errorCtaText: a.allowlist_config.cta_text,
          errorCtaLink: a.allowlist_config.cta_link
        },
        walletAuth: a.wallet_auth,
        solanaWalletAuth: a.solana_wallet_auth,
        emailAuth: a.email_auth,
        smsAuth: a.sms_auth,
        googleOAuth: a.google_oauth,
        twitterOAuth: a.twitter_oauth,
        discordOAuth: a.discord_oauth,
        githubOAuth: a.github_oauth,
        spotifyOAuth: a.spotify_oauth,
        instagramOAuth: a.instagram_oauth,
        tiktokOAuth: a.tiktok_oauth,
        linkedinOAuth: a.linkedin_oauth,
        appleOAuth: a.apple_oauth,
        farcasterAuth: a.farcaster_auth,
        passkeyAuth: a.passkey_auth,
        passkeysForSignupEnabled: a.passkeys_for_signup_enabled,
        telegramAuth: a.telegram_auth,
        disablePlusEmails: a.disable_plus_emails,
        termsAndConditionsUrl: a.terms_and_conditions_url,
        embeddedWalletConfig: {
          createOnLogin: a.embedded_wallet_config?.create_on_login,
          userOwnedRecoveryOptions: a.embedded_wallet_config.user_owned_recovery_options,
          requireUserOwnedRecoveryOnCreate: a.embedded_wallet_config.require_user_owned_recovery_on_create
        },
        privacyPolicyUrl: a.privacy_policy_url,
        requireUsersAcceptTerms: a.require_users_accept_terms,
        customApiUrl: a.custom_api_url,
        walletConnectCloudProjectId: a.wallet_connect_cloud_project_id,
        fiatOnRampEnabled: a.fiat_on_ramp_enabled,
        captchaEnabled: a.captcha_enabled,
        captchaSiteKey: a.captcha_site_key,
        createdAt: new Date(a.created_at * 1000),
        updatedAt: new Date(a.updated_at * 1000),
        mfaMethods: a.mfa_methods,
        enforceWalletUis: a.enforce_wallet_uis,
        legacyWalletUiConfig: a.legacy_wallet_ui_config,
        telegramAuthConfiguration: r,
        fundingConfig: n
      };
    } catch (e) {
      throw Oe(e);
    }
  }
  async getUsdTokenPrice(e) {
    try {
      return (await this.api.get(`/api/v1/token_price?chainId=${e.id}&tokenSymbol=${e.nativeCurrency.symbol}`)).usd;
    } catch (t) {
      console.error(`Unable to fetch token price for chain with id ${e.id}`);
      return;
    }
  }
  async getUsdPriceForSol() {
    try {
      return (await this.api.get("/api/v1/token_price?chainId=0&tokenSymbol=SOL")).usd;
    } catch (e) {
      console.error("Unable to fetch token price for SOL");
      return;
    }
  }
  async getSplTokenMetadata({
    mintAddress: e,
    cluster: t
  }) {
    try {
      return await this.api.get(`/api/v1/spl_token_info?mint_address=${e}&cluster=${t}`);
    } catch (a) {
      console.error(`Unable to fetch token metadata for ${t}:${e}`);
      return;
    }
  }
  async requestFarcasterSignerStatus(e) {
    try {
      return await this.api.post("/api/v1/farcaster/signer/status", {
        ed25519_public_key: e
      });
    } catch (e) {
      console.error("Unable to fetch Farcaster signer status");
      throw e;
    }
  }
  async forkSession() {
    return await this.session.forkSession();
  }
  async generateSiweNonce({
    address: e,
    captchaToken: t
  }) {
    try {
      return (await this.api.post(ia, {
        address: e,
        token: t
      })).nonce;
    } catch (e) {
      throw Oe(e);
    }
  }
  async authenticateWithSiweInternal({
    message: e,
    signature: t,
    chainId: a,
    walletClientType: r,
    connectorType: n,
    mode: i
  }) {
    return await this.api.post(oa, {
      message: e,
      signature: t,
      chainId: a,
      walletClientType: r,
      connectorType: n,
      mode: i
    });
  }
  async linkWithSiweInternal({
    message: e,
    signature: t,
    chainId: a,
    walletClientType: r,
    connectorType: n
  }) {
    return await this.api.post(sa, {
      message: e,
      signature: t,
      chainId: a,
      walletClientType: r,
      connectorType: n
    });
  }
  async linkSmartWallet({
    message: e,
    signature: t,
    smartWalletType: a
  }) {
    try {
      let r = await this.api.post(la, {
        message: e,
        signature: t,
        smart_wallet_type: a
      });
      return I(r);
    } catch (e) {
      throw Oe(e);
    }
  }
  async linkWithSiwe({
    message: e,
    signature: t,
    chainId: a,
    walletClientType: r,
    connectorType: n
  }) {
    try {
      let i = await this.linkWithSiweInternal({
        message: e,
        signature: t,
        chainId: a,
        walletClientType: r,
        connectorType: n
      });
      return I(i);
    } catch (e) {
      throw Oe(e);
    }
  }
  async generateSiwsNonce({
    address: e,
    captchaToken: t
  }) {
    try {
      return (await this.api.post(ca, {
        address: e,
        token: t
      })).nonce;
    } catch (e) {
      throw Oe(e);
    }
  }
  async authenticateWithSiwsInternal({
    message: e,
    signature: t,
    walletClientType: a,
    connectorType: r,
    mode: n
  }) {
    return await this.api.post(da, {
      message: e,
      signature: t,
      walletClientType: a,
      connectorType: r,
      mode: n
    });
  }
  async sendAccountTransferRequest({
    nonce: e,
    account: t,
    accountType: a,
    externalWalletMetadata: r,
    telegramAuthResult: n,
    telegramWebAppData: i,
    farcasterEmbeddedAddress: o,
    oAuthUserInfo: s
  }) {
    try {
      let l;
      let c;
      switch (a) {
        case "email":
          l = ya;
          c = {
            nonce: e,
            email: t
          };
          break;
        case "sms":
          l = ma;
          c = {
            nonce: e,
            phoneNumber: t
          };
          break;
        case "siwe":
          l = wa;
          if (!r) {
            throw Error("Wallet parameters must be defined");
          }
          c = {
            nonce: e,
            address: t,
            ...r
          };
          break;
        case "farcaster":
          l = pa;
          c = {
            nonce: e,
            farcaster_id: t,
            farcaster_embedded_address: o
          };
          break;
        case "telegram":
          l = ha;
          c = {
            nonce: e,
            telegram_auth_result: n,
            telegram_web_app_data: i
          };
          break;
        case "custom":
        case "guest":
        case "passkey":
          throw Error("Invalid transfer account type");
        default:
          l = ua;
          c = {
            nonce: e,
            userInfo: s
          };
      }
      let d = await this.api.post(l, c);
      return (await this.getAuthenticatedUser()) ?? I(d);
    } catch (e) {
      throw Oe(e);
    }
  }
  async linkWithSiwsInternal({
    message: e,
    signature: t,
    walletClientType: a,
    connectorType: r
  }) {
    return await this.api.post(ga, {
      message: e,
      signature: t,
      walletClientType: a,
      connectorType: r
    });
  }
  async linkWithSiws({
    message: e,
    signature: t,
    walletClientType: a,
    connectorType: r
  }) {
    try {
      let n = await this.linkWithSiwsInternal({
        message: e,
        signature: t,
        walletClientType: a,
        connectorType: r
      });
      return I(n);
    } catch (e) {
      throw Oe(e);
    }
  }
  constructor({
    apiUrl: e = V,
    appId: t,
    appClientId: a,
    timeout: r = H
  }) {
    Object.defineProperty(this, Ia, {
      value: Wa
    });
    this._cachedProviderAppDetails = {};
    this.apiUrl = e;
    this.fallbackApiUrl = this.apiUrl;
    this.useServerCookies = e !== V && e.startsWith("https://privy.");
    this.timeout = r;
    this.appId = t;
    this.appClientId = a;
    this.clientAnalyticsId = function (e, t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) {
        throw TypeError("attempted to use private field on non-instance");
      }
      return e;
    }(this, Ia)[Ia]();
    va ||= new Ea();
    this.session = va;
    this.api = this.generateApi();
    this.session.client = this;
  }
}
function Wa() {
  if (typeof window == "undefined") {
    return null;
  }
  try {
    let e = Z.get(K);
    if (typeof e == "string" && e.length > 0) {
      return e;
    }
  } catch (e) {}
  let e = T();
  try {
    Z.put(K, e);
    return e;
  } catch (t) {
    return e;
  }
}
class Na {
  async handleSignMessage(e) {
    if (!e.params || typeof e.params.message != "string") {
      throw Error("Message must be provided as a string for Solana signMessage RPC");
    }
    return await za({
      message: e.params.message,
      address: this.address
    });
  }
  async request(e) {
    console.debug("EmbeddedSolanaProvider.request() called with args", e);
    if (!(await Fa())) {
      throw Error("User must be authenticated to use embedded Solana wallet");
    }
    if (!(await Ka())) {
      throw new be("Unable to connect to Solana embedded wallet");
    }
    if (e.method === "signMessage") {
      return await this.handleSignMessage(e);
    }
    throw Error("Embedded Solana provider does not yet support this RPC method.");
  }
  constructor(e, t) {
    this.walletProxy = e;
    this.address = t;
  }
}
let ba;
let Ua;
let Oa;
let Sa;
let Ra;
let Pa;
let Da;
let Ma;
function La() {
  if (ba) {
    return ba.getCustomerAccessToken();
  } else {
    return Promise.resolve(Z.get(z) || null);
  }
}
async function Fa() {
  if (ba) {
    return ba.getAccessToken();
  } else {
    return Promise.resolve(Z.get(G) || Z.get(z) || null);
  }
}
const xa = (e, t) => Ua(e, t);
const ja = (e, t) => Oa(e, t);
const Ba = (e, t) => Sa(e, t);
const Va = (e, t) => Ra(e, t);
const Ha = () => Pa();
const Ka = () => Da();
const za = ({
  message: e,
  address: t
}) => Ma({
  message: e,
  address: t
});
const Ga = ({
  config: t,
  ...a
}) => {
  var r;
  if (typeof window != "undefined" && ["localhost", "127.0.0.1"].indexOf(window.location.hostname) < 0 && window.location.protocol !== "https:") {
    throw new be("Embedded wallet is only available over HTTPS");
  }
  if (typeof (r = a.appId) != "string" || r.length !== 25) {
    throw new be("Cannot initialize the Privy provider with an invalid Privy app ID");
  }
  ba ||= new ka({
    appId: a.appId,
    appClientId: a.clientId,
    apiUrl: a.apiUrl
  });
  let n = Object.assign({}, t); /*#__PURE__*/
  return e(ue, {
    client: ba,
    clientConfig: n,
    children: /*#__PURE__*/e(ct, {
      children: /*#__PURE__*/e(qa, {
        ...a,
        client: ba
      })
    })
  });
};
let qa = T => {
  let v = T.client;
  let I = dt();
  let [x, j] = r(false);
  let [B, H] = r(false);
  let [z, G] = r(false);
  let [re, ie] = r(null);
  let [oe, se] = r([]);
  let [ue, fe] = r([]);
  let [Ue, Oe] = r([]);
  let [ct, Ut] = r(false);
  let [Ot, St] = r(null);
  let [Rt, Pt] = r(false);
  let [Dt, Mt] = r({
    status: "disconnected",
    connectedWallet: null,
    connectError: null,
    connector: null,
    connectRetry: gt
  });
  let [Lt, Ft] = r({
    status: "initial"
  });
  let [xt, jt] = r({
    status: "initial"
  });
  let [Bt, Vt] = r({
    status: "initial"
  });
  let [Ht, Kt] = r({
    status: "initial"
  });
  let [zt, Gt] = r({
    status: "initial"
  });
  let [qt, $t] = r(null);
  let Yt = he();
  let Xt = pe();
  let [Qt, Jt] = r(true);
  let [Zt, ea] = r({});
  let [ta, aa] = r(null);
  let [ra, na] = r(null);
  let [ia, oa] = r(false);
  let [sa, la] = r(false);
  let [ca, da] = r(Yt.customAuth?.enabled ? {
    status: "initial"
  } : {
    status: "not-enabled"
  });
  let ua = n(null);
  let ha = n(null);
  let pa = n(Et);
  let [wa, ma] = r(false);
  v.onStoreCustomerAccessToken = e => {
    if (e) {
      At(pa, "accessToken", "onAccessTokenGranted", {
        accessToken: e
      });
    }
  };
  v.onDeleteCustomerAccessToken = () => {
    ie(null);
    G(false);
    At(pa, "accessToken", "onAccessTokenRemoved");
  };
  let ya = n(null);
  let ga = n(null);
  let fa = n(false);
  let Ea = ({
    showWalletUIs: e
  }) => fa.current ? fa.current : e !== undefined ? !e : !Yt.embeddedWallets.showWalletUIs;
  let Aa = e => {
    St(e);
    setTimeout(() => {
      j(true);
    }, 15);
    v.createAnalyticsEvent({
      eventName: "modal_open",
      payload: {
        initialScreen: e
      }
    });
  };
  let _a = e => {
    if (Yt.embeddedWallets.createOnLogin !== "off") {
      Jt(true);
    }
    Aa(e);
  };
  i(() => {
    let e = [...k(re), W(re)].filter(e => e);
    if (qt) {
      Oe(e.map(e => ({
        type: "solana",
        imported: e.imported,
        address: e.address,
        connectedAt: Date.now(),
        walletClientType: "privy",
        connectorType: "embedded",
        walletIndex: e.walletIndex ?? undefined,
        meta: {
          name: "Privy Wallet",
          icon: undefined,
          id: "io.privy.solana.wallet"
        },
        linked: true,
        fund() {
          throw new be("'fund' is deprecated for Solana wallets - use 'fundWallet' instead");
        },
        unlink: () => {
          throw new be("Cannot unlink an embedded Solana wallet");
        },
        getProvider: async () => new Na(qt, e.address),
        async signMessage(t) {
          let a = await Fa();
          if (!a || !qt) {
            throw new be("Must have valid access token and Privy wallet to send transaction", Se.MUST_BE_AUTHENTICATED);
          }
          let r = e.imported ? W(re) : N(re);
          if (!r) {
            throw new be("Attempting to sign a transaction without a root wallet");
          }
          let {
            entropyId: n,
            entropyIdVerifier: i
          } = C(r);
          if (!(await rr.recoverPrimaryWallet().catch(() => false))) {
            throw new be("Wallet couldn't be connected", Se.UNKNOWN_CONNECT_WALLET_ERROR);
          }
          if (!re) {
            throw new be("Attempting to sign a transaction with no user initialized");
          }
          let {
            response: o
          } = await qt.rpc({
            accessToken: a,
            entropyId: n,
            entropyIdVerifier: i,
            chainType: "solana",
            hdWalletIndex: e.walletIndex ?? 0,
            request: {
              method: "signMessage",
              params: {
                message: Buffer.from(t).toString("base64")
              }
            }
          });
          return Buffer.from(o.data.signature, "base64");
        },
        async sendTransaction(e, t, a) {
          let {
            signature: r
          } = await Xa({
            transaction: e,
            connection: t,
            transactionOptions: a,
            wallet: this
          });
          return r;
        },
        async signTransaction(t) {
          let a = await Fa();
          if (!a || !qt) {
            throw new be("Must have valid access token and Privy wallet to send transaction", Se.MUST_BE_AUTHENTICATED);
          }
          if (!(await rr.recoverPrimaryWallet().catch(() => false))) {
            throw new be("Wallet couldn't be connected", Se.UNKNOWN_CONNECT_WALLET_ERROR);
          }
          let r = e.imported ? e : N(re);
          if (!r) {
            throw new be("Attempting to sign a transaction without a root wallet");
          }
          let {
            entropyId: n,
            entropyIdVerifier: i
          } = C(r);
          await Me({
            tx: t,
            accessToken: a,
            walletProxy: qt,
            entropyId: n,
            entropyIdVerifier: i,
            transactingWalletAddress: this.address,
            transactingWalletIndex: e.walletIndex ?? 0
          });
          return t;
        },
        loginOrLink: async () => {
          throw new be("Cannot login or link with an embedded Solana wallet");
        },
        disconnect: () => {},
        isConnected: async () => true
      })));
    }
  }, [qt, re]);
  i(() => {
    if (!re) {
      v.connectors?.removeEmbeddedWalletConnectors();
      return;
    }
    let e = b(re);
    let t = U(re);
    let a = O(re);
    if (!e || !t.length) {
      v.connectors?.removeEmbeddedWalletConnectors();
    }
    if (!a) {
      v.connectors?.removeImportedWalletConnector();
    }
    if (v.connectors) {
      if (qt) {
        if (e) {
          v.connectors.addEmbeddedWalletConnectors({
            walletProxy: qt,
            rootWallet: e,
            embeddedWallets: t,
            defaultChain: Yt.defaultChain,
            appId: T.appId
          });
        }
        if (a) {
          v.connectors.addImportedWalletConnector(qt, a.address, Yt.defaultChain, T.appId);
        }
      } else {
        console.debug("Failed to add embedded wallet connector: Wallet proxy not initialized");
      }
    } else {
      console.debug("Failed to add embedded wallet connector: Client connectors not initialized");
    }
  }, [qt, re]);
  i(() => {
    if (qt) {
      ra?.(qt);
    }
  }, [qt]);
  let Ta = n();
  i(() => {
    (async () => {
      if (!Yt.customAuth?.enabled) {
        da({
          status: "not-enabled"
        });
        return;
      }
      Jt(true);
      let {
        getCustomAccessToken: e,
        isLoading: t
      } = Yt.customAuth;
      if (B && !t && ca.status !== "loading") {
        da({
          status: "loading"
        });
        try {
          let t = await e();
          if (t === Ta.current) {
            da({
              status: "done"
            });
            return;
          }
          if (!t && z) {
            Ta.current = t;
            await ar.logout();
            da({
              status: "done"
            });
            At(pa, "customAuth", "onUnauthenticated");
            return;
          }
          if (!t) {
            Ta.current = t;
            da({
              status: "done"
            });
            return;
          }
          v.startAuthFlow(new c(t));
          let {
            user: a,
            isNewUser: r
          } = await v.authenticate();
          if (!a) {
            await ar.logout();
            da({
              status: "error",
              error: new be("Failed to sync with custom auth provider")
            });
            At(pa, "customAuth", "onUnauthenticated");
            return;
          }
          if (r !== undefined) {
            At(pa, "login", "onComplete", {
              user: a,
              isNewUser: r,
              wasAlreadyAuthenticated: false,
              loginMethod: "custom",
              loginAccount: null
            });
          }
          Ta.current = t;
          At(pa, "customAuth", "onAuthenticated", {
            user: a
          });
          da({
            status: "done"
          });
          ie(a || null);
          Ut(r || false);
          G(true);
          la(true);
        } catch (e) {
          console.warn(e);
          await ar.logout();
          At(pa, "customAuth", "onUnauthenticated");
          if (e.message === "User already exists with provided custom JWT account.") {
            da({
              status: "initial"
            });
            return;
          }
          At(pa, "login", "onError", e.privyErrorCode || Se.UNKNOWN_AUTH_ERROR);
          da({
            status: "error",
            error: e
          });
        }
      }
    })();
  }, [ca.status === "initial", Yt.customAuth?.enabled, Yt.customAuth?.getCustomAccessToken, Yt.customAuth?.isLoading, B, z]);
  i(() => {
    if (sa && qt && re && S(re, Yt.embeddedWallets.createOnLogin)) {
      la(false);
      Ka(re, Q).catch(console.error);
    }
  }, [sa && qt && re]);
  i(() => {
    if (Yt.externalWallets.solana.connectors) {
      Yt.externalWallets.solana.connectors.onMount();
      return () => Yt.externalWallets.solana.connectors?.onUnmount();
    }
  }, [Yt.externalWallets.solana.connectors]);
  i(() => {
    if (!B && Xt) {
      (async function () {
        let e;
        let t = va();
        let r = Ca();
        (() => {
          let e = new URLSearchParams(window.location.search).get("privy_token");
          if (!e) {
            return;
          }
          Z.put(J, e);
          let t = new URL(window.location.href);
          t.searchParams.delete("privy_token");
          window.history.pushState({}, "", t);
        })();
        let n = a();
        v.initializeConnectorManager({
          walletConnectCloudProjectId: Yt.walletConnectCloudProjectId,
          rpcConfig: Yt.rpcConfig,
          chains: Yt.chains,
          defaultChain: Yt.defaultChain,
          store: n,
          walletList: Yt.appearance.walletList,
          shouldEnforceDefaultChainOnConnect: Yt.shouldEnforceDefaultChainOnConnect,
          externalWalletConfig: Yt.externalWallets,
          appName: Yt.name ?? "Privy",
          walletChainType: Yt.appearance.walletChainType
        });
        v.connectors?.on("connectorInitialized", () => {
          if (e) {
            clearTimeout(e);
          }
          let t = v.connectors.walletConnectors.length;
          let a = v.connectors.walletConnectors.reduce((e, t) => e + (t.initialized ? 1 : 0), 0);
          if (a === t) {
            ma(true);
          } else {
            e = setTimeout(() => {
              console.debug({
                message: "Unable to initialize all expected connectors before timeout",
                initialized: a,
                expected: t
              });
              ma(true);
            }, 1500);
          }
        });
        v.connectors?.initialize().then(() => {
          xa();
        });
        let i = await v.getAuthenticatedUser();
        let o = !!i;
        if (Yt.legal.requireUsersAcceptTerms && i && !i.hasAcceptedTerms) {
          await v.logout();
          rr.setReadyToTrue(true);
          At(pa, "logout", "onSuccess");
        } else {
          if (!Yt.customAuth?.enabled) {
            G(!!i);
            if (i) {
              At(pa, "login", "onComplete", {
                user: i,
                isNewUser: false,
                wasAlreadyAuthenticated: true,
                loginMethod: null,
                loginAccount: null
              });
            }
            ie(i);
          }
          if (t) {
            ga.current = o ? "link" : "login";
          } else if (r && !o) {
            ga.current = "login";
            ea({
              telegramAuthModalData: {
                seamlessAuth: true
              }
            });
            _a(pt.TELEGRAM_AUTH_SCREEN);
          } else {
            rr.setReadyToTrue(!!i);
          }
        }
      })();
    }
  }, [v, ta, B, Xt]);
  i(() => {
    if (B) {
      if (!re || !re.linkedAccounts.find(e => e.type === "wallet" && e.walletClientType === "privy")) {
        oa(true);
        return;
      }
      oa([...oe, ...Ue].some(e => e.walletClientType === "privy"));
    }
  }, [B, re, oe, Ue]);
  let va = () => {
    let e = Nt();
    if (e.inProgress && e.popupFlow) {
      if (window.opener.location.origin !== window.location.origin) {
        window.opener.postMessage({
          type: "PRIVY_OAUTH_ERROR",
          error: "Origins between parent and child windows do not match."
        });
        return;
      } else if (e.authorizationCode === "error") {
        window.opener.postMessage({
          type: "PRIVY_OAUTH_ERROR",
          error: "Something went wrong. Try again."
        });
        return;
      } else {
        window.opener.postMessage({
          type: "PRIVY_OAUTH_RESPONSE",
          stateCode: e.stateCode,
          authorizationCode: e.authorizationCode
        });
        return;
      }
    } else {
      if (e.inProgress && je(e.provider) && !e.popupFlow) {
        new BroadcastChannel(Be).postMessage({
          type: "PRIVY_OAUTH_RESPONSE",
          stateCode: e.stateCode,
          authorizationCode: e.authorizationCode
        });
        window.close();
      }
      return !!e.inProgress && !!e.withPrivyUi && (v.startAuthFlow(new bt(e)), _a(pt.AWAITING_OAUTH_SCREEN), true);
    }
  };
  let Ca = () => {
    let e = _();
    if (!e || !Yt.loginMethods.telegram || !Yt.loginConfig.telegramAuthConfiguration?.seamlessAuthEnabled) {
      return;
    }
    let t = new E();
    v.startAuthFlow(t);
    if (e.flowType === "login-url") {
      t.meta.telegramWebAppData = undefined;
      t.meta.telegramAuthResult = e.authData;
    }
    if (e.flowType === "web-app") {
      t.meta.telegramAuthResult = undefined;
      t.meta.telegramWebAppData = e.authData;
    }
    return true;
  };
  let Ia = async (e, t, a, r) => {
    ka((await v.connectors?.createEthereumWalletConnector(e, t)) || null, t, a, r);
  };
  async function ka(e, t, a, r) {
    if (!e) {
      Mt({
        status: "disconnected",
        connectedWallet: null,
        connectError: new Pe("Unable to connect to wallet."),
        connector: null,
        connectRetry: gt
      });
      return r?.(null, a);
    }
    Mt({
      status: "disconnected",
      connectedWallet: null,
      connectError: null,
      connector: e,
      connectRetry: gt
    });
    if (e instanceof Ae && t) {
      await e.resetConnection(t);
    }
    Mt({
      connector: e,
      status: "connecting",
      connectedWallet: null,
      connectError: null,
      connectRetry: () => ka(e, t, a, r)
    });
    try {
      let t = await e.connect({
        showPrompt: true
      });
      if ((!t || ge(t)) && Yt.shouldEnforceDefaultChainOnConnect && !Yt.chains.find(e => e.id === Number(t?.chainId.replace("eip155:", ""))) && (t?.connectorType !== "wallet_connect_v2" || t?.walletClientType !== "metamask")) {
        Mt(t => ({
          ...t,
          connector: e,
          status: "switching_to_supported_chain",
          connectedWallet: null,
          connectError: null,
          connectRetry: gt
        }));
        try {
          await t?.switchChain(Yt.defaultChain.id);
          if (t) {
            t.chainId = ne(ae(Yt.defaultChain.id));
          }
        } catch {
          console.warn(`Unable to switch to default chain: ${Yt.defaultChain.id}`);
        }
      }
      Mt(e => ({
        ...e,
        status: "connected",
        connectedWallet: t,
        connectError: null,
        connectRetry: gt
      }));
      if (t) {
        At(pa, "connectWallet", "onSuccess", {
          wallet: t
        });
      }
      return r?.(t, a);
    } catch (e) {
      if (e instanceof De) {
        console.warn(e.cause ? e.cause : e.message);
        At(pa, "connectWallet", "onError", e.privyErrorCode || Se.GENERIC_CONNECT_WALLET_ERROR);
      } else {
        console.warn(e);
        At(pa, "connectWallet", "onError", Se.UNKNOWN_CONNECT_WALLET_ERROR);
      }
      Mt(t => ({
        ...t,
        status: "disconnected",
        connectedWallet: null,
        connectError: e
      }));
      return r?.(null, a);
    }
  }
  let Wa = async (e, t, a) => {
    if (e === null || !ge(e)) {
      return;
    }
    let r = new m(e, v, t, a);
    v.startAuthFlow(r);
  };
  let La = async (e, t, a) => {
    if (e === null || !Ee(e)) {
      return;
    }
    let r = new y(e, v, t, a);
    v.startAuthFlow(r);
  };
  let xa = () => {
    let e = new URLSearchParams(window.location.search);
    let t = e.get("privy_connector");
    let a = e.get("privy_wallet_client");
    if (!t || !a) {
      return;
    }
    if (a === "phantom" && !ye()) {
      _a(pt.LOGIN_FAILED_SCREEN);
    }
    if (!v.connectors) {
      throw new be("Connector not initialized");
    }
    Aa(pt.AWAITING_CONNECTION);
    let r = new URL(window.location.href);
    r.searchParams.delete("privy_connector");
    r.searchParams.delete("privy_wallet_client");
    window.history.pushState({}, "", r);
    Ia(t, a, undefined, Wa);
  };
  i(() => {
    if (B && z && re === null) {
      v.getAuthenticatedUser().then(ie);
    }
  }, [B, z, re, v]);
  let ja = e => {
    if (!z) {
      At(pa, "linkAccount", "onError", Se.MUST_BE_AUTHENTICATED, {
        linkMethod: e
      });
      throw new be("User must be authenticated before linking an account.");
    }
  };
  let Ba = e => {
    if (!z || !re) {
      return false;
    }
    if (e.walletClientType === "privy") {
      return true;
    }
    for (let t of re.linkedAccounts) {
      if (t.type === "wallet" && t.address === e.address && t.walletClientType !== "privy") {
        return true;
      }
    }
    return false;
  };
  let Va = async e => {
    let t;
    if (!v.connectors) {
      throw new be("Connector not initialized");
    }
    t = e.type === "ethereum" ? v.connectors.findWalletConnector(e.connectorType, e.walletClientType) || null : v.connectors.findSolanaWalletConnector(e.connectorType, e.walletClientType) || null;
    Mt(a => ({
      ...a,
      connector: t,
      status: "connected",
      connectedWallet: e,
      connectError: null,
      connectRetry: gt
    }));
    if (Yt.captchaEnabled && !z) {
      ea({
        captchaModalData: {
          callback: t => ge(e) ? Wa(e, t) : La(e, t),
          userIntentRequired: false,
          onSuccessNavigateTo: pt.AWAITING_CONNECTION,
          onErrorNavigateTo: pt.ERROR_SCREEN
        }
      });
      _a(pt.CAPTCHA_SCREEN);
    } else {
      if (ge(e)) {
        await Wa(e);
      } else {
        await La(e);
      }
      _a(pt.AWAITING_CONNECTION);
    }
  };
  let Ha = () => {
    se(e => {
      let t = v.connectors?.wallets.filter(ge).map(e => ({
        ...e,
        linked: Ba(e),
        loginOrLink: async () => {
          if (!(await e.isConnected())) {
            throw new be("Wallet is not connected");
          }
          if (e.connectorType === "embedded" && e.walletClientType === "privy") {
            throw new be("Cannot link or login with embedded wallet");
          }
          Va(e);
        },
        fund: async t => {
          await rr.fundWallet(e.address, t);
        },
        unlink: async () => {
          if (!z) {
            throw new be("User is not authenticated.");
          }
          if (e.connectorType === "embedded" && e.walletClientType === "privy") {
            throw new be("Cannot unlink an embedded wallet");
          }
          ie(await v.unlinkEthereumWallet(e.address));
        }
      })) || [];
      if (we(e, t)) {
        return e;
      } else {
        return t;
      }
    });
    fe(e => {
      let t = (v.connectors?.wallets ?? []).filter(Ee).map(e => ({
        ...e,
        linked: Ba(e),
        loginOrLink: async () => {
          if (!(await e.isConnected())) {
            throw new be("Wallet is not connected");
          }
          if (e.connectorType === "embedded" && e.walletClientType === "privy") {
            throw new be("Cannot link or login with embedded wallet");
          }
          Va(e);
        },
        fund: async () => {
          throw new be("'fund' is deprecated for Solana wallets - use 'fundWallet' instead");
        },
        unlink: async () => {
          if (!z) {
            throw new be("User is not authenticated.");
          }
          if (e.connectorType === "embedded" && e.walletClientType === "privy") {
            throw new be("Cannot unlink an embedded wallet");
          }
          ie(await v.unlinkSolanaWallet(e.address));
        }
      }));
      if (we(e, t)) {
        return e;
      } else {
        return t;
      }
    });
  };
  i(() => {
    Ha();
  }, [re?.linkedAccounts, z, B]);
  i(() => {
    if (B) {
      if (!v.connectors) {
        throw new be("Connector not initialized");
      }
      Ha();
      v.connectors.on("walletsUpdated", Ha);
    }
  }, [B]);
  i(() => {
    [...(Yt.loginMethodsAndOrder?.primary ?? []), ...(Yt.loginMethodsAndOrder?.overflow ?? [])].filter(e => e.startsWith("privy:")).forEach(e => v.getCrossAppProviderDetails(e.replace("privy:", "")));
  }, [!!v]);
  let Ka = async (e, t, a) => {
    let r = b(e);
    let n = R(e);
    if (a && "walletIndex" in a) {
      return Ga(e, t, a.walletIndex, r, n);
    }
    let i = a && "createAdditional" in a && a.createAdditional;
    if (r && !i) {
      At(pa, "createWallet", "onError", Se.EMBEDDED_WALLET_ALREADY_EXISTS);
      throw Error("User already has an embedded wallet.");
    }
    let [o, s] = await Promise.all([rr.initializeWalletProxy(t), Fa()]);
    if (!o && Yt.customAuth?.enabled) {
      At(pa, "createWallet", "onError", Se.UNKNOWN_EMBEDDED_WALLET_ERROR);
      throw Error("Failed to connect to wallet proxy");
    }
    if (!o || !s || Yt.embeddedWallets?.requireUserOwnedRecoveryOnCreate) {
      return za();
    }
    if (!r) {
      if (n) {
        await rr.recoverPrimaryWallet();
      }
      await o.create({
        accessToken: s,
        solanaAddress: n?.address
      });
      return $a(0, "ethereum");
    }
    {
      let t = (P(e)?.walletIndex ?? 0) + 1;
      let {
        entropyId: a,
        entropyIdVerifier: r
      } = C(N(e));
      await rr.recoverPrimaryWallet();
      await o.addWallet({
        accessToken: s,
        entropyId: a,
        entropyIdVerifier: r,
        chainType: "ethereum",
        hdWalletIndex: t
      });
      return $a(t, "ethereum");
    }
  };
  let za = async () => new Promise((e, t) => {
    Jt(true);
    ea({
      createWallet: {
        onSuccess: t => {
          At(pa, "createWallet", "onSuccess", {
            wallet: t
          });
          e(t);
        },
        onFailure: e => {
          At(pa, "createWallet", "onError", Se.UNKNOWN_EMBEDDED_WALLET_ERROR);
          t(e);
        },
        callAuthOnSuccessOnClose: false
      }
    });
    Aa(pt.EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN);
  });
  let Ga = async (e, t, a, r, n) => {
    if (a < 0) {
      At(pa, "createWallet", "onError", Se.EMBEDDED_WALLET_CREATE_ERROR);
      throw Error(`A negative walletIndex (${a}) is invalid.`);
    }
    let [i, o] = await Promise.all([rr.initializeWalletProxy(t), Fa()]);
    if (!i && Yt.customAuth?.enabled) {
      At(pa, "createWallet", "onError", Se.UNKNOWN_EMBEDDED_WALLET_ERROR);
      throw Error("Failed to connect to wallet proxy");
    }
    if (!i || !o || Yt.embeddedWallets?.requireUserOwnedRecoveryOnCreate) {
      if (a == 0) {
        return za();
      }
      At(pa, "createWallet", "onError", Se.UNKNOWN_EMBEDDED_WALLET_ERROR);
      throw Error("Create wallet UI can only be displayed when walletIndex is 0.");
    }
    if (a == 0) {
      if (r) {
        return r;
      }
      await i.create({
        accessToken: o,
        solanaAddress: n?.address
      });
    } else {
      if (!r) {
        At(pa, "createWallet", "onError", Se.EMBEDDED_WALLET_CREATE_ERROR);
        throw Error("A user must have a wallet at HD index 0 before creating a wallet at greater HD indices.");
      }
      let t = U(e).find(e => e.walletIndex === a);
      if (t) {
        return t;
      }
      let {
        entropyId: n,
        entropyIdVerifier: s
      } = C(N(e));
      await rr.recoverPrimaryWallet();
      await i.addWallet({
        accessToken: o,
        entropyId: n,
        entropyIdVerifier: s,
        chainType: "ethereum",
        hdWalletIndex: a
      });
    }
    return $a(a, "ethereum");
  };
  let qa = async ({
    user: e,
    wp: t,
    accessToken: a,
    walletIndex: r,
    ethereumWallet: n
  }) => {
    let i = k(e).find(e => e.walletIndex === r);
    if (i) {
      return i;
    }
    if (r === 0) {
      if (n) {
        await rr.recoverPrimaryWallet();
      }
      await t.createSolana({
        accessToken: a,
        ethereumAddress: n?.address
      });
    } else {
      let n = N(e);
      if (!n) {
        At(pa, "createWallet", "onError", Se.EMBEDDED_WALLET_CREATE_ERROR);
        throw Error("User must have a wallet at HD index 0 before creating a wallet at greater HD indices.");
      }
      let {
        entropyId: i,
        entropyIdVerifier: o
      } = C(n);
      await rr.recoverPrimaryWallet();
      await t.addWallet({
        accessToken: a,
        entropyId: i,
        entropyIdVerifier: o,
        chainType: "solana",
        hdWalletIndex: r
      });
    }
    return $a(r, "solana");
  };
  let $a = async (e, t) => {
    let a = await rr.refreshUser();
    let r = (t === "ethereum" ? U(a) : k(a)).find(t => t.walletIndex === e);
    if (!r) {
      At(pa, "createWallet", "onError", Se.UNKNOWN_EMBEDDED_WALLET_ERROR);
      throw Error("Failed to create wallet");
    }
    At(pa, "createWallet", "onSuccess", {
      wallet: r
    });
    return r;
  };
  let Ya = ({
    transaction: e,
    uiOptions: t,
    fundWalletConfig: a,
    address: r,
    signOnly: n
  }) => new Promise(async (i, o) => {
    let {
      requesterAppId: s
    } = t || {};
    let c = n ? "signTransaction" : "sendTransaction";
    if (!z || !re) {
      At(pa, c, "onError", Se.MUST_BE_AUTHENTICATED);
      o(Error("User must be authenticated before signing with a Privy wallet"));
      return;
    }
    let d = r ?? b(re)?.address;
    if (!d) {
      throw new be("User must have an embedded wallet to send a transaction.");
    }
    let {
      signingWallet: u,
      rootWallet: h
    } = M(re, d);
    if (!h || !u) {
      At(pa, c, "onError", Se.EMBEDDED_WALLET_NOT_FOUND);
      o(Error("Must have a Privy wallet before signing"));
      return;
    }
    Jt(true);
    let p = nr.wallets.find(e => e.walletClientType === "privy" && l(e.address) === l(u.address));
    let w = await p?.getEthereumProvider();
    if (!p || !w) {
      throw new be(`Cannot sendTransaction before embedded wallet ${u.address} is connected`);
    }
    let m = e.chainId ? Number(e.chainId) : Fe(p.chainId);
    (e => {
      if (!Yt.chains.map(e => e.id).includes(e)) {
        throw new Pe(`Chain ID ${e} is not supported. It must be added to the config.supportedChains property of the PrivyProvider.`, Se.UNSUPPORTED_CHAIN_ID);
      }
    })(m);
    let y = {
      ...e,
      from: e.from ?? u.address,
      chainId: m
    };
    let g = await Fa();
    if (!g || !qt) {
      At(pa, c, "onError", Se.EMBEDDED_WALLET_NOT_FOUND);
      o(Error("Must have valid access token and Privy wallet to send transaction"));
      return;
    }
    let f = yt(y.chainId, Yt.chains, Yt.rpcConfig, {
      appId: T.appId
    });
    if (Ea({
      showWalletUIs: t?.showWalletUIs
    })) {
      (async () => {
        try {
          if (!(await rr.recoverPrimaryWallet())) {
            At(pa, c, "onError", Se.UNKNOWN_CONNECT_WALLET_ERROR);
            o(Error("Unable to connect to wallet"));
            return;
          }
          let e = await st(y, f, y.from);
          let {
            entropyId: t,
            entropyIdVerifier: a
          } = C(h);
          let r = n ? await We({
            accessToken: g,
            entropyId: t,
            entropyIdVerifier: a,
            transactingWallet: u,
            walletProxy: qt,
            transactionRequest: y,
            requesterAppId: s
          }) : await Ne({
            accessToken: g,
            entropyId: t,
            entropyIdVerifier: a,
            transactingWallet: u,
            walletProxy: qt,
            transactionRequest: e,
            publicClient: f,
            requesterAppId: s
          });
          if (n) {
            At(pa, "signTransaction", "onSuccess", {
              signature: r
            });
          } else {
            At(pa, "sendTransaction", "onSuccess", {
              hash: r
            });
          }
          i({
            hash: r
          });
        } catch (e) {
          At(pa, c, "onError", Se.TRANSACTION_FAILURE);
          o(e);
        }
      })();
    } else {
      let {
        entropyId: e,
        entropyIdVerifier: r
      } = C(h);
      let l = {
        entropyId: e,
        entropyIdVerifier: r,
        onCompleteNavigateTo: pt.EMBEDDED_WALLET_SEND_TRANSACTION_SCREEN,
        onFailure: e => {
          At(pa, c, "onError", Se.UNKNOWN_CONNECT_WALLET_ERROR);
          o(e);
        }
      };
      let d = Ze(Yt) ? Wt({
        address: u.address,
        appConfig: Yt,
        fundWalletConfig: a,
        methodScreen: pt.FUNDING_METHOD_SELECTION_SCREEN,
        chainIdOverride: y.chainId,
        comingFromSendTransactionScreen: true
      }) : undefined;
      ea({
        connectWallet: l,
        sendTransaction: {
          transactionRequest: y,
          transactingWallet: u,
          entropyId: e,
          entropyIdVerifier: r,
          signOnly: n,
          onConfirm: n ? async () => await We({
            accessToken: g,
            entropyId: e,
            entropyIdVerifier: r,
            transactingWallet: u,
            walletProxy: qt,
            transactionRequest: y,
            requesterAppId: s
          }) : undefined,
          onSuccess: e => {
            if (n) {
              At(pa, "signTransaction", "onSuccess", {
                signature: e.hash
              });
            } else {
              At(pa, "sendTransaction", "onSuccess", {
                hash: e.hash
              });
            }
            i(e);
          },
          onFailure: e => {
            At(pa, c, "onError", Se.TRANSACTION_FAILURE);
            o(e);
          },
          uiOptions: t || {},
          fundWalletConfig: a,
          requesterAppId: s
        },
        funding: d
      });
      Aa(pt.EMBEDDED_WALLET_CONNECTING_SCREEN);
    }
  });
  let Xa = ({
    transaction: e,
    connection: t,
    transactionOptions: a,
    fundWalletConfig: r,
    uiOptions: n,
    wallet: i
  }) => new Promise(async (o, s) => {
    let {
      requesterAppId: l
    } = n || {};
    if (!z || !re) {
      At(pa, "sendSolanaTransaction", "onError", Se.MUST_BE_AUTHENTICATED);
      s(new be("User must be authenticated before signing with a Privy wallet", Se.MUST_BE_AUTHENTICATED));
      return;
    }
    let c = i ? re.linkedAccounts.find(e => e.type === "wallet" && e.address === i.address) : R(re);
    if (!c) {
      At(pa, "sendSolanaTransaction", "onError", Se.EMBEDDED_WALLET_NOT_FOUND);
      s(new be("Must have a Privy wallet before signing", Se.EMBEDDED_WALLET_NOT_FOUND));
      return;
    }
    Jt(true);
    let {
      rootWallet: d
    } = D(re, c.address);
    if (!(await rr.recoverPrimaryWallet().catch(() => false)) || !d) {
      At(pa, "sendSolanaTransaction", "onError", Se.EMBEDDED_WALLET_NOT_FOUND);
      throw new be(`Cannot sendSolanaTransaction before embedded wallet ${c.address} is connected`, Se.EMBEDDED_WALLET_NOT_FOUND);
    }
    if (Ea({
      showWalletUIs: n?.showWalletUIs
    })) {
      (async () => {
        let r = await Fa();
        if (!r || !qt) {
          At(pa, "sendSolanaTransaction", "onError", Se.EMBEDDED_WALLET_NOT_FOUND);
          s(new be("Must have valid access token and Privy wallet to send transaction", Se.EMBEDDED_WALLET_NOT_FOUND));
          return;
        }
        try {
          if (!(await rr.recoverPrimaryWallet())) {
            At(pa, "sendSolanaTransaction", "onError", Se.UNKNOWN_CONNECT_WALLET_ERROR);
            s(new be("Unable to connect to wallet", Se.UNKNOWN_CONNECT_WALLET_ERROR));
            return;
          }
          if (Ea({
            showWalletUIs: n?.showWalletUIs
          }) && !(await nt(e, t))) {
            At(pa, "sendSolanaTransaction", "onError", Se.INSUFFICIENT_BALANCE);
            s(new be("Solana wallet has insufficient funds for this transaction.", Se.INSUFFICIENT_BALANCE));
            return;
          }
          let {
            entropyId: i,
            entropyIdVerifier: l
          } = F(re);
          let {
            signature: d,
            receipt: u
          } = await Le({
            accessToken: r,
            tx: e,
            connection: t,
            walletProxy: qt,
            transactionOptions: a,
            entropyId: i,
            entropyIdVerifier: l,
            transactingWalletAddress: c.address,
            transactingWalletIndex: c.walletIndex ?? 0
          });
          let h = it(d, u);
          At(pa, "sendSolanaTransaction", "onSuccess", {
            response: h
          });
          o(h);
        } catch (e) {
          At(pa, "sendSolanaTransaction", "onError", Se.TRANSACTION_FAILURE);
          s(e);
        }
      })();
    } else {
      let {
        entropyId: i,
        entropyIdVerifier: u
      } = C(d);
      let h = {
        entropyId: i,
        entropyIdVerifier: u,
        onCompleteNavigateTo: pt.EMBEDDED_WALLET_SEND_SOLANA_TRANSACTION_SCREEN,
        onFailure: e => {
          At(pa, "sendSolanaTransaction", "onError", Se.UNKNOWN_CONNECT_WALLET_ERROR);
          s(e);
        }
      };
      let p = Ze(Yt) ? kt({
        address: c.address,
        appConfig: Yt,
        methodScreen: pt.FUNDING_METHOD_SELECTION_SCREEN,
        fundWalletConfig: r,
        comingFromSendTransactionScreen: true
      }) : undefined;
      ea({
        connectWallet: h,
        sendSolanaTransaction: {
          transactionRequest: e,
          connection: t,
          transactionOptions: a,
          transactingWallet: c,
          onSuccess: e => {
            At(pa, "sendSolanaTransaction", "onSuccess", {
              response: e
            });
            o(e);
          },
          onFailure: e => {
            At(pa, "sendSolanaTransaction", "onError", Se.TRANSACTION_FAILURE);
            s(e);
          },
          uiOptions: n || {},
          requesterAppId: l
        },
        funding: p
      });
      Aa(pt.EMBEDDED_WALLET_CONNECTING_SCREEN);
    }
  });
  function Qa() {
    return new Promise(async (e, t) => {
      let a = await Fa();
      if (!a || !qt) {
        throw Error("Must have valid access token to enroll in MFA");
      }
      try {
        await qt.verifyMfa({
          accessToken: a
        });
        e();
      } catch (e) {
        t(e);
      }
    });
  }
  let Ja = e => e?.linkedAccounts.filter(e => e.latestVerifiedAt !== null && (e.type !== "wallet" || e.walletClientType !== "privy")).sort((e, t) => t.latestVerifiedAt.getTime() - e.latestVerifiedAt.getTime())[0];
  let Za = e => {
    let t = re?.linkedAccounts.filter(t => t.type === e).length ?? 0;
    let {
      displayName: a,
      loginMethod: r
    } = ot(e);
    if (e === "passkey" && t >= 5 || e !== "passkey" && t >= 1) {
      At(pa, "linkAccount", "onError", Se.CANNOT_LINK_MORE_OF_TYPE, {
        linkMethod: r
      });
      throw new be(`User already has an account of type ${a} linked.`);
    }
  };
  async function er({
    showAutomaticRecovery: e = false,
    legacySetWalletPasswordFlow: t = false
  }) {
    St(null);
    let a = t ? "setWalletPassword" : "setWalletRecovery";
    if (!z || !re) {
      At(pa, a, "onError", Se.MUST_BE_AUTHENTICATED);
      throw Error("User must be authenticated before adding recovery method to Privy wallet");
    }
    let r = N(re);
    if (!r || !qt) {
      At(pa, a, "onError", Se.EMBEDDED_WALLET_NOT_FOUND);
      throw Error("Must have a Privy wallet to add a recovery method");
    }
    try {
      await Qa();
    } catch (e) {
      At(pa, a, "onError", Se.MISSING_MFA_CREDENTIALS);
      throw e;
    }
    return new Promise((n, i) => {
      Jt(true);
      let o = {
        onSuccess: e => {
          At(pa, a, "onSuccess", {
            method: "user-passcode",
            wallet: e
          });
          n(e);
        },
        onFailure: e => {
          At(pa, a, "onError", Se.USER_EXITED_SET_PASSWORD_FLOW);
          i(e);
        },
        callAuthOnSuccessOnClose: false
      };
      let s = r.recoveryMethod === "user-passcode";
      let l = Xe({
        walletAction: "update",
        availableRecoveryMethods: Yt.embeddedWallets.userOwnedRecoveryOptions,
        legacySetWalletPasswordFlow: t,
        isResettingPassword: s,
        showAutomaticRecovery: e
      });
      let {
        entropyId: c,
        entropyIdVerifier: d
      } = C(r);
      ea({
        setWalletPassword: o,
        recoverWallet: {
          entropyId: c,
          entropyIdVerifier: d,
          onFailure: i
        },
        createWallet: o,
        connectWallet: {
          onCompleteNavigateTo: l,
          shouldForceMFA: false,
          entropyId: c,
          entropyIdVerifier: d,
          onFailure: e => {
            At(pa, a, "onError", Se.UNKNOWN_CONNECT_WALLET_ERROR);
            i(e);
          }
        },
        recoverySelection: {
          isInAccountCreateFlow: false,
          isResettingPassword: s
        }
      });
      Aa(pt.EMBEDDED_WALLET_CONNECTING_SCREEN);
    });
  }
  async function tr({
    appId: e,
    action: t
  }) {
    let a = await Fa();
    if (t === "link" && !a) {
      At(pa, "linkAccount", "onError", Se.MUST_BE_AUTHENTICATED, {
        linkMethod: `privy:${e}`
      });
      throw new be("User must be authenticated before linking an account.");
    }
    if (t === "login" && a) {
      At(pa, "login", "onError", Se.UNKNOWN_AUTH_ERROR);
      throw new be("Attempted to log in, but user is already logged in. Use a `link` helper instead.");
    }
    ya.current = `privy:${e}`;
    ga.current = t;
    let r = tt();
    v.createAnalyticsEvent({
      eventName: "cross_app_auth_started",
      payload: {
        providerAppId: e
      }
    });
    return new Promise(async (a, n) => {
      let {
        name: i,
        logoUrl: o
      } = await Ke({
        api: v.api,
        providerAppId: e,
        requesterAppId: Yt.id
      });
      ea({
        crossAppAuth: {
          appId: e,
          name: i,
          logoUrl: o,
          action: t,
          popup: r,
          onSuccess: a,
          onError: n
        }
      });
      _a(pt.CROSS_APP_AUTH_SCREEN);
    });
  }
  let ar = {
    ready: B,
    authenticated: z,
    user: re,
    walletConnectors: v.connectors || null,
    connectWallet: e => {
      if (e && "target" in e && e) {
        e = undefined;
      }
      ea({
        externalConnectWallet: {
          walletList: e?.walletList && e?.walletList.length > 0 ? e.walletList : undefined,
          suggestedAddress: e?.suggestedAddress
        }
      });
      Aa(z ? pt.CONNECT_ONLY_AUTHENTICATED_SCREEN : pt.CONNECT_ONLY_LANDING_SCREEN);
    },
    linkWallet: () => {
      ja("siwe");
      ya.current = "siwe";
      ga.current = "link";
      Aa(pt.LINK_WALLET_SCREEN);
    },
    startCrossAppAuthFlow: tr,
    linkEmail: () => {
      ja("email");
      Za("email");
      ya.current = "email";
      ga.current = "link";
      Aa(pt.LINK_EMAIL_SCREEN);
    },
    linkPhone: () => {
      ja("sms");
      Za("phone");
      ya.current = "sms";
      ga.current = "link";
      Aa(pt.LINK_PHONE_SCREEN);
    },
    linkGoogle: async () => {
      ja("google");
      Za("google_oauth");
      ga.current = "link";
      await rr.initLoginWithOAuth("google");
    },
    linkTwitter: async () => {
      ja("twitter");
      Za("twitter_oauth");
      ga.current = "link";
      await rr.initLoginWithOAuth("twitter");
    },
    linkDiscord: async () => {
      ja("discord");
      Za("discord_oauth");
      ga.current = "link";
      await rr.initLoginWithOAuth("discord");
    },
    linkGithub: async () => {
      ja("github");
      Za("github_oauth");
      ga.current = "link";
      await rr.initLoginWithOAuth("github");
    },
    linkSpotify: async () => {
      ja("spotify");
      Za("spotify_oauth");
      ga.current = "link";
      await rr.initLoginWithOAuth("spotify");
    },
    linkInstagram: async () => {
      ja("instagram");
      Za("instagram_oauth");
      ga.current = "link";
      await rr.initLoginWithOAuth("instagram");
    },
    linkTiktok: async () => {
      ja("tiktok");
      Za("tiktok_oauth");
      ga.current = "link";
      await rr.initLoginWithOAuth("tiktok");
    },
    linkLinkedIn: async () => {
      ja("linkedin");
      Za("linkedin_oauth");
      ga.current = "link";
      await rr.initLoginWithOAuth("linkedin");
    },
    linkApple: async () => {
      ja("apple");
      Za("apple_oauth");
      ga.current = "link";
      await rr.initLoginWithOAuth("apple");
    },
    linkPasskey: async () => {
      ja("passkey");
      Za("passkey");
      await rr.initLinkWithPasskey();
      Aa(pt.LINK_PASSKEY_SCREEN);
    },
    linkTelegram: async e => {
      ja("telegram");
      Za("telegram");
      ga.current = "link";
      ya.current = "telegram";
      if (e?.launchParams) {
        if (e.launchParams.initDataRaw) {
          let t = new E();
          v.startAuthFlow(t);
          t.meta.telegramAuthResult = undefined;
          t.meta.telegramWebAppData = A(e.launchParams.initDataRaw);
          ea({
            telegramAuthModalData: {
              seamlessAuth: true
            }
          });
          _a(pt.TELEGRAM_AUTH_SCREEN);
        } else {
          At(pa, "linkAccount", "onError", Se.INVALID_DATA, {
            linkMethod: "telegram"
          });
        }
      } else {
        await rr.initLoginWithTelegram();
      }
      Aa(pt.TELEGRAM_AUTH_SCREEN);
    },
    linkFarcaster: async () => {
      ja("farcaster");
      Za("farcaster");
      await rr.initLoginWithFarcaster();
      ga.current = "link";
      ya.current = "farcaster";
      Aa(pt.AWAITING_FARCASTER_CONNECTION);
    },
    updateEmail: () => {
      ja("email");
      if (!re?.email) {
        throw new be("User does not have an email linked to their account.");
      }
      ga.current = "update";
      ya.current = "email";
      Aa(pt.UPDATE_EMAIL_SCREEN);
    },
    updatePhone: () => {
      ja("sms");
      if (!re?.phone) {
        throw new be("User does not have a phone number linked to their account.");
      }
      ga.current = "update";
      ya.current = "sms";
      Aa(pt.UPDATE_PHONE_SCREEN);
    },
    login: async e => {
      if (e && "target" in e && e) {
        e = undefined;
      }
      let t = "Attempted to log in, but user is already logged in. Use a `link` helper instead.";
      if (!B) {
        let e = await new Promise(e => {
          aa(t => e.bind(t));
        });
        aa(null);
        if (e) {
          console.warn(t);
          return;
        }
      }
      if (!re || re.isGuest) {
        ga.current = "login";
        ea({
          login: e
        });
        _a(pt.LANDING);
      } else {
        console.warn(t);
      }
    },
    connectOrCreateWallet: async () => {
      if (!B) {
        await new Promise(e => {
          aa(() => e);
        });
        aa(null);
      }
      if (z) {
        console.warn("User must be unauthenticated to `connectOrCreateWallet`");
      } else {
        ga.current = "login";
        _a(pt.CONNECT_OR_CREATE);
      }
    },
    logout: async () => {
      ga.current = null;
      ya.current = null;
      if (re) {
        v.clearProviderAcccessTokens(re);
      }
      St(null);
      await v.logout();
      if (re && qt) {
        try {
          await qt.clearMfa({
            userId: re.id
          });
        } catch (e) {}
      }
      ie(null);
      G(false);
      At(pa, "logout", "onSuccess");
      j(false);
      Z.del(K);
      Z.del(q(Yt.id));
    },
    getAccessToken: () => v.getCustomerAccessToken(),
    unlinkWallet: async e => {
      let t;
      ie(t = e.startsWith("0x") ? await v.unlinkEthereumWallet(e) : await v.unlinkSolanaWallet(e));
      return t;
    },
    unlinkEmail: async e => {
      let t = await v.unlinkEmail(e);
      ie(t);
      return t;
    },
    unlinkPhone: async e => {
      let t = await v.unlinkPhone(e);
      ie(t);
      return t;
    },
    unlinkGoogle: async e => {
      let t = await v.unlinkOAuth("google", e);
      ie(t);
      return t;
    },
    unlinkTwitter: async e => {
      let t = await v.unlinkOAuth("twitter", e);
      ie(t);
      return t;
    },
    unlinkDiscord: async e => {
      let t = await v.unlinkOAuth("discord", e);
      ie(t);
      return t;
    },
    unlinkGithub: async e => {
      let t = await v.unlinkOAuth("github", e);
      ie(t);
      return t;
    },
    unlinkSpotify: async e => {
      let t = await v.unlinkOAuth("spotify", e);
      ie(t);
      return t;
    },
    unlinkInstagram: async e => {
      let t = await v.unlinkOAuth("instagram", e);
      ie(t);
      return t;
    },
    unlinkTiktok: async e => {
      let t = await v.unlinkOAuth("tiktok", e);
      ie(t);
      return t;
    },
    unlinkLinkedIn: async e => {
      let t = await v.unlinkOAuth("linkedin", e);
      ie(t);
      return t;
    },
    unlinkApple: async e => {
      let t = await v.unlinkOAuth("apple", e);
      ie(t);
      return t;
    },
    unlinkFarcaster: async e => {
      let t = await v.unlinkFarcaster(e);
      ie(t);
      return t;
    },
    unlinkTelegram: async e => {
      let t = await v.unlinkTelegram(e);
      ie(t);
      return t;
    },
    unlinkPasskey: async e => {
      let t = await v.unlinkPasskey(e);
      ie(t);
      return t;
    },
    unlinkCrossAppAccount: async ({
      subject: e
    }) => {
      let t = re?.linkedAccounts.find(t => t.type === "cross_app" && t.subject === e)?.providerApp;
      if (!t) {
        throw new be("Invalid subject");
      }
      v.storeProviderAccessToken(t.id, null);
      let a = await v.unlinkOAuth(`privy:${t.id}`, e);
      ie(a);
      return a;
    },
    createWallet: async e => {
      if (e && "target" in e && e) {
        e = undefined;
      }
      let t = await rr.refreshUser();
      if (!z || !t) {
        At(pa, "createWallet", "onError", Se.MUST_BE_AUTHENTICATED);
        throw Error("User must be authenticated before creating a Privy wallet");
      }
      return Ka(t, 15000, e);
    },
    setWalletRecovery: async e => er({
      legacySetWalletPasswordFlow: false,
      showAutomaticRecovery: e?.showAutomaticRecovery ?? false
    }),
    setWalletPassword: async () => er({
      legacySetWalletPasswordFlow: true,
      showAutomaticRecovery: false
    }),
    signMessage: (e, t) => new Promise(async (a, r) => {
      let {
        requesterAppId: n
      } = t?.uiOptions || {};
      let i = e.message;
      if (!z || !re) {
        At(pa, "signMessage", "onError", Se.MUST_BE_AUTHENTICATED);
        r(Error("User must be authenticated before signing with a Privy wallet"));
        return;
      }
      let o = t?.address ?? b(re)?.address;
      if (!o) {
        throw new be("User must have an embedded wallet to sign a message.");
      }
      let {
        signingWallet: s,
        rootWallet: l
      } = M(re, o);
      if (!s || !l) {
        At(pa, "signMessage", "onError", Se.EMBEDDED_WALLET_NOT_FOUND);
        r(Error("Must have a Privy wallet before signing"));
        return;
      }
      if (typeof i != "string" || i.length < 1) {
        At(pa, "signMessage", "onError", Se.INVALID_MESSAGE);
        r(Error("Message must be a non-empty string"));
        return;
      }
      Jt(true);
      let c = async () => {
        if (!z) {
          throw Error("User must be authenticated before signing with a Privy wallet");
        }
        let e = await Fa();
        if (!qt || !e || !(await rr.recoverPrimaryWallet())) {
          throw Error("Unable to connect to wallet");
        }
        v.createAnalyticsEvent({
          eventName: "embedded_wallet_sign_message_started",
          payload: {
            walletAddress: s.address,
            requesterAppId: n
          }
        });
        let {
          entropyId: t,
          entropyIdVerifier: a
        } = C(l);
        let {
          response: r
        } = await qt.rpc({
          accessToken: e,
          entropyId: t,
          entropyIdVerifier: a,
          chainType: "ethereum",
          hdWalletIndex: s.walletIndex ?? 0,
          requesterAppId: n,
          request: {
            method: "personal_sign",
            params: [i, s.address]
          }
        });
        let o = r.data;
        v.createAnalyticsEvent({
          eventName: "embedded_wallet_sign_message_completed",
          payload: {
            walletAddress: s.address,
            requesterAppId: n
          }
        });
        return o;
      };
      if (Ea({
        showWalletUIs: t?.uiOptions?.showWalletUIs
      })) {
        try {
          let e = await c();
          At(pa, "signMessage", "onSuccess", {
            signature: e
          });
          a({
            signature: e
          });
        } catch (e) {
          At(pa, "signMessage", "onError", Se.UNABLE_TO_SIGN);
          r(e ?? new me("Unable to sign message"));
        }
      } else {
        let e = {
          method: "personal_sign",
          data: i,
          confirmAndSign: c,
          onSuccess: e => {
            At(pa, "signMessage", "onSuccess", {
              signature: e
            });
            a({
              signature: e
            });
          },
          onFailure: e => {
            At(pa, "signMessage", "onError", Se.UNABLE_TO_SIGN);
            r(e);
          },
          uiOptions: t?.uiOptions || {}
        };
        let {
          entropyId: n,
          entropyIdVerifier: o
        } = C(l);
        ea({
          signMessage: e,
          connectWallet: {
            entropyId: n,
            entropyIdVerifier: o,
            onCompleteNavigateTo: pt.EMBEDDED_WALLET_SIGN_REQUEST_SCREEN,
            onFailure: e => {
              At(pa, "signMessage", "onError", Se.UNKNOWN_CONNECT_WALLET_ERROR);
              r(e);
            }
          }
        });
        Aa(pt.EMBEDDED_WALLET_CONNECTING_SCREEN);
      }
    }),
    signTypedData: (e, t) => new Promise(async (a, r) => {
      let {
        requesterAppId: n
      } = t?.uiOptions || {};
      if (!z || !re) {
        At(pa, "signTypedData", "onError", Se.MUST_BE_AUTHENTICATED);
        r(Error("User must be authenticated before signing with a Privy wallet"));
        return;
      }
      let i = t?.address ?? b(re)?.address;
      if (!i) {
        throw new be("User must have an embedded wallet to sign a message.");
      }
      let {
        signingWallet: o,
        rootWallet: s
      } = M(re, i);
      if (!s || !o) {
        At(pa, "signTypedData", "onError", Se.EMBEDDED_WALLET_NOT_FOUND);
        r(Error("Must have a Privy wallet before signing"));
        return;
      }
      Jt(true);
      let l = te(e);
      let c = async () => {
        if (!z) {
          throw Error("User must be authenticated before signing with a Privy wallet");
        }
        let e = await Fa();
        if (!qt || !e || !(await rr.recoverPrimaryWallet())) {
          throw Error("Unable to connect to wallet");
        }
        v.createAnalyticsEvent({
          eventName: "embedded_wallet_sign_typed_data_started",
          payload: {
            walletAddress: o.address,
            requesterAppId: n
          }
        });
        let {
          entropyId: t,
          entropyIdVerifier: a
        } = C(s);
        let {
          response: r
        } = await qt.rpc({
          accessToken: e,
          entropyId: t,
          entropyIdVerifier: a,
          chainType: "ethereum",
          hdWalletIndex: o.walletIndex ?? 0,
          requesterAppId: n,
          request: {
            method: "eth_signTypedData_v4",
            params: [o.address, l]
          }
        });
        let i = r.data;
        v.createAnalyticsEvent({
          eventName: "embedded_wallet_sign_typed_data_completed",
          payload: {
            walletAddress: o.address,
            requesterAppId: n
          }
        });
        return i;
      };
      if (Ea({
        showWalletUIs: t?.uiOptions?.showWalletUIs
      })) {
        try {
          let e = await c();
          At(pa, "signTypedData", "onSuccess", {
            signature: e
          });
          a({
            signature: e
          });
        } catch (e) {
          At(pa, "signTypedData", "onError", Se.UNABLE_TO_SIGN);
          r(e ?? new me("Unable to sign message"));
        }
      } else {
        let e = {
          method: "eth_signTypedData_v4",
          data: l,
          confirmAndSign: c,
          onSuccess: e => {
            At(pa, "signTypedData", "onSuccess", {
              signature: e
            });
            a({
              signature: e
            });
          },
          onFailure: e => {
            At(pa, "signTypedData", "onError", Se.UNABLE_TO_SIGN);
            r(e);
          },
          uiOptions: t?.uiOptions || {}
        };
        let {
          entropyId: n,
          entropyIdVerifier: i
        } = C(s);
        ea({
          signMessage: e,
          connectWallet: {
            entropyId: n,
            entropyIdVerifier: i,
            onCompleteNavigateTo: pt.EMBEDDED_WALLET_SIGN_REQUEST_SCREEN,
            onFailure: e => {
              At(pa, "signMessage", "onError", Se.UNKNOWN_CONNECT_WALLET_ERROR);
              r(e);
            }
          }
        });
        Aa(pt.EMBEDDED_WALLET_CONNECTING_SCREEN);
      }
    }),
    sendTransaction: async (e, t) => await Ya({
      transaction: e,
      uiOptions: t?.uiOptions,
      fundWalletConfig: t?.fundWalletConfig,
      address: t?.address,
      signOnly: false
    }),
    signTransaction: async (e, t) => ({
      signature: (await Ya({
        transaction: e,
        uiOptions: t?.uiOptions,
        address: t?.address,
        signOnly: true
      })).hash
    }),
    exportWallet: e => new Promise(async (t, a) => {
      if (!z || !re) {
        a(Error("User must be authenticated before exporting their Privy wallet"));
        return;
      }
      if (e && "target" in e && e) {
        e = undefined;
      }
      let r = e?.address ?? b(re)?.address;
      if (!r) {
        a(Error("User does not have an HD Ethereum wallet. To export an imported wallet, pass the `address` of the wallet to `exportWallet`."));
        return;
      }
      let {
        signingWallet: n,
        rootWallet: i
      } = M(re, r);
      if (!n || !i) {
        a(Error("Must have a Privy wallet before exporting"));
        return;
      }
      Jt(true);
      let {
        entropyId: o,
        entropyIdVerifier: s
      } = C(i);
      let l = {
        entropyId: o,
        entropyIdVerifier: s,
        onCompleteNavigateTo: pt.EMBEDDED_WALLET_KEY_EXPORT_SCREEN,
        onFailure: a,
        shouldForceMFA: true
      };
      ea(Zt);
      if ((await Fa()) && qt) {
        if (qt) {
          ea({
            keyExport: {
              appId: T.appId,
              appClientId: T.clientId,
              origin: v.apiUrl,
              walletToExport: n,
              primaryWallet: i,
              onSuccess: t,
              onFailure: a
            },
            connectWallet: l
          });
          Aa(pt.EMBEDDED_WALLET_CONNECTING_SCREEN);
        } else {
          a(Error("Must have a Privy wallet before exporting"));
        }
      } else {
        a(Error("Must have valid access token to enroll in MFA"));
      }
    }),
    promptMfa: Qa,
    async init(e) {
      switch (e) {
        case "sms":
          await v.initMfaSmsVerification();
          return;
        case "passkey":
          return await v.initMfaPasskeyVerification();
        case "totp":
          return;
        default:
          throw Error(`Unsupported MFA method: ${e}`);
      }
    },
    async submit(e, t) {
      switch (e) {
        case "totp":
        case "sms":
          if (typeof t != "string") {
            throw new be("Invalid MFA code");
          }
          ua.current?.resolve({
            mfaMethod: e,
            mfaCode: t,
            relyingParty: window.origin
          });
          await new Promise((e, t) => {
            ha.current = {
              resolve: e,
              reject: t
            };
          });
          break;
        case "passkey":
          if (typeof t == "string") {
            throw new be("Invalid authenticator response");
          }
          let a = await import("@simplewebauthn/browser");
          let r = lt(await a.startAuthentication(t));
          ua.current?.resolve({
            mfaMethod: e,
            mfaCode: r,
            relyingParty: window.origin
          });
          await new Promise((e, t) => {
            ha.current = {
              resolve: e,
              reject: t
            };
          });
          break;
        default:
          ua.current?.reject(new be("Unsupported MFA method"));
          throw new be(`Unsupported MFA method: ${e}`);
      }
    },
    cancel() {
      ua.current?.reject(new be("MFA canceled"));
    },
    async initEnrollmentWithSms(e) {
      let t = await Fa();
      if (!t || !qt) {
        throw Error("Must have valid access token to enroll in MFA");
      }
      await qt.initEnrollMfa({
        method: "sms",
        accessToken: t,
        phoneNumber: e.phoneNumber
      });
    },
    enrollInMfa: e => new Promise((t, a) => {
      if (!e) {
        rr.closePrivyModal();
        t();
        return;
      }
      if (Yt.mfa.noPromptOnMfaRequired) {
        console.warn("[Privy Warning] Triggering the 'showMfaEnrollmentModal' function when 'noPromptOnMfaRequired' is set to true is unexpected. If this is intentional, ensure that you are building custom UIs for MFA verification.");
      }
      ea({
        mfaEnrollmentFlow: {
          mfaMethods: Yt.mfa.methods,
          onSuccess: t,
          onFailure: a
        }
      });
      Aa(pt.MFA_ENROLLMENT_FLOW_SCREEN);
    }),
    async initEnrollmentWithTotp() {
      let e = await Fa();
      if (!e || !qt) {
        throw Error("Must have valid access token to enroll in MFA");
      }
      let t = await qt.initEnrollMfa({
        method: "totp",
        accessToken: e
      });
      return {
        secret: t.secret,
        authUrl: t.authUrl
      };
    },
    async submitEnrollmentWithSms(e) {
      let t = await Fa();
      if (!t || !qt) {
        throw Error("Must have valid access token to enroll in MFA");
      }
      await qt.submitEnrollMfa({
        method: "sms",
        accessToken: t,
        phoneNumber: e.phoneNumber,
        code: e.mfaCode
      });
      ie(await v.getAuthenticatedUser());
    },
    async submitEnrollmentWithTotp(e) {
      let t = await Fa();
      if (!t || !qt) {
        throw Error("Must have valid access token to enroll in MFA");
      }
      await qt.submitEnrollMfa({
        method: "totp",
        accessToken: t,
        code: e.mfaCode
      });
      ie(await v.getAuthenticatedUser());
    },
    async initEnrollmentWithPasskey() {},
    async submitEnrollmentWithPasskey({
      credentialIds: e
    }) {
      let t = await Fa();
      if (!t || !qt) {
        throw Error("Must have valid access token to enroll in MFA");
      }
      await qt.submitEnrollMfa({
        method: "passkey",
        accessToken: t,
        credentialIds: e
      });
      ie(await v.getAuthenticatedUser());
    },
    async unenroll(e) {
      let t = await Fa();
      if (!t || !qt) {
        throw Error("Must have valid access token to remove MFA");
      }
      if (e === "passkey") {
        await qt.submitEnrollMfa({
          method: "passkey",
          accessToken: t,
          credentialIds: []
        });
      } else {
        await qt.unenrollMfa({
          method: e,
          accessToken: t
        });
      }
      ie(await v.getAuthenticatedUser());
    },
    requestFarcasterSignerFromWarpcast: async () => {
      let e = await Fa();
      let t = re?.linkedAccounts.find(e => e.type === "wallet" && e.walletClientType === "privy");
      if (!e) {
        throw Error("Must have valid access token to connect with Farcaster");
      }
      if (!qt || !t) {
        throw Error("Must have an embedded wallet to use Farcaster signers");
      }
      if (!re?.farcaster?.fid) {
        throw Error("Must have Farcaster account to use Farcaster signers");
      }
      if (!(await rr.recoverPrimaryWallet())) {
        throw Error("Unable to connect to wallet");
      }
      let a = await qt.initFarcasterSigner({
        address: t.address,
        hdWalletIndex: null,
        accessToken: e,
        mfaCode: null,
        mfaMethod: null,
        relyingParty: window.origin
      });
      if (a.status === "approved") {
        ie((await v.getAuthenticatedUser()) || re || null);
      }
      ea({
        farcasterSigner: a
      });
      Aa(pt.AWAITING_FARCASTER_SIGNER);
    },
    getFarcasterSignerPublicKey: async () => {
      let e;
      let t = await Fa();
      let a = re?.linkedAccounts.find(e => e.type === "wallet" && e.walletClientType === "privy");
      if (!t) {
        throw Error("Must have valid access token to connect with Farcaster");
      }
      if (!qt || !a) {
        throw Error("Must have an embedded wallet to use Farcaster signers");
      }
      if (!re?.farcaster?.fid) {
        throw Error("Must have Farcaster account to use Farcaster signers");
      }
      if (!(await rr.recoverPrimaryWallet())) {
        throw Error("Unable to connect to wallet");
      }
      if (!re.farcaster?.signerPublicKey) {
        throw Error("Must have a Farcaster signer public key to sign");
      }
      e = re.farcaster.signerPublicKey.slice(2);
      return Uint8Array.from(e.match(/.{1,2}/g).map(e => parseInt(e, 16)));
    },
    signFarcasterMessage: async e => {
      let t = await Fa();
      let a = re?.linkedAccounts.find(e => e.type === "wallet" && e.walletClientType === "privy");
      if (!t) {
        throw Error("Must have valid access token to connect with Farcaster");
      }
      if (!qt || !a) {
        throw Error("Must have an embedded wallet to use Farcaster signers");
      }
      if (!re?.farcaster?.fid) {
        throw Error("Must have Farcaster account to use Farcaster signers");
      }
      if (!(await rr.recoverPrimaryWallet())) {
        throw Error("Unable to connect to wallet");
      }
      if (!re.farcaster?.signerPublicKey) {
        throw Error("Must have a Farcaster signer public key to sign");
      }
      let r = await import("@simplewebauthn/browser");
      let n = await qt.signFarcasterMessage({
        address: a.address,
        hdWalletIndex: null,
        accessToken: t,
        mfaCode: null,
        mfaMethod: null,
        payload: {
          hash: r.bufferToBase64URLString(e)
        },
        fid: BigInt(re.farcaster.fid),
        relyingParty: window.origin
      });
      return new Uint8Array(r.base64URLStringToBuffer(n.signature));
    },
    createGuestAccount: async () => {
      if (re && !re.isGuest) {
        throw Error("User cannot already be authenticated to create a guest account");
      }
      if (re?.isGuest) {
        return re;
      } else {
        return rr.loginWithGuestAccountFlow();
      }
    },
    signMessageWithCrossAppWallet(e, {
      address: t
    }) {
      let a = re?.linkedAccounts.some(e => e.type === "cross_app" && e.smartWallets.some(e => e.address === t));
      return Ge({
        user: re,
        client: v,
        address: t,
        requesterAppId: Yt.id,
        request: {
          method: a ? "privy_signSmartWalletMessage" : "personal_sign",
          params: [e, t]
        },
        reconnect: tr
      });
    },
    signTypedDataWithCrossAppWallet(e, {
      address: t
    }) {
      let a = re?.linkedAccounts.some(e => e.type === "cross_app" && e.smartWallets.some(e => e.address === t));
      let r = te(e);
      return Ge({
        user: re,
        client: v,
        address: t,
        requesterAppId: Yt.id,
        request: {
          method: a ? "privy_signSmartWalletTypedData" : "eth_signTypedData_v4",
          params: [t, r]
        },
        reconnect: tr
      });
    },
    sendTransactionWithCrossAppWallet(e, {
      address: t
    }) {
      let a = re?.linkedAccounts.some(e => e.type === "cross_app" && e.smartWallets.some(e => e.address === t));
      return Ge({
        user: re,
        client: v,
        address: t,
        requesterAppId: Yt.id,
        request: {
          method: a ? "privy_sendSmartWalletTx" : "eth_sendTransaction",
          params: [e]
        },
        reconnect: tr
      });
    },
    isModalOpen: x,
    mfaMethods: Yt.mfa.methods
  };
  Ua = ar.signMessage;
  Oa = ar.signTypedData;
  Ra = async (e, t) => await Ya({
    transaction: e,
    ...t,
    signOnly: false
  });
  Sa = async (e, t) => ({
    signature: (await Ya({
      transaction: e,
      ...t,
      signOnly: true
    })).hash
  });
  let rr = {
    setAuthenticated: G,
    setUser: ie,
    isNewUserThisSession: ct,
    pendingTransaction: null,
    walletConnectionStatus: Dt,
    connectors: v.connectors?.walletConnectors ?? [],
    solanaWallets: ue,
    rpcConfig: Yt.rpcConfig,
    chains: Yt.chains,
    appId: T.appId,
    showFiatPrices: Yt.embeddedWallets.priceDisplay.primary !== "native-token",
    clientAnalyticsId: v.clientAnalyticsId,
    customAuthStatus: ca,
    hideWalletUIs: fa,
    emailOtpState: xt,
    setEmailOtpState: jt,
    smsOtpState: Bt,
    setSmsOtpState: Vt,
    oAuthState: zt,
    setOAuthState: Gt,
    siweState: Ht,
    setSiweState: Kt,
    isHeadlessOAuthLoading: Rt,
    nativeTokenSymbolForChainId: e => Yt.chains.find(t => t.id === Number(e))?.nativeCurrency.symbol,
    initializeWalletProxy: async e => {
      if (qt) {
        return qt;
      }
      let t = new Promise(e => {
        na(() => t => e(t));
      });
      let a = new Promise(t => setTimeout(() => t(null), e));
      let r = await Promise.race([t, a]);
      na(null);
      return r;
    },
    getAuthFlow: () => v.authFlow,
    getAuthMeta: () => v.authFlow?.meta,
    client: v,
    closePrivyModal: async (e = {
      shouldCallAuthOnSuccess: true,
      isSuccess: false
    }) => {
      let t;
      let a = B && z && re;
      if (a && ya.current) {
        t = Ja(re);
      }
      if (ga.current === "login") {
        if (e.shouldCallAuthOnSuccess && a && ya.current) {
          At(pa, "login", "onComplete", {
            user: re,
            isNewUser: ct,
            wasAlreadyAuthenticated: false,
            loginMethod: ya.current,
            loginAccount: t ?? null
          });
        } else {
          At(pa, "login", "onError", Se.USER_EXITED_AUTH_FLOW);
        }
      } else if (ga.current === "link" && t) {
        if (e.isSuccess && a && ya.current) {
          At(pa, "linkAccount", "onSuccess", {
            user: re,
            linkMethod: ya.current,
            linkedAccount: t
          });
        } else if (ya.current) {
          At(pa, "linkAccount", "onError", Se.USER_EXITED_LINK_FLOW, {
            linkMethod: ya.current
          });
        }
      } else if (ga.current === "update" && t) {
        if (e.isSuccess && a && ya.current) {
          At(pa, "update", "onSuccess", {
            user: re,
            updateMethod: ya.current,
            updatedAccount: t
          });
        } else if (ya.current) {
          At(pa, "update", "onError", Se.USER_EXITED_UPDATE_FLOW, {
            linkMethod: ya.current
          });
        }
      }
      let r = Ot && Qe.includes(Ot);
      let n = Ot === pt.ERROR_SCREEN && Zt.errorModalData && Qe.includes(Zt.errorModalData.previousScreen);
      if ((r || n) && Zt.funding) {
        let e;
        let t = Je[Ot] ?? null;
        if (Zt.funding.chainType === "solana") {
          let a = I(ut);
          if (!a) {
            console.warn("Unable to load solana plugin, skipping balance");
            return;
          }
          try {
            e = BigInt(await a.getBalance({
              address: Zt.funding.address,
              cluster: Zt.funding.cluster
            }));
          } catch {
            console.error("Unable to pull wallet balance");
          }
          At(pa, "fundSolanaWallet", "onUserExited", {
            address: Zt.funding.address,
            cluster: Zt.funding.cluster,
            fundingMethod: t,
            balance: e
          });
        } else {
          let a = yt(Zt.funding.chain.id, Yt.chains, Yt.rpcConfig, {
            appId: T.appId
          });
          try {
            e = await a.getBalance({
              address: Zt.funding.address
            });
          } catch {
            console.error("Unable to pull wallet balance");
          }
          At(pa, "fundWallet", "onUserExited", {
            address: Zt.funding.address,
            chain: Zt.funding.chain,
            fundingMethod: t,
            balance: e
          });
        }
      }
      ea({
        ...Zt,
        externalConnectWallet: {
          suggestedAddress: undefined
        }
      });
      ga.current = null;
      ya.current = null;
      Ut(false);
      j(false);
      setTimeout(() => {
        v.authFlow = undefined;
      }, 200);
      v.createAnalyticsEvent({
        eventName: "modal_closed"
      });
    },
    solanaSignMessage: ({
      message: e,
      address: t
    }) => new Promise(async (a, r) => {
      if (!z || !re) {
        At(pa, "signMessage", "onError", Se.MUST_BE_AUTHENTICATED);
        r(Error("User must be authenticated before signing with a Privy wallet"));
        return;
      }
      let n = t ?? R(re)?.address;
      if (!n) {
        throw new be("User must have an embedded wallet to sign a message.");
      }
      let {
        signingWallet: i,
        rootWallet: o
      } = D(re, n);
      if (!i || !o) {
        At(pa, "signMessage", "onError", Se.EMBEDDED_WALLET_NOT_FOUND);
        r(Error("Must have a Privy wallet before signing"));
        return;
      }
      if (typeof e != "string" || e.length < 1) {
        At(pa, "signMessage", "onError", Se.INVALID_MESSAGE);
        r(Error("Message must be a non-empty string"));
        return;
      }
      Jt(true);
      let s = async () => {
        if (!z) {
          throw Error("User must be authenticated before signing with a Privy wallet");
        }
        let t = await v.getAccessToken();
        if (!t) {
          throw Error("User must be authenticated to use their embedded wallet.");
        }
        let a = rr.walletProxy ?? (await rr.initializeWalletProxy(15000));
        if (!a) {
          throw Error("Failed to initialize embedded wallet proxy.");
        }
        if (!(await rr.recoverPrimaryWallet())) {
          throw Error("Unable to connect to wallet");
        }
        if (!o) {
          throw Error("No root wallet for signing wallet found");
        }
        let {
          entropyId: r,
          entropyIdVerifier: n
        } = C(o);
        let {
          response: s
        } = await a.rpc({
          accessToken: t,
          entropyId: r,
          entropyIdVerifier: n,
          chainType: "solana",
          hdWalletIndex: i.walletIndex ?? 0,
          request: {
            method: "signMessage",
            params: {
              message: e
            }
          }
        });
        return s.data.signature;
      };
      if (Ea({
        showWalletUIs: undefined
      })) {
        try {
          let e = await s();
          a({
            signature: e
          });
        } catch (e) {
          r(e);
        }
      } else {
        let {
          entropyId: t,
          entropyIdVerifier: n
        } = C(o);
        ea({
          signMessage: {
            method: "solana_signMessage",
            data: e,
            confirmAndSign: s,
            onSuccess: e => {
              a({
                signature: e
              });
            },
            onFailure: e => {
              r(e);
            },
            uiOptions: {}
          },
          connectWallet: {
            entropyId: t,
            entropyIdVerifier: n,
            onCompleteNavigateTo: pt.EMBEDDED_WALLET_SIGN_REQUEST_SCREEN,
            onFailure: e => {
              At(pa, "signMessage", "onError", Se.UNKNOWN_CONNECT_WALLET_ERROR);
              r(e);
            }
          }
        });
        _a(pt.EMBEDDED_WALLET_CONNECTING_SCREEN);
      }
    }),
    sendSolanaTransaction: async ({
      transaction: e,
      connection: t,
      uiOptions: a,
      transactionOptions: r,
      fundWalletConfig: n,
      address: i
    }) => {
      let o = i ? Ue.find(e => e.address === i) : Ue.slice().sort((e, t) => (e.walletIndex ?? 0) - (t.walletIndex ?? 0))[0];
      if (!o) {
        At(pa, "sendSolanaTransaction", "onError", Se.EMBEDDED_WALLET_NOT_FOUND);
        throw new be("Embedded wallet not found", Se.EMBEDDED_WALLET_NOT_FOUND);
      }
      return await Xa({
        transaction: e,
        connection: t,
        transactionOptions: r,
        uiOptions: a,
        fundWalletConfig: n,
        wallet: o
      });
    },
    openPrivyModal: Aa,
    connectWallet: ka,
    initLoginWithWallet: async (e, t, a) => {
      if (ge(e)) {
        ya.current = "siwe";
        Wa(e, t, a);
      } else {
        ya.current = "siws";
        La(e, t, a);
      }
    },
    loginWithWallet: async () => {
      let e;
      let t;
      let a;
      if (!B) {
        throw new Re();
      }
      if (v.authFlow instanceof m) {
        e = "siwe";
      } else if (v.authFlow instanceof y) {
        e = "siws";
      }
      if (!e) {
        throw new be("Must initialize SIWE/SIWS flow first.");
      }
      if ((await v.getAccessToken()) !== null) {
        try {
          ({
            user: t
          } = await v.link());
          ya.current = e;
        } catch (t) {
          At(pa, "linkAccount", "onError", t.privyErrorCode || Se.FAILED_TO_LINK_ACCOUNT, {
            linkMethod: e
          });
          throw t;
        }
      } else {
        try {
          ({
            user: t,
            isNewUser: a
          } = await v.authenticate());
          ya.current = e;
        } catch (e) {
          At(pa, "login", "onError", e.privyErrorCode || Se.GENERIC_CONNECT_WALLET_ERROR);
          throw e;
        }
      }
      ie(t || re || null);
      Ut(a || false);
      G(true);
    },
    delegateWallet: async ({
      address: e,
      chainType: t,
      showDelegationUIs: a
    }) => new Promise(async (r, n) => {
      let i = await Fa();
      if (!z || !re || !i) {
        throw new be("User must be authenticated and have an embedded wallet to delegate actions.");
      }
      if (t !== "solana" && t !== "ethereum") {
        throw new be("Only Solana and Ethereum embedded wallets are supported for delegation and revocation.");
      }
      let o = rr.walletProxy ?? (await rr.initializeWalletProxy(15000));
      if (!o) {
        throw new be("Wallet proxy not initialized.");
      }
      if (Te({
        address: e,
        chainType: t,
        user: re
      })) {
        return r();
      }
      let s = ve({
        address: e,
        user: re
      });
      let l = Ce({
        address: e,
        user: re
      });
      let c = async () => {
        await o.createDelegatedAction({
          accessToken: i,
          rootWallet: l,
          delegatedWallets: [s]
        });
        await rr.refreshUser();
      };
      if (!a) {
        try {
          await c();
          r();
        } catch (e) {
          n(e);
        }
        return;
      }
      await rr.recoverPrimaryWallet();
      ea({
        delegatedActions: {
          consent: {
            address: e,
            onDelegate: c,
            onSuccess: async () => {
              r();
            },
            onError: async e => {
              n(e);
            }
          }
        }
      });
      Aa(pt.EMBEDDED_WALLET_DELEGATED_ACTIONS_CONSENT_SCREEN);
    }),
    revokeDelegatedWallets: async ({
      showDelegationUIs: e
    }) => new Promise(async (t, a) => {
      if (!z || !re) {
        throw new be("User must be authenticated and have an embedded wallet to revoke a delegated wallet.");
      }
      if (Ie(re).length === 0) {
        throw new be("User has no delegated wallets to revoke.");
      }
      let r = async () => {
        await v.revokeDelegatedWallet();
        await rr.refreshUser();
      };
      if (e) {
        ea({
          delegatedActions: {
            revoke: {
              onRevoke: r,
              onSuccess: async () => {
                t();
              },
              onError: async e => {
                a(e);
              }
            }
          }
        });
        Aa(pt.EMBEDDED_WALLET_DELEGATED_ACTIONS_REVOKE_SCREEN);
      } else {
        try {
          await r();
          t();
        } catch (e) {
          a(e);
        }
      }
    }),
    initLoginWithFarcaster: async (e, t) => {
      let a = new h(e, t);
      v.startAuthFlow(a);
      try {
        ya.current = "farcaster";
        await a.initializeFarcasterConnect();
      } catch (e) {
        if (ga.current === "login") {
          At(pa, "login", "onError", e.privyErrorCode || Se.UNKNOWN_AUTH_ERROR);
        } else if (ga.current === "link") {
          At(pa, "linkAccount", "onError", e.privyErrorCode || Se.UNKNOWN_AUTH_ERROR, {
            linkMethod: "farcaster"
          });
        }
        throw e;
      }
    },
    loginWithFarcaster: async () => {
      let e;
      let t;
      if (!B) {
        throw new Re();
      }
      if (!(v.authFlow instanceof h)) {
        throw new be("Must initialize Farcaster flow first.");
      }
      if ((await v.getAccessToken()) !== null) {
        try {
          ({
            user: e
          } = await v.link());
          ya.current = "farcaster";
        } catch (e) {
          At(pa, "linkAccount", "onError", e.privyErrorCode || Se.FAILED_TO_LINK_ACCOUNT, {
            linkMethod: "farcaster"
          });
          throw e;
        }
      } else {
        try {
          ({
            user: e,
            isNewUser: t
          } = await v.authenticate());
          ya.current = "farcaster";
        } catch (e) {
          At(pa, "login", "onError", e.privyErrorCode || Se.UNKNOWN_AUTH_ERROR);
          throw e;
        }
      }
      ie(e || null);
      Ut(t || false);
      G(true);
    },
    async loginWithGuestAccountFlow() {
      let e = new p(this.appId);
      v.startAuthFlow(e);
      try {
        ga.current = "login";
        ya.current = "guest";
        let {
          user: e,
          isNewUser: t
        } = await v.authenticate();
        t = t || false;
        if (!e) {
          throw new be("Unable to authenticate guest account");
        }
        if (S(e, Yt.embeddedWallets.createOnLogin)) {
          try {
            await Ka(e, 15000);
            e = await rr.refreshUser();
          } catch (t) {
            ie(e);
            console.warn("Unable to create embedded wallet for guest account");
          }
        } else {
          ie(e);
        }
        Ut(t);
        G(true);
        At(pa, "login", "onComplete", {
          user: e,
          isNewUser: t,
          wasAlreadyAuthenticated: false,
          loginMethod: "guest",
          loginAccount: null
        });
        return e;
      } catch (e) {
        At(pa, "login", "onError", e.privyErrorCode || Se.UNKNOWN_AUTH_ERROR);
        throw e;
      }
    },
    async crossAppAuthFlow({
      appId: e,
      popup: t,
      action: a
    }) {
      let r = `privy:${e}`;
      ya.current = r;
      let {
        url: n,
        stateCode: i,
        codeVerifier: o
      } = await Ve({
        api: v.api,
        appId: e
      });
      if (!n) {
        v.createAnalyticsEvent({
          eventName: "cross_app_auth_error",
          payload: {
            error: "Unable to open cross-app auth popup",
            appId: e
          }
        });
        throw new be("No authorization URL returned for cross-app auth.");
      }
      try {
        let s = await ze({
          url: n,
          popup: t,
          provider: r
        });
        let l = s.stateCode;
        let c = s.authorizationCode;
        if (l !== i) {
          v.createAnalyticsEvent({
            eventName: "possible_phishing_attempt",
            payload: {
              provider: r,
              storedStateCode: i ?? "",
              returnedStateCode: l ?? ""
            }
          });
          throw new be("Unexpected auth flow. This may be a phishing attempt.", undefined, Se.OAUTH_UNEXPECTED);
        }
        let d = await He({
          appId: e,
          codeVerifier: o,
          stateCode: l,
          authorizationCode: c,
          action: a,
          client: v
        });
        if (d) {
          v.storeProviderAccessToken(e, d);
        }
        let u = await rr.refreshUser();
        if (!u) {
          throw new be("Unable to update user");
        }
        v.createAnalyticsEvent({
          eventName: "cross_app_auth_completed",
          payload: {
            providerAppId: e
          }
        });
        return u;
      } catch (e) {
        v.createAnalyticsEvent({
          eventName: "cross_app_auth_error",
          payload: {
            error: e.toString(),
            provider: r
          }
        });
        throw e;
      }
    },
    async initLoginWithOAuth(e, t, a) {
      ya.current = e;
      if (!ee()) {
        _a(pt.IN_APP_BROWSER_LOGIN_NOT_POSSIBLE);
        return;
      }
      if (e === "google" && et(window.navigator.userAgent)) {
        _a(pt.IN_APP_BROWSER_LOGIN_NOT_POSSIBLE);
        return;
      }
      if (e === "twitter" && window.opener) {
        window.opener.postMessage({
          type: xe
        }, "*");
      }
      Z.del($);
      Z.del(Y);
      let r = new bt({
        provider: e,
        disableSignup: !!a,
        withPrivyUi: true
      });
      if (t) {
        r.addCaptchaToken(t);
      }
      v.startAuthFlow(r);
      let n = await v.authFlow.getAuthorizationUrl();
      if (n && n.url) {
        if (e === "twitter" && s) {
          n.url = n.url.replace("x.com", "twitter.com");
        }
        window.location.assign(n.url);
      }
    },
    async initLoginWithTelegram(e, t) {
      if (!B) {
        throw new Re();
      }
      ya.current = "telegram";
      let a = new E(e, t);
      v.startAuthFlow(a);
      a.meta.telegramWebAppData = undefined;
      a.meta.telegramAuthResult = await new Promise((e, t) => Yt.loginConfig.telegramAuthConfiguration ? window.Telegram ? void window.Telegram.Login.auth({
        bot_id: Yt.loginConfig.telegramAuthConfiguration.botId,
        request_access: true
      }, a => a ? e(a) : t(new be("Telegram auth failed or was canceled by the client"))) : t(new be("Telegram was not initialized")) : t(new be("Telegram Auth configuration is not loaded")));
    },
    async loginWithTelegram(e) {
      let t;
      let a;
      if (!(v.authFlow instanceof E)) {
        throw new be("Must initialize Telegram flow before calling loginWithTelegram");
      }
      v.authFlow.meta.captchaToken ||= e;
      if (ga.current === "login") {
        try {
          let e = await v.authenticate();
          t = e.user;
          a = e.isNewUser;
          ya.current = "telegram";
        } catch (e) {
          At(pa, "login", "onError", e.privyErrorCode || Se.UNKNOWN_AUTH_ERROR);
          throw e;
        }
      } else {
        if (ga.current !== "link") {
          throw new be("Unknown auth intent");
        }
        try {
          t = (await v.link()).user;
          ya.current = "telegram";
        } catch (e) {
          At(pa, "linkAccount", "onError", e.privyErrorCode || Se.FAILED_TO_LINK_ACCOUNT, {
            linkMethod: "telegram"
          });
          throw e;
        }
      }
      ie(t);
      Ut(a || false);
      G(true);
    },
    async recoveryOAuthFlow(e, t, a) {
      let r;
      let n;
      function i(t) {
        if (!t) {
          v.createAnalyticsEvent({
            eventName: "recovery_oauth_error",
            payload: {
              error: "Unable to open recovery OAuth popup",
              provider: e
            }
          });
          throw new be("Recovery OAuth failed");
        }
      }
      switch (e) {
        case "google-drive":
          {
            let t;
            let o;
            let {
              url: s,
              codeVerifier: l,
              stateCode: c
            } = await qe({
              api: ba.api,
              provider: e
            });
            i(s);
            try {
              let r = await at({
                url: s,
                popup: a,
                provider: e
              });
              t = r.stateCode;
              o = r.authorizationCode;
              if (t !== c) {
                v.createAnalyticsEvent({
                  eventName: "possible_phishing_attempt",
                  payload: {
                    provider: e,
                    storedStateCode: c ?? "",
                    returnedStateCode: t ?? ""
                  }
                });
                throw new be("Unexpected auth flow. This may be a phishing attempt.", undefined, Se.OAUTH_UNEXPECTED);
              }
            } catch (t) {
              v.createAnalyticsEvent({
                eventName: "recovery_oauth_error",
                payload: {
                  error: t.toString(),
                  provider: e
                }
              });
              throw new be("Recovery OAuth failed");
            }
            [r, n] = await Promise.all([Fa(), $e({
              api: ba.api,
              provider: e,
              codeVerifier: l,
              stateCode: t,
              authorizationCode: o
            })]);
            break;
          }
        case "icloud":
          {
            let {
              url: t
            } = await qe({
              api: ba.api,
              provider: e
            });
            i(t);
            let {
              ckWebAuthToken: o
            } = await at({
              url: t,
              popup: a,
              provider: e
            });
            n = o;
            r = await Fa();
          }
      }
      if (!qt) {
        throw new be("Cannot connect to wallet proxy");
      }
      if (!r) {
        throw new be("Unable to authorize user");
      }
      switch (t) {
        case "recover":
          {
            let t = Zt.recoverWallet?.entropyId;
            let a = Zt.recoverWallet?.entropyIdVerifier;
            if (!t || !a) {
              throw new be("Recovery OAuth failed");
            }
            v.createAnalyticsEvent({
              eventName: "embedded_wallet_recovery_started",
              payload: {
                walletAddress: t,
                recoveryMethod: e
              }
            });
            await qt.recover({
              accessToken: r,
              entropyId: t,
              entropyIdVerifier: a,
              recoveryAccessToken: n
            });
            v.createAnalyticsEvent({
              eventName: "embedded_wallet_recovery_completed",
              payload: {
                walletAddress: t,
                recoveryMethod: e
              }
            });
            break;
          }
        case "create-wallet":
          {
            v.createAnalyticsEvent({
              eventName: "embedded_wallet_creation_started"
            });
            await qt.create({
              accessToken: r,
              recoveryAccessToken: n,
              recoveryMethod: e
            });
            let t = b(await rr.refreshUser());
            if (!t) {
              At(pa, "createWallet", "onError", Se.UNKNOWN_EMBEDDED_WALLET_ERROR);
              throw Error("Failed to create wallet");
            }
            v.createAnalyticsEvent({
              eventName: "embedded_wallet_creation_completed",
              payload: {
                walletAddress: t.address
              }
            });
            At(pa, "createWallet", "onSuccess", {
              wallet: t
            });
            break;
          }
        case "set-recovery":
          {
            let t = N(re);
            if (!t) {
              At(pa, "setWalletRecovery", "onError", Se.EMBEDDED_WALLET_NOT_FOUND);
              throw Error("Embedded wallet not found");
            }
            v.createAnalyticsEvent({
              eventName: "embedded_wallet_set_recovery_started",
              payload: {
                walletAddress: t.address,
                existingRecoveryMethod: t.recoveryMethod,
                targetRecoveryMethod: e
              }
            });
            let {
              entropyId: a,
              entropyIdVerifier: i
            } = C(t);
            await qt.setRecovery({
              accessToken: r,
              entropyId: a,
              entropyIdVerifier: i,
              recoveryMethod: e,
              recoveryAccessToken: n
            });
            let o = N(await rr.refreshUser());
            if (!o) {
              At(pa, "createWallet", "onError", Se.UNKNOWN_EMBEDDED_WALLET_ERROR);
              throw Error("Failed to set recovery on wallet");
            }
            v.createAnalyticsEvent({
              eventName: "embedded_wallet_set_recovery_completed",
              payload: {
                walletAddress: t.address,
                existingRecoveryMethod: t.recoveryMethod,
                targetRecoveryMethod: e
              }
            });
            At(pa, "setWalletRecovery", "onSuccess", {
              method: e,
              wallet: o
            });
            break;
          }
        default:
          throw new be("Unsupported recovery action");
      }
    },
    async loginWithOAuth(e) {
      let t;
      let a;
      let r;
      if (!(v.authFlow instanceof bt)) {
        throw new be("Must initialize OAuth flow before calling loginWithOAuth");
      }
      let n = Z.get(X);
      let i = v.authFlow.meta.stateCode;
      if (n !== i) {
        v.createAnalyticsEvent({
          eventName: "possible_phishing_attempt",
          payload: {
            provider: e,
            storedStateCode: n ?? "",
            returnedStateCode: i ?? ""
          }
        });
        throw new be("Unexpected auth flow. This may be a phishing attempt.", undefined, Se.OAUTH_UNEXPECTED);
      }
      if ((await v.getAccessToken()) !== null) {
        try {
          let a = await v.link();
          t = a.user;
          r = a.oAuthTokens;
          ya.current = e;
        } catch (t) {
          At(pa, "linkAccount", "onError", t.privyErrorCode || Se.FAILED_TO_LINK_ACCOUNT, {
            linkMethod: e
          });
          throw t;
        }
      } else {
        try {
          let n = await v.authenticate();
          t = n.user;
          a = n.isNewUser;
          r = n.oAuthTokens;
          ya.current = e;
        } catch (t) {
          if (ga.current === "login") {
            At(pa, "login", "onError", t.privyErrorCode || Se.UNKNOWN_AUTH_ERROR);
          } else if (ga.current === "link") {
            At(pa, "linkAccount", "onError", t.privyErrorCode || Se.FAILED_TO_LINK_ACCOUNT, {
              linkMethod: e
            });
          }
          throw t;
        }
      }
      ie(t);
      Ut(a || false);
      G(true);
      if (r && t) {
        At(pa, "oAuthAuthorization", "onOAuthTokenGrant", {
          oAuthTokens: r,
          user: t
        });
      }
      return r;
    },
    passkeyAuthState: Lt,
    setPasskeyAuthState: Ft,
    async initSignupWithPasskey({
      captchaToken: e,
      withPrivyUi: t
    }) {
      let a = new w({
        captchaToken: e,
        setPasskeyAuthState: Ft
      });
      v.startAuthFlow(a);
      ga.current = "login";
      try {
        ya.current = "passkey";
        Ft({
          status: "generating-challenge"
        });
        await a.initRegisterFlow(t);
        Ft({
          status: "awaiting-passkey"
        });
      } catch (e) {
        Ft({
          status: "error",
          error: e
        });
        At(pa, "login", "onError", e.privyErrorCode || Se.UNKNOWN_AUTH_ERROR);
        throw e;
      }
    },
    async signupWithPasskey() {
      let e;
      let t;
      if (!B) {
        throw new Re();
      }
      if (!(v.authFlow instanceof w)) {
        throw new be("Must initialize Passkey flow first.");
      }
      if (ya.current !== "passkey") {
        let e = new be("Must init login with Passkey flow first.");
        Ft({
          status: "error",
          error: e
        });
        throw e;
      }
      let a = await Fa();
      try {
        ya.current = "passkey";
        Ft({
          status: "awaiting-passkey"
        });
        ({
          user: e,
          isNewUser: t
        } = await v.authenticate());
      } catch (e) {
        Ft({
          status: "error",
          error: e
        });
        At(pa, "login", "onError", e.privyErrorCode || Se.UNKNOWN_AUTH_ERROR);
        throw e;
      }
      ie(e);
      Ut(t || false);
      G(true);
      Ft({
        status: "done"
      });
      let r = e?.linkedAccounts.find(({
        type: e
      }) => e === "passkey") || null;
      return {
        user: e,
        isNewUser: t || false,
        wasAlreadyAuthenticated: !!a,
        loginAccount: r
      };
    },
    async initLoginWithPasskey({
      captchaToken: e,
      withPrivyUi: t
    }) {
      let a = new w({
        captchaToken: e,
        setPasskeyAuthState: Ft
      });
      v.startAuthFlow(a);
      ga.current = "login";
      try {
        ya.current = "passkey";
        Ft({
          status: "generating-challenge"
        });
        await a.initAuthenticationFlow(t);
        Ft({
          status: "awaiting-passkey"
        });
      } catch (e) {
        Ft({
          status: "error",
          error: e
        });
        At(pa, "login", "onError", e.privyErrorCode || Se.UNKNOWN_AUTH_ERROR);
        throw e;
      }
    },
    async loginWithPasskey() {
      let e;
      let t;
      if (!B) {
        throw new Re();
      }
      if (!(v.authFlow instanceof w)) {
        throw new be("Must initialize Passkey flow first.");
      }
      if (ya.current !== "passkey") {
        let e = new be("Must init login with Passkey flow first.");
        Ft({
          status: "error",
          error: e
        });
        throw e;
      }
      let a = await Fa();
      try {
        ya.current = "passkey";
        Ft({
          status: "awaiting-passkey"
        });
        ({
          user: e,
          isNewUser: t
        } = await v.authenticate());
      } catch (e) {
        Ft({
          status: "error",
          error: e
        });
        At(pa, "login", "onError", e.privyErrorCode || Se.UNKNOWN_AUTH_ERROR);
        throw e;
      }
      ie(e);
      Ut(t || false);
      G(true);
      Ft({
        status: "done"
      });
      let r = e?.linkedAccounts.find(({
        type: e
      }) => e === "passkey") || null;
      return {
        user: e,
        isNewUser: t || false,
        wasAlreadyAuthenticated: !!a,
        loginAccount: r
      };
    },
    async initLinkWithPasskey(e) {
      let t = new w({
        captchaToken: e
      });
      v.startAuthFlow(t);
      ga.current = "link";
      ya.current = "passkey";
      Ft({
        status: "generating-challenge"
      });
      try {
        await t.initLinkFlow();
        Ft({
          status: "awaiting-passkey"
        });
      } catch (e) {
        At(pa, "linkAccount", "onError", e.privyErrorCode || Se.UNKNOWN_AUTH_ERROR, {
          linkMethod: "passkey"
        });
        Ft({
          status: "error",
          error: e
        });
        throw e;
      }
    },
    async linkWithPasskey() {
      let e;
      if (!B) {
        throw new Re();
      }
      if (!(v.authFlow instanceof w)) {
        throw new be("Must initialize Passkey flow first.");
      }
      if (ya.current !== "passkey") {
        throw new be("Must init login with Passkey flow first.");
      }
      try {
        ya.current = "passkey";
        ({
          user: e
        } = await v.link());
      } catch (e) {
        At(pa, "linkAccount", "onError", e.privyErrorCode || Se.FAILED_TO_LINK_ACCOUNT, {
          linkMethod: "passkey"
        });
        throw e;
      }
      ie(e || re || null);
      Ft({
        status: "done"
      });
      return e;
    },
    async initLoginWithHeadlessOAuth(e, t, a) {
      if (!ee()) {
        throw Error("It looks like you're using an in-app browser.  To log in, please try again using an external browser.");
      }
      if (e === "google" && et(window.navigator.userAgent)) {
        throw Error("It looks like you're using an in-app browser.  To log in, please try again using an external browser.");
      }
      let r = new bt({
        provider: e,
        withPrivyUi: false,
        disableSignup: a ?? false
      });
      if (t) {
        r.addCaptchaToken(t);
      }
      Gt({
        status: "loading"
      });
      let n = await v.startAuthFlow(r).getAuthorizationUrl();
      if (n?.url) {
        window.location.assign(n.url);
      }
    },
    async loginWithHeadlessOAuth(e) {
      let t;
      let a;
      let r;
      Pt(true);
      Gt({
        status: "loading"
      });
      v.startAuthFlow(new bt(e));
      let n = Z.get(X);
      let i = e.stateCode;
      if (n !== i) {
        v.createAnalyticsEvent({
          eventName: "possible_phishing_attempt",
          payload: {
            provider: e.provider,
            storedStateCode: n ?? "",
            returnedStateCode: i ?? ""
          }
        });
        Pt(false);
        throw new be("Unexpected auth flow. This may be a phishing attempt.", undefined, Se.OAUTH_UNEXPECTED);
      }
      if ((await v.getAccessToken()) !== null) {
        try {
          ({
            user: t,
            oAuthTokens: r
          } = await v.link());
          ya.current = e.provider;
          let a = Ja(t);
          if (t && a) {
            At(pa, "linkAccount", "onSuccess", {
              user: t,
              linkMethod: ya.current,
              linkedAccount: a
            });
          }
        } catch (t) {
          Pt(false);
          At(pa, "linkAccount", "onError", t.privyErrorCode || Se.FAILED_TO_LINK_ACCOUNT, {
            linkMethod: e.provider
          });
          throw t;
        }
      } else {
        try {
          ({
            user: t,
            isNewUser: a,
            oAuthTokens: r
          } = await v.authenticate());
          ya.current = e.provider;
          let n = Ja(t);
          if (t && n && a !== undefined) {
            At(pa, "login", "onComplete", {
              user: t,
              isNewUser: a,
              wasAlreadyAuthenticated: false,
              loginMethod: ya.current,
              loginAccount: n
            });
          }
        } catch (e) {
          Pt(false);
          Gt({
            status: "error",
            error: e
          });
          At(pa, "login", "onError", e.privyErrorCode || Se.UNKNOWN_AUTH_ERROR);
          throw e;
        }
      }
      ie(t);
      Ut(a || false);
      G(true);
      Pt(false);
      Gt({
        status: "done"
      });
      if (r && t) {
        At(pa, "oAuthAuthorization", "onOAuthTokenGrant", {
          oAuthTokens: r,
          user: t
        });
      }
      return t ?? undefined;
    },
    initLoginWithEmail: async ({
      email: e,
      captchaToken: t,
      disableSignup: a,
      withPrivyUi: r
    }) => {
      let n = new u({
        email: e,
        captchaToken: t,
        disableSignup: a
      });
      v.startAuthFlow(n);
      try {
        ya.current = "email";
        jt({
          status: "sending-code"
        });
        await n.sendCodeEmail({
          withPrivyUi: r
        });
        jt({
          status: "awaiting-code-input"
        });
      } catch (e) {
        jt({
          status: "error",
          error: e
        });
        if (ga.current === "login") {
          At(pa, "login", "onError", e.privyErrorCode || Se.UNKNOWN_AUTH_ERROR);
        } else if (ga.current === "link") {
          At(pa, "linkAccount", "onError", e.privyErrorCode || Se.FAILED_TO_LINK_ACCOUNT, {
            linkMethod: "email"
          });
        }
        throw e;
      }
    },
    initUpdateEmail: async (e, t, a) => {
      let r = new d(e, t, a);
      v.startAuthFlow(r);
      try {
        await r.sendCodeEmail({
          withPrivyUi: true
        });
      } catch (e) {
        At(pa, "update", "onError", e.privyErrorCode || Se.UNKNOWN_AUTH_ERROR, {
          linkMethod: ya.current
        });
      }
    },
    initUpdatePhone: async (e, t, a) => {
      let r = new g(e, t, a);
      v.startAuthFlow(r);
      try {
        await r.sendSmsCode({
          withPrivyUi: true
        });
      } catch (e) {
        At(pa, "update", "onError", e.privyErrorCode || Se.UNKNOWN_AUTH_ERROR, {
          linkMethod: ya.current
        });
      }
    },
    initLoginWithSms: async ({
      phoneNumber: e,
      captchaToken: t,
      disableSignup: a,
      withPrivyUi: r
    }) => {
      Vt({
        status: "sending-code"
      });
      let n = new f({
        phoneNumber: e,
        captchaToken: t,
        disableSignup: a
      });
      v.startAuthFlow(n);
      try {
        ya.current = "sms";
        await n.sendSmsCode({
          withPrivyUi: r
        });
        Vt({
          status: "awaiting-code-input"
        });
      } catch (e) {
        Vt({
          status: "error",
          error: e
        });
        if (ga.current === "login") {
          At(pa, "login", "onError", e.privyErrorCode || Se.UNKNOWN_AUTH_ERROR);
        } else if (ga.current === "link") {
          At(pa, "linkAccount", "onError", e.privyErrorCode || Se.FAILED_TO_LINK_ACCOUNT, {
            linkMethod: "sms"
          });
        }
        throw e;
      }
    },
    resendEmailCode: async () => {
      await v.authFlow?.sendCodeEmail({
        withPrivyUi: true
      });
    },
    resendSmsCode: async () => {
      await v.authFlow?.sendSmsCode({
        withPrivyUi: true
      });
    },
    loginWithCode: async e => {
      let t;
      let a;
      function r(e) {
        if (v.authFlow instanceof u) {
          jt(e);
        } else if (v.authFlow instanceof f) {
          Vt(e);
        }
      }
      r({
        status: "submitting-code"
      });
      if (!B) {
        let e = new Re();
        r({
          status: "error",
          error: e
        });
        throw e;
      }
      if (v.authFlow instanceof u) {
        v.authFlow.meta.emailCode = e.trim();
      } else {
        if (!(v.authFlow instanceof f)) {
          let e = new be("Must initialize a passwordless code flow first");
          r({
            status: "error",
            error: e
          });
          throw e;
        }
        v.authFlow.meta.smsCode = e.trim();
      }
      let n = await Fa();
      if (ga.current === "link") {
        try {
          ({
            user: t
          } = await v.link());
        } catch (e) {
          r({
            status: "error",
            error: e
          });
          At(pa, "linkAccount", "onError", e.privyErrorCode || Se.FAILED_TO_LINK_ACCOUNT, {
            linkMethod: ya.current
          });
          throw e;
        }
      } else if (ga.current === "update") {
        try {
          ({
            user: t
          } = await v.link());
        } catch (e) {
          r({
            status: "error",
            error: e
          });
          At(pa, "update", "onError", e.privyErrorCode || Se.FAILED_TO_UPDATE_ACCOUNT, {
            linkMethod: ya.current
          });
          throw e;
        }
      } else {
        try {
          ({
            user: t,
            isNewUser: a
          } = await v.authenticate());
        } catch (e) {
          r({
            status: "error",
            error: e
          });
          At(pa, "login", "onError", e.privyErrorCode || Se.UNKNOWN_AUTH_ERROR);
          throw e;
        }
      }
      let i = t || re;
      ie(i || null);
      Ut(a || false);
      G(true);
      r({
        status: "done"
      });
      let o = null;
      if (v.authFlow instanceof u) {
        o = i?.linkedAccounts.find(({
          type: e
        }) => e === "email") || null;
      } else if (v.authFlow instanceof f) {
        o = i?.linkedAccounts.find(({
          type: e
        }) => e === "phone") || null;
      }
      return {
        user: i,
        isNewUser: a || false,
        wasAlreadyAuthenticated: !!n,
        linkedAccount: o
      };
    },
    generateSiweMessage: async ({
      address: e,
      chainId: t,
      captchaToken: a
    }) => {
      ga.current = "link";
      ya.current = "siwe";
      Kt({
        status: "generating-message"
      });
      let r = await v.generateSiweNonce({
        address: e,
        captchaToken: a
      });
      Kt({
        status: "awaiting-signature"
      });
      return rt({
        address: e,
        chainId: t.replace("eip155:", ""),
        nonce: r
      });
    },
    generateSiweMessageForSmartWallet: async ({
      address: e,
      chainId: t
    }) => {
      let a = await v.generateSiweNonce({
        address: e
      });
      return rt({
        address: e,
        chainId: t.replace("eip155:", ""),
        nonce: a
      });
    },
    linkSmartWallet: async ({
      message: e,
      signature: t,
      smartWalletType: a
    }) => {
      let r;
      r = await v.linkSmartWallet({
        message: e,
        signature: t,
        smartWalletType: a
      });
      ie((r = (await rr.refreshUser()) ?? r) || re || null);
    },
    linkWithSiwe: async ({
      message: e,
      signature: t,
      chainId: a,
      walletClientType: r,
      connectorType: n
    }) => {
      let i;
      ja("siwe");
      let o = null;
      try {
        Kt({
          status: "submitting-signature"
        });
        i = await v.linkWithSiwe({
          message: e,
          signature: t,
          chainId: a,
          walletClientType: r,
          connectorType: n
        });
        i = (await rr.refreshUser()) ?? i;
        Kt({
          status: "done"
        });
        if (o = Ja(i) || null) {
          At(pa, "linkAccount", "onSuccess", {
            user: i,
            linkMethod: "siwe",
            linkedAccount: o
          });
        }
      } catch (e) {
        At(pa, "linkAccount", "onError", e.privyErrorCode || Se.FAILED_TO_LINK_ACCOUNT, {
          linkMethod: "siwe"
        });
        ga.current = null;
        ya.current = null;
        Kt({
          status: "error",
          error: e
        });
        throw e;
      }
      let s = i || re;
      ie(s || null);
      ga.current = null;
      ya.current = null;
      return {
        user: s,
        linkedAccount: o
      };
    },
    refreshUser: async () => {
      let e = await v.getAuthenticatedUser();
      G(!!e);
      ie(e);
      return e;
    },
    walletProxy: qt,
    createAnalyticsEvent: ({
      eventName: e,
      payload: t,
      timestamp: a
    }) => v.createAnalyticsEvent({
      eventName: e,
      payload: t,
      timestamp: a
    }),
    acceptTerms: async () => {
      let e = await v.acceptTerms();
      ie(e);
      return e;
    },
    getUsdTokenPrice: e => v.getUsdTokenPrice(e),
    getUsdPriceForSol: () => v.getUsdPriceForSol(),
    getSplTokenMetadata: e => v.getSplTokenMetadata(e),
    recoverPrimaryWallet: async e => new Promise(async (t, a) => {
      let r = N(e?.user ?? re) || O(e?.user ?? re) || W(e?.user ?? re);
      let n = await Fa();
      if (!n || !qt || !r) {
        a(Error("Must have valid access token and Privy wallet to recover wallet"));
        return;
      }
      Jt(true);
      let {
        entropyId: i,
        entropyIdVerifier: o
      } = C(r);
      try {
        await qt.connect({
          accessToken: n,
          entropyId: i,
          entropyIdVerifier: o
        });
        t(true);
      } catch (e) {
        if (ke(e) && r.recoveryMethod === "privy") {
          v.createAnalyticsEvent({
            eventName: "embedded_wallet_pinless_recovery_started",
            payload: {
              walletAddress: r.address
            }
          });
          if (!(await qt.recover({
            entropyId: i,
            entropyIdVerifier: o,
            accessToken: n
          })).entropyId) {
            a(Error("Unable to recover wallet"));
          }
          v.createAnalyticsEvent({
            eventName: "embedded_wallet_recovery_completed",
            payload: {
              walletAddress: r.address
            }
          });
          t(true);
        } else if (ke(e) && r.recoveryMethod !== "privy") {
          ea({
            recoverWallet: {
              entropyId: i,
              entropyIdVerifier: o,
              onFailure: a,
              onSuccess: () => t(true)
            },
            recoveryOAuthStatus: {
              provider: r.recoveryMethod,
              action: "recover"
            }
          });
          Aa(Ye(r.recoveryMethod));
        } else {
          a(e);
        }
      }
    }),
    embeddedSolanaWallets: Ue,
    createEmbeddedSolanaWallet: async e => {
      if (e && "target" in e) {
        e = undefined;
      }
      let t = await rr.refreshUser();
      if (!z || !t) {
        At(pa, "createWallet", "onError", Se.MUST_BE_AUTHENTICATED);
        throw Error("User must be authenticated before creating a Privy wallet");
      }
      return (async (e, t, a) => {
        let r = b(e);
        let n = R(e);
        let i = a && "createAdditional" in a && a.createAdditional;
        let o = a && "walletIndex" in a ? a.walletIndex : undefined;
        let s = (L(e)?.walletIndex ?? -1) + 1;
        if (n && !i && typeof o != "number") {
          At(pa, "createWallet", "onError", Se.EMBEDDED_WALLET_ALREADY_EXISTS);
          throw Error("User already has an embedded wallet.");
        }
        if (typeof o == "number" && o < 0) {
          At(pa, "createWallet", "onError", Se.EMBEDDED_WALLET_CREATE_ERROR);
          throw Error(`A negative walletIndex (${o}) is invalid.`);
        }
        let [l, c] = await Promise.all([rr.initializeWalletProxy(t), Fa()]);
        if (!l || !c) {
          At(pa, "createWallet", "onError", Se.UNKNOWN_EMBEDDED_WALLET_ERROR);
          throw Error("Failed to connect to wallet proxy");
        }
        return await qa({
          user: e,
          wp: l,
          accessToken: c,
          walletIndex: o ?? s,
          ethereumWallet: r
        });
      })(t, 15000, e);
    },
    exportSolanaWallet: e => new Promise(async (t, a) => {
      if (!z || !re) {
        a(Error("User must be authenticated before exporting their Privy wallet"));
        return;
      }
      let r = e?.address ?? R(re)?.address;
      if (!r) {
        a(Error("User does not have an HD Solana wallet."));
        return;
      }
      let {
        signingWallet: n,
        rootWallet: i
      } = D(re, r);
      if (!n || !i) {
        a(Error("Must have a Privy wallet before exporting"));
        return;
      }
      Jt(true);
      if (!(await Fa()) || !qt) {
        a(Error("Must have valid access token to enroll in MFA"));
        return;
      }
      if (!qt) {
        a(Error("Must have a Privy wallet before exporting"));
        return;
      }
      let {
        entropyId: o,
        entropyIdVerifier: s
      } = C(i);
      ea({
        connectWallet: {
          entropyId: o,
          entropyIdVerifier: s,
          onCompleteNavigateTo: pt.EMBEDDED_WALLET_KEY_EXPORT_SCREEN,
          onFailure: a,
          shouldForceMFA: true
        },
        keyExport: {
          appId: T.appId,
          appClientId: T.clientId,
          origin: v.apiUrl,
          walletToExport: n,
          primaryWallet: i,
          onSuccess: t,
          onFailure: a
        }
      });
      Aa(pt.EMBEDDED_WALLET_CONNECTING_SCREEN);
    }),
    setReadyToTrue: e => {
      H(true);
      ta?.(e);
    },
    updateWallets: () => Ha(),
    fundWallet: async (e, t) => {
      let a = pt.FUNDING_METHOD_SELECTION_SCREEN;
      ea({
        funding: Wt({
          address: e,
          appConfig: Yt,
          fundWalletConfig: t,
          methodScreen: a
        })
      });
      Aa(a);
    },
    openModal: Aa,
    requestFarcasterSignerStatus: async e => {
      let t = await Fa();
      let a = re?.linkedAccounts.find(e => e.type === "wallet" && e.walletClientType === "privy");
      if (!t) {
        throw Error("Must have valid access token to connect with Farcaster");
      }
      if (!qt || !a) {
        throw Error("Must have an embedded wallet to use Farcaster signers");
      }
      if (!re?.farcaster?.fid) {
        throw Error("Must have Farcaster account to use Farcaster signers");
      }
      let r = await v.requestFarcasterSignerStatus(e);
      if (r.status === "approved") {
        ie((await v.getAuthenticatedUser()) || re || null);
      }
      return r;
    },
    connectCoinbaseSmartWallet: async () => {
      Yt.externalWallets.coinbaseWallet.connectionOptions = "smartWalletOnly";
      let e = v.connectors?.findWalletConnector("coinbase_wallet", "coinbase_smart_wallet") || v.connectors?.findWalletConnector("coinbase_wallet", "coinbase_wallet");
      if (e) {
        e.updateConnectionPreference("smartWalletOnly");
        return ka(e);
      }
      await Ia("coinbase_wallet", "coinbase_smart_wallet");
    },
    initiateAccountTransfer: async ({
      nonce: e,
      account: t,
      accountType: a,
      externalWalletMetadata: r,
      telegramAuthResult: n,
      telegramWebAppData: i,
      farcasterEmbeddedAddress: o,
      oAuthUserInfo: s
    }) => {
      let l = await v.sendAccountTransferRequest({
        nonce: e,
        account: t,
        accountType: a,
        externalWalletMetadata: r,
        telegramAuthResult: n,
        telegramWebAppData: i,
        farcasterEmbeddedAddress: o,
        oAuthUserInfo: s
      });
      ie(l);
      return l;
    }
  };
  Pa = rr.recoverPrimaryWallet;
  Da = rr.recoverPrimaryWallet;
  Ma = rr.solanaSignMessage;
  let nr = o(() => ({
    wallets: oe,
    ready: ia && wa
  }), [oe, ia, wa]);
  let ir = v.authFlow instanceof E;
  let or = !Yt.headless && Yt.captchaEnabled && !z && (B || ir);
  /*#__PURE__*/
  return e(Ct.Provider, {
    value: ar,
    children: /*#__PURE__*/e(_t.Provider, {
      value: pa,
      children: /*#__PURE__*/e(It.Provider, {
        value: nr,
        children: /*#__PURE__*/e(ft, {
          ...Yt,
          children: /*#__PURE__*/t(Tt.Provider, {
            value: rr,
            children: [/*#__PURE__*/e(ht, {
              children: /*#__PURE__*/t(vt, {
                data: Zt,
                setModalData: ea,
                setInitialScreen: St,
                initialScreen: Ot,
                authenticated: z,
                open: x,
                children: [T.children, or && /*#__PURE__*/e(le, {
                  delayedExecution: false
                }), /*#__PURE__*/e(mt, {
                  theme: {
                    ...(Yt.appearance.palette || {})
                  }
                }), !Yt.render.standalone && /*#__PURE__*/e(ce, {
                  open: x
                })]
              })
            }), Qt && Xt ? /*#__PURE__*/e(_e, {
              appId: T.appId,
              appClientId: T.clientId,
              clientAnalyticsId: v.clientAnalyticsId,
              origin: v.apiUrl,
              mfaMethods: re?.mfaMethods,
              mfaPromise: ua,
              mfaSubmitPromise: ha,
              onLoad: $t,
              onLoadFailed: () => null
            }) : null, Yt.loginConfig.telegramAuthConfiguration && /*#__PURE__*/e(wt, {
              $if: true,
              children: /*#__PURE__*/e(de, {
                scriptHost: T.apiUrl || V,
                botUsername: Yt.loginConfig.telegramAuthConfiguration.botName
              })
            })]
          })
        })
      })
    })
  });
};
export { _a as C, Aa as E, Ga as P, ka as a, Na as b, Fa as c, xa as d, ja as e, Ba as f, La as g, Va as h, Ha as i, Ka as j, za as k, Ta as l };
