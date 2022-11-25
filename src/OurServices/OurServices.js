import React from 'react';
import { FaCarSide,FaBackspace,FaAmazonPay,FaHandPeace } from "react-icons/fa";
const OurServices = () => {
    return (
        <div className='my-7 bg-gray-200 py-7'>
           <div className='text-center justify-items-center'>
            <h2 className='text-4xl text-bold'>Our Extra Services</h2>
           </div>
           <div className=''>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-5'>
            <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                    <div className='flex justify-start items-center'>
                    <FaCarSide className='text-orange-700 text-6xl'></FaCarSide>
                        <div className="ml-5">
                        <h3 className='text-2xl'>Free Delivery</h3>
                        <p className='text-gray-500 font-medium'>From $10</p>
                        </div>
                    </div>
                    </div>
                    </div>
            <div className="card w-96 bg-base-100 shadow-xl sm:mt-4">
                    <div className="card-body">
                    <div className='flex justify-start items-center'>
                    <FaBackspace className='text-orange-700 text-6xl'></FaBackspace>
                        <div className="ml-5">
                        <h3 className='text-2xl'>365 Days</h3>
                        <p className='text-gray-500 font-medium'>For free return</p>
                        </div>
                    </div>
                    </div>
                    </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                    <div className='flex justify-start items-center'>
                    <FaAmazonPay className='text-orange-700 text-6xl'></FaAmazonPay>
                        <div className="ml-5">
                        <h3 className='text-2xl'>Payment</h3>
                        <p className='text-gray-500 font-medium'>secure systems</p>
                        </div>
                    </div>
                    </div>
                    </div>
           </div>
           </div>
        </div>
    );
};

export default OurServices;