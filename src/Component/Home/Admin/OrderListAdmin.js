import React, { useEffect, useState } from 'react';
import Sidebar from '../../Learner/LearnerBook/Sidebar/Sidebar'
import SerialData from '../BookingList/SerialData';
import OrderDetailsAdmin from './OrderDetailsAdmin/OrderDetailsAdmin';


const OrderListAdmin = () => {
    const [allBooking, setAllBooking] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/dataGetUser')
            .then(res => res.json())
            .then(data => setAllBooking(data))
    }, [])
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <OrderDetailsAdmin allBooking={allBooking}></OrderDetailsAdmin>
            </div>
        </div>
    );
};

export default OrderListAdmin;