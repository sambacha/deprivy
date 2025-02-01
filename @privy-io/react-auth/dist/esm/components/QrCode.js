import { jsx as o, jsxs as r, Fragment as e } from "react/jsx-runtime";
import i from "qrcode";
import t from "react";
import { styled as n } from "styled-components";
import { useAppConfig as c } from "../configuration/context.mjs";
import { BlackRoundedSquare as s } from "../svg/black-rounded-square.mjs";
import { convert1dTo2dArray as m, clamp as l } from "../utils/index.mjs";
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
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../errors.mjs";
import "ofetch";
import "../utils/eth/getPublicClient.mjs";
import "viem";
let a = (o, r, e, i, t) => {
  for (let n = r; n < r + i; n++) {
    for (let r = e; r < e + t; r++) {
      let e = o?.[r];
      if (e && e[n]) {
        e[n] = 0;
      }
    }
  }
  return o;
};
let p = (o, r) => {
  let e = i.create(o, {
    errorCorrectionLevel: r
  }).modules;
  let t = m(Array.from(e.data), e.size);
  t = a(t, 0, 0, 7, 7);
  t = a(t, t.length - 7, 0, 7, 7);
  return a(t, 0, t.length - 7, 7, 7);
};
let h = ({
  x: r,
  y: i,
  cellSize: t,
  bgColor: n,
  fgColor: c
}) => /*#__PURE__*/o(e, {
  children: [0, 1, 2].map(e => /*#__PURE__*/o("circle", {
    r: t * (7 - e * 2) / 2,
    cx: r + t * 7 / 2,
    cy: i + t * 7 / 2,
    fill: e % 2 != 0 ? n : c
  }, `finder-${r}-${i}-${e}`))
});
let g = ({
  cellSize: r,
  matrixSize: i,
  bgColor: t,
  fgColor: n
}) => /*#__PURE__*/o(e, {
  children: [[0, 0], [(i - 7) * r, 0], [0, (i - 7) * r]].map(([e, i]) => /*#__PURE__*/o(h, {
    x: e,
    y: i,
    cellSize: r,
    bgColor: t,
    fgColor: n
  }, `finder-${e}-${i}`))
});
let j = ({
  matrix: r,
  cellSize: i,
  color: n
}) => /*#__PURE__*/o(e, {
  children: r.map((r, e) => r.map((r, c) => r ? /*#__PURE__*/o("rect", {
    height: i - 0.4,
    width: i - 0.4,
    x: e * i + i * 0.1,
    y: c * i + i * 0.1,
    rx: i * 0.5,
    ry: i * 0.5,
    fill: n
  }, `cell-${e}-${c}`) : /*#__PURE__*/o(t.Fragment, {}, `circle-${e}-${c}`)))
});
let d = ({
  cellSize: i,
  matrixSize: t,
  element: n,
  sizePercentage: c,
  bgColor: s
}) => {
  if (!n) {
    /*#__PURE__*/return o(e, {});
  }
  let m = t * (c || 0.14);
  let l = Math.floor(t / 2 - m / 2);
  let a = Math.floor(t / 2 + m / 2);
  if ((a - l) % 2 != t % 2) {
    a += 1;
  }
  let p = (a - l) * i;
  let h = p - p * 0.2;
  let g = l * i;
  /*#__PURE__*/
  return r(e, {
    children: [/*#__PURE__*/o("rect", {
      x: l * i,
      y: l * i,
      width: p,
      height: p,
      fill: s
    }), /*#__PURE__*/o(n, {
      x: g + p * 0.1,
      y: g + p * 0.1,
      height: h,
      width: h
    })]
  });
};
let u = e => {
  let i = e.outputSize;
  let t = p(e.url, e.errorCorrectionLevel);
  let n = i / t.length;
  let c = l(n * 2, {
    min: i * 0.025,
    max: i * 0.036
  });
  /*#__PURE__*/
  return r("svg", {
    height: e.outputSize,
    width: e.outputSize,
    viewBox: `0 0 ${e.outputSize} ${e.outputSize}`,
    style: {
      height: "100%",
      width: "100%",
      padding: `${c}px`
    },
    children: [/*#__PURE__*/o(j, {
      matrix: t,
      cellSize: n,
      color: e.fgColor
    }), /*#__PURE__*/o(g, {
      cellSize: n,
      matrixSize: t.length,
      fgColor: e.fgColor,
      bgColor: e.bgColor
    }), /*#__PURE__*/o(d, {
      cellSize: n,
      element: e.logo?.element,
      bgColor: e.bgColor,
      matrixSize: t.length
    })]
  });
};
let f = /*#__PURE__*/n.div.withConfig({
  displayName: "QrContainer",
  componentId: "sc-aa6883ae-0"
})(["display:flex;justify-content:center;align-items:center;height:", ";width:", ";margin:auto;background-color:", ";&&{border-width:2px;border-color:", ";border-radius:var(--privy-border-radius-md);}"], o => `${o.$size}px`, o => `${o.$size}px`, o => o.$bgColor, o => o.$borderColor);
const C = r => {
  let {
    appearance: e
  } = c();
  let i = r.bgColor || "#FFFFFF";
  let t = r.fgColor || "#000000";
  let n = r.size || 160;
  let m = e.palette.colorScheme === "dark" ? i : t;
  /*#__PURE__*/
  return o(f, {
    $size: n,
    $bgColor: i,
    $fgColor: t,
    $borderColor: m,
    children: /*#__PURE__*/o(u, {
      url: r.url,
      logo: {
        element: r.squareLogoElement ?? s
      },
      outputSize: n,
      bgColor: i,
      fgColor: t,
      errorCorrectionLevel: r.errorCorrectionLevel || "Q"
    })
  });
};
export { C as QrCode };
