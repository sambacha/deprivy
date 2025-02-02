import { styled as o, keyframes as n } from "styled-components";
import { SoftCtaButton as i } from "../../components/Button.mjs";
import { LinkButton as t } from "../LinkPasskeyScreen.mjs";
import "react/jsx-runtime";
import "../../components/Loader.mjs";
import "@heroicons/react/24/outline/CheckCircleIcon";
import "@heroicons/react/24/outline/ClockIcon";
import "@heroicons/react/24/outline/TrashIcon";
import "@heroicons/react/24/solid/CheckBadgeIcon";
import "@heroicons/react/24/solid/LockClosedIcon";
import "react";
import "../../components/ModalFooter.mjs";
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
import "../../components/ModalHeader.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../../hooks/internal-context.mjs";
import "../../hooks/index.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../hooks/privy-context.mjs";
import "../../svg/face-id.mjs";
import "../../svg/fingerprint.mjs";
import "../MfaScreens/StyledComponents.mjs";
const r = /*#__PURE__*/o.div.withConfig({
  displayName: "FundingMethodContainer",
  componentId: "sc-eaaa12a-0"
})(["display:flex;flex-direction:column;gap:12px;padding-top:24px;padding-bottom:24px;"]);
const e = /*#__PURE__*/o.div.withConfig({
  displayName: "IconContainer",
  componentId: "sc-eaaa12a-1"
})(["width:24px;height:24px;display:flex;justify-content:center;align-items:center;svg{border-radius:var(--privy-border-radius-sm);}"]);
const a = /*#__PURE__*/o.div.withConfig({
  displayName: "FundingQuantityWrapper",
  componentId: "sc-eaaa12a-2"
})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:8px;"]);
const s = /*#__PURE__*/o.div.withConfig({
  displayName: "FundingQuantity",
  componentId: "sc-eaaa12a-3"
})(["display:flex;align-items:center;gap:4px;width:100%;padding:0 16px;border-width:1px !important;border-radius:12px;cursor:text;&:focus-within{border-color:var(--privy-color-accent);}"]);
const c = /*#__PURE__*/o.div.withConfig({
  displayName: "FundingAmount",
  componentId: "sc-eaaa12a-4"
})(["font-size:42px !important;"]);
const m = /*#__PURE__*/o.input.withConfig({
  displayName: "FundingAmountInput",
  componentId: "sc-eaaa12a-5"
})(["background-color:var(--privy-color-background);width:100%;&:focus{outline:none !important;border:none !important;box-shadow:none !important;}&&{font-size:26px;}"]);
const p = /*#__PURE__*/o(m).withConfig({
  displayName: "FundingAmountInputLarge",
  componentId: "sc-eaaa12a-6"
})(["&&{font-size:42px;}"]);
const d = /*#__PURE__*/o.button.withConfig({
  displayName: "FundingAmountEditButton",
  componentId: "sc-eaaa12a-7"
})(["cursor:pointer;padding-left:4px;"]);
const l = /*#__PURE__*/o.div.withConfig({
  displayName: "FundingCurrency",
  componentId: "sc-eaaa12a-8"
})(["font-size:18px;"]);
const h = /*#__PURE__*/o.div.withConfig({
  displayName: "FundingDollars",
  componentId: "sc-eaaa12a-9"
})(["font-size:12px;color:var(--privy-color-foreground-3);height:20px;"]);
const u = /*#__PURE__*/o.div.withConfig({
  displayName: "FundingNetwork",
  componentId: "sc-eaaa12a-10"
})(["display:flex;flex-direction:row;line-height:22px;font-size:16px;text-align:center;svg{margin-right:6px;margin:auto;}"]);
const g = /*#__PURE__*/o(t).withConfig({
  displayName: "ManualFundsButton",
  componentId: "sc-eaaa12a-11"
})(["margin-top:16px;"]);
let f = /*#__PURE__*/n(["from{opacity:0;}to{opacity:1;}"]);
const j = /*#__PURE__*/o(i).withConfig({
  displayName: "ContinueFromManualButton",
  componentId: "sc-eaaa12a-12"
})(["border-radius:var(--privy-border-radius-md) !important;animation:", " 0.3s ease-in-out;"], f);
const y = /*#__PURE__*/o.div.withConfig({
  displayName: "InfoButtonText",
  componentId: "sc-eaaa12a-13"
})([""]);
const x = /*#__PURE__*/o.a.withConfig({
  displayName: "InfoButtonLink",
  componentId: "sc-eaaa12a-14"
})(["&&{color:var(--privy-color-accent);}cursor:pointer;"]);
export { j as ContinueFromManualButton, c as FundingAmount, d as FundingAmountEditButton, m as FundingAmountInput, p as FundingAmountInputLarge, l as FundingCurrency, h as FundingDollars, r as FundingMethodContainer, u as FundingNetwork, s as FundingQuantity, a as FundingQuantityWrapper, e as IconContainer, x as InfoButtonLink, y as InfoButtonText, g as ManualFundsButton };
