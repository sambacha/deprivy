import{EthereumProvider as t,OPTIONAL_EVENTS as e,OPTIONAL_METHODS as i}from"@walletconnect/ethereum-provider";import{isMobile as r}from"react-device-detect";import{PrivyConnectorError as o}from"../errors.mjs";import{METAMASK_LOGO_DATA_URI as s}from"../svg/metamask.mjs";import{WALLET_CONNECT_LOGO_DATA_URI as n}from"../svg/wallet-connect.mjs";import{stripEmoji as a,getJsonRpcEndpoint as l}from"../utils/index.mjs";import{UserRejectedConnectionError as m,formatConnectorError as c}from"./errors.mjs";import{EthereumWalletConnector as h}from"./ethereum/index.mjs";import{getRpcTimeout as p}from"./getRpcTimeout.mjs";import{PrivyProxyProvider as d}from"./privyProxyProvider.mjs";import{getWalletEntryByUrl as w,WALLET_CONNECT_REGISTRY as v,deleteWalletConnectDeepLink as j,buildTargetUrl as y,setWalletConnectDeepLink as u,buildUniversalFallbackUrl as f,openHref as P}from"./walletconnect-registry.mjs";import"ofetch";import"react/jsx-runtime";import"../hooks/modal-context.mjs";import"react";import"../components/PrefetchedImage.mjs";import"../configuration/context.mjs";import"../config.mjs";import"../configuration/defaultClientConfig.mjs";import"../constants.mjs";import"../configuration/login-methods.mjs";import"../configuration/wallets.mjs";import"./chains/index.mjs";import"./chains/arbitrum.mjs";import"./chains/arbitrumSepolia.mjs";import"./chains/avalanche.mjs";import"./chains/avalancheFuji.mjs";import"./chains/base.mjs";import"./chains/baseSepolia.mjs";import"./chains/berachainArtio.mjs";import"./chains/celo.mjs";import"./chains/celoAlfajores.mjs";import"./chains/filecoin.mjs";import"./chains/filecoinCalibration.mjs";import"./chains/garnetHolesky.mjs";import"./chains/holesky.mjs";import"./chains/linea.mjs";import"./chains/lineaTestnet.mjs";import"./chains/lukso.mjs";import"./chains/mainnet.mjs";import"./chains/optimism.mjs";import"./chains/optimismSepolia.mjs";import"./chains/polygon.mjs";import"./chains/polygonAmoy.mjs";import"./chains/redstone.mjs";import"./chains/sepolia.mjs";import"./chains/zora.mjs";import"./chains/zoraSepolia.mjs";import"./chains/zoraTestnet.mjs";import"./chains/utils.mjs";import"../lib/solana/index.mjs";import"../theme.mjs";import"tinycolor2";import"../lib/cybr53.mjs";import"../screens/index.mjs";import"../hooks/index.mjs";import"./get-legacy-injected-providers.mjs";import"./is-wallet-installed.mjs";import"../utils/eth/getPublicClient.mjs";import"viem";import"@privy-io/js-sdk-core";import"viem/utils";import"../storage.mjs";import"./areWalletArraysEqual.mjs";import"./isBaseConnectedEthereumWallet.mjs";import"./base.mjs";import"eventemitter3";class C extends h{async initialize(){let t=await this.createProvider();if(this.provider=t,this.proxyProvider.setWalletProvider(t),this.subscribeListeners(),t.session){if(this.walletProvider?.session?.peer.metadata.url){let t=w(this.walletProvider?.session?.peer.metadata.url);this.walletEntry=t?.entry,this.walletClientType=t?.walletClientType||"unknown"}this.connected=!0,await this.syncAccounts()}this.initialized=!0,this.emit("initialized");let{WalletConnectModal:e}=await import("@walletconnect/modal");this.modal=new e({projectId:this.walletConnectCloudProjectId,themeVariables:{"--wcm-z-index":"1000000"}}),this.modal.subscribeModal((t=>{t.open||this.walletProvider?.session||!this.onQrModalClosed||this.onQrModalClosed()}))}async connect(t){return t.showPrompt&&await this.promptConnection(),this.getConnectedWallet()}async isConnected(){return!!this.walletProvider?.connected}get walletBranding(){if("metamask"===this.walletClientType)return{name:"MetaMask",icon:s,id:"io.metamask"};let t=this.walletProvider?.session?.peer.metadata.icons?.[0];return{name:a(this.walletProvider?.session?.peer.metadata.name||"")||"WalletConnect",icon:"string"==typeof t?t:n,id:this.walletProvider?.session?.peer.metadata.name.toLowerCase()||"wallet_connect_v2"}}async resetConnection(t){this.walletProvider&&this.walletProvider.connected&&(await this.walletProvider.disconnect(),this.walletProvider.signer.session=void 0,this.walletEntry?.isWalletEntryOverriden||(this.walletEntry=v[t]),this.walletClientType=t,this.redirectUri=void 0,this.fallbackUniversalRedirectUri=void 0,j(),this.onDisconnect())}async promptConnection(){if(this.provider)return new Promise(((t,e)=>{this.onQrModalClosed=()=>{e(new m)},(async()=>{let e="",i=await Promise.race([this.walletProvider?.enable(),this.proxyProvider.walletTimeout()]);if(i?.length&&(e=i[0]),!e||""===e)throw new o("Unable to retrieve address");if(this.walletProvider?.session?.peer.metadata.url){let t=w(this.walletProvider?.session?.peer.metadata.url);this.walletEntry=t?.entry,this.walletClientType=t?.walletClientType||"unknown",this.proxyProvider.rpcTimeoutDuration=p(this.rpcConfig,this.walletClientType)}this.connected=!0,await this.syncAccounts(i),t()})().catch((t=>{e(t?c(t):new o("Unknown error during connection"))})).finally((()=>this.modal?.closeModal()))}))}disconnect(){this.walletProvider?.disconnect().then((()=>this.onDisconnect())).catch((()=>console.warn("Unable to disconnect Wallet Connect provider")))}get walletProvider(){return this.proxyProvider.walletProvider}setWalletProvider(t){this.proxyProvider.setWalletProvider(t)}async createProvider(){let o={};for(let t of this.chains){let e=l(t.id,this.chains,this.rpcConfig,this.privyAppId);e&&(o[t.id]=e)}let s=this.shouldEnforceDefaultChainOnConnect?[this.defaultChain.id]:[],n=this.chains.map((t=>t.id)),a=await t.init({projectId:this.walletConnectCloudProjectId,chains:s,optionalChains:n,optionalEvents:e,optionalMethods:i,rpcMap:o,showQrModal:!1,metadata:{description:this.privyAppName,name:this.privyAppName,url:window.location.toString(),icons:[]}});return a.on("display_uri",(t=>{if(a.signer.abortPairingAttempt(),this.walletEntry){let{redirect:e,href:i}=y(t,this.walletEntry);u({href:i,name:this.walletEntry.displayName}),this.redirectUri=e;let o=f(t,this.walletEntry);o?.redirect&&(this.fallbackUniversalRedirectUri=o.redirect),r&&P(e,"_self"),this.showPrivyQrModal?.({native:e,universal:this.fallbackUniversalRedirectUri})}else this.modal?.openModal({uri:t,chains:[this.defaultChain.id]})})),a.on("connect",(()=>{if(this.modal?.closeModal(),a.session?.peer.metadata.url){let t=w(a.session?.peer.metadata.url);this.walletEntry=t?.entry,this.walletClientType=t?.walletClientType||"unknown"}})),a}async enableProvider(){return this.walletProvider?.connected?Promise.resolve(this.walletProvider.accounts):await(this.walletProvider?.enable())}setWalletEntry(t,e){this.walletEntry=t,this.showPrivyQrModal=e}constructor(t,e,i,r,o,s,n,a){super(a||"unknown",i,r,e),this.connectorType="wallet_connect_v2",this.privyAppId=s,this.privyAppName=n,this.walletConnectCloudProjectId=t,this.rpcConfig=e,this.shouldEnforceDefaultChainOnConnect=o,this.proxyProvider=new d(void 0,this.rpcTimeoutDuration),a&&(this.walletEntry=v[a],this.walletClientType=a)}}export{C as WalletConnectV2WalletConnector};
