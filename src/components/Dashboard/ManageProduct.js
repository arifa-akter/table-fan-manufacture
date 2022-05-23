// import React, { useEffect, useState } from 'react';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Authentication/Loading';
import ManageProductTable from './ManageProductTable';

const ManageProduct = () => {
    const {data: manageProduct ,isLoading ,refetch} = useQuery('manageProduct',
    ()=> fetch( 'http://localhost:5000/tools',).then(res=>{
        return res.json()
       }
        ))
    if(isLoading){
    return<Loading></Loading>
    }
    return (
        <section className='mt-11'>
                <div className="overflow-x-auto">
               <table className="table table-compact w-full">
                <thead>
                <tr>
                <th></th>
                <th>name</th>
                <th>image</th>
                <th>minQuantity</th>
                <th>perPrice</th>
                <th>Quantity</th>
                <th className='lg:hidden hidden'>description</th>
                <th>delete</th>
                </tr>
                </thead>
                <tbody>
               {
                  manageProduct?.map((product ,index)=><ManageProductTable
                  key={product._id}
                  product={product}
                  index={index}
                  refetch={refetch}
                  ></ManageProductTable>) 
               }
                </tbody>
                </table>
               </div>
        </section>
    );
};

export default ManageProduct;