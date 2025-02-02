import { useCallback as o } from "react";
import { useAppConfig as n } from "../../configuration/context.mjs";
import { useRegisterPlugin as i } from "../../plugins/context/PrivyPluginContext.mjs";
import s from "../../plugins/solana-funding/plugin.mjs";
import { ModalScreen as t } from "../../screens/index.mjs";
import { usePrivyEventSubscription as m } from "../events-context.mjs";
import { usePrivyInternal as r } from "../internal-context.mjs";
import { usePrivyModal as c } from "../modal-context.mjs";
import { prepareSolanaFundingModalData as e } from "../../lib/funding/prepareFundingModalData.mjs";
import "react/jsx-runtime";
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
import "@solana/web3.js";
import "@privy-io/js-sdk-core";
import "../../plugins/solana-funding/id.mjs";
import "../index.mjs";
import "../../components/PrefetchedImage.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../lib/caip2.mjs";
import "../../lib/funding/filterSupportedOptions.mjs";
import "../../lib/funding/moonpay/index.mjs";
import "../../lib/funding/analytics.mjs";
import "../../lib/funding/usdc.mjs";
const a = a => {
  m("fundSolanaWallet", a);
  let p = n();
  let {
    setModalData: l
  } = c();
  let {
    openModal: j
  } = r();
  i(s);
  return {
    fundWallet: o(async (o, n) => {
      let i = t.FUNDING_METHOD_SELECTION_SCREEN;
      l({
        funding: e({
          address: o,
          appConfig: p,
          fundWalletConfig: n,
          methodScreen: i
        })
      });
      j(i);
    }, [p, l, j])
  };
};
export { a as useFundWallet };
