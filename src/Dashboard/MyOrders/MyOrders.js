import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../pages/context/AuthProvider';
const MyOrders = () => {
    const {user} = useContext(AuthContext);

    const url = `https://assignment12-server-beta.vercel.app/bookings?email=${user?.email}`
    // use react query for get user product order info 
    const {data:orders =[]} = useQuery ({
        queryKey:['bookings',user?.email],
        queryFn: async()=> {
            const res = await fetch(url);
            const data = await res.json();
            return data ;

        }
    })
    console.log(orders)

    return (
        <div>
           <h2 className='text-2xl my-3 font-bold text-primary'> My Orders  {orders.length}   </h2>
           <div>
   <div className="overflow-x-auto mt-5">
     <table className="table w-full">

        <thead className=''>
        <tr className='head-row'>
            <th></th>
            <th> Product Image </th>
            <th> Product Name </th>
            <th> Price </th>
            <th> Payment </th>
            <th> Delete </th>
        </tr>
        </thead>
        <tbody className='text-primary'>
         { orders?
            orders?.map((order ,i) =>   
            <tr key={order._id}>
                <th> {i+1} </th>
                <td> <img src={order.photo} className="w-20 h-20 rounded-md" alt='product img' />  </td>
                <td> {order.Name} </td>
                <td> {order.Price} </td>
                <td> 
                   
                    {
                        order.Price && ! order.paid && <Link to={`/dashboard/payment/${order._id}`}>
                         <button className='btn bg-blue-700' > Paynow </button> 
                        </Link>
                    }
                    {
                        order.Price && order.paid &&  <span>Paid</span>
                    }
                    
                    </td>
                <td> <button className='btn bg-red-500 ' > Delete <FaTrashAlt  /> </button> </td>
            </tr> )
            :
            ''
        }
         
       </tbody>
       </table>
       </div>
      </div>
    </div>
    );
};

export default MyOrders;