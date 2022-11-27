import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Loading from '../../Loading/Loading';

const AllUsers = () => {
    
    // get all  users from database and set it ui 
    const url = `http://localhost:5000/users`;
    const {data:users,isLoading,refetch} = useQuery({
       queryKey:['users'],
       queryFn: async() => {
         const res = await fetch(url);
         const data = res.json()
         return data ;
       }        
    })

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
            <th></th>
            <th>  Name </th>
            <th> Email </th>
            <th> User Type   </th>
            <th> Make Admin </th>
            <th> Delete </th>
        </tr>
        </thead>
        <tbody className='text-primary'>
         {users?
            users?.map((user ,i) =>   
            <tr key={user._id}>
                <td> {i+1} </td>
                <td>{user.name}  </td>
                <td> {user.email} </td>
                <td> {user.UserType} </td>
                <td> <button className='btn btn-primary btn-sm text-white ' > Make Admin </button> </td>
                <td> <button className='btn bg-blue-500 btn-sm text-white' > Delete <FaTrashAlt className='ml-2'/> </button> </td>
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

export default AllUsers;