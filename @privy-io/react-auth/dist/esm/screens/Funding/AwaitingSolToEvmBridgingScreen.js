import { jsxs as o, Fragment as e, jsx as n } from "react/jsx-runtime";
import { ModalScreen as t } from "../index.mjs";
import i from "@heroicons/react/24/outline/CheckCircleIcon";
import { useRef as r, useState as s, useEffect as m } from "react";
import { parseEther as a } from "viem";
import { RefactorSpacerTop as c, CenteredItemWithGap as l, RefactorSpacerBottom as p } from "../../components/Layouts.mjs";
import { BlobbyFooter as d } from "../../components/ModalFooter.mjs";
import { CenteredScreenHeader as u } from "../../components/ScreenHeader.mjs";
import j from "../../components/embedded-wallets/FundWalletMethodHeader.mjs";
import { NeutralSpinner as h } from "../../components/primitives/NeutralSpinner/index.mjs";
import { DEFAULT_SUCCESS_SCREEN_EXTRA_LONG_DURATION_MS as f } from "../../constants.mjs";
import { PrivyClientError as g, PrivyErrorCode as v } from "../../errors.mjs";
import { usePrivyInternal as y } from "../../hooks/internal-context.mjs";
import { usePrivyModal as w } from "../../hooks/modal-context.mjs";
import { toDisplayName as I } from "../../lib/external-wallets/displayHelpers.mjs";
import { ON_RAMP_COMPLETE_ANALYTICS_EVENT as b } from "../../lib/funding/analytics.mjs";
import { getQuote as C, toGetQuoteInput as S } from "../../lib/funding/reservoir.mjs";
import { RELAY_SOLANA_MAINNET_CLUSTER_CHAIN_ID as T, RELAY_SOLANA_USDC_TOKEN_ID as A, RELAY_SOLANA_NATIVE_CURRENCY_ID as N } from "../../lib/solana/index.mjs";
import { usePlugins as F } from "../../plugins/context/PrivyPluginContext.mjs";
import { SOLANA_FUNDING_PLUGIN_ID as E } from "../../plugins/solana-funding/id.mjs";
import { formatSolanaWalletAddress as x } from "../../utils/index.mjs";
import { TransferOrBridgeLoadingScreen as R } from "./TransferOrBridgeLoadingScreen.mjs";
import { useSolanaWallets as k } from "../../hooks/solana/useSolanaWallets.mjs";
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
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../utils/eth/getPublicClient.mjs";
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
function U() {
  let {
    closePrivyModal: U,
    createAnalyticsEvent: L
  } = y();
  let {
    navigate: _,
    setModalData: M,
    app: P,
    data: W
  } = w();
  let {
    wallets: O
  } = k();
  let $ = r(false);
  let B = F();
  let [D, H] = s(false);
  let [q, z] = s(false);
  let [G, Q] = s(null);
  if (!W?.funding || W.funding.chainType !== "ethereum") {
    throw Error("Invalid funding data");
  }
  let {
    amount: V,
    connectedWalletAddress: X,
    chain: Y,
    cluster: Z,
    isUSDC: J
  } = W.funding;
  let K = W.funding.address;
  let oo = W.funding.erc20Address;
  let eo = W.funding.isUSDC ? "USDC" : Y.nativeCurrency.symbol;
  let no = Z ?? {
    name: "mainnet-beta"
  };
  let to = X ? O.find(({
    address: o
  }) => o === X) : O[0];
  m(() => {
    (async function () {
      if (!to || !Y || $.current) {
        return;
      }
      let o = B(E);
      if (!o) {
        Q(new g("Unable to solana plugin"));
        return;
      }
      $.current = true;
      if (Y?.testnet) {
        console.warn("Solana testnets are not supported for bridging");
      }
      let e = J ? parseFloat(V) * 1000000 : a(V);
      let n = await C({
        isTestnet: !!Y.testnet,
        input: S({
          amount: e.toString(),
          user: to.address,
          recipient: K,
          destinationChainId: Y.id,
          originChainId: T,
          originCurrency: J ? A : N,
          destinationCurrency: J ? oo : undefined
        })
      }).catch(console.error);
      if (!n) {
        Q(new g(`Unable to fetch quotes for bridging. Wallet ${x(to.address)} does not have enough funds.`, undefined, v.INSUFFICIENT_BALANCE));
        return;
      }
      let t = await o.createBridgeTransactionFromRelayQuote({
        quote: n,
        from: to.address,
        cluster: no
      });
      if (t) {
        try {
          H(true);
          let {
            connection: o,
            transaction: i
          } = t;
          let r = await o.simulateTransaction(i);
          if (r.value.err) {
            if (r.value.logs?.find(o => /insufficient (lamports|funds)/gi.test(o))) {
              Q(new g(`Wallet ${x(to?.address)} does not have enough funds. ${n.details.currencyIn.amountFormatted} ${eo} are needed to complete the transaction.`, undefined, v.INSUFFICIENT_BALANCE));
              return;
            } else {
              console.error("Transaction failed:", r.value.err);
              Q(new g("Something went wrong", undefined, v.TRANSACTION_FAILURE));
              return;
            }
          }
          let s = await to.sendTransaction(i, o);
          let m = await o.confirmTransaction(s);
          if (m.value.err) {
            console.error("Transaction failed:", m.value.err);
            Q(new g("Something went wrong", undefined, v.TRANSACTION_FAILURE));
            return;
          }
          L({
            eventName: b,
            payload: {
              provider: "external",
              status: "success",
              address: to.address,
              chainId: Y.id,
              value: e.toString(),
              txHash: s
            }
          });
          z(true);
        } catch (o) {
          console.error(o);
          if (/user rejected the request/gi.test(o.message || "")) {
            Q(new g("Transaction was rejected by the user", undefined, v.TRANSACTION_FAILURE));
            return;
          }
          Q(new g("Something went wrong", undefined, v.TRANSACTION_FAILURE));
        }
      } else {
        Q(new g(`Unable to select bridge option from quotes. Wallet ${x(to.address)} does not have enough funds.`, undefined, v.INSUFFICIENT_BALANCE));
      }
    })().catch(console.error);
  }, []);
  m(() => {
    if (!q) {
      return;
    }
    let o = setTimeout(U, f);
    return () => clearTimeout(o);
  }, [q]);
  m(() => {
    if (!G) {
      return;
    }
    let o = {
      error: G,
      previousScreen: t.FUNDING_TRANSFER_FROM_WALLET_SCREEN
    };
    M({
      funding: W?.funding,
      sendTransaction: W?.sendTransaction,
      errorModalData: o
    });
    _(t.ERROR_SCREEN, false);
  }, [G]);
  if (q) {
    return o(e, {
      children: [/*#__PURE__*/n(j, {}), /*#__PURE__*/n(c, {}), /*#__PURE__*/o(l, {
        children: [/*#__PURE__*/n(i, {
          color: "var(--privy-color-success)",
          width: "64px",
          height: "64px"
        }), /*#__PURE__*/n(u, {
          title: "Success!",
          description: `You’ve successfully added ${V} ${eo} to your ${P.name} wallet. It may take a minute before the funds are available to use.`
        })]
      }), /*#__PURE__*/n(p, {}), /*#__PURE__*/n(d, {})]
    });
  }
  if (D && to) {
    let o = to ? I(to.walletClientType, to.connectorType, to.walletClientType) || "wallet" : null; /*#__PURE__*/
    return n(R, {
      wallet: to,
      displayName: o,
      addressToFund: K,
      isBridging: D,
      isErc20Flow: false,
      chainId: Y.id,
      chainName: Y.name,
      totalPriceInUsd: undefined,
      totalPriceInNativeCurrency: undefined,
      gasPriceInUsd: undefined,
      gasPriceInNativeCurrency: undefined
    });
  } /*#__PURE__*/
  return o(e, {
    children: [/*#__PURE__*/n(j, {}), /*#__PURE__*/n(h, {}), /*#__PURE__*/n("div", {
      style: {
        marginTop: "1rem"
      }
    }), /*#__PURE__*/n(d, {})]
  });
}
export { U as AwaitingSolToEvmBridgingScreen };
