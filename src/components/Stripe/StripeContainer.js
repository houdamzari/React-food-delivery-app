import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "../../pages/Checkout";
const PUBLIC__KEY =
  "pk_test_51LtpZsIlSQEV7m8uvq6t2qaMii0zXoKRjNIG5phW04EWGbtnp6XNIFjlJIwULoCw5Jxd5Iskq9QspOoIlwcdk7il00UI4pQoFC";

const stripeTestPromise = loadStripe(PUBLIC__KEY);
function StripeContainer(props) {
  return (
    <Elements stripe={stripeTestPromise}>
      <Checkout />
    </Elements>
  );
}

export default StripeContainer;
