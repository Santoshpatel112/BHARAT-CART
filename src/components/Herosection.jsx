
import React, { useState, useEffect } from 'react';

function HeroSection() {
  const images = [
    'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=600',
 
    'https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/Unrec/Xmas/1-1._CB537928780_.jpg',
    'https://wallpapercave.com/wp/wp3537552.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2400);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden">
      <div className="flex justify-center items-center">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-[400px] object-cover"
        />
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 text-lg"
        onClick={handlePrev}
      >
        &#10094;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 text-lg"
        onClick={handleNext}
      >
        &#10095;
      </button>
    </div>
  );
}

export default HeroSection;