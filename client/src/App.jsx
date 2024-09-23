import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { useThemeContext } from './contexts/ThemeContext'

const App = () => {
    const {isDarkMode}=useThemeContext()
  return (
    
         <div className=' overflow-x-hidden '>
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className={`relative size-full ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
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

export default App