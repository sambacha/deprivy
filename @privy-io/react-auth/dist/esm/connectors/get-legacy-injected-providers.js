function e() {
  let e = window;
  let l = e.ethereum;
  if (!l) {
    return [];
  }
  let a = [];
  if (l.providers?.length) {
    for (let e of l.providers) {
      if (e) {
        a.push(e);
      }
    }
  }
  a.push(e.ethereum);
  return a;
}
const l = e => e.isApexWallet ? "Apex Wallet" : e.isAvalanche ? "Core Wallet" : e.isBackpack ? "Backpack" : e.isBifrost ? "Bifrost Wallet" : e.isBitKeep ? "BitKeep" : e.isBitski ? "Bitski" : e.isBlockWallet ? "BlockWallet" : e.isBraveWallet ? "Brave Wallet" : e.isClover ? "Clover" : e.isCoin98 ? "Coin98 Wallet" : e.isCoinbaseWallet ? "Coinbase Wallet" : e.isDawn ? "Dawn Wallet" : e.isDefiant ? "Defiant" : e.isDesig ? "Desig Wallet" : e.isEnkrypt ? "Enkrypt" : e.isExodus ? "Exodus" : e.isFordefi ? "Fordefi" : e.isFrame ? "Frame" : e.isFrontier ? "Frontier Wallet" : e.isGamestop ? "GameStop Wallet" : e.isHaqqWallet ? "HAQQ Wallet" : e.isHyperPay ? "HyperPay Wallet" : e.isImToken ? "ImToken" : e.isHaloWallet ? "Halo Wallet" : e.isKuCoinWallet ? "KuCoin Wallet" : e.isMathWallet ? "MathWallet" : e.isNovaWallet ? "Nova Wallet" : e.isOkxWallet || e.isOKExWallet ? "OKX Wallet" : e.isOneInchIOSWallet || e.isOneInchAndroidWallet ? "1inch Wallet" : e.isOneKey ? "OneKey Wallet" : e.isOpera ? "Opera" : e.isPhantom ? "Phantom" : e.isPortal ? "Ripio Portal" : e.isRabby ? "Rabby Wallet" : e.isRainbow ? "Rainbow" : e.isSafePal ? "SafePal Wallet" : e.isStatus ? "Status" : e.isSubWallet ? "SubWallet" : e.isTalisman ? "Talisman" : e.isTally || e.isTaho ? "Taho" : e.isTokenPocket ? "TokenPocket" : e.isTokenary ? "Tokenary" : e.isTrust || e.isTrustWallet ? "Trust Wallet" : e.isTTWallet ? "TTWallet" : e.isXDEFI ? "XDEFI Wallet" : e.isZeal ? "Zeal" : e.isZerion ? "Zerion" : e.isMetaMask ? "MetaMask" : undefined;
export { l as getLegacyInjectedName, e as getLegacyInjectedProviders };
