import { jsx as o } from "react/jsx-runtime";
import { styled as n } from "styled-components";
import { AppLogo as i } from "../../components/AppLogo.mjs";
import { usePrivyModal as s } from "../../hooks/modal-context.mjs";
import "react";
import "../../components/PrefetchedImage.mjs";
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
import "../index.mjs";
import "../../hooks/index.mjs";
const t = n => {
  let {
    app: t
  } = s();
  if (t?.appearance.logo) {
    return /*#__PURE__*/o(c, {
      ...n,
      children: /*#__PURE__*/o(i, {})
    });
  } else {
    return null;
  }
};
const c = /*#__PURE__*/n.div.withConfig({
  displayName: "AppLogoContainer",
  componentId: "sc-a206bd44-0"
})(["display:flex;flex-direction:column;align-items:center;padding:24px 0;flex-grow:1;justify-content:center;"]);
export { c as AppLogoContainer, t as AppLogoHeader };
