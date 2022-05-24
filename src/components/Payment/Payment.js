import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loader from '../Loading/Loader';
import CheckoutForm from '../paymentscheckout/CheckoutForm';
// import CheckoutForm from './CheckoutForm';
import './Payment.css'



const Payment = () => {
    const { id } = useParams()

    const { data: appoinment, isLoading } = useQuery([id, 'appoinment'], () =>
        fetch(`http://localhost:8000/appoinment/${id}`, {
            "method": "GET",
        })
            .then(res =>
                res.json()
            )
    )

    if (isLoading) {
        <Loader></Loader>
    }

    // stripe dkdeyssss
    const stripePromise = loadStripe('pk_test_51L0m3KERq3LthqiVFvM6lkFuVIavOgGXrNiXcMVgF54GvaxlJmxJzEZlQV7mwhYdB8w7lhNKvC663wJYpyGem9K600ZD6Tsfvi');
    // end

    return (
        <div>
            <div class="card mx-4 bg-base-100 mt-16 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-secondary font-bold "> Hello {appoinment?.appoinmentpattientname} !! </h2>
                    <h2 class="card-title text-accent"> You are booking  {appoinment?.doctorcategorey}  </h2>
                    <h2 class="mt-1">Your appoinment in <span className='text-error font-bold'>{appoinment?.appointmentDate}</span>  at <span className='text-error font-bold'>{appoinment?.appoinmentslot}</span> </h2>

                    <h2 class="card-title"> Please pay ৳{appoinment?.price}  </h2>
                    <div class="card-actions justify-end">
                        <button className="btn btn-primary">Pay now</button>
                    </div>
                </div>
            </div>
            {/* card templates */}
            <div class="card w-98 bg-base-100 shadow-xl mt-20 mx-20 lg:mx-60">
                <div class="card-body">
                    <p className='mb-4'>Your secure payment process </p>

                    <Elements stripe={stripePromise}>
                        <CheckoutForm appoinments={appoinment} />
                    </Elements>

                    <p></p>
                </div>
            </div>

        </div>
    );
};

export default Payment;