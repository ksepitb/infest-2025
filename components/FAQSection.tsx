"use client";

import { FAQuestionProps, FAQSectionProps } from "@/types/index";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const FAQuestion: React.FC<FAQuestionProps> = ({
  question,
  answer,
  isOpen,
  onClick,
  index,
}) => {
  const triggerId = `faq-trigger-${index}`;
  const contentId = `faq-content-${index}`;

  return (
    <div className="mb-2 xs:mb-4 rounded-3xl overflow-hidden shadow-lg">
    <button
      className="flex items-start justify-between w-full px-4 py-3 sm:px-7 sm:py-4 text-white font-semibold text-lg [background-image:linear-gradient(180deg,#936FBF_0%,#603394_100%)] transition-colors duration-200 focus:outline-none hover:cursor-pointer"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls={contentId}
      id={triggerId}
    >
      <p className="flex-1 text-left text-sm md:text-base font-bold break-words pr-4">
        {question}
      </p>
      <ChevronDown
        className={`h-6 w-6 text-white transform transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
        className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? "max-h-96 opacity-100 p-4" : "max-h-0 opacity-0"}
          text-white [background-image:linear-gradient(180deg,#936FBF_0%,#603394_100%)]
        `}
      >
        <p
          className={`
            text-xs md:text-sm transition-opacity duration-500
            ${isOpen ? "delay-200 opacity-100" : "opacity-0"}
          `}
        >
      {answer.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ))}
        </p>
      </div>
    </div>
  );
};

const FAQSection: React.FC<FAQSectionProps> = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative overflow-hidden py-4 min-h-fit flex flex-col justify-center items-center"
      data-aos="fade-up"
    >
      <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-6xl mt-20 text-center mb-12">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text">
          Questions
        </span>
      </h1>
      <div className="max-w-3xl mx-auto w-full">
        {faqData.map((item, index) => (
          <FAQuestion
            key={item.value}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
