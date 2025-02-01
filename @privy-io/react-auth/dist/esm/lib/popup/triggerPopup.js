const e = () => window.open(undefined, undefined, n({
  w: 440,
  h: 680
}));
let n = ({
  w: e,
  h: n
}) => {
  let i = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  let t = window.screenTop !== undefined ? window.screenTop : window.screenY;
  let o = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  let d = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
  return `toolbar=0,location=0,menubar=0,height=${n},width=${e},popup=1,left=${(o - e) / 2 / (o / window.screen.availWidth) + i},top=${(d - n) / 2 / (d / window.screen.availHeight) + t}`;
};
export { e as triggerPopup };
