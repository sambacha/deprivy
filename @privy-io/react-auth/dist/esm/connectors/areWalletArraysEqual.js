import { isBaseConnectedEthereumWallet as e } from "./isBaseConnectedEthereumWallet.mjs";
function n(n, t) {
  if (n.length !== t.length) {
    return false;
  }
  for (let l = 0; l < n.length; l++) {
    let r = n[l];
    let c = t[l];
    if (r?.address !== c?.address || r && c && e(r) && e(c) && r?.chainId !== c?.chainId || r?.connectorType !== c?.connectorType || r?.connectedAt !== c?.connectedAt || r?.walletClientType !== c?.walletClientType || r?.isConnected !== c?.isConnected || r?.linked !== c?.linked) {
      return false;
    }
  }
  return true;
}
export { n as areWalletArraysEqual };
