import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';




const CheckoutForm = ({appoinments}) => {


    // error handel hook
     const [carderror , setCarderror] = useState ("")
    //  payment success
    const [successmsg , setSuccessmsg] = useState("")
    // transition id
    const [transition , setTransition] = useState('')
    // stripe verify
    const [clientSecret, setClientSecret] = useState("");

    // stripe hooks
    const stripe = useStripe();
    const elements = useElements();
    // hook end here



    //send money
    useEffect(() => {
        fetch('http://localhost:8000/create-payment-intent', {
          method: "POST",
          headers: { 
              "Content-Type": "application/json" 
            },
            body: JSON.stringify ({price:appoinments?.price}),
        })
          .then((res) => res.json())
          .then(data => {  
              console.log(data); 
              if(data?.clientSecret){
                //   console.log(data?.clientSecret, "aaaa" ) ;
                  setClientSecret(data.clientSecret)
              }    
              else{
                  console.log("failed");
              }   
            });
      }, [appoinments?.price]);


    // handel form submut for payments
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            console.log('cannot get');
            return;
        }

        
       // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card', 
            card
          });
          
          setCarderror(error?.message || "")
          console.log(paymentMethod);

        // /payment method
          const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        // name: appoinments?.appoinmentpattientname,
                        // email:appoinments?.appoinmentpattientemail  
                    },
                },
            },
        );

        if (intentError) {
            setCarderror(intentError?.message);
            console.log(paymentIntent);
            // setProcessing(false);
        }
        else{
            setSuccessmsg("success fully done payment")
            setTransition(paymentIntent?.id)
            console.log(paymentIntent);
            const detilas ={
                transition :paymentIntent?.id,
                pattientemail : appoinments?.appoinmentpattientemail
            }
            const url = `http://localhost:8000/appoinment/${appoinments?._id}`
            console.log(url);
            fetch(url,{
                method : "PATCH",
                headers: { 
                    "Content-Type": "application/json" 
                  },
                  body: JSON.stringify (detilas),
            })
            .then(res => res.json())
            .then(data=>console.log(data))
        }




    }

           
           





    return (
        <div>
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
                <button className='mt-4 btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold' type="submit" disabled={!stripe || !clientSecret }>
                    Pay Now
                </button>
            </form>

             <p  className='text-red-600 font-bold mt-3' >  {carderror}  </p>  
             <p  className='text-success font-bold mt-3' >  {successmsg}  </p>  
            { transition &&  <p className='text-secondary font-bold mt-3' >
                  Yout transition id :
             <span className='text-accent font-bold' > {transition} </span> </p>}  
        </div>
    );
};

export default CheckoutForm;