const e = [{
  constant: false,
  inputs: [{
    name: "_salt",
    type: "bytes32"
  }, {
    name: "_initializer",
    type: "bytes"
  }],
  name: "deployAccount",
  outputs: [{
    name: "",
    type: "bool"
  }],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}];
const t = [{
  name: "from",
  type: "address"
}, {
  name: "param2",
  type: "address"
}, {
  name: "param3",
  type: "bytes"
}, {
  name: "param4",
  type: "tuple",
  components: []
}, {
  type: "tuple",
  components: [{
    name: "param5",
    type: "address"
  }, {
    name: "param6",
    type: "uint256"
  }, {
    name: "param7",
    type: "uint256"
  }, {
    name: "encodedInitData",
    type: "bytes"
  }]
}];
export { t as DEPLOY_ACCOUNT_INITIALIZER_ARGS, e as DEPLOY_ACCOUNT_STUB_ABI };
