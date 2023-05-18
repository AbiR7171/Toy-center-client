import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({toy}) => {
   console.log(toy);
    const {name,toyName,category, price, quantity, _id  }=toy;
    return (
        <tr>
        <th>{toy?.name}</th>
        <td>{toyName}</td>
        <td>{category}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td><Link to={`/toy/${_id}`}>
        <button className='bg-gradient-to-r from-pink-300 to-teal-400 p-2 rounded-lg text-white shadow-lg'>View Deatiels</button>
        </Link></td>
      </tr>
    );
};

export default AllToysRow;