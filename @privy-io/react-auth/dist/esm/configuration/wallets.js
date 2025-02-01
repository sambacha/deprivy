import { defaultClientConfig as e } from "./defaultClientConfig.mjs";
import "../constants.mjs";
let t = new Set(["coinbase_wallet", "cryptocom", "metamask", "okx_wallet", "phantom", "rainbow", "uniswap", "zerion", "universal_profile", "bybit_wallet", "wallet_connect", "detected_wallets", "detected_solana_wallets", "detected_ethereum_wallets", "rabby_wallet", "safe"]);
let l = e => t.has(e);
let a = (e, t, l) => l.indexOf(e) === t;
const o = ({
  input: t,
  overrides: o
}) => o ? o.primary.concat(o.overflow ?? []).filter(l).filter(a) : t ? t.filter(l).filter(a) : e.appearance.walletList;
export { o as toWalletListConfig };
