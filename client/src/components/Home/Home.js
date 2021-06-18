import React from 'react';
import NavBar from '../NavBar/NavBar';
import TopHeader from '../TopHeader/TopHeader';
import SliderBanner from '../CarouselBanner/SliderBanner';
import VideoBanner from '../VideoBanner/VideoBanner';
import Destination from '../GoogleMap/Destination';
import Footer from '../Footer/Footer.js'
const Home = () => {
    return (
        <div className="container-fluid">
            <NavBar />
            <TopHeader />
            <SliderBanner />
            <VideoBanner />
            <Destination />
            <Footer />
        </div>
    );
};

export default Home;