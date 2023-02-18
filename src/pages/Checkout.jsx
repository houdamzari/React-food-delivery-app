import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";

import {
  CardElement,
  PaymentElement,
  useElements,
  CardNumberElement,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.css";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      marginBottomL: "100px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};
const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [checked, setChecked] = useState(false);
  const cardTotalAmount = useSelector((state) => state.card.totalAmount);
  const shippingCost = 30;
  const totalAmount = cardTotalAmount + Number(shippingCost);

  const shippingInfo = [];
  const submitHandler = async (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: email,
      phoneNumber: phoneNumber,
      city: city,
    };
    shippingInfo.push(userShippingAddress);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: 1000,
          id,
        });
        if (response.data.success) {
          console.log("successfull");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };
  return (
    <>
      <Helmet title="Checkout">
        <CommonSection title="Checkout" />
        <section>
          <Container>
            <Row>
              <Col lg="8" md="6">
                <h6 className="mb-4">Shipping Address</h6>
                {!success ? (
                  <form
                    action=""
                    className="checkout__form"
                    onSubmit={submitHandler}
                  >
                    {/* <div className="FormRow">
                      <CardElement />
                    </div> */}
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        required
                        onChange={(e) => setEnterName(e.target.value)}
                      />
                    </div>
                    <div className="form__group">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form__group">
                      <input
                        type="number"
                        placeholder="Enter your Phone number"
                        required
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div className="form__group">
                      <input
                        type="number"
                        placeholder="Enter your City"
                        required
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <div className="form__group">
                      <input
                        type="radio"
                        value="card"
                        name="choice"
                        // onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <div className="form__group">
                      <input
                        type="radio"
                        value="card"
                        name="choice"

                        // checked={() => setChecked(!checked)}
                        // onChange={(e) => setCity(e.target.value)}
                      />
                    </div>

                    <button
                      className="addTOCart__btn"
                      style={{ marginTop: 100 }}
                    >
                      Payment
                    </button>
                  </form>
                ) : (
                  <div>
                    <h2>
                      Your payment is successful, you will receive your order in
                      no time.
                    </h2>
                  </div>
                )}
              </Col>

              {/* <Col lg="4" md="6">
                <div className="checkout__bill">
                  <h6 className="d-flex align-items-center justify-content-between mb-3">
                    Subtotal : $ <span>{cardTotalAmount}</span>
                  </h6>
                  <h6 className="d-flex align-items-center justify-content-between mb-3">
                    Shipping : <span> ${shippingCost}</span>
                  </h6>
                  <div className="checkout__total">
                    <h5 className="d-flex align-items-center justify-content-between mb-3">
                      Total : <span>$ {totalAmount}</span>
                    </h5>
                  </div>
                </div>
              </Col> */}
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Checkout;
