class e{get(e){return this._cache[e]}put(e,t){void 0!==t?this._cache[e]=t:this.del(e)}del(e){delete this._cache[e]}getKeys(){return Object.keys(this._cache)}constructor(){this._cache={}}}class t{get(e){let t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}put(e,t){void 0!==t?localStorage.setItem(e,JSON.stringify(t)):this.del(e)}del(e){localStorage.removeItem(e)}getKeys(){return Object.entries(localStorage).map((([e])=>e))}}function r(){try{let e="privy:__session_storage__test",r=new t;return r.put(e,"blobby"),r.del(e),!0}catch(e){return!1}}var s="undefined"!=typeof window&&window.localStorage?new t:new e;export{e as InMemoryCache,t as LocalStorage,s as default,r as isLocalStorageAccessible};
