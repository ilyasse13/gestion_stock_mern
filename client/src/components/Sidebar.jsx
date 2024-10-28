import React from 'react'
import { ClipboardDocumentListIcon, PresentationChartBarIcon, UsersIcon ,UserCircleIcon, Cog6ToothIcon} from '@heroicons/react/24/outline'

const Sidebar = () => {
  const links=[
   {
    span:'Dashboard',
    icon:PresentationChartBarIcon,
    href:'/Dashboard'
   },
   {
    span:'Users',
    icon:UsersIcon,
    href:'/Users'
   },
   {
    span:'Products',
    icon:ClipboardDocumentListIcon,
    href:'/Products'
   },
   {
    span:'Profile',
    icon:UserCircleIcon,
    href:'/Profile'
   },
   {
    span:'Settings',
    icon:Cog6ToothIcon,
    href:'/Settings'
   },
   {
    span:'Users',
    icon:UsersIcon,
    href:'/Users'
   },
   {
    span:'Users',
    icon:UsersIcon,
    href:'/Users'
   }
  ]
  return (
    <aside className="w-1/5 bg-white flex flex-col  px-5  dark:bg-black ">
             

                <div className="flex flex-col justify-between flex-1 mt-6">
                  <nav className="-mx-3 space-y-5 h-full ">
               
                      {
                        links.map((link, index) => {
                          return (
                            <a key={index} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-customRed-200 dark:hover:bg-customRed-400 dark:hover:text-gray-200 hover:text-gray-700" href={link.href}>
                            <link.icon className='w-6'/>
                             <span className="mx-2 text-sm font-medium">{link.span}</span>
                           </a>
                          )
                        })
                 
                      }

                  </nav>
                </div>
             
            </aside>
  )
}

export default Sidebar