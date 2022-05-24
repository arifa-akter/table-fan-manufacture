import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth)
    const {id} =useParams()
    const [purchase, setPurchase] =useState({})
    const{image ,perUnitPrice ,minimumQuantity,availableQuantity ,name ,mQuantity} =purchase
       const [reload ,setIsReload] =useState(true)
    useEffect(()=>{
        fetch(`http://localhost:5000/tools/${id}`)
        .then(res=>res.json())
        .then(data =>{
            setPurchase(data)
            setIsReload(!reload)
        })
    },[id , reload])

    const QuantityIncrease =(event) =>{
        event.preventDefault()
        if(event.target.increase.value < 0 || event.target.increase.value === '0' ){
            toast.error('quantity value is more then 0 please increase quantity')
        }
        //  if(event.target.increase.value<mQuantity){
        //     toast.error('you cannot buy less then minQuantity')
        // }
        //  if(event.target.increase.value>availableQuantity){
        //     toast.error('you cannot buy more then available quantity please put valid value')

        // }
        else{
            const quantityData={
                quantity:parseInt(event.target.increase.value)+parseInt(minimumQuantity)
            }
            fetch (`http://localhost:5000/tools/${id}`,{
                method: 'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(quantityData)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log('success data',data)
              })
        }

    }
    const handleDecrease =(event) =>{
        event.preventDefault()
        const quantityData={
            quantity:parseInt(minimumQuantity)-parseInt(1)
        }
        fetch (`http://localhost:5000/tools/${id}`,{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(quantityData)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('success data',data)

          })

    }

    // handle order
    const handleOrder=(event)=>{
        event.preventDefault()
        const orders={
            product:name,
            Quantity:minimumQuantity,
            price:perUnitPrice,
            email:user?.email,
            address:event.target.address.value,
            phone:event.target.number.value

        }
        console.log(orders)
        fetch('http://localhost:5000/order' ,{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(orders)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast.success(' order submit successfully')
            }
            else{
                toast.error(' order does not submit')
            }
            console.log(data)
        })

    }

    return (
        <section className='lg:mt-40 mt-20 mb-28'>
            <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 shadow-lg pb-5">
                <div className='Product-detail flex justify-center shadow-lg pb-4 '>
                          <div className='p-2'>
                          <img style={{width:'200px', height:'200px'}}src={image} alt="" />
                          <h1 className='pt-2'>name: {name}</h1>
                          <h1 className='pt-2'><span className='text-primary font-bold'>per unit price</span> ${perUnitPrice}</h1>
                          <h1 className='pt-2'><span className='text-primary font-bold'>Quantity</span> {minimumQuantity}</h1>
                          <h1 className='pt-2'><span className='text-primary font-bold'>Minimum Quantity</span> {mQuantity}</h1>
                          <h1 className='pt-2'><span className='text-primary font-bold'>availableQuantity</span> {availableQuantity}</h1>
                          <div className='flex mt-5'>
                          <button className="btn btn-sm bg-primary mt-6 mr-2" onClick={handleDecrease}>Decrease</button>
                              <div>
                              <form onSubmit={QuantityIncrease} action="">
                                 <label htmlFor="supplier" className='text-secondary'>
                                 Quantity increase
                                 </label>
                                <div className='flex'>
                                <input type="number" name="increase" placeholder="set quantity" className="input input-bordered input-sm w-full max-w-xs" />
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
                     <form onSubmit={handleOrder} action="">
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
                       <input type="type" value={user?.displayName}placeholder="" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                       <div>
                       <label htmlFor="supplier" className='text-primary font-bold'>
                        email Address
                       </label>
                       </div>
                       <input type="type" value={user?.email}placeholder="" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                       <div>
                       <label htmlFor="supplier" className='text-primary font-bold'>
                       Home address
                       </label>
                       </div>
                       <input type="type" name="address" placeholder="address" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                       <div>
                       <label htmlFor="supplier" className='text-primary font-bold'>
                       phone Number
                       </label>
                       </div>
                       <input type="type" name="number" placeholder="number" className="input input-bordered input-sm w-full max-w-xs mt-2" />
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