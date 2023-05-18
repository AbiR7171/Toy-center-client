import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";


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
            }
        ]
    }
])

export default route;