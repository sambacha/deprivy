import { EthereumWalletConnector as t } from "./index.mjs";
import { DEFAULT_RPC_TIMEOUT as e } from "../../constants.mjs";
import { PrivyProxyProvider as r } from "../privyProxyProvider.mjs";
import "viem/utils";
import "../../errors.mjs";
import "ofetch";
import "../../storage.mjs";
import "../../utils/index.mjs";
import "../get-legacy-injected-providers.mjs";
import "../is-wallet-installed.mjs";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
import "../areWalletArraysEqual.mjs";
import "../isBaseConnectedEthereumWallet.mjs";
import "../base.mjs";
import "eventemitter3";
import "../getRpcTimeout.mjs";
import "../errors.mjs";
import "@privy-io/js-sdk-core";
class i extends t {
  get walletBranding() {
    return {
      name: "Wallet",
      id: ""
    };
  }
  async initialize() {
    this.initialized = true;
    this.emit("initialized");
  }
  async connect() {
    throw Error("connect called for an uninstalled wallet via the EthereumNullConnector");
  }
  disconnect() {
    throw Error("disconnect called for an uninstalled wallet via the EthereumNullConnector");
  }
  promptConnection(t) {
    throw Error(`promptConnection called for an uninstalled wallet via the EthereumNullConnector for ${t}`);
  }
  constructor(t, i) {
    super(t, [], i, {});
    this.connectorType = "null";
    this.proxyProvider = new r(undefined, e);
    this.connectorType = t;
  }
}
export { i as EthereumNullConnector };
