import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import AddToy from "../pages/Toys/AddToy";
import ShowAll from "../pages/Toys/ShowAll";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/Toys/MyToys";


const route=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
               path:"/",
               element:<Home/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:'/signup',
                element:<SignUp/>
            },
            {
                path:"/addtoy",
                element:<PrivateRoute><AddToy/></PrivateRoute>
            },
            {
                path:"/showall",
                element:<ShowAll/>
            },
            {
                path:"/mytoys",
                element:<MyToys/>
            }
        ]
    }
])

export default route;