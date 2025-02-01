let o = /paymaster\.biconomy\.io\/api/i;
let i = {
  mode: "SPONSORED",
  calculateGasLimits: true,
  expiryDuration: 300,
  sponsorshipInfo: {
    webhookData: {},
    smartAccountInfo: {
      name: "BICONOMY",
      version: "2.0.0"
    }
  }
};
const t = (t, a) => t && o.test(t) ? i : a && a.policy_id ? {
  policyId: a.policy_id
} : undefined;
export { t as getPaymasterContext };
