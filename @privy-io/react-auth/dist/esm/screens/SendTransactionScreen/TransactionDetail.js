import { jsx as r, jsxs as e, Fragment as o } from "react/jsx-runtime";
import { isAddress as n } from "viem";
import { Rows as t, Row as i } from "../../components/ui/layout/Row.mjs";
import { LabelSm as s } from "../../components/ui/typography/LabelSm.mjs";
import { Value as l } from "../../components/ui/typography/Value.mjs";
import { Address as a } from "../../components/ui/wallet/Address.mjs";
import { Box as c } from "../../components/ui/wallet/shared.mjs";
import "styled-components";
import "../../components/ui/animation/LoadingSkeleton.mjs";
import "@heroicons/react/24/outline/CheckIcon";
import "@heroicons/react/24/outline/Square2StackIcon";
import "react";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
const d = d => {
  let {
    chain: m,
    transactionDetails: p,
    isTokenContractInfoLoading: h,
    symbol: f
  } = d;
  let {
    action: u,
    functionName: k
  } = p;
  /*#__PURE__*/
  return r(c, {
    children: /*#__PURE__*/e(t, {
      children: [u !== "transaction" && /*#__PURE__*/e(i, {
        children: [/*#__PURE__*/r(s, {
          children: "Action"
        }), /*#__PURE__*/r(l, {
          children: k
        })]
      }), k === "mint" && "args" in p && p.args.filter(r => r).map((o, t) => /*#__PURE__*/e(i, {
        children: [/*#__PURE__*/r(s, {
          children: `Param ${t}`
        }), /*#__PURE__*/r(l, {
          children: typeof o == "string" && n(o) ? /*#__PURE__*/r(a, {
            address: o,
            url: m?.blockExplorers?.default?.url,
            showCopyIcon: false
          }) : o?.toString()
        })]
      }, t)), k === "setApprovalForAll" && p.operator && /*#__PURE__*/e(i, {
        children: [/*#__PURE__*/r(s, {
          children: "Operator"
        }), /*#__PURE__*/r(l, {
          children: /*#__PURE__*/r(a, {
            address: p.operator,
            url: m?.blockExplorers?.default?.url,
            showCopyIcon: false
          })
        })]
      }), k === "setApprovalForAll" && p.approved !== undefined && /*#__PURE__*/e(i, {
        children: [/*#__PURE__*/r(s, {
          children: "Set approval to"
        }), /*#__PURE__*/r(l, {
          children: p.approved ? "true" : "false"
        })]
      }), k === "transfer" || k === "transferFrom" || k === "safeTransferFrom" || k === "approve" ? /*#__PURE__*/e(o, {
        children: ["formattedAmount" in p && p.formattedAmount && /*#__PURE__*/e(i, {
          children: [/*#__PURE__*/r(s, {
            children: "Amount"
          }), /*#__PURE__*/e(l, {
            $isLoading: h,
            children: [p.formattedAmount, " ", f]
          })]
        }), "tokenId" in p && p.tokenId && /*#__PURE__*/e(i, {
          children: [/*#__PURE__*/r(s, {
            children: "Token ID"
          }), /*#__PURE__*/r(l, {
            children: p.tokenId.toString()
          })]
        })]
      }) : null, k === "safeBatchTransferFrom" && /*#__PURE__*/e(o, {
        children: ["amounts" in p && p.amounts && /*#__PURE__*/e(i, {
          children: [/*#__PURE__*/r(s, {
            children: "Amounts"
          }), /*#__PURE__*/r(l, {
            children: p.amounts.join(", ")
          })]
        }), "tokenIds" in p && p.tokenIds && /*#__PURE__*/e(i, {
          children: [/*#__PURE__*/r(s, {
            children: "Token IDs"
          }), /*#__PURE__*/r(l, {
            children: p.tokenIds.join(", ")
          })]
        })]
      }), k === "approve" && p.spender && /*#__PURE__*/e(i, {
        children: [/*#__PURE__*/r(s, {
          children: "Spender"
        }), /*#__PURE__*/r(l, {
          children: /*#__PURE__*/r(a, {
            address: p.spender,
            url: m?.blockExplorers?.default?.url,
            showCopyIcon: false
          })
        })]
      }), (k === "transferFrom" || k === "safeTransferFrom" || k === "safeBatchTransferFrom") && p.transferFrom && /*#__PURE__*/e(i, {
        children: [/*#__PURE__*/r(s, {
          children: "Transferring from"
        }), /*#__PURE__*/r(l, {
          children: /*#__PURE__*/r(a, {
            address: p.transferFrom,
            url: m?.blockExplorers?.default?.url,
            showCopyIcon: false
          })
        })]
      }), (k === "transferFrom" || k === "safeTransferFrom" || k === "safeBatchTransferFrom") && p.transferTo && /*#__PURE__*/e(i, {
        children: [/*#__PURE__*/r(s, {
          children: "Transferring to"
        }), /*#__PURE__*/r(l, {
          children: /*#__PURE__*/r(a, {
            address: p.transferTo,
            url: m?.blockExplorers?.default?.url,
            showCopyIcon: false
          })
        })]
      })]
    })
  });
};
export { d as TransactionDetail };
