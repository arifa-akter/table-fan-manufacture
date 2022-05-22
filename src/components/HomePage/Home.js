import React from 'react';
import Banner from './Banner/Banner';
import Business from './Business/Business';
import Manufacture from './Manufacture/Manufacture';
import Review from './Review';
import ToolsPart from './ToolsPart/ToolsPart';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToolsPart></ToolsPart>
            <Review></Review>
            <Business></Business>
            <Manufacture></Manufacture>
        </div>
    );
};

export default Home;