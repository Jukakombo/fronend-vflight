import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
// import logo from './logo.png';

// COMPONENTS IMPORT ---

// ACTIONS IMPORT ---
// import { cartResetAction } from '../../../actions/cartActions';

const AddStripeButton1 = ({ order }) => {
  const userData = order.paymentMethod;
  const priceForStripe = order.paymentMethod.amount * 100;
  const publishablekey =
    'pk_test_51JMRX9A1GhDyGG5WaGNiBv0XmhgVsEpCsM1TJB6iZm85gaI9gnwGXAUpMnLhI53uIbYYzjT9Yin51Idrm5uANxy200yOHEmyEj';
  // const buttonLabel = 'Paid amount $' + order.totalPrice

  const onToken = (token) => {
    console.log(token);
    // call the backend API to save data and payment
    axios({
      url: '/api/users/register',
      method: 'post',
      data: {
        userData,
        token,
      },
    })
      .then((response) => {
        console.log(response);

        alert('Payment Successfull');
      })
      .catch((error) => {
        console.log('Payment Error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please sure you use the provided credit card'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay with Stripe' // prepended to the amount in the bottom pay button
      name='Registration Fee' // the pop-in header title
      // billingAddress
      // shippingAddress
      // image={logo}
      // description='Big Data Stuff' // the pop-in header subtitle
      amount={priceForStripe} // cents
      panelLabel='Pay Money' // prepended to the amount in the bottom pay button
      token={onToken} // submit callback
      stripeKey={publishablekey}
      currency='USD'
      // email='info@vidhub.co'
      // zipCode={false}
      // allowRememberMe // "Remember Me" option (default true)
    />
  );
};

export default AddStripeButton1;
