const t = "popup-privy-oauth";
const p = "PRIVY_OAUTH_USE_BROADCAST_CHANNEL";
function r(t) {
  return t.startsWith("privy:");
}
export { t as CROSS_APP_BROADCAST_CHANNEL_NAME, p as USE_BROADCAST_CHANNEL_EVENT_TYPE, r as isPrivyTheOAuthProvider };
