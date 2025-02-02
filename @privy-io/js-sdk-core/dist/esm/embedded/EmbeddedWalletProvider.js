import e from "eventemitter3";
import { PrivyClientError as t } from "../Error.mjs";
import { EmbeddedProviderError as r } from "./errors.mjs";
import { isSupportedIframeRpcMethod as s } from "./methods.mjs";
import { getJsonRpcProvider as a, populateTransactionRequest as i } from "./utils/index.mjs";
import "./types.mjs";
import "@ethersproject/abstract-signer";
import "@ethersproject/providers";
import "./gas/arbitrum.mjs";
import "@ethersproject/bignumber";
import "../chains/arbitrum.mjs";
import "../chains/arbitrumGoerli.mjs";
import "../chains/arbitrumSepolia.mjs";
import "./utils/ethers.mjs";
import "./gas/bsc.mjs";
import "./gas/op-stack.mjs";
import "@ethersproject/contracts";
import "@ethersproject/transactions";
import "../chains/base.mjs";
import "../chains/baseGoerli.mjs";
import "../chains/baseSepolia.mjs";
import "../chains/optimism.mjs";
import "../chains/optimismGoerli.mjs";
import "../chains/optimismSepolia.mjs";
import "../chains/zora.mjs";
import "../chains/zoraSepolia.mjs";
import "../chains/zoraTestnet.mjs";
import "./gas/polygon.mjs";
import "@ethersproject/units";
import "fetch-retry";
import "../chains/polygon.mjs";
import "../chains/polygonAmoy.mjs";
import "../chains/polygonMumbai.mjs";
import "./utils/gas.mjs";
class n extends e {
  async request(e) {
    if (s(e.method)) {
      return this.handleIFrameRpc(e);
    }
    switch (e.method) {
      case "eth_accounts":
      case "eth_requestAccounts":
        if (this._address) {
          return [this._address];
        } else {
          return [];
        }
      case "eth_chainId":
        return `0x${this._chainId.toString(16)}`;
      case "wallet_switchEthereumChain":
        return this.handleSwitchEthereumChain(e);
      case "eth_estimateGas":
        return this.handleEstimateGas(e);
      case "eth_sendTransaction":
        {
          let t = e.params?.[0];
          return this.handleSendTransaction(t);
        }
      case "eth_populateTransactionRequest":
        {
          let t = e.params?.[0];
          return this.handlePopulateTransaction(t);
        }
      default:
        return this.handleJsonRpc(e);
    }
  }
  ensureChainId(e) {
    let t = {
      chainId: this._chainId,
      ...e
    };
    this.internalSwitchEthereumChain(t.chainId);
    return t;
  }
  internalSwitchEthereumChain(e) {
    if (e && Number(e) !== this._chainId) {
      this._chainId = Number(e);
      this._jsonRpcProvider = a(this._chainId, this._chains, {
        rpcUrls: []
      }, {
        appId: this._privyInternal.appId
      });
      this.emit("chainChanged", e);
    }
  }
  async handlePopulateTransaction(e) {
    let t = this.ensureChainId(e);
    return i(this._address, t, this._jsonRpcProvider);
  }
  async handleSendTransaction(e) {
    let t = this.ensureChainId(e);
    let r = await i(this._address, t, this._jsonRpcProvider);
    let s = await this.handleIFrameRpc({
      method: "eth_signTransaction",
      params: [r]
    });
    return await this.handleJsonRpc({
      method: "eth_sendRawTransaction",
      params: [s]
    });
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
      chainId: `0x${this._chainId.toString(16)}`
    };
    this.internalSwitchEthereumChain(t.chainId);
    try {
      return await this._jsonRpcProvider.send("eth_estimateGas", [t]);
    } catch (e) {
      console.warn(`Gas estimation failed with error: ${e}. Retrying gas estimation by omitting the 'from' address`);
      try {
        delete t.from;
        return await this._jsonRpcProvider.send("eth_estimateGas", [t]);
      } catch (t) {
        console.warn(`Gas estimation failed with error: ${t} when omitting the 'from' address`);
        throw e;
      }
    }
  }
  handleSwitchEthereumChain(e) {
    let t;
    if (!e.params || !Array.isArray(e.params)) {
      throw new r(`Invalid params for ${e.method}`, 4200);
    }
    if (typeof e.params[0] == "string") {
      t = e.params[0];
    } else {
      if (!("chainId" in e.params[0]) || typeof e.params[0].chainId != "string") {
        throw new r(`Invalid params for ${e.method}`, 4200);
      }
      t = e.params[0].chainId;
    }
    this.internalSwitchEthereumChain(t);
  }
  async handleIFrameRpc(e) {
    try {
      let t = await this._privyInternal.getAccessToken();
      if (!t) {
        throw Error("Missing privy token. User must be logged in");
      }
      this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_rpc_started", {
        method: e.method,
        address: this._address
      });
      let r = await this._walletProxy.rpc({
        request: e,
        address: this._address,
        accessToken: t
      });
      this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_rpc_completed", {
        method: e.method,
        address: this._address
      });
      return r.response.data;
    } catch (r) {
      console.error(r);
      let s = r instanceof Error ? r.message : "Unable to make wallet request";
      this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_rpc_failed", {
        method: e.method,
        address: this._address,
        error: s
      });
      throw new t({
        code: "embedded_wallet_request_error",
        error: s
      });
    }
  }
  async handleJsonRpc(e) {
    return this._jsonRpcProvider.send(e.method, e.params ?? []);
  }
  toJSON() {
    return `PrivyEIP1193Provider { address: '${this._address}', chainId: ${this._chainId}, request: [Function] }`;
  }
  constructor({
    walletProxy: e,
    privyInternal: t,
    address: r,
    chains: s,
    chainId: i = s[0].id
  }) {
    super();
    this._walletProxy = e;
    this._privyInternal = t;
    this._address = r;
    this._chainId = i;
    this._chains = s;
    this._jsonRpcProvider = a(i, s, {
      rpcUrls: []
    }, {
      appId: this._privyInternal.appId
    });
  }
}
export { n as EmbeddedWalletProvider };
