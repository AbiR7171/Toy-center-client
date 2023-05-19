import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToyDeatiels = () => {
    const toyDeatiles = useLoaderData()
    const {imageUrl,toyName,name,email, price,rating,quantity,description }=toyDeatiles;
    console.log(toyDeatiles);
    return (
        <div className='container mx-auto mt-10 mb-10 '>
         <div className="hero min-h-screen bg-gradient-to-r from-pink-200 to-teal-300 rounded-lg ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={imageUrl} className="max-w-sm rounded-lg shadow-2xl" />
    <div className='space-y-2'>
      <h1 className="text-5xl uppercase font-bold">{toyName}</h1>
      <p className='text-2xl font-serif'>Seller Name : {name}</p>
      <p className='text-2xl font-serif'>Seller Email : {email}</p>
      <p className='text-2xl font-serif'>Price : {price}</p>
      <p className='text-2xl font-serif'>Rating : {rating}</p>
      <p className='text-2xl font-serif'>Available Quantity : {quantity}</p>
      <p className="py-6 font-serif">{description}</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleToyDeatiels;