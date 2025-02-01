import { jsx as o } from "react/jsx-runtime";
import { usePrivyContext as t } from "../../hooks/privy-context.mjs";
import { useWallets as i } from "../../hooks/useWallets.mjs";
import { useRecentlyUsedLogin as s } from "../../recent-login/context.mjs";
import { Account as n } from "./Account.mjs";
import "react";
import "../../hooks/index.mjs";
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
import "../../hooks/events-context.mjs";
import "../../storage.mjs";
import "../../components/CopyableText.mjs";
import "@heroicons/react/24/outline/CheckIcon";
import "styled-components";
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
function c({
  isCopyable: t
}) {
  let {
    wallets: s
  } = i();
  let c = e();
  if (c) {
    /*#__PURE__*/return o(n, {
      isCopyable: t,
      account: c
    });
  }
  let m = s[0];
  if (m) {
    return /*#__PURE__*/o(n, {
      isCopyable: t,
      account: {
        type: "wallet",
        walletClientType: m.walletClientType,
        address: m.address
      }
    });
  } else {
    return null;
  }
}
let e = () => {
  let {
    user: o
  } = t();
  let {
    accountType: i,
    walletClientType: n,
    chainType: c
  } = s();
  if (o) {
    return o.linkedAccounts.find(o => i === "wallet" && o.type === "wallet" ? o.walletClientType === n && o.chainType === c : o.type === i) ?? o.linkedAccounts[0];
  }
};
export { c as PrimaryAccount };
