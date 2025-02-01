import { PrivyClientError as e } from "../Error.mjs";
import { DEFAULT_SUPPORTED_CHAINS as r } from "../chains/index.mjs";
import { EmbeddedBitcoinWalletProvider as t } from "../embedded/EmbeddedBitcoinWalletProvider.mjs";
import { errorIndicatesRecoveryIsNeeded as o } from "../embedded/errors.mjs";
import { throwIfInvalidRecoveryUpgradePath as i } from "../embedded/utils/index.mjs";
import { EmbeddedWalletProxy as s } from "../embedded/EmbeddedWalletProxy.mjs";
import { EmbeddedWalletProvider as d } from "../embedded/EmbeddedWalletProvider.mjs";
import { EmbeddedSolanaWalletProvider as a } from "../embedded/EmbeddedSolanaWalletProvider.mjs";
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
import "../embedded/types.mjs";
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
import "../utils/sleep.mjs";
import "../embedded/EventCallbackQueue.mjs";
import "../embedded/withMfa.mjs";
import "eventemitter3";
import "../embedded/methods.mjs";
import "../solana/getWalletPublicKeyFromTransaction.mjs";
import "../solana/isVersionedTransaction.mjs";
class n {
  setMessagePoster(e) {
    this._proxy = new s(e, this._mfaPromises);
    this._mfa.setProxy(this._proxy);
  }
  async add(r) {
    if (!this._proxy) {
      throw Error("Embedded wallet proxy not initialized");
    }
    let t = await this._privyInternal.getAccessToken();
    if (!t) {
      throw new e({
        error: "User must be logged in to create an embedded wallet",
        code: "embedded_wallet_creation_error"
      });
    }
    await this._proxy.addWallet({
      accessToken: t,
      ...r
    });
    let {
      user: o
    } = await this._privyInternal.refreshSession();
    return {
      user: o
    };
  }
  async getBitcoinProvider({
    wallet: e,
    entropyId: r,
    entropyIdVerifier: o,
    recoveryPassword: i,
    recoveryAccessToken: s,
    recoverySecretOverride: d
  }) {
    if (!this._proxy) {
      throw Error("Embedded wallet proxy not initialized");
    }
    if (!(await this._privyInternal.getAccessToken())) {
      throw Error("User must be logged in to create an embedded wallet");
    }
    await this._load({
      entropyId: r,
      entropyIdVerifier: o,
      wallet: e,
      recoveryPassword: i,
      recoveryAccessToken: s,
      recoverySecretOverride: d
    });
    return new t({
      account: e,
      privyInternal: this._privyInternal,
      proxy: this._proxy,
      entropyId: r,
      entropyIdVerifier: o
    });
  }
  async create({
    password: e,
    recoveryMethod: r,
    recoveryToken: t,
    recoverySecretOverride: o,
    iCloudRecordNameOverride: i,
    solanaAccount: s,
    skipCallbacks: d
  }) {
    let a;
    if (!this._proxy) {
      throw Error("Embedded wallet proxy not initialized");
    }
    a = r || (e ? "user-passcode" : "privy");
    if (e && typeof e != "string") {
      throw Error("Invalid recovery password, must be a string");
    }
    if (a === "privy" && this._privyInternal.config?.embedded_wallet_config.require_user_password_on_create) {
      throw Error("Password not provided yet is required by App configuration");
    }
    let n = await this._privyInternal.getAccessToken();
    if (!n) {
      throw Error("User must be logged in to create an embedded wallet");
    }
    let {
      address: c
    } = await this._proxy.create({
      accessToken: n,
      recoveryMethod: a,
      recoveryPassword: e,
      recoveryAccessToken: t,
      recoverySecretOverride: o,
      iCloudRecordNameOverride: i,
      solanaAddress: s?.address
    });
    if (!c) {
      throw Error("Failed to create wallet");
    }
    return await this._privyInternal.refreshSession(d);
  }
  async createSolana(r) {
    if (!this._proxy) {
      throw new e({
        error: "Embedded wallet proxy not initialized",
        code: "embedded_wallet_creation_error"
      });
    }
    let t = await this._privyInternal.getAccessToken();
    if (!t) {
      throw new e({
        error: "User must be logged in to create an embedded wallet",
        code: "embedded_wallet_creation_error"
      });
    }
    if (r?.ethereumAccount) {
      await this.getProvider(r.ethereumAccount);
    }
    let {
      publicKey: o
    } = await this._proxy.createSolana({
      accessToken: t,
      ethereumAddress: r?.ethereumAccount?.address
    });
    if (!o) {
      throw new e({
        error: "Failed to create wallet",
        code: "embedded_wallet_creation_error"
      });
    }
    return await this._privyInternal.refreshSession();
  }
  async delegateWallets({
    delegatedWallets: r,
    rootWallet: t
  }) {
    if (!this._proxy) {
      throw new e({
        error: "Embedded wallet proxy not initialized",
        code: "embedded_wallet_creation_error"
      });
    }
    let o = await this._privyInternal.getAccessToken();
    if (!o) {
      throw new e({
        error: "User must be logged in to create an embedded wallet",
        code: "embedded_wallet_creation_error"
      });
    }
    await this._proxy.delegateWallets({
      accessToken: o,
      delegatedWallets: r,
      rootWallet: t
    });
  }
  async getProvider(e, r, t, o) {
    if (!this._proxy) {
      throw Error("Embedded wallet proxy not initialized");
    }
    return new d({
      address: await this._load({
        wallet: e,
        entropyId: e.address,
        entropyIdVerifier: "ethereum-address-verifier",
        recoveryPassword: r,
        recoveryAccessToken: t,
        recoverySecretOverride: o
      }),
      privyInternal: this._privyInternal,
      chains: this._chains,
      walletProxy: this._proxy
    });
  }
  async getSolanaProvider(r, t, o, i, s, d) {
    if (!this._proxy) {
      throw new e({
        error: "Embedded wallet proxy not initialized",
        code: "embedded_wallet_webview_not_loaded"
      });
    }
    await this._load({
      wallet: r,
      entropyId: t,
      entropyIdVerifier: o,
      recoveryPassword: i,
      recoveryAccessToken: s,
      recoverySecretOverride: d
    });
    return new a({
      publicKey: r.address,
      privyInternal: this._privyInternal,
      proxy: this._proxy,
      entropyId: t,
      entropyIdVerifier: o,
      hdWalletIndex: r.wallet_index
    });
  }
  async setRecovery(e) {
    let {
      wallet: r,
      ...t
    } = e;
    if (!this._proxy) {
      throw Error("Embedded wallet proxy not initialized");
    }
    i({
      currentRecoveryMethod: r.recovery_method,
      upgradeToRecoveryMethod: t.recoveryMethod === "icloud-native" ? "icloud" : t.recoveryMethod
    });
    await this._load(r.chain_type === "solana" ? {
      wallet: r,
      entropyId: r.address,
      entropyIdVerifier: "solana-address-verifier"
    } : {
      wallet: r,
      entropyId: r.address,
      entropyIdVerifier: "ethereum-address-verifier"
    });
    let o = await this._privyInternal.getAccessToken();
    if (!o) {
      throw Error("User must be logged in to interact with embedded wallets");
    }
    let s = r.recovery_method;
    this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_set_recovery_started", {
      address: r.address,
      target_recovery_method: t.recoveryMethod,
      existing_recovery_method: s
    });
    try {
      let e;
      if (t.recoveryMethod === "user-passcode") {
        e = {
          recoveryMethod: "user-passcode",
          recoveryPassword: t.password
        };
      } else if (t.recoveryMethod === "google-drive") {
        e = {
          recoveryMethod: "google-drive",
          recoveryAccessToken: t.recoveryAccessToken
        };
      } else if (t.recoveryMethod === "icloud") {
        e = {
          recoveryMethod: "icloud",
          recoveryAccessToken: t.recoveryAccessToken
        };
      } else if (t.recoveryMethod === "icloud-native") {
        e = {
          recoveryMethod: "icloud-native",
          iCloudRecordNameOverride: t.iCloudRecordNameOverride,
          recoverySecretOverride: t.recoverySecretOverride
        };
      } else {
        if (t.recoveryMethod !== "privy") {
          throw Error(`Unknown recovery method: ${t.recoveryMethod}`);
        }
        e = {
          recoveryMethod: "privy"
        };
      }
      await this._proxy.setRecovery({
        accessToken: o,
        entropyId: r.address,
        entropyIdVerifier: r.chain_type === "solana" ? "solana-address-verifier" : "ethereum-address-verifier",
        ...e
      });
      this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_set_recovery_completed", {
        address: r.address,
        target_recovery_method: t.recoveryMethod,
        existing_recovery_method: s
      });
      let {
        user: i
      } = await this._privyInternal.refreshSession();
      return {
        user: i,
        provider: r.chain_type !== "ethereum" ? null : new d({
          address: r.address,
          privyInternal: this._privyInternal,
          chains: this._chains,
          walletProxy: this._proxy
        })
      };
    } catch (e) {
      this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_set_recovery_failed", {
        address: r.address,
        recovery_method: r.recovery_method,
        error: e instanceof Error ? e.message : "Unable to recover wallet"
      });
      throw e;
    }
  }
  getURL() {
    let e = new URL(`${this._privyInternal.baseUrl}/apps/${this._privyInternal.appId}/embedded-wallets`);
    if (this._privyInternal.caid) {
      e.searchParams.append("caid", this._privyInternal.caid);
    }
    if (this._privyInternal.appClientId) {
      e.searchParams.append("client_id", this._privyInternal.appClientId);
    }
    return e.href;
  }
  get chains() {
    return this._chains;
  }
  onMessage(e) {
    if (!this._proxy) {
      throw Error("Embedded wallet proxy not initialized");
    }
    return this._proxy.handleEmbeddedWalletMessages(e);
  }
  async ping(e) {
    try {
      if (!this._proxy) {
        throw Error("Embedded wallet proxy not initialized");
      }
      await this._proxy.ping(e);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
  async _load({
    entropyId: e,
    entropyIdVerifier: r,
    wallet: t,
    recoveryPassword: i,
    recoveryAccessToken: s,
    recoverySecretOverride: d
  }) {
    if (!this._proxy) {
      throw Error("Embedded wallet proxy not initialized");
    }
    let a = await this._privyInternal.getAccessToken();
    if (!a) {
      throw Error("User must be logged in to interact with embedded wallets");
    }
    try {
      await this._proxy.connect({
        accessToken: a,
        entropyId: e,
        entropyIdVerifier: r
      });
      return e;
    } catch (n) {
      if (o(n)) {
        try {
          if (t.recovery_method === "privy") {
            this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_recovery_started", {
              address: t.address,
              recovery_method: t.recovery_method
            });
            let o = await this._proxy.recover({
              accessToken: a,
              entropyId: e,
              entropyIdVerifier: r
            });
            this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_recovery_completed", {
              address: t.address,
              recovery_method: t.recovery_method
            });
            return o.entropyId;
          }
          if (t.recovery_method === "user-passcode" && i) {
            this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_recovery_started", {
              address: t.address,
              recovery_method: t.recovery_method
            });
            let o = await this._proxy.recover({
              accessToken: a,
              recoveryPassword: i,
              entropyId: e,
              entropyIdVerifier: r
            });
            this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_recovery_completed", {
              address: t.address,
              recovery_method: t.recovery_method
            });
            return o.entropyId;
          }
          if (["google-drive", "icloud"].includes(t.recovery_method) && s) {
            this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_recovery_started", {
              address: t.address,
              recovery_method: t.recovery_method
            });
            let o = await this._proxy.recover({
              accessToken: a,
              recoveryAccessToken: s,
              entropyId: e,
              entropyIdVerifier: r
            });
            this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_recovery_completed", {
              address: t.address,
              recovery_method: t.recovery_method
            });
            return o.entropyId;
          }
          if (t.recovery_method === "icloud" && d) {
            this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_recovery_started", {
              address: t.address,
              recovery_method: "icloud-native"
            });
            let o = await this._proxy.recover({
              accessToken: a,
              recoverySecretOverride: d,
              entropyId: e,
              entropyIdVerifier: r
            });
            this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_recovery_completed", {
              address: t.address,
              recovery_method: "icloud-native"
            });
            return o.entropyId;
          }
        } catch (r) {
          this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_recovery_failed", {
            address: t.address,
            recovery_method: t.recovery_method,
            error: r instanceof Error ? r.message : `Unable to recover wallet: ${e}`
          });
          throw r;
        }
      }
      throw n;
    }
  }
  constructor(e, t, o, i, d) {
    this._chains = Array.from(r);
    this._privyInternal = e;
    if (t) {
      this._proxy = new s(t, d);
      i.setProxy(this._proxy);
    }
    if (o) {
      this._chains = o;
    }
    this._mfa = i;
    this._mfaPromises = d;
  }
}
export { n as default };
