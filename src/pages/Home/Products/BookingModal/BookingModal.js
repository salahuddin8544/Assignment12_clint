import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({product}) => {


    const {title,reselPrice} = product
    const {user} = useContext(AuthContext)
    console.log(user);
    const handleBooking = event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value
        
        const buyerBooking ={
            email,
            phone,
            location
        }
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{title}</h3>
                    <p>Price: {reselPrice}</p>
                <form className='grid grid-cols-1 gap-3 mt-10'  onSubmit={handleBooking}>

                <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                <input name='email' type="text" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                <input name='location' type="text" placeholder="Location" className="input w-full input-bordered" />
                <br />
                <input type="submit" className='btn btn-primary' value="Submit" />
               
                </form>
            </div>
            </div>
        </div>
    );
};

export default BookingModal;