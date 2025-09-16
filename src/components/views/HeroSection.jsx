"use client";
import Banner from "../Banner";
import { HiChevronDoubleDown } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "motion/react";
import heroImg from "../../../public/assets/images/heroImg.png";

import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Banner absolute at the top */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Banner />
      </div>

      {/* Main Content */}
      <div
        className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto text-center px-4  md:pt-40 z-30"
        data-aos="fade-up"
      >
        <h1 className="relative z-10 mx-auto max-w-5xl text-center text-2xl font-bold text-green md:text-4xl lg:text-7xl md:leading-20 tracking-wide">
          {"Empowering Your Business with Smart IT Solutions".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-2xl py-4 text-center text-base md:text-lg font-normal text-neutral-700"
        >
          At BRAVOTEK, we deliver innovative IT solutions that drive efficiency and growth. Whether you need robust networking, seamless
          integration, or expert support, our team ensures your business stays ahead in a rapidly evolving digital world.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full"
        >
          <Link
            href="/schedule-meeting"
            className="bg-dark-green border border-dark-green flex items-center justify-center py-3 px-6 gap-2 rounded-4xl transition-all duration-300 ease-in-out hover:bg-transparent group cursor-pointer w-full md:w-fit"
          >
            <FaPhoneAlt size={20} className="text-white group-hover:text-dark-green" />
            <span className="text-base font-normal font-heading text-center leading-[24px] text-white group-hover:text-title transition-all duration-300 ease-in-out">
              Schedule a Call
            </span>
          </Link>
          <Link
            href="/services"
            className="bg-transparent border border-dark-green flex items-center justify-center py-3 px-6 gap-2 rounded-4xl transition-all duration-300 ease-in-out hover:bg-dark-green group  cursor-pointer w-full md:w-fit"
          >
            <span className="text-base font-normal font-heading text-center leading-[24px] text-dark-green group-hover:text-white transition-all duration-300 ease-in-out">
              Explore the Business
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Down Button */}
      <div
        className="absolute bottom-6 flex flex-col items-center z-30 cursor-pointer "
        data-aos="fade-in"
        onClick={() => {
          if (typeof window !== "undefined") {
            const aboutSection = document.getElementById("aboutSection");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }
        }}
      >
        <HiChevronDoubleDown className="text-2xl md:text-3xl scrolling" />
        <span className="text-xs md:text-sm mt-1">Scroll Down</span>
      </div>
    </section>
  );
};

export default HeroSection;
