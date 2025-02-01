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
class t {
  get(e) {
    let t = localStorage.getItem(e);
    if (t === null) {
      return undefined;
    } else {
      return JSON.parse(t);
    }
  }
  put(e, t) {
    if (t !== undefined) {
      localStorage.setItem(e, JSON.stringify(t));
    } else {
      this.del(e);
    }
  }
  del(e) {
    localStorage.removeItem(e);
  }
  getKeys() {
    return Object.entries(localStorage).map(([e]) => e);
  }
}
function r() {
  try {
    let e = "privy:__session_storage__test";
    let r = new t();
    r.put(e, "blobby");
    r.del(e);
    return true;
  } catch (e) {
    return false;
  }
}
var s = typeof window != "undefined" && window.localStorage ? new t() : new e();
export { e as InMemoryCache, t as LocalStorage, s as default, r as isLocalStorageAccessible };
