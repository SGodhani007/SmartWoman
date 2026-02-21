import React, { useEffect, useState } from "react";
import B1 from "../Images/Banner1.jpg";
import B2 from "../Images/Banner2.jpg";

const ImageSlider = () => {
  const images = [B1, B2, B1, B2, B1];

  // clone first slide for seamless loop
  const slides = [...images, images[0]];

  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  const [paused, setPaused] = useState(false);

  // auto slide
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  // reset when reaching cloned slide
  useEffect(() => {
    if (index === images.length) {
      setTimeout(() => {
        setTransition(false);
        setIndex(0);
      }, 700); // same as transition duration
    } else {
      setTransition(true);
    }
  }, [index, images.length]);

  return (
    <div
      className="relative w-full h-[90vh] overflow-hidden"
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
          <div key={i} className="w-full h-[90vh] flex-shrink-0 relative">
            <img
              src={src}
              alt={`banner-${i}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h2 className="text-white text-4xl md:text-6xl font-bold text-center">
                Premium Ethnic Collection
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              index % images.length === i
                ? "bg-white scale-125"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;