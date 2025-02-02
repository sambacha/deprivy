import { jsxs as o, Fragment as n, jsx as i } from "react/jsx-runtime";
import { useRef as t } from "react";
import { formatWalletAddress as e } from "@privy-io/js-sdk-core";
import { PrimaryButtonWithoutGray as r } from "../../components/Button.mjs";
import { RefactorSpacerTop as m, RefactorSpacerBottom as s } from "../../components/Layouts.mjs";
import { BlobbyFooter as c } from "../../components/ModalFooter.mjs";
import a from "../../components/embedded-wallets/FundWalletMethodHeader.mjs";
import { Row as p } from "../../components/ui/layout/Row.mjs";
import { ErrorMessage as l } from "../../components/ui/typography/ErrorMessage.mjs";
import { LabelSm as h } from "../../components/ui/typography/LabelSm.mjs";
import { Subtitle as j } from "../../components/ui/typography/Subtitle.mjs";
import { Title as u } from "../../components/ui/typography/Title.mjs";
import { NetworkBalanceCard as d } from "../../components/ui/wallet/NetworkBalanceCard.mjs";
import { NetworkSelectorPanel as g } from "../../components/ui/wallet/NetworkSelectorPanel.mjs";
import { getNativeCurrencyFromWei as f } from "../../lib/ethers.mjs";
import { FundingQuantityWrapper as y, FundingQuantity as b, FundingAmountInput as k, FundingCurrency as C, FundingDollars as w } from "./styles.mjs";
import "styled-components";
import "../../components/Loader.mjs";
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
import "../../svg/protected-by-privy.mjs";
import "../../hooks/modal-context.mjs";
import "../../components/PrefetchedImage.mjs";
import "../index.mjs";
import "../../hooks/index.mjs";
import "../../components/ModalHeader.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../../hooks/internal-context.mjs";
import "@heroicons/react/24/outline/WalletIcon";
import "../../components/ui/chips/Chip.mjs";
import "../../components/ui/animation/LoadingSkeleton.mjs";
import "../../components/ui/typography/Value.mjs";
import "../../components/ui/wallet/NetworkIcon.mjs";
import "@heroicons/react/24/outline/GlobeAltIcon";
import "../../components/ui/icons/Arbitum.mjs";
import "../../components/ui/icons/Avalanche.mjs";
import "../../components/ui/icons/Base.mjs";
import "../../components/ui/icons/Celo.mjs";
import "../../components/ui/icons/Linea.mjs";
import "../../components/ui/icons/Mainnnet.mjs";
import "../../components/ui/icons/Optimism.mjs";
import "../../components/ui/icons/Polygon.mjs";
import "../../components/ui/icons/Solana.mjs";
import "../../components/ui/icons/Zora.mjs";
import "../../components/ui/wallet/shared.mjs";
import "@headlessui/react";
import "@heroicons/react/24/outline/ChevronDownIcon";
import "viem";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
import "../LinkPasskeyScreen.mjs";
import "@heroicons/react/24/outline/CheckCircleIcon";
import "@heroicons/react/24/outline/ClockIcon";
import "@heroicons/react/24/outline/TrashIcon";
import "@heroicons/react/24/solid/CheckBadgeIcon";
import "@heroicons/react/24/solid/LockClosedIcon";
import "../../hooks/privy-context.mjs";
import "../../svg/face-id.mjs";
import "../../svg/fingerprint.mjs";
import "../MfaScreens/StyledComponents.mjs";
const v = ({
  displayName: v,
  errorMessage: S,
  configuredFundingChain: I,
  formattedBalance: A,
  fundingAmount: T,
  fundingCurrency: x,
  fundingAmountInUsd: M,
  options: L,
  selectedOption: B,
  isPreparing: F,
  isSubmitting: P,
  addressToFund: N,
  fundingWalletAddress: z,
  onSubmit: H,
  onSelect: W,
  onAmountChange: O
}) => {
  let R = t(null); /*#__PURE__*/
  return o(n, {
    children: [/*#__PURE__*/i(a, {}), /*#__PURE__*/i(m, {}), /*#__PURE__*/i(u, {
      children: "Transfer from another network"
    }), /*#__PURE__*/o(j, {
      children: ["You need more funds on the ", I.name, " network. Bridge from another blockchain network."]
    }), /*#__PURE__*/o(y, {
      style: {
        marginTop: "2rem"
      },
      children: [/*#__PURE__*/o(b, {
        onClick: () => R.current?.focus(),
        children: [/*#__PURE__*/i(k, {
          ref: R,
          value: T,
          onChange: o => {
            let n = o.target.value;
            if (/^[0-9.]*$/.test(n) && n.split(".").length - 1 <= 1) {
              O(n);
            }
          }
        }), /*#__PURE__*/i(C, {
          children: x
        })]
      }), M && /*#__PURE__*/i(w, {
        children: M
      })]
    }), /*#__PURE__*/o(p, {
      style: {
        marginTop: "1.5rem"
      },
      children: [/*#__PURE__*/i(h, {
        children: "From"
      }), /*#__PURE__*/i(h, {
        children: e(z)
      })]
    }), /*#__PURE__*/i(g, {
      selected: {
        chain: B.chain,
        balance: f(B.balance, B.chain.nativeCurrency.symbol, 3, true)
      },
      options: L.map(({
        chain: o,
        balance: n
      }) => ({
        chain: o,
        balance: f(n, o.nativeCurrency.symbol, 3, true)
      })),
      onSelect: W
    }), /*#__PURE__*/o(p, {
      style: {
        marginTop: "1.5rem"
      },
      children: [/*#__PURE__*/i(h, {
        children: "To"
      }), /*#__PURE__*/i(h, {
        children: e(N)
      })]
    }), /*#__PURE__*/i(d, {
      chain: I,
      balance: A
    }), /*#__PURE__*/i(l, {
      style: {
        marginTop: "1rem"
      },
      children: S
    }), /*#__PURE__*/o(r, {
      style: {
        marginTop: "1rem"
      },
      loading: P || F,
      disabled: F || P,
      onClick: H,
      children: ["Confirm with ", v]
    }), /*#__PURE__*/i(s, {}), /*#__PURE__*/i(c, {})]
  });
};
export { v as BridgeNetworkSelectionView };
