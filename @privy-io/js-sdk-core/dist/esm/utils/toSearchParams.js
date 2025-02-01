function r(r) {
  let n = new URLSearchParams();
  for (let t in r) {
    if (r[t] != null) {
      n.append(t, String(r[t]));
    }
  }
  if (Array.from(n).length) {
    return "?" + n.toString();
  } else {
    return "";
  }
}
export { r as toSearchParams };
