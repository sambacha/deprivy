import { jsxs as o, jsx as t } from "react/jsx-runtime";
import { ModalScreen as n } from "../index.mjs";
import { useState as i } from "react";
import { styled as s } from "styled-components";
import { ButtonLoader as r } from "../../components/Loader.mjs";
import { Chip as m } from "../../components/ui/chips/Chip.mjs";
import { useCaptcha as c } from "../../hooks/captcha-context.mjs";
import { usePrivyInternal as e } from "../../hooks/internal-context.mjs";
import { usePrivyModal as a } from "../../hooks/modal-context.mjs";
import { useRecentlyUsedLogin as p } from "../../recent-login/context.mjs";
import { Farcaster as l } from "../../svg/farcaster.mjs";
import { LoginMethodButton as j } from "./styles.mjs";
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
const h = () => {
  let [s, m] = i(false);
  let {
    currentScreen: h,
    navigate: f,
    setModalData: g,
    data: u
  } = a();
  let {
    enabled: C,
    token: y
  } = c();
  let {
    initLoginWithFarcaster: N
  } = e();
  let {
    accountType: S
  } = p();
  /*#__PURE__*/
  return o(j, {
    onClick: async () => {
      m(true);
      try {
        if (C && !y) {
          g({
            captchaModalData: {
              callback: o => N(o, u?.login?.disableSignup),
              userIntentRequired: true,
              onSuccessNavigateTo: n.AWAITING_FARCASTER_CONNECTION,
              onErrorNavigateTo: n.ERROR_SCREEN
            }
          });
          f(n.CAPTCHA_SCREEN);
        } else {
          await N(y, u?.login?.disableSignup);
          f(n.AWAITING_FARCASTER_CONNECTION);
        }
      } catch (o) {
        g({
          errorModalData: {
            error: o,
            previousScreen: h || n.LANDING
          }
        });
        f(n.ERROR_SCREEN);
      } finally {
        m(false);
      }
    },
    disabled: false,
    children: [/*#__PURE__*/t(l, {}), " Farcaster", s && /*#__PURE__*/t(r, {}), S === "farcaster" && /*#__PURE__*/t(d, {
      color: "gray",
      children: "Recent"
    })]
  });
};
let d = /*#__PURE__*/s(m).withConfig({
  displayName: "StyledChip",
  componentId: "sc-19f52850-0"
})(["margin-left:auto;"]);
export { h as FarcasterButton };
