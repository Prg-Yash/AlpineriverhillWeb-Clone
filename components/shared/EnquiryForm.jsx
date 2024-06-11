import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const EnquiryForm = () => {
  return (
    <div
      className="relative h-[1169px] md:h-screen bg-cover bg-center text-xs my-[20px]  leading-normal md:py-[25%]"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center  ">
        <div className="p-[24px] text-center">
          <h1 className="text-[26px] text-[#E8762B] font-medium">
            Interested to make your life memorable with Alpine Riverhill?
          </h1>
          <p className="text-white font-medium text-[19px]">
            Fill the below details and our support team will contact you soon
          </p>
        </div>

        <div className="bg-transparent border p-6 shadow-lg w-full  md:w-[700.3px] ">
          <form className="text-white ">
            <h1 className="text-center mb-4 text-[1.5rem]">Enquiry Form</h1>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <label className="block ">Name:</label>
                <input
                  type="text"
                  className="mt-1 block w-full text-gray-700 p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                  placeholder="Full Name"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block ">Phone:</label>
                <input
                  type="tel"
                  className="mt-1 block text-gray-700 w-full  p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                  placeholder="Contact Number"
                />
              </div>
              <div>
                <label className="block ">No. of Guests:</label>
                <input
                  type="number"
                  className="mt-1 block text-gray-700 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                  placeholder="1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block ">Check-In Date:</label>
                <input
                  type="date"
                  className="mt-1 block text-gray-700 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                />
              </div>
              <div>
                <label className="block ">Check-Out Date:</label>
                <input
                  type="date"
                  className="mt-1 block text-gray-700 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mb-4">
              <h2 className="block w-full">Amenities: </h2>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <label htmlFor="meals">Meals</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <label htmlFor="barbeque">Barbeque</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <label htmlFor="sheesha">Sheesha</label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block ">Message:</label>
              <textarea
                className="mt-1 block  w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <div className=" flex  justify-center">
              <button
                type="submit"
                className=" flex items-center gap-2 py-3 text-sm px-4 bg-[#fb3] font-normal  text-white shadow-md hover:bg-orange-700 focus:outline-none"
              >
                <FaPaperPlane className="" />
                SEND ENQUIRY
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
