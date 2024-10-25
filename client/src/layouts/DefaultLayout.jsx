import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useThemeContext } from '../contexts/ThemeContext'
import Sidebar from '../components/Sidebar'
import { useAuthStore } from '../store/authStore'


const DefaultLayout = () => {
  const {  user,logout } = useAuthStore();
  const navigate= useNavigate()
  const handleSignOut = async (e) => {
    e.preventDefault()
    try {
      await logout()
     navigate('/login')
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', onClick: handleSignOut },
  ]
 
  const { isDarkMode, toggleTheme } = useThemeContext()

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className={`${isDarkMode ? "bg-black" : "bg-white"} shadow-md`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    alt="Your Company"
                    src={isDarkMode ? 'darkmodelogo-removebg-preview.png': 'newlogo-removebg-preview.png'}
                    className=" w-28"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-72 flex items-center space-x-4">
                    <div className="relative">
                      <input
                        type="text"
                        className="pl-10 pr-12 w-72 ring-1 focus:outline-none py-2 rounded-lg border border-gray-300 focus:border-customRed-500 focus:ring-2 ring-customRed-200 bg-white text-sm text-gray-700 shadow-md"
                        placeholder="Search..."
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-customRed-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className={`mr-4 rounded-full ${isDarkMode ? 'bg-yellow-600 text-gray-900' : 'bg-gray-400 text-gray-900'} p-1  hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}
                    aria-label="Toggle dark/light mode"
                  >
                    {isDarkMode ? (
                      <SunIcon className='w-5' />
                    ) : (
                      <MoonIcon className='w-5' />
                    )}
                  </button>
                  <button
                    type="button"
                    className="relative rounded-full bg-customRed-300 p-1 text-white  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-400">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img alt="" src={user?.image ? user.image : ''} className="h-8 w-8 rounded-full" />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <a
                            href={item.href || '#'}
                            onClick={item.onClick || undefined} // Add onClick only if it's present
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                          >
                            {item.name}
                          </a>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">

            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img alt="" src={user?.image ? user.image : ''} className="h-10 w-10 rounded-full" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">{user.name}</div>
                  <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                </div>

                <button
                  type="button"
                  className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>

        <section className="shadow">
          <div className="mx-auto max-w-7xl   flex">

            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <main className="w-4/5 pl-2 pt-1 ">

              <div className=" h-[483px] overflow-y-auto">
                {/* This is where your dynamic content will be displayed */}
                <Outlet />
              </div>
            </main>
          </div>
        </section>


      </div>
    </>
  )
}

export default DefaultLayout

