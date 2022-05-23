import React from 'react';
import {Link, NavLink, Outlet } from 'react-router-dom';
const Dashboard = () => {
    return (
      <section className='pt-28'>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
          <div className="drawer-content flex flex-col">
         <h2 className='text-5xl text-accent text-center'>DashBoard</h2>
       <Outlet></Outlet>
          </div> 
          <div className="drawer-side">
       <label for="my-drawer-2" class="drawer-overlay"></label> 
       <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 bg-secondary text-base-content">
         {/* <!-- Sidebar content here --> */}
         <li className="font-bold text-white"><Link to="/dashboard">My Order</Link></li>
         <li className="font-bold text-white"><NavLink to="/dashboard/addReview">Add Review</NavLink></li>
         <li className="font-bold text-white"><NavLink to="/dashboard/MyProfile">My Profile</NavLink></li>
         <li className="font-bold text-white"><NavLink to="/dashboard/manageOrder">Manage Order</NavLink></li>
         <li className="font-bold text-white"><NavLink to="/dashboard/addProduct">Add Product</NavLink></li>
         <li className="font-bold text-white"><NavLink to="/dashboard/makeAdmin">Make Admin</NavLink></li>
         <li className="font-bold text-white"><NavLink to="/dashboard/manageProduct">Manage product</NavLink></li>
       </ul>
     
       </div>
       </div>
      </section>
    );
};

export default Dashboard;