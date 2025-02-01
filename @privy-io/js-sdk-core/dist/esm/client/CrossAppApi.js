class e {
  async updateOnCrossAppAuthentication(s, t) {
    let o = t.access_token;
    let a = e.providerAccessTokenStorageKey(s);
    await this._storage.put(a, o);
  }
  constructor(e) {
    this._storage = e;
  }
}
e.providerAccessTokenStorageKey = e => `privy:cross-app:${e}`;
export { e as default };
