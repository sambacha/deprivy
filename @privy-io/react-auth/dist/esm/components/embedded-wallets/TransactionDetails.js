import { jsx as o, jsxs as i } from "react/jsx-runtime";
import { styled as n } from "styled-components";
import { DisplayInfoItem as t } from "./DisplayInfoItem.mjs";
import { HeaderPriceDisplay as e } from "./PriceDisplay.mjs";
import { TransactionFeeRow as r, TransactionTotal as s } from "./TransactionTotal.mjs";
import { Accordion as c, AccordionPanel as m, AccordionTrigger as a, AccordionContent as l, AccordionAdditionalContent as p } from "../primitives/Accordion/index.mjs";
import { useAppConfig as h } from "../../configuration/context.mjs";
import { CHAIN_ID_MAINNET as j } from "../../constants.mjs";
import { WalletLink as d } from "./WalletLink.mjs";
import "viem";
import "../../lib/ethers.mjs";
import "../../hooks/internal-context.mjs";
import "react";
import "../../hooks/index.mjs";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
import "../../lib/solana/transaction.mjs";
import "../../lib/solana/index.mjs";
import "../../utils/buffer/readBigInt64LE.mjs";
import "../Layouts.mjs";
import "@heroicons/react/24/outline/ChevronDownIcon";
import "../primitives/Accordion/AccordionContext.mjs";
import "../../config.mjs";
import "../../configuration/defaultClientConfig.mjs";
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
import "../../theme.mjs";
import "tinycolor2";
import "../../lib/cybr53.mjs";
const f = ({
  from: n,
  to: f,
  txn: b,
  transactionInfo: y,
  tokenPrice: k,
  gas: v,
  tokenSymbol: x
}) => {
  let w = BigInt(b?.value || 0); /*#__PURE__*/
  return o(c, {
    ...(h().render.standalone ? {
      defaultValue: "details"
    } : {}),
    children: /*#__PURE__*/i(m, {
      value: "details",
      children: [/*#__PURE__*/o(a, {
        children: /*#__PURE__*/i(u, {
          children: [/*#__PURE__*/o("div", {
            children: y?.title || "Details"
          }), /*#__PURE__*/o(g, {
            children: /*#__PURE__*/o(e, {
              weiQuantities: [w],
              tokenPrice: k,
              tokenSymbol: x
            })
          })]
        })
      }), /*#__PURE__*/i(l, {
        children: [/*#__PURE__*/o(t, {
          label: "From",
          children: /*#__PURE__*/o(d, {
            walletAddress: n,
            chainId: b.chainId || j,
            network: "ethereum"
          })
        }), /*#__PURE__*/o(t, {
          label: "To",
          children: /*#__PURE__*/o(d, {
            walletAddress: f,
            chainId: b.chainId || j,
            network: "ethereum"
          })
        }), y && y.action && /*#__PURE__*/o(t, {
          label: "Action",
          children: y.action
        }), v && /*#__PURE__*/o(r, {
          value: b.value,
          gas: v,
          tokenPrice: k,
          tokenSymbol: x
        })]
      }), /*#__PURE__*/o(p, {
        children: ({
          isActive: i
        }) => /*#__PURE__*/o(s, {
          value: b.value,
          displayFee: i,
          gas: v || "0x0",
          tokenPrice: k,
          tokenSymbol: x
        })
      })]
    })
  });
};
let u = /*#__PURE__*/n.div.withConfig({
  displayName: "AccordionTriggerContent",
  componentId: "sc-29499c17-0"
})(["display:flex;flex-direction:row;justify-content:space-between;"]);
let g = /*#__PURE__*/n.div.withConfig({
  displayName: "TotalText",
  componentId: "sc-29499c17-1"
})(["flex-shrink:0;padding-left:8px;"]);
export { f as TransactionDetails };
