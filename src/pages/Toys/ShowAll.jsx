import React, { useEffect, useRef, useState } from 'react';
import AllToysRow from './AllToysRow';
import { useLoaderData } from 'react-router-dom';

const ShowAll = () => {

    const toyes = useLoaderData();
    const[toys, setToys]=useState(toyes);
    

    const searchText = event =>{
 
      event.preventDefault()
     const search = event.target.search.value;

     const   url = `https://toy-center-server.vercel.app/toyes?toyName=${search}`
     fetch(url)
     .then(res => res.json())
     .then(data =>{
      console.log(data);
      setToys(data)
     })
    }
    

    return (
        <div className='container mx-auto mt-10'>
            <form onSubmit={searchText}  className='w-1/2 mx-auto mb-10 flex gap-3'>
            <input
              
              name="search"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Search your Toy"
             
            />
            <button
            type="submit"
            className="w-1/3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition-colors duration-300"
          >
            Register
          </button>
          </form>
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
       toys.length > 20 ? toys.slice(0, 20) : toys.map(toy => <AllToysRow
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