import { isMobile as e } from "react-device-detect";
import { isPhantomInstalled as t } from "./is-wallet-installed.mjs";
import "./get-legacy-injected-providers.mjs";
const o = (o, n) => {
  let r = encodeURIComponent(`${new URL(window.location.href).href.replace(/\/$/g, "")}?privy_connector=${n ? "solana_adapter" : "injected"}&privy_wallet_client=${n ? "phantom_solana" : "phantom"}`);
  if (!t() && e) {
    return `${o ? "phantom://" : "https://phantom.app/ul/"}browse/${r}?ref=${r}`;
  }
};
export { o as getPhantomMobileRedirect };
