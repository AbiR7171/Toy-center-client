import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {handleLogin, handleLoginWithGoogle}=useContext(AuthContext);

    const location = useLocation()
    const navigate = useNavigate()

    const froms = location.state?.from?.pathname || "/";


    const handleLoginFrom = event =>{
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;

        handleLogin(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(froms, replace)
        })
        .catch(error =>{
            console.log(error.message);
        })  
    }
    const handleGoogleLogin =()=>{
        handleLoginWithGoogle()
        .then(result =>{
            const googleLoggedUser = result.user;
            console.log(googleLoggedUser);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div>
              <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form onSubmit={handleLoginFrom} className="space-y-6" >
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
          <div className='space-y-3'>
            <p>You can also login with</p>
            <button onClick={handleGoogleLogin} className='bg-green-700 p-3 rounded-lg text-white'>Google</button>
          </div>
          <p>New at Toy-Center ? <Link className='btn-link' to="/signUp">Sign Up</Link></p>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition-colors duration-300"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Login;