import { usePrivyContext as r } from "./privy-context.mjs";
import "react";
import "./index.mjs";
function e() {
  let {
    getFarcasterSignerPublicKey: e,
    signFarcasterMessage: t,
    requestFarcasterSignerFromWarpcast: a
  } = r();
  return {
    getFarcasterSignerPublicKey: e,
    signFarcasterMessage: t,
    requestFarcasterSignerFromWarpcast: a
  };
}
export { e as useFarcasterSigner };
