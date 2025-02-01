import { PrivyConnectorError as t } from "../errors.mjs";
import { BrowserExtensionWallet as e } from "../svg/browser-extension-wallet-icon.mjs";
import { Metamask as i } from "../svg/metamask.mjs";
import { Phantom as r } from "../svg/phantom.mjs";
import { formatConnectorError as o } from "./errors.mjs";
import { EthereumWalletConnector as n } from "./ethereum/index.mjs";
import { PrivyProxyProvider as s } from "./privyProxyProvider.mjs";
import "ofetch";
import "react/jsx-runtime";
import "@privy-io/js-sdk-core";
import "viem/utils";
import "../constants.mjs";
import "../storage.mjs";
import "../utils/index.mjs";
import "./get-legacy-injected-providers.mjs";
import "./is-wallet-installed.mjs";
import "../utils/eth/getPublicClient.mjs";
import "viem";
import "./areWalletArraysEqual.mjs";
import "./isBaseConnectedEthereumWallet.mjs";
import "./base.mjs";
import "eventemitter3";
import "./getRpcTimeout.mjs";
function a(t, e) {
  if (!Object.prototype.hasOwnProperty.call(t, e)) {
    throw TypeError("attempted to use private field on non-instance");
  }
  return t;
}
var c = 0;
class m extends n {
  async initialize() {
    await this.syncAccounts();
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
  get walletBranding() {
    return {
      name: this.providerDetail.info.name,
      icon: this.providerDetail.info.icon,
      id: this.providerDetail.info.rdns
    };
  }
  disconnect() {
    console.warn(`Programmatic disconnect with ${this.providerDetail.info.name} is not yet supported.`);
  }
  async promptConnection() {
    try {
      let e = await this.proxyProvider.request({
        method: "eth_requestAccounts"
      });
      if (!e || e.length === 0 || !e[0]) {
        throw new t("Unable to retrieve accounts");
      }
      await this.syncAccounts([e[0]]);
    } catch (t) {
      throw o(t);
    }
  }
  constructor(t, e, i, r, o) {
    super(o || "unknown", t, e, i);
    this.connectorType = "injected";
    this.proxyProvider = new s(undefined, this.rpcTimeoutDuration);
    this.subscribeListeners();
    this.providerDetail = r;
    let n = r.provider;
    this.proxyProvider.setWalletProvider(n);
  }
}
var p = "__private_" + c++ + "__walletBranding";
class l extends n {
  async initialize() {
    await this.syncAccounts();
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
  get walletBranding() {
    return a(this, p)[p] ?? {
      name: "Browser Extension",
      icon: e,
      id: "extension"
    };
  }
  disconnect() {
    console.warn("Programmatic disconnect with browser wallets is not yet supported.");
  }
  async promptConnection() {
    try {
      let e = await this.proxyProvider.request({
        method: "eth_requestAccounts"
      });
      if (!e || e.length === 0 || !e[0]) {
        throw new t("Unable to retrieve accounts");
      }
      await this.syncAccounts([e[0]]);
    } catch (t) {
      throw o(t);
    }
  }
  constructor(t, e, o, n, c) {
    super(c ?? "unknown", t, e, o);
    Object.defineProperty(this, p, {
      writable: true,
      value: undefined
    });
    this.connectorType = "injected";
    this.proxyProvider = new s(undefined, this.rpcTimeoutDuration);
    this.subscribeListeners();
    this.proxyProvider.setWalletProvider(n);
    if (c === "metamask") {
      a(this, p)[p] = {
        name: "MetaMask",
        icon: i,
        id: "io.metamask"
      };
    } else if (c === "phantom") {
      a(this, p)[p] = {
        name: "Phantom",
        icon: r,
        id: "phantom"
      };
    }
  }
}
export { m as Injected6963WalletConnector, l as LegacyInjectedWalletConnector };
