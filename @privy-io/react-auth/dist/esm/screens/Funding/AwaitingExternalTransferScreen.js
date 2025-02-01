import { jsxs as o, Fragment as e, jsx as t } from "react/jsx-runtime";
import n from "@heroicons/react/24/outline/CheckCircleIcon";
import { useState as i, useEffect as r } from "react";
import { parseEther as s, createWalletClient as a, custom as c, publicActions as m, createPublicClient as l, http as p, encodeFunctionData as d } from "viem";
import { RefactorSpacerTop as u, CenteredItemWithGap as h, RefactorSpacerBottom as g } from "../../components/Layouts.mjs";
import { BlobbyFooter as j } from "../../components/ModalFooter.mjs";
import { CenteredScreenHeader as f } from "../../components/ScreenHeader.mjs";
import v from "../../components/embedded-wallets/FundWalletMethodHeader.mjs";
import { NeutralSpinner as y } from "../../components/primitives/NeutralSpinner/index.mjs";
import { addToDefaultChains as b } from "../../connectors/chains/utils.mjs";
import { DEFAULT_SUCCESS_SCREEN_EXTRA_LONG_DURATION_MS as w } from "../../constants.mjs";
import { PrivyClientError as I, PrivyErrorCode as C } from "../../errors.mjs";
import { usePrivyInternal as T } from "../../hooks/internal-context.mjs";
import { usePrivyModal as S } from "../../hooks/modal-context.mjs";
import { useGetTokenPrice as N } from "../../hooks/useGetTokenPrice.mjs";
import { useWallets as k } from "../../hooks/useWallets.mjs";
import { ERC20_TRANSFER_ABI_STUB as A } from "../../lib/erc20/actions/abis/transfer.mjs";
import { formatErc20TokenAmount as E } from "../../lib/erc20/formatErc20TokenAmount.mjs";
import { getDollarsFromStringFloat as x, sumWeiQuantities as F, getDollarsFromWei as B, getNativeCurrencyFromWei as L } from "../../lib/ethers.mjs";
import { toDisplayName as M } from "../../lib/external-wallets/displayHelpers.mjs";
import { ON_RAMP_COMPLETE_ANALYTICS_EVENT as P } from "../../lib/funding/analytics.mjs";
import { getQuote as R, toGetQuoteInput as U, toEvmTransactionRequestInfoFromQuote as W } from "../../lib/funding/reservoir.mjs";
import { getBalanceForChains as _ } from "../../lib/wallets/actions/getBalanceForChains.mjs";
import { getErc20Balance as q } from "../../lib/wallets/actions/getErc20Balance.mjs";
import { formatWalletAddress as $ } from "../../utils/index.mjs";
import { getJsonRpcEndpointFromChain as H } from "../../utils/eth/getPublicClient.mjs";
import { ModalScreen as O } from "../index.mjs";
import { BridgeNetworkSelectionView as z } from "./BridgeNetworkSelectionView.mjs";
import { TransferOrBridgeLoadingScreen as D } from "./TransferOrBridgeLoadingScreen.mjs";
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
import "../../lib/solana/index.mjs";
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
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
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
const G = () => {
  let {
    rpcConfig: G,
    appId: V,
    closePrivyModal: Q,
    createAnalyticsEvent: X
  } = T();
  let {
    navigate: Y,
    setModalData: Z,
    app: J,
    data: K
  } = S();
  let {
    wallets: oo
  } = k();
  let [eo, to] = i(false);
  let [no, io] = i(0n);
  let [ro, so] = i(false);
  let [ao, co] = i(null);
  let [mo, lo] = i(null);
  let [po, uo] = i([]);
  let [ho, go] = i(0);
  let [jo, fo] = i(false);
  let [vo, yo] = i(false);
  let [bo, wo] = i(false);
  let [Io, Co] = i(false);
  if (!K?.funding || K.funding.chainType !== "ethereum") {
    throw Error("Invalid funding data");
  }
  let {
    erc20ContractInfo: To,
    chain: So,
    connectedWalletAddress: No
  } = K.funding;
  let ko = K.funding.address;
  let Ao = K.funding.erc20Address;
  let [Eo, xo] = i(K.funding.amount);
  r(() => {
    if (Ao && !To) {
      co(Error("Unable to fetch token details"));
    }
  }, []);
  let Fo = !!Ao && !!To;
  let Bo = Fo ? BigInt(parseFloat(Eo) * 10 ** To.decimals) : s(Eo);
  let Lo = No ? oo.find(({
    address: o
  }) => o === No) : oo[0];
  let [Mo, Po] = i(null);
  r(() => {
    (async () => {
      if (!Lo) {
        return;
      }
      let o = await Lo.getEthereumProvider();
      Po(a({
        account: Lo.address,
        transport: c(o)
      }).extend(m));
    })().catch(console.error);
  }, [Lo]);
  let [Ro, Uo] = i(0n);
  r(() => {
    l({
      chain: So,
      transport: p(H(So, G, V))
    }).getBalance({
      address: ko
    }).then(Uo).catch(console.error);
  }, []);
  let [Wo, _o] = i(0n);
  r(() => {
    if (Fo) {
      q({
        chain: So,
        address: ko,
        appId: V,
        rpcConfig: G,
        erc20Address: Ao
      }).then(o => _o(o.balance)).catch(console.error);
    }
  }, []);
  let {
    tokenPrice: qo
  } = N(So.id);
  let [$o, Ho] = i({
    to: ko,
    chain: So,
    value: Bo,
    data: undefined
  });
  r(() => {
    (async () => {
      let o;
      let e;
      if (!Mo || !Lo || jo || bo) {
        return;
      }
      fo(true);
      let t = l({
        chain: $o.chain,
        transport: p(H($o.chain, G, V))
      });
      if (Fo && !$o.data) {
        if (await t.simulateContract({
          address: Ao,
          chain: $o.chain,
          abi: A,
          functionName: "transfer",
          args: [ko, Bo],
          account: Lo.address
        }).catch(o => {
          console.warn("Simulated token transfer failed with error, fetching bridge options.", o);
        })) {
          fo(false);
          Ho({
            to: Ao,
            chain: $o.chain,
            data: d({
              abi: A,
              functionName: "transfer",
              args: [ko, Bo]
            }),
            value: "0x0"
          });
          return;
        } else {
          fo(false);
          so(true);
          return;
        }
      }
      try {
        o = await t.prepareTransactionRequest({
          account: Lo.address,
          to: $o.to,
          chain: $o.chain,
          data: $o.data,
          value: BigInt($o.value ?? 0)
        });
      } catch (o) {
        console.error(o);
        if (po.length > 1) {
          lo(o.shortMessage ?? "Something went wrong");
        } else if (vo && po.length === 0) {
          co(new I(`Wallet ${$(Lo.address)} does not have enough funds.`, undefined, C.INSUFFICIENT_BALANCE));
          return;
        }
      }
      if (!o) {
        fo(false);
        so(true);
        return;
      }
      fo(false);
      wo(true);
      to(true);
      io(o.gas);
      try {
        await Mo.switchChain({
          id: $o.chain.id
        });
      } catch (o) {
        await Mo.addChain({
          chain: $o.chain
        });
        await Mo.switchChain({
          id: $o.chain.id
        });
      }
      try {
        e = await Mo.sendTransaction(o);
        X({
          eventName: P,
          payload: {
            provider: "external",
            status: "success",
            address: Lo.address,
            chainId: $o.chain.id,
            value: $o.value?.toString(),
            txHash: e
          }
        });
      } catch (o) {
        console.error(o);
        if (o.name === "TransactionExecutionError") {
          if (po.length < 1) {
            let e = o.shortMessage;
            if (o.shortMessage.includes("rejected the request") || o.details.includes("rejected the request")) {
              e = "User rejected the request.";
            }
            co(new I(e, undefined, C.TRANSACTION_FAILURE));
          } else {
            lo(o.shortMessage ?? "Something went wrong");
          }
        }
      }
      if (e) {
        await Mo.waitForTransactionReceipt({
          hash: e
        });
        wo(false);
        Co(true);
      } else {
        wo(false);
      }
    })().catch(console.error);
  }, [Mo, $o]);
  r(() => {
    (async () => {
      if (!ro || !Mo || !Lo) {
        return;
      }
      let o = b(J.chains).filter(o => o.id !== So.id && !!o.testnet == !!So.testnet);
      if (Fo) {
        o.unshift(So);
      }
      let e = await _({
        chains: o,
        address: Lo.address,
        appId: V,
        rpcConfig: G
      });
      let t = Fo ? e.filter(o => o.balance > 0n) : e.filter(o => o.balance > Bo);
      if (t.length < 1) {
        co(new I(`Wallet ${$(Lo.address)} does not have enough funds.`, undefined, C.INSUFFICIENT_BALANCE));
        return;
      }
      t.sort((o, e) => Number(e.balance - o.balance));
      let n = (await Promise.allSettled(t.map(async o => ({
        quote: await R({
          isTestnet: !!So.testnet,
          input: U({
            amount: Bo.toString(),
            user: Lo.address,
            recipient: ko,
            destinationChainId: So.id,
            destinationCurrency: Ao,
            originChainId: o.chain.id
          })
        }),
        ...o
      })))).filter(o => o.status === "fulfilled").map(o => o.value);
      if (n.length < 1) {
        co(new I(`Wallet ${$(Lo.address)} does not have enough funds.`, undefined, C.INSUFFICIENT_BALANCE));
        return;
      }
      let i = n.map(o => ({
        bridgeTx: W(o.quote),
        balance: o.balance,
        chain: o.chain
      })).filter(o => !!o.bridgeTx);
      if (i.length > 1) {
        uo(i);
        return;
      }
      let r = i[0];
      if (r) {
        yo(true);
        Ho({
          data: r.bridgeTx.data,
          to: r.bridgeTx.to,
          value: r.bridgeTx.value,
          chain: r.chain
        });
      } else {
        co(new I(`Wallet ${$(Lo.address)} does not have enough funds.`, undefined, C.INSUFFICIENT_BALANCE));
      }
    })().catch(console.error);
  }, [ro]);
  r(() => {
    if (!ao) {
      return;
    }
    let o = {
      error: ao,
      previousScreen: O.FUNDING_TRANSFER_FROM_WALLET_SCREEN
    };
    Z({
      funding: K?.funding,
      sendTransaction: K?.sendTransaction,
      errorModalData: o
    });
    Y(O.ERROR_SCREEN, false);
  }, [ao]);
  let Oo = Lo ? M(Lo.walletClientType, Lo.connectorType, Lo.walletClientType) || "wallet" : null;
  let zo = !Fo && qo ? x(Eo ?? "0", qo) : undefined;
  let Do = Fo ? no : F([no, Bo]);
  let Go = Do && qo ? B(Do, qo) : undefined;
  let Vo = Do ? L(Do, "ETH") : undefined;
  let Qo = no && qo ? B(no, qo) : undefined;
  let Xo = no ? L(no, "ETH") : undefined;
  r(() => {
    if (!Io) {
      return;
    }
    let o = setTimeout(Q, w);
    return () => clearTimeout(o);
  }, [Io]);
  if (Io) {
    return o(e, {
      children: [/*#__PURE__*/t(v, {}), /*#__PURE__*/t(u, {}), /*#__PURE__*/o(h, {
        children: [/*#__PURE__*/t(n, {
          color: "var(--privy-color-success)",
          width: "64px",
          height: "64px"
        }), /*#__PURE__*/t(f, {
          title: "Success!",
          description: `You’ve successfully added ${Eo} ${Fo ? To.symbol : So.nativeCurrency.symbol} to your ${J.name} wallet. It may take a minute before the funds are available to use.`
        })]
      }), /*#__PURE__*/t(g, {}), /*#__PURE__*/t(j, {})]
    });
  }
  let Yo = Fo ? `${E({
    amount: Wo,
    decimals: To.decimals
  })}  ${To.symbol}` : L(Ro, So.nativeCurrency.symbol, 3, true);
  let Zo = po[ho];
  if (po.length > 1 && Zo) {
    return /*#__PURE__*/t(z, {
      displayName: Oo,
      configuredFundingChain: So,
      formattedBalance: Yo,
      fundingAmount: Eo,
      fundingCurrency: Fo ? To.symbol : So.nativeCurrency.symbol,
      fundingAmountInUsd: zo,
      options: po,
      selectedOption: Zo,
      isPreparing: jo,
      isSubmitting: bo,
      addressToFund: ko,
      fundingWalletAddress: Lo?.address || "",
      errorMessage: mo,
      onSubmit: () => {
        if (K.funding?.amount !== Eo) {
          (async function () {
            if (Lo && Zo) {
              try {
                let o = await R({
                  isTestnet: !!So.testnet,
                  input: U({
                    amount: Bo.toString(),
                    user: Lo.address,
                    recipient: ko,
                    destinationChainId: So.id,
                    destinationCurrency: Ao,
                    originChainId: Zo.chain.id
                  })
                });
                let e = W(o);
                if (!e) {
                  throw Error("Invalid transaction request");
                }
                yo(true);
                Ho({
                  data: e.data,
                  to: e.to,
                  value: e.value,
                  chain: Zo.chain
                });
              } catch (o) {
                console.error(o);
                co(new I("Unable to fetch quotes for bridging", o, C.INSUFFICIENT_BALANCE));
              }
            }
          })().catch(console.error);
        } else {
          Ho({
            to: Zo.bridgeTx.to,
            data: Zo.bridgeTx.data,
            value: Zo.bridgeTx.value,
            chain: Zo.chain
          });
        }
      },
      onSelect: o => {
        if (o !== ho) {
          lo(null);
          go(o);
        }
      },
      onAmountChange: xo
    });
  } else if (eo && no && Lo && K?.funding) {
    return /*#__PURE__*/t(D, {
      wallet: Lo,
      displayName: Oo,
      addressToFund: ko,
      isBridging: vo,
      isErc20Flow: Fo,
      totalPriceInUsd: Go,
      totalPriceInNativeCurrency: Vo,
      gasPriceInUsd: Qo,
      gasPriceInNativeCurrency: Xo,
      chainId: So.id,
      chainName: So.name
    });
  } else {
    return /*#__PURE__*/o(e, {
      children: [/*#__PURE__*/t(v, {}), /*#__PURE__*/t(y, {}), /*#__PURE__*/t("div", {
        style: {
          marginTop: "1rem"
        }
      }), /*#__PURE__*/t(j, {})]
    });
  }
};
export { G as AwaitingExternalTransferScreen };
