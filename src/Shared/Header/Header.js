import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import logo from '../../assest/computer logo.png'
import { AuthContext } from '../../pages/context/AuthProvider';
const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  const signOut=()=>{
    logOut()
    .then(()=>{})
    .catch(err=>console.log(err))
  }
    const menuItem = <>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/blog'}>Blog</Link></li>
    </>
    console.log(user);
    return (
        <div className="navbar bg-base-100 bg-sky-600 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {menuItem}
       {
       user?.uid?<>
          <Link class="m-0 p-0" to={'/dashboard'}><button className='mt-3'>Dashboard</button></Link>
        </>
        :
        <>
            <li><Link to={'/login'}>Login</Link></li>
        </>
       }
        
      </ul>
    </div>
    <img src={logo} className='w-14 rounded-full' alt="" />
    <a className="btn btn-ghost normal-case text-xl"><span className='text-orange-500'>C</span>omputer  <span className='text-orange-500'>H</span>ome</a>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal p-0">
    {menuItem}
    {
       user?.uid?<>
           <Link class="m-0 p-0" to={'/dashboard'}><button className='mt-3'>Dashboard</button></Link>
           <Link class="m-0 p-0" ><button onClick={signOut} className='mt-3'>LogOut</button></Link>
        </>
        :
        <>
            <li><Link to={'/login'}>Login</Link></li>
        </>
       }
 
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>
    );
};

export default Header;