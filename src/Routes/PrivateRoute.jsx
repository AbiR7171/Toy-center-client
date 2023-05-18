import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const{user, loading}= useContext(AuthContext)
    if(loading){
        return <progress className="progress w-56 "></progress>
    }
    if(user){
        return children;
    }
    return <div>
        <Navigate to="/login"/>
    </div>
   
};

export default PrivateRoute;