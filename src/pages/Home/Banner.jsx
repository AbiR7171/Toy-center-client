import React from 'react';
import Lottie from "lottie-react";
import robot from "../../assets/Animation/131315-bot-robot.json"
import UseTitle from '../../Extra/UseTitle';


const Banner = () => {
  
    return (
        <div data-aos="fade-up-left" className='bg-gradient-to-r from-pink-300 to-teal-400 flex justify-between items-center text-white p-2'>
            <div className='w-1/2 mx-auto space-y-5'>
                <h3 data-aos="fade-right" data-aos-duration="3000" className="text-9xl    font-Dancing">Welcome</h3>
               <div data-aos="fade-left" data-aos-duration="3000" className='space-y-4'>
               <p className='text-4xl'>To <span className='font-Sat'>Toy Center</span></p>
                <p className='text-2xl font-Sat'>Here You can Buy and Sell your Toy</p>
               </div>
            </div>
            <div >
            <Lottie  animationData={robot} loop={true} />
            </div>
        </div>
    );
};

export default Banner;