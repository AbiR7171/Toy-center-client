import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'
const PrivateRoute = ({children}) => {
    const{user, loading}= useContext(AuthContext)
    const location = useLocation()


    if(loading){
        return <progress className="progress w-56 "></progress>
    }
    if(user){
        return children;
    }
    else{
        Swal.fire({
            position: 'top-center',
            icon: 'warning',
            title: 'You can not add a Toy without Login',
            showConfirmButton: false,
            timer: 1500,
          })

          return   <Navigate to="/login" state={{from:location}}/>
    }
    
};

export default PrivateRoute;