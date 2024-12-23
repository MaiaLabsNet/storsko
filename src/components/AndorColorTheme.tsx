import React from "react";

const AndorColorTheme = () => {
  const colors = [
    {
      name: "Charcoal Black",
      hex: "#1C1C1C",
      description:
        "Dark and grounded, perfect for backgrounds or major sections.",
      usage: "Backgrounds, major sections",
    },
    {
      name: "Gunmetal Gray",
      hex: "#4A4E69",
      description:
        "Neutral gray with a metallic feel, ideal for headers and dividers.",
      usage: "Headers, cards, dividers",
    },
    {
      name: "Rustic Bronze",
      hex: "#A9714B",
      description: "Muted metallic bronze for accents and hover effects.",
      usage: "Buttons, hover effects, accents",
    },
    {
      name: "Muted Olive Green",
      hex: "#6C7A62",
      description:
        "A weathered green for subheadings or call-to-action elements.",
      usage: "Subheadings, call-to-action",
    },
    {
      name: "Crimson Red",
      hex: "#D72638",
      description: "Bold red for critical elements or warnings.",
      usage: "Critical buttons, warnings",
    },
    {
      name: "Amber Gold",
      hex: "#FFB400",
      description: "Restrained gold for emphasis on interactive elements.",
      usage: "Interactive elements, hover animations",
    },
    {
      name: "Off-White",
      hex: "#EDEDED",
      description:
        "Readable and neutral, great for text and secondary sections.",
      usage: "Body text, secondary sections",
    },
  ];

  return (
    <section className="bg-[#1C1C1C] text-white py-10 px-8">
      <h2 className="text-4xl font-bold text-center mb-8">Andor Color Theme</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {colors.map((color) => (
          <div
            key={color.name}
            className="rounded-xl p-4 flex flex-col items-center border border-gray-700"
            style={{
              backgroundColor: color.hex,
              color: color.name === "Charcoal Black" ? "#EDEDED" : "white",
            }}
          >
            <div
              className="w-16 h-16 rounded-full mb-4"
              style={{ backgroundColor: color.hex, border: "2px solid white" }}
            ></div>
            <h3 className="text-xl font-bold mb-2">{color.name}</h3>
            <p className="text-sm text-gray-300 mb-4">{color.description}</p>
            <span className="text-xs bg-gray-800 px-2 py-1 rounded-lg">
              Usage: {color.usage}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AndorColorTheme;
