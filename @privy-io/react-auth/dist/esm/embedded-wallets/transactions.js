var N;
(N = {}).SEND = "SEND";
N.CONTRACT_CALL = "CONTRACT_CALL";
N.UNKNOWN = "UNKNOWN";
var C = N;
function t(N) {
  if (N.to && N.data) {
    return "CONTRACT_CALL";
  } else if (N.to && N.value) {
    return "SEND";
  } else {
    return "UNKNOWN";
  }
}
export { C as TransactionFamily, t as getTransactionFamily };
