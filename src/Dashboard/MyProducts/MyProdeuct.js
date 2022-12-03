import { useQuery } from '@tanstack/react-query';
import React,{useContext} from 'react';
import Loading from '../../Loading/Loading';
import { AuthContext } from '../../pages/context/AuthProvider';
import { toast } from 'react-hot-toast';

const MyProdeuct = () => {
     const {user} = useContext(AuthContext)
    const url = `http://localhost:5000/products/${user?.email}`
    const {data:products,isLoading,refetch} = useQuery({
       queryKey:['products'],
       queryFn: async() => {
         const res = await fetch(url);
         const data = res.json()
         return data ;
       }        
    })
    if(isLoading){
        return <Loading > </Loading>
    }
    const handleproduct = (_id) =>{
        console.log(_id);
        fetch(`http://localhost:5000/products/${_id}`,{
            method:'PUT'
        })
        .then(res=>res.json())
    .then(data=> {

       if(data.deletedCount >0){
        refetch()
        toast('Product deleted')
       }
    })

    }
    console.log(products)
    return (
        <div>
            <h2 className='text-2xl font-bold my-3 text-primary'> My All Products  </h2>
            <div>
      <div className="overflow-x-auto mt-5">
     <table className="table w-full">

        <thead className=''>
        <tr className='head-row'>
            <th>No</th>
            <th> Product Name </th>
            <th> Product Image </th>
            <th>  Product Price </th>
            <th> ResalePrice </th>
            <th> Delete </th>
        </tr>
        </thead>
        <tbody className='text-primary'>
         {products?
            products?.map((product ,i) =>   
            <tr key={product._id}>
                <td> {i+1} </td>
                <td> {product.brand} </td>
                <td> <img src={product.photoURL} className="w-20 h-20 rounded-md" alt='product img' />  </td>
                <td> {product.originalPrice} </td>
                <td> {product.reselPrice} </td>
                <td> <button  className='btn btn-primary' onClick={()=>handleproduct(product._id)}>Delete</button></td>
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

export default MyProdeuct;