import React from 'react';
import { Link, useParams } from 'react-router-dom';
import LearnerBook from '../../Learner/LearnerBook/LearnerBook';



const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center ">
            {
                service.image? <img className="img-fluid mb-3" style={{ height: '250px' }} src={`data:image/png;base64,${service.image.img}`} alt="wait" />: <img className="img-fluid mb-3" src={`https://secure-harbor-26795.herokuapp.com/${service.img}`} alt=""/>
            }
            <h5 >{service.course}</h5>
            <h5>$ {service.fee}</h5>
            <p className="text-secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>
            <button><Link to="/booking" className="btn btn-primary"> Enroll now</Link></button>
        </div>
    );
};

export default ServiceDetail;