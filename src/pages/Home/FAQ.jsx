import React, { useState } from "react";

export default function FAQ({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="w-full py-16 px-6 bg-white flex flex-col items-center">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          <span className="inline-flex items-center gap-2">
            <span className="text-cyan-600 text-4xl">?</span> Frequently Asked
            Questions
          </span>
        </h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm md:text-base">
          Have questions? We've got answers! Explore our FAQs to learn more
          about how Stackly AI works, its features, and how it can help you
          streamline your tasks effortlessly.
        </p>
      </div>

      <div className="w-full max-w-2xl bg-gray-50 rounded-xl shadow-md p-4 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-sm"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-medium focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-gray-600 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
