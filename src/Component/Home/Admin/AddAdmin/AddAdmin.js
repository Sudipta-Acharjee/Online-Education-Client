import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../../Learner/LearnerBook/Sidebar/Sidebar';

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

const AddAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify( data )
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Email Submit Successfully')
                }
            })
    }
    return (

        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-6">
                <form style={customStyles} className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" name="email" placeholder="Email"{...register("email")} />
                        {errors?.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;