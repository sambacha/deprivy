import { isMobile as t } from "react-device-detect";
import { PrivyConnectorError as e } from "../errors.mjs";
import { formatConnectorError as r } from "./errors.mjs";
import { Injected6963WalletConnector as o } from "./injected.mjs";
import "ofetch";
import "@privy-io/js-sdk-core";
import "../svg/browser-extension-wallet-icon.mjs";
import "react/jsx-runtime";
import "../svg/metamask.mjs";
import "../svg/phantom.mjs";
import "./ethereum/index.mjs";
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
import "./privyProxyProvider.mjs";
class s extends o {
  disconnect() {
    console.warn("MetaMask does not support programmatic disconnect.");
  }
  async promptConnection() {
    try {
      if (!t) {
        await this.proxyProvider.request({
          method: "wallet_requestPermissions",
          params: [{
            eth_accounts: {}
          }]
        });
      }
      let r = await this.proxyProvider.request({
        method: "eth_requestAccounts"
      });
      if (!r || r.length === 0 || !r[0]) {
        throw new e("Unable to retrieve accounts");
      }
      await this.syncAccounts([r[0]]);
    } catch (t) {
      throw r(t);
    }
  }
}
export { s as MetamaskWalletConnector };
