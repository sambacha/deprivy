import { jsx as e } from "react/jsx-runtime";
import { KeyRound as t } from "../icons/KeyRound.mjs";
import { Login as a } from "../icons/Login.mjs";
import { Mail as r } from "../icons/Mail.mjs";
import { Phone as s } from "../icons/Phone.mjs";
import { TelegramLogo as i, FarcasterLogo as h, LinkedInLogo as c, TiktokLogo as o, InstagramLogo as n, SpotifyLogo as u, GithubLogo as l, DiscordLogo as w, TwitterLogo as m, AppleLogo as d, GoogleLogo as g } from "../icons/Socials.mjs";
import { TicketCheck as p } from "../icons/TicketCheck.mjs";
import { WalletCards as _ } from "../icons/WalletCards.mjs";
import { ZerionWalletLogo as f, RainbowWalletLogo as b, RabbyWalletLogo as y, PhantomWalletLogo as k, CoinbaseWalletLogo as j, MetamaskWalletLogo as C } from "../icons/Wallets.mjs";
function x({
  method: x,
  size: z = 14
}) {
  switch (x.toLowerCase()) {
    case "email":
      /*#__PURE__*/return e(r, {
        width: z,
        height: z
      });
    case "phone":
      /*#__PURE__*/return e(s, {
        width: z,
        height: z
      });
    case "google":
      /*#__PURE__*/return e(g, {
        width: z,
        height: z
      });
    case "apple":
      /*#__PURE__*/return e(d, {
        width: z,
        height: z
      });
    case "twitter":
      /*#__PURE__*/return e(m, {
        width: z,
        height: z
      });
    case "discord":
      /*#__PURE__*/return e(w, {
        width: z,
        height: z
      });
    case "github":
      /*#__PURE__*/return e(l, {
        width: z,
        height: z
      });
    case "spotify":
      /*#__PURE__*/return e(u, {
        width: z,
        height: z
      });
    case "instagram":
      /*#__PURE__*/return e(n, {
        width: z,
        height: z
      });
    case "tiktok":
      /*#__PURE__*/return e(o, {
        width: z,
        height: z
      });
    case "linkedin":
      /*#__PURE__*/return e(c, {
        width: z,
        height: z
      });
    case "farcaster":
      /*#__PURE__*/return e(h, {
        width: z,
        height: z
      });
    case "telegram":
      /*#__PURE__*/return e(i, {
        width: z,
        height: z
      });
    case "metamask":
      /*#__PURE__*/return e(C, {
        width: z,
        height: z
      });
    case "coinbase":
    case "coinbase_wallet":
      /*#__PURE__*/return e(j, {
        width: z,
        height: z
      });
    case "phantom":
      /*#__PURE__*/return e(k, {
        width: z,
        height: z
      });
    case "rabby":
    case "rabby_wallet":
      /*#__PURE__*/return e(y, {
        width: z,
        height: z
      });
    case "rainbow":
      /*#__PURE__*/return e(b, {
        width: z,
        height: z
      });
    case "zerion":
      /*#__PURE__*/return e(f, {
        width: z,
        height: z
      });
    case "passkey":
      /*#__PURE__*/return e(t, {
        width: z,
        height: z
      });
    case "custom_auth":
      /*#__PURE__*/return e(p, {
        width: z,
        height: z
      });
    case "wallet":
    case "cross_app":
    case "external_wallet":
    case "embedded_wallet":
    case "smart_wallet":
    case "unknown":
      /*#__PURE__*/return e(_, {
        width: z,
        height: z
      });
    default:
      /*#__PURE__*/return e(a, {
        width: z,
        height: z
      });
  }
}
function z(e) {
  switch (e.type) {
    case "email":
    case "phone":
    case "passkey":
    case "farcaster":
    case "telegram":
    case "custom_auth":
    case "smart_wallet":
      return e.type;
    case "google_oauth":
    case "apple_oauth":
    case "twitter_oauth":
    case "discord_oauth":
    case "github_oauth":
    case "spotify_oauth":
    case "instagram_oauth":
    case "tiktok_oauth":
    case "linkedin_oauth":
      return e.type.replace("_oauth", "");
    case "wallet":
      switch (e.walletClientType) {
        case "metamask":
        case "coinbase":
        case "coinbase_wallet":
        case "phantom":
        case "rabby":
        case "rabby_wallet":
        case "rainbow":
        case "zerion":
          return e.walletClientType;
        default:
          return "wallet";
      }
    case "cross_app":
      return "wallet";
    default:
      return "";
  }
}
export { x as LoginMethodIcon, z as getLinkedAccountLoginMethodName };
