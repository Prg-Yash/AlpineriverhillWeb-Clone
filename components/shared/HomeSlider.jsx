"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/slide1.jpg", // replace with your image URLs
    "/slide2.jpg",
    "/slide3.jpg",
    "/slide4.jpg",
    "/slide5.jpg",
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-screen flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white z-10"
      >
        <ChevronLeft size={50} className="text-[#007bff]" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white z-10"
      >
        <ChevronRight size={50} className="text-[#007bff]" />
      </button>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index ? "bg-blue-700" : "bg-gray-900"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
