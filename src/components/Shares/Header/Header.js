import React from 'react';
import { Link,NavLink  } from 'react-router-dom';
import profile from '../../../images/profile.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import './Header.css'
import auth from '../../../firebase.init'
const Header = () => {

    const [user] = useAuthState(auth);
    const logout = () => {
      signOut(auth);
      localStorage.removeItem('accessToken')
    };
    const menuItem =  <>
    <li><NavLink to="/" className="xl:text-lg font-medium text-white">Home</NavLink></li>
    <li><Link to="" className="xl:text-lg font-medium text-white ">About</Link></li>
   {
     user &&  <li><NavLink to="/dashboard" className="xl:text-lg font-medium text-white">DashBoard</NavLink></li>
   }

    <li><NavLink to="/blogs" className="xl:text-lg font-medium text-white">Blogs</NavLink></li>
    </>

    return (
        <section className='header-section'>
          <div className='first-header'>
          <div className='container mx-auto flex justify-between pb-2 pt-2'>
                <div className="logo">
                    {/* <img style={{width:'30px',height:'30px' ,borderRadius:'50%'}} src={fluoride} alt="" /> */}
                </div>
                 <div className="login-sign flex items-center ">
                      <span className='text-white pr-2'>{user?.displayName}</span>
                      {
                        user?
                        <span> <img className='lg:w-[30px] lg:h-[30px] w-[20px] h-[20px] rounded-full'  src={user?.photoURL} alt="" /></span>
                        :
                        <span> <img className='lg:w-[30px] lg:h-[30px] w-[20px] h-[20px] rounded-full'  src={profile} alt="" /></span>
                      }
 
                      {user?
                      <button onClick={logout} className="px-3 xl:text-lg font-medium cursor-pointer text-white">signOut</button>
                      :
                      <Link to="/login"> <span className="px-3 xl:text-lg font-medium">Login</span></Link>
                       }
  
                     <Link to="/Register"><span className="px-3 xl:text-lg font-medium">Register</span></Link>
                 </div> 
             </div>
          </div>
        <div className='bg-[rgba(0,0,0,0.57)]'>
        <div className="navbar p-0 container mx-auto  xl:container xl:mx-auto sm:container sm:mx-auto md:container md:mx-auto">
          <div className="navbar-start py-0">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
               {menuItem}
              </ul>
            </div>
            <Link to="/" className="header-Tital btn btn-ghost normal-case text-base xl:text-xl">Table Fan Part</Link>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <div className="ml-[170px]">
            <ul className="menu menu-horizontal p-0 header-menu">
            {menuItem}
            </ul>
            </div>
          </div>
          <div className="navbar-end">
          <label for="my-drawer-2" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
           </label>
          </div>
        </div>
        </div>
        </section>
      );

};

export default Header;