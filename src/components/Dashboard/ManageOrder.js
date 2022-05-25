import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Authentication/Loading';
import ManageOrderTable from './ManageOrderTable';

const ManageOrder = () => {
    const {data: allOrder ,isLoading} = useQuery('allOrder',
    ()=> fetch( 'http://localhost:5000/order',).then(res=>{
        return res.json()
       }
        ))
    if(isLoading){
    return<Loading></Loading>
    }
    return (
        <section className=''>
        <div className="overflow-x-auto">
             <table className="table table-compact w-full">
              <thead>
              <tr>
              <th></th>
              <th>product</th>
              <th>email</th>
              <th>Quantity</th>
              <th>price</th>
              <th>shipping</th>
              <th>pending</th>
              </tr>
              </thead>
              <tbody>
             {
               allOrder.map((order ,index)=><ManageOrderTable
               key={order._id}
               order={order}
               index={index}
               >
               </ManageOrderTable>)
             }
              </tbody>
              </table>
             </div>
     </section>
    );
};

export default ManageOrder;