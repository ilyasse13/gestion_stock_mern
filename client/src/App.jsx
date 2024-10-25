import React, { useEffect } from 'react'
import {   Navigate, RouterProvider } from 'react-router-dom'
import { useThemeContext } from './contexts/ThemeContext'

import Signup from './views/Signup'
import Login from './views/Login'
import EmailVerificationPage from './views/EmailVerificationPage'
import ResetPasswordPage from './views/ResetPasswordPage'
import Dashboard from './views/Dashboard'
import ForgotPasswordPage from './views/ForgotPasswordPage'
import { useAuthStore } from './store/authStore'
import { router } from './routes/router'
import LoadingSpinner from './components/LoadingSpinner'

export const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	if (!user.isVerified) {
		return <Navigate to='/verify-email' replace />;
	}

	return children;
};

// redirect authenticated users to the home page
export const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (isAuthenticated && user.isVerified) {
		return <Navigate to='/dashboard' replace />;
	}

	return children;
};
const App = () => {
  const { checkAuth ,isAuthenticated,isCheckingAuth, user } = useAuthStore();
    const {isDarkMode}=useThemeContext()
    useEffect(() => {
      checkAuth();
    }, [checkAuth]);
    if (isCheckingAuth) return <LoadingSpinner />;
  
  
  return (
    
         <div className=' overflow-x-hidden '>
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className={`relative size-full ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
            <div
                className={`absolute inset-0 ${
                    isDarkMode
                        ? 'bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#fff_70%,transparent_110%)]'
                        : 'bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]'
                }`}
            />
        </div>
      </div>
     <RouterProvider router={router}/>
     
    </div>
  )
}

export default App;