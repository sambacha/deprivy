function e(e) {
  let a = e.toLowerCase();
  return !!window?.webkit?.messageHandlers?.ReactNativeWebView || !!window?.ReactNativeWebView || ["fbav", "fban", "instagram", "snapchat", "linkedinapp"].some(e => a.includes(e));
}
export { e as default };
