
import React from "react";

const SingleProduct = ({product,setProduct}) => {
     const {title,photoURL,brand,reselPrice,category_id,originalPrice,yearsOfUse,sellerLocation} = product;
     
    const d = new Date();
    let date = d.toLocaleDateString();
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={photoURL} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
          <p>Name: {title}</p>
          <p>Price: ${reselPrice}</p>
          <p>Originila Price: ${originalPrice}</p>
          <p> Used: {yearsOfUse}</p>
          <p> Location: {sellerLocation}</p>
          <p>Date: {date}</p>
          {/* <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} /> */}
          <div className="card-actions justify-end">
              <label htmlFor="my-modal-3"
               onClick={()=>setProduct(product)}
              className="btn btn-primary">Book Now</label>
          </div>
        </div>
      </div>
    );
};

export default SingleProduct;