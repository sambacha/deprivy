import { jsx as o } from "react/jsx-runtime";
import n from "react";
import { usePrivyModal as s } from "../hooks/modal-context.mjs";
import "./PrefetchedImage.mjs";
import "../configuration/context.mjs";
import "../config.mjs";
import "../configuration/defaultClientConfig.mjs";
import "../constants.mjs";
import "../configuration/login-methods.mjs";
import "../configuration/wallets.mjs";
import "../connectors/chains/index.mjs";
import "../connectors/chains/arbitrum.mjs";
import "../connectors/chains/arbitrumSepolia.mjs";
import "../connectors/chains/avalanche.mjs";
import "../connectors/chains/avalancheFuji.mjs";
import "../connectors/chains/base.mjs";
import "../connectors/chains/baseSepolia.mjs";
import "../connectors/chains/berachainArtio.mjs";
import "../connectors/chains/celo.mjs";
import "../connectors/chains/celoAlfajores.mjs";
import "../connectors/chains/filecoin.mjs";
import "../connectors/chains/filecoinCalibration.mjs";
import "../connectors/chains/garnetHolesky.mjs";
import "../connectors/chains/holesky.mjs";
import "../connectors/chains/linea.mjs";
import "../connectors/chains/lineaTestnet.mjs";
import "../connectors/chains/lukso.mjs";
import "../connectors/chains/mainnet.mjs";
import "../connectors/chains/optimism.mjs";
import "../connectors/chains/optimismSepolia.mjs";
import "../connectors/chains/polygon.mjs";
import "../connectors/chains/polygonAmoy.mjs";
import "../connectors/chains/redstone.mjs";
import "../connectors/chains/sepolia.mjs";
import "../connectors/chains/zora.mjs";
import "../connectors/chains/zoraSepolia.mjs";
import "../connectors/chains/zoraTestnet.mjs";
import "../connectors/chains/utils.mjs";
import "../lib/solana/index.mjs";
import "../theme.mjs";
import "tinycolor2";
import "../lib/cybr53.mjs";
import "../screens/index.mjs";
import "../hooks/index.mjs";
const i = () => {
  let {
    app: i
  } = s();
  let t = i?.appearance?.logo;
  let c = `${i?.name} logo`;
  let r = {
    maxHeight: "90px",
    maxWidth: "180px"
  };
  if (t) {
    if (typeof t == "string") {
      return /*#__PURE__*/o("img", {
        src: t,
        alt: c,
        style: r
      });
    } else if (t.type === "svg" || t.type === "img") {
      return /*#__PURE__*/n.cloneElement(t, {
        alt: c,
        style: r
      });
    } else {
      console.warn("`config.appearance.logo` must be a string, or an SVG / IMG element. Nothing will be rendered.");
      return null;
    }
  } else {
    return null;
  }
};
export { i as AppLogo };
