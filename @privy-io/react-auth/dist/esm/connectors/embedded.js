import { Blobby as t } from "../svg/blobby.mjs";
import { toHex as e } from "../utils/index.mjs";
import { EthereumWalletConnector as i } from "./ethereum/index.mjs";
import "react/jsx-runtime";
import "./get-legacy-injected-providers.mjs";
import "./is-wallet-installed.mjs";
import "../errors.mjs";
import "ofetch";
import "../utils/eth/getPublicClient.mjs";
import "viem";
import "viem/utils";
import "../constants.mjs";
import "../storage.mjs";
import "./areWalletArraysEqual.mjs";
import "./isBaseConnectedEthereumWallet.mjs";
import "./base.mjs";
import "eventemitter3";
import "./getRpcTimeout.mjs";
class r extends i {
  async initialize() {
    await this.syncAccounts();
    this.initialized = true;
    this.emit("initialized");
  }
  async connect(t) {
    if (await this.isConnected()) {
      await this.proxyProvider.request({
        method: "wallet_switchEthereumChain",
        params: [e(t?.chainId || "0x1")]
      });
      return this.getConnectedWallet();
    } else {
      return null;
    }
  }
  get walletBranding() {
    return {
      name: "Privy Wallet",
      icon: t,
      id: "io.privy.wallet"
    };
  }
  disconnect() {
    this.connected = false;
  }
  async promptConnection() {}
  constructor({
    provider: t,
    chains: e,
    defaultChain: i,
    rpcConfig: r,
    imported: s,
    walletIndex: o
  }) {
    super("privy", e, i, r);
    this.connectorType = "embedded";
    this.proxyProvider = t;
    this.walletIndex = o;
    if (s) {
      this.connectorType = "embedded_imported";
    }
    this.subscribeListeners();
  }
}
export { r as EmbeddedWalletConnector };
