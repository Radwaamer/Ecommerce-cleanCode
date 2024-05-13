import { createBrowserRouter } from 'react-router-dom';

// layouts
import MainLayout from '@layouts/mainLayout/MainLayout';

// routes
import Home from '@pages/Home';
import Categories from '@pages/Categories';
import Products from '@pages/Products';
import AboutUs from '@pages/AboutUs';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Error from '@pages/Error';


export const router= createBrowserRouter([
    {path:"/", element:<MainLayout />, errorElement:<Error />, children:[
        {index:true, element: <Home />},
        {path:"home", element: <Home />},
        {path:"categories", element: <Categories />},
        {path:"products/:prefix", element: <Products />, loader: ({params})=>{
            if(typeof(params.prefix)!=="string"|| !/^[a-z]+$/i.test(params.prefix)){
                throw new Response("Bad Request", {
                    status: 400,
                    statusText: "Category not found"
                })
            }
            return true;
        }},
        {path:"about-us", element: <AboutUs />},
        {path:"login", element: <Login />},
        {path:"register", element: <Register />},
    ]}
])