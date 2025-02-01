const t = t => {
  let r = t.match(/farcaster:\/\/fid\/(\d+)/);
  if (r && r[1]) {
    return parseInt(r[1], 10);
  } else {
    return null;
  }
};
export { t as parseFidFromMessage };
