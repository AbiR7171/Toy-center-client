import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <div>
                <h2 className="text-4xl">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.</p>
            </div>
            <div>
                <h2 className="text-4xl">2. Compare SQL and NoSQL databases?</h2>
                <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
            </div>
            <div>
                <h2 className="text-4xl">What is express js? What is Nest JS?</h2>
                <p>Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection</p>
            </div>
            <div>
                <h2 className="text-4xl">4.What is MongoDB aggregate and how does it work?</h2>
                <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.</p>
            </div>
        </div>
    );
};

export default Blog;