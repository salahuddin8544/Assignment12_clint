import React from 'react';

const SingleProduct = ({product}) => {
     const {title,photoURL,brand,reselPrice,category_id} = product
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={photoURL} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
          <p>{title}</p>
          <p>Price: ${reselPrice}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    );
};

export default SingleProduct;