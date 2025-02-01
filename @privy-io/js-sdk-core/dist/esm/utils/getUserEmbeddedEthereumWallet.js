import { getAllUserEmbeddedEthereumWallets as e } from "./getAllUserEmbeddedEthereumWallets.mjs";
const l = l => e(l).find(e => e.wallet_index === 0) ?? null;
const t = l;
export { l as getUserEmbeddedEthereumWallet, t as getUserEmbeddedWallet };
