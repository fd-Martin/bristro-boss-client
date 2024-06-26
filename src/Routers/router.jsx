import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Menu from "../Page/Menu/Menu/Menu";
import Order from "../Page/Order/Order/Order";
import Login from "../Page/LogIn/Login";
import SignUp from "../Page/SignUp/SignUp";
import Secret from "../Page/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Page/Dashboard/MyCart/MyCart";
import AllUsers from "../Page/Dashboard/AllUsers/AllUsers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute> 
            }
        ]
    },
    {

        path:"/dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:'mycart',
                element:<MyCart></MyCart>
            },
            {
                path:'allusers',
                element:<AllUsers></AllUsers>
            },
        ]
    }
]);

export default router;