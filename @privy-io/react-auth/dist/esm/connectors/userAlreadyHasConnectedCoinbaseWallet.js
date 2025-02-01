import { isHex as t, getAddress as e } from "viem";
const l = l => {
  let r = localStorage.getItem("-walletlink:https://www.walletlink.org:Addresses")?.split(" ").filter(e => t(e, {
    strict: true
  })).map(t => e(t));
  return !!r?.length && !!l?.linkedAccounts.filter(t => t.type == "wallet" && r.includes(t.address)).length;
};
export { l as userAlreadyHasConnectedCoinbaseWallet };
