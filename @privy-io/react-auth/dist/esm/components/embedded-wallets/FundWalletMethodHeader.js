import { jsx as o } from "react/jsx-runtime";
import { usePrivyModal as n } from "../../hooks/modal-context.mjs";
import { ModalScreen as i } from "../../screens/index.mjs";
import { ModalHeader as t } from "../ModalHeader.mjs";
import "react";
import "../PrefetchedImage.mjs";
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
import "../../hooks/index.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "styled-components";
import "../../hooks/internal-context.mjs";
function r({
  title: r
}) {
  let {
    currentScreen: s,
    navigateBack: c,
    navigate: e,
    data: m,
    setModalData: a
  } = n(); /*#__PURE__*/
  return o(t, {
    title: r,
    backFn: s === i.FUNDING_MANUAL_TRANSFER_SCREEN ? c : s === m?.funding?.methodScreen ? m.funding.comingFromSendTransactionScreen ? () => e(i.EMBEDDED_WALLET_SEND_TRANSACTION_SCREEN) : undefined : m?.funding?.methodScreen ? () => {
      let o = m.funding;
      o.usingDefaultFundingMethod &&= false;
      a({
        funding: o
      });
      e(o.methodScreen);
    } : undefined
  });
}
export { r as default };
