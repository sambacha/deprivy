import { jsxs as o, jsx as t } from "react/jsx-runtime";
import { usePrivyModal as i } from "../hooks/modal-context.mjs";
import "react";
import "../components/PrefetchedImage.mjs";
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
const c = ({
  style: c,
  ...s
}) => {
  let {
    app: n
  } = i(); /*#__PURE__*/
  return o("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      height: "28px",
      width: "28px",
      ...c
    },
    ...s,
    children: [/*#__PURE__*/t("rect", {
      width: "28",
      height: "28",
      rx: "3",
      fill: n?.appearance.palette.colorScheme === "dark" ? "#3396ff" : "#141414"
    }), /*#__PURE__*/t("g", {
      clipPath: "url(#clip0_1765_9946)",
      children: /*#__PURE__*/t("path", {
        d: "M8.09448 10.3941C11.3558 7.20196 16.6442 7.20196 19.9055 10.3941L20.2982 10.7782C20.3369 10.8157 20.3677 10.8606 20.3887 10.9102C20.4097 10.9599 20.4206 11.0132 20.4206 11.0671C20.4206 11.121 20.4097 11.1744 20.3887 11.224C20.3677 11.2737 20.3369 11.3186 20.2982 11.3561L18.9554 12.6702C18.9158 12.7086 18.8628 12.7301 18.8077 12.7301C18.7526 12.7301 18.6996 12.7086 18.66 12.6702L18.1198 12.1415C15.8448 9.91503 12.1557 9.91503 9.88015 12.1415L9.30167 12.7075C9.26207 12.7459 9.20909 12.7673 9.15395 12.7673C9.0988 12.7673 9.04582 12.7459 9.00622 12.7075L7.66346 11.3934C7.62475 11.3559 7.59397 11.3109 7.57295 11.2613C7.55193 11.2117 7.5411 11.1583 7.5411 11.1044C7.5411 11.0505 7.55193 10.9971 7.57295 10.9475C7.59397 10.8979 7.62475 10.8529 7.66346 10.8154L8.09448 10.3941ZM22.6829 13.1115L23.8776 14.2814C23.9163 14.319 23.9471 14.3639 23.9681 14.4135C23.9892 14.4632 24 14.5165 24 14.5704C24 14.6243 23.9892 14.6777 23.9681 14.7273C23.9471 14.777 23.9163 14.8219 23.8776 14.8594L18.4893 20.1332C18.4102 20.2101 18.3042 20.2531 18.1938 20.2531C18.0835 20.2531 17.9775 20.2101 17.8984 20.1332L14.0743 16.3901C14.0545 16.3708 14.0279 16.36 14.0003 16.36C13.9726 16.36 13.9461 16.3708 13.9263 16.3901L10.1021 20.1332C10.023 20.2101 9.91703 20.2531 9.8067 20.2531C9.69636 20.2531 9.59038 20.2101 9.51124 20.1332L4.12236 14.8594C4.08365 14.8219 4.05287 14.777 4.03185 14.7273C4.01083 14.6777 4 14.6243 4 14.5704C4 14.5165 4.01083 14.4632 4.03185 14.4135C4.05287 14.3639 4.08365 14.319 4.12236 14.2814L5.31767 13.1115C5.39678 13.0348 5.50265 12.9919 5.61285 12.9919C5.72305 12.9919 5.82892 13.0348 5.90803 13.1115L9.73216 16.8546C9.75194 16.874 9.7785 16.8848 9.80616 16.8848C9.83381 16.8848 9.86037 16.874 9.88015 16.8546L13.7043 13.1115C13.7834 13.0346 13.8894 12.9916 13.9997 12.9916C14.1101 12.9916 14.216 13.0346 14.2952 13.1115L18.1198 16.8546C18.1396 16.874 18.1662 16.8848 18.1938 16.8848C18.2215 16.8848 18.2481 16.874 18.2678 16.8546L22.092 13.1115C22.1711 13.0346 22.2771 12.9916 22.3874 12.9916C22.4977 12.9916 22.6037 13.0346 22.6829 13.1115Z",
        fill: "white"
      })
    }), /*#__PURE__*/t("defs", {
      children: /*#__PURE__*/t("clipPath", {
        id: "clip0_1765_9946",
        children: /*#__PURE__*/t("rect", {
          width: "20",
          height: "12.2531",
          fill: "white",
          transform: "translate(4 8)"
        })
      })
    })]
  });
};
const s = "data:image/png;base64,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";
export { s as WALLET_CONNECT_LOGO_DATA_URI, c as WalletConnect };
