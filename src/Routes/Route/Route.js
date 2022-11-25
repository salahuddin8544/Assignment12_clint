import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../Blog/Blog';
import Main from '../../Layout/Main';
import Home from '../../pages/Home/Home/Home';
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
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
])
export default router
