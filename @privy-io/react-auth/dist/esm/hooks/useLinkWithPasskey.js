import { useCallback as t } from "react";
import { PrivyErrorCode as e } from "../errors.mjs";
import { usePrivyInternal as r } from "./internal-context.mjs";
import "ofetch";
import "./index.mjs";
const s = s => {
  let {
    initLinkWithPasskey: o,
    linkWithPasskey: i,
    passkeyAuthState: a,
    setPasskeyAuthState: n
  } = r();
  return {
    linkWithPasskey: t(async () => {
      try {
        await o();
        let t = await i();
        if (!t) {
          throw Error("Error, user not found");
        }
        let e = t.linkedAccounts.filter(t => t.type === "passkey").sort((t, e) => e.latestVerifiedAt.getTime() - t.latestVerifiedAt.getTime())[0];
        s?.onSuccess?.({
          user: t,
          linkMethod: "passkey",
          linkedAccount: e
        });
      } catch (t) {
        n({
          status: "error",
          error: t
        });
        s?.onError?.(t.privyErrorCode || e.UNKNOWN_AUTH_ERROR, {
          linkMethod: "passkey"
        });
        throw t;
      }
    }, [i]),
    state: a
  };
};
export { s as useLinkWithPasskey };
