import React, { useState, useEffect } from 'react';
import thumbsUp from '../assets/thumbs-up.png';
import noThumbs from '../assets/no-thumbs.png';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(thumbsUp);

  // Image rotation effect
  useEffect(() => {
    const images = [thumbsUp, noThumbs];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setCurrentImage(images[index]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#ffc300] min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8">
        {/* Text Section */}
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4">
            Hey, I’m Dhruv Pancholi 👋
          </h1>
          <p className="text-3xl">
            Web Developer <span className="font-semibold">AND</span> Aspiring Web3 Dev
          </p>
        </div>
        
        {/* Enlarged and Shifted Image */}
        <div className="ml-auto mr-[-100px]"> {/* Shift image more to the right */}
          <img
            src={currentImage}
            alt="Dhruv Pancholi"
            className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
