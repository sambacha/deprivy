import { jsx as o, jsxs as i } from "react/jsx-runtime";
import n from "@heroicons/react/24/outline/ArrowLeftIcon";
import t from "@heroicons/react/24/outline/ArrowRightIcon";
import r from "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import e from "@heroicons/react/24/outline/XMarkIcon";
import { styled as c } from "styled-components";
import { useAppConfig as s } from "../configuration/context.mjs";
import { usePrivyInternal as a } from "../hooks/internal-context.mjs";
import "react";
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
import "../hooks/index.mjs";
const m = ({
  backFn: i
}) => /*#__PURE__*/o("div", {
  children: /*#__PURE__*/o(j, {
    onClick: i,
    children: /*#__PURE__*/o(n, {
      height: "16px",
      width: "16px",
      strokeWidth: 2
    })
  })
});
const l = ({
  nextFn: i
}) => /*#__PURE__*/o("div", {
  children: /*#__PURE__*/o(j, {
    onClick: i,
    children: /*#__PURE__*/o(t, {
      height: "16px",
      width: "16px",
      strokeWidth: 2
    })
  })
});
const p = ({
  infoFn: i
}) => /*#__PURE__*/o("div", {
  children: /*#__PURE__*/o(g, {
    "aria-label": "info",
    onClick: i,
    children: /*#__PURE__*/o(r, {
      height: "22px",
      width: "22px",
      strokeWidth: 2
    })
  })
});
const d = i => /*#__PURE__*/o("div", {
  children: /*#__PURE__*/o(j, {
    "aria-label": "close modal",
    onClick: i.onClose,
    children: /*#__PURE__*/o(e, {
      height: "16px",
      width: "16px",
      strokeWidth: 2
    })
  })
});
const h = ({
  title: i
}) => /*#__PURE__*/o("h2", {
  children: i
});
const f = ({
  backFn: n,
  infoFn: t,
  onClose: r,
  title: e,
  closeable: c = true
}) => {
  let {
    closePrivyModal: l
  } = a();
  let h = s();
  /*#__PURE__*/
  return i(u, {
    children: [/*#__PURE__*/i(y, {
      children: [n && /*#__PURE__*/o(m, {
        backFn: n
      }), t && /*#__PURE__*/o(p, {
        infoFn: t
      })]
    }), e && /*#__PURE__*/o(v, {
      id: "privy-dialog-title",
      children: e
    }), /*#__PURE__*/o(x, {
      children: !h.render.standalone && c && /*#__PURE__*/o(d, {
        onClose: r || (() => l())
      })
    })]
  });
};
let j = /*#__PURE__*/c.button.withConfig({
  displayName: "StyledButton",
  componentId: "sc-f295093d-0"
})(["&&{cursor:pointer;display:flex;opacity:0.6;background-color:var(--privy-color-background-2);border-radius:var(--privy-border-radius-full);padding:4px;> svg{margin:auto;color:var(--privy-color-foreground);}:hover{opacity:1;}}"]);
let g = /*#__PURE__*/c(j).withConfig({
  displayName: "TransparentStyledButton",
  componentId: "sc-f295093d-1"
})(["&&{background-color:transparent;}"]);
let u = /*#__PURE__*/c.div.withConfig({
  displayName: "StyledHeader",
  componentId: "sc-f295093d-2"
})(["padding:16px 0;display:flex;align-items:center;justify-content:space-between;h2{font-size:16px;line-height:24px;font-weight:600;color:var(--privy-color-foreground);}"]);
let y = /*#__PURE__*/c.div.withConfig({
  displayName: "LeftActionContainer",
  componentId: "sc-f295093d-3"
})(["flex:1;align-items:center;display:flex;gap:8px;"]);
let x = /*#__PURE__*/c.div.withConfig({
  displayName: "RightActionContainer",
  componentId: "sc-f295093d-4"
})(["flex:1;display:flex;justify-content:flex-end;"]);
let v = /*#__PURE__*/c.div.withConfig({
  displayName: "TitleContainer",
  componentId: "sc-f295093d-5"
})(["overflow:hidden;white-space:nowrap;max-width:100%;text-overflow:ellipsis;text-align:center;color:var(--privy-color-foreground-2);"]);
export { m as BackButton, d as CancelButton, p as InfoButton, f as ModalHeader, l as NextButton, h as Title };
