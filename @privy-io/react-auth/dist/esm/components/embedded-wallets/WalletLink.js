import { jsx as t } from "react/jsx-runtime";
import { styled as e } from "styled-components";
import { CHAIN_ID_MAINNET as o } from "../../constants.mjs";
import { getBlockExplorerUrlForAddress as r } from "../../lib/ethers.mjs";
import { getSolanaWalletExplorerUrl as i, getSolanaNetworkFromRpcEndpoint as m } from "../../lib/solana/index.mjs";
import { formatWalletAddress as n } from "../../utils/index.mjs";
import "viem";
import "../../hooks/internal-context.mjs";
import "react";
import "../../hooks/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
const s = ({
  walletAddress: e,
  chainId: s = o,
  network: p,
  rpcEndpoint: c
}) => /*#__PURE__*/t(l, {
  href: p === "ethereum" ? r(s, e) : i(e, m(c || "")),
  target: "_blank",
  children: n(e)
});
let l = /*#__PURE__*/e.a.withConfig({
  displayName: "StyledLink",
  componentId: "sc-adda23e5-0"
})(["&:hover{text-decoration:underline;}"]);
export { s as WalletLink };
