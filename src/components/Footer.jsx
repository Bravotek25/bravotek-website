"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 pt-12 pb-4 border-t border-gray-300 px-5 py-16 md:py-24 md:px-12 lg:px-[144px] w-full">
      <div className="container w-full flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
        {/* Logo & Description */}
        <div className="flex-shrink-0 flex flex-col items-start  max-w-xs">
          <Image src="/assets/images/logo-dark.png" alt="BravoTek Logo" width={180} height={40} className="mb-2" />

          <p className="text-gray-700 text-base">
            At the intersection of technology and business growth delivering mission critical IT support, secure server networks, and future
            ready strategies.
          </p>
        </div>

        {/* Right Columns Container */}
        {/* <div className="flex flex-col sm:flex-row justify-between gap-8 md:gap-20"> */}
        {/* Quick Links */}
        <div className=" flex flex-col items-start space-y-4 min-w-[150px]">
          <h3 className="text-green-600 font-bold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="/services" className="hover:text-green-700 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-green-700 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="/about-us" className="hover:text-green-700 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-green-700 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* Contacts */}
        <div className=" flex flex-col items-start space-y-4 min-w-[180px]">
          <h3 className="text-dark-green font-bold text-lg mb-2">Contacts</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-dark-green" /> info@bravotek.net
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-dark-green" /> +1 (470) 377-1988
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-dark-green" /> 6400 Atlantic Blvd Peachtree Corners
              <br className="hidden md:block" /> GA 30071 Atlanta Branch
            </li>
          </ul>
        </div>
        {/* Newsletter */}
        {/* <div className="flex flex-col items-start space-y-4 w-full md:w-fit">
            <h3 className="text-dark-green font-bold text-lg mb-2">Newsletter</h3>
            <p className="text-gray-700">Subscribe to get the latest updates and news.</p>
            <form className="flex w-full ">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-3 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-dark-green"
              />
              <button type="submit" className="bg-dark-green text-white px-4 py-2 rounded-r-lg font-semibold cursor-pointer">
                Join
              </button>
            </form>
          </div> */}
      </div>
      {/* </div> */}
      {/* Bottom Bar */}
      <div className="container pt-6 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
        <span className="text-gray-500 text-sm">© 2025 All rights reserved by BravoTek</span>
        <div className="flex gap-4 text-2xl text-gray-500">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-dark-green">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-dark-green">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-dark-green">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
