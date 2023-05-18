import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
  const {user, handleLogOut}= useContext(AuthContext)
    return (
        <div className=' bg-gradient-to-r from-pink-300 to-teal-400'>
            <div className="navbar container mx-auto  text-white rounded-lg bg-opacity-85 p-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">ToY-RoBo</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
      {
        user ? <div className='flex items-center space-x-4'>
          <li><button onClick={handleLogOut}>Logout</button></li>
          <li><Link to="/showall">Show All Toys</Link></li>
          <li><Link to="/addtoy">Add A Toy</Link></li>
          <li><Link to="/mytoys">My Toys</Link></li>
        </div> :
        <li><Link to="/login">Login</Link></li>
      }
    </ul>
  </div>
  <div className="navbar-end">
    {
      user?.photoURL && <div className="avatar">
      <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img title={user?.displayName} src={user.photoURL}/>
      </div>
    </div>
    }
  </div>
</div>
        </div>
    );
};

export default Header;