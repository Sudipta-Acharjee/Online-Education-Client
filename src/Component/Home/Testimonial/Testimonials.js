import React, { useEffect, useState } from 'react';
import watson from '../../../image/male.jpg'
import Emma from '../../../image/female.jpg'
import Testomonial from './Testomonial';

const Testimonials = () => {
    const [allReview, setAllReview] = useState([])
    useEffect(() => {
        fetch('https://secure-harbor-26795.herokuapp.com/reviewGetUser')
            .then(res => res.json())
            .then(data => setAllReview(data))
    }, [])
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">Testimonial</h5>
                    <h1>What Our Patients <br /> Says </h1>
                </div>
                <div className="card-deck d-flex mt-5">
                    {
                        allReview.map(Review => <ul>
                            <Testomonial allReview={allReview}></Testomonial>
                        </ul>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;