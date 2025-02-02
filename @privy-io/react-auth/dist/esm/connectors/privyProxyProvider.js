import { DEFAULT_RPC_TIMEOUT as e } from "../constants.mjs";
import { PrivyConnectorError as t } from "../errors.mjs";
import { formatConnectorError as r, WalletTimeoutError as i } from "./errors.mjs";
import "ofetch";
import "@privy-io/js-sdk-core";
class s {
  on(e, t) {
    if (this.walletProvider) {
      return this.walletProvider.on(e, t);
    }
    this._subscriptions.push({
      eventName: e,
      listener: t
    });
  }
  async request(e) {
    if (!this.walletProvider) {
      throw new t(`A wallet request of type ${e.method} was made before setting a wallet provider.`);
    }
    return Promise.race([this.walletProvider.request(e), this.walletTimeout()]).catch(e => {
      throw r(e);
    });
  }
  constructor(t, r) {
    this.removeListener = (e, t) => {
      if (this.walletProvider) {
        try {
          return this.walletProvider.removeListener(e, t);
        } catch (e) {
          console.warn("Unable to remove wallet provider listener");
        }
      }
    };
    this.walletTimeout = (e = new i(), t = this.rpcTimeoutDuration) => new Promise((r, i) => setTimeout(() => {
      i(e);
    }, t));
    this.setWalletProvider = e => {
      if (this.walletProvider) {
        this._subscriptions.forEach(e => {
          this.removeListener(e.eventName, e.listener);
        });
      }
      this.walletProvider = e;
      this._subscriptions.forEach(e => {
        this.walletProvider?.on(e.eventName, e.listener);
      });
    };
    this.walletProvider = t;
    this.rpcTimeoutDuration = r || e;
    this._subscriptions = [];
  }
}
export { s as PrivyProxyProvider };
