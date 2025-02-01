import { useCallback as t } from "react";
import { PrivyErrorCode as e } from "../errors.mjs";
import { useCaptcha as r, CaptchaError as s } from "./captcha-context.mjs";
import { usePrivyInternal as o } from "./internal-context.mjs";
import "ofetch";
import "react/jsx-runtime";
import "./index.mjs";
import "../utils/index.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../utils/eth/getPublicClient.mjs";
import "viem";
const i = i => {
  let a = r();
  let {
    initLoginWithPasskey: n,
    loginWithPasskey: c,
    passkeyAuthState: m,
    setPasskeyAuthState: l
  } = o();
  return {
    loginWithPasskey: t(async () => {
      try {
        let t;
        if (a.enabled && a.status === "error") {
          throw new s(a.error, null, e.CAPTCHA_FAILURE);
        }
        if (a.enabled && a.status !== "success") {
          a.execute();
          t = await a.waitForResult();
        }
        await n({
          captchaToken: t,
          withPrivyUi: false
        });
        let {
          user: r,
          isNewUser: o,
          wasAlreadyAuthenticated: m,
          loginAccount: l
        } = await c();
        i?.onComplete?.({
          user: r,
          isNewUser: o,
          wasAlreadyAuthenticated: m,
          loginMethod: "passkey",
          loginAccount: l
        });
      } catch (t) {
        l({
          status: "error",
          error: t
        });
        i?.onError?.(t.privyErrorCode || e.UNKNOWN_AUTH_ERROR);
        throw t;
      }
    }, [c, a.status]),
    state: m
  };
};
export { i as useLoginWithPasskey };
