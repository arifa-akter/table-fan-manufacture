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
        <td>
        <button for="delete-modal" className="btn btn-xs mt-5">shipping</button>
        </td>
        <td>
        <button for="delete-modal" className="btn btn-xs mt-5">pending</button>
        </td>
        </tr>
    );
};

export default ManageOrderTable;