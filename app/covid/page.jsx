import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="my-10">
      <h1 className="text-[#E8762B] text-[32px] text-center">
        COVID-19 Safety Practices
      </h1>
      <p className="text-center text-[24px] mb-2">You are truly safe here!</p>
      <hr className="w-[50%] mx-auto" />
      <div className="container mx-auto pt-5  flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="md:col-span-1">
            <Image src="/covid1.jpg" width={504} height={284} className="" />
          </div>
          <div className="md:col-span-1">
            <Image src="/covid1.jpg" width={504} height={284} className="" />
          </div>
          <div className="md:col-start-1 md:  col-end-7 flex justify-center">
            <Image src="/covid1.jpg" width={504} height={284} className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
