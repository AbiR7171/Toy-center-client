import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToysRow from './MyToysRow';

const MyToys = () => {
  
    const {user}=useContext(AuthContext)


   const[myToys, setMyToys]=useState([])
   
   const url = `https://toy-center-server.vercel.app/mytoyes?email=${user?.email}`
    useEffect(()=>{
            fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    },[])
    return (
        <div className='container mx-auto mt-10'>
         
         <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
         Delete
        </th>
        <th>Image</th>
        <th>ToyName</th>
        <th>Rating</th>
        <th>Quantity</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      myToys.map(myToy => <MyToysRow
      key={myToy._id}
      myToy={myToy}
      myToys={myToys}
      setMyToys={setMyToys}
      ></MyToysRow>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyToys;