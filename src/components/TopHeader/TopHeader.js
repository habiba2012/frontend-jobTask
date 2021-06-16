import React from 'react';
import { header } from '../fashionData/fashionData';


const TopHeader = () => {
    return (
        <div className="container pt-5 mt-5 bg-dark text-white">

            <h1>{header.title}</h1>
            <p>{header.description}</p>



        </div>
    );
};

export default TopHeader;
