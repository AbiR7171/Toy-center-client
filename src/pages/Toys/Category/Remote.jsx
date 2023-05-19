import React from 'react';
import { Link } from 'react-router-dom';

const Remote = ({remote}) => {
    const {imageUrl,toyName,name,email,category,price,quantity, rating , _id }= remote;
    return (
        <div >
             <div className="card w-96 h-3/4 bg-gradient-to-r from-pink-300 to-teal-400 p-3 rounded-lg text-white shadow-xl font-serif">
  <figure><img src={imageUrl} className='rounded' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {toyName}
      <div className="badge badge-secondary"> ${price}</div>
    </h2>
    <p>{rating}</p>
    <div className="card-actions justify-start">
      <Link to={`/toy/${_id}`}><button className='bg-gradient-to-r from-pink-300 to-teal-400 p-3 rounded-lg text-white shadow-lg font-bold '>viewDeatiels</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Remote;