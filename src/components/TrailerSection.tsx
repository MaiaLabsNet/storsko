import React from "react";
import DescriptionSection from "./DescriptionSection";

const TrailerSection = () => {
  return (
    <section id="Trailer">
      <div className="w-full text-white py-8 flex flex-col items-center bg-opacity-0 w-full h-full">
        {/* bg-[#0b0b0b] */}
        {/* Header */}
        <DescriptionSection title="Trailer" subtitle="Watch" description="" />
        {/* Video Embed */}
        <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/uZWOpy-tsGk"
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default TrailerSection;
