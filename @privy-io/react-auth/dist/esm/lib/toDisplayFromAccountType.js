let t = {
  apple_oauth: "apple",
  custom_auth: "custom",
  discord_oauth: "discord",
  email: "email",
  farcaster: "farcaster",
  github_oauth: "github",
  google_oauth: "google",
  instagram_oauth: "instagram",
  linkedin_oauth: "linkedin",
  passkey: "passkey",
  phone: "sms",
  spotify_oauth: "spotify",
  telegram: "telegram",
  tiktok_oauth: "tiktok",
  twitter_oauth: "twitter",
  wallet: "siwe",
  smart_wallet: "siwe",
  cross_app: "privy:",
  guest: "guest"
};
const a = a => {
  let e = t[a];
  if (a === "wallet" || a === "phone") {
    return {
      displayName: a,
      loginMethod: e
    };
  } else {
    return {
      displayName: e,
      loginMethod: e
    };
  }
};
export { a as toDisplayFromAccountType };
