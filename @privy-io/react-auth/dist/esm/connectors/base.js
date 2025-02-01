import t from "eventemitter3";
class e extends t {
  constructor(t) {
    super();
    this.walletClientType = t;
    this.connected = false;
    this.initialized = false;
  }
}
export { e as WalletConnector };
