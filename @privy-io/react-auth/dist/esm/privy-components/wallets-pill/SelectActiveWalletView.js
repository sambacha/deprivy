import { jsxs as o, Fragment as t, jsx as s } from "react/jsx-runtime";
import { DialogTitle as i } from "@headlessui/react";
import { PlusIcon as n } from "@heroicons/react/24/outline";
import { styled as e } from "styled-components";
import { Subtitle as r } from "../../components/ui/typography/Subtitle.mjs";
import { Title as m } from "../../components/ui/typography/Title.mjs";
import { useAppConfig as c } from "../../configuration/context.mjs";
import { useWallets as a } from "../../hooks/useWallets.mjs";
import { X as l } from "../shared/X.mjs";
import { ActiveWalletCard as p } from "./ActiveWalletCard.mjs";
import { WalletCardView as j } from "./WalletCardView.mjs";
import { setActiveWallet as h } from "./state.mjs";
import { Header as u, CloseButton as d, ScrollContainer as f } from "./styles.mjs";
import { useActiveWallet as w } from "./useActiveWallet.mjs";
import { useSolanaWallets as y } from "../../hooks/solana/useSolanaWallets.mjs";
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
import "@heroicons/react/24/outline/ChevronDownIcon";
import "../../components/ui/layout/Column.mjs";
import "../../components/ui/layout/Row.mjs";
import "../../components/ui/wallet/Address.mjs";
import "@heroicons/react/24/outline/CheckIcon";
import "@heroicons/react/24/outline/Square2StackIcon";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
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
import "../../hooks/useFormattedBalances.mjs";
import "@solana/web3.js";
import "../../connectors/isBaseConnectedEthereumWallet.mjs";
import "../../connectors/solana/index.mjs";
import "../../hooks/index.mjs";
import "../../types.mjs";
import "../../connectors/base.mjs";
import "eventemitter3";
import "../../connectors/errors.mjs";
import "@privy-io/js-sdk-core";
import "../../lib/caip2.mjs";
import "../../lib/erc20/actions/getErc20TokenInfo.mjs";
import "../../lib/erc20/formatErc20TokenAmount.mjs";
import "../../lib/wallets/actions/getErc20Balance.mjs";
import "../../hooks/internal-context.mjs";
import "./AssetBalance.mjs";
import "@heroicons/react/24/outline/CurrencyDollarIcon";
import "./NetworkPicker.mjs";
import "zustand";
import "zustand/shallow";
import "zustand/traditional";
import "../../storage.mjs";
var g = ({
  onLinkNewWallet: e,
  assets: g,
  networks: C,
  onClose: b
}) => {
  let v = c();
  let {
    wallets: A
  } = a();
  let {
    wallets: S
  } = y();
  let {
    wallet: T
  } = w();
  /*#__PURE__*/
  return o(t, {
    children: [/*#__PURE__*/o(u, {
      children: [/*#__PURE__*/s(i, {
        as: m,
        children: "Wallet connected"
      }), /*#__PURE__*/s(d, {
        onClick: b,
        children: /*#__PURE__*/s(l, {})
      })]
    }), /*#__PURE__*/s(p, {
      style: {
        marginTop: "1rem"
      },
      assets: g,
      networks: C
    }), /*#__PURE__*/o(u, {
      style: {
        marginTop: "1rem"
      },
      children: [/*#__PURE__*/s(m, {
        children: "My other wallets"
      }), /*#__PURE__*/o(k, {
        onClick: e,
        children: [/*#__PURE__*/s(n, {
          width: "1rem"
        }), /*#__PURE__*/s(r, {
          children: "Connect new wallet"
        })]
      })]
    }), /*#__PURE__*/s(f, {
      $colorScheme: v.appearance.palette.colorScheme,
      style: {
        marginTop: "1rem"
      },
      children: [...A, ...S].sort((o, t) => o.connectedAt - t.connectedAt).filter(o => o.walletClientType !== "privy").filter(o => o.address !== T?.address || o.walletClientType !== T.walletClientType).map((o, t) => /*#__PURE__*/s(j, {
        wallet: o,
        showBalances: false,
        networks: C,
        assets: g,
        onSelectWallet: () => h({
          address: o.address,
          client: o.walletClientType,
          appId: v.id
        })
      }, t))
    })]
  });
};
let k = /*#__PURE__*/e.button.withConfig({
  displayName: "LinkWalletButon",
  componentId: "sc-25d53522-0"
})(["display:flex;align-items:center;& svg{width:1rem;stroke-width:3;}& ", "{margin-top:0;margin-left:0.25rem;}"], r);
export { g as default };
