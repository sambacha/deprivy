const r = () => {
  throw Error("You need to wrap your application with the <PrivyProvider> initialized with your app id.");
};
const i = r => () => {
  throw Error(r.trim());
};
export { r as notImplemented, i as notImplementedWithMessage };
