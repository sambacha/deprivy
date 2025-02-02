const e = e => ({
  id: e.id,
  raw_id: e.rawId,
  response: {
    client_data_json: e.response.clientDataJSON,
    authenticator_data: e.response.authenticatorData,
    signature: e.response.signature,
    user_handle: e.response.userHandle
  },
  authenticator_attachment: e.authenticatorAttachment,
  client_extension_results: {
    app_id: e.clientExtensionResults.appid,
    cred_props: e.clientExtensionResults.credProps,
    hmac_create_secret: e.clientExtensionResults.hmacCreateSecret
  },
  type: e.type
});
export { e as transformResponseToSnakeCase };
