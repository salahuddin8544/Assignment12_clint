import React, { useEffect, useState } from 'react';
import BookingsItem from './BookingsItem/BookingsItem';
import { useQuery } from '@tanstack/react-query';
const Dashboard = () => {


    const [bookings, setBookings] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/bookings')
        .then(res=>res.json())
        .then(data=>setBookings(data) )
    },[])

    // {
    //     bookings.map(booking => <BookingsItem
        
    //     key={booking._id}
    //     booking = {booking}
    //     ></BookingsItem>)
    // }
    return (
        <div>
                    <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
           
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
                </ul>
            
            </div>
            </div>
                    </div>
    );
};

export default Dashboard;