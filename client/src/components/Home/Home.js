import React from 'react';
import NavBar from '../NavBar/NavBar';
import TopHeader from '../TopHeader/TopHeader';
import SliderBanner from '../CarouselBanner/SliderBanner';
import VideoBanner from '../VideoBanner/VideoBanner';
import Destination from '../GoogleMap/Destination';
const Home = () => {
    return (
        <div className="container">
            <NavBar />
            <TopHeader />
            <SliderBanner />
            <VideoBanner />
            <Destination />
        </div>
    );
};

export default Home;