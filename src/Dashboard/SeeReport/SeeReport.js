import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Loading from '../../Loading/Loading';
import { toast } from 'react-hot-toast';

const SeeReport = () => {
    
    // get all  users from database and set it ui 
    const url = `https://assignment12-server-beta.vercel.app/reports`;
    const {data:users,isLoading,refetch} = useQuery({
       queryKey:['users'],
       queryFn: async() => {
         const res = await fetch(url);
         const data = res.json()
         return data ;
       }        
    })


    const handleReport = email =>{
        console.log(email);
        fetch(`http://localhost:5000/reports/${email}`,{
            method:'PUT'
        })
        .then(res=>res.json())
    .then(data=> {
        if(data.deletedCount){
            refetch()
            toast('Reports deleted')
        }
       if(data.deletedCount >0){
      
       }
    })

    }
    if(isLoading){
        return <Loading > </Loading>
    }
    console.log(users)
    return (
        <div>
            <h2 className='text-2xl font-bold my-3 text-primary'> Manage all  users  </h2>
            <div>
      <div className="overflow-x-auto mt-5">
     <table className="table w-full">

        <thead className=''>
        <tr className='head-row'>
            <th>No</th>
            <th> Name </th>
            <th> Email </th>
            <th>Photo   </th>
            <th>  Comment </th>
            <th> Delete Comment </th>
        </tr>
        </thead>
        <tbody className='text-primary'>
         {users?
            users?.map((user ,i) =>   
            <tr key={user._id}>
                <td> {i+1} </td>
                <td> {user.Name} </td>
                <td> {user.email} </td>
                <td> <img src={user.photo} className="w-20 h-20 rounded-md" alt='product img' />  </td>
                <td>{user.comment}  </td>
                <td> <button className='btn bg-blue-500 btn-sm text-white' onClick={()=> handleReport(user.email)} > Delete <FaTrashAlt className='ml-2'/> </button> </td>
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

export default SeeReport;