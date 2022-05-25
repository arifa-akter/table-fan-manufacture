import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderTable = ({emailUser ,index}) => {
    const {_id ,email , phone ,price ,product ,Quantity ,totalPrice}=emailUser

    return (
        <tr>
        <th>{index+1}</th>
        <th>{email}</th>
        <td>{phone}</td>
        <td>{price}</td>
        <td>{product}</td>
        <td>{Quantity}</td>
        <td>{totalPrice}</td>
        <td>
            {totalPrice&&<Link to={`/dashboard/payment/${_id}`}><button className="btn btn-xs mt-5">pay</button></Link>}
        </td>
        </tr>
    );
};

export default MyOrderTable;