import { PrivyClientError as t } from "../../Error.mjs";
const e = ({
  client: e,
  openAuthSession: r
}) => async ({
  providerAppId: i,
  redirectUrl: o
}) => {
  let a = `privy:${i}`;
  let {
    url: n
  } = await e.auth.oauth.generateURL(a, o);
  let u = await r(n);
  let h = u.privy_oauth_state;
  let s = u.privy_oauth_code;
  if (!h || !s) {
    throw new t({
      code: "login_with_oauth_returned_with_invalid_credentials",
      error: "Auth session oauth returned invalid credentials"
    });
  }
  let p = await e.auth.oauth.loginWithCode(s, h, a);
  let d = p.oauth_tokens;
  if (d) {
    await e.crossApp.updateOnCrossAppAuthentication(i, d);
  }
  return p;
};
export { e as loginWithCrossAppAuth };
