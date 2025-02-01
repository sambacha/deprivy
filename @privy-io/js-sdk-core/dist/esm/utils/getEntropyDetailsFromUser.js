import { getEntropyDetailsFromAccount as e } from "./getEntropyDetailsFromAccount.mjs";
import { getUserEmbeddedEthereumWallet as t } from "./getUserEmbeddedEthereumWallet.mjs";
import { getUserEmbeddedSolanaWallet as r } from "./getUserEmbeddedSolanaWallet.mjs";
import "./getAllUserEmbeddedEthereumWallets.mjs";
import "./getAllUserEmbeddedSolanaWallets.mjs";
const l = l => {
  if (!l) {
    return null;
  }
  let m = t(l) ?? r(l);
  if (m) {
    return e(m);
  } else {
    return null;
  }
};
export { l as getEntropyDetailsFromUser };
