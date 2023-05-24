import React from 'react';
import pic1 from "../../assets/Pic/blue-cyborg-toy-dances-with-futuristic-joy-generated-by-ai.jpg";
import pic2 from "../../assets/Pic/pair-robots-conflict (1).jpg"
import pic3 from "../../assets/Pic/pair-robots-conflict.jpg"
import pic4 from "../../assets/Pic/robo-advisor-chatbot-robotic-concept-robot-finger-point-laptop-button-generative-ai.jpg"
import pic5 from "../../assets/Pic/robot-with-final-piece-jigsaw-puzzle.jpg"
import pic6 from "../../assets/Pic/robo-advisor-chatbot-robotic-concept-robot-finger-point-laptop-button-generative-ai.jpg"

const Gallery = () => {
    return (
       <div>
        <h1 className="text-7xl text-center mt-5 mb-10">Our Gallery</h1>
         <div className='container mx-auto mt-10 grid lg:grid-cols-3 gap-2 '>
            <div>
                <img data-aos="fade-down-right" data-aos-duration="1000" src={pic1} className='rounded h-72 hover:scale-125 p-2' alt="" />
            </div>
            <div>
                <img data-aos="fade-down" data-aos-duration="1000" src={pic2} className='rounded h-72 hover:scale-125 duration-75 p-2' alt="" />
            </div>
            <div>
                <img data-aos="fade-down-left" data-aos-duration="1000" src={pic3} className='rounded h-72 hover:scale-125 duration-75 p-2' alt="" />
            </div>
            <div>
                <img data-aos="fade-up-right" data-aos-duration="1000" src={pic4} className='rounded h-72  hover:scale-125 duration-75 p-2' alt="" />
            </div>
            <div>
                <img data-aos="fade-up" data-aos-duration="1000" src={pic5} className='rounded h-72  hover:scale-125 duration-75 p-2' alt="" />
            </div>
            <div>
                <img data-aos="fade-up-left" data-aos-duration="1000" src={pic6} className='rounded h-72  hover:scale-125 duration-75 p-2' alt="" />
            </div>
        </div>
       </div>
    );
};

export default Gallery;