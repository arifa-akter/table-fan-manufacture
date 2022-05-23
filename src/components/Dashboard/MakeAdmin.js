import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Authentication/Loading'
import UserTable from './UserTable';
const MakeAdmin = () => {
    const {data: users ,isLoading} = useQuery('users',
    ()=> fetch( 'http://localhost:5000/user',).then(res=>{
        return res.json()
       }
        ))
    console.log(users)
    if(isLoading){
    return<Loading></Loading>
    }

    return (
        <section className='mt-11'>
        <div className="overflow-x-auto">
       <table className="table table-compact w-full">
        <thead>
        <tr>
        <th></th>
        <th>email</th>
        <th>Make Admin</th>
        <th>delete</th>
        </tr>
        </thead>
        <tbody>
           {
               users.map((user ,index)=><UserTable
               key={user._id}
               index ={index}
               user={user}
               ></UserTable>)
           }
        </tbody>
        </table>
       </div>
     </section>
    );
};

export default MakeAdmin;