import { jsx as o } from "react/jsx-runtime";
import { WalletCardView as t } from "./WalletCardView.mjs";
import { useActiveWallet as s } from "./useActiveWallet.mjs";
import "@headlessui/react";
import "@heroicons/react/24/outline/ChevronDownIcon";
import "styled-components";
import "../../components/ui/layout/Column.mjs";
import "../../components/ui/layout/Row.mjs";
import "../../components/ui/wallet/Address.mjs";
import "@heroicons/react/24/outline/CheckIcon";
import "@heroicons/react/24/outline/Square2StackIcon";
import "react";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
import "../../components/ui/wallet/NetworkIcon.mjs";
import "@heroicons/react/24/outline/GlobeAltIcon";
import "../../connectors/chains/arbitrum.mjs";
import "../../connectors/chains/avalanche.mjs";
import "../../connectors/chains/base.mjs";
import "../../connectors/chains/celo.mjs";
import "../../connectors/chains/linea.mjs";
import "../../connectors/chains/mainnet.mjs";
import "../../connectors/chains/optimism.mjs";
import "../../connectors/chains/polygon.mjs";
import "../../connectors/chains/zora.mjs";
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
import "../../configuration/context.mjs";
import "../../config.mjs";
import "../../configuration/defaultClientConfig.mjs";
import "../../constants.mjs";
import "../../configuration/login-methods.mjs";
import "../../configuration/wallets.mjs";
import "../../connectors/chains/index.mjs";
import "../../connectors/chains/arbitrumSepolia.mjs";
import "../../connectors/chains/avalancheFuji.mjs";
import "../../connectors/chains/baseSepolia.mjs";
import "../../connectors/chains/berachainArtio.mjs";
import "../../connectors/chains/celoAlfajores.mjs";
import "../../connectors/chains/filecoin.mjs";
import "../../connectors/chains/filecoinCalibration.mjs";
import "../../connectors/chains/garnetHolesky.mjs";
import "../../connectors/chains/holesky.mjs";
import "../../connectors/chains/lineaTestnet.mjs";
import "../../connectors/chains/lukso.mjs";
import "../../connectors/chains/optimismSepolia.mjs";
import "../../connectors/chains/polygonAmoy.mjs";
import "../../connectors/chains/redstone.mjs";
import "../../connectors/chains/sepolia.mjs";
import "../../connectors/chains/zoraSepolia.mjs";
import "../../connectors/chains/zoraTestnet.mjs";
import "../../connectors/chains/utils.mjs";
import "../../lib/solana/index.mjs";
import "../../theme.mjs";
import "tinycolor2";
import "../../lib/cybr53.mjs";
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
import "./state.mjs";
import "zustand";
import "zustand/shallow";
import "zustand/traditional";
import "../../storage.mjs";
import "../../hooks/internal-context.mjs";
import "./AssetBalance.mjs";
import "@heroicons/react/24/outline/CurrencyDollarIcon";
import "./NetworkPicker.mjs";
import "./styles.mjs";
import "../../hooks/useWallets.mjs";
import "../../hooks/solana/useSolanaWallets.mjs";
const n = ({
  assets: n,
  networks: i,
  ...m
}) => {
  let {
    wallet: r,
    network: e
  } = s();
  if (r) {
    return /*#__PURE__*/o(t, {
      wallet: r,
      networks: r.type === "solana" ? [] : i,
      assets: n,
      network: e,
      showBalances: true,
      showNetworks: true,
      ...m
    });
  } else {
    return null;
  }
};
export { n as ActiveWalletCard };
