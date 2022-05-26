import React, { useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import auth from '../../firebase.init'
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L3MSBBzxejXIMvVMzlAtuLvUb9aL6dUVNDSpLPUb5Hgasm8oIruxkvZZtZADBtV4hUeR4eNisoscqc9cAATjVCy00xbGK5EKu');
const PaymentOrder = () => {
    const {id}=useParams()
    const [user] = useAuthState(auth)
    const [orderPayment , setOrderPayment] = useState({})
    const {product ,totalPrice}=orderPayment
   
    
    useEffect(()=>{
        fetch(`https://vast-springs-97654.herokuapp.com/orderPayment/${id}`)
        .then(res=>res.json())
        .then(data=>setOrderPayment(data))
   
      },[id])
    return (
        <div className="container mx-auto">
           <h1 className='text-2xl text-primary'>please pay</h1> 
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 m-2">
           <div class="card lg:w-[400px] bg-base-100 shadow-xl">
            <div class="card-body">
            <h1 className='text-xl text-primary'><span className='text-secondary' >Hallo :</span>{user?.displayName}</h1> 
               <h1 className='text-xl text-primary'><span className='text-secondary' >Order Product Name  :</span>{product}</h1> 
               <h1 className='text-xl text-primary'><span className='text-secondary' >price :</span> $ {totalPrice}</h1>
                </div>
            </div>
            <div class="card lg:w-[400px] bg-base-100 shadow-xl">
            <div class="card-body">
            <Elements stripe={stripePromise}>
                 <CheckoutForm
                 orderPayment={orderPayment}
                 />
            </Elements>
                </div>
            </div>
            </div>
        </div>
   );
};

export default PaymentOrder;