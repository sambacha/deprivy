import { jsxs as o, jsx as t } from "react/jsx-runtime";
import { Dialog as i, DialogBackdrop as s, DialogPanel as r } from "@headlessui/react";
import { useState as e, useEffect as n } from "react";
import { styled as m } from "styled-components";
import { useAppConfig as c } from "../../configuration/context.mjs";
import a from "./ConnectWalletView.mjs";
import p from "./SelectActiveWalletView.mjs";
import { useIsModalOpen as l, close as j } from "./state.mjs";
import { useActiveWallet as d } from "./useActiveWallet.mjs";
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
import "@heroicons/react/24/outline";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "react-device-detect";
import "../../components/Button.mjs";
import "../../components/Loader.mjs";
import "../../components/QrCode.mjs";
import "qrcode";
import "../../svg/black-rounded-square.mjs";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
import "../../components/ui/forms/EmailInputForm.mjs";
import "../../components/ui/typography/ErrorMessage.mjs";
import "../../components/ui/typography/Subtitle.mjs";
import "../../components/ui/typography/Title.mjs";
import "../../connectors/walletconnect-client.mjs";
import "../../hooks/internal-context.mjs";
import "../../hooks/index.mjs";
import "../../screens/ConnectionStatusScreen.mjs";
import "../../auth-flows/siwe.mjs";
import "../../effect.mjs";
import "../../lib/siwe.mjs";
import "../../auth-flows/siws.mjs";
import "../../lib/siws.mjs";
import "../../client/user.mjs";
import "viem/utils";
import "../../components/Layouts.mjs";
import "../../components/ModalFooter.mjs";
import "../../svg/protected-by-privy.mjs";
import "../../components/ModalHeader.mjs";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../../connectors/errors.mjs";
import "@privy-io/js-sdk-core";
import "../../connectors/userAlreadyHasConnectedCoinbaseWallet.mjs";
import "../../connectors/walletconnect-v2.mjs";
import "@walletconnect/ethereum-provider";
import "../../svg/metamask.mjs";
import "../../svg/wallet-connect.mjs";
import "../../hooks/modal-context.mjs";
import "../../components/PrefetchedImage.mjs";
import "../../screens/index.mjs";
import "../../connectors/ethereum/index.mjs";
import "../../storage.mjs";
import "../../connectors/areWalletArraysEqual.mjs";
import "../../connectors/isBaseConnectedEthereumWallet.mjs";
import "../../connectors/base.mjs";
import "eventemitter3";
import "../../connectors/getRpcTimeout.mjs";
import "../../connectors/privyProxyProvider.mjs";
import "../../connectors/walletconnect-registry.mjs";
import "../../hook-utils/useInterval.mjs";
import "../../hooks/captcha-context.mjs";
import "../../hooks/privy-context.mjs";
import "../../lib/external-wallets/displayHelpers.mjs";
import "../../svg/brave-browser-icon.mjs";
import "../../svg/bybit.mjs";
import "../../svg/coinbase-wallet.mjs";
import "../../svg/cryptocom.mjs";
import "../../svg/phantom.mjs";
import "../../svg/rabby.mjs";
import "../../svg/rainbow.mjs";
import "../../svg/safe.mjs";
import "../../svg/uniswap.mjs";
import "../../svg/universal-profile.mjs";
import "../../svg/zerion.mjs";
import "../../lib/useHasTabbedAway.mjs";
import "../../svg/browser-extension-wallet-icon.mjs";
import "../shared/X.mjs";
import "./data/wcRegistryPatch.mjs";
import "./icons/EVM.mjs";
import "./icons/Solana.mjs";
import "./styles.mjs";
import "../../hooks/useWallets.mjs";
import "./ActiveWalletCard.mjs";
import "./WalletCardView.mjs";
import "@heroicons/react/24/outline/ChevronDownIcon";
import "../../components/ui/layout/Column.mjs";
import "../../components/ui/layout/Row.mjs";
import "../../components/ui/wallet/Address.mjs";
import "@heroicons/react/24/outline/CheckIcon";
import "@heroicons/react/24/outline/Square2StackIcon";
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
import "../../connectors/solana/index.mjs";
import "../../types.mjs";
import "../../lib/caip2.mjs";
import "../../lib/erc20/actions/getErc20TokenInfo.mjs";
import "../../lib/erc20/formatErc20TokenAmount.mjs";
import "../../lib/wallets/actions/getErc20Balance.mjs";
import "./AssetBalance.mjs";
import "@heroicons/react/24/outline/CurrencyDollarIcon";
import "./NetworkPicker.mjs";
import "../../hooks/solana/useSolanaWallets.mjs";
import "zustand";
import "zustand/shallow";
import "zustand/traditional";
const u = ({
  networks: i,
  assets: s
}) => {
  let r = l();
  let {
    wallet: m
  } = d();
  let {
    chains: u
  } = c();
  let [v, y] = e(false);
  n(() => {
    if (!m && r) {
      y(true);
    }
  }, [m]);
  let f = i ? u.filter(o => i.some(t => t.id === o.id)) : u.slice(0, 3);
  n(() => {
    if (i) {
      i.forEach(o => {
        if (!u.some(t => t.id === o.id)) {
          console.warn(`Please configure chain with ID: ${o.id} in your config.supportedChains`);
        }
      });
    }
  }, [i]);
  let k = {
    ethereum: s?.ethereum ?? [],
    solana: s?.solana ?? []
  };
  function C() {
    j();
    y(false);
  } /*#__PURE__*/
  return o(h, {
    open: r,
    onClose: C,
    children: [/*#__PURE__*/t(b, {}), /*#__PURE__*/t(g, {
      children: /*#__PURE__*/t(w, {
        children: v || !m ? /*#__PURE__*/t(a, {
          onBack: () => y(false),
          onClose: C
        }) : /*#__PURE__*/t(p, {
          onClose: C,
          onLinkNewWallet: () => y(true),
          assets: k,
          networks: f
        })
      })
    })]
  });
};
let h = /*#__PURE__*/m(i).withConfig({
  displayName: "Dialog",
  componentId: "sc-801447b5-0"
})(["position:relative;z-index:50;"]);
let g = /*#__PURE__*/m.div.withConfig({
  displayName: "DialogContainer",
  componentId: "sc-801447b5-1"
})(["position:fixed;inset:0;display:flex;width:100vw;align-items:end;justify-content:center;@media screen and (min-width:480px){align-items:center;}"]);
let b = /*#__PURE__*/m(s).withConfig({
  displayName: "Backdrop",
  componentId: "sc-801447b5-2"
})(["position:fixed;inset:0;background:rgba(0,0,0,0.3);"]);
let w = /*#__PURE__*/m(r).withConfig({
  displayName: "Panel",
  componentId: "sc-801447b5-3"
})(["width:100%;background:var(--privy-color-background);padding:1.5rem;border-top-left-radius:var(--privy-border-radius-lg);border-top-right-radius:var(--privy-border-radius-lg);@media screen and (min-width:480px){border-bottom-left-radius:var(--privy-border-radius-lg);border-bottom-right-radius:var(--privy-border-radius-lg);max-width:24rem;}"]);
export { u as WalletsDialog };
