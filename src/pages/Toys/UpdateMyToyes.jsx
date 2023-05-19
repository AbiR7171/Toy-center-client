import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateMyToyes = () => {
    const toyData = useLoaderData()
    const {imageUrl,toyName,name,email,category,price,quantity, rating , _id }= toyData;
    return (
        <div>
            
        </div>
    );
};

export default UpdateMyToyes;