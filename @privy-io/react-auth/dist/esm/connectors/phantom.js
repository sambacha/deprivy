import { PHANTOM_DATA_URI as t } from "../svg/phantom.mjs";
import { EthereumNullConnector as r } from "./ethereum/EthereumNullConnector.mjs";
import "react/jsx-runtime";
import "./ethereum/index.mjs";
import "viem/utils";
import "../constants.mjs";
import "../errors.mjs";
import "ofetch";
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
import "./errors.mjs";
import "@privy-io/js-sdk-core";
class e extends r {
  get walletBranding() {
    return {
      name: "Phantom",
      icon: t,
      id: "phantom"
    };
  }
  constructor(t) {
    super("phantom", t);
  }
}
export { e as PhantomEthereumNullWalletConnector };
