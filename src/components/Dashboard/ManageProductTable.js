import React from 'react';
import { toast } from 'react-toastify';

const ManageProductTable = ({product , index , refetch}) => {
    const{ _id ,name , image ,minimumQuantity ,perUnitPrice,availableQuantity ,description}=product
    const handleProduct =(id)=>{
       fetch(`http://localhost:5000/tools/${id}` , {
         method:'DELETE'
       })
       .then(res => res.json())
       .then(data => {
         if(data.deletedCount){
           toast.success(`${name} product delete`)
           refetch()
         }
       })
       
    }
    return (
        <tr>
        <th>{index+1}</th>
        <th>{name }</th>
        <td>
        <div className="avatar">
          <div className="w-16 rounded">
            <img src={image} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
        </td>
        <td>{minimumQuantity}</td>
        <td>{perUnitPrice}</td>
        <td>{availableQuantity}</td>
        <td className='lg:hidden hidden'>{description}</td>
        <td><button className="btn btn-xs bg-accent" onClick={()=>handleProduct(_id)}>Delete</button></td>
        </tr>
    );
};

export default ManageProductTable;