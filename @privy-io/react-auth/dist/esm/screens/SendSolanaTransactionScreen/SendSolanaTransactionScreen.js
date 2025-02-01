import { jsx as o } from "react/jsx-runtime";
import { useState as n, useMemo as t, useEffect as e } from "react";
import { formatUnits as r } from "viem";
import { SolanaClient as s } from "@privy-io/js-sdk-core";
import { getImportedPrivySolanaWallet as i, getPrivyPrimaryWallet as a, getSolanaSigningAndRootWallet as c, getEntropyDetailsFromAccount as m } from "../../client/user.mjs";
import { useAppConfig as l } from "../../configuration/context.mjs";
import { sendSolanaTransaction as p } from "../../embedded-wallets/solana/transaction.mjs";
import { usePrivyInternal as d } from "../../hooks/internal-context.mjs";
import { usePrivyModal as u } from "../../hooks/modal-context.mjs";
import { usePrivyContext as f } from "../../hooks/privy-context.mjs";
import { useGetSolPrice as h } from "../../hooks/useGetSolPrice.mjs";
import { getSolanaNetworkFromRpcEndpoint as j } from "../../lib/solana/index.mjs";
import { getNativeCurrencyFromLamports as g, parseSolanaTransaction as y, isVersionedTransaction as k, getDollarsFromLamport as b, createSolanaTransactionReceipt as S } from "../../lib/solana/transaction.mjs";
import { ErrorScreenView as w } from "../ErrorScreen.mjs";
import { SendSolanaTransactionScreenView as T } from "../SendTransactionScreen/SendTransactionScreenView.mjs";
import { TransactionErrorView as v } from "../SendTransactionScreen/TransactionErrorView.mjs";
import { ModalScreen as A } from "../index.mjs";
import { SolanaTransactionReceiptView as I } from "./SolanaTransactionReceiptView.mjs";
import "viem/utils";
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
import "../../theme.mjs";
import "tinycolor2";
import "../../lib/cybr53.mjs";
import "../../utils/buffer/readBigInt64LE.mjs";
import "../../hooks/index.mjs";
import "../../components/PrefetchedImage.mjs";
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
import "../../errors.mjs";
import "ofetch";
import "../../hooks/captcha-context.mjs";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../utils/eth/getPublicClient.mjs";
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
import "../SendTransactionScreen/TransactionDetail.mjs";
import "../SendTransactionScreen/useTransactionDetails.mjs";
import "@heroicons/react/24/outline/ClipboardDocumentCheckIcon";
import "@heroicons/react/24/outline/ClipboardDocumentIcon";
import "@heroicons/react/24/outline/ExclamationCircleIcon";
import "@heroicons/react/24/outline/CheckCircleIcon";
import "../../components/CircleBackground.mjs";
import "../../components/Layouts.mjs";
import "../../components/ScreenHeader.mjs";
import "../../components/embedded-wallets/SolanaTransactionDetails.mjs";
import "@heroicons/react/24/outline/ChevronDownIcon";
import "../../components/embedded-wallets/PriceDisplay.mjs";
import "../../lib/ethers.mjs";
import "../../components/embedded-wallets/WalletLink.mjs";
const C = () => {
  let {
    data: C,
    onUserCloseViaDialogOrKeybindRef: x,
    setModalData: O,
    navigate: E
  } = u();
  let {
    client: L,
    closePrivyModal: D,
    walletProxy: P
  } = d();
  let B = l();
  let {
    user: M,
    getAccessToken: F
  } = f();
  let [W, R] = n(C?.sendSolanaTransaction?.transactionRequest);
  let [U, V] = n();
  let [H, N] = n();
  let [$, q] = n(0);
  let [z, _] = n({
    value: 0n,
    isLoading: false
  });
  let [G, X] = n(false);
  let [K, Q] = n();
  let [J, Y] = n();
  let Z = C?.sendSolanaTransaction?.connection;
  let oo = C?.sendSolanaTransaction?.transactingWallet;
  let no = U?.instructions.length ?? 1;
  let to = oo?.imported ? i(M) : a(M);
  let eo = j(Z?.rpcEndpoint || "");
  let ro = B.embeddedWallets.priceDisplay.primary === "fiat-currency";
  let {
    solPrice: so,
    isSolPriceLoading: io
  } = h({
    enabled: ro
  });
  let ao = t(() => {
    let o;
    let n;
    if (!U) {
      return;
    }
    let t = U.spender;
    if ($ === 0 && oo?.address === t) {
      o = g(U.fee);
    }
    let e = g(z.value, 3, true);
    let s = U.instructions[$];
    if (!s) {
      return {
        fee: o,
        spender: t,
        balance: e
      };
    }
    if (s.type === "unknown") {
      return {
        fee: o,
        spender: t,
        program: s.program,
        balance: e
      };
    }
    if (s.type === "ata-creation") {
      return {
        fee: o,
        spender: t,
        balance: e,
        tokenAccountOwner: s.owner,
        tokenAccount: s.ata,
        tokenAddress: s.mint
      };
    }
    let i = s.fromAccount;
    let a = s.type === "sol-transfer" ? s.toAccount : s.toAccount || s.toAta;
    let c = s.type === "spl-transfer" ? s.token.address : undefined;
    if (o != null && s.token.symbol === "SOL") {
      n = g(s.value + U.fee);
    }
    return {
      fee: o,
      spender: t,
      from: i,
      to: a,
      tokenAddress: c,
      amount: `${r(s.value, s.token.decimals)} ${s.token.symbol}`.trim(),
      total: n,
      balance: e
    };
  }, [U, $, oo?.address, z]);
  let co = t(() => {
    let o;
    let n;
    if (!U || !ro || !so || io) {
      return;
    }
    function t(...o) {
      return b(o.reduce((o, n) => o + n, 0n), so ?? 0);
    }
    if ($ === 0 && oo?.address === U.spender) {
      o = t(U.fee);
    }
    let e = t(z.value);
    let s = U.instructions[$];
    if (s && s.type !== "unknown" && s.type !== "ata-creation") {
      if (o != null && s.token.symbol === "SOL") {
        n = t(s.value, U.fee);
      }
      return {
        fee: o,
        amount: s.token.symbol === "SOL" ? t(s.value) : `${r(s.value, s.token.decimals)} ${s.token.symbol}`.trim(),
        total: n,
        balance: e
      };
    } else {
      return {
        fee: o,
        balance: e
      };
    }
  }, [U, ro, so, io, oo?.address, $, z]);
  let mo = t(() => {
    if (!U || z.isLoading || $ > 0) {
      return false;
    }
    let o = U.instructions[$];
    if (!o) {
      return false;
    }
    let n = 0n;
    if (oo?.address === U.spender) {
      n += U.fee;
    }
    if ("value" in o && oo?.address === o.fromAccount && o.token.symbol === "SOL") {
      n += o.value;
    }
    return z.value < n;
  }, [U, z, $]);
  e(() => {
    (async function () {
      if (W && Z && L) {
        try {
          N(undefined);
          let o = await y({
            tx: W,
            connection: Z,
            client: L
          });
          V(o);
          q(0);
        } catch (o) {
          console.error("Failed to prepare transaction", o);
          N(o);
        }
      }
    })();
  }, [W, Z, L]);
  e(() => {
    (async function () {
      if (!oo || !Z) {
        return;
      }
      _({
        value: z.value,
        isLoading: true
      });
      let o = new s({
        name: "mainnet-beta",
        rpcUrl: Z.rpcEndpoint
      });
      _({
        value: (await o.getBalance(oo.address).catch(() => 0n)) ?? 0n,
        isLoading: false
      });
    })().catch(console.error);
  }, [U, Z]);
  if (!W || !C?.sendSolanaTransaction || !oo || !Z) {
    let n = Error("Invalid transaction request"); /*#__PURE__*/
    return o(w, {
      error: n,
      onClick: () => {
        C?.sendSolanaTransaction?.onFailure(n);
        D({
          shouldCallAuthOnSuccess: false
        });
      }
    });
  }
  let lo = () => {
    if (!G) {
      if (K) {
        C?.sendSolanaTransaction?.onSuccess(K);
      } else {
        C?.sendSolanaTransaction?.onFailure(J ?? H ?? Error("User exited the modal before submitting the transaction"));
        q(0);
      }
      return D({
        shouldCallAuthOnSuccess: false
      });
    }
  };
  x.current = lo;
  let po = C.sendTransaction?.uiOptions?.transactionInfo?.contractInfo?.imgUrl ? /*#__PURE__*/o("img", {
    src: C.sendTransaction.uiOptions.transactionInfo.contractInfo.imgUrl,
    alt: C.sendTransaction.uiOptions.transactionInfo.contractInfo.imgAltText
  }) : null;
  let uo = !!C.funding && !!(C.funding.supportedOptions.length > 0);
  let fo = mo && uo;
  if (K) {
    return /*#__PURE__*/o(I, {
      instructions: U?.instructions.reduce((o, n) => {
        if (n.type === "ata-creation") {
          o.push({
            tokenAccountOwner: n.owner,
            tokenAccount: n.ata
          });
        }
        if (n.type === "spl-transfer") {
          o.push({
            from: n.fromAccount,
            to: n.toAccount || n.toAta,
            amount: n.value,
            token: n.token
          });
        }
        if (n.type === "sol-transfer") {
          o.push({
            from: n.fromAccount,
            to: n.toAccount,
            amount: n.value,
            token: n.token
          });
        }
        return o;
      }, []) ?? [],
      fees: $ === 0 ? K.fees : 0n,
      onClose: lo,
      transactionInfo: C.sendTransaction?.uiOptions.transactionInfo,
      solPrice: so,
      receiptHeader: C.sendTransaction?.uiOptions.successHeader,
      receiptDescription: C.sendTransaction?.uiOptions.successDescription,
      rpcEndpoint: Z.rpcEndpoint
    });
  } else if (J) {
    return /*#__PURE__*/o(v, {
      transactionError: J,
      connection: Z,
      onClose: lo,
      network: "solana",
      onRetry: async () => {
        Y(undefined);
        let {
          blockhash: o
        } = await Z.getLatestBlockhash();
        if (k(W)) {
          W.message.recentBlockhash = o;
        } else {
          W.recentBlockhash = o;
        }
        R(W);
      }
    });
  } else {
    return /*#__PURE__*/o(T, {
      img: po,
      title: C.sendTransaction?.uiOptions?.transactionInfo?.title || "Confirm transaction",
      subtitle: C.sendTransaction?.uiOptions?.description || `${B.name} wants your permission to approve the following transaction.`,
      cta: fo ? "Add funds" : C.sendTransaction?.uiOptions?.buttonText || "Approve",
      transactionIndex: $,
      maxIndex: no - 1,
      network: eo == "mainnet-beta" ? "Solana" : eo,
      blockExplorerUrl: "https://explorer.solana.com",
      total: ro ? co?.total : ao?.total,
      amount: ro ? co?.amount : ao?.amount,
      fee: ro ? co?.fee : ao?.fee,
      balance: ro ? co?.balance : ao?.balance,
      from: ao?.from,
      to: ao?.to,
      tokenAccount: ao?.tokenAccount,
      tokenAccountOwner: ao?.tokenAccountOwner,
      tokenAddress: ao?.tokenAddress,
      transactingWalletAddress: oo.address,
      programAddress: ao?.program,
      disabled: mo && !uo,
      isSubmitting: G,
      isPreparing: !U || z.isLoading,
      isTokenPriceLoading: ro && io,
      isMissingFunds: mo,
      submitError: J ?? undefined,
      parseError: H,
      onClick: fo ? async () => {
        if (!oo) {
          return;
        }
        if (!uo) {
          throw Error("Funding wallet is not enabled");
        }
        let o = A.FUNDING_METHOD_SELECTION_SCREEN;
        O({
          ...C,
          funding: {
            ...C.funding,
            methodScreen: o
          }
        });
        E(o);
      } : async () => {
        if ($ < (U?.instructions.length ?? 1) - 1) {
          q($ + 1);
        } else {
          try {
            X(true);
            let o = await F();
            if (G || !o || !oo || !P || !M || !to) {
              return;
            }
            let {
              rootWallet: n
            } = c(M, oo.address);
            if (!n) {
              throw Error("No root wallet for transacting wallet found");
            }
            let {
              entropyId: t,
              entropyIdVerifier: e
            } = m(n);
            let {
              signature: r,
              receipt: s
            } = await p({
              tx: W,
              accessToken: o,
              connection: Z,
              walletProxy: P,
              entropyId: t,
              entropyIdVerifier: e,
              transactingWalletAddress: oo.address,
              transactingWalletIndex: oo.walletIndex ?? 0,
              transactionOptions: C.sendSolanaTransaction?.transactionOptions
            });
            Q(S(r, s));
          } catch (o) {
            console.warn({
              transaction: W,
              error: o
            });
            Y(o);
          } finally {
            X(false);
          }
        }
      },
      onClose: lo,
      onBack: $ > 0 && no > 1 ? () => q($ - 1) : undefined
    });
  }
};
export { C as SendSolanaTransactionScreen };
