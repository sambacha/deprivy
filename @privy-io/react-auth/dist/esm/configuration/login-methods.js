const r = ({
  input: r
}) => {
  if (!r || !r.primary[0]) {
    return;
  }
  let o = [r.primary[0]];
  let e = [];
  if (r.primary.length > 4) {
    console.warn("You should not specify greater than 4 login methods in `loginMethodsAndOrder.primary`");
  }
  for (let e of r.primary.slice(1)) {
    if (o.includes(e)) {
      console.warn(`Duplicated login method: ${e}`);
    } else {
      o.push(e);
    }
  }
  for (let n of r.overflow ?? []) {
    if (o.includes(n) || e.includes(n)) {
      console.warn(`Duplicated login method: ${n}`);
    } else {
      e.push(n);
    }
  }
  return {
    primary: o,
    overflow: e
  };
};
export { r as toCustomLoginMethodConfig };
