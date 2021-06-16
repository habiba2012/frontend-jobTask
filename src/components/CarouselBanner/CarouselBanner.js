import React, { useState } from 'react';
import SliderData from './sliderData.json';
import { Carousel } from 'react-bootstrap';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const CarouselBanner = () => {

    return (
        <div className="container">
            <h1>CarouselBanner</h1>
            {SliderData.map((slide, index) => {
                return (
                    <>
                        <Carousel fade={true} pause={false}>
                            <Carousel.Item interval={2000}>

                                <img src={slide.image} width="100px" alt="fashion image" />
                            </Carousel.Item>
                            <Carousel.Caption>
                                <h3>Fill up the application form and join our family</h3>
                            </Carousel.Caption>


                        </Carousel>
                    </>
                )
            })}
        </div>



    );
};

export default CarouselBanner;