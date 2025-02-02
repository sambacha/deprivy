import{RunEffectOnce as e}from"../effect.mjs";import{PrivyClientError as t,formatApiError as i}from"../errors.mjs";import{prepareSiweMessageWithNonce as n}from"../lib/siwe.mjs";import"ofetch";class s{get meta(){return{connectorType:this.wallet.connectorType,walletClientType:this.wallet.walletClientType,chainId:this.wallet.chainId,address:this.wallet.address,disableSignup:this._meta.disableSignup}}async authenticate(){if(!this.client)throw new t("SiweFlow has no client instance");try{let{message:e,signature:t}=await this.sign();return await this.client.authenticateWithSiweInternal({message:e,signature:t,chainId:this.wallet.chainId,walletClientType:this.wallet.walletClientType,connectorType:this.wallet.connectorType,mode:this.meta.disableSignup?"no-signup":"login-or-sign-up"})}catch(e){throw i(e)}}async link(){if(!this.client)throw new t("SiweFlow has no client instance");try{let{message:e,signature:t}=await this.sign();return await this.client.linkWithSiweInternal({message:e,signature:t,chainId:this.wallet.chainId,walletClientType:this.wallet.walletClientType,connectorType:this.wallet.connectorType})}catch(e){throw i(e)}}async sign(){if(!this.client)throw new t("SiweFlow has no client instance");if(await this.buildMessage(),!this.preparedMessage)throw new t("Could not prepare SIWE message");let e=await this.wallet.sign(this.preparedMessage);return{message:this.preparedMessage,signature:e}}async _getNonceOnce(){if(!this.client)throw new t("SiweFlow has no client instance");return await this.client.generateSiweNonce({address:this.wallet.address,captchaToken:this.captchaToken})}async buildMessage(){if(!this.client)throw new t("SiweFlow has no client instance");let e=this.wallet.address,i=this.wallet.chainId.replace("eip155:","");return this.nonce||(this.nonce=await this.getNonceOnce.execute()),this.preparedMessage=n({address:e,chainId:i,nonce:this.nonce}),this.preparedMessage}constructor(t,i,n,s=!1){this._meta={disableSignup:!1},this.getNonceOnce=new e(this._getNonceOnce.bind(this)),this.wallet=t,this.captchaToken=n,this.client=i,this._meta.disableSignup=s}}export{s as SiweFlow};
