import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
const Payment = () => {
    const booking = useLoaderData()
    const {Price, } = booking
    return (
        <div>
            <h2 className='text-2xl my-4'>Please pay  ${Price} for Your Product</h2>
            <Elements stripe={stripePromise}>
      <CheckOutForm 
      
      booking = {booking}
      />
    </Elements>
        </div>
    );
};

export default Payment;