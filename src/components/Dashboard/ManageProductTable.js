import React from 'react';


const ManageProductTable = ({product , index , refetch ,setDeleteModal}) => {
    const{name , image ,minimumQuantity ,perUnitPrice,availableQuantity ,description}=product 
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

        <td>
        <label for="delete-modal" onClick={()=>setDeleteModal(product)} className="btn btn-xs mt-5">delete</label>
        </td>
        </tr>
    );
};

export default ManageProductTable;