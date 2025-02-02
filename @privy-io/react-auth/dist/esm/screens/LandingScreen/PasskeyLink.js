import { jsx as o } from "react/jsx-runtime";
import { ModalScreen as n } from "../index.mjs";
import { styled as t, css as i } from "styled-components";
import { useCaptcha as s } from "../../hooks/captcha-context.mjs";
import { usePrivyInternal as r } from "../../hooks/internal-context.mjs";
import { usePrivyModal as c } from "../../hooks/modal-context.mjs";
import "../../hooks/index.mjs";
import "react";
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
const e = () => {
  let {
    enabled: t,
    token: i
  } = s();
  let {
    navigate: e,
    setModalData: m,
    app: p
  } = c();
  let {
    initLoginWithPasskey: l
  } = r();
  /*#__PURE__*/
  return o(a, {
    onClick: () => {
      if (p.loginConfig.passkeysForSignupEnabled) {
        e(n.SELECT_PASSKEY_SIGNUP_OR_LOGIN);
      } else {
        (async () => {
          if (t && !i) {
            m({
              passkeyAuthModalData: {
                passkeySignupFlow: false
              },
              captchaModalData: {
                callback: o => l({
                  captchaToken: o,
                  withPrivyUi: true
                }),
                userIntentRequired: false,
                onSuccessNavigateTo: n.AWAITING_PASSKEY_SYSTEM_DIALOGUE,
                onErrorNavigateTo: n.ERROR_SCREEN
              }
            });
            e(n.CAPTCHA_SCREEN);
          } else {
            await l({
              withPrivyUi: true
            });
            m({
              passkeyAuthModalData: {
                passkeySignupFlow: false
              }
            });
            e(n.AWAITING_PASSKEY_SYSTEM_DIALOGUE);
          }
        })();
      }
    },
    children: "I have a passkey"
  });
};
let m = /*#__PURE__*/i(["&&{width:100%;font-size:0.875rem;line-height:1rem;display:flex;gap:0.5rem;justify-content:center;align-items:center;padding:6px 8px;background-color:var(--privy-color-background);transition:background-color 200ms ease;color:var(--privy-color-accent) !important;:focus{outline:none;box-shadow:none;}}"]);
const a = /*#__PURE__*/t.button.withConfig({
  displayName: "StyledLink",
  componentId: "sc-9521c74b-0"
})(["", ""], m);
export { e as PasskeyLink, a as StyledLink };
