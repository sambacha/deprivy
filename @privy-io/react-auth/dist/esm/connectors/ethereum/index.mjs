import{getAddress as t}from"viem/utils";import{getPrivyWalletKey as e,DEFAULT_NETWORK as i}from"../../constants.mjs";import{PrivyConnectorError as n}from"../../errors.mjs";import r from"../../storage.mjs";import{formatChainIdToCAIP2 as s,invokeUntilSettled as o}from"../../utils/index.mjs";import{areWalletArraysEqual as a}from"../areWalletArraysEqual.mjs";import{WalletConnector as h}from"../base.mjs";import{getRpcTimeout as c}from"../getRpcTimeout.mjs";import"ofetch";import"../get-legacy-injected-providers.mjs";import"../is-wallet-installed.mjs";import"../../utils/eth/getPublicClient.mjs";import"viem";import"../isBaseConnectedEthereumWallet.mjs";import"eventemitter3";function l(t){return"ethereum"===t.chainType}class d extends h{buildConnectedWallet(e,i,r,o){let a=async()=>!!this.wallets.find((i=>t(i.address)===t(e)));return{type:"ethereum",address:t(e),chainId:i,meta:r,imported:o,switchChain:async r=>{let o,h;if(!a)throw new n("Wallet is not currently connected.");let c=this.wallets.find((i=>t(i.address)===t(e)))?.chainId;if(!c)throw new n("Unable to determine current chainId.");if("number"==typeof r?(o=`0x${r.toString(16)}`,h=r):(o=r,h=Number(r)),c===s(o))return;let l=this.chains.find((t=>t.id===h));if(!l)throw new n(`Unsupported chainId: ${r}`);let d=async()=>{await this.proxyProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:o}]})};try{return await d()}catch(t){if(((t,e)=>"coinbase_wallet"===e?t.message.includes("addEthereumChain"):4902===t.code||t.message?.includes("4902"))(t,this.walletClientType))return await this.proxyProvider.request({method:"wallet_addEthereumChain",params:[{chainId:o,chainName:l.name,nativeCurrency:l.nativeCurrency,rpcUrls:[l.rpcUrls.default?.http[0]??""],blockExplorerUrls:[l.blockExplorers?.default.url??""]}]}),d();if("rainbow"===this.walletClientType&&t.message?.includes("wallet_switchEthereumChain"))throw new n(`Rainbow does not support the chainId ${i}`);throw t}},connectedAt:Date.now(),walletClientType:this.walletClientType,connectorType:this.connectorType,isConnected:a,getEthereumProvider:async()=>{if(!await a())throw new n("Wallet is not currently connected.");return this.proxyProvider},sign:async t=>{if(!await a())throw new n("Wallet is not currently connected.");return await this.sign(t)},disconnect:()=>{this.disconnect()}}}async syncAccounts(n){let h,c=n;try{if(void 0===c){let t=await o((()=>this.proxyProvider.request({method:"eth_accounts"})),{maxAttempts:10,delayMs:500});console.debug(`eth_accounts for ${this.walletClientType}:`,t),Array.isArray(t)&&(c=t)}}catch(t){console.debug("Wallet did not respond to eth_accounts. Defaulting to prefetched accounts.",t)}if(!c||!Array.isArray(c)||c.length<=0||!c[0])return;let l=c[0],d=t(l),m=[];if("privy"===this.walletClientType){let t=r.get(e(d));this.chains.find((e=>e.id===Number(t)))||(r.del(e(d)),t=null),h=t||`0x${this.defaultChain.id.toString(16)}`;try{await this.proxyProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:h}]})}catch(t){console.warn(`Unable to switch embedded wallet to chain ID ${h} on initialization`)}}else try{let t=await o((()=>this.proxyProvider.request({method:"eth_chainId"})),{maxAttempts:10,delayMs:500});if(console.debug(`eth_chainId for ${this.walletClientType}:`,t),"string"==typeof t)h=t;else{if("number"!=typeof t)throw Error("Invalid chainId returned from provider");h=`0x${t.toString(16)}`}}catch(t){console.warn(`Failed to get chainId from provider, defaulting to ${i}`,t),h=i}let u=s(h);if(!m.find((e=>t(e.address)===d))){let e={name:this.walletBranding.name,icon:"string"==typeof this.walletBranding.icon?this.walletBranding.icon:void 0,id:this.walletBranding.id};m.push(this.buildConnectedWallet(t(l),u,e,"embedded_imported"===this.connectorType))}a(m,this.wallets)||(this.wallets=m,this.emit("walletsUpdated"))}async getConnectedWallet(){let e=await this.proxyProvider.request({method:"eth_accounts"});return this.wallets.sort(((t,e)=>e.connectedAt-t.connectedAt)).find((i=>e.find((e=>t(e)===t(i.address)))))||null}async isConnected(){let t=await this.proxyProvider.request({method:"eth_accounts"});return Array.isArray(t)&&t.length>0}async sign(t){return await this.connect({showPrompt:!1}),this.proxyProvider.request({method:"personal_sign",params:[t,this.wallets[0]?.address]})}subscribeListeners(){this.proxyProvider.on("accountsChanged",this.onAccountsChanged),this.proxyProvider.on("chainChanged",this.onChainChanged),this.proxyProvider.on("disconnect",this.onDisconnect),this.proxyProvider.on("connect",this.onConnect)}unsubscribeListeners(){this.proxyProvider.removeListener("accountsChanged",this.onAccountsChanged),this.proxyProvider.removeListener("chainChanged",this.onChainChanged),this.proxyProvider.removeListener("disconnect",this.onDisconnect),this.proxyProvider.removeListener("connect",this.onConnect)}constructor(t,i,n,o){super(t),this.chainType="ethereum",this.onAccountsChanged=t=>{0===t.length?this.onDisconnect():this.syncAccounts(t)},this.onChainChanged=t=>{this.wallets.forEach((i=>{i.chainId=s(t),"privy"===this.walletClientType&&r.put(e(i.address),t)})),this.emit("walletsUpdated")},this.onDisconnect=()=>{this.connected=!1,this.wallets=[],this.emit("walletsUpdated")},this.onConnect=()=>{this.connected=!0,this.syncAccounts()},this.wallets=[],this.walletClientType=t,this.chains=i,this.defaultChain=n,this.rpcConfig=o,this.rpcTimeoutDuration=c(o,t),this.connected=!1,this.initialized=!1}}export{d as EthereumWalletConnector,l as isEthereumWalletConnector};
