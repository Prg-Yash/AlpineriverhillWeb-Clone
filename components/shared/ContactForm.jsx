import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  return (
    <form className="text-black pt-4 h-full flex flex-col p-4">
      <h1 className="text-center mb-4 text-[1.5rem]">Enquiry Form</h1>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <label className="block">Name:</label>
          <input
            type="text"
            className="mt-1 block w-full text-gray-700 p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            placeholder="Full Name"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block">Phone:</label>
          <input
            type="tel"
            className="mt-1 block text-gray-700 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            placeholder="Contact Number"
          />
        </div>
        <div>
          <label className="block">No. of Guests:</label>
          <input
            type="number"
            className="mt-1 block text-gray-700 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            placeholder="1"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block">Check-In Date:</label>
          <input
            type="date"
            className="mt-1 block text-gray-700 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block">Check-Out Date:</label>
          <input
            type="date"
            className="mt-1 block text-gray-700 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block">Message:</label>
        <textarea
          rows={5}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          placeholder="Type your message here..."
        ></textarea>
      </div>
      <div className="flex justify-center ">
        <button
          type="submit"
          className="flex items-center gap-2 py-3 text-sm px-4 bg-[#fb3] font-normal text-white shadow-md hover:bg-orange-700 focus:outline-none"
        >
          <FaPaperPlane />
          SEND
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
