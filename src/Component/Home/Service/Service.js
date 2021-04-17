import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Service.css';


const Service = () => {
    const [courseName, setCourseName] = useState(null)
    const [services, setServices] = useState([])
    const handleName = name => {
        setCourseName(name)
    }
    useEffect( () => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    
    return (
        <section className="services-container control-div">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        services.map(service => <ServiceDetail service={service} key={service._id}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;