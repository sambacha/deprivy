import { Apple as o } from "../../svg/apple.mjs";
import { Discord as m } from "../../svg/discord.mjs";
import { Github as t } from "../../svg/github.mjs";
import { GlobeError as n } from "../../svg/globe.mjs";
import { Google as e } from "../../svg/google.mjs";
import { Instagram as i } from "../../svg/instagram.mjs";
import { LinkedIn as r } from "../../svg/linkedin.mjs";
import { Spotify as p } from "../../svg/spotify.mjs";
import { Tiktok as s } from "../../svg/tiktok.mjs";
import { Twitter as g } from "../../svg/twitter.mjs";
import "react/jsx-runtime";
import "@heroicons/react/24/outline/GlobeAltIcon";
let a = {
  google: {
    name: "Google",
    component: e
  },
  discord: {
    name: "Discord",
    component: m
  },
  github: {
    name: "Github",
    component: t
  },
  linkedin: {
    name: "LinkedIn",
    component: r
  },
  twitter: {
    name: "Twitter",
    component: g
  },
  spotify: {
    name: "Spotify",
    component: p
  },
  instagram: {
    name: "Instagram",
    component: i
  },
  tiktok: {
    name: "Tiktok",
    component: s
  },
  apple: {
    name: "Apple",
    component: o
  }
};
const c = o => o in a ? a[o] : {
  name: "Unknown",
  component: n
};
export { c as getDisplayForProvider };
