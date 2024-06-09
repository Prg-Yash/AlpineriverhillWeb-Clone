"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselContent } from "../../constants/Content";

const GridSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [gridsPerSlide, setGridsPerSlide] = useState(9);

  // Update gridsPerSlide based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setGridsPerSlide(3); // Show 1 grid in 3 rows on small screens
      } else {
        setGridsPerSlide(9); // Show 3 grids in 3 rows on medium screens and up
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(carouselContent.flat().length / gridsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden relative h-[540px]">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="min-w-full grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 p-4 justify-items-center"
              style={{ height: "540px" }}
            >
              {carouselContent
                .flat()
                .slice(
                  slideIndex * gridsPerSlide,
                  (slideIndex + 1) * gridsPerSlide
                )
                .map((block) => (
                  <div
                    key={block.id}
                    className="w-full max-w-[300px] h-[180px] flex flex-col items-center justify-center rounded-lg p-4 text-center"
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
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-transparent text-blue-600 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-[64px] h-[61px]" />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-transparent text-blue-600 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="w-[64px] h-[61px]" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-1 h-1  rounded-full ${
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
