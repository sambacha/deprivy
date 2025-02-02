const n = ({
  address: n,
  chainId: o,
  nonce: i
}) => `${window.location.host} wants you to sign in with your Ethereum account:\n${n}\n\nBy signing, you are proving you own this wallet and logging in. This does not initiate a transaction or cost any fees.\n\nURI: ${window.location.origin}\nVersion: 1\nChain ID: ${o}\nNonce: ${i}\nIssued At: ${new Date().toISOString()}\nResources:\n- https://privy.io`;
export { n as prepareSiweMessageWithNonce };
