import { useCallback as t } from "react";
import { FarcasterFramesFlow as e } from "../auth-flows/frame.mjs";
import { PrivyClientError as r } from "../errors.mjs";
import { parseFidFromMessage as i } from "../lib/farcaster.mjs";
import { usePrivyInternal as a } from "./internal-context.mjs";
import "../paths.mjs";
import "ofetch";
import "./index.mjs";
const s = () => {
  let {
    client: s,
    setAuthenticated: o,
    setUser: n
  } = a();
  return {
    initLoginToFrame: t(async () => {
      let t = new e();
      if (!s) {
        throw new r("Must initialize Privy client first.");
      }
      s.startAuthFlow(t);
      return await t.init();
    }, [s]),
    loginToFrame: t(async ({
      message: t,
      signature: a
    }) => {
      if (!s) {
        throw new r("Must initialize Privy client first.");
      }
      if (!(s.authFlow instanceof e)) {
        throw new r("Must initialize Farcaster frame flow first.");
      }
      let m = i(t);
      if (!m) {
        throw new r("Invalid message format; could not parse Farcaster ID.");
      }
      s.authFlow.setAuthData({
        message: t,
        signature: a,
        fid: m
      });
      let {
        user: f
      } = await s.authenticate();
      if (f) {
        n(f);
        o(true);
      }
      return f;
    }, [s, n, o])
  };
};
export { s as useLoginToFrame };
