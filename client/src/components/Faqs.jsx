import React, { useState } from 'react';

const Faqs = () => {
    const faqs = [
        {
          question: "What is your return policy?",
          answer: "You can return any item within 30 days for a full refund."
        },
        {
          question: "How long does shipping take?",
          answer: "Shipping usually takes 5-7 business days."
        },
        {
          question: "Do you offer customer support?",
          answer: "Yes, we offer 24/7 customer support. Feel free to reach out!"
        },
        {
          question: "Can I track my order?",
          answer: "Yes, you will receive a tracking number once your order is shipped."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship to over 100 countries worldwide. Shipping rates and delivery times may vary depending on the destination."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, and Apple Pay."
        },
        {
          question: "Can I change or cancel my order?",
          answer: "You can modify or cancel your order within 24 hours of placing it. Please contact our support team for assistance."
        },
        {
          question: "Do you offer discounts for bulk orders?",
          answer: "Yes, we offer special pricing for bulk orders. Contact our sales team for more information."
        },
        {
          question: "Is my personal information secure?",
          answer: "We prioritize your privacy and use advanced encryption technology to keep your personal data secure."
        },
        {
          question: "What happens if my package is lost or damaged?",
          answer: "If your package is lost or arrives damaged, please contact our support team within 48 hours, and we'll assist with a replacement or refund."
        }
      ];
      
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-4xl  mx-auto py-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 dark:border-gray-200">
            <button
              className="w-full text-left py-4 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {faq.question}
              </h3>
            </button>
            {activeIndex === index && (
              <div className="pl-4 pb-4 text-gray-700 dark:text-gray-400">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
