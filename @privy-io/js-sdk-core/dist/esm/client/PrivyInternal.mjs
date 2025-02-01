import t from"fetch-retry";import{v4 as e}from"uuid";import{PrivyErrorCode as s}from"@privy-io/api-base";import{getPathWithParams as i,AppConfig as a,AnalyticsEvent as r,RefreshSession as n}from"@privy-io/public-api";import{PrivyClientError as o,PrivyApiError as h}from"../Error.mjs";import{Session as c}from"../Session.mjs";import l from"../toAbortSignalTimeout.mjs";import{toSearchParams as d}from"../utils/toSearchParams.mjs";import"eventemitter3";import"jose";import"js-cookie";import"../Token.mjs";import"../utils/allSettled.mjs";let p="privy:caid";class _{setCallbacks(t){this.callbacks={...this.callbacks,...t}}get isReady(){return!!this._config}get config(){return this._config}get caid(){return this._analyticsId}async _initialize(){if(this.isReady)this.callbacks?.setIsReady?.(!0);else{if(!await this.isStorageAccessible())throw new o({code:"storage_error",error:"Unable to access storage"});this._config=await this.getAppConfig(),this._config?.custom_api_url&&(this.baseUrl=this._config.custom_api_url,this.session.isUsingServerCookies=!0),this.callbacks?.setIsReady?.(!0),this.createAnalyticsEvent("sdk_initialize",{})}}async fetch(t,{body:e,params:s,query:a,headers:r,options:n={onRequest:this._beforeRequest.bind(this)}}){let o=new Request(`${this.baseUrl}${i(t.path,s)}${d(a)}`,{method:t.method,body:JSON.stringify(e),headers:r}),c=await n.onRequest(o),l=await this._fetch(o,c),p=await l.json();if(l.status>299)throw new h(p);return p}async _beforeRequestWithoutInitialize(t){let e=await this.session.getToken(),s=new Headers(t.headers);s.set("privy-app-id",this.appId),this.appClientId&&s.set("privy-client-id",this.appClientId),s.set("privy-client",this._sdkVersion),e&&s.set("Authorization",`Bearer ${e}`),s.set("Content-Type","application/json"),s.set("Accept","application/json");let i=await this._getOrGenerateClientAnalyticsId();return i&&s.set("privy-ca-id",i),this.nativeAppIdentifier&&s.set("x-native-app-identifier",this.nativeAppIdentifier),{signal:l(2e4),headers:s,credentials:"include"}}async beforeRequestWithoutRefresh(t){return await this._initialize(),this._beforeRequestWithoutInitialize(t)}async _beforeRequest(t){return await this._initialize(),await this.getAccessToken(),this.beforeRequestWithoutRefresh(t)}async getAppConfig(){return await this.fetch(a,{params:{app_id:this.appId},options:{onRequest:this._beforeRequestWithoutInitialize.bind(this)}})}async _getOrGenerateClientAnalyticsId(){if(this._analyticsId)return this._analyticsId;try{let t=await this._storage.get(p);if("string"==typeof t&&t.length>0)return this._analyticsId=t,t}catch(t){console.error("Unable to load clientId",t)}try{this._analyticsId=e()}catch(t){console.error("Unable to generate uuidv4",t)}if(!this._analyticsId)return null;try{await this._storage.put(p,this._analyticsId)}catch(t){console.error(`Unable to store clientId: ${this._analyticsId}`,t)}return this._analyticsId}async destroyClientAnalyticsId(){try{return await this._storage.del(p)}catch(t){console.error("Unable to delete clientId",t)}}async createAnalyticsEvent(t,e){try{await this.fetch(r,{body:{event_name:t,client_id:await this._getOrGenerateClientAnalyticsId(),payload:e},options:{onRequest:this.beforeRequestWithoutRefresh.bind(this)}})}catch(t){}}async refreshSession(t=!1){let e=await this.session.getRefreshToken()??void 0,s=e??"key",i=this._cache.get(s);if(i)return await i;let a=this._refreshSession(e,t);this._cache.set(s,a);try{return await a}finally{this._cache.delete(s)}}async _refreshSession(t,e){let i=await this.session.getToken();if(!this.session.hasRefreshCredentials(i,t??null))throw await this._initialize(),new h({code:s.MISSING_OR_INVALID_TOKEN,error:"No tokens found in storage"});try{let s=await this.fetch(n,{body:{refresh_token:t},options:{onRequest:this.beforeRequestWithoutRefresh.bind(this)}}),i=s.session_update_action;return e||this.callbacks?.setUser?.(s.user),"set"===i&&await this.session.updateWithTokensResponse(s),"clear"===i&&(await this.session.destroyLocalState(),e||this.callbacks?.setUser?.(null)),"ignore"===i&&s.token&&(await this.session.storeToken(s.token),s.identity_token&&await this.session.storeIdentityToken(s.identity_token)),s}catch(t){throw t instanceof h&&t.code===s.MISSING_OR_INVALID_TOKEN&&(await this.session.destroyLocalState(),e||this.callbacks?.setUser?.(null)),t}}async getAccessToken(){let[t,e]=await Promise.all([this.session.getToken(),this.session.getRefreshToken()]);return!this.session.tokenIsActive(t)&&this.session.hasRefreshCredentials(t,e)?(await this.refreshSession(),await this.session.getToken()):t}async getIdentityToken(){return await this.session.getIdentityToken()}async isStorageAccessible(){try{let t=`privy:__storage__test-${e()}`,s="blobby";await this._storage.put(t,s);let i=await this._storage.get(t);return await this._storage.del(t),i===s}catch(t){return console.error(t),!1}}constructor(e){this._sdkVersion="js-sdk-core:0.40.0",this._cache=new Map,this._storage=e.storage,this._analyticsId=null,this._getOrGenerateClientAnalyticsId(),this.baseUrl=e.baseUrl??"https://auth.privy.io",this.appId=e.appId,this.appClientId=e.appClientId,this._sdkVersion=e.sdkVersion??this._sdkVersion,this.callbacks=e.callbacks,this.nativeAppIdentifier=e.nativeAppIdentifier,this.session=new c({storage:this._storage,isUsingServerCookies:!1,appId:e.appId}),this._fetch=t(fetch,{retries:3,retryDelay:500}),this.session.on("error_storing_tokens",(t=>{this.createAnalyticsEvent("error_updating_tokens_in_storage",{reason:t})}))}}export{_ as PrivyInternal};
