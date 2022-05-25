import React from 'react';

const MyOrderTable = ({emailUser ,index}) => {
    const {email , phone ,price ,product ,Quantity}=emailUser
    return (
        <tr>
        <th>{index+1}</th>
        <th>{email}</th>
        <td>{phone}</td>
        <td>{price}</td>
        <td>{product}</td>
        <td>{Quantity}</td>
        </tr>
    );
};

export default MyOrderTable;