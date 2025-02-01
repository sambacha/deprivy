const t = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
const e = "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU";
function n({
  name: t
}) {
  switch (t) {
    case "mainnet-beta":
      return "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
    case "devnet":
      return "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU";
    default:
      throw Error(`USDC not supported on cluster ${t}`);
  }
}
export { e as SOLANA_DEVNET_USDC_ADDRESS, t as SOLANA_MAINNET_USDC_ADDRESS, n as getSolanaUsdcMintAddressForCluster };
