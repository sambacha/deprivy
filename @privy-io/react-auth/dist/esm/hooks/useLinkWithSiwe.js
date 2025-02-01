import { useCallback as e } from "react";
import { PrivyErrorCode as t } from "../errors.mjs";
import { useCaptcha as r, CaptchaError as i } from "./captcha-context.mjs";
import { usePrivyInternal as o } from "./internal-context.mjs";
import "ofetch";
import "react/jsx-runtime";
import "./index.mjs";
import "../utils/index.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../utils/eth/getPublicClient.mjs";
import "viem";
const s = s => {
  let n = r();
  let {
    siweState: a,
    setSiweState: c,
    linkWithSiwe: l,
    generateSiweMessage: m
  } = o();
  return {
    generateSiweMessage: e(async ({
      address: e,
      chainId: r
    }) => {
      try {
        if (!e || !r) {
          throw Error("wallet address and chainId required to generate nonce");
        }
        return await m({
          address: e,
          chainId: r
        }).then(e => e);
      } catch (e) {
        c({
          status: "error",
          error: e
        });
        s?.onError?.(e.privyErrorCode || t.UNKNOWN_AUTH_ERROR, {
          linkMethod: "siwe"
        });
        throw e;
      }
    }, [m]),
    linkWithSiwe: e(async ({
      signature: e,
      message: r,
      chainId: o,
      walletClientType: a,
      connectorType: m
    }) => {
      try {
        if (n.enabled && n.status !== "success") {
          throw new i(n.error, null, t.CAPTCHA_FAILURE);
        }
        let {
          user: c,
          linkedAccount: d
        } = await l({
          message: r,
          signature: e,
          chainId: o,
          walletClientType: a,
          connectorType: m
        });
        if (d) {
          s?.onSuccess?.({
            user: c,
            linkMethod: "siwe",
            linkedAccount: d
          });
        }
      } catch (e) {
        c({
          status: "error",
          error: e
        });
        s?.onError?.(e.privyErrorCode || t.UNKNOWN_AUTH_ERROR, {
          linkMethod: "siwe"
        });
        throw e;
      }
    }, [l, n.status]),
    state: a
  };
};
export { s as useLinkWithSiwe };
