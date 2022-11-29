import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';


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


//------- make admin handlar   ----------/ 
const handleMakeAdmin = (_id) => {
    console.log(_id)
    fetch(`http://localhost:5000/users/admin/${_id}`, {
        method: 'PUT',
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })

    .then(res => res.json())
    .then(data  => {
        if( data.modifiedCount >  0){
            toast('make admin')
            
            refetch()
  
          }
        console.log(data)
    })
}


// // delete order from database 
const deleteUser = email => {

    fetch(`http://localhost:5000/users/${email}`,{
        method:'PUT',
        headers:{

            authorization:`bearer ${localStorage.getItem('accessToken') }`,

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
                <td> <button className='btn btn-primary btn-sm text-white '  onClick={()=> handleMakeAdmin(user._id)}> Make Admin </button> </td>
                <td> <button className='btn bg-blue-500 btn-sm text-white' onClick={()=>deleteUser(user.email)}> Delete </button> </td>
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