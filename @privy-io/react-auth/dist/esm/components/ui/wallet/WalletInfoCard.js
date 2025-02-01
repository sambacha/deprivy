import { jsxs as r, Fragment as o, jsx as e } from "react/jsx-runtime";
import { Chip as i } from "../chips/Chip.mjs";
import { Column as t } from "../layout/Column.mjs";
import { ErrorMessage as s } from "../typography/ErrorMessage.mjs";
import { LabelXs as m } from "../typography/LabelXs.mjs";
import { Address as n } from "./Address.mjs";
import { Box as c } from "./shared.mjs";
import "styled-components";
import "../animation/LoadingSkeleton.mjs";
import "@heroicons/react/24/outline/CheckIcon";
import "@heroicons/react/24/outline/Square2StackIcon";
import "react";
import "../../../utils/index.mjs";
import "../../../connectors/get-legacy-injected-providers.mjs";
import "../../../connectors/is-wallet-installed.mjs";
import "../../../errors.mjs";
import "ofetch";
import "../../../utils/eth/getPublicClient.mjs";
import "viem";
const a = ({
  errMsg: a,
  balance: l,
  address: p,
  isLoading: d,
  className: h,
  title: g,
  isPulsing: j,
  showIcon: u,
  statusColor: y = "green"
}) => {
  let f;
  f = y || (a ? "red" : "green");
  return /*#__PURE__*/r(o, {
    children: [/*#__PURE__*/r(c, {
      className: h,
      $state: a ? "error" : undefined,
      children: [/*#__PURE__*/r(t, {
        children: [/*#__PURE__*/e(m, {
          children: g || "Pay with"
        }), /*#__PURE__*/e(n, {
          address: p,
          showCopyIcon: u || !!a
        })]
      }), l !== undefined && /*#__PURE__*/e(i, {
        isLoading: d,
        isPulsing: j,
        color: f,
        children: l
      })]
    }), a && /*#__PURE__*/e(s, {
      style: {
        marginTop: "0.25rem"
      },
      children: a
    })]
  });
};
export { a as WalletInfoCard };
