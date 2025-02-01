const e = e => {
  if (e.chain_type === "ethereum") {
    return {
      entropyId: e.address,
      entropyIdVerifier: "ethereum-address-verifier"
    };
  }
  if (e.chain_type === "solana") {
    return {
      entropyId: e.address,
      entropyIdVerifier: "solana-address-verifier"
    };
  }
  throw Error("Invalid embedded wallet account type");
};
export { e as getEntropyDetailsFromAccount };
