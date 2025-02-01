import { PrivyClientError as e } from "../../Error.mjs";
import { getUserValidDelegateWallets as t } from "./utils.mjs";
import "../../utils/getAllUserEmbeddedEthereumWallets.mjs";
import "../../utils/getAllUserEmbeddedSolanaWallets.mjs";
import "../../utils/getUserEmbeddedEthereumWallet.mjs";
import "../../utils/getUserEmbeddedSolanaWallet.mjs";
const r = r => async () => {
  let {
    user: l
  } = await r.user.get();
  if (!l) {
    throw new e({
      code: "delegated_actions_before_logged_in",
      error: "Must be logged in to revoke delegated wallets"
    });
  }
  if (t(l).every(e => !e.delegated)) {
    throw new e({
      code: "delegated_actions_no_wallet_to_revoke",
      error: "User has no delegated wallets to revoke."
    });
  }
  await r.delegated.revoke();
  let {
    user: o
  } = await r.user.get();
  return {
    user: o
  };
};
export { r as revokeWallets };
