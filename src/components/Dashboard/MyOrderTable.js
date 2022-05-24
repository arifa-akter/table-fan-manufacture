import React from 'react';

const MyOrderTable = ({emailUser ,index}) => {
    const {email , phone ,price ,product}=emailUser
    return (
        <tr>
        <th>{index+1}</th>
        <th>{email}</th>
        <td>{phone}</td>
        <td>{price}</td>
        <td>{product}</td>
        </tr>
    );
};

export default MyOrderTable;