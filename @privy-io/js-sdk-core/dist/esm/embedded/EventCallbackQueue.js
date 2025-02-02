class e {
  enqueue(e, a) {
    this.callbacks[e] = a;
  }
  dequeue(e, a) {
    let l = this.callbacks[a];
    if (!l) {
      throw Error(`cannot dequeue ${e} event: no event found for id ${a}`);
    }
    delete this.callbacks[a];
    switch (e) {
      case "privy:iframe:ready":
      case "privy:wallets:create":
      case "privy:wallets:add":
      case "privy:wallets:set-recovery":
      case "privy:wallets:connect":
      case "privy:wallets:recover":
      case "privy:wallets:rpc":
      case "privy:wallet:create":
      case "privy:wallet:connect":
      case "privy:wallet:recover":
      case "privy:wallet:rpc":
      case "privy:solana-wallet:create":
      case "privy:solana-wallet:create-additional":
      case "privy:solana-wallet:connect":
      case "privy:solana-wallet:recover":
      case "privy:solana-wallet:rpc":
      case "privy:delegated-actions:consent":
      case "privy:mfa:verify":
      case "privy:mfa:init-enrollment":
      case "privy:mfa:submit-enrollment":
      case "privy:mfa:unenroll":
      case "privy:mfa:clear":
        return l;
      default:
        throw Error(`invalid wallet event type ${e}`);
    }
  }
  constructor() {
    this.callbacks = {};
  }
}
export { e as EventCallbacksQueue };
