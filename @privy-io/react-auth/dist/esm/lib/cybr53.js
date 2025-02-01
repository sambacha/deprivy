const t = function (t, l = 0) {
  let h = l ^ 3735928559;
  let u = l ^ 1103547991;
  for (let l, a = 0; a < t.length; a++) {
    h = Math.imul(h ^ (l = t.charCodeAt(a)), 2654435761);
    u = Math.imul(u ^ l, 1597334677);
  }
  h = Math.imul(h ^ h >>> 16, 2246822507) ^ Math.imul(u ^ u >>> 13, 3266489909);
  return ((u = Math.imul(u ^ u >>> 16, 2246822507) ^ Math.imul(h ^ h >>> 13, 3266489909)) & 2097151) * 4294967296 + (h >>> 0);
};
export { t as cyrb53 };
