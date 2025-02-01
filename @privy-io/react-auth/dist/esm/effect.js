class s {
  execute(s) {
    if (this.promise === null) {
      this.promise = (async () => {
        try {
          return await this.fn(s);
        } finally {
          this.promise = null;
        }
      })();
    }
    return this.promise;
  }
  constructor(s) {
    this.promise = null;
    this.fn = s;
  }
}
export { s as RunEffectOnce };
