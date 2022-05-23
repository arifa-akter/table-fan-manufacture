import React from 'react';

const UserTable = ({user , index}) => {
    const{email} = user
    return (
        <tr>
        <th>{index+1}</th>
        <td>{email}</td>
        <td><button className="btn btn-xs bg-accent">Make Admin</button></td>
        <td><button className="btn btn-xs bg-accent">X</button></td>
        </tr>
    );
};

export default UserTable;