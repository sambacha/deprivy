const e = ["google", "discord", "twitter", "github", "spotify", "instagram", "tiktok", "linkedin", "apple"];
const a = ["google-drive", "icloud"];
const t = ["sms", "totp", "passkey"];
const l = ["metamask", "phantom", "brave_wallet", "rainbow", "uniswap_wallet_extension", "uniswap_extension", "rabby_wallet", "bybit_wallet", "crypto.com_wallet_extension", "crypto.com_onchain", "coinbase_wallet", "coinbase_smart_wallet", "metamask", "trust", "safe", "rainbow", "uniswap", "zerion", "argent", "spot", "omni", "cryptocom", "blockchain", "safepal", "bitkeep", "zengo", "1inch", "binance", "exodus", "mew_wallet", "alphawallet", "keyring_pro", "mathwallet", "unstoppable", "obvious", "ambire", "internet_money_wallet", "coin98", "abc_wallet", "arculus_wallet", "haha", "cling_wallet", "broearn", "copiosa", "burrito_wallet", "enjin_wallet", "plasma_wallet", "avacus", "bee", "pitaka", "pltwallet", "minerva", "kryptogo", "prema", "slingshot", "kriptonio", "timeless", "secux", "bitizen", "blocto", "okx_wallet", "safemoon", "rabby_wallet", "bybit_wallet", "privy", "unknown", "phantom", "solflare", "glow"];
function o(e) {
  return l.includes(e);
}
const n = ["injected", "wallet_connect", "wallet_connect_v2", "coinbase_wallet", "embedded", "embedded_imported"];
export { l as ALL_WALLET_CLIENT_TYPES, n as SUPPORTED_CONNECTOR_TYPES, t as SUPPORTED_MFA_METHODS, e as SUPPORTED_OAUTH_PROVIDERS, a as SUPPORTED_RECOVERY_PROVIDERS, o as isWalletClientType };
