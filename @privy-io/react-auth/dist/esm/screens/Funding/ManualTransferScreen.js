import { jsx as o, Fragment as e, jsxs as n } from "react/jsx-runtime";
import { useState as t, useEffect as r, useMemo as s } from "react";
import { formatTokenAmount as i, formatWeiAmount as a } from "@privy-io/js-sdk-core";
import { PrimaryButton as m } from "../../components/Button.mjs";
import { FlexContainer as c } from "../../components/Layouts.mjs";
import { BlobbyFooter as l } from "../../components/ModalFooter.mjs";
import { QrCode as p } from "../../components/QrCode.mjs";
import d from "../../components/embedded-wallets/FundWalletMethodHeader.mjs";
import { InfoBanner as u } from "../../components/ui/banners/InfoBanner.mjs";
import { Subtitle as h } from "../../components/ui/typography/Subtitle.mjs";
import { Title as j } from "../../components/ui/typography/Title.mjs";
import { WalletInfoCard as f } from "../../components/ui/wallet/WalletInfoCard.mjs";
import { useAppConfig as g } from "../../configuration/context.mjs";
import { usePrivyInternal as y } from "../../hooks/internal-context.mjs";
import { usePrivyModal as v } from "../../hooks/modal-context.mjs";
import { useWalletBalance as b } from "../../hooks/useWalletBalance.mjs";
import { useWallets as C } from "../../hooks/useWallets.mjs";
import { ON_RAMP_COMPLETE_ANALYTICS_EVENT as I } from "../../lib/funding/analytics.mjs";
import { getNativeCurrencyFromLamports as S } from "../../lib/solana/transaction.mjs";
import { getErc20Balance as k } from "../../lib/wallets/actions/getErc20Balance.mjs";
import { usePlugins as w } from "../../plugins/context/PrivyPluginContext.mjs";
import { SOLANA_FUNDING_PLUGIN_ID as T } from "../../plugins/solana-funding/id.mjs";
import { Blobby as E } from "../../svg/blobby.mjs";
import { formatWalletAddress as x } from "../../utils/index.mjs";
import { ModalScreen as A } from "../index.mjs";
import { useSolanaWallets as M } from "../../hooks/solana/useSolanaWallets.mjs";
import "styled-components";
import "../../components/Loader.mjs";
import "../../svg/protected-by-privy.mjs";
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
import "qrcode";
import "../../svg/black-rounded-square.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
import "../../components/ModalHeader.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../../hooks/index.mjs";
import "@heroicons/react/24/outline/InformationCircleIcon";
import "../../components/ui/chips/Chip.mjs";
import "../../components/ui/animation/LoadingSkeleton.mjs";
import "../../components/ui/layout/Column.mjs";
import "../../components/ui/typography/ErrorMessage.mjs";
import "../../components/ui/typography/LabelXs.mjs";
import "../../components/ui/wallet/Address.mjs";
import "@heroicons/react/24/outline/CheckIcon";
import "@heroicons/react/24/outline/Square2StackIcon";
import "../../components/ui/wallet/shared.mjs";
import "../../components/PrefetchedImage.mjs";
import "../../utils/buffer/readBigInt64LE.mjs";
const L = () => {
  let {
    wallets: E
  } = C();
  let {
    wallets: L
  } = M();
  let {
    data: R,
    setModalData: D,
    navigate: P,
    lastScreen: F
  } = v();
  let {
    rpcConfig: O,
    appId: W,
    createAnalyticsEvent: q,
    closePrivyModal: z
  } = y();
  let H = g();
  let [_, U] = t(undefined);
  let [Q, X] = t(false);
  let $ = w();
  let G = R?.funding;
  let {
    reloadBalance: Y
  } = b({
    rpcConfig: O,
    appId: W,
    address: G.chainType === "ethereum" ? G.address : undefined,
    chain: G.chainType === "ethereum" ? G.chain : undefined
  });
  let J = G.chainType === "solana";
  let K = J ? "SOL" : G.erc20Address ? G.erc20ContractInfo?.symbol : G.chain.nativeCurrency.symbol;
  let V = J ? L.find(({
    address: o
  }) => o === G.address) : E.find(({
    address: o
  }) => x(o) === x(G.address));
  if (!G) {
    D({
      errorModalData: {
        error: Error("Couldn't find funding config"),
        previousScreen: F || A.FUNDING_METHOD_SELECTION_SCREEN
      },
      funding: R?.funding,
      sendTransaction: R?.sendTransaction
    });
    P(A.ERROR_SCREEN);
    return /*#__PURE__*/o(e, {});
  }
  r(() => {
    let o = J ? async function () {
      if (G.chainType !== "solana") {
        return;
      }
      let o = $(T);
      if (o) {
        o.getBalance({
          address: G.address,
          cluster: G.cluster
        }).then(o => {
          let e = BigInt(o);
          if (_ && e > _) {
            X(true);
            q({
              eventName: I,
              payload: {
                provider: "manual",
                status: "success",
                chainType: "solana",
                address: V?.address,
                value: (e - _).toString()
              }
            });
          }
          U(e);
        });
      } else {
        console.warn("Unable to load solana plugin, skipping balance");
      }
    } : async function () {
      if (G.chainType === "ethereum") {
        (async () => {
          if (!G.erc20Address) {
            return (await Y()) ?? BigInt(0);
          }
          {
            let {
              balance: o
            } = await k({
              chain: G.chain,
              address: G.address,
              erc20Address: G.erc20Address,
              rpcConfig: O,
              appId: W
            });
            return o;
          }
        })().then(o => {
          if (_ && o > _) {
            X(true);
            q({
              eventName: I,
              payload: {
                provider: "manual",
                status: "success",
                chainType: "ethereum",
                address: V?.address,
                value: (o - _).toString()
              }
            });
          }
          U(o);
        }).catch(() => U(undefined));
      }
    };
    let e = setInterval(o, 2000);
    o();
    return () => clearInterval(e);
  }, [_]);
  let Z = s(() => _ !== undefined && _ >= parseFloat(G.amount), [_, G.amount]);
  let oo = s(() => _ == null ? "" : G.isUSDC ? i({
    amount: _,
    decimals: 6
  }) : J ? S(_, 3, true, true) : G.erc20ContractInfo?.decimals != null ? i({
    amount: _,
    decimals: G.erc20ContractInfo.decimals
  }) : a({
    wei: _
  }), [_, J, G]);
  let eo = G.chainType === "ethereum" ? G.chain.name : N[G.cluster.name];
  /*#__PURE__*/
  return n(e, {
    children: [/*#__PURE__*/o(d, {}), /*#__PURE__*/n(j, {
      children: ["Receive ", G.amount, " ", K]
    }), /*#__PURE__*/n(h, {
      children: ["Scan this code or copy your wallet address to receive funds on ", eo, "."]
    }), /*#__PURE__*/n(c, {
      style: {
        gap: "1rem",
        margin: "1rem 0"
      },
      children: [/*#__PURE__*/o(p, {
        url: G.address,
        size: 200,
        squareLogoElement: B
      }), /*#__PURE__*/n(u, {
        theme: H.appearance.palette.colorScheme,
        children: ["Make sure to send funds on ", eo, "."]
      }), /*#__PURE__*/o(f, {
        title: "Your wallet",
        errMsg: undefined,
        showIcon: true,
        isLoading: !G || _ === undefined,
        isPulsing: !Z,
        balance: `${oo} ${K}`,
        address: G.address,
        statusColor: Z ? "green" : "gray"
      }), Q && /*#__PURE__*/o(m, {
        onClick: () => z({
          shouldCallAuthOnSuccess: false,
          isSuccess: true
        }),
        children: "Continue"
      })]
    }), /*#__PURE__*/o(l, {})]
  });
};
let B = ({
  ...e
}) => /*#__PURE__*/o(E, {
  color: "black",
  ...e
});
let N = {
  devnet: "Devnet",
  "mainnet-beta": "Solana",
  testnet: "Testnet"
};
export { L as ManualTransferScreen };
