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
  let s = await r(n);
  let u = s.privy_oauth_state;
  let h = s.privy_oauth_code;
  if (!u || !h) {
    throw new t({
      code: "login_with_oauth_returned_with_invalid_credentials",
      error: "Auth session oauth returned invalid credentials"
    });
  }
  let d = e.addOAuthTokensListener(t => {
    e.crossApp.updateOnCrossAppAuthentication(i, t);
  });
  let p = await e.auth.oauth.linkWithCode(h, u, a);
  d.unsubscribe();
  return p;
};
export { e as linkWithCrossAppAuth };
