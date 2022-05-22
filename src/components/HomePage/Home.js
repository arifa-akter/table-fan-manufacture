import React from 'react';
import Banner from './Banner/Banner';
import Business from './Business/Business';
import Review from './Review';
import ToolsPart from './ToolsPart/ToolsPart';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToolsPart></ToolsPart>
            <Review></Review>
            <Business></Business>
        </div>
    );
};

export default Home;