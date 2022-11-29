import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../../Hook/useAdmin/useAdmin';
import Loading from '../../../Loading/Loading';
import { AuthContext } from '../../../pages/context/AuthProvider';


const AdminRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthContext);
    const [isAdmin] = useAdmin()
    if(loading){
           return <Loading></Loading>
    }
    if(isAdmin && !user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children
};

export default AdminRoute;