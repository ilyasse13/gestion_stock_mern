import React from 'react'
import { useThemeContext } from '../contexts/ThemeContext'

const Footer = () => {
  const {isDarkMode}=useThemeContext()
  return (
    <footer className="">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center ">
          <img src={isDarkMode ? 'darkmodelogo-removebg-preview.png': 'newlogo-removebg-preview.png'} className='h-20' alt="Company Logo" />
        </div>

        <p className="mx-auto mt-6 max-w-full text-center leading-relaxed text-gray-500">
        At Inventory SS we strive to provide the best services tailored to your needs. Our team is dedicated to ensuring your satisfaction and delivering quality results.
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          {["About", "Careers", "History", "Services", "Projects", "Blog"].map((item, index) => (
            <li key={index}>
              <a className="text-gray-700 dark:text-gray-300 transition hover:text-gray-800 dark:hover:text-gray-100" href={`/${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          {[
            { name: 'Facebook', path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
            { name: 'Twitter', path: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },

          ].map((icon, index) => (
            <li key={index}>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 transition hover:text-gray-900"
              >
                <span className="sr-only">{icon.name}</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d={icon.path} clipRule="evenodd" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-sm text-gray-700 dark:text-gray-400">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        </p>

      </div>
    </footer>

  )
}

export default Footer