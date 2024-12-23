import React from "react";
import DescriptionSection from "./DescriptionSection";

const FunctionalView = () => {
  return (
    <section id="FunctionalView">
      <div className="functional-view flex flex-col items-center justify-center min-h-[80vh] dark-background">
        <DescriptionSection
          title="Design Pillars"
          subtitle="Principles"
          description=""
        />

        <div className="functional-cards-container flex flex-wrap justify-center gap-8 px-4">
          {/* Together & Building */}
          <div className="functional-card max-w-xs flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="image/Community.webp"
              alt="Together & Building"
              className="w-full h-56 object-cover"
            />
            <h3 className="functional-card-title text-xl font-semibold mt-4 mb-2">
              Community Support
            </h3>
            <p className="functional-card-description text-center text-sm px-4 mb-4">
              Two characters, one humanoid and one animal-like companion, work
              together to construct a bridge in a vibrant, lush jungle. The
              atmosphere radiates teamwork and unity.
            </p>
          </div>

          {/* Story & Nature */}
          <div className="functional-card max-w-xs flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="image/Nature.webp"
              alt="Story & Nature"
              className="w-full h-56 object-cover"
            />
            <h3 className="functional-card-title text-xl font-semibold mt-4 mb-2">
              Story & Nature
            </h3>
            <p className="functional-card-description text-center text-sm px-4 mb-4">
              A serene view of a glowing forest with ancient ruins. Two
              characters reflect on their journey amidst mysterious wildlife and
              a magical sunset.
            </p>
          </div>

          {/* Fight & Jumping */}
          <div className="functional-card max-w-xs flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="image/Fight.webp"
              alt="Fight & Jumping"
              className="w-full h-56 object-cover"
            />
            <h3 className="functional-card-title text-xl font-semibold mt-4 mb-2">
              Fight & Jumping
            </h3>
            <p className="functional-card-description text-center text-sm px-4 mb-4">
              High-energy combat scene featuring two characters battling robotic
              enemies in a futuristic naturalistic setting. Sparks and action
              light up the dark background.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunctionalView;
