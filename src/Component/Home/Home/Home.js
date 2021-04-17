import React from 'react';
import LogIn from '../../LogIn/LogIn';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import InstituteInfo from '../InstituteInfo/InstituteInfo';
import Service from '../Service/Service';
import Testimonials from '../Testimonial/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <Testimonials></Testimonials>
            <InstituteInfo></InstituteInfo>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;