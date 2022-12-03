import React, { useContext } from 'react';
import Toast  from 'react-hot-toast'
import { AuthContext } from '../../pages/context/AuthProvider';
const AddPoducts = () => {
  const {user} = useContext(AuthContext)
  const email = user?.email
    const d = new Date();
    let date = d.toLocaleDateString();
    const handleAddProduct =event=>{

        event.preventDefault();
        const form = event.target;
        const brand = form.name.value;
        const photoURL = form.photo.value;
        const sellerLocation = form.location.value;
        const originalPrice = form.price.value;
        const reselPrice = form.resalePrice.value;
        const title = form.condition.value;
        const category_id = form.category.value;
        const yearsOfUse = form.year.value;
      
        const addProduct ={
         brand,
         photoURL,
         sellerLocation,
         originalPrice,
         reselPrice,
         title,
         category_id,
         yearsOfUse,
         date,
         email
        }
        console.log(addProduct);
        fetch('https://assignment12-server-beta.vercel.app/products', {
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(addProduct)
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            if(data.acknowledged){
                Toast('Your Product Added')
            }
        })
    }
    return (

    <div className="card flex-shrink-0 w-full my-3 shadow-2xl bg-base-100">
       <form onSubmit={handleAddProduct}>
      <div className="card-body grid grid-cols-1 md:grid-cols-2">

       <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input type="text" name='name' placeholder="Product Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input type="text" name='photo' placeholder="Image URL" className="input input-bordered" />
        </div>
  
        <div  className="form-control">
          <label className="label">
            <span className="label-text">Product Title</span>
          </label>
          <input type="text" name='condition' placeholder="Title" className="input input-bordered" />
        </div>
        <div  className="form-control">
          <label className="label">
            <span className="label-text">Product Price</span>
          </label>
          <input type="text" name='price' placeholder="Price" className="input input-bordered" />
        </div>
        <div  className="form-control">
          <label className="label">
            <span className="label-text">Resale Price</span>
          </label>
          <input type="text" name='resalePrice' placeholder="Resale Price" className="input input-bordered" />
        </div>
        <div  className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="text" name='location' placeholder="Location" className="input input-bordered" />
        </div>
        <div  className="form-control">
          <label className="label">
            <span className="label-text">Product Category 1 or 2 or 3</span>
          </label>
          <input type="text" name='category' placeholder="Category" className="input input-bordered" />
        </div>
        <div  className="form-control">
          <label className="label">
            <span className="label-text">Use Years</span>
          </label>
          <input type="text" name='year' placeholder="year" className="input input-bordered" />
        </div>
      
        <div className="mx-auto">
      <input type="submit" className='btn btn-primary' value="Submit" />
        </div>
     
        </div>
       </form>
    </div>
    );
};

export default AddPoducts;