const e = (e, c = true) => e.reduce((e, o) => ({
  ...e,
  [o]: c
}), {});
export { e as toObjectKeys };
