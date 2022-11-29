import React, { useContext } from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import useAdmin from '../../Hook/useAdmin/useAdmin';
import useSeller from '../../Hook/useSeller/useSeller';
import { AuthContext } from '../../pages/context/AuthProvider';
import Header from '../../Shared/Header/Header';


const DashBoardLayout = () => {
const  {user} = useContext(AuthContext);
// call the custom admin check hook , to verify user email role admin
const [isAdmin] = useAdmin(user?.email)
// isSeller verify and get access ..if userType is seller 
const [isSeller] = useSeller(user?.email)
console.log(isAdmin,isSeller)


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
          <ul className="menu mt-8 text-primary font-semibold p-4 w-80 bg-base-100 ">

            { isSeller == "buyer" &&
              <li ><NavLink  className="mt-4 bg-slate-200 " to='/dashboard'> My Orders </NavLink></li>
            }

          

          {/* if isAdmin user.role ? then show the all  user option  */}
          {/* {isAdmin&& */}
          {
              <> 
             { 
              isAdmin && 
              <li> <NavLink className="mt-4 bg-slate-300" to='/dashboard/allusers'> All Users</NavLink></li> 
              &&
             <li> <NavLink className="mt-4 bg-slate-300" to='/dashboard/seereport' > See Report </NavLink> </li>
             }
              
               
               
             </>
             
                 
          }
              {/*isSeller?.role == "seller &&  isAdmin?.role == "admin"&&*/}
          {/* { isSeller == "seller" && */}
          {
                 <>
                <li> <NavLink className="mt-4 bg-slate-200" to='/dashboard/myproducts' > My  Products </NavLink> </li> 
                 <li> <NavLink className="mt-4 bg-slate-200" to='/dashboard/addproducts' > Add Products </NavLink> </li>  
                 </>  
                               
          }      
           
        
          </ul>

        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
