import React, { useEffect, useState } from 'react';
import ManageProductTable from './ManageProductTable';

const ManageProduct = () => {
    const [manageProduct ,setManageProduct] = useState([])
    console.log(manageProduct)
    useEffect(()=>{
        fetch('http://localhost:5000/tools')
        .then(res=>res.json())
        .then(data=>setManageProduct(data))
    },[])
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
                  manageProduct.map((product ,index)=><ManageProductTable
                  key={product._id}
                  product={product}
                  index={index}
                  ></ManageProductTable>) 
               }
                </tbody>
                </table>
               </div>
        </section>
    );
};

export default ManageProduct;