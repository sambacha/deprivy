import { jsx as o, jsxs as i } from "react/jsx-runtime";
import { BlobbyFooter as t } from "../../components/ModalFooter.mjs";
import { BackButton as n } from "./BackButton.mjs";
import { MenuContainer as s, MenuHeader as m, MenuClose as r, MenuTitle as e } from "./Menu.mjs";
import { MenuProvider as c, useMenu as p } from "./MenuProvider.mjs";
import { Popover as a, PopoverTrigger as l, PopoverContent as j } from "./Popover.mjs";
import { MenuScreen as h } from "./screens/MenuScreen.mjs";
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
import "../../icons/ArrowLeft.mjs";
import "../shared/X.mjs";
import "@floating-ui/react";
import "../../hooks/useElementHeight.mjs";
import "./screens/AccountScreen.mjs";
import "@heroicons/react/24/outline/UserIcon";
import "../../hooks/privy-context.mjs";
import "../../hooks/index.mjs";
import "../../hooks/useLogout.mjs";
import "../../hooks/events-context.mjs";
import "../../icons/Logout.mjs";
import "./AddFundsButton.mjs";
import "../../hooks/useFundWallet.mjs";
import "../../hooks/internal-context.mjs";
import "../../hooks/useWallets.mjs";
import "./PrimaryAccount.mjs";
import "../../recent-login/context.mjs";
import "../../storage.mjs";
import "./Account.mjs";
import "../../components/CopyableText.mjs";
import "@heroicons/react/24/outline/CheckIcon";
import "../../svg/copy.mjs";
import "../../components/LoginMethodIcon.mjs";
import "../../icons/KeyRound.mjs";
import "../../icons/Login.mjs";
import "../../icons/Mail.mjs";
import "../../icons/Phone.mjs";
import "../../icons/Socials.mjs";
import "../../icons/TicketCheck.mjs";
import "../../icons/WalletCards.mjs";
import "../../icons/Wallets.mjs";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
import "./PrimaryWallet.mjs";
import "../../components/ui/wallet/WalletInfoCard.mjs";
import "../../components/ui/chips/Chip.mjs";
import "../../components/ui/animation/LoadingSkeleton.mjs";
import "../../components/ui/layout/Column.mjs";
import "../../components/ui/typography/ErrorMessage.mjs";
import "../../components/ui/typography/LabelXs.mjs";
import "../../components/ui/wallet/Address.mjs";
import "@heroicons/react/24/outline/Square2StackIcon";
import "../../components/ui/wallet/shared.mjs";
import "../../hooks/useWalletBalance.mjs";
import "../../lib/ethers.mjs";
import "./PrimaryWalletContainer.mjs";
import "./screens/LinkedAccountsScreen.mjs";
import "@heroicons/react/24/outline/EllipsisHorizontalIcon";
import "./screens/WalletActionsScreen.mjs";
import "@heroicons/react/24/outline/PlusCircleIcon";
import "../../hooks/solana/useFundWallet.mjs";
import "../../plugins/context/PrivyPluginContext.mjs";
import "../../plugins/solana-funding/plugin.mjs";
import "@solana/web3.js";
import "@privy-io/js-sdk-core";
import "../../plugins/solana-funding/id.mjs";
import "../../screens/index.mjs";
import "../../hooks/modal-context.mjs";
import "../../components/PrefetchedImage.mjs";
import "../../lib/funding/prepareFundingModalData.mjs";
import "../../lib/caip2.mjs";
import "../../lib/funding/filterSupportedOptions.mjs";
import "../../lib/funding/moonpay/index.mjs";
import "../../lib/funding/analytics.mjs";
import "../../lib/funding/usdc.mjs";
import "../../icons/Copy.mjs";
function u(i) {
  /*#__PURE__*/return o(c, {
    children: /*#__PURE__*/o(d, {
      ...i
    })
  });
}
function d({
  children: c,
  minimal: u
}) {
  let {
    screen: d,
    reset: g
  } = p(); /*#__PURE__*/
  return i(a, {
    placement: "bottom-end",
    onOpenChange: o => {
      if (o) {
        g();
      }
    },
    children: [/*#__PURE__*/o(l, {
      asChild: true,
      children: c
    }), /*#__PURE__*/o(j, {
      children: /*#__PURE__*/i(s, {
        children: [/*#__PURE__*/i(m, {
          children: [/*#__PURE__*/o(r, {}), u || /*#__PURE__*/i(e, {
            children: [/*#__PURE__*/o(n, {}), d]
          })]
        }), /*#__PURE__*/o(h, {
          minimal: u
        }), /*#__PURE__*/o(u ? "div" : t, {})]
      })
    })]
  });
}
export { u as UserMenu };
