import { jsxs as o, Fragment as i, jsx as t } from "react/jsx-runtime";
import n from "@heroicons/react/24/outline/CalendarIcon";
import e from "@heroicons/react/24/outline/ExclamationTriangleIcon";
import r from "@heroicons/react/24/outline/ShieldCheckIcon";
import { PrimaryButton as s } from "../../components/Button.mjs";
import { ConnectionLoader as m } from "../../components/Loader.mjs";
import { ModalFooter as c } from "../../components/ModalFooter.mjs";
import { ModalHeader as a } from "../../components/ModalHeader.mjs";
import { TransactionDetailsWrapper as p } from "../../components/embedded-wallets/TransactionDetailsWrapper.mjs";
import l from "../../components/layout/StackedContainer.mjs";
import { usePrivyInternal as h } from "../../hooks/internal-context.mjs";
import { FaceId as d } from "../../svg/face-id.mjs";
import { Title as j, List as u, ListItem as f, ListItemIcon as g, Container as y, ErrorMessage as b, PrimaryTextButton as k } from "./StyledComponents.mjs";
import "styled-components";
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
import "../../hooks/index.mjs";
import "viem";
import "../../hooks/privy-context.mjs";
import "../../hooks/useGetTokenPrice.mjs";
import "../../hooks/useGetSolPrice.mjs";
import "../../hooks/useWallets.mjs";
import "../../lib/viem/prepareTransactionRequest.mjs";
import "../../lib/viem/toViemTransactionSerializable.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
import "../../components/embedded-wallets/TransactionDetails.mjs";
import "../../components/embedded-wallets/DisplayInfoItem.mjs";
import "../../components/embedded-wallets/PriceDisplay.mjs";
import "../../lib/ethers.mjs";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../lib/solana/transaction.mjs";
import "../../utils/buffer/readBigInt64LE.mjs";
import "../../components/embedded-wallets/TransactionTotal.mjs";
import "../../components/Layouts.mjs";
import "../../components/primitives/Accordion/index.mjs";
import "@heroicons/react/24/outline/ChevronDownIcon";
import "../../components/primitives/Accordion/AccordionContext.mjs";
import "../../components/embedded-wallets/WalletLink.mjs";
const T = ({
  hasBlockingError: T,
  error: v,
  onClose: C,
  onBack: w,
  handleSubmit: x,
  account: I,
  submitSuccess: S
}) => {
  let {
    pendingTransaction: A
  } = h(); /*#__PURE__*/
  return o(i, {
    children: [/*#__PURE__*/t(a, {
      onClose: C
    }, "header"), /*#__PURE__*/t(l, {
      children: /*#__PURE__*/o("div", {
        children: [/*#__PURE__*/t(m, {
          success: S,
          fail: !!v
        }), /*#__PURE__*/t(v ? e : d, {
          style: {
            width: "38px",
            height: "38px"
          }
        })]
      })
    }), /*#__PURE__*/t(j, {
      style: {
        marginTop: "1rem"
      },
      children: "Verifying with passkey"
    }), /*#__PURE__*/o(u, {
      children: [/*#__PURE__*/o(f, {
        children: [/*#__PURE__*/t(g, {
          children: /*#__PURE__*/t(r, {})
        }), "Approve this action using your touch, face, PIN, or hardware key."]
      }), /*#__PURE__*/o(f, {
        children: [/*#__PURE__*/t(g, {
          children: /*#__PURE__*/t(n, {})
        }), "You last added a passkey on", " ", I?.firstVerifiedAt?.toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
          year: "numeric"
        }), "."]
      })]
    }), A && /*#__PURE__*/t(y, {
      children: /*#__PURE__*/t(p, {
        pendingTransaction: A
      })
    }), v && /*#__PURE__*/o(i, {
      children: [/*#__PURE__*/t(b, {
        style: {
          marginTop: "1.25rem"
        },
        children: v.message
      }), /*#__PURE__*/t(s, {
        disabled: T,
        onClick: x,
        style: {
          marginTop: "1.25rem"
        },
        children: "Try again"
      })]
    }), w && /*#__PURE__*/t(k, {
      style: {
        marginTop: "1rem"
      },
      onClick: w,
      children: "Choose another method"
    }), /*#__PURE__*/t(c, {})]
  });
};
export { T as VerifyWithPasskey };
