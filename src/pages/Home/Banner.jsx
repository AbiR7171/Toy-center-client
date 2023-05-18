import React from 'react';
import Lottie from "lottie-react";
import robot from "../../assets/Animation/131315-bot-robot.json"

const Banner = () => {
    return (
        <div className='bg-gradient-to-r from-pink-300 to-teal-400 flex justify-between items-center text-white p-2'>
            <div className='w-1/2 mx-auto space-y-5'>
                <h3 className="text-9xl">Welcome</h3>
                <p className='text-4xl'>To</p>
                <p className='text-3xl'>Toy Center</p>
                <p className='text-2xl'>Here You can Buy and Sell your Toy</p>
            </div>
            <div>
            <Lottie animationData={robot} loop={true} />
            </div>
        </div>
    );
};

export default Banner;