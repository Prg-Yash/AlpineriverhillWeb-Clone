import React from "react";

const Footer = () => {
  return (
    <>
      <div
        style={{ backgroundImage: "url('/logo-yellow.png')" }}
        className="z-50 h-[60px]"
      ></div>
      <div className="bg-[#fb3]">
        <footer className=" h-[412px] container p-20 justify-center items-center w-full flex  gap-52">
          <div className="">
            <h1>RIVERHILL</h1>
            <p className="w-[295px] h-[172px]">
              Alpine Riverhill Villa is a modern & upscale vacation rental villa
              that is passionate about ‘making moments’ and recognising that
              small gestures make a big difference to our guests. We do ordinary
              things in an extraordinary way – a philosophy that has defined our
              brand’s success from the very start.
            </p>
          </div>
          <div className="w-[268px] h-[252px]">
            <h1 className="">QUICK LINKS</h1>

            <ul>
              <li>Home</li>
              <li>Gallery</li>
              <li>Covid 19 Safety Practices</li>
              <li>Testimonials</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h1>
              CONTACT DETAILS
              <p>
                Address: Bungalow no. 01, River Hill Park Society, Near Sai
                Brooklands, Opp. Sidhu Dhaba, Takve, Old Mumbai-Pune Highway,
                Lonavala - 410405
              </p>
              <p>Contact Number: +919930247992 / +919667555554</p>
            </h1>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
