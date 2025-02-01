import { getLegacyInjectedName as e } from "./get-legacy-injected-providers.mjs";
const r = () => {
  let e = window;
  if (!e.ethereum) {
    return false;
  }
  if (t(window.ethereum, false)) {
    return true;
  }
  if (e.ethereum.providers) {
    for (let r of e.ethereum.providers) {
      if (t(r, false)) {
        return true;
      }
    }
  }
  return !!window.ethereum.isZerion;
};
const t = (r, i) => {
  if (!r.isMetaMask) {
    return false;
  }
  if (r.isMetaMask && !i) {
    return true;
  }
  if (r.isBraveWallet && !r._events && !r._state || e(r) !== "MetaMask") {
    return false;
  }
  if (r.providers) {
    for (let e of r.providers) {
      if (!t(e)) {
        return false;
      }
    }
  }
  return true;
};
const i = () => {
  if ("phantom" in window) {
    let e = window;
    if (e?.phantom?.ethereum?.isPhantom && e?.phantom?.ethereum?.chainId || e?.phantom?.solana?.isPhantom) {
      return true;
    }
  }
  return false;
};
const n = () => {
  let e = window;
  if (!e.ethereum) {
    return false;
  }
  if (e.ethereum.isCoinbaseWallet) {
    return true;
  }
  if (e.ethereum.providers) {
    for (let r of e.ethereum.providers) {
      if (r && r.isCoinbaseWallet) {
        return true;
      }
    }
  }
  return false;
};
export { n as isCoinbaseWalletInstalled, t as isMetaMask, r as isMetamaskishInstalled, i as isPhantomInstalled };
