import { jsxs as o, Fragment as t, jsx as n } from "react/jsx-runtime";
import { useRef as i } from "react";
import { PrimaryButtonWithoutGray as r } from "../../components/Button.mjs";
import { FlexContainer as e } from "../../components/Layouts.mjs";
import { BlobbyFooter as s } from "../../components/ModalFooter.mjs";
import m from "../../components/embedded-wallets/FundWalletMethodHeader.mjs";
import { NeutralSpinner as c } from "../../components/primitives/NeutralSpinner/index.mjs";
import { Title as a } from "../../components/ui/typography/Title.mjs";
import { usePrivyModal as p } from "../../hooks/modal-context.mjs";
import { useGetTokenPrice as l } from "../../hooks/useGetTokenPrice.mjs";
import { getDollarsFromStringFloat as h } from "../../lib/ethers.mjs";
import { FundingQuantityWrapper as j, FundingQuantity as d, FundingAmountInputLarge as u, FundingCurrency as f, FundingDollars as g } from "./styles.mjs";
import "styled-components";
import "../../components/Loader.mjs";
import "../../configuration/context.mjs";
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
import "../../svg/protected-by-privy.mjs";
import "../index.mjs";
import "../../components/ModalHeader.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../../hooks/internal-context.mjs";
import "../../hooks/index.mjs";
import "../../components/PrefetchedImage.mjs";
import "../../hooks/useGetSolPrice.mjs";
import "viem";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
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
const y = () => {
  let {
    data: y,
    setModalData: k
  } = p();
  let C = y?.funding;
  let b = C.chainType === "solana";
  let v = i(null);
  let {
    tokenPrice: x
  } = l(b ? "solana" : C.chain.id);
  let I = b ? undefined : C;
  let S = !!I?.erc20Address && !I?.erc20ContractInfo;
  let T = b ? "SOL" : C.erc20Address ? C.erc20ContractInfo?.symbol : C.chain.nativeCurrency.symbol || "ETH";
  let A = parseFloat(C.amount);
  let M = !isNaN(A) && A > 0;
  let L = x ? h(C.amount, x) : undefined;
  /*#__PURE__*/
  return o(t, {
    children: [/*#__PURE__*/n(m, {}), /*#__PURE__*/n(a, {
      children: "Confirm or edit amount"
    }), /*#__PURE__*/o(e, {
      style: {
        marginTop: "32px"
      },
      children: [/*#__PURE__*/n(j, {
        children: S ? /*#__PURE__*/n(c, {
          size: "50px"
        }) : /*#__PURE__*/o(t, {
          children: [/*#__PURE__*/o(d, {
            onClick: () => v.current?.focus(),
            children: [/*#__PURE__*/n(u, {
              ref: v,
              value: C.amount,
              onChange: o => {
                let t = o.target.value;
                if (/^[0-9.]*$/.test(t) && t.split(".").length - 1 <= 1) {
                  k({
                    ...y,
                    funding: {
                      ...C,
                      amount: t
                    }
                  });
                }
              }
            }), /*#__PURE__*/n(f, {
              children: T
            })]
          }), !I?.erc20Address && /*#__PURE__*/n(g, {
            children: L && M ? `${L} USD` : ""
          })]
        })
      }), /*#__PURE__*/n(r, {
        style: {
          marginTop: "1rem"
        },
        disabled: !M,
        onClick: C.onContinueWithExternalWallet,
        children: "Continue"
      })]
    }), /*#__PURE__*/n(s, {})]
  });
};
export { y as FundingAmountEditScreen };
