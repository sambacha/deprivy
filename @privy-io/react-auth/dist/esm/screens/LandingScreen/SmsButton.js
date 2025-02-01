import { jsxs as o, Fragment as t, jsx as n } from "react/jsx-runtime";
import { ModalScreen as i } from "../index.mjs";
import s from "@heroicons/react/24/outline/PhoneIcon";
import { useRef as r } from "react";
import { ConnectPhoneNumberForm as e } from "../../components/ConnectPhoneForm.mjs";
import { useCaptcha as m } from "../../hooks/captcha-context.mjs";
import { usePrivyInternal as c } from "../../hooks/internal-context.mjs";
import { usePrivyModal as a } from "../../hooks/modal-context.mjs";
import { usePrivyContext as p } from "../../hooks/privy-context.mjs";
import { Hide as l, LoginMethodButton as h } from "./styles.mjs";
import "styled-components";
import "@privy-io/js-sdk-core";
import "../../recent-login/context.mjs";
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
import "../../components/Button.mjs";
import "../../components/Loader.mjs";
import "../../components/PhoneCountryDropdown.mjs";
import "../../components/ui/chips/Chip.mjs";
import "../../components/ui/animation/LoadingSkeleton.mjs";
import "../../components/PrefetchedImage.mjs";
import "../../hooks/index.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
const j = ({
  isEditable: j,
  setIsEditable: u,
  defaultValue: d
}) => {
  let f = r(null);
  let {
    authenticated: g
  } = p();
  let {
    navigate: S,
    setModalData: b,
    currentScreen: y,
    data: k
  } = a();
  let {
    initLoginWithSms: C
  } = c();
  let {
    enabled: E,
    token: x
  } = m();
  /*#__PURE__*/
  return o(t, {
    children: [/*#__PURE__*/n(l, {
      $if: !j,
      children: /*#__PURE__*/n(e, {
        ref: f,
        onSubmit: async function ({
          qualifiedPhoneNumber: o
        }) {
          if (!E || x || g) {
            try {
              await C({
                phoneNumber: o,
                captchaToken: x,
                withPrivyUi: true,
                disableSignup: k?.login?.disableSignup
              });
              S(i.AWAITING_PASSWORDLESS_CODE);
            } catch (o) {
              b({
                errorModalData: {
                  error: o,
                  previousScreen: y || i.LANDING
                }
              });
              S(i.ERROR_SCREEN);
            }
          } else {
            b({
              captchaModalData: {
                callback: t => C({
                  phoneNumber: o,
                  captchaToken: t,
                  withPrivyUi: true,
                  disableSignup: k?.login?.disableSignup
                }),
                userIntentRequired: false,
                onSuccessNavigateTo: i.AWAITING_PASSWORDLESS_CODE,
                onErrorNavigateTo: i.ERROR_SCREEN
              }
            });
            S(i.CAPTCHA_SCREEN);
          }
        },
        defaultValue: d
      })
    }), /*#__PURE__*/n(l, {
      $if: j,
      children: /*#__PURE__*/o(h, {
        onClick: () => {
          u();
          setTimeout(() => {
            f.current?.focus();
          }, 0);
        },
        children: [/*#__PURE__*/n(s, {}), " Continue with SMS"]
      })
    })]
  });
};
export { j as SmsButton };
