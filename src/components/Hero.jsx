import React, { useState, useEffect } from "react";
import thumbsUp from "../assets/no-thumbs.png"; // Thumbs-up image
import memeTopLeft from "../assets/meme-top-left.png"; // Top-left meme image
import meme1 from "../assets/1m.png"; // Meme 1
import meme2 from "../assets/2m.png"; // Meme 2
import meme3 from "../assets/3m.png"; // Meme 3
import meme4 from "../assets/4m.png"; // Meme 4
import meme5 from "../assets/5m.png"; // Meme 5
import "./Hero.css";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const typingWords = ["19 Year's Old","BTECH 2nd Year","Problem Solver", "DSA in C++", "Aspiring Web-3 Dev",];
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typing effect
  useEffect(() => {
    const currentWord = typingWords[typingIndex];
    const typingEffect = setTimeout(() => {
      if (!isDeleting && typedText.length < currentWord.length) {
        setTypedText(currentWord.slice(0, typedText.length + 1));
        setTypingSpeed(100);
      } else if (isDeleting && typedText.length > 0) {
        setTypedText(currentWord.slice(0, typedText.length - 1));
        setTypingSpeed(50);
      } else if (!isDeleting && typedText.length === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && typedText.length === 0) {
        setIsDeleting(false);
        setTypingIndex((typingIndex + 1) % typingWords.length);
      }
    }, typingSpeed);

    return () => clearTimeout(typingEffect);
  }, [typedText, isDeleting, typingWords, typingIndex, typingSpeed]);

  return (
    <section className="bg-[#ffdb15] min-h-screen relative flex flex-col md:flex-row-reverse items-center justify-center overflow-hidden">
      {/* Top-Left Meme with Animation */}
      <div className="absolute top-5 left-5 flex items-center space-x-3 animate-bounce-slow">
        <img src={memeTopLeft} alt="Meme Top Left" className="w-16 h-16 md:w-20 md:h-20" />
        <p className="text-sm md:text-lg font-bold text-gray-800">He is a so-called web Dev</p>
      </div>

      {/* Scrolling Meme Animation */}
      <div className="absolute right-5 top-0 bottom-0 w-[100px] overflow-hidden">
        <div className="flex flex-col animate-scroll-memes space-y-5">
          {[meme1, meme2, meme3, meme4, meme5].map((meme, index) => (
            <img
              key={index}
              src={meme}
              alt={`Meme ${index + 1}`}
              className="w-24 h-24 md:w-28 md:h-28 object-contain"
            />
          ))}
          {/* Repeat memes for seamless loop */}
          {[meme1, meme2, meme3, meme4, meme5].map((meme, index) => (
            <img
              key={index + 5}
              src={meme}
              alt={`Meme ${index + 6}`}
              className="w-24 h-24 md:w-28 md:h-28 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center justify-between px-5 md:ml-0">
        {/* Static Thumbs-Up Image Section */}
        <div className="relative flex-1 flex justify-center animate-slide-up">
  {/* Curved Background */}
  <div
    className="absolute w-[200px] h-[300px] sm:w-[200px] sm:h-[200px] md:w-[400px] md:h-[400px] 
    rounded-full bg-gradient-to-r from-yellow-200 via-yellow-600 to-orange-600 blur-xl -z-10"
  ></div>

  {/* Thumbs-Up Image */}
  <img
    src={thumbsUp}
    alt="Dhruv Pancholi"
    className="w-[180px] h-[280px] sm:w-[180px] sm:h-[280px] md:w-[400px] md:h-[650px] glowing-edges "
  />
</div>


        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6 animate-slide-left">
          <p className="text-3xl md:text-4xl font-bold text-white">Dhruv Pancholi</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-black">Web Developer</h1>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black">
            & {typedText}
          </h1>
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <button className="px-6 py-2 bg-purple-700 text-white rounded-full font-semibold hover:neon-effect transition-all duration-300">
              See My Work
            </button>
            <button className="px-6 py-2 bg-white border-2 border-purple-700 text-purple-700 rounded-full font-semibold hover:neon-effect transition-all duration-300">
              Give HI 👋
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
