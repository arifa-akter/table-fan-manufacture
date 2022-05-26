import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Purchase = () => {
    const [user] = useAuthState(auth)
    const [admin] =useAdmin(user)
    const {id} =useParams()
    const [purchase, setPurchase] =useState({})
    const{image ,perUnitPrice ,minimumQuantity,availableQuantity ,name ,quantity} =purchase
    const [newQuantity ,setQuantity]=useState('')
    // console.log(newQuantity)
    const totalPrice = parseInt(quantity)*parseInt(perUnitPrice)
    // console.log(totalPrice)

       const [reload ,setIsReload] =useState(true)
    useEffect(()=>{
        fetch(`https://vast-springs-97654.herokuapp.com/tools/${id}`)
        .then(res=>res.json())
        .then(data =>{
            setPurchase(data)
            setIsReload(!reload)
        })
    },[id , reload])
 
    const QuantityIncrease =(event) =>{
        event.preventDefault()
        if(event.target.increase.value === ''||event.target.increase.value < 0 || event.target.increase.value === '0'){
           return toast.error('your input field is blank you cannot buy less then minQuantity')
        }
        //  if(newQuantity == availableQuantity){
        //     return toast.error('you cannot buy less then minQuantity  or negative value')
        // }
        if(event.target.increase.value>availableQuantity ||newQuantity == availableQuantity ||event.target.increase.value == availableQuantity ){
            console.log(quantity) 
           return toast.error('you cannot buy more then available quantity')
          
        }
        
        else{
            const quantityData={
                quantity:parseInt(event.target.increase.value)+parseInt(quantity)
            }
            fetch (`https://vast-springs-97654.herokuapp.com/tools/${id}`,{
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
              setQuantity(quantityData.quantity)
        }

    }
    const handleDecrease =(event) =>{
        event.preventDefault()
        if(quantity < 0 || quantity == 0) {
            return toast.error('you can not Decrease less then 0')
        }

        const quantityData={
            quantity:parseInt(quantity)-parseInt(1)
        }
        fetch (`https://vast-springs-97654.herokuapp.com/tools/${id}`,{
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
          setQuantity(quantityData.quantity)

    }

    // handle order
    const handleOrder=(event)=>{
        event.preventDefault()
        // if(newQuantity!==minimumQuantity){
        //     return toast.error('you can not order less min quantity')   
        // }
        const orders={
            product:name,
            Quantity:quantity,
            price:perUnitPrice,
            email:user?.email,
            address:event.target.address.value,
            phone:event.target.number.value,
            totalPrice:totalPrice

        }
        console.log(orders)
        fetch('https://vast-springs-97654.herokuapp.com/order' ,{
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
                          <h1 className='pt-2'><span className='text-primary font-bold'>minQuantity</span> {minimumQuantity}</h1>
                          <h1 className='pt-2'><span className='text-primary font-bold'>quantity</span> {quantity==='0'?'0':quantity}</h1>
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
                       <input type="type" value={quantity==='0'?'0':quantity}placeholder="set quantity" className="input input-bordered input-sm w-full max-w-xs mt-2" />
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

                       <div>
                       <label htmlFor="supplier" className='text-primary font-bold'>
                       Total Price
                       </label>
                       </div>
                       <input type="type" value={totalPrice} placeholder="number" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                       {
                           admin?<>
                             <button type ="submit" disabled className="btn btn-sm bg-primary ml-2">order Now</button>
                             <span className='text-red-600'>admin can not place order</span>
                                </> 
                                
                                :<>
                                {quantity == minimumQuantity ||quantity >minimumQuantity?
                                <button type ="submit"className="btn btn-sm bg-primary ml-2">order Now</button>
                                :
                                <>
                                <button type ="submit" disabled className="btn btn-sm bg-primary ml-2">order Now</button>
                                 <span className='text-red-600'>please enter minQuantity then button unable for order</span>
                                 </>
                                 }
                                
                               </>
                       }
                      
                       
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