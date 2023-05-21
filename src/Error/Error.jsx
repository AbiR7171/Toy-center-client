import React from 'react';
import error from "../assets/Error/5203299.jpg"

const Error = () => {
    return (
        <div className='container mx-auto ml-96 mt-40'>
            <img src={error} className='w-1/2 h-[400px]' alt="" />      
            <p className='text-4xl text-red-700 font-serif ml-40'>Data Not Found</p>      
        </div>
    );
};

export default Error;