import React from 'react';
import offer from "../../../public/Offer/Special announcement vector 2.jpg"
import robot from "../../../public/Offer/Ai.png"
import ready from "../../../public/Offer/neon-are-you-ready-message-sign.jpg"
import launch from "../../../public/Offer/Screenshot_1.png"
const Offer = () => {
    return (
        <div className='mt-10'>
            <div className="carousel w-full h-96">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={offer} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={robot} className="w-full" />
    <div className="absolute flex flex-col justify-between transform -translate-y-1/2 left-[1000px] top-1/2">
      <h2 className="text-7xl text-red-700 font-Sat">Our Ai Robot <br /> Wura</h2>
      <p className="text-5xl text-[#082f49] font-Smo">Are Ready to </p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={launch} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={ready} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Offer;