import{GuestAuthenticate as e}from"@privy-io/public-api";import{maybeCreateWalletOnLogin as t}from"./maybeCreateWalletOnLogin.mjs";import"../../utils/getUserEmbeddedEthereumWallet.mjs";import"../../utils/getAllUserEmbeddedEthereumWallets.mjs";import"../../utils/getUserEmbeddedSolanaWallet.mjs";import"../../utils/getAllUserEmbeddedSolanaWallets.mjs";import"../../utils/shouldCreateEmbeddedEthWallet.mjs";import"../../utils/shouldCreateEmbeddedSolWallet.mjs";class s{async create(s){let l=await this._privyInternal.session.getOrCreateGuestCredential(),r=await this._privyInternal.fetch(e,{body:{guest_credential:l}});await this._privyInternal.session.updateWithTokensResponse(r);let a=await t(this._embedded,r,s?.embedded);return this._privyInternal.callbacks?.setUser?.(a.user),a}constructor(e,t){this._privyInternal=e,this._embedded=t}}export{s as default};
