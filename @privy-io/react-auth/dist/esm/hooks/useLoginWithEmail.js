import { useCallback as t } from "react";
import { PrivyErrorCode as r } from "../errors.mjs";
import { useCaptcha as e, CaptchaError as o } from "./captcha-context.mjs";
import { usePrivyInternal as i } from "./internal-context.mjs";
import "ofetch";
import "react/jsx-runtime";
import "./index.mjs";
import "../utils/index.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../utils/eth/getPublicClient.mjs";
import "viem";
const s = s => {
  let a = e();
  let {
    emailOtpState: n,
    setEmailOtpState: l,
    initLoginWithEmail: c,
    loginWithCode: m
  } = i();
  return {
    sendCode: t(async ({
      email: t,
      disableSignup: e
    }) => {
      try {
        let i;
        if (!t) {
          throw Error("Email required to send OTP code");
        }
        if (a.enabled && a.status === "error") {
          throw new o(a.error, null, r.CAPTCHA_FAILURE);
        }
        if (a.enabled && a.status !== "success") {
          a.execute();
          i = await a.waitForResult();
        }
        return await c({
          email: t,
          captchaToken: i,
          disableSignup: e,
          withPrivyUi: false
        });
      } catch (t) {
        l({
          status: "error",
          error: t
        });
        s?.onError?.(t.privyErrorCode || r.UNKNOWN_AUTH_ERROR);
        throw t;
      }
    }, [c]),
    loginWithCode: t(async ({
      code: t
    }) => {
      try {
        if (a.enabled && a.status === "error") {
          throw new o(a.error, null, r.CAPTCHA_FAILURE);
        }
        let {
          user: e,
          isNewUser: i,
          wasAlreadyAuthenticated: n,
          linkedAccount: l
        } = await m(t);
        s?.onComplete?.({
          user: e,
          isNewUser: i,
          wasAlreadyAuthenticated: n,
          loginMethod: "email",
          loginAccount: l
        });
      } catch (t) {
        l({
          status: "error",
          error: t
        });
        s?.onError?.(t.privyErrorCode || r.UNKNOWN_AUTH_ERROR);
        throw t;
      }
    }, [m, a.status]),
    state: n
  };
};
export { s as useLoginWithEmail };
