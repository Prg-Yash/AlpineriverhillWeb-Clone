import React from "react";
import {
  FaHome,
  FaImages,
  FaShieldAlt,
  FaComment,
  FaInfoCircle,
  FaEnvelope,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaWhatsapp,
  FaPinterest,
  FaSnapchat,
  FaGoogle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div
        style={{ backgroundImage: "url('/logo-yellow.png')" }}
        className="z-50 h-[60px]"
      ></div>
      <div className="bg-[#fb3]">
        <footer className="container mx-auto p-6 sm:p-10 md:p-20 flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 md:pr-10 flex flex-col justify-start">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
              <h1 className="text-white text-lg font-bold">ALPINE RIVERHILL</h1>
            </div>
            <p className="text-white">
              Alpine Riverhill Villa is a modern & upscale vacation rental villa
              that is passionate about ‘making moments’ and recognising that
              small gestures make a big difference to our guests. We do ordinary
              things in an extraordinary way – a philosophy that has defined our
              brand’s success from the very start.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0 md:px-10 flex flex-col justify-start">
            <h1 className="text-white font-bold mb-4 mt-4 md:mt-0">QUICK LINKS</h1>
            <ul className="text-white">
              <li className="flex items-center whitespace-nowrap mb-2">
                <FaHome className="mr-2 flex-shrink-0" />
                <span>Home</span>
              </li>
              <li className="flex items-center whitespace-nowrap mb-2">
                <FaImages className="mr-2 flex-shrink-0" />
                <span>Gallery</span>
              </li>
              <li className="flex items-center whitespace-nowrap mb-2">
                <FaShieldAlt className="mr-2 flex-shrink-0" />
                <span>Covid 19 Safety Practices</span>
              </li>
              <li className="flex items-center whitespace-nowrap mb-2">
                <FaComment className="mr-2 flex-shrink-0" />
                <span>Testimonials</span>
              </li>
              <li className="flex items-center whitespace-nowrap mb-2">
                <FaInfoCircle className="mr-2 flex-shrink-0" />
                <span>About Us</span>
              </li>
              <li className="flex items-center whitespace-nowrap mb-2">
                <FaEnvelope className="mr-2 flex-shrink-0" />
                <span>Contact Us</span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 md:pl-10 flex flex-col justify-start">
            <h1 className="text-white font-bold mb-4 mt-4 md:mt-0">CONTACT DETAILS</h1>
            <p className="text-white mb-4">
              Address: 
              <span className="block">Bungalow no. 01, River Hill Park Society, Near Sai
              Brooklands, Opp. Sidhu Dhaba, Takve, Old Mumbai-Pune Highway,
              Lonavala - 410405
              </span>
            </p>
            <p className="text-white mb-3">Contact Number: +919930247992 / +919667555554</p>
            <p className="text-white font-bold">Social Links:</p>
            <div className="flex flex-wrap items-center space-x-2">
              <a href="#" className="text-white hover:text-blue-500">
                <FaFacebookSquare className="text-3xl" />
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                <FaTwitterSquare className="text-3xl" />
              </a>
              <a href="#" className="text-white hover:text-pink-500">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#" className="text-white hover:text-green-500">
                <FaWhatsapp className="text-3xl" />
              </a>
              <a href="#" className="text-white hover:text-red-500">
                <FaPinterest className="text-3xl" />
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <FaSnapchat className="text-3xl" />
              </a>
              <a href="#" className="text-white hover:text-red-600">
                <FaGoogle className="text-3xl" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
