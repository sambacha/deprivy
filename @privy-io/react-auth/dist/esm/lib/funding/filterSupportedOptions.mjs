const e=e=>e.filter((e=>"wallets"===e.method||("exchange"===e.method?"coinbase"===e.provider:"card"===e.method||"payment-request"===e.method?"coinbase"===e.provider||"moonpay"===e.provider:(e.method,!1))));export{e as filterSupportedOptions};
