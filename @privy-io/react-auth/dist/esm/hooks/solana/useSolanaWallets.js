import { usePrivyInternal as e } from "../internal-context.mjs";
import { useWallets as t } from "../useWallets.mjs";
import "react";
import "../index.mjs";
const a = () => {
  let {
    exportSolanaWallet: a,
    createEmbeddedSolanaWallet: l,
    solanaWallets: r,
    embeddedSolanaWallets: o
  } = e();
  let {
    ready: m
  } = t();
  return {
    ready: m,
    createWallet: l,
    exportWallet: a,
    wallets: r.concat(o ?? [])
  };
};
export { a as useSolanaWallets };
