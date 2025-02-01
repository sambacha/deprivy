const e = e => ({
  rpId: e.rp_id,
  challenge: e.challenge,
  allowCredentials: e.allow_credentials?.map(e => ({
    id: e.id,
    type: e.type,
    transports: e.transports
  })) || [],
  timeout: e.timeout,
  extensions: {
    appid: e.extensions?.app_id,
    credProps: e.extensions?.cred_props,
    hmacCreateSecret: e.extensions?.hmac_create_secret
  },
  userVerification: e.user_verification
});
export { e as transformOptionsToCamelCase };
