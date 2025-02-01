import { getImportedPrivySolanaWallet as e, getImportedPrivyEthereumWallet as t } from "../client/user.mjs";
import { PrivyErrorCode as r, PrivyClientError as i } from "../errors.mjs";
import "viem/utils";
import "ofetch";
const o = async ({
  emitPrivyEvent: o,
  getAccessToken: a,
  initializeWalletProxy: n,
  refreshUser: l,
  user: c
}, {
  privateKey: s,
  chainType: E
}) => {
  if (!c) {
    o("linkAccount", "onError", r.MUST_BE_AUTHENTICATED, {
      linkMethod: "siwe"
    });
    throw new i("User must be authenticated before linking an account.");
  }
  let [m, u] = await Promise.all([a(), n(15000)]);
  if (!u || !m) {
    o("linkAccount", "onError", r.MUST_BE_AUTHENTICATED, {
      linkMethod: "siwe"
    });
    throw new i("User must be authenticated before linking an account.");
  }
  await u.importWallet({
    privateKey: s,
    accessToken: m,
    chainType: E
  });
  let T = await l();
  let w = E === "solana" ? e(T) : t(T);
  if (!w) {
    o("createWallet", "onError", r.UNKNOWN_EMBEDDED_WALLET_ERROR);
    throw Error("Failed to import wallet");
  }
  o("createWallet", "onSuccess", {
    wallet: w
  });
  return w;
};
export { o as importWallet };
