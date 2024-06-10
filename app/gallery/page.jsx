import Image from "next/image";
import React from "react";

const GalleryPage = () => {
  return (
    <div className="my-10">
      <h1 className="text-[#E8762B] text-[32px] text-center">
        BEAUTY OF ALPINE RIVERHILL
      </h1>
      <p className="text-center text-[24px]">Real Photographs of the Villa</p>
      <div className=" container mx-auto px-32 pt-10 max-w-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[4px] gap-y-4">
          <div>
            <Image
              src="/G1.png"
              className="rounded-lg"
              width={504}
              height={284}
            />
          </div>
          <div>
            <Image
              src="/G2.png"
              className="rounded-lg"
              width={504}
              height={284}
            />
          </div>
          <div>
            <Image
              src="/G3.png"
              className="rounded-lg"
              width={504}
              height={284}
            />
          </div>
          <div>
            <Image
              src="/G4.png"
              className="rounded-lg"
              width={504}
              height={284}
            />
          </div>
          <div>
            <Image
              src="/G5.png"
              className="rounded-lg"
              width={504}
              height={284}
            />
          </div>
          <div>
            <Image
              src="/G6.png"
              className="rounded-lg"
              width={504}
              height={284}
            />
          </div>
          <div>
            <Image
              src="/G7.png"
              className="rounded-lg"
              width={504}
              height={284}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
