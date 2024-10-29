import { createBrowserRouter, Navigate } from "react-router-dom";
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

import EmailVerificationPage from "../views/EmailVerificationPage";
import ForgotPasswordPage from "../views/ForgotPasswordPage";
import ResetPasswordPage from "../views/ResetPasswordPage";
import { useAuthStore } from "../store/authStore";
import Users from "../views/Users";
import Products from "../views/Products";
import Profile from "../views/Profile";
import Settings from "../views/Settings";



const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, user } = useAuthStore()

    if (!isAuthenticated) {
        return <Navigate to='/login' replace />;
    }

    if (!user.isVerified) {
        return <Navigate to='/verify-email' replace />;
    }

    return children;
};


const RedirectAuthenticatedUser = ({ children }) => {
    const { isAuthenticated, user } = useAuthStore()

    if (isAuthenticated && user.isVerified) {
        return <Navigate to='/Dashboard' replace />;
    }

    return children;
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RedirectAuthenticatedUser>
            <Welcome />
        </RedirectAuthenticatedUser>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/Features",
                element: <Features />
            },
            {
                path: "/Pricing",
                element: <Pricing />
            },
            {
                path: "Support",
                element: <Support />
            },
            {
                path: "/About",
                element: <About />
            }
        ]
    },
    {
        path: "/",
        element:<RedirectAuthenticatedUser> <GuestLayout /> </RedirectAuthenticatedUser>,
        children: [
            {
                path: "/login",
                element: 
                    <Login />
               
            },
            {
                path: '/signUp',
                element: <Signup />
            }
        ]
    },
    {
        path: "/",
        element: <ProtectedRoute><DefaultLayout /></ProtectedRoute>,
        children: [
            {
                path: "/Dashboard",

                element:
                    <Dashboard />

            },
            {
                path: "/Users",
                element: <Users />
            },
            {
                path: "/Products",
                element: <Products />
            },
            {
                path: "/Profile",
                element: <Profile />
            },
            {
                path: "/Settings",
                element: <Settings />
            }
        ]
    },
    {
        path: '/verify-email',
        element: <EmailVerificationPage />
    },
    {
        path: '/forgot-password',
        element: <RedirectAuthenticatedUser>
            <ForgotPasswordPage />
        </RedirectAuthenticatedUser>
    },
    {
        path: '/reset-password/:token',
        element:
            <RedirectAuthenticatedUser>
                <ResetPasswordPage />
            </RedirectAuthenticatedUser>
    }
])