import { PrivyClientError as e } from "../../Error.mjs";
import { getUserValidDelegateWallets as t, getRootWalletForDelegation as r } from "./utils.mjs";
import "../../utils/getAllUserEmbeddedEthereumWallets.mjs";
import "../../utils/getAllUserEmbeddedSolanaWallets.mjs";
import "../../utils/getUserEmbeddedEthereumWallet.mjs";
import "../../utils/getUserEmbeddedSolanaWallet.mjs";
const d = d => async ({
  address: a,
  chainType: s
}) => {
  let {
    user: l
  } = await d.user.get();
  if (!l) {
    throw new e({
      code: "delegated_actions_before_logged_in",
      error: "Must be logged in to delegate wallets"
    });
  }
  if (s !== "solana" && s !== "ethereum") {
    throw new e({
      code: "unsupported_chain_type",
      error: "Only Solana and Ethereum embedded wallets are supported for delegation and revocation."
    });
  }
  let o = t(l).find(e => e.chain_type === s && e.address === a);
  if (!o) {
    throw new e({
      code: "delegated_actions_wallet_not_found",
      error: "Address to delegate is not associated with current user."
    });
  }
  if (o.delegated) {
    return {
      user: l
    };
  }
  let i = r(o, l);
  if (!i) {
    throw new e({
      code: "delegated_actions_wallet_not_found",
      error: "Address to delegate is not associated with current user."
    });
  }
  await d.embeddedWallet.delegateWallets({
    rootWallet: {
      address: i.address,
      chainType: i.chain_type,
      imported: i.imported
    },
    delegatedWallets: [{
      address: o.address,
      chainType: o.chain_type,
      walletIndex: o.wallet_index
    }]
  });
  let {
    user: n
  } = await d.user.get();
  return {
    user: n
  };
};
export { d as delegateWallet };
