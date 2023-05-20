import React from 'react';
import Banner from './Banner';
import Shoptabs from './Shoptabs';
import Gallery from './Gallery';
import Offer from './Offer';

const Home = () => {
    return (
        <div >
            <Banner/>
            <Shoptabs/>
            <Gallery/>
            <Offer/>
        </div>
    );
};

export default Home;