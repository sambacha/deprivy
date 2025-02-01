class e {
  async get(e) {
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
export { e as LocalStorage };
