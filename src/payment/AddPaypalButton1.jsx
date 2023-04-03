import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PayPalButton } from "react-paypal-button-v2";
import Loader from "./Loader";
import { createRegistration } from "../actions/registration";
import { Link, useNavigate } from "react-router-dom";
import BookingDetail from "../components/BookingDetail";

const AddPaypalButton1 = ({ order, amount }) => {
  const [sdkReady, setSdkReady] = useState(false);
  const [sucessfullPayment, setSucessfullPayment] = useState(false);
  const { purchase_units } = sucessfullPayment;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadingPay = false;

  useEffect(() => {
    // Add PayPal Script
    const addPayPalScript = async () => {
      const clientId =
        "AYXizzVv-EkltAKiYGjxgrh7rQ9arjXFAzX6rWj600XJAhye4iqZsYNA4Mm-YqAFqQLuhiOKP4BWD0tK";
      // Fetch the client Id from the back end-> server.js
      const script = document.createElement("script"); // Vanilla JavaScript
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      // https://developer.paypal.com/docs/checkout/reference/customize-sdk/ Query parameters
      script.async = true;
      script.onload = () => {
        setSdkReady(true); // Tell us the script has been loaded
      };
      document.body.appendChild(script); // Dynamically adding the PayPal script
    };
    // addPayPalScript() END
    if (!window.paypal) {
      // Checking if Not Paid and Not window.paypal
      addPayPalScript();
    } else {
      setSdkReady(true);
    }
  }, [dispatch]);
  // useEffect END

  const successPaymentHandler = async (paymentResult) => {
    // This paymentResult is coming from PayPal response after payment success to PayPal Account
    console.log(paymentResult);
    localStorage.setItem("paymentResult", JSON.stringify(paymentResult));
    const payment = JSON.parse(localStorage.getItem("paymentResult"));

    setSucessfullPayment({ paid: payment });
    // call the backend API to save data and payment
    const formData = order.paymentMethod;
    dispatch(createRegistration({ paymentResult, formData, navigate }));
  };
  {
    /* <Link to="/">
    <button className="bg-green-400 font-bold text-white p-2 rounded-[20px]">
      Download your Receipt
    </button>
  </Link> */
  }

  return (
    <div className="w-[100%] m-auto">
      {sucessfullPayment ? (
        <BookingDetail purchase_units={purchase_units} />
      ) : (
        <div>
          {loadingPay && <Loader />}
          {!sdkReady ? (
            <Loader />
          ) : (
            <PayPalButton
              amount={amount}
              currency="USD"
              onSuccess={successPaymentHandler}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AddPaypalButton1;
