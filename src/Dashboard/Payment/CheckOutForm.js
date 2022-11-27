import { useStripe,CardElement ,useElements} from '@stripe/react-stripe-js';
import React,{useState} from 'react';

const CheckOutForm = ({booking}) => {
  const {Price} = booking
    const [cardError, setCardError] = useState()
    const stripe = useStripe()
    const elements = useElements()
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
      <button className='btn btn-primary my-4' type="submit" disabled={!stripe}>
        Pay Now
      </button>
    </form>
    <p className='text-red-500'>{cardError}</p>
       </>
    );
};

export default CheckOutForm;