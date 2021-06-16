import React from 'react';
import NavBar from '../NavBar/NavBar';
import TopHeader from '../TopHeader/TopHeader';
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import VideoBanner from '../VideoBanner/VideoBanner';
const Home = () => {
    return (
        <div className="container">
            <NavBar />
            <TopHeader />
            <CarouselBanner />
            <VideoBanner />
        </div>
    );
};

export default Home;