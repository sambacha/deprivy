import { jsxs as o, Fragment as n, jsx as r } from "react/jsx-runtime";
import { ChevronDownIcon as e } from "@heroicons/react/24/outline";
import { styled as i } from "styled-components";
import { PrimaryButton as t } from "../../components/Button.mjs";
import { BlobbyFooter as s } from "../../components/ModalFooter.mjs";
import { ModalHeader as c } from "../../components/ModalHeader.mjs";
import { Rows as a, Row as m } from "../../components/ui/layout/Row.mjs";
import { ErrorMessage as l } from "../../components/ui/typography/ErrorMessage.mjs";
import { LabelSm as d, LabelSmPrimary as p } from "../../components/ui/typography/LabelSm.mjs";
import { Subtitle as h } from "../../components/ui/typography/Subtitle.mjs";
import { Title as u } from "../../components/ui/typography/Title.mjs";
import { Value as g } from "../../components/ui/typography/Value.mjs";
import { Address as j } from "../../components/ui/wallet/Address.mjs";
import { WalletInfoCard as y } from "../../components/ui/wallet/WalletInfoCard.mjs";
import { Grow as f } from "../LandingScreen/styles.mjs";
import { TransactionDetail as b } from "./TransactionDetail.mjs";
import { useTransactionDetails as k } from "./useTransactionDetails.mjs";
import "../../components/Loader.mjs";
import "../../configuration/context.mjs";
import "react";
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
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../../hooks/internal-context.mjs";
import "../../hooks/index.mjs";
import "../../components/ui/animation/LoadingSkeleton.mjs";
import "@heroicons/react/24/outline/CheckIcon";
import "@heroicons/react/24/outline/Square2StackIcon";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
import "../../components/ui/chips/Chip.mjs";
import "../../components/ui/layout/Column.mjs";
import "../../components/ui/typography/LabelXs.mjs";
import "../../components/ui/wallet/shared.mjs";
const w = ({
  transactionIndex: o,
  maxIndex: n
}) => typeof o != "number" || n === 0 ? "" : ` (${o + 1} / ${n + 1})`;
const x = ({
  img: i,
  submitError: y,
  prepareError: x,
  onClose: C,
  action: L,
  title: A,
  subtitle: v,
  total: M,
  txValue: E,
  to: $,
  tokenAddress: D,
  network: N,
  missingFunds: F,
  fee: P,
  from: z,
  cta: B,
  disabled: W,
  chain: Y,
  isSubmitting: q,
  isPreparing: H,
  isTokenPriceLoading: R,
  isTokenContractInfoLoading: V,
  isSponsored: X,
  symbol: O,
  balance: Q,
  onClick: U,
  transactionDetails: G,
  transactionIndex: J,
  maxIndex: K,
  onBack: Z,
  chainName: _
}) => {
  let {
    showTransactionDetails: oo,
    setShowTransactionDetails: no,
    hasMoreDetails: ro,
    isErc20Ish: eo
  } = k(G); /*#__PURE__*/
  return o(n, {
    children: [/*#__PURE__*/r(c, {
      onClose: C,
      backFn: Z
    }), i && /*#__PURE__*/r(S, {
      children: i
    }), /*#__PURE__*/o(u, {
      style: {
        marginTop: i ? "1.5rem" : 0
      },
      children: [A, /*#__PURE__*/r(w, {
        maxIndex: K,
        transactionIndex: J
      })]
    }), /*#__PURE__*/r(h, {
      children: v
    }), /*#__PURE__*/o(a, {
      style: {
        marginTop: "2rem"
      },
      children: [eo && /*#__PURE__*/o(n, {
        children: [L === "approve" && /*#__PURE__*/o(m, {
          children: [/*#__PURE__*/r(d, {
            children: "Action"
          }), /*#__PURE__*/r(g, {
            children: G?.action
          })]
        }), /*#__PURE__*/o(m, {
          children: [/*#__PURE__*/r(d, {
            children: "Amount"
          }), /*#__PURE__*/o(g, {
            $isLoading: eo && V,
            children: [G?.formattedAmount, " ", O]
          })]
        })]
      }), M && /*#__PURE__*/o(m, {
        children: [/*#__PURE__*/r(d, {
          children: "Total"
        }), /*#__PURE__*/r(g, {
          $isLoading: H || R,
          children: M
        })]
      }), G && "spender" in G && G?.spender ? /*#__PURE__*/o(m, {
        children: [/*#__PURE__*/r(d, {
          children: "Spender"
        }), /*#__PURE__*/r(g, {
          children: /*#__PURE__*/r(j, {
            address: G.spender,
            url: Y?.blockExplorers?.default?.url,
            showCopyIcon: false
          })
        })]
      }) : null, $ && /*#__PURE__*/o(m, {
        children: [/*#__PURE__*/r(d, {
          children: "To"
        }), /*#__PURE__*/r(g, {
          children: /*#__PURE__*/r(j, {
            address: $,
            url: Y?.blockExplorers?.default?.url,
            showCopyIcon: false
          })
        })]
      }), D && /*#__PURE__*/o(m, {
        children: [/*#__PURE__*/r(d, {
          children: "Token address"
        }), /*#__PURE__*/r(g, {
          children: /*#__PURE__*/r(j, {
            address: D,
            url: Y?.blockExplorers?.default?.url,
            showCopyIcon: false
          })
        })]
      }), /*#__PURE__*/o(m, {
        children: [/*#__PURE__*/r(d, {
          children: "Network"
        }), /*#__PURE__*/r(g, {
          children: N
        })]
      }), /*#__PURE__*/o(m, {
        children: [/*#__PURE__*/r(d, {
          children: "Estimated fee"
        }), /*#__PURE__*/r(g, {
          $isLoading: H || R || X === undefined,
          children: X ? "Sponsored" : P
        })]
      }), ro && /*#__PURE__*/o(n, {
        children: [/*#__PURE__*/r(m, {
          className: "cursor-pointer",
          onClick: () => no(!oo),
          children: /*#__PURE__*/o(p, {
            className: "flex items-center gap-x-1",
            children: ["Details", " ", /*#__PURE__*/r(e, {
              style: {
                width: "0.75rem",
                marginLeft: "0.25rem",
                transform: oo ? "rotate(180deg)" : undefined
              }
            })]
          })
        }), oo && G && /*#__PURE__*/r(b, {
          action: L,
          chain: Y,
          transactionDetails: G,
          isTokenContractInfoLoading: V,
          symbol: O
        })]
      })]
    }), /*#__PURE__*/r(f, {}), y ? /*#__PURE__*/r(l, {
      style: {
        marginTop: "2rem"
      },
      children: y.message
    }) : x ? /*#__PURE__*/r(l, {
      style: {
        marginTop: "2rem"
      },
      children: x.shortMessage ?? T
    }) : null, /*#__PURE__*/r(I, {
      $useSmallMargins: !!x || !!y,
      title: Number(E) > 0 ? undefined : X !== false ? "Your wallet" : undefined,
      address: z,
      balance: Q,
      isLoading: H || R,
      errMsg: H || x || y || !F ? undefined : `Add funds on ${Y?.name ?? _} to complete transaction.`
    }), /*#__PURE__*/r(t, {
      style: {
        marginTop: "1rem"
      },
      loading: q,
      disabled: W || H,
      onClick: U,
      children: B
    }), /*#__PURE__*/r(s, {})]
  });
};
const C = ({
  img: e,
  title: i,
  subtitle: p,
  cta: y,
  network: b,
  blockExplorerUrl: k,
  transactionIndex: x,
  maxIndex: C,
  isMissingFunds: L,
  submitError: A,
  parseError: v,
  total: M,
  amount: E,
  fee: $,
  balance: D,
  from: N,
  to: F,
  tokenAddress: P,
  tokenAccount: z,
  tokenAccountOwner: B,
  programAddress: W,
  transactingWalletAddress: Y,
  disabled: q,
  isSubmitting: H,
  isPreparing: R,
  isTokenPriceLoading: V,
  onClick: X,
  onClose: O,
  onBack: Q
}) => {
  let U = R || V; /*#__PURE__*/
  return o(n, {
    children: [/*#__PURE__*/r(c, {
      onClose: O,
      backFn: Q
    }), e && /*#__PURE__*/r(S, {
      children: e
    }), /*#__PURE__*/o(u, {
      style: {
        marginTop: e ? "1.5rem" : 0
      },
      children: [i, /*#__PURE__*/r(w, {
        maxIndex: C,
        transactionIndex: x
      })]
    }), /*#__PURE__*/r(h, {
      children: p
    }), /*#__PURE__*/o(a, {
      style: {
        marginTop: "2rem"
      },
      children: [(M || U) && /*#__PURE__*/o(m, {
        children: [/*#__PURE__*/r(d, {
          children: "Total"
        }), /*#__PURE__*/r(g, {
          $isLoading: U,
          children: M
        })]
      }), N && N !== Y && /*#__PURE__*/o(m, {
        children: [/*#__PURE__*/r(d, {
          children: "From"
        }), /*#__PURE__*/r(g, {
          children: /*#__PURE__*/r(j, {
            address: N,
            url: k,
            showCopyIcon: false
          })
        })]
      }), F && /*#__PURE__*/o(m, {
        children: [/*#__PURE__*/r(d, {
          children: "To"
        }), /*#__PURE__*/r(g, {
          children: /*#__PURE__*/r(j, {
            address: F,
            url: k,
            showCopyIcon: false
          })
        })]
      }), B && /*#__PURE__*/o(m, {
        children: [/*#__PURE__*/r(d, {
          children: "Token account owner"
        }), /*#__PURE__*/r(g, {
          children: /*#__PURE__*/r(j, {
            address: B,
            url: k,
            showCopyIcon: false
          })
        })]
      }), z && /*#__PURE__*/o(m, {
        children: [/*#__PURE__*/r(d, {
          children: "Token account"
        }), /*#__PURE__*/r(g, {
          children: /*#__PURE__*/r(j, {
            address: z,
            url: k,
            showCopyIcon: false
          })
        })]
      }), P && /*#__PURE__*/o(m, {
        children: [/*#__PURE__*/r(d, {
          children: "Token address"
        }), /*#__PURE__*/r(g, {
          children: /*#__PURE__*/r(j, {
            address: P,
            url: k,
            showCopyIcon: false
          })
        })]
      }), W && /*#__PURE__*/o(m, {
        children: [/*#__PURE__*/r(d, {
          children: "Program address"
        }), /*#__PURE__*/r(g, {
          children: /*#__PURE__*/r(j, {
            address: W,
            url: k,
            showCopyIcon: false
          })
        })]
      }), b && /*#__PURE__*/o(m, {
        children: [/*#__PURE__*/r(d, {
          children: "Network"
        }), /*#__PURE__*/r(g, {
          children: b
        })]
      }), (E || U) && /*#__PURE__*/o(m, {
        children: [/*#__PURE__*/r(d, {
          children: "Amount"
        }), /*#__PURE__*/r(g, {
          children: /*#__PURE__*/r(g, {
            $isLoading: U,
            children: E
          })
        })]
      }), ($ || U) && /*#__PURE__*/o(m, {
        children: [/*#__PURE__*/r(d, {
          children: "Estimated fee"
        }), /*#__PURE__*/r(g, {
          $isLoading: U,
          children: $
        })]
      })]
    }), /*#__PURE__*/r(f, {}), A ? /*#__PURE__*/r(l, {
      style: {
        marginTop: "2rem"
      },
      children: A.message
    }) : v ? /*#__PURE__*/r(l, {
      style: {
        marginTop: "2rem"
      },
      children: T
    }) : null, /*#__PURE__*/r(I, {
      $useSmallMargins: !!v || !!A,
      title: "Your wallet",
      address: Y,
      balance: D,
      isLoading: R || V,
      errMsg: R || v || A || !L ? undefined : "Add funds on Solana to complete transaction."
    }), /*#__PURE__*/r(t, {
      style: {
        marginTop: "1rem"
      },
      loading: H,
      disabled: q || R,
      onClick: X,
      children: y
    }), /*#__PURE__*/r(s, {})]
  });
};
let I = /*#__PURE__*/i(y).withConfig({
  displayName: "StyledWalletInfoCard",
  componentId: "sc-a0a993c7-0"
})(["", ""], o => o.$useSmallMargins ? "margin-top: 0.5rem;" : "margin-top: 2rem;");
let T = "There was an error preparing your transaction. Your transaction request will likely fail.";
let S = /*#__PURE__*/i.div.withConfig({
  displayName: "ImageContainer",
  componentId: "sc-a0a993c7-1"
})(["display:flex;width:100%;justify-content:center;max-height:40px;> img{object-fit:contain;border-radius:var(--privy-border-radius-sm);}"]);
export { C as SendSolanaTransactionScreenView, x as SendTransactionScreenView, w as TransactionIndex };
