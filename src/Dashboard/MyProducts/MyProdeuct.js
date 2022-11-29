import { useQuery } from '@tanstack/react-query';
import React,{useContext} from 'react';
import Loading from '../../Loading/Loading';
import { AuthContext } from '../../pages/context/AuthProvider';

const MyProdeuct = () => {
     const {user} = useContext(AuthContext)
    const url = `https://assignment12-server-beta.vercel.app/products?email=${user?.email}`
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