import React, { useEffect, useState } from 'react';
import {CardElement ,useStripe ,useElements} from '@stripe/react-stripe-js';
// import { useAuthState} from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';

const CheckoutForm = ({orderPayment}) => {
    // const [user] = useAuthState(auth)
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { totalPrice ,email} = orderPayment;

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ totalPrice})
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [totalPrice])




    const handleSubmit = async (event)=>{
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        setCardError(error?.message || '')

        setSuccess('');
        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method:{
                    card: card,
                    billing_details: {
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
        }
        else{
            setCardError('')
            setSuccess('Congrats! Your payment is completed.')
            console.log(paymentIntent);
        }

    }
    return (
           <>
                <form onSubmit={handleSubmit}>
         <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-primary btn-sm mt-11" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
       </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
              {
                success && <p className='text-green-500'>{success}</p>
            }
          </>
    );
};

export default CheckoutForm;