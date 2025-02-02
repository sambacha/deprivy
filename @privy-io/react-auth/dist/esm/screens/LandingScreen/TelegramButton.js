import { jsxs as o, jsx as t } from "react/jsx-runtime";
import { ModalScreen as n } from "../index.mjs";
import { useState as i } from "react";
import { styled as s } from "styled-components";
import { Chip as r } from "../../components/ui/chips/Chip.mjs";
import { useCaptcha as m } from "../../hooks/captcha-context.mjs";
import { usePrivyInternal as e } from "../../hooks/internal-context.mjs";
import { usePrivyModal as c } from "../../hooks/modal-context.mjs";
import { useRecentlyUsedLogin as a } from "../../recent-login/context.mjs";
import { Telegram as p } from "../../svg/telegram.mjs";
import { LoginMethodButton as l } from "./styles.mjs";
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
const j = () => {
  let {
    enabled: s,
    token: r
  } = m();
  let {
    navigate: j,
    setModalData: g,
    data: d
  } = c();
  let [f, u] = i(false);
  let {
    initLoginWithTelegram: y
  } = e();
  let {
    accountType: b
  } = a();
  async function x(o) {
    try {
      await y(o, d?.login?.disableSignup);
      g({
        telegramAuthModalData: {
          seamlessAuth: false
        }
      });
      j(n.TELEGRAM_AUTH_SCREEN);
    } catch (o) {
      console.error(o);
      u(false);
    }
  } /*#__PURE__*/
  return o(l, {
    onClick: async function () {
      u(true);
      if (s && !r) {
        g({
          captchaModalData: {
            callback: x,
            userIntentRequired: true,
            onSuccessNavigateTo: null,
            onErrorNavigateTo: n.ERROR_SCREEN
          }
        });
        j(n.CAPTCHA_SCREEN);
        return;
      }
      await x(r);
    },
    disabled: f,
    children: [/*#__PURE__*/t(p, {}), "Telegram", b === "telegram" && /*#__PURE__*/t(h, {
      color: "gray",
      children: "Recent"
    })]
  });
};
let h = /*#__PURE__*/s(r).withConfig({
  displayName: "StyledChip",
  componentId: "sc-f716a3a1-0"
})(["margin-left:auto;"]);
export { j as TelegramButton };
