import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import ProcessPayment from '../../../ProcessPayment/ProcessPayment';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const BookingForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {


        fetch('http://localhost:5000/learnerData', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify( data )
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Booking Successfully');
                }
            })
    }
    return (
        <div className="row">
            <div className="col-md-6">
                <form style={customStyles} className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" name="name" placeholder="Your Name" {...register("name")} />
                        {errors?.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" name="email" placeholder="Email"{...register("email")} />
                        {errors?.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" name="course" placeholder="course Name" {...register("course")} />
                        {errors?.course && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>
            <div className="col-md-6">
                <h2>Please Pay for me</h2>
                <ProcessPayment onSubmit={handleSubmit(onSubmit)}></ProcessPayment>
            </div>
        </div>
    );
};

export default BookingForm;