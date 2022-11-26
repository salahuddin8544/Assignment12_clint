import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import SingleProduct from './SingleProduct/SingleProduct';


const Products = () => {
    const [product, setProduct] = useState(null)
    const products = useLoaderData()
    return (
        <div className='grid my-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
           {
            products.map(product => <SingleProduct
            
            key={product._id}
            product = {product}
            setProduct = {setProduct}
            ></SingleProduct>)
           }
           { product &&
            <BookingModal
            product ={product}
            
            ></BookingModal>
           }
        </div>
    );
};

export default Products;