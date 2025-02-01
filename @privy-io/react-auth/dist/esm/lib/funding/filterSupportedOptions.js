const e = e => e.filter(e => e.method === "wallets" || (e.method === "exchange" ? e.provider === "coinbase" : e.method === "card" || e.method === "payment-request" ? e.provider === "coinbase" || e.provider === "moonpay" : (e.method, false)));
export { e as filterSupportedOptions };
