const e = e => [56, 97].includes(e);
const i = async (i, t) => {
  if (!e(i.chainId)) {
    throw Error("Invalid chain ID for BSC gas estimation.");
  }
  if (i.type === undefined) {
    i.type = 0;
  } else if (i.type == 1 || i.type == 2) {
    console.warn("Transaction request type specified is incompatible for chain and will result in undefined behavior.  Please use transaction type 0.");
  }
  if (!i.gasPrice) {
    let e = await t.getFeeData();
    i.gasPrice = e.gasPrice?.toHexString();
  }
  return i;
};
export { i as defaultGasForBsc, e as isBsc };
