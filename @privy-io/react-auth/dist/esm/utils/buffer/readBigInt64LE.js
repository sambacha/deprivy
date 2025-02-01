const t = (t, r = 0) => {
  let n = t[r];
  let e = t[r + 7];
  if (!n || !e) {
    throw Error(`Buffer offset out of range: first: ${n}, last: ${e}.`);
  }
  return (BigInt(t[r + 4] + t[r + 5] * 256 + t[r + 6] * 65536 + (e << 24)) << 32n) + BigInt(n + t[++r] * 256 + t[++r] * 65536 + t[++r] * 16777216);
};
function r(t, r = 0) {
  let n = 0n;
  for (let e = 0; e < 8; e++) {
    n |= BigInt(t[r + e]) << BigInt(e * 8);
  }
  return n;
}
export { t as readBigInt64LE, r as readBigInt64LEFromUint8Array };
