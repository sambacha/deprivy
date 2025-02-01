import { jsxs as o, jsx as i } from "react/jsx-runtime";
import { ModalScreen as t } from "../index.mjs";
import { useState as s } from "react";
import { styled as m } from "styled-components";
import { Chip as n } from "../../components/ui/chips/Chip.mjs";
import { useCaptcha as r } from "../../hooks/captcha-context.mjs";
import { usePrivyInternal as e } from "../../hooks/internal-context.mjs";
import { usePrivyModal as c } from "../../hooks/modal-context.mjs";
import { toDisplayFromAccountType as a } from "../../lib/toDisplayFromAccountType.mjs";
import { useRecentlyUsedLogin as p } from "../../recent-login/context.mjs";
import { Apple as l } from "../../svg/apple.mjs";
import { Discord as j } from "../../svg/discord.mjs";
import { Github as g } from "../../svg/github.mjs";
import { Google as h } from "../../svg/google.mjs";
import { Instagram as d } from "../../svg/instagram.mjs";
import { LinkedIn as f } from "../../svg/linkedin.mjs";
import { Spotify as u } from "../../svg/spotify.mjs";
import { Tiktok as y } from "../../svg/tiktok.mjs";
import { Twitter as b } from "../../svg/twitter.mjs";
import { LoginMethodButton as k } from "./styles.mjs";
import "../../components/ui/animation/LoadingSkeleton.mjs";
import "../../hooks/index.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
import "../../components/PrefetchedImage.mjs";
import "../../configuration/context.mjs";
import "../../config.mjs";
import "../../configuration/defaultClientConfig.mjs";
import "../../constants.mjs";
import "../../configuration/login-methods.mjs";
import "../../configuration/wallets.mjs";
import "../../connectors/chains/index.mjs";
import "../../connectors/chains/arbitrum.mjs";
import "../../connectors/chains/arbitrumSepolia.mjs";
import "../../connectors/chains/avalanche.mjs";
import "../../connectors/chains/avalancheFuji.mjs";
import "../../connectors/chains/base.mjs";
import "../../connectors/chains/baseSepolia.mjs";
import "../../connectors/chains/berachainArtio.mjs";
import "../../connectors/chains/celo.mjs";
import "../../connectors/chains/celoAlfajores.mjs";
import "../../connectors/chains/filecoin.mjs";
import "../../connectors/chains/filecoinCalibration.mjs";
import "../../connectors/chains/garnetHolesky.mjs";
import "../../connectors/chains/holesky.mjs";
import "../../connectors/chains/linea.mjs";
import "../../connectors/chains/lineaTestnet.mjs";
import "../../connectors/chains/lukso.mjs";
import "../../connectors/chains/mainnet.mjs";
import "../../connectors/chains/optimism.mjs";
import "../../connectors/chains/optimismSepolia.mjs";
import "../../connectors/chains/polygon.mjs";
import "../../connectors/chains/polygonAmoy.mjs";
import "../../connectors/chains/redstone.mjs";
import "../../connectors/chains/sepolia.mjs";
import "../../connectors/chains/zora.mjs";
import "../../connectors/chains/zoraSepolia.mjs";
import "../../connectors/chains/zoraTestnet.mjs";
import "../../connectors/chains/utils.mjs";
import "../../lib/solana/index.mjs";
import "../../theme.mjs";
import "tinycolor2";
import "../../lib/cybr53.mjs";
import "../../hooks/events-context.mjs";
import "../../storage.mjs";
let v = {
  apple: {
    logo: /*#__PURE__*/i(l, {}),
    displayName: "Apple"
  },
  discord: {
    logo: /*#__PURE__*/i(j, {}),
    displayName: "Discord"
  },
  github: {
    logo: /*#__PURE__*/i(g, {}),
    displayName: "GitHub"
  },
  google: {
    logo: /*#__PURE__*/i(h, {}),
    displayName: "Google"
  },
  linkedin: {
    logo: /*#__PURE__*/i(f, {}),
    displayName: "LinkedIn"
  },
  spotify: {
    logo: /*#__PURE__*/i(u, {}),
    displayName: "Spotify"
  },
  instagram: {
    logo: /*#__PURE__*/i(d, {}),
    displayName: "Instagram"
  },
  twitter: {
    logo: /*#__PURE__*/i(b, {}),
    displayName: "Twitter"
  },
  tiktok: {
    logo: /*#__PURE__*/i(y, {}),
    displayName: "TikTok"
  }
};
const N = ({
  provider: m
}) => {
  let {
    enabled: n,
    token: l
  } = r();
  let {
    navigate: j,
    setModalData: g,
    data: h
  } = c();
  let [d, f] = s(false);
  let {
    initLoginWithOAuth: u
  } = e();
  let {
    accountType: y
  } = p();
  let b = y ? a(y) : null;
  let {
    displayName: N,
    logo: C
  } = v[m];
  /*#__PURE__*/
  return o(k, {
    onClick: () => {
      f(true);
      if (n && !l) {
        g({
          captchaModalData: {
            callback: o => u(m, o, h?.login?.disableSignup),
            userIntentRequired: true,
            onSuccessNavigateTo: null,
            onErrorNavigateTo: t.ERROR_SCREEN
          }
        });
        j(t.CAPTCHA_SCREEN);
      } else {
        u(m, undefined, h?.login?.disableSignup);
      }
    },
    disabled: d,
    children: [C, " ", N, b?.loginMethod === m && /*#__PURE__*/i(x, {
      color: "gray",
      children: "Recent"
    })]
  });
};
let x = /*#__PURE__*/m(n).withConfig({
  displayName: "StyledChip",
  componentId: "sc-7d3bb993-0"
})(["margin-left:auto;"]);
export { N as SocialButton };
