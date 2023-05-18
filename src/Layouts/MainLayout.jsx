import React from 'react';
import Header from '../pages/shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default MainLayout;