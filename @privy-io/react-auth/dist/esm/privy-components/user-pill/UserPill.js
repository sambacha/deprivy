import { jsx as o } from "react/jsx-runtime";
import { ButtonLoader as i } from "../../components/Loader.mjs";
import { usePrivyContext as t } from "../../hooks/privy-context.mjs";
import { useConnectWallet as s } from "../../hooks/useConnectWallet.mjs";
import { useLogin as n } from "../../hooks/useLogin.mjs";
import { useWallets as m } from "../../hooks/useWallets.mjs";
import { PillButton as r } from "../shared/PillButton.mjs";
import { Avatar as e } from "./Avatar.mjs";
import { PrimaryAccount as c } from "./PrimaryAccount.mjs";
import { UserMenu as p } from "./UserMenu.mjs";
import "styled-components";
import "react";
import "../../hooks/index.mjs";
import "../../hooks/events-context.mjs";
import "../../recent-login/context.mjs";
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
import "../../components/ModalFooter.mjs";
import "../../svg/protected-by-privy.mjs";
import "./BackButton.mjs";
import "../../icons/ArrowLeft.mjs";
import "./MenuProvider.mjs";
import "./Menu.mjs";
import "../shared/X.mjs";
import "./Popover.mjs";
import "@floating-ui/react";
import "./screens/MenuScreen.mjs";
import "../../hooks/useElementHeight.mjs";
import "./screens/AccountScreen.mjs";
import "@heroicons/react/24/outline/UserIcon";
import "../../hooks/useLogout.mjs";
import "../../icons/Logout.mjs";
import "./AddFundsButton.mjs";
import "../../hooks/useFundWallet.mjs";
import "../../hooks/internal-context.mjs";
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
const a = ({
  expanded: a = true,
  action: l = {
    type: "login"
  },
  label: j,
  size: u = 44,
  ui: {
    minimal: h,
    background: d
  } = {
    minimal: false,
    background: "accent"
  }
}) => {
  let {
    user: g,
    ready: y,
    authenticated: f
  } = t();
  let {
    wallets: k
  } = m();
  let {
    login: b
  } = n();
  let {
    connectWallet: x
  } = s();
  let C = a ? "default" : "rounded";
  let v = /*#__PURE__*/o(e, {
    width: "100%",
    height: "100%",
    style: {
      margin: "6px"
    }
  });
  if (y && f && (g && !g.isGuest || k[0] && l.type === "connectWallet")) {
    return /*#__PURE__*/o(p, {
      minimal: h,
      children: /*#__PURE__*/o(r, {
        $variant: C,
        $size: u,
        $background: d,
        children: j || (a ? /*#__PURE__*/o(c, {
          isCopyable: false
        }) : v)
      })
    });
  } else {
    return /*#__PURE__*/o(r, {
      $size: u,
      $variant: C,
      $background: d,
      onClick: l.type === "login" ? () => b(l.options) : () => x(l.options),
      disabled: !y,
      children: y ? j || (a ? l.type === "login" ? "Log in" : "Connect wallet" : v) : /*#__PURE__*/o(i, {
        color: "var(--privy-color-foreground-accent)"
      })
    });
  }
};
export { a as UserPill };
