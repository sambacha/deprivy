import { CoinbaseWalletSDK as i } from "@coinbase/wallet-sdk";
import { PrivyConnectorError as t } from "../errors.mjs";
import { COINBASE_WALLET_DATA_URI as e } from "../svg/coinbase-wallet.mjs";
import { DEFAULT_SUPPORTED_CHAIN_IDS as s } from "./chains/index.mjs";
import { formatConnectorError as o } from "./errors.mjs";
import { EthereumWalletConnector as n } from "./ethereum/index.mjs";
import { PrivyProxyProvider as a } from "./privyProxyProvider.mjs";
import "ofetch";
import "react/jsx-runtime";
import "./chains/arbitrum.mjs";
import "./chains/arbitrumSepolia.mjs";
import "./chains/avalanche.mjs";
import "./chains/avalancheFuji.mjs";
import "./chains/base.mjs";
import "./chains/baseSepolia.mjs";
import "./chains/berachainArtio.mjs";
import "./chains/celo.mjs";
import "./chains/celoAlfajores.mjs";
import "./chains/filecoin.mjs";
import "./chains/filecoinCalibration.mjs";
import "./chains/garnetHolesky.mjs";
import "./chains/holesky.mjs";
import "./chains/linea.mjs";
import "./chains/lineaTestnet.mjs";
import "./chains/lukso.mjs";
import "./chains/mainnet.mjs";
import "./chains/optimism.mjs";
import "./chains/optimismSepolia.mjs";
import "./chains/polygon.mjs";
import "./chains/polygonAmoy.mjs";
import "./chains/redstone.mjs";
import "./chains/sepolia.mjs";
import "./chains/zora.mjs";
import "./chains/zoraSepolia.mjs";
import "./chains/zoraTestnet.mjs";
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
let r;
let m = [1, 11155111, 137, 10, 8453, 84532, 42161, 7777777, 43114, 56];
let c = (i, t) => i.makeWeb3Provider({
  options: t
});
class l extends n {
  async initialize() {
    await this.syncAccounts();
    this.initialized = true;
    this.emit("initialized");
  }
  async connect(i) {
    if (i.showPrompt) {
      await this.promptConnection();
    }
    if (await this.isConnected()) {
      return this.getConnectedWallet();
    } else {
      return null;
    }
  }
  disconnect() {
    this.proxyProvider.walletProvider.disconnect();
    this.onDisconnect();
  }
  get walletBranding() {
    return {
      name: this.displayName,
      icon: e,
      id: "com.coinbase.wallet"
    };
  }
  async promptConnection() {
    try {
      let i = await this.proxyProvider.request({
        method: "eth_requestAccounts"
      });
      if (!i || i.length === 0 || !i[0]) {
        throw new t("Unable to retrieve accounts");
      }
      this.connected = true;
      await this.syncAccounts([i[0]]);
    } catch (i) {
      throw o(i);
    }
  }
  updateConnectionPreference(i) {
    this.connectionOptions = i;
    this.walletClientType = i === "smartWalletOnly" ? "coinbase_smart_wallet" : "coinbase_wallet";
    this.proxyProvider.setWalletProvider(c(r, this.connectionOptions));
  }
  constructor(t, e, o, n, l, p) {
    super("coinbase_wallet", t, e, o);
    this.connectorType = "coinbase_wallet";
    this.displayName = "Coinbase Wallet";
    this.proxyProvider = new a(undefined, this.rpcTimeoutDuration);
    this.subscribeListeners();
    this.connectionOptions = n.coinbaseWallet.connectionOptions ?? "all";
    this.walletClientType = this.connectionOptions === "smartWalletOnly" ? "coinbase_smart_wallet" : "coinbase_wallet";
    if (this.walletClientType === "coinbase_smart_wallet") {
      this.displayName = "Coinbase Smart Wallet";
    }
    if (!r) {
      let o = [e.id].concat(t.map(i => i.id));
      let n = this.connectionOptions !== "eoaOnly" ? o.filter(i => !m.includes(i)) : [];
      if (n.length > 0 && !n.every(i => s.has(i))) {
        console.info(`The configured chains are not supported by Coinbase Smart Wallet: ${n.join(", ")}`);
      }
      r = new i({
        appName: l,
        appLogoUrl: p,
        appChainIds: o
      });
    }
    this.proxyProvider.setWalletProvider(c(r, this.connectionOptions));
  }
}
export { l as CoinbaseWalletConnector };
