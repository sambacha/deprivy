class e {
  get(e) {
    return this._cache[e];
  }
  put(e, t) {
    if (t !== undefined) {
      this._cache[e] = t;
    } else {
      this.del(e);
    }
  }
  del(e) {
    delete this._cache[e];
  }
  getKeys() {
    return Object.keys(this._cache);
  }
  constructor() {
    this._cache = {};
  }
}
export { e as InMemoryCache };
