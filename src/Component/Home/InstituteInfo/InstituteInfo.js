import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import InfoCard from './InfoCard';

const infoData = [
    {
        title: 'Opening Hours',
        description: 'we are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our location',
        description: 'Brooklyn, NY 10003 USA',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+156978541234',
        icon: faPhone,
        background: 'primary'
    }
]
const InstituteInfo = () => {
    return (
        <section className="justify-content-center" >
            <div className="section-header">
                    <h2 className="text-primary text-center text-uppercase">About Us</h2>
                </div>
            <div className="w-75 row" style={{"margin-left":"200px"}}>
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default InstituteInfo;