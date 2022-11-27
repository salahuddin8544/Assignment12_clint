import React, { useContext } from 'react';
import {Link, Outlet} from 'react-router-dom';
import { AuthContext } from '../../pages/context/AuthProvider';
import Header from '../../Shared/Header/Header';


const DashBoardLayout = () => {
const  {user} = useContext(AuthContext);


  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}

          <Outlet> </Outlet>
       
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay" />
          <ul className="menu text-primary font-semibold p-4 w-80 bg-base-100 ">
            {/* <!-- Sidebar content here --> */}
            <li ><Link to='/dashboard'> My Orders </Link></li>
            {/* if isAdmin user.role ? then show the all  user option  */}
            { 
            <>
               <li><Link to='/dashboard/allusers'> All Users</Link></li>
               <li> <Link to='/dashboard/addproducts' > Add Products </Link> </li>
               <li> <Link to='/dashboard/seereport' > See Report </Link> </li>
             
            </> 
            }
          </ul>

        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;