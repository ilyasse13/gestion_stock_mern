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
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <RedirectAuthenticatedUser>
                    <Login />
                </RedirectAuthenticatedUser>
            },
            {
                path: '/signUp',
                element: <RedirectAuthenticatedUser>
                    <Signup />
                </RedirectAuthenticatedUser>
            }
        ]
    },
    {
        path: "/",
        element:<ProtectedRoute><DefaultLayout /></ProtectedRoute>,
        children: [
            {
                path: "/Dashboard",

                element: 
                    <Dashboard />
               
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