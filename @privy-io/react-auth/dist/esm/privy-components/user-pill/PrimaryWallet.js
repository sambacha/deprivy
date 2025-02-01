import { jsx as o } from "react/jsx-runtime";
import { WalletInfoCard as t } from "../../components/ui/wallet/WalletInfoCard.mjs";
import { usePrivyInternal as r } from "../../hooks/internal-context.mjs";
import { usePrivyContext as e } from "../../hooks/privy-context.mjs";
import { useWalletBalance as s } from "../../hooks/useWalletBalance.mjs";
import { useWallets as i } from "../../hooks/useWallets.mjs";
import { getNativeCurrencyFromWei as m } from "../../lib/ethers.mjs";
import { PrimaryWalletContainer as n } from "./PrimaryWalletContainer.mjs";
import "../../components/ui/chips/Chip.mjs";
import "styled-components";
import "../../components/ui/animation/LoadingSkeleton.mjs";
import "../../components/ui/layout/Column.mjs";
import "../../components/ui/typography/ErrorMessage.mjs";
import "../../components/ui/typography/LabelXs.mjs";
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
import "../../components/ui/wallet/shared.mjs";
import "../../hooks/index.mjs";
function a() {
  let {
    user: a
  } = e();
  let {
    rpcConfig: p,
    appId: l,
    chains: c
  } = r();
  let {
    wallets: d
  } = i();
  let u = d.find(o => o.address === a?.wallet?.address) || d[0];
  let j = c[0];
  let {
    balance: h
  } = s({
    rpcConfig: p,
    appId: l,
    address: u?.address,
    chain: j
  });
  if (u && j) {
    return /*#__PURE__*/o(n, {
      children: /*#__PURE__*/o(t, {
        title: "Your wallet",
        isLoading: h === undefined,
        errMsg: undefined,
        showIcon: true,
        balance: h !== undefined ? m(h, j.nativeCurrency.symbol, 4, true) : "",
        address: u.address,
        statusColor: "gray"
      })
    });
  } else {
    return null;
  }
}
export { a as PrimaryWallet };
