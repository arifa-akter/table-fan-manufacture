import React from 'react';
import { toast } from 'react-toastify';

const UserTable = ({user , index , refetch}) => {
    const {email ,role}=user
    const addAdmin=()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
            })
            .then(res=>{
                if(res.status === 403){
                   toast.error('field to fetch you cannot make admin')
                }
                 return res.json()
             })
            .then(data => {
                if(data.modifiedCount >0){
                    refetch()
                    console.log(data)
                    toast.success (`successfully made an admin`)
                }
               
            })
    }
 
    return (
        <tr>
        <th>{index+1}</th>
        <td>{email}</td>
        <td>{ role!== 'admin'&& <button onClick={addAdmin} className="btn btn-xs">make Admin</button>}</td>
        <td><button className="btn btn-xs bg-accent">X</button></td>
        </tr>
    );
};

export default UserTable;