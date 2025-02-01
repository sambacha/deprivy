const t = [{
  constant: false,
  inputs: [{
    name: "_from",
    type: "address"
  }, {
    name: "_to",
    type: "address"
  }, {
    name: "_tokenIds",
    type: "uint256[]"
  }, {
    name: "_amounts",
    type: "uint256[]"
  }, {
    name: "_data",
    type: "bytes"
  }],
  name: "safeBatchTransferFrom",
  outputs: [{
    name: "",
    type: "bool"
  }],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}];
export { t as ERC1155_SAFE_BATCH_TRANSFER_FROM_ABI_STUB };
