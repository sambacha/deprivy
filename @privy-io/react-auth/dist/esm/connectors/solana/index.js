import { notImplementedWithMessage as t } from "../../hooks/index.mjs";
import { isWalletClientType as e } from "../../types.mjs";
import { WalletConnector as n } from "../base.mjs";
import { formatConnectorError as s } from "../errors.mjs";
import "eventemitter3";
import "@privy-io/js-sdk-core";
import "../../errors.mjs";
import "ofetch";
function a(t) {
  return t.chainType === "solana";
}
function i(t) {
  return t.type === "solana";
}
class o extends n {
  get isInstalled() {
    return this.adapter.readyState === "Installed";
  }
  buildConnectedWallet(e, n) {
    let s;
    let a;
    let i;
    if (e.readyState !== "Installed" || !e.publicKey) {
      throw Error("Wallet is not connected.");
    }
    if ("signMessage" in e) {
      s = async (...t) => {
        if (!e.connected) {
          throw Error("Wallet is not connected.");
        }
        return await e.signMessage(t[0]);
      };
    }
    if ("sendTransaction" in e) {
      a = async (...t) => await e.sendTransaction(t[0], t[1], t[2]);
    }
    if ("signTransaction" in e) {
      i = async t => await e.signTransaction(t);
    }
    return {
      type: "solana",
      address: e.publicKey.toBase58(),
      meta: n,
      imported: false,
      connectedAt: Date.now(),
      walletClientType: this.walletClientType,
      connectorType: this.connectorType,
      isConnected: async () => e.connected,
      disconnect: () => {
        try {
          e.disconnect();
        } catch (t) {
          console.error("Wallet does not support programmatic disconnect");
        }
      },
      getProvider: t(`${this.walletClientType || ""} wallet does not support 'getProvider'`),
      signMessage: s ?? t(`${this.walletClientType || ""} wallet does not support 'signMessage'`),
      sendTransaction: a ?? t(`${this.walletClientType || ""} wallet does not support 'sendTransaction'`),
      signTransaction: i ?? t(`${this.walletClientType || ""} wallet does not support 'signTransaction'`)
    };
  }
  async syncAccounts() {
    if (this.adapter.readyState === "Installed" && this.adapter.publicKey) {
      let t = {
        name: this.walletBranding.name,
        icon: typeof this.walletBranding.icon == "string" ? this.walletBranding.icon : undefined,
        id: this.walletBranding.id
      };
      if (!this.wallets.find(t => this.adapter.publicKey && t.address === this.adapter.publicKey.toBase58())) {
        this.wallets = [this.buildConnectedWallet(this.adapter, t)];
        this.emit("walletsUpdated");
      }
    } else if (this.wallets.length > 0) {
      this.wallets = [];
      this.emit("walletsUpdated");
    }
  }
  get walletBranding() {
    return {
      id: this.adapter.name,
      name: this.adapter.name,
      icon: this.adapter.icon
    };
  }
  async initialize() {
    this.subscribeListeners();
    await this.syncAccounts();
    if (this.shouldAutoConnect) {
      await this.adapter.autoConnect().catch(console.error);
    }
    this.initialized = true;
    this.emit("initialized");
  }
  async connect(t) {
    if (t.showPrompt) {
      await this.promptConnection();
    }
    if (await this.isConnected()) {
      return this.getConnectedWallet();
    } else {
      return null;
    }
  }
  async getConnectedWallet() {
    return this.wallets.sort((t, e) => e.connectedAt - t.connectedAt)[0] || null;
  }
  async isConnected() {
    return this.adapter.connected && ["Installed"].includes(this.adapter.readyState);
  }
  subscribeListeners() {
    this.adapter.addListener("disconnect", this.onDisconnect);
    this.adapter.addListener("connect", this.onConnect);
    this.adapter.addListener("error", this.onError);
    this.adapter.addListener("readyStateChange", this.onReadyStateChange);
  }
  unsubscribeListeners() {
    this.adapter.removeAllListeners();
  }
  constructor(t, n) {
    super(e(t.name.toLowerCase()) ? t.name.toLowerCase() : "unknown");
    this.chainType = "solana";
    this.connectorType = "solana_adapter";
    this.disconnect = () => {
      this.adapter.disconnect().then(() => this.onDisconnect()).catch(t => console.error("Error disconnecting", t));
    };
    this.promptConnection = async () => {
      try {
        await this.adapter.connect();
      } catch (t) {
        throw s(t);
      }
    };
    this.onDisconnect = () => {
      this.syncAccounts();
    };
    this.onConnect = t => {
      this.syncAccounts();
    };
    this.onError = t => {
      this.syncAccounts();
    };
    this.onReadyStateChange = t => {
      if (t !== "Installed") {
        this.connected = false;
      }
      this.syncAccounts();
    };
    this.adapter = t;
    this.shouldAutoConnect = n;
    this.wallets = [];
  }
}
export { o as SolanaWalletConnector, i as isBaseConnectedSolanaWallet, a as isSolanaWalletConnector };
