import React from "react";
import "./Sliderbanner.css";
import slide1 from "../../assets/images/banner0.jpg";
import slide2 from "../../assets/images/banner1.jpg";
import slide3 from "../../assets/images/banner2.jpg";
import slide4 from "../../assets/images/banner3.jpg";
import slide5 from "../../assets/images/banner4.jpg";
import slide6 from "../../assets/images/banner5.jpg";
import slide7 from "../../assets/images/banner0.jpg";


const SliderBanner = () => {
    return (
        <div>
            <div className="slider-box">
                <div className="slider1 img-fluid" style={{ marginTop: "5rem" }}>
                    <img className="slide-img" src={slide1} alt="" />

                </div>
                <div className="slider2 img-fluid" style={{ marginTop: "5rem" }}>
                    <img className="slide-img" src={slide2} alt="" />
                    <div className="text-box">
                        <h3 className="text-center ">COPENHAGEN FASHION FESTIVAL</h3>
                    </div>
                </div>
                <div className="slider3 img-fluid" style={{ marginTop: "5rem" }}>
                    <img className="slide-img" src={slide3} alt="" />
                    <div className="text-box">
                        <h3 className="text-center">COPENHAGEN FASHION FESTIVAL</h3>
                        <span></span>
                    </div>
                </div>
                <div className="slider4 img-fluid" style={{ marginTop: "5rem" }}>
                    <img className="slide-img" src={slide4} alt="" />
                    <div className="text-box">
                        <h3 className="text-center">COPENHAGEN FASHION FESTIVAL</h3>
                    </div>
                </div>
                <div className="slider5 img-fluid" style={{ marginTop: "5rem" }}>
                    <img className="slide-img" src={slide5} alt="" />
                    <div className="text-box">
                        <h3 className="text-center">COPENHAGEN FASHION FESTIVAL</h3>
                    </div>
                </div>
                <div className="slider5 img-fluid" style={{ marginTop: "5rem" }}>
                    <img className="slide-img" src={slide6} alt="" />
                    <div className="text-box">
                        <h3 className="text-center">COPENHAGEN FASHION FESTIVAL</h3>
                    </div>
                </div>
                <div className="slider5 img-fluid" style={{ marginTop: "5rem" }}>
                    <img className="slide-img" src={slide7} alt="" />
                    <div className="text-box">
                        <h3 className="text-center">COPENHAGEN FASHION FESTIVAL</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderBanner;