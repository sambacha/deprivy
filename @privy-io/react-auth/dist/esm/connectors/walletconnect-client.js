let t = "https://explorer-api.walletconnect.com";
class e {
  async fetchListings() {
    let e = new URL("v3/wallets", t);
    e.searchParams.append("projectId", this.projectId);
    let a = await fetch(e);
    if (!a.ok) {
      console.debug(`Failed to fetch WalletConnect listings: ${await a.text()}`);
      return {
        listings: [],
        total: 0
      };
    }
    let l = await a.json();
    let s = Object.values(l.listings);
    return {
      listings: [s.find(t => t.rdns === "io.metamask"), s.find(t => t.rdns === "me.rainbow"), ...s.filter(t => !["io.metamask", "me.rainbow"].includes(t.rdns))].filter(t => t),
      total: l.total
    };
  }
  getWalletImageUrl(e) {
    return `${t}/w3m/v1/getWalletImage/${e}?projectId=${this.projectId}`;
  }
  constructor(t) {
    this.projectId = t;
  }
}
export { e as WalletConnectClient };
