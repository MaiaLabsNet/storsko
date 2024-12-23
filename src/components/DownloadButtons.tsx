"use client";

import React from "react";

import { FaSteam, FaGooglePlay } from "react-icons/fa";
import {
  SiEpicgames,
  SiPlaystation,
  SiBox,
  SiItchdotio,
  SiNintendoswitch,
} from "react-icons/si";
import { AiFillApple } from "react-icons/ai";

const platforms = [
  {
    id: 1,
    name: "EPIC Store",
    icon: <SiEpicgames size={32} />,
    color: "bg-purple-600 hover:bg-purple-700",
    url: "https://www.epicgames.com/store",
  },
  {
    id: 2,
    name: "Steam",
    icon: <FaSteam size={32} />,
    color: "bg-gray-900 hover:bg-gray-800",
    url: "https://store.steampowered.com/",
  },
  {
    id: 3,
    name: "PlayStation Store",
    icon: <SiPlaystation size={32} />,
    color: "bg-blue-700 hover:bg-blue-800",
    url: "https://store.playstation.com/",
  },
  {
    id: 4,
    name: "Xbox Store",
    icon: <SiBox size={32} />,
    color: "bg-green-600 hover:bg-green-700",
    url: "https://www.microsoft.com/en-us/store/xbox",
  },
  {
    id: 5,
    name: "Apple App Store",
    icon: <AiFillApple size={32} />,
    color: "bg-gray-200 text-black hover:bg-gray-300",
    url: "https://apps.apple.com/",
  },
  {
    id: 6,
    name: "Google Play Store",
    icon: <FaGooglePlay size={32} />,
    color: "bg-green-500 hover:bg-green-600",
    url: "https://play.google.com/store",
  },
  {
    id: 7,
    name: "Itch.io",
    icon: <SiItchdotio size={32} />,
    color: "bg-orange-600 hover:bg-orange-700",
    url: "https://itch.io/",
  },
  {
    id: 8,
    name: "Nintendo Switch",
    icon: <SiNintendoswitch size={32} />,
    color: "bg-red-600 hover:bg-red-700",
    url: "https://www.nintendo.com/",
  },
];

function DownloadButtons() {
  return (
    <section className="flex flex-col items-center justify-center p-6 space-y-8">
      <h2 className="text-4xl font-bold text-white mb-4">Download From</h2>
      {/* Buttons in a grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-md">
        {platforms.map((platform) => (
          <a
            key={platform.id}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 w-full text-white text-center py-4 rounded-lg transition duration-200 ${platform.color}`}
          >
            <div className="flex items-center justify-center w-10 h-10">
              {platform.icon}
            </div>
            <span className="font-semibold">{platform.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default DownloadButtons;
