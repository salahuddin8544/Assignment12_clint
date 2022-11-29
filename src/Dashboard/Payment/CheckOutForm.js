import { useStripe,CardElement ,useElements} from '@stripe/react-stripe-js';
import React,{useState,useEffect} from 'react';

const CheckOutForm = ({booking}) => {
  const [cardError, setCardError] = useState()
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe()
  const elements = useElements()
  const {Price} = booking;
  useEffect(()=>{
    fetch('https://assignment12-server-beta.vercel.app/create-payment-intent',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        authrization:`bearer${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({Price})
    })
    .then((res) => res.json())
    .then((data) => setClientSecret(data.clientSecret));

  },[Price])
 
  
    const handleSubmit = async (event) => {
        event.preventDefault()
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if(error){
            console.log(error);
            setCardError(error.message)
          }
          else{
            setCardError('')
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
      <button className='btn btn-primary my-4' type="submit" disabled={!stripe || clientSecret}>
        Pay Now
      </button>
    </form>
    <p className='text-red-500'>{cardError}</p>
       </>
    );
};

export default CheckOutForm;