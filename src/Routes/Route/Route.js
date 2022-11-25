import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../Blog/Blog';
import Main from '../../Layout/Main';
import Categories from '../../pages/Home/Categories/Categories';
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
            },
            {
                path:'/categories',
                element:<Categories></Categories>
            },
            {
                path:'/categoires/:id',
                element:<Categories></Categories>
            }
        ]
    }
])
export default router
