import React, { useEffect, useState } from "react";
import B1 from "../Images/Banner1.jpg";
import B2 from "../Images/Banner2.jpg";

const ImageSlider = () => {
  const images = [B1, B2, B1, B2, B1];
  const slides = [...images, images[0]];

  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  const [paused, setPaused] = useState(false);

  // Auto slide
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  // Seamless loop reset
  useEffect(() => {
    if (index === images.length) {
      setTimeout(() => {
        setTransition(false);
        setIndex(0);
      }, 700);
    } else {
      setTransition(true);
    }
  }, [index, images.length]);

  return (
    <div
      className="
        relative w-full overflow-hidden
        h-[38vh] sm:h-[45vh] md:h-[60vh] lg:h-[75vh]
      "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: transition ? "transform 0.7s ease-in-out" : "none",
        }}
      >
        {slides.map((src, i) => (
          <div key={i} className="w-full h-full flex-shrink-0 relative">
            <img
              src={src}
              alt={`banner-${i}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
              <h2
                className="
                  text-white font-bold text-center
                  text-xl sm:text-2xl md:text-4xl lg:text-6xl
                "
              >
                Premium Ethnic Collection
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`rounded-full transition
              w-2 h-2 sm:w-3 sm:h-3
              ${index % images.length === i ? "bg-white scale-125" : "bg-white/50"}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;