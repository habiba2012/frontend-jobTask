import React from 'react';
import { header } from '../fashionData/fashionData';
import './TopHeader.css'

const TopHeader = () => {
    return (

        <div className="container-fluid" style={{ marginTop: "80px" }}>
            <div className="row">
                <div className="col-xs-12 full-width">
                    <div className="bg-top text-white text-center mt-5">
                        <h1 className="text-uppercase">{header.title}<br /><span style={{ color: "#973434" }}>{header.subTitle}</span></h1>
                        <p>{header.description}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TopHeader;
