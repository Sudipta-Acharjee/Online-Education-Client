import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../LearnerBook/Sidebar/Sidebar';
import './LearnerReview.css';

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

const LearnerReview = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/reviewData', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Review Submit Successfully');
                }
            })
    }
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <form style={customStyles} className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" name="person" placeholder="Your Name" {...register("person")} />
                        {errors?.person && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" name="company" placeholder="company-name"{...register("company")} />
                        {errors?.company && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control h-100" name="Description" placeholder="Description" {...register("Description")} />
                        {errors?.Description && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LearnerReview;