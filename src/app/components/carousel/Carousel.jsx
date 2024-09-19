"use client";
import React, { useEffect, useState } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    "https://devsriwararak.com/wp-content/uploads/2023/11/webport.webp",
    "https://devsriwararak.com/wp-content/uploads/2023/08/finalp.webp",
    "https://devsriwararak.com/wp-content/uploads/2023/09/fb-post-1.webp",
    "https://devsriwararak.com/wp-content/uploads/2023/08/fb-post.webp",
    "https://devsriwararak.com/wp-content/uploads/2024/08/port.png",
    "https://devsriwararak.com/wp-content/uploads/2024/09/Frame-1-2.webp"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const prevSlide = () => {
    setActiveIndex((Prev) => (Prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActiveIndex((PrevIndex) => (PrevIndex + 1) % slides.length);
  };
  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-[420px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out  ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
          >
            <img
              src={slide}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full border-2 border-white ${
              index === activeIndex ? "bg-purple-700" : "bg-gray-300"
            }`}
            aria-current={index === activeIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-purple-800/30 group-hover:bg-white/50 dark:group-hover:bg-purple-800/60 group-focus:ring-2 group-focus:ring-white dark:group-focus:ring-purple-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-red-500 dark:text-gray-200 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-purple-800/30 group-hover:bg-white/50 dark:group-hover:bg-purple-800/60 group-focus:ring-2 group-focus:ring-white dark:group-focus:ring-purple-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-200 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
