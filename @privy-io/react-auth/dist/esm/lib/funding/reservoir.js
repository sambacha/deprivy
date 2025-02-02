let e = "0x0000000000000000000000000000000000000000";
const t = ({
  destinationCurrency: t,
  ...a
}) => ({
  tradeType: "EXACT_OUTPUT",
  originCurrency: e,
  destinationCurrency: t ?? e,
  ...a
});
const a = async ({
  input: e,
  isTestnet: t
}) => {
  let a = await fetch(t ? "https://api.testnets.relay.link/execute/swap" : "https://api.relay.link/execute/swap", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(e)
  });
  let r = await a.json();
  if (!a.ok && (typeof r.message != "string" || !r.message.startsWith("Invalid address"))) {
    console.error("Relay error:", r);
    throw Error(r.message ?? "Error fetching quote from relay");
  }
  return r;
};
const r = e => {
  let t = e.steps[0]?.items?.[0];
  if (t) {
    return {
      from: t.data.from,
      to: t.data.to,
      value: Number(t.data.value),
      chainId: Number(t.data.chainId),
      data: t.data.data
    };
  }
};
export { a as getQuote, r as toEvmTransactionRequestInfoFromQuote, t as toGetQuoteInput };
