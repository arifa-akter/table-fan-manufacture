import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id} =useParams()
    const [purchase, setPurchase] =useState({})
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
        <div className='mt-28'>
            <h1>helow percher </h1>
        </div>
    );
};

export default Purchase;