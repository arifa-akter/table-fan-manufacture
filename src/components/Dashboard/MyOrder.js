import React, { useEffect, useState }  from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init'
import MyOrderTable from './MyOrderTable';
const MyOrder = () => {
   const [user] = useAuthState(auth)
   const [emailOrder , setEmailOrder] = useState([])
   console.log(emailOrder)
   const email = user?.email
   console.log(email)
   useEffect(()=>{
     fetch(`http://localhost:5000/order?email=${email}`)
     .then(res=>res.json())
     .then(data=>setEmailOrder(data))

   },[email])
   const currentEmail = emailOrder.filter(allUser => allUser.email == email)
   console.log(currentEmail)
   
    return (
      <section className=''>
                 <div className="overflow-x-auto">
               <table className="table table-compact w-full">
                <thead>
                <tr>
                <th></th>
                <th>email</th>
                <th>phone</th>
                <th>price</th>
                <th>product</th>
                </tr>
                </thead>
                <tbody>
               {
              currentEmail.map((emailUser , index) =><MyOrderTable
              index={index}
              key={emailUser._id}
              emailUser={emailUser}
              ></MyOrderTable>)
               }
                </tbody>
                </table>
               </div>
       </section>
    );
};

export default MyOrder;