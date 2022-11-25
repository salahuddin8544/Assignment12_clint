import React from 'react';

const Blog = () => {
    return (
        <div className='text-center'>
           <div className='mb-4'>
            <h3 className='text-xl'>1.What are the different ways to manage a state in a React application?</h3>
            <p className='text-base'>SQL is primarily used to query and operate database systems. MySQL allows you to handle, store, modify and delete data and store data in an organized way. SQL does not support any connector. MySQL comes with an in-built tool known as MySQL Workbench that facilitates creating, designing, and building databases.</p>
           </div>
           <div className='mb-4'>
            <h3 className='text-xl'>2.How does prototypical inheritance work?</h3>
            <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
           </div>
           <div className='mb-4'>
            <h3 className='text-xl'>3.What is a unit test? Why should we write unit tests?</h3>
            <p>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.</p>
           </div>
           <div  className='mb-4'>
            <h3 className='text-xl'>4. React vs. Angular vs. Vue?</h3>
            <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
           </div>
        </div>
    );
};

export default Blog;