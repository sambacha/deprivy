import { jsxs as o, jsx as t, Fragment as i } from "react/jsx-runtime";
import n from "@heroicons/react/24/outline/UserIcon";
import { styled as s } from "styled-components";
import { useAppConfig as m } from "../../../configuration/context.mjs";
import { usePrivyContext as r } from "../../../hooks/privy-context.mjs";
import { useLogout as e } from "../../../hooks/useLogout.mjs";
import { Logout as c } from "../../../icons/Logout.mjs";
import { AddFundsButton as p } from "../AddFundsButton.mjs";
import { MenuItem as a, MenuItemButton as l, MenuContent as j } from "../Menu.mjs";
import { useMenu as h } from "../MenuProvider.mjs";
import { PrimaryAccount as u } from "../PrimaryAccount.mjs";
import { PrimaryWallet as d } from "../PrimaryWallet.mjs";
import "react";
import "../../../config.mjs";
import "../../../configuration/defaultClientConfig.mjs";
import "../../../constants.mjs";
import "../../../configuration/login-methods.mjs";
import "../../../configuration/wallets.mjs";
import "../../../connectors/chains/index.mjs";
import "../../../connectors/chains/arbitrum.mjs";
import "../../../connectors/chains/arbitrumSepolia.mjs";
import "../../../connectors/chains/avalanche.mjs";
import "../../../connectors/chains/avalancheFuji.mjs";
import "../../../connectors/chains/base.mjs";
import "../../../connectors/chains/baseSepolia.mjs";
import "../../../connectors/chains/berachainArtio.mjs";
import "../../../connectors/chains/celo.mjs";
import "../../../connectors/chains/celoAlfajores.mjs";
import "../../../connectors/chains/filecoin.mjs";
import "../../../connectors/chains/filecoinCalibration.mjs";
import "../../../connectors/chains/garnetHolesky.mjs";
import "../../../connectors/chains/holesky.mjs";
import "../../../connectors/chains/linea.mjs";
import "../../../connectors/chains/lineaTestnet.mjs";
import "../../../connectors/chains/lukso.mjs";
import "../../../connectors/chains/mainnet.mjs";
import "../../../connectors/chains/optimism.mjs";
import "../../../connectors/chains/optimismSepolia.mjs";
import "../../../connectors/chains/polygon.mjs";
import "../../../connectors/chains/polygonAmoy.mjs";
import "../../../connectors/chains/redstone.mjs";
import "../../../connectors/chains/sepolia.mjs";
import "../../../connectors/chains/zora.mjs";
import "../../../connectors/chains/zoraSepolia.mjs";
import "../../../connectors/chains/zoraTestnet.mjs";
import "../../../connectors/chains/utils.mjs";
import "../../../lib/solana/index.mjs";
import "../../../theme.mjs";
import "tinycolor2";
import "../../../lib/cybr53.mjs";
import "../../../hooks/index.mjs";
import "../../../hooks/events-context.mjs";
import "../../../hooks/useFundWallet.mjs";
import "../../../hooks/internal-context.mjs";
import "../../../hooks/useWallets.mjs";
import "../../shared/X.mjs";
import "../Popover.mjs";
import "@floating-ui/react";
import "../../../recent-login/context.mjs";
import "../../../storage.mjs";
import "../Account.mjs";
import "../../../components/CopyableText.mjs";
import "@heroicons/react/24/outline/CheckIcon";
import "../../../svg/copy.mjs";
import "../../../components/LoginMethodIcon.mjs";
import "../../../icons/KeyRound.mjs";
import "../../../icons/Login.mjs";
import "../../../icons/Mail.mjs";
import "../../../icons/Phone.mjs";
import "../../../icons/Socials.mjs";
import "../../../icons/TicketCheck.mjs";
import "../../../icons/WalletCards.mjs";
import "../../../icons/Wallets.mjs";
import "../../../utils/index.mjs";
import "../../../connectors/get-legacy-injected-providers.mjs";
import "../../../connectors/is-wallet-installed.mjs";
import "../../../errors.mjs";
import "ofetch";
import "../../../utils/eth/getPublicClient.mjs";
import "viem";
import "../../../components/ui/wallet/WalletInfoCard.mjs";
import "../../../components/ui/chips/Chip.mjs";
import "../../../components/ui/animation/LoadingSkeleton.mjs";
import "../../../components/ui/layout/Column.mjs";
import "../../../components/ui/typography/ErrorMessage.mjs";
import "../../../components/ui/typography/LabelXs.mjs";
import "../../../components/ui/wallet/Address.mjs";
import "@heroicons/react/24/outline/Square2StackIcon";
import "../../../components/ui/wallet/shared.mjs";
import "../../../hooks/useWalletBalance.mjs";
import "../../../lib/ethers.mjs";
import "../PrimaryWalletContainer.mjs";
let g = /*#__PURE__*/s(j).withConfig({
  displayName: "StyledMenuContent",
  componentId: "sc-1d219c5-0"
})(["padding-top:4px;padding-bottom:4px;"]);
function f({
  minimal: s
}) {
  let {
    user: j
  } = r();
  let {
    logout: f
  } = e();
  let {
    setScreen: y
  } = h();
  let k = function () {
    let o = m();
    return o.fundingConfig && o.fundingConfig.options.length > 0;
  }();
  /*#__PURE__*/
  return o(g, {
    children: [/*#__PURE__*/t(a, {
      children: /*#__PURE__*/t(u, {
        isCopyable: true
      })
    }), j && /*#__PURE__*/o(i, {
      children: [s || /*#__PURE__*/o(l, {
        onClick: () => y("Linked Accounts"),
        children: [/*#__PURE__*/t(n, {
          width: 16,
          height: 16,
          strokeWidth: "2"
        }), " Linked accounts"]
      }), /*#__PURE__*/o(l, {
        onClick: f,
        children: [/*#__PURE__*/t(c, {}), "Log out"]
      })]
    }), !s && /*#__PURE__*/t(d, {}), k && !s && /*#__PURE__*/t(p, {})]
  });
}
export { f as AccountScreen };
