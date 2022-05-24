import React from 'react';

const ManageOrderTable = ({order ,index}) => {
  const{email ,product,price ,Quantity} =order
    return (
        <tr>
        <th>{index+1}</th>
        <th>{product}</th>
    
        <td>{email}</td>
        <td>{Quantity}</td>
        <td>{price}</td>
        </tr>
    );
};

export default ManageOrderTable;