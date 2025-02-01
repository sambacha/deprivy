import { PrivyIframeError as e } from "./errors.mjs";
import "./types.mjs";
async function r(r, t, i, a, n, o = false) {
  let c = o;
  let f = async f => {
    if (c && t && t.length > 0) {
      if (f === (o ? 0 : 1)) {
        n("configureMfa", "onMfaRequired", {
          mfaMethods: t
        });
      } else {
        a.current?.reject(new e("missing_or_invalid_mfa", "MFA verification failed, retry."));
      }
      let c = await new Promise((r, t) => {
        i.current = {
          resolve: r,
          reject: t
        };
        setTimeout(() => {
          let r = new e("mfa_timeout", "Timed out waiting for MFA code");
          a.current?.reject(r);
          t(r);
        }, 300000);
      });
      return await r(c);
    }
    return await r();
  };
  let m = null;
  for (let e = 0; e < 4; e++) {
    try {
      m = await f(e);
      a.current?.resolve(undefined);
      break;
    } catch (e) {
      if (e.type !== "missing_or_invalid_mfa") {
        a.current?.resolve(undefined);
        throw e;
      }
      c = true;
    }
  }
  if (m === null) {
    let r = new e("mfa_verification_max_attempts_reached", "Max MFA verification attempts reached");
    a.current?.reject(r);
    throw r;
  }
  return m;
}
export { r as invokeWithMfa };
