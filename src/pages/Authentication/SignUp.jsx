import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const {handleSignUp, handleUpdatUserProfile}= useContext(AuthContext)

    const handleSignUpFrom = event =>{
        event.preventDefault()
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        const photoUrl = from.photoUrl.value;

        console.log(name, email, password, photoUrl);
        handleSignUp(email, password)
        .then(result =>{
            const signUpUser = result.user;
            handleUpdatUserProfile(signUpUser,name, photoUrl)
            console.log(signUpUser);
        })
        .catch(error =>{
            console.log(error.message);
        })

        
        
    }
    return (
        <div>
             <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Registration</h2>
        <form onSubmit={handleSignUpFrom} className="space-y-6" >
          <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <input
              name="name"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your name"
              
              
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              name="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
             
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              name="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
              
            />
          </div>
          <div>
            <label htmlFor="photoUrl" className="block mb-1">Photo URL</label>
            <input
              name="photoUrl"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your photo URL"
             
            />
          </div>
          <p>Already have an account ? <Link className='btn-link' to="/login">Login</Link></p>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition-colors duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
        </div>
    );
};

export default SignUp;