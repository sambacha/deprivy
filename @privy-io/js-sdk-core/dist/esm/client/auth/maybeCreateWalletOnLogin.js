import { getUserEmbeddedEthereumWallet as e } from "../../utils/getUserEmbeddedEthereumWallet.mjs";
import { getUserEmbeddedSolanaWallet as t } from "../../utils/getUserEmbeddedSolanaWallet.mjs";
import { shouldCreateEmbeddedEthWallet as r } from "../../utils/shouldCreateEmbeddedEthWallet.mjs";
import { shouldCreateEmbeddedSolWallet as s } from "../../utils/shouldCreateEmbeddedSolWallet.mjs";
import "../../utils/getAllUserEmbeddedEthereumWallets.mjs";
import "../../utils/getAllUserEmbeddedSolanaWallets.mjs";
const o = async (o, a, l) => {
  let u = r(a.user, l?.ethereum?.createOnLogin ?? "off");
  let i = s(a.user, l?.solana?.createOnLogin ?? "off");
  if (u && i) {
    let t = await o.create({
      recoveryMethod: "privy",
      skipCallbacks: true
    });
    return {
      ...(await o.createSolana({
        ethereumAccount: e(t.user) ?? undefined
      })),
      is_new_user: a.is_new_user,
      oauth_tokens: a.oauth_tokens
    };
  }
  if (u) {
    return {
      ...(await o.create({
        recoveryMethod: "privy",
        solanaAccount: t(a.user) ?? undefined
      })),
      is_new_user: a.is_new_user,
      oauth_tokens: a.oauth_tokens
    };
  } else if (i) {
    return {
      ...(await o.createSolana({
        ethereumAccount: e(a.user) ?? undefined
      })),
      is_new_user: a.is_new_user,
      oauth_tokens: a.oauth_tokens
    };
  } else {
    return a;
  }
};
export { o as maybeCreateWalletOnLogin };
