var t = t => {
  let e = new AbortController();
  setTimeout(() => e.abort(), t);
  return e.signal;
};
export { t as default };
