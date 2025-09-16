"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { FaChevronDown } from "react-icons/fa";

const faqQuestions = [
  {
    question: "What services does BRAVOTEK offer?",
    answer:
      "BRAVOTEK specializes in IT consulting, smart cabling, network design and installation, cybersecurity, and ongoing infrastructure support for businesses of all sizes.",
  },
  {
    question: "How do I know which networking solution is right for my business?",
    answer:
      "Our team provides a free initial consultation to assess your needs and recommend the most effective, scalable, and secure networking solutions tailored to your business goals.",
  },
  {
    question: "Can BRAVOTEK upgrade my existing network infrastructure?",
    answer:
      "Absolutely! We can audit your current setup, identify areas for improvement, and implement upgrades to ensure your network is fast, reliable, and future-ready.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive support packages, including remote monitoring, troubleshooting, and on-site maintenance to keep your systems running smoothly.",
  },
  {
    question: "How secure are your networking solutions?",
    answer:
      "Security is our top priority. We implement industry best practices, advanced firewalls, and proactive monitoring to protect your data and ensure compliance with relevant standards.",
  },
  {
    question: "How can I get started with BRAVOTEK?",
    answer:
      "Simply contact us through our website or call our support team. We’ll schedule a consultation to discuss your needs and develop a customized solution for your business.",
  },
];

const FAQSection = () => {
  const [isOpen, setIsOpen] = useState(0);

  const toggleFAQ = (index) => {
    setIsOpen(isOpen === index ? null : index); // Toggle the selected question
  };

  return (
    <section id="faqSection" className="px-5 py-16 md:py-24 md:px-12 lg:px-[144px] w-full">
      <article
        className="container mx-auto max-w-7xl flex flex-col md:flex-row gap-10 items-start justify-center w-full"
        data-aos="fade-up"
      >
        <div className="flex-1 flex flex-col gap-8 items-start">
          <div className="flex flex-col gap-4 items-start max-w-[500px] " data-aos="fade-up" data-aos-delay="200">
            {/* <span className="text-neon-green text-sm sm:text-base leading-[160%] uppercase">Questions & Answers</span> */}
            <h2 className="text-dark-green text-xl sm:text-2xl md:text-4xl font-bold leading-tight md:leading-[116%] capitalize">
              Frequently Asked Questions
            </h2>
            <p className="text-para text-sm sm:text-base leading-relaxed md:leading-[160%] mt-4">
              If you have any questions, please check the FAQ section below. If you still need assistance, feel free to reach out to our
              support team. We’re here to help!
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 flex-1">
          {faqQuestions.map((faq, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start gap-4 rounded-2xl border border-neutral-200 p-4 w-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between gap-8 w-full cursor-pointer" onClick={() => toggleFAQ(index)}>
                <h3 className="text-title text-base leading-[150%]">{faq.question}</h3>
                <button
                  type="button"
                  className="text-lg font-bold transform transition-transform duration-300 cursor-pointer"
                  style={{
                    transform: isOpen === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <FaChevronDown />
                </button>
              </div>

              {/* Animated Answer Section */}
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: isOpen === index ? "auto" : 0,
                  opacity: isOpen === index ? 1 : 0,
                }}
                transition={{
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2 },
                }}
                className="overflow-hidden"
              >
                <p className="text-para text-base  leading-[150%]">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default FAQSection;
