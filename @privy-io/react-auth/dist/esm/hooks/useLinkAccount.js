import { useContext as i } from "react";
import { usePrivyEventSubscription as n } from "./events-context.mjs";
import { PrivyContext as l } from "./privy-context.mjs";
import "./index.mjs";
function k(k) {
  let {
    linkEmail: t,
    linkPhone: e,
    linkWallet: o,
    linkGoogle: r,
    linkApple: m,
    linkTwitter: a,
    linkDiscord: p,
    linkGithub: c,
    linkLinkedIn: s,
    linkTiktok: f,
    linkSpotify: g,
    linkInstagram: T,
    linkTelegram: d,
    linkFarcaster: u
  } = i(l);
  n("linkAccount", k);
  return {
    linkEmail: t,
    linkPhone: e,
    linkWallet: o,
    linkGoogle: r,
    linkApple: m,
    linkTwitter: a,
    linkDiscord: p,
    linkGithub: c,
    linkLinkedIn: s,
    linkTiktok: f,
    linkSpotify: g,
    linkInstagram: T,
    linkFarcaster: u,
    linkTelegram: d
  };
}
export { k as useLinkAccount };
