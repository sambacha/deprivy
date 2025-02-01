import { jsxs as o, jsx as n, Fragment as i } from "react/jsx-runtime";
import t from "@heroicons/react/24/outline/PlusCircleIcon";
import { CopyableText as s } from "../../../components/CopyableText.mjs";
import { useAppConfig as r } from "../../../configuration/context.mjs";
import { usePrivyInternal as e } from "../../../hooks/internal-context.mjs";
import { usePrivyContext as m } from "../../../hooks/privy-context.mjs";
import { useFundWallet as a } from "../../../hooks/solana/useFundWallet.mjs";
import { Copy as c } from "../../../icons/Copy.mjs";
import { KeyRound as p } from "../../../icons/KeyRound.mjs";
import { MenuContent as l, MenuItem as h, MenuItemButton as j } from "../Menu.mjs";
import { useMenu as d } from "../MenuProvider.mjs";
import "@heroicons/react/24/outline/CheckIcon";
import "react";
import "styled-components";
import "../../../svg/copy.mjs";
import "../../../config.mjs";
import "../../../configuration/defaultClientConfig.mjs";
import "../../../constants.mjs";
import "../../../configuration/login-methods.mjs";
import "../../../configuration/wallets.mjs";
import "../../../connectors/chains/index.mjs";
import "../../../connectors/chains/arbitrum.mjs";
import "../../../connectors/chains/arbitrumSepolia.mjs";
import "../../../connectors/chains/avalanche.mjs";
import "../../../connectors/chains/avalancheFuji.mjs";
import "../../../connectors/chains/base.mjs";
import "../../../connectors/chains/baseSepolia.mjs";
import "../../../connectors/chains/berachainArtio.mjs";
import "../../../connectors/chains/celo.mjs";
import "../../../connectors/chains/celoAlfajores.mjs";
import "../../../connectors/chains/filecoin.mjs";
import "../../../connectors/chains/filecoinCalibration.mjs";
import "../../../connectors/chains/garnetHolesky.mjs";
import "../../../connectors/chains/holesky.mjs";
import "../../../connectors/chains/linea.mjs";
import "../../../connectors/chains/lineaTestnet.mjs";
import "../../../connectors/chains/lukso.mjs";
import "../../../connectors/chains/mainnet.mjs";
import "../../../connectors/chains/optimism.mjs";
import "../../../connectors/chains/optimismSepolia.mjs";
import "../../../connectors/chains/polygon.mjs";
import "../../../connectors/chains/polygonAmoy.mjs";
import "../../../connectors/chains/redstone.mjs";
import "../../../connectors/chains/sepolia.mjs";
import "../../../connectors/chains/zora.mjs";
import "../../../connectors/chains/zoraSepolia.mjs";
import "../../../connectors/chains/zoraTestnet.mjs";
import "../../../connectors/chains/utils.mjs";
import "../../../lib/solana/index.mjs";
import "../../../theme.mjs";
import "tinycolor2";
import "../../../lib/cybr53.mjs";
import "../../../hooks/index.mjs";
import "../../../plugins/context/PrivyPluginContext.mjs";
import "../../../plugins/solana-funding/plugin.mjs";
import "@solana/web3.js";
import "@privy-io/js-sdk-core";
import "../../../plugins/solana-funding/id.mjs";
import "../../../screens/index.mjs";
import "../../../hooks/events-context.mjs";
import "../../../hooks/modal-context.mjs";
import "../../../components/PrefetchedImage.mjs";
import "../../../lib/funding/prepareFundingModalData.mjs";
import "../../../errors.mjs";
import "ofetch";
import "../../../lib/caip2.mjs";
import "../../../lib/funding/filterSupportedOptions.mjs";
import "../../../lib/funding/moonpay/index.mjs";
import "../../../lib/funding/analytics.mjs";
import "../../../lib/funding/usdc.mjs";
import "../../shared/X.mjs";
import "../Popover.mjs";
import "@floating-ui/react";
function u() {
  let {
    exportWallet: u,
    unlinkWallet: f
  } = m();
  let {
    exportSolanaWallet: y,
    fundWallet: g
  } = e();
  let {
    fundWallet: k
  } = a();
  let w = r();
  let {
    menuData: x
  } = d();
  let b = x.walletData;
  if (!b) {
    return null;
  }
  let C = w.fundingConfig?.defaultRecommendedCurrency.chain !== "solana" || b.type !== "smart_wallet" && b.chainType !== "ethereum";
  let v = b.type !== "smart_wallet" && b.walletClientType !== "privy";
  let T = b.type !== "smart_wallet" && b.walletClientType === "privy";
  /*#__PURE__*/
  return o(l, {
    children: [/*#__PURE__*/o(h, {
      children: [/*#__PURE__*/n(c, {}), /*#__PURE__*/n(s, {
        hideCopyIcon: true,
        value: b.address,
        children: "Copy wallet address"
      })]
    }), C && /*#__PURE__*/o(j, {
      onClick: () => (async () => {
        if (b.type === "smart_wallet" || b?.chainType === "ethereum") {
          await g(b.address);
        } else if (b?.chainType === "solana") {
          await k(b.address);
        }
      })(),
      children: [/*#__PURE__*/n(t, {
        width: 16,
        height: 16,
        strokeWidth: "2"
      }), "Add funds"]
    }), v && /*#__PURE__*/n(i, {
      children: /*#__PURE__*/o(j, {
        onClick: () => (async () => {
          await f(b.address);
        })(),
        children: [/*#__PURE__*/n(c, {}), "Unlink wallet"]
      })
    }), T && /*#__PURE__*/n(i, {
      children: /*#__PURE__*/o(j, {
        onClick: () => (async () => {
          if (b.type !== "smart_wallet") {
            if (b?.chainType === "ethereum") {
              await u({
                address: b.address
              });
            }
            if (b?.chainType === "solana") {
              await y({
                address: b.address
              });
            }
          }
        })(),
        children: [/*#__PURE__*/n(p, {}), "Export private key"]
      })
    })]
  });
}
export { u as WalletActionsScreen };
