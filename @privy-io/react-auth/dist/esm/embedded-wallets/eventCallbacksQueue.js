class e {
  enqueue(e, a) {
    this.callbacks[e] = a;
  }
  dequeue(e, a) {
    let r = this.callbacks[a];
    if (!r) {
      throw Error(`cannot dequeue ${e} event: no event found for id ${a}`);
    }
    delete this.callbacks[a];
    switch (e) {
      case "privy:iframe:ready":
      case "privy:wallets:create":
      case "privy:wallets:add":
      case "privy:wallets:import":
      case "privy:wallets:set-recovery":
      case "privy:wallets:connect":
      case "privy:wallets:recover":
      case "privy:wallets:rpc":
      case "privy:wallet:create":
      case "privy:mfa:verify":
      case "privy:mfa:init-enrollment":
      case "privy:mfa:submit-enrollment":
      case "privy:mfa:unenroll":
      case "privy:mfa:clear":
      case "privy:farcaster:init-signer":
      case "privy:farcaster:sign":
      case "privy:solana-wallet:create":
      case "privy:delegated-actions:consent":
        return r;
      default:
        throw Error(`invalid wallet event type ${e}`);
    }
  }
  constructor() {
    this.callbacks = {};
  }
}
export { e as EventCallbacksQueue };
