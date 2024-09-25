import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

function Contact() {
    const form = useRef();
    const [sending, setSending] = useState(false);
    const [succeeded, setSucceeded] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true);

        // Get input values from the form
        const formData = new FormData(form.current);
        const fromName = formData.get("user_name");
        const toName = "Ilyasse"; // Change this as necessary
        const fromEmail = formData.get("user_email");
        const message = formData.get("message");

        // Send the email using EmailJS
        emailjs.send("service_5goos0n", "template_ox21hng", {
            from_name: fromName,
            to_name: toName,
            fromEmail: userEmail,
            message: message,
        }, "mE8cWeLD5vtCzZ6HR")
            .then((result) => {
                setSucceeded(true);
                setSending(false);
            }, (error) => {
                console.error("Failed to send email:", error);
                setSending(false);
            });

        e.target.reset();  // Reset form after submission
    };

    return (
        <section
            className="min-h-screen bg-cover mb-2 shadow"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}
        >
            <div className="flex flex-col min-h-screen bg-black/60">
                <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
                    <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                        <div className="text-white lg:w-1/2 lg:mx-6">
                            <h1 className="text-2xl font-semibold capitalize lg:text-3xl">Contact us</h1>
                            <p className="max-w-xl mt-6">
                                Have questions or feedback? We'd love to hear from you! Feel free to reach out to our dedicated team via email, phone, or by filling out the contact form below.
                            </p>
                        </div>

                        <div className="mt-8 lg:w-1/2 lg:mx-6">
                            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                                <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">Contact form</h1>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    Ask us anything, and we would love to hear from you.
                                </p>

                                <form ref={form} className="mt-6" onSubmit={sendEmail}>
                                    <div className="flex-1 mt-6">
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Your Name</label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            placeholder="John Doe"
                                            className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border  rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-customRed-400 focus:ring-customRed-400 focus:ring-opacity-40 dark:focus:border-customRed-500 focus:outline-none focus:ring"
                                            required
                                        />
                                    </div>

                                    <div className="flex-1 mt-6">
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            placeholder="johndoe@example.com"
                                            className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border  rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-customRed-400 focus:ring-customRed-400 focus:ring-opacity-40 dark:focus:border-customRed-500 focus:outline-none focus:ring"
                                            required
                                        />
                                    </div>

                                    <div className="w-full mt-6">
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                        <textarea
                                            name="message"
                                            className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 bg-white border  rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-customRed-400 focus:ring-customRed-400 focus:ring-opacity-40 focus:outline-none focus:ring"
                                            required
                                        />
                                    </div>


                                    <button
                                        className="w-60 rounded px-1 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-customRed-500 hover:bg-customRed-400 focus:outline-none  "
                                        type="submit"
                                        disabled={sending}
                                        style={{ cursor: sending ? 'not-allowed' : 'pointer' }}
                                    >
                                        {sending ? "Sending..." : "Send"}
                                    </button>

                                    {succeeded && (
                                        <p className="flex text-green-600" style={{ marginTop: "1.7rem", fontSize: "18px" }}>
                                            {/* <div className="wrapper">
                                                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                                    <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                                    <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                                </svg>
                                            </div> */}
                                            Your message has been sent successfully!
                                        </p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
