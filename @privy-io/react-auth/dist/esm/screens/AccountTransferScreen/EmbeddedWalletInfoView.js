import { jsxs as o, Fragment as r, jsx as n } from "react/jsx-runtime";
import t from "@heroicons/react/24/outline/WalletIcon";
import { BlobbyFooter as e } from "../../components/ModalFooter.mjs";
import { ModalHeader as i } from "../../components/ModalHeader.mjs";
import { Address as s } from "../../components/ui/wallet/Address.mjs";
import { useAppConfig as c } from "../../configuration/context.mjs";
import { AccountTransferButton as m } from "./AccountTransferButton.mjs";
import { ConnectContainer as a, GappedContainer as l, ListContainer as p, ListItem as h, DisclosedAccountContainer as j, StyledCopyIcon as d, CircleContainer as u, StyledExclamationCircleIcon as f } from "./styled.mjs";
import "styled-components";
import "../../svg/protected-by-privy.mjs";
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
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../../hooks/internal-context.mjs";
import "../../hooks/index.mjs";
import "@heroicons/react/24/outline/CheckIcon";
import "@heroicons/react/24/outline/Square2StackIcon";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
import "../../components/Button.mjs";
import "../../components/Loader.mjs";
import "@heroicons/react/24/outline/ExclamationCircleIcon";
let g = () => /*#__PURE__*/n(u, {
  children: /*#__PURE__*/n(f, {
    iconSize: 60
  })
});
const y = ({
  address: u,
  onClose: f,
  onRetry: y,
  onTransfer: b,
  isTransferring: k,
  transferSuccess: x
}) => {
  let {
    defaultChain: C
  } = c();
  let w = C.blockExplorers?.default.url ?? "https://etherscan.io";
  /*#__PURE__*/
  return o(r, {
    children: [/*#__PURE__*/n(i, {
      onClose: f,
      backFn: y
    }), /*#__PURE__*/o(a, {
      children: [/*#__PURE__*/n(g, {}), /*#__PURE__*/o(l, {
        children: [/*#__PURE__*/n("h3", {
          children: "Check account assets before transferring"
        }), /*#__PURE__*/n("p", {
          children: "Before transferring, ensure there are no assets in the other account. Assets in that account will not transfer automatically and may be lost."
        }), /*#__PURE__*/o(p, {
          children: [/*#__PURE__*/n("p", {
            children: " To check your balance, you can:"
          }), /*#__PURE__*/n(h, {
            children: "Log out and log back into the other account, or "
          }), /*#__PURE__*/o(h, {
            children: ["Copy your wallet address and use a", " ", /*#__PURE__*/n("u", {
              children: /*#__PURE__*/n("a", {
                target: "_blank",
                href: w,
                children: "block explorer"
              })
            }), " ", "to see if the account holds any assets."]
          })]
        }), /*#__PURE__*/o(j, {
          onClick: () => navigator.clipboard.writeText(u).catch(console.error),
          children: [/*#__PURE__*/n(t, {
            color: "var(--privy-color-foreground-1)",
            strokeWidth: 2,
            height: "28px",
            width: "28px"
          }), /*#__PURE__*/n(s, {
            address: u,
            showCopyIcon: false
          }), /*#__PURE__*/n(d, {})]
        }), /*#__PURE__*/n(m, {
          onTransfer: b,
          isTransferring: k,
          transferSuccess: x
        })]
      })]
    }), /*#__PURE__*/n(e, {})]
  });
};
export { y as EmbeddedWalletInfoView };
