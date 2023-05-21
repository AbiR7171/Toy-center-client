import React from 'react';
import seller1 from "../../assets/TopSeller/seller1.jpg"
import seller2 from "../../assets/TopSeller/seller2.jpg"
import seller3 from "../../assets/TopSeller/seller3.jpg"
import seller4 from "../../assets/TopSeller/sellr4.jpg"

const TopSeller = () => {
    return (
        <div className='container mx-auto lg:w-full w-96'>
            <h2 className="text-5xl text-center mt-10 mb-10"> Our Top Seller</h2>
            <div>
            <div className="overflow-x-hidden lg:w-full ">
  <table className="table lg:w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          Rank
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Sell No.</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
         1
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle lg:w-12 lg:h-12 w-8 h-8">
                <img src={seller1} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          
          Eliha Esha
        </td>
        <td>112</td>
        <th>
          <button className="bg-gradient-to-r from-pink-300 to-teal-400 p-3 rounded-lg text-white shadow-lg font-bold">Visit Profile</button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
         2
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle lg:w-12 lg:h-12 w-8 h-8">
                <img src={seller2} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          
          Dua Lipa
        </td>
        <td>90</td>
        <th>
        <button className="bg-gradient-to-r from-pink-300 to-teal-400 p-3 rounded-lg text-white shadow-lg font-bold">Visit Profile</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
         3
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle lg:w-12 lg:h-12 w-8 h-8">
                <img src={seller3} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          
          Yeamia Hossaon
        </td>
        <td>89</td>
        <th>
        <button className="bg-gradient-to-r from-pink-300 to-teal-400 p-3 rounded-lg text-white shadow-lg font-bold">Visit Profile</button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
         4
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={seller4} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          
          Rofiq AL hosan
        </td>
        <td>65</td>
        <th>
        <button className="bg-gradient-to-r from-pink-300 to-teal-400 p-3 rounded-lg text-white shadow-lg font-bold">Visit Profile</button>
        </th>
      </tr>
    </tbody>
    
  </table>
</div>
            </div>
        </div>
    );
};

export default TopSeller;