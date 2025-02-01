let e = async e => typeof window != "undefined" && "PaymentRequest" in window && (await new window.PaymentRequest([{
  supportedMethods: e
}], {
  id: "0",
  total: {
    label: "Item",
    amount: {
      currency: "USD",
      value: "1.00"
    }
  }
}).canMakePayment());
const t = () => e("https://apple.com/apple-pay");
const a = () => e("https://google.com/pay");
export { t as isApplePayPotentiallyAvailable, a as isGooglePayPotentiallyAvailable };
