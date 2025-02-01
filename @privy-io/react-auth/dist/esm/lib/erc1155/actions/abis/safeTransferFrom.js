const t = [{
  constant: false,
  inputs: [{
    name: "_from",
    type: "address"
  }, {
    name: "_to",
    type: "address"
  }, {
    name: "_tokenId",
    type: "uint256"
  }, {
    name: "_amount",
    type: "uint256"
  }, {
    name: "_data",
    type: "bytes"
  }],
  name: "safeTransferFrom",
  outputs: [{
    name: "",
    type: "bool"
  }],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}];
export { t as ERC1155_SAFE_TRANSFER_FROM_ABI_STUB };
