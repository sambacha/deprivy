import { getAllUserEmbeddedSolanaWallets as l } from "./getAllUserEmbeddedSolanaWallets.mjs";
const e = e => l(e).find(l => l.wallet_index === 0) ?? null;
export { e as getUserEmbeddedSolanaWallet };
