async function e(e){let n=(new TextEncoder).encode(e);return new Uint8Array(await crypto.subtle.digest("SHA-256",n))}function n(e){return crypto.getRandomValues(new Uint8Array(e))}export{e as createHashBuffer,n as randomBytes};
