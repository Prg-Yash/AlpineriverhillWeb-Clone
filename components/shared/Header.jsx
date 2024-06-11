"use client";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
import { FaVirus } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

import { MdPhotoLibrary } from "react-icons/md";

import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="bg-[#fb3] px-[10px] py-[15px] ">
      <div className="container flex justify-between gap-20 items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" width={80} height={56.7} alt="Logo" />
          <h1 className="text-[20px] text-white ml-2">ALPINE RIVERHILL</h1>
        </Link>
        <div className="lg:flex gap-1 items-center pr-0 hidden ">
          <Link href="/" className="flex items-center p-2 ">
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
              {" "}
              COVID-19 Safety Practices
            </h2>
          </Link>
          <Link href="/offers" className="flex items-center p-2">
            <FaCrown className="mr-2 text-white text-lg w-[20px] h-5 " />
            <h2 className="text-white font-medium">Offers</h2>
          </Link>
          <Link href="/testimonials" className="flex items-center p-2">
            <FaQuoteLeft className="mr-2 text-white text-lg w-[20px] h-5" />

            <h2 className="text-white font-medium"> Testimonials</h2>
          </Link>
          <Link href="/about" className="flex items-center p-2">
            <FaInfoCircle className="mr-2 text-white text-lg w-[20px] h-5" />

            <h2 className="text-white font-medium">About-Us</h2>
          </Link>
          <Link href="/contact" className="flex items-center p-2">
            <FaPhone className="mr-2 text-white text-lg w-[20px] h-5" />

            <h2 className="text-white font-medium"> Contact-Us</h2>
          </Link>
        </div>
        <div className="lg:hidden text-white  items-center">
          <MobileNav className="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
