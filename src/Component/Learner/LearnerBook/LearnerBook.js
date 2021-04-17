import React from 'react';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import BookingForm from './BookingForm/BookingForm';
import Sidebar from './Sidebar/Sidebar';

const LearnerBook = () => {
    return (
        <section className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col md-10">
                <BookingForm></BookingForm>
            </div>
        </section>
    );
};

export default LearnerBook;