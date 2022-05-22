import React from 'react';
import Banner from './Banner/Banner';
import Business from './Business/Business';
import Manufacture from './Manufacture/Manufacture';
import OfferPart from './OfferPart';
import Review from './Review';
import ServiceTime from './ServiceTime/ServiceTime';
import ToolsPart from './ToolsPart/ToolsPart';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToolsPart></ToolsPart>
            <Review></Review>
            <Business></Business>
            <OfferPart></OfferPart>
            <ServiceTime></ServiceTime>
            <Manufacture></Manufacture>
        </div>
    );
};

export default Home;