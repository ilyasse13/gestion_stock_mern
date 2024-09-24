import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const Testimonials = () => {
    const testimonials = [
        {
            name: "Bonnie Green",
            position: "Developer at Open AI",
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
            title: "Speechless with how easy this was to integrate",
            content: [
                "I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.",
                "Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.",
                "If you care for your time, I hands down would go with this."
            ]
        },
        {
            name: "Roberta Casas",
            position: "Lead designer at Dropbox",
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
            title: "Solid foundation for any project",
            content: [
                "FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project.",
                "Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"
            ]
        },
        {
            name: "Jese Leos",
            position: "Software Engineer at Facebook",
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
            title: "Mindblowing workflow and variants",
            content: [
                "As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite my mind was 🤯.",
                "Everything is so well structured and simple to use (I've learnt so much about Figma by just using the toolkit).",
                "Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."
            ]
        },
        {
            name: "Joseph McFall",
            position: "CTO at Google",
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
            title: "Efficient Collaborating",
            content: [
                "This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.",
                "You have many examples that can be used to create a fast prototype for your team."
            ]
        }
    ];

    return (
        <section className="">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What Our Users Say</h2>
                    <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                        Discover the experiences of our users who have transformed their projects using our toolkit.
                    </p>
                </div>
                <div className="grid mb-8 lg:mb-12 lg:grid-cols-2 gap-4">
                    {testimonials.map((testimonial, index) => {
                        // Define animation direction
                        const isLeft = index % 2 === 0; // First and third come from the left
                        return (
                            <motion.figure
                                key={index}
                                initial={{ opacity: 0, x: isLeft ? -200 : 200 }} // Move from left or right
                                whileInView={{ opacity: 1, x: 0 }} // Animate to final position when in view
                                transition={{ duration: 0.8, delay: index * 0.2 }} // Delays between animations
                                // Slight scale effect on hover
                                viewport={{ once: true }} // Ensures the animation happens only the first time in view
                                className="flex flex-col justify-center items-center p-5 text-center bg-black border border-gray-200 rounded-lg dark:bg-gray-50 dark:border-gray-100"
                            >
                                <figcaption className="flex justify-center items-center space-x-3 mb-4">
                                    <img className="w-9 h-9 rounded-full" src={testimonial.image} alt="profile picture" />
                                    <div className="space-y-0.5 font-medium text-white text-left dark:text-black">
                                        <div>{testimonial.name}</div>
                                        <div className="text-sm font-light text-gray-200 dark:text-gray-800">{testimonial.position}</div>
                                    </div>
                                </figcaption>
                                <blockquote className="mx-auto mb-8 max-w-2xl text-gray-400 dark:text-gray-800">
                                    <h3 className="text-lg font-semibold text-gray-100 dark:text-black">{testimonial.title}</h3>
                                    {testimonial.content.map((paragraph, idx) => (
                                        <p key={idx} className="my-4">"{paragraph}"</p>
                                    ))}
                                </blockquote>
                            </motion.figure>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
