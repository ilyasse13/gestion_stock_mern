import React from 'react';
import Demo from '../components/Demo';

const Features = () => {
  // Array of features
  const features = [
    {
      title: 'Store Management',
      description: 'Easily manage your inventory, track stock levels, and organize products efficiently.',
      icon: (
        <svg
          className="w-5 h-5 text-customRed-400 lg:w-6 lg:h-6 dark:text-customRed-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
        </svg>
      ),
    },
    {
      title: 'Creating Members',
      description: 'Add and manage team members, assign roles, and control access to various features.',
      icon: (
        <svg
          className="w-5 h-5 text-customRed-400 lg:w-6 lg:h-6 dark:text-customRed-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fillRule="evenodd" d="M10 3a3 3 0 00-3 3v1a3 3 0 000 6v1a3 3 0 006 0v-1a3 3 0 000-6V6a3 3 0 00-3-3z" clipRule="evenodd" />
          <path d="M3 13a7 7 0 1114 0H3z" />
        </svg>
      ),
    },
    {
      title: 'Sales Tracking',
      description: 'Monitor sales data in real-time, analyze trends, and generate reports to improve business decisions.',
      icon: (
        <svg
          className="w-5 h-5 text-customRed-400 lg:w-6 lg:h-6 dark:text-customRed-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 10h1V9H2v1zm0 1h1v1H2v-1zm0 1h1v1H2v-1zm0 1h1v1H2v-1zm0 1h1v1H2v-1zm0 1h1v1H2v-1zm0 1h1v1H2v-1zM6 3v1h8V3H6zm0 2h8v1H6V5zM4 7h8v1H4V7zm0 2h8v1H4V9zm0 2h8v1H4v-1zm0 2h8v1H4v-1zm0 2h8v1H4v-1zm0 2h8v1H4v-1zm0 2h8v1H4v-1z" />
        </svg>
      ),
    },
    {
      title: 'Inventory Alerts',
      description: 'Get notified about low stock levels and ensure you never run out of essential products.',
      icon: (
        <svg
          className="w-5 h-5 text-customRed-400 lg:w-6 lg:h-6 dark:text-customRed-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 7h2v2H9V7zm0 4h2v4H9v-4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: 'Reporting & Analytics',
      description: 'Access detailed reports and analytics to make informed decisions for your business.',
      icon: (
        <svg
          className="w-5 h-5 text-customRed-400 lg:w-6 lg:h-6 dark:text-customRed-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3 11H7v-2h6v2zm0-4H7V7h6v2z" />
        </svg>
      ),
    },
    {
      title: 'User Management',
      description: 'Manage user roles and permissions to ensure secure access to sensitive information.',
      icon: (
        <svg
          className="w-5 h-5 text-customRed-400 lg:w-6 lg:h-6 dark:text-customRed-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fillRule="evenodd" d="M10 3a3 3 0 00-3 3v1a3 3 0 000 6v1a3 3 0 006 0v-1a3 3 0 000-6V6a3 3 0 00-3-3z" clipRule="evenodd" />
          <path d="M3 13a7 7 0 1114 0H3z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Here at InventoSphere, we focus on providing tools that enhance your stock management capabilities.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-customRed-100 lg:h-12 lg:w-12 dark:bg-customRed-500">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Demo/>
    </section>
  );
};

export default Features;
