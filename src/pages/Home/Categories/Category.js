import React from 'react';
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Category = ({product}) => {
    const {title,photoURL,brand,reselPrice,category_id} = product
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={photoURL} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
          <p>{title}</p>
          <p>Price: ${reselPrice}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-white"> <Link to={`/categoires/${category_id}`}>See Same Category Products</Link> <FaAngleRight></FaAngleRight> </button>
          </div>
        </div>
      </div>
    );
};

export default Category;