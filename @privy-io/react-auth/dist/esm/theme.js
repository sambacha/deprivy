import t from "tinycolor2";
let r = "#FFFFFF";
function n(t) {
  if (t < 0.8 && t > 0.2) {
    console.warn("Background color is not light or dark enough, which could lead to accessibility issues.");
  }
  if (t > 0.5) {
    return "light";
  } else {
    return "dark";
  }
}
function o(r, n) {
  let o = Math.max(0, Math.min(1, r.toHsl().l + n));
  return t({
    ...r.toHsl(),
    l: o
  });
}
function i({
  backgroundTheme: i,
  accentHex: e
}) {
  let g;
  switch (i) {
    case "light":
      g = r;
      break;
    case "dark":
      g = "#1E1E1D";
      break;
    default:
      g = i;
  }
  let l = t(g);
  let s = t(e);
  let c = t("#51BA81");
  let a = t("#FFB74D");
  let u = t("#EC6351");
  let h = n(l.getLuminance());
  let H = o(l, h === "light" ? -0.04 : 0.11);
  let S = o(l, h === "light" ? -0.08 : 0.16);
  let d = o(l, h === "light" ? -0.88 : 0.87);
  let k = o(l, h === "light" ? -0.7 : 0.75);
  let f = o(l, h === "light" ? -0.43 : 0.45).desaturate(h === "light" ? 60 : 20);
  let m = o(l, h === "light" ? -0.08 : 0.25).desaturate(h === "light" ? 60 : 20);
  let F = o(s, 0.15);
  let b = o(s, 0.25);
  let L = o(s, -0.06);
  let w = o(s, -0.6);
  let D = o(u, 0.3);
  let x = o(a, 0.3);
  let B = t(s.getLuminance() > 0.5 ? "#040217" : r);
  let E = o(c, -0.16);
  let p = o(c, 0.4);
  return {
    colorScheme: h,
    background: l.toHslString(),
    background2: H.toHslString(),
    background3: S.toHslString(),
    foreground: d.toHslString(),
    foreground2: k.toHslString(),
    foreground3: f.toHslString(),
    foreground4: m.toHslString(),
    accent: s.toHslString(),
    accentLight: F.toHslString(),
    accentLightest: b.toHslString(),
    accentDark: L.toHslString(),
    accentDarkest: w.toHslString(),
    foregroundAccent: B.toHslString(),
    success: c.toHslString(),
    successDark: E.toHslString(),
    successLight: p.toHslString(),
    error: u.toHslString(),
    errorLight: D.toHslString(),
    warn: a.toHslString(),
    warnLight: x.toHslString()
  };
}
export { i as generatePalette, n as getColorScheme };
