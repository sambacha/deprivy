import { PrivyIframeError as e } from "./errors.mjs";
import "./types.mjs";
async function r(r, t, i, a, n = false, o, c) {
  let m = n;
  let s = async o => {
    if (m) {
      if (o === (n ? 0 : 1)) {
        a();
      } else {
        i.current?.reject(new e("missing_or_invalid_mfa", "MFA verification failed, retry."));
      }
      let m = await new Promise((r, a) => {
        t.current = {
          resolve: r,
          reject: a
        };
        setTimeout(() => {
          let r = new e("mfa_timeout", "Timed out waiting for MFA code");
          i.current?.reject(r);
          a(r);
        }, c);
      });
      return await r(m);
    }
    return await r();
  };
  let f = null;
  for (let e = 0; e < o; e++) {
    try {
      f = await s(e);
      i.current?.resolve(undefined);
      break;
    } catch (e) {
      if (e.type !== "missing_or_invalid_mfa") {
        i.current?.resolve(undefined);
        throw e;
      }
      m = true;
    }
  }
  if (f === null) {
    let r = new e("mfa_verification_max_attempts_reached", "Max MFA verification attempts reached");
    i.current?.reject(r);
    throw r;
  }
  return f;
}
export { r as withMfa };
