import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../Blog/Blog';
import Main from '../../Layout/Main';
import Categories from '../../pages/Home/Categories/Categories';
import Home from '../../pages/Home/Home/Home';
import Products from '../../pages/Home/Products/Products';
import Login from '../../pages/Login/Login';
import SignUp from '../../pages/SignUp/SignUp';
import PrivateRoute from './../PrivateRoute/PrivateRoute';
const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/categories',
                element:<Categories></Categories>
            },
            {
                path:'/categoires/:id',
                element:<PrivateRoute><Products></Products></PrivateRoute>,
               loader:({params})=> fetch(`http://localhost:5000/categoires/${params.id}`)
            }
        ]
    }
])
export default router
