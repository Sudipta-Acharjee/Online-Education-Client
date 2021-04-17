import React, { useEffect, useState } from 'react';
import Sidebar from '../../Learner/LearnerBook/Sidebar/Sidebar';
import SerialData from './SerialData';

const BookingList = () => {
    const [allBooking, setAllBooking] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/dataGetUser')
            .then(res => res.json())
            .then(data => setAllBooking(data))
    }, [])
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
                <SerialData allBooking={allBooking}></SerialData>
            </div>
        </div>
    );
};

export default BookingList;