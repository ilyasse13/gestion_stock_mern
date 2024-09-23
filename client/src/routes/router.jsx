import { createBrowserRouter } from "react-router-dom";
import Welcome from "../layouts/Welcome";
import Home from "../views/Home";
import GuestLayout from "../layouts/GuestLayout";
import Signup from "../views/Signup";
import Login from "../views/Login";
import DefaultLayout from "../layouts/DefaultLayout";
import Dashboard from "../views/Dashboard";
import Features from "../views/Features";
import Pricing from "../views/Pricing";
import Support from "../views/Support";
import About from "../views/About";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Welcome/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/Features",
                element: <Features/>
            },
            {
                path: "/Pricing",
                element: <Pricing/>
            },
            {
                path: "Support",
                element: <Support/>
            },
            {
                path: "/About",
                element: <About/>
            }
        ]
    },
    {
        path: "/",
        element: <GuestLayout/>,
        children: [
            {
                path:"/login",
                element: <Login/>
            },
            {
                path:'/signUp',
                element: <Signup/>
            }
        ]
    },
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
                path: "/Dashboard",
                element: <Dashboard/>
            }
        ]
    }
])