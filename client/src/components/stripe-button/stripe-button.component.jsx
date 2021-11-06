import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JnlQYSHsOQ6B0NGpaPRisl4CabbJueIaT74AxRzESjwyQjN6tOtRl6bl2WajBFZACycFrN2oDwb0qZMqBthzq3n009kkgGgU8';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Succesfull');
        }).catch(error => {
            console.log('Payment error: ',error);
            alert(
                'There was issue with your payment. Please sure you use the porvided credit card.'
            );
        });
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='ECOM Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;
