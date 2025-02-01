import { SolanaWalletConnector as o } from "./index.mjs";
import { DEFAULT_RPC_TIMEOUT as t } from "../../constants.mjs";
import { PrivyProxyProvider as r } from "../privyProxyProvider.mjs";
import "../../hooks/index.mjs";
import "../../types.mjs";
import "../base.mjs";
import "eventemitter3";
import "../errors.mjs";
import "@privy-io/js-sdk-core";
import "../../errors.mjs";
import "ofetch";
class n extends o {
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
    throw Error("connect called for an uninstalled wallet via the SolanaNullConnector");
  }
  constructor(...o) {
    super(...o);
    this.proxyProvider = new r(undefined, t);
    this.disconnect = async () => {
      throw Error("disconnect called for an uninstalled wallet via the SolanaNullConnector");
    };
    this.promptConnection = async () => {
      throw Error("promptConnection called for an uninstalled wallet via the SolanaNullConnector");
    };
  }
}
export { n as SolanaNullConnector };
