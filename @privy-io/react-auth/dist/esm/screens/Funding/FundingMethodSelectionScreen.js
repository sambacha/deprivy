import { jsxs as o, Fragment as n, jsx as i } from "react/jsx-runtime";
import e from "@heroicons/react/24/outline/CreditCardIcon";
import r from "@heroicons/react/24/outline/QrCodeIcon";
import t from "@heroicons/react/24/solid/ArrowsRightLeftIcon";
import { useMemo as s, useEffect as m } from "react";
import { getAddress as c } from "viem/utils";
import { BlobbyFooter as a } from "../../components/ModalFooter.mjs";
import l from "../../components/embedded-wallets/FundWalletMethodHeader.mjs";
import { ErrorBanner as p } from "../../components/ui/banners/ErrorBanner.mjs";
import { InfoBanner as d } from "../../components/ui/banners/InfoBanner.mjs";
import { ApplePay as h } from "../../components/ui/icons/ApplePay.mjs";
import { GooglePay as j } from "../../components/ui/icons/GooglePay.mjs";
import { useAppConfig as u } from "../../configuration/context.mjs";
import { useAsyncValue as f } from "../../hook-utils/useAsyncValue.mjs";
import { usePrivyInternal as g } from "../../hooks/internal-context.mjs";
import { usePrivyModal as b } from "../../hooks/modal-context.mjs";
import { useWallets as y } from "../../hooks/useWallets.mjs";
import { WalletCards as C } from "../../icons/WalletCards.mjs";
import { getErc20TokenInfo as v } from "../../lib/erc20/actions/getErc20TokenInfo.mjs";
import { toDisplayName as w } from "../../lib/external-wallets/displayHelpers.mjs";
import { prepareFundingMethods as F } from "../../lib/funding/prepareFundingMethods.mjs";
import { isApplePayPotentiallyAvailable as k, isGooglePayPotentiallyAvailable as I } from "../../payment-request/isPaymentRequestAvailable.mjs";
import { LoginMethodButton as W } from "../LandingScreen/styles.mjs";
import { ModalScreen as A } from "../index.mjs";
import { FundingMethodContainer as x, IconContainer as M, InfoButtonText as S, InfoButtonLink as T } from "./styles.mjs";
import { useSolanaWallets as E } from "../../hooks/solana/useSolanaWallets.mjs";
import "styled-components";
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
import "../../components/ModalHeader.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../../hooks/index.mjs";
import "@heroicons/react/24/outline/ExclamationTriangleIcon";
import "@heroicons/react/24/outline/InformationCircleIcon";
import "../../components/PrefetchedImage.mjs";
import "viem";
import "../../utils/eth/getPublicClient.mjs";
import "../../errors.mjs";
import "ofetch";
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
import "../../lib/funding/coinbase/isSupportedChainIdForCoinbaseOnramp.mjs";
import "../../lib/funding/coinbase/triggerCoinbaseFlow.mjs";
import "@privy-io/js-sdk-core";
import "../../lib/popup/triggerPopup.mjs";
import "../../lib/funding/coinbase/toCoinbaseBlockchainFromChainId.mjs";
import "../../lib/funding/moonpay/index.mjs";
import "../../lib/funding/analytics.mjs";
import "../../lib/funding/moonpay/triggerMoonpayFlow.mjs";
import "../../components/Button.mjs";
import "../../components/Loader.mjs";
import "../LinkPasskeyScreen.mjs";
import "@heroicons/react/24/outline/CheckCircleIcon";
import "@heroicons/react/24/outline/ClockIcon";
import "@heroicons/react/24/outline/TrashIcon";
import "@heroicons/react/24/solid/CheckBadgeIcon";
import "@heroicons/react/24/solid/LockClosedIcon";
import "../../hooks/privy-context.mjs";
import "../../svg/face-id.mjs";
import "../../svg/fingerprint.mjs";
import "../MfaScreens/StyledComponents.mjs";
const L = () => {
  let {
    wallets: L
  } = y();
  let {
    wallets: N
  } = E();
  let {
    navigate: R,
    data: P,
    setModalData: _
  } = b();
  let {
    client: B
  } = g();
  let D = u();
  let H = P?.funding;
  let z = f(k);
  let U = f(I);
  let G = H.chainType === "solana";
  let q = G ? undefined : H;
  let Q = s(() => F(D, B, H, _, R, P), [D, B, H, P, _, R]);
  m(() => {
    if (H?.defaultFundingMethod && H.usingDefaultFundingMethod) {
      _({
        funding: {
          ...H,
          usingDefaultFundingMethod: false
        }
      });
      switch (H?.defaultFundingMethod) {
        case "card":
          if (Q.onFundWithCard[0]) {
            Q.onFundWithCard[0]();
          }
          break;
        case "exchange":
          if (Q.onFundWithExchange) {
            Q.onFundWithExchange();
          }
          break;
        case "wallet":
          if (Q.onFundWithWallet) {
            Q.onFundWithWallet();
          }
          break;
        case "manual":
          R(A.FUNDING_MANUAL_TRANSFER_SCREEN);
      }
    }
  }, []);
  m(() => {
    if (q?.erc20Address && !q.erc20ContractInfo) {
      v({
        address: q.erc20Address,
        chain: q.chain,
        rpcConfig: D.rpcConfig,
        privyAppId: D.id
      }).then(o => {
        _({
          ...P,
          funding: {
            ...q,
            erc20ContractInfo: o ? {
              symbol: o.symbol,
              decimals: o.decimals
            } : undefined
          }
        });
      }).catch(console.error);
    }
  }, [q?.erc20Address, q?.chain]);
  let O = G ? N.find(({
    address: o
  }) => o === H.address) : L.find(({
    address: o
  }) => c(o) === c(H.address));
  let V = O && O.walletClientType !== "privy" ? w(O.walletClientType, O.connectorType, O.walletClientType) : D.name;
  let X = !!q?.erc20Address && !q?.erc20ContractInfo;
  /*#__PURE__*/
  return o(n, {
    children: [/*#__PURE__*/i(l, {}), /*#__PURE__*/o("h3", {
      children: ["Add funds to your", " ", V?.toLowerCase().endsWith("wallet") ? V : V + " wallet"]
    }), /*#__PURE__*/o(x, {
      children: [H.errorMessage && /*#__PURE__*/i(p, {
        theme: D.appearance.palette.colorScheme,
        children: H.errorMessage
      }), Q.onFundWithCard?.[0] && /*#__PURE__*/o(W, {
        disabled: X,
        onClick: Q.onFundWithCard[0],
        children: [/*#__PURE__*/i(M, {
          children: /*#__PURE__*/i(e, {
            style: {
              width: 24
            }
          })
        }), "Pay with card", z ? /*#__PURE__*/i(h, {
          style: {
            marginLeft: "auto",
            maxWidth: "100%",
            width: "auto",
            height: "0.875rem"
          }
        }) : U ? /*#__PURE__*/i(j, {
          style: {
            marginLeft: "auto",
            maxWidth: "100%",
            width: "auto",
            height: "0.875rem"
          }
        }) : null]
      }), Q.onFundWithExchange && /*#__PURE__*/o(W, {
        disabled: X,
        onClick: Q.onFundWithExchange,
        children: [/*#__PURE__*/i(M, {
          children: /*#__PURE__*/i(t, {
            style: {
              width: 24
            }
          })
        }), "Transfer from an exchange"]
      }), Q.onFundWithWallet && /*#__PURE__*/o(W, {
        disabled: X,
        onClick: Q.onFundWithWallet,
        children: [/*#__PURE__*/i(M, {
          children: /*#__PURE__*/i(C, {
            style: {
              width: 24
            }
          })
        }), "Transfer from wallet"]
      }), /*#__PURE__*/o(W, {
        disabled: X,
        onClick: () => R(A.FUNDING_MANUAL_TRANSFER_SCREEN),
        children: [/*#__PURE__*/i(M, {
          children: /*#__PURE__*/i(r, {
            style: {
              width: 24
            }
          })
        }), "Receive funds"]
      }), H?.showAlternateFundingMethod && Q.onFundWithCard?.[1] && /*#__PURE__*/i(d, {
        theme: D.appearance.palette.colorScheme,
        children: /*#__PURE__*/o(S, {
          children: ["Having trouble or facing location restrictions?", " ", /*#__PURE__*/i(T, {
            onClick: Q.onFundWithCard[1],
            children: "Try a different provider."
          })]
        })
      })]
    }), /*#__PURE__*/i(a, {})]
  });
};
export { L as FundingMethodSelectionScreen };
