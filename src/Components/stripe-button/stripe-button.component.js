import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const StripePrice = price * 1000;
  const publishableKey = 'pk_test_6X1SemZ3sZjdjOwL3Gd3RWk000xOkjBFYu';
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label="PAY NOW"
      name="Clothing"
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={StripePrice}
      panelLabel="PAY NOW "
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
