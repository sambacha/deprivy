import { jsxs as o, Fragment as t, jsx as e } from "react/jsx-runtime";
import n from "@heroicons/react/24/outline/CheckCircleIcon";
import { useState as i, useEffect as r } from "react";
import { createWalletClient as s, custom as a, publicActions as m, createPublicClient as c, http as l } from "viem";
import { RefactorSpacerTop as p, CenteredItemWithGap as d, RefactorSpacerBottom as u } from "../../components/Layouts.mjs";
import { BlobbyFooter as h } from "../../components/ModalFooter.mjs";
import { CenteredScreenHeader as g } from "../../components/ScreenHeader.mjs";
import j from "../../components/embedded-wallets/FundWalletMethodHeader.mjs";
import { NeutralSpinner as f } from "../../components/primitives/NeutralSpinner/index.mjs";
import { addToDefaultChains as v } from "../../connectors/chains/utils.mjs";
import { DEFAULT_SUCCESS_SCREEN_EXTRA_LONG_DURATION_MS as y } from "../../constants.mjs";
import { PrivyClientError as w, PrivyErrorCode as b } from "../../errors.mjs";
import { usePrivyInternal as I } from "../../hooks/internal-context.mjs";
import { usePrivyModal as C } from "../../hooks/modal-context.mjs";
import { useGetTokenPrice as S } from "../../hooks/useGetTokenPrice.mjs";
import { useWallets as T } from "../../hooks/useWallets.mjs";
import { toDisplayName as k } from "../../lib/external-wallets/displayHelpers.mjs";
import { ON_RAMP_COMPLETE_ANALYTICS_EVENT as N } from "../../lib/funding/analytics.mjs";
import { getQuote as x, toGetQuoteInput as A, toEvmTransactionRequestInfoFromQuote as E } from "../../lib/funding/reservoir.mjs";
import { RELAY_SOLANA_MAINNET_CLUSTER_CHAIN_ID as F, RELAY_SOLANA_NATIVE_CURRENCY_ID as L } from "../../lib/solana/index.mjs";
import { getNativeCurrencyFromLamports as P, getSolanaFormattedAmounts as B } from "../../lib/solana/transaction.mjs";
import { getBalanceForChains as M } from "../../lib/wallets/actions/getBalanceForChains.mjs";
import { usePlugins as U } from "../../plugins/context/PrivyPluginContext.mjs";
import { SOLANA_FUNDING_PLUGIN_ID as R } from "../../plugins/solana-funding/id.mjs";
import { formatWalletAddress as W } from "../../utils/index.mjs";
import { getJsonRpcEndpointFromChain as _ } from "../../utils/eth/getPublicClient.mjs";
import { ModalScreen as q } from "../index.mjs";
import { BridgeNetworkSelectionView as O } from "./BridgeNetworkSelectionView.mjs";
import { TransferOrBridgeLoadingScreen as H } from "./TransferOrBridgeLoadingScreen.mjs";
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
import "@privy-io/js-sdk-core";
import "../../components/Button.mjs";
import "../../components/Loader.mjs";
import "../../components/ui/layout/Row.mjs";
import "../../components/ui/typography/ErrorMessage.mjs";
import "../../components/ui/typography/LabelSm.mjs";
import "../../components/ui/typography/Subtitle.mjs";
import "../../components/ui/typography/Title.mjs";
import "../../components/ui/wallet/NetworkBalanceCard.mjs";
import "@heroicons/react/24/outline/WalletIcon";
import "../../components/ui/chips/Chip.mjs";
import "../../components/ui/animation/LoadingSkeleton.mjs";
import "../../components/ui/typography/Value.mjs";
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
import "../../components/ui/wallet/shared.mjs";
import "../../components/ui/wallet/NetworkSelectorPanel.mjs";
import "@headlessui/react";
import "@heroicons/react/24/outline/ChevronDownIcon";
import "../../lib/ethers.mjs";
import "./styles.mjs";
import "../LinkPasskeyScreen.mjs";
import "@heroicons/react/24/outline/ClockIcon";
import "@heroicons/react/24/outline/TrashIcon";
import "@heroicons/react/24/solid/CheckBadgeIcon";
import "@heroicons/react/24/solid/LockClosedIcon";
import "../../hooks/privy-context.mjs";
import "../../svg/face-id.mjs";
import "../../svg/fingerprint.mjs";
import "../MfaScreens/StyledComponents.mjs";
import "../../components/external-wallets/InjectedWalletIcon.mjs";
import "../../components/ui/wallet/Address.mjs";
import "@heroicons/react/24/outline/CheckIcon";
import "@heroicons/react/24/outline/Square2StackIcon";
const $ = () => {
  let {
    rpcConfig: $,
    appId: z,
    closePrivyModal: D,
    createAnalyticsEvent: G
  } = I();
  let {
    navigate: V,
    setModalData: Q,
    app: X,
    data: Y
  } = C();
  let {
    wallets: Z
  } = T();
  let J = U();
  let [K, oo] = i(null);
  let [to, eo] = i(null);
  let [no, io] = i([]);
  let [ro, so] = i(0);
  let [ao, mo] = i(false);
  let [co, lo] = i(false);
  let [po, uo] = i(false);
  let [ho, go] = i(false);
  if (!Y?.funding || Y.funding.chainType !== "solana") {
    throw Error("Invalid funding data");
  }
  let {
    address: jo,
    cluster: fo,
    connectedWalletAddress: vo
  } = Y.funding;
  let [yo, wo] = i(Y.funding.amount);
  let bo = vo ? Z.find(({
    address: o
  }) => o === vo) : Z[0];
  let [Io, Co] = i(null);
  r(() => {
    (async () => {
      if (!bo) {
        return;
      }
      let o = await bo.getEthereumProvider();
      Co(s({
        account: bo.address,
        transport: a(o)
      }).extend(m));
    })().catch(console.error);
  }, [bo]);
  let [So, To] = i(0n);
  let ko = P(So);
  r(() => {
    let o = J(R);
    if (o) {
      o.getBalance({
        address: jo,
        cluster: fo
      }).then(o => To(BigInt(o)));
    } else {
      console.warn("Unable to load solana plugin, skipping balance");
    }
  }, []);
  let [No, xo] = i();
  let {
    tokenPrice: Ao
  } = S("solana");
  let {
    fundingAmountInBaseUnit: Eo,
    fundingAmountInUsd: Fo
  } = B({
    amount: yo,
    fee: 0n,
    tokenPrice: Ao
  });
  r(() => {
    (async () => {
      if (!Io || !bo) {
        return;
      }
      let o = ["testnet", "devnet"].includes(fo.name);
      if (o) {
        console.warn("Solana testnets are not supported for bridging");
      }
      let t = v(X.chains).filter(({
        testnet: t
      }) => !!t === o);
      let e = (await M({
        chains: t,
        address: bo.address,
        appId: z,
        rpcConfig: $
      })).filter(o => o.balance > 0n);
      if (e.length < 1) {
        oo(new w(`Wallet ${W(bo.address)} does not have enough funds.`, undefined, b.INSUFFICIENT_BALANCE));
        return;
      }
      e.sort((o, t) => Number(t.balance - o.balance));
      let n = (await Promise.allSettled(e.map(async o => ({
        ...o,
        quote: await x({
          isTestnet: false,
          input: A({
            amount: Eo.toString(),
            user: bo.address,
            recipient: jo,
            destinationChainId: F,
            destinationCurrency: L,
            originChainId: o.chain.id
          })
        })
      })))).filter(o => o.status === "fulfilled").map(o => o.value);
      if (n.length < 1) {
        oo(new w(`Unable to fetch quotes for bridging. Wallet ${W(bo.address)} does not have enough funds.`, undefined, b.INSUFFICIENT_BALANCE));
        return;
      }
      let i = n.map(({
        quote: o,
        balance: t,
        chain: e
      }) => ({
        bridgeTx: E(o),
        balance: t,
        chain: e
      })).filter(({
        bridgeTx: o
      }) => !!o);
      if (i.length > 1) {
        io(i);
        return;
      }
      let r = i.at(0);
      if (r) {
        lo(true);
        xo({
          data: r.bridgeTx.data,
          to: r.bridgeTx.to,
          value: r.bridgeTx.value,
          chain: r.chain
        });
      } else {
        oo(new w(`Unable to select bridge option from quotes. Wallet ${W(bo.address)} does not have enough funds.`, undefined, b.INSUFFICIENT_BALANCE));
      }
    })().catch(console.error);
  }, [Io]);
  r(() => {
    (async () => {
      let o;
      let t;
      if (!Io || !bo || ao || po || !No) {
        return;
      }
      mo(true);
      let e = c({
        chain: No.chain,
        transport: l(_(No.chain, $, z))
      });
      try {
        o = await e.prepareTransactionRequest({
          account: bo.address,
          to: No.to,
          chain: No.chain,
          data: No.data,
          value: BigInt(No.value ?? 0)
        });
      } catch (o) {
        console.error(o);
        if (no.length > 1) {
          eo(o.shortMessage ?? "Something went wrong");
        }
      }
      if (o) {
        mo(false);
        uo(true);
        try {
          await Io.switchChain({
            id: No.chain.id
          });
        } catch (o) {
          await Io.addChain({
            chain: No.chain
          });
          await Io.switchChain({
            id: No.chain.id
          });
        }
        try {
          t = await Io.sendTransaction(o);
          G({
            eventName: N,
            payload: {
              provider: "external",
              status: "success",
              address: bo.address,
              chainId: No.chain.id,
              value: No.value?.toString(),
              txHash: t
            }
          });
        } catch (o) {
          console.error(o);
          if (o.name === "TransactionExecutionError") {
            if (no.length < 1) {
              oo(new w(o.shortMessage, undefined, b.TRANSACTION_FAILURE));
            } else {
              eo(o.shortMessage ?? "Something went wrong");
            }
          }
        }
        if (t) {
          await Io.waitForTransactionReceipt({
            hash: t
          });
          uo(false);
          go(true);
        } else {
          uo(false);
        }
      } else {
        mo(false);
      }
    })().catch(console.error);
  }, [Io, No]);
  r(() => {
    if (!K) {
      return;
    }
    let o = {
      error: K,
      previousScreen: q.FUNDING_TRANSFER_FROM_WALLET_SCREEN
    };
    Q({
      funding: Y?.funding,
      sendTransaction: Y?.sendTransaction,
      errorModalData: o
    });
    V(q.ERROR_SCREEN, false);
  }, [K]);
  let Lo = bo ? k(bo.walletClientType, bo.connectorType, bo.walletClientType) || "wallet" : null;
  r(() => {
    if (!ho) {
      return;
    }
    let o = setTimeout(D, y);
    return () => clearTimeout(o);
  }, [ho]);
  if (ho) {
    return o(t, {
      children: [/*#__PURE__*/e(j, {}), /*#__PURE__*/e(p, {}), /*#__PURE__*/o(d, {
        children: [/*#__PURE__*/e(n, {
          color: "var(--privy-color-success)",
          width: "64px",
          height: "64px"
        }), /*#__PURE__*/e(g, {
          title: "Success!",
          description: `You’ve successfully added ${yo} SOL to your ${X.name} wallet. It may take a minute before the funds are available to use.`
        })]
      }), /*#__PURE__*/e(u, {}), /*#__PURE__*/e(h, {})]
    });
  }
  let Po = no[ro];
  if (no.length > 1 && Po) {
    return /*#__PURE__*/e(O, {
      displayName: Lo,
      configuredFundingChain: fo,
      formattedBalance: ko,
      fundingAmount: yo,
      fundingCurrency: "SOL",
      fundingAmountInUsd: Fo,
      options: no,
      selectedOption: Po,
      isPreparing: ao,
      isSubmitting: po,
      addressToFund: jo,
      fundingWalletAddress: bo?.address || "",
      errorMessage: to,
      onSubmit: () => {
        if (Y.funding?.amount !== yo) {
          (async function () {
            if (bo && Po) {
              try {
                let o = await x({
                  isTestnet: false,
                  input: A({
                    amount: Eo.toString(),
                    user: bo.address,
                    recipient: jo,
                    destinationChainId: F,
                    destinationCurrency: L,
                    originChainId: Po.chain.id
                  })
                });
                let t = E(o);
                if (!t) {
                  throw Error("Invalid transaction request");
                }
                lo(true);
                xo({
                  data: t.data,
                  to: t.to,
                  value: t.value,
                  chain: Po.chain
                });
              } catch (o) {
                console.error(o);
                oo(new w("Unable to fetch quotes for bridging", o, b.INSUFFICIENT_BALANCE));
              }
            }
          })().catch(console.error);
        } else {
          xo({
            to: Po.bridgeTx.to,
            data: Po.bridgeTx.data,
            value: Po.bridgeTx.value,
            chain: Po.chain
          });
        }
      },
      onSelect: o => {
        if (o !== ro) {
          eo(null);
          so(o);
        }
      },
      onAmountChange: wo
    });
  } else if (po && bo) {
    return /*#__PURE__*/e(H, {
      wallet: bo,
      displayName: Lo,
      addressToFund: jo,
      isBridging: co,
      isErc20Flow: false,
      chainId: "solana",
      chainName: fo.name,
      totalPriceInUsd: undefined,
      totalPriceInNativeCurrency: undefined,
      gasPriceInUsd: undefined,
      gasPriceInNativeCurrency: undefined
    });
  } else {
    return /*#__PURE__*/o(t, {
      children: [/*#__PURE__*/e(j, {}), /*#__PURE__*/e(f, {}), /*#__PURE__*/e("div", {
        style: {
          marginTop: "1rem"
        }
      }), /*#__PURE__*/e(h, {})]
    });
  }
};
export { $ as AwaitingEvmToSolBridgingScreen };
