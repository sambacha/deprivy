import { jsxs as o, Fragment as i, jsx as n } from "react/jsx-runtime";
import { styled as t } from "styled-components";
import { CenteredItem as e, ConfigurableSpacer as s } from "../../components/Layouts.mjs";
import { BlobbyFooter as r } from "../../components/ModalFooter.mjs";
import { CenteredScreenHeader as m } from "../../components/ScreenHeader.mjs";
import c from "../../components/embedded-wallets/FundWalletMethodHeader.mjs";
import { InjectedWalletIcon as p } from "../../components/external-wallets/InjectedWalletIcon.mjs";
import { NeutralSpinner as a } from "../../components/primitives/NeutralSpinner/index.mjs";
import { Rows as l, Row as j } from "../../components/ui/layout/Row.mjs";
import { LabelSm as h } from "../../components/ui/typography/LabelSm.mjs";
import { Value as d } from "../../components/ui/typography/Value.mjs";
import { Address as u } from "../../components/ui/wallet/Address.mjs";
import { NetworkIcon as g } from "../../components/ui/wallet/NetworkIcon.mjs";
import { toLogo as f } from "../../lib/external-wallets/displayHelpers.mjs";
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
import "../../components/ui/animation/LoadingSkeleton.mjs";
import "@heroicons/react/24/outline/CheckIcon";
import "@heroicons/react/24/outline/Square2StackIcon";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
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
import "../../svg/brave-browser-icon.mjs";
import "../../svg/bybit.mjs";
import "../../svg/coinbase-wallet.mjs";
import "../../svg/cryptocom.mjs";
import "../../svg/metamask.mjs";
import "../../svg/phantom.mjs";
import "../../svg/rabby.mjs";
import "../../svg/rainbow.mjs";
import "../../svg/safe.mjs";
import "../../svg/uniswap.mjs";
import "../../svg/universal-profile.mjs";
import "../../svg/wallet-connect.mjs";
import "../../svg/zerion.mjs";
const y = ({
  wallet: t,
  displayName: y,
  addressToFund: v,
  chainId: b,
  chainName: I,
  isBridging: x,
  isErc20Flow: C,
  totalPriceInNativeCurrency: k,
  totalPriceInUsd: S,
  gasPriceInNativeCurrency: T,
  gasPriceInUsd: A
}) => /*#__PURE__*/o(i, {
  children: [/*#__PURE__*/n(c, {}), /*#__PURE__*/n(a, {}), /*#__PURE__*/n(e, {
    style: {
      marginTop: "16px"
    },
    children: /*#__PURE__*/n(p, {
      icon: f(t.walletClientType, t.connectorType, t.walletClientType),
      name: t.walletClientType
    })
  }), /*#__PURE__*/n(m, {
    style: {
      marginTop: "8px",
      marginBottom: "12px"
    },
    title: `${x ? "Bridging" : "Confirming"} with ${y}`
  }), !x && !C && /*#__PURE__*/o(l, {
    children: [/*#__PURE__*/o(j, {
      children: [/*#__PURE__*/n(h, {
        children: "Total"
      }), /*#__PURE__*/n(d, {
        children: S || k
      })]
    }), /*#__PURE__*/o(j, {
      children: [/*#__PURE__*/n(h, {
        children: "To"
      }), /*#__PURE__*/n(d, {
        children: /*#__PURE__*/n(u, {
          address: v,
          showCopyIcon: false
        })
      })]
    }), /*#__PURE__*/o(j, {
      children: [/*#__PURE__*/n(h, {
        children: "Network"
      }), /*#__PURE__*/n(d, {
        children: /*#__PURE__*/o(w, {
          children: [/*#__PURE__*/n(g, {
            chainId: b,
            height: 16,
            width: 16
          }), " ", I]
        })
      })]
    }), T && /*#__PURE__*/o(j, {
      children: [/*#__PURE__*/n(h, {
        children: "Estimated fee"
      }), /*#__PURE__*/n(d, {
        children: A || T
      })]
    })]
  }), /*#__PURE__*/n(s, {
    height: 24
  }), /*#__PURE__*/n(r, {})]
});
let w = /*#__PURE__*/t.div.withConfig({
  displayName: "NetworkColumn",
  componentId: "sc-67160e5-0"
})(["display:flex;flex-direction:row;align-items:center;gap:4px;"]);
export { y as TransferOrBridgeLoadingScreen };
