import { base64url as r } from "jose";
import { CODE_VERIFIER_KEY as t } from "../constants.mjs";
import { randomBytes as o, createHashBuffer as n } from "../crypto.mjs";
import { PrivyClientError as e } from "../errors.mjs";
import i from "../storage.mjs";
import "ofetch";
function m() {
  return r.encode(o(36));
}
function f() {
  return m();
}
async function c(t, o = "S256") {
  if (o != "S256") {
    return t;
  }
  {
    let o = await n(t);
    return r.encode(o);
  }
}
function s() {
  let r = i.get(t);
  if (!r) {
    throw new e("Authentication error.");
  }
  return r;
}
export { m as createCodeVerifier, f as createStateCode, c as deriveCodeChallengeFromCodeVerifier, s as getCodeVerifier };
