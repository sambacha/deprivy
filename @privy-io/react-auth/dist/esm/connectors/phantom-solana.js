import { PHANTOM_DATA_URI as o } from "../svg/phantom.mjs";
import { SolanaNullConnector as r } from "./solana/SolanaNullConnector.mjs";
import "react/jsx-runtime";
import "./solana/index.mjs";
import "../hooks/index.mjs";
import "../types.mjs";
import "./base.mjs";
import "eventemitter3";
import "./errors.mjs";
import "@privy-io/js-sdk-core";
import "../errors.mjs";
import "ofetch";
import "../constants.mjs";
import "./privyProxyProvider.mjs";
class t extends r {
  get walletBranding() {
    return {
      name: "Phantom",
      icon: o,
      id: "phantom"
    };
  }
  constructor() {
    super({
      name: "Phantom"
    }, false);
  }
}
export { t as PhantomSolanaNullWalletConnector };
