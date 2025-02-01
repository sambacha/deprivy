import { jsx as o } from "react/jsx-runtime";
import { useState as i, useMemo as t, useEffect as n } from "react";
import { styled as s } from "styled-components";
import { toHex as r } from "viem";
import { usePrivyInternal as m } from "../../hooks/internal-context.mjs";
import { usePrivyContext as e } from "../../hooks/privy-context.mjs";
import { useGetTokenPrice as c } from "../../hooks/useGetTokenPrice.mjs";
import { useWallets as a } from "../../hooks/useWallets.mjs";
import { prepareTransactionRequest as p } from "../../lib/viem/prepareTransactionRequest.mjs";
import { getPublicClient as l } from "../../utils/eth/getPublicClient.mjs";
import { TransactionDetails as j } from "./TransactionDetails.mjs";
import "../../hooks/index.mjs";
import "../../connectors/chains/utils.mjs";
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
import "../../constants.mjs";
import "../../hooks/useGetSolPrice.mjs";
import "../../lib/viem/toViemTransactionSerializable.mjs";
import "../../errors.mjs";
import "ofetch";
import "./DisplayInfoItem.mjs";
import "./PriceDisplay.mjs";
import "../../lib/ethers.mjs";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../lib/solana/transaction.mjs";
import "../../lib/solana/index.mjs";
import "../../utils/buffer/readBigInt64LE.mjs";
import "./TransactionTotal.mjs";
import "../Layouts.mjs";
import "../primitives/Accordion/index.mjs";
import "@heroicons/react/24/outline/ChevronDownIcon";
import "../primitives/Accordion/AccordionContext.mjs";
import "../../configuration/context.mjs";
import "../../config.mjs";
import "../../configuration/defaultClientConfig.mjs";
import "../../configuration/login-methods.mjs";
import "../../configuration/wallets.mjs";
import "../../theme.mjs";
import "tinycolor2";
import "../../lib/cybr53.mjs";
import "./WalletLink.mjs";
const h = ({
  pendingTransaction: s
}) => {
  let {
    getAccessToken: h
  } = e();
  let {
    wallets: f
  } = a();
  let {
    walletProxy: u,
    rpcConfig: g,
    chains: y,
    appId: b,
    nativeTokenSymbolForChainId: k
  } = m();
  let [v, T] = i(null);
  let [x, I] = i(s);
  let {
    tokenPrice: w
  } = c(x.chainId);
  let C = k(s.chainId) || "ETH";
  let S = t(() => f.find(o => o.walletClientType === "privy"), [f]);
  n(() => {
    (async function () {
      if (!(await h()) || !u || !S) {
        return x;
      }
      let o = l(x.chainId, y, g, {
        appId: b
      });
      let i = await p(x, o, S.address);
      T(r(BigInt(i.gas ?? 0)));
      return i;
    })().then(I).catch(console.error);
  }, [u]);
  if (S) {
    return /*#__PURE__*/o(d, {
      children: /*#__PURE__*/o(j, {
        from: S.address,
        to: x.to,
        txn: x,
        gas: v ?? undefined,
        tokenPrice: w,
        tokenSymbol: C
      })
    });
  } else {
    return null;
  }
};
let d = /*#__PURE__*/s.div.withConfig({
  displayName: "TransactionInfoWrapper",
  componentId: "sc-731f1950-0"
})(["width:100%;padding:1rem 0;"]);
export { h as TransactionDetailsWrapper };
