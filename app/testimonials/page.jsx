"use client";
import SwiperCo from "../../components/shared/SwiperCo";
import { testimonialsContent } from "../../constants/Content";
const TestimonialsPage = () => {
  return (
    <div className="my-10">
      <h1 className="text-[#E8762B] text-[32px] text-center mb-2">
        What our Guests say about us?{" "}
      </h1>
      <p className="text-center text-[24px] mb-2">Every Review matters</p>
      <hr className="flex w-[50%] mx-auto mb-5" />
      <SwiperCo />
    </div>
  );
};

export default TestimonialsPage;
