import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddToy = () => {
    const {user}=useContext(AuthContext);

    const handleAddToyFrom = event=>{
        event.preventDefault();
        const from = event.target;
        const imageUrl = from.imageUrl.value;
        const toyName =from.toyName.value;
        const name = from.name.value;
        const email = from.email.value;
        const category = from.category.value;
        const price = from.price.value;
        const rating = from.rating.value;
        const quantity = from.quantity.value;
        const description = from.description.value;


        console.log(imageUrl, toyName, name, email, category, price, rating, quantity, description);

        const toys ={
            imageUrl,
            toyName,
            name,
            email,
            category,
            price,
            rating,
            quantity,
            description
        }

        fetch("https://toy-center-server.vercel.app/toys",{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(toys)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            from.reset()
        })


    }
    return (
        <div>
            <h1 className="text-4xl text-center mt-10 mb-10">Add Your Toy </h1>
            <div>
            <form onSubmit={handleAddToyFrom} className="bg-white rounded-lg shadow-lg  p-4" >
 <div className='grid grid-cols-2 gap-2'>
 <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="imageUrl">
          Picture URL
        </label>
        <input
          type="text"
          name="imageUrl"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="toyName">
          Toy Name
        </label>
        <input
          type="text"
          name="toyName"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          defaultValue={user?.displayName}
          name="name"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          defaultValue={user?.email}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="Category">
          Category
        </label>
        <input
          type="text"
          name="category"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
          Price
        </label>
        <input
          type="number"
          name="price"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="rating">
          Rating
        </label>
        <input
          type="text"
          name="rating"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="quantity">
          Available Quantity
        </label>
        <input
          type="text"
          name="quantity"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
          Detail Description
        </label>
        <textarea
          name="description"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>
 </div>
      <button
        type="submit"
        className="bg-blue-500  btn-block text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Submit
      </button>
    </form>
    
            </div>
        </div>
    );
};

export default AddToy;