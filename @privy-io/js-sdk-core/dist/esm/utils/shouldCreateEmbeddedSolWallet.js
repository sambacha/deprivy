import { getAllUserEmbeddedSolanaWallets as e } from "./getAllUserEmbeddedSolanaWallets.mjs";
const l = (l, t) => t !== "off" && !(e(l).length > 0) && (!(l.linked_accounts.filter(e => e.type === "wallet" && e.chain_type === "solana").length > 0) || t === "all-users");
export { l as shouldCreateEmbeddedSolWallet };
