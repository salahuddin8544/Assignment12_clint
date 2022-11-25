import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/categoires')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div className='grid my-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                products.map(product => <Category
                key={product._id}
                product = {product}
                ></Category>)
            }
        </div>
    );
};

export default Categories;