import { jsxs as o, Fragment as t, jsx as n } from "react/jsx-runtime";
import i from "@heroicons/react/24/outline/CheckCircleIcon";
import { styled as r } from "styled-components";
import { PrimaryButton as s } from "../../components/Button.mjs";
import { CircleBackground as e } from "../../components/CircleBackground.mjs";
import { RefactorSpacerBottom as m } from "../../components/Layouts.mjs";
import { BlobbyFooter as c } from "../../components/ModalFooter.mjs";
import { ModalHeader as a } from "../../components/ModalHeader.mjs";
import { CenteredScreenHeader as p } from "../../components/ScreenHeader.mjs";
import { SolanaTransactionDetails as l } from "../../components/embedded-wallets/SolanaTransactionDetails.mjs";
import j from "../../components/layout/StackedContainer.mjs";
import { Grow as h } from "../LandingScreen/styles.mjs";
import "../../components/Loader.mjs";
import "../../configuration/context.mjs";
import "react";
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
import "../../svg/protected-by-privy.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../../hooks/internal-context.mjs";
import "../../hooks/index.mjs";
import "@heroicons/react/24/outline/ChevronDownIcon";
import "../../components/ui/layout/Row.mjs";
import "../../components/ui/typography/LabelSm.mjs";
import "../../components/ui/typography/Value.mjs";
import "../../components/ui/animation/LoadingSkeleton.mjs";
import "../../components/embedded-wallets/PriceDisplay.mjs";
import "viem";
import "../../lib/ethers.mjs";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
import "../../lib/solana/transaction.mjs";
import "../../utils/buffer/readBigInt64LE.mjs";
import "../../components/embedded-wallets/WalletLink.mjs";
const d = ({
  instructions: r,
  fees: s,
  onClose: d,
  receiptHeader: f,
  receiptDescription: g,
  transactionInfo: y,
  solPrice: b,
  rpcEndpoint: k
}) => /*#__PURE__*/o(t, {
  children: [/*#__PURE__*/n(a, {
    onClose: d
  }), /*#__PURE__*/n(j, {
    style: {
      marginBottom: "16px"
    },
    children: /*#__PURE__*/o("div", {
      children: [/*#__PURE__*/n(e, {
        color: "var(--privy-color-success-light)"
      }), /*#__PURE__*/n(i, {
        height: 38,
        width: 38,
        strokeWidth: 2,
        stroke: "var(--privy-color-success)"
      })]
    })
  }), /*#__PURE__*/n(p, {
    title: f ?? "Transaction complete!",
    description: g ?? "You're all set."
  }), /*#__PURE__*/n(l, {
    solPrice: b,
    instructions: r,
    fees: s,
    transactionInfo: y,
    rpcEndpoint: k
  }), /*#__PURE__*/n(h, {}), /*#__PURE__*/n(u, {
    loading: false,
    onClick: d,
    children: "Close"
  }), /*#__PURE__*/n(m, {}), /*#__PURE__*/n(c, {})]
});
let u = /*#__PURE__*/r(s).withConfig({
  displayName: "SubmitButton",
  componentId: "sc-4dd23752-0"
})(["&&{margin-top:24px;}transition:color 350ms ease,background-color 350ms ease;"]);
export { d as SolanaTransactionReceiptView };
