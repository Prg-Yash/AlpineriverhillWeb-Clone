"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaBars,
  FaTimes,
  FaVirus,
  FaCrown,
  FaQuoteLeft,
  FaInfoCircle,
  FaPhone,
  FaHome,
} from "react-icons/fa";
import { MdPhotoLibrary } from "react-icons/md";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`bg-[#fb3] px-[10px] transition-all duration-300 ease-in-out ${
        isScrolled ? "fixed top-0 left-0 right-0 z-50 py-[12px]" : "py-[15px]"
      }`}
      style={{
        borderBottomLeftRadius: isScrolled ? "15px" : "0",
        borderBottomRightRadius: isScrolled ? "15px" : "0",
        boxShadow: isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div className=" px-2 flex justify-between items-center transition-all duration-300 ease-in-out">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            width={isScrolled ? 70 : 80}
            height={isScrolled ? 50 : 56.7}
            alt="Logo"
            className="transition-all duration-300 ease-in-out"
          />
          <h1
            className={`text-sm  md:text-xl text-white ml-2 transition-all duration-300 ease-in-out ${
              isScrolled ? "text-[18px]" : "text-[20px]"
            }`}
          >
            ALPINE RIVERHILL
          </h1>
        </Link>
        <div className="hidden lg:flex gap-1 items-center pr-0">
          <Link href="/" className="flex items-center p-2">
            <FaHome className="mr-2 text-white text-lg w-[20px] h-5" />
            <h2 className="text-white font-medium">Home</h2>
          </Link>
          <Link href="/gallery" className="flex items-center p-2">
            <MdPhotoLibrary className="mr-2 text-white text-lg w-[20px] h-5 " />
            <h2 className="text-white font-medium">Gallery</h2>
          </Link>
          <Link href="/covid" className="flex items-center p-2">
            <FaVirus className="mr-2 text-white text-lg w-[20px] h-5 " />
            <h2 className="text-white font-medium">
              COVID-19 Safety Practices
            </h2>
          </Link>
          <Link href="/offers" className="flex items-center p-2">
            <FaCrown className="mr-2 text-white text-lg w-[20px] h-5 " />
            <h2 className="text-white font-medium">Offers</h2>
          </Link>
          <Link href="/testimonials" className="flex items-center p-2">
            <FaQuoteLeft className="mr-2 text-white text-lg w-[20px] h-5" />
            <h2 className="text-white font-medium">Testimonials</h2>
          </Link>
          <Link href="/about" className="flex items-center p-2">
            <FaInfoCircle className="mr-2 text-white text-lg w-[20px] h-5" />
            <h2 className="text-white font-medium">About-Us</h2>
          </Link>
          <Link href="/contact" className="flex items-center p-2">
            <FaPhone className="mr-2 text-white text-lg w-[20px] h-5" />
            <h2 className="text-white font-medium">Contact-Us</h2>
          </Link>
        </div>
        <div className="lg:hidden flex items-center text-white">
          <button onClick={toggleMobileMenu} className="text-2xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#fb3] text-white absolute top-[65px] left-0 right-0 z-40 transition-all duration-300 ease-in-out">
          <nav className="flex flex-col items-start pl-4">
            <Link
              href="/"
              className="flex items-center py-4"
              onClick={toggleMobileMenu}
            >
              <FaHome className="mr-2 text-lg w-[20px] h-5" />
              <h2 className="font-medium">Home</h2>
            </Link>
            <Link
              href="/gallery"
              className="flex items-center py-4"
              onClick={toggleMobileMenu}
            >
              <MdPhotoLibrary className="mr-2 text-lg w-[20px] h-5 " />
              <h2 className="font-medium">Gallery</h2>
            </Link>
            <Link
              href="/covid"
              className="flex items-center py-4"
              onClick={toggleMobileMenu}
            >
              <FaVirus className="mr-2 text-lg w-[20px] h-5 " />
              <h2 className="font-medium">COVID-19 Safety Practices</h2>
            </Link>
            <Link
              href="/offers"
              className="flex items-center py-4"
              onClick={toggleMobileMenu}
            >
              <FaCrown className="mr-2 text-lg w-[20px] h-5 " />
              <h2 className="font-medium">Offers</h2>
            </Link>
            <Link
              href="/testimonials"
              className="flex items-center py-4"
              onClick={toggleMobileMenu}
            >
              <FaQuoteLeft className="mr-2 text-lg w-[20px] h-5" />
              <h2 className="font-medium">Testimonials</h2>
            </Link>
            <Link
              href="/about"
              className="flex items-center py-4"
              onClick={toggleMobileMenu}
            >
              <FaInfoCircle className="mr-2 text-lg w-[20px] h-5" />
              <h2 className="font-medium">About-Us</h2>
            </Link>
            <Link
              href="/contact"
              className="flex items-center py-4"
              onClick={toggleMobileMenu}
            >
              <FaPhone className="mr-2 text-lg w-[20px] h-5" />
              <h2 className="font-medium">Contact-Us</h2>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
