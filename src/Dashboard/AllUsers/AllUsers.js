import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { FaLock, FaTrashAlt, FaUserTie } from 'react-icons/fa';
import Loading from '../../Loading/Loading';

const AllUsers = () => {
    
    // get all  users from database and set it ui 
    const url = `https://computer-reseller-server.vercel.app/users`;
    const {data:users,isLoading,refetch} = useQuery({
       queryKey:['users'],
       queryFn: async() => {
         const res = await fetch(url);
         const data = res.json()
         return data ;
       }        
    })
console.log('this is form users',users);

//------- make admin handlar   ----------/ 
const handleMakeAdmin = (_id) => {
    console.log(_id)
    fetch(`https://assignment12-server-beta.vercel.app/users/${_id}`, {
        method: 'PUT',
        headers: {
            authorization:` bearer ${localStorage.getItem('accessToken')}`
        }
    })

    .then(res => res.json())
    .then(data  => {
        if( data.modifiedCount >  0){
            toast.success('Admin created successfull')
            refetch()
  
          }
        console.log(data)
    })
}

// handle user verify 
const handleUserVerify = (_id) => {
    console.log(_id)
    fetch(`https://computer-reseller-server.vercel.app/users/verify/${_id}`, {
        method: 'PUT',
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })

    .then(res => res.json())
    .then(data  => {
        if( data.modifiedCount >  0){
            toast.success('User verified successfull')
            refetch()
  
          }
        console.log(data)
    })
}

// // delete order from database 
const deleteUser = email => {

    fetch(`https://computer-reseller-server.vercel.app/users/${email}`,{
        method:'PUT',
        headers:{
            authorization: `bearer ${localStorage.getItem('accessToken')}`,

        }

    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount === 1){
            toast.success('Successfully user deleted')
             refetch()
        }
    })
}


    if(isLoading){
        return <Loading></Loading>
    }
    // console.log(users)




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
            <th> User Role   </th>
            <th> Verify User  </th>
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
                <td> {user.role} </td>
                <td> { user.verify !== 'verified' && <button onClick={()=> handleUserVerify(user._id)} className='btn btn-primary btn-sm text-white ' >  Verify <FaLock className='ml-2' />  </button> }  </td>
                
                <td> { user.role !== 'admin' && <button onClick={()=> handleMakeAdmin(user._id)} className='btn btn-primary btn-sm text-white ' >  Make Admin <FaUserTie className='ml-2' />  </button> }  </td>

                <td> <button onClick={()=> deleteUser(user.email)} className='btn bg-blue-500 btn-sm text-white' > Delete <FaTrashAlt className='ml-2'/> </button> </td>
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