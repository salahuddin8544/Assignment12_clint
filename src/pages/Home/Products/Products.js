import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct/SingleProduct';


const Products = () => {
    const products = useLoaderData()
    return (
        <div className='grid my-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
           {
            products.map(product => <SingleProduct
            
            key={product._id}
            product = {product}
            ></SingleProduct>)
           }
        </div>
    );
};

export default Products;