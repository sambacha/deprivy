function e(e) {
  let r = new RegExp(RegExp("^eip155:(?<chainId>\\d+)$", "gm"));
  let t = r.exec(e)?.groups?.chainId;
  if (t) {
    return parseInt(t);
  }
  throw Error("Chain ID not compatible with CAIP-2 format.");
}
export { e as extractChainIdFromCAIP2 };
