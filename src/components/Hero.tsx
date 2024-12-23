"use client";

import Link from "next/link";
import SocialMediaContainer from "./SocialMediaContainer";

function Heros() {
  return (
    <section id="Home">
      <div className="relative w-full py-12 min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 md:block hidden"
          style={{
            backgroundImage: "url('/image/hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            height: "100%",
            width: "100%",
            opacity: 0.8, // Set the desired opacity
          }}
        ></div>

        {/* Overlay for text contrast */}
        <div className="absolute inset-0 z-10"></div>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-20 gap-6 lg:gap-12">
          {/* Image Section */}
          <div
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            style={{
              opacity: 1, // Default opacity
            }}
          >
            <img
              src="/image/game.webp"
              alt="Game Preview"
              className="rounded-lg shadow-lg max-w-full h-auto md:opacity-0 md:bg-black"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Hero Header */}
            <h1
              className="text-4xl lg:text-6xl font-extrabold leading-tight mb-4 antialiased font-sans"
              style={{
                // color: "#ffdfa0", // Light Gold
                textShadow: "4px 4px 6px rgba(255, 255, 255, 0.4)",
              }}
            >
              Game Chisel <br />
            </h1>

            {/* Hero Subheading */}
            <p
              className="text-lg md:text-xl font-semibold mb-6 antialiased font-sans uppercase"
              style={{
                // color: "#d4af37", // Golden Text
                textShadow: "4px 4px 6px rgba(255, 255, 255, 0.4)",
              }}
            >
              3D Stylized Platformer Game & Assets
            </p>

            {/* Extra */}
            <Link
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              href={"/#home"}
            >
              Get It Now
            </Link>

            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Heros;
