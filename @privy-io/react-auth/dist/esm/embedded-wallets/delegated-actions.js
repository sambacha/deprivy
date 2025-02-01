import { getImportedPrivyEthereumWallet as e, getPrivyEthereumWallet as t, getImportedPrivySolanaWallet as r, getPrivySolanaWallet as d } from "../client/user.mjs";
import { PrivyClientError as s } from "../errors.mjs";
import "viem/utils";
import "ofetch";
const i = ({
  address: e,
  user: t
}) => {
  let r = t.linkedAccounts.find(t => t.type === "wallet" && t.walletClientType === "privy" && t.address === e);
  if (!r) {
    throw new s("Address to delegate is not associated with current user.");
  }
  return {
    address: r.address,
    chainType: r.chainType,
    walletIndex: r.walletIndex ?? 0
  };
};
const a = ({
  address: i,
  user: a
}) => {
  let n;
  let l = a.linkedAccounts.find(e => e.type === "wallet" && e.walletClientType === "privy" && e.address === i);
  if (!l) {
    throw new s("Address to delegate is not associated with current user.");
  }
  if (!(n = l.chainType === "ethereum" ? l.imported ? e(a) : t(a) : l.imported ? r(a) : d(a))) {
    throw new s("Unable to determine root address for delegated address.");
  }
  return {
    address: n.address,
    chainType: n.chainType,
    imported: n.imported
  };
};
const n = e => e.linkedAccounts.filter(e => e.type === "wallet" && e.walletClientType === "privy" && e.delegated);
const l = ({
  address: e,
  chainType: t,
  user: r
}) => !!n(r).find(r => r.address === e && r.chainType === t);
export { i as getDelegatedWalletsData, n as getDelegatedWalletsForUser, a as getRootWalletDataForDelegation, l as isWalletDelegated };
