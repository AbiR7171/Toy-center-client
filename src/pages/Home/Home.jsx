import React from 'react';
import Banner from './Banner';
import Shoptabs from './Shoptabs';
import Gallery from './Gallery';
import Offer from './Offer';
import TopSeller from './TopSeller';


const Home = () => {
    return (
        <div >
            <Banner/>
            <Shoptabs/>
            <Gallery/>
            <Offer/>
            <TopSeller/>
        </div>
    );
};

export default Home;