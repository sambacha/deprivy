async function e({
  url: e,
  popup: t,
  provider: a
}) {
  t.location = e;
  return new Promise((e, a) => {
    function o() {
      t?.close();
      window.removeEventListener("message", n);
    }
    function n(t) {
      if (t.data) {
        if (t.data.type === "PRIVY_OAUTH_RESPONSE" && t.data.stateCode && t.data.authorizationCode) {
          e(t.data);
          o();
        }
        if (t.origin === "https://cdn.apple-cloudkit.com" && t.data.ckSession) {
          e({
            type: "PRIVY_OAUTH_RESPONSE",
            ckWebAuthToken: t.data.ckSession
          });
          o();
        }
        if (t.data.type === "PRIVY_OAUTH_ERROR") {
          a(t.data.error);
          o();
        }
      }
    }
    window.addEventListener("message", n);
  });
}
export { e as popupOAuthFlow };
