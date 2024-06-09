"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselContent } from "../../constants/Content";

const GridSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselContent.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselContent.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden relative h-[540px]">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselContent.map((slideContent, index) => (
            <div
              key={index}
              className="min-w-full grid grid-cols-3 grid-rows-3 gap-4 p-4"
              style={{ height: "540px" }}
            >
              {slideContent.map((block) => (
                <div
                  key={block.id}
                  className="w-[300px] h-[180px] flex flex-col items-center justify-center  rounded-lg p-4 text-center"
                >
                  <block.icon className="w-[40px] h-[31px] mb-2 text-[#E8762B]" />
                  <h3 className="text-[14.2px] font-semibold mb-1">
                    {block.title}
                  </h3>
                  <hr className="w-[95px] mx-auto" />
                  <p className="text-[11.5px] text-gray-600">
                    {block.description}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-white text-blue-600  rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-[64px] h-[61px]" />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-white text-blue-600 rounded-full "
        onClick={nextSlide}
      >
        <ChevronRight className="w-[64px] h-[61px] " />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselContent.map((_, index) => (
          <button
            key={index}
            className={`w-1 h-1 rounded-full ${
              currentSlide === index ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GridSlider;
