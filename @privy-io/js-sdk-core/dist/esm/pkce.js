import { base64url as e } from "jose";
const t = "privy:state_code";
const n = "privy:code_verifier";
async function r(e, t) {
  let n = new TextEncoder().encode(e);
  return new Uint8Array(await t("SHA-256", n));
}
function o(e) {
  return crypto.getRandomValues(new Uint8Array(e));
}
function i() {
  return e.encode(o(36));
}
function c() {
  return i();
}
async function u({
  codeVerifier: t,
  method: n = "S256",
  digest: o = crypto.subtle.digest.bind(crypto.subtle)
}) {
  if (n != "S256") {
    return t;
  }
  {
    let n = await r(t, o);
    return e.encode(n);
  }
}
export { n as CODE_VERIFIER_KEY, t as STATE_CODE_KEY, i as createCodeVerifier, r as createHashBuffer, c as createStateCode, u as deriveCodeChallengeFromCodeVerifier, o as randomBytes };
