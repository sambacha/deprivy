import { jsxs as o, Fragment as t, jsx as n } from "react/jsx-runtime";
import i from "@heroicons/react/24/outline/EnvelopeIcon";
import { useRef as s } from "react";
import { ConnectEmailForm as m } from "../../components/ConnectEmailForm.mjs";
import { Hide as r, LoginMethodButton as c } from "./styles.mjs";
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
import "../../errors.mjs";
import "ofetch";
import "../../hooks/captcha-context.mjs";
import "../../hooks/index.mjs";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
import "../../hooks/internal-context.mjs";
import "../../hooks/modal-context.mjs";
import "../../components/PrefetchedImage.mjs";
import "../index.mjs";
import "../../hooks/privy-context.mjs";
import "../../recent-login/context.mjs";
import "../../hooks/events-context.mjs";
import "../../storage.mjs";
import "../../components/Button.mjs";
import "styled-components";
import "../../components/Loader.mjs";
import "../../components/ui/chips/Chip.mjs";
import "../../components/ui/animation/LoadingSkeleton.mjs";
import "../../components/ui/forms/EmailInputForm.mjs";
import "../../components/ui/typography/ErrorMessage.mjs";
const e = ({
  isEditable: e,
  setIsEditable: p,
  defaultValue: a
}) => {
  let j = s(null); /*#__PURE__*/
  return o(t, {
    children: [/*#__PURE__*/n(r, {
      $if: !e,
      children: /*#__PURE__*/n(m, {
        ref: j,
        defaultValue: a
      })
    }), /*#__PURE__*/n(r, {
      $if: e,
      children: /*#__PURE__*/o(c, {
        onClick: () => {
          p();
          setTimeout(() => {
            j.current?.focus();
          }, 0);
        },
        children: [/*#__PURE__*/n(i, {}), " Continue with Email"]
      })
    })]
  });
};
export { e as EmailButton };
