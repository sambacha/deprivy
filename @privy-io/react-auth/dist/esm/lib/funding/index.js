import { ModalScreen as o } from "../../screens/index.mjs";
export { prepareFundingModalData, prepareSolanaFundingModalData } from "./prepareFundingModalData.mjs";
import "../../errors.mjs";
import "ofetch";
import "../caip2.mjs";
import "./filterSupportedOptions.mjs";
import "./moonpay/index.mjs";
import "react";
import "../../connectors/chains/arbitrum.mjs";
import "../../connectors/chains/base.mjs";
import "../../connectors/chains/celo.mjs";
import "../../connectors/chains/mainnet.mjs";
import "../../connectors/chains/optimism.mjs";
import "../../connectors/chains/polygon.mjs";
import "../../constants.mjs";
import "../../hooks/internal-context.mjs";
import "../../hooks/index.mjs";
import "../../hooks/modal-context.mjs";
import "react/jsx-runtime";
import "../../components/PrefetchedImage.mjs";
import "../../configuration/context.mjs";
import "../../config.mjs";
import "../../configuration/defaultClientConfig.mjs";
import "../../configuration/login-methods.mjs";
import "../../configuration/wallets.mjs";
import "../../connectors/chains/index.mjs";
import "../../connectors/chains/arbitrumSepolia.mjs";
import "../../connectors/chains/avalanche.mjs";
import "../../connectors/chains/avalancheFuji.mjs";
import "../../connectors/chains/baseSepolia.mjs";
import "../../connectors/chains/berachainArtio.mjs";
import "../../connectors/chains/celoAlfajores.mjs";
import "../../connectors/chains/filecoin.mjs";
import "../../connectors/chains/filecoinCalibration.mjs";
import "../../connectors/chains/garnetHolesky.mjs";
import "../../connectors/chains/holesky.mjs";
import "../../connectors/chains/linea.mjs";
import "../../connectors/chains/lineaTestnet.mjs";
import "../../connectors/chains/lukso.mjs";
import "../../connectors/chains/optimismSepolia.mjs";
import "../../connectors/chains/polygonAmoy.mjs";
import "../../connectors/chains/redstone.mjs";
import "../../connectors/chains/sepolia.mjs";
import "../../connectors/chains/zora.mjs";
import "../../connectors/chains/zoraSepolia.mjs";
import "../../connectors/chains/zoraTestnet.mjs";
import "../../connectors/chains/utils.mjs";
import "../solana/index.mjs";
import "../../theme.mjs";
import "tinycolor2";
import "../cybr53.mjs";
import "./analytics.mjs";
import "./usdc.mjs";
const n = [o.FUNDING_METHOD_SELECTION_SCREEN, o.FUNDING_TRANSFER_FROM_WALLET_SCREEN, o.FUNDING_AWAITING_TRANSFER_FROM_EXTERNAL_WALLET_SCREEN, o.FUNDING_AWAITING_TRANSFER_FROM_EXTERNAL_SOLANA_WALLET_SCREEN, o.FUNDING_AWAITING_EVM_TO_SOL_BRIDGING_SCREEN, o.FUNDING_AWAITING_SOL_TO_EVM_BRIDGING_SCREEN, o.FUNDING_MANUAL_TRANSFER_SCREEN, o.MOONPAY_STATUS_SCREEN];
const s = {
  [o.FUNDING_METHOD_SELECTION_SCREEN]: null,
  [o.FUNDING_TRANSFER_FROM_WALLET_SCREEN]: "external",
  [o.FUNDING_AWAITING_TRANSFER_FROM_EXTERNAL_WALLET_SCREEN]: "external",
  [o.FUNDING_AWAITING_TRANSFER_FROM_EXTERNAL_SOLANA_WALLET_SCREEN]: "external",
  [o.FUNDING_AWAITING_EVM_TO_SOL_BRIDGING_SCREEN]: "external",
  [o.FUNDING_AWAITING_SOL_TO_EVM_BRIDGING_SCREEN]: "external",
  [o.FUNDING_MANUAL_TRANSFER_SCREEN]: "manual",
  [o.MOONPAY_STATUS_SCREEN]: "moonpay"
};
export { n as FUNDING_SCREENS, s as fundingScreenMethodMap };
