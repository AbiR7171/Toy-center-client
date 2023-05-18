import React, { useEffect, useState } from 'react';

const ShowAll = () => {
    const[toys, setToys]=useState([]);
    
    useEffect(()=>{
      
      fetch("https://toy-center-server.vercel.app/toys")
      .then(res => res.json())
      .then(data => setToys(data));
    },[])   
    
   
    return (
        <div>
            
        </div>
    );
};

export default ShowAll;