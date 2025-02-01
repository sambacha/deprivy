import { useRef as e, useCallback as r } from "react";
import { getPrivySolanaWallet as t, getPrivyEthereumWallet as o } from "../client/user.mjs";
import { WALLET_PROXY_TIMEOUT as a } from "../constants.mjs";
import { usePrivyInternal as s } from "./internal-context.mjs";
import { usePrivyContext as i } from "./privy-context.mjs";
import "viem/utils";
import "./index.mjs";
function d() {
  let {
    getAccessToken: d
  } = i();
  let {
    refreshUser: l,
    createAnalyticsEvent: n,
    initializeWalletProxy: c
  } = s();
  let m = e(false);
  return {
    createWallet: r(async ({
      user: e,
      recoveryPassword: r
    }) => {
      let s = await d();
      if (!s) {
        n({
          eventName: "embedded_wallet_creation_failed",
          payload: {
            error: "Missing access token for user."
          }
        });
        throw Error("An error has occured, please login again.");
      }
      try {
        n({
          eventName: "embedded_wallet_creation_started"
        });
        let i = await c(a);
        if (!i) {
          throw Error("walletProxy does not exist.");
        }
        let d = new Promise((e, r) => {
          setTimeout(() => {
            r(Error("walletProxy.create timed out."));
          }, 20000);
        });
        let w = t(e);
        if (!(await Promise.race([i.create({
          accessToken: s,
          recoveryPassword: r,
          recoveryMethod: r ? "user-passcode" : undefined,
          solanaAddress: w?.address
        }), d]))) {
          throw Error("walletProxy.create did not send a response.");
        }
        let f = await l();
        if (!f) {
          throw Error("Failed to refresh user.");
        }
        let p = o(f);
        if (!p) {
          throw Error("Updated user is missing embedded wallet.");
        }
        n({
          eventName: "embedded_wallet_creation_completed",
          payload: {
            walletAddress: p.address
          }
        });
        m.current = true;
        return p;
      } catch (e) {
        if (m.current) {
          return;
        }
        n({
          eventName: "embedded_wallet_creation_failed",
          payload: {
            error: e.toString()
          }
        });
        console.warn(e);
        throw e;
      }
    }, [])
  };
}
export { d as useCreateWallet };
