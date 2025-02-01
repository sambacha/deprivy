import { jsxs as o, Fragment as t, jsx as n } from "react/jsx-runtime";
import { styled as i } from "styled-components";
import { toHex as e } from "viem";
import { PrimaryButton as s } from "../../components/Button.mjs";
import { RefactorSpacerBottom as r } from "../../components/Layouts.mjs";
import { BlobbyFooter as m } from "../../components/ModalFooter.mjs";
import { ModalHeader as c } from "../../components/ModalHeader.mjs";
import { ScreenHeader as a } from "../../components/ScreenHeader.mjs";
import { Grow as p } from "../LandingScreen/styles.mjs";
import { TransactionDetails as l } from "../../components/embedded-wallets/TransactionDetails.mjs";
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
import "../../components/embedded-wallets/DisplayInfoItem.mjs";
import "../../components/embedded-wallets/PriceDisplay.mjs";
import "../../lib/ethers.mjs";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
import "../../lib/solana/transaction.mjs";
import "../../utils/buffer/readBigInt64LE.mjs";
import "../../components/embedded-wallets/TransactionTotal.mjs";
import "../../components/primitives/Accordion/index.mjs";
import "@heroicons/react/24/outline/ChevronDownIcon";
import "../../components/primitives/Accordion/AccordionContext.mjs";
import "../../components/embedded-wallets/WalletLink.mjs";
let j = ({
  gasUsed: o,
  effectiveGasPrice: t
}) => {
  if (o && t) {
    try {
      return e(o * t);
    } catch (o) {
      return;
    }
  }
};
const h = ({
  txn: i,
  receipt: e,
  transactionInfo: s,
  onClose: h,
  tokenPrice: f,
  tokenSymbol: u,
  receiptHeader: b,
  receiptDescription: g
}) => /*#__PURE__*/o(t, {
  children: [/*#__PURE__*/n(c, {
    onClose: h
  }), /*#__PURE__*/n(a, {
    title: b ?? "Transaction complete!",
    description: g ?? "You're all set."
  }), /*#__PURE__*/n(l, {
    tokenPrice: f,
    from: e.from,
    to: e.to,
    gas: j(e),
    txn: i,
    transactionInfo: s,
    tokenSymbol: u
  }), /*#__PURE__*/n(p, {}), /*#__PURE__*/n(d, {
    loading: false,
    onClick: h,
    children: "All Done"
  }), /*#__PURE__*/n(r, {}), /*#__PURE__*/n(m, {})]
});
let d = /*#__PURE__*/i(s).withConfig({
  displayName: "SubmitButton",
  componentId: "sc-824e1e82-0"
})(["&&{margin-top:24px;}transition:color 350ms ease,background-color 350ms ease;"]);
export { h as TransactionReceiptView };
