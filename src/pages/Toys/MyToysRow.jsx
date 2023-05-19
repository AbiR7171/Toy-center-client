import React, { useEffect } from 'react';
import { Link, useActionData } from 'react-router-dom';

const MyToysRow = ({myToy, myToys, setMyToys}) => {
  console.log(myToy);
  const {imageUrl,toyName,name,email,category,price,quantity, rating , _id }= myToy;

  
   const handleDelete = id =>{

      fetch(`https://toy-center-server.vercel.app/toys/${id}`,{
        method:"DELETE",
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        if(data.deletedCount > 0){
          const reaming = myToys.filter(myToy => myToy._id !== id)
          setMyToys(reaming)
        }
      })
   }

    return (
      <tr>
      <th>
      <button onClick={()=> handleDelete(_id)} className="btn btn-square">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={imageUrl} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        {toyName}
      </td>
      <td>{rating}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <th>
        <Link to={`/updateMyToes/${_id}`}><button className='bg-gradient-to-r from-pink-300 to-teal-400 p-3 rounded-lg text-white shadow-lg'>Update</button></Link>
      </th>
    </tr>
    );
};

export default MyToysRow;