import React, { useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';

const ShowAll = () => {
    const[toys, setToys]=useState([]);
    
    useEffect(()=>{
      
      fetch("https://toy-center-server.vercel.app/toys")
      .then(res => res.json())
      .then(data => setToys(data));
    },[])   
    
   
    return (
        <div className='container mx-auto mt-10'>
             <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Seller</th>
        <th>Toy Name</th>
        <th>Category</th>
        <th>Available Quantity</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        toys.map(toy => <AllToysRow
        key={toy._id}
        toy={toy}
        />)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ShowAll;