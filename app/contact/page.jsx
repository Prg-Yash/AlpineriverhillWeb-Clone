import React from "react";
import ContactForm from "../../components/shared/ContactForm";
import Image from "next/image";
import {
  FaBuilding,
  FaEnvelope,
  FaFacebookSquare,
  FaGlobe,
  FaGoogle,
  FaInstagram,
  FaMobile,
  FaPhone,
  FaPinterest,
  FaSnapchat,
  FaTwitterSquare,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 my-8">
      <div>
        <h1 className="text-[#E8762B] text-[32px] text-center">
          CONTACT ALPINE RIVERHILL{" "}
        </h1>
        <p className="text-center text-[24px]">Book Your Villa Now!</p>
        <hr className="flex mx-auto w-[50%]" />
      </div>
      <div className="flex flex-col md:flex-row justify-between py-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border h-auto py-15 flex flex-col justify-center p-4  w-full md:w-[430px] mb-4 mx-auto">
            <div className="mx-auto">
              <Image
                src="/contact.jpg"
                width={209}
                height={209}
                className="rounded-full border-[5px] border-[#858635]"
                alt="Contact"
              />
            </div>
            <div className="px-4 md:px-0">
              <div className="mb-4">
                <h2 className="flex items-center text-[1rem] text-[#858635] font-medium gap-2 mb-2">
                  <FaBuilding />
                  Address:
                </h2>
                <p className="text-base  ">
                  Bungalow no. 01, River Hill Park Society, Near Sai Brooklands,
                  Opp. Sidhu Dhaba, Takve, Old Mumbai-Pune Highway, Lonavala -
                  410405
                </p>
              </div>
              <div className="mb-4">
                <h2 className="flex items-center text-[1rem] text-[#858635] font-medium gap-2 mb-2">
                  <FaPhone />
                  Contact Number:
                </h2>
                <p className="text-base ">
                  <Link href="tel:+919930247992 ">+91 9930247992</Link> /{" "}
                  <Link href="tel:+919667555554">+91 9667555554</Link>
                </p>
              </div>
              <div className="mb-4">
                <h2 className="flex items-center text-[1rem] text-[#858635] font-medium gap-2 mb-2">
                  <FaEnvelope />
                  Email:
                </h2>
                <p className="">
                  <Link href="mailto:shazaan@alpineriverhill.com ">
                    shazaan@alpineriverhill.com
                  </Link>
                </p>
              </div>
              <div className="mb-4">
                <h2 className="flex items-center text-[1rem] text-[#858635] font-medium gap-2 mb-2">
                  <FaGlobe />
                  Website:
                </h2>
                <p className="">
                  <Link href="http://www.alpineriverhill.com">
                    www.alpineriverhill.com
                  </Link>
                </p>
              </div>
              <div className="mb-4">
                <h2 className="flex items-center text-[1rem] text-[#858635] font-medium gap-2 mb-2">
                  <FaMobile />
                  Social Links:
                </h2>
                <div className="flex flex-wrap  md:justify-start items-center space-x-2">
                  <a href="#" className="text-black hover:text-blue-500">
                    <FaFacebookSquare className="text-3xl" />
                  </a>
                  <a href="#" className="text-black hover:text-blue-400">
                    <FaTwitterSquare className="text-3xl" />
                  </a>
                  <a href="#" className="text-black hover:text-pink-500">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#" className="text-black hover:text-green-500">
                    <FaWhatsapp className="text-3xl" />
                  </a>
                  <a href="#" className="text-black hover:text-red-500">
                    <FaPinterest className="text-3xl" />
                  </a>
                  <a href="#" className="text-black hover:text-yellow-400">
                    <FaSnapchat className="text-3xl" />
                  </a>
                  <a href="#" className="text-black hover:text-red-600">
                    <FaGoogle className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border w-full md:w-[655px] h-auto md:h-[640.8px] p-4">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 mb-5">
        <div className="col-span-12 md:col-start-2 md:col-end-12 p-4 md:p-10">
          <div className="flex flex-col gap-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7555.546757545719!2d73.50081!3d18.763657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ab505efdc4ed%3A0x1a6a32d5a25efa9b!2sAlpine%20Riverhill%20Villa%2C%20Lonavala%20(6%20BHK)!5e0!3m2!1sen!2sin!4v1718108413358!5m2!1sen!2sin"
              className="w-full h-[500px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
