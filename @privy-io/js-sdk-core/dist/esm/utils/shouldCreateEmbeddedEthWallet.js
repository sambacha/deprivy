import { getAllUserEmbeddedEthereumWallets as e } from "./getAllUserEmbeddedEthereumWallets.mjs";
const t = (t, l) => l !== "off" && !(e(t).length > 0) && (!(t.linked_accounts.filter(e => e.type === "wallet" && e.chain_type === "ethereum").length > 0) || l === "all-users");
export { t as shouldCreateEmbeddedEthWallet };
