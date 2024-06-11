import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="my-10 px-4">
      <h1 className="text-[#E8762B] text-[32px] text-center">
        COVID-19 Safety Practices
      </h1>
      <p className="text-center text-[24px] mb-2">You are truly safe here!</p>
      <hr className="w-[50%] mx-auto" />
      <div className="container mx-auto pt-5 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <Image
              src="/covid1.jpg"
              width={504}
              height={284}
              className="w-full"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/covid1.jpg"
              width={504}
              height={284}
              className="w-full"
            />
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <Image
              src="/covid1.jpg"
              width={504}
              height={284}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
