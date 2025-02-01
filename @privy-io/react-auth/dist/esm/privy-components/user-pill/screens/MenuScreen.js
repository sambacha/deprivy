import { jsx as o } from "react/jsx-runtime";
import { useRef as i } from "react";
import { styled as t } from "styled-components";
import { useElementHeight as s } from "../../../hooks/useElementHeight.mjs";
import { useMenu as n } from "../MenuProvider.mjs";
import { AccountScreen as m } from "./AccountScreen.mjs";
import { LinkedAccountsScreen as r } from "./LinkedAccountsScreen.mjs";
import { WalletActionsScreen as e } from "./WalletActionsScreen.mjs";
import "@heroicons/react/24/outline/UserIcon";
import "../../../configuration/context.mjs";
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
import "../../../hooks/privy-context.mjs";
import "../../../hooks/index.mjs";
import "../../../hooks/useLogout.mjs";
import "../../../hooks/events-context.mjs";
import "../../../icons/Logout.mjs";
import "../AddFundsButton.mjs";
import "../../../hooks/useFundWallet.mjs";
import "../../../hooks/internal-context.mjs";
import "../../../hooks/useWallets.mjs";
import "../Menu.mjs";
import "../../shared/X.mjs";
import "../Popover.mjs";
import "@floating-ui/react";
import "../PrimaryAccount.mjs";
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
import "../PrimaryWallet.mjs";
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
import "@heroicons/react/24/outline/EllipsisHorizontalIcon";
import "@heroicons/react/24/outline/PlusCircleIcon";
import "../../../hooks/solana/useFundWallet.mjs";
import "../../../plugins/context/PrivyPluginContext.mjs";
import "../../../plugins/solana-funding/plugin.mjs";
import "@solana/web3.js";
import "@privy-io/js-sdk-core";
import "../../../plugins/solana-funding/id.mjs";
import "../../../screens/index.mjs";
import "../../../hooks/modal-context.mjs";
import "../../../components/PrefetchedImage.mjs";
import "../../../lib/funding/prepareFundingModalData.mjs";
import "../../../lib/caip2.mjs";
import "../../../lib/funding/filterSupportedOptions.mjs";
import "../../../lib/funding/moonpay/index.mjs";
import "../../../lib/funding/analytics.mjs";
import "../../../lib/funding/usdc.mjs";
import "../../../icons/Copy.mjs";
let c = /*#__PURE__*/t.div.withConfig({
  displayName: "Screen",
  componentId: "sc-588aefc2-0"
})(["transition:height 0.2s ease;"]);
function p({
  minimal: t
}) {
  let {
    screen: p
  } = n();
  let a = i(null);
  let l = s(a);
  let j = null;
  switch (p) {
    case "Account":
      j = /*#__PURE__*/o(m, {
        minimal: t
      });
      break;
    case "Linked Accounts":
      j = /*#__PURE__*/o(r, {});
      break;
    case "Wallet Actions":
      j = /*#__PURE__*/o(e, {});
  } /*#__PURE__*/
  return o(c, {
    style: {
      height: l
    },
    children: /*#__PURE__*/o("div", {
      ref: a,
      children: j
    })
  });
}
export { p as MenuScreen };
