import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyToys = () => {
  
    const {user}=useContext(AuthContext)


   const[myToys, setMyToys]=useState([])
   
   const url = `https://toy-center-server.vercel.app/mytoyes?email=${user?.email}`
    useEffect(()=>{
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    },[])
    return (
        <div>
            
        </div>
    );
};

export default MyToys;