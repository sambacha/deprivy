import { jsxs as o, jsx as n, Fragment as i } from "react/jsx-runtime";
import t from "@heroicons/react/24/outline/ChevronDownIcon";
import { useState as e } from "react";
import { styled as r } from "styled-components";
import { BackButton as c, NextButton as s } from "../ModalHeader.mjs";
import { Rows as m, Row as a } from "../ui/layout/Row.mjs";
import { LabelSm as l } from "../ui/typography/LabelSm.mjs";
import { Value as p } from "../ui/typography/Value.mjs";
import { SolanaPriceDisplay as d } from "./PriceDisplay.mjs";
import { WalletLink as h } from "./WalletLink.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
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
import "../../hooks/internal-context.mjs";
import "../../hooks/index.mjs";
import "../ui/animation/LoadingSkeleton.mjs";
import "viem";
import "../../lib/ethers.mjs";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
import "../../lib/solana/transaction.mjs";
import "../../utils/buffer/readBigInt64LE.mjs";
const u = ({
  instructions: r,
  fees: h,
  transactionInfo: u,
  solPrice: x,
  rpcEndpoint: v
}) => {
  let A = r.reduce((o, {
    amount: n,
    token: i
  }) => n && i?.symbol === "SOL" ? o + n : o, 0n);
  let [I, C] = e(0);
  let [E, P] = e(false);
  let S = r[I];
  /*#__PURE__*/
  return o(m, {
    children: [/*#__PURE__*/o(a, {
      children: [/*#__PURE__*/n(l, {
        children: "Total"
      }), /*#__PURE__*/n(p, {
        children: /*#__PURE__*/n(d, {
          quantities: [A, h],
          tokenPrice: x
        })
      })]
    }), u && u.action && /*#__PURE__*/o(a, {
      children: [/*#__PURE__*/n(l, {
        children: "Action"
      }), /*#__PURE__*/n(p, {
        children: u.action
      })]
    }), /*#__PURE__*/o(a, {
      children: [/*#__PURE__*/n(l, {
        children: "Fees"
      }), /*#__PURE__*/n(p, {
        children: /*#__PURE__*/n(d, {
          quantities: [h || 0n],
          tokenPrice: x
        })
      })]
    }), r.length > 1 ? /*#__PURE__*/o(i, {
      children: [/*#__PURE__*/n(a, {
        children: /*#__PURE__*/o(b, {
          onClick: () => P(o => !o),
          children: [/*#__PURE__*/n("span", {
            children: "Details"
          }), /*#__PURE__*/n(t, {
            height: "16px",
            width: "16px",
            strokeWidth: "2",
            style: {
              transition: "all 300ms",
              transform: E ? "rotate(180deg)" : undefined
            }
          })]
        })
      }), E && /*#__PURE__*/n(a, {
        children: /*#__PURE__*/o(f, {
          children: [/*#__PURE__*/o(g, {
            children: [/*#__PURE__*/o(y, {
              children: [I + 1, " of ", r.length, " instructions"]
            }), /*#__PURE__*/o(w, {
              children: [I > 0 && /*#__PURE__*/n(c, {
                backFn: () => C(o => o - 1)
              }), I < r.length - 1 && /*#__PURE__*/n(s, {
                nextFn: () => C(o => o + 1)
              })]
            })]
          }), /*#__PURE__*/n(k, {
            children: /*#__PURE__*/n(j, {
              instruction: S,
              rpcEndpoint: v,
              solPrice: x
            })
          })]
        })
      })]
    }) : /*#__PURE__*/n(j, {
      instruction: S,
      rpcEndpoint: v,
      solPrice: x,
      hideAmount: true
    })]
  });
};
function j({
  instruction: i,
  rpcEndpoint: t,
  solPrice: e,
  hideAmount: r
}) {
  if (i) {
    return /*#__PURE__*/o(m, {
      children: [!r && !!i.amount && /*#__PURE__*/o(a, {
        children: [/*#__PURE__*/n(l, {
          children: "Amount"
        }), /*#__PURE__*/n(p, {
          children: /*#__PURE__*/n(d, {
            quantities: [i.amount],
            tokenPrice: e,
            tokenSymbol: i.token?.symbol ?? "SOL",
            tokenDecimals: i.token?.decimals ?? 9
          })
        })]
      }), i.to && /*#__PURE__*/o(a, {
        children: [/*#__PURE__*/n(l, {
          children: "To"
        }), /*#__PURE__*/n(p, {
          children: /*#__PURE__*/n(h, {
            walletAddress: i.to,
            rpcEndpoint: t,
            network: "solana"
          })
        })]
      }), i.tokenAccount && /*#__PURE__*/o(a, {
        children: [/*#__PURE__*/n(l, {
          children: "Token account"
        }), /*#__PURE__*/n(p, {
          children: /*#__PURE__*/n(h, {
            walletAddress: i.tokenAccount,
            rpcEndpoint: t,
            network: "solana"
          })
        })]
      }), i.tokenAccountOwner && /*#__PURE__*/o(a, {
        children: [/*#__PURE__*/n(l, {
          children: "Token account owner"
        }), /*#__PURE__*/n(p, {
          children: /*#__PURE__*/n(h, {
            walletAddress: i.tokenAccountOwner,
            rpcEndpoint: t,
            network: "solana"
          })
        })]
      }), i.from && /*#__PURE__*/o(a, {
        children: [/*#__PURE__*/n(l, {
          children: "From"
        }), /*#__PURE__*/n(p, {
          children: /*#__PURE__*/n(h, {
            walletAddress: i.from,
            rpcEndpoint: t,
            network: "solana"
          })
        })]
      })]
    });
  } else {
    return null;
  }
}
let f = /*#__PURE__*/r.div.withConfig({
  displayName: "InstructionsBox",
  componentId: "sc-702e760-0"
})(["display:flex;flex-direction:column;width:100%;overflow:hidden;&&{border:1px solid;border-color:var(--privy-color-foreground-4);border-radius:var(--privy-border-radius-md);}"]);
let g = /*#__PURE__*/r.header.withConfig({
  displayName: "InstructionsBoxHeader",
  componentId: "sc-702e760-1"
})(["display:flex;justify-content:space-between;align-items:center;padding:12px;background-color:var(--privy-color-background-2);"]);
let y = /*#__PURE__*/r.h4.withConfig({
  displayName: "HeaderTitle",
  componentId: "sc-702e760-2"
})(["font-size:14px;font-weight:500;line-height:19.6px;"]);
let k = /*#__PURE__*/r.div.withConfig({
  displayName: "InstructionsBoxContent",
  componentId: "sc-702e760-3"
})(["padding:12px;"]);
let w = /*#__PURE__*/r.div.withConfig({
  displayName: "NavigationButtonsConatiner",
  componentId: "sc-702e760-4"
})(["display:flex;gap:8px;align-items:center;"]);
let b = /*#__PURE__*/r(l).withConfig({
  displayName: "InteractiveLabel",
  componentId: "sc-702e760-5"
})(["cursor:pointer;display:inline-flex;gap:8px;align-items:center;"]);
export { u as SolanaTransactionDetails };
