import { getAllUserEmbeddedEthereumWallets as e } from "../../utils/getAllUserEmbeddedEthereumWallets.mjs";
import { getAllUserEmbeddedSolanaWallets as t } from "../../utils/getAllUserEmbeddedSolanaWallets.mjs";
import { getUserEmbeddedEthereumWallet as m } from "../../utils/getUserEmbeddedEthereumWallet.mjs";
import { getUserEmbeddedSolanaWallet as l } from "../../utils/getUserEmbeddedSolanaWallet.mjs";
const r = m => [...e(m), ...t(m)];
const s = (e, t) => e.imported ? e : m(t) ?? l(t);
export { s as getRootWalletForDelegation, r as getUserValidDelegateWallets };
