import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";


const Hero = () => {
    const textVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },

      };
    
      const imageVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
      };
  return (
    <section >
     <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <motion.div
        className="mr-auto place-self-center lg:col-span-7"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 0.8 }} // Customize duration here
      >
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Simplify Your Stock Management!
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Our intuitive platform empowers you to track, manage, and optimize your inventory with ease, ensuring you always have what you need when you need it.
        </p>
        <Link
          to="/signup"
          className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#eb042b] hover:bg-[#d40a2d] focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
        >
          Get started
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </motion.div>

      <motion.div
        className="hidden lg:mt-0 lg:col-span-5 lg:flex"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        transition={{ duration: 0.8 }} // Customize duration here
      >
        <img src="ctaimage.jpg" alt="mockup" />
      </motion.div>
    </div>
</section>
  )
}

export default Hero