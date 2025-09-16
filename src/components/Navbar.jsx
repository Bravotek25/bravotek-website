"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/images/logo-dark.png";
import { usePathname } from "next/navigation";
import { MdArrowOutward, MdPersonAddAlt1 } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/about-us", label: "About Us" },
    { path: "/services", label: "Products & Services" },
    { path: "/projects", label: "Projects" },
    { path: "/contact-us", label: "Contact Us" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#ffffff1a] backdrop-blur-[12px]" : "bg-[#fafafa]"}`}>
      <div className="container px-5 md:px-12 lg:px-[144px] ">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              <Image src={Logo} alt="logo" loading="lazy" decoding="async" className="w-[150px] md:w-[180px]  " />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link key={link.path} href={link.path} className="relative group flex items-center">
                  <span
                    className={`relative flex items-center transition-colors duration-300
                      ${isActive ? "text-title" : "text-para"} hover:text-title text-center font-sans font-semibold leading-[24px]
                    `}
                  >
                    <span className="pr-1">{link.label}</span>
                    {/* Arrow Icon - show on hover or if active */}
                    <MdArrowOutward
                      className={`ml-1 text-[18px] transition-all duration-300
                        ${
                          isActive
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                        }
                      `}
                    />
                  </span>
                  {/* Active Link Dot */}
                  {isActive && <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-text-green rounded-full" />}
                </Link>
              );
            })}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/schedule-meeting"
              className="bg-dark-green border border-dark-green flex items-center justify-center py-3 px-6 gap-2 rounded-4xl transition-all duration-300 ease-in-out hover:bg-transparent group"
            >
              <MdPersonAddAlt1 size={24} className="text-white group-hover:text-title transition-all duration-300 ease-in-out" />
              <span className="text-base font-normal font-heading text-center leading-[24px] text-white group-hover:text-title transition-all duration-300 ease-in-out">
                Contact sales
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-transparent p-3 rounded-full text-title hover:bg-[#f1f1f1] focus:outline-none cursor-pointer"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-6 space-y-4 sm:px-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative group flex items-center ${
                    isActive ? "text-title" : "text-para  "
                  } hover:text-title block px-3 py-2 rounded-md text-base font-sans font-semibold leading-[24px]`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative flex items-center w-full">
                    <span className="pr-1">{link.label}</span>
                    <MdArrowOutward
                      className={`ml-1 text-[18px] transition-all duration-300
                        ${
                          isActive
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                        }
                      `}
                    />
                  </span>
                  {isActive && <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-text-green rounded-full" />}
                </Link>
              );
            })}
            <Link
              href="/schedule-meeting"
              className="bg-dark-green border border-dark-green flex items-center justify-center py-3 px-6 gap-2 rounded-4xl transition-all duration-300 ease-in-out hover:bg-transparent group"
              onClick={() => setIsMenuOpen(false)}
            >
              <MdPersonAddAlt1 size={24} className="text-white group-hover:text-title transition-all duration-300 ease-in-out" />
              <span className="text-base font-normal font-heading text-center leading-[24px] text-white group-hover:text-title transition-all duration-300 ease-in-out">
                Contact sales
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
