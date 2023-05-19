import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import AddToy from "../pages/Toys/AddToy";
import ShowAll from "../pages/Toys/ShowAll";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/Toys/MyToys";
import SingleToyDeatiels from "../pages/Toys/SingleToyDeatiels";
import UpdateMyToyes from "../pages/Toys/UpdateMyToyes";


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
                element:<PrivateRoute><ShowAll/></PrivateRoute>,
                loader:()=> fetch("https://toy-center-server.vercel.app/toys")
            },
            {
                path:"/mytoys",
                element:<PrivateRoute><MyToys/></PrivateRoute>
            },
            {
                path:"/toy/:id",
                element:<SingleToyDeatiels/>,
                loader:({params})=> fetch(`https://toy-center-server.vercel.app/toys/${params.id}`)
            },
            {
                path:"/updateMyToes/:id",
                element:<PrivateRoute><UpdateMyToyes/></PrivateRoute>,
                loader:({params})=> fetch(`https://toy-center-server.vercel.app/toys/${params.id}`)
            }
        ]
    }
])

export default route;