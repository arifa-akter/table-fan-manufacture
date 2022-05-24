import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    const {id} =useParams()
    const [purchase, setPurchase] =useState({})
    const{image ,perUnitPrice ,minimumQuantity,availableQuantity ,name } =purchase
    console.log(purchase)
       const [reload ,setIsReload] =useState(true)
    useEffect(()=>{
        fetch(`http://localhost:5000/tools/${id}`)
        .then(res=>res.json())
        .then(data =>{
            setPurchase(data)
            setIsReload(!reload)
        })
    },[id , reload])

    return (
        <section className='lg:mt-40 mt-20 mb-28'>
            <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 shadow-lg pb-5">
                <div className='Product-detail flex justify-center shadow-lg pb-4 '>
                          <div className='p-2'>
                          <img style={{width:'200px', height:'200px'}}src={image} alt="" />
                          <h1 className='pt-2'>name: {name}</h1>
                          <h1 className='pt-2'><span className='text-primary font-bold'>per unit price</span> ${perUnitPrice}</h1>
                          <h1 className='pt-2'><span className='text-primary font-bold'>minimumQuantity</span> {minimumQuantity}</h1>
                          <h1 className='pt-2'><span className='text-primary font-bold'>availableQuantity</span> {availableQuantity}</h1>
                          <div className='flex mt-5'>
                          <button className="btn btn-sm bg-primary mt-6 mr-2">Decrease</button>
                              <div>
                              <form action="">
                                 <label htmlFor="supplier" className='text-secondary'>
                                 Quantity increase
                                 </label>
                                <div className='flex'>
                                <input type="number" placeholder="set quantity" className="input input-bordered input-sm w-full max-w-xs" />
                                <button className="btn btn-sm bg-primary ml-2">increase</button>
                                </div>
                                </form>
                              </div>
                          </div>
                          </div>
                </div>
                <div className='order-product p-5'>
                   <h1 className="text-primary text-2xl font-bold ">order</h1>
                   <div className=''>
                     <div>
                     <form action="">
                      <p>
                      <label htmlFor="supplier" className='text-primary font-bold'>
                        product name
                       </label>
                      </p>
                       <input type="type" value={name}placeholder="set quantity" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                       <div>
                       <label htmlFor="supplier" className='text-primary font-bold'>
                        Quantity
                       </label>
                       </div>
                       <input type="type" value={minimumQuantity}placeholder="set quantity" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                       <div>
                       <label htmlFor="supplier" className='text-primary font-bold'>
                       perUnitPrice
                       </label>
                       </div>
                       <input type="type" value={perUnitPrice}placeholder="set quantity" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                       <div>
                       <label htmlFor="supplier" className='text-primary font-bold'>
                       name
                       </label>
                       </div>
                       <input type="type" value={user?.displayName}placeholder="set quantity" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                       <div>
                       <label htmlFor="supplier" className='text-primary font-bold'>
                        email Address
                       </label>
                       </div>
                       <input type="type" value={user?.email}placeholder="set quantity" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                       <div>
                       <label htmlFor="supplier" className='text-primary font-bold'>
                       Home address
                       </label>
                       </div>
                       <input type="type" placeholder="set quantity" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                       <div>
                       <label htmlFor="supplier" className='text-primary font-bold'>
                       phone Number
                       </label>
                       </div>
                       <input type="type" placeholder="set quantity" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                       <button type ="submit"className="btn btn-sm bg-primary ml-2">order Now</button>
                       </form>
                     </div>
                   </div>
                </div>

            </div>
            </div>

        </section>
    );
};

export default Purchase;