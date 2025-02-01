const n = ({
  address: n,
  nonce: o
}) => `${window.location.host} wants you to sign in with your Solana account:\n${n}\n\n${`You are proving you own ${n}.`}\n\nURI: ${window.location.origin}\nVersion: 1\nChain ID: mainnet\nNonce: ${o}\nIssued At: ${new Date().toISOString()}\nResources:\n- https://privy.io`;
export { n as prepareSiwsMessageWithNonce };
