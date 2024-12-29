"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const CircularTechElements = () => {
  const allTexts = [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "GraphQL",
    "MongoDB",
    "AWS",
    "TypeScript",
  ];

  const [visiblePairs, setVisiblePairs] = useState([]);

  useEffect(() => {
    // Initialize pairs
    const initialPairs = generatePairs(allTexts.slice(0, 3));
    setVisiblePairs(initialPairs);

    const interval = setInterval(() => {
      const newPairs = generatePairs(getRandomTexts(allTexts, 3));
      setVisiblePairs(newPairs);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full bg-white flex justify-center items-center overflow-hidden">
      {/* Character Image */}
      <div className="z-10 h-full flex justify-center items-center">
        <Image
          src="/hero.png" // Replace with your character image path
          alt="Anime character"
          width={266}
          height={266}
          className="rounded-full"
        />
      </div>

      {/* Animated Concentric Circles */}
      <div className="absolute z-0 flex justify-center items-center h-full animate-spin-slow">
      <div className="z-0 absolute w-52 h-52 bg-[#b8ff66] rounded-full opacity-10 animate-slow-ping "></div>
        <svg width="500" height="500" className="opacity-50">
          <circle
            cx="250"
            cy="250"
            r="166"
            stroke="#b8ff66"
            strokeWidth="2"
            fill="none"
          />
      
          <circle
            cx="250"
            cy="250"
            r="124.5"
            stroke="#b8ff66"
            strokeDasharray="5,5"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="250"
            cy="250"
            r="83"
            stroke="#b8ff66"
            strokeWidth="1"
            fill="none"
          />
          {/* Radar Needle */}
          <line
            x1="250"
            y1="250"
            x2="250"
            y2="83"
            stroke="#b8ff66"
            strokeWidth="3"
            className="origin-center animate-rotate-needle"
          />
        </svg>
      </div>

      

      {/* Rotating Text */}
      <div className="absolute w-[250] h-[250] ">
        {visiblePairs.map((pair, index) => (
          <div
            key={index}
            className="absolute bg-[#b8ff66] text-white px-4 py-2 rounded-full shadow-md transition-all duration-1000 opacity-100 scale-100"
            style={{
              left: `${pair.position.x}px`,
              top: `${pair.position.y}px`,
              transform: "translate(-10%, -10%)",
            }}
          >
            {pair.text}
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to generate pairs of text and positions
const generatePairs = (texts) => {
  return texts.map((text) => ({
    text,
    position: generateRandomPosition(),
  }));
};

// Function to get random texts that are not currently visible
const getRandomTexts = (allTexts, count) => {
  const shuffled = [...allTexts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Function to generate random positions
const generateRandomPosition = () => {
  const radius = 200;
  const angle = Math.random() * 2 * Math.PI; // Random angle
  const center = { x: 250, y: 250 };

  return {
    x: center.x + radius * Math.cos(angle),
    y: center.y + radius * Math.sin(angle),
  };
};

export default CircularTechElements;
