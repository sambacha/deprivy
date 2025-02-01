import { PRIVY_WALLETCONNECT_CLOUD_ID as e } from "../constants.mjs";
const a = {
  appearance: {
    landingHeader: "Log in or sign up",
    theme: "light",
    accentColor: "#676FFF",
    walletList: ["detected_wallets", "metamask", "coinbase_wallet", "rainbow", "wallet_connect"]
  },
  walletConnectCloudProjectId: e,
  externalWallets: {
    coinbaseWallet: {
      connectionOptions: "all"
    }
  },
  embeddedWallets: {
    extendedCalldataDecoding: false
  },
  captchaEnabled: false,
  _render: {
    standalone: false
  },
  fundingMethodConfig: {
    moonpay: {
      useSandbox: false
    }
  }
};
export { a as defaultClientConfig };
