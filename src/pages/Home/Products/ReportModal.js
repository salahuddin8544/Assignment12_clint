import React, { useContext } from 'react';
import Toast  from 'react-hot-toast'
import { AuthContext } from '../../context/AuthProvider';
const ReportModal = ({product}) => {
    
    const {title,photoURL,reselPrice,} = product;
    const {user} = useContext(AuthContext)
    console.log(user);
    const handleReport = event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const comment = form.comment.value;
        Toast('Your Report Succefull')
        const userReport ={
          photo:photoURL,
           Name: title,
           Price: reselPrice,
           email,
           comment
        }
        console.log(userReport);
        fetch('http://localhost:5000/reports', {
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(userReport)
        })
    }
    return (
        <div>
        <input type="checkbox" id="my-modal-2" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">{title}</h3>
                <p>Price: {reselPrice}</p>
            <form className='grid grid-cols-1 gap-3 mt-10'  onSubmit={handleReport}>

            <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
            <input name='email' type="text" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
            <input name='location' type="text" placeholder="Location" className="input w-full input-bordered" />
            <textarea name="comment" id="" cols="15" rows="5"></textarea>
            <br />
            <input type="submit" className='btn btn-primary' value="Submit" />
           
            </form>
        </div>
        </div>
    </div>
    );
};

export default ReportModal;