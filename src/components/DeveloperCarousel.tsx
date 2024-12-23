"use client";

import React, { useState } from "react";

function DeveloperCarousel() {
  // Dummy developers data (replace this with real data)
  const developers = [
    {
      name: "John Doe",
      role: "Lead Developer",
      image: "https://via.placeholder.com/150",
      description:
        "John leads the development of the game with over 10 years of experience.",
    },
    {
      name: "Jane Smith",
      role: "UI/UX Designer",
      image: "https://via.placeholder.com/150",
      description:
        "Jane designs the interface to ensure an intuitive player experience.",
    },
    {
      name: "Mark Johnson",
      role: "Game Designer",
      image: "https://via.placeholder.com/150",
      description: "Mark designs levels, mechanics, and overall gameplay.",
    },
    {
      name: "Sarah Williams",
      role: "Backend Developer",
      image: "https://via.placeholder.com/150",
      description:
        "Sarah works on the server-side architecture and multiplayer features.",
    },
    {
      name: "Alex Brown",
      role: "Sound Designer",
      image: "https://via.placeholder.com/150",
      description:
        "Alex creates sound effects and music to enhance the game's atmosphere.",
    },
  ];

  // State to keep track of the current index of the developers to be shown
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next set of 3 developers
  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % developers.length);
  };

  // Move to the previous set of 3 developers
  const prev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + developers.length) % developers.length
    );
  };

  // Function to get the 3 developers based on the current index
  const getVisibleDevelopers = () => {
    return [
      developers[currentIndex % developers.length],
      developers[(currentIndex + 1) % developers.length],
      developers[(currentIndex + 2) % developers.length],
    ];
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Meet Our Developers
      </h2>

      <div className="relative overflow-hidden">
        {/* Carousel Wrapper */}
        <div className="flex space-x-6 transition-transform duration-500 ease-in-out">
          {/* Developer Cards */}
          {getVisibleDevelopers().map((developer, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col w-full sm:w-80"
            >
              {/* Developer Image */}
              <img
                src={developer.image}
                alt={developer.name}
                className="w-full h-48 object-cover"
              />

              {/* Developer Info */}
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">
                  {developer.name}
                </h3>
                <p className="text-gray-600">{developer.role}</p>
                <p className="text-gray-500 mt-2">{developer.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Left and Right Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full shadow-md"
        >
          &#8592;
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full shadow-md"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default DeveloperCarousel;
