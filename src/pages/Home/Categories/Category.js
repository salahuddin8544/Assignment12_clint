import React from 'react';
import { FaArrowRight } from "react-icons/fa";
const Category = ({product}) => {
    const {title,photoURL,brand,reselPrice} = product
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={photoURL} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
          <p>{title}</p>
          <p>Price: ${reselPrice}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-white"> See Same Category Products <FaArrowRight></FaArrowRight> </button>
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    );
};

export default Category;