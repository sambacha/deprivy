import { jsx as o } from "react/jsx-runtime";
import { useState as n, useMemo as t, useEffect as e } from "react";
import { formatEther as i } from "viem";
import { ProviderErrors as r } from "@privy-io/js-sdk-core";
import { useAppConfig as s } from "../../configuration/context.mjs";
import { PrivyProviderRpcError as a, ProviderRpcError as c } from "../../connectors/errors.mjs";
import { DEFAULT_SUCCESS_SCREEN_DURATION_MS as m } from "../../constants.mjs";
import { sendTransaction as p } from "../../embedded-wallets/rpc/index.mjs";
import { usePrivyInternal as l } from "../../hooks/internal-context.mjs";
import { usePrivyModal as d } from "../../hooks/modal-context.mjs";
import { usePrivyContext as u } from "../../hooks/privy-context.mjs";
import { useGetTokenPrice as h } from "../../hooks/useGetTokenPrice.mjs";
import { useWalletBalance as j } from "../../hooks/useWalletBalance.mjs";
import { getErc20TokenInfo as f } from "../../lib/erc20/actions/getErc20TokenInfo.mjs";
import { formatErc20TokenAmount as T } from "../../lib/erc20/formatErc20TokenAmount.mjs";
import { getNativeCurrencyFromWei as g, getDollarsFromWei as b } from "../../lib/ethers.mjs";
import { getPublicClient as I } from "../../utils/eth/getPublicClient.mjs";
import { ErrorScreenView as y } from "../ErrorScreen.mjs";
import { ModalScreen as C } from "../index.mjs";
import { SendTransactionScreenView as v } from "./SendTransactionScreenView.mjs";
import { TransactionErrorView as w } from "./TransactionErrorView.mjs";
import { TransactionReceiptView as k } from "./TransactionReceiptView.mjs";
import { getStaticTransactionMetadata as E } from "./getStaticTransactionMetadata.mjs";
import { usePrepareTransaction as S } from "./usePrepareTransaction.mjs";
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
import "../../lib/solana/index.mjs";
import "../../theme.mjs";
import "tinycolor2";
import "../../lib/cybr53.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../hooks/index.mjs";
import "../../components/PrefetchedImage.mjs";
import "../../hooks/useGetSolPrice.mjs";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "@heroicons/react/24/outline/ExclamationTriangleIcon";
import "@heroicons/react/24/outline/PhoneIcon";
import "styled-components";
import "../../components/Button.mjs";
import "../../components/Loader.mjs";
import "../../components/CircleBorder.mjs";
import "../../components/ModalHeader.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../../components/layout/StackedContainer.mjs";
import "../../embedded-wallets/errors.mjs";
import "../../embedded-wallets/types.mjs";
import "../../hooks/captcha-context.mjs";
import "../../svg/lock-closed.mjs";
import "@heroicons/react/24/outline";
import "../../components/ModalFooter.mjs";
import "../../svg/protected-by-privy.mjs";
import "../../components/ui/layout/Row.mjs";
import "../../components/ui/typography/ErrorMessage.mjs";
import "../../components/ui/typography/LabelSm.mjs";
import "../../components/ui/typography/Subtitle.mjs";
import "../../components/ui/typography/Title.mjs";
import "../../components/ui/typography/Value.mjs";
import "../../components/ui/animation/LoadingSkeleton.mjs";
import "../../components/ui/wallet/Address.mjs";
import "@heroicons/react/24/outline/CheckIcon";
import "@heroicons/react/24/outline/Square2StackIcon";
import "../../components/ui/wallet/WalletInfoCard.mjs";
import "../../components/ui/chips/Chip.mjs";
import "../../components/ui/layout/Column.mjs";
import "../../components/ui/typography/LabelXs.mjs";
import "../../components/ui/wallet/shared.mjs";
import "../LandingScreen/styles.mjs";
import "./TransactionDetail.mjs";
import "./useTransactionDetails.mjs";
import "@heroicons/react/24/outline/ClipboardDocumentCheckIcon";
import "@heroicons/react/24/outline/ClipboardDocumentIcon";
import "@heroicons/react/24/outline/ExclamationCircleIcon";
import "../../components/Layouts.mjs";
import "../../components/ScreenHeader.mjs";
import "../../components/embedded-wallets/TransactionDetails.mjs";
import "../../components/embedded-wallets/DisplayInfoItem.mjs";
import "../../components/embedded-wallets/PriceDisplay.mjs";
import "../../lib/solana/transaction.mjs";
import "../../utils/buffer/readBigInt64LE.mjs";
import "../../components/embedded-wallets/TransactionTotal.mjs";
import "../../components/primitives/Accordion/index.mjs";
import "@heroicons/react/24/outline/ChevronDownIcon";
import "../../components/primitives/Accordion/AccordionContext.mjs";
import "../../components/embedded-wallets/WalletLink.mjs";
import "../../lib/deployAccount/actions/abis/deployAccount.mjs";
import "../../lib/erc20/actions/abis/approve.mjs";
import "../../lib/erc20/actions/abis/transfer.mjs";
import "../../lib/erc721/actions/abis/mint.mjs";
import "../../lib/erc721/actions/abis/safeTransferFrom.mjs";
import "../../lib/erc721/actions/abis/setApprovalForAll.mjs";
import "../../lib/erc721/actions/abis/transferFrom.mjs";
import "../../lib/erc1155/actions/abis/safeBatchTransferFrom.mjs";
import "../../lib/erc1155/actions/abis/safeTransferFrom.mjs";
import "../../lib/viem/prepareTransactionRequest.mjs";
import "../../lib/viem/toViemTransactionSerializable.mjs";
let x = new a(new c("There was an issue preparing your transaction", r.E32603_DEFAULT_INTERNAL_ERROR.eipCode));
let A = (o, n) => o?.sendTransaction ? "transactionRequest" in o.sendTransaction ? o.sendTransaction.transactionRequest : o.sendTransaction.transactionRequests[n] : undefined;
const R = () => {
  let R;
  let {
    data: D,
    onUserCloseViaDialogOrKeybindRef: F,
    setModalData: O,
    navigate: P
  } = d();
  let {
    rpcConfig: L,
    chains: q,
    closePrivyModal: B,
    walletProxy: N
  } = l();
  let {
    getAccessToken: M,
    user: V
  } = u();
  let _ = s();
  let [H, W] = n(0);
  ro = D;
  let G = ro?.sendTransaction ? "transactionRequest" in ro.sendTransaction ? 0 : ro.sendTransaction.transactionRequests.length - 1 : 0;
  let [U, z] = n(A(D, H));
  let [Q, X] = n(null);
  let [$, J] = n();
  let [K, Y] = n(false);
  let [Z, oo] = n(null);
  let [no, to] = n(null);
  let [eo, io] = n(null);
  var ro;
  if (!U || !D?.sendTransaction || !D?.sendTransaction.transactingWallet) {
    /*#__PURE__*/return o(y, {
      error: Error("Invalid transaction request"),
      onClick: () => {
        D?.sendTransaction?.onFailure(x);
        B({
          shouldCallAuthOnSuccess: false
        });
      }
    });
  }
  let {
    entropyId: so,
    entropyIdVerifier: ao,
    transactingWallet: co
  } = D.sendTransaction;
  let mo = t(() => q.find(o => Number(o.id) === Number(U.chainId)), [U.chainId]);
  let po = mo?.nativeCurrency.symbol ?? "ETH";
  let lo = t(() => E(U.data, !!_.embeddedWallets.extendedCalldataDecoding), [U.data]);
  let {
    action: uo,
    isErc20Ish: ho,
    isNFTIsh: jo
  } = lo;
  let {
    toAddress: fo,
    tokenAddress: To
  } = t(() => ({
    toAddress: lo.isErc20Ish ? lo.transferTo : U.to ?? undefined,
    tokenAddress: lo.isErc20Ish ? U.to : undefined
  }), [lo]);
  e(() => {
    if (U.to && mo && ho) {
      f({
        address: U.to,
        chain: mo,
        rpcConfig: _.rpcConfig,
        privyAppId: _.id
      }).then(X).catch(console.error);
    }
  }, [U.to, mo]);
  let {
    tokenPrice: go,
    isTokenPriceLoading: bo
  } = h(U.chainId);
  let {
    balance: Io
  } = j({
    rpcConfig: _.rpcConfig,
    appId: _.id,
    address: co.address,
    chain: mo
  });
  let yo = t(() => I(Number(U.chainId), q, L, {
    appId: _.id
  }), [U.chainId, L]);
  let Co = S(U, co, yo);
  e(() => {
    z(A(D, H));
  }, [H]);
  e(() => {
    if (D.sendTransaction?.getIsSponsored) {
      D.sendTransaction.getIsSponsored().then(J).catch(console.error);
    } else {
      J(false);
    }
  }, [D.sendTransaction.getIsSponsored]);
  let vo = () => {
    if (!K) {
      if (Z) {
        D?.sendTransaction?.onSuccess({
          hash: Z
        });
      } else if (eo || Co?.errors[0]) {
        D?.sendTransaction?.onFailure(eo ?? Co?.errors[0] ?? x);
      } else {
        D?.sendTransaction?.onFailure(new a(new c("The user rejected the request", r.E4001_USER_REJECTED_REQUEST.eipCode)));
      }
      return B({
        shouldCallAuthOnSuccess: false
      });
    }
  };
  F.current = vo;
  let wo = !!D.funding && !!(D.funding.supportedOptions.length > 0);
  let ko = _.embeddedWallets.priceDisplay.primary === "fiat-currency";
  let Eo = BigInt(Co?.tx.value ?? 0) + BigInt(Co?.totalGasEstimate ?? 0);
  let So = g(Eo, po);
  let xo = ko && go ? b(Eo, go) : undefined;
  let Ao = g(BigInt(Co?.totalGasEstimate ?? 0n), po);
  let Ro = ko && go ? b(BigInt(Co?.totalGasEstimate ?? 0n), go) : undefined;
  let Do = g(Io ?? 0n, po, undefined, true);
  let Fo = ko && go ? b(Io ?? 0n, go) : undefined;
  let Oo = D.sendTransaction?.uiOptions?.transactionInfo?.title;
  Oo ||= uo === "approve" ? ho ? "Confirm address" : "Confirm action" : `Approve ${uo}`;
  let Po = D.sendTransaction?.uiOptions?.description || `${_.name} wants your permission to approve the following transaction.`;
  let Lo = D.sendTransaction?.uiOptions?.transactionInfo?.contractInfo?.imgUrl ? /*#__PURE__*/o("img", {
    src: D.sendTransaction.uiOptions.transactionInfo.contractInfo.imgUrl,
    alt: D.sendTransaction.uiOptions.transactionInfo.contractInfo.imgAltText
  }) : null;
  let qo = !!Co && !Co.errors[0] && !Co.hasFunds && $ === false;
  let Bo = qo && wo;
  let No = Bo ? "Add funds" : D.sendTransaction?.uiOptions?.buttonText || (H < G ? "Continue" : "Approve");
  if (no) {
    /*#__PURE__*/return o(k, {
      txn: Co?.tx ?? U,
      onClose: vo,
      receipt: no,
      transactionInfo: D.sendTransaction?.uiOptions.transactionInfo,
      tokenPrice: go,
      tokenSymbol: po,
      receiptHeader: D.sendTransaction?.uiOptions.successHeader,
      receiptDescription: D.sendTransaction?.uiOptions.successDescription
    });
  }
  if (eo) {
    /*#__PURE__*/return o(w, {
      transactionError: eo,
      transactionHash: Z ?? undefined,
      network: "ethereum",
      chainId: Co?.tx.chainId ?? U.chainId,
      onClose: vo,
      onRetry: ({
        resetNonce: o
      }) => {
        io(null);
        let n = {
          ...(Co?.tx ?? U)
        };
        if (o) {
          n.nonce = undefined;
        }
        z(n);
      }
    });
  }
  let Mo = G !== 0 && typeof H == "number" && H !== 0 ? () => {
    W(H - 1);
  } : undefined;
  if ("amount" in lo && lo.amount) {
    if (lo.isNFTIsh) {
      R = lo.amount.toString();
    } else if (Q) {
      R = T({
        amount: lo.amount,
        decimals: Q.decimals
      });
    }
  }
  return /*#__PURE__*/o(v, {
    transactionIndex: H,
    onBack: Mo,
    maxIndex: G,
    disabled: qo && !wo,
    isSubmitting: K,
    submitError: eo,
    isPreparing: !Co,
    isTokenPriceLoading: bo,
    isTokenContractInfoLoading: !jo && !Q,
    prepareError: Co?.errors[0],
    symbol: Q?.symbol,
    chain: mo,
    img: Lo,
    title: Oo,
    subtitle: Po,
    total: U.value ? xo ?? So : undefined,
    txValue: U.value,
    fee: Ro ?? Ao,
    isSponsored: $,
    from: co?.address ?? "",
    to: fo,
    tokenAddress: To ?? undefined,
    network: _.chains.find(o => o.id === U.chainId)?.name ?? "",
    transactionDetails: {
      ...lo,
      formattedAmount: R
    },
    cta: No,
    missingFunds: qo,
    action: uo,
    balance: Fo ?? Do,
    onClose: vo,
    onClick: Bo ? async () => {
      if (!co) {
        return;
      }
      if (!wo) {
        throw Error("Funding wallet is not enabled");
      }
      let o = C.FUNDING_METHOD_SELECTION_SCREEN;
      O({
        ...D,
        funding: {
          ...D.funding,
          methodScreen: o,
          chainType: "ethereum",
          amount: i(BigInt(Co?.tx.value ?? 0) + BigInt(Co?.totalGasEstimate?.toString() ?? 0)),
          chain: mo
        }
      });
      P(o);
    } : async () => {
      if (H < G) {
        W(H + 1);
      } else {
        Y(true);
        try {
          let o = await M();
          if (K || !o || !co || !N || !V) {
            return;
          }
          let n = D?.sendTransaction?.onConfirm ? await D.sendTransaction.onConfirm() : await p({
            accessToken: o,
            transactingWallet: co,
            entropyId: so,
            entropyIdVerifier: ao,
            walletProxy: N,
            transactionRequest: Co?.tx ?? U,
            publicClient: yo,
            requesterAppId: D.sendTransaction?.requesterAppId
          });
          oo(n);
          if (D.sendTransaction?.signOnly) {
            await new Promise(o => setTimeout(o, m));
            D?.sendTransaction?.onSuccess({
              hash: n
            });
            return B({
              shouldCallAuthOnSuccess: false
            });
          }
          let t = await yo.waitForTransactionReceipt({
            hash: n
          });
          if (t.status === "reverted") {
            throw Error("Transaction failed");
          }
          to(t);
        } catch (o) {
          console.warn({
            transaction: Co?.tx ?? U,
            error: o
          });
          io(o);
        } finally {
          Y(false);
        }
      }
    }
  });
};
export { R as SendTransactionScreen };
