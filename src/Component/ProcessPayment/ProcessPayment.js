import React from 'react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardForm from './SplitCardForm'
import SimpleCardForm from './SimpleCardForm';


const stripePromise = loadStripe('pk_test_51IeEcRGPWT6PGP8FN3oteLz6t6vDmGnGTI8bOzuB7vnUmvVyU2sAQRxlEFw1Ub0lOvMtRvrc6dJV1h1yJulT42V500z3HKR0bD'
);

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;