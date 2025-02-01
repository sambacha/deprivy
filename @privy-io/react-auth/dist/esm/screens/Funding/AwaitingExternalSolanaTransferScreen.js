import { jsxs as o, Fragment as t, jsx as n } from "react/jsx-runtime";
import e from "@heroicons/react/24/outline/CheckCircleIcon";
import { useState as i, useRef as r, useEffect as s } from "react";
import { RefactorSpacerTop as m, CenteredItemWithGap as a, RefactorSpacerBottom as c } from "../../components/Layouts.mjs";
import { BlobbyFooter as l } from "../../components/ModalFooter.mjs";
import { CenteredScreenHeader as p } from "../../components/ScreenHeader.mjs";
import u from "../../components/embedded-wallets/FundWalletMethodHeader.mjs";
import { NeutralSpinner as d } from "../../components/primitives/NeutralSpinner/index.mjs";
import { DEFAULT_SUCCESS_SCREEN_EXTRA_LONG_DURATION_MS as j } from "../../constants.mjs";
import { PrivyClientError as h, PrivyErrorCode as f } from "../../errors.mjs";
import { usePrivyInternal as g } from "../../hooks/internal-context.mjs";
import { usePrivyModal as v } from "../../hooks/modal-context.mjs";
import { useGetTokenPrice as y } from "../../hooks/useGetTokenPrice.mjs";
import { toDisplayName as w } from "../../lib/external-wallets/displayHelpers.mjs";
import { ON_RAMP_COMPLETE_ANALYTICS_EVENT as I } from "../../lib/funding/analytics.mjs";
import { getSolanaRpcEndpointForCluster as b } from "../../lib/solana/index.mjs";
import { getSolanaFormattedAmounts as T } from "../../lib/solana/transaction.mjs";
import { usePlugins as S } from "../../plugins/context/PrivyPluginContext.mjs";
import { SOLANA_FUNDING_PLUGIN_ID as A } from "../../plugins/solana-funding/id.mjs";
import { formatWalletAddress as C } from "../../utils/index.mjs";
import { ModalScreen as N } from "../index.mjs";
import { TransferOrBridgeLoadingScreen as k } from "./TransferOrBridgeLoadingScreen.mjs";
import { useSolanaWallets as x } from "../../hooks/solana/useSolanaWallets.mjs";
import "styled-components";
import "../../configuration/context.mjs";
import "../../config.mjs";
import "../../configuration/defaultClientConfig.mjs";
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
import "../../theme.mjs";
import "tinycolor2";
import "../../lib/cybr53.mjs";
import "../../svg/protected-by-privy.mjs";
import "../../components/ModalHeader.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../../hooks/index.mjs";
import "ofetch";
import "../../components/PrefetchedImage.mjs";
import "../../hooks/useGetSolPrice.mjs";
import "../../svg/brave-browser-icon.mjs";
import "../../svg/bybit.mjs";
import "../../svg/coinbase-wallet.mjs";
import "../../svg/cryptocom.mjs";
import "../../svg/metamask.mjs";
import "../../svg/phantom.mjs";
import "../../svg/rabby.mjs";
import "../../svg/rainbow.mjs";
import "../../svg/safe.mjs";
import "../../svg/uniswap.mjs";
import "../../svg/universal-profile.mjs";
import "../../svg/wallet-connect.mjs";
import "../../svg/zerion.mjs";
import "../../utils/buffer/readBigInt64LE.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
import "../../components/external-wallets/InjectedWalletIcon.mjs";
import "@heroicons/react/24/outline/WalletIcon";
import "../../components/ui/layout/Row.mjs";
import "../../components/ui/typography/LabelSm.mjs";
import "../../components/ui/typography/Value.mjs";
import "../../components/ui/animation/LoadingSkeleton.mjs";
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
import "../../hooks/useWallets.mjs";
const E = () => {
  let {
    closePrivyModal: E,
    createAnalyticsEvent: P
  } = g();
  let {
    navigate: R,
    setModalData: F,
    app: L,
    data: U
  } = v();
  let {
    wallets: M
  } = x();
  let _ = S();
  let [O, W] = i(0n);
  let [B, H] = i(null);
  let [z, G] = i(false);
  let [D, $] = i(false);
  let q = r(false);
  if (!U?.funding || U.funding.chainType !== "solana") {
    throw Error("Invalid funding data");
  }
  let {
    address: Q,
    amount: V,
    cluster: X,
    connectedWalletAddress: Y
  } = U.funding;
  let Z = b(X);
  let {
    tokenPrice: J
  } = y("solana");
  let {
    fundingAmountInBaseUnit: K,
    totalPriceInUsd: oo,
    totalPriceInNativeCurrency: to,
    feePriceInNativeCurrency: no,
    feePriceInUsd: eo
  } = T({
    amount: V,
    fee: O,
    tokenPrice: J
  });
  let io = Y ? M.find(({
    address: o
  }) => o === Y) : M[0];
  s(() => {
    (async () => {
      if (io?.type === "solana" && io.sendTransaction && !z && !q.current) {
        q.current = true;
        try {
          let o = _(A);
          if (!o) {
            throw new h("Unable to load solana plugin");
          }
          let {
            connection: t,
            transaction: n
          } = await o.createTransferTransaction({
            from: io.address,
            to: Q,
            amount: K,
            cluster: X
          });
          let e = await n.getEstimatedFee(t);
          if (e != null) {
            W(BigInt(e));
          }
          G(true);
          let i = await t.simulateTransaction(n);
          if (i.value.err) {
            if (i.value.logs?.find(o => /insufficient (lamports|funds)/gi.test(o))) {
              H(new h(`Wallet ${C(io.address, undefined, undefined, "solana")} does not have enough funds.`, undefined, f.INSUFFICIENT_BALANCE));
              return;
            } else {
              console.error("Transaction failed:", i.value.err);
              H(new h("Something went wrong", undefined, f.TRANSACTION_FAILURE));
              return;
            }
          }
          let r = await io.sendTransaction(n, t);
          P({
            eventName: I,
            payload: {
              provider: "external",
              status: "success",
              address: io.address,
              value: K.toString(),
              txHash: r,
              chainType: "solana",
              rpcEndpoint: Z
            }
          });
          G(false);
          $(true);
        } catch (o) {
          console.error(o);
          G(false);
          if (/user rejected the request/gi.test(o.message || "")) {
            H(new h("Transaction was rejected by the user", undefined, f.TRANSACTION_FAILURE));
            return;
          }
          H(new h("Something went wrong", undefined, f.TRANSACTION_FAILURE));
        }
      }
    })().catch(console.error).finally(() => q.current = false);
  }, []);
  s(() => {
    if (!B) {
      return;
    }
    let o = {
      error: B,
      previousScreen: N.FUNDING_TRANSFER_FROM_WALLET_SCREEN
    };
    F({
      funding: U?.funding,
      sendTransaction: U?.sendTransaction,
      errorModalData: o
    });
    R(N.ERROR_SCREEN, false);
  }, [B]);
  s(() => {
    if (!D) {
      return;
    }
    let o = setTimeout(E, j);
    return () => clearTimeout(o);
  }, [D]);
  if (D) {
    return o(t, {
      children: [/*#__PURE__*/n(u, {}), /*#__PURE__*/n(m, {}), /*#__PURE__*/o(a, {
        children: [/*#__PURE__*/n(e, {
          color: "var(--privy-color-success)",
          width: "64px",
          height: "64px"
        }), /*#__PURE__*/n(p, {
          title: "Success!",
          description: `You’ve successfully added ${V} SOL to your ${L.name} wallet. It may take a minute before the funds are available to use.`
        })]
      }), /*#__PURE__*/n(c, {}), /*#__PURE__*/n(l, {})]
    });
  }
  let ro = io ? w(io.walletClientType, io.connectorType, io.walletClientType) || "wallet" : null;
  if (io && z) {
    return /*#__PURE__*/n(k, {
      wallet: io,
      displayName: ro,
      addressToFund: Q,
      isBridging: false,
      isErc20Flow: false,
      totalPriceInUsd: oo,
      totalPriceInNativeCurrency: to,
      gasPriceInUsd: eo,
      gasPriceInNativeCurrency: no,
      chainId: "solana",
      chainName: X.name
    });
  } else {
    return /*#__PURE__*/o(t, {
      children: [/*#__PURE__*/n(u, {}), /*#__PURE__*/n(d, {}), /*#__PURE__*/n("div", {
        style: {
          marginTop: "1rem"
        }
      }), /*#__PURE__*/n(l, {})]
    });
  }
};
export { E as AwaitingExternalSolanaTransferScreen };
