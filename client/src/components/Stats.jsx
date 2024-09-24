import React, { useEffect, useState } from 'react';

// Counter component to animate numbers
const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = Date.now();
    const easeOut = (t) => t * (2 - t); // Custom easing function for deceleration
    const updateCount = () => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime >= duration * 1000) {
        setCount(end); // Ensure the final value is reached
      } else {
        const progress = elapsedTime / (duration * 1000);
        const easedProgress = easeOut(progress);
        const newValue = Math.floor(easedProgress * end);
        setCount(newValue);
        requestAnimationFrame(updateCount); // Request next animation frame
      }
    };
    updateCount();
  }, [end, duration]);

  return <span>{count}</span>;
};

// Stats component with title, description, and counters
const Stats = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
          Empowering Growth with Real-Time Insights
        </h2>

        <p className="mt-4 text-gray-500 sm:text-xl dark:text-gray-400">
          Track and manage inventory with ease. Our platform empowers businesses with data-driven insights, boosting efficiency and reducing errors.
        </p>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col rounded-lg bg-customRed-100 px-4 py-8 text-center dark:bg-customRed-400">
          <dt className="order-last text-lg font-medium text-gray-500 dark:text-white/75">Stocks Created</dt>
          <dd className="text-4xl font-extrabold text-customRed-300 md:text-5xl dark:text-white">
            +<Counter end={100} duration={5} />
          </dd>
        </div>

        <div className="flex flex-col rounded-lg bg-customRed-100 px-4 py-8 text-center dark:bg-customRed-400">
          <dt className="order-last text-lg font-medium text-gray-500 dark:text-white/75">Users Joined</dt>
          <dd className="text-4xl font-extrabold text-customRed-300 md:text-5xl dark:text-white">
            +<Counter end={800} duration={6} />
          </dd>
        </div>

        <div className="flex flex-col rounded-lg bg-customRed-100 px-4 py-8 text-center dark:bg-customRed-400">
          <dt className="order-last text-lg font-medium text-gray-500 dark:text-white/75">Products Managed</dt>
          <dd className="text-4xl font-extrabold text-customRed-300 md:text-5xl dark:text-white">
            +<Counter end={3000} duration={7} />
          </dd>
        </div>

        <div className="flex flex-col rounded-lg bg-customRed-100 px-4 py-8 text-center dark:bg-customRed-400">
          <dt className="order-last text-lg font-medium text-gray-500 dark:text-white/75">Locations Supported</dt>
          <dd className="text-4xl font-extrabold text-customRed-300 md:text-5xl dark:text-white">
            +<Counter end={50} duration={8} />
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default Stats;
