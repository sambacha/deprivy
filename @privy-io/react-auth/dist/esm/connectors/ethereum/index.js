import { getAddress as t } from "viem/utils";
import { getPrivyWalletKey as e, DEFAULT_NETWORK as i } from "../../constants.mjs";
import { PrivyConnectorError as n } from "../../errors.mjs";
import r from "../../storage.mjs";
import { formatChainIdToCAIP2 as s, invokeUntilSettled as o } from "../../utils/index.mjs";
import { areWalletArraysEqual as a } from "../areWalletArraysEqual.mjs";
import { WalletConnector as h } from "../base.mjs";
import { getRpcTimeout as c } from "../getRpcTimeout.mjs";
import "ofetch";
import "../get-legacy-injected-providers.mjs";
import "../is-wallet-installed.mjs";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
import "../isBaseConnectedEthereumWallet.mjs";
import "eventemitter3";
function l(t) {
  return t.chainType === "ethereum";
}
class d extends h {
  buildConnectedWallet(e, i, r, o) {
    let a = async () => !!this.wallets.find(i => t(i.address) === t(e));
    return {
      type: "ethereum",
      address: t(e),
      chainId: i,
      meta: r,
      imported: o,
      switchChain: async r => {
        let o;
        let h;
        if (!a) {
          throw new n("Wallet is not currently connected.");
        }
        let c = this.wallets.find(i => t(i.address) === t(e))?.chainId;
        if (!c) {
          throw new n("Unable to determine current chainId.");
        }
        if (typeof r == "number") {
          o = `0x${r.toString(16)}`;
          h = r;
        } else {
          o = r;
          h = Number(r);
        }
        if (c === s(o)) {
          return;
        }
        let l = this.chains.find(t => t.id === h);
        if (!l) {
          throw new n(`Unsupported chainId: ${r}`);
        }
        let d = async () => {
          await this.proxyProvider.request({
            method: "wallet_switchEthereumChain",
            params: [{
              chainId: o
            }]
          });
        };
        try {
          return await d();
        } catch (t) {
          if (((t, e) => e === "coinbase_wallet" ? t.message.includes("addEthereumChain") : t.code === 4902 || t.message?.includes("4902"))(t, this.walletClientType)) {
            await this.proxyProvider.request({
              method: "wallet_addEthereumChain",
              params: [{
                chainId: o,
                chainName: l.name,
                nativeCurrency: l.nativeCurrency,
                rpcUrls: [l.rpcUrls.default?.http[0] ?? ""],
                blockExplorerUrls: [l.blockExplorers?.default.url ?? ""]
              }]
            });
            return d();
          }
          if (this.walletClientType === "rainbow" && t.message?.includes("wallet_switchEthereumChain")) {
            throw new n(`Rainbow does not support the chainId ${i}`);
          }
          throw t;
        }
      },
      connectedAt: Date.now(),
      walletClientType: this.walletClientType,
      connectorType: this.connectorType,
      isConnected: a,
      getEthereumProvider: async () => {
        if (!(await a())) {
          throw new n("Wallet is not currently connected.");
        }
        return this.proxyProvider;
      },
      sign: async t => {
        if (!(await a())) {
          throw new n("Wallet is not currently connected.");
        }
        return await this.sign(t);
      },
      disconnect: () => {
        this.disconnect();
      }
    };
  }
  async syncAccounts(n) {
    let h;
    let c = n;
    try {
      if (c === undefined) {
        let t = await o(() => this.proxyProvider.request({
          method: "eth_accounts"
        }), {
          maxAttempts: 10,
          delayMs: 500
        });
        console.debug(`eth_accounts for ${this.walletClientType}:`, t);
        if (Array.isArray(t)) {
          c = t;
        }
      }
    } catch (t) {
      console.debug("Wallet did not respond to eth_accounts. Defaulting to prefetched accounts.", t);
    }
    if (!c || !Array.isArray(c) || c.length <= 0 || !c[0]) {
      return;
    }
    let l = c[0];
    let d = t(l);
    let m = [];
    if (this.walletClientType === "privy") {
      let t = r.get(e(d));
      if (!this.chains.find(e => e.id === Number(t))) {
        r.del(e(d));
        t = null;
      }
      h = t || `0x${this.defaultChain.id.toString(16)}`;
      try {
        await this.proxyProvider.request({
          method: "wallet_switchEthereumChain",
          params: [{
            chainId: h
          }]
        });
      } catch (t) {
        console.warn(`Unable to switch embedded wallet to chain ID ${h} on initialization`);
      }
    } else {
      try {
        let t = await o(() => this.proxyProvider.request({
          method: "eth_chainId"
        }), {
          maxAttempts: 10,
          delayMs: 500
        });
        console.debug(`eth_chainId for ${this.walletClientType}:`, t);
        if (typeof t == "string") {
          h = t;
        } else {
          if (typeof t != "number") {
            throw Error("Invalid chainId returned from provider");
          }
          h = `0x${t.toString(16)}`;
        }
      } catch (t) {
        console.warn(`Failed to get chainId from provider, defaulting to ${i}`, t);
        h = i;
      }
    }
    let u = s(h);
    if (!m.find(e => t(e.address) === d)) {
      let e = {
        name: this.walletBranding.name,
        icon: typeof this.walletBranding.icon == "string" ? this.walletBranding.icon : undefined,
        id: this.walletBranding.id
      };
      m.push(this.buildConnectedWallet(t(l), u, e, this.connectorType === "embedded_imported"));
    }
    if (!a(m, this.wallets)) {
      this.wallets = m;
      this.emit("walletsUpdated");
    }
  }
  async getConnectedWallet() {
    let e = await this.proxyProvider.request({
      method: "eth_accounts"
    });
    return this.wallets.sort((t, e) => e.connectedAt - t.connectedAt).find(i => e.find(e => t(e) === t(i.address))) || null;
  }
  async isConnected() {
    let t = await this.proxyProvider.request({
      method: "eth_accounts"
    });
    return Array.isArray(t) && t.length > 0;
  }
  async sign(t) {
    await this.connect({
      showPrompt: false
    });
    return this.proxyProvider.request({
      method: "personal_sign",
      params: [t, this.wallets[0]?.address]
    });
  }
  subscribeListeners() {
    this.proxyProvider.on("accountsChanged", this.onAccountsChanged);
    this.proxyProvider.on("chainChanged", this.onChainChanged);
    this.proxyProvider.on("disconnect", this.onDisconnect);
    this.proxyProvider.on("connect", this.onConnect);
  }
  unsubscribeListeners() {
    this.proxyProvider.removeListener("accountsChanged", this.onAccountsChanged);
    this.proxyProvider.removeListener("chainChanged", this.onChainChanged);
    this.proxyProvider.removeListener("disconnect", this.onDisconnect);
    this.proxyProvider.removeListener("connect", this.onConnect);
  }
  constructor(t, i, n, o) {
    super(t);
    this.chainType = "ethereum";
    this.onAccountsChanged = t => {
      if (t.length === 0) {
        this.onDisconnect();
      } else {
        this.syncAccounts(t);
      }
    };
    this.onChainChanged = t => {
      this.wallets.forEach(i => {
        i.chainId = s(t);
        if (this.walletClientType === "privy") {
          r.put(e(i.address), t);
        }
      });
      this.emit("walletsUpdated");
    };
    this.onDisconnect = () => {
      this.connected = false;
      this.wallets = [];
      this.emit("walletsUpdated");
    };
    this.onConnect = () => {
      this.connected = true;
      this.syncAccounts();
    };
    this.wallets = [];
    this.walletClientType = t;
    this.chains = i;
    this.defaultChain = n;
    this.rpcConfig = o;
    this.rpcTimeoutDuration = c(o, t);
    this.connected = false;
    this.initialized = false;
  }
}
export { d as EthereumWalletConnector, l as isEthereumWalletConnector };
