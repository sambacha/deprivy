import { useCallback as t } from "react";
import { PrivyErrorCode as r } from "../errors.mjs";
import { useCaptcha as e, CaptchaError as o } from "./captcha-context.mjs";
import { usePrivyInternal as s } from "./internal-context.mjs";
import "ofetch";
import "react/jsx-runtime";
import "./index.mjs";
import "../utils/index.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../utils/eth/getPublicClient.mjs";
import "viem";
const i = i => {
  let n = e();
  let {
    smsOtpState: a,
    setSmsOtpState: c,
    initLoginWithSms: m,
    loginWithCode: l
  } = s();
  return {
    sendCode: t(async ({
      phoneNumber: t,
      disableSignup: e
    }) => {
      try {
        let s;
        if (!t) {
          throw Error("SMS required to send OTP code");
        }
        if (n.enabled && n.status === "error") {
          throw new o(n.error, null, r.CAPTCHA_FAILURE);
        }
        if (n.enabled && n.status !== "success") {
          n.execute();
          s = await n.waitForResult();
        }
        return await m({
          phoneNumber: t,
          captchaToken: s,
          disableSignup: e,
          withPrivyUi: false
        });
      } catch (t) {
        c({
          status: "error",
          error: t
        });
        i?.onError?.(t.privyErrorCode || r.UNKNOWN_AUTH_ERROR);
        throw t;
      }
    }, [m]),
    loginWithCode: t(async ({
      code: t
    }) => {
      try {
        if (n.enabled && n.status !== "success") {
          throw new o(n.error, null, r.CAPTCHA_FAILURE);
        }
        let {
          user: e,
          isNewUser: s,
          wasAlreadyAuthenticated: a,
          linkedAccount: c
        } = await l(t);
        i?.onComplete?.({
          user: e,
          isNewUser: s,
          wasAlreadyAuthenticated: a,
          loginMethod: "sms",
          loginAccount: c
        });
      } catch (t) {
        c({
          status: "error",
          error: t
        });
        i?.onError?.(t.privyErrorCode || r.UNKNOWN_AUTH_ERROR);
        throw t;
      }
    }, [l, n.status]),
    state: a
  };
};
export { i as useLoginWithSms };
